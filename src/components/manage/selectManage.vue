<template>
  <div v-test="'aaa'">
    <h2>Select</h2>
    <div class="group">
      <h3></h3>
      <eg-select v-model="select">
        <eg-select-option :value="1" label="西瓜"></eg-select-option>
        <eg-select-option :value="2" label="葡萄"></eg-select-option>
        <eg-select-option :value="3" label="提子"></eg-select-option>
      </eg-select>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          select: 1
        }
      }
    }
</script>
<style>
</style>

