(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[5],{11:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var c=e(6),r=e(7),o=e(122),u=e(118),i=e(123),a=e(119),f=e(121),s=e(8),b=e(20),O=e(22),j=e(125),p=function(t,n,e){return"".concat(t," ").concat(n,", [").concat(e," + %s]")},l=function(t){function n(t,e,r,i,s,b){var j;return Object(c.a)(this,n),j=Object(o.a)(this,Object(a.a)(n).call(this,t,e,r,i,b)),Object(f.a)(Object(a.a)(n.prototype),"setArgument32",Object(u.a)(j)).call(Object(u.a)(j),t),Object(f.a)(Object(a.a)(n.prototype),"setAssembler",Object(u.a)(j)).call(Object(u.a)(j),p(O.b[s],j.sdestination,j.ssource),b),j.type=s,j}return Object(i.a)(n,t),Object(r.a)(n,[{key:"exec",value:function(t){var n,e=t.context,c=t.memory,r=e[b.a[this.destination]],o=s.a.fix(e[b.a[this.source]]+this.argument);switch(n=j.a[this.type](e[b.a[this.destination]],s.a.getMemContent(e,o/2,o,c)),this.type){case O.c.MUL_W:e.h=(0xffffffff00000000&n)>>32;break;case O.c.DIV_W:e.h=e[b.a[this.destination]]%s.a.getMemContent(e,s.a.fix(e[b.a[this.source]]+this.argument)/2,s.a.fix(e[b.a[this.source]]+this.argument),c)}e[b.a[this.destination]]=n,s.a.markFlags(n,e[b.a[this.destination]],e),s.a.markOverflow(r,s.a.getMemContent(e,s.a.fix(e[b.a[this.source]]+this.argument)/2,s.a.fix(e[b.a[this.source]]+this.argument),c),e[b.a[this.destination]],e),e.pc+=6}}]),n}(s.a)},118:function(t,n,e){"use strict";function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return c}))},119:function(t,n,e){"use strict";function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return c}))},120:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(119);function r(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=Object(c.a)(t)););return t}},121:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(120);function r(t,n,e){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=Object(c.a)(t,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(e):o.value}})(t,n,e||t)}},122:function(t,n,e){"use strict";function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}var o=e(118);function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(o.a)(t):n}e.d(n,"a",(function(){return u}))},123:function(t,n,e){"use strict";function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"a",(function(){return r}))},125:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var c,r=e(0),o=e(22),u=(c={},Object(r.a)(c,o.c.ADD_W,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_W,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_W,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_W,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_W,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_W,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_W,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_W,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_W,(function(t,n){return t/n})),Object(r.a)(c,o.c.ADD_S,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_S,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_S,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_S,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_S,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_S,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_S,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_S,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_S,(function(t,n){return t/n})),Object(r.a)(c,o.c.ADD_B,(function(t,n){return t+n})),Object(r.a)(c,o.c.SUB_B,(function(t,n){return t-n})),Object(r.a)(c,o.c.AND_B,(function(t,n){return t&n})),Object(r.a)(c,o.c.OR_B,(function(t,n){return t|n})),Object(r.a)(c,o.c.XOR_B,(function(t,n){return t^n})),Object(r.a)(c,o.c.SHL_B,(function(t,n){return t<<n})),Object(r.a)(c,o.c.SHR_B,(function(t,n){return t>>>n})),Object(r.a)(c,o.c.MUL_B,(function(t,n){return t*n})),Object(r.a)(c,o.c.DIV_B,(function(t,n){return t/n})),Object(r.a)(c,o.c.FADD,(function(t,n){return t+n})),Object(r.a)(c,o.c.FSUB,(function(t,n){return t-n})),Object(r.a)(c,o.c.FMUL,(function(t,n){return t*n})),Object(r.a)(c,o.c.FDIV,(function(t,n){return t/n})),c)}}]);
//# sourceMappingURL=5.857eccba.chunk.js.map