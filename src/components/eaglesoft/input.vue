<template>
  <div class="eg-input"
       :class="[
      size ? 'eg-input-' + size : '',
      {
        'disabled': disabled
      }
    ]"
  >
    <i v-if="icon" class="eg-input-icon" :class="'eg-icon-' + icon" @click="handleIconClick"></i>
    <input class="eg-input-inner"
           :value="currentValue"
           :type="type"
           :name="name"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
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
    />
    <div class="eg-input-sug">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'EgInput',
    data () {
      return {
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
      disabled: Boolean
    },
    methods: {
      handleIconClick (evt) {
        this.$emit('on-icon-click', {
          event: evt,
          value: this.currentValue
        });
      },
      handleInput (evt) {
        this.$emit('input', evt.target.value);
        this.$emit('on-input', {
          event: evt,
          value: evt.target.value
        });
      },
      handleChange (evt) {
        this.$emit('change', {
          event: evt,
          value: evt.target.value
        });
      },
      handleFocus (evt) {
        this.$emit('focus', {
          event: evt,
          value: evt.target.value
        });
      },
      handleBlur (evt) {
        this.$emit('blur', {
          event: evt,
          value: evt.target.value
        });
      },
      handleEnter (evt) {
        this.$emit('enter', {
          event: evt,
          value: evt.target.value
        });
      }
    },
    computed: {
      currentValue () {
        return this.value;
      }
    },
    mounted () {
      console.log(111, this.autofocus);
    }
  }
</script>
<style>
</style>
