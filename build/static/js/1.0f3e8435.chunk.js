(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[1],{138:function(t,n,e){"use strict";function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return c}))},139:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(138);function r(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=Object(c.a)(t)););return t}},140:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(139);function r(t,n,e){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=Object(c.a)(t,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(e):o.value}})(t,n,e||t)}},141:function(t,n,e){"use strict";function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}var o=e(7);function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(o.a)(t):n}e.d(n,"a",(function(){return u}))},142:function(t,n,e){"use strict";function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"a",(function(){return r}))},144:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var c,r=e(1),o=e(28),u=(c={},Object(r.a)(c,o.c.ADD_W,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_W,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_W,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_W,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_W,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_W,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_W,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_W,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_W,(function(t,n){return t/n})),Object(r.a)(c,o.c.ADD_S,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_S,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_S,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_S,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_S,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_S,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_S,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_S,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_S,(function(t,n){return t/n})),Object(r.a)(c,o.c.ADD_B,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_B,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_B,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_B,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_B,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_B,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_B,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_B,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_B,(function(t,n){return t/n})),Object(r.a)(c,o.c.FADD,(function(t,n){return t+n})),Object(r.a)(c,o.c.FSUB,(function(t,n){return t-n})),Object(r.a)(c,o.c.FMUL,(function(t,n){return t*n})),Object(r.a)(c,o.c.FDIV,(function(t,n){return t/n})),c)},16:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var c=e(9),r=e(10),o=e(141),u=e(7),i=e(142),a=e(138),f=e(140),b=e(11),s=e(23),O=e(28),j=e(144),p=function(t,n,e){return"".concat(t," ").concat(n,", [").concat(e," + %s]")},l=function(t){function n(t,e,r,i,b,s){var j;return Object(c.a)(this,n),j=Object(o.a)(this,Object(a.a)(n).call(this,t,e,r,i,s)),Object(f.a)(Object(a.a)(n.prototype),"setArgument32",Object(u.a)(j)).call(Object(u.a)(j),t),Object(f.a)(Object(a.a)(n.prototype),"setAssembler",Object(u.a)(j)).call(Object(u.a)(j),p(O.b[b],j.sdestination,j.ssource),s),j.type=b,j}return Object(i.a)(n,t),Object(r.a)(n,[{key:"exec",value:function(t){var n,e=t.context,c=t.memory,r=e[s.a[this.destination]],o=b.a.fix(e[s.a[this.source]]+this.argument),u=!1&o?c[Math.floor(o/2)]>>8&255:255&c[Math.floor(o/2)];switch(n=j.a[this.type](e[s.a[this.destination]],u),this.type){case O.c.MUL_B:e.h=(0xffffffff00000000&n)>>32;break;case O.c.DIV_B:e.h=e[s.a[this.destination]]%u}e[s.a[this.destination]]=n,b.a.markFlags(n,e[s.a[this.destination]],e),b.a.markOverflow(r,u,e[s.a[this.destination]],e),e.pc+=6}}]),n}(b.a)}}]);
//# sourceMappingURL=1.0f3e8435.chunk.js.map