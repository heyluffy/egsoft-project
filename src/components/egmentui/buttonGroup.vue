<template>
 <div class="eg-button-group" :class="{noSpace: !hasSpace}">
   <slot></slot>
 </div>
</template>
<script>
  export default {
    name: 'EgButtonGroup',
    componentName: 'EgButtonGroup',
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
      vertical: Boolean,
      // 按钮之间是否需要空隙，样式上非按钮组按钮可以利用这个属性去掉两个button之间的内联空隙
      hasSpace: Boolean
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>
