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
    <div class="group">
      <h3>可筛选</h3>
      <eg-input @on-input="handelInput" v-model="searchText" style="width: 500px;"></eg-input>
      <br /><br />
      <eg-tree :data="data" :filter="searchText" show-checkbox style="width: 500px; border: 1px solid #aaa;"></eg-tree>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            checked: true,
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        searchText: ''
      }
    },
    methods: {
      handleClick () {
        console.log(this.data);
      },
      handelInput () {
        console.log(this.searchText);
      }
    },
    watch: {
      checked () {
        console.log('checked');
      }
    }
  }
</script>
<style>
</style>

