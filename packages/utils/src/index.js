var e = function () {
    return [].slice.call(arguments).reduce(function (e, r) {
      return e + r;
    }, 0);
  },
  r = function (e) {
    return (
      void 0 === e && (e = 10),
      Math.random()
        .toString()
        .slice(2, e + 2)
    );
  },
  t = { sum: e, createRandom: r };
(exports.createRandom = r), (exports.default = t), (exports.sum = e);
//# sourceMappingURL=index.js.map
