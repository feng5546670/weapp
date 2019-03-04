// pages/cyxx/cyxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userxx:[
    ]
  },
  bj:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/bjdz/bjdz',
    })
  },
  Tap:function(e){
    console.log("Tap",e)
  },
  tjdz:function(e){

    wx.navigateTo({
      url: '/pages/bjdz/bjdz',
    })
    // wx.chooseAddress({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = JSON.parse(options.data)

    let userxx=this.data.userxx||[]
    userxx.unshift(data)
    console.log(userxx)
    this.setData({
      userxx:userxx
    })
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