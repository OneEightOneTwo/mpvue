require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(12)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Wheader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Wfooter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CoverView__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bus__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notebook_svg__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notebook_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__notebook_svg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      show: true,
      value: '',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      notebook: __WEBPACK_IMPORTED_MODULE_6__notebook_svg___default.a,
      imgUrls: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1054598549,1073845993&fm=111&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2121206715,2955288754&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1454761787,1890833303&fm=27&gp=0.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    Wheader: __WEBPACK_IMPORTED_MODULE_1__components_Wheader__["a" /* default */],
    Wfooter: __WEBPACK_IMPORTED_MODULE_2__components_Wfooter__["a" /* default */],
    CoverView: __WEBPACK_IMPORTED_MODULE_3__components_CoverView__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    },
    toggle: function toggle() {
      this.show = !this.show;
    },
    showGallery: function showGallery() {
      console.log(1);
      // 触发
      __WEBPACK_IMPORTED_MODULE_4__bus__["a" /* default */].$emit('showGallery', '你好');
      __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].state.showGallery = !__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].state.showGallery;
      console.log(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].state.showGallery);
    }
  },

  created: function created() {
    // let app = getApp()
  }
});

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Wfooter_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_098fb39d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Wfooter_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_Wfooter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_098fb39d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_Wfooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Wfooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Wfooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-098fb39d", Component.options)
  } else {
    hotAPI.reload("data-v-098fb39d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      tabs: [{
        url: '/pages/index/main',
        title: '首页'
      }, {
        url: '/pages/mine/main',
        title: '我的'
      }, {
        url: '/pages/map/main',
        title: '地图'
      }]
    };
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', _vm._l((_vm.tabs), function(tab, index) {
    return _c('div', {
      key: index
    }, [_c('navigator', {
      attrs: {
        "url": tab.url,
        "hover-class": "navigator-hover"
      },
      domProps: {
        "textContent": _vm._s(tab.title)
      }
    })], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-098fb39d", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_CoverView_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_51cc1c07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_CoverView_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51cc1c07"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_CoverView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_51cc1c07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_CoverView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\CoverView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CoverView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51cc1c07", Component.options)
  } else {
    hotAPI.reload("data-v-51cc1c07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  method: {
    created: function created() {
      this.videoCtx = wx.createVideoContext('myVideo');
    },
    play: function play() {
      this.videoCtx.play();
    },
    pause: function pause() {
      this.videoCtx.pause();
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video', {
    attrs: {
      "id": "myVideo",
      "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      "controls": false,
      "event-model": "bubble"
    }
  }, [_c('cover-view', {
    staticClass: "controls",
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('cover-view', {
    staticClass: "play",
    attrs: {
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.play
    }
  }, [_c('cover-image', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/notebook.svg",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('cover-view', {
    staticClass: "pause",
    attrs: {
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.pause
    }
  }, [_c('cover-image', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/user.png",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('cover-view', {
    staticClass: "time",
    attrs: {
      "mpcomid": '4'
    }
  }, [_vm._v("00:00")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-51cc1c07", esExports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  // 仓库
  state: {
    showGallery: false
  },
  // 修改state的方法
  mutations: {
    increment: function increment(state) {
      var obj = state;
      obj.count += 1;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU3NDUxNzk1MzQ1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAyNDEuMDAzMzAzdjcwOS45NzMwMTNoNDQzLjczMzQwNmMwIDM3LjcwMjQ4MSAzMC41NjUyMDYgNjguMjY3Njg3IDY4LjI2NzY4NyA2OC4yNjc2ODcgMzcuNzAyNDgxIDAgNjguMjY3Njg3LTMwLjU2NTIwNiA2OC4yNjc2ODctNjguMjY3Njg3aDQ0My43MzM0MDdWMjQxLjAwMzMwM0gweiIgZmlsbD0iIzY0Nzk4QSIgcC1pZD0iMTY0NCI+PC9wYXRoPjxwYXRoIGQ9Ik02Mi43NzY5NzEgMjA2LjA4MjI2aDg5OC40NDM4NzJ2NjgxLjY2ODgxOUg2Mi43NzY5NzF6IiBmaWxsPSIjRUJGMEYzIiBwLWlkPSIxNjQ1Ij48L3BhdGg+PHBhdGggZD0iTTE5OS43NzM3MzEgODAuMDEyMjY2bDM1NC44ODcwMTMgMjQyLjAwMDQyM3Y1NjUuNzM0MDE3bC0zNDEuMjM3ODQ5LTEzNS4wMDQ3MDl6IiBmaWxsPSIjRTFFNkU5IiBwLWlkPSIxNjQ2Ij48L3BhdGg+PHBhdGggZD0iTTU1NC42NjA3NDQgMjE0LjE2ODU0OEwzOTguMTkxNzMgNC43NTU5OTd2NjU0LjMzMzMxN2wxNTYuNDY5MDE0IDIyOC42NTczOTJ6IiBmaWxsPSIjRDVENkRCIiBwLWlkPSIxNjQ3Ij48L3BhdGg+PHBhdGggZD0iTTc4OS4zMTgzNDYgMjA2LjA3Nzg4N3YxNzEuMDA4MTUxbDUxLjQzOTExMS0yNy4zMDcwNzUgNDQuMTMzNDY0IDI3LjMwNzA3NVYyMDYuMDc3ODg3eiIgZmlsbD0iI0U1NjM1MyIgcC1pZD0iMTY0OCI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "width": "355",
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('CoverView', {
    attrs: {
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('van-transition', {
    attrs: {
      "show": _vm.show,
      "custom-class": "block",
      "mpcomid": '3'
    }
  }, [_c('div', [_vm._v("123")])]), _vm._v(" "), _c('i-notice-bar', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_vm._v("\n      2018年世界杯,将于6月14日至7月15日举行\n  ")]), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "卡片标题",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '5'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])]), _vm._v(" "), _c('card', {
    attrs: {
      "text": "测试卡片",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('view', [_vm._v("123")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "primary",
      "eventid": '0',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.toggle
    }
  }, [_vm._v("按钮")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "primary",
      "eventid": '1',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.showGallery
    }
  }, [_vm._v("按钮")]), _vm._v(" "), _c('Wfooter', {
    attrs: {
      "mpcomid": '9'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ })
],[10]);