(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"01c9":function(t,e,a){"use strict";a.r(e);var i=a("b252"),l=a("e753");for(var n in l)"default"!==n&&function(t){a.d(e,t,function(){return l[t]})}(n);a("c3e4");var c,s=a("f0c5"),o=Object(s["a"])(l["default"],i["b"],i["c"],!1,null,"356a1758",null,!1,i["a"],c);e["default"]=o.exports},"3a5a":function(t,e,a){var i=a("87a8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var l=a("4f06").default;l("6001a42e",i,!0,{sourceMap:!1,shadowMode:!1})},8392:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(a("cebc")),n=a("2f62"),c={data:function(){return{}},methods:(0,l.default)({},(0,n.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(t.logout(),setTimeout(function(){uni.navigateBack()},200))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=c},"87a8":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-356a1758]{background:#f8f8f8}.list-cell[data-v-356a1758]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-356a1758]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-356a1758]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-356a1758]{background:#fafafa}.list-cell.b-b[data-v-356a1758]:after{left:%?30?%}.list-cell.m-t[data-v-356a1758]{margin-top:%?16?%}.list-cell .cell-more[data-v-356a1758]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-356a1758]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-356a1758]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-356a1758]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-356a1758]{background:#f8f8f8}',""])},b252:function(t,e,a){"use strict";var i,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("个人资料")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("收货地址")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("收货地址")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("实名认证")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("实名认证")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell m-t"},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("消息推送")]),a("v-uni-switch",{attrs:{checked:!0,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"list-cell m-t b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("清除缓存")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("关于Dcloud")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("关于Dcloud")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell"},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("检查更新")]),a("v-uni-text",{staticClass:"cell-tip"},[t._v("当前版本 1.0.3")]),a("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),a("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogout.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},n=[];a.d(e,"b",function(){return l}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return i})},c3e4:function(t,e,a){"use strict";var i=a("3a5a"),l=a.n(i);l.a},e753:function(t,e,a){"use strict";a.r(e);var i=a("8392"),l=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=l.a}}]);