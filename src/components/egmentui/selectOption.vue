<template>
  <div class="eg-select-option"
       :class="{
      hover: parent.hoverIndex === index && !disabled,
      selected: parent.value === value && !disabled,
      disabled: disabled
    }"
       @mouseenter="hoverItem"
       @click="handleClick"
  >
    <slot><span v-text="currentLabel"></span></slot>
  </div>
</template>
<script>
  export default {
    name: 'EgOption',
    componentName: 'EgOption',
    data () {
      return {
        // select
        parent: null,
        // 当前option的下标
        index: -1
      }
    },
    props: {
      value: {
        type: [String, Number],
        require: true
      },
      label: [String, Number],
      disabled: Boolean
    },
    methods: {
      hoverItem () {
        this.parent.hoverIndex = this.index;
      },
      handleClick () {
        if (!this.disabled) {
          this.parent.$emit('input', this.value);
          this.parent.visible = false;
        }
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
    beforeCreate () {
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

