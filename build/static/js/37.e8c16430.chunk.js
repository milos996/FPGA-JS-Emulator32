(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[37],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(9),r=n(10),u=n(141),c=n(7),i=n(142),f=n(138),a=n(140),s=n(11),l=n(23),p=function(t){return"neg.s [ ".concat(t," + 0x%08x]")},b=function(t){function e(t,n,r,i,s){var l;return Object(o.a)(this,e),(l=Object(u.a)(this,Object(f.a)(e).call(this,t,n,r,i,s))).setArgument32(),Object(a.a)(Object(f.a)(e.prototype),"setAssembler",Object(c.a)(l)).call(Object(c.a)(l),p(l.sdestination)),l}return Object(i.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context,n=t.memory,o=-n[Math.floor(s.a.fix(e[l.a[this.destination]]+this.argument)/2)];return n[Math.floor(s.a.fix(e[l.a[this.destination]]+this.argument)/2)]=o,s.a.markFlags(o,o,e),e.pc+=6,{address:s.a.fix(e[l.a[this.destination]]+this.argument),content:o}}}]),e}(s.a)},138:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(138);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(139);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var u=Object.getOwnPropertyDescriptor(r,e);return u.get?u.get.call(n):u.value}})(t,e,n||t)}},141:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var u=n(7);function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(u.a)(t):e}n.d(e,"a",(function(){return c}))},142:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=37.e8c16430.chunk.js.map