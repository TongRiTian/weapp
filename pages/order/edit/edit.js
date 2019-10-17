
Page({
  data: {
    isFull: [
      { name: '是', value: 1 },
      { name: '否', value: 0 }
    ],
    nameList: [
      'item1',
      'item2'
    ],
    currentIndex: 0,
  },
  onLoad: function (options) {
    console.log(options)
    if(options.id) {
      this.setData({
        orderId: options.id,
        action: options.action
      })
    }
  },

  apply(e) {
    console.log(e.detail.value)
  },

  radioChange(e) {
    console.log(e)
    const currentIndex = e.currentTarget.dataset.index
    this.setData({ currentIndex })
  },

  test(e) {
    console.log(e.currentTarget.dataset)
  }
})