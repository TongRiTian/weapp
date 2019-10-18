
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
      value: ''
    },
    selectList: {
      type: Array,
      value: []
    },
    inputDisabled: {
      type: Boolean,
      value: false
    },
    selectEnable: {
      type: Boolean,
      value: false
    },
    selectValue: {
      type: Number,
    }
  },
  data: {
    
  },

  methods: {
    onChange(e) {
      const value = e.detail.value
      this.triggerEvent('selectChange', value)
    }
  }
})
