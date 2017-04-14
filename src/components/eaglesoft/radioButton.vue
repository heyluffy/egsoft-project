<template>
  <label class="eg-radio-button"
     :class="[
      size ? 'eg-radio-' + size : '',
      {
        'checked': store === label,
        'disabled': isDisabled
      }
    ]"
  >
    <input class="eg-radio-button-input" type="radio"
     :value="label"
     v-model="store"
     :disabled="isDisabled"
     :name="radioName"
    />
    <span class="eg-radio-button-inner" :style="(store === label) ? customStyle : ''"><slot>{{label}}</slot></span>
  </label>
</template>
<script>
    export default {
      props: {
        value: [String, Number],
        label: {
          type: [String, Number],
          require: true
        },
        name: String,
        disabled: Boolean
      },
      computed: {
        _radioGroup () {
          let parent = this.$parent;
          while (parent) {
            if (parent.$options.componentName === 'EgRadioGroup') {
              return parent;
            } else {
              parent = parent.$parent;
            }
          }
          return false;
        },
        store: {
          get () {
            return this._radioGroup ? this._radioGroup.value : this.value;
          },
          set (val) {
            if (this._radioGroup) {
              this._radioGroup.$emit('input', val);
            } else {
              this.$emit('input', val);
            }
          }
        },
        // 定义样式
        customStyle () {
          if (this._radioGroup) {
            return {
              backgroundColor: this._radioGroup.fill || '',
              borderColor: this._radioGroup.fill || '',
              boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
              color: this._radioGroup.textColor || ''
            };
          } else {
            return '';
          }
        },
        size () {
          return this._radioGroup ? this._radioGroup.size : '';
        },
        isDisabled () {
          return this._radioGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
        },
        radioName () {
          return this._radioGroup ? this._radioGroup.name : this.name;
        }
      },
      mounted () {
        console.log(this.value);
      }
    }
</script>
<style>
</style>

