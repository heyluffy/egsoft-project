<template>
  <div>
    <h2>Select</h2>
    <div class="group">
      <h3>基础使用</h3>
      <eg-select v-model="select1">
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
    </div>
    <div class="group">
      <h3>选项disabled</h3>
      <eg-select v-model="select2">
        <eg-option :value="item.value" :key="item.value" :disabled="item.disabled" :label="item.label"  v-for="item in options2"></eg-option>
      </eg-select>
    </div>
    <div class="group">
      <h3>整体disabled</h3>
      <eg-select v-model="select3" disabled>
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
    </div>
    <div class="group">
      <h3>尺寸</h3>
      <eg-select v-model="select5" size="large">
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
      <eg-select v-model="select6" >
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
      <eg-select v-model="select7" size="small">
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
      <eg-select v-model="select8" size="mini">
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
    </div>
    <div class="group">
      <h3>可清空选项</h3>
      <eg-select v-model="select9" clearable>
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
    </div>
    <div class="group">
      <h3>可多选</h3>
      <eg-select v-model="selectArr" multiple>
        <eg-option :value="item.value" :key="item.value" :label="item.label" v-for="item in options1"></eg-option>
      </eg-select>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        select1: '',
        select2: '',
        select3: '',
        select4: '',
        select5: '',
        select6: '',
        select7: '',
        select8: '',
        select9: '',
        selectArr: ['选项1', '选项2']
      }
    },
    watch: {
      select () {
        console.log('select', this.select)
      }
    }
  }
</script>
<style>
</style>

