// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wx:['甲醛维修','其它问题','开锁换锁','家电清洗','美边美缝','美缝美角','家庭美缝','油漆墙面'],
    imgUrls: [
      'https://hartfeng-d1e6c9.tcb.qcloud.la/0e634e975705a6326a8ae7fc833760c7.jpg?sign=6415af020d02187f6cb4de67ada4f81a&t=1551167389',
      'https://hartfeng-d1e6c9.tcb.qcloud.la/0e634e975705a6326a8ae7fc833760c7.jpg?sign=6415af020d02187f6cb4de67ada4f81a&t=1551167389',
      'https://hartfeng-d1e6c9.tcb.qcloud.la/0e634e975705a6326a8ae7fc833760c7.jpg?sign=6415af020d02187f6cb4de67ada4f81a&t=1551167389'
    ],
    functions: [
      {
        url: '../../images/i01.png',
        name: '甲醛检测',
        id: '01'
      },
      {
        url: '../../images/i02.png',
        name: '开锁换锁',
        id: '02'
      },
      {
        url: '../../images/i03.png',
        name: '美边美缝',
        id: '03'
      },
      {
        url: '../../images/i04.png',
        name: '保洁清洗',
        id: '04'
      },
      {
        url: '../../images/i05.png',
        name: '水电维修',
        id: '05'
      },
      {
        url: '../../images/i06.png',
        name: '装潢维修',
        id: '06'
      },
      {
        url: '../../images/i05.png',
        name: '管道维修',
        id: '07'
      },
      {
        url: '../../images/i06.png',
        name: '家电清洗',
        id: '08'
      },
    ]
  },
  fucClick:function(){
    wx.navigateTo({
      url: '',
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