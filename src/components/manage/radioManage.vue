<template>
  <div>
    <eg-radio v-model="radio" label="1">
      测试1
    </eg-radio>
    <eg-radio v-model="radio" label="2">
      测试2
    </eg-radio>
  </div>
</template>
<script>
import egRadio from '@/components/eaglesoft/radio';
export default {
  name: 'radio',
  data () {
    return {
      radio: '1'
    }
  },
  components: {
    'eg-radio': egRadio
  }
}
</script>
<style>
</style>
