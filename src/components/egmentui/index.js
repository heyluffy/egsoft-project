/**
 * Created by EG on 2017/4/20.
 * 全局注册egmentui的组件
 */
import EgButton from './button'
import EgButtonGroup from './buttonGroup'
import EgCheckbox from './checkbox'
import EgCheckboxGroup from './checkboxGroup'
import EgDialog from './dialog'
import EgInput from './input'
import EgRadio from './radio'
import EgRadioGroup from './radioGroup'
import EgRadioButton from './radioButton'
import EgTree from './tree'
import EgTreeNode from './treeNode'
import EgUpload from './upload'
import EgProgress from './progress'
import EgSelect from './select'
import EgSelectOption from './selectOption'
import EgSelectDropdown from './selectDropdown'
import EgOptionGroup from './optionGroup'
import EgTag from './tag'
import EgLoading from './loading'

const components = {
  EgButton,
  EgButtonGroup,
  EgCheckbox,
  EgCheckboxGroup,
  EgDialog,
  EgInput,
  EgRadio,
  EgRadioGroup,
  EgRadioButton,
  EgTree,
  EgTreeNode,
  EgUpload,
  EgProgress,
  EgSelect,
  EgSelectOption,
  EgSelectDropdown,
  EgTag,
  EgLoading,
  EgOptionGroup
}
export default {
  // Vue.use执行该函数并传入Vue
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key]);
    });
  }
}
