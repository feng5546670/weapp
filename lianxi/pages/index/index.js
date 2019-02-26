// pages/index/index.js
var url=require('../../util/config.js')
var pageNum=1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingMore:false,
    loadingOver:false,
      data:[],
 
  },
  blur:function(e){
    this.value=e.detail.value
  },
  test:function(){
    let test1=wx.getStorageSync('test1')||[]
    test1.unshift(this.value)
    wx.setStorageSync("test1",test1)
  },
  na:function(){
    wx.navigateTo({
      url: '/pages/storage/storage',
    })
  },
jump:function(e){
var id=e.currentTarget.id
var temp = JSON.stringify(this.data.data[id])
console.log(id)
console.log(temp)
wx.navigateTo({
  url: '/pages/jump/jump?data='+temp,
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.request()
    wx.showLoading({
      title: '加载中',
    })
  },
  request:function(){
    var time = new Date().getTime()
    // var appid = 85108;
    // var secret = "77683ba6ed36dc3e647facb5b2f7643a"
    var self = this
    wx.request({
      url: url.textJoke,
      data: {
        // showapi_appid: appid,
        // showapi_sign: secret
        page:pageNum,
        maxResult:40
      },
      success: function (res) {
        console.log(res);
        var data =res.data.showapi_res_body.contentlist;
        var length=data.length;
        if(length==0){
          self.setData({
            loadingMore:false,
            loadingOver:true
          });
          // return;
        }
        var list=self.data.data.concat(data);
        for(var i=0;i<data.length;i++){
          data[i].text=self.removeHtml(data[i].text);
        }
        self.setData({
          data:list,
          loadingMore: false,
        });
        wx.hideLoading();
        pageNum++;
      }
    })
  },
  removeHtml: function (str) {
    return str.replace(/<[^>]+>/g, '');
  },
  onReachBottom: function () {
    this.setData({
      loadingMore: true,
      loadingOver: false,
    })
    this.request()
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


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})