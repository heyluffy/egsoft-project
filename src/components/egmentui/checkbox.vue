<template>
  <label class="eg-checkbox"
         :class="{
      checked: isChecked,
      disabled: isDisabled,
      exceeded: isExceeded,
      indeterminate: indeterminate
    }"
  >
    <span class="eg-checkbox-wrapper">
      <span class="eg-checkbox-inner"></span>
      <input type="checkbox" class="eg-checkbox-input"
             :value="label"
             v-model="store"
             :disabled="isDisabled"
             @change="handleChange"
             :store="store"
      />
    </span><span class="eg-checkbox-label" :name="name"><slot>{{label}}</slot></span>
  </label>
</template>
<script>
  export default {
    name: 'EgCheckbox',
    componentName: 'EgCheckbox',
    data () {
      return {
        // 当没有使用v-model的时候，单纯用于记录checkbox点击展示效果用
        selfModel: false,
        isExceeded: false
      }
    },
    props: {
      // checkbox的v-model如果传入的是Boolean则根据true/false是否被选中，如果传入的是数组则匹配label值和数组元素
      // 如果填入的是Number、String类型则会转换成对应的Boolean
      value: {},
      label: {
        type: [String, Number],
        require: true
      },
      // vue的checkbox v-model关联了trueLabel和falseLabel属性来分别表示选中和不选中的值
      // vue的checkbox v-model可以使用Array、Boolean类型的值，允许关联trueLabel falseLabel属性
      trueLabel: [String, Number],
      falseLabel: [String, Number],
      // 配置单个checkbox是否选中
      checked: Boolean,
      name: {
        type: String,
        default: ''
      },
      disabled: Boolean,
      // 用于表示checkbox不确定状态
      indeterminate: Boolean
    },
    computed: {
      isGroup () {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName === 'EgCheckboxGroup') {
            this._checkboxGroup = parent;
            return true;
          } else {
            parent = parent.$parent;
          }
        }
        return false;
      },
      store: {
        get () {
          let val = this.isGroup ? this._checkboxGroup.value : this.value;
          return val !== undefined ? val : this.selfModel;
        },
        set (val) {
          let vm = this._checkboxGroup || this;
          if (this.isLimitExceeded(val)) {
            return false;
          }
          this.isGroup && this.doLimit(val);
          vm.$emit('input', val);
          this.selfModel = val;
          if (this.isClickEvt) {
            vm.$emit('change', {
              event: this.isClickEvt,
              value: val
            });
            this.isClickEvt = false;
          }
        }
      },
      isChecked () {
        if (Array.isArray(this.store)) {
          let i = 0;
          let arr = this.store;
          let len = arr.length;
          for (; i < len; i++) {
            if (arr[i] === this.label) {
              return true;
            }
          }
          return false;
        } else {
          return !!this.store;
        }
      },
      isDisabled () {
        return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
      }
    },
    methods: {
      addToStore () {
        if (Array.isArray(this.store) && this.store.indexOf(this.label) === -1) {
          this.store.push(this.label);
        } else if (!Array.isArray(this.store)) {
          this.store = true;
        }
      },
      isLimitExceeded (arr) {
        let exceeded = false;
        if (this.isGroup && Array.isArray(arr) && (this._checkboxGroup.max || this._checkboxGroup.min)) {
          let len = arr.length;
          this._checkboxGroup.max && this._checkboxGroup.max < len && (exceeded = true);
          this._checkboxGroup.min && this._checkboxGroup.min > len && (exceeded = true);
        }
        return exceeded;
      },
      doLimit (arr) {
        let i = 0;
        let len = 0;
        let obj = {};
        let exceeded = true;
        let children = this._checkboxGroup.$children;
        if (this._checkboxGroup.max && this._checkboxGroup.max <= arr.length || this._checkboxGroup.min && this._checkboxGroup.min >= arr.length) {
          this._checkboxGroup.min === arr.length && (exceeded = !exceeded);
          for (i = 0, len = children.length; i < len; i++) {
            obj[children[i].label] = children[i];
            children[i].isExceeded = exceeded;
          }
          for (i = 0, len = arr.length; i < len; i++) {
            obj[arr[i]].isExceeded = !exceeded;
          }
        } else if (this._checkboxGroup.max || this._checkboxGroup.min) {
          for (i = 0, len = children.length; i < len; i++) {
            children[i].isExceeded = false;
          }
        }
      },
      handleChange (evt) {
        this.isClickEvt = evt;
      }
    },
    mounted () {
      this.checked && this.addToStore();
      this.isGroup && this.doLimit(this.store);
    }
  }
</script>
<style>
</style>

