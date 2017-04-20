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

const components = {
  EgButton,
  EgButtonGroup,
  EgCheckbox,
  EgCheckboxGroup,
  EgDialog,
  EgInput,
  EgRadio,
  EgRadioGroup,
  EgRadioButton
}
export default {
  // Vue.use执行该函数并传入Vue
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key]);
    });
  }
}
