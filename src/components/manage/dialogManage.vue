<template>
  <div style="height: 30000px;">
    <h2>Dialog</h2>
    <h3>普通弹窗</h3>
    <eg-button type="primary" @click="handleClick">打开弹窗</eg-button>
    <eg-dialog v-model="visible" title="提示" @input="aaa" :width="'500px'" :show-close="false">
      <template slot="body">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        <eg-button type="primary" @click="handleClick2">click</eg-button>
      </template>
      <!-- <template slot="footer"> -->
        <!--<eg-button-group has-space>-->
          <!--<eg-button type="primary" @click="visible = false">确定</eg-button>-->
          <!--<eg-button @click="visible = false">取消</eg-button>-->
        <!--</eg-button-group>-->
      <!-- </template> -->
    </eg-dialog>
    <eg-dialog v-model="visible2" title="提示" @input="aaa" :show-close="false">
      <template slot="body">
        detail1
        <eg-button type="primary" @click="handleClick3">click</eg-button>
      </template>
    </eg-dialog>
    <eg-dialog v-model="visible3" title="提示" @input="aaa" :isPreShow="isPreShow" @confirm="handleConfirm" @cancle="handleCancle" :show-close="false">
      <template slot="body">
        detail2
      </template>
    </eg-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        visible2: false,
        visible3: false,
        isPreShow: true
      }
    },
    methods: {
      handleClick () {
//        console.log(111)
        this.visible = true;
//        console.log(this.visible)
      },
      handleClick2 () {
        this.visible2 = true;
      },
      handleClick3 () {
        this.visible3 = true;
      },
      aaa () {
//        console.log('input');
      },
      handleConfirm () {
        this.isPreShow = false;
        this.visible3 = false;
      },
      handleCancle () {
      }
    },
    mounted () {
    }
  }
</script>
<style>
</style>

