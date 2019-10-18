//index.js
//获取应用实例
const app = getApp()
import { orderList } from '../../../utils/data.js'
Page({
  data: {
    orderList: [],
    time: (new Date()).toString(),
    userInfo: null
  },

  handleEdit(e) {
    const orderId = e.currentTarget.dataset.id
    this._navigateTo(orderId, 'edit')
  },

  handleView(e) {
    const orderId = e.currentTarget.dataset.id
    this._navigateTo(orderId, 'view')
  },
  handleCreate(e) {
    // 若没有 跳到登录页面
    if (! this.data.userInfo) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    this._navigateTo("", 'create')
  },
  handleDelete(e) {
    const orderId = e.currentTarget.dataset.id
    wx.showModal({
      title: '订单删除',
      content: '是否确定删除订单？',
      success(res) {
        if (res.confirm) {
          // 异步调用删除接口...然后重新获取数据
        }
      }
    })
  },
  _navigateTo(orderId, action) {
    wx.navigateTo({
      url: `/pages/order/edit/edit?id=${orderId}&action=${action}`,
    })
  },
  //事件处理函数
  onShow: function () {
    // 获取登录用户信息
    const userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo)
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })

    // 模拟 如果有登录用户信息，才显示订单假数据
    if (this.data.userInfo) {
      this.setData({
        orderList: orderList
      })
    }
    console.log(this.data.orderList)
  }
})
