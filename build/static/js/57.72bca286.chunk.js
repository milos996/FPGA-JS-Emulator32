(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[57],{112:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return b}));var o=e(9),r=e(10),c=e(141),u=e(7),i=e(142),f=e(138),a=e(140),s=e(11),l=e(23),p=function(t){return"inc.s [".concat(t,"]")},b=function(t){function n(t,e,r,i,s){var l;return Object(o.a)(this,n),l=Object(c.a)(this,Object(f.a)(n).call(this,t,e,r,i,s)),Object(a.a)(Object(f.a)(n.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),p(l.sdestination)),l}return Object(i.a)(n,t),Object(r.a)(n,[{key:"exec",value:function(t){var n=t.context,e=t.memory,o=e[Math.floor(s.a.fix(n[l.a[this.destination]])/2)],r=o+1;return e[Math.floor(s.a.fix(n[l.a[this.destination]])/2)]=r,s.a.markFlags(r,r,n),s.a.markOverflow(o,1,r,n),n.pc+=2,{address:s.a.fix(n[l.a[this.destination]]),content:r}}}]),n}(s.a)},138:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return o}))},139:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(138);function r(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(139);function r(t,n,e){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=Object(o.a)(t,n);if(r){var c=Object.getOwnPropertyDescriptor(r,n);return c.get?c.get.call(e):c.value}})(t,n,e||t)}},141:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=e(7);function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(c.a)(t):n}e.d(n,"a",(function(){return u}))},142:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}e.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=57.72bca286.chunk.js.map