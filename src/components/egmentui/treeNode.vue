<template>
  <div class="eg-tree-node"
       :class="{expanded: expanded}"
  >
    <div class="eg-tree-text" @click="handleClick">
      <span class="eg-tree-icon" v-if="data.children && data.children.length > 0"></span>
      <eg-checkbox
        v-model="checked"
        :label="data.id"
        @on-change="handleChange"
        @click.native.stop
        :indeterminate="indeterminate"
        style="padding-right: 10px;"
      ></eg-checkbox>
      <div class="eg-tree-content">{{data.label}}</div>
    </div>
    <transition name="slide"
                @afterEnter="resetHeight"
                @afterLeave="resetHeight"
    >
      <div ref="children" class="eg-tree-children" v-show="expanded && data.children && data.children.length > 0"
           style="height: auto;">
        <eg-tree-node :data="item" :key="item" v-for="item in data.children"></eg-tree-node>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'EgTreeNode',
    componentName: 'EgTreeNode',
    data () {
      return {
        expanded: this.data.expanded,
        checked: this.data.checked,
        indeterminate: false,
        treeNodes: [],
        childrenChecked: 0
      }
    },
    props: {
      data: Object,
      showCheckbox: Boolean,
      value: Boolean
    },
    watch: {
      data () {
        console.log('chage');
      },
      expanded (val) {
        this.data.expanded = val;
//        this.$set(this.data, 'expanded', val);
      },
      checked (val) {
//        this.$set(this.data, 'checked', val);
        this.data.checked = val;
      }
    },
    computed: {
      parent () {
        let parent = this.$parent;
        while (parent) {
          console.log(parent);
          if (parent.$options.componentName === 'EgTreeNode' || parent.$options.componentName === 'EgTree') {
            return parent;
          }
          parent = parent.$parent;
        }
        return null;
      }
//      expanded () {
//        return this.data.expanded;
//      },
//      checked () {
//        return this.data.checked;
//      }
    },
    methods: {
      handleClick (el) {
        const children = this.$refs.children;
        const vm = this;
        setTimeout(function () {
          vm.expanded = !vm.expanded;
        }, 10);
        if (children.style.height === 'auto') {
          children.style.height = $(children).height() + 'px';
        }
      },
      resetHeight (el) {
        el.style.height = 'auto';
      },
      handleChange (evt) {
        // 处理checkbox change事件
//        console.log(evt.target.checked)
        const val = evt.target.checked;
        this.setChildren(val);
        this.setParent(val);
      },
      setChildren (val) {
        for (let i = 0, len = this.treeNodes.length; i < len; i++) {
          this.treeNodes[i].checked = val;
          val ? this.childrenChecked++ : this.childrenChecked--;
        }
      },
      setParent (val) {
        if (this.parent && this.parent.$options.componentName === 'EgTreeNode') {
          val ? this.parent.childrenChecked++ : this.parent.childrenChecked--;
          this.parent.indeterminate = !!this.parent.childrenChecked && (this.parent.treeNodes.length > this.parent.childrenChecked);
          console.log(this.parent.indeterminate);
          this.parent.checked = this.parent.childrenChecked ? !this.parent.indeterminate : false;
        }
      },
    },
    mounted () {
      if (this.parent) {
        this.parent.treeNodes.push(this);
        this.checked && this.parent.childrenChecked++;
      }
//      console.log(this.parent);
    }
  }
</script>
<style>
</style>

