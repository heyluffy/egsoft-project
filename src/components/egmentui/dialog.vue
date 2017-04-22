<template>
  <transition
    enter-active-class="dialog-enter-active eg-animated"
    leave-active-class="dialog-leave-active eg-animated"
    @before-enter="beforeShow"
    @after-enter="afterShow"
    @after-leave="afterHide"
  >
    <div class="eg-dialog" v-if="visible" @click="dialogClose">
      <div class="eg-dialog-box" @click.stop>
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
          <div class="eg-dialog-footer" v-if="$slots.footer">
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
      // 弹窗显示时是否将body锁定滚动
      localScroll: {
        type: Boolean,
        default: true
      },
      // 是否显示右上角关闭按钮，显示则ESC按键也可生效关闭
      showClose: {
        type: Boolean,
        default: true
      },
      // 是否允许点击遮罩关闭弹窗
      clickModalClose: {
        type: Boolean,
        default: true
      }
    },
    components: {},
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
      // 监听ESC按键
      document.onclick = function () {
        console.log('aaa');
      }
      console.log(111, document.onclick);
    },
    destroyed () {
      console.log('destroyed');
    }
  }
</script>
<style>
</style>

