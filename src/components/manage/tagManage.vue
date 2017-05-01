<template>
  <div>
    <h2>Tag</h2>
    <div class="group">
      <h3>默认tag</h3>
      <eg-tag v-for="item in tags1">{{item.label}}</eg-tag>
    </div>
    <div class="group">
      <h3>不同的颜色</h3>
      <eg-tag v-for="item in tags2" :color="item.color" :closable="item.closable">{{item.label}}</eg-tag>
    </div>
    <div class="group">
      <h3>可删除</h3>
      <eg-tag v-for="(item, index) in tags3" @icon-click="handleClose(index)" :closable="item.closable">{{item.label}}</eg-tag>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tags1: [
          {
            label: '标签一',
            id: 1
          },
          {
            label: '标签二',
            id: 2
          },
          {
            label: '标签三',
            id: 3
          },
          {
            label: '标签四',
            id: 4
          },
          {
            label: '标签五',
            id: 5
          }
        ],
        tags2: [
          {
            label: '标签一',
            id: 1,
            color: 'red',
            closable: true
          },
          {
            label: '标签二',
            id: 2,
            color: 'green',
            closable: true
          },
          {
            label: '标签三',
            id: 3,
            color: 'yellow',
            closable: true
          },
          {
            label: '标签四',
            id: 4,
            color: 'blue',
            closable: true
          },
          {
            label: '标签五',
            id: 5,
            closable: true
          }
        ],
        tags3: [
          {
            label: '标签一',
            id: 1,
            closable: true
          },
          {
            label: '标签二',
            id: 2
          },
          {
            label: '标签三',
            id: 3
          },
          {
            label: '标签四',
            id: 4
          },
          {
            label: '标签五',
            id: 5
          }
        ]
      }
    },
    methods: {
      handleClose (index) {
        this.tags3.splice(index, 1);
      }
    }
  }
</script>
<style>
</style>

