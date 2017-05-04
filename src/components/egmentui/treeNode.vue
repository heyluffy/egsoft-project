<template>
  <div class="eg-tree-node"
       :class="{expanded: expanded}"
       v-show="visible"
  >
    <div class="eg-tree-text" @click="handleClick">
      <span class="eg-tree-icon" v-if="data.children && data.children.length > 0"></span>
      <eg-checkbox
        v-if="showCheckbox"
        v-model="checked"
        @on-change="handleChange"
        @click.native.stop
        :indeterminate="indeterminate"
        style="padding-right: 10px;"
      ></eg-checkbox>
      <div class="eg-tree-content"
          :class="{filter:visible&&isFilter&&filter}"
      >{{data.label}}</div>
    </div>
    <transition name="slide"
                @afterEnter="resetHeight"
                @afterLeave="resetHeight"
    >
      <div ref="children" class="eg-tree-children" v-show="expanded && data.children && data.children.length > 0"
           style="height: auto;">
        <eg-tree-node :filter="filter" :has-top-check="isTopCheck" :show-checkbox="showCheckbox" :data="item"
                      :key="item"
                      v-for="item in data.children"></eg-tree-node>
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
        treeNodes: [],
        indeterminate: false,
        childrenChecked: 0,
        isLastNode: false,
        isTopCheck: false,
        isFilter: false,
        visible: true
      }
    },
    props: {
      data: Object,
      showCheckbox: Boolean,
      value: Boolean,
      hasTopCheck: Boolean,
      filter: String
    },
    watch: {
      data () {
      },
      expanded (val) {
        this.data.expanded = val;
//        this.$set(this.data, 'expanded', val);
      },
      checked (val) {
        this.data.checked = val;
        if (this.isLastNode) {
          this.setParent(val);
        }
      },
      filter (val) {
        console.log(this.data.id, 'filter', val);
        this.handelFilter(val);
      }
    },
    computed: {
      parent () {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName === 'EgTreeNode') {
            return parent;
          }
          parent = parent.$parent;
        }
        return null;
      }
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
        const val = evt.target.checked;
        this.setChildren(val);
//        this.setParent(val);
      },
      setChildren (val) {
        for (let i = 0, len = this.treeNodes.length; i < len; i++) {
          this.treeNodes[i].checked = val;
        }
      },
      setParent (val) {
        if (this.parent && this.parent.$options.componentName === 'EgTreeNode') {
          val ? this.parent.childrenChecked++ : this.parent.childrenChecked--;
          this.parent.indeterminate = !!this.parent.childrenChecked && (this.parent.treeNodes.length > this.parent.childrenChecked);
          this.parent.checked = this.parent.childrenChecked ? !this.parent.indeterminate : false;
          this.parent.setParent(val);
        }
      },
      expandParents () {
        // 打开祖先节点
        if (this.parent) {
          this.parent.visible = true;
          this.parent.expanded = true;
          this.parent.expandParents();
        }
      },
      handelFilter (filter) {
        // 进行筛选 筛选需要只展示匹配的，其他都是隐藏的，默认先隐藏，匹配再展示
        this.visible = false;
        if (this.data.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          this.visible = true;
          this.isFilter = true;
          this.expandParents();
        }
      }
    },
    created () {
      // 初始化已选效果
      if (!this.hasTopCheck && this.checked) {
        this.isTopCheck = true;
      }
    },
    mounted () {
      if (this.parent) {
        if (!this.data.children || this.data.children.length === 0) {
          // 判断是否为末端节点
          this.isLastNode = true;
          this.parent.treeNodes.push(this);
          this.checked && this.parent.childrenChecked++;
        } else {
          // 如果不是末端节点，则把自己拥有的末端节点数加给父节点
          this.parent.treeNodes = this.parent.treeNodes.concat(this.treeNodes);
          this.parent.childrenChecked = this.parent.childrenChecked + this.childrenChecked;
        }
      }
      this.isTopCheck && this.setChildren(true);
    }
  }
</script>
<style>
</style>

