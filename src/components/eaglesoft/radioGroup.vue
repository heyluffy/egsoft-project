<template>
  <div class="eg-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'EgRadioGroup',
    componentName: 'EgRadioGroup',
    props: {
      value: [String, Number],
      // radioButton的尺寸
      size: String,
      // radioButton选中的填充颜色
      fill: String,
      // radioButton选中的字体颜色
      textColor: String,
      name: String,
      disabled: Boolean
    },
    methods: {
      broadcast () {
        let vm = this;
        let children = this.$children;
        children.forEach(function (child) {
          child.initData(vm.value);
        })
      }
    },
    watch: {
      value () {
        this.$emit('change', this.value); // 值改变  radioGroup 触发 change
      }
    },
    mounted: function () {
    }
  }
</script>
<style>
</style>

