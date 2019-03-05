// pages/bjdz/bjdz.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择', '请选择', '请选择'],
    userxx:{
    }
  },
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value[0] + e.detail.value[1] + e.detail.value[2])
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit: function (e) {
    // 上传到云函数
    const db=wx.cloud.database()
    db.collection('userdata').add({
      data:{
        name:e.detail.value.username,
        phone: e.detail.value.phone,
        address: e.detail.value.picker[0] + e.detail.value.picker[1] + e.detail.value.picker[2] + e.detail.value.textarea,
      },
      success:(res)=>{
        console.log(res)
        wx.navigateTo({
          url: '/pages/cyxx/cyxx',
        })
      }
    })
  

    // 传递数据
    // this.setData({
    //   'userxx.username':e.detail.value.username,
    //   'userxx.phone':e.detail.value.phone,
    //   'userxx.address': e.detail.value.picker[0] + e.detail.value.picker[1] + e.detail.value.picker[2] + e.detail.value.textarea
    // })
    // var temp=JSON.stringify(this.data.userxx)
    // wx.navigateTo({
    //   url: '/pages/cyxx/cyxx?data='+temp,
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