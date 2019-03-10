Page({
  data: {
    "data1": "huangweifeng"
  },
  denglu: function () {
    wx.login({
      success: function (res) {
        console.log("login success", res)
        wx.getUserInfo({
          success: function (res) {
            console.log("getUserInfo success", res)
            wx.setStorageSync(res.iv, res.rawData)
          },
          fail: function (res) {
            console.log("getUserInfo fail", res)
          }
        })
      },
      fail: function (res) {
        console.log("login fail", res)
      }
    })
  },
  onTap: function () {
    wx.navigateTo({
      url: '../posts/posts'
    })

    // wx.redirectTo({
    //   url: '../posts/posts'
    // })
  },
  onHide: function () {
    console.log("welcome page is hide")
  },

  onUnload: function () {
    console.log("welcome page is unload")
  },


})