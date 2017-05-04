<template>
  <div class="eg-tree">
    <eg-tree-node :filter="filter" :show-checkbox="showCheckbox" :data="item" :key="item" v-for="item in data"></eg-tree-node>
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
    showCheckbox: Boolean,
    filter: String
  }
}
</script>
<style>
</style>

