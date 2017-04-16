<template>
  <div>
      <h2>CheckBox</h2>
    <div class="group">
      <h3>基础</h3>
      <eg-checkbox v-model="checkbox1" :label="1">选项一</eg-checkbox>
    </div>
    <div class="group">
      <h3>禁用状态</h3>
      <eg-checkbox v-model="checkboxList1" :label="1">选项一</eg-checkbox>
      <eg-checkbox v-model="checkboxList1" disabled :label="2">选项二</eg-checkbox>
      <eg-checkbox v-model="checkboxList1" disabled :label="3">选项三</eg-checkbox>
    </div>
    <div class="group">
      <h3>组件通信</h3>
      <eg-checkbox v-model="checkboxSelect" >
        <span v-if="checkboxSelect">选中</span>
        <span v-else >没选中</span>
      </eg-checkbox>
      <br />
      <eg-button type="primary" @click="checkboxSelect = !checkboxSelect">
        <span v-if="checkboxSelect">取消</span>
        <span v-else >选择</span>
      </eg-button>
    </div>
    <div class="group">
      <h3>复选框组</h3>
      <eg-checkbox-group v-model="checkboxGroup1">
        <eg-checkbox :label="1">选项一</eg-checkbox>
        <eg-checkbox :label="2">选项二</eg-checkbox>
        <eg-checkbox :label="3">选项三</eg-checkbox>
      </eg-checkbox-group>
      <br /><br/>
      <eg-checkbox-group v-model="checkboxGroup2" disabled>
        <eg-checkbox :label="1" disabled>选项一</eg-checkbox>
        <eg-checkbox :label="2">选项二</eg-checkbox>
        <eg-checkbox :label="3" checked>选项三</eg-checkbox>
      </eg-checkbox-group>
    </div>
    <div class="group">
      <h3>indeterminate</h3>
      <eg-checkbox :indeterminate="isIndeterminate" label="all" v-model="selectAll" @change="handleClick">全选</eg-checkbox>
      <br /><br />
      <eg-checkbox v-model="checkboxList3" :label="1">选项一</eg-checkbox>
      <eg-checkbox v-model="checkboxList3" :label="2">选项二</eg-checkbox>
      <eg-checkbox v-model="checkboxList3" :label="3">选项三</eg-checkbox>
    </div>
    <div class="group">
      <h3>最大值、最小值</h3>
      <eg-checkbox-group v-model="checkboxGroup3" :max="5" :min="1" @change="handleClick">
        <eg-checkbox :label="1">选项一</eg-checkbox>
        <eg-checkbox :label="2">选项二</eg-checkbox>
        <eg-checkbox :label="3">选项三</eg-checkbox>
        <eg-checkbox :label="4">选项四</eg-checkbox>
        <eg-checkbox :label="5">选项五</eg-checkbox>
        <eg-checkbox :label="6">选项六</eg-checkbox>
      </eg-checkbox-group>
    </div>
  </div>
</template>
<script>
import egCheckbox from '@/components/eaglesoft/checkbox';
import egCheckboxGroup from '@/components/eaglesoft/checkboxGroup';
import egButton from '@/components/eaglesoft/button';
const cityOptions = [1, 2, 3];
export default {
  data () {
    return {
      checkbox1: true,
      checkboxList1: [1, 2],
      checkboxList2: [1, 2],
      checkboxList3: [1, 2],
      checkboxGroup1: [1],
      checkboxGroup2: [1],
      checkboxGroup3: [1, 2],
      checkboxSelect: false,
      isIndeterminate: true,
      selectAll: false,
      aaa: '123'
    }
  },
  methods: {
    handleClick (opt) {
      this.checkboxList3 = opt.value ? cityOptions : [];
      this.isIndeterminate = false;
    }
  },
  mounted () {
    // 初始化状态
    if (cityOptions.length === this.checkboxList2.length) {
//      this.
    }
  },
  components: {
    egCheckbox,
    egButton,
    egCheckboxGroup
  }
}
</script>
<style>
</style>

