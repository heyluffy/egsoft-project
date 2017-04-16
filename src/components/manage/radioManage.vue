<template>
  <div>
    <h2>Radio</h2>
    <div class="group">
      <h3>基础使用</h3>
      <eg-radio v-model="radio1" label="apple">Apple</eg-radio>
      <eg-radio v-model="radio1" label="android">Android</eg-radio>
    </div>
    <div class="group">
      <h3>禁用状态</h3>
      <eg-radio v-model="radio2" label="10" disabled>10元</eg-radio>
      <eg-radio v-model="radio2" label="50">50元</eg-radio>
      <eg-radio v-model="radio2" label="100">100元</eg-radio>
    </div>
    <div class="group">
      <h3>单选框组</h3>
      <eg-radio-group v-model="radio3">
        <eg-radio :label="1">选项一</eg-radio>
        <eg-radio :label="2">选项二</eg-radio>
        <eg-radio :label="3">选项三</eg-radio>
      </eg-radio-group>
    </div>
    <div class="group">
      <h3>按钮样式</h3>
      <eg-radio-group v-model="radio4">
        <eg-radio-button :label="1">选项一</eg-radio-button>
        <eg-radio-button :label="2">选项二</eg-radio-button>
        <eg-radio-button :label="3">选项三</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio5">
        <eg-radio-button :label="1">选项一</eg-radio-button>
        <eg-radio-button :label="2">选项二</eg-radio-button>
        <eg-radio-button :label="3" disabled >选项三</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio12" disabled>
        <eg-radio-button :label="1">选项一</eg-radio-button>
        <eg-radio-button :label="2">选项二</eg-radio-button>
        <eg-radio-button :label="3">选项三</eg-radio-button>
      </eg-radio-group>
    </div>
    <div class="group">
      <h3>按钮样式尺寸</h3>
      <eg-radio-group v-model="radio6" size="large">
        <eg-radio-button :label="1">large1</eg-radio-button>
        <eg-radio-button :label="2">large2</eg-radio-button>
        <eg-radio-button :label="3">large3</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio7">
        <eg-radio-button :label="1">default1</eg-radio-button>
        <eg-radio-button :label="2">default2</eg-radio-button>
        <eg-radio-button :label="3">default3</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio8" size="small">
        <eg-radio-button :label="1">small1</eg-radio-button>
        <eg-radio-button :label="2">small2</eg-radio-button>
        <eg-radio-button :label="3">small3</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio9" size="mini">
        <eg-radio-button :label="1">mini1</eg-radio-button>
        <eg-radio-button :label="2">mini2</eg-radio-button>
        <eg-radio-button :label="3">mini3</eg-radio-button>
      </eg-radio-group>
    </div>
    <div class="group">
      <h3>其他自定义</h3>
      <eg-radio-group v-model="radio10" disabled fill="red" >
        <eg-radio-button :label="1">fill1</eg-radio-button>
        <eg-radio-button :label="2">fill2</eg-radio-button>
        <eg-radio-button :label="3">fill3</eg-radio-button>
      </eg-radio-group>
      <br /><br />
      <eg-radio-group v-model="radio11" name="test" text-color="#f9c855">
        <eg-radio-button :label="1">text-color1</eg-radio-button>
        <eg-radio-button :label="2">text-color2</eg-radio-button>
        <eg-radio-button :label="3">text-color3</eg-radio-button>
      </eg-radio-group>
    </div>
  </div>
</template>
<script>
import egRadio from '@/components/eaglesoft/radio';
import egRadioButton from '@/components/eaglesoft/radioButton';
import egRadioGroup from '@/components/eaglesoft/radioGroup';
export default {
  name: 'RadioManage',
  data () {
    return {
      radio1: 'apple',
      radio2: '10',
      radio3: 1,
      radio4: 1,
      radio5: 1,
      radio6: 1,
      radio7: 1,
      radio8: 1,
      radio9: 1,
      radio10: 1,
      radio11: 1,
      radio12: 1
    }
  },
  components: {
    egRadio,
    egRadioGroup,
    egRadioButton
  },
  methods: {
    aaa (ev) {
      console.log(ev);
    }
  }
}
</script>
<style>
</style>
