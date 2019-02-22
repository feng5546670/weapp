// pages/shuju/shuju.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    name:'',
    phone:'',
    address:''
  },
    formSubmit: function (e) {
    console.log(e.detail.value.input)
      var fname = e.detail.value.input
      const db = wx.cloud.database()
      db.collection('anli').add({
        data: {
          name: fname
        },
        success: (res) => {
          console.log('增加成功')
        }
      })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },



add:function(){
const db=wx.cloud.database()
db.collection('anli').add({
data:{
  anme: '黄巍峰',
  phone: '18589080157',
  address: '广州市海珠区客村tit创意园'
},
success:(res)=>{
  console.log('增加成功')
}
})
},
cha:function(){
const db=wx.cloud.database()
db.collection('anli').where({
  
})
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