//aboutme.js

//获取应用实例
const app = getApp()

Page({
  data: {
    info: {
      id: 1,
      title: "aaaaaaa",
      img: "../../image/a.png",
      c_time: "2018-9-25-13:25",
      content: "科技以人为本，是老牌手机厂商诺基亚的一句广告语，这也是王老菊未来科技有限公司的 核心价值观。作为一个新生代的互联网公司，领导人王老菊紧随时代，大力发展O2O产业，坚持以创新为主要发展方向，以品质为公司基石，开发出了第一代RBQ飞机杯(代号：酒吧) ，第二代RBQ飞机杯(代号：小刀) "
    }

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})