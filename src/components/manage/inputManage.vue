<template>
  <div>
    <h3>Input</h3>
    <div class="group">
      <h3>普通输入框</h3>
      <eg-input placeholder="请输入" v-model="input1" style="width: 300px;" @change="handleChange"></eg-input>
    </div>
    <div class="group">
      <h3>输入框禁用</h3>
      <div class="demo-input">
        <eg-input placeholder="请输入" v-model="input2" disabled></eg-input>
      </div>
    </div>
    <div class="group">
      <h3>输入框只读</h3>
      <div class="demo-input">
        <eg-input value="1231" placeholder="请输入" v-model="input8" readonly></eg-input>
      </div>
    </div>
    <div class="group">
      <h3>输入框尺寸</h3>
      <div class="demo-input">
        <eg-input placeholder="请输入" v-model="input3" size="large"></eg-input>
        <eg-input placeholder="请输入" v-model="input3"></eg-input>
        <eg-input placeholder="请输入" v-model="input5" size="small"></eg-input>
        <eg-input placeholder="请输入" v-model="input6" size="mini"></eg-input>
      </div>
    </div>
    <div class="group">
      <h3>带icon的输入框</h3>
      <div class="demo-input">
        <eg-input placeholder="请输入" type="textarea" v-model="input7" icon="search"
                  @on-icon-click="handleChange"></eg-input>
      </div>
    </div>
    <div class="group">
      <h3>输入框sug层</h3>
      <div class="demo-input">
        <eg-input placeholder="请输入" @enter="handleEnter"></eg-input>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import egInput from '@/components/eaglesoft/input';
  export default {
    data () {
      return {
        input1: '',
        input2: 'disabled',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: 'readonly'
      }
    },
    methods: {
      handleChange (opts) {
        console.log(opts.value);
      },
      handleEnter (opt) {
        console.log(opt.value);
      }
    },
    components: {
      egInput
    }
  }
</script>
<style>
  .demo-input .eg-input {
    width: 180px;
  }
</style>
