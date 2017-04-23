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
         @click="clickModalClose && dialogClose()"
         :class="[customClass ? customClass : '',
                  size ? 'eg-dialog-' + size : '']"
         :style="{zIndex: zIndex, display: dialogHide ? 'none' : 'block'}" 
    >
      <div class="eg-dialog-box" 
        @click.stop 
        :style="{
          width: typeof width === 'number' ? width + 'px' :  width,
          height: typeof height === 'number' ? height + 'px' :  height
        }">
        <div class="eg-dialog-animate eg-animated">
          <div class="eg-dialog-header" v-if="title || $slots.title">
            <slot name="title">
              <span class="eg-dialog-title" v-text="title"></span>
            </slot>
            <i class="eg-icon-close eg-dialog-close" @click="dialogClose" v-if="isShowClose"></i>
          </div>
          <div class="eg-dialog-body">
            <slot name="body"></slot>
          </div>
          <div class="eg-dialog-footer" v-if="hasFooter">
            <template v-if="!$slots.footer">
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
  import popupManage from './script/utils/eg-popup';
  export default {
    name: 'EgDialog',
    componentName: 'EgDialog',
    data () {
      return {
        zIndex: 2000,
        visible: this.value,
        dialogHide: true
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      value: Boolean,
      // 是否需要遮罩层
      // modal: {
      //   type: Boolean,
      //   default: true
      // },
      width: {
        default: '30%'
      },
      height: {
        default: 'auto'
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
      // 打开多弹窗的情况下，当前弹窗关闭是否展示pre弹窗
      isPreShow: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value (val) {
        this.visible = val;
      },
      visible (val) {
        this.$emit('input', val);
        if (val) {
          this.zIndex = popupManage.getZIndex();
          // 放入打开队列
          popupManage.add(this);
          popupManage.hideOther();
          popupManage.showModal();
        } else {
          // 从打开队列中剔除
          popupManage.remove();
          popupManage.recover(this.isPreShow);
        }
      }
    },
    computed: {
      isShowClose () {
        return this.showClose && (!!this.$slots.title || !!this.title);
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
        this.isPreShow = true;
        this.visible = false;
        this.$emit('cancle', ev);
      },
      beforeShow () {
        this.dialogHide = false;
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
      // add ESC
      this.isShowClose && document.addEventListener('keyup', this.escClose);

      // 注册实例
      this._popupId = 'popupId_' + popupManage.getId();
      popupManage.register(this._popupId, this);
    },
    beforeDestroy () {
      // remove Esc
      this.isShowClose && document.removeEventListener('keyup', this.escClose);

      // 销毁实例
      popupManage.deregister(this._popupId);
    }
  }
</script>
<style>
</style>

