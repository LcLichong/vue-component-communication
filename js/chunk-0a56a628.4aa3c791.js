(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a56a628"],{"57c0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Parent")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",[e._v("兄弟组件通信方式1:vuex")]),n("ChildA"),n("ChildB")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h3",[e._v("我是A组件")]),n("button",{on:{click:e.transform}},[e._v("点我让B组件接收到数据")]),n("p",[e._v("因为你点了B，所以我的信息发生了变化："+e._s(e.BMessage))])])},o=[],l={name:"ChildA",props:{},data:function(){return{AMessage:"Hello，B组件，我是A组件"}},computed:{BMessage:function(){return this.$store.state.BMsg}},methods:{transform:function(){this.$store.commit("receiveAMsg",{AMsg:this.AMessage})}}},u=l,h=n("2877"),m=Object(h["a"])(u,i,o,!1,null,"8d678ca6",null),d=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h3",[e._v("我是B组件")]),n("button",{on:{click:e.transform}},[e._v("点我让A组件接收到数据")]),n("p",[e._v("因为你点了A，所以我的信息发生了变化："+e._s(e.AMessage))])])},p=[],v={name:"ChildB",props:{},data:function(){return{BMessage:"Hello，A组件，我是B组件"}},computed:{AMessage:function(){return this.$store.state.AMsg}},methods:{transform:function(){this.$store.commit("receiveBMsg",{BMsg:this.BMessage})}}},_=v,A=Object(h["a"])(_,f,p,!1,null,"8b604bde",null),B=A.exports,g={name:"Parent",components:{ChildA:d,ChildB:B},methods:{}},M=g,b=(n("e785"),Object(h["a"])(M,c,r,!1,null,"61058118",null)),C=b.exports,$={name:"ViewA",components:{Parent:C}},w=$,k=Object(h["a"])(w,s,a,!1,null,"344476bc",null);t["default"]=k.exports},ac43:function(e,t,n){},e785:function(e,t,n){"use strict";n("ac43")}}]);