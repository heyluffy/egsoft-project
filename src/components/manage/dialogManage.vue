<template>
  <div>
    <h2>Dialog</h2>
    <h3>普通弹窗</h3>
    <eg-button type="primary" @click="handleClick">打开弹窗</eg-button>
    <eg-dialog title="标题" v-model="visible">
      <template slot="body">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </template>
      <template slot="footer">
        <eg-button-group has-space>
          <eg-button type="primary" @click="visible = false">确定</eg-button>
          <eg-button @click="visible = false">取消</eg-button>
        </eg-button-group>
      </template>
    </eg-dialog>
  </div>
</template>
<script>
  import EgDialog from '@/components/eaglesoft/dialog'
  import EgButton from '@/components/eaglesoft/button'
  import EgButtonGroup from '@/components/eaglesoft/buttonGroup'
  export default {
    data () {
      return {
        visible: false
      }
    },
    methods: {
      handleClick () {
        console.log(111)
        this.visible = true;
        console.log(this.visible)
      }
    },
    components: {
      EgDialog,
      EgButton,
      EgButtonGroup
    }
  }
</script>
<style>
</style>

