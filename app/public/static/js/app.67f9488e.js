(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a={app:0},o=[];function s(t){return c.p+"static/js/"+({maintaining:"maintaining",result:"result"}[t]||t)+"."+{maintaining:"0efadf82",result:"7c1d1cb9"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={maintaining:1,result:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="static/css/"+({maintaining:"maintaining",result:"result"}[t]||t)+"."+{maintaining:"75cd4079",result:"b684c288"}[t]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){i[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",p.name="ChunkLoadError",p.type=r,p.request=i,n[1](p)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"222d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isRouterAlive?n("router-view"):t._e()],1)},a=[],o={name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}},s=o,c=n("2877"),l=Object(c["a"])(s,i,a,!1,null,null,null),u=l.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body_content"}},[n("div",{staticClass:"content-left"},[n("div",{staticClass:"notify"},[t._v(" 我是公告 ")]),n("div",{staticClass:"main-container"},[n("div",{staticClass:"text-contianer"},[n("div",{staticClass:"text-header"},[n("ul",[n("li",{staticStyle:{color:"rgb(215, 58, 73)"},attrs:{id:"percentage"}},[t._v(" 重复率 "+t._s(t.response.repeatPercent)+"% ")]),n("li",[n("button",{class:"text-button "+(t.isComplete?"submit-pedding":"submit-ready"),on:{click:t.buttonClick}},[t._v(" "+t._s(t.isComplete?"查重中···":"提交小作文")+" ")])]),n("li",[n("button",{staticClass:"text-button report",attrs:{disabled:!t.reportable},on:{click:t.getReport}},[t._v(" 生成查重报告 ")])])])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"内容字数不少于10个字，不多于1000字。输入信息后，点击下方「提交小作文」进行查重 !",maxlength:t.maxlength},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("p",{staticClass:"text-status"},[n("span",[t._v(" "+t._s(t.text.length)+"/"+t._s(t.maxlength)+" 种类: "+t._s(t.typeofText)+" ")])])])]),n("div",{staticClass:"render-data-list"},t._l(t.response.alike,(function(t){return n("Article",{key:t.id,attrs:{article:t}})})),1)]),n("div",{staticClass:"content-right"},[n("div",{staticClass:"right-top-description right-item"},[n("h3",{staticClass:"description-title"},[t._v(" 枝网查重系统介绍 ")]),t._l(t.description,(function(e){return n("p",{key:e.key},[n("b",[t._v(t._s(e.key))]),n("br"),"text"==e.type?n("em",{staticClass:"description-value"},[t._v(t._s(e.value))]):t._e(),"link"==e.type?n("em",[n("a",{staticClass:"description-value",attrs:{href:e.value.href}},[t._v(t._s(e.value.text))])]):t._e()])}))],2),n("div",{staticClass:"right-bottom-links right-item"},[n("h3",{staticClass:"description-title"},[t._v("欢迎关注")]),t._l(t.person_list,(function(e){return n("p",{key:e.href},[n("a",{staticStyle:{color:"rgb(251, 114, 153)"},attrs:{href:"https://space.bilibili.com/"+e.href,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])])}))],2)])])},d=[],h=n("2909"),m=n("53ca");n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("4d90"),n("a15b"),n("d81d"),n("b64b"),n("1276"),n("159b"),n("fb6a"),n("a630"),n("6062"),n("466d"),n("4de4"),n("b680");function g(t,e){if(0===arguments.length||!t)return null;var n,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(m["a"])(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},a=r.replace(/{([ymdhisa])+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return a}var v=function(t){var e=function(t){if(0==t.length)return 0;t=t.replace(/[[\u4e00-\u9fa5_]{3,10}]+/," ");var e=/([0-9a-z\u4e00-\u9fa5)]+)/i,n=Object(h["a"])(t).filter((function(t){return t.match(e)})).length/t.length;return n},n=function(t){return Object(h["a"])(new Set(t)).length},r=e(t),i=n(t);return r<.15||i<7},b=function(t){return t.replace(/[[\u4e00-\u9fa5_]{3,10}]+/," ").length},_=function(t){return t.map((function(t){return{id:t[1].rpid,repeatPercent:(100*t[0]).toFixed(2),content:t[1].content,author:{name:t[1].m_name,id:t[1].mid},createTime:g(1e3*t[1].ctime,"{y}/{m}/{d} {h}:{i}"),url:t[2]}}))},y=n("4478"),x=n("bc3a"),k=n.n(x),C=n("5a0c"),w=n.n(C);function S(){var t=this,e=function(e,n){return t.$message({showClose:!0,message:e,type:n})},n="".concat("/v1/api","/check");return this.text.length<10?e("小作文字数太少了捏","warning"):this.agree_check?void(this.isComplete||(this.isComplete=!0,k.a.post(n,{text:this.text}).then((function(n){if(t.isComplete=!1,0!=n.data.code)return e("服务器异常","error");var r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(y["a"])(w.a,e).format("YYYY-MM-DD HH:mm:ss")},i=n.data.data;t.response={repeatPercent:(100*i.rate).toFixed(2),time:r(),TimeRange:[r(1e3*i.start_time),r(1e3*i.end_time)],alike:_(i.related),text:t.text}})).catch((function(n){throw t.isComplete=!1,e("服务器异常","error"),new Error(n)})))):e("请先同意协议","warning")}var O=[{name:"A-SOUL_Official",href:"703007996"},{name:"贝拉kira",href:"672353429"},{name:"嘉然今天吃什么",href:"672328094"},{name:"向晚大魔王",href:"672346917"},{name:"乃琳Queen",href:"672342685"},{name:"珈乐Carol",href:"351609538"}],j=[{key:"比对库范围：",value:"b站动态、视频评论区",type:"text"},{key:"参考文献：",value:"[1]李旭.基于串匹配方法的文档复制检测系统研究[D].燕山大学.",type:"text"},{key:"开源地址：",value:{text:"ASoulCnki",href:"https://github.com/stream2000/ASoulCnki"},type:"link"},{key:"反馈地址：",value:{text:"ASoulCnki_Official",href:"https://t.bilibili.com/542031663106174238"},type:"link"}],A=n("d31b"),P={name:"Home",components:{Article:A["a"]},data:function(){return{text:"",agree_check:!0,maxlength:1e3,button_content:"提交小作文",isComplete:!1,response:{repeatPercent:0,timeRange:[],text:"",alike:[]},person_list:O,description:j}},methods:{buttonClick:function(){S.call(this,arguments)},getReport:function(){this.$router.push({name:"result",params:{response:this.response}})},agree_check_click:function(){this.agree_check=!this.agree_check}},computed:{typeofText:function(){return v(this.text)?"字符画/表情":"正常小作文"},checkAgree:function(){return localStorage.getItem("agreed")},length:function(){return b(this.text)},reportable:function(){return 0!=this.response.text.length}},mounted:function(){}},E=P,T=(n("d44d"),Object(c["a"])(E,f,d,!1,null,null,null)),R=T.exports;r["default"].use(p["a"]);var D=[{path:"/",name:"index",component:R},{path:"/maintaining",name:"maintaining",component:function(){return n.e("maintaining").then(n.bind(null,"6404"))}},{path:"/result",name:"result",component:function(){return n.e("result").then(n.bind(null,"f6f8"))}},{path:"/protocol",name:"protocol",component:function(){return n.e("result").then(n.bind(null,"345a"))}},{path:"/maintaining.html",name:"maintaining",component:function(){return n.e("maintaining").then(n.bind(null,"6404"))}},{path:"/result.html",name:"result",component:function(){return n.e("result").then(n.bind(null,"f6f8"))}},{path:"/protocol.html",name:"protocol",component:function(){return n.e("result").then(n.bind(null,"345a"))}}],M=new p["a"]({routes:D,mode:"history"}),$=M,L=n("5c96"),N=n.n(L);n("f5df1"),n("0fae");r["default"].use(N.a,{size:"medium"}),r["default"].config.productionTip=!1,new r["default"]({router:$,render:function(t){return t(u)}}).$mount("#app")},"95cf":function(t,e,n){"use strict";n("bd8d")},bd8d:function(t,e,n){},d31b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"content-info"},[n("ul",[n("li",{staticStyle:{color:"#d73a49"}},[t._v("重复率: "+t._s(t.article.repeatPercent)+"%")]),n("li",[t._v(t._s(t.article.createTime))]),n("li",[t._v(" 作者: "),n("a",{staticStyle:{color:"#005cc5"},attrs:{href:"https://space.bilibili.com/"+t.article.author.id,target:"_blank"}},[t._v(" "+t._s(t.article.author.name)+" ")])]),n("li",[n("a",{staticStyle:{color:"#005cc5"},attrs:{href:t.article.url,target:"_blank"}},[t._v("原文地址")])])])]),n("div",{staticClass:"content-detail"},[t._v(" "+t._s(t.article.content)+" ")])])},i=[],a={name:"Article",props:{article:Object}},o=a,s=(n("95cf"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"2327e807",null);e["a"]=c.exports},d44d:function(t,e,n){"use strict";n("222d")}});