(this["webpackJsonpfpga-js-emulator32"]=this["webpackJsonpfpga-js-emulator32"]||[]).push([[7],{118:function(t,n,e){"use strict";function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return c}))},119:function(t,n,e){"use strict";function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return c}))},120:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(119);function r(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=Object(c.a)(t)););return t}},121:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(120);function r(t,n,e){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=Object(c.a)(t,n);if(r){var u=Object.getOwnPropertyDescriptor(r,n);return u.get?u.get.call(e):u.value}})(t,n,e||t)}},122:function(t,n,e){"use strict";function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}var u=e(118);function o(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(u.a)(t):n}e.d(n,"a",(function(){return o}))},123:function(t,n,e){"use strict";function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"a",(function(){return r}))},125:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var c,r=e(0),u=e(22),o=(c={},Object(r.a)(c,u.c.ADD_W,(function(t,n){return t+n})),Object(r.a)(c,u.c.SUB_W,(function(t,n){return t-n})),Object(r.a)(c,u.c.AND_W,(function(t,n){return t&n})),Object(r.a)(c,u.c.OR_W,(function(t,n){return t|n})),Object(r.a)(c,u.c.XOR_W,(function(t,n){return t^n})),Object(r.a)(c,u.c.SHL_W,(function(t,n){return t<<n})),Object(r.a)(c,u.c.SHR_W,(function(t,n){return t>>>n})),Object(r.a)(c,u.c.MUL_W,(function(t,n){return t*n})),Object(r.a)(c,u.c.DIV_W,(function(t,n){return t/n})),Object(r.a)(c,u.c.ADD_S,(function(t,n){return t+n})),Object(r.a)(c,u.c.SUB_S,(function(t,n){return t-n})),Object(r.a)(c,u.c.AND_S,(function(t,n){return t&n})),Object(r.a)(c,u.c.OR_S,(function(t,n){return t|n})),Object(r.a)(c,u.c.XOR_S,(function(t,n){return t^n})),Object(r.a)(c,u.c.SHL_S,(function(t,n){return t<<n})),Object(r.a)(c,u.c.SHR_S,(function(t,n){return t>>>n})),Object(r.a)(c,u.c.MUL_S,(function(t,n){return t*n})),Object(r.a)(c,u.c.DIV_S,(function(t,n){return t/n})),Object(r.a)(c,u.c.ADD_B,(function(t,n){return t+n})),Object(r.a)(c,u.c.SUB_B,(function(t,n){return t-n})),Object(r.a)(c,u.c.AND_B,(function(t,n){return t&n})),Object(r.a)(c,u.c.OR_B,(function(t,n){return t|n})),Object(r.a)(c,u.c.XOR_B,(function(t,n){return t^n})),Object(r.a)(c,u.c.SHL_B,(function(t,n){return t<<n})),Object(r.a)(c,u.c.SHR_B,(function(t,n){return t>>>n})),Object(r.a)(c,u.c.MUL_B,(function(t,n){return t*n})),Object(r.a)(c,u.c.DIV_B,(function(t,n){return t/n})),Object(r.a)(c,u.c.FADD,(function(t,n){return t+n})),Object(r.a)(c,u.c.FSUB,(function(t,n){return t-n})),Object(r.a)(c,u.c.FMUL,(function(t,n){return t*n})),Object(r.a)(c,u.c.FDIV,(function(t,n){return t/n})),c)},21:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return p}));var c=e(6),r=e(7),u=e(122),o=e(118),i=e(123),a=e(119),f=e(121),b=e(8),O=e(20),s=e(22),j=e(125),l=function(t,n,e){return"".concat(t," ").concat(n,", ").concat(e)},p=function(t){function n(t,e,r,i,b,O){var j;return Object(c.a)(this,n),j=Object(u.a)(this,Object(a.a)(n).call(this,t,e,r,i,O)),Object(f.a)(Object(a.a)(n.prototype),"setAssembler",Object(o.a)(j)).call(Object(o.a)(j),l(s.b[b],j.sdestination,j.ssource)),j.type=b,j}return Object(i.a)(n,t),Object(r.a)(n,[{key:"exec",value:function(t){var e,c=t.context;t.memory;e=j.a[this.type](n.int2float(c[O.a[this.destination]]),n.int2float(c[O.a[this.source]])),c[O.a[this.destination]]=n.float2int(e),c.pc+=2}}],[{key:"int2float",value:function(t){var n=new ArrayBuffer(4),e=new DataView(n);return e.setInt32(0,t),e.getFloat32()}},{key:"float2int",value:function(t){var n=new ArrayBuffer(4),e=new DataView(n);return e.setFloat32(0,t),e.getInt32()}}]),n}(b.a)}}]);
//# sourceMappingURL=7.9121b864.chunk.js.map