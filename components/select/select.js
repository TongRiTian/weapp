
Component({
  properties: {
    name: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '可手动输入'
    },
    selectList: {
      type: Array,
      value: []
    },
    inputDisabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    index: 0
  },

  methods: {
    onChange(e) {
      console.log(e.detail.value)
    }
  }
})
