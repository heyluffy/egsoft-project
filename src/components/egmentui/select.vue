<template>
  <div class="eg-select"
       :class="[{
        'eg-select-visible': visible,
        'disabled': disabled,
        'clearable': clearable,
        'selected': selectIndex > -1
        },
        size ? 'eg-select-' + size : ''
      ]"
       v-clickoutside="handleClose"
  >
    <div class="eg-select-input" @mouseenter="setIcon(1)" @mouseleave="setIcon(0)" @click="!disabled && handleClick()">
      <div class="eg-select-list">
        <div class="eg-select-tag">
          111
        </div>
      </div>
      <eg-input @on-icon-click="handleIconClick" :icon="currentIcon" v-model="currentLabel" :size="size"
                :disabled="disabled" :readonly="readonly" :placeholder="placeholder"></eg-input>
    </div>
    <transition name="drop" @after-leave="handleHide">
      <eg-select-dropdown v-show="visible" :drop-style="dropStyle">
        <slot></slot>
      </eg-select-dropdown>
    </transition>
  </div>
</template>
<script>
  const icons = ['caret-bottom', 'circle-close'];
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
//        selectIndex: -1,
//        selectIndexArr: [],
        currentIcon: icons[0],
        currentLabel: ''
      }
    },
    props: {
      readonly: {
        type: Boolean,
        default: true
      },
      value: {},
      disabled: Boolean,
      size: '',
      // 可清空
      clearable: Boolean,
      // 可多选
      multiple: Boolean,
      placeholder: {
        type: String,
        default: '请选择'
      }
    },
    computed: {
      selectIndex () {
        // 当前选中的Option index
        if (!this.value || this.multiple) return -1;
        for (let i = 0, len = this.options.length; i < len; i++) {
          if (this.value === this.options[i].value) {
            return i;
          }
        }
        return -1;
      },
      selectIndexArr () {
        if (!this.multiple) return [];
        const obj = {};
        const arr = [];
        for (let i = 0, len = this.value.length; i < len; i++) {
          obj[this.value[i]] = true;
        }
        console.log(this.options.length);
        for (let i = 0, len = this.options.length; i < len; i++) {
          console.log('getValue');
          if (obj[this.options[i].value]) {
            console.log('getValue');
            arr.push(i);
          }
        }
        return arr;
      },
      currentLabel () {
        // 当前选中的option的label
        if (this.selectIndex > -1) {
          return this.options[this.selectIndex].currentLabel;
        }
        return '';
      },
      curPlaceholder () {
//        if (this.multiple && this.selectIndexArr.length > 0) {
//          return this.placeholder;
//        }
//        return this.placeholder;
      }
    },
    watch: {},
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
      },
      handleHide () {
        this.hoverIndex = -1;
      },
      setIcon (index) {
        if (this.clearable && this.selectIndex > -1) {
          this.currentIcon = icons[index];
        }
      },
      handleIconClick (opts) {
//        console.log('event', e);
        if (this.clearable && this.selectIndex > -1) {
          opts.event.stopPropagation();
          this.$emit('input', '');
          this.currentIcon = icons[0];
        }
      },
      getLabel () {
        // 单选 获取选中label
        this.currentLable = '';
        if (!this.value) return;
        for (let i = 0, len = this.options.length; i < len; i++) {
          if (this.value === this.options[i].value) {
            this.currentLable = this.options[i].currentLable;
            return;
          }
        }
      },
      getMutipleLabel () {
        // 多选 获取选中label
        this.currentLable = [];
//        if (!this.multiple) return [];
//        const obj = {};
//        const arr = [];
//        for (let i = 0, len = this.value.length; i < len; i++) {
//          obj[this.value[i]] = true;
//        }
//        for (let i = 0, len = this.options.length; i < len; i++) {
//          console.log('getValue');
//          if (obj[this.options[i].value]) {
//            console.log('getValue');
//            arr.push(i);
//        }
      }
    },
    beforeCreate () {
    },
    created () {
    },
    mounted () {
      this.setDropStyle();
      this.multiple ? this.getMutipleLabel() : this.getLabel();
    }
  }
</script>
<style>
</style>

