(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4c92b1"],{"057f":function(t,r,n){var e=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(r){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(e(t))}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[],n=r.constructor={};return n[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"470d":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container"},[n("Parent")],1)},o=[],i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container"},[n("h2",[t._v("父子组件通信方式2:$parent和$children")]),n("Child",{ref:"Child1"}),n("Child",{ref:"Child2"}),n("div",[n("button",{on:{click:t.add}},[t._v("添加一条数据，看看是否是响应式")])]),n("div",[n("button",{on:{click:t.getChildren}},[t._v("通过$children直接获取子组件属性，如data和methods")])])],1)},a=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function f(t,r){if(t){if("string"===typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,r):void 0}}function u(t,r){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=f(t))||r&&t&&"number"===typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw i}}}}n("99af");var s=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container"},[n("ul",t._l(t.array,(function(r,e){return n("li",{key:r},[t._v(" "+t._s(r)+" "),n("button",{on:{click:function(r){return t.passIndex(e)}}},[t._v("子组件"+t._s(t.$vnode.data.ref)+"通过$parent事件的方式，传值给父组件")])])})),0)])},l=[],d={name:"Child",created:function(){console.log(this.$vnode.data.ref)},data:function(){return{array:this.$parent.array,index:""}},methods:{passIndex:function(t){this.$parent.getIndex(t)}}},v=d,b=n("2877"),h=Object(b["a"])(v,s,l,!1,null,"794b7e07",null),p=h.exports,y={name:"Parent",components:{Child:p},data:function(){return{array:["我是父组件传递的值1","我是父组件传递的值2"]}},methods:{getIndex:function(t){alert("这是子组件传过来的下标：".concat(t))},add:function(){this.array.push("我是父组件传递的值".concat(this.array.length+1))},getChildren:function(){var t,r=this.$children,n=u(r);try{for(n.s();!(t=n.n()).done;){var e=t.value;if(alert("组件的ref值为：".concat(e.$vnode.data.ref)),"Child1"===e.$vnode.data.ref){alert("我是".concat(e.$vnode.data.ref,"子组件，array值是：").concat(e.array,"，passIndex方法是").concat(e.passIndex));break}}}catch(o){n.e(o)}finally{n.f()}}}},g=y,m=Object(b["a"])(g,i,a,!1,null,"0d6263ce",null),w=m.exports,S={name:"ViewB",components:{Parent:w}},x=S,O=Object(b["a"])(x,e,o,!1,null,"5fdbf6aa",null);r["default"]=O.exports},"4df4":function(t,r,n){"use strict";var e=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),c=n("50c4"),f=n("8418"),u=n("35a1");t.exports=function(t){var r,n,s,l,d,v,b=o(t),h="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,g=void 0!==y,m=u(b),w=0;if(g&&(y=e(y,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(r=c(b.length),n=new h(r);r>w;w++)v=g?y(b[w],w):b[w],f(n,w,v);else for(l=m.call(b),d=l.next,n=new h;!(s=d.call(l)).done;w++)v=g?i(l,y,[s.value,w],!0):s.value,f(n,w,v);return n.length=w,n}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},"746f":function(t,r,n){var e=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},8418:function(t,r,n){"use strict";var e=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},"99af":function(t,r,n){"use strict";var e=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),c=n("7b0b"),f=n("50c4"),u=n("8418"),s=n("65f0"),l=n("1dde"),d=n("b622"),v=n("2d00"),b=d("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",y=v>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!a(t))return!1;var r=t[b];return void 0!==r?!!r:i(t)},w=!y||!g;e({target:"Array",proto:!0,forced:w},{concat:function(t){var r,n,e,o,i,a=c(this),l=s(a,0),d=0;for(r=-1,e=arguments.length;r<e;r++)if(i=-1===r?a:arguments[r],m(i)){if(o=f(i.length),d+o>h)throw TypeError(p);for(n=0;n<o;n++,d++)n in i&&u(l,d,i[n])}else{if(d>=h)throw TypeError(p);u(l,d++,i)}return l.length=d,l}})},"9bdd":function(t,r,n){var e=n("825a"),o=n("2a62");t.exports=function(t,r,n,i){try{return i?r(e(n)[0],n[1]):r(n)}catch(a){throw o(t),a}}},a4d3:function(t,r,n){"use strict";var e=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),f=n("4930"),u=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),b=n("825a"),h=n("7b0b"),p=n("fc6a"),y=n("c04e"),g=n("5c6c"),m=n("7c73"),w=n("df75"),S=n("241c"),x=n("057f"),O=n("7418"),A=n("06cf"),$=n("9bf2"),j=n("d1e7"),C=n("9112"),_=n("6eeb"),P=n("5692"),E=n("f772"),I=n("d012"),k=n("90e3"),N=n("b622"),T=n("e538"),J=n("746f"),F=n("d44e"),M=n("69f3"),B=n("b727").forEach,D=E("hidden"),Q="Symbol",U="prototype",V=N("toPrimitive"),W=M.set,q=M.getterFor(Q),z=Object[U],G=o.Symbol,H=i("JSON","stringify"),K=A.f,L=$.f,R=x.f,X=j.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),rt=P("symbol-to-string-registry"),nt=P("wks"),et=o.QObject,ot=!et||!et[U]||!et[U].findChild,it=c&&s((function(){return 7!=m(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=K(z,r);e&&delete z[r],L(t,r,n),e&&t!==z&&L(z,r,e)}:L,at=function(t,r){var n=Y[t]=m(G[U]);return W(n,{type:Q,tag:t,description:r}),c||(n.description=r),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ft=function(t,r,n){t===z&&ft(Z,r,n),b(t);var e=y(r,!0);return b(n),l(Y,e)?(n.enumerable?(l(t,D)&&t[D][e]&&(t[D][e]=!1),n=m(n,{enumerable:g(0,!1)})):(l(t,D)||L(t,D,g(1,{})),t[D][e]=!0),it(t,e,n)):L(t,e,n)},ut=function(t,r){b(t);var n=p(r),e=w(n).concat(bt(n));return B(e,(function(r){c&&!lt.call(n,r)||ft(t,r,n[r])})),t},st=function(t,r){return void 0===r?m(t):ut(m(t),r)},lt=function(t){var r=y(t,!0),n=X.call(this,r);return!(this===z&&l(Y,r)&&!l(Z,r))&&(!(n||!l(this,r)||!l(Y,r)||l(this,D)&&this[D][r])||n)},dt=function(t,r){var n=p(t),e=y(r,!0);if(n!==z||!l(Y,e)||l(Z,e)){var o=K(n,e);return!o||!l(Y,e)||l(n,D)&&n[D][e]||(o.enumerable=!0),o}},vt=function(t){var r=R(p(t)),n=[];return B(r,(function(t){l(Y,t)||l(I,t)||n.push(t)})),n},bt=function(t){var r=t===z,n=R(r?Z:p(t)),e=[];return B(n,(function(t){!l(Y,t)||r&&!l(z,t)||e.push(Y[t])})),e};if(f||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=k(t),n=function(t){this===z&&n.call(Z,t),l(this,D)&&l(this[D],r)&&(this[D][r]=!1),it(this,r,g(1,t))};return c&&ot&&it(z,r,{configurable:!0,set:n}),at(r,t)},_(G[U],"toString",(function(){return q(this).tag})),_(G,"withoutSetter",(function(t){return at(k(t),t)})),j.f=lt,$.f=ft,A.f=dt,S.f=x.f=vt,O.f=bt,T.f=function(t){return at(N(t),t)},c&&(L(G[U],"description",{configurable:!0,get:function(){return q(this).description}}),a||_(z,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:G}),B(w(nt),(function(t){J(t)})),e({target:Q,stat:!0,forced:!f},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var n=G(r);return tt[r]=n,rt[n]=r,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!c},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:vt,getOwnPropertySymbols:bt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),H){var ht=!f||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));e({target:"JSON",stat:!0,forced:ht},{stringify:function(t,r,n){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!ct(t))return d(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!ct(r))return r}),o[1]=r,H.apply(null,o)}})}G[U][V]||C(G[U],V,G[U].valueOf),F(G,Q),I[D]=!0},a630:function(t,r,n){var e=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,r,n){var e=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,f="name";e&&!(f in i)&&o(i,f,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,r,n){var e=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),f=[].push,u=function(t){var r=1==t,n=2==t,u=3==t,s=4==t,l=6==t,d=7==t,v=5==t||l;return function(b,h,p,y){for(var g,m,w=i(b),S=o(w),x=e(h,p,3),O=a(S.length),A=0,$=y||c,j=r?$(b,O):n||d?$(b,0):void 0;O>A;A++)if((v||A in S)&&(g=S[A],m=x(g,A,w),t))if(r)j[A]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:f.call(j,g)}else switch(t){case 4:return!1;case 7:f.call(j,g)}return l?-1:u||s?s:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d28b:function(t,r,n){var e=n("746f");e("iterator")},e01a:function(t,r,n){"use strict";var e=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),f=n("9bf2").f,u=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[r]=!0),r};u(d,s);var v=d.prototype=s.prototype;v.constructor=d;var b=v.toString,h="Symbol(test)"==String(s("test")),p=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=b.call(t);if(a(l,t))return"";var n=h?r.slice(7,-1):r.replace(p,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,n){var e=n("b622");r.f=e},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fb6a:function(t,r,n){"use strict";var e=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),f=n("fc6a"),u=n("8418"),s=n("b622"),l=n("1dde"),d=l("slice"),v=s("species"),b=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var n,e,s,l=f(this),d=c(l.length),p=a(t,d),y=a(void 0===r?d:r,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,p,y);for(e=new(void 0===n?Array:n)(h(y-p,0)),s=0;p<y;p++,s++)p in l&&u(e,s,l[p]);return e.length=s,e}})}}]);