<template>
  <div class="input-manage-wrapper">
    <eg-input placeholder="请输入"></eg-input>
  </div>
</template>
<script type="text/javascript">
  import egInput from '@/components/eaglesoft/input';
  export default {
    components: {
      egInput
    }
  }
</script>
<style>
  .input-manage-wrapper .eg-input-wrapper{
    width: 300px;
  }
</style>
