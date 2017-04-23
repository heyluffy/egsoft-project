<template>
    <div class="eg-progress"
      :class="[
        currentStatus ? 'eg-progress-' + currentStatus : '',
        {
          'eg-progress-inside': textInside,
          'eg-progress-hidetext': hideText
        }
      ]"
    >
      <div class="eg-progress-bar">
        <div class="eg-progress-outer" :style="{height: stockWidth + 'px', lineHeight: stockWidth + 'px'}">
          <div class="eg-progress-inner" :style="{width: percent + '%'}">
            <span v-if="textInside && !hideText" class="eg-progress-inner-text" :style="{fontSize: progressTextSize + 'px'}">{{percent + '%'}}</span>
          </div>
        </div>
      </div><span v-if="!textInside && !hideText" class="eg-progress-text"
        :class="[
          isIcon ? 'eg-icon-circle-' + iconStyle[currentStatus] : ''
        ]"
        :style="{fontSize: progressTextSize + 'px'}"
      >{{ !isIcon ? (percent + '%') : '' }}</span>
    </div>
</template>
<script>
export default {
  name: 'egProgress',
  componentName: 'egProgress',
  data () {
    return {
      iconStyle: {success: 'check', error: 'cross'}
    }
  },
  props: {
    status: {
      type: String,
      default: ''
    },
    percent: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    stockWidth: {
      type: Number,
      default: 6
    },
    textInside: Boolean,
    hideText: Boolean
  },
  computed: {
    isIcon () {
      if (this.currentStatus === 'success' || this.currentStatus === 'error') {
        return true;
      }
      return false;
    },
    progressTextSize () {
      let fontSize = 12;
      if (this.type === 'line' && !this.textInside) {
        fontSize = fontSize + this.stockWidth * 0.4;
      }
      if (this.type === 'line' && this.textInside) {
        fontSize = this.stockWidth * 0.8;
      }
      return fontSize < 12 ? 12 : fontSize;
    },
    currentStatus () {
      console.log(this.percent);
      console.log(this.percent === 100);
      return this.percent === 100 ? 'success' : this.status;
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style>
</style>

