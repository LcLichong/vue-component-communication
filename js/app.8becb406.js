(function(e){function n(n){for(var r,a,u=n[0],c=n[1],d=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(n);while(f.length)f.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0a56a628":"4aa3c791","chunk-2d0c8300":"d91eccd8","chunk-2d0f0fdc":"ba91adaa","chunk-2d20e7e5":"0dad7f52","chunk-2d2227a4":"2b55a616","chunk-7f4c92b1":"5b49ea2c","chunk-9720afae":"48acd71c"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-0a56a628":1,"chunk-9720afae":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0a56a628":"ce65ed1e","chunk-2d0c8300":"31d6cfe0","chunk-2d0f0fdc":"31d6cfe0","chunk-2d20e7e5":"31d6cfe0","chunk-2d2227a4":"31d6cfe0","chunk-7f4c92b1":"31d6cfe0","chunk-9720afae":"81a34548"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var d=i[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],l=d.getAttribute("data-href");if(l===r||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),t(i)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var h=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/ParentChildViewA"}},[e._v("父子组件通信1")]),t("router-link",{attrs:{to:"/ParentChildViewB"}},[e._v("父子组件通信2")]),t("router-link",{attrs:{to:"/ParentChildViewC"}},[e._v("父子组件通信3")]),t("router-link",{attrs:{to:"/ParentChildViewD"}},[e._v("父子组件通信4")]),t("router-link",{attrs:{to:"/ParentChildViewE"}},[e._v("父子组件通信5")])],1),t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/ParentChildViewF"}},[e._v("兄弟组件通信1")]),t("router-link",{attrs:{to:"/ParentChildViewG"}},[e._v("兄弟组件通信2")])],1),t("router-view")],1)},o=[],i=(t("034f"),t("2877")),u={},c=Object(i["a"])(u,a,o,!1,null,null,null),d=c.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),f=function(){return t.e("chunk-2d0f0fdc").then(t.bind(null,"9f70"))},h=function(){return t.e("chunk-7f4c92b1").then(t.bind(null,"470d"))},s=function(){return t.e("chunk-2d20e7e5").then(t.bind(null,"b034"))},p=function(){return t.e("chunk-2d2227a4").then(t.bind(null,"cf7b"))},m=function(){return t.e("chunk-2d0c8300").then(t.bind(null,"548c"))},v=function(){return t.e("chunk-0a56a628").then(t.bind(null,"57c0"))},b=function(){return t.e("chunk-9720afae").then(t.bind(null,"5e7f"))};r["a"].use(l["a"]);var w=[{path:"/",name:"Home",redirect:"/ParentChildViewA"},{path:"/ParentChildViewA",name:"ParentChildViewA",component:f},{path:"/ParentChildViewB",name:"ParentChildViewB",component:h},{path:"/ParentChildViewC",name:"ParentChildViewC",component:s},{path:"/ParentChildViewD",name:"ParentChildViewD",component:p},{path:"/ParentChildViewE",name:"ParentChildViewE",component:m},{path:"/ParentChildViewF",name:"ParentChildViewF",component:v},{path:"/ParentChildViewG",name:"ParentChildViewG",component:b}],g=new l["a"]({routes:w}),k=g,C=t("2f62");r["a"].use(C["a"]);var P=new C["a"].Store({state:{AMsg:"",BMsg:""},mutations:{receiveAMsg:function(e,n){e.AMsg=n.AMsg},receiveBMsg:function(e,n){e.BMsg=n.BMsg}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:k,store:P,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){}});