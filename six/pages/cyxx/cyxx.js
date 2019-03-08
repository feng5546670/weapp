// pages/cyxx/cyxx.js
var userxx =  []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/images/i01.png',
    userxx:'',
    openid:'',
    // id:'',
  },
  bj:function(e){
    var id = e.currentTarget.dataset.id
    var ux = JSON.stringify(this.data.userxx[id])

    wx.redirectTo({
      url: '/pages/bjdz/bjdz?data='+ux,
    })
  },
  Tap:function(e){
    // this.setData({
    //   id: e.currentTarget.dataset.id
    // })
  },
  mr:function(e){
  
    var id = e.currentTarget.dataset.id
    console.log(id)
    var text = "userxx[" + id + "].text"
    var src = "userxx[" + id + "].src"
    var mr = "userxx[" + id + "].mr"
    var _id=this.data.userxx[id]._id
    
    if(this.data.mr){
      this.setData({
        [src]:'/images/i01.png',
        [text]: '设置默认',
        [mr]:false
      })
      console.log(this.data.userxx)
      const db = wx.cloud.database()
      db.collection('userdata').doc(_id).update({
        data: {
          src: this.data.userxx.src,
          text: this.data.userxx.text,
          mr: this.data.userxx.src
        },
        success: (res) => {
          console.log(res)
          this.onLoad()
        }
      })

    } else{
      this.setData({
        [src]: '/images/i02.png',
        [text]: '默认',
        [mr]: true
      })
      const db = wx.cloud.database()
      db.collection('userdata').doc(_id).update({
        data: {
          src: this.data.userxx.src,
          text: this.data.userxx.text,
          mr:this.data.userxx.mr
        },
        success: (res) => {
          console.log(res)
          this.onLoad()
        }
      })
      console.log(this.data.userxx)
    }






    
  },
  de:function(e){
    //删除云函数
    wx.showModal({
      title: '提示',
      content: '确定删除?',
      complete:  (res)=> {
        if(res.confirm){
          var id = e.currentTarget.dataset.id
          var _id = this.data.userxx[id]._id
          const db = wx.cloud.database()
          db.collection('userdata').doc(_id).remove({
            success: res => {
              // console.log(res)
              this.onLoad()
            }
          })
        }
      }
    })





  },
  tjdz:function(e){

    wx.redirectTo({
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

    //接收数据
    // if(options.data){
    //   var data = JSON.parse(options.data)
    //   userxx.unshift(data)
    //   console.log(userxx)
    //   this.setData({
    //     userxx: userxx
    //   })
    // }

    //查询openid
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        this.setData({
          openid: res.result.openid
        })
        // console.log(this.data.openid)
      }
    })


    //查询云函数
    const db = wx.cloud.database()
    db.collection('userdata').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        console.log(res.data)
        this.setData({
          userxx:res.data
        })
      }
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