<template>
  <div class="eg-option-group">
    <div class="group-title" v-text="label"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'EgOptionGroup',
    componentName: 'EgOptionGroup',
    props: {
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
</style>

