(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[79],{118:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},119:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},120:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(119);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(120);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var c=Object.getOwnPropertyDescriptor(r,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},122:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=n(118);function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},123:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},40:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var o=n(6),r=n(7),c=n(122),u=n(118),i=n(123),f=n(119),a=n(121),s=n(8),l=n(20),b=function(t){return"in ".concat(t,", [0x%04x]")},p=function(t){function e(t,n,r,i,s){var l;return Object(o.a)(this,e),l=Object(c.a)(this,Object(f.a)(e).call(this,n,t[Math.floor(n/2)],r,i,s)),Object(a.a)(Object(f.a)(e.prototype),"setArgument",Object(u.a)(l)).call(Object(u.a)(l),t),Object(a.a)(Object(f.a)(e.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),b(l.sdestination),s),l.argument=t[Math.floor((l.address+2)/2)],l}return Object(i.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context;e[l.a[this.destination]]=e.fromPort(this.argument),e.pc+=4}}]),e}(s.a)}}]);
//# sourceMappingURL=79.bc60f935.chunk.js.map