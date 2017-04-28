<template>
  <div class="eg-select"
    :class="{'eg-select-visible': visible}"
    v-clickoutside="handleClose"
  >
    <div class="eg-select-input" @click="handleClick">
      <eg-input icon="caret-top" v-model="currentLabel" :readonly="readonly" placeholder="请选择"></eg-input>
    </div>
    <transition>
      <eg-select-dropdown v-show="visible" :drop-style="dropStyle">
        <slot></slot>
      </eg-select-dropdown>
    </transition>
  </div>
</template>
<script>
    export default {
      name: 'EgSelect',
      componentName: 'EgSelect',
      data () {
        return {
          // 下拉框是否显示
          visible: false,
          dropStyle: {},
          // select组件的标识
          isSelect: true,
          // 存放option
          options: [],
          // 当前hover项的下标
          hoverIndex: -1,
          // 当前选中项的label
          currentLabel: ''
        }
      },
      props: {
        readonly: {
          type: Boolean,
          default: true
        },
        value: {
          type: [String, Number],
          default: ''
        }
      },
      computed: {
        selectIndex () {
          // 当前选中的Option index
          if (!this.value) return -1;
          for (let i = 0, len = this.options.length; i < len; i++) {
            if (this.value === this.options[i].value) {
              return i;
            }
          }
          return -1;
        },
        currentLabel () {
          // 当前选中的option的label
          if (this.selectIndex > -1) {
            return this.options[this.selectIndex].currentLabel;
          }
          return '';
        }
      },
      methods: {
        handleClick () {
          this.visible = !this.visible;
        },
        handleClose () {
          this.visible = false;
        },
        setDropStyle () {
          const select = $(this.$el);
          // const wTop = select.offset().top - $(window).scrollTop();
          // const wLeft= select.offset().left - $(window).scrollLeft();
          this.dropStyle = {
            position: 'absolute',
            left: select.position().left + 'px',
            top: (select.position().top + select.height() + 3) + 'px',
            width: select.width() + 'px'
          };
          console.log('dropStyle', this.dropStyle)
        }
      },
      created () {
      },
      mounted () {
        this.setDropStyle();
      }
    }
</script>
<style>
</style>

