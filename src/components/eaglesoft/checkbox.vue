<template>
  <label class="eg-checkbox"
    :class="{
      checked: isChecked,
      disabled: isDisabled,
      indeterminate: indeterminate
    }"
  >
    <span class="eg-checkbox-wrapper">
      <span class="eg-checkbox-inner"></span>
      <input type="checkbox" class="eg-checkbox-input"
        :value="label"
        v-model="store"
        :disabled="isDisabled"
      />
    </span><span class="eg-checkbox-label" :name="name"><slot>{{label}}</slot></span>
  </label>
</template>
<script>
export default {
  name: 'EgCheckBox',
  componentName: 'EgCheckBox',
  data () {
    return {
    }
  },
  props: {
    // checkbox的v-model如果传入的是单个则判断true/false是否被选中，如果传入的是数组则根据label值和数组元素判断是否选中
    value: {},
    label: {
      type: [String, Number],
      require: true
    },
    name: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    // 用于表示checkbox不确定状态
    indeterminate: Boolean
  },
  computed: {
    store: {
      get () {
//        console.log(this.value);
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
        // 当使用Boolean作为checkbox状态类型的时候，如果选中则返回label值
        this.$emit('change', val && typeof val === 'boolean' ? this.label : '');
      }
    },
    isChecked () {
      if (typeof this.value === 'object') {
        let i = 0;
        let arr = this.value;
        let len = arr.length;
        for (; i < len; i++) {
          if (arr[i] === this.label) {
            return true;
          }
        }
        return false;
      } else {
        return this.value;
      }
    },
    isDisabled () {
      return this.disabled;
    }
  },
  mounted () {
//    console.log('checked', this.isChecked, this.store);
  }
}
</script>
<style>
</style>

