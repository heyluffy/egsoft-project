<template>
  <div>
    <h2>Progress</h2>
    <div class="group">
      <h3>线形进度条</h3>
      <div class="progress-box">
        <eg-progress :percent="30"></eg-progress>
        <eg-progress :percent="50" status="active"></eg-progress>
        <eg-progress :percent="100"></eg-progress>
        <eg-progress :percent="60" status="error"></eg-progress>
        <eg-progress :percent="percent" status="active" hide-text></eg-progress>
      </div>     
    </div>
     <div class="group">
      <h3>线性进度条内置百分比</h3>
      <div class="progress-box">
        <eg-progress text-inside :stockWidth="20" hide-text status="active" :percent="30"></eg-progress>
        <eg-progress text-inside :stockWidth="20" :percent="100"></eg-progress>
        <eg-progress text-inside :stockWidth="20" status="error" :percent="50"></eg-progress>
      </div>     
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        percent: 0
      }
    },
    mounted () {
      const self = this;
      let setInt = setInterval(function() {
        self.percent += 10;
        if (self.percent >= 100) {
          clearInterval(setInt);
        }
      }, 1000);
    }
  }
</script>
<style>
  .progress-box{
    width: 500px;
  }
</style>

