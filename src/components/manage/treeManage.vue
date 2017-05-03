<template>
  <div>
    <h2>Tree</h2>
    <div class="group">
      <h3>基础用法</h3>
      <!--<eg-tree :data="data" style="width: 500px; border: 1px solid #aaa;"></eg-tree>-->
    </div>
    <div class="group">
      <h3>可选择</h3>
      <eg-tree :data="data" show-checkbox style="width: 500px; border: 1px solid #aaa;"></eg-tree>
    </div>
    <eg-button @click='handleClick'>获取数据</eg-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [{
          id: 1,
          checked: true,
          expanded: true,
          label: '一级 1',
          children: [{
            id: 4,
            checked: true,
            label: '二级 1-1',
            children: [{
              id: 9,
              checked: true,
              label: '三级 1-1-1'
            }, {
              id: 10,
              checked: true,
              label: '三级 1-1-2'
            }]
          }]
        }]
      }
    },
    methods: {
      handleClick () {
        console.log(this.data);
      }
    },
    watch: {
      data: {
        checked () {
          console.log('checked');
        }
      }
    }
  }
</script>
<style>
</style>

