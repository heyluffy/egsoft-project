<template>
  <div id="app">
    <div class="top-wrapper">
      <h1>eaglesoft</h1>
    </div>
    <div class="menu-wrapper">
      <ul class="plug-list">
        <li v-for="(item, index) in plugs" :class="nowIndex==index?'active':''" class="plug-item"><span @click="selectPlug(index)"><router-link :to="'/'+item" v-text="item"></router-link></span></li>
      </ul>
    </div>
    <div class="con-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: function () {
    return {
      plugs: ['Radio', 'CheckBox', 'Button', 'Input', 'Dialog', 'Progress', 'Upload'],
      nowIndex: 0
    }
  },
  methods: {
    selectPlug: function (index) {
      this.nowIndex = index;
    }
  }
}
</script>

<style>
  body{
    font-family: Microsoft YaHei!important;
  }
  .top-wrapper{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 28px;
    background: rgb(32, 160, 255);
  }
  .top-wrapper h1{
    padding-left: 30px;
    font-weight: bold;
  }
  .menu-wrapper{
    position: absolute;
    left: 0px;
    top: 50px;
    bottom: 0px;
    width: 180px;
  }
  .plug-list{
    padding-top: 30px;
  }
  .plug-item{
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    font-size: 16px;
  }
  .plug-item a{
    color: #5e6d82;
  }
  .plug-item.active a{
    color: #20a0ff;
  }
  .con-wrapper{
    position: absolute;
    top: 50px;
    left: 180px;
    right: 0px;
    bottom: 0px;
    padding: 30px 0;
    font-size: 14px;
    overflow: auto;
  }
</style>
