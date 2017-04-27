<template>
  <div class="eg-select"
    :class="{'eg-select-visible': visible}"
    v-clickoutside="handleClose"
  >
    <div class="eg-select-input" @click="handleClick">
      <eg-input icon="caret-top" :readonly="readonly" placeholder="请选择"></eg-input>
    </div>
    <transition>
      <eg-select-dropdown v-show="visible" :drop-style="dropStyle">
        <eg-select-option>111</eg-select-option>
        <eg-select-option>222</eg-select-option>
        <eg-select-option>333</eg-select-option>
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
          visible: false,
          dropStyle: {},
          isSelect: true,
          options: [],
          hoverIndex: -1
        }
      },
      props: {
        readonly: {
          type: Boolean,
          default: true
        }
      },
      computed: {
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
      mounted () {
        this.setDropStyle();
      }
    }
</script>
<style>
</style>

