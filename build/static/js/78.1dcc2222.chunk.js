(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[78],{138:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(138);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(139);function r(t,e,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Object(o.a)(t,e);if(r){var c=Object.getOwnPropertyDescriptor(r,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}},141:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var c=n(7);function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",(function(){return u}))},142:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},66:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(9),r=n(10),c=n(141),u=n(7),f=n(142),i=n(138),a=n(140),p=n(11),s=n(8),l=function(){return"iret"},b=function(t){function e(t,n,r,f,p){var s;return Object(o.a)(this,e),s=Object(c.a)(this,Object(i.a)(e).call(this,t,n,0,0,p)),Object(a.a)(Object(i.a)(e.prototype),"setAssembler",Object(u.a)(s)).call(Object(u.a)(s),l(),p),s}return Object(f.a)(e,t),Object(r.a)(e,[{key:"exec",value:function(t){var e=t.context,n=t.memory;e.pc=p.a.pop(n,p.a.fix(e.sp)/2),e.sp+=4,e.f=n[Math.floor(p.a.fix(e.sp)/2)],e.sp+=2,s.a.irq0=!1,s.a.irq2_pressed=!1,s.a.irq2_released=!1,s.a.inIrq=!1}}]),e}(p.a)}}]);
//# sourceMappingURL=78.1dcc2222.chunk.js.map