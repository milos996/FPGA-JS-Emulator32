(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[22],{105:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var o=n(145),r=n(10),c=n(11),u=n(141),i=n(9),a=n(142),f=n(138),s=n(140),b=n(12),l=n(23),p=function(t){return"st.b %s, ".concat(t)},y=function(t){function e(t,n,o,c,a){var b;return Object(r.a)(this,e),b=Object(u.a)(this,Object(f.a)(e).call(this,t,n,o,c,a)),Object(s.a)(Object(f.a)(e.prototype),"setArgument32",Object(i.a)(b)).call(Object(i.a)(b),t),Object(s.a)(Object(f.a)(e.prototype),"setAssembler",Object(i.a)(b)).call(Object(i.a)(b),p(b.sdestination)),b}return Object(a.a)(e,t),Object(c.a)(e,[{key:"exec",value:function(t){var e=t.context,n=t.memory,r=b.a.fix(this.argument),c=n[Math.floor(r/2)];return!1&r?(c&=(Object(o.a)("content"),255),c|=(Object(o.a)("content"),e[l.a[this.destination]]<<8)):(c&=(Object(o.a)("content"),65280),c|=(Object(o.a)("content"),255&e[l.a[this.destination]])),n[Math.floor(r/2)]=c,e.pc+=6,{address:b.a.fix(this.argument),content:c}}}]),e}(b.a)},138:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(138);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(139);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var c=Object.getOwnPropertyDescriptor(r,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},141:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=n(9);function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},142:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},145:function(t,e,n){"use strict";function o(t){throw new Error('"'+t+'" is read-only')}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=22.44836333.chunk.js.map