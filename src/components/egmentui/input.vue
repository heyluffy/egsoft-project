<template>
  <div class="eg-input"
       :class="[
      size ? 'eg-input-' + size : '',
      {
        'disabled': disabled
      }
    ]"
       v-clickoutside="handleClose"
  >
    <i v-if="icon" class="eg-input-icon" :class="'eg-icon-' + icon" @click="handleIconClick"></i>
    <input class="eg-input-inner"
           :value="currentValue"
           :type="type"
           :name="name"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           :autocomplete="autocomplete"
           :maxlength="maxlength"
           :minlength="minlength"
           :max="max"
           :min="min"
           :autofocus="autofocus"
           :step="step"
           :form="form"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"
           @keyup.enter="handleEnter"
           @keydown="handleKeydown"
    />
    <transition name="sug" @after-leave="handleHide">
    <div v-if="sugComplete" v-show="visible" class="eg-input-sug">
      <div v-for="(item, index) in dataFilter" class="eg-input-sug-item"
           :class="{
            'key': index === keyIndex,
            'selected': index === selectIndex
          }"
           @click="handleSugClick(index)"
      >{{item}}</div>
    </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'EgInput',
    componentName: 'EgInput',
    data () {
      return {
        visible: false,
        // 匹配的数据
        dataFilter: [],
        selectIndex: -1,
        keyIndex: -1,
        dropStyle: {}
      }
    },
    props: {
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {},
      form: String,
      step: {},
      autofocus: Boolean,
      size: String,
      icon: String,
      readonly: Boolean,
      disabled: Boolean,
      autocomplete: {
        type: String,
        default: 'off'
      },
      sugComplete: Boolean,
      // 本地提示数据
      sugData: Array,
      // 远程提示访问地址
      action: String
    },
    methods: {
      handleIconClick (evt) {
        this.$emit('on-icon-click', evt, this.currentValue);
      },
      handleInput (evt) {
        this.sugComplete && this.handleFilter(evt.target.value);
        this.$emit('input', evt.target.value);
        this.$emit('on-input', evt);
      },
      handleChange (evt) {
        this.$emit('change', evt);
      },
      handleFocus (evt) {
        this.sugComplete && this.handleFilter(evt.target.value);
        this.$emit('focus', evt);
      },
      handleBlur (evt) {
        this.$emit('blur', evt);
      },
      handleEnter (evt) {
        this.$emit('enter', evt);
      },
      localFilter (val) {
        // 本地匹配
        this.dataFilter = this.sugData.filter(function (item) {
          return val && item.toLowerCase().indexOf($.trim(val).toLowerCase()) !== -1;
        });
        this.visible = this.dataFilter.length > 0;
      },
      remoteFilter (val) {
        // 远程匹配
        let vm = this;
        $.ajax({
          url: this.action,
          data: {
            text: val
          },
          type: 'post',
          dataType: 'json',
          success: function (data) {
            vm.dataFilter = data;
            vm.visible = vm.dataFilter.legnth > 0
          }
        })
      },
      handleFilter (val) {
        this.action ? this.remoteFilter(val) : this.localFilter(val);
      },
      handleClose () {
        this.visible = false;
      },
      sugChose (index) {
        this.visible = false;
        this.selectIndex = index;
        this.$emit('input', this.dataFilter[index]);
      },
      navigateOptions (type) {
        if (type === 'up' && --this.keyIndex < 0) {
          this.keyIndex = this.dataFilter.length - 1;
        }
        if (type === 'down' && ++this.keyIndex > this.dataFilter.length - 1) {
          this.keyIndex = 0;
        }
      },
      handleKeydown (e) {
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
              if (this.keyIndex > -1 && this.keyIndex < this.dataFilter.length) {
                this.sugChose(this.keyIndex);
              }
              break;
          }
        }
      },
      handleSugClick (index) {
        this.sugChose(index);
        this.$emit('sug-click', this.dataFilter[index]);
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
        this.keyIndex = -1;
        this.selectIndex = -1;
      }
    },
    computed: {
      currentValue () {
        return this.value;
      }
    },
    mounted () {
      this.setDropStyle();
    }
  }
</script>
<style>
</style>
