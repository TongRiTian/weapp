
Page({
  data: {
    mobile: null,
    password: '',
    maskShow: false
  },

  onLoad: function (options) {

  },

  login(e) {
    const { userName, password } = e.detail.value
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