<template>
  <div class="eg-select-option"
    :class="{
      hover: parent.hoverIndex === index,
      selected: parent.selectIndex === index
    }"
   @mouseenter="hoverItem"
   @click="handleClick"
   >
    <slot><span v-text="currentLabel"></span></slot>
  </div>
</template>
<script>
    export default {
      name: 'EgSelectOption',
      componentName: 'EgSelectOption',
      data () {
        return {
          parent: null,
          index: -1
        }
      },
      props: {
        value: {
          type: [String, Number],
          require: true
        },
        label: [String, Number]
      },
      methods: {
        hoverItem () {
          this.parent.hoverIndex = this.index;
        },
        handleClick () {
          this.parent.$emit('input', this.value);
        },
        getParent () {
          // 获取select父节点
          let parent = this.$parent;
          while (parent && !parent.isSelect) {
            parent = parent.$parent;
          }
          this.parent = parent || null;
        }
      },
      computed: {
        currentLabel () {
          return this.label || this.value;
        }
      },
      created () {
        this.getParent();
        this.index = this.parent.options.push(this) - 1;
      },
      mounted () {
        // console.log(this);
      }
    }
</script>
<style>
</style>

