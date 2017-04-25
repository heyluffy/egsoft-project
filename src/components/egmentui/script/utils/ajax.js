/**
 * ajax图片上传插件
 */

const Ajax = {
  /**
   * 创建form
   * @param id form id标识
   * @param fileElementId file的id
   * @param data 附加数据
   */
  createUploadForm (id, fileElementId, data) {
    var formId = "J_uploadForm" + id;
    var fileId = "J_uploadFile" + fileElementId;
    var form = $('<form action="" method="post" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
    if (data) {
      for (var i in data) {
        $('<input type="hidden" name="' + i + '" value="' + data[i] + '"/>').appendTo(form);
      }
    }
    var oldElement = $("#" + fileElementId);
    var newElement = oldElement.clone();
    oldElement.attr("id", fileId);
    oldElement.before(newElement);
    oldElement.appendTo(form);
    form.css({position: "absolute", top: -1200, left: -1200});
    form.appendTo("body");
    return form;
  },
  /**
   * 创建iframe
   * @param id
   * @param fileElementId
   * @param data
   */
  createUploadIframe (id, url) {
    var iframeId = "J_uploaIframe" + id;
    var iframe = $('<iframe name="' + iframeId + '" id="' + iframeId + '"></iframe>');
    if (window.ActiveXObject) {
      if (typeof url === 'boolean') {
        iframe.src('javascript:false');
      }else {
        iframe.src(url);
      }
    }
    iframe.css({position: 'absolute', left: -1200, right: -1200});
    iframe.appendTo('body');
    return iframe.get(0);

  },
  ajaxFileUpload (opts) {
    var s = $.extend({}, $.ajaxSettings, opts);
    var id = new Date().getTime();
    // 创建提交的form
    var form = this.createUploadForm();
    // 创建跳转的iframe
    var iframe = this.createUploadIframe();

    // 触发form的提交

    // 当iframe onload后获取iframe里面内容，因为iframe和form target相同，所以代替本页面跳转，跳转到的后台处理页面会输出提交内容

    // 处理数据
  }
};
export default Ajax;

