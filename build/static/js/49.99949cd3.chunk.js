(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[49],{107:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return b}));var o=e(6),r=e(7),i=e(122),u=e(118),c=e(123),a=e(119),f=e(121),s=e(8),l=e(20),p=function(t){return"inv.w [".concat(t," + 0x%08x]")},b=function(t){function n(t,e,r,c,s){var l;return Object(o.a)(this,n),(l=Object(i.a)(this,Object(a.a)(n).call(this,t,e,r,c,s))).setArgument32(),Object(f.a)(Object(a.a)(n.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),p(l.sdestination)),l}return Object(c.a)(n,t),Object(r.a)(n,[{key:"exec",value:function(t){var n=t.context,e=t.memory,o=~s.a.getMemContent(n,s.a.fix(n[l.a[this.destination]]+this.argument)/2,s.a.fix(n[l.a[this.destination]]+this.argument),e);return s.a.setMemContent(n,s.a.fix(n[l.a[this.destination]]+this.argument)/2,o,s.a.fix(n[l.a[this.destination]]+this.argument)),s.a.markFlags(o,o,n),n.pc+=6,{address:s.a.fix(n[l.a[this.destination]]+this.argument),content:o}}}]),n}(s.a)},118:function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return o}))},119:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return o}))},120:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(119);function r(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=Object(o.a)(t)););return t}},121:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(120);function r(t,n,e){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=Object(o.a)(t,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(e):i.value}})(t,n,e||t)}},122:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var i=e(118);function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(i.a)(t):n}e.d(n,"a",(function(){return u}))},123:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}e.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=49.99949cd3.chunk.js.map