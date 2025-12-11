import * as tt from "react";
import Bt, { useState as Y, useCallback as Me, useMemo as zt, createContext as je, useContext as bt, useLayoutEffect as ya, useEffect as $, useRef as rt, forwardRef as Sc, createElement as va, useId as Rr, useInsertionEffect as Cc, cloneElement as Ac, Children as Pc, isValidElement as Rc, useImperativeHandle as kc } from "react";
import R, { keyframes as Oc, ThemeProvider as _c } from "styled-components";
import Lc from "react-dom";
function iy(t) {
  const [e, n] = Y(t), [r, o] = Y("default");
  return {
    state: e,
    setState: n,
    setStatus: o,
    reset() {
      n(t), o("default");
    },
    bindings: {
      value: e,
      status: r,
      onChange(s) {
        n(s.target.value);
      }
    }
  };
}
function sy(t = !1) {
  const [e, n] = Y(t);
  return {
    state: e,
    setState: n,
    reset: () => n(t),
    bindings: {
      checked: e,
      onChange: (r) => n(r)
    }
  };
}
function ay(t = !1) {
  const [e, n] = Y(t);
  return {
    isOpen: e,
    setOpen: n,
    bindings: {
      open: e,
      setOpen: n
    }
  };
}
var Bn = {}, Dc = {
  get exports() {
    return Bn;
  },
  set exports(t) {
    Bn = t;
  }
}, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Vc() {
  if (Fi)
    return Sn;
  Fi = 1;
  var t = Bt, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var u, d = {}, f = null, h = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (u in l)
      r.call(l, u) && !s.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps)
      for (u in l = a.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: e, type: a, key: f, ref: h, props: d, _owner: o.current };
  }
  return Sn.Fragment = n, Sn.jsx = i, Sn.jsxs = i, Sn;
}
var Cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function Fc() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Bt, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(p) {
      if (p === null || typeof p != "object")
        return null;
      var E = m && p[m] || p[g];
      return typeof E == "function" ? E : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(p) {
      {
        for (var E = arguments.length, C = new Array(E > 1 ? E - 1 : 0), k = 1; k < E; k++)
          C[k - 1] = arguments[k];
        v("error", p, C);
      }
    }
    function v(p, E, C) {
      {
        var k = y.ReactDebugCurrentFrame, L = k.getStackAddendum();
        L !== "" && (E += "%s", C = C.concat([L]));
        var q = C.map(function(H) {
          return String(H);
        });
        q.unshift("Warning: " + E), Function.prototype.apply.call(console[p], console, q);
      }
    }
    var T = !1, P = !1, O = !1, M = !1, N = !1, G;
    G = Symbol.for("react.module.reference");
    function z(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || N || p === o || p === c || p === u || M || p === h || T || P || O || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === G || p.getModuleId !== void 0));
    }
    function et(p, E, C) {
      var k = p.displayName;
      if (k)
        return k;
      var L = E.displayName || E.name || "";
      return L !== "" ? C + "(" + L + ")" : C;
    }
    function ct(p) {
      return p.displayName || "Context";
    }
    function ot(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var E = p;
            return ct(E) + ".Consumer";
          case i:
            var C = p;
            return ct(C._context) + ".Provider";
          case l:
            return et(p, p.render, "ForwardRef");
          case d:
            var k = p.displayName || null;
            return k !== null ? k : ot(p.type) || "Memo";
          case f: {
            var L = p, q = L._payload, H = L._init;
            try {
              return ot(H(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, I = 0, W, Z, it, wt, Vt, we, nt;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function en() {
      {
        if (I === 0) {
          W = console.log, Z = console.info, it = console.warn, wt = console.error, Vt = console.group, we = console.groupCollapsed, nt = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        I++;
      }
    }
    function nn() {
      {
        if (I--, I === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, p, {
              value: W
            }),
            info: B({}, p, {
              value: Z
            }),
            warn: B({}, p, {
              value: it
            }),
            error: B({}, p, {
              value: wt
            }),
            group: B({}, p, {
              value: Vt
            }),
            groupCollapsed: B({}, p, {
              value: we
            }),
            groupEnd: B({}, p, {
              value: nt
            })
          });
        }
        I < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = y.ReactCurrentDispatcher, Yt;
    function Ee(p, E, C) {
      {
        if (Yt === void 0)
          try {
            throw Error();
          } catch (L) {
            var k = L.stack.trim().match(/\n( *(at )?)/);
            Yt = k && k[1] || "";
          }
        return `
` + Yt + p;
      }
    }
    var $t = !1, mt;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      mt = new Te();
    }
    function kt(p, E) {
      if (!p || $t)
        return "";
      {
        var C = mt.get(p);
        if (C !== void 0)
          return C;
      }
      var k;
      $t = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = xe.current, xe.current = null, en();
      try {
        if (E) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (yt) {
              k = yt;
            }
            Reflect.construct(p, [], H);
          } else {
            try {
              H.call();
            } catch (yt) {
              k = yt;
            }
            p.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            k = yt;
          }
          p();
        }
      } catch (yt) {
        if (yt && k && typeof yt.stack == "string") {
          for (var j = yt.stack.split(`
`), xt = k.stack.split(`
`), lt = j.length - 1, dt = xt.length - 1; lt >= 1 && dt >= 0 && j[lt] !== xt[dt]; )
            dt--;
          for (; lt >= 1 && dt >= 0; lt--, dt--)
            if (j[lt] !== xt[dt]) {
              if (lt !== 1 || dt !== 1)
                do
                  if (lt--, dt--, dt < 0 || j[lt] !== xt[dt]) {
                    var Pt = `
` + j[lt].replace(" at new ", " at ");
                    return p.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", p.displayName)), typeof p == "function" && mt.set(p, Pt), Pt;
                  }
                while (lt >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        $t = !1, xe.current = q, nn(), Error.prepareStackTrace = L;
      }
      var ge = p ? p.displayName || p.name : "", X = ge ? Ee(ge) : "";
      return typeof p == "function" && mt.set(p, X), X;
    }
    function fe(p, E, C) {
      return kt(p, !1);
    }
    function Se(p) {
      var E = p.prototype;
      return !!(E && E.isReactComponent);
    }
    function Ft(p, E, C) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return kt(p, Se(p));
      if (typeof p == "string")
        return Ee(p);
      switch (p) {
        case c:
          return Ee("Suspense");
        case u:
          return Ee("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return fe(p.render);
          case d:
            return Ft(p.type, E, C);
          case f: {
            var k = p, L = k._payload, q = k._init;
            try {
              return Ft(q(L), E, C);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Et = {}, Ce = y.ReactDebugCurrentFrame;
    function jt(p) {
      if (p) {
        var E = p._owner, C = Ft(p.type, p._source, E ? E.type : null);
        Ce.setExtraStackFrame(C);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Gt(p, E, C, k, L) {
      {
        var q = Function.call.bind(he);
        for (var H in p)
          if (q(p, H)) {
            var j = void 0;
            try {
              if (typeof p[H] != "function") {
                var xt = Error((k || "React class") + ": " + C + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xt.name = "Invariant Violation", xt;
              }
              j = p[H](E, H, k, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (lt) {
              j = lt;
            }
            j && !(j instanceof Error) && (jt(L), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", C, H, typeof j), jt(null)), j instanceof Error && !(j.message in Et) && (Et[j.message] = !0, jt(L), w("Failed %s type: %s", C, j.message), jt(null));
          }
      }
    }
    var at = Array.isArray;
    function Xt(p) {
      return at(p);
    }
    function rn(p) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, C = E && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return C;
      }
    }
    function Ae(p) {
      try {
        return Ne(p), !1;
      } catch {
        return !0;
      }
    }
    function Ne(p) {
      return "" + p;
    }
    function Pe(p) {
      if (Ae(p))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(p)), Ne(p);
    }
    var Nt = y.ReactCurrentOwner, Jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Zt, Qt;
    Qt = {};
    function on(p) {
      if (he.call(p, "ref")) {
        var E = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ue(p) {
      if (he.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function pe(p, E) {
      if (typeof p.ref == "string" && Nt.current && E && Nt.current.stateNode !== E) {
        var C = ot(Nt.current.type);
        Qt[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ot(Nt.current.type), p.ref), Qt[C] = !0);
      }
    }
    function gt(p, E) {
      {
        var C = function() {
          Re || (Re = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        C.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Ct(p, E) {
      {
        var C = function() {
          Zt || (Zt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        C.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var ze = function(p, E, C, k, L, q, H) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: p,
        key: E,
        ref: C,
        props: H,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function We(p, E, C, k, L) {
      {
        var q, H = {}, j = null, xt = null;
        C !== void 0 && (Pe(C), j = "" + C), Ue(E) && (Pe(E.key), j = "" + E.key), on(E) && (xt = E.ref, pe(E, L));
        for (q in E)
          he.call(E, q) && !Jt.hasOwnProperty(q) && (H[q] = E[q]);
        if (p && p.defaultProps) {
          var lt = p.defaultProps;
          for (q in lt)
            H[q] === void 0 && (H[q] = lt[q]);
        }
        if (j || xt) {
          var dt = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          j && gt(H, dt), xt && Ct(H, dt);
        }
        return ze(p, j, xt, L, k, Nt.current, H);
      }
    }
    var te = y.ReactCurrentOwner, ke = y.ReactDebugCurrentFrame;
    function _t(p) {
      if (p) {
        var E = p._owner, C = Ft(p.type, p._source, E ? E.type : null);
        ke.setExtraStackFrame(C);
      } else
        ke.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function ne(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function Oe() {
      {
        if (te.current) {
          var p = ot(te.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function sn(p) {
      {
        if (p !== void 0) {
          var E = p.fileName.replace(/^.*[\\\/]/, ""), C = p.lineNumber;
          return `

Check your code at ` + E + ":" + C + ".";
        }
        return "";
      }
    }
    var ut = {};
    function Tt(p) {
      {
        var E = Oe();
        if (!E) {
          var C = typeof p == "string" ? p : p.displayName || p.name;
          C && (E = `

Check the top-level render call using <` + C + ">.");
        }
        return E;
      }
    }
    function V(p, E) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var C = Tt(E);
        if (ut[C])
          return;
        ut[C] = !0;
        var k = "";
        p && p._owner && p._owner !== te.current && (k = " It was passed a child from " + ot(p._owner.type) + "."), _t(p), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, k), _t(null);
      }
    }
    function U(p, E) {
      {
        if (typeof p != "object")
          return;
        if (Xt(p))
          for (var C = 0; C < p.length; C++) {
            var k = p[C];
            ne(k) && V(k, E);
          }
        else if (ne(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var L = b(p);
          if (typeof L == "function" && L !== p.entries)
            for (var q = L.call(p), H; !(H = q.next()).done; )
              ne(H.value) && V(H.value, E);
        }
      }
    }
    function At(p) {
      {
        var E = p.type;
        if (E == null || typeof E == "string")
          return;
        var C;
        if (typeof E == "function")
          C = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          C = E.propTypes;
        else
          return;
        if (C) {
          var k = ot(E);
          Gt(C, p.props, "prop", k, p);
        } else if (E.PropTypes !== void 0 && !ee) {
          ee = !0;
          var L = ot(E);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function me(p) {
      {
        for (var E = Object.keys(p.props), C = 0; C < E.length; C++) {
          var k = E[C];
          if (k !== "children" && k !== "key") {
            _t(p), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), _t(null);
            break;
          }
        }
        p.ref !== null && (_t(p), w("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
      }
    }
    function A(p, E, C, k, L, q) {
      {
        var H = z(p);
        if (!H) {
          var j = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xt = sn(L);
          xt ? j += xt : j += Oe();
          var lt;
          p === null ? lt = "null" : Xt(p) ? lt = "array" : p !== void 0 && p.$$typeof === e ? (lt = "<" + (ot(p.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof p, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, j);
        }
        var dt = We(p, E, C, L, q);
        if (dt == null)
          return dt;
        if (H) {
          var Pt = E.children;
          if (Pt !== void 0)
            if (k)
              if (Xt(Pt)) {
                for (var ge = 0; ge < Pt.length; ge++)
                  U(Pt[ge], p);
                Object.freeze && Object.freeze(Pt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              U(Pt, p);
        }
        return p === r ? me(dt) : At(dt), dt;
      }
    }
    function D(p, E, C) {
      return A(p, E, C, !0);
    }
    function _(p, E, C) {
      return A(p, E, C, !1);
    }
    var J = _, ht = D;
    Cn.Fragment = r, Cn.jsx = J, Cn.jsxs = ht;
  }()), Cn;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Vc() : t.exports = Fc();
})(Dc);
const bn = Bn.Fragment, S = Bn.jsx, Q = Bn.jsxs, Mc = (t) => /* @__PURE__ */ Q(
  Ic,
  {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          r: "20",
          strokeDasharray: "80",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          opacity: "0.3",
          r: "20",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      )
    ]
  }
), Bc = Oc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, Ic = R.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${Bc} 0.9s linear infinite;
`, $c = R.button.attrs((t) => ({
  children: t.loading ? /* @__PURE__ */ S(Mc, { style: { margin: ".18rem 0" } }) : t.icon ? /* @__PURE__ */ Q(bn, { children: [
    (!t.iconPosition || t.iconPosition === "left") && t.icon,
    t.children,
    t.iconPosition === "right" && t.icon
  ] }) : t.children
}))`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(t) => t.fullWidth ? "100%" : t.width || "250px"};
  ${(t) => !t.width && "min-width: 100px"};
  height: ${(t) => t.height || "46px"};
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(t) => t.icon ? "4px" : "0"};
  background: ${(t) => t.theme.button.background[t.variant || "primary"].default};
  color: ${(t) => t.theme.button.text[t.variant || "primary"]};

  &:hover {
    background: ${(t) => t.theme.button.background[t.variant || "primary"].hover};
    border: ${(t) => t.theme.button.hoverBorder[t.variant || "primary"]};
  }

  &:active {
    background: ${(t) => t.theme.button.background[t.variant || "primary"].active};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(t) => t.theme.button.background[t.variant || "primary"].disabled};
    color: ${(t) => t.theme.button.text.disabled};
  }
`, ba = R.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(t) => t.theme.cardBorder});
  background-color: ${(t) => t.theme.cardBackground};
`, jc = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, Nc = {
  // Display text (Hero, Banner)
  "7xl": "3.5rem",
  // 56px
  "6xl": "3rem",
  // 48px
  "5xl": "2.75rem",
  // 44px
  "4xl": "2.5rem",
  // 40px
  // Headings
  "3xl": "2rem",
  // 32px
  "2xl": "1.75rem",
  // 28px
  xl: "1.5rem",
  // 24px
  // Body text
  lg: "1.25rem",
  // 20px
  md: "1.125rem",
  // 18px
  base: "1rem",
  // 16px
  sm: "0.875rem",
  // 14px
  xs: "0.75rem",
  // 12px
  // Micro text (Labels, badges, tags)
  "2xs": "0.625rem",
  // 10px
  "3xs": "0.5rem",
  // 8px
  "4xs": "0.375rem",
  // 6px
  "5xs": "0.25rem",
  // 4px
  "6xs": "0.125rem",
  // 2px
  "7xs": "0.0625rem"
  // 1px
};
function wn({
  children: t,
  lineHeight: e,
  noMargin: n = !1,
  as: r = "p",
  size: o = "base",
  weight: s = "regular",
  variant: i = "primary",
  ...a
}) {
  return /* @__PURE__ */ S(
    Uc,
    {
      as: r,
      $size: o,
      $weight: s,
      $variant: i,
      $lineHeight: e,
      $noMargin: n,
      ...a,
      children: t
    }
  );
}
const Uc = R.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(t) => Nc[t.$size]};
  font-weight: ${(t) => jc[t.$weight]};
  ${(t) => t.$lineHeight && `line-height: ${t.$lineHeight};`}
  color: ${(t) => t.$variant === "primary" ? t.theme.primaryText : t.$variant === "secondary" ? t.theme.secondaryText : t.theme.tertiaryText};
  ${(t) => t.$noMargin && "margin: 0;"}
`, ly = ({
  checked: t,
  onChange: e,
  size: n = 24,
  label: r,
  labelProps: o
}) => {
  const s = Me(() => {
    e && e(!t);
  }, [e, t]);
  return /* @__PURE__ */ Q(zc, { size: n, onClick: s, children: [
    /* @__PURE__ */ Q(Wc, { children: [
      /* @__PURE__ */ S(
        Hc,
        {
          checked: t,
          "aria-checked": t,
          role: "checkbox"
        }
      ),
      /* @__PURE__ */ S(qc, { size: n })
    ] }),
    r && // @ts-ignore
    /* @__PURE__ */ S(Kc, { ...o, size: n, children: r })
  ] });
}, zc = R.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(t) => Math.max(8, t.size ? t.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`, Wc = R.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(t) => t.size}px;
  height: ${(t) => t.size}px;
`, Hc = R.input.attrs({ type: "checkbox" })`
  visibility: hidden;

  &:checked + label {
    background-color: ${(t) => t.theme.theme};
    border-color: ${(t) => t.theme.theme};
  }

  &:checked + label:after {
    opacity: 1;
  }

  &:focus + label {
    box-shadow: 0 0 0 2px ${(t) => t.theme.theme}33;
  }
`, qc = R.label`
  box-sizing: border-box;
  background-color: transparent;
  border: 2.25px solid ${(t) => t.theme.theme};
  border-radius: 50%;
  cursor: pointer;
  height: ${(t) => t.size}px;
  width: ${(t) => t.size}px;
  position: absolute;
  margin: auto;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${(t) => t.theme.theme};
    background-color: ${(t) => t.theme.theme}11;
  }

  &:after {
    border: 2.25px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: ${(t) => t.size / 4}px;
    left: ${(t) => t.size / 8}px;
    opacity: 0;
    position: absolute;
    top: ${(t) => t.size / 6}px;
    transform: rotate(-45deg);
    width: ${(t) => t.size / 2}px;
    transition: opacity 0.2s ease;
  }
`, Kc = R(wn).attrs({
  weight: "medium",
  noMargin: !0
})`
  font-size: ${(t) => Math.max(14, t.size ? t.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(t) => Math.max(t.size || 24, 24)}px;
`;
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Wt.apply(this, arguments);
}
var Yc = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8v4m0 4h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, kr = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6 9 6 6 6-6"
    })
  }));
}, Gc = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 18 6-6-6-6"
    })
  }));
}, Xc = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m18 15-6-6-6 6"
    })
  }));
}, Jc = function(e) {
  return /* @__PURE__ */ Q("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: [/* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M2.4201 12.7132c-.1362-.2157-.2043-.3235-.2424-.4898-.0286-.1249-.0286-.3219 0-.4468.0381-.1663.1062-.2741.2424-.4898C3.5455 9.5048 6.8954 5 12.0004 5s8.4549 4.5048 9.5803 6.2868c.1362.2157.2043.3235.2424.4898.0286.1249.0286.3219 0 .4468-.0381.1663-.1062.2741-.2424.4898C20.4553 14.4952 17.1054 19 12.0004 19s-8.4549-4.5048-9.5803-6.2868"
    }), /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.0004 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
    })]
  }));
}, Zc = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.7429 5.0923A8.6 8.6 0 0 1 12.0004 5c5.105 0 8.4549 4.5048 9.5803 6.2868.1362.2157.2043.3235.2424.4899.0287.1249.0286.322 0 .4469-.0382.1663-.1067.2749-.2439.492a17.5 17.5 0 0 1-1.3627 1.8649M6.7243 6.715c-2.162 1.4667-3.6298 3.5044-4.3032 4.5703-.1368.2166-.2052.3249-.2434.4912-.0286.1249-.0286.3219 0 .4469.0381.1663.1062.2741.2424.4898C3.5455 14.4952 6.8954 19 12.0004 19c2.0584 0 3.8315-.7324 5.2884-1.7234M3.0004 3l18 18M9.8791 9.8787c-.5429.5429-.8787 1.2929-.8787 2.1213 0 1.6569 1.3432 3 3 3 .8284 0 1.5784-.3358 2.1213-.8787"
    })
  }));
}, Qc = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 21-5.9999-6M17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    })
  }));
}, tu = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15 9-6 6m0-6 6 6m7-3c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, wa = function(e) {
  return /* @__PURE__ */ S("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 6 6 18M6 6l12 12"
    })
  }));
};
const eu = {
  small: "42px",
  normal: "52px"
}, nu = {
  small: "16px",
  normal: "18px",
  large: "40px"
};
function cy({
  label: t,
  fullWidth: e,
  sizeVariant: n = "normal",
  status: r = "default",
  disabled: o,
  variant: s = "default",
  iconLeft: i,
  iconRight: a,
  errorMessage: l,
  special: c,
  inputContainerStyle: u,
  labelStyle: d,
  type: f = "text",
  inputFooter: h,
  onBlur: m,
  stacked: g,
  ...b
}) {
  const [y, w] = Y(!1), [v, T] = Y(null), [P, O] = Y(!1), M = zt(() => f === "password" ? P ? "text" : "password" : f, [s, P, f]), N = zt(
    () => ({
      fullWidth: e,
      sizeVariant: n,
      variant: s,
      status: r,
      disabled: o,
      iconLeft: i,
      iconRight: a,
      special: c,
      ...b
    }),
    [
      e,
      n,
      s,
      r,
      o,
      i,
      a,
      c,
      b
    ]
  ), G = (I) => {
    const W = setTimeout(() => {
      w(!1), clearTimeout(W);
    }, 200);
    T(W), m == null || m(I);
  }, z = (I) => {
    var W;
    I.preventDefault(), v && clearTimeout(v), w(!0), (W = b == null ? void 0 : b.onChange) == null || W.call(b, {
      target: {
        value: "",
        name: b == null ? void 0 : b.name
      }
    });
  }, et = () => a || (f === "password" ? /* @__PURE__ */ S(
    vo,
    {
      as: P ? Zc : Jc,
      onClick: () => O(!P)
    }
  ) : s === "dropdown" ? /* @__PURE__ */ S(vo, { as: kr, disabled: o }) : b.value && y ? /* @__PURE__ */ S(su, { onClick: z, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ S(Yc, { height: 20, width: 20, color: "#D22B1F" }) : null), ot = (() => i || (s === "search" ? /* @__PURE__ */ S(iu, { disabled: o }) : null))(), B = et();
  return /* @__PURE__ */ Q(bn, { children: [
    t && /* @__PURE__ */ S(Ea, { style: d, children: t }),
    /* @__PURE__ */ Q(
      xa,
      {
        fullWidth: e,
        sizeVariant: n,
        status: r ?? "default",
        disabled: o,
        variant: s,
        special: c,
        style: u,
        stacked: g,
        children: [
          ot && /* @__PURE__ */ S(yo, { position: "left", children: ot }),
          /* @__PURE__ */ Q(au, { stacked: g, children: [
            /* @__PURE__ */ S(
              ou,
              {
                ...N,
                type: M,
                disabled: o,
                onFocus: () => w(!0),
                onBlur: G
              }
            ),
            B && /* @__PURE__ */ S(yo, { position: "right", children: B })
          ] }),
          h
        ]
      }
    ),
    r === "error" && l && /* @__PURE__ */ S(ru, { children: l })
  ] });
}
const xa = R.div`
  position: relative;
  display: flex;
  flex-direction: ${(t) => t.stacked ? "column" : "row"};
  gap: 4px;
  align-items: center;
  height: ${(t) => eu[t.sizeVariant ?? "normal"]};
  width: ${(t) => t.fullWidth ? "100%" : "345px"};
  padding: ${(t) => t.sizeVariant === "small" ? "12px" : "12px 14px"};
  background: ${(t) => t.theme.input.background[t.variant ?? "default"].default};
  border-radius: 10px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  overflow: hidden;
  color: rgb(${(t) => t.theme.cardBorder});
  transition: border-color 0.13s ease-in-out, background 0.13s ease-in-out;

  ${(t) => t.variant === "dropdown" ? `
      border: 1.5px solid  ${t.theme.input.border[t.variant || "default"].default};
      background: ${t.theme.input.background[t.variant || "default"].default};
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    ` : t.variant === "search" && t.special ? `border: 1.5px solid ${t.theme.input.border[t.variant || "default"].special}; background:  ${t.theme.input.background[t.variant || "default"].special};` : ""}

  ${(t) => t.status === "error" && `border: 1.5px solid ${t.theme.fail}`};

  &:hover {
    ${(t) => "border: 1.5px solid " + (t.status === "error" ? t.theme.fail : "")};
  }

  &:focus-within,
  &:active {
    border: 1.5px solid
      ${(t) => t.status === "error" ? t.theme.fail : t.theme.input.border[t.variant ?? "default"].focused};
  }

  ${(t) => t.disabled && `
    background: ${t.theme.input.background[t.variant ?? "default"].disabled};
    border: 1.5px solid ${t.theme.input.border[t.variant ?? "default"].disabled};
    color: #838383;
  `}
`, Ea = R.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, ru = R.p`
  color: ${(t) => t.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, ou = R.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(t) => t.theme.primaryText};

  font-size: ${(t) => nu[t.sizeVariant ?? "normal"]};
  font-weight: 500;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }

  :-ms-input-placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }

  ::placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }
`, yo = R.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, iu = R(Qc)`
  color: ${(t) => t.theme.input.icons[t.disabled ? "searchInactive" : "searchActive"]};
`, vo = R(tu)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme: t, disabled: e }) => e ? t.tertiaryText : t.secondaryText};
`, su = ({
  onClick: t,
  width: e = 20,
  height: n = 20,
  color: r = "#838383"
}) => /* @__PURE__ */ S(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    onClick: t,
    children: /* @__PURE__ */ S(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z",
        fill: r
      }
    )
  }
), au = R.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  flex: ${(t) => t.stacked ? "0" : "1"};
`, Yo = je({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), Or = je({});
function lu() {
  return bt(Or).visualElement;
}
const Hn = je(null), Ze = typeof document < "u", On = Ze ? ya : $, Ta = je({ strict: !1 });
function cu(t, e, n, r) {
  const o = lu(), s = bt(Ta), i = bt(Hn), a = bt(Yo).reducedMotion, l = rt();
  r = r || s.renderer, !l.current && r && (l.current = r(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const c = l.current;
  return On(() => {
    c && c.render();
  }), On(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), On(() => () => c && c.notify("Unmount"), []), c;
}
function cn(t) {
  return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function uu(t, e, n) {
  return Me(
    (r) => {
      r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : cn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function In(t) {
  return typeof t == "string" || Array.isArray(t);
}
function _r(t) {
  return typeof t == "object" && typeof t.start == "function";
}
const du = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function Lr(t) {
  return _r(t.animate) || du.some((e) => In(t[e]));
}
function Sa(t) {
  return !!(Lr(t) || t.variants);
}
function fu(t, e) {
  if (Lr(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || In(n) ? n : void 0,
      animate: In(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function hu(t) {
  const { initial: e, animate: n } = fu(t, bt(Or));
  return zt(() => ({ initial: e, animate: n }), [Bi(e), Bi(n)]);
}
function Bi(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const ye = (t) => ({
  isEnabled: (e) => t.some((n) => !!e[n])
}), $n = {
  measureLayout: ye(["layout", "layoutId", "drag"]),
  animation: ye([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: ye(["exit"]),
  drag: ye(["drag", "dragControls"]),
  focus: ye(["whileFocus"]),
  hover: ye(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: ye(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: ye([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: ye([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function pu(t) {
  for (const e in t)
    e === "projectionNodeConstructor" ? $n.projectionNodeConstructor = t[e] : $n[e].Component = t[e];
}
function Dr(t) {
  const e = rt(null);
  return e.current === null && (e.current = t()), e.current;
}
const _n = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
let mu = 1;
function gu() {
  return Dr(() => {
    if (_n.hasEverUpdated)
      return mu++;
  });
}
const Go = je({});
class yu extends Bt.Component {
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */
  getSnapshotBeforeUpdate() {
    const { visualElement: e, props: n } = this.props;
    return e && e.setProps(n), null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
const Ca = je({}), vu = Symbol.for("motionComponentSymbol");
function bu({ preloadedFeatures: t, createVisualElement: e, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  t && pu(t);
  function i(l, c) {
    const u = {
      ...bt(Yo),
      ...l,
      layoutId: wu(l)
    }, { isStatic: d } = u;
    let f = null;
    const h = hu(l), m = d ? void 0 : gu(), g = o(l, d);
    if (!d && Ze) {
      h.visualElement = cu(s, g, u, e);
      const b = bt(Ta).strict, y = bt(Ca);
      h.visualElement && (f = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        b,
        t,
        m,
        n || $n.projectionNodeConstructor,
        y
      ));
    }
    return tt.createElement(
      yu,
      { visualElement: h.visualElement, props: u },
      f,
      tt.createElement(Or.Provider, { value: h }, r(s, l, m, uu(g, h.visualElement, c), g, d, h.visualElement))
    );
  }
  const a = Sc(i);
  return a[vu] = s, a;
}
function wu({ layoutId: t }) {
  const e = bt(Go).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function xu(t) {
  function e(r, o = {}) {
    return bu(t(r, o));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
  });
}
const Eu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Xo(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Eu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const fr = {};
function Tu(t) {
  Object.assign(fr, t);
}
const hr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Qe = new Set(hr);
function Aa(t, { layout: e, layoutId: n }) {
  return Qe.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!fr[t] || t === "opacity");
}
const ae = (t) => !!(t != null && t.getVelocity), Su = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Cu = (t, e) => hr.indexOf(t) - hr.indexOf(e);
function Au({ transform: t, transformKeys: e }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  e.sort(Cu);
  for (const a of e)
    i += `${Su[a] || a}(${t[a]}) `;
  return n && !t.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(t, o ? "" : i) : r && o && (i = "none"), i;
}
function Pa(t) {
  return t.startsWith("--");
}
const Pu = (t, e) => e && typeof t == "number" ? e.transform(t) : t, pn = (t, e, n) => Math.min(Math.max(n, t), e), tn = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Ln = {
  ...tn,
  transform: (t) => pn(0, 1, t)
}, tr = {
  ...tn,
  default: 1
}, Dn = (t) => Math.round(t * 1e5) / 1e5, jn = /(-)?([\d]*\.?[\d])+/g, bo = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Ru = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function qn(t) {
  return typeof t == "string";
}
const Kn = (t) => ({
  test: (e) => qn(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Le = Kn("deg"), ie = Kn("%"), F = Kn("px"), ku = Kn("vh"), Ou = Kn("vw"), Ii = {
  ...ie,
  parse: (t) => ie.parse(t) / 100,
  transform: (t) => ie.transform(t * 100)
}, $i = {
  ...tn,
  transform: Math.round
}, Ra = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  size: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  // Transform props
  rotate: Le,
  rotateX: Le,
  rotateY: Le,
  rotateZ: Le,
  scale: tr,
  scaleX: tr,
  scaleY: tr,
  scaleZ: tr,
  skew: Le,
  skewX: Le,
  skewY: Le,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: Ln,
  originX: Ii,
  originY: Ii,
  originZ: F,
  // Misc
  zIndex: $i,
  // SVG
  fillOpacity: Ln,
  strokeOpacity: Ln,
  numOctaves: $i
};
function Jo(t, e, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: l } = t;
  a.length = 0;
  let c = !1, u = !1, d = !0;
  for (const f in e) {
    const h = e[f];
    if (Pa(f)) {
      s[f] = h;
      continue;
    }
    const m = Ra[f], g = Pu(h, m);
    if (Qe.has(f)) {
      if (c = !0, i[f] = g, a.push(f), !d)
        continue;
      h !== (m.default || 0) && (d = !1);
    } else
      f.startsWith("origin") ? (u = !0, l[f] = g) : o[f] = g;
  }
  if (e.transform || (c || r ? o.transform = Au(t, n, d, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: m = 0 } = l;
    o.transformOrigin = `${f} ${h} ${m}`;
  }
}
const Zo = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function ka(t, e, n) {
  for (const r in e)
    !ae(e[r]) && !Aa(r, n) && (t[r] = e[r]);
}
function _u({ transformTemplate: t }, e, n) {
  return zt(() => {
    const r = Zo();
    return Jo(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function Lu(t, e, n) {
  const r = t.style || {}, o = {};
  return ka(o, r, t), Object.assign(o, _u(t, e, n)), t.transformValues ? t.transformValues(o) : o;
}
function Du(t, e, n) {
  const r = {}, o = Lu(t, e, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Vu = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Fu = ["whileTap", "onTap", "onTapStart", "onTapCancel"], Mu = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Bu = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], Iu = /* @__PURE__ */ new Set([
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "onHoverStart",
  "onHoverEnd",
  "layoutScroll",
  ...Bu,
  ...Fu,
  ...Vu,
  ...Mu
]);
function pr(t) {
  return Iu.has(t);
}
let Oa = (t) => !pr(t);
function $u(t) {
  t && (Oa = (e) => e.startsWith("on") ? !pr(e) : t(e));
}
try {
  $u(require("@emotion/is-prop-valid").default);
} catch {
}
function ju(t, e, n) {
  const r = {};
  for (const o in t)
    (Oa(o) || n === !0 && pr(o) || !e && !pr(o) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
  return r;
}
function ji(t, e, n) {
  return typeof t == "string" ? t : F.transform(e + n * t);
}
function Nu(t, e, n) {
  const r = ji(e, t.x, t.width), o = ji(n, t.y, t.height);
  return `${r} ${o}`;
}
const Uu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, zu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Wu(t, e, n = 1, r = 0, o = !0) {
  t.pathLength = 1;
  const s = o ? Uu : zu;
  t[s.offset] = F.transform(-r);
  const i = F.transform(e), a = F.transform(n);
  t[s.array] = `${i} ${a}`;
}
function Qo(t, {
  attrX: e,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, u, d) {
  if (Jo(t, l, c, d), u) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: f, style: h, dimensions: m } = t;
  f.transform && (m && (h.transform = f.transform), delete f.transform), m && (r !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = Nu(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && Wu(f, s, i, a, !1);
}
const _a = () => ({
  ...Zo(),
  attrs: {}
}), ti = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Hu(t, e, n, r) {
  const o = zt(() => {
    const s = _a();
    return Qo(s, e, { enableHardwareAcceleration: !1 }, ti(r), t.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [e]);
  if (t.style) {
    const s = {};
    ka(s, t.style, t), o.style = { ...s, ...o.style };
  }
  return o;
}
function qu(t = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const c = (Xo(n) ? Hu : Du)(r, i, a, n), d = {
      ...ju(r, typeof n == "string", t),
      ...c,
      ref: s
    };
    return o && (d["data-projection-id"] = o), va(n, d);
  };
}
const ei = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function La(t, { style: e, vars: n }, r, o) {
  Object.assign(t.style, e, o && o.getProjectionStyles(r));
  for (const s in n)
    t.style.setProperty(s, n[s]);
}
const Da = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Va(t, e, n, r) {
  La(t, e, void 0, r);
  for (const o in e.attrs)
    t.setAttribute(Da.has(o) ? o : ei(o), e.attrs[o]);
}
function ni(t) {
  const { style: e } = t, n = {};
  for (const r in e)
    (ae(e[r]) || Aa(r, t)) && (n[r] = e[r]);
  return n;
}
function Fa(t) {
  const e = ni(t);
  for (const n in t)
    if (ae(t[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      e[r] = t[n];
    }
  return e;
}
function ri(t, e, n, r = {}, o = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), e;
}
const mr = (t) => Array.isArray(t), Ku = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Yu = (t) => mr(t) ? t[t.length - 1] || 0 : t;
function ar(t) {
  const e = ae(t) ? t.get() : t;
  return Ku(e) ? e.toValue() : e;
}
function Gu({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, o, s) {
  const i = {
    latestValues: Xu(r, o, s, t),
    renderState: e()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const Ma = (t) => (e, n) => {
  const r = bt(Or), o = bt(Hn), s = () => Gu(t, e, r, o);
  return n ? s() : Dr(s);
};
function Xu(t, e, n, r) {
  const o = {}, s = r(t);
  for (const f in s)
    o[f] = ar(s[f]);
  let { initial: i, animate: a } = t;
  const l = Lr(t), c = Sa(t);
  e && c && !l && t.inherit !== !1 && (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  return d && typeof d != "boolean" && !_r(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = ri(t, h);
    if (!m)
      return;
    const { transitionEnd: g, transition: b, ...y } = m;
    for (const w in y) {
      let v = y[w];
      if (Array.isArray(v)) {
        const T = u ? v.length - 1 : 0;
        v = v[T];
      }
      v !== null && (o[w] = v);
    }
    for (const w in g)
      o[w] = g[w];
  }), o;
}
const Ju = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: Fa,
    createRenderState: _a,
    onMount: (t, e, { renderState: n, latestValues: r }) => {
      try {
        n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Qo(n, r, { enableHardwareAcceleration: !1 }, ti(e.tagName), t.transformTemplate), Va(e, n);
    }
  })
}, Zu = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: ni,
    createRenderState: Zo
  })
};
function Qu(t, { forwardMotionProps: e = !1 }, n, r, o) {
  return {
    ...Xo(t) ? Ju : Zu,
    preloadedFeatures: n,
    useRender: qu(e),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: t
  };
}
var st;
(function(t) {
  t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit";
})(st || (st = {}));
function Vr(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
function wo(t, e, n, r) {
  $(() => {
    const o = t.current;
    if (n && o)
      return Vr(o, e, n, r);
  }, [t, e, n, r]);
}
function td({ whileFocus: t, visualElement: e }) {
  const { animationState: n } = e, r = () => {
    n && n.setActive(st.Focus, !0);
  }, o = () => {
    n && n.setActive(st.Focus, !1);
  };
  wo(e, "focus", t ? r : void 0), wo(e, "blur", t ? o : void 0);
}
function Ba(t) {
  return typeof PointerEvent < "u" && t instanceof PointerEvent ? t.pointerType === "mouse" : t instanceof MouseEvent;
}
function Ia(t) {
  return !!t.touches;
}
function ed(t) {
  return (e) => {
    const n = e instanceof MouseEvent;
    (!n || n && e.button === 0) && t(e);
  };
}
const nd = { pageX: 0, pageY: 0 };
function rd(t, e = "page") {
  const r = t.touches[0] || t.changedTouches[0] || nd;
  return {
    x: r[e + "X"],
    y: r[e + "Y"]
  };
}
function od(t, e = "page") {
  return {
    x: t[e + "X"],
    y: t[e + "Y"]
  };
}
function oi(t, e = "page") {
  return {
    point: Ia(t) ? rd(t, e) : od(t, e)
  };
}
const $a = (t, e = !1) => {
  const n = (r) => t(r, oi(r));
  return e ? ed(n) : n;
}, id = () => Ze && window.onpointerdown === null, sd = () => Ze && window.ontouchstart === null, ad = () => Ze && window.onmousedown === null, ld = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, cd = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function ja(t) {
  return id() ? t : sd() ? cd[t] : ad() ? ld[t] : t;
}
function fn(t, e, n, r) {
  return Vr(t, ja(e), $a(n, e === "pointerdown"), r);
}
function gr(t, e, n, r) {
  return wo(t, ja(e), n && $a(n, e === "pointerdown"), r);
}
function Na(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const Ni = Na("dragHorizontal"), Ui = Na("dragVertical");
function Ua(t) {
  let e = !1;
  if (t === "y")
    e = Ui();
  else if (t === "x")
    e = Ni();
  else {
    const n = Ni(), r = Ui();
    n && r ? e = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return e;
}
function za() {
  const t = Ua(!0);
  return t ? (t(), !1) : !0;
}
function zi(t, e, n) {
  return (r, o) => {
    !Ba(r) || za() || (t.animationState && t.animationState.setActive(st.Hover, e), n && n(r, o));
  };
}
function ud({ onHoverStart: t, onHoverEnd: e, whileHover: n, visualElement: r }) {
  gr(r, "pointerenter", t || n ? zi(r, !0, t) : void 0, { passive: !t }), gr(r, "pointerleave", e || n ? zi(r, !1, e) : void 0, { passive: !e });
}
const Wa = (t, e) => e ? t === e ? !0 : Wa(t, e.parentElement) : !1;
function ii(t) {
  return $(() => () => t(), []);
}
const dd = (t, e) => (n) => e(t(n)), Fr = (...t) => t.reduce(dd);
function fd({ onTap: t, onTapStart: e, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = t || e || n || r, i = rt(!1), a = rt(null), l = {
    passive: !(e || t || n || h)
  };
  function c() {
    a.current && a.current(), a.current = null;
  }
  function u() {
    return c(), i.current = !1, o.animationState && o.animationState.setActive(st.Tap, !1), !za();
  }
  function d(m, g) {
    u() && (Wa(o.current, m.target) ? t && t(m, g) : n && n(m, g));
  }
  function f(m, g) {
    u() && n && n(m, g);
  }
  function h(m, g) {
    c(), !i.current && (i.current = !0, a.current = Fr(fn(window, "pointerup", d, l), fn(window, "pointercancel", f, l)), o.animationState && o.animationState.setActive(st.Tap, !0), e && e(m, g));
  }
  gr(o, "pointerdown", s ? h : void 0, l), ii(c);
}
const Wi = "production", si = typeof process > "u" || process.env === void 0 ? Wi : process.env.NODE_ENV || Wi, Hi = /* @__PURE__ */ new Set();
function ai(t, e, n) {
  t || Hi.has(e) || (console.warn(e), n && console.warn(n), Hi.add(e));
}
const xo = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), hd = (t) => {
  const e = xo.get(t.target);
  e && e(t);
}, pd = (t) => {
  t.forEach(hd);
};
function md({ root: t, ...e }) {
  const n = t || document;
  Jr.has(n) || Jr.set(n, {});
  const r = Jr.get(n), o = JSON.stringify(e);
  return r[o] || (r[o] = new IntersectionObserver(pd, { root: t, ...e })), r[o];
}
function gd(t, e, n) {
  const r = md(e);
  return xo.set(t, n), r.observe(t), () => {
    xo.delete(t), r.unobserve(t);
  };
}
function yd({ visualElement: t, whileInView: e, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = rt({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(e || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? wd : bd)(i, s.current, t, o);
}
const vd = {
  some: 0,
  all: 1
};
function bd(t, e, n, { root: r, margin: o, amount: s = "some", once: i }) {
  $(() => {
    if (!t || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : vd[s]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (e.isInView === u || (e.isInView = u, i && !u && e.hasEnteredView))
        return;
      u && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(st.InView, u);
      const d = n.getProps(), f = u ? d.onViewportEnter : d.onViewportLeave;
      f && f(c);
    };
    return gd(n.current, a, l);
  }, [t, r, o, s]);
}
function wd(t, e, n, { fallback: r = !0 }) {
  $(() => {
    !t || !r || (si !== "production" && ai(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      e.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(st.InView, !0);
    }));
  }, [t]);
}
const Ve = (t) => (e) => (t(e), null), xd = {
  inView: Ve(yd),
  tap: Ve(fd),
  focus: Ve(td),
  hover: Ve(ud)
};
function Ha() {
  const t = bt(Hn);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t, o = Rr();
  return $(() => r(o), []), !e && n ? [!1, () => n && n(o)] : [!0];
}
function qa(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
const Ed = (t) => /^\-?\d*\.?\d+$/.test(t), Td = (t) => /^0[^.\s]+$/.test(t), ve = {
  delta: 0,
  timestamp: 0
}, Ka = 1 / 60 * 1e3, Sd = typeof performance < "u" ? () => performance.now() : () => Date.now(), Ya = typeof window < "u" ? (t) => window.requestAnimationFrame(t) : (t) => setTimeout(() => t(Sd()), Ka);
function Cd(t) {
  let e = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? e : n;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = e.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = n.indexOf(l);
      c !== -1 && n.splice(c, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        s = !0;
        return;
      }
      if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
        for (let c = 0; c < r; c++) {
          const u = e[c];
          u(l), i.has(u) && (a.schedule(u), t());
        }
      o = !1, s && (s = !1, a.process(l));
    }
  };
  return a;
}
const Ad = 40;
let Eo = !0, Nn = !1, To = !1;
const Yn = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Mr = Yn.reduce((t, e) => (t[e] = Cd(() => Nn = !0), t), {}), Ot = Yn.reduce((t, e) => {
  const n = Mr[e];
  return t[e] = (r, o = !1, s = !1) => (Nn || Rd(), n.schedule(r, o, s)), t;
}, {}), Be = Yn.reduce((t, e) => (t[e] = Mr[e].cancel, t), {}), Zr = Yn.reduce((t, e) => (t[e] = () => Mr[e].process(ve), t), {}), Pd = (t) => Mr[t].process(ve), Ga = (t) => {
  Nn = !1, ve.delta = Eo ? Ka : Math.max(Math.min(t - ve.timestamp, Ad), 1), ve.timestamp = t, To = !0, Yn.forEach(Pd), To = !1, Nn && (Eo = !1, Ya(Ga));
}, Rd = () => {
  Nn = !0, Eo = !0, To || Ya(Ga);
};
function li(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ci(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class ui {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return li(this.subscriptions, e), () => ci(this.subscriptions, e);
  }
  notify(e, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function di(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const kd = (t) => !isNaN(parseFloat(t));
class Od {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: i } = ve;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, Ot.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ot.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = kd(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @privateRemarks
   *
   * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
   *
   * ```jsx
   * useOnChange(x, () => {})
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ui()), this.events[e].add(n);
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e) {
    this.passiveEffect = e;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), this.prev = e, this.timeDelta = r;
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      di(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.stopAnimation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop();
  }
}
function mn(t, e) {
  return new Od(t, e);
}
const fi = (t, e) => (n) => !!(qn(n) && Ru.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), Xa = (t, e, n) => (r) => {
  if (!qn(r))
    return r;
  const [o, s, i, a] = r.match(jn);
  return {
    [t]: parseFloat(o),
    [e]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, _d = (t) => pn(0, 255, t), Qr = {
  ...tn,
  transform: (t) => Math.round(_d(t))
}, Ye = {
  test: fi("rgb", "red"),
  parse: Xa("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + Qr.transform(t) + ", " + Qr.transform(e) + ", " + Qr.transform(n) + ", " + Dn(Ln.transform(r)) + ")"
};
function Ld(t) {
  let e = "", n = "", r = "", o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, r += r, o += o), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const So = {
  test: fi("#"),
  parse: Ld,
  transform: Ye.transform
}, un = {
  test: fi("hsl", "hue"),
  parse: Xa("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + ie.transform(Dn(e)) + ", " + ie.transform(Dn(n)) + ", " + Dn(Ln.transform(r)) + ")"
}, Rt = {
  test: (t) => Ye.test(t) || So.test(t) || un.test(t),
  parse: (t) => Ye.test(t) ? Ye.parse(t) : un.test(t) ? un.parse(t) : So.parse(t),
  transform: (t) => qn(t) ? t : t.hasOwnProperty("red") ? Ye.transform(t) : un.transform(t)
}, Ja = "${c}", Za = "${n}";
function Dd(t) {
  var e, n;
  return isNaN(t) && qn(t) && (((e = t.match(jn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(bo)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function yr(t) {
  typeof t == "number" && (t = `${t}`);
  const e = [];
  let n = 0, r = 0;
  const o = t.match(bo);
  o && (n = o.length, t = t.replace(bo, Ja), e.push(...o.map(Rt.parse)));
  const s = t.match(jn);
  return s && (r = s.length, t = t.replace(jn, Za), e.push(...s.map(tn.parse))), { values: e, numColors: n, numNumbers: r, tokenised: t };
}
function Qa(t) {
  return yr(t).values;
}
function tl(t) {
  const { values: e, numColors: n, tokenised: r } = yr(t), o = e.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? Ja : Za, a < n ? Rt.transform(s[a]) : Dn(s[a]));
    return i;
  };
}
const Vd = (t) => typeof t == "number" ? 0 : t;
function Fd(t) {
  const e = Qa(t);
  return tl(t)(e.map(Vd));
}
const Ie = { test: Dd, parse: Qa, createTransformer: tl, getAnimatableNone: Fd }, Md = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Bd(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(jn) || [];
  if (!r)
    return t;
  const o = n.replace(r, "");
  let s = Md.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + o + ")";
}
const Id = /([a-z-]*)\(.*?\)/g, Co = {
  ...Ie,
  getAnimatableNone: (t) => {
    const e = t.match(Id);
    return e ? e.map(Bd).join(" ") : t;
  }
}, $d = {
  ...Ra,
  // Color props
  color: Rt,
  backgroundColor: Rt,
  outlineColor: Rt,
  fill: Rt,
  stroke: Rt,
  // Border props
  borderColor: Rt,
  borderTopColor: Rt,
  borderRightColor: Rt,
  borderBottomColor: Rt,
  borderLeftColor: Rt,
  filter: Co,
  WebkitFilter: Co
}, hi = (t) => $d[t];
function pi(t, e) {
  var n;
  let r = hi(t);
  return r !== Co && (r = Ie), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, e);
}
const el = (t) => (e) => e.test(t), jd = {
  test: (t) => t === "auto",
  parse: (t) => t
}, nl = [tn, F, ie, Le, Ou, ku, jd], An = (t) => nl.find(el(t)), Nd = [...nl, Rt, Ie], Ud = (t) => Nd.find(el(t));
function zd(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.get()), e;
}
function Wd(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.getVelocity()), e;
}
function Br(t, e, n) {
  const r = t.getProps();
  return ri(r, e, n !== void 0 ? n : r.custom, zd(t), Wd(t));
}
function Hd(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, mn(n));
}
function qd(t, e) {
  const n = Br(t, e);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = Yu(s[i]);
    Hd(t, i, a);
  }
}
function Kd(t, e, n) {
  var r, o;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const l = s[a], c = e[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && o !== void 0 ? o : e[l]), u != null && (typeof u == "string" && (Ed(u) || Td(u)) ? u = parseFloat(u) : !Ud(u) && Ie.test(c) && (u = pi(l, c)), t.addValue(l, mn(u, { owner: t })), n[l] === void 0 && (n[l] = u), u !== null && t.setBaseTarget(l, u));
    }
}
function Yd(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function Gd(t, e, n) {
  var r;
  const o = {};
  for (const s in t) {
    const i = Yd(s, e);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function vr(t) {
  return !!(ae(t) && t.add);
}
const Xd = (t, e) => `${t}: ${e}`;
function Jd(t, e) {
  const { MotionAppearAnimations: n } = window, r = Xd(t, Qe.has(e) ? "transform" : e), o = n && n.get(r);
  return o ? (Ot.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const Zd = "framerAppearId", Qd = "data-" + ei(Zd);
var Ir = function() {
}, Ht = function() {
};
process.env.NODE_ENV !== "production" && (Ir = function(t, e) {
  !t && typeof console < "u" && console.warn(e);
}, Ht = function(t, e) {
  if (!t)
    throw new Error(e);
});
const lr = (t) => t * 1e3, tf = {
  current: !1
}, mi = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, gi = (t) => (e) => 1 - t(1 - e), yi = (t) => t * t, ef = gi(yi), vi = mi(yi), ft = (t, e, n) => -n * t + n * e + t;
function to(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function nf({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!e)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    o = to(l, a, t + 1 / 3), s = to(l, a, t), i = to(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const eo = (t, e, n) => {
  const r = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - r) + r));
}, rf = [So, Ye, un], of = (t) => rf.find((e) => e.test(t));
function qi(t) {
  const e = of(t);
  Ht(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === un && (n = nf(n)), n;
}
const rl = (t, e) => {
  const n = qi(t), r = qi(e), o = { ...n };
  return (s) => (o.red = eo(n.red, r.red, s), o.green = eo(n.green, r.green, s), o.blue = eo(n.blue, r.blue, s), o.alpha = ft(n.alpha, r.alpha, s), Ye.transform(o));
};
function ol(t, e) {
  return typeof t == "number" ? (n) => ft(t, e, n) : Rt.test(t) ? rl(t, e) : sl(t, e);
}
const il = (t, e) => {
  const n = [...t], r = n.length, o = t.map((s, i) => ol(s, e[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, sf = (t, e) => {
  const n = { ...t, ...e }, r = {};
  for (const o in n)
    t[o] !== void 0 && e[o] !== void 0 && (r[o] = ol(t[o], e[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, sl = (t, e) => {
  const n = Ie.createTransformer(e), r = yr(t), o = yr(e);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Fr(il(r.values, o.values), n) : (Ir(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? e : t}`);
}, br = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
}, Ki = (t, e) => (n) => ft(t, e, n);
function af(t) {
  return typeof t == "number" ? Ki : typeof t == "string" ? Rt.test(t) ? rl : sl : Array.isArray(t) ? il : typeof t == "object" ? sf : Ki;
}
function lf(t, e, n) {
  const r = [], o = n || af(t[0]), s = t.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(t[i], t[i + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[i] : e;
      a = Fr(l, a);
    }
    r.push(a);
  }
  return r;
}
function al(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = t.length;
  Ht(s === e.length, "Both input and output ranges must be the same length"), Ht(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const i = lf(e, r, o), a = i.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < t.length - 2 && !(c < t[u + 1]); u++)
        ;
    const d = br(t[u], t[u + 1], c);
    return i[u](d);
  };
  return n ? (c) => l(pn(t[0], t[s - 1], c)) : l;
}
const bi = (t) => t, ll = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, cf = 1e-7, uf = 12;
function df(t, e, n, r, o) {
  let s, i, a = 0;
  do
    i = e + (n - e) / 2, s = ll(i, r, o) - t, s > 0 ? n = i : e = i;
  while (Math.abs(s) > cf && ++a < uf);
  return i;
}
function cl(t, e, n, r) {
  if (t === e && n === r)
    return bi;
  const o = (s) => df(s, 0, 1, t, n);
  return (s) => s === 0 || s === 1 ? s : ll(o(s), e, r);
}
const ul = (t) => 1 - Math.sin(Math.acos(t)), wi = gi(ul), ff = mi(wi), dl = cl(0.33, 1.53, 0.69, 0.99), xi = gi(dl), hf = mi(xi), pf = (t) => (t *= 2) < 1 ? 0.5 * xi(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Yi = {
  linear: bi,
  easeIn: yi,
  easeInOut: vi,
  easeOut: ef,
  circIn: ul,
  circInOut: ff,
  circOut: wi,
  backIn: xi,
  backInOut: hf,
  backOut: dl,
  anticipate: pf
}, Gi = (t) => {
  if (Array.isArray(t)) {
    Ht(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, o] = t;
    return cl(e, n, r, o);
  } else if (typeof t == "string")
    return Ht(Yi[t] !== void 0, `Invalid easing type '${t}'`), Yi[t];
  return t;
}, mf = (t) => Array.isArray(t) && typeof t[0] != "number";
function gf(t, e) {
  return t.map(() => e || vi).splice(0, t.length - 1);
}
function yf(t) {
  const e = t.length;
  return t.map((n, r) => r !== 0 ? r / (e - 1) : 0);
}
function vf(t, e) {
  return t.map((n) => n * e);
}
function wr({ keyframes: t, ease: e = vi, times: n, duration: r = 300 }) {
  t = [...t];
  const o = wr[0], s = mf(e) ? e.map(Gi) : Gi(e), i = { done: !1, value: o }, a = vf(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === wr.length ? n : yf(t),
    r
  );
  function l() {
    return al(a, t, {
      ease: Array.isArray(s) ? s : gf(t, s)
    });
  }
  let c = l();
  return {
    next: (u) => (i.value = c(u), i.done = u >= r, i),
    flipTarget: () => {
      t.reverse(), c = l();
    }
  };
}
const no = 1e-3, bf = 0.01, Xi = 10, wf = 0.05, xf = 1;
function Ef({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  Ir(t <= Xi * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - e;
  i = pn(wf, xf, i), t = pn(bf, Xi, t / 1e3), i < 1 ? (o = (c) => {
    const u = c * i, d = u * t, f = u - n, h = Ao(c, i), m = Math.exp(-d);
    return no - f / h * m;
  }, s = (c) => {
    const d = c * i * t, f = d * n + n, h = Math.pow(i, 2) * Math.pow(c, 2) * t, m = Math.exp(-d), g = Ao(Math.pow(c, 2), i);
    return (-o(c) + no > 0 ? -1 : 1) * ((f - h) * m) / g;
  }) : (o = (c) => {
    const u = Math.exp(-c * t), d = (c - n) * t + 1;
    return -no + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * t), d = (n - c) * (t * t);
    return u * d;
  });
  const a = 5 / t, l = Sf(o, s, a);
  if (t = t * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: t
    };
  }
}
const Tf = 12;
function Sf(t, e, n) {
  let r = n;
  for (let o = 1; o < Tf; o++)
    r = r - t(r) / e(r);
  return r;
}
function Ao(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Cf = ["duration", "bounce"], Af = ["stiffness", "damping", "mass"];
function Ji(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Pf(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ji(t, Af) && Ji(t, Cf)) {
    const n = Ef(t);
    e = {
      ...e,
      ...n,
      velocity: 0,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
const Rf = 5;
function fl({ keyframes: t, restSpeed: e = 2, restDelta: n = 0.01, ...r }) {
  let o = t[0], s = t[t.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = Pf(r);
  let h = kf, m = u ? -(u / 1e3) : 0;
  const g = l / (2 * Math.sqrt(a * c));
  function b() {
    const y = s - o, w = Math.sqrt(a / c) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const v = Ao(w, g);
      h = (T) => {
        const P = Math.exp(-g * w * T);
        return s - P * ((m + g * w * y) / v * Math.sin(v * T) + y * Math.cos(v * T));
      };
    } else if (g === 1)
      h = (v) => s - Math.exp(-w * v) * (y + (m + w * y) * v);
    else {
      const v = w * Math.sqrt(g * g - 1);
      h = (T) => {
        const P = Math.exp(-g * w * T), O = Math.min(v * T, 300);
        return s - P * ((m + g * w * y) * Math.sinh(O) + v * y * Math.cosh(O)) / v;
      };
    }
  }
  return b(), {
    next: (y) => {
      const w = h(y);
      if (f)
        i.done = y >= d;
      else {
        let v = m;
        if (y !== 0)
          if (g < 1) {
            const O = Math.max(0, y - Rf);
            v = di(w - h(O), y - O);
          } else
            v = 0;
        const T = Math.abs(v) <= e, P = Math.abs(s - w) <= n;
        i.done = T && P;
      }
      return i.value = i.done ? s : w, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], b();
    }
  };
}
fl.needsInterpolation = (t, e) => typeof t == "string" || typeof e == "string";
const kf = (t) => 0;
function Of({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: t = [0],
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: s
}) {
  const i = t[0], a = { done: !1, value: i };
  let l = n * e;
  const c = i + l, u = s === void 0 ? c : s(c);
  return u !== c && (l = u - i), {
    next: (d) => {
      const f = -l * Math.exp(-d / r);
      return a.done = !(f > o || f < -o), a.value = a.done ? u : u + f, a;
    },
    flipTarget: () => {
    }
  };
}
const _f = {
  decay: Of,
  keyframes: wr,
  tween: wr,
  spring: fl
};
function hl(t, e, n = 0) {
  return t - e - n;
}
function Lf(t, e = 0, n = 0, r = !0) {
  return r ? hl(e + -t, e, n) : e - (t - e) + n;
}
function Df(t, e, n, r) {
  return r ? t >= e + n : t <= -n;
}
const Vf = (t) => {
  const e = ({ delta: n }) => t(n);
  return {
    start: () => Ot.update(e, !0),
    stop: () => Be.update(e)
  };
};
function xr({ duration: t, driver: e = Vf, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: l, onStop: c, onComplete: u, onRepeat: d, onUpdate: f, type: h = "keyframes", ...m }) {
  var g, b;
  let y, w = 0, v = t, T, P = !1, O = !0, M;
  const N = _f[i.length > 2 ? "keyframes" : h], G = i[0], z = i[i.length - 1];
  !((b = (g = N).needsInterpolation) === null || b === void 0) && b.call(g, G, z) && (M = al([0, 100], [G, z], {
    clamp: !1
  }), i = [0, 100]);
  const et = N({
    ...m,
    duration: t,
    keyframes: i
  });
  function ct() {
    w++, o === "reverse" ? (O = w % 2 === 0, n = Lf(n, v, s, O)) : (n = hl(n, v, s), o === "mirror" && et.flipTarget()), P = !1, d && d();
  }
  function ot() {
    y.stop(), u && u();
  }
  function B(W) {
    if (O || (W = -W), n += W, !P) {
      const Z = et.next(Math.max(0, n));
      T = Z.value, M && (T = M(T)), P = O ? Z.done : n <= 0;
    }
    f && f(T), P && (w === 0 && (v = v !== void 0 ? v : n), w < r ? Df(n, v, s, O) && ct() : ot());
  }
  function I() {
    l && l(), y = e(B), y.start();
  }
  return a && I(), {
    stop: () => {
      c && c(), y.stop();
    },
    sample: (W) => et.next(Math.max(0, W))
  };
}
function Ff(t) {
  return !t || // Default easing
  Array.isArray(t) || // Bezier curve
  typeof t == "string" && pl[t];
}
const kn = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, pl = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: kn([0, 0.65, 0.55, 1]),
  circOut: kn([0.55, 0, 1, 0.45]),
  backIn: kn([0.31, 0.01, 0.66, -0.59]),
  backOut: kn([0.33, 1.53, 0.69, 0.99])
};
function Mf(t) {
  if (t)
    return Array.isArray(t) ? kn(t) : pl[t];
}
function Bf(t, e, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: l } = {}) {
  return t.animate({ [e]: n, offset: l }, {
    delay: r,
    duration: o,
    easing: Mf(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const er = 10;
function If(t, e, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: l } = o;
  if (o.type === "spring" || !Ff(o.ease)) {
    const u = xr(o);
    let d = { done: !1, value: s[0] };
    const f = [];
    let h = 0;
    for (; !d.done; )
      d = u.sample(h), f.push(d.value), h += er;
    s = f, i = h - er, l = "linear";
  }
  const c = Bf(t.owner.current, e, s, {
    ...o,
    delay: -a,
    duration: i,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: l
  });
  return c.onfinish = () => {
    t.set(s[s.length - 1]), r && r();
  }, () => {
    const { currentTime: u } = c;
    if (u) {
      const d = xr(o);
      t.setWithVelocity(d.sample(u - er).value, d.sample(u).value, er);
    }
    Ot.update(() => c.cancel());
  };
}
function ml(t, e) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= e && (Be.read(r), t(s - e));
  };
  return Ot.read(r, !0), () => Be.read(r);
}
function $f({ keyframes: t, elapsed: e, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(t[t.length - 1]), r && r(), () => {
  });
  return e ? ml(o, -e) : o();
}
function jf({ keyframes: t, velocity: e = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: d, onComplete: f, onStop: h }) {
  const m = t[0];
  let g;
  function b(T) {
    return n !== void 0 && T < n || r !== void 0 && T > r;
  }
  function y(T) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - T) < Math.abs(r - T) ? n : r;
  }
  function w(T) {
    g == null || g.stop(), g = xr({
      keyframes: [0, 1],
      velocity: 0,
      ...T,
      driver: u,
      onUpdate: (P) => {
        var O;
        d == null || d(P), (O = T.onUpdate) === null || O === void 0 || O.call(T, P);
      },
      onComplete: f,
      onStop: h
    });
  }
  function v(T) {
    w({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: l,
      ...T
    });
  }
  if (b(m))
    v({
      velocity: e,
      keyframes: [m, y(m)]
    });
  else {
    let T = o * e + m;
    typeof c < "u" && (T = c(T));
    const P = y(T), O = P === n ? -1 : 1;
    let M, N;
    const G = (z) => {
      M = N, N = z, e = di(z - M, ve.delta), (O === 1 && z > P || O === -1 && z < P) && v({ keyframes: [z, P], velocity: e });
    };
    w({
      type: "decay",
      keyframes: [m, 0],
      velocity: e,
      timeConstant: s,
      power: o,
      restDelta: l,
      modifyTarget: c,
      onUpdate: b(T) ? G : void 0
    });
  }
  return {
    stop: () => g == null ? void 0 : g.stop()
  };
}
const He = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}), nr = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ro = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), Nf = {
  type: "keyframes",
  duration: 0.8
}, Zi = {
  x: He,
  y: He,
  z: He,
  rotate: He,
  rotateX: He,
  rotateY: He,
  rotateZ: He,
  scaleX: nr,
  scaleY: nr,
  scale: nr,
  opacity: ro,
  backgroundColor: ro,
  color: ro,
  default: nr
}, Uf = (t, { keyframes: e }) => e.length > 2 ? Nf : (Zi[t] || Zi.default)(e[1]), Po = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
Ie.test(e) && // And it contains numbers and/or colors
!e.startsWith("url("));
function zf({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, ...c }) {
  return !!Object.keys(c).length;
}
function Qi(t) {
  return t === 0 || typeof t == "string" && parseFloat(t) === 0 && t.indexOf(" ") === -1;
}
function ts(t) {
  return typeof t == "number" ? 0 : pi("", t);
}
function gl(t, e) {
  return t[e] || t.default || t;
}
function Wf(t, e, n, r) {
  const o = Po(e, n);
  let s = r.from !== void 0 ? r.from : t.get();
  return s === "none" && o && typeof n == "string" ? s = pi(e, n) : Qi(s) && typeof n == "string" ? s = ts(n) : !Array.isArray(n) && Qi(n) && typeof s == "string" && (n = ts(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const es = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, oo = {}, yl = {};
for (const t in es)
  yl[t] = () => (oo[t] === void 0 && (oo[t] = es[t]()), oo[t]);
const Hf = /* @__PURE__ */ new Set(["opacity"]), Ei = (t, e, n, r = {}) => (o) => {
  const s = gl(r, t) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - lr(i);
  const l = Wf(e, t, n, s), c = l[0], u = l[l.length - 1], d = Po(t, c), f = Po(t, u);
  Ir(d === f, `You are trying to animate ${t} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let h = {
    keyframes: l,
    velocity: e.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (y) => {
      e.set(y), s.onUpdate && s.onUpdate(y);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!d || !f || tf.current || s.type === !1)
    return $f(h);
  if (s.type === "inertia") {
    const y = jf(h);
    return () => y.stop();
  }
  zf(s) || (h = {
    ...h,
    ...Uf(t, h)
  }), h.duration && (h.duration = lr(h.duration)), h.repeatDelay && (h.repeatDelay = lr(h.repeatDelay));
  const m = e.owner, g = m && m.current;
  if (yl.waapi() && Hf.has(t) && !h.repeatDelay && h.repeatType !== "mirror" && h.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return If(e, t, h);
  {
    const y = xr(h);
    return () => y.stop();
  }
};
function qf(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const o = e.map((s) => Ro(t, s, n));
    r = Promise.all(o);
  } else if (typeof e == "string")
    r = Ro(t, e, n);
  else {
    const o = typeof e == "function" ? Br(t, e, n.custom) : e;
    r = vl(t, o, n);
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
function Ro(t, e, n = {}) {
  var r;
  const o = Br(t, e, n.custom);
  let { transition: s = t.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => vl(t, o, n) : () => Promise.resolve(), a = !((r = t.variantChildren) === null || r === void 0) && r.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = s;
    return Kf(t, e, u + c, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(u);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function vl(t, e, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = t.getDefaultTransition(), transitionEnd: a, ...l } = t.makeTargetAnimatable(e);
  const c = t.getValue("willChange");
  r && (i = r);
  const u = [], d = o && ((s = t.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const f in l) {
    const h = t.getValue(f), m = l[f];
    if (!h || m === void 0 || d && Gf(d, f))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (t.shouldReduceMotion && Qe.has(f) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !h.hasAnimated) {
      const y = t.getProps()[Qd];
      y && (g.elapsed = Jd(y, f));
    }
    let b = h.start(Ei(f, h, m, g));
    vr(c) && (c.add(f), b = b.then(() => c.remove(f))), u.push(b);
  }
  return Promise.all(u).then(() => {
    a && qd(t, a);
  });
}
function Kf(t, e, n = 0, r = 0, o = 1, s) {
  const i = [], a = (t.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(t.variantChildren).sort(Yf).forEach((c, u) => {
    i.push(Ro(c, e, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", e)));
  }), Promise.all(i);
}
function Yf(t, e) {
  return t.sortNodePosition(e);
}
function Gf({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
const Ti = [
  st.Animate,
  st.InView,
  st.Focus,
  st.Hover,
  st.Tap,
  st.Drag,
  st.Exit
], Xf = [...Ti].reverse(), Jf = Ti.length;
function Zf(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => qf(t, n, r)));
}
function Qf(t) {
  let e = Zf(t);
  const n = eh();
  let r = !0;
  const o = (l, c) => {
    const u = Br(t, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...h } = u;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function s(l) {
    e = l(t);
  }
  function i(l, c) {
    const u = t.getProps(), d = t.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let y = 0; y < Jf; y++) {
      const w = Xf[y], v = n[w], T = u[w] !== void 0 ? u[w] : d[w], P = In(T), O = w === c ? v.isActive : null;
      O === !1 && (g = y);
      let M = T === d[w] && T !== u[w] && P;
      if (M && r && t.manuallyAnimateOnMount && (M = !1), v.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && O === null || // If we didn't and don't have any defined prop for this animation type
      !T && !v.prevProp || // Or if the prop doesn't define an animation
      _r(T) || typeof T == "boolean")
        continue;
      const N = th(v.prevProp, T);
      let G = N || // If we're making this variant active, we want to always make it active
      w === c && v.isActive && !M && P || // If we removed a higher-priority variant (i is in reverse order)
      y > g && P;
      const z = Array.isArray(T) ? T : [T];
      let et = z.reduce(o, {});
      O === !1 && (et = {});
      const { prevResolvedValues: ct = {} } = v, ot = {
        ...ct,
        ...et
      }, B = (I) => {
        G = !0, h.delete(I), v.needsAnimating[I] = !0;
      };
      for (const I in ot) {
        const W = et[I], Z = ct[I];
        m.hasOwnProperty(I) || (W !== Z ? mr(W) && mr(Z) ? !qa(W, Z) || N ? B(I) : v.protectedKeys[I] = !0 : W !== void 0 ? B(I) : h.add(I) : W !== void 0 && h.has(I) ? B(I) : v.protectedKeys[I] = !0);
      }
      v.prevProp = T, v.prevResolvedValues = et, v.isActive && (m = { ...m, ...et }), r && t.blockInitialAnimation && (G = !1), G && !M && f.push(...z.map((I) => ({
        animation: I,
        options: { type: w, ...l }
      })));
    }
    if (h.size) {
      const y = {};
      h.forEach((w) => {
        const v = t.getBaseTarget(w);
        v !== void 0 && (y[w] = v);
      }), f.push({ animation: y });
    }
    let b = !!f.length;
    return r && u.initial === !1 && !t.manuallyAnimateOnMount && (b = !1), r = !1, b ? e(f) : Promise.resolve();
  }
  function a(l, c, u) {
    var d;
    if (n[l].isActive === c)
      return Promise.resolve();
    (d = t.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
    }), n[l].isActive = c;
    const f = i(u, l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function th(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !qa(e, t) : !1;
}
function qe(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function eh() {
  return {
    [st.Animate]: qe(!0),
    [st.InView]: qe(),
    [st.Hover]: qe(),
    [st.Tap]: qe(),
    [st.Drag]: qe(),
    [st.Focus]: qe(),
    [st.Exit]: qe()
  };
}
const nh = {
  animation: Ve(({ visualElement: t, animate: e }) => {
    t.animationState || (t.animationState = Qf(t)), _r(e) && $(() => e.subscribe(t), [e]);
  }),
  exit: Ve((t) => {
    const { custom: e, visualElement: n } = t, [r, o] = Ha(), s = bt(Hn);
    $(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(st.Exit, !r, {
        custom: s && s.custom || e
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, ns = (t, e) => Math.abs(t - e);
function rh(t, e) {
  const n = ns(t.x, e.x), r = ns(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class bl {
  constructor(e, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = so(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = rh(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: h } = ve;
      this.history.push({ ...f, timestamp: h });
      const { onStart: m, onMove: g } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      if (this.lastMoveEvent = c, this.lastMoveEventInfo = io(u, this.transformPagePoint), Ba(c) && c.buttons === 0) {
        this.handlePointerUp(c, u);
        return;
      }
      Ot.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      this.end();
      const { onEnd: d, onSessionEnd: f } = this.handlers, h = so(io(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, h), f && f(c, h);
    }, Ia(e) && e.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = oi(e), s = io(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = ve;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(e, so(s, this.history)), this.removeListeners = Fr(fn(window, "pointermove", this.handlePointerMove), fn(window, "pointerup", this.handlePointerUp), fn(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Be.update(this.updatePoint);
  }
}
function io(t, e) {
  return e ? { point: e(t.point) } : t;
}
function rs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function so({ point: t }, e) {
  return {
    point: t,
    delta: rs(t, wl(e)),
    offset: rs(t, oh(e)),
    velocity: ih(e, 0.1)
  };
}
function oh(t) {
  return t[0];
}
function wl(t) {
  return t[t.length - 1];
}
function ih(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const o = wl(t);
  for (; n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > lr(e))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = (o.timestamp - r.timestamp) / 1e3;
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Dt(t) {
  return t.max - t.min;
}
function ko(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function os(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = ft(e.min, e.max, t.origin), t.scale = Dt(n) / Dt(e), (ko(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = ft(n.min, n.max, t.origin) - t.originPoint, (ko(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function Vn(t, e, n, r) {
  os(t.x, e.x, n.x, r == null ? void 0 : r.originX), os(t.y, e.y, n.y, r == null ? void 0 : r.originY);
}
function is(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Dt(e);
}
function sh(t, e, n) {
  is(t.x, e.x, n.x), is(t.y, e.y, n.y);
}
function ss(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Dt(e);
}
function Fn(t, e, n) {
  ss(t.x, e.x, n.x), ss(t.y, e.y, n.y);
}
function ah(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? ft(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? ft(n, t, r.max) : Math.min(t, n)), t;
}
function as(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function lh(t, { top: e, left: n, bottom: r, right: o }) {
  return {
    x: as(t.x, n, o),
    y: as(t.y, e, r)
  };
}
function ls(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ch(t, e) {
  return {
    x: ls(t.x, e.x),
    y: ls(t.y, e.y)
  };
}
function uh(t, e) {
  let n = 0.5;
  const r = Dt(t), o = Dt(e);
  return o > r ? n = br(e.min, e.max - r, t.min) : r > o && (n = br(t.min, t.max - o, e.min)), pn(0, 1, n);
}
function dh(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Oo = 0.35;
function fh(t = Oo) {
  return t === !1 ? t = 0 : t === !0 && (t = Oo), {
    x: cs(t, "left", "right"),
    y: cs(t, "top", "bottom")
  };
}
function cs(t, e, n) {
  return {
    min: us(t, e),
    max: us(t, n)
  };
}
function us(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ds = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mn = () => ({
  x: ds(),
  y: ds()
}), fs = () => ({ min: 0, max: 0 }), vt = () => ({
  x: fs(),
  y: fs()
});
function re(t) {
  return [t("x"), t("y")];
}
function xl({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function hh({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ph(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), r = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ao(t) {
  return t === void 0 || t === 1;
}
function _o({ scale: t, scaleX: e, scaleY: n }) {
  return !ao(t) || !ao(e) || !ao(n);
}
function Ke(t) {
  return _o(t) || El(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function El(t) {
  return hs(t.x) || hs(t.y);
}
function hs(t) {
  return t && t !== "0%";
}
function Er(t, e, n) {
  const r = t - n, o = e * r;
  return n + o;
}
function ps(t, e, n, r, o) {
  return o !== void 0 && (t = Er(t, o, r)), Er(t, n, r) + e;
}
function Lo(t, e = 0, n = 1, r, o) {
  t.min = ps(t.min, e, n, r, o), t.max = ps(t.max, e, n, r, o);
}
function Tl(t, { x: e, y: n }) {
  Lo(t.x, e.translate, e.scale, e.originPoint), Lo(t.y, n.translate, n.scale, n.originPoint);
}
function mh(t, e, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let a, l;
  for (let c = 0; c < i; c++)
    a = n[c], l = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && dn(t, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Tl(t, l)), r && Ke(a.latestValues) && dn(t, a.latestValues));
  e.x = ms(e.x), e.y = ms(e.y);
}
function ms(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function De(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function gs(t, e, [n, r, o]) {
  const s = e[o] !== void 0 ? e[o] : 0.5, i = ft(t.min, t.max, s);
  Lo(t, e[n], e[r], i, e.scale);
}
const gh = ["x", "scaleX", "originX"], yh = ["y", "scaleY", "originY"];
function dn(t, e) {
  gs(t.x, e, gh), gs(t.y, e, yh);
}
function Sl(t, e) {
  return xl(ph(t.getBoundingClientRect(), e));
}
function vh(t, e, n) {
  const r = Sl(t, n), { scroll: o } = e;
  return o && (De(r.x, o.offset.x), De(r.y, o.offset.y)), r;
}
const bh = /* @__PURE__ */ new WeakMap();
class wh {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = vt(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(oi(a, "page").point);
    }, o = (a, l) => {
      var c;
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ua(u), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), re((h) => {
        var m, g;
        let b = this.getAxisMotionValue(h).get() || 0;
        if (ie.test(b)) {
          const y = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[h];
          y && (b = Dt(y) * (parseFloat(b) / 100));
        }
        this.originPoint[h] = b;
      }), f == null || f(a, l), (c = this.visualElement.animationState) === null || c === void 0 || c.setActive(st.Drag, !0));
    }, s = (a, l) => {
      const { dragPropagation: c, dragDirectionLock: u, onDirectionLock: d, onDrag: f } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: h } = l;
      if (u && this.currentDirection === null) {
        this.currentDirection = xh(h), this.currentDirection !== null && (d == null || d(this.currentDirection));
        return;
      }
      this.updateAxis("x", l.point, h), this.updateAxis("y", l.point, h), this.visualElement.render(), f == null || f(a, l);
    }, i = (a, l) => this.stop(a, l);
    this.panSession = new bl(e, {
      onSessionStart: r,
      onStart: o,
      onMove: s,
      onSessionEnd: i
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(e, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s == null || s(e, n);
  }
  cancel() {
    var e, n;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (e = this.panSession) === null || e === void 0 || e.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(st.Drag, !1);
  }
  updateAxis(e, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !rr(e, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (i = ah(i, this.constraints[e], this.elastic[e])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    e && cn(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = lh(r.layoutBox, e) : this.constraints = !1, this.elastic = fh(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && re((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = dh(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !cn(e))
      return !1;
    const r = e.current;
    Ht(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = vh(r, o.root, this.visualElement.getTransformPagePoint());
    let i = ch(o.layout.layoutBox, s);
    if (n) {
      const a = n(hh(i));
      this.hasMutatedConstraints = !!a, a && (i = xl(a));
    }
    return i;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = re((u) => {
      if (!rr(u, n, this.currentDirection))
        return;
      let d = (l == null ? void 0 : l[u]) || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? e[u] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Ei(e, r, 0, n));
  }
  stopAnimation() {
    re((e) => this.getAxisMotionValue(e).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    var n;
    const r = "_drag" + e.toUpperCase(), o = this.visualElement.getProps()[r];
    return o || this.visualElement.getValue(e, ((n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[e]) || 0);
  }
  snapToCursor(e) {
    re((n) => {
      const { drag: r } = this.getProps();
      if (!rr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(e[n] - ft(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    var e;
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!cn(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    re((a) => {
      const l = this.getAxisMotionValue(a);
      if (l) {
        const c = l.get();
        s[a] = uh({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (e = o.root) === null || e === void 0 || e.updateScroll(), o.updateLayout(), this.resolveConstraints(), re((a) => {
      if (!rr(a, n, null))
        return;
      const l = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      l.set(ft(c, u, s[a]));
    });
  }
  addListeners() {
    var e;
    if (!this.visualElement.current)
      return;
    bh.set(this.visualElement, this);
    const n = this.visualElement.current, r = fn(n, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), o = () => {
      const { dragConstraints: c } = this.getProps();
      cn(c) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((e = s.root) === null || e === void 0 || e.updateScroll(), s.updateLayout()), o();
    const a = Vr(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (re((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), l == null || l();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = Oo, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function rr(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function xh(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
function Eh(t) {
  const { dragControls: e, visualElement: n } = t, r = Dr(() => new wh(n));
  $(() => e && e.subscribe(r), [r, e]), $(() => r.addListeners(), [r]);
}
function Th({ onPan: t, onPanStart: e, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = t || e || n || r, i = rt(null), { transformPagePoint: a } = bt(Yo), l = {
    onSessionStart: r,
    onStart: e,
    onMove: t,
    onEnd: (u, d) => {
      i.current = null, n && n(u, d);
    }
  };
  $(() => {
    i.current !== null && i.current.updateHandlers(l);
  });
  function c(u) {
    i.current = new bl(u, l, {
      transformPagePoint: a
    });
  }
  gr(o, "pointerdown", s && c), ii(() => i.current && i.current.end());
}
const Sh = {
  pan: Ve(Th),
  drag: Ve(Eh)
};
function Do(t) {
  return typeof t == "string" && t.startsWith("var(--");
}
const Cl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ch(t) {
  const e = Cl.exec(t);
  if (!e)
    return [,];
  const [, n, r] = e;
  return [n, r];
}
const Ah = 4;
function Vo(t, e, n = 1) {
  Ht(n <= Ah, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, o] = Ch(t);
  if (!r)
    return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  return s ? s.trim() : Do(o) ? Vo(o, e, n + 1) : o;
}
function Ph(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((o) => {
    const s = o.get();
    if (!Do(s))
      return;
    const i = Vo(s, r);
    i && o.set(i);
  });
  for (const o in e) {
    const s = e[o];
    if (!Do(s))
      continue;
    const i = Vo(s, r);
    i && (e[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: e, transitionEnd: n };
}
const Rh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Al = (t) => Rh.has(t), kh = (t) => Object.keys(t).some(Al), Pl = (t, e) => {
  t.set(e, !1), t.set(e);
}, or = (t) => t === tn || t === F;
var ys;
(function(t) {
  t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom";
})(ys || (ys = {}));
const vs = (t, e) => parseFloat(t.split(", ")[e]), bs = (t, e) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return vs(o[1], e);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? vs(s[1], t) : 0;
  }
}, Oh = /* @__PURE__ */ new Set(["x", "y", "z"]), _h = hr.filter((t) => !Oh.has(t));
function Lh(t) {
  const e = [];
  return _h.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const ws = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: bs(4, 13),
  y: bs(5, 14)
}, Dh = (t, e, n) => {
  const r = e.measureViewportBox(), o = e.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((c) => {
    a[c] = ws[c](r, s);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((c) => {
    const u = e.getValue(c);
    Pl(u, a[c]), t[c] = ws[c](l, s);
  }), t;
}, Vh = (t, e, n = {}, r = {}) => {
  e = { ...e }, r = { ...r };
  const o = Object.keys(e).filter(Al);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((l) => {
    const c = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let u = n[l], d = An(u);
    const f = e[l];
    let h;
    if (mr(f)) {
      const m = f.length, g = f[0] === null ? 1 : 0;
      u = f[g], d = An(u);
      for (let b = g; b < m; b++)
        h ? Ht(An(f[b]) === h, "All keyframes must be of the same type") : (h = An(f[b]), Ht(h === d || or(d) && or(h), "Keyframes must be of the same dimension as the current value"));
    } else
      h = An(f);
    if (d !== h)
      if (or(d) && or(h)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? e[l] = parseFloat(f) : Array.isArray(f) && h === F && (e[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(h.transform(u)) : e[l] = d.transform(f) : (i || (s = Lh(t), i = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : e[l], Pl(c, f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, c = Dh(e, t, a);
    return s.length && s.forEach(([u, d]) => {
      t.getValue(u).set(d);
    }), t.render(), Ze && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: r };
  } else
    return { target: e, transitionEnd: r };
};
function Fh(t, e, n, r) {
  return kh(e) ? Vh(t, e, n, r) : { target: e, transitionEnd: r };
}
const Mh = (t, e, n, r) => {
  const o = Ph(t, e, r);
  return e = o.target, r = o.transitionEnd, Fh(t, e, n, r);
}, Fo = { current: null }, Rl = { current: !1 };
function Bh() {
  if (Rl.current = !0, !!Ze)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Fo.current = t.matches;
      t.addListener(e), e();
    } else
      Fo.current = !1;
}
function Ih(t, e, n) {
  const { willChange: r } = e;
  for (const o in e) {
    const s = e[o], i = n[o];
    if (ae(s))
      t.addValue(o, s), vr(r) && r.add(o), process.env.NODE_ENV === "development" && ai(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (ae(i))
      t.addValue(o, mn(s, { owner: t })), vr(r) && r.remove(o);
    else if (i !== s)
      if (t.hasValue(o)) {
        const a = t.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(o);
        t.addValue(o, mn(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    e[o] === void 0 && t.removeValue(o);
  return e;
}
const kl = Object.keys($n), $h = kl.length, xs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class jh {
  constructor({ parent: e, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ot.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = e, this.props = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = Lr(n), this.isVariantNode = Sa(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: l, ...c } = this.scrapeMotionValuesFromProps(n);
    for (const u in c) {
      const d = c[u];
      i[u] !== void 0 && ae(d) && (d.set(i[u], !1), vr(l) && l.add(u));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e) {
    return {};
  }
  mount(e) {
    var n;
    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Rl.current || Bh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fo.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var e, n, r;
    (e = this.projection) === null || e === void 0 || e.unmount(), Be.update(this.notifyUpdate), Be.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Qe.has(e), o = n.on("change", (i) => {
      this.latestValues[e] = i, this.props.onUpdate && Ot.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      o(), s();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures(e, n, r, o, s, i) {
    const a = [];
    si !== "production" && r && n && Ht(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let l = 0; l < $h; l++) {
      const c = kl[l], { isEnabled: u, Component: d } = $n[c];
      u(e) && d && a.push(va(d, {
        key: c,
        ...e,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f } = e;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && cn(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: f
      });
    }
    return a;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : vt();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  setProps(e) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
    for (let n = 0; n < xs.length; n++) {
      const r = xs[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = e["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = Ih(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    var n;
    return (n = this.props.variants) === null || n === void 0 ? void 0 : n[e];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var e;
    return this.isVariantNode ? this : (e = this.parent) === null || e === void 0 ? void 0 : e.getClosestVariantNode();
  }
  getVariantContext(e = !1) {
    var n, r;
    if (e)
      return (n = this.parent) === null || n === void 0 ? void 0 : n.getVariantContext();
    if (!this.isControllingVariants) {
      const s = ((r = this.parent) === null || r === void 0 ? void 0 : r.getVariantContext()) || {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const o = {};
    for (let s = 0; s < Nh; s++) {
      const i = Ol[s], a = this.props[i];
      (In(a) || a === !1) && (o[i] = a);
    }
    return o;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    var n;
    const r = this.getClosestVariantNode();
    if (r)
      return (n = r.variantChildren) === null || n === void 0 || n.add(e), () => r.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    this.hasValue(e) && this.removeValue(e), this.values.set(e, n), this.latestValues[e] = n.get(), this.bindToMotionValue(e, n);
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    var n;
    this.values.delete(e), (n = this.valueSubscriptions.get(e)) === null || n === void 0 || n(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  /**
   * Get a motion value for this key. If called with a default
   * value, we'll create one if none exists.
   */
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let r = this.values.get(e);
    return r === void 0 && n !== void 0 && (r = mn(n, { owner: this }), this.addValue(e, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e) {
    return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.readValueFromInstance(this.current, e, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = ri(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !ae(s) ? s : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ui()), this.events[e].add(n);
  }
  notify(e, ...n) {
    var r;
    (r = this.events[e]) === null || r === void 0 || r.notify(...n);
  }
}
const Ol = ["initial", ...Ti], Nh = Ol.length;
class _l extends jh {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    var r;
    return (r = e.style) === null || r === void 0 ? void 0 : r[n];
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: n, ...r }, { transformValues: o }, s) {
    let i = Gd(r, e || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      Kd(this, r, i);
      const a = Mh(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...r
    };
  }
}
function Uh(t) {
  return window.getComputedStyle(t);
}
class zh extends _l {
  readValueFromInstance(e, n) {
    if (Qe.has(n)) {
      const r = hi(n);
      return r && r.default || 0;
    } else {
      const r = Uh(e), o = (Pa(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Sl(e, n);
  }
  build(e, n, r, o) {
    Jo(e, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(e) {
    return ni(e);
  }
  renderInstance(e, n, r, o) {
    La(e, n, r, o);
  }
}
class Wh extends _l {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    var r;
    return Qe.has(n) ? ((r = hi(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = Da.has(n) ? n : ei(n), e.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return vt();
  }
  scrapeMotionValuesFromProps(e) {
    return Fa(e);
  }
  build(e, n, r, o) {
    Qo(e, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(e, n, r, o) {
    Va(e, n, r, o);
  }
  mount(e) {
    this.isSVGTag = ti(e.tagName), super.mount(e);
  }
}
const Hh = (t, e) => Xo(t) ? new Wh(e, { enableHardwareAcceleration: !1 }) : new zh(e, { enableHardwareAcceleration: !0 });
function Es(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Pn = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (F.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Es(t, e.target.x), r = Es(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, Ts = "_$css", qh = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, o = t.includes("var("), s = [];
    o && (t = t.replace(Cl, (h) => (s.push(h), Ts)));
    const i = Ie.parse(t);
    if (i.length > 5)
      return r;
    const a = Ie.createTransformer(t), l = typeof i[0] != "number" ? 1 : 0, c = n.x.scale * e.x, u = n.y.scale * e.y;
    i[0 + l] /= c, i[1 + l] /= u;
    const d = ft(c, u, 0.5);
    typeof i[2 + l] == "number" && (i[2 + l] /= d), typeof i[3 + l] == "number" && (i[3 + l] /= d);
    let f = a(i);
    if (o) {
      let h = 0;
      f = f.replace(Ts, () => {
        const m = s[h];
        return h++, m;
      });
    }
    return f;
  }
};
class Kh extends Bt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = e;
    Tu(Gh), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), _n.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || e.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? i.promote() : i.relegate() || Ot.postRender(() => {
      var a;
      !((a = i.getStack()) === null || a === void 0) && a.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = e;
    o && (o.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(o), r != null && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e == null || e();
  }
  render() {
    return null;
  }
}
function Yh(t) {
  const [e, n] = Ha(), r = bt(Go);
  return Bt.createElement(Kh, { ...t, layoutGroup: r, switchLayoutGroup: bt(Ca), isPresent: e, safeToRemove: n });
}
const Gh = {
  borderRadius: {
    ...Pn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Pn,
  borderTopRightRadius: Pn,
  borderBottomLeftRadius: Pn,
  borderBottomRightRadius: Pn,
  boxShadow: qh
}, Xh = {
  measureLayout: Yh
};
function Jh(t, e, n = {}) {
  const r = ae(t) ? t : mn(t);
  return r.start(Ei("", r, e, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const Ll = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Zh = Ll.length, Ss = (t) => typeof t == "string" ? parseFloat(t) : t, Cs = (t) => typeof t == "number" || F.test(t);
function Qh(t, e, n, r, o, s) {
  o ? (t.opacity = ft(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    tp(r)
  ), t.opacityExit = ft(e.opacity !== void 0 ? e.opacity : 1, 0, ep(r))) : s && (t.opacity = ft(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < Zh; i++) {
    const a = `border${Ll[i]}Radius`;
    let l = As(e, a), c = As(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Cs(l) === Cs(c) ? (t[a] = Math.max(ft(Ss(l), Ss(c), r), 0), (ie.test(c) || ie.test(l)) && (t[a] += "%")) : t[a] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = ft(e.rotate || 0, n.rotate || 0, r));
}
function As(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const tp = Dl(0, 0.5, wi), ep = Dl(0.5, 0.95, bi);
function Dl(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(br(t, e, r));
}
function Ps(t, e) {
  t.min = e.min, t.max = e.max;
}
function Ut(t, e) {
  Ps(t.x, e.x), Ps(t.y, e.y);
}
function Rs(t, e, n, r, o) {
  return t -= e, t = Er(t, 1 / n, r), o !== void 0 && (t = Er(t, 1 / o, r)), t;
}
function np(t, e = 0, n = 1, r = 0.5, o, s = t, i = t) {
  if (ie.test(e) && (e = parseFloat(e), e = ft(i.min, i.max, e / 100) - i.min), typeof e != "number")
    return;
  let a = ft(s.min, s.max, r);
  t === s && (a -= e), t.min = Rs(t.min, e, n, a, o), t.max = Rs(t.max, e, n, a, o);
}
function ks(t, e, [n, r, o], s, i) {
  np(t, e[n], e[r], e[o], e.scale, s, i);
}
const rp = ["x", "scaleX", "originX"], op = ["y", "scaleY", "originY"];
function Os(t, e, n, r) {
  ks(t.x, e, rp, n == null ? void 0 : n.x, r == null ? void 0 : r.x), ks(t.y, e, op, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function _s(t) {
  return t.translate === 0 && t.scale === 1;
}
function Vl(t) {
  return _s(t.x) && _s(t.y);
}
function Fl(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Ls(t) {
  return Dt(t.x) / Dt(t.y);
}
class ip {
  constructor() {
    this.members = [];
  }
  add(e) {
    li(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (ci(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((o) => e === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    var r;
    const o = this.lead;
    if (e !== o && (this.prevLead = o, this.lead = e, e.show(), o)) {
      o.instance && o.scheduleRender(), e.scheduleRender(), e.resumeFrom = o, n && (e.resumeFrom.preserveOpacity = !0), o.snapshot && (e.snapshot = o.snapshot, e.snapshot.latestValues = o.animationValues || o.latestValues), !((r = e.root) === null || r === void 0) && r.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      var n, r, o, s, i;
      (r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n), (i = (o = e.resumingFrom) === null || o === void 0 ? void 0 : (s = o.options).onExitComplete) === null || i === void 0 || i.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ds(t, e, n) {
  let r = "";
  const o = t.x.translate / e.x, s = t.y.translate / e.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    l && (r += `rotate(${l}deg) `), c && (r += `rotateX(${c}deg) `), u && (r += `rotateY(${u}deg) `);
  }
  const i = t.x.scale * e.x, a = t.y.scale * e.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const sp = (t, e) => t.depth - e.depth;
class ap {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    li(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    ci(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(sp), this.isDirty = !1, this.children.forEach(e);
  }
}
const Vs = ["", "X", "Y", "Z"], Fs = 1e3;
let lp = 0;
function Ml({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, l = e == null ? void 0 : e()) {
      this.id = lp++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(dp), this.nodes.forEach(pp), this.nodes.forEach(mp);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ap());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new ui()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l == null || l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    registerPotentialNode(i, a) {
      this.potentialNodes.set(i, a);
    }
    /**
     * Lifecycles
     */
    mount(i, a = !1) {
      var l;
      if (this.instance)
        return;
      this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), (l = this.parent) === null || l === void 0 || l.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (u || c) && (this.isLayoutDirty = !0), t) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        t(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = ml(h, 250), _n.hasAnimatedSinceResize && (_n.hasAnimatedSinceResize = !1, this.nodes.forEach(Bs));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: g }) => {
        var b, y, w, v, T;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const P = (y = (b = this.options.transition) !== null && b !== void 0 ? b : d.getDefaultTransition()) !== null && y !== void 0 ? y : wp, { onLayoutAnimationStart: O, onLayoutAnimationComplete: M } = d.getProps(), N = !this.targetLayout || !Fl(this.targetLayout, g) || m, G = !h && m;
        if (!((w = this.resumeFrom) === null || w === void 0) && w.instance || G || h && (N || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, G);
          const z = {
            ...gl(P, "layout"),
            onPlay: O,
            onComplete: M
          };
          d.shouldReduceMotion && (z.delay = 0, z.type = !1), this.startAnimation(z);
        } else
          !h && this.animationProgress === 0 && Bs(this), this.isLead() && ((T = (v = this.options).onExitComplete) === null || T === void 0 || T.call(v));
        this.targetLayout = g;
      });
    }
    unmount() {
      var i, a;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (a = this.parent) === null || a === void 0 || a.children.delete(this), this.instance = void 0, Be.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var i;
      return this.isAnimationBlocked || ((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimationBlocked()) || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      var i;
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(gp), this.animationId++);
    }
    willUpdate(i = !0) {
      var a, l, c;
      if (this.root.isUpdateBlocked()) {
        (l = (a = this.options).onExitComplete) === null || l === void 0 || l.call(a);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        m.shouldResetTransform = !0, m.updateScroll("snapshot");
      }
      const { layoutId: u, layout: d } = this.options;
      if (u === void 0 && !d)
        return;
      const f = (c = this.options.visualElement) === null || c === void 0 ? void 0 : c.getProps().transformTemplate;
      this.prevTransformTemplateValue = f == null ? void 0 : f(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ms);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(xp), this.potentialNodes.clear()), this.nodes.forEach(hp), this.nodes.forEach(cp), this.nodes.forEach(up), this.clearAllSnapshots(), Zr.update(), Zr.preRender(), Zr.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(fp), this.sharedNodes.forEach(yp);
    }
    scheduleUpdateProjection() {
      Ot.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      var i;
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = vt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      var i;
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Vl(this.projectionDelta), c = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, u = c == null ? void 0 : c(this.latestValues, ""), d = u !== this.prevTransformTemplateValue;
      a && (l || Ke(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), Ep(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return vt();
      const a = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (De(a.x, l.offset.x), De(a.y, l.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = vt();
      Ut(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Ut(a, i);
            const { scroll: f } = this.root;
            f && (De(a.x, -f.offset.x), De(a.y, -f.offset.y));
          }
          De(a.x, u.offset.x), De(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const l = vt();
      Ut(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && dn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Ke(u.latestValues) && dn(l, u.latestValues);
      }
      return Ke(this.latestValues) && dn(l, this.latestValues), l;
    }
    removeTransform(i) {
      var a;
      const l = vt();
      Ut(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Ke(u.latestValues))
          continue;
        _o(u.latestValues) && u.updateSnapshot();
        const d = vt(), f = u.measurePageBox();
        Ut(d, f), Os(l, u.latestValues, (a = u.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, d);
      }
      return Ke(this.latestValues) && Os(l, this.latestValues), l;
    }
    /**
     *
     */
    setTargetDelta(i) {
      this.targetDelta = i, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection();
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    /**
     * Frame calculations
     */
    resolveTargetDelta() {
      var i;
      const a = this.getLead();
      if (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
        return;
      const { layout: l, layoutId: c } = this.options;
      if (!(!this.layout || !(l || c))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const u = this.getClosestProjectingParent();
          u && u.layout ? (this.relativeParent = u, this.relativeTarget = vt(), this.relativeTargetOrigin = vt(), Fn(this.relativeTargetOrigin, this.layout.layoutBox, u.layout.layoutBox), Ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = vt(), this.targetWithTransforms = vt()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? sh(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ut(this.target, this.layout.layoutBox), Tl(this.target, this.targetDelta)) : Ut(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const u = this.getClosestProjectingParent();
          u && !!u.resumingFrom == !!this.resumingFrom && !u.options.layoutScroll && u.target ? (this.relativeParent = u, this.relativeTarget = vt(), this.relativeTargetOrigin = vt(), Fn(this.relativeTargetOrigin, this.target, u.target), Ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _o(this.parent.latestValues) || El(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: l } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const c = this.getLead(), u = !!this.resumingFrom || this !== c;
      let d = !0;
      if (a && (d = !1), u && l && (d = !1), d)
        return;
      const { layout: f, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || h))
        return;
      Ut(this.layoutCorrected, this.layout.layoutBox), mh(this.layoutCorrected, this.treeScale, this.path, u);
      const { target: m } = c;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = Mn(), this.projectionDeltaWithTransform = Mn());
      const g = this.treeScale.x, b = this.treeScale.y, y = this.projectionTransform;
      Vn(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Ds(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== g || this.treeScale.y !== b) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a, l, c;
      (l = (a = this.options).scheduleRender) === null || l === void 0 || l.call(a), i && ((c = this.getStack()) === null || c === void 0 || c.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      var l, c;
      const u = this.snapshot, d = (u == null ? void 0 : u.latestValues) || {}, f = { ...this.latestValues }, h = Mn();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = vt(), g = (u == null ? void 0 : u.source) !== ((l = this.layout) === null || l === void 0 ? void 0 : l.source), b = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1, y = !!(g && !b && this.options.crossfade === !0 && !this.path.some(bp));
      this.animationProgress = 0, this.mixTargetDelta = (w) => {
        var v;
        const T = w / 1e3;
        Is(h.x, i.x, T), Is(h.y, i.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((v = this.relativeParent) === null || v === void 0) && v.layout) && (Fn(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), vp(this.relativeTarget, this.relativeTargetOrigin, m, T)), g && (this.animationValues = f, Qh(f, d, this.latestValues, T, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, l;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()), this.pendingAnimation && (Be.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ot.update(() => {
        _n.hasAnimatedSinceResize = !0, this.currentAnimation = Jh(0, Fs, {
          ...i,
          onUpdate: (c) => {
            var u;
            this.mixTargetDelta(c), (u = i.onUpdate) === null || u === void 0 || u.call(i, c);
          },
          onComplete: () => {
            var c;
            (c = i.onComplete) === null || c === void 0 || c.call(i), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var i;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (i = this.getStack()) === null || i === void 0 || i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var i;
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Fs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Bl(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || vt();
          const d = Dt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Dt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        Ut(a, l), dn(a, u), Vn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      var l, c, u;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new ip()), this.sharedNodes.get(i).add(a), a.promote({
        transition: (l = a.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
        preserveFollowOpacity: (u = (c = a.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.shouldPreserveFollowOpacity) === null || u === void 0 ? void 0 : u.call(c, a)
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const c = {};
      for (let u = 0; u < Vs.length; u++) {
        const d = "rotate" + Vs[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i == null || i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, l, c;
      const u = {};
      if (!this.instance || this.isSVG)
        return u;
      if (this.isVisible)
        u.visibility = "";
      else
        return { visibility: "hidden" };
      const d = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = ar(i.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const b = {};
        return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = ar(i.pointerEvents) || ""), this.hasProjected && !Ke(this.latestValues) && (b.transform = d ? d({}, "") : "none", this.hasProjected = !1), b;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = Ds(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const { x: m, y: g } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const b in fr) {
        if (h[b] === void 0)
          continue;
        const { correct: y, applyTo: w } = fr[b], v = y(h[b], f);
        if (w) {
          const T = w.length;
          for (let P = 0; P < T; P++)
            u[w[P]] = v;
        } else
          u[b] = v;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? ar(i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Ms), this.root.sharedNodes.clear();
    }
  };
}
function cp(t) {
  t.updateLayout();
}
function up(t) {
  var e, n, r;
  const o = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: a } = t.options, l = o.source !== t.layout.source;
    a === "size" ? re((h) => {
      const m = l ? o.measuredBox[h] : o.layoutBox[h], g = Dt(m);
      m.min = s[h].min, m.max = m.min + g;
    }) : Bl(a, o.layoutBox, s) && re((h) => {
      const m = l ? o.measuredBox[h] : o.layoutBox[h], g = Dt(s[h]);
      m.max = m.min + g;
    });
    const c = Mn();
    Vn(c, s, o.layoutBox);
    const u = Mn();
    l ? Vn(u, t.applyTransform(i, !0), o.measuredBox) : Vn(u, s, o.layoutBox);
    const d = !Vl(c);
    let f = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: m, layout: g } = h;
        if (m && g) {
          const b = vt();
          Fn(b, o.layoutBox, m.layoutBox);
          const y = vt();
          Fn(y, s, g.layoutBox), Fl(b, y) || (f = !0);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: u,
      layoutDelta: c,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: f
    });
  } else
    t.isLead() && ((r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n));
  t.options.transition = void 0;
}
function dp(t) {
  t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty));
}
function fp(t) {
  t.clearSnapshot();
}
function Ms(t) {
  t.clearMeasurements();
}
function hp(t) {
  const { visualElement: e } = t.options;
  e != null && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Bs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0;
}
function pp(t) {
  t.resolveTargetDelta();
}
function mp(t) {
  t.calcProjection();
}
function gp(t) {
  t.resetRotation();
}
function yp(t) {
  t.removeLeadSnapshot();
}
function Is(t, e, n) {
  t.translate = ft(e.translate, 0, n), t.scale = ft(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function $s(t, e, n, r) {
  t.min = ft(e.min, n.min, r), t.max = ft(e.max, n.max, r);
}
function vp(t, e, n, r) {
  $s(t.x, e.x, n.x, r), $s(t.y, e.y, n.y, r);
}
function bp(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const wp = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function xp(t, e) {
  let n = t.root;
  for (let s = t.path.length - 1; s >= 0; s--)
    if (t.path[s].instance) {
      n = t.path[s];
      break;
    }
  const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
  o && t.mount(o, !0);
}
function js(t) {
  t.min = Math.round(t.min), t.max = Math.round(t.max);
}
function Ep(t) {
  js(t.x), js(t.y);
}
function Bl(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !ko(Ls(e), Ls(n), 0.2);
}
const Tp = Ml({
  attachResizeListener: (t, e) => Vr(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), lo = {
  current: void 0
}, Sp = Ml({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!lo.current) {
      const t = new Tp(0, {});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), lo.current = t;
    }
    return lo.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Cp = {
  ...nh,
  ...xd,
  ...Sh,
  ...Xh
}, Un = /* @__PURE__ */ xu((t, e) => Qu(t, e, Cp, Hh, Sp));
function Il() {
  const t = rt(!1);
  return On(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function Ap() {
  const t = Il(), [e, n] = Y(0), r = Me(() => {
    t.current && n(e + 1);
  }, [e]);
  return [Me(() => Ot.postRender(r), [r]), e];
}
class Pp extends tt.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Rp({ children: t, isPresent: e }) {
  const n = Rr(), r = rt(null), o = rt({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Cc(() => {
    const { width: s, height: i, top: a, left: l } = o.current;
    if (e || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [e]), tt.createElement(Pp, { isPresent: e, childRef: r, sizeRef: o }, tt.cloneElement(t, { ref: r }));
}
const co = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Dr(kp), l = Rr(), c = zt(
    () => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: o,
      onExitComplete: (u) => {
        a.set(u, !0);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (u) => (a.set(u, !1), () => a.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return zt(() => {
    a.forEach((u, d) => a.set(d, !1));
  }, [n]), tt.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (t = tt.createElement(Rp, { isPresent: n }, t)), tt.createElement(Hn.Provider, { value: c }, t);
};
function kp() {
  return /* @__PURE__ */ new Map();
}
const ln = (t) => t.key || "";
function Op(t, e) {
  t.forEach((n) => {
    const r = ln(n);
    e.set(r, n);
  });
}
function _p(t) {
  const e = [];
  return Pc.forEach(t, (n) => {
    Rc(n) && e.push(n);
  }), e;
}
const $r = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", ai(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = Ap();
  const l = bt(Go).forceRender;
  l && (a = l);
  const c = Il(), u = _p(t);
  let d = u;
  const f = /* @__PURE__ */ new Set(), h = rt(d), m = rt(/* @__PURE__ */ new Map()).current, g = rt(!0);
  if (On(() => {
    g.current = !1, Op(u, m), h.current = d;
  }), ii(() => {
    g.current = !0, m.clear(), f.clear();
  }), g.current)
    return tt.createElement(tt.Fragment, null, d.map((v) => tt.createElement(co, { key: ln(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, v)));
  d = [...d];
  const b = h.current.map(ln), y = u.map(ln), w = b.length;
  for (let v = 0; v < w; v++) {
    const T = b[v];
    y.indexOf(T) === -1 && f.add(T);
  }
  return i === "wait" && f.size && (d = []), f.forEach((v) => {
    if (y.indexOf(v) !== -1)
      return;
    const T = m.get(v);
    if (!T)
      return;
    const P = b.indexOf(v), O = () => {
      m.delete(v), f.delete(v);
      const M = h.current.findIndex((N) => N.key === v);
      if (h.current.splice(M, 1), !f.size) {
        if (h.current = u, c.current === !1)
          return;
        a(), r && r();
      }
    };
    d.splice(P, 0, tt.createElement(co, { key: ln(T), isPresent: !1, onExitComplete: O, custom: e, presenceAffectsLayout: s, mode: i }, T));
  }), d = d.map((v) => {
    const T = v.key;
    return f.has(T) ? v : tt.createElement(co, { key: ln(v), isPresent: !0, presenceAffectsLayout: s, mode: i }, v);
  }), si !== "production" && i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), tt.createElement(tt.Fragment, null, f.size ? d : d.map((v) => Ac(v)));
};
function Lp({ dragControls: t }) {
  function e(n) {
    n.stopPropagation(), t.start(n);
  }
  return /* @__PURE__ */ S(
    Dp,
    {
      onPointerDown: e,
      title: "Click & drag",
      children: /* @__PURE__ */ Q(
        Vp,
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 8.75H19.25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 15.25H19.25",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      )
    }
  );
}
const Dp = R.div`
  display: flex;
  color: rgb(${(t) => t.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, Vp = R.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let ir;
const Fp = new Uint8Array(16);
function Mp() {
  if (!ir && (ir = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ir))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ir(Fp);
}
const St = [];
for (let t = 0; t < 256; ++t)
  St.push((t + 256).toString(16).slice(1));
function Bp(t, e = 0) {
  return St[t[e + 0]] + St[t[e + 1]] + St[t[e + 2]] + St[t[e + 3]] + "-" + St[t[e + 4]] + St[t[e + 5]] + "-" + St[t[e + 6]] + St[t[e + 7]] + "-" + St[t[e + 8]] + St[t[e + 9]] + "-" + St[t[e + 10]] + St[t[e + 11]] + St[t[e + 12]] + St[t[e + 13]] + St[t[e + 14]] + St[t[e + 15]];
}
const Ip = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ns = {
  randomUUID: Ip
};
function $p(t, e, n) {
  if (Ns.randomUUID && !e && !t)
    return Ns.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || Mp)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      e[n + o] = r[o];
    return e;
  }
  return Bp(r);
}
function $l(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: jp } = Object.prototype, { getPrototypeOf: Si } = Object, jr = ((t) => (e) => {
  const n = jp.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ce = (t) => (t = t.toLowerCase(), (e) => jr(e) === t), Nr = (t) => (e) => typeof e === t, { isArray: xn } = Array, zn = Nr("undefined");
function Np(t) {
  return t !== null && !zn(t) && t.constructor !== null && !zn(t.constructor) && It(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const jl = ce("ArrayBuffer");
function Up(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && jl(t.buffer), e;
}
const zp = Nr("string"), It = Nr("function"), Nl = Nr("number"), Ur = (t) => t !== null && typeof t == "object", Wp = (t) => t === !0 || t === !1, cr = (t) => {
  if (jr(t) !== "object")
    return !1;
  const e = Si(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Hp = ce("Date"), qp = ce("File"), Kp = ce("Blob"), Yp = ce("FileList"), Gp = (t) => Ur(t) && It(t.pipe), Xp = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || It(t.append) && ((e = jr(t)) === "formdata" || // detect form-data instance
  e === "object" && It(t.toString) && t.toString() === "[object FormData]"));
}, Jp = ce("URLSearchParams"), Zp = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gn(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), xn(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], e.call(null, t[a], a, t);
  }
}
function Ul(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const zl = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Wl = (t) => !zn(t) && t !== zl;
function Mo() {
  const { caseless: t } = Wl(this) && this || {}, e = {}, n = (r, o) => {
    const s = t && Ul(e, o) || o;
    cr(e[s]) && cr(r) ? e[s] = Mo(e[s], r) : cr(r) ? e[s] = Mo({}, r) : xn(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Gn(arguments[r], n);
  return e;
}
const Qp = (t, e, n, { allOwnKeys: r } = {}) => (Gn(e, (o, s) => {
  n && It(o) ? t[s] = $l(o, n) : t[s] = o;
}, { allOwnKeys: r }), t), tm = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), em = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, nm = (t, e, n, r) => {
  let o, s, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && Si(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, rm = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, om = (t) => {
  if (!t)
    return null;
  if (xn(t))
    return t;
  let e = t.length;
  if (!Nl(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, im = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Si(Uint8Array)), sm = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    e.call(t, s[0], s[1]);
  }
}, am = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, lm = ce("HTMLFormElement"), cm = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Us = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), um = ce("RegExp"), Hl = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Gn(n, (o, s) => {
    let i;
    (i = e(o, s, t)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(t, r);
}, dm = (t) => {
  Hl(t, (e, n) => {
    if (It(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (It(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, fm = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return xn(t) ? r(t) : r(String(t).split(e)), n;
}, hm = () => {
}, pm = (t, e) => (t = +t, Number.isFinite(t) ? t : e), uo = "abcdefghijklmnopqrstuvwxyz", zs = "0123456789", ql = {
  DIGIT: zs,
  ALPHA: uo,
  ALPHA_DIGIT: uo + uo.toUpperCase() + zs
}, mm = (t = 16, e = ql.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function gm(t) {
  return !!(t && It(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const ym = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (Ur(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const s = xn(r) ? [] : {};
        return Gn(r, (i, a) => {
          const l = n(i, o + 1);
          !zn(l) && (s[a] = l);
        }), e[o] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, vm = ce("AsyncFunction"), bm = (t) => t && (Ur(t) || It(t)) && It(t.then) && It(t.catch), x = {
  isArray: xn,
  isArrayBuffer: jl,
  isBuffer: Np,
  isFormData: Xp,
  isArrayBufferView: Up,
  isString: zp,
  isNumber: Nl,
  isBoolean: Wp,
  isObject: Ur,
  isPlainObject: cr,
  isUndefined: zn,
  isDate: Hp,
  isFile: qp,
  isBlob: Kp,
  isRegExp: um,
  isFunction: It,
  isStream: Gp,
  isURLSearchParams: Jp,
  isTypedArray: im,
  isFileList: Yp,
  forEach: Gn,
  merge: Mo,
  extend: Qp,
  trim: Zp,
  stripBOM: tm,
  inherits: em,
  toFlatObject: nm,
  kindOf: jr,
  kindOfTest: ce,
  endsWith: rm,
  toArray: om,
  forEachEntry: sm,
  matchAll: am,
  isHTMLForm: lm,
  hasOwnProperty: Us,
  hasOwnProp: Us,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hl,
  freezeMethods: dm,
  toObjectSet: fm,
  toCamelCase: cm,
  noop: hm,
  toFiniteNumber: pm,
  findKey: Ul,
  global: zl,
  isContextDefined: Wl,
  ALPHABET: ql,
  generateString: mm,
  isSpecCompliantForm: gm,
  toJSONObject: ym,
  isAsyncFn: vm,
  isThenable: bm
};
function K(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
x.inherits(K, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Kl = K.prototype, Yl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Yl[t] = { value: t };
});
Object.defineProperties(K, Yl);
Object.defineProperty(Kl, "isAxiosError", { value: !0 });
K.from = (t, e, n, r, o, s) => {
  const i = Object.create(Kl);
  return x.toFlatObject(t, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(i, t.message, e, n, r, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
const wm = null;
function Bo(t) {
  return x.isPlainObject(t) || x.isArray(t);
}
function Gl(t) {
  return x.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ws(t, e, n) {
  return t ? t.concat(e).map(function(o, s) {
    return o = Gl(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function xm(t) {
  return x.isArray(t) && !t.some(Bo);
}
const Em = x.toFlatObject(x, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function zr(t, e, n) {
  if (!x.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !x.isUndefined(b[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(e);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (x.isDate(m))
      return m.toISOString();
    if (!l && x.isBlob(m))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(m) || x.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, g, b) {
    let y = m;
    if (m && !b && typeof m == "object") {
      if (x.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (x.isArray(m) && xm(m) || (x.isFileList(m) || x.endsWith(g, "[]")) && (y = x.toArray(m)))
        return g = Gl(g), y.forEach(function(v, T) {
          !(x.isUndefined(v) || v === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ws([g], T, s) : i === null ? g : g + "[]",
            c(v)
          );
        }), !1;
    }
    return Bo(m) ? !0 : (e.append(Ws(b, g, s), c(m)), !1);
  }
  const d = [], f = Object.assign(Em, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Bo
  });
  function h(m, g) {
    if (!x.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), x.forEach(m, function(y, w) {
        (!(x.isUndefined(y) || y === null) && o.call(
          e,
          y,
          x.isString(w) ? w.trim() : w,
          g,
          f
        )) === !0 && h(y, g ? g.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!x.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function Hs(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Ci(t, e) {
  this._pairs = [], t && zr(t, this, e);
}
const Xl = Ci.prototype;
Xl.append = function(e, n) {
  this._pairs.push([e, n]);
};
Xl.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Hs);
  } : Hs;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Tm(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jl(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Tm, o = n && n.serialize;
  let s;
  if (o ? s = o(e, n) : s = x.isURLSearchParams(e) ? e.toString() : new Ci(e, n).toString(r), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Sm {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    x.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const qs = Sm, Zl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cm = typeof URLSearchParams < "u" ? URLSearchParams : Ci, Am = typeof FormData < "u" ? FormData : null, Pm = typeof Blob < "u" ? Blob : null, Rm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cm,
    FormData: Am,
    Blob: Pm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ql = typeof window < "u" && typeof document < "u", km = ((t) => Ql && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Om = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ql,
  hasStandardBrowserEnv: km,
  hasStandardBrowserWebWorkerEnv: Om
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ..._m,
  ...Rm
};
function Lm(t, e) {
  return zr(t, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return oe.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Dm(t) {
  return x.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Vm(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function tc(t) {
  function e(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && x.isArray(o) ? o.length : i, l ? (x.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !x.isObject(o[i])) && (o[i] = []), e(n, r, o[i], s) && x.isArray(o[i]) && (o[i] = Vm(o[i])), !a);
  }
  if (x.isFormData(t) && x.isFunction(t.entries)) {
    const n = {};
    return x.forEachEntry(t, (r, o) => {
      e(Dm(r), o, n, 0);
    }), n;
  }
  return null;
}
function Fm(t, e, n) {
  if (x.isString(t))
    try {
      return (e || JSON.parse)(t), x.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ai = {
  transitional: Zl,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = x.isObject(e);
    if (s && x.isHTMLForm(e) && (e = new FormData(e)), x.isFormData(e))
      return o ? JSON.stringify(tc(e)) : e;
    if (x.isArrayBuffer(e) || x.isBuffer(e) || x.isStream(e) || x.isFile(e) || x.isBlob(e))
      return e;
    if (x.isArrayBufferView(e))
      return e.buffer;
    if (x.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Lm(e, this.formSerializer).toString();
      if ((a = x.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return zr(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Fm(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ai.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && x.isString(e) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: oe.classes.FormData,
    Blob: oe.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ai.headers[t] = {};
});
const Pi = Ai, Mm = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Bm = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || e[n] && Mm[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Ks = Symbol("internals");
function Rn(t) {
  return t && String(t).trim().toLowerCase();
}
function ur(t) {
  return t === !1 || t == null ? t : x.isArray(t) ? t.map(ur) : String(t);
}
function Im(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const $m = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function fo(t, e, n, r, o) {
  if (x.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!x.isString(e)) {
    if (x.isString(r))
      return e.indexOf(r) !== -1;
    if (x.isRegExp(r))
      return r.test(e);
  }
}
function jm(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Nm(t, e) {
  const n = x.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, e, o, s, i);
      },
      configurable: !0
    });
  });
}
class Wr {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function s(a, l, c) {
      const u = Rn(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = x.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || l] = ur(a));
    }
    const i = (a, l) => x.forEach(a, (c, u) => s(c, u, l));
    return x.isPlainObject(e) || e instanceof this.constructor ? i(e, n) : x.isString(e) && (e = e.trim()) && !$m(e) ? i(Bm(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = Rn(e), e) {
      const r = x.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Im(o);
        if (x.isFunction(n))
          return n.call(this, o, r);
        if (x.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Rn(e), e) {
      const r = x.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || fo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Rn(i), i) {
        const a = x.findKey(r, i);
        a && (!n || fo(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return x.isArray(e) ? e.forEach(s) : s(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || fo(this, this[s], s, e, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return x.forEach(this, (o, s) => {
      const i = x.findKey(r, s);
      if (i) {
        n[i] = ur(o), delete n[s];
        return;
      }
      const a = e ? jm(s) : String(s).trim();
      a !== s && delete n[s], n[a] = ur(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && x.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Ks] = this[Ks] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Rn(i);
      r[a] || (Nm(o, i), r[a] = !0);
    }
    return x.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Wr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Wr.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(Wr);
const be = Wr;
function ho(t, e) {
  const n = this || Pi, r = e || n, o = be.from(r.headers);
  let s = r.data;
  return x.forEach(t, function(a) {
    s = a.call(n, s, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), s;
}
function ec(t) {
  return !!(t && t.__CANCEL__);
}
function Xn(t, e, n) {
  K.call(this, t ?? "canceled", K.ERR_CANCELED, e, n), this.name = "CanceledError";
}
x.inherits(Xn, K, {
  __CANCEL__: !0
});
function Um(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const zm = oe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, s) {
      const i = [t + "=" + encodeURIComponent(e)];
      x.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), x.isString(r) && i.push("path=" + r), x.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Wm(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Hm(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function nc(t, e) {
  return t && !Wm(e) ? Hm(t, e) : e;
}
const qm = oe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return e && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(i) {
      const a = x.isString(i) ? o(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Km(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Ym(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, s = 0, i;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = r[s];
    i || (i = c), n[o] = l, r[o] = c;
    let d = s, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), c - i < e)
      return;
    const h = u && c - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function Ys(t, e) {
  let n = 0;
  const r = Ym(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, l = r(a), c = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && c ? (i - s) / l : void 0,
      event: o
    };
    u[e ? "download" : "upload"] = !0, t(u);
  };
}
const Gm = typeof XMLHttpRequest < "u", Xm = Gm && function(t) {
  return new Promise(function(n, r) {
    let o = t.data;
    const s = be.from(t.headers).normalize();
    let { responseType: i, withXSRFToken: a } = t, l;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l);
    }
    let u;
    if (x.isFormData(o)) {
      if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((u = s.getContentType()) !== !1) {
        const [g, ...b] = u ? u.split(";").map((y) => y.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...b].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const g = t.auth.username || "", b = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + b));
    }
    const f = nc(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), Jl(f, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function h() {
      if (!d)
        return;
      const g = be.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: g,
        config: t,
        request: d
      };
      Um(function(v) {
        n(v), c();
      }, function(v) {
        r(v), c();
      }, y), d = null;
    }
    if ("onloadend" in d ? d.onloadend = h : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, d.onabort = function() {
      d && (r(new K("Request aborted", K.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let b = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const y = t.transitional || Zl;
      t.timeoutErrorMessage && (b = t.timeoutErrorMessage), r(new K(
        b,
        y.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        t,
        d
      )), d = null;
    }, oe.hasStandardBrowserEnv && (a && x.isFunction(a) && (a = a(t)), a || a !== !1 && qm(f))) {
      const g = t.xsrfHeaderName && t.xsrfCookieName && zm.read(t.xsrfCookieName);
      g && s.set(t.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in d && x.forEach(s.toJSON(), function(b, y) {
      d.setRequestHeader(y, b);
    }), x.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), i && i !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Ys(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Ys(t.onUploadProgress)), (t.cancelToken || t.signal) && (l = (g) => {
      d && (r(!g || g.type ? new Xn(null, t, d) : g), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
    const m = Km(f);
    if (m && oe.protocols.indexOf(m) === -1) {
      r(new K("Unsupported protocol " + m + ":", K.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(o || null);
  });
}, Io = {
  http: wm,
  xhr: Xm
};
x.forEach(Io, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Gs = (t) => `- ${t}`, Jm = (t) => x.isFunction(t) || t === null || t === !1, rc = {
  getAdapter: (t) => {
    t = x.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let i;
      if (r = n, !Jm(n) && (r = Io[(i = String(n)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? s.length > 1 ? `since :
` + s.map(Gs).join(`
`) : " " + Gs(s[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Io
};
function po(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Xn(null, t);
}
function Xs(t) {
  return po(t), t.headers = be.from(t.headers), t.data = ho.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), rc.getAdapter(t.adapter || Pi.adapter)(t).then(function(r) {
    return po(t), r.data = ho.call(
      t,
      t.transformResponse,
      r
    ), r.headers = be.from(r.headers), r;
  }, function(r) {
    return ec(r) || (po(t), r && r.response && (r.response.data = ho.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = be.from(r.response.headers))), Promise.reject(r);
  });
}
const Js = (t) => t instanceof be ? t.toJSON() : t;
function gn(t, e) {
  e = e || {};
  const n = {};
  function r(c, u, d) {
    return x.isPlainObject(c) && x.isPlainObject(u) ? x.merge.call({ caseless: d }, c, u) : x.isPlainObject(u) ? x.merge({}, u) : x.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
  }
  function s(c, u) {
    if (!x.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in e)
      return r(c, u);
    if (d in t)
      return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, u) => o(Js(c), Js(u), !0)
  };
  return x.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const d = l[u] || o, f = d(t[u], e[u], u);
    x.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const oc = "1.6.7", Ri = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ri[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Zs = {};
Ri.transitional = function(e, n, r) {
  function o(s, i) {
    return "[Axios v" + oc + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (e === !1)
      throw new K(
        o(i, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !Zs[i] && (Zs[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, i, a) : !0;
  };
};
function Zm(t, e, n) {
  if (typeof t != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = e[s];
    if (i) {
      const a = t[s], l = a === void 0 || i(a, s, t);
      if (l !== !0)
        throw new K("option " + s + " must be " + l, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + s, K.ERR_BAD_OPTION);
  }
}
const $o = {
  assertOptions: Zm,
  validators: Ri
}, _e = $o.validators;
class Tr {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new qs(),
      response: new qs()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = gn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && $o.assertOptions(r, {
      silentJSONParsing: _e.transitional(_e.boolean),
      forcedJSONParsing: _e.transitional(_e.boolean),
      clarifyTimeoutError: _e.transitional(_e.boolean)
    }, !1), o != null && (x.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : $o.assertOptions(o, {
      encode: _e.function,
      serialize: _e.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && x.merge(
      s.common,
      s[n.method]
    );
    s && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = be.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const m = [Xs.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, c), f = m.length, u = Promise.resolve(n); d < f; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = a.length;
    let h = n;
    for (d = 0; d < f; ) {
      const m = a[d++], g = a[d++];
      try {
        h = m(h);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = Xs.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = gn(this.defaults, e);
    const n = nc(e.baseURL, e.url);
    return Jl(n, e.params, e.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function(e) {
  Tr.prototype[e] = function(n, r) {
    return this.request(gn(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, i, a) {
      return this.request(gn(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Tr.prototype[e] = n(), Tr.prototype[e + "Form"] = n(!0);
});
const dr = Tr;
class ki {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, e(function(s, i, a) {
      r.reason || (r.reason = new Xn(s, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new ki(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const Qm = ki;
function tg(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function eg(t) {
  return x.isObject(t) && t.isAxiosError === !0;
}
const jo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(jo).forEach(([t, e]) => {
  jo[e] = t;
});
const ng = jo;
function ic(t) {
  const e = new dr(t), n = $l(dr.prototype.request, e);
  return x.extend(n, dr.prototype, e, { allOwnKeys: !0 }), x.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ic(gn(t, o));
  }, n;
}
const pt = ic(Pi);
pt.Axios = dr;
pt.CanceledError = Xn;
pt.CancelToken = Qm;
pt.isCancel = ec;
pt.VERSION = oc;
pt.toFormData = zr;
pt.AxiosError = K;
pt.Cancel = pt.CanceledError;
pt.all = function(e) {
  return Promise.all(e);
};
pt.spread = tg;
pt.isAxiosError = eg;
pt.mergeConfig = gn;
pt.AxiosHeaders = be;
pt.formToJSON = (t) => tc(x.isHTMLForm(t) ? new FormData(t) : t);
pt.getAdapter = rc.getAdapter;
pt.HttpStatusCode = ng;
pt.default = pt;
const rg = pt;
function og({
  children: t,
  img: e,
  outline: n,
  hideSquircle: r = !1,
  ...o
}) {
  const [s, i] = Y(), a = zt(() => $p(), [e]);
  return $(() => {
    (async () => {
      if (!e || r)
        return i(e);
      try {
        const d = (await rg.get(e, { responseType: "blob" })).data, f = new FileReader();
        f.onloadend = () => {
          const h = f.result;
          typeof h == "string" && i(h);
        }, f.readAsDataURL(d);
      } catch (u) {
        console.error("Error loading image:", u), i(void 0);
      }
    })();
  }, [e]), /* @__PURE__ */ Q(ig, { ...o, children: [
    !r && /* @__PURE__ */ Q(
      sg,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s && /* @__PURE__ */ S("defs", { children: /* @__PURE__ */ S(
            "pattern",
            {
              id: a,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ S(
                "image",
                {
                  xlinkHref: s,
                  x: "0",
                  y: "0",
                  width: "60",
                  height: "60",
                  preserveAspectRatio: "xMidYMid slice"
                }
              )
            }
          ) }),
          /* @__PURE__ */ S(
            "path",
            {
              d: n ? "M1 30C1 23.8466 1.33102 18.97 2.18954 15.107C3.04554 11.2554 4.41259 8.47287 6.44273 6.44273C8.47287 4.41259 11.2554 3.04554 15.107 2.18954C18.97 1.33102 23.8466 1 30 1C36.1534 1 41.03 1.33102 44.893 2.18954C48.7446 3.04554 51.5271 4.41259 53.5573 6.44273C55.5874 8.47287 56.9545 11.2554 57.8105 15.107C58.669 18.97 59 23.8466 59 30C59 36.1534 58.669 41.03 57.8105 44.893C56.9545 48.7446 55.5874 51.5271 53.5573 53.5573C51.5271 55.5874 48.7446 56.9545 44.893 57.8105C41.03 58.669 36.1534 59 30 59C23.8466 59 18.97 58.669 15.107 57.8105C11.2554 56.9545 8.47287 55.5874 6.44273 53.5573C4.41259 51.5271 3.04554 48.7446 2.18954 44.893C1.33102 41.03 1 36.1534 1 30Z" : "M0 30C0 5.295 5.295 0 30 0C54.705 0 60 5.295 60 30C60 54.705 54.705 60 30 60C5.295 60 0 54.705 0 30Z",
              fill: s ? `url(#${a})` : "currentColor",
              strokeWidth: n ? 2 : void 0,
              stroke: n
            }
          )
        ]
      }
    ),
    t
  ] });
}
const ig = R.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(t) => t.theme.theme});
`, sg = R.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function dy({
  children: t,
  small: e = !1,
  active: n,
  height: r,
  padding: o = 8,
  title: s,
  titleStyle: i,
  subtitle: a,
  subtitleStyle: l,
  subtitleExtra: c,
  subtitleExtraStyle: u,
  img: d,
  icon: f,
  leftIcon: h,
  rightIcon: m,
  dragControls: g,
  expandableContent: b,
  expandedText: y = "Hide",
  collapsedText: w = "Show",
  expandable: v = !1,
  showArrow: T = !1,
  squircleSize: P = e ? 32 : 48,
  hideSquircle: O = !1,
  ...M
}) {
  const [N, G] = Y(!1), z = zt(() => r || (!O && P ? P + 2 * (o ?? 8) : e ? 36 : 48), [r, e, P, O, o]);
  return /* @__PURE__ */ Q(
    ag,
    {
      small: e,
      active: n,
      height: z,
      padding: o,
      ...M,
      children: [
        /* @__PURE__ */ Q(lg, { height: z, children: [
          /* @__PURE__ */ Q(ug, { children: [
            (h || f || d || t) && (!O || d ? /* @__PURE__ */ S(Qs, { small: e, img: d, squircleSize: P, children: /* @__PURE__ */ S(ta, { children: h || f || t }) }) : /* @__PURE__ */ S(
              "div",
              {
                style: { flexShrink: 0, display: "flex", alignItems: "center" },
                children: h || f || t
              }
            )),
            /* @__PURE__ */ Q("div", { style: { width: "100%" }, children: [
              typeof s == "string" ? /* @__PURE__ */ S(dg, { small: e, style: i, children: s }) : s,
              a && (typeof a == "string" ? /* @__PURE__ */ S(fg, { small: e, style: l, children: a }) : a)
            ] })
          ] }),
          /* @__PURE__ */ Q(mg, { children: [
            c && /* @__PURE__ */ S(hg, { small: e, style: u, children: c }),
            m && (O ? m : /* @__PURE__ */ S(Qs, { small: e, squircleSize: P, children: /* @__PURE__ */ S(ta, { children: m }) })),
            !g && T && /* @__PURE__ */ S(pg, {}),
            g && /* @__PURE__ */ S(Lp, { dragControls: g })
          ] })
        ] }),
        v && /* @__PURE__ */ Q(bn, { children: [
          /* @__PURE__ */ Q(
            gg,
            {
              expanded: N,
              onClick: (et) => {
                et.stopPropagation(), G((ct) => !ct);
              },
              children: [
                /* @__PURE__ */ S(ea, { active: n }),
                /* @__PURE__ */ Q(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: [
                      /* @__PURE__ */ S(
                        wn,
                        {
                          style: { whiteSpace: "nowrap" },
                          variant: "secondary",
                          size: "xs",
                          weight: "medium",
                          noMargin: !0,
                          children: N ? y : w
                        }
                      ),
                      /* @__PURE__ */ S(yg, { as: N ? Xc : kr })
                    ]
                  }
                ),
                /* @__PURE__ */ S(ea, { active: n })
              ]
            }
          ),
          /* @__PURE__ */ S(
            Un.div,
            {
              initial: !1,
              animate: {
                height: N ? "auto" : 0,
                opacity: N ? 1 : 0
              },
              transition: {
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2, delay: N ? 0.1 : 0 }
              },
              style: { overflow: "hidden" },
              onClick: (et) => et.stopPropagation(),
              children: /* @__PURE__ */ S($r, { mode: "wait", children: N && /* @__PURE__ */ S(
                Un.div,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: {
                    duration: 0.25,
                    ease: "easeOut"
                  },
                  children: /* @__PURE__ */ S(cg, { children: b })
                },
                "expandable-content"
              ) })
            }
          )
        ] })
      ]
    }
  );
}
const ag = R.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  padding: ${(t) => t.padding}px;
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(t) => t.active ? t.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(t) => t.theme.listItem.hover};
  }
`, lg = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  height: ${(t) => t.height};
  width: 100%;
`, cg = R.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, ug = R.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
`, Qs = R(og)`
  position: relative;
  flex-shrink: 0;
  width: ${(t) => t.squircleSize}px;
  height: ${(t) => t.squircleSize}px;
  color: ${(t) => t.theme.theme};
`, dg = R(wn).attrs({
  noMargin: !0,
  weight: "semibold"
})`
  font-size: ${(t) => t.small ? "16px" : "18px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`, fg = R(wn).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(t) => t.small ? "12px" : "14px"};
`, hg = R(wn).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(t) => t.small ? "14px" : "16px"};
`, pg = R(Gc)`
  color: ${(t) => t.theme.listItem.icon};
  width: 24px;
  height: 24px;
`, ta = R.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, fy = R.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`, mg = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, gg = R.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: ${(t) => `1rem 0 ${t.expanded ? "1rem" : "0"} 0`};
  cursor: pointer;

  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.92);
  }
`, yg = R(kr)`
  cursor: pointer;
  font-size: 1.25rem;
  width: 1rem;
  height: 1rem;
  color: ${(t) => t.theme.tertiaryText};
`, ea = R.div`
  width: 100%;
  height: ${({ height: t }) => t || 1}px;
  background: ${({ theme: t, active: e }) => e ? t.borderDefault : t.borderSecondary};
  margin: ${({ marginVertical: t }) => t || 0}px 0;
`;
function vg(t) {
  return {
    top: {
      bottom: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "133%",
      left: "-37%"
    },
    topEnd: {
      bottom: "133%",
      right: "-37%"
    },
    bottom: {
      top: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "133%",
      left: "-37%"
    },
    bottomEnd: {
      top: "133%",
      right: "-37%"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    }
  }[t];
}
function hy({
  children: t,
  content: e,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = Y(!1);
  $(() => (document.addEventListener("mousedown", u), () => {
    document.removeEventListener("mousedown", u);
  }));
  const l = rt(), c = rt();
  function u(d) {
    var f, h;
    o === "click" && (!i && ((f = c.current) != null && f.contains(d.target)) ? a(!0) : i && !((h = l.current) != null && h.contains(d.target)) && (d.preventDefault(), d.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ Q(
    bg,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: c,
      children: [
        /* @__PURE__ */ S($r, { children: i && /* @__PURE__ */ S(
          wg,
          {
            style: r || vg(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: l,
            children: /* @__PURE__ */ S(ba, { ...s, children: e })
          }
        ) }),
        t
      ]
    }
  );
}
const bg = R.div`
  position: relative;
  display: inline-block;
`, wg = R(Un.div)`
  position: absolute;
  z-index: 100;
`, sc = je({
  toasts: [],
  setToast() {
  }
}), xg = () => bt(sc);
let Eg = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Tg(t) {
  return /* @__PURE__ */ tt.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ tt.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ tt.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function Sg(t) {
  return /* @__PURE__ */ tt.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ tt.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ tt.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function ac(t) {
  return /* @__PURE__ */ tt.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ tt.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ tt.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ tt.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function Cg(t) {
  return /* @__PURE__ */ tt.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ tt.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ tt.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ tt.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
const Ag = (t) => {
  switch (t) {
    case "info":
      return ac;
    case "error":
      return Cg;
    default:
      return Tg;
  }
};
function Pg({
  children: t,
  duration: e,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s,
  icon: i,
  showProgress: a = !1,
  progressColor: l,
  showIcon: c = !0,
  showCloseButton: u = !0
}) {
  const [d, f] = Y(100), h = rt(100), m = rt(Date.now()), g = Me(async () => {
    n && (await n.task(), o());
  }, [n, o]);
  return $(() => {
    if (!a)
      return;
    const y = s + e;
    let w;
    m.current = Date.now();
    const v = () => {
      const T = Date.now(), P = Math.max(0, y - T);
      if (T - m.current >= 16) {
        const O = P / e * 100;
        Math.abs(O - h.current) >= 1 && (f(O), h.current = O), m.current = T;
      }
      P > 0 && (w = requestAnimationFrame(v));
    };
    return v(), () => {
      w && cancelAnimationFrame(w);
    };
  }, [s, e, a]), /* @__PURE__ */ Q(Rg, { children: [
    /* @__PURE__ */ Q(Og, { children: [
      c && (i || /* @__PURE__ */ S(_g, { as: Ag(r), type: r })),
      /* @__PURE__ */ S(Lg, { children: t })
    ] }),
    /* @__PURE__ */ Q(Dg, { children: [
      n && /* @__PURE__ */ S(uc, { onClick: g, children: n.name }),
      u && /* @__PURE__ */ S(Vg, { onClick: o, children: /* @__PURE__ */ S(Fg, {}) })
    ] }),
    a && d > 0 && /* @__PURE__ */ S(kg, { type: r, progress: d, color: l })
  ] });
}
const lc = ".25rem", Rg = R(Un.div).attrs({
  initial: {
    opacity: 0,
    translateY: "-100%",
    scale: 0.85,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  animate: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  }
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color: ${(t) => t.theme.displayTheme === "light" ? "black" : t.theme.cardBackground};
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${lc});
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(t) => t.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + t.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, cc = {
  success: (t) => t.theme.success,
  error: (t) => t.theme.fail,
  info: (t) => t.theme.theme
}, kg = R.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${lc};
  width: ${(t) => t.progress || "100"}%;
  background: ${(t) => t.color || cc[t.type](t)};
  will-change: width;
`, Sr = ".35rem", Og = R.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, _g = R(ac)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: ${(t) => cc[t.type](t)};
`, Lg = R.div`
  padding: ${Sr} 0;
`, Dg = R.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, No = "1rem", uc = R.button`
  font-size: ${No};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${Sr} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, Vg = R(uc)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${Sr} * 2 + ${No});
  height: calc(${Sr} * 2 + ${No});
`, Fg = R(wa)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, Mg = {
  top: `
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: `
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `
}, Bg = ({ setToasts: t }) => {
  const { toasts: e } = xg(), n = Me(
    (s) => {
      t((i) => i.filter((a) => a.id !== s));
    },
    [t]
  ), r = Me(
    (s, i) => typeof s == "function" ? s({ close: () => n(i) }) : s,
    [n]
  ), o = zt(() => e.reduce((s, i) => {
    const a = i.position || "bottom";
    return s[a] || (s[a] = []), s[a].push(i), s;
  }, {}), [e]);
  return /* @__PURE__ */ S(bn, { children: Object.entries(o).map(([s, i]) => /* @__PURE__ */ S(Ig, { position: s, children: /* @__PURE__ */ S($r, { children: i.map((a) => /* @__PURE__ */ S(
    Pg,
    {
      action: a.action,
      duration: a.duration,
      type: a.type,
      close: () => n(a.id),
      addedAt: a.addedAt,
      showProgress: a.showProgress,
      progressColor: a.progressColor,
      showIcon: a.showIcon,
      icon: a.icon,
      showCloseButton: a.showCloseButton,
      children: r(a.content, a.id)
    },
    a.id
  )) }) }, s)) });
}, Ig = R.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${(t) => Mg[t.position]}
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`, py = {
  displayTheme: "light",
  theme: "#6B57F9",
  primaryText: "#121212",
  secondaryText: "#666",
  tertiaryText: "#838383",
  cardBorder: "235, 235, 241",
  background: "255, 255, 255",
  cardBackground: "#FFF",
  // New styles:
  backgroundv2: "#FFFFFF",
  primary: "#6B57F9",
  primaryBtnHover: "#5647A0",
  secondaryBtnHover: "#DDD9F4",
  secondaryItemHover: "#EBE8F8",
  buttonDisabled: "#BCB3E9",
  primaryTextv2: "#191919",
  secondaryTextv2: "#757575",
  buttonDisabledText: "#DDD9F4",
  inputField: "#757575",
  success: "#17A815",
  fail: "#D22B1F",
  backgroundSecondary: "#CCCCCC",
  delete: "#F58080",
  secondaryDelete: "#F58080",
  surfaceDefault: "#FFF",
  surfaceSecondaryPopup: "#FFFFFF",
  surfaceSecondary: "#F2F2F7",
  surfaceTertiary: "#f2f2f7",
  borderDefault: "#D6D6DD",
  borderSecondary: "#E4E4EB",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842f8 5.41%, #6b57f9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#f5f4ff"
      },
      secondary: {
        default: "#F2F2F7",
        hover: "#EBEBF0",
        active: "#F2F2F7",
        disabled: "#F2F2F7"
      },
      secondaryAlt: {
        default: "#F5F4FF",
        hover: "#E3E1FA",
        active: "#F5F4FF",
        disabled: "#F5F4FF"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#291C8B",
      secondaryAlt: "#291C8B",
      disabled: "#847eaf"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #EBEBF0",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#f2f2f7", disabled: "#FFF", special: "#F2F2F7" },
      default: { default: "#f2f2f7", disabled: "#FFF" },
      dropdown: { default: "#FFF", disabled: "#FFF" }
    },
    border: {
      search: { disabled: "#E4E4EB", focused: "#D6D6DD", special: "#6B57F9" },
      default: { disabled: "#E4E4EB", focused: "#D6D6DD" },
      dropdown: { default: "#E4E4EB", disabled: "#E4E4EB", focused: "#D6D6DD" }
    },
    placeholder: {
      search: "#666666",
      default: "#666666",
      dropdown: "#121212"
    },
    icons: {
      searchActive: "#6B57F9",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#F2F2F7",
    active: "#EBEBF0",
    icon: "#838383"
  }
}, my = {
  displayTheme: "dark",
  theme: "#6B57F9",
  primaryText: "#EEE",
  secondaryText: "#AAA",
  tertiaryText: "#838383",
  cardBorder: "44, 44, 47",
  background: "18, 18, 18",
  cardBackground: "#121212",
  // New styles:
  backgroundv2: "#121212",
  primary: "#6B57F9",
  primaryBtnHover: "#6751D0",
  secondaryBtnHover: "#36324D",
  secondaryItemHover: "#2B2838",
  buttonDisabled: "#544A81",
  primaryTextv2: "#FFFFFF",
  secondaryTextv2: "#A3A3A3",
  buttonDisabledText: "#A9A4C0",
  inputField: "#847F90",
  success: "#56C980",
  fail: "#FF1A1A",
  backgroundSecondary: "#333333",
  delete: "#8C1A1A",
  secondaryDelete: "#C51A1A",
  surfaceDefault: "#121212",
  surfaceSecondaryPopup: "#1B1B1B",
  surfaceSecondary: "#242426",
  surfaceTertiary: "#2C2C2E",
  borderDefault: "#333",
  borderSecondary: "#2C2C2E",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842F8 5.41%, #6B57F9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#2B2269"
      },
      secondary: {
        default: "#333336",
        hover: "#2C2C2E",
        active: "#333336",
        disabled: "#333336"
      },
      secondaryAlt: {
        default: "#403785",
        hover: "#2A2260",
        active: "#403785",
        disabled: "#403785"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#EEE",
      secondaryAlt: "#EEE",
      disabled: "#8E8D97"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #2C2C2E",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#2C2C2E", disabled: "#2C2C2E", special: "#2C2C2E" },
      default: { default: "#2C2C2E", disabled: "#2C2C2E" },
      dropdown: { default: "#242426", disabled: "#2C2C2E" }
    },
    border: {
      search: { disabled: "#2C2C2E", focused: "#333", special: "#6B57F9" },
      default: { disabled: "#2C2C2E", focused: "#333" },
      dropdown: { default: "#2C2C2E", disabled: "#2C2C2E", focused: "#333" }
    },
    placeholder: {
      search: "#AAAAAA",
      default: "#AAAAAA",
      dropdown: "#EEEEEE"
    },
    icons: {
      searchActive: "#9787FF",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#242426",
    active: "#2C2C2E",
    icon: "#838383"
  }
};
function gy({
  children: t,
  theme: e
}) {
  const [n, r] = Y([]);
  function o(s) {
    const i = Eg();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((l) => l.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ S(_c, { theme: e, children: /* @__PURE__ */ Q(sc.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ S(Bg, { setToasts: r }),
    t
  ] }) });
}
const yy = R.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal: t = !0, showPaddingVertical: e = !0 }) => `${e ? "24px" : "0px"} ${t ? "24px" : "0px"}`};
`;
function vy({
  children: t,
  label: e,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = zt(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ Q(bn, { children: [
    e && /* @__PURE__ */ S(Ea, { children: e }),
    /* @__PURE__ */ Q(
      xa,
      {
        fullWidth: n,
        sizeVariant: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ S($g, { ...i, children: t }),
          /* @__PURE__ */ S(yo, { position: "right", children: /* @__PURE__ */ S(vo, { as: kr }) })
        ]
      }
    )
  ] });
}
const $g = R.select`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(t) => t.theme.primaryText};

  font-size: 16px;
  font-weight: 500;
  padding: ${(t) => t.small ? "12px" : "12px 14px"};
  line-height: 22px;
  width: 100%;
  cursor: pointer;
  transition: all 0.23s ease-in-out;
  z-index: 15;

  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  option {
  }
`, yn = Math.min, Ge = Math.max, Cr = Math.round, sr = Math.floor, se = (t) => ({
  x: t,
  y: t
}), jg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ng = {
  start: "end",
  end: "start"
};
function Uo(t, e, n) {
  return Ge(t, yn(e, n));
}
function Jn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Xe(t) {
  return t.split("-")[0];
}
function Zn(t) {
  return t.split("-")[1];
}
function dc(t) {
  return t === "x" ? "y" : "x";
}
function Oi(t) {
  return t === "y" ? "height" : "width";
}
const Ug = /* @__PURE__ */ new Set(["top", "bottom"]);
function Fe(t) {
  return Ug.has(Xe(t)) ? "y" : "x";
}
function _i(t) {
  return dc(Fe(t));
}
function zg(t, e, n) {
  n === void 0 && (n = !1);
  const r = Zn(t), o = _i(t), s = Oi(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (i = Ar(i)), [i, Ar(i)];
}
function Wg(t) {
  const e = Ar(t);
  return [zo(t), e, zo(e)];
}
function zo(t) {
  return t.replace(/start|end/g, (e) => Ng[e]);
}
const na = ["left", "right"], ra = ["right", "left"], Hg = ["top", "bottom"], qg = ["bottom", "top"];
function Kg(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? ra : na : e ? na : ra;
    case "left":
    case "right":
      return e ? Hg : qg;
    default:
      return [];
  }
}
function Yg(t, e, n, r) {
  const o = Zn(t);
  let s = Kg(Xe(t), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), e && (s = s.concat(s.map(zo)))), s;
}
function Ar(t) {
  return t.replace(/left|right|bottom|top/g, (e) => jg[e]);
}
function Gg(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function fc(t) {
  return typeof t != "number" ? Gg(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Pr(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function oa(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const s = Fe(e), i = _i(e), a = Oi(i), l = Xe(e), c = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Zn(e)) {
    case "start":
      h[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Xg = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let c = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: d
  } = oa(c, r, l), f = r, h = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: b,
      fn: y
    } = a[g], {
      x: w,
      y: v,
      data: T,
      reset: P
    } = await y({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = w ?? u, d = v ?? d, h = {
      ...h,
      [b]: {
        ...h[b],
        ...T
      }
    }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (c = P.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = oa(c, f, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function hc(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Jn(e, t), m = fc(h), b = a[f ? d === "floating" ? "reference" : "floating" : d], y = Pr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), T = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Pr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: v,
    strategy: l
  }) : w);
  return {
    top: (y.top - P.top + m.top) / T.y,
    bottom: (P.bottom - y.bottom + m.bottom) / T.y,
    left: (y.left - P.left + m.left) / T.x,
    right: (P.right - y.right + m.right) / T.x
  };
}
const Jg = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: u = 0
    } = Jn(t, e) || {};
    if (c == null)
      return {};
    const d = fc(u), f = {
      x: n,
      y: r
    }, h = _i(o), m = Oi(h), g = await i.getDimensions(c), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", T = s.reference[m] + s.reference[h] - f[h] - s.floating[m], P = f[h] - s.reference[h], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let M = O ? O[v] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(O))) && (M = a.floating[v] || s.floating[m]);
    const N = T / 2 - P / 2, G = M / 2 - g[m] / 2 - 1, z = yn(d[y], G), et = yn(d[w], G), ct = z, ot = M - g[m] - et, B = M / 2 - g[m] / 2 + N, I = Uo(ct, B, ot), W = !l.arrow && Zn(o) != null && B !== I && s.reference[m] / 2 - (B < ct ? z : et) - g[m] / 2 < 0, Z = W ? B < ct ? B - ct : B - ot : 0;
    return {
      [h]: f[h] + Z,
      data: {
        [h]: I,
        centerOffset: B - I - Z,
        ...W && {
          alignmentOffset: Z
        }
      },
      reset: W
    };
  }
}), Zg = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...b
      } = Jn(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Xe(o), w = Fe(a), v = Xe(a) === a, T = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = f || (v || !g ? [Ar(a)] : Wg(a)), O = m !== "none";
      !f && O && P.push(...Yg(a, g, m, T));
      const M = [a, ...P], N = await hc(e, b), G = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && G.push(N[y]), d) {
        const B = zg(o, i, T);
        G.push(N[B[0]], N[B[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: G
      }], !G.every((B) => B <= 0)) {
        var et, ct;
        const B = (((et = s.flip) == null ? void 0 : et.index) || 0) + 1, I = M[B];
        if (I && (!(d === "alignment" ? w !== Fe(I) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((it) => Fe(it.placement) === w ? it.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: z
            },
            reset: {
              placement: I
            }
          };
        let W = (ct = z.filter((Z) => Z.overflows[0] <= 0).sort((Z, it) => Z.overflows[1] - it.overflows[1])[0]) == null ? void 0 : ct.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var ot;
              const Z = (ot = z.filter((it) => {
                if (O) {
                  const wt = Fe(it.placement);
                  return wt === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  wt === "y";
                }
                return !0;
              }).map((it) => [it.placement, it.overflows.filter((wt) => wt > 0).reduce((wt, Vt) => wt + Vt, 0)]).sort((it, wt) => it[1] - wt[1])[0]) == null ? void 0 : ot[0];
              Z && (W = Z);
              break;
            }
            case "initialPlacement":
              W = a;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, Qg = /* @__PURE__ */ new Set(["left", "top"]);
async function t0(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Xe(n), a = Zn(n), l = Fe(n) === "y", c = Qg.has(i) ? -1 : 1, u = s && l ? -1 : 1, d = Jn(e, t);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * u,
    y: f * c
  } : {
    x: f * c,
    y: h * u
  };
}
const e0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = e, l = await t0(e, t);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, n0 = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Jn(t, e), c = {
        x: n,
        y: r
      }, u = await hc(e, l), d = Fe(Xe(o)), f = dc(d);
      let h = c[f], m = c[d];
      if (s) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = h + u[b], v = h - u[y];
        h = Uo(w, h, v);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = m + u[b], v = m - u[y];
        m = Uo(w, m, v);
      }
      const g = a.fn({
        ...e,
        [f]: h,
        [d]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [f]: s,
            [d]: i
          }
        }
      };
    }
  };
};
function Hr() {
  return typeof window < "u";
}
function En(t) {
  return pc(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Lt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ue(t) {
  var e;
  return (e = (pc(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function pc(t) {
  return Hr() ? t instanceof Node || t instanceof Lt(t).Node : !1;
}
function qt(t) {
  return Hr() ? t instanceof Element || t instanceof Lt(t).Element : !1;
}
function le(t) {
  return Hr() ? t instanceof HTMLElement || t instanceof Lt(t).HTMLElement : !1;
}
function ia(t) {
  return !Hr() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Lt(t).ShadowRoot;
}
const r0 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Qn(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Kt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !r0.has(o);
}
const o0 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function i0(t) {
  return o0.has(En(t));
}
const s0 = [":popover-open", ":modal"];
function qr(t) {
  return s0.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const a0 = ["transform", "translate", "scale", "rotate", "perspective"], l0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], c0 = ["paint", "layout", "strict", "content"];
function Li(t) {
  const e = Di(), n = qt(t) ? Kt(t) : t;
  return a0.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || l0.some((r) => (n.willChange || "").includes(r)) || c0.some((r) => (n.contain || "").includes(r));
}
function u0(t) {
  let e = $e(t);
  for (; le(e) && !vn(e); ) {
    if (Li(e))
      return e;
    if (qr(e))
      return null;
    e = $e(e);
  }
  return null;
}
function Di() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const d0 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function vn(t) {
  return d0.has(En(t));
}
function Kt(t) {
  return Lt(t).getComputedStyle(t);
}
function Kr(t) {
  return qt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function $e(t) {
  if (En(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ia(t) && t.host || // Fallback.
    ue(t)
  );
  return ia(e) ? e.host : e;
}
function mc(t) {
  const e = $e(t);
  return vn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : le(e) && Qn(e) ? e : mc(e);
}
function Wn(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = mc(t), s = o === ((r = t.ownerDocument) == null ? void 0 : r.body), i = Lt(o);
  if (s) {
    const a = Wo(i);
    return e.concat(i, i.visualViewport || [], Qn(o) ? o : [], a && n ? Wn(a) : []);
  }
  return e.concat(o, Wn(o, [], n));
}
function Wo(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function gc(t) {
  const e = Kt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = le(t), s = o ? t.offsetWidth : n, i = o ? t.offsetHeight : r, a = Cr(n) !== s || Cr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Vi(t) {
  return qt(t) ? t : t.contextElement;
}
function hn(t) {
  const e = Vi(t);
  if (!le(e))
    return se(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = gc(e);
  let i = (s ? Cr(n.width) : n.width) / r, a = (s ? Cr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const f0 = /* @__PURE__ */ se(0);
function yc(t) {
  const e = Lt(t);
  return !Di() || !e.visualViewport ? f0 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function h0(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Lt(t) ? !1 : e;
}
function Je(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = Vi(t);
  let i = se(1);
  e && (r ? qt(r) && (i = hn(r)) : i = hn(t));
  const a = h0(s, n, r) ? yc(s) : se(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = Lt(s), h = r && qt(r) ? Lt(r) : r;
    let m = f, g = Wo(m);
    for (; g && r && h !== m; ) {
      const b = hn(g), y = g.getBoundingClientRect(), w = Kt(g), v = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, T = y.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, d *= b.y, l += v, c += T, m = Lt(g), g = Wo(m);
    }
  }
  return Pr({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Yr(t, e) {
  const n = Kr(t).scrollLeft;
  return e ? e.left + n : Je(ue(t)).left + n;
}
function vc(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Yr(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function p0(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const s = o === "fixed", i = ue(r), a = e ? qr(e.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = se(1);
  const u = se(0), d = le(r);
  if ((d || !d && !s) && ((En(r) !== "body" || Qn(i)) && (l = Kr(r)), le(r))) {
    const h = Je(r);
    c = hn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const f = i && !d && !s ? vc(i, l) : se(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function m0(t) {
  return Array.from(t.getClientRects());
}
function g0(t) {
  const e = ue(t), n = Kr(t), r = t.ownerDocument.body, o = Ge(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), s = Ge(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Yr(t);
  const a = -n.scrollTop;
  return Kt(r).direction === "rtl" && (i += Ge(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const sa = 25;
function y0(t, e) {
  const n = Lt(t), r = ue(t), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Di();
    (!u || u && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Yr(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - d.clientWidth - h);
    m <= sa && (s -= m);
  } else
    c <= sa && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const v0 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function b0(t, e) {
  const n = Je(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, s = le(t) ? hn(t) : se(1), i = t.clientWidth * s.x, a = t.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function aa(t, e, n) {
  let r;
  if (e === "viewport")
    r = y0(t, n);
  else if (e === "document")
    r = g0(ue(t));
  else if (qt(e))
    r = b0(e, n);
  else {
    const o = yc(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Pr(r);
}
function bc(t, e) {
  const n = $e(t);
  return n === e || !qt(n) || vn(n) ? !1 : Kt(n).position === "fixed" || bc(n, e);
}
function w0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Wn(t, [], !1).filter((a) => qt(a) && En(a) !== "body"), o = null;
  const s = Kt(t).position === "fixed";
  let i = s ? $e(t) : t;
  for (; qt(i) && !vn(i); ) {
    const a = Kt(i), l = Li(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && v0.has(o.position) || Qn(i) && !l && bc(t, i)) ? r = r.filter((u) => u !== i) : o = a, i = $e(i);
  }
  return e.set(t, r), r;
}
function x0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? qr(e) ? [] : w0(e, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const d = aa(e, u, o);
    return c.top = Ge(d.top, c.top), c.right = yn(d.right, c.right), c.bottom = yn(d.bottom, c.bottom), c.left = Ge(d.left, c.left), c;
  }, aa(e, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function E0(t) {
  const {
    width: e,
    height: n
  } = gc(t);
  return {
    width: e,
    height: n
  };
}
function T0(t, e, n) {
  const r = le(e), o = ue(e), s = n === "fixed", i = Je(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = se(0);
  function c() {
    l.x = Yr(o);
  }
  if (r || !r && !s)
    if ((En(e) !== "body" || Qn(o)) && (a = Kr(e)), r) {
      const h = Je(e, !0, s, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      o && c();
  s && !r && o && c();
  const u = o && !r && !s ? vc(o, a) : se(0), d = i.left + a.scrollLeft - l.x - u.x, f = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function mo(t) {
  return Kt(t).position === "static";
}
function la(t, e) {
  if (!le(t) || Kt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return ue(t) === n && (n = n.ownerDocument.body), n;
}
function wc(t, e) {
  const n = Lt(t);
  if (qr(t))
    return n;
  if (!le(t)) {
    let o = $e(t);
    for (; o && !vn(o); ) {
      if (qt(o) && !mo(o))
        return o;
      o = $e(o);
    }
    return n;
  }
  let r = la(t, e);
  for (; r && i0(r) && mo(r); )
    r = la(r, e);
  return r && vn(r) && mo(r) && !Li(r) ? n : r || u0(t) || n;
}
const S0 = async function(t) {
  const e = this.getOffsetParent || wc, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: T0(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function C0(t) {
  return Kt(t).direction === "rtl";
}
const A0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: p0,
  getDocumentElement: ue,
  getClippingRect: x0,
  getOffsetParent: wc,
  getElementRects: S0,
  getClientRects: m0,
  getDimensions: E0,
  getScale: hn,
  isElement: qt,
  isRTL: C0
};
function xc(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function P0(t, e) {
  let n = null, r;
  const o = ue(t);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = t.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: h
    } = c;
    if (a || e(), !f || !h)
      return;
    const m = sr(d), g = sr(o.clientWidth - (u + f)), b = sr(o.clientHeight - (d + h)), y = sr(u), v = {
      rootMargin: -m + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: Ge(0, yn(1, l)) || 1
    };
    let T = !0;
    function P(O) {
      const M = O[0].intersectionRatio;
      if (M !== l) {
        if (!T)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !xc(c, t.getBoundingClientRect()) && i(), T = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, v);
    }
    n.observe(t);
  }
  return i(!0), s;
}
function R0(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Vi(t), u = o || s ? [...c ? Wn(c) : [], ...Wn(e)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const d = c && a ? P0(c, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && h && (h.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(e);
    })), n();
  }), c && !l && h.observe(c), h.observe(e));
  let m, g = l ? Je(t) : null;
  l && b();
  function b() {
    const y = Je(t);
    g && !xc(g, y) && n(), g = y, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), d == null || d(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const k0 = e0, O0 = n0, _0 = Zg, L0 = Jg, ca = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: A0,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Xg(t, e, {
    ...o,
    platform: s
  });
};
var Ho = {}, D0 = {
  get exports() {
    return Ho;
  },
  set exports(t) {
    Ho = t;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var s = "", i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        a && (s = o(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return n.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var i = "";
      for (var a in s)
        e.call(s, a) && s[a] && (i = o(i, a));
      return i;
    }
    function o(s, i) {
      return i ? s ? s + " " + i : s + i : s;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(D0);
const qo = Ho;
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const V0 = "react-tooltip-core-styles", F0 = "react-tooltip-base-styles", ua = { core: !1, base: !1 };
function da({ css: t, id: e = F0, type: n = "base", ref: r }) {
  var o, s;
  if (!t || typeof document > "u" || ua[n] || n === "core" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((s = process == null ? void 0 : process.env) === null || s === void 0) && s.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  n === "core" && (e = V0), r || (r = {});
  const { insertAt: i } = r;
  if (document.getElementById(e))
    return;
  const a = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
  l.id = e, l.type = "text/css", i === "top" && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? l.styleSheet.cssText = t : l.appendChild(document.createTextNode(t)), ua[n] = !0;
}
const fa = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: s = "absolute", middlewares: i = [k0(Number(o)), _0({ fallbackAxisSideDirection: "start" }), O0({ padding: 5 })], border: a, arrowSize: l = 8 }) => {
  if (!t)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (e === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const c = i;
  return n ? (c.push(L0({ element: n, padding: 5 })), ca(t, e, { placement: r, strategy: s, middleware: c }).then(({ x: u, y: d, placement: f, middlewareData: h }) => {
    var m, g;
    const b = { left: `${u}px`, top: `${d}px`, border: a }, { x: y, y: w } = (m = h.arrow) !== null && m !== void 0 ? m : { x: 0, y: 0 }, v = (g = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && g !== void 0 ? g : "bottom", T = a && { borderBottom: a, borderRight: a };
    let P = 0;
    if (a) {
      const O = `${a}`.match(/(\d+)px/);
      P = O != null && O[1] ? Number(O[1]) : 1;
    }
    return { tooltipStyles: b, tooltipArrowStyles: { left: y != null ? `${y}px` : "", top: w != null ? `${w}px` : "", right: "", bottom: "", ...T, [v]: `-${l / 2 + P}px` }, place: f };
  })) : ca(t, e, { placement: "bottom", strategy: s, middleware: c }).then(({ x: u, y: d, placement: f }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {}, place: f }));
}, ha = (t, e) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(t, e), pa = (t, e, n) => {
  let r = null;
  const o = function(...s) {
    const i = () => {
      r = null, n || t.apply(this, s);
    };
    n && !r && (t.apply(this, s), r = setTimeout(i, e)), n || (r && clearTimeout(r), r = setTimeout(i, e));
  };
  return o.cancel = () => {
    r && (clearTimeout(r), r = null);
  }, o;
}, ma = (t) => t !== null && !Array.isArray(t) && typeof t == "object", Ko = (t, e) => {
  if (t === e)
    return !0;
  if (Array.isArray(t) && Array.isArray(e))
    return t.length === e.length && t.every((o, s) => Ko(o, e[s]));
  if (Array.isArray(t) !== Array.isArray(e))
    return !1;
  if (!ma(t) || !ma(e))
    return t === e;
  const n = Object.keys(t), r = Object.keys(e);
  return n.length === r.length && n.every((o) => Ko(t[o], e[o]));
}, M0 = (t) => {
  if (!(t instanceof HTMLElement || t instanceof SVGElement))
    return !1;
  const e = getComputedStyle(t);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const r = e.getPropertyValue(n);
    return r === "auto" || r === "scroll";
  });
}, ga = (t) => {
  if (!t)
    return null;
  let e = t.parentElement;
  for (; e; ) {
    if (M0(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, B0 = typeof window < "u" ? ya : $, Mt = (t) => {
  t.current && (clearTimeout(t.current), t.current = null);
}, I0 = "DEFAULT_TOOLTIP_ID", $0 = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, j0 = je({ getTooltipData: () => $0 });
function Ec(t = I0) {
  return bt(j0).getTooltipData(t);
}
var an = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, go = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const N0 = ({ forwardRef: t, id: e, className: n, classNameArrow: r, variant: o = "dark", anchorId: s, anchorSelect: i, place: a = "top", offset: l = 10, events: c = ["hover"], openOnClick: u = !1, positionStrategy: d = "absolute", middlewares: f, wrapper: h, delayShow: m = 0, delayHide: g = 0, float: b = !1, hidden: y = !1, noArrow: w = !1, clickable: v = !1, closeOnEsc: T = !1, closeOnScroll: P = !1, closeOnResize: O = !1, openEvents: M, closeEvents: N, globalCloseEvents: G, imperativeModeOnly: z, style: et, position: ct, afterShow: ot, afterHide: B, disableTooltip: I, content: W, contentWrapperRef: Z, isOpen: it, defaultIsOpen: wt = !1, setIsOpen: Vt, previousActiveAnchor: we, activeAnchor: nt, setActiveAnchor: de, border: en, opacity: nn, arrowColor: xe, arrowSize: Yt = 8, role: Ee = "tooltip" }) => {
  var $t;
  const mt = rt(null), Te = rt(null), kt = rt(null), fe = rt(null), Se = rt(null), [Ft, he] = Y({ tooltipStyles: {}, tooltipArrowStyles: {}, place: a }), [Et, Ce] = Y(!1), [jt, Gt] = Y(!1), [at, Xt] = Y(null), rn = rt(!1), Ae = rt(null), { anchorRefs: Ne, setActiveAnchor: Pe } = Ec(e), Nt = rt(!1), [Jt, Re] = Y([]), Zt = rt(!1), Qt = u || c.includes("click"), on = Qt || (M == null ? void 0 : M.click) || (M == null ? void 0 : M.dblclick) || (M == null ? void 0 : M.mousedown), Ue = M ? { ...M } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !M && Qt && Object.assign(Ue, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const pe = N ? { ...N } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !N && Qt && Object.assign(pe, { mouseleave: !1, blur: !1, mouseout: !1 });
  const gt = G ? { ...G } : { escape: T || !1, scroll: P || !1, resize: O || !1, clickOutsideAnchor: on || !1 };
  z && (Object.assign(Ue, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(pe, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(gt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), B0(() => (Zt.current = !0, () => {
    Zt.current = !1;
  }), []);
  const Ct = (A) => {
    Zt.current && (A && Gt(!0), setTimeout(() => {
      Zt.current && (Vt == null || Vt(A), it === void 0 && Ce(A));
    }, 10));
  };
  $(() => {
    if (e) {
      if (Et) {
        D(we);
        const _ = A(nt), J = [.../* @__PURE__ */ new Set([..._, e])].filter(Boolean).join(" ");
        nt == null || nt.setAttribute("aria-describedby", J);
      } else
        D(nt);
      return () => {
        D(nt), D(we);
      };
    }
    function A(_) {
      var J;
      return ((J = _ == null ? void 0 : _.getAttribute("aria-describedby")) === null || J === void 0 ? void 0 : J.split(" ")) || [];
    }
    function D(_) {
      const J = A(_).filter((ht) => ht !== e);
      J.length ? _ == null || _.setAttribute("aria-describedby", J.join(" ")) : _ == null || _.removeAttribute("aria-describedby");
    }
  }, [nt, Et, e, we]), $(() => {
    if (it === void 0)
      return () => null;
    it && Gt(!0);
    const A = setTimeout(() => {
      Ce(it);
    }, 10);
    return () => {
      clearTimeout(A);
    };
  }, [it]), $(() => {
    if (Et !== rn.current)
      if (Mt(Se), rn.current = Et, Et)
        ot == null || ot();
      else {
        const A = ((D) => {
          const _ = D.match(/^([\d.]+)(ms|s)$/);
          if (!_)
            return 0;
          const [, J, ht] = _;
          return Number(J) * (ht === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        Se.current = setTimeout(() => {
          Gt(!1), Xt(null), B == null || B();
        }, A + 25);
      }
  }, [Et]);
  const ze = (A) => {
    he((D) => Ko(D, A) ? D : A);
  }, We = (A = m) => {
    Mt(kt), jt ? Ct(!0) : kt.current = setTimeout(() => {
      Ct(!0);
    }, A);
  }, te = (A = g) => {
    Mt(fe), fe.current = setTimeout(() => {
      Nt.current || Ct(!1);
    }, A);
  }, ke = (A) => {
    var D;
    if (!A)
      return;
    const _ = (D = A.currentTarget) !== null && D !== void 0 ? D : A.target;
    if (!(_ != null && _.isConnected))
      return de(null), void Pe({ current: null });
    m ? We() : Ct(!0), de(_), Pe({ current: _ }), Mt(fe);
  }, _t = () => {
    v ? te(g || 100) : g ? te() : Ct(!1), Mt(kt);
  }, ee = ({ x: A, y: D }) => {
    var _;
    const J = { getBoundingClientRect: () => ({ x: A, y: D, width: 0, height: 0, top: D, left: A, right: A, bottom: D }) };
    fa({ place: (_ = at == null ? void 0 : at.place) !== null && _ !== void 0 ? _ : a, offset: l, elementReference: J, tooltipReference: mt.current, tooltipArrowReference: Te.current, strategy: d, middlewares: f, border: en, arrowSize: Yt }).then((ht) => {
      ze(ht);
    });
  }, ne = (A) => {
    if (!A)
      return;
    const D = A, _ = { x: D.clientX, y: D.clientY };
    ee(_), Ae.current = _;
  }, Oe = (A) => {
    var D;
    if (!Et)
      return;
    const _ = A.target;
    _.isConnected && (!((D = mt.current) === null || D === void 0) && D.contains(_) || [document.querySelector(`[id='${s}']`), ...Jt].some((J) => J == null ? void 0 : J.contains(_)) || (Ct(!1), Mt(kt)));
  }, sn = pa(ke, 50, !0), ut = pa(_t, 50, !0), Tt = (A) => {
    ut.cancel(), sn(A);
  }, V = () => {
    sn.cancel(), ut();
  }, U = Me(() => {
    var A, D;
    const _ = (A = at == null ? void 0 : at.position) !== null && A !== void 0 ? A : ct;
    _ ? ee(_) : b ? Ae.current && ee(Ae.current) : nt != null && nt.isConnected && fa({ place: (D = at == null ? void 0 : at.place) !== null && D !== void 0 ? D : a, offset: l, elementReference: nt, tooltipReference: mt.current, tooltipArrowReference: Te.current, strategy: d, middlewares: f, border: en, arrowSize: Yt }).then((J) => {
      Zt.current && ze(J);
    });
  }, [Et, nt, W, et, a, at == null ? void 0 : at.place, l, d, ct, at == null ? void 0 : at.position, b, Yt]);
  $(() => {
    var A, D;
    const _ = new Set(Ne);
    Jt.forEach((X) => {
      I != null && I(X) || _.add({ current: X });
    });
    const J = document.querySelector(`[id='${s}']`);
    J && !(I != null && I(J)) && _.add({ current: J });
    const ht = () => {
      Ct(!1);
    }, p = ga(nt), E = ga(mt.current);
    gt.scroll && (window.addEventListener("scroll", ht), p == null || p.addEventListener("scroll", ht), E == null || E.addEventListener("scroll", ht));
    let C = null;
    gt.resize ? window.addEventListener("resize", ht) : nt && mt.current && (C = R0(nt, mt.current, U, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const k = (X) => {
      X.key === "Escape" && Ct(!1);
    };
    gt.escape && window.addEventListener("keydown", k), gt.clickOutsideAnchor && window.addEventListener("click", Oe);
    const L = [], q = (X) => !!(X != null && X.target && (nt != null && nt.contains(X.target))), H = (X) => {
      Et && q(X) || ke(X);
    }, j = (X) => {
      Et && q(X) && _t();
    }, xt = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], lt = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Ue).forEach(([X, yt]) => {
      yt && (xt.includes(X) ? L.push({ event: X, listener: Tt }) : lt.includes(X) && L.push({ event: X, listener: H }));
    }), Object.entries(pe).forEach(([X, yt]) => {
      yt && (xt.includes(X) ? L.push({ event: X, listener: V }) : lt.includes(X) && L.push({ event: X, listener: j }));
    }), b && L.push({ event: "pointermove", listener: ne });
    const dt = () => {
      Nt.current = !0;
    }, Pt = () => {
      Nt.current = !1, _t();
    }, ge = v && (pe.mouseout || pe.mouseleave);
    return ge && ((A = mt.current) === null || A === void 0 || A.addEventListener("mouseover", dt), (D = mt.current) === null || D === void 0 || D.addEventListener("mouseout", Pt)), L.forEach(({ event: X, listener: yt }) => {
      _.forEach((Gr) => {
        var Tn;
        (Tn = Gr.current) === null || Tn === void 0 || Tn.addEventListener(X, yt);
      });
    }), () => {
      var X, yt;
      gt.scroll && (window.removeEventListener("scroll", ht), p == null || p.removeEventListener("scroll", ht), E == null || E.removeEventListener("scroll", ht)), gt.resize ? window.removeEventListener("resize", ht) : C == null || C(), gt.clickOutsideAnchor && window.removeEventListener("click", Oe), gt.escape && window.removeEventListener("keydown", k), ge && ((X = mt.current) === null || X === void 0 || X.removeEventListener("mouseover", dt), (yt = mt.current) === null || yt === void 0 || yt.removeEventListener("mouseout", Pt)), L.forEach(({ event: Gr, listener: Tn }) => {
        _.forEach((Tc) => {
          var Xr;
          (Xr = Tc.current) === null || Xr === void 0 || Xr.removeEventListener(Gr, Tn);
        });
      });
    };
  }, [nt, U, jt, Ne, Jt, M, N, G, Qt, m, g]), $(() => {
    var A, D;
    let _ = (D = (A = at == null ? void 0 : at.anchorSelect) !== null && A !== void 0 ? A : i) !== null && D !== void 0 ? D : "";
    !_ && e && (_ = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`);
    const J = new MutationObserver((ht) => {
      const p = [], E = [];
      ht.forEach((C) => {
        if (C.type === "attributes" && C.attributeName === "data-tooltip-id" && (C.target.getAttribute("data-tooltip-id") === e ? p.push(C.target) : C.oldValue === e && E.push(C.target)), C.type === "childList") {
          if (nt) {
            const k = [...C.removedNodes].filter((L) => L.nodeType === 1);
            if (_)
              try {
                E.push(...k.filter((L) => L.matches(_))), E.push(...k.flatMap((L) => [...L.querySelectorAll(_)]));
              } catch {
              }
            k.some((L) => {
              var q;
              return !!(!((q = L == null ? void 0 : L.contains) === null || q === void 0) && q.call(L, nt)) && (Gt(!1), Ct(!1), de(null), Mt(kt), Mt(fe), !0);
            });
          }
          if (_)
            try {
              const k = [...C.addedNodes].filter((L) => L.nodeType === 1);
              p.push(...k.filter((L) => L.matches(_))), p.push(...k.flatMap((L) => [...L.querySelectorAll(_)]));
            } catch {
            }
        }
      }), (p.length || E.length) && Re((C) => [...C.filter((k) => !E.includes(k)), ...p]);
    });
    return J.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      J.disconnect();
    };
  }, [e, i, at == null ? void 0 : at.anchorSelect, nt]), $(() => {
    U();
  }, [U]), $(() => {
    if (!(Z != null && Z.current))
      return () => null;
    const A = new ResizeObserver(() => {
      setTimeout(() => U());
    });
    return A.observe(Z.current), () => {
      A.disconnect();
    };
  }, [W, Z == null ? void 0 : Z.current]), $(() => {
    var A;
    const D = document.querySelector(`[id='${s}']`), _ = [...Jt, D];
    nt && _.includes(nt) || de((A = Jt[0]) !== null && A !== void 0 ? A : D);
  }, [s, Jt, nt]), $(() => (wt && Ct(!0), () => {
    Mt(kt), Mt(fe);
  }), []), $(() => {
    var A;
    let D = (A = at == null ? void 0 : at.anchorSelect) !== null && A !== void 0 ? A : i;
    if (!D && e && (D = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`), D)
      try {
        const _ = Array.from(document.querySelectorAll(D));
        Re(_);
      } catch {
        Re([]);
      }
  }, [e, i, at == null ? void 0 : at.anchorSelect]), $(() => {
    kt.current && (Mt(kt), We(m));
  }, [m]);
  const At = ($t = at == null ? void 0 : at.content) !== null && $t !== void 0 ? $t : W, me = Et && Object.keys(Ft.tooltipStyles).length > 0;
  return kc(t, () => ({ open: (A) => {
    if (A != null && A.anchorSelect)
      try {
        document.querySelector(A.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${A.anchorSelect}" is not a valid CSS selector`);
      }
    Xt(A ?? null), A != null && A.delay ? We(A.delay) : Ct(!0);
  }, close: (A) => {
    A != null && A.delay ? te(A.delay) : Ct(!1);
  }, activeAnchor: nt, place: Ft.place, isOpen: !!(jt && !y && At && me) })), jt && !y && At ? Bt.createElement(h, { id: e, role: Ee, className: qo("react-tooltip", an.tooltip, go.tooltip, go[o], n, `react-tooltip__place-${Ft.place}`, an[me ? "show" : "closing"], me ? "react-tooltip__show" : "react-tooltip__closing", d === "fixed" && an.fixed, v && an.clickable), onTransitionEnd: (A) => {
    Mt(Se), Et || A.propertyName !== "opacity" || (Gt(!1), Xt(null), B == null || B());
  }, style: { ...et, ...Ft.tooltipStyles, opacity: nn !== void 0 && me ? nn : void 0 }, ref: mt }, At, Bt.createElement(h, { className: qo("react-tooltip-arrow", an.arrow, go.arrow, r, w && an.noArrow), style: { ...Ft.tooltipArrowStyles, background: xe ? `linear-gradient(to right bottom, transparent 50%, ${xe} 50%)` : void 0, "--rt-arrow-size": `${Yt}px` }, ref: Te })) : null;
}, U0 = ({ content: t }) => Bt.createElement("span", { dangerouslySetInnerHTML: { __html: t } }), z0 = Bt.forwardRef(({ id: t, anchorId: e, anchorSelect: n, content: r, html: o, render: s, className: i, classNameArrow: a, variant: l = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: f = null, events: h = ["hover"], openOnClick: m = !1, positionStrategy: g = "absolute", middlewares: b, delayShow: y = 0, delayHide: w = 0, float: v = !1, hidden: T = !1, noArrow: P = !1, clickable: O = !1, closeOnEsc: M = !1, closeOnScroll: N = !1, closeOnResize: G = !1, openEvents: z, closeEvents: et, globalCloseEvents: ct, imperativeModeOnly: ot = !1, style: B, position: I, isOpen: W, defaultIsOpen: Z = !1, disableStyleInjection: it = !1, border: wt, opacity: Vt, arrowColor: we, arrowSize: nt, setIsOpen: de, afterShow: en, afterHide: nn, disableTooltip: xe, role: Yt = "tooltip" }, Ee) => {
  const [$t, mt] = Y(r), [Te, kt] = Y(o), [fe, Se] = Y(c), [Ft, he] = Y(l), [Et, Ce] = Y(u), [jt, Gt] = Y(y), [at, Xt] = Y(w), [rn, Ae] = Y(v), [Ne, Pe] = Y(T), [Nt, Jt] = Y(d), [Re, Zt] = Y(h), [Qt, on] = Y(g), [Ue, pe] = Y(null), [gt, Ct] = Y(null), ze = rt(null), We = rt(it), { anchorRefs: te, activeAnchor: ke } = Ec(t), _t = (ut) => ut == null ? void 0 : ut.getAttributeNames().reduce((Tt, V) => {
    var U;
    return V.startsWith("data-tooltip-") && (Tt[V.replace(/^data-tooltip-/, "")] = (U = ut == null ? void 0 : ut.getAttribute(V)) !== null && U !== void 0 ? U : null), Tt;
  }, {}), ee = (ut) => {
    const Tt = { place: (V) => {
      var U;
      Se((U = V) !== null && U !== void 0 ? U : c);
    }, content: (V) => {
      mt(V ?? r);
    }, html: (V) => {
      kt(V ?? o);
    }, variant: (V) => {
      var U;
      he((U = V) !== null && U !== void 0 ? U : l);
    }, offset: (V) => {
      Ce(V === null ? u : Number(V));
    }, wrapper: (V) => {
      var U;
      Jt((U = V) !== null && U !== void 0 ? U : d);
    }, events: (V) => {
      const U = V == null ? void 0 : V.split(" ");
      Zt(U ?? h);
    }, "position-strategy": (V) => {
      var U;
      on((U = V) !== null && U !== void 0 ? U : g);
    }, "delay-show": (V) => {
      Gt(V === null ? y : Number(V));
    }, "delay-hide": (V) => {
      Xt(V === null ? w : Number(V));
    }, float: (V) => {
      Ae(V === null ? v : V === "true");
    }, hidden: (V) => {
      Pe(V === null ? T : V === "true");
    }, "class-name": (V) => {
      pe(V);
    } };
    Object.values(Tt).forEach((V) => V(null)), Object.entries(ut).forEach(([V, U]) => {
      var At;
      (At = Tt[V]) === null || At === void 0 || At.call(Tt, U);
    });
  };
  $(() => {
    mt(r);
  }, [r]), $(() => {
    kt(o);
  }, [o]), $(() => {
    Se(c);
  }, [c]), $(() => {
    he(l);
  }, [l]), $(() => {
    Ce(u);
  }, [u]), $(() => {
    Gt(y);
  }, [y]), $(() => {
    Xt(w);
  }, [w]), $(() => {
    Ae(v);
  }, [v]), $(() => {
    Pe(T);
  }, [T]), $(() => {
    on(g);
  }, [g]), $(() => {
    We.current !== it && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [it]), $(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: it === "core", disableBase: it } }));
  }, []), $(() => {
    var ut;
    const Tt = new Set(te);
    let V = n;
    if (!V && t && (V = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`), V)
      try {
        document.querySelectorAll(V).forEach((D) => {
          Tt.add({ current: D });
        });
      } catch {
        console.warn(`[react-tooltip] "${V}" is not a valid CSS selector`);
      }
    const U = document.querySelector(`[id='${e}']`);
    if (U && Tt.add({ current: U }), !Tt.size)
      return () => null;
    const At = (ut = gt ?? U) !== null && ut !== void 0 ? ut : ke.current, me = new MutationObserver((D) => {
      D.forEach((_) => {
        var J;
        if (!At || _.type !== "attributes" || !(!((J = _.attributeName) === null || J === void 0) && J.startsWith("data-tooltip-")))
          return;
        const ht = _t(At);
        ee(ht);
      });
    }), A = { attributes: !0, childList: !1, subtree: !1 };
    if (At) {
      const D = _t(At);
      ee(D), me.observe(At, A);
    }
    return () => {
      me.disconnect();
    };
  }, [te, ke, gt, e, n]), $(() => {
    B != null && B.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), wt && !ha("border", `${wt}`) && console.warn(`[react-tooltip] "${wt}" is not a valid \`border\`.`), B != null && B.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), Vt && !ha("opacity", `${Vt}`) && console.warn(`[react-tooltip] "${Vt}" is not a valid \`opacity\`.`);
  }, []);
  let ne = f;
  const Oe = rt(null);
  if (s) {
    const ut = s({ content: (gt == null ? void 0 : gt.getAttribute("data-tooltip-content")) || $t || null, activeAnchor: gt });
    ne = ut ? Bt.createElement("div", { ref: Oe, className: "react-tooltip-content-wrapper" }, ut) : null;
  } else
    $t && (ne = $t);
  Te && (ne = Bt.createElement(U0, { content: Te }));
  const sn = { forwardRef: Ee, id: t, anchorId: e, anchorSelect: n, className: qo(i, Ue), classNameArrow: a, content: ne, contentWrapperRef: Oe, place: fe, variant: Ft, offset: Et, wrapper: Nt, events: Re, openOnClick: m, positionStrategy: Qt, middlewares: b, delayShow: jt, delayHide: at, float: rn, hidden: Ne, noArrow: P, clickable: O, closeOnEsc: M, closeOnScroll: N, closeOnResize: G, openEvents: z, closeEvents: et, globalCloseEvents: ct, imperativeModeOnly: ot, style: B, position: I, isOpen: W, defaultIsOpen: Z, border: wt, opacity: Vt, arrowColor: we, arrowSize: nt, setIsOpen: de, afterShow: en, afterHide: nn, disableTooltip: xe, activeAnchor: gt, previousActiveAnchor: ze.current, setActiveAnchor: (ut) => {
    Ct((Tt) => (ut != null && ut.isSameNode(Tt) || (ze.current = Tt), ut));
  }, role: Yt };
  return Bt.createElement(N0, { ...sn });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (t) => {
  t.detail.disableCore || da({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), t.detail.disableBase || da({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const W0 = {
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  left: "left",
  right: "right",
  leftStart: "left-start",
  leftEnd: "left-end",
  rightStart: "right-start",
  rightEnd: "right-end"
};
function H0(t) {
  return W0[t];
}
function by({
  children: t,
  content: e,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  const s = Rr(), i = H0(r);
  return /* @__PURE__ */ Q(bn, { children: [
    /* @__PURE__ */ S(
      q0,
      {
        "data-tooltip-id": s,
        "data-tooltip-place": i,
        "data-tooltip-position-strategy": "fixed",
        underline: n,
        children: t
      }
    ),
    /* @__PURE__ */ S(
      K0,
      {
        id: s,
        place: i,
        opacity: 1,
        positionStrategy: "fixed",
        ...o,
        children: e
      }
    )
  ] });
}
const q0 = R.div`
  position: relative;
  display: inline-flex;
  ${(t) => t.underline ? "border-bottom: 1px dotted rgb(" + t.theme.cardBorder + ");" : ""}
  ${(t) => t.underline ? "cursor: pointer;" : ""}
`, K0 = R(z0)`
  background-color: ${(t) => t.theme.backgroundSecondary} !important;
  color: #ffffff !important;
  padding: 10px 15px !important;
  border-radius: 10px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 19px !important;
  min-width: 109px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14) !important;
  z-index: 99999 !important;
  --rt-opacity: 1 !important;
  opacity: 1 !important;

  --rt-transition-show-delay: 0.23s;
  --rt-transition-closing-delay: 0.23s;
`, wy = R.span`
  display: block;
  height: ${({ y: t }) => t ? `${t}rem` : "0"};
  width: ${({ x: t }) => t ? `${t}rem` : "0"};
`;
function xy({
  children: t,
  accept: e,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = Y([]);
  return $(() => {
    if (!(r != null && r.current))
      return;
    const a = () => {
      var c;
      const l = (c = r == null ? void 0 : r.current) == null ? void 0 : c.files;
      if (!l || l.length === 0)
        return i([]);
      i(Array.from(l).map((u) => u.name));
    };
    return r.current.addEventListener("change", a), () => {
      var l;
      return (l = r.current) == null ? void 0 : l.removeEventListener("change", a);
    };
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ Q(Y0, { ...o, children: [
    /* @__PURE__ */ S(wn, { children: s.length === 0 && t || s.join(", ") }),
    /* @__PURE__ */ S(X0, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ S(Sg, {}) }),
    /* @__PURE__ */ S(G0, { accept: e, multiple: n, ref: r })
  ] });
}
const Y0 = R(ba).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, G0 = R.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`, X0 = R($c).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Ey({
  children: t,
  open: e,
  setOpen: n,
  actions: r,
  root: o,
  showCloseIcon: s = !1
}) {
  return Lc.createPortal(
    /* @__PURE__ */ S($r, { children: e && /* @__PURE__ */ S(J0, { onClick: () => n(!1), children: /* @__PURE__ */ Q(Z0, { onClick: (i) => i.stopPropagation(), children: [
      s && /* @__PURE__ */ S(ey, { onClick: () => n(!1) }),
      /* @__PURE__ */ S(Q0, { children: t }),
      r && /* @__PURE__ */ S(ty, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const J0 = R(Un.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(19, 19, 19, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`, Z0 = R.div`
  position: relative;
  background-color: ${(t) => t.theme.surfaceSecondaryPopup};
  border: 1px solid ${(t) => t.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`, Q0 = R.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(t) => t.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`, ty = R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`, ey = R(wa)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  color: ${(t) => t.theme.tertiaryText};

  &:hover {
    color: ${(t) => t.theme.secondaryText};
  }

  &:active {
    color: ${(t) => t.theme.secondaryText};
    transform: scale(0.9);
  }
`;
export {
  my as ARCONNECT_DARK_THEME,
  py as ARCONNECT_LIGHT_THEME,
  $c as Button,
  ba as Card,
  ly as Checkbox,
  ru as ErrorMsg,
  xy as FileInput,
  vo as Icon,
  yo as IconWrapper,
  cy as Input,
  ou as InputElement,
  xa as InputWrapper,
  Ea as Label,
  dy as ListItem,
  ta as ListItemIcon,
  fy as ListItemImg,
  Mc as Loading,
  Ey as Modal,
  hy as Popover,
  gy as Provider,
  yy as Section,
  vy as Select,
  wy as Spacer,
  wn as Text,
  by as Tooltip,
  sy as useCheckbox,
  iy as useInput,
  ay as useModal,
  xg as useToasts
};
