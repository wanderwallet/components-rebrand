import * as F from "react";
import yt, { useState as oe, useCallback as Nt, useMemo as Ce, useEffect as te, createContext as Me, useContext as K, useLayoutEffect as rc, useRef as ie, forwardRef as oc, createElement as Ii, useId as pr, useInsertionEffect as ic, cloneElement as sc, Children as ac, isValidElement as cc } from "react";
import A, { keyframes as lc, ThemeProvider as uc } from "styled-components";
import dc from "react-dom";
function Cm(e) {
  const [t, n] = oe(e), [r, o] = oe("default");
  return {
    state: t,
    setState: n,
    setStatus: o,
    reset() {
      n(e), o("default");
    },
    bindings: {
      value: t,
      status: r,
      onChange(s) {
        n(s.target.value);
      }
    }
  };
}
function Sm(e = !1) {
  const [t, n] = oe(e);
  return {
    state: t,
    setState: n,
    reset: () => n(e),
    bindings: {
      checked: t,
      onChange: (r) => n(r)
    }
  };
}
function Am(e = !1) {
  const [t, n] = oe(e);
  return {
    isOpen: t,
    setOpen: n,
    bindings: {
      open: t,
      setOpen: n
    }
  };
}
var dt = {}, fc = {
  get exports() {
    return dt;
  },
  set exports(e) {
    dt = e;
  }
}, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function hc() {
  if (vo)
    return Je;
  vo = 1;
  var e = yt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var l, d = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (l in c)
      r.call(c, l) && !s.hasOwnProperty(l) && (d[l] = c[l]);
    if (a && a.defaultProps)
      for (l in c = a.defaultProps, c)
        d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: a, key: h, ref: p, props: d, _owner: o.current };
  }
  return Je.Fragment = n, Je.jsx = i, Je.jsxs = i, Je;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function pc() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = yt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function w(f) {
      if (f === null || typeof f != "object")
        return null;
      var v = m && f[m] || f[g];
      return typeof v == "function" ? v : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var v = arguments.length, C = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          C[R - 1] = arguments[R];
        b("error", f, C);
      }
    }
    function b(f, v, C) {
      {
        var R = x.ReactDebugCurrentFrame, L = R.getStackAddendum();
        L !== "" && (v += "%s", C = C.concat([L]));
        var _ = C.map(function(D) {
          return String(D);
        });
        _.unshift("Warning: " + v), Function.prototype.apply.call(console[f], console, _);
      }
    }
    var S = !1, V = !1, M = !1, W = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function G(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || J || f === o || f === u || f === l || W || f === p || S || V || M || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === i || f.$$typeof === a || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Z || f.getModuleId !== void 0));
    }
    function ne(f, v, C) {
      var R = f.displayName;
      if (R)
        return R;
      var L = v.displayName || v.name || "";
      return L !== "" ? C + "(" + L + ")" : C;
    }
    function fe(f) {
      return f.displayName || "Context";
    }
    function Y(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var v = f;
            return fe(v) + ".Consumer";
          case i:
            var C = f;
            return fe(C._context) + ".Provider";
          case c:
            return ne(f, f.render, "ForwardRef");
          case d:
            var R = f.displayName || null;
            return R !== null ? R : Y(f.type) || "Memo";
          case h: {
            var L = f, _ = L._payload, D = L._init;
            try {
              return Y(D(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, I = 0, re, be, Jr, Zr, Qr, eo, to;
    function no() {
    }
    no.__reactDisabledLog = !0;
    function Oa() {
      {
        if (I === 0) {
          re = console.log, be = console.info, Jr = console.warn, Zr = console.error, Qr = console.group, eo = console.groupCollapsed, to = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: no,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        I++;
      }
    }
    function Fa() {
      {
        if (I--, I === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, f, {
              value: re
            }),
            info: H({}, f, {
              value: be
            }),
            warn: H({}, f, {
              value: Jr
            }),
            error: H({}, f, {
              value: Zr
            }),
            group: H({}, f, {
              value: Qr
            }),
            groupCollapsed: H({}, f, {
              value: eo
            }),
            groupEnd: H({}, f, {
              value: to
            })
          });
        }
        I < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vn = x.ReactCurrentDispatcher, bn;
    function St(f, v, C) {
      {
        if (bn === void 0)
          try {
            throw Error();
          } catch (L) {
            var R = L.stack.trim().match(/\n( *(at )?)/);
            bn = R && R[1] || "";
          }
        return `
` + bn + f;
      }
    }
    var xn = !1, At;
    {
      var La = typeof WeakMap == "function" ? WeakMap : Map;
      At = new La();
    }
    function ro(f, v) {
      if (!f || xn)
        return "";
      {
        var C = At.get(f);
        if (C !== void 0)
          return C;
      }
      var R;
      xn = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = vn.current, vn.current = null, Oa();
      try {
        if (v) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (xe) {
              R = xe;
            }
            Reflect.construct(f, [], D);
          } else {
            try {
              D.call();
            } catch (xe) {
              R = xe;
            }
            f.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            R = xe;
          }
          f();
        }
      } catch (xe) {
        if (xe && R && typeof xe.stack == "string") {
          for (var k = xe.stack.split(`
`), Q = R.stack.split(`
`), N = k.length - 1, U = Q.length - 1; N >= 1 && U >= 0 && k[N] !== Q[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (k[N] !== Q[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || k[N] !== Q[U]) {
                    var ce = `
` + k[N].replace(" at new ", " at ");
                    return f.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", f.displayName)), typeof f == "function" && At.set(f, ce), ce;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        xn = !1, vn.current = _, Fa(), Error.prepareStackTrace = L;
      }
      var $e = f ? f.displayName || f.name : "", yo = $e ? St($e) : "";
      return typeof f == "function" && At.set(f, yo), yo;
    }
    function Ma(f, v, C) {
      return ro(f, !1);
    }
    function _a(f) {
      var v = f.prototype;
      return !!(v && v.isReactComponent);
    }
    function Pt(f, v, C) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return ro(f, _a(f));
      if (typeof f == "string")
        return St(f);
      switch (f) {
        case u:
          return St("Suspense");
        case l:
          return St("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return Ma(f.render);
          case d:
            return Pt(f.type, v, C);
          case h: {
            var R = f, L = R._payload, _ = R._init;
            try {
              return Pt(_(L), v, C);
            } catch {
            }
          }
        }
      return "";
    }
    var Rt = Object.prototype.hasOwnProperty, oo = {}, io = x.ReactDebugCurrentFrame;
    function kt(f) {
      if (f) {
        var v = f._owner, C = Pt(f.type, f._source, v ? v.type : null);
        io.setExtraStackFrame(C);
      } else
        io.setExtraStackFrame(null);
    }
    function Ba(f, v, C, R, L) {
      {
        var _ = Function.call.bind(Rt);
        for (var D in f)
          if (_(f, D)) {
            var k = void 0;
            try {
              if (typeof f[D] != "function") {
                var Q = Error((R || "React class") + ": " + C + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              k = f[D](v, D, R, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (kt(L), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", C, D, typeof k), kt(null)), k instanceof Error && !(k.message in oo) && (oo[k.message] = !0, kt(L), T("Failed %s type: %s", C, k.message), kt(null));
          }
      }
    }
    var Ia = Array.isArray;
    function wn(f) {
      return Ia(f);
    }
    function ja(f) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, C = v && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return C;
      }
    }
    function $a(f) {
      try {
        return so(f), !1;
      } catch {
        return !0;
      }
    }
    function so(f) {
      return "" + f;
    }
    function ao(f) {
      if ($a(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ja(f)), so(f);
    }
    var Xe = x.ReactCurrentOwner, Na = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, co, lo, Tn;
    Tn = {};
    function Ua(f) {
      if (Rt.call(f, "ref")) {
        var v = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function za(f) {
      if (Rt.call(f, "key")) {
        var v = Object.getOwnPropertyDescriptor(f, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Wa(f, v) {
      if (typeof f.ref == "string" && Xe.current && v && Xe.current.stateNode !== v) {
        var C = Y(Xe.current.type);
        Tn[C] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Xe.current.type), f.ref), Tn[C] = !0);
      }
    }
    function Ha(f, v) {
      {
        var C = function() {
          co || (co = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function qa(f, v) {
      {
        var C = function() {
          lo || (lo = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Ga = function(f, v, C, R, L, _, D) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: v,
        ref: C,
        props: D,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Ka(f, v, C, R, L) {
      {
        var _, D = {}, k = null, Q = null;
        C !== void 0 && (ao(C), k = "" + C), za(v) && (ao(v.key), k = "" + v.key), Ua(v) && (Q = v.ref, Wa(v, L));
        for (_ in v)
          Rt.call(v, _) && !Na.hasOwnProperty(_) && (D[_] = v[_]);
        if (f && f.defaultProps) {
          var N = f.defaultProps;
          for (_ in N)
            D[_] === void 0 && (D[_] = N[_]);
        }
        if (k || Q) {
          var U = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          k && Ha(D, U), Q && qa(D, U);
        }
        return Ga(f, k, Q, L, R, Xe.current, D);
      }
    }
    var En = x.ReactCurrentOwner, uo = x.ReactDebugCurrentFrame;
    function je(f) {
      if (f) {
        var v = f._owner, C = Pt(f.type, f._source, v ? v.type : null);
        uo.setExtraStackFrame(C);
      } else
        uo.setExtraStackFrame(null);
    }
    var Cn;
    Cn = !1;
    function Sn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function fo() {
      {
        if (En.current) {
          var f = Y(En.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ya(f) {
      {
        if (f !== void 0) {
          var v = f.fileName.replace(/^.*[\\\/]/, ""), C = f.lineNumber;
          return `

Check your code at ` + v + ":" + C + ".";
        }
        return "";
      }
    }
    var ho = {};
    function Xa(f) {
      {
        var v = fo();
        if (!v) {
          var C = typeof f == "string" ? f : f.displayName || f.name;
          C && (v = `

Check the top-level render call using <` + C + ">.");
        }
        return v;
      }
    }
    function po(f, v) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var C = Xa(v);
        if (ho[C])
          return;
        ho[C] = !0;
        var R = "";
        f && f._owner && f._owner !== En.current && (R = " It was passed a child from " + Y(f._owner.type) + "."), je(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, R), je(null);
      }
    }
    function mo(f, v) {
      {
        if (typeof f != "object")
          return;
        if (wn(f))
          for (var C = 0; C < f.length; C++) {
            var R = f[C];
            Sn(R) && po(R, v);
          }
        else if (Sn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var L = w(f);
          if (typeof L == "function" && L !== f.entries)
            for (var _ = L.call(f), D; !(D = _.next()).done; )
              Sn(D.value) && po(D.value, v);
        }
      }
    }
    function Ja(f) {
      {
        var v = f.type;
        if (v == null || typeof v == "string")
          return;
        var C;
        if (typeof v == "function")
          C = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === d))
          C = v.propTypes;
        else
          return;
        if (C) {
          var R = Y(v);
          Ba(C, f.props, "prop", R, f);
        } else if (v.PropTypes !== void 0 && !Cn) {
          Cn = !0;
          var L = Y(v);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Za(f) {
      {
        for (var v = Object.keys(f.props), C = 0; C < v.length; C++) {
          var R = v[C];
          if (R !== "children" && R !== "key") {
            je(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), je(null);
            break;
          }
        }
        f.ref !== null && (je(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function go(f, v, C, R, L, _) {
      {
        var D = G(f);
        if (!D) {
          var k = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Ya(L);
          Q ? k += Q : k += fo();
          var N;
          f === null ? N = "null" : wn(f) ? N = "array" : f !== void 0 && f.$$typeof === t ? (N = "<" + (Y(f.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var U = Ka(f, v, C, L, _);
        if (U == null)
          return U;
        if (D) {
          var ce = v.children;
          if (ce !== void 0)
            if (R)
              if (wn(ce)) {
                for (var $e = 0; $e < ce.length; $e++)
                  mo(ce[$e], f);
                Object.freeze && Object.freeze(ce);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mo(ce, f);
        }
        return f === r ? Za(U) : Ja(U), U;
      }
    }
    function Qa(f, v, C) {
      return go(f, v, C, !0);
    }
    function ec(f, v, C) {
      return go(f, v, C, !1);
    }
    var tc = ec, nc = Qa;
    Ze.Fragment = r, Ze.jsx = tc, Ze.jsxs = nc;
  }()), Ze;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hc() : e.exports = pc();
})(fc);
const ji = dt.Fragment, E = dt.jsx, j = dt.jsxs, mc = (e) => /* @__PURE__ */ j(
  yc,
  {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      /* @__PURE__ */ E(
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
      /* @__PURE__ */ E(
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
), gc = lc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, yc = A.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${gc} 0.9s linear infinite;
`, vc = A.button.attrs((e) => ({
  children: e.loading ? /* @__PURE__ */ E(mc, { style: { margin: ".18rem 0" } }) : e.children
}))`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(e) => e.fullWidth ? "100%" : "250px"};
  min-width: 100px;
  height: 46px;
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(e) => e.icon ? "4px" : "0"};
  background: ${(e) => e.theme.button.background[e.variant || "primary"].default};
  color: ${(e) => e.theme.button.text[e.variant || "primary"]};

  &:hover {
    background: ${(e) => e.theme.button.background[e.variant || "primary"].hover};
    border: ${(e) => e.theme.button.hoverBorder[e.variant || "primary"]};
  }

  &:active {
    background: ${(e) => e.theme.button.background[e.variant || "primary"].active};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(e) => e.theme.button.background[e.variant || "primary"].disabled};
    color: ${(e) => e.theme.button.text.disabled};
  }
`, $i = A.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(e) => e.theme.cardBorder});
  background-color: ${(e) => e.theme.cardBackground};
`, bc = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, xc = {
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
function vt({
  children: e,
  lineHeight: t,
  noMargin: n = !1,
  as: r = "p",
  size: o = "base",
  weight: s = "regular",
  variant: i = "primary",
  ...a
}) {
  return /* @__PURE__ */ E(
    wc,
    {
      as: r,
      $size: o,
      $weight: s,
      $variant: i,
      $lineHeight: t,
      $noMargin: n,
      ...a,
      children: e
    }
  );
}
const wc = A.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(e) => xc[e.$size]};
  font-weight: ${(e) => bc[e.$weight]};
  ${(e) => e.$lineHeight && `line-height: ${e.$lineHeight};`}
  color: ${(e) => e.$variant === "primary" ? e.theme.primaryText : e.$variant === "secondary" ? e.theme.secondaryText : e.theme.tertiaryText};
  ${(e) => e.$noMargin && "margin: 0;"}
`, Pm = ({
  checked: e,
  onChange: t,
  size: n = 24,
  label: r,
  labelProps: o
}) => {
  const s = Nt(() => {
    t && t(!e);
  }, [t, e]);
  return /* @__PURE__ */ j(Tc, { size: n, onClick: s, children: [
    /* @__PURE__ */ j(Ec, { children: [
      /* @__PURE__ */ E(
        Cc,
        {
          checked: e,
          "aria-checked": e,
          role: "checkbox"
        }
      ),
      /* @__PURE__ */ E(Sc, { size: n })
    ] }),
    r && // @ts-ignore
    /* @__PURE__ */ E(Ac, { ...o, size: n, children: r })
  ] });
}, Tc = A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(e) => Math.max(8, e.size ? e.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`, Ec = A.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
`, Cc = A.input.attrs({ type: "checkbox" })`
  visibility: hidden;

  &:checked + label {
    background-color: ${(e) => e.theme.theme};
    border-color: ${(e) => e.theme.theme};
  }

  &:checked + label:after {
    opacity: 1;
  }

  &:focus + label {
    box-shadow: 0 0 0 2px ${(e) => e.theme.theme}33;
  }
`, Sc = A.label`
  box-sizing: border-box;
  background-color: transparent;
  border: 2.25px solid ${(e) => e.theme.theme};
  border-radius: 50%;
  cursor: pointer;
  height: ${(e) => e.size}px;
  width: ${(e) => e.size}px;
  position: absolute;
  margin: auto;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${(e) => e.theme.theme};
    background-color: ${(e) => e.theme.theme}11;
  }

  &:after {
    border: 2.25px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: ${(e) => e.size / 4}px;
    left: ${(e) => e.size / 8}px;
    opacity: 0;
    position: absolute;
    top: ${(e) => e.size / 6}px;
    transform: rotate(-45deg);
    width: ${(e) => e.size / 2}px;
    transition: opacity 0.2s ease;
  }
`, Ac = A(vt).attrs({
  weight: "medium",
  noMargin: !0
})`
  font-size: ${(e) => Math.max(14, e.size ? e.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(e) => Math.max(e.size || 24, 24)}px;
`;
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ge.apply(this, arguments);
}
var Pc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8v4m0 4h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, Ni = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6 9 6 6 6-6"
    })
  }));
}, Rc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 18 6-6-6-6"
    })
  }));
}, kc = function(t) {
  return /* @__PURE__ */ j("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: [/* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M2.4201 12.7132c-.1362-.2157-.2043-.3235-.2424-.4898-.0286-.1249-.0286-.3219 0-.4468.0381-.1663.1062-.2741.2424-.4898C3.5455 9.5048 6.8954 5 12.0004 5s8.4549 4.5048 9.5803 6.2868c.1362.2157.2043.3235.2424.4898.0286.1249.0286.3219 0 .4468-.0381.1663-.1062.2741-.2424.4898C20.4553 14.4952 17.1054 19 12.0004 19s-8.4549-4.5048-9.5803-6.2868"
    }), /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.0004 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
    })]
  }));
}, Vc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.7429 5.0923A8.6 8.6 0 0 1 12.0004 5c5.105 0 8.4549 4.5048 9.5803 6.2868.1362.2157.2043.3235.2424.4899.0287.1249.0286.322 0 .4469-.0382.1663-.1067.2749-.2439.492a17.5 17.5 0 0 1-1.3627 1.8649M6.7243 6.715c-2.162 1.4667-3.6298 3.5044-4.3032 4.5703-.1368.2166-.2052.3249-.2434.4912-.0286.1249-.0286.3219 0 .4469.0381.1663.1062.2741.2424.4898C3.5455 14.4952 6.8954 19 12.0004 19c2.0584 0 3.8315-.7324 5.2884-1.7234M3.0004 3l18 18M9.8791 9.8787c-.5429.5429-.8787 1.2929-.8787 2.1213 0 1.6569 1.3432 3 3 3 .8284 0 1.5784-.3358 2.1213-.8787"
    })
  }));
}, Dc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 21-5.9999-6M17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    })
  }));
}, Oc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15 9-6 6m0-6 6 6m7-3c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, Fc = function(t) {
  return /* @__PURE__ */ E("svg", ge({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ E("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 6 6 18M6 6l12 12"
    })
  }));
};
const Lc = {
  small: "42px",
  normal: "52px"
};
function Rm({
  label: e,
  fullWidth: t,
  sizeVariant: n = "normal",
  status: r = "default",
  disabled: o,
  variant: s = "default",
  iconLeft: i,
  iconRight: a,
  errorMessage: c,
  special: u,
  inputContainerStyle: l,
  labelStyle: d,
  type: h = "text",
  onBlur: p,
  ...m
}) {
  const [g, w] = oe(!1), [x, T] = oe(null), [b, S] = oe(!1), V = Ce(() => h === "password" ? b ? "text" : "password" : h, [s, b, h]), M = Ce(
    () => ({
      fullWidth: t,
      sizeVariant: n,
      variant: s,
      status: r,
      disabled: o,
      iconLeft: i,
      iconRight: a,
      special: u,
      ...m
    }),
    [
      t,
      n,
      s,
      r,
      o,
      i,
      a,
      u,
      m
    ]
  ), W = (Y) => {
    const H = setTimeout(() => {
      w(!1), clearTimeout(H);
    }, 200);
    T(H), p == null || p(Y);
  }, J = (Y) => {
    var H;
    Y.preventDefault(), x && clearTimeout(x), w(!0), (H = m == null ? void 0 : m.onChange) == null || H.call(m, {
      target: { value: "" }
    });
  }, Z = () => a || (h === "password" ? /* @__PURE__ */ E(
    Wn,
    {
      as: b ? Vc : kc,
      onClick: () => S(!b)
    }
  ) : s === "dropdown" ? /* @__PURE__ */ E(Wn, { as: Ni, disabled: o }) : m.value && g ? /* @__PURE__ */ E(Ic, { onClick: J, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ E(Pc, { height: 20, width: 20, color: "#D22B1F" }) : null), ne = (() => i || (s === "search" ? /* @__PURE__ */ E(Bc, { disabled: o }) : null))(), fe = Z();
  return /* @__PURE__ */ j(ji, { children: [
    e && /* @__PURE__ */ E(zi, { style: d, children: e }),
    /* @__PURE__ */ j(
      Ui,
      {
        fullWidth: t,
        sizeVariant: n,
        status: r ?? "default",
        disabled: o,
        variant: s,
        special: u,
        style: l,
        children: [
          ne && /* @__PURE__ */ E(zn, { position: "left", children: ne }),
          /* @__PURE__ */ E(
            _c,
            {
              ...M,
              type: V,
              disabled: o,
              onFocus: () => w(!0),
              onBlur: W
            }
          ),
          fe && /* @__PURE__ */ E(zn, { position: "right", children: fe })
        ]
      }
    ),
    r === "error" && /* @__PURE__ */ E(Mc, { children: c })
  ] });
}
const Ui = A.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  height: ${(e) => Lc[e.sizeVariant ?? "normal"]};
  width: ${(e) => e.fullWidth ? "100%" : "345px"};
  padding: ${(e) => e.sizeVariant === "small" ? "12px" : "12px 14px"};
  background: ${(e) => e.theme.input.background[e.variant ?? "default"].default};
  border-radius: 10px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  overflow: hidden;
  color: rgb(${(e) => e.theme.cardBorder});
  transition: border-color 0.13s ease-in-out, background 0.13s ease-in-out;

  ${(e) => e.variant === "dropdown" ? `
      border: 1.5px solid  ${e.theme.input.border[e.variant || "default"].default};
      background: ${e.theme.input.background[e.variant || "default"].default};
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    ` : e.variant === "search" && e.special ? `border: 1.5px solid ${e.theme.input.border[e.variant || "default"].special}; background:  ${e.theme.input.background[e.variant || "default"].special};` : ""}

  ${(e) => e.status === "error" && `border: 1.5px solid ${e.theme.fail}`};

  &:hover {
    ${(e) => "border: 1.5px solid " + (e.status === "error" ? e.theme.fail : "")};
  }

  &:focus-within,
  &:active {
    border: 1.5px solid
      ${(e) => e.status === "error" ? e.theme.fail : e.theme.input.border[e.variant ?? "default"].focused};
  }

  ${(e) => e.disabled && `
    background: ${e.theme.input.background[e.variant ?? "default"].disabled};
    border: 1.5px solid ${e.theme.input.border[e.variant ?? "default"].disabled};
    color: #838383;
  `}
`, zi = A.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, Mc = A.p`
  color: ${(e) => e.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, _c = A.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: ${(e) => e.sizeVariant === "small" ? "16px" : "18px"};
  font-weight: 500;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }

  :-ms-input-placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }

  ::placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }
`, zn = A.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, Bc = A(Dc)`
  color: ${(e) => e.theme.input.icons[e.disabled ? "searchInactive" : "searchActive"]};
`, Wn = A(Oc)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme: e, disabled: t }) => t ? e.tertiaryText : e.secondaryText};
`, Ic = ({
  onClick: e,
  width: t = 20,
  height: n = 20,
  color: r = "#838383"
}) => /* @__PURE__ */ E(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    onClick: e,
    children: /* @__PURE__ */ E(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z",
        fill: r
      }
    )
  }
);
function jc({ dragControls: e }) {
  function t(n) {
    n.stopPropagation(), e.start(n);
  }
  return /* @__PURE__ */ E(
    $c,
    {
      onPointerDown: t,
      title: "Click & drag",
      children: /* @__PURE__ */ j(
        Nc,
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ E(
              "path",
              {
                d: "M4.25 8.75H19.25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ E(
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
const $c = A.div`
  display: flex;
  color: rgb(${(e) => e.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, Nc = A.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let Vt;
const Uc = new Uint8Array(16);
function zc() {
  if (!Vt && (Vt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Vt(Uc);
}
const X = [];
for (let e = 0; e < 256; ++e)
  X.push((e + 256).toString(16).slice(1));
function Wc(e, t = 0) {
  return X[e[t + 0]] + X[e[t + 1]] + X[e[t + 2]] + X[e[t + 3]] + "-" + X[e[t + 4]] + X[e[t + 5]] + "-" + X[e[t + 6]] + X[e[t + 7]] + "-" + X[e[t + 8]] + X[e[t + 9]] + "-" + X[e[t + 10]] + X[e[t + 11]] + X[e[t + 12]] + X[e[t + 13]] + X[e[t + 14]] + X[e[t + 15]];
}
const Hc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xo = {
  randomUUID: Hc
};
function qc(e, t, n) {
  if (xo.randomUUID && !t && !e)
    return xo.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || zc)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return Wc(r);
}
function Wi(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Gc } = Object.prototype, { getPrototypeOf: mr } = Object, tn = ((e) => (t) => {
  const n = Gc.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ve = (e) => (e = e.toLowerCase(), (t) => tn(t) === e), nn = (e) => (t) => typeof t === e, { isArray: Ye } = Array, ft = nn("undefined");
function Kc(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hi = ve("ArrayBuffer");
function Yc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hi(e.buffer), t;
}
const Xc = nn("string"), le = nn("function"), qi = nn("number"), rn = (e) => e !== null && typeof e == "object", Jc = (e) => e === !0 || e === !1, _t = (e) => {
  if (tn(e) !== "object")
    return !1;
  const t = mr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Zc = ve("Date"), Qc = ve("File"), el = ve("Blob"), tl = ve("FileList"), nl = (e) => rn(e) && le(e.pipe), rl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || le(e.append) && ((t = tn(e)) === "formdata" || // detect form-data instance
  t === "object" && le(e.toString) && e.toString() === "[object FormData]"));
}, ol = ve("URLSearchParams"), il = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ye(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Gi(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Ki = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Yi = (e) => !ft(e) && e !== Ki;
function Hn() {
  const { caseless: e } = Yi(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Gi(t, o) || o;
    _t(t[s]) && _t(r) ? t[s] = Hn(t[s], r) : _t(r) ? t[s] = Hn({}, r) : Ye(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && bt(arguments[r], n);
  return t;
}
const sl = (e, t, n, { allOwnKeys: r } = {}) => (bt(t, (o, s) => {
  n && le(o) ? e[s] = Wi(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), al = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cl = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ll = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && mr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ul = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, dl = (e) => {
  if (!e)
    return null;
  if (Ye(e))
    return e;
  let t = e.length;
  if (!qi(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, fl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mr(Uint8Array)), hl = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, pl = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ml = ve("HTMLFormElement"), gl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), wo = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), yl = ve("RegExp"), Xi = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  bt(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, vl = (e) => {
  Xi(e, (t, n) => {
    if (le(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (le(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, bl = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ye(e) ? r(e) : r(String(e).split(t)), n;
}, xl = () => {
}, wl = (e, t) => (e = +e, Number.isFinite(e) ? e : t), An = "abcdefghijklmnopqrstuvwxyz", To = "0123456789", Ji = {
  DIGIT: To,
  ALPHA: An,
  ALPHA_DIGIT: An + An.toUpperCase() + To
}, Tl = (e = 16, t = Ji.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function El(e) {
  return !!(e && le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Cl = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (rn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ye(r) ? [] : {};
        return bt(r, (i, a) => {
          const c = n(i, o + 1);
          !ft(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Sl = ve("AsyncFunction"), Al = (e) => e && (rn(e) || le(e)) && le(e.then) && le(e.catch), y = {
  isArray: Ye,
  isArrayBuffer: Hi,
  isBuffer: Kc,
  isFormData: rl,
  isArrayBufferView: Yc,
  isString: Xc,
  isNumber: qi,
  isBoolean: Jc,
  isObject: rn,
  isPlainObject: _t,
  isUndefined: ft,
  isDate: Zc,
  isFile: Qc,
  isBlob: el,
  isRegExp: yl,
  isFunction: le,
  isStream: nl,
  isURLSearchParams: ol,
  isTypedArray: fl,
  isFileList: tl,
  forEach: bt,
  merge: Hn,
  extend: sl,
  trim: il,
  stripBOM: al,
  inherits: cl,
  toFlatObject: ll,
  kindOf: tn,
  kindOfTest: ve,
  endsWith: ul,
  toArray: dl,
  forEachEntry: hl,
  matchAll: pl,
  isHTMLForm: ml,
  hasOwnProperty: wo,
  hasOwnProp: wo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xi,
  freezeMethods: vl,
  toObjectSet: bl,
  toCamelCase: gl,
  noop: xl,
  toFiniteNumber: wl,
  findKey: Gi,
  global: Ki,
  isContextDefined: Yi,
  ALPHABET: Ji,
  generateString: Tl,
  isSpecCompliantForm: El,
  toJSONObject: Cl,
  isAsyncFn: Sl,
  isThenable: Al
};
function O(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
y.inherits(O, Error, {
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
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Zi = O.prototype, Qi = {};
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
].forEach((e) => {
  Qi[e] = { value: e };
});
Object.defineProperties(O, Qi);
Object.defineProperty(Zi, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, o, s) => {
  const i = Object.create(Zi);
  return y.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), O.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Pl = null;
function qn(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function es(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Eo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = es(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Rl(e) {
  return y.isArray(e) && !e.some(qn);
}
const kl = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function on(e, t, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, w) {
    return !y.isUndefined(w[g]);
  });
  const r = n.metaTokens, o = n.visitor || l, s = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (y.isDate(m))
      return m.toISOString();
    if (!c && y.isBlob(m))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, g, w) {
    let x = m;
    if (m && !w && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && Rl(m) || (y.isFileList(m) || y.endsWith(g, "[]")) && (x = y.toArray(m)))
        return g = es(g), x.forEach(function(b, S) {
          !(y.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Eo([g], S, s) : i === null ? g : g + "[]",
            u(b)
          );
        }), !1;
    }
    return qn(m) ? !0 : (t.append(Eo(w, g, s), u(m)), !1);
  }
  const d = [], h = Object.assign(kl, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: qn
  });
  function p(m, g) {
    if (!y.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), y.forEach(m, function(x, T) {
        (!(y.isUndefined(x) || x === null) && o.call(
          t,
          x,
          y.isString(T) ? T.trim() : T,
          g,
          h
        )) === !0 && p(x, g ? g.concat(T) : [T]);
      }), d.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Co(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function gr(e, t) {
  this._pairs = [], e && on(e, this, t);
}
const ts = gr.prototype;
ts.append = function(t, n) {
  this._pairs.push([t, n]);
};
ts.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Co);
  } : Co;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Vl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ns(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Vl, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = y.isURLSearchParams(t) ? t.toString() : new gr(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Dl {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    y.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const So = Dl, rs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ol = typeof URLSearchParams < "u" ? URLSearchParams : gr, Fl = typeof FormData < "u" ? FormData : null, Ll = typeof Blob < "u" ? Blob : null, Ml = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ol,
    FormData: Fl,
    Blob: Ll
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, os = typeof window < "u" && typeof document < "u", _l = ((e) => os && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Bl = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: os,
  hasStandardBrowserEnv: _l,
  hasStandardBrowserWebWorkerEnv: Bl
}, Symbol.toStringTag, { value: "Module" })), pe = {
  ...Il,
  ...Ml
};
function jl(e, t) {
  return on(e, new pe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return pe.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $l(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Nl(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function is(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, c ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = Nl(o[i])), !a);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (r, o) => {
      t($l(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ul(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const yr = {
  transitional: rs,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(t);
    if (s && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return o ? JSON.stringify(is(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return jl(t, this.formSerializer).toString();
      if ((a = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return on(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Ul(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || yr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && y.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? O.from(a, O.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
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
    FormData: pe.classes.FormData,
    Blob: pe.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yr.headers[e] = {};
});
const vr = yr, zl = y.toObjectSet([
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
]), Wl = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && zl[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ao = Symbol("internals");
function Qe(e) {
  return e && String(e).trim().toLowerCase();
}
function Bt(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Bt) : String(e);
}
function Hl(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ql = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Pn(e, t, n, r, o) {
  if (y.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!y.isString(t)) {
    if (y.isString(r))
      return t.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(t);
  }
}
function Gl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Kl(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class sn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, c, u) {
      const l = Qe(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = y.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = Bt(a));
    }
    const i = (a, c) => y.forEach(a, (u, l) => s(u, l, c));
    return y.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : y.isString(t) && (t = t.trim()) && !ql(t) ? i(Wl(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Qe(t), t) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Hl(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Qe(t), t) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Pn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Qe(i), i) {
        const a = y.findKey(r, i);
        a && (!n || Pn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return y.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Pn(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = Bt(o), delete n[s];
        return;
      }
      const a = t ? Gl(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Bt(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && y.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Ao] = this[Ao] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Qe(i);
      r[a] || (Kl(o, i), r[a] = !0);
    }
    return y.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
sn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(sn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
y.freezeMethods(sn);
const Te = sn;
function Rn(e, t) {
  const n = this || vr, r = t || n, o = Te.from(r.headers);
  let s = r.data;
  return y.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function ss(e) {
  return !!(e && e.__CANCEL__);
}
function xt(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n), this.name = "CanceledError";
}
y.inherits(xt, O, {
  __CANCEL__: !0
});
function Yl(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new O(
    "Request failed with status code " + n.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Xl = pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), y.isString(r) && i.push("path=" + r), y.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function Jl(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zl(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function as(e, t) {
  return e && !Jl(t) ? Zl(e, t) : t;
}
const Ql = pe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
      const a = y.isString(i) ? o(i) : i;
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
function eu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function tu(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = r[s];
    i || (i = u), n[o] = c, r[o] = u;
    let d = s, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const p = l && u - l;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Po(e, t) {
  let n = 0;
  const r = tu(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, c = r(a), u = s <= i;
    n = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && u ? (i - s) / c : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const nu = typeof XMLHttpRequest < "u", ru = nu && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Te.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: a } = e, c;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let l;
    if (y.isFormData(o)) {
      if (pe.hasStandardBrowserEnv || pe.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((l = s.getContentType()) !== !1) {
        const [g, ...w] = l ? l.split(";").map((x) => x.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + w));
    }
    const h = as(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), ns(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function p() {
      if (!d)
        return;
      const g = Te.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: g,
        config: e,
        request: d
      };
      Yl(function(b) {
        n(b), u();
      }, function(b) {
        r(b), u();
      }, x), d = null;
    }
    if ("onloadend" in d ? d.onloadend = p : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, d.onabort = function() {
      d && (r(new O("Request aborted", O.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const x = e.transitional || rs;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new O(
        w,
        x.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        d
      )), d = null;
    }, pe.hasStandardBrowserEnv && (a && y.isFunction(a) && (a = a(e)), a || a !== !1 && Ql(h))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && Xl.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in d && y.forEach(s.toJSON(), function(w, x) {
      d.setRequestHeader(x, w);
    }), y.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), i && i !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Po(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Po(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (g) => {
      d && (r(!g || g.type ? new xt(null, e, d) : g), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const m = eu(h);
    if (m && pe.protocols.indexOf(m) === -1) {
      r(new O("Unsupported protocol " + m + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Gn = {
  http: Pl,
  xhr: ru
};
y.forEach(Gn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ro = (e) => `- ${e}`, ou = (e) => y.isFunction(e) || e === null || e === !1, cs = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !ou(n) && (r = Gn[(i = String(n)).toLowerCase()], r === void 0))
        throw new O(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Ro).join(`
`) : " " + Ro(s[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Gn
};
function kn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new xt(null, e);
}
function ko(e) {
  return kn(e), e.headers = Te.from(e.headers), e.data = Rn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cs.getAdapter(e.adapter || vr.adapter)(e).then(function(r) {
    return kn(e), r.data = Rn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Te.from(r.headers), r;
  }, function(r) {
    return ss(r) || (kn(e), r && r.response && (r.response.data = Rn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Te.from(r.response.headers))), Promise.reject(r);
  });
}
const Vo = (e) => e instanceof Te ? e.toJSON() : e;
function qe(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d) {
    return y.isPlainObject(u) && y.isPlainObject(l) ? y.merge.call({ caseless: d }, u, l) : y.isPlainObject(l) ? y.merge({}, l) : y.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d) {
    if (y.isUndefined(l)) {
      if (!y.isUndefined(u))
        return r(void 0, u, d);
    } else
      return r(u, l, d);
  }
  function s(u, l) {
    if (!y.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (y.isUndefined(l)) {
      if (!y.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, l);
  }
  function a(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const c = {
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
    headers: (u, l) => o(Vo(u), Vo(l), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = c[l] || o, h = d(e[l], t[l], l);
    y.isUndefined(h) && d !== a || (n[l] = h);
  }), n;
}
const ls = "1.6.7", br = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  br[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Do = {};
br.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + ls + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new O(
        o(i, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return n && !Do[i] && (Do[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function iu(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new O("option " + s + " must be " + c, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const Kn = {
  assertOptions: iu,
  validators: br
}, Se = Kn.validators;
class Ut {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new So(),
      response: new So()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
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
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = qe(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Kn.assertOptions(r, {
      silentJSONParsing: Se.transitional(Se.boolean),
      forcedJSONParsing: Se.transitional(Se.boolean),
      clarifyTimeoutError: Se.transitional(Se.boolean)
    }, !1), o != null && (y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Kn.assertOptions(o, {
      encode: Se.function,
      serialize: Se.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && y.merge(
      s.common,
      s[n.method]
    );
    s && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = Te.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let l, d = 0, h;
    if (!c) {
      const m = [ko.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), h = m.length, l = Promise.resolve(n); d < h; )
        l = l.then(m[d++], m[d++]);
      return l;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const m = a[d++], g = a[d++];
      try {
        p = m(p);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      l = ko.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = u.length; d < h; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = qe(this.defaults, t);
    const n = as(t.baseURL, t.url);
    return ns(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(t) {
  Ut.prototype[t] = function(n, r) {
    return this.request(qe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(qe(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Ut.prototype[t] = n(), Ut.prototype[t + "Form"] = n(!0);
});
const It = Ut;
class xr {
  constructor(t) {
    if (typeof t != "function")
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
    }, t(function(s, i, a) {
      r.reason || (r.reason = new xt(s, i, a), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new xr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const su = xr;
function au(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function cu(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Yn = {
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
Object.entries(Yn).forEach(([e, t]) => {
  Yn[t] = e;
});
const lu = Yn;
function us(e) {
  const t = new It(e), n = Wi(It.prototype.request, t);
  return y.extend(n, It.prototype, t, { allOwnKeys: !0 }), y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return us(qe(e, o));
  }, n;
}
const z = us(vr);
z.Axios = It;
z.CanceledError = xt;
z.CancelToken = su;
z.isCancel = ss;
z.VERSION = ls;
z.toFormData = on;
z.AxiosError = O;
z.Cancel = z.CanceledError;
z.all = function(t) {
  return Promise.all(t);
};
z.spread = au;
z.isAxiosError = cu;
z.mergeConfig = qe;
z.AxiosHeaders = Te;
z.formToJSON = (e) => is(y.isHTMLForm(e) ? new FormData(e) : e);
z.getAdapter = cs.getAdapter;
z.HttpStatusCode = lu;
z.default = z;
const uu = z;
function du({
  children: e,
  img: t,
  outline: n,
  hideSquircle: r = !1,
  ...o
}) {
  const [s, i] = oe(), a = Ce(() => qc(), [t]);
  return te(() => {
    (async () => {
      if (!t || r)
        return i(t);
      try {
        const d = (await uu.get(t, { responseType: "blob" })).data, h = new FileReader();
        h.onloadend = () => {
          const p = h.result;
          typeof p == "string" && i(p);
        }, h.readAsDataURL(d);
      } catch (l) {
        console.error("Error loading image:", l), i(void 0);
      }
    })();
  }, [t]), /* @__PURE__ */ j(fu, { ...o, children: [
    !r && /* @__PURE__ */ j(
      hu,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s && /* @__PURE__ */ E("defs", { children: /* @__PURE__ */ E(
            "pattern",
            {
              id: a,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ E(
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
          /* @__PURE__ */ E(
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
    e
  ] });
}
const fu = A.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(e) => e.theme.theme});
`, hu = A.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function km({
  children: e,
  small: t = !1,
  active: n,
  height: r,
  title: o,
  titleStyle: s,
  subtitle: i,
  subtitleStyle: a,
  subtitleExtra: c,
  subtitleExtraStyle: u,
  img: l,
  icon: d,
  leftIcon: h,
  rightIcon: p,
  dragControls: m,
  showArrow: g = !1,
  squircleSize: w = t ? 32 : 48,
  hideSquircle: x = !1,
  ...T
}) {
  return /* @__PURE__ */ j(pu, { small: t, active: n, height: r, ...T, children: [
    /* @__PURE__ */ j(mu, { children: [
      !x || l ? /* @__PURE__ */ E(Oo, { small: t, img: l, squircleSize: w, children: /* @__PURE__ */ E(Fo, { children: h || d || e }) }) : h || d || e,
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ E(gu, { small: t, style: s, children: o }),
        i && /* @__PURE__ */ E(yu, { small: t, style: a, children: i })
      ] })
    ] }),
    /* @__PURE__ */ j(xu, { children: [
      c && /* @__PURE__ */ E(vu, { small: t, style: u, children: c }),
      p && (x ? p : /* @__PURE__ */ E(Oo, { small: t, squircleSize: w, children: /* @__PURE__ */ E(Fo, { children: p }) })),
      !m && g && /* @__PURE__ */ E(bu, {}),
      m && /* @__PURE__ */ E(jc, { dragControls: m })
    ] })
  ] });
}
const pu = A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: 8px;
  height: ${(e) => e.height ? `${e.height}px` : e.small ? "36px" : "48px"};
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(e) => e.active ? e.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(e) => e.theme.listItem.hover};
  }
`, mu = A.div`
  display: flex;
  align-items: center;
  gap: 12px;
`, Oo = A(du)`
  position: relative;
  flex-shrink: 0;
  width: ${(e) => e.squircleSize}px;
  height: ${(e) => e.squircleSize}px;
  color: ${(e) => e.theme.theme};
`, gu = A(vt).attrs({
  noMargin: !0,
  weight: "semibold"
})`
  font-size: ${(e) => e.small ? "16px" : "18px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`, yu = A(vt).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "12px" : "14px"};
`, vu = A(vt).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "14px" : "16px"};
`, bu = A(Rc)`
  color: ${(e) => e.theme.listItem.icon};
  width: 24px;
  height: 24px;
`, Fo = A.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, Vm = A.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`, xu = A.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
function nt(e) {
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
  }[e];
}
function wu(e) {
  let t = "";
  return e.startsWith("top") ? t += "bottom" : e.startsWith("bottom") ? t += "top" : e.startsWith("right") ? t += "left" : t += "right", t += `: -15px;
`, e.startsWith("top") || e.startsWith("bottom") ? e.includes("Start") ? t += "left: 15px;" : e.includes("End") ? t += "right: 15px;" : (t += `left: 50%;
`, t += "transform: translate(-50%, 0);") : e.includes("Start") ? t += "top: 15px;" : e.includes("End") ? t += "bottom: 15px;" : (t += `top: 50%;
`, t += "transform: translate(0, -50%);"), t;
}
const wr = Me({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), an = Me({});
function Tu() {
  return K(an).visualElement;
}
const wt = Me(null), _e = typeof document < "u", ot = _e ? rc : te, ds = Me({ strict: !1 });
function Eu(e, t, n, r) {
  const o = Tu(), s = K(ds), i = K(wt), a = K(wr).reducedMotion, c = ie();
  r = r || s.renderer, !c.current && r && (c.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = c.current;
  return ot(() => {
    u && u.render();
  }), ot(() => {
    u && u.animationState && u.animationState.animateChanges();
  }), ot(() => () => u && u.notify("Unmount"), []), u;
}
function Ue(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Cu(e, t, n) {
  return Nt(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ue(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ht(e) {
  return typeof e == "string" || Array.isArray(e);
}
function cn(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Su = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function ln(e) {
  return cn(e.animate) || Su.some((t) => ht(e[t]));
}
function fs(e) {
  return !!(ln(e) || e.variants);
}
function Au(e, t) {
  if (ln(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ht(n) ? n : void 0,
      animate: ht(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Pu(e) {
  const { initial: t, animate: n } = Au(e, K(an));
  return Ce(() => ({ initial: t, animate: n }), [Lo(t), Lo(n)]);
}
function Lo(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const we = (e) => ({
  isEnabled: (t) => e.some((n) => !!t[n])
}), pt = {
  measureLayout: we(["layout", "layoutId", "drag"]),
  animation: we([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: we(["exit"]),
  drag: we(["drag", "dragControls"]),
  focus: we(["whileFocus"]),
  hover: we(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: we(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: we([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: we([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function Ru(e) {
  for (const t in e)
    t === "projectionNodeConstructor" ? pt.projectionNodeConstructor = e[t] : pt[t].Component = e[t];
}
function un(e) {
  const t = ie(null);
  return t.current === null && (t.current = e()), t.current;
}
const it = {
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
let ku = 1;
function Vu() {
  return un(() => {
    if (it.hasEverUpdated)
      return ku++;
  });
}
const Tr = Me({});
class Du extends yt.Component {
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */
  getSnapshotBeforeUpdate() {
    const { visualElement: t, props: n } = this.props;
    return t && t.setProps(n), null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
const hs = Me({}), Ou = Symbol.for("motionComponentSymbol");
function Fu({ preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  e && Ru(e);
  function i(c, u) {
    const l = {
      ...K(wr),
      ...c,
      layoutId: Lu(c)
    }, { isStatic: d } = l;
    let h = null;
    const p = Pu(c), m = d ? void 0 : Vu(), g = o(c, d);
    if (!d && _e) {
      p.visualElement = Eu(s, g, l, t);
      const w = K(ds).strict, x = K(hs);
      p.visualElement && (h = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        l,
        w,
        e,
        m,
        n || pt.projectionNodeConstructor,
        x
      ));
    }
    return F.createElement(
      Du,
      { visualElement: p.visualElement, props: l },
      h,
      F.createElement(an.Provider, { value: p }, r(s, c, m, Cu(g, p.visualElement, u), g, d, p.visualElement))
    );
  }
  const a = oc(i);
  return a[Ou] = s, a;
}
function Lu({ layoutId: e }) {
  const t = K(Tr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Mu(e) {
  function t(r, o = {}) {
    return Fu(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const _u = [
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
function Er(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(_u.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const zt = {};
function Bu(e) {
  Object.assign(zt, e);
}
const Wt = [
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
], Be = new Set(Wt);
function ps(e, { layout: t, layoutId: n }) {
  return Be.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!zt[e] || e === "opacity");
}
const ye = (e) => !!(e != null && e.getVelocity), Iu = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ju = (e, t) => Wt.indexOf(e) - Wt.indexOf(t);
function $u({ transform: e, transformKeys: t }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  t.sort(ju);
  for (const a of t)
    i += `${Iu[a] || a}(${e[a]}) `;
  return n && !e.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(e, o ? "" : i) : r && o && (i = "none"), i;
}
function ms(e) {
  return e.startsWith("--");
}
const Nu = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ge = (e, t, n) => Math.min(Math.max(n, e), t), Ie = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, st = {
  ...Ie,
  transform: (e) => Ge(0, 1, e)
}, Dt = {
  ...Ie,
  default: 1
}, at = (e) => Math.round(e * 1e5) / 1e5, mt = /(-)?([\d]*\.?[\d])+/g, Xn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Uu = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Tt(e) {
  return typeof e == "string";
}
const Et = (e) => ({
  test: (t) => Tt(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ae = Et("deg"), me = Et("%"), P = Et("px"), zu = Et("vh"), Wu = Et("vw"), Mo = {
  ...me,
  parse: (e) => me.parse(e) / 100,
  transform: (e) => me.transform(e * 100)
}, _o = {
  ...Ie,
  transform: Math.round
}, gs = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  size: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Transform props
  rotate: Ae,
  rotateX: Ae,
  rotateY: Ae,
  rotateZ: Ae,
  scale: Dt,
  scaleX: Dt,
  scaleY: Dt,
  scaleZ: Dt,
  skew: Ae,
  skewX: Ae,
  skewY: Ae,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: st,
  originX: Mo,
  originY: Mo,
  originZ: P,
  // Misc
  zIndex: _o,
  // SVG
  fillOpacity: st,
  strokeOpacity: st,
  numOctaves: _o
};
function Cr(e, t, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: c } = e;
  a.length = 0;
  let u = !1, l = !1, d = !0;
  for (const h in t) {
    const p = t[h];
    if (ms(h)) {
      s[h] = p;
      continue;
    }
    const m = gs[h], g = Nu(p, m);
    if (Be.has(h)) {
      if (u = !0, i[h] = g, a.push(h), !d)
        continue;
      p !== (m.default || 0) && (d = !1);
    } else
      h.startsWith("origin") ? (l = !0, c[h] = g) : o[h] = g;
  }
  if (t.transform || (u || r ? o.transform = $u(e, n, d, r) : o.transform && (o.transform = "none")), l) {
    const { originX: h = "50%", originY: p = "50%", originZ: m = 0 } = c;
    o.transformOrigin = `${h} ${p} ${m}`;
  }
}
const Sr = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function ys(e, t, n) {
  for (const r in t)
    !ye(t[r]) && !ps(r, n) && (e[r] = t[r]);
}
function Hu({ transformTemplate: e }, t, n) {
  return Ce(() => {
    const r = Sr();
    return Cr(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function qu(e, t, n) {
  const r = e.style || {}, o = {};
  return ys(o, r, e), Object.assign(o, Hu(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Gu(e, t, n) {
  const r = {}, o = qu(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Ku = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Yu = ["whileTap", "onTap", "onTapStart", "onTapCancel"], Xu = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Ju = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], Zu = /* @__PURE__ */ new Set([
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
  ...Ju,
  ...Yu,
  ...Ku,
  ...Xu
]);
function Ht(e) {
  return Zu.has(e);
}
let vs = (e) => !Ht(e);
function Qu(e) {
  e && (vs = (t) => t.startsWith("on") ? !Ht(t) : e(t));
}
try {
  Qu(require("@emotion/is-prop-valid").default);
} catch {
}
function ed(e, t, n) {
  const r = {};
  for (const o in e)
    (vs(o) || n === !0 && Ht(o) || !t && !Ht(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Bo(e, t, n) {
  return typeof e == "string" ? e : P.transform(t + n * e);
}
function td(e, t, n) {
  const r = Bo(t, e.x, e.width), o = Bo(n, e.y, e.height);
  return `${r} ${o}`;
}
const nd = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, rd = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function od(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? nd : rd;
  e[s.offset] = P.transform(-r);
  const i = P.transform(t), a = P.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Ar(e, {
  attrX: t,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, l, d) {
  if (Cr(e, c, u, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: m } = e;
  h.transform && (m && (p.transform = h.transform), delete h.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = td(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), s !== void 0 && od(h, s, i, a, !1);
}
const bs = () => ({
  ...Sr(),
  attrs: {}
}), Pr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function id(e, t, n, r) {
  const o = Ce(() => {
    const s = bs();
    return Ar(s, t, { enableHardwareAcceleration: !1 }, Pr(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ys(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function sd(e = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const u = (Er(n) ? id : Gu)(r, i, a, n), d = {
      ...ed(r, typeof n == "string", e),
      ...u,
      ref: s
    };
    return o && (d["data-projection-id"] = o), Ii(n, d);
  };
}
const Rr = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function xs(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const ws = /* @__PURE__ */ new Set([
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
function Ts(e, t, n, r) {
  xs(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(ws.has(o) ? o : Rr(o), t.attrs[o]);
}
function kr(e) {
  const { style: t } = e, n = {};
  for (const r in t)
    (ye(t[r]) || ps(r, e)) && (n[r] = t[r]);
  return n;
}
function Es(e) {
  const t = kr(e);
  for (const n in e)
    if (ye(e[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function Vr(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
const qt = (e) => Array.isArray(e), ad = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), cd = (e) => qt(e) ? e[e.length - 1] || 0 : e;
function jt(e) {
  const t = ye(e) ? e.get() : e;
  return ad(t) ? t.toValue() : t;
}
function ld({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
  const i = {
    latestValues: ud(r, o, s, e),
    renderState: t()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const Cs = (e) => (t, n) => {
  const r = K(an), o = K(wt), s = () => ld(e, t, r, o);
  return n ? s() : un(s);
};
function ud(e, t, n, r) {
  const o = {}, s = r(e);
  for (const h in s)
    o[h] = jt(s[h]);
  let { initial: i, animate: a } = e;
  const c = ln(e), u = fs(e);
  t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || i === !1;
  const d = l ? a : i;
  return d && typeof d != "boolean" && !cn(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Vr(e, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: w, ...x } = m;
    for (const T in x) {
      let b = x[T];
      if (Array.isArray(b)) {
        const S = l ? b.length - 1 : 0;
        b = b[S];
      }
      b !== null && (o[T] = b);
    }
    for (const T in g)
      o[T] = g[T];
  }), o;
}
const dd = {
  useVisualState: Cs({
    scrapeMotionValuesFromProps: Es,
    createRenderState: bs,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      try {
        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Ar(n, r, { enableHardwareAcceleration: !1 }, Pr(t.tagName), e.transformTemplate), Ts(t, n);
    }
  })
}, fd = {
  useVisualState: Cs({
    scrapeMotionValuesFromProps: kr,
    createRenderState: Sr
  })
};
function hd(e, { forwardMotionProps: t = !1 }, n, r, o) {
  return {
    ...Er(e) ? dd : fd,
    preloadedFeatures: n,
    useRender: sd(t),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e
  };
}
var B;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(B || (B = {}));
function dn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Jn(e, t, n, r) {
  te(() => {
    const o = e.current;
    if (n && o)
      return dn(o, t, n, r);
  }, [e, t, n, r]);
}
function pd({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t, r = () => {
    n && n.setActive(B.Focus, !0);
  }, o = () => {
    n && n.setActive(B.Focus, !1);
  };
  Jn(t, "focus", e ? r : void 0), Jn(t, "blur", e ? o : void 0);
}
function Ss(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function As(e) {
  return !!e.touches;
}
function md(e) {
  return (t) => {
    const n = t instanceof MouseEvent;
    (!n || n && t.button === 0) && e(t);
  };
}
const gd = { pageX: 0, pageY: 0 };
function yd(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || gd;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function vd(e, t = "page") {
  return {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function Dr(e, t = "page") {
  return {
    point: As(e) ? yd(e, t) : vd(e, t)
  };
}
const Ps = (e, t = !1) => {
  const n = (r) => e(r, Dr(r));
  return t ? md(n) : n;
}, bd = () => _e && window.onpointerdown === null, xd = () => _e && window.ontouchstart === null, wd = () => _e && window.onmousedown === null, Td = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Ed = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function Rs(e) {
  return bd() ? e : xd() ? Ed[e] : wd() ? Td[e] : e;
}
function He(e, t, n, r) {
  return dn(e, Rs(t), Ps(n, t === "pointerdown"), r);
}
function Gt(e, t, n, r) {
  return Jn(e, Rs(t), n && Ps(n, t === "pointerdown"), r);
}
function ks(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Io = ks("dragHorizontal"), jo = ks("dragVertical");
function Vs(e) {
  let t = !1;
  if (e === "y")
    t = jo();
  else if (e === "x")
    t = Io();
  else {
    const n = Io(), r = jo();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Ds() {
  const e = Vs(!0);
  return e ? (e(), !1) : !0;
}
function $o(e, t, n) {
  return (r, o) => {
    !Ss(r) || Ds() || (e.animationState && e.animationState.setActive(B.Hover, t), n && n(r, o));
  };
}
function Cd({ onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r }) {
  Gt(r, "pointerenter", e || n ? $o(r, !0, e) : void 0, { passive: !e }), Gt(r, "pointerleave", t || n ? $o(r, !1, t) : void 0, { passive: !t });
}
const Os = (e, t) => t ? e === t ? !0 : Os(e, t.parentElement) : !1;
function Or(e) {
  return te(() => () => e(), []);
}
const Sd = (e, t) => (n) => t(e(n)), fn = (...e) => e.reduce(Sd);
function Ad({ onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = e || t || n || r, i = ie(!1), a = ie(null), c = {
    passive: !(t || e || n || p)
  };
  function u() {
    a.current && a.current(), a.current = null;
  }
  function l() {
    return u(), i.current = !1, o.animationState && o.animationState.setActive(B.Tap, !1), !Ds();
  }
  function d(m, g) {
    l() && (Os(o.current, m.target) ? e && e(m, g) : n && n(m, g));
  }
  function h(m, g) {
    l() && n && n(m, g);
  }
  function p(m, g) {
    u(), !i.current && (i.current = !0, a.current = fn(He(window, "pointerup", d, c), He(window, "pointercancel", h, c)), o.animationState && o.animationState.setActive(B.Tap, !0), t && t(m, g));
  }
  Gt(o, "pointerdown", s ? p : void 0, c), Or(u);
}
const No = "production", Fr = typeof process > "u" || process.env === void 0 ? No : process.env.NODE_ENV || No, Uo = /* @__PURE__ */ new Set();
function Lr(e, t, n) {
  e || Uo.has(t) || (console.warn(t), n && console.warn(n), Uo.add(t));
}
const Zn = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Pd = (e) => {
  const t = Zn.get(e.target);
  t && t(e);
}, Rd = (e) => {
  e.forEach(Pd);
};
function kd({ root: e, ...t }) {
  const n = e || document;
  Vn.has(n) || Vn.set(n, {});
  const r = Vn.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Rd, { root: e, ...t })), r[o];
}
function Vd(e, t, n) {
  const r = kd(t);
  return Zn.set(e, n), r.observe(e), () => {
    Zn.delete(e), r.unobserve(e);
  };
}
function Dd({ visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = ie({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(t || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? Ld : Fd)(i, s.current, e, o);
}
const Od = {
  some: 0,
  all: 1
};
function Fd(e, t, n, { root: r, margin: o, amount: s = "some", once: i }) {
  te(() => {
    if (!e || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Od[s]
    }, c = (u) => {
      const { isIntersecting: l } = u;
      if (t.isInView === l || (t.isInView = l, i && !l && t.hasEnteredView))
        return;
      l && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(B.InView, l);
      const d = n.getProps(), h = l ? d.onViewportEnter : d.onViewportLeave;
      h && h(u);
    };
    return Vd(n.current, a, c);
  }, [e, r, o, s]);
}
function Ld(e, t, n, { fallback: r = !0 }) {
  te(() => {
    !e || !r || (Fr !== "production" && Lr(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      t.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(B.InView, !0);
    }));
  }, [e]);
}
const Re = (e) => (t) => (e(t), null), Md = {
  inView: Re(Dd),
  tap: Re(Ad),
  focus: Re(pd),
  hover: Re(Cd)
};
function Fs() {
  const e = K(wt);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = pr();
  return te(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function Ls(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const _d = (e) => /^\-?\d*\.?\d+$/.test(e), Bd = (e) => /^0[^.\s]+$/.test(e), Ee = {
  delta: 0,
  timestamp: 0
}, Ms = 1 / 60 * 1e3, Id = typeof performance < "u" ? () => performance.now() : () => Date.now(), _s = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(Id()), Ms);
function jd(e) {
  let t = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, l = !1) => {
      const d = l && o, h = d ? t : n;
      return u && i.add(c), h.indexOf(c) === -1 && (h.push(c), d && o && (r = t.length)), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      const u = n.indexOf(c);
      u !== -1 && n.splice(u, 1), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (o) {
        s = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
        for (let u = 0; u < r; u++) {
          const l = t[u];
          l(c), i.has(l) && (a.schedule(l), e());
        }
      o = !1, s && (s = !1, a.process(c));
    }
  };
  return a;
}
const $d = 40;
let Qn = !0, gt = !1, er = !1;
const Ct = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], hn = Ct.reduce((e, t) => (e[t] = jd(() => gt = !0), e), {}), se = Ct.reduce((e, t) => {
  const n = hn[t];
  return e[t] = (r, o = !1, s = !1) => (gt || Ud(), n.schedule(r, o, s)), e;
}, {}), ke = Ct.reduce((e, t) => (e[t] = hn[t].cancel, e), {}), Dn = Ct.reduce((e, t) => (e[t] = () => hn[t].process(Ee), e), {}), Nd = (e) => hn[e].process(Ee), Bs = (e) => {
  gt = !1, Ee.delta = Qn ? Ms : Math.max(Math.min(e - Ee.timestamp, $d), 1), Ee.timestamp = e, er = !0, Ct.forEach(Nd), er = !1, gt && (Qn = !1, _s(Bs));
}, Ud = () => {
  gt = !0, Qn = !0, er || _s(Bs);
};
function Mr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function _r(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Br {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mr(this.subscriptions, t), () => _r(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Ir(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const zd = (e) => !isNaN(parseFloat(e));
class Wd {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: i } = Ee;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, se.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => se.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = zd(this.current), this.owner = n.owner;
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
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Br()), this.events[t].add(n);
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t) {
    this.passiveEffect = t;
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
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
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
      Ir(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.stopAnimation = t(n), this.events.animationStart && this.events.animationStart.notify();
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
function Ke(e, t) {
  return new Wd(e, t);
}
const jr = (e, t) => (n) => !!(Tt(n) && Uu.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Is = (e, t, n) => (r) => {
  if (!Tt(r))
    return r;
  const [o, s, i, a] = r.match(mt);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Hd = (e) => Ge(0, 255, e), On = {
  ...Ie,
  transform: (e) => Math.round(Hd(e))
}, Le = {
  test: jr("rgb", "red"),
  parse: Is("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + On.transform(e) + ", " + On.transform(t) + ", " + On.transform(n) + ", " + at(st.transform(r)) + ")"
};
function qd(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const tr = {
  test: jr("#"),
  parse: qd,
  transform: Le.transform
}, ze = {
  test: jr("hsl", "hue"),
  parse: Is("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + me.transform(at(t)) + ", " + me.transform(at(n)) + ", " + at(st.transform(r)) + ")"
}, ee = {
  test: (e) => Le.test(e) || tr.test(e) || ze.test(e),
  parse: (e) => Le.test(e) ? Le.parse(e) : ze.test(e) ? ze.parse(e) : tr.parse(e),
  transform: (e) => Tt(e) ? e : e.hasOwnProperty("red") ? Le.transform(e) : ze.transform(e)
}, js = "${c}", $s = "${n}";
function Gd(e) {
  var t, n;
  return isNaN(e) && Tt(e) && (((t = e.match(mt)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Xn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Kt(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0, r = 0;
  const o = e.match(Xn);
  o && (n = o.length, e = e.replace(Xn, js), t.push(...o.map(ee.parse)));
  const s = e.match(mt);
  return s && (r = s.length, e = e.replace(mt, $s), t.push(...s.map(Ie.parse))), { values: t, numColors: n, numNumbers: r, tokenised: e };
}
function Ns(e) {
  return Kt(e).values;
}
function Us(e) {
  const { values: t, numColors: n, tokenised: r } = Kt(e), o = t.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? js : $s, a < n ? ee.transform(s[a]) : at(s[a]));
    return i;
  };
}
const Kd = (e) => typeof e == "number" ? 0 : e;
function Yd(e) {
  const t = Ns(e);
  return Us(e)(t.map(Kd));
}
const Ve = { test: Gd, parse: Ns, createTransformer: Us, getAnimatableNone: Yd }, Xd = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jd(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(mt) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = Xd.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const Zd = /([a-z-]*)\(.*?\)/g, nr = {
  ...Ve,
  getAnimatableNone: (e) => {
    const t = e.match(Zd);
    return t ? t.map(Jd).join(" ") : e;
  }
}, Qd = {
  ...gs,
  // Color props
  color: ee,
  backgroundColor: ee,
  outlineColor: ee,
  fill: ee,
  stroke: ee,
  // Border props
  borderColor: ee,
  borderTopColor: ee,
  borderRightColor: ee,
  borderBottomColor: ee,
  borderLeftColor: ee,
  filter: nr,
  WebkitFilter: nr
}, $r = (e) => Qd[e];
function Nr(e, t) {
  var n;
  let r = $r(e);
  return r !== nr && (r = Ve), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
const zs = (e) => (t) => t.test(e), ef = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ws = [Ie, P, me, Ae, Wu, zu, ef], et = (e) => Ws.find(zs(e)), tf = [...Ws, ee, Ve], nf = (e) => tf.find(zs(e));
function rf(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function of(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function pn(e, t, n) {
  const r = e.getProps();
  return Vr(r, t, n !== void 0 ? n : r.custom, rf(e), of(e));
}
function sf(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ke(n));
}
function af(e, t) {
  const n = pn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = cd(s[i]);
    sf(e, i, a);
  }
}
function cf(e, t, n) {
  var r, o;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const c = s[a], u = t[c];
      let l = null;
      Array.isArray(u) && (l = u[0]), l === null && (l = (o = (r = n[c]) !== null && r !== void 0 ? r : e.readValue(c)) !== null && o !== void 0 ? o : t[c]), l != null && (typeof l == "string" && (_d(l) || Bd(l)) ? l = parseFloat(l) : !nf(l) && Ve.test(u) && (l = Nr(c, u)), e.addValue(c, Ke(l, { owner: e })), n[c] === void 0 && (n[c] = l), l !== null && e.setBaseTarget(c, l));
    }
}
function lf(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function uf(e, t, n) {
  var r;
  const o = {};
  for (const s in e) {
    const i = lf(s, t);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function Yt(e) {
  return !!(ye(e) && e.add);
}
const df = (e, t) => `${e}: ${t}`;
function ff(e, t) {
  const { MotionAppearAnimations: n } = window, r = df(e, Be.has(t) ? "transform" : t), o = n && n.get(r);
  return o ? (se.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const hf = "framerAppearId", pf = "data-" + Rr(hf);
var mn = function() {
}, de = function() {
};
process.env.NODE_ENV !== "production" && (mn = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, de = function(e, t) {
  if (!e)
    throw new Error(t);
});
const $t = (e) => e * 1e3, mf = {
  current: !1
}, Ur = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, zr = (e) => (t) => 1 - e(1 - t), Wr = (e) => e * e, gf = zr(Wr), Hr = Ur(Wr), $ = (e, t, n) => -n * e + n * t + e;
function Fn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function yf({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    o = Fn(c, a, e + 1 / 3), s = Fn(c, a, e), i = Fn(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const Ln = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, vf = [tr, Le, ze], bf = (e) => vf.find((t) => t.test(e));
function zo(e) {
  const t = bf(e);
  de(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = t.parse(e);
  return t === ze && (n = yf(n)), n;
}
const Hs = (e, t) => {
  const n = zo(e), r = zo(t), o = { ...n };
  return (s) => (o.red = Ln(n.red, r.red, s), o.green = Ln(n.green, r.green, s), o.blue = Ln(n.blue, r.blue, s), o.alpha = $(n.alpha, r.alpha, s), Le.transform(o));
};
function qs(e, t) {
  return typeof e == "number" ? (n) => $(e, t, n) : ee.test(e) ? Hs(e, t) : Ks(e, t);
}
const Gs = (e, t) => {
  const n = [...e], r = n.length, o = e.map((s, i) => qs(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, xf = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = qs(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, Ks = (e, t) => {
  const n = Ve.createTransformer(t), r = Kt(e), o = Kt(t);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? fn(Gs(r.values, o.values), n) : (mn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, Xt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Wo = (e, t) => (n) => $(e, t, n);
function wf(e) {
  return typeof e == "number" ? Wo : typeof e == "string" ? ee.test(e) ? Hs : Ks : Array.isArray(e) ? Gs : typeof e == "object" ? xf : Wo;
}
function Tf(e, t, n) {
  const r = [], o = n || wf(e[0]), s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] : t;
      a = fn(c, a);
    }
    r.push(a);
  }
  return r;
}
function Ys(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  de(s === t.length, "Both input and output ranges must be the same length"), de(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Tf(t, r, o), a = i.length, c = (u) => {
    let l = 0;
    if (a > 1)
      for (; l < e.length - 2 && !(u < e[l + 1]); l++)
        ;
    const d = Xt(e[l], e[l + 1], u);
    return i[l](d);
  };
  return n ? (u) => c(Ge(e[0], e[s - 1], u)) : c;
}
const qr = (e) => e, Xs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ef = 1e-7, Cf = 12;
function Sf(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Xs(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > Ef && ++a < Cf);
  return i;
}
function Js(e, t, n, r) {
  if (e === t && n === r)
    return qr;
  const o = (s) => Sf(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Xs(o(s), t, r);
}
const Zs = (e) => 1 - Math.sin(Math.acos(e)), Gr = zr(Zs), Af = Ur(Gr), Qs = Js(0.33, 1.53, 0.69, 0.99), Kr = zr(Qs), Pf = Ur(Kr), Rf = (e) => (e *= 2) < 1 ? 0.5 * Kr(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ho = {
  linear: qr,
  easeIn: Wr,
  easeInOut: Hr,
  easeOut: gf,
  circIn: Zs,
  circInOut: Af,
  circOut: Gr,
  backIn: Kr,
  backInOut: Pf,
  backOut: Qs,
  anticipate: Rf
}, qo = (e) => {
  if (Array.isArray(e)) {
    de(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return Js(t, n, r, o);
  } else if (typeof e == "string")
    return de(Ho[e] !== void 0, `Invalid easing type '${e}'`), Ho[e];
  return e;
}, kf = (e) => Array.isArray(e) && typeof e[0] != "number";
function Vf(e, t) {
  return e.map(() => t || Hr).splice(0, e.length - 1);
}
function Df(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function Of(e, t) {
  return e.map((n) => n * t);
}
function Jt({ keyframes: e, ease: t = Hr, times: n, duration: r = 300 }) {
  e = [...e];
  const o = Jt[0], s = kf(t) ? t.map(qo) : qo(t), i = { done: !1, value: o }, a = Of(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === Jt.length ? n : Df(e),
    r
  );
  function c() {
    return Ys(a, e, {
      ease: Array.isArray(s) ? s : Vf(e, s)
    });
  }
  let u = c();
  return {
    next: (l) => (i.value = u(l), i.done = l >= r, i),
    flipTarget: () => {
      e.reverse(), u = c();
    }
  };
}
const Mn = 1e-3, Ff = 0.01, Go = 10, Lf = 0.05, Mf = 1;
function _f({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  mn(e <= Go * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Ge(Lf, Mf, i), e = Ge(Ff, Go, e / 1e3), i < 1 ? (o = (u) => {
    const l = u * i, d = l * e, h = l - n, p = rr(u, i), m = Math.exp(-d);
    return Mn - h / p * m;
  }, s = (u) => {
    const d = u * i * e, h = d * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * e, m = Math.exp(-d), g = rr(Math.pow(u, 2), i);
    return (-o(u) + Mn > 0 ? -1 : 1) * ((h - p) * m) / g;
  }) : (o = (u) => {
    const l = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Mn + l * d;
  }, s = (u) => {
    const l = Math.exp(-u * e), d = (n - u) * (e * e);
    return l * d;
  });
  const a = 5 / e, c = If(o, s, a);
  if (e = e * 1e3, isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const Bf = 12;
function If(e, t, n) {
  let r = n;
  for (let o = 1; o < Bf; o++)
    r = r - e(r) / t(r);
  return r;
}
function rr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const jf = ["duration", "bounce"], $f = ["stiffness", "damping", "mass"];
function Ko(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Nf(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ko(e, $f) && Ko(e, jf)) {
    const n = _f(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
const Uf = 5;
function ea({ keyframes: e, restSpeed: t = 2, restDelta: n = 0.01, ...r }) {
  let o = e[0], s = e[e.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: c, mass: u, velocity: l, duration: d, isResolvedFromDuration: h } = Nf(r);
  let p = zf, m = l ? -(l / 1e3) : 0;
  const g = c / (2 * Math.sqrt(a * u));
  function w() {
    const x = s - o, T = Math.sqrt(a / u) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const b = rr(T, g);
      p = (S) => {
        const V = Math.exp(-g * T * S);
        return s - V * ((m + g * T * x) / b * Math.sin(b * S) + x * Math.cos(b * S));
      };
    } else if (g === 1)
      p = (b) => s - Math.exp(-T * b) * (x + (m + T * x) * b);
    else {
      const b = T * Math.sqrt(g * g - 1);
      p = (S) => {
        const V = Math.exp(-g * T * S), M = Math.min(b * S, 300);
        return s - V * ((m + g * T * x) * Math.sinh(M) + b * x * Math.cosh(M)) / b;
      };
    }
  }
  return w(), {
    next: (x) => {
      const T = p(x);
      if (h)
        i.done = x >= d;
      else {
        let b = m;
        if (x !== 0)
          if (g < 1) {
            const M = Math.max(0, x - Uf);
            b = Ir(T - p(M), x - M);
          } else
            b = 0;
        const S = Math.abs(b) <= t, V = Math.abs(s - T) <= n;
        i.done = S && V;
      }
      return i.value = i.done ? s : T, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], w();
    }
  };
}
ea.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const zf = (e) => 0;
function Wf({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: e = [0],
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: s
}) {
  const i = e[0], a = { done: !1, value: i };
  let c = n * t;
  const u = i + c, l = s === void 0 ? u : s(u);
  return l !== u && (c = l - i), {
    next: (d) => {
      const h = -c * Math.exp(-d / r);
      return a.done = !(h > o || h < -o), a.value = a.done ? l : l + h, a;
    },
    flipTarget: () => {
    }
  };
}
const Hf = {
  decay: Wf,
  keyframes: Jt,
  tween: Jt,
  spring: ea
};
function ta(e, t, n = 0) {
  return e - t - n;
}
function qf(e, t = 0, n = 0, r = !0) {
  return r ? ta(t + -e, t, n) : t - (e - t) + n;
}
function Gf(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const Kf = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => se.update(t, !0),
    stop: () => ke.update(t)
  };
};
function Zt({ duration: e, driver: t = Kf, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: c, onStop: u, onComplete: l, onRepeat: d, onUpdate: h, type: p = "keyframes", ...m }) {
  var g, w;
  let x, T = 0, b = e, S, V = !1, M = !0, W;
  const J = Hf[i.length > 2 ? "keyframes" : p], Z = i[0], G = i[i.length - 1];
  !((w = (g = J).needsInterpolation) === null || w === void 0) && w.call(g, Z, G) && (W = Ys([0, 100], [Z, G], {
    clamp: !1
  }), i = [0, 100]);
  const ne = J({
    ...m,
    duration: e,
    keyframes: i
  });
  function fe() {
    T++, o === "reverse" ? (M = T % 2 === 0, n = qf(n, b, s, M)) : (n = ta(n, b, s), o === "mirror" && ne.flipTarget()), V = !1, d && d();
  }
  function Y() {
    x.stop(), l && l();
  }
  function H(re) {
    if (M || (re = -re), n += re, !V) {
      const be = ne.next(Math.max(0, n));
      S = be.value, W && (S = W(S)), V = M ? be.done : n <= 0;
    }
    h && h(S), V && (T === 0 && (b = b !== void 0 ? b : n), T < r ? Gf(n, b, s, M) && fe() : Y());
  }
  function I() {
    c && c(), x = t(H), x.start();
  }
  return a && I(), {
    stop: () => {
      u && u(), x.stop();
    },
    sample: (re) => ne.next(Math.max(0, re))
  };
}
function Yf(e) {
  return !e || // Default easing
  Array.isArray(e) || // Bezier curve
  typeof e == "string" && na[e];
}
const rt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, na = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: rt([0, 0.65, 0.55, 1]),
  circOut: rt([0.55, 0, 1, 0.45]),
  backIn: rt([0.31, 0.01, 0.66, -0.59]),
  backOut: rt([0.33, 1.53, 0.69, 0.99])
};
function Xf(e) {
  if (e)
    return Array.isArray(e) ? rt(e) : na[e];
}
function Jf(e, t, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: c } = {}) {
  return e.animate({ [t]: n, offset: c }, {
    delay: r,
    duration: o,
    easing: Xf(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Ot = 10;
function Zf(e, t, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: c } = o;
  if (o.type === "spring" || !Yf(o.ease)) {
    const l = Zt(o);
    let d = { done: !1, value: s[0] };
    const h = [];
    let p = 0;
    for (; !d.done; )
      d = l.sample(p), h.push(d.value), p += Ot;
    s = h, i = p - Ot, c = "linear";
  }
  const u = Jf(e.owner.current, t, s, {
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
    ease: c
  });
  return u.onfinish = () => {
    e.set(s[s.length - 1]), r && r();
  }, () => {
    const { currentTime: l } = u;
    if (l) {
      const d = Zt(o);
      e.setWithVelocity(d.sample(l - Ot).value, d.sample(l).value, Ot);
    }
    se.update(() => u.cancel());
  };
}
function ra(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (ke.read(r), e(s - t));
  };
  return se.read(r, !0), () => ke.read(r);
}
function Qf({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), () => {
  });
  return t ? ra(o, -t) : o();
}
function eh({ keyframes: e, velocity: t = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: c = 1, modifyTarget: u, driver: l, onUpdate: d, onComplete: h, onStop: p }) {
  const m = e[0];
  let g;
  function w(S) {
    return n !== void 0 && S < n || r !== void 0 && S > r;
  }
  function x(S) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - S) < Math.abs(r - S) ? n : r;
  }
  function T(S) {
    g == null || g.stop(), g = Zt({
      keyframes: [0, 1],
      velocity: 0,
      ...S,
      driver: l,
      onUpdate: (V) => {
        var M;
        d == null || d(V), (M = S.onUpdate) === null || M === void 0 || M.call(S, V);
      },
      onComplete: h,
      onStop: p
    });
  }
  function b(S) {
    T({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: c,
      ...S
    });
  }
  if (w(m))
    b({
      velocity: t,
      keyframes: [m, x(m)]
    });
  else {
    let S = o * t + m;
    typeof u < "u" && (S = u(S));
    const V = x(S), M = V === n ? -1 : 1;
    let W, J;
    const Z = (G) => {
      W = J, J = G, t = Ir(G - W, Ee.delta), (M === 1 && G > V || M === -1 && G < V) && b({ keyframes: [G, V], velocity: t });
    };
    T({
      type: "decay",
      keyframes: [m, 0],
      velocity: t,
      timeConstant: s,
      power: o,
      restDelta: c,
      modifyTarget: u,
      onUpdate: w(S) ? Z : void 0
    });
  }
  return {
    stop: () => g == null ? void 0 : g.stop()
  };
}
const De = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}), Ft = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), _n = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), th = {
  type: "keyframes",
  duration: 0.8
}, Yo = {
  x: De,
  y: De,
  z: De,
  rotate: De,
  rotateX: De,
  rotateY: De,
  rotateZ: De,
  scaleX: Ft,
  scaleY: Ft,
  scale: Ft,
  opacity: _n,
  backgroundColor: _n,
  color: _n,
  default: Ft
}, nh = (e, { keyframes: t }) => t.length > 2 ? th : (Yo[e] || Yo.default)(t[1]), or = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
Ve.test(t) && // And it contains numbers and/or colors
!t.startsWith("url("));
function rh({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: c, ...u }) {
  return !!Object.keys(u).length;
}
function Xo(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function Jo(e) {
  return typeof e == "number" ? 0 : Nr("", e);
}
function oa(e, t) {
  return e[t] || e.default || e;
}
function oh(e, t, n, r) {
  const o = or(t, n);
  let s = r.from !== void 0 ? r.from : e.get();
  return s === "none" && o && typeof n == "string" ? s = Nr(t, n) : Xo(s) && typeof n == "string" ? s = Jo(n) : !Array.isArray(n) && Xo(n) && typeof s == "string" && (n = Jo(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const Zo = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Bn = {}, ia = {};
for (const e in Zo)
  ia[e] = () => (Bn[e] === void 0 && (Bn[e] = Zo[e]()), Bn[e]);
const ih = /* @__PURE__ */ new Set(["opacity"]), Yr = (e, t, n, r = {}) => (o) => {
  const s = oa(r, e) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - $t(i);
  const c = oh(t, e, n, s), u = c[0], l = c[c.length - 1], d = or(e, u), h = or(e, l);
  mn(d === h, `You are trying to animate ${e} from "${u}" to "${l}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${l} via the \`style\` property.`);
  let p = {
    keyframes: c,
    velocity: t.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (x) => {
      t.set(x), s.onUpdate && s.onUpdate(x);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!d || !h || mf.current || s.type === !1)
    return Qf(p);
  if (s.type === "inertia") {
    const x = eh(p);
    return () => x.stop();
  }
  rh(s) || (p = {
    ...p,
    ...nh(e, p)
  }), p.duration && (p.duration = $t(p.duration)), p.repeatDelay && (p.repeatDelay = $t(p.repeatDelay));
  const m = t.owner, g = m && m.current;
  if (ia.waapi() && ih.has(e) && !p.repeatDelay && p.repeatType !== "mirror" && p.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return Zf(t, e, p);
  {
    const x = Zt(p);
    return () => x.stop();
  }
};
function sh(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => ir(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ir(e, t, n);
  else {
    const o = typeof t == "function" ? pn(e, t, n.custom) : t;
    r = sa(e, o, n);
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function ir(e, t, n = {}) {
  var r;
  const o = pn(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => sa(e, o, n) : () => Promise.resolve(), a = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u = 0) => {
    const { delayChildren: l = 0, staggerChildren: d, staggerDirection: h } = s;
    return ah(e, t, l + u, d, h, n);
  } : () => Promise.resolve(), { when: c } = s;
  if (c) {
    const [u, l] = c === "beforeChildren" ? [i, a] : [a, i];
    return u().then(l);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function sa(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = e.makeTargetAnimatable(t);
  const u = e.getValue("willChange");
  r && (i = r);
  const l = [], d = o && ((s = e.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const h in c) {
    const p = e.getValue(h), m = c[h];
    if (!p || m === void 0 || d && lh(d, h))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (e.shouldReduceMotion && Be.has(h) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !p.hasAnimated) {
      const x = e.getProps()[pf];
      x && (g.elapsed = ff(x, h));
    }
    let w = p.start(Yr(h, p, m, g));
    Yt(u) && (u.add(h), w = w.then(() => u.remove(h))), l.push(w);
  }
  return Promise.all(l).then(() => {
    a && af(e, a);
  });
}
function ah(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(ch).forEach((u, l) => {
    i.push(ir(u, t, {
      ...s,
      delay: n + c(l)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function ch(e, t) {
  return e.sortNodePosition(t);
}
function lh({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
const Xr = [
  B.Animate,
  B.InView,
  B.Focus,
  B.Hover,
  B.Tap,
  B.Drag,
  B.Exit
], uh = [...Xr].reverse(), dh = Xr.length;
function fh(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => sh(e, n, r)));
}
function hh(e) {
  let t = fh(e);
  const n = mh();
  let r = !0;
  const o = (c, u) => {
    const l = pn(e, u);
    if (l) {
      const { transition: d, transitionEnd: h, ...p } = l;
      c = { ...c, ...p, ...h };
    }
    return c;
  };
  function s(c) {
    t = c(e);
  }
  function i(c, u) {
    const l = e.getProps(), d = e.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let x = 0; x < dh; x++) {
      const T = uh[x], b = n[T], S = l[T] !== void 0 ? l[T] : d[T], V = ht(S), M = T === u ? b.isActive : null;
      M === !1 && (g = x);
      let W = S === d[T] && S !== l[T] && V;
      if (W && r && e.manuallyAnimateOnMount && (W = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      cn(S) || typeof S == "boolean")
        continue;
      const J = ph(b.prevProp, S);
      let Z = J || // If we're making this variant active, we want to always make it active
      T === u && b.isActive && !W && V || // If we removed a higher-priority variant (i is in reverse order)
      x > g && V;
      const G = Array.isArray(S) ? S : [S];
      let ne = G.reduce(o, {});
      M === !1 && (ne = {});
      const { prevResolvedValues: fe = {} } = b, Y = {
        ...fe,
        ...ne
      }, H = (I) => {
        Z = !0, p.delete(I), b.needsAnimating[I] = !0;
      };
      for (const I in Y) {
        const re = ne[I], be = fe[I];
        m.hasOwnProperty(I) || (re !== be ? qt(re) && qt(be) ? !Ls(re, be) || J ? H(I) : b.protectedKeys[I] = !0 : re !== void 0 ? H(I) : p.add(I) : re !== void 0 && p.has(I) ? H(I) : b.protectedKeys[I] = !0);
      }
      b.prevProp = S, b.prevResolvedValues = ne, b.isActive && (m = { ...m, ...ne }), r && e.blockInitialAnimation && (Z = !1), Z && !W && h.push(...G.map((I) => ({
        animation: I,
        options: { type: T, ...c }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((T) => {
        const b = e.getBaseTarget(T);
        b !== void 0 && (x[T] = b);
      }), h.push({ animation: x });
    }
    let w = !!h.length;
    return r && l.initial === !1 && !e.manuallyAnimateOnMount && (w = !1), r = !1, w ? t(h) : Promise.resolve();
  }
  function a(c, u, l) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(c, u);
    }), n[c].isActive = u;
    const h = i(l, c);
    for (const p in n)
      n[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function ph(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ls(t, e) : !1;
}
function Oe(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function mh() {
  return {
    [B.Animate]: Oe(!0),
    [B.InView]: Oe(),
    [B.Hover]: Oe(),
    [B.Tap]: Oe(),
    [B.Drag]: Oe(),
    [B.Focus]: Oe(),
    [B.Exit]: Oe()
  };
}
const gh = {
  animation: Re(({ visualElement: e, animate: t }) => {
    e.animationState || (e.animationState = hh(e)), cn(t) && te(() => t.subscribe(e), [t]);
  }),
  exit: Re((e) => {
    const { custom: t, visualElement: n } = e, [r, o] = Fs(), s = K(wt);
    te(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(B.Exit, !r, {
        custom: s && s.custom || t
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, Qo = (e, t) => Math.abs(e - t);
function yh(e, t) {
  const n = Qo(e.x, t.x), r = Qo(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class aa {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = jn(this.lastMoveEventInfo, this.history), l = this.startEvent !== null, d = yh(u.offset, { x: 0, y: 0 }) >= 3;
      if (!l && !d)
        return;
      const { point: h } = u, { timestamp: p } = Ee;
      this.history.push({ ...h, timestamp: p });
      const { onStart: m, onMove: g } = this.handlers;
      l || (m && m(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, l) => {
      if (this.lastMoveEvent = u, this.lastMoveEventInfo = In(l, this.transformPagePoint), Ss(u) && u.buttons === 0) {
        this.handlePointerUp(u, l);
        return;
      }
      se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, l) => {
      this.end();
      const { onEnd: d, onSessionEnd: h } = this.handlers, p = jn(In(l, this.transformPagePoint), this.history);
      this.startEvent && d && d(u, p), h && h(u, p);
    }, As(t) && t.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Dr(t), s = In(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = Ee;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: c } = n;
    c && c(t, jn(s, this.history)), this.removeListeners = fn(He(window, "pointermove", this.handlePointerMove), He(window, "pointerup", this.handlePointerUp), He(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ke.update(this.updatePoint);
  }
}
function In(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ei(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function jn({ point: e }, t) {
  return {
    point: e,
    delta: ei(e, ca(t)),
    offset: ei(e, vh(t)),
    velocity: bh(t, 0.1)
  };
}
function vh(e) {
  return e[0];
}
function ca(e) {
  return e[e.length - 1];
}
function bh(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = ca(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > $t(t))); )
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
function ae(e) {
  return e.max - e.min;
}
function sr(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function ti(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = $(t.min, t.max, e.origin), e.scale = ae(n) / ae(t), (sr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = $(n.min, n.max, e.origin) - e.originPoint, (sr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ct(e, t, n, r) {
  ti(e.x, t.x, n.x, r == null ? void 0 : r.originX), ti(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function ni(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ae(t);
}
function xh(e, t, n) {
  ni(e.x, t.x, n.x), ni(e.y, t.y, n.y);
}
function ri(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ae(t);
}
function lt(e, t, n) {
  ri(e.x, t.x, n.x), ri(e.y, t.y, n.y);
}
function wh(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? $(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? $(n, e, r.max) : Math.min(e, n)), e;
}
function oi(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Th(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: oi(e.x, n, o),
    y: oi(e.y, t, r)
  };
}
function ii(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Eh(e, t) {
  return {
    x: ii(e.x, t.x),
    y: ii(e.y, t.y)
  };
}
function Ch(e, t) {
  let n = 0.5;
  const r = ae(e), o = ae(t);
  return o > r ? n = Xt(t.min, t.max - r, e.min) : r > o && (n = Xt(e.min, e.max - o, t.min)), Ge(0, 1, n);
}
function Sh(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ar = 0.35;
function Ah(e = ar) {
  return e === !1 ? e = 0 : e === !0 && (e = ar), {
    x: si(e, "left", "right"),
    y: si(e, "top", "bottom")
  };
}
function si(e, t, n) {
  return {
    min: ai(e, t),
    max: ai(e, n)
  };
}
function ai(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ci = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ut = () => ({
  x: ci(),
  y: ci()
}), li = () => ({ min: 0, max: 0 }), q = () => ({
  x: li(),
  y: li()
});
function he(e) {
  return [e("x"), e("y")];
}
function la({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Ph({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Rh(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function $n(e) {
  return e === void 0 || e === 1;
}
function cr({ scale: e, scaleX: t, scaleY: n }) {
  return !$n(e) || !$n(t) || !$n(n);
}
function Fe(e) {
  return cr(e) || ua(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ua(e) {
  return ui(e.x) || ui(e.y);
}
function ui(e) {
  return e && e !== "0%";
}
function Qt(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function di(e, t, n, r, o) {
  return o !== void 0 && (e = Qt(e, o, r)), Qt(e, n, r) + t;
}
function lr(e, t = 0, n = 1, r, o) {
  e.min = di(e.min, t, n, r, o), e.max = di(e.max, t, n, r, o);
}
function da(e, { x: t, y: n }) {
  lr(e.x, t.translate, t.scale, t.originPoint), lr(e.y, n.translate, n.scale, n.originPoint);
}
function kh(e, t, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let a, c;
  for (let u = 0; u < i; u++)
    a = n[u], c = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && We(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), c && (t.x *= c.x.scale, t.y *= c.y.scale, da(e, c)), r && Fe(a.latestValues) && We(e, a.latestValues));
  t.x = fi(t.x), t.y = fi(t.y);
}
function fi(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Pe(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function hi(e, t, [n, r, o]) {
  const s = t[o] !== void 0 ? t[o] : 0.5, i = $(e.min, e.max, s);
  lr(e, t[n], t[r], i, t.scale);
}
const Vh = ["x", "scaleX", "originX"], Dh = ["y", "scaleY", "originY"];
function We(e, t) {
  hi(e.x, t, Vh), hi(e.y, t, Dh);
}
function fa(e, t) {
  return la(Rh(e.getBoundingClientRect(), t));
}
function Oh(e, t, n) {
  const r = fa(e, n), { scroll: o } = t;
  return o && (Pe(r.x, o.offset.x), Pe(r.y, o.offset.y)), r;
}
const Fh = /* @__PURE__ */ new WeakMap();
class Lh {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(Dr(a, "page").point);
    }, o = (a, c) => {
      var u;
      const { drag: l, dragPropagation: d, onDragStart: h } = this.getProps();
      l && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Vs(l), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), he((p) => {
        var m, g;
        let w = this.getAxisMotionValue(p).get() || 0;
        if (me.test(w)) {
          const x = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[p];
          x && (w = ae(x) * (parseFloat(w) / 100));
        }
        this.originPoint[p] = w;
      }), h == null || h(a, c), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(B.Drag, !0));
    }, s = (a, c) => {
      const { dragPropagation: u, dragDirectionLock: l, onDirectionLock: d, onDrag: h } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: p } = c;
      if (l && this.currentDirection === null) {
        this.currentDirection = Mh(p), this.currentDirection !== null && (d == null || d(this.currentDirection));
        return;
      }
      this.updateAxis("x", c.point, p), this.updateAxis("y", c.point, p), this.visualElement.render(), h == null || h(a, c);
    }, i = (a, c) => this.stop(a, c);
    this.panSession = new aa(t, {
      onSessionStart: r,
      onStart: o,
      onMove: s,
      onSessionEnd: i
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s == null || s(t, n);
  }
  cancel() {
    var t, n;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(B.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Lt(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = wh(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    t && Ue(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Th(r.layoutBox, t) : this.constraints = !1, this.elastic = Ah(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && he((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = Sh(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ue(t))
      return !1;
    const r = t.current;
    de(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Oh(r, o.root, this.visualElement.getTransformPagePoint());
    let i = Eh(o.layout.layoutBox, s);
    if (n) {
      const a = n(Ph(i));
      this.hasMutatedConstraints = !!a, a && (i = la(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = he((l) => {
      if (!Lt(l, n, this.currentDirection))
        return;
      let d = (c == null ? void 0 : c[l]) || {};
      i && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[l] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(l, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Yr(t, r, 0, n));
  }
  stopAnimation() {
    he((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    var n;
    const r = "_drag" + t.toUpperCase(), o = this.visualElement.getProps()[r];
    return o || this.visualElement.getValue(t, ((n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) || 0);
  }
  snapToCursor(t) {
    he((n) => {
      const { drag: r } = this.getProps();
      if (!Lt(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - $(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    var t;
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!Ue(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    he((a) => {
      const c = this.getAxisMotionValue(a);
      if (c) {
        const u = c.get();
        s[a] = Ch({ min: u, max: u }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (t = o.root) === null || t === void 0 || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), he((a) => {
      if (!Lt(a, n, null))
        return;
      const c = this.getAxisMotionValue(a), { min: u, max: l } = this.constraints[a];
      c.set($(u, l, s[a]));
    });
  }
  addListeners() {
    var t;
    if (!this.visualElement.current)
      return;
    Fh.set(this.visualElement, this);
    const n = this.visualElement.current, r = He(n, "pointerdown", (u) => {
      const { drag: l, dragListener: d = !0 } = this.getProps();
      l && d && this.start(u);
    }), o = () => {
      const { dragConstraints: u } = this.getProps();
      Ue(u) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((t = s.root) === null || t === void 0 || t.updateScroll(), s.updateLayout()), o();
    const a = dn(window, "resize", () => this.scalePositionWithinConstraints()), c = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (he((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += u[d].translate, h.set(h.get() + u[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), c == null || c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = ar, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Lt(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Mh(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function _h(e) {
  const { dragControls: t, visualElement: n } = e, r = un(() => new Lh(n));
  te(() => t && t.subscribe(r), [r, t]), te(() => r.addListeners(), [r]);
}
function Bh({ onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = e || t || n || r, i = ie(null), { transformPagePoint: a } = K(wr), c = {
    onSessionStart: r,
    onStart: t,
    onMove: e,
    onEnd: (l, d) => {
      i.current = null, n && n(l, d);
    }
  };
  te(() => {
    i.current !== null && i.current.updateHandlers(c);
  });
  function u(l) {
    i.current = new aa(l, c, {
      transformPagePoint: a
    });
  }
  Gt(o, "pointerdown", s && u), Or(() => i.current && i.current.end());
}
const Ih = {
  pan: Re(Bh),
  drag: Re(_h)
};
function ur(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
const ha = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function jh(e) {
  const t = ha.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
const $h = 4;
function dr(e, t, n = 1) {
  de(n <= $h, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = jh(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  return s ? s.trim() : ur(o) ? dr(o, t, n + 1) : o;
}
function Nh(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const s = o.get();
    if (!ur(s))
      return;
    const i = dr(s, r);
    i && o.set(i);
  });
  for (const o in t) {
    const s = t[o];
    if (!ur(s))
      continue;
    const i = dr(s, r);
    i && (t[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: t, transitionEnd: n };
}
const Uh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), pa = (e) => Uh.has(e), zh = (e) => Object.keys(e).some(pa), ma = (e, t) => {
  e.set(t, !1), e.set(t);
}, Mt = (e) => e === Ie || e === P;
var pi;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(pi || (pi = {}));
const mi = (e, t) => parseFloat(e.split(", ")[t]), gi = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return mi(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? mi(s[1], e) : 0;
  }
}, Wh = /* @__PURE__ */ new Set(["x", "y", "z"]), Hh = Wt.filter((e) => !Wh.has(e));
function qh(e) {
  const t = [];
  return Hh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const yi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: gi(4, 13),
  y: gi(5, 14)
}, Gh = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    a[u] = yi[u](r, s);
  }), t.render();
  const c = t.measureViewportBox();
  return n.forEach((u) => {
    const l = t.getValue(u);
    ma(l, a[u]), e[u] = yi[u](c, s);
  }), e;
}, Kh = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(pa);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((c) => {
    const u = e.getValue(c);
    if (!e.hasValue(c))
      return;
    let l = n[c], d = et(l);
    const h = t[c];
    let p;
    if (qt(h)) {
      const m = h.length, g = h[0] === null ? 1 : 0;
      l = h[g], d = et(l);
      for (let w = g; w < m; w++)
        p ? de(et(h[w]) === p, "All keyframes must be of the same type") : (p = et(h[w]), de(p === d || Mt(d) && Mt(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = et(h);
    if (d !== p)
      if (Mt(d) && Mt(p)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof h == "string" ? t[c] = parseFloat(h) : Array.isArray(h) && p === P && (t[c] = h.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (l === 0 || h === 0) ? l === 0 ? u.set(p.transform(l)) : t[c] = d.transform(h) : (i || (s = qh(e), i = !0), a.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], ma(u, h));
  }), a.length) {
    const c = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = Gh(t, e, a);
    return s.length && s.forEach(([l, d]) => {
      e.getValue(l).set(d);
    }), e.render(), _e && c !== null && window.scrollTo({ top: c }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function Yh(e, t, n, r) {
  return zh(t) ? Kh(e, t, n, r) : { target: t, transitionEnd: r };
}
const Xh = (e, t, n, r) => {
  const o = Nh(e, t, r);
  return t = o.target, r = o.transitionEnd, Yh(e, t, n, r);
}, fr = { current: null }, ga = { current: !1 };
function Jh() {
  if (ga.current = !0, !!_e)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => fr.current = e.matches;
      e.addListener(t), t();
    } else
      fr.current = !1;
}
function Zh(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const s = t[o], i = n[o];
    if (ye(s))
      e.addValue(o, s), Yt(r) && r.add(o), process.env.NODE_ENV === "development" && Lr(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (ye(i))
      e.addValue(o, Ke(s, { owner: e })), Yt(r) && r.remove(o);
    else if (i !== s)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Ke(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const ya = Object.keys(pt), Qh = ya.length, vi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ep {
  constructor({ parent: t, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => se.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = t, this.props = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = ln(n), this.isVariantNode = fs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n);
    for (const l in u) {
      const d = u[l];
      i[l] !== void 0 && ye(d) && (d.set(i[l], !1), Yt(c) && c.add(l));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t) {
    return {};
  }
  mount(t) {
    var n;
    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), ga.current || Jh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : fr.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var t, n, r;
    (t = this.projection) === null || t === void 0 || t.unmount(), ke.update(this.notifyUpdate), ke.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Be.has(t), o = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && se.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), s();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures(t, n, r, o, s, i) {
    const a = [];
    Fr !== "production" && r && n && de(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let c = 0; c < Qh; c++) {
      const u = ya[c], { isEnabled: l, Component: d } = pt[u];
      l(t) && d && a.push(Ii(d, {
        key: u,
        ...t,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: c, layout: u, drag: l, dragConstraints: d, layoutScroll: h } = t;
      this.projection.setOptions({
        layoutId: c,
        layout: u,
        alwaysMeasureLayout: !!l || d && Ue(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  setProps(t) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
    for (let n = 0; n < vi.length; n++) {
      const r = vi[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = t["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = Zh(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    var n;
    return (n = this.props.variants) === null || n === void 0 ? void 0 : n[t];
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
    var t;
    return this.isVariantNode ? this : (t = this.parent) === null || t === void 0 ? void 0 : t.getClosestVariantNode();
  }
  getVariantContext(t = !1) {
    var n, r;
    if (t)
      return (n = this.parent) === null || n === void 0 ? void 0 : n.getVariantContext();
    if (!this.isControllingVariants) {
      const s = ((r = this.parent) === null || r === void 0 ? void 0 : r.getVariantContext()) || {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const o = {};
    for (let s = 0; s < tp; s++) {
      const i = va[s], a = this.props[i];
      (ht(a) || a === !1) && (o[i] = a);
    }
    return o;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    var n;
    const r = this.getClosestVariantNode();
    if (r)
      return (n = r.variantChildren) === null || n === void 0 || n.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    this.hasValue(t) && this.removeValue(t), this.values.set(t, n), this.latestValues[t] = n.get(), this.bindToMotionValue(t, n);
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    var n;
    this.values.delete(t), (n = this.valueSubscriptions.get(t)) === null || n === void 0 || n(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  /**
   * Get a motion value for this key. If called with a default
   * value, we'll create one if none exists.
   */
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Ke(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Vr(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ye(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Br()), this.events[t].add(n);
  }
  notify(t, ...n) {
    var r;
    (r = this.events[t]) === null || r === void 0 || r.notify(...n);
  }
}
const va = ["initial", ...Xr], tp = va.length;
class ba extends ep {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    var r;
    return (r = t.style) === null || r === void 0 ? void 0 : r[n];
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, s) {
    let i = uf(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      cf(this, r, i);
      const a = Xh(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function np(e) {
  return window.getComputedStyle(e);
}
class rp extends ba {
  readValueFromInstance(t, n) {
    if (Be.has(n)) {
      const r = $r(n);
      return r && r.default || 0;
    } else {
      const r = np(t), o = (ms(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fa(t, n);
  }
  build(t, n, r, o) {
    Cr(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t) {
    return kr(t);
  }
  renderInstance(t, n, r, o) {
    xs(t, n, r, o);
  }
}
class op extends ba {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    var r;
    return Be.has(n) ? ((r = $r(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = ws.has(n) ? n : Rr(n), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return q();
  }
  scrapeMotionValuesFromProps(t) {
    return Es(t);
  }
  build(t, n, r, o) {
    Ar(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Ts(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Pr(t.tagName), super.mount(t);
  }
}
const ip = (e, t) => Er(e) ? new op(t, { enableHardwareAcceleration: !1 }) : new rp(t, { enableHardwareAcceleration: !0 });
function bi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const tt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (P.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = bi(e, t.target.x), r = bi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, xi = "_$css", sp = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = e.includes("var("), s = [];
    o && (e = e.replace(ha, (p) => (s.push(p), xi)));
    const i = Ve.parse(e);
    if (i.length > 5)
      return r;
    const a = Ve.createTransformer(e), c = typeof i[0] != "number" ? 1 : 0, u = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + c] /= u, i[1 + c] /= l;
    const d = $(u, l, 0.5);
    typeof i[2 + c] == "number" && (i[2 + c] /= d), typeof i[3 + c] == "number" && (i[3 + c] /= d);
    let h = a(i);
    if (o) {
      let p = 0;
      h = h.replace(xi, () => {
        const m = s[p];
        return p++, m;
      });
    }
    return h;
  }
};
class ap extends yt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    Bu(lp), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), it.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || se.postRender(() => {
      var a;
      !((a = i.getStack()) === null || a === void 0) && a.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(o), r != null && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t == null || t();
  }
  render() {
    return null;
  }
}
function cp(e) {
  const [t, n] = Fs(), r = K(Tr);
  return yt.createElement(ap, { ...e, layoutGroup: r, switchLayoutGroup: K(hs), isPresent: t, safeToRemove: n });
}
const lp = {
  borderRadius: {
    ...tt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: tt,
  borderTopRightRadius: tt,
  borderBottomLeftRadius: tt,
  borderBottomRightRadius: tt,
  boxShadow: sp
}, up = {
  measureLayout: cp
};
function dp(e, t, n = {}) {
  const r = ye(e) ? e : Ke(e);
  return r.start(Yr("", r, t, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const xa = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], fp = xa.length, wi = (e) => typeof e == "string" ? parseFloat(e) : e, Ti = (e) => typeof e == "number" || P.test(e);
function hp(e, t, n, r, o, s) {
  o ? (e.opacity = $(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    pp(r)
  ), e.opacityExit = $(t.opacity !== void 0 ? t.opacity : 1, 0, mp(r))) : s && (e.opacity = $(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < fp; i++) {
    const a = `border${xa[i]}Radius`;
    let c = Ei(t, a), u = Ei(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Ti(c) === Ti(u) ? (e[a] = Math.max($(wi(c), wi(u), r), 0), (me.test(u) || me.test(c)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = $(t.rotate || 0, n.rotate || 0, r));
}
function Ei(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const pp = wa(0, 0.5, Gr), mp = wa(0.5, 0.95, qr);
function wa(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Xt(e, t, r));
}
function Ci(e, t) {
  e.min = t.min, e.max = t.max;
}
function ue(e, t) {
  Ci(e.x, t.x), Ci(e.y, t.y);
}
function Si(e, t, n, r, o) {
  return e -= t, e = Qt(e, 1 / n, r), o !== void 0 && (e = Qt(e, 1 / o, r)), e;
}
function gp(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (me.test(t) && (t = parseFloat(t), t = $(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = $(s.min, s.max, r);
  e === s && (a -= t), e.min = Si(e.min, t, n, a, o), e.max = Si(e.max, t, n, a, o);
}
function Ai(e, t, [n, r, o], s, i) {
  gp(e, t[n], t[r], t[o], t.scale, s, i);
}
const yp = ["x", "scaleX", "originX"], vp = ["y", "scaleY", "originY"];
function Pi(e, t, n, r) {
  Ai(e.x, t, yp, n == null ? void 0 : n.x, r == null ? void 0 : r.x), Ai(e.y, t, vp, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function Ri(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ta(e) {
  return Ri(e.x) && Ri(e.y);
}
function Ea(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function ki(e) {
  return ae(e.x) / ae(e.y);
}
class bp {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mr(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (_r(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
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
  promote(t, n) {
    var r;
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, n && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, s, i;
      (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n), (i = (o = t.resumingFrom) === null || o === void 0 ? void 0 : (s = o.options).onExitComplete) === null || i === void 0 || i.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
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
function Vi(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: c, rotateX: u, rotateY: l } = n;
    c && (r += `rotate(${c}deg) `), u && (r += `rotateX(${u}deg) `), l && (r += `rotateY(${l}deg) `);
  }
  const i = e.x.scale * t.x, a = e.y.scale * t.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const xp = (e, t) => e.depth - t.depth;
class wp {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Mr(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    _r(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(xp), this.isDirty = !1, this.children.forEach(t);
  }
}
const Di = ["", "X", "Y", "Z"], Oi = 1e3;
let Tp = 0;
function Ca({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, c = t == null ? void 0 : t()) {
      this.id = Tp++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(Sp), this.nodes.forEach(Rp), this.nodes.forEach(kp);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wp());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Br()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const c = this.eventHandlers.get(i);
      c == null || c.notify(...a);
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
      var c;
      if (this.instance)
        return;
      this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
      const { layoutId: u, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (l || u) && (this.isLayoutDirty = !0), e) {
        let h;
        const p = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = ra(p, 250), it.hasAnimatedSinceResize && (it.hasAnimatedSinceResize = !1, this.nodes.forEach(Li));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && d && (u || l) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        var w, x, T, b, S;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const V = (x = (w = this.options.transition) !== null && w !== void 0 ? w : d.getDefaultTransition()) !== null && x !== void 0 ? x : Lp, { onLayoutAnimationStart: M, onLayoutAnimationComplete: W } = d.getProps(), J = !this.targetLayout || !Ea(this.targetLayout, g) || m, Z = !p && m;
        if (!((T = this.resumeFrom) === null || T === void 0) && T.instance || Z || p && (J || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, Z);
          const G = {
            ...oa(V, "layout"),
            onPlay: M,
            onComplete: W
          };
          d.shouldReduceMotion && (G.delay = 0, G.type = !1), this.startAnimation(G);
        } else
          !p && this.animationProgress === 0 && Li(this), this.isLead() && ((S = (b = this.options).onExitComplete) === null || S === void 0 || S.call(b));
        this.targetLayout = g;
      });
    }
    unmount() {
      var i, a;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (a = this.parent) === null || a === void 0 || a.children.delete(this), this.instance = void 0, ke.preRender(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(Vp), this.animationId++);
    }
    willUpdate(i = !0) {
      var a, c, u;
      if (this.root.isUpdateBlocked()) {
        (c = (a = this.options).onExitComplete) === null || c === void 0 || c.call(a);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        m.shouldResetTransform = !0, m.updateScroll("snapshot");
      }
      const { layoutId: l, layout: d } = this.options;
      if (l === void 0 && !d)
        return;
      const h = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
      this.prevTransformTemplateValue = h == null ? void 0 : h(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Fi);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Mp), this.potentialNodes.clear()), this.nodes.forEach(Pp), this.nodes.forEach(Ep), this.nodes.forEach(Cp), this.clearAllSnapshots(), Dn.update(), Dn.preRender(), Dn.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ap), this.sharedNodes.forEach(Dp);
    }
    scheduleUpdateProjection() {
      se.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      se.postRender(() => {
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
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = q(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !Ta(this.projectionDelta), u = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, l = u == null ? void 0 : u(this.latestValues, ""), d = l !== this.prevTransformTemplateValue;
      a && (c || Fe(this.latestValues) || d) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), _p(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return q();
      const a = i.measureViewportBox(), { scroll: c } = this.root;
      return c && (Pe(a.x, c.offset.x), Pe(a.y, c.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = q();
      ue(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: d } = u;
        if (u !== this.root && l && d.layoutScroll) {
          if (l.isRoot) {
            ue(a, i);
            const { scroll: h } = this.root;
            h && (Pe(a.x, -h.offset.x), Pe(a.y, -h.offset.y));
          }
          Pe(a.x, l.offset.x), Pe(a.y, l.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const c = q();
      ue(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        !a && l.options.layoutScroll && l.scroll && l !== l.root && We(c, {
          x: -l.scroll.offset.x,
          y: -l.scroll.offset.y
        }), Fe(l.latestValues) && We(c, l.latestValues);
      }
      return Fe(this.latestValues) && We(c, this.latestValues), c;
    }
    removeTransform(i) {
      var a;
      const c = q();
      ue(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        if (!l.instance || !Fe(l.latestValues))
          continue;
        cr(l.latestValues) && l.updateSnapshot();
        const d = q(), h = l.measurePageBox();
        ue(d, h), Pi(c, l.latestValues, (a = l.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, d);
      }
      return Fe(this.latestValues) && Pi(c, this.latestValues), c;
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
      const { layout: c, layoutId: u } = this.options;
      if (!(!this.layout || !(c || u))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const l = this.getClosestProjectingParent();
          l && l.layout ? (this.relativeParent = l, this.relativeTarget = q(), this.relativeTargetOrigin = q(), lt(this.relativeTargetOrigin, this.layout.layoutBox, l.layout.layoutBox), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? xh(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ue(this.target, this.layout.layoutBox), da(this.target, this.targetDelta)) : ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const l = this.getClosestProjectingParent();
          l && !!l.resumingFrom == !!this.resumingFrom && !l.options.layoutScroll && l.target ? (this.relativeParent = l, this.relativeTarget = q(), this.relativeTargetOrigin = q(), lt(this.relativeTargetOrigin, this.target, l.target), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || cr(this.parent.latestValues) || ua(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: c } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const u = this.getLead(), l = !!this.resumingFrom || this !== u;
      let d = !0;
      if (a && (d = !1), l && c && (d = !1), d)
        return;
      const { layout: h, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || p))
        return;
      ue(this.layoutCorrected, this.layout.layoutBox), kh(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: m } = u;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = ut(), this.projectionDeltaWithTransform = ut());
      const g = this.treeScale.x, w = this.treeScale.y, x = this.projectionTransform;
      ct(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Vi(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== g || this.treeScale.y !== w) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a, c, u;
      (c = (a = this.options).scheduleRender) === null || c === void 0 || c.call(a), i && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      var c, u;
      const l = this.snapshot, d = (l == null ? void 0 : l.latestValues) || {}, h = { ...this.latestValues }, p = ut();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = q(), g = (l == null ? void 0 : l.source) !== ((c = this.layout) === null || c === void 0 ? void 0 : c.source), w = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1, x = !!(g && !w && this.options.crossfade === !0 && !this.path.some(Fp));
      this.animationProgress = 0, this.mixTargetDelta = (T) => {
        var b;
        const S = T / 1e3;
        Mi(p.x, i.x, S), Mi(p.y, i.y, S), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((b = this.relativeParent) === null || b === void 0) && b.layout) && (lt(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Op(this.relativeTarget, this.relativeTargetOrigin, m, S)), g && (this.animationValues = h, hp(h, d, this.latestValues, S, x, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (ke.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
        it.hasAnimatedSinceResize = !0, this.currentAnimation = dp(0, Oi, {
          ...i,
          onUpdate: (u) => {
            var l;
            this.mixTargetDelta(u), (l = i.onUpdate) === null || l === void 0 || l.call(i, u);
          },
          onComplete: () => {
            var u;
            (u = i.onComplete) === null || u === void 0 || u.call(i), this.completeAnimation();
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
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Oi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = i;
      if (!(!a || !c || !u)) {
        if (this !== i && this.layout && u && Sa(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || q();
          const d = ae(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + d;
          const h = ae(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + h;
        }
        ue(a, c), We(a, l), ct(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(i, a) {
      var c, u, l;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new bp()), this.sharedNodes.get(i).add(a), a.promote({
        transition: (c = a.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.transition,
        preserveFollowOpacity: (l = (u = a.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || l === void 0 ? void 0 : l.call(u, a)
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
    promote({ needsReset: i, transition: a, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const { latestValues: c } = i;
      if ((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a)
        return;
      const u = {};
      for (let l = 0; l < Di.length; l++) {
        const d = "rotate" + Di[l];
        c[d] && (u[d] = c[d], i.setStaticValue(d, 0));
      }
      i == null || i.render();
      for (const l in u)
        i.setStaticValue(l, u[l]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, c, u;
      const l = {};
      if (!this.instance || this.isSVG)
        return l;
      if (this.isVisible)
        l.visibility = "";
      else
        return { visibility: "hidden" };
      const d = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = jt(i.pointerEvents) || "", l.transform = d ? d(this.latestValues, "") : "none", l;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const w = {};
        return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = jt(i.pointerEvents) || ""), this.hasProjected && !Fe(this.latestValues) && (w.transform = d ? d({}, "") : "none", this.hasProjected = !1), w;
      }
      const p = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), l.transform = Vi(this.projectionDeltaWithTransform, this.treeScale, p), d && (l.transform = d(p, l.transform));
      const { x: m, y: g } = this.projectionDelta;
      l.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? l.opacity = h === this ? (u = (c = p.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : l.opacity = h === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const w in zt) {
        if (p[w] === void 0)
          continue;
        const { correct: x, applyTo: T } = zt[w], b = x(p[w], h);
        if (T) {
          const S = T.length;
          for (let V = 0; V < S; V++)
            l[T[V]] = b;
        } else
          l[w] = b;
      }
      return this.options.layoutId && (l.pointerEvents = h === this ? jt(i.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Fi), this.root.sharedNodes.clear();
    }
  };
}
function Ep(e) {
  e.updateLayout();
}
function Cp(e) {
  var t, n, r;
  const o = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: a } = e.options, c = o.source !== e.layout.source;
    a === "size" ? he((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = ae(m);
      m.min = s[p].min, m.max = m.min + g;
    }) : Sa(a, o.layoutBox, s) && he((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = ae(s[p]);
      m.max = m.min + g;
    });
    const u = ut();
    ct(u, s, o.layoutBox);
    const l = ut();
    c ? ct(l, e.applyTransform(i, !0), o.measuredBox) : ct(l, s, o.layoutBox);
    const d = !Ta(u);
    let h = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: g } = p;
        if (m && g) {
          const w = q();
          lt(w, o.layoutBox, m.layoutBox);
          const x = q();
          lt(x, s, g.layoutBox), Ea(w, x) || (h = !0);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: l,
      layoutDelta: u,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: h
    });
  } else
    e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
  e.options.transition = void 0;
}
function Sp(e) {
  e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty));
}
function Ap(e) {
  e.clearSnapshot();
}
function Fi(e) {
  e.clearMeasurements();
}
function Pp(e) {
  const { visualElement: t } = e.options;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Li(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function Rp(e) {
  e.resolveTargetDelta();
}
function kp(e) {
  e.calcProjection();
}
function Vp(e) {
  e.resetRotation();
}
function Dp(e) {
  e.removeLeadSnapshot();
}
function Mi(e, t, n) {
  e.translate = $(t.translate, 0, n), e.scale = $(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function _i(e, t, n, r) {
  e.min = $(t.min, n.min, r), e.max = $(t.max, n.max, r);
}
function Op(e, t, n, r) {
  _i(e.x, t.x, n.x, r), _i(e.y, t.y, n.y, r);
}
function Fp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Lp = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Mp(e, t) {
  let n = e.root;
  for (let s = e.path.length - 1; s >= 0; s--)
    if (e.path[s].instance) {
      n = e.path[s];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, !0);
}
function Bi(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function _p(e) {
  Bi(e.x), Bi(e.y);
}
function Sa(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !sr(ki(t), ki(n), 0.2);
}
const Bp = Ca({
  attachResizeListener: (e, t) => dn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Nn = {
  current: void 0
}, Ip = Ca({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Nn.current) {
      const e = new Bp(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Nn.current = e;
    }
    return Nn.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), jp = {
  ...gh,
  ...Md,
  ...Ih,
  ...up
}, gn = /* @__PURE__ */ Mu((e, t) => hd(e, t, jp, ip, Ip));
function Aa() {
  const e = ie(!1);
  return ot(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function $p() {
  const e = Aa(), [t, n] = oe(0), r = Nt(() => {
    e.current && n(t + 1);
  }, [t]);
  return [Nt(() => se.postRender(r), [r]), t];
}
class Np extends F.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
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
function Up({ children: e, isPresent: t }) {
  const n = pr(), r = ie(null), o = ie({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return ic(() => {
    const { width: s, height: i, top: a, left: c } = o.current;
    if (t || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), F.createElement(Np, { isPresent: t, childRef: r, sizeRef: o }, F.cloneElement(e, { ref: r }));
}
const Un = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = un(zp), c = pr(), u = Ce(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (l) => {
        a.set(l, !0);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (l) => (a.set(l, !1), () => a.delete(l))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return Ce(() => {
    a.forEach((l, d) => a.set(d, !1));
  }, [n]), F.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = F.createElement(Up, { isPresent: n }, e)), F.createElement(wt.Provider, { value: u }, e);
};
function zp() {
  return /* @__PURE__ */ new Map();
}
const Ne = (e) => e.key || "";
function Wp(e, t) {
  e.forEach((n) => {
    const r = Ne(n);
    t.set(r, n);
  });
}
function Hp(e) {
  const t = [];
  return ac.forEach(e, (n) => {
    cc(n) && t.push(n);
  }), t;
}
const yn = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", Lr(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = $p();
  const c = K(Tr).forceRender;
  c && (a = c);
  const u = Aa(), l = Hp(e);
  let d = l;
  const h = /* @__PURE__ */ new Set(), p = ie(d), m = ie(/* @__PURE__ */ new Map()).current, g = ie(!0);
  if (ot(() => {
    g.current = !1, Wp(l, m), p.current = d;
  }), Or(() => {
    g.current = !0, m.clear(), h.clear();
  }), g.current)
    return F.createElement(F.Fragment, null, d.map((b) => F.createElement(Un, { key: Ne(b), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, b)));
  d = [...d];
  const w = p.current.map(Ne), x = l.map(Ne), T = w.length;
  for (let b = 0; b < T; b++) {
    const S = w[b];
    x.indexOf(S) === -1 && h.add(S);
  }
  return i === "wait" && h.size && (d = []), h.forEach((b) => {
    if (x.indexOf(b) !== -1)
      return;
    const S = m.get(b);
    if (!S)
      return;
    const V = w.indexOf(b), M = () => {
      m.delete(b), h.delete(b);
      const W = p.current.findIndex((J) => J.key === b);
      if (p.current.splice(W, 1), !h.size) {
        if (p.current = l, u.current === !1)
          return;
        a(), r && r();
      }
    };
    d.splice(V, 0, F.createElement(Un, { key: Ne(S), isPresent: !1, onExitComplete: M, custom: t, presenceAffectsLayout: s, mode: i }, S));
  }), d = d.map((b) => {
    const S = b.key;
    return h.has(S) ? b : F.createElement(Un, { key: Ne(b), isPresent: !0, presenceAffectsLayout: s, mode: i }, b);
  }), Fr !== "production" && i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), F.createElement(F.Fragment, null, h.size ? d : d.map((b) => sc(b)));
};
function Om({
  children: e,
  content: t,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = oe(!1);
  te(() => (document.addEventListener("mousedown", l), () => {
    document.removeEventListener("mousedown", l);
  }));
  const c = ie(), u = ie();
  function l(d) {
    var h, p;
    o === "click" && (!i && ((h = u.current) != null && h.contains(d.target)) ? a(!0) : i && !((p = c.current) != null && p.contains(d.target)) && (d.preventDefault(), d.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ j(
    qp,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: u,
      children: [
        /* @__PURE__ */ E(yn, { children: i && /* @__PURE__ */ E(
          Gp,
          {
            style: r || nt(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: c,
            children: /* @__PURE__ */ E($i, { ...s, children: t })
          }
        ) }),
        e
      ]
    }
  );
}
const qp = A.div`
  position: relative;
  display: inline-block;
`, Gp = A(gn.div)`
  position: absolute;
  z-index: 100;
`, Pa = Me({
  toasts: [],
  setToast() {
  }
}), Kp = () => K(Pa);
let Yp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Xp(e) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function Jp(e) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.25 6.75L6.75 17.25"
  }), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6.75 6.75L17.25 17.25"
  }));
}
function Zp(e) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function Ra(e) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ F.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function Qp(e) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ F.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function em({
  children: e,
  duration: t,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s
}) {
  const [i, a] = oe(100);
  return te(() => {
    const c = setInterval(() => {
      if (i === 0) {
        clearInterval(c);
        return;
      }
      const u = (/* @__PURE__ */ new Date()).getTime();
      a(100 - (u - s) / t * 100);
    }, t / 100);
    return () => clearInterval(c);
  }, [i]), /* @__PURE__ */ j(tm, { children: [
    /* @__PURE__ */ j(nm, { children: [
      /* @__PURE__ */ E(
        rm,
        {
          as: r === "info" ? Ra : r === "error" ? Qp : Xp,
          type: r
        }
      ),
      /* @__PURE__ */ E(om, { children: e })
    ] }),
    /* @__PURE__ */ j(im, { children: [
      n && /* @__PURE__ */ E(
        Da,
        {
          onClick: async () => {
            await n.task(), o();
          },
          children: n.name
        }
      ),
      /* @__PURE__ */ E(sm, { onClick: o, children: /* @__PURE__ */ E(am, {}) })
    ] })
  ] });
}
const ka = ".2rem", tm = A(gn.div).attrs({
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
  background-color: ${(e) => e.theme.displayTheme === "light" ? "black" : e.theme.cardBackground};
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${ka});
  padding: 0.5rem 1.1rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(e) => e.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + e.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, Va = {
  success: "20, 209, 16",
  error: "255, 0, 0"
};
A.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${ka};
  width: ${(e) => e.progress || "100"}%;
  background-color: rgb(
    ${(e) => e.type === "info" ? e.theme.theme : Va[e.type]}
  );
  transition: all 0.05s ease-in-out;
`;
const en = ".35rem", nm = A.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, rm = A(Ra)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  color: rgb(
    ${(e) => e.type === "info" ? e.theme.theme : Va[e.type]}
  );
`, om = A.div`
  padding: ${en} 0;
`, im = A.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, hr = "1rem", Da = A.button`
  font-size: ${hr};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${en} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, sm = A(Da)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${en} * 2 + ${hr});
  height: calc(${en} * 2 + ${hr});
`, am = A(Jp)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, cm = ({ setToasts: e }) => {
  const { toasts: t } = Kp();
  return /* @__PURE__ */ E(lm, { children: /* @__PURE__ */ E(yn, { children: t.map((n, r) => /* @__PURE__ */ E(
    em,
    {
      action: n.action,
      duration: n.duration,
      type: n.type,
      close: (o) => {
        e((s) => s.filter((i) => i.id !== o));
      },
      addedAt: n.addedAt,
      children: n.content
    },
    r
  )) }) });
}, lm = A.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  bottom: 1rem;
  right: 1rem;
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`, Fm = {
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
}, Lm = {
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
function Mm({
  children: e,
  theme: t
}) {
  const [n, r] = oe([]);
  function o(s) {
    const i = Yp();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((c) => c.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ E(uc, { theme: t, children: /* @__PURE__ */ j(Pa.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ E(cm, { setToasts: r }),
    e
  ] }) });
}
const _m = A.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal: e = !0, showPaddingVertical: t = !0 }) => `${t ? "24px" : "0px"} ${e ? "24px" : "0px"}`};
`;
function Bm({
  children: e,
  label: t,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = Ce(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ j(ji, { children: [
    t && /* @__PURE__ */ E(zi, { children: t }),
    /* @__PURE__ */ j(
      Ui,
      {
        fullWidth: n,
        sizeVariant: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ E(um, { ...i, children: e }),
          /* @__PURE__ */ E(zn, { position: "right", children: /* @__PURE__ */ E(Wn, { as: Ni }) })
        ]
      }
    )
  ] });
}
const um = A.select`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: 16px;
  font-weight: 500;
  padding: ${(e) => e.small ? "12px" : "12px 14px"};
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
`;
function Im({
  children: e,
  content: t,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, c, u;
  const [s, i] = oe(!1);
  return /* @__PURE__ */ j(
    dm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ E(yn, { children: s && /* @__PURE__ */ E(
          fm,
          {
            ...o,
            position: r,
            style: nt(r),
            initial: {
              opacity: 0,
              transform: (((a = nt(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((c = nt(r)) == null ? void 0 : c.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((u = nt(r)) == null ? void 0 : u.transform) || "") + " scale(.95)"
            },
            transition: { duration: 0.23, ease: "easeInOut" },
            children: t
          }
        ) }),
        e
      ]
    }
  );
}
const dm = A.div`
  position: relative;
  display: inline-flex;
  ${(e) => e.underline ? "border-bottom: 1px dotted rgb(" + e.theme.cardBorder + ");" : ""}
  ${(e) => e.underline ? "cursor: pointer;" : ""}
`, fm = A(gn.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 0px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${(e) => e.theme.backgroundSecondary};
  z-index: 100;
  width: max-content;
  min-width: 109px;
  line-height: 19px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);

  &::after {
    position: absolute;
    content: "";
    border: 7.5px solid;
    pointer-events: none;
    border-color: ${(e) => e.position.startsWith("top") ? e.theme.backgroundSecondary : "transparent"}
      ${(e) => e.position.startsWith("right") ? e.theme.backgroundSecondary : "transparent"}
      ${(e) => e.position.startsWith("bottom") ? e.theme.backgroundSecondary : "transparent"}
      ${(e) => e.position.startsWith("left") ? e.theme.backgroundSecondary : "transparent"};
    ${(e) => wu(e.position)}
  }
`, jm = A.span`
  display: block;
  height: ${({ y: e }) => e ? `${e}rem` : "0"};
  width: ${({ x: e }) => e ? `${e}rem` : "0"};
`;
function $m({
  children: e,
  accept: t,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = oe([]);
  return te(() => {
    if (!(r != null && r.current))
      return;
    const a = () => {
      var u;
      const c = (u = r == null ? void 0 : r.current) == null ? void 0 : u.files;
      if (!c || c.length === 0)
        return i([]);
      i(Array.from(c).map((l) => l.name));
    };
    return r.current.addEventListener("change", a), () => {
      var c;
      return (c = r.current) == null ? void 0 : c.removeEventListener("change", a);
    };
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ j(hm, { ...o, children: [
    /* @__PURE__ */ E(vt, { children: s.length === 0 && e || s.join(", ") }),
    /* @__PURE__ */ E(mm, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ E(Zp, {}) }),
    /* @__PURE__ */ E(pm, { accept: t, multiple: n, ref: r })
  ] });
}
const hm = A($i).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, pm = A.input.attrs({
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
`, mm = A(vc).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Nm({
  children: e,
  open: t,
  setOpen: n,
  actions: r,
  root: o,
  showCloseIcon: s = !1
}) {
  return dc.createPortal(
    /* @__PURE__ */ E(yn, { children: t && /* @__PURE__ */ E(gm, { onClick: () => n(!1), children: /* @__PURE__ */ j(ym, { onClick: (i) => i.stopPropagation(), children: [
      s && /* @__PURE__ */ E(xm, { onClick: () => n(!1) }),
      /* @__PURE__ */ E(vm, { children: e }),
      r && /* @__PURE__ */ E(bm, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const gm = A(gn.div).attrs({
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
`, ym = A.div`
  position: relative;
  background-color: ${(e) => e.theme.surfaceSecondaryPopup};
  border: 1px solid ${(e) => e.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`, vm = A.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(e) => e.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`, bm = A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`, xm = A(Fc)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  color: ${(e) => e.theme.tertiaryText};

  &:hover {
    color: ${(e) => e.theme.secondaryText};
  }

  &:active {
    color: ${(e) => e.theme.secondaryText};
    transform: scale(0.9);
  }
`;
export {
  Lm as ARCONNECT_DARK_THEME,
  Fm as ARCONNECT_LIGHT_THEME,
  vc as Button,
  $i as Card,
  Pm as Checkbox,
  Mc as ErrorMsg,
  $m as FileInput,
  Wn as Icon,
  zn as IconWrapper,
  Rm as Input,
  _c as InputElement,
  Ui as InputWrapper,
  zi as Label,
  km as ListItem,
  Fo as ListItemIcon,
  Vm as ListItemImg,
  mc as Loading,
  Nm as Modal,
  Om as Popover,
  Mm as Provider,
  _m as Section,
  Bm as Select,
  jm as Spacer,
  vt as Text,
  Im as Tooltip,
  Sm as useCheckbox,
  Cm as useInput,
  Am as useModal,
  Kp as useToasts
};
