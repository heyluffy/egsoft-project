const popupManage = {
  zIndex: 2000,
  idSeed: 1,
  instances: {}, // 存放实例
  quque: [], // 打开的实例
  modalDom: null,
  modalSize: 0, // 用来记录当前多少个弹窗需要modal
  getZIndex() {
    return this.zIndex++;
  },
  getId() {
    return this.idSeed++;
  },
  add(instance) {
    this.quque.push(instance);
  },
  remove() {
    this.quque.pop();
    this.hideModal();
  },
  hideOther() {
    let quque = this.quque;
    for (let i = 0, len = quque.length; i < len - 1; i++) {
      this.quque[i].dialogHide = true;
    }
  },
  recover(isPreShow) {
    const instance = this.quque[this.quque.length - 1];
    if (instance && isPreShow) {
      instance.dialogHide = false;
    } else if (instance) {
      instance.visible = false;
    }
  },
  register(id, instance) {
    this.instances[id] = instance;
  },
  deregister(id) {
    this.instances[id] = null;
    delete this.instances[id];
  },
  showModal() {
    if (this.modalSize++ > 0) return;
    this.modalDom || this.getModal();
    $('body').append(this.modalDom);
    this.modalDom.css('opacity', 1);
  },
  hideModal() {
    const self = this;
    if (--this.modalSize === 0 && this.modalDom) {
      console.log(this.modalSize);
      this.modalDom.css('opacity', 0);
      setTimeout(function() {
        self.modalDom.remove();
      }, 200);
    }
  },
  getModal() {
    const modalDom = $("<div class='eg-modal' style='z-index: 1999'></div>");
    this.modalDom = modalDom;
  }
}
export default popupManage;
