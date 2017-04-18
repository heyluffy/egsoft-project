<template>
    <div class="page-container">
      <h2>个人信息</h2>
    </div>
</template>
<script>
  // 模拟数据
  const pageData = {
    success: true,
    result: {
     name: {
       type: 'input',
       value: '张三'
     },
      sex: {
        type: 'radio',
        value: '男'
      },
      favorite :{
        type: 'checkbox',

      }
    }
  };
  export default {

  }
</script>
<style>
</style>

