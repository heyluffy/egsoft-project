/**
 * Created by EG on 2017/4/19.
 * 用于组件之间的通信
 */
import Vue from 'vue'

export default {
  EgEmitter: new Vue(),
  emit (name, val) {
    this.EgEmitter.$emit(name, val);
  },
  on (name, fn) {
    this.EgEmitter.$on(name, fn);
  }
}

