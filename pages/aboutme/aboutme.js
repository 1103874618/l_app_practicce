//aboutme.js

//获取应用实例
const app = getApp()

Page({
  data: {
    img: "../../image/a.png",
    tittle: "未来科技有限公司",
    intro: "科技以人为本，是老牌手机厂商诺基亚的一句广告语，这也是王老菊未来科技有限公司的 核心价值观。作为一个新生代的互联网公司，领导人王老菊紧随时代，大力发展O2O产业，坚持以创新为主要发展方向，以品质为公司基石，开发出了第一代RBQ飞机杯(代号：酒吧) ，第二代RBQ飞机杯(代号：小刀) ，等经典产品，普遍受到了大众的一致好评，而不同价格段的飞机杯也能满足社会各界人士的需求，这就是为何王老菊未来科技的为基本能打破传统格局，甚至改变人们生活习惯的主要原因。",
   contab : "联系方式",
  adress: "地址: 草泥马 ",
  mobile : "0769-803-8888",
    email: "0769-803-8888"

  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
