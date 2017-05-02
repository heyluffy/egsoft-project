<template>
  <div class="eg-tree">
    <eg-tree-node :data="item" :key="item" v-for="item in data"></eg-tree-node>
  </div>
</template>
<script>
export default {
  name: 'egTree',
  componentName: 'egTree',
  props: {
    data: Array
  }
}
</script>
<style>
</style>

