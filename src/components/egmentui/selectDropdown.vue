<template>
  <div class="eg-select-dropdown" :style="style">
    <slot></slot>
  </div>
</template>
<script>
    export default {
      name: 'EgSelectDropdown',
      componentName: 'EgSelectDropdown',
      props: {
        dropStyle: {
          type: Object
        }
      },
      created () {
      },
      computed: {
        style () {
          console.log(this.dropStyle);
          return this.dropStyle;
        }
      },
      mounted () {
      }
    }
</script>
<style>
</style>

