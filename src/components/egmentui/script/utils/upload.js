/**
 * ajax图片上传插件
 */

const Upload = {
  /**
   * 创建form
   * @param id form id标识
   * @param fileElementId file的id
   * @param data 附加数据
   */
  createUploadForm (id, fileElementId, data) {
    var fileId = 'J_uploadFile' + fileElementId;
    // form的target在创建节点时如果没有加入，后期再绑定是无法找到对应name的iframe的，所以刚开始先要默认声明一个
    var form = $('<form action="" method="post" name="' + id + '" id="' + id + '" target="target" enctype="multipart/form-data"></form>');
    if (data) {
      for (var i in data) {
        $('<input type="hidden" name="' + i + '" value="' + data[i] + '"/>').appendTo(form);
      }
    }
    var oldElement = $('#' + fileElementId);
    var newElement = oldElement.clone();
    oldElement.attr('id', fileId);
    oldElement.before(newElement);
    oldElement.appendTo(form);
    form.css({position: 'absolute', top: -1200, left: -1200});
    form.appendTo('body');
    return form;
  },
  /**
   * 创建iframe
   * @param id
   * @param url
   */
  createUploadIframe (id, uri) {
    var iframe = $('<iframe name="' + id + '" id="' + id + '"></iframe>');
    // 判断window.ActiveXObject 确定浏览器是否支持ActiveX控件，从而确认用不同的形式创建XMLHTTPRequest对象
    if (window.ActiveXObject) {
      if (typeof uri === 'boolean') {
        iframe.src('javascript:false');
      } else {
        iframe.src(uri);
      }
    }
    iframe.css({position: 'absolute', left: -1200, top: -1200});
    iframe.appendTo('body');
    return iframe.get(0);
  },
  ajaxFileUpload (opts) {
    /*
     * ajax参数说明
     * global 指定该ajax请求是否触发全局ajax事件
     * context 用来指定回调函数的上下文
     * complete 当请求结束后调用这个函数，不论成功失败
     * */
    var s = $.extend({}, $.ajaxSettings, opts);
    var id = new Date().getTime();
    var formId = 'J_Uploadform' + id;
    var iframeId = 'J_Uploadiframe' + id;
    // 创建提交的form
    var form = this.createUploadForm(formId, s.fileElementId, (typeof s.data === 'undefined' ? '' : s.data));
    // 创建跳转的iframe
    var io = this.createUploadIframe(iframeId, s.secureurli);

    // 判断是否需要触发全局ajax事件 $.ajaxSettings中有个global用来配置是否需要全局ajax事件 默认为true 这里是我们模拟ajax请求所以得手动判断
    if (s.global && $.active++ === 0) {
      $.event.trigger('ajaxStart');
    }

    var requestDone = false;
    // Create the request Object
    var xml = {};

    if (s.global) {
      $.event.trigger('ajaxEnd', [xml, s])
    }

    var uploadCallback = function (isTimeout) {
      var io = $('#' + iframeId).get(0);
      try {
        if (io.contentWindow) {
          console.log(io)
          xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
          xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;
        } else if (io.contentDocument) {
          xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
          xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentWindow.document;
        }
      } catch (e) {
        Upload.handleError(s, xml, null, e);
      }
      if (xml || isTimeout === 'timeout') {
        requestDone = true;
        var status;
        try {
          status = !isTimeout ? 'success' : 'error';
          if (status !== 'error') {
            var data = Upload.uploadHttpData(xml, s.dataType);
            if (s.success) {
              s.success(data, status);
            }
            if (s.global) {
              $.event.trigger('ajaxSuccess', [xml, s]);
            }
          } else {
            Upload.handleError(s, xml, status);
          }
        } catch (e) {
          status = 'error';
          Upload.handleError(s, xml, status, e);
        }
        if (s.global) {
          $.event.trigger('ajaxComplete', [xml, s]);
        }

        if (s.global && $.active-- === 1) {
          $.event.trigger('ajaxStop', [xml, s]);
        }

        if (s.complete) {
          s.complete(xml, status);
        }
        $(io).unbind();

        // setTimeout(function () {
        //   try {
        //     $(io).remove();
        //     $(form).remove();
        //   } catch (e) {
        //     Upload.handleError(s, xml, status, e);
        //   }
        // }, 100);
        xml = null;
      }
    }

    // 判断超时
    if (s.timeout > 0) {
      var setTime = setTimeout(function () {
        if (!requestDone) uploadCallback('timeout');
      }, s.timeout);
    }

    // 表单提交
    try {
      form = $(form);
      form.attr('action', s.url);
      form.attr('method', 'POST');
      form.attr('target', iframeId);
      // 即enctype
      if (form.encoding) {
        form.attr('encoding', 'multipart/form-data');
      } else {
        form.attr('enctype', 'multipart/form-data');
      }
      form.submit();
    } catch (e) {
      Upload.handleError(s, xml, null, e);
    }
    var self = this;
    $(io).on('load', function () {
      clearTimeout(setTime);
      uploadCallback();
    });

    return {
      about: function () {
      }
    };
  },
  uploadHttpData (r, type) {
    var data = !type;
    data = (type === 'xml' || data ? r.responseXML : r.responseText);
    if (type === 'script') {
      $.globalEval(data);
    }
    if (type === 'json') {
      var tagEle = data.indexOf('<') !== -1 && $(data).size() ? $(data) : data;
      data = $.parseJSON($.trim(tagEle));
    }
    if (type === 'html') {
      $('<div>').html(data).evalScripts();
    }
    return data;
  },
  handleError (s, xhr, status, e) {
    if (e && e.error) {
      e.error.call(s.context || s, xhr, status, e);
    }
    if (s.global) {
      (s.context ? $(s.context) : $.event).trigger('ajaxError', [xhr, status, e]);
    }
  }
};
export default Upload;

