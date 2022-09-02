var n = function () {
    return [].slice.call(arguments).reduce(function (n, r) {
      return n + r;
    }, 0);
  },
  r = function (n) {
    return (
      void 0 === n && (n = 10),
      Math.random()
        .toString()
        .slice(2, n + 2)
    );
  },
  t = { sum: n, createRandom: r };
export { r as createRandom, t as default, n as sum };
//# sourceMappingURL=index.esm.js.map
