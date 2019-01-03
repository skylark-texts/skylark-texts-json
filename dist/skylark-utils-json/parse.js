/**
 * skylark-utils-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./json"],function(o){"use strict";var n,a,t,e,u,c={"\\":"\\",'"':'"',"/":"/",t:"\t",n:"\n",r:"\r",f:"\f",b:"\b"},i={go:function(){n="ok"},firstokey:function(){e=u,n="colon"},okey:function(){e=u,n="colon"},ovalue:function(){n="ocomma"},firstavalue:function(){n="acomma"},avalue:function(){n="acomma"}},r={go:function(){n="ok"},ovalue:function(){n="ocomma"},firstavalue:function(){n="acomma"},avalue:function(){n="acomma"}},f={"{":{go:function(){a.push({state:"ok"}),t={},n="firstokey"},ovalue:function(){a.push({container:t,state:"ocomma",key:e}),t={},n="firstokey"},firstavalue:function(){a.push({container:t,state:"acomma"}),t={},n="firstokey"},avalue:function(){a.push({container:t,state:"acomma"}),t={},n="firstokey"}},"}":{firstokey:function(){var o=a.pop();u=t,t=o.container,e=o.key,n=o.state},ocomma:function(){var o=a.pop();t[e]=u,u=t,t=o.container,e=o.key,n=o.state}},"[":{go:function(){a.push({state:"ok"}),t=[],n="firstavalue"},ovalue:function(){a.push({container:t,state:"ocomma",key:e}),t=[],n="firstavalue"},firstavalue:function(){a.push({container:t,state:"acomma"}),t=[],n="firstavalue"},avalue:function(){a.push({container:t,state:"acomma"}),t=[],n="firstavalue"}},"]":{firstavalue:function(){var o=a.pop();u=t,t=o.container,e=o.key,n=o.state},acomma:function(){var o=a.pop();t.push(u),u=t,t=o.container,e=o.key,n=o.state}},":":{colon:function(){if(Object.hasOwnProperty.call(t,e))throw new SyntaxError("Duplicate key '"+e+'"');n="ovalue"}},",":{ocomma:function(){t[e]=u,n="okey"},acomma:function(){t.push(u),n="avalue"}},true:{go:function(){u=!0,n="ok"},ovalue:function(){u=!0,n="ocomma"},firstavalue:function(){u=!0,n="acomma"},avalue:function(){u=!0,n="acomma"}},false:{go:function(){u=!1,n="ok"},ovalue:function(){u=!1,n="ocomma"},firstavalue:function(){u=!1,n="acomma"},avalue:function(){u=!1,n="acomma"}},null:{go:function(){u=null,n="ok"},ovalue:function(){u=null,n="ocomma"},firstavalue:function(){u=null,n="acomma"},avalue:function(){u=null,n="acomma"}}};return o.parse=function(o,t){var e,l,s=/^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;n="go",a=[];try{for(;e=s.exec(o);)e[1]?f[e[1]][n]():e[2]?(u=+e[2],r[n]()):(l=e[3],u=l.replace(/\\(?:u(.{4})|([^u]))/g,function(o,n,a){return n?String.fromCharCode(parseInt(n,16)):c[a]}),i[n]()),o=o.slice(e[0].length)}catch(o){n=o}if("ok"!==n||/[^\u0020\t\n\r]/.test(o))throw n instanceof SyntaxError?n:new SyntaxError("JSON");return"function"==typeof t?function o(n,a){var e,c,i=n[a];if(i&&"object"==typeof i)for(e in u)Object.prototype.hasOwnProperty.call(i,e)&&(void 0!==(c=o(i,e))?i[e]=c:delete i[e]);return t.call(n,a,i)}({"":u},""):u}});
//# sourceMappingURL=sourcemaps/parse.js.map
