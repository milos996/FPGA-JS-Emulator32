(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[47],{129:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(9),r=n(10),c=n(141),u=n(7),f=n(142),i=n(138),a=n(140),s=n(11),l=n(23),p=function(t){return"inv.b [".concat(t," + 0x%08x]")},b=function(t){function e(t,n,r,f,s){var l;return Object(o.a)(this,e),(l=Object(c.a)(this,Object(i.a)(e).call(this,t,n,r,f,s))).setArgument32(),Object(a.a)(Object(i.a)(e.prototype),"setAssembler",Object(u.a)(l)).call(Object(u.a)(l),p(l.sdestination)),l}return Object(f.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context,n=t.memory,o=s.a.fix(e[l.a[this.destination]]+this.argument),r=~(!1&o?n[Math.floor(o/2)]>>8&255:255&n[Math.floor(o/2)]),c=n[Math.floor(o/2)];return 0==(1&o)?(c&=255,c|=r<<8):(c&=65280,c|=255&r),n[Math.floor(o/2)]=c,s.a.markFlags(r,r,e),e.pc+=6,{address:o,content:c}}}]),e}(s.a)},138:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(138);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(139);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var c=Object.getOwnPropertyDescriptor(r,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},141:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=n(7);function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},142:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=47.de0269a4.chunk.js.map