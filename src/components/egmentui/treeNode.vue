<template>
  <div class="eg-tree-node"
       :class="{expanded:this.expanded}"
  >
    <span class="eg-tree-icon" v-if="data.children && data.children.length > 0" @click="handleClick"></span>
    <div class="eg-tree-content" @click="handleClick">{{data.label}}</div>
    <div class="eg-tree-children" v-if="expanded">
      <eg-tree-node :data="item" :key="item" v-for="item in data.children"></eg-tree-node>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'EgTreeNode',
      componentName: 'EgTreeNode',
      data () {
        return {
          expanded: false
        }
      },
      props: {
        data: Object
      },
      methods: {
        handleClick () {
          this.expanded = !this.expanded
        }
      }
    }
</script>
<style>
</style>

