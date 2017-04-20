<template>
  <label class="eg-radio"
   :class="{
    'checked' : store === label,
    'disabled' : isDisabled
  }"
  >
    <span class="eg-radio-wrapper">
      <span class="eg-radio-inner"></span>
      <input
        class="eg-radio-input"
        type="radio"
        :value="label"
        v-model="store"
        :disabled="isDisabled"
        :name="radioName"
      />
    </span><span class="eg-radio-label"><slot>{{ label }}</slot></span>
  </label>
</template>
<script>
export default {
  name: 'EgRadio',
  componentName: 'EgRadio',
  data () {
    return {
    }
  },
  props: {
    // 当前选择值
    value: [String, Number],
    // radio的值
    label: {
      type: [String, Number],
      required: true
    },
    name: String,
    disabled: Boolean
  },
  methods: {
    aaa () {
      console.log('aaa');
    }
  },
  computed: {
    isGroup () {
      // 是否为radio组
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName === 'EgRadioGroup') {
          this._radioGroup = parent;
          return true;
        } else {
          parent = parent.$parent;
        }
      }
      console.log('group');
      return false;
    },
    store: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set (val) {
        // radio当model值发生改变时，即被选中
        if (this.isGroup) {
          this._radioGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
          this.$emit('change', val);
        }
      }
    },
    isDisabled () {
      return this._radioGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
    },
    radioName () {
      return this._radioGroup ? this._radioGroup.name : this.name;
    }
  },
  created () {
  }
}
</script>
<style>
</style>

