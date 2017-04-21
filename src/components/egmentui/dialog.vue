<template>
  <transition
    enter-active-class="dialog-enter-active eg-animated"
    leave-active-class="dialog-leave-active eg-animated"
    @before-enter="beforeShow"
    @after-enter="afterShow"
    @after-leave="afterHide"
  >
    <div class="eg-dialog"
         v-if="visible"
         @click="dialogClose"
         :class="customClass ? customClass : ''"
    >
      <div class="eg-dialog-box">
        <div class="eg-dialog-animate eg-animated">
          <div class="eg-dialog-header">
            <slot name="title">
              <span class="eg-dialog-title" v-text="title"></span>
            </slot>
            <i class="eg-icon-close eg-dialog-close" @click="dialogClose" v-if="showClose"></i>
          </div>
          <div class="eg-dialog-body">
            <slot name="body"></slot>
          </div>
          <div class="eg-dialog-footer" v-if="hasFooter">
            <template v-if="$slots.footer">
              <eg-button-group has-space>
                <eg-button @click="handleCancle" v-text="cancleText"></eg-button>
                <eg-button type="primary" @click="handleConfirm" v-text="confirmText"></eg-button>
              </eg-button-group>
            </template>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'EgDialog',
    componentName: 'EgDoalog',
    data () {
      return {}
    },
    props: {
      title: {
        type: String,
        default: '提示'
      },
      size: {
        type: String
      },
      value: Boolean,
      // 是否需要遮罩层
      modal: {
        type: Boolean,
        default: true
      },
      confirmText: {
        type: String,
        default: '确认'
      },
      cancleText: {
        type: String,
        default: '取消'
      },
      // 弹窗显示时是否将body锁定滚动
      localScroll: {
        type: Boolean,
        default: true
      },
      // 是否显示关闭按钮,ESC功能同时也关闭
      showClose: {
        type: Boolean,
        default: true
      },
      // 是否点击遮罩层关闭对话框
      clickModalClose: {
        type: Boolean,
        default: true
      },
      // 是否需要弹窗footer区域
      hasFooter: {
        type: Boolean,
        default: true
      },
      // dialog的自定义类名
      customClass: {
        type: String,
        default: ''
      },
      // 是否将model插入body
      modalAppendToBody: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      visible: {
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      dialogClose (ev) {
        this.visible = false;
        this.$emit('close', ev);
      },
      escClose (ev) {
        if (this.visible && ev.keyCode === 27) {
          this.visible = false;
          this.$emit('close', ev);
        }
      },
      handleConfirm (ev) {
        // 当确footer为非自定义时调用
        // 不直接关闭弹窗
        this.$emit('confirm', ev);
      },
      handleCancle (ev) {
        // 当footer为非自定义时调用
        this.visible = false;
        this.$emit('cancle', ev);
      },
      beforeShow () {
        this.localScroll && (document.body.style.overflow = 'hidden');
      },
      afterShow (ev) {
        this.$emit('show', ev);
      },
      afterHide (ev) {
        this.localScroll && (document.body.style.overflow = 'auto');
        this.$emit('hide', ev);
      }
    },
    mounted () {
      console.log(this.transtition);
      // add ESC
      this.showClose && document.addEventListener('keyup', this.escClose);
    },
    beforeDestroy () {
      // remove Esc
      this.showClose && document.removeEventListener('keyup', this.escClose);
    }
  }
</script>
<style>
</style>

