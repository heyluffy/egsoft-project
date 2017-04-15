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
      <h3>indeterminate</h3>
      <eg-checkbox :indeterminate="isIndeterminate" label="all" v-model="selectAll" @change="handleClick">全选</eg-checkbox>
      <br /><br />
      <eg-checkbox v-model="checkboxList2" :label="1">选项一</eg-checkbox>
      <eg-checkbox v-model="checkboxList2" :label="2">选项二</eg-checkbox>
      <eg-checkbox v-model="checkboxList2" :label="3">选项三</eg-checkbox>
    </div>
  </div>
</template>
<script>
import egCheckbox from '@/components/eaglesoft/checkbox';
import egButton from '@/components/eaglesoft/button';
const cityOptions = [1, 2, 3];
export default {
  data () {
    return {
      checkbox1: true,
      checkboxList1: [1, 2],
      checkboxList2: [1, 2],
      checkboxSelect: false,
      isIndeterminate: false,
      selectAll: false,
      aaa: true
    }
  },
  methods: {
    handleClick (val) {
      this.checkboxList2 = val ? cityOptions : [];
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
    egButton
  }
}
</script>
<style>
</style>

