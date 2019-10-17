//index.js
//获取应用实例
const app = getApp()
import { orderList } from '../../../utils/data.js'
Page({
  data: {
    orderList: [],
    time: (new Date()).toString()
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
  onLoad: function () {
    console.log(orderList)
    this.setData({
      orderList: orderList
    })
    console.log(this.data.orderList)
  }
})
