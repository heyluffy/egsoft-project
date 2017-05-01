<template>
  <div class="eg-select"
       :class="[{
        'eg-select-visible': visible,
        'disabled': disabled,
        'clearable': clearable,
        'selected': selected
        },
        size ? 'eg-select-' + size : ''
      ]"
       v-clickoutside="handleClose"
  >
    <div class="eg-select-input" @mouseenter="!multiple && setIcon(1)" @mouseleave="!multiple && setIcon(0)"
         @click="!disabled && handleClick()">
      <div ref="selectList" class="eg-select-list" v-if="multiple">
        <eg-tag v-for="item in selectIndexArr" closable @icon-click.stop="deleteTag(item)">
          {{options[item].currentLabel}}
        </eg-tag>
        <input ref="filterInput" v-if="filterable" type="text" class="eg-filter-input" v-model="filterText" @input="handleInput" />
      </div>
      <eg-input ref="input" @on-input="handleInput" @on-icon-click="handleIconClick" :icon="currentIcon"
                v-model="currentLabel" :size="size"
                :disabled="disabled" :readonly="isReadonly" :placeholder="currentPlaceholder"></eg-input>
    </div>
    <transition name="drop" @after-leave="handleHide">
      <eg-select-dropdown ref="drop" v-show="visible" :drop-style="dropStyle">
        <div v-if="!isFound" class="not-found" v-text="noFoundText"></div>
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
        // 单选选中下标
        selectIndex: -1,
        // 多选选中下标集合
        selectIndexArr: [],
        // 键盘控制的下标
        keyIndex: -1,
        currentIcon: icons[0],
        // 单选当前选中label
        currentLabel: '',
        noFoundText: '无匹配数据',
        isFound: true,
        filterText: ''
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
      },
      // 是否可搜索
      filterable: Boolean
    },
    computed: {
      selected () {
        if (this.multiple && this.selectIndexArr.length === 0) {
          return false;
        }
        if (!this.multiple && this.selectIndex === -1) {
          return false;
        }
        return true;
      },
      currentPlaceholder () {
        if (this.multiple && this.selectIndexArr.length > 0) {
          return '';
        }
        return this.placeholder;
      },
      isReadonly () {
        if (this.filterable && !this.multiple) {
          return false;
        }
        return true;
      }
    },
    watch: {
      value () {
        this.recover();
      },
      filterText (val) {
        $(this.$refs.filterInput).width(val.length * 14 + 20);
        this.recover();
      },
      visible (val) {
        if (val && this.filterable) {
          this.multiple ? $(this.$refs.filterInput).focus() : $(this.$refs.input.$el).find('input').focus();
        }
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
        let vm = this;
        this.dropStyle = {
          position: 'absolute',
          left: '0px',
          top: (select.height() + 3) + 'px',
          width: select.width() + 'px'
        }
      },
      handleHide () {
        this.hoverIndex = -1;
        this.keyIndex = -1;
        this.resetFilter();
      },
      setIcon (index) {
        if (this.clearable && this.selectIndex > -1) {
          this.currentIcon = icons[index];
        }
      },
      handleIconClick (opts) {
        if (this.clearable && this.selectIndex > -1) {
          opts.event.stopPropagation();
          this.$emit('input', '');
          this.currentIcon = icons[0];
        }
      },
      getSelectIndex () {
        // 单选 获取selectIndex
        this.selectIndex = -1;
        this.currentLabel = '';
        if (!this.value) return;
        for (let i = 0, len = this.options.length; i < len; i++) {
          if (this.value === this.options[i].value) {
            this.selectIndex = i;
            this.currentLabel = this.options[i].currentLabel;
            return;
          }
        }
      },
      getMulSelectIndex () {
        // 多选 获取selectIndexArr
        this.selectIndexArr = [];
        const obj = {};
        if (!this.multiple) return;
        for (let i = 0, len = this.value.length; i < len; i++) {
          obj[this.value[i]] = true;
        }
        for (let i = 0, len = this.options.length; i < len; i++) {
          if (obj[this.options[i].value]) {
            this.selectIndexArr.push(i);
          }
        }
      },
      deleteTag (index) {
        let arr = this.value.concat([]);
        arr.splice(this.value.indexOf(this.options[index].value), 1);
        this.$emit('input', arr);
      },
      setInputHeight() {
        if (this.multiple && $(this.$refs.selectList).height() > 0) {
          $(this.$refs.input.$el).find('.eg-input-inner').height($(this.$refs.selectList).height());
        }
      },
      recover () {
        this.multiple ? this.getMulSelectIndex() : this.getSelectIndex();
        this.$nextTick(function () {
          this.setInputHeight();
          this.setDropStyle();
        })
      },
      navigateOptions (type) {
        if (!this.isFound) return;
        if (type === 'up' && --this.keyIndex < 0) {
          this.keyIndex = this.options.length - 1;
        }
        if (type === 'down' && ++this.keyIndex > this.options.length - 1) {
          this.keyIndex = 0;
        }
        if (this.options[this.keyIndex].disabled || !this.options[this.keyIndex].show) {
          this.navigateOptions(type);
        }
      },
      handleKeyDown (e) {
        if (this.visible) {
          const keyCode = e.keyCode;
          switch (keyCode) {
            case 27:
              // esc
              e.preventDefault();
              this.visible = false;
              break;
            case 38:
              // up
              e.preventDefault();
              this.navigateOptions('up');
              break;
            case 40:
              // down
              e.preventDefault();
              this.navigateOptions('down');
              break;
            case 13:
              // enter
              if (this.keyIndex > -1 && this.keyIndex < this.options.length && this.options[this.keyIndex].show) {
                this.options[this.keyIndex].handleClick();
              }
              break;
          }
        }
      },
      handleInput (e) {
        if (this.filterable) {
          const vm = this;
          const val = e.target.value;
          this.visible = true;
          this.isFound = false;
          this.options.forEach(function (option) {
            if (option.currentLabel.toLowerCase().indexOf($.trim(val.toLowerCase())) === -1) {
              option.show = false;
            } else {
              option.show = true;
              vm.isFound = true;
            }
          })
        }
      },
      resetFilter () {
        if (this.filterable) {
          this.options.forEach(function (option) {
            option.show = true;
          });
          this.isFound = true;
          this.currentLabel = this.selectIndex > -1 ? this.options[this.selectIndex].currentLabel : '';
        }
      }
    },
    beforeCreate () {
    },
    created () {
    },
    mounted () {
      this.recover();
      document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }
</script>
<style>
</style>

