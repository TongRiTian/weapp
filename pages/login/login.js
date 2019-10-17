
Page({
  data: {
    mobile: null,
    password: ''
  },

  onLoad: function (options) {

  },

  login(e) {
    const { userName, password } = e.detail.value
    console.log(userName, password)
  },

  forgetPswd() {
    
  }

})