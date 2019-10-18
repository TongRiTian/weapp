Page({
  data: {
    userInfo: {},
  },
  onShow: function (options) {
    const userInfo = wx.getStorageSync("userInfo")
    this.setData({
      userInfo: userInfo
    })
    console.log(this.data.userInfo)
  },
  handleLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})