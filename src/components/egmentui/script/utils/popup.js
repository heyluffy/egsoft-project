/**
 * Created by EG on 2017/4/20.
 * 弹窗组件
 */
import Vue from 'vue'
import PopupManager from './popupManage'
import merge from './merge'

// 用于id
let idSeed = 1;
const transitions = [];
const hookTransition = (transition) => {
  // 是否存在该transition
  if (transitions.indexOf(transition) !== -1) return;

  // 不存在该transition
  const getVueInstance = (element) => {
    let instance = element.__vue__;
    if (!instance) {
      // 得到前一个同胞节点
      const textNode = element.previousSibling;
      if (textNode.__vue__) {
        instance = textNode.__vue__;
      }
    }
    return instance;
  };
  Vue.transition(transition, {
    afterEnter (el) {
      const instance = getVueInstance(el);

      if (instance) {
        instance.doAfterOpen && instance.doAfterOpen();
      }
    },
    afterLeave (el) {
      const instance = getVueInstance(el);

      if (instance) {
        instance.doAfterClose && instance.doAfterClose();
      }
    }
  });
};

const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling; // nextElementSibling ie9以上 nextSibling ie9及ie9以下
    getDOM(dom);
  }
  return dom;
}

export default {
  props: {
    openDelay: {},
    closeDelay: {}
  },
  created () {

  },
  beforeMount () {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },
  beforeDestroy () {

  },
  data () {

  },
  watch: {

  },
  methods: {
    open(options) {
      if (!this.rendered) {
        this.rendered = true;
        this.$emit('input', true);
      }

      const props = merge({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);
      const openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(function() {
          // 直接写this._openTimer = null? close的时候根据this._openTimer !== null 去判断是否要清除，这样是不是和不理
          this._openTimer = null;
          this.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen (props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;

      this._opening = true;

      this.visible = true;

      const dom = getDOM(this.$el);

      const modal = props.modal;

      const zIndex = props.zIndex;
      if (zIndex) {
        PopupManager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          PopupManager.closeModal(this._popupId);
          this._closing = false;
        }
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? '' : dom, props.modalClass, props.modalFade);
        if (props.lockScroll) {

        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute'
      }
      dom.style.zIndex = PopupManager.nextZIndex();
      this.opened = true;

      this.onOpen && this.onOpen();
    },
    doAfterOpen () {
      this._opening = false;
    },
    close () {
      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);
      const closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function() {
          this._closeTimer = null;
          this.doClose();
        }, closeDelay);
      }
    },
    doClose () {
      this.visible = false;
      // 正在关闭
      this._closing = true;
      // 解除body滚动锁定
      if (this.localScroll) {

      }
      this.opened = false;

      this.onClose && this.onClose();
    },
    doAfterClose () {
      PopupManager.closeModal(this._popupId);
      this._closing = false;
    }
  }
}
