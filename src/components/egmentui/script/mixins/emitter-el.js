function broadcast (componentName, eventName, params) {
  let children = this.$children;
  let name;
  this.$children.forEach(function (child, index) {
    name = child.$options.componentName;
    if (name === componentName) {
      child.$emit(eventName, params);
    } else {
      broadcast.call(child, componentName, eventName, params);
    }
  });
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      console.log('click');
      // 向上触发父实例事件
      let parent = this.$parent;
      let name;
      while (parent) {
        name = parent.$options.componentName;
        console.log(name === componentName);
        if (name === componentName) {
          parent.$emit(eventName, params);
          return true;
        }
        parent = parent.$parent;
      }
      return false;
    },
    broadcast (componentName, eventName, params) {
      // 向下广播子实例事件
      // 不能直接把函数写在这，因为call没有用，递归call执行后this还是初始调用this
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
