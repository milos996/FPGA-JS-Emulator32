(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[14,23],{138:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},139:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(138);function o(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(n.a)(t)););return t}},140:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(139);function o(t,e,r){return(o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var o=Object(n.a)(t,e);if(o){var c=Object.getOwnPropertyDescriptor(o,e);return c.get?c.get.call(r):c.value}})(t,e,r||t)}},141:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}var c=r(7);function u(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(c.a)(t):e}r.d(e,"a",(function(){return u}))},142:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},143:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(139),o=r(1);function c(t,e,r,u){return(c="undefined"!==typeof Reflect&&Reflect.set?Reflect.set:function(t,e,r,c){var u,a=Object(n.a)(t,e);if(a){if((u=Object.getOwnPropertyDescriptor(a,e)).set)return u.set.call(c,r),!0;if(!u.writable)return!1}if(u=Object.getOwnPropertyDescriptor(c,e)){if(!u.writable)return!1;u.value=r,Object.defineProperty(c,e,u)}else Object(o.a)(c,e,r);return!0})(t,e,r,u)}function u(t,e,r,n,o){if(!c(t,e,r,n||t)&&o)throw new Error("failed to set property");return r}},56:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(9),o=r(10),c=r(141),u=r(7),a=r(142),i=r(143),f=r(138),b=r(140),s=r(11),p=function(){return"call %s"},l=function(t){function e(t,r,o,a,s){var l;return Object(n.a)(this,e),l=Object(c.a)(this,Object(f.a)(e).call(this,t,r,0,0,s)),Object(b.a)(Object(f.a)(e.prototype),"setArgument32",Object(u.a)(l)).call(Object(u.a)(l),t),Object(b.a)(Object(f.a)(e.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),p(),s),Object(i.a)(Object(f.a)(e.prototype),"isJump",!0,Object(u.a)(l),!0),l}return Object(a.a)(e,t),Object(o.a)(e,[{key:"exec",value:function(t){var e=t.context,r=t.memory;e.sp-=4;var n=e.pc+6;return s.a.push(r,s.a.fix(e.sp)/2,n),e.pc=this.argument,{address:s.a.fix(e.sp),content:n}}}]),e}(s.a)},90:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(9),o=r(10),c=r(141),u=r(7),a=r(142),i=r(143),f=r(138),b=r(140),s=r(56),p=function(){return"callno 0x%08x"},l=function(t){function e(t,r,o,a,s){var l;return Object(n.a)(this,e),l=Object(c.a)(this,Object(f.a)(e).call(this,t,r,0,0,s)),Object(b.a)(Object(f.a)(e.prototype),"setArgument32",Object(u.a)(l)).call(Object(u.a)(l),t),Object(b.a)(Object(f.a)(e.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),p(),s),Object(i.a)(Object(f.a)(e.prototype),"isJump",!0,Object(u.a)(l),!0),l}return Object(a.a)(e,t),Object(o.a)(e,[{key:"exec",value:function(t){var r=t.context,n=t.memory;0!=(4&r.f)?r.pc+=6:Object(b.a)(Object(f.a)(e.prototype),"exec",this).call(this,{context:r,memory:n})}}]),e}(s.default)}}]);
//# sourceMappingURL=14.38794215.chunk.js.map