<template>
  <div class="button-manage-wrapper">
    <h2 id="button">Button</h2>
    <div class="group">
      <h3 id="button-type">按钮类型</h3>
      <eg-button>default</eg-button>
      <eg-button type="primary">primary</eg-button>
      <eg-button type="text">text</eg-button>
      <eg-button type="success">success</eg-button>
      <eg-button type="warning">warning</eg-button>
      <eg-button type="danger">danger</eg-button>
      <eg-button type="info">info</eg-button>
    </div>
    <div class="group">
      <h3>禁用状态</h3>
      <eg-button disabled>default</eg-button>
      <eg-button type="success" disabled>success</eg-button>
      <eg-button type="text" disabled>text</eg-button>
    </div>
    <div class="group">
      <h3>图标按钮</h3>
      <eg-button icon="delete" type="danger"></eg-button>
      <eg-button icon="edit">edit</eg-button>
      <eg-button icon="upload" textPosition="before">edit</eg-button>
    </div>
    <div class="group">
      <h3>按钮形状</h3>
      <eg-button shape="circle" type="primary">primary</eg-button>
      <eg-button shape="circle" icon="search" type="primary"></eg-button>
      <eg-button shape="circle" icon="upload" textPosition="before">edit</eg-button>
    </div>
    <div class="group">
      <h3>按钮尺寸</h3>
      <eg-button size="large" type="primary">large</eg-button>
      <eg-button type="primary">default</eg-button>
      <eg-button size="small" type="primary">small</eg-button>
      <eg-button size="mini" type="primary">mini</eg-button>
      <br /><br />
      <eg-button size="large" shape="circle" type="primary">large</eg-button>
      <eg-button shape="circle" type="primary">default</eg-button>
      <eg-button size="small" shape="circle" type="primary">samll</eg-button>
      <eg-button size="mini" shape="circle" type="primary">mini</eg-button>
      <br /><br />
      <eg-button shape="circle" size="large" icon="search" type="primary"></eg-button>
      <eg-button shape="circle" icon="search" type="primary"></eg-button>
      <eg-button shape="circle" size="small" icon="search" type="primary"></eg-button>
      <eg-button shape="circle" size="mini" icon="search" type="primary"></eg-button>
    </div>
    <div class="group">
      <h3>加载状态</h3>
      <eg-button type="primary" loading loading-text="加载中">发送</eg-button>
      <eg-button type="primary" :loading="loading[1]" @click="send(1)">发送</eg-button>
      <eg-button type="success" shape="circle" icon="message" :loading="loading[0]" @click="send(0)"></eg-button>
    </div>
    <div class="group">
      <h3>按钮组</h3>
      <eg-button-group>
        <eg-button type="primary">项目一</eg-button>
        <eg-button type="primary">项目二</eg-button>
        <eg-button type="primary">项目三</eg-button>
      </eg-button-group>
      <eg-button-group>
        <eg-button disabled>昨日</eg-button>
        <eg-button disabled>今日</eg-button>
        <eg-button disabled>明日</eg-button>
      </eg-button-group>
      <br /><br />
      <eg-button-group>
        <eg-button>项目一</eg-button>
        <eg-button>项目二</eg-button>
        <eg-button>项目三</eg-button>
      </eg-button-group>
      <br /><br />
      <eg-button-group>
        <eg-button shape="circle" type="success">项目一</eg-button>
        <eg-button shape="circle" type="success">项目二</eg-button>
        <eg-button shape="circle" type="success">项目三</eg-button>
      </eg-button-group>
      <eg-button-group>
        <eg-button shape="circle" icon="edit" type="primary"></eg-button>
        <eg-button shape="circle" icon="share" type="primary"></eg-button>
        <eg-button shape="circle" icon="delete" type="primary"></eg-button>
      </eg-button-group>
    </div>
  </div>
</template>
<script type="text/javascript">
  import EgButton from '@/components/eaglesoft/button';
  import EgButtonGroup from '@/components/eaglesoft/buttonGroup';
  export default {
    data: function () {
      return {
        disabled: true,
        loading: [false, false]
      }
    },
    components: {
      EgButton,
      EgButtonGroup
    },
    methods: {
      send (index) {
        let vm = this;
        this.loading[index] = true;
        this.loading = this.loading.concat([]);
        setTimeout(function () {
          vm.loading[index] = false;
          vm.loading = vm.loading.concat([]);
        }, 1000);
      }
    },
    created: function () {
      console.log(this.loading[0]);
    }
  }
</script>
<style>
</style>

