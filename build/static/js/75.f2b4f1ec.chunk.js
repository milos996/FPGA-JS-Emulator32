(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[75],{135:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var o=n(9),r=n(10),c=n(141),u=n(7),i=n(142),a=n(138),f=n(140),s=n(11),b=n(23),p=function(t,e){return"st.w [".concat(t," + %s], ").concat(e)},l=function(t){function e(t,n,r,i,s){var b;return Object(o.a)(this,e),b=Object(c.a)(this,Object(a.a)(e).call(this,t,n,r,i,s)),Object(f.a)(Object(a.a)(e.prototype),"setArgument32",Object(u.a)(b)).call(Object(u.a)(b),t),Object(f.a)(Object(a.a)(e.prototype),"setAssembler",Object(u.a)(b)).call(Object(u.a)(b),p(b.sdestination,b.ssource)),b}return Object(i.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context;return s.a.setMemContent(e,s.a.fix(e[b.a[this.destination]]+this.argument)/2,e[b.a[this.source]],s.a.fix(e[b.a[this.destination]]+this.argument)),e.pc+=6,{address:s.a.fix(e[b.a[this.destination]]+this.argument),content:e[b.a[this.source]]}}}]),e}(s.a)},138:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(138);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(139);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var c=Object.getOwnPropertyDescriptor(r,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},141:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=n(7);function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},142:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=75.f2b4f1ec.chunk.js.map