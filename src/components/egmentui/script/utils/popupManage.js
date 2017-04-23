/**
 * Created by EG on 2017/4/21.
 * 弹窗管理
 */
import {
  addClass,
  removeClass
} from './dom.js';
let hasModal = false;
const getModel = function() {
  let modalDom = popupManage.modalDom;
  if (!modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    popupManage.modalDom = modalDom;
    modalDom.addEventListener('click', function() {
      popupManage.doOnModalClick && popupManage.doOnModalClick();
    })
  }
  return modalDom;
};
// 存放dailog实例
const instances = {};
const popupManage = {
  // 弹窗层级
  zIndex: 2000,
  modalFade: true,
  getInstance(id) {
    return instances[id];
  },
  register(id, instance) {
    // 登记
    if (id && instance) {
      instances[id] = instance;
    }
  },
  nextZIndex() {
    return this.zIndex++;
  },
  // 存放modal
  modalStack: [],
  doOnModalClick() {
    // 取到最上面一个modal
    const topItem = this.modalStack[this.modalStack.length - 1];
    if (!topItem) return;
    const instance = this.getInstance(topItem.id);
    if (instance && instance.clickModalClose) {
      instance.close();
    }
  },
  openModal(id, zIndex, dom, modalClass, modalFade) {
    // 当前实例是否运行于服务器
    if (Vue.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    const modalStack = this.modalStack;
    for (let i = 0, len = modalStack.length; i < len; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }
    const modalDom = getModal();
    addClass(modalDom, 'eg-modal');
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'eg-modal-enter');
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/); // \s匹配任何空白字符，包括空格、制表符、换页符等等, 等价于[ \f\n\r\t\v]
      classArr.forEach(item => addClass(modalDom, item));
    }
    // 移除动画类名
    // 是否指定同级节点
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      // 判断dom不为html节点
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';
    this.modalStack.push({
      id: id,
      zIndex: zIndex,
      modalClass: modalClass
    });
  },
  closeModal(id) {}
};
export default popupManage;
