//aboutme.js

//获取应用实例
const app = getApp()

Page({
  data: {
    text:"这里是内容",
    x_text:"哈韩啊汗昂昂",
    show: true,
    li: ['aaa', 'bbb', 'ccc','ddd'],//注意数组外不要加双引号,否则导致多次循环
    news_lists: [
      {
        id: 1,
        title: "aaaaaaa",
        img: "../../image/a.png",
        c_time: "2018-9-25-13:25"
      },
      {
        id: 2,
        title: "bbbbbbbbbbb",
        img: "../../image/a1.png",
        c_time: "2018-9-25-13:25"
      },
      {
        id: 3,
        title: "cccccc",
        img: "../../image/a2.png",
        c_time: "2018-9-25-13:25"
      },
      {
        id: 4,
        title: "ddddddddddddd",
        img: "../../image/a3.png",
        c_time: "2018-9-25-13:25"
      }

    ],

    

  },
  btn_click: function () {
    console.log("按钮被点击;了");
    var li_data = this.data.li;
     li_data.shift();//动态数组清空
    var is_show = this.data.show;
    this.setData({ text: "我操你阿妈", show: !is_show ,li:li_data});
    console.log("is_show: "+ is_show);
  },

  view1_click:function(event){
    console.log("爷爷死了");
    console.log(event);
  },
  view2_click: function (event) {
    console.log("爸爸死了");
    console.log(event);
  },
  view3_click: function (event) {
    console.log("儿子死了");
    console.log(event);
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