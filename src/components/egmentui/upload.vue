<template>
  <div class="eg-upload">
      <input
        ref="file"
        type="file"
        class="eg-upload-file"
        :multiple="multiple"
        :accept="accept"
        :id="id"
        @change="handleChange"
      />
    <div class="eg-upload-select" @click="handleClick">
      <slot></slot>
    </div>
    <div class="eg-upload-tip"></div>
    <div class="eg-upload-list"></div>
  </div>
</template>
<script>
  export default {
    name: 'egUpload',
    componentName: 'egUpload',
    data () {
      return {
        id: 'aaa'
      }
    },
    props: {
      // 上传的地址
      action: {
        type: String,
        require: true
      },
      // 接受上传的文件类型
      accept: {
        type: String,
        default: 'image'
      },
      // 上传大小的限制(单位为kb)
      maxSize: {
        type: Number,
        default: 1024
      },
      // 是否支持多文件上传
      multiple: {
        type: Boolean,
        default: false
      },
      // 上传的附加参数
      data: Object,
      // 是否开启拖拽
      drag: Boolean,
      // 文件上传之前的钩子
      beforeUpload: Function
    },
    methods: {
      handleChange (e) {
//        console.log(this.$refs.form);
//        this.$refs.form.submit();
        this.$upload.ajaxFileUpload({
          url: 'http://127.0.0.1/upload.php',
          fileElementId: this.id,
          iframeId: 'iframe',
          dataType: 'json',
          success (data, status) {
            if (status === 'success') {
              alert('上传成功！');
            }
          }
        })
//        const files = e.target.files;
//
//        if (!files) return;
//
//        this.uploadFiles(files);
//
//        this.$refs.file.value = null; // test
      },
      handleClick () {
        this.$refs.file.click();
      },
      uploadFiles (files) {
        let postFiles = Array.prototype.slice.call(files); // 把拥有length属性的对象转换成数组
        if (!this.multiple) {
          postFiles = postFiles.slice(0, 1);
        }
        if (postFiles.length === 0) return;
      },
      upload () {

      }
    }
  }
</script>
<style>
</style>

