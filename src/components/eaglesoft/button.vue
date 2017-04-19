<template>
  <button class="eg-button"
          :type="htmlType"
          :class="[
      type ? 'eg-button-' + type : '',
      size ? 'eg-button-' + size : '',
      shape ? 'eg-button-' + shape : '',
      shape && !$slots.default ? 'eg-button-' + shape + '-icon-only' : '',
      {
        'disabled': disabled,
        'eg-button-loading': loading
      }
    ]"
          :disabled="disabled"
          @click="handleClick"
  >
    <!--loading-->
    <i class="eg-icon-loading" v-if="loading"></i>
    <span v-if="loading&&$slots.default" v-text="loadingText"></span>
    <!--loading-->
    <i :class="'eg-icon-' + icon" v-if="icon&&textPosition=='after'&&!loading"></i>
    <span v-if="$slots.default&&!loading"><slot></slot></span>
    <i :class="'eg-icon-' + icon" v-if="icon&&textPosition=='before'&&!loading"></i>
  </button>
</template>
<script>
  import emitter from '@/components/eaglesoft/script/emitter';
  export default {
    name: 'EgButton',
    mixins: [emitter],
    data () {
      return {}
    },
    props: {
      // button的功能类型default、primary、text等,根据不同的type给与不同的样式
      type: {
        type: String,
        default: ''
      },
      // button的尺寸类型
      size: {
        type: String,
        default: ''
      },
      // button是否禁用
      disabled: Boolean,
      // button原生type
      htmlType: {
        type: String,
        default: 'button'
      },
      // icon图标
      icon: {
        type: String,
        default: ''
      },
      // 文字的位置
      textPosition: {
        type: String,
        default: 'after'
      },
      // button形状
      shape: {
        type: String,
        default: ''
      },
      // loading状态
      loading: Boolean,
      // loading提示文案
      loadingText: {
        type: String,
        default: 'loading...'
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt);
      }
    },
    created: function () {
      console.log(this.emitter);
    }
  }
</script>
<style>
</style>
