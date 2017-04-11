<template>
 <div class="eg-button-group">
   <slot></slot>
 </div>
</template>
<script>
  export default {
    name: 'EgButtonGroup',
    props: {
      // 按钮组的尺寸
      size: {
        type: String,
        default: ''
      },
      // 按钮组的形状
      shape: {
        type: String,
        default: ''
      },
      // 按钮组是否纵向排列
      vertical: Boolean
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>
