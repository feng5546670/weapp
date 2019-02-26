function requesturl(s1) {
  wx.request({
    url: 'https://www.baidu.com',
    data: {
      content: "test request"
    },
    success: function (res) {
      s1(res);
    }
  })
}
function requestheader1(s1) {
  wx.request({
    url: 'https://stream.weixin.qq.com/weapp/SendMsg',
    method: "POST",
    data: {
      content: "test request"
    },
    header: {
      "Content-Type": "application/json"
    },
    success(res) {
      s1(res);
    }
  })
  function requestheader2(s1) {
    wx.request({
      url: 'https://stream.weixin.qq.com/weapp/SendMsg',
      method: "POST",
      data: {
        content: "test request"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        s1(res);
      }
    })
  }
}
if(e){
  this.setData({
    'objectArray[0].result': ''
  })
}else{
  
}
// c11: function (e) {
//   if (e) {
//     this.setData({
//       'objectArray[11].result': ''
//     })
//     wx.connectSocket({
//       url: "wss://stream.weixin.qq.com/wsweapp/SendMsg",
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('connectsocket  通过')
//           this.setData({
//             'objectArray[11].result': '通过'
//           })
//         } else {
//           console.log('connectsocket  失败')
//           this.setData({
//             'objectArray[11].result': '失败'
//           })
//           console.log(res)
//         }
//       }
//     })
//   } else {
//     var timer11 = setTimeout(() => {
//       this.setData({
//         'objectArray[11].result': '超时'
//       })
//       this.c12()
//     }, 3000)
//     wx.connectSocket({
//       url: "wss://stream.weixin.qq.com/wsweapp/SendMsg",
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('connectsocket  通过')
//           this.setData({
//             'objectArray[11].result': '通过'
//           })
//         } else {
//           console.log('connectsocket  失败')
//           this.setData({
//             'objectArray[11].result': '失败'
//           })
//           console.log(res)
//         }
//         clearTimeout(timer11)
//         this.c12()
//       }
//     })
//   }
// },
// c12: function(e) {
//   if (e) {
//     this.setData({
//       'objectArray[12].result': ''
//     })
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/RespondArguments?content=a%2Fb',
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('querytsocket  通过')
//           this.setData({
//             'objectArray[12].result': '通过'
//           })
//         } else {
//           console.log('querytsocket  失败')
//           this.setData({
//             'objectArray[12].result': '失败'
//           })
//           console.log(res)
//         }
//       }
//     })
//   } else {
//     var timer12 = setTimeout(() => {
//       this.setData({
//         'objectArray[12].result': '超时'
//       })
//       this.c13()
//     }, 3000)
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/RespondArguments?content=a%2Fb',
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('querytsocket  通过')
//           this.setData({
//             'objectArray[12].result': '通过'
//           })
//         } else {
//           console.log('querytsocket  失败')
//           this.setData({
//             'objectArray[12].result': '失败'
//           })
//           console.log(res)
//         }
//         clearTimeout(timer12)
//         this.c13()
//       }
//     })
//   }
// },
// c13: function(e) {
//   if (e) {
//     this.setData({
//       'objectArray[13].result': ''
//     })
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
//       tcpNoDelay: true,
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('tcpNoDelaySocket  通过')
//           this.setData({
//             'objectArray[13].result': '通过'
//           })
//         } else {
//           console.log('tcpNoDelaytSocket  失败')
//           this.setData({
//             'objectArray[13].result': '失败'
//           })
//           console.log(res)
//         }
//       }
//     })
//   } else {
//     var timer13 = setTimeout(() => {
//       this.setData({
//         'objectArray[13].result': '超时'
//       })
//       this.c14()
//     }, 3000)
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
//       tcpNoDelay: true,
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('tcpNoDelaySocket  通过')
//           this.setData({
//             'objectArray[13].result': '通过'
//           })
//         } else {
//           console.log('tcpNoDelaytSocket  失败')
//           this.setData({
//             'objectArray[13].result': '失败'
//           })
//           console.log(res)
//         }
//         clearTimeout(timer13)
//         this.c14()
//       }
//     })
//   }
// },
// c14: function(e) {
//   if (e) {
//     this.setData({
//       'objectArray[14].result': ''
//     })
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('stringSocket 通过')
//           this.setData({
//             'objectArray[14].result': '通过'
//           })
//         } else {
//           console.log('stringSocket 失败')
//           this.setData({
//             'objectArray[14].result': '失败'
//           })
//           console.log(res)
//         }
//       }
//     })
//   } else {
//     var timer14 = setTimeout(() => {
//       this.setData({
//         'objectArray[14].result': '超时'
//       })
//       this.c15()
//     }, 3000)
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
//       success: (res) => {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('stringSocket 通过')
//           this.setData({
//             'objectArray[14].result': '通过'
//           })
//         } else {
//           console.log('stringSocket 失败')
//           this.setData({
//             'objectArray[14].result': '失败'
//           })
//           console.log(res)
//         }
//         clearTimeout(timer14)
//         this.c15()
//       }
//     })
//   }
// },
// c15: function(e) {
//   if (e) {
//     this.setData({
//       'objectArray[0].result': ''
//     })

//   } else {
//     wx.connectSocket({
//       url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
//       success(res) {
//         if (res.errMsg == "connectSocket:ok") {
//           console.log('sendArrayBuffer 通过')

//         } else {
//           console.log('sendArrayBuffer  失败')
//         }
//       }
//     })
//     wx.onSocketMessage(function (res) {
//       console.log(res)
//     })
//   }
// },
module.exports = {
  requesturl: requesturl
}