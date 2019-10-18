import { loginData, userInfo } from "../../utils/data"
Page({
  data: {
    mobile: 15927273406,
    password: '123456',
    maskShow: false
  },

  onLoad: function (options) {

  },

  login(e) {
    const { userName, password } = e.detail.value
    if (userName === loginData.userName && password === loginData.password) {
      // 将用户信息存储
      wx.setStorageSync('userInfo', userInfo)
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 500,
      })
      setTimeout(() => {
        wx.navigateBack({
          delta: 1,
        })
      }, 500)
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
        duration: 2000
      })
    }
    console.log(userName, password)
  },

  forgetPswd() {
    this.setData({
      maskShow: true
    })
  },

  onClose() {
    this.setData({
      maskShow: false
    })
  }

})