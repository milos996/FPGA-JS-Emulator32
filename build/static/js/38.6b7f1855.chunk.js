(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[38],{118:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},119:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},120:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(119);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(120);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var u=Object.getOwnPropertyDescriptor(r,e);return u.get?u.get.call(n):u.value}})(t,e,n||t)}},122:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var u=n(118);function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(u.a)(t):e}n.d(e,"a",(function(){return i}))},123:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},88:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(6),r=n(7),u=n(122),i=n(118),c=n(123),a=n(119),f=n(121),s=n(8),l=n(20),p=function(t){return"neg.w [ ".concat(t," + 0x%08x]")},b=function(t){function e(t,n,r,c,s){var l;return Object(o.a)(this,e),(l=Object(u.a)(this,Object(a.a)(e).call(this,t,n,r,c,s))).setArgument32(),Object(f.a)(Object(a.a)(e.prototype),"setAssembler",Object(i.a)(l)).call(Object(i.a)(l),p(l.sdestination)),l}return Object(c.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context,n=t.memory,o=-s.a.getMemContent(e,s.a.fix(e[l.a[this.destination]]+this.argument)/2,s.a.fix(e[l.a[this.destination]]+this.argument),n);return s.a.setMemContent(e,s.a.fix(e[l.a[this.destination]]+this.argument)/2,o,s.a.fix(e[l.a[this.destination]]+this.argument)),s.a.markFlags(o,o,e),e.pc+=6,{address:s.a.fix(e[l.a[this.destination]]+this.argument),content:o}}}]),e}(s.a)}}]);
//# sourceMappingURL=38.6b7f1855.chunk.js.map