<template>
  <div class="eg-select-option" @mouseenter="hoverItem">
    <slot></slot>
  </div>
</template>
<script>
    export default {
      name: 'EgSelectOption',
      componentName: 'EgSelectOption',
      methods: {
        hoverItem () {
          console.log(this.parent);
        }
      }
    }
</script>
<style>
</style>

