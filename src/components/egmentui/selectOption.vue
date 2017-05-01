<template>
  <div class="eg-select-option"
       :class="{
      hover: (parent.hoverIndex === index  || parent.keyIndex === index) && !disabled,
      selected: selected,
      disabled: disabled
    }"
       @mouseenter="hoverItem"
       @click="handleClick"
       v-if="show"
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
        index: -1,
        show: true
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
      handleClick (e) {
        if (!this.parent.multiple && !this.disabled) {
          this.parent.$emit('input', this.value);
          this.parent.visible = false;
        }
        if (this.parent.multiple && !this.disabled) {
          let arr = this.parent.value.concat([]);
          let index = arr.indexOf(this.value);
          index !== -1 ? arr.splice(index, 1) : arr.push(this.value);
          this.parent.$emit('input', arr);
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
      },
      selected () {
        if (!this.parent.multiple) {
          return this.parent.selectIndex === this.index && !this.disabled;
        } else {
          return this.parent.selectIndexArr.indexOf(this.index) !== -1 && !this.disabled;
        }
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

