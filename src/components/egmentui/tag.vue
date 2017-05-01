<template>
  <div class="eg-tag"
       :class="color?'eg-tag-' + color : ''"
  >
    <span class="eg-tag-text"><slot></slot></span>
    <i v-if="closable" class="eg-tag-delete eg-icon-close"
       @click="handleIconClick"
    ></i>
  </div>
</template>
<script>
  export default {
    name: 'EgTag',
    componentName: 'EgTag',
    data () {
      return {
        multipleIcon: 'close'
      }
    },
    props: {
      color: {
        type: String,
        default: ''
      },
      // 是否可关闭
      closable: Boolean
    },
    methods: {
      handleIconClick (e) {
        this.$emit('icon-click', e);
      }
    }
  }
</script>
<style>
</style>

