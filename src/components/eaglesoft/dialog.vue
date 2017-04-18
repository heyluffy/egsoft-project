<template>
  <transition
    enter-active-class="dialog-enter-active animated"
    leave-active-class="dialog-leave-active animated"
  >
    <div class="eg-dialog" v-if="visible">
      <div class="eg-dialog-box">
        <div class="eg-dialog-animate animated">
          <div class="eg-dialog-header">
            <slot name="title">
              <span class="eg-dialog-title" v-text="title"></span>
            </slot>
            <i class="eg-icon-close eg-dialog-close" @click="dialogClose"></i>
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
      return {
      }
    },
    props: {
      title: {
        type: String,
        default: '提示'
      },
      value: Boolean
    },
    components: {},
    methods: {
      dialogClose () {
        this.visible = false;
      }
    },
    computed: {
      visible: {
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val);
          this.$emit('close');
        }
      }
    },
    mounted () {
      console.log(this.value);
    }
  }
</script>
<style>
</style>

