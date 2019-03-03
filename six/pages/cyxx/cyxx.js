// pages/cyxx/cyxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userxx: [{
      id:1,
      username: '黄巍峰',
      phone: '18589080157',
      address: '广东省广州市海珠区客村TIT创意园微信总部b4'
    },
    {
      id:2,
      username: '黄巍峰',
      phone: '18589080157',
      address: '广东省广州市海珠区客村TIT创意园微信总部b4'
    },
      {
        id:3,
        username: '黄巍峰',
        phone: '18589080157',
        address: '广东省广州市海珠区客村TIT创意园微信总部b4'
      },
      {
        id:4,
        username: '黄巍峰',
        phone: '18589080157',
        address: '广东省广州市海珠区客村TIT创意园微信总部b4'
      }
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