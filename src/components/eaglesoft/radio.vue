<template>
  <label class="eg-radio-wrapper" :class="{'eg-radio-wrapper-disabled':isDisabled}">
    <span class="eg-radio"
      :class="{
        'eg-radio-checked' : model === label,
        'eg-radio-disabled' : isDisabled
      }" 
    >
      <span class="eg-radio-inner"></span>
      <input 
        class="eg-radio-input" 
        type="radio"
        :value="label"
        v-model="model"
        :disabled="isDisabled" 
      />
    </span><slot>{{ label }}</slot>
  </label>
</template>
<script>
export default {
  name: 'EgRadio',
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
    disabled: Boolean
  },
  computed: {
    radioClasses: function () {
      return this.value === this.label ? 'eg-radio-checked' : '';
    },
    model: {
      get: function () {
        return this.value;
      },
      set: function (val) {
        this.$emit('input', val);
      }
    },
    isDisabled: function () {
      return this.disabled;
    }
  }
}
</script>
<style>
</style>

