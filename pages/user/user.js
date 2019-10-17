import { userInfo } from '../../utils/data.js' 

Page({
  data: {
    userInfo: {},
  },
  onLoad: function (options) {
    this.setData({
      userInfo: userInfo
    })
    console.log(this.data.userInfo)
  },
})