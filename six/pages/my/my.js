// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
  },
  getUserInfo:function(e){
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log(res.result.openid)
        app.globalData.openid = res.result.openid
      }
      
    })

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
   
  },
  shezhi:function(){
    wx.navigateTo({
      url: '/pages/zhiliao/zhiliao',
    })
  },
  weixiu:function(){
    wx.navigateTo({
      url: '/pages/weixiu/weixiu',
    })
  },
  q1:function(){
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
    })
  },
  q3:function(){
    wx.navigateTo({
      url: '/pages/cyxx/cyxx',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else{
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})