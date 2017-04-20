<template>
  <div class="eg-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'EgCheckboxGroup',
    componentName: 'EgCheckboxGroup',
    data () {
      return {}
    },
    props: {
      value: {
      },
      // 勾选的最大值
      max: Number,
      // 勾选的最小值
      min: Number,
      disabled: Boolean
    },
    created () {
      console.log('group-created');
    },
    mounted () {
      console.log('grooup-mounted');
    }
  }
</script>
<style>
</style>

