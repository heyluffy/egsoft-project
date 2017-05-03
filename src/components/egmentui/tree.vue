<template>
  <div class="eg-tree">
    <eg-tree-node show-checkbox :data="item" :key="item" v-for="item in data"></eg-tree-node>
  </div>
</template>
<script>
export default {
  name: 'egTree',
  componentName: 'egTree',
  data () {
    return {
    }
  },
  props: {
    data: Array,
    showCheckbox: Boolean
  }
}
</script>
<style>
</style>

