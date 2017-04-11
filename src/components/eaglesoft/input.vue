<template>
  <div class="eg-input-wrapper">
    <input class="eg-input" type="text" 
      :placeholder="placeholder"
      :readyonly="readyonly"
      :disabled="disabled"
    />
  </div>
</template>
<script>
export default {
  name: 'EgInput',
  data () {
    return {
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    readyonly: Boolean,
    disabled: Boolean
  }
}
</script>
<style>
</style>
