import { selectList, orderList } from '../../../utils/data.js'

Page({
  data: {
    isFullList: [
      { name: '是', value: 1 },
      { name: '否', value: 0 }
    ],
    nameList: [
      'item1',
      'item2'
    ],
    inputDisabled: false,
    selectEnable: false,
    currentIndex: null,
    name: '',
    nameList: [],
    nameIndex: null,
    carType: '',
    carTypeList: [],
    carTypeIndex: null,
    priceLevel: '',
    priceLevelList: [],
    priceLevelIndex: null,
    method: '销售',
    methodList: [],
    methodIndex: null,
    driver: '',
    driverList: [],
    driverIndex: null,
    mobile: '',
    mobileList: [],
    mobileIndex: null,
    cartNo: '',
    carNoList: [],
    carNoIndex: null,
    cardNo: '',
    cardNoList: [],
    cardNoIndex: null,
    constract: '',
    constractList: [],
    isFull: null,
    showButton: true
  },
  onLoad: function (options) {
    const { id, action } = options
    console.log(id, action)
    if (action) {    
      let selectEnable, inputDisabled
      if(action == 'view') {
        selectEnable = false
        inputDisabled = true
        this.setData({ showButton: false })
        this.getDetail(id)
      } else if (action == 'edit'){
        selectEnable = true
        inputDisabled = false
        this.getDetail(id)
      } else {
        selectEnable = true
        inputDisabled = false
      }
      this.setData({
        action,
        orderId: id,
        selectEnable,
        inputDisabled
      })
    }

    // 获取下拉列表数据
    this.setData({ 
      nameList: selectList.productNameList,
      carTypeList: selectList.carType,
      priceLevelList: selectList.priceLevel,
      methodList: selectList.method,
      driverList: selectList.driver,
      mobileList: selectList.mobile,
      carNoList: selectList.carNo,
      constractList: selectList.constract
    })
  },

  // 获取订单详情
  getDetail(id){
    console.log(id)
    const orderDetail = orderList.find(item => {
      return item.id == id
    })
    console.log(orderDetail)
    this.setData({
      name: orderDetail.goodName,
      carType: orderDetail.trafficType,
      driver: orderDetail.driverName,
      mobile: orderDetail.mobile,
      carNo: orderDetail.carNo,
      cardNo: orderDetail.cardNo,
      priceLevel: orderDetail.priceLevel,
      method: orderDetail.method,
      isFull: orderDetail.isFull,
      constract: orderDetail.constract
    })
  },

  apply(e) {
    console.log(e.detail.value)
  },

  radioChange(e) {
    console.log(e)
    const currentIndex = e.currentTarget.dataset.index
    this.setData({ currentIndex })
  },

  selectChange(e) { 
    console.log(e)
    const key = e.currentTarget.dataset.key
    const index = Number(e.detail)
    let change = {}
    change[key] = this.data[key + 'List'][index]
    this.setData(change)
  }
})