const t=(...t)=>t.reduce((t,e)=>t+e,0),e=(t=10)=>Math.random().toString().slice(2,t+2),r=t=>"[object String]"===Object.prototype.toString.call(t),o=t=>"[object Number]"===Object.prototype.toString.call(t);var c={sum:t,isString:r,isNumber:o,createRandom:e};export{e as createRandom,c as default,o as isNumber,r as isString,t as sum};
//# sourceMappingURL=index.mjs.map
