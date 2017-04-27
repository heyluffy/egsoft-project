/**
 * Created by EG on 2017/4/27.
 * 自定义指令
 */
import Vue from 'vue';
const nodeList = {
  id: 0
};
const ctx = '@@clickoutsideContext';
document.addEventListener('click', function(e) {
  const arr = Object.keys(nodeList);
  arr.forEach(function(key) {
    if (typeof nodeList[key] !== 'number') {
      nodeList[key][ctx].documentHandler(e);
    }
  })
});
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    const id = nodeList.id++;
    nodeList[id] = el;

    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el[ctx] = {
      id,
      documentHandler
    };
  },
  update() {},
  unbind(el, binding) {
    delete nodeList[el[ctx].id]
  }
})
