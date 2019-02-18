var baseutils = require("../../common/baseutils.js")
const str2ab = baseutils.str2ab
// miniprogram/cases/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [{
      id: 0,
      name: "request-url",
    },
    {
      id: 1,
      name: "request-header",

    },
    {
      id: 2,
      name: "request-dataType-text",
    },
    {
      id: 3,
      name: "request-dataType-json",
    },
    {
      id: 4,
      name: "request-reponseType"
    },
    {
      id: 5,
      name: "request-method-GET"
    },
    {
      id: 6,
      name: "request-method-POST"
    },
    {
      id: 7,
      name: "request-method-OPTIONS"
    },
    {
      id: 8,
      name: "request-method-HEAD"
    },
    {
      id:9,
      name:"request-method-PUT"
    },
    {
      id:10,
      name:"request-method-DELETE"
    },
    {
      id:11,
      name:"connectSocket"
    },
    {
      id:12,
      name:"querySocket"
    },
    {
      id:13,
      name:"tcpNoDelaySocket"
    },
    {
      id:14,
      name:"stringSocket"
    },
    {
      id:15,
      name:"send"
    }
    ],
  },
  c0: function (e) {
    if (e) {
      this.setData({
        'objectArray[0].result': ''
      })
      wx.request({
        url: "https://www.baidu.com",
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-url  通过')
            this.setData({
              'objectArray[0].result': '通过'
            })
          } else {
            console.log('request-url  失败')
            console.log(res)
            this.setData({
              'objectArray[0].result': '失败'
            })
          }
        }
      })
    } else {
      var timer0 = setTimeout(() => {
        this.setData({
          'objectArray[0].result': '超时'
        })
        this.c1()
      }, 3000)
      wx.request({
        url: "https://www.baidu.com",
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-url  通过')
            this.setData({
              'objectArray[0].result': '通过'
            })
          } else {
            console.log('request-url  失败')
            console.log(res)
            this.setData({
              'objectArray[0].result': '失败'
            })
          }
          clearTimeout(timer0)
          this.c1()
        }
      })
    }
  },
  c1: function (e) {
    if (e) {
      this.setData({
        'objectArray[1].result': ''
      })
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-header  通过')
            this.setData({
              'objectArray[1].result': '通过'
            })
          } else {
            this.setData({
              'objectArray[1].result': '通过'
            })
            console.log('request-header  失败')
            console.log(res)
          }
        }
      })
    } else {
      var timer1 = setTimeout(() => {
        this.setData({
          'objectArray[1].result': '超时'
        })
        this.c2()
      }, 3000)
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-header  通过')
            this.setData({
              'objectArray[1].result': '通过'
            })
          } else {
            this.setData({
              'objectArray[1].result': '失败'
            })
            console.log('request-header  失败')
            console.log(res)
          }
          clearTimeout(timer1)
          this.c2()
        }
      })
    }
  },
  c2: function (e) {
    if (e) {
      this.setData({
        'objectArray[2].result': ''
      })
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          content: "test request",
          dataType: "text",
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-dataType-text  通过')
            this.setData({
              'objectArray[2].result': '通过'
            })
          } else {
            console.log('request-header  失败')
            console.log(res)
            this.setData({
              'objectArray[2].result': '失败'
            })
            this.c3()
          }
        }
      })
    } else {
      var timer2 = setTimeout(() => {
        this.setData({
          'objectArray[2].result': '超时'
        })
        this.c3()
      }, 3000)
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          content: "test request",
          dataType: "text",
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-dataType-text  通过')
            this.setData({
              'objectArray[2].result': '通过'
            })
          } else {
            console.log('request-header  失败')
            console.log(res)
            this.setData({
              'objectArray[2].result': '失败'
            })
          }
          clearTimeout(timer2)
          this.c3()
        }
      })
    }

  },
  c3: function (e) {
    if (e) {
      this.setData({
        'objectArray[3].result': ''
      })
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          content: "test request",
          dataType: "json",
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-dataType-json  通过')
            this.setData({
              'objectArray[3].result': "通过"
            })
          } else {
            console.log('request-dataType-json 失败')
            this.setData({
              'objectArray[3].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer3 = setTimeout(() => {
        this.setData({
          'objectArray[3].result': '超时'
        })
        this.c4()
      }, 3000)
      wx.request({
        url: 'https://stream.weixin.qq.com/weapp/SendMsg',
        method: "POST",
        data: {
          content: "test request",
          dataType: "json",
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-dataType-json  通过')
            this.setData({
              'objectArray[3].result': "通过"
            })
          } else {
            console.log('request-dataType-json 失败')
            this.setData({
              'objectArray[2].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer3)
          this.c4()
        }
      })
    }
  },
  c4: function (e) {
    if (e) {
      this.setData({
        'objectArray[4].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/ResponseBuffer",
        method: "POST",
        data: str2ab('test request'),
        header: {
          "Content-Type": "application/json"
        },
        responseType: "arraybuffer",
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-reponseType  通过')
            this.setData({
              'objectArray[4].result': '通过'
            })
          } else {
            console.log('request-reponseType  失败')
            this.setData({
              'objectArray[4].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer4 = setTimeout(() => {
        this.setData({
          'objectArray[4].result': '超时'
        })
        this.c5()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/ResponseBuffer",
        method: "POST",
        data: str2ab('test request'),
        header: {
          "Content-Type": "application/json"
        },
        responseType: "arraybuffer",
        success: (res) => {
          if (res.errMsg == "request:ok") {
            console.log('request-reponseType  通过')
            this.setData({
              'objectArray[4].result': '通过'
            })
          } else {
            console.log('request-reponseType  失败')
            this.setData({
              'objectArray[4].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer4)
          this.c5()
        }
      })
    }
  },
  c5: function (e) {
    if (e) {
      this.setData({
        'objectArray[5].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "GET",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-get  通过')
            this.setData({
              'objectArray[5].result': "通过"
            })
          } else {
            console.log('request-method-get  失败')
            this.setData({
              'objectArray[5].result': "失败"
            })
            console.log(res)
          }
         
        }
      })

    } else {
      var timer5 = setTimeout(() => {
        this.setData({
          'objectArray[5].result': '超时'
        })
        this.c6()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "GET",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-get  通过')
            this.setData({
              'objectArray[5].result': "通过"
            })
          } else {
            console.log('request-get  失败')
            this.setData({
              'objectArray[5].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer5)
          this.c6()
        }
      })
    }
  },
  c6: function (e) {
    if (e) {
      this.setData({
        'objectArray[6].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "POST",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-post  通过')
            this.setData({
              'objectArray[6].result': "通过"
            })
          } else {
            console.log('request-method-post  失败')
            this.setData({
              'objectArray[6].result': "失败"
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer6 = setTimeout(() => {
        this.setData({
          'objectArray[6].result': '超时'
        })
        this.c7()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "POST",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-post  通过')
            this.setData({
              'objectArray[6].result': "通过"
            })
          } else {
            console.log('request-method-post  失败')
            this.setData({
              'objectArray[6].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer6)
          this.c7()
        }
      })
    }
  },
  c7: function (e) {
    if (e) {
      this.setData({
        'objectArray[7].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "OPTIONS",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-options  通过')
            this.setData({
              'objectArray[7].result': "通过"
            })
          } else {
            console.log('request-method-options  失败')
            this.setData({
              'objectArray[7].result': "失败"
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer7 = setTimeout(() => {
        this.setData({
          'objectArray[7].result': '超时'
        })
        this.c8()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "OPTIONS",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-options  通过')
            this.setData({
              'objectArray[7].result': "通过"
            })
          } else {
            console.log('request-method-options  失败')
            this.setData({
              'objectArray[7].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer7)
          this.c8()
        }
      })
    }
  },
  c8: function (e) {
    if (e) {
      this.setData({
        'objectArray[8].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "HEAD",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-head  通过')
            this.setData({
              'objectArray[8].result': "通过"
            })
          } else {
            console.log('request-method-head  失败')
            this.setData({
              'objectArray[8].result': "失败"
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer8 = setTimeout(() => {
        this.setData({
          'objectArray[8].result': '超时'
        })
        this.c9()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "HEAD",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-head  通过')
            this.setData({
              'objectArray[8].result': "通过"
            })
          } else {
            console.log('request-method-head  失败')
            this.setData({
              'objectArray[8].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer8)
          this.c9()
        }
      })
    }
  },
  c9:function(e){
    if (e) {
      this.setData({
        'objectArray[9].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "PUT",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-PUT  通过')
            this.setData({
              'objectArray[9].result':"通过"
            })
          } else {
            console.log('request-method-PUT  失败')
            this.setData({
              'objectArray[9].result': "失败"
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer9 = setTimeout(() => {
        this.setData({
          'objectArray[9].result': '超时'
        })
        this.c10()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "PUT",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-PUT  通过')
            this.setData({
              'objectArray[9].result': "通过"
            })
          } else {
            console.log('request-method-PUT  失败')
            this.setData({
              'objectArray[9].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer9)
          this.c10()
        }
      })
    }
  },
  c10:function(e){
    if (e) {
      this.setData({
        'objectArray[10].result': ''
      })
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "DELETE",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-DELETE  通过')
            this.setData({
              'objectArray[10].result':"通过"
            })
          } else {
            console.log('request-method-DELETE  失败')
            this.setData({
              'objectArray[10].result': "失败"
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer10 = setTimeout(() => {
        this.setData({
          'objectArray[10].result': '超时'
        })
        this.c11()
      }, 3000)
      wx.request({
        url: "https://stream.weixin.qq.com/weapp/SendMsg",
        method: "DELETE",
        data: {
          content: "test request"
        },
        header: {
          "Content-Type": "application/json"
        },
        success:(res)=> {
          if (res.errMsg == "request:ok") {
            console.log('request-method-DELETE  通过')
            this.setData({
              'objectArray[10].result': "通过"
            })
          } else {
            console.log('request-method-DELETE  失败')
            this.setData({
              'objectArray[10].result': "失败"
            })
            console.log(res)
          }
          clearTimeout(timer10)
          this.c11()
        }
      })
    }
  },
  c11:function (e){
    if (e) {
      this.setData({
        'objectArray[11].result': ''
      })
      wx.connectSocket({
        url: "wss://stream.weixin.qq.com/wsweapp/SendMsg",
        success:(res)=> {
          if (res.errMsg == "connectSocket:ok") {
            console.log('connectsocket  通过')
            this.setData({
              'objectArray[11].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success:(res)=>{
                  if(res.errMsg=="closeSocket:ok"){
                    console.log('closesocket 通过')
                  }else{
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('connectsocket  失败')
            this.setData({
              'objectArray[11].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer11 = setTimeout(() => {
        this.setData({
          'objectArray[11].result': '超时'
        })
        this.c12()
      }, 3000)
      wx.connectSocket({
        url: "wss://stream.weixin.qq.com/wsweapp/SendMsg",
        success: (res) => {
          if (res.errMsg == "connectSocket:ok") {
            console.log('connectsocket  通过')
            this.setData({
              'objectArray[11].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('connectsocket  失败')
            this.setData({
              'objectArray[11].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer11)
          this.c12()
        }
      })
    }
  },
  c12:function(e){
    if (e) {
      this.setData({
        'objectArray[12].result': ''
      })
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/RespondArguments?content=a%2Fb',
        success:(res)=> {
          if (res.errMsg == "connectSocket:ok") {
            console.log('querytsocket  通过')
            this.setData({
              'objectArray[12].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('querytsocket  失败')
            this.setData({
              'objectArray[12].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer12 = setTimeout(() => {
        this.setData({
          'objectArray[12].result': '超时'
        })
        this.c13()
      }, 3000)
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/RespondArguments?content=a%2Fb',
        success: (res) => {
          if (res.errMsg == "connectSocket:ok") {
            console.log('querytsocket  通过')
            this.setData({
              'objectArray[12].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('querytsocket  失败')
            this.setData({
              'objectArray[12].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer12)
          this.c13()
        }
      })
    }
  },
  c13:function(e){
    if (e) {
      this.setData({
        'objectArray[13].result': ''
      })
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
        tcpNoDelay: true,
        success:(res)=> {
          if (res.errMsg == "connectSocket:ok") {
            console.log('tcpNoDelaySocket  通过')
            this.setData({
              'objectArray[13].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('tcpNoDelaytSocket  失败')
            this.setData({
              'objectArray[13].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
      var timer13 = setTimeout(() => {
        this.setData({
          'objectArray[13].result': '超时'
        })
        this.c14()
      }, 3000)
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
        tcpNoDelay: true,
        success: (res) => {
          if (res.errMsg == "connectSocket:ok") {
            console.log('tcpNoDelaySocket  通过')
            this.setData({
              'objectArray[13].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('tcpNoDelaytSocket  失败')
            this.setData({
              'objectArray[13].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer13)
          this.c14()
        }
      })
    }
  },
  c14:function(e){
    if (e) {
      this.setData({
        'objectArray[14].result': ''
      })
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
        success:(res)=> {
          if (res.errMsg == "connectSocket:ok") {
            console.log('stringSocket 通过')
            this.setData({
              'objectArray[14].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('stringSocket 失败')
            this.setData({
              'objectArray[14].result': '失败'
            })
            console.log(res)
          }
        }
      })
    } else {
            var timer14 = setTimeout(() => {
        this.setData({
          'objectArray[14].result': '超时'
        })
        this.c15()
      }, 3000)
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
        success:(res) => {
          if (res.errMsg == "connectSocket:ok") {
            console.log('stringSocket 通过')
            this.setData({
              'objectArray[14].result': '通过'
            })
            setTimeout(() => {
              wx.closeSocket({
                success: (res) => {
                  if (res.errMsg == "closeSocket:ok") {
                    console.log('closesocket 通过')
                  } else {
                    console.log('closesocket 失败')
                  }
                }
              })
            }, 1000)
          } else {
            console.log('stringSocket 失败')
            this.setData({
              'objectArray[14].result': '失败'
            })
            console.log(res)
          }
          clearTimeout(timer14)
          this.c15()
        }
      })
    }
  },
  c15:function(e){
    if (e) {
      this.setData({
        'objectArray[15].result': ''
      })

    } else {
      var timer15 = setTimeout(() => {
        this.setData({
          'objectArray[15].result': '超时'
        })
        this.test()
      }, 3000)
      wx.connectSocket({
        url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
        success: (res) => {
          if (res.errMsg == "connectSocket:ok") {
            console.log('stringSocket 通过')
            this.setData({
              'objectArray[14].result': '通过'
            })
          } else {
            console.log('stringSocket 失败')
            this.setData({
              'objectArray[14].result': '失败'
            })
            console.log(res)
          }
          wx.onSocketMessage(function (res) {
            console.log(res)
          })
          clearTimeout(timer15)
          setTimeout(() => {
            this.test()
          }, 1000)
        }
      })
    }
  },
test:function(){
  wx.sendSocketMessage({
    data: "test send socket",
  })
},
c16:function(){
console.log('huang')
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.c0()
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
    wx.connectSocket({
      url: 'wss://stream.weixin.qq.com/wsweapp/SendMsg',
      success(res) {
        if (res.errMsg == "connectSocket:ok") {
          console.log('sendArrayBuffer 通过')
        } else {
          console.log('sendArrayBuffer  失败')
        }
        wx.onSocketMessage(function (res) {
          console.log(res)
        })

      }
    })
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