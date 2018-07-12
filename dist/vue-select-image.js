!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueSelectImage",[],t):"object"==typeof exports?exports.VueSelectImage=t():e.VueSelectImage=t()}(window,function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-select-image",props:{dataImages:{type:Array,default:function(){return[]}},selectedImages:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},useCheckMark:{type:Boolean,default:!1},maskContent:{type:String,default:""},useMask:{type:Boolean,default:!1},useLabel:{type:Boolean,default:!1},rootClass:{type:String,default:"vue-select-image"},activeClass:{type:String,default:"--selected"},h:{type:String,default:"auto"},w:{type:String,default:"auto"}},data:function(){return{singleSelected:{id:""},multipleSelected:[]}},computed:{dataImagesLocal:function(){return this.dataImages||[]}},created:function(){this.setInitialSelection()},methods:{classThumbnail:function(e,t){var n=this.rootClass+"__thumbnail";return e===t?n+" "+n+this.activeClass:""+n},classThumbnailMultiple:function(e){var t=this.rootClass+"__thumbnail",n=t+" is--multiple";return this.isExistInArray(e)?n+" "+t+this.activeClass:""+n},onSelectImage:function(e){e.disabled||(this.singleSelected=Object.assign({},this.singleSelected,e),this.$emit("onselectimage",e))},isExistInArray:function(e){return this.multipleSelected.find(function(t){return e===t.id})},removeSelected:function(e){return this.multipleSelected.filter(function(t){return e!==t.id})},onSelectMultipleImage:function(e){this.isExistInArray(e.id)?this.multipleSelected=this.removeSelected(e.id):this.multipleSelected.push(e),this.$emit("onselectmultipleimage",this.multipleSelected)},setInitialSelection:function(){this.selectedImages&&(this.isMultiple||1!==this.selectedImages.length?this.multipleSelected=[].concat(this.selectedImages):this.singleSelected=Object.assign({},this.selectedImages[0]))}}}},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s);for(var l in s)"default"!==l&&function(e){n.d(t,e,function(){return s[e]})}(l);t.default=i.a},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.rootClass},[n("ul",{class:e.rootClass+"__wrapper"},e._l(e.dataImagesLocal,function(t,s){return n("li",{key:s,class:e.rootClass+"__item",attrs:{disabled:e.dataImagesLocal[s].disabled}},[e.isMultiple?e._e():n("div",{class:e.classThumbnail(e.singleSelected.id,t.id),on:{click:function(n){e.onSelectImage(t)}}},[e.useMask?n("div",{class:e.rootClass+"__mask"},[e.useMask&&e.maskContent?n("span",{class:e.rootClass+"__mask-content",domProps:{innerHTML:e._s(e.maskContent)}}):e._e()]):e._e(),e._v(" "),n("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}}),e._v(" "),e.useLabel?n("label",{class:e.rootClass+"__lbl"},[e._v("\n              "+e._s(t.alt)+"\n        ")]):e._e()]),e._v(" "),e.useCheckMark&&!e.isMultiple&&e.singleSelected.id===t.id?n("span",{staticClass:"checkmark"},[n("div",{staticClass:"checkmark_circle"}),e._v(" "),n("div",{staticClass:"checkmark_stem"}),e._v(" "),n("div",{staticClass:"checkmark_kick"})]):e._e(),e._v(" "),e.isMultiple?n("div",{class:e.classThumbnailMultiple(t.id),on:{click:function(n){e.onSelectMultipleImage(t)}}},[n("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}}),e._v(" "),e.useLabel?n("label",{class:e.rootClass+"__lbl"},[e._v("\n              "+e._s(t.alt)+"\n        ")]):e._e()]):e._e()])}))])},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},function(e,t,n){"use strict";function s(e,t,n,s,i,l,a,r){var o,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),l&&(u._scopeId="data-v-"+l),a?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=o):i&&(o=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(e,t){return o.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:u}}n.d(t,"a",function(){return s})},,function(e,t,n){"use strict";var s=n(0);n.n(s).a},function(e,t,n){"use strict";n.r(t);var s=n(3),i=n(2);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);n(6);var a=n(4),r=Object(a.a)(i.default,s.a,s.b,!1,null,null,null);t.default=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=n(7),l=(s=i)&&s.__esModule?s:{default:s};var a=function(e){e.component(l.default.name,l.default)};l.default.install=a,t.default=l.default}])});