(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[76],{114:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n(6),o=n(7),c=n(122),u=n(118),i=n(123),f=n(119),a=n(121),s=n(8),b=n(20),l=function(t){return"st.w [0x%08x], ".concat(t)},p=function(t){function e(t,n,o,i,s){var b;return Object(r.a)(this,e),b=Object(c.a)(this,Object(f.a)(e).call(this,t,n,o,i,s)),Object(a.a)(Object(f.a)(e.prototype),"setArgument32",Object(u.a)(b)).call(Object(u.a)(b),t),Object(a.a)(Object(f.a)(e.prototype),"setAssembler",Object(u.a)(b)).call(Object(u.a)(b),l(b.sdestination)),b}return Object(i.a)(e,t),Object(o.a)(e,[{key:"exec",value:function(t){var e=t.context;return s.a.setMemContent(e,s.a.fix(this.argument)/2,e[b.a[this.source]],s.a.fix(this.argument)),e.pc+=6,{address:s.a.fix(this.argument),content:e[b.a[this.destination]]}}}]),e}(s.a)},118:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},119:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},120:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(119);function o(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(r.a)(t)););return t}},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(120);function o(t,e,n){return(o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=Object(r.a)(t,e);if(o){var c=Object.getOwnPropertyDescriptor(o,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},122:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}var c=n(118);function u(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},123:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=76.13062fc1.chunk.js.map