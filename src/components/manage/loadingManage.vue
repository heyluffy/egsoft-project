<template>
  <div>
    <eg-button type="primary" @click="handleClick">全局loading</eg-button>
    <eg-loading v-if="show"></eg-loading>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      handleClick () {
        const vm = this;
        this.show = true;
        setTimeout(function () {
          vm.show = false;
        }, 3000)
      }
    }
  }
</script>
<style>
</style>

