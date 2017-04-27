<template>
  <div class="eg-select"
    :class="{'eg-select-visible': visible}"
  >
    <!--<select class="eg-select-inner"></select>-->
    <div class="eg-select-input" @click="handleClick">
      <eg-input icon="caret-top" :readonly="readonly" placeholder="请选择"></eg-input>
    </div>
    <transition>
      <eg-select-dropdown v-show="visible">
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
          visible: false
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
        }
      }
    }
</script>
<style>
</style>

