import * as _ from "react";
import vt, { useState as oe, useCallback as Me, useMemo as ge, useEffect as ne, createContext as _e, useContext as G, useLayoutEffect as oc, useRef as Q, forwardRef as ic, createElement as ji, useId as pr, useInsertionEffect as sc, cloneElement as ac, Children as cc, isValidElement as lc } from "react";
import P, { keyframes as uc, ThemeProvider as fc } from "styled-components";
import dc from "react-dom";
function Am(e) {
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
function Rm(e = !1) {
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
function km(e = !1) {
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
var dt = {}, hc = {
  get exports() {
    return dt;
  },
  set exports(e) {
    dt = e;
  }
}, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function pc() {
  if (bo)
    return Ze;
  bo = 1;
  var e = vt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var l, f = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (l in c)
      r.call(c, l) && !s.hasOwnProperty(l) && (f[l] = c[l]);
    if (a && a.defaultProps)
      for (l in c = a.defaultProps, c)
        f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: a, key: h, ref: p, props: f, _owner: o.current };
  }
  return Ze.Fragment = n, Ze.jsx = i, Ze.jsxs = i, Ze;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function mc() {
  return xo || (xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function T(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = m && d[m] || d[g];
      return typeof x == "function" ? x : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(d) {
      {
        for (var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), R = 1; R < x; R++)
          S[R - 1] = arguments[R];
        b("error", d, S);
      }
    }
    function b(d, x, S) {
      {
        var R = v.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (x += "%s", S = S.concat([F]));
        var B = S.map(function(D) {
          return String(D);
        });
        B.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, B);
      }
    }
    var C = !1, V = !1, L = !1, W = !1, X = !1, J;
    J = Symbol.for("react.module.reference");
    function H(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === s || X || d === o || d === u || d === l || W || d === p || C || V || L || typeof d == "object" && d !== null && (d.$$typeof === h || d.$$typeof === f || d.$$typeof === i || d.$$typeof === a || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === J || d.getModuleId !== void 0));
    }
    function ae(d, x, S) {
      var R = d.displayName;
      if (R)
        return R;
      var F = x.displayName || x.name || "";
      return F !== "" ? S + "(" + F + ")" : S;
    }
    function de(d) {
      return d.displayName || "Context";
    }
    function Z(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
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
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var x = d;
            return de(x) + ".Consumer";
          case i:
            var S = d;
            return de(S._context) + ".Provider";
          case c:
            return ae(d, d.render, "ForwardRef");
          case f:
            var R = d.displayName || null;
            return R !== null ? R : Z(d.type) || "Memo";
          case h: {
            var F = d, B = F._payload, D = F._init;
            try {
              return Z(D(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, M = 0, re, xe, Zr, Qr, eo, to, no;
    function ro() {
    }
    ro.__reactDisabledLog = !0;
    function Fa() {
      {
        if (M === 0) {
          re = console.log, xe = console.info, Zr = console.warn, Qr = console.error, eo = console.group, to = console.groupCollapsed, no = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ro,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        M++;
      }
    }
    function La() {
      {
        if (M--, M === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, d, {
              value: re
            }),
            info: K({}, d, {
              value: xe
            }),
            warn: K({}, d, {
              value: Zr
            }),
            error: K({}, d, {
              value: Qr
            }),
            group: K({}, d, {
              value: eo
            }),
            groupCollapsed: K({}, d, {
              value: to
            }),
            groupEnd: K({}, d, {
              value: no
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vn = v.ReactCurrentDispatcher, bn;
    function Pt(d, x, S) {
      {
        if (bn === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            bn = R && R[1] || "";
          }
        return `
` + bn + d;
      }
    }
    var xn = !1, At;
    {
      var Ma = typeof WeakMap == "function" ? WeakMap : Map;
      At = new Ma();
    }
    function oo(d, x) {
      if (!d || xn)
        return "";
      {
        var S = At.get(d);
        if (S !== void 0)
          return S;
      }
      var R;
      xn = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = vn.current, vn.current = null, Fa();
      try {
        if (x) {
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
            } catch (we) {
              R = we;
            }
            Reflect.construct(d, [], D);
          } else {
            try {
              D.call();
            } catch (we) {
              R = we;
            }
            d.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            R = we;
          }
          d();
        }
      } catch (we) {
        if (we && R && typeof we.stack == "string") {
          for (var k = we.stack.split(`
`), ee = R.stack.split(`
`), N = k.length - 1, U = ee.length - 1; N >= 1 && U >= 0 && k[N] !== ee[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (k[N] !== ee[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || k[N] !== ee[U]) {
                    var ce = `
` + k[N].replace(" at new ", " at ");
                    return d.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", d.displayName)), typeof d == "function" && At.set(d, ce), ce;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        xn = !1, vn.current = B, La(), Error.prepareStackTrace = F;
      }
      var Ne = d ? d.displayName || d.name : "", vo = Ne ? Pt(Ne) : "";
      return typeof d == "function" && At.set(d, vo), vo;
    }
    function _a(d, x, S) {
      return oo(d, !1);
    }
    function Ba(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function Rt(d, x, S) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return oo(d, Ba(d));
      if (typeof d == "string")
        return Pt(d);
      switch (d) {
        case u:
          return Pt("Suspense");
        case l:
          return Pt("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return _a(d.render);
          case f:
            return Rt(d.type, x, S);
          case h: {
            var R = d, F = R._payload, B = R._init;
            try {
              return Rt(B(F), x, S);
            } catch {
            }
          }
        }
      return "";
    }
    var kt = Object.prototype.hasOwnProperty, io = {}, so = v.ReactDebugCurrentFrame;
    function Vt(d) {
      if (d) {
        var x = d._owner, S = Rt(d.type, d._source, x ? x.type : null);
        so.setExtraStackFrame(S);
      } else
        so.setExtraStackFrame(null);
    }
    function Ia(d, x, S, R, F) {
      {
        var B = Function.call.bind(kt);
        for (var D in d)
          if (B(d, D)) {
            var k = void 0;
            try {
              if (typeof d[D] != "function") {
                var ee = Error((R || "React class") + ": " + S + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              k = d[D](x, D, R, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (Vt(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", S, D, typeof k), Vt(null)), k instanceof Error && !(k.message in io) && (io[k.message] = !0, Vt(F), w("Failed %s type: %s", S, k.message), Vt(null));
          }
      }
    }
    var ja = Array.isArray;
    function wn(d) {
      return ja(d);
    }
    function $a(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, S = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return S;
      }
    }
    function Na(d) {
      try {
        return ao(d), !1;
      } catch {
        return !0;
      }
    }
    function ao(d) {
      return "" + d;
    }
    function co(d) {
      if (Na(d))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $a(d)), ao(d);
    }
    var Je = v.ReactCurrentOwner, Ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lo, uo, Tn;
    Tn = {};
    function za(d) {
      if (kt.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Wa(d) {
      if (kt.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Ha(d, x) {
      if (typeof d.ref == "string" && Je.current && x && Je.current.stateNode !== x) {
        var S = Z(Je.current.type);
        Tn[S] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Je.current.type), d.ref), Tn[S] = !0);
      }
    }
    function qa(d, x) {
      {
        var S = function() {
          lo || (lo = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Ga(d, x) {
      {
        var S = function() {
          uo || (uo = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Ka = function(d, x, S, R, F, B, D) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: S,
        props: D,
        // Record the component responsible for creating this element.
        _owner: B
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
        value: F
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Ya(d, x, S, R, F) {
      {
        var B, D = {}, k = null, ee = null;
        S !== void 0 && (co(S), k = "" + S), Wa(x) && (co(x.key), k = "" + x.key), za(x) && (ee = x.ref, Ha(x, F));
        for (B in x)
          kt.call(x, B) && !Ua.hasOwnProperty(B) && (D[B] = x[B]);
        if (d && d.defaultProps) {
          var N = d.defaultProps;
          for (B in N)
            D[B] === void 0 && (D[B] = N[B]);
        }
        if (k || ee) {
          var U = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          k && qa(D, U), ee && Ga(D, U);
        }
        return Ka(d, k, ee, F, R, Je.current, D);
      }
    }
    var Cn = v.ReactCurrentOwner, fo = v.ReactDebugCurrentFrame;
    function $e(d) {
      if (d) {
        var x = d._owner, S = Rt(d.type, d._source, x ? x.type : null);
        fo.setExtraStackFrame(S);
      } else
        fo.setExtraStackFrame(null);
    }
    var En;
    En = !1;
    function Sn(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function ho() {
      {
        if (Cn.current) {
          var d = Z(Cn.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Xa(d) {
      {
        if (d !== void 0) {
          var x = d.fileName.replace(/^.*[\\\/]/, ""), S = d.lineNumber;
          return `

Check your code at ` + x + ":" + S + ".";
        }
        return "";
      }
    }
    var po = {};
    function Ja(d) {
      {
        var x = ho();
        if (!x) {
          var S = typeof d == "string" ? d : d.displayName || d.name;
          S && (x = `

Check the top-level render call using <` + S + ">.");
        }
        return x;
      }
    }
    function mo(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var S = Ja(x);
        if (po[S])
          return;
        po[S] = !0;
        var R = "";
        d && d._owner && d._owner !== Cn.current && (R = " It was passed a child from " + Z(d._owner.type) + "."), $e(d), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, R), $e(null);
      }
    }
    function go(d, x) {
      {
        if (typeof d != "object")
          return;
        if (wn(d))
          for (var S = 0; S < d.length; S++) {
            var R = d[S];
            Sn(R) && mo(R, x);
          }
        else if (Sn(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var F = T(d);
          if (typeof F == "function" && F !== d.entries)
            for (var B = F.call(d), D; !(D = B.next()).done; )
              Sn(D.value) && mo(D.value, x);
        }
      }
    }
    function Za(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var S;
        if (typeof x == "function")
          S = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === f))
          S = x.propTypes;
        else
          return;
        if (S) {
          var R = Z(x);
          Ia(S, d.props, "prop", R, d);
        } else if (x.PropTypes !== void 0 && !En) {
          En = !0;
          var F = Z(x);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qa(d) {
      {
        for (var x = Object.keys(d.props), S = 0; S < x.length; S++) {
          var R = x[S];
          if (R !== "children" && R !== "key") {
            $e(d), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), $e(null);
            break;
          }
        }
        d.ref !== null && ($e(d), w("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function yo(d, x, S, R, F, B) {
      {
        var D = H(d);
        if (!D) {
          var k = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Xa(F);
          ee ? k += ee : k += ho();
          var N;
          d === null ? N = "null" : wn(d) ? N = "array" : d !== void 0 && d.$$typeof === t ? (N = "<" + (Z(d.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof d, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var U = Ya(d, x, S, F, B);
        if (U == null)
          return U;
        if (D) {
          var ce = x.children;
          if (ce !== void 0)
            if (R)
              if (wn(ce)) {
                for (var Ne = 0; Ne < ce.length; Ne++)
                  go(ce[Ne], d);
                Object.freeze && Object.freeze(ce);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(ce, d);
        }
        return d === r ? Qa(U) : Za(U), U;
      }
    }
    function ec(d, x, S) {
      return yo(d, x, S, !0);
    }
    function tc(d, x, S) {
      return yo(d, x, S, !1);
    }
    var nc = tc, rc = ec;
    Qe.Fragment = r, Qe.jsx = nc, Qe.jsxs = rc;
  }()), Qe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = pc() : e.exports = mc();
})(hc);
const mr = dt.Fragment, E = dt.jsx, j = dt.jsxs, gc = (e) => /* @__PURE__ */ j(
  vc,
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
), yc = uc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, vc = P.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${yc} 0.9s linear infinite;
`, bc = P.button.attrs((e) => ({
  children: e.loading ? /* @__PURE__ */ E(gc, { style: { margin: ".18rem 0" } }) : e.icon ? /* @__PURE__ */ j(mr, { children: [
    (!e.iconPosition || e.iconPosition === "left") && e.icon,
    e.children,
    e.iconPosition === "right" && e.icon
  ] }) : e.children
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
`, $i = P.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(e) => e.theme.cardBorder});
  background-color: ${(e) => e.theme.cardBackground};
`, xc = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, wc = {
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
function bt({
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
    Tc,
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
const Tc = P.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(e) => wc[e.$size]};
  font-weight: ${(e) => xc[e.$weight]};
  ${(e) => e.$lineHeight && `line-height: ${e.$lineHeight};`}
  color: ${(e) => e.$variant === "primary" ? e.theme.primaryText : e.$variant === "secondary" ? e.theme.secondaryText : e.theme.tertiaryText};
  ${(e) => e.$noMargin && "margin: 0;"}
`, Vm = ({
  checked: e,
  onChange: t,
  size: n = 24,
  label: r,
  labelProps: o
}) => {
  const s = Me(() => {
    t && t(!e);
  }, [t, e]);
  return /* @__PURE__ */ j(Cc, { size: n, onClick: s, children: [
    /* @__PURE__ */ j(Ec, { children: [
      /* @__PURE__ */ E(
        Sc,
        {
          checked: e,
          "aria-checked": e,
          role: "checkbox"
        }
      ),
      /* @__PURE__ */ E(Pc, { size: n })
    ] }),
    r && // @ts-ignore
    /* @__PURE__ */ E(Ac, { ...o, size: n, children: r })
  ] });
}, Cc = P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(e) => Math.max(8, e.size ? e.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`, Ec = P.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
`, Sc = P.input.attrs({ type: "checkbox" })`
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
`, Pc = P.label`
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
`, Ac = P(bt).attrs({
  weight: "medium",
  noMargin: !0
})`
  font-size: ${(e) => Math.max(14, e.size ? e.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(e) => Math.max(e.size || 24, 24)}px;
`;
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ye.apply(this, arguments);
}
var Rc = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
  return /* @__PURE__ */ E("svg", ye({
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
}, kc = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
}, Vc = function(t) {
  return /* @__PURE__ */ j("svg", ye({
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
}, Dc = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
}, Oc = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
}, Fc = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
}, Ui = function(t) {
  return /* @__PURE__ */ E("svg", ye({
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
}, Mc = {
  small: "16px",
  normal: "18px",
  large: "40px"
};
function Dm({
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
  labelStyle: f,
  type: h = "text",
  onBlur: p,
  stacked: m,
  ...g
}) {
  const [T, v] = oe(!1), [w, b] = oe(null), [C, V] = oe(!1), L = ge(() => h === "password" ? C ? "text" : "password" : h, [s, C, h]), W = ge(
    () => ({
      fullWidth: t,
      sizeVariant: n,
      variant: s,
      status: r,
      disabled: o,
      iconLeft: i,
      iconRight: a,
      special: u,
      ...g
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
      g
    ]
  ), X = (K) => {
    const M = setTimeout(() => {
      v(!1), clearTimeout(M);
    }, 200);
    b(M), p == null || p(K);
  }, J = (K) => {
    var M;
    K.preventDefault(), w && clearTimeout(w), v(!0), (M = g == null ? void 0 : g.onChange) == null || M.call(g, {
      target: { value: "" }
    });
  }, H = () => a || (h === "password" ? /* @__PURE__ */ E(
    Wn,
    {
      as: C ? Dc : Vc,
      onClick: () => V(!C)
    }
  ) : s === "dropdown" ? /* @__PURE__ */ E(Wn, { as: Ni, disabled: o }) : g.value && T ? /* @__PURE__ */ E(jc, { onClick: J, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ E(Rc, { height: 20, width: 20, color: "#D22B1F" }) : null), de = (() => i || (s === "search" ? /* @__PURE__ */ E(Ic, { disabled: o }) : null))(), Z = H();
  return /* @__PURE__ */ j(mr, { children: [
    e && /* @__PURE__ */ E(Wi, { style: f, children: e }),
    /* @__PURE__ */ j(
      zi,
      {
        fullWidth: t,
        sizeVariant: n,
        status: r ?? "default",
        disabled: o,
        variant: s,
        special: u,
        style: l,
        stacked: m,
        children: [
          de && /* @__PURE__ */ E(zn, { position: "left", children: de }),
          /* @__PURE__ */ j($c, { stacked: m, children: [
            /* @__PURE__ */ E(
              Bc,
              {
                ...W,
                type: L,
                disabled: o,
                onFocus: () => v(!0),
                onBlur: X
              }
            ),
            Z && /* @__PURE__ */ E(zn, { position: "right", children: Z })
          ] })
        ]
      }
    ),
    r === "error" && /* @__PURE__ */ E(_c, { children: c })
  ] });
}
const zi = P.div`
  position: relative;
  display: flex;
  flex-direction: ${(e) => e.stacked ? "column" : "row"};
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
`, Wi = P.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, _c = P.p`
  color: ${(e) => e.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, Bc = P.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: ${(e) => Mc[e.sizeVariant ?? "normal"]};
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
`, zn = P.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, Ic = P(Oc)`
  color: ${(e) => e.theme.input.icons[e.disabled ? "searchInactive" : "searchActive"]};
`, Wn = P(Fc)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme: e, disabled: t }) => t ? e.tertiaryText : e.secondaryText};
`, jc = ({
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
), $c = P.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  flex: ${(e) => e.stacked ? "0" : "1"};
`;
function Nc({ dragControls: e }) {
  function t(n) {
    n.stopPropagation(), e.start(n);
  }
  return /* @__PURE__ */ E(
    Uc,
    {
      onPointerDown: t,
      title: "Click & drag",
      children: /* @__PURE__ */ j(
        zc,
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
const Uc = P.div`
  display: flex;
  color: rgb(${(e) => e.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, zc = P.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let Dt;
const Wc = new Uint8Array(16);
function Hc() {
  if (!Dt && (Dt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Dt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Dt(Wc);
}
const Y = [];
for (let e = 0; e < 256; ++e)
  Y.push((e + 256).toString(16).slice(1));
function qc(e, t = 0) {
  return Y[e[t + 0]] + Y[e[t + 1]] + Y[e[t + 2]] + Y[e[t + 3]] + "-" + Y[e[t + 4]] + Y[e[t + 5]] + "-" + Y[e[t + 6]] + Y[e[t + 7]] + "-" + Y[e[t + 8]] + Y[e[t + 9]] + "-" + Y[e[t + 10]] + Y[e[t + 11]] + Y[e[t + 12]] + Y[e[t + 13]] + Y[e[t + 14]] + Y[e[t + 15]];
}
const Gc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wo = {
  randomUUID: Gc
};
function Kc(e, t, n) {
  if (wo.randomUUID && !t && !e)
    return wo.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Hc)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return qc(r);
}
function Hi(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Yc } = Object.prototype, { getPrototypeOf: gr } = Object, tn = ((e) => (t) => {
  const n = Yc.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (t) => tn(t) === e), nn = (e) => (t) => typeof t === e, { isArray: Xe } = Array, ht = nn("undefined");
function Xc(e) {
  return e !== null && !ht(e) && e.constructor !== null && !ht(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qi = be("ArrayBuffer");
function Jc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qi(e.buffer), t;
}
const Zc = nn("string"), le = nn("function"), Gi = nn("number"), rn = (e) => e !== null && typeof e == "object", Qc = (e) => e === !0 || e === !1, Bt = (e) => {
  if (tn(e) !== "object")
    return !1;
  const t = gr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, el = be("Date"), tl = be("File"), nl = be("Blob"), rl = be("FileList"), ol = (e) => rn(e) && le(e.pipe), il = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || le(e.append) && ((t = tn(e)) === "formdata" || // detect form-data instance
  t === "object" && le(e.toString) && e.toString() === "[object FormData]"));
}, sl = be("URLSearchParams"), al = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Xe(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Ki(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Yi = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Xi = (e) => !ht(e) && e !== Yi;
function Hn() {
  const { caseless: e } = Xi(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Ki(t, o) || o;
    Bt(t[s]) && Bt(r) ? t[s] = Hn(t[s], r) : Bt(r) ? t[s] = Hn({}, r) : Xe(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && xt(arguments[r], n);
  return t;
}
const cl = (e, t, n, { allOwnKeys: r } = {}) => (xt(t, (o, s) => {
  n && le(o) ? e[s] = Hi(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), ll = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ul = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, fl = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && gr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, dl = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, hl = (e) => {
  if (!e)
    return null;
  if (Xe(e))
    return e;
  let t = e.length;
  if (!Gi(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, pl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gr(Uint8Array)), ml = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, gl = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, yl = be("HTMLFormElement"), vl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), To = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), bl = be("RegExp"), Ji = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  xt(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, xl = (e) => {
  Ji(e, (t, n) => {
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
}, wl = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Xe(e) ? r(e) : r(String(e).split(t)), n;
}, Tl = () => {
}, Cl = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Pn = "abcdefghijklmnopqrstuvwxyz", Co = "0123456789", Zi = {
  DIGIT: Co,
  ALPHA: Pn,
  ALPHA_DIGIT: Pn + Pn.toUpperCase() + Co
}, El = (e = 16, t = Zi.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Sl(e) {
  return !!(e && le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Pl = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (rn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Xe(r) ? [] : {};
        return xt(r, (i, a) => {
          const c = n(i, o + 1);
          !ht(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Al = be("AsyncFunction"), Rl = (e) => e && (rn(e) || le(e)) && le(e.then) && le(e.catch), y = {
  isArray: Xe,
  isArrayBuffer: qi,
  isBuffer: Xc,
  isFormData: il,
  isArrayBufferView: Jc,
  isString: Zc,
  isNumber: Gi,
  isBoolean: Qc,
  isObject: rn,
  isPlainObject: Bt,
  isUndefined: ht,
  isDate: el,
  isFile: tl,
  isBlob: nl,
  isRegExp: bl,
  isFunction: le,
  isStream: ol,
  isURLSearchParams: sl,
  isTypedArray: pl,
  isFileList: rl,
  forEach: xt,
  merge: Hn,
  extend: cl,
  trim: al,
  stripBOM: ll,
  inherits: ul,
  toFlatObject: fl,
  kindOf: tn,
  kindOfTest: be,
  endsWith: dl,
  toArray: hl,
  forEachEntry: ml,
  matchAll: gl,
  isHTMLForm: yl,
  hasOwnProperty: To,
  hasOwnProp: To,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ji,
  freezeMethods: xl,
  toObjectSet: wl,
  toCamelCase: vl,
  noop: Tl,
  toFiniteNumber: Cl,
  findKey: Ki,
  global: Yi,
  isContextDefined: Xi,
  ALPHABET: Zi,
  generateString: El,
  isSpecCompliantForm: Sl,
  toJSONObject: Pl,
  isAsyncFn: Al,
  isThenable: Rl
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
const Qi = O.prototype, es = {};
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
  es[e] = { value: e };
});
Object.defineProperties(O, es);
Object.defineProperty(Qi, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, o, s) => {
  const i = Object.create(Qi);
  return y.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), O.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const kl = null;
function qn(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function ts(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Eo(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = ts(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Vl(e) {
  return y.isArray(e) && !e.some(qn);
}
const Dl = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function on(e, t, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, T) {
    return !y.isUndefined(T[g]);
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
  function l(m, g, T) {
    let v = m;
    if (m && !T && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && Vl(m) || (y.isFileList(m) || y.endsWith(g, "[]")) && (v = y.toArray(m)))
        return g = ts(g), v.forEach(function(b, C) {
          !(y.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Eo([g], C, s) : i === null ? g : g + "[]",
            u(b)
          );
        }), !1;
    }
    return qn(m) ? !0 : (t.append(Eo(T, g, s), u(m)), !1);
  }
  const f = [], h = Object.assign(Dl, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: qn
  });
  function p(m, g) {
    if (!y.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(m), y.forEach(m, function(v, w) {
        (!(y.isUndefined(v) || v === null) && o.call(
          t,
          v,
          y.isString(w) ? w.trim() : w,
          g,
          h
        )) === !0 && p(v, g ? g.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function So(e) {
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
function yr(e, t) {
  this._pairs = [], e && on(e, this, t);
}
const ns = yr.prototype;
ns.append = function(t, n) {
  this._pairs.push([t, n]);
};
ns.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, So);
  } : So;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Ol(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function rs(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ol, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = y.isURLSearchParams(t) ? t.toString() : new yr(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Fl {
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
const Po = Fl, os = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ll = typeof URLSearchParams < "u" ? URLSearchParams : yr, Ml = typeof FormData < "u" ? FormData : null, _l = typeof Blob < "u" ? Blob : null, Bl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ll,
    FormData: Ml,
    Blob: _l
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, is = typeof window < "u" && typeof document < "u", Il = ((e) => is && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), jl = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: is,
  hasStandardBrowserEnv: Il,
  hasStandardBrowserWebWorkerEnv: jl
}, Symbol.toStringTag, { value: "Module" })), pe = {
  ...$l,
  ...Bl
};
function Nl(e, t) {
  return on(e, new pe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return pe.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ul(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function zl(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function ss(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, c ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = zl(o[i])), !a);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (r, o) => {
      t(Ul(r), o, n, 0);
    }), n;
  }
  return null;
}
function Wl(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const vr = {
  transitional: os,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(t);
    if (s && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return o ? JSON.stringify(ss(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Nl(t, this.formSerializer).toString();
      if ((a = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return on(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Wl(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || vr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
  vr.headers[e] = {};
});
const br = vr, Hl = y.toObjectSet([
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
]), ql = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Hl[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ao = Symbol("internals");
function et(e) {
  return e && String(e).trim().toLowerCase();
}
function It(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(It) : String(e);
}
function Gl(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Kl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function An(e, t, n, r, o) {
  if (y.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!y.isString(t)) {
    if (y.isString(r))
      return t.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(t);
  }
}
function Yl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Xl(e, t) {
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
      const l = et(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(o, l);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = It(a));
    }
    const i = (a, c) => y.forEach(a, (u, l) => s(u, l, c));
    return y.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : y.isString(t) && (t = t.trim()) && !Kl(t) ? i(ql(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = et(t), t) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Gl(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = et(t), t) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || An(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = et(i), i) {
        const a = y.findKey(r, i);
        a && (!n || An(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return y.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || An(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = It(o), delete n[s];
        return;
      }
      const a = t ? Yl(s) : String(s).trim();
      a !== s && delete n[s], n[a] = It(o), r[a] = !0;
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
      const a = et(i);
      r[a] || (Xl(o, i), r[a] = !0);
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
const Ce = sn;
function Rn(e, t) {
  const n = this || br, r = t || n, o = Ce.from(r.headers);
  let s = r.data;
  return y.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function as(e) {
  return !!(e && e.__CANCEL__);
}
function wt(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n), this.name = "CanceledError";
}
y.inherits(wt, O, {
  __CANCEL__: !0
});
function Jl(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new O(
    "Request failed with status code " + n.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Zl = pe.hasStandardBrowserEnv ? (
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
function Ql(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function eu(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function cs(e, t) {
  return e && !Ql(t) ? eu(e, t) : t;
}
const tu = pe.hasStandardBrowserEnv ? (
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
function nu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ru(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = r[s];
    i || (i = u), n[o] = c, r[o] = u;
    let f = s, h = 0;
    for (; f !== o; )
      h += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const p = l && u - l;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Ro(e, t) {
  let n = 0;
  const r = ru(50, 250);
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
const ou = typeof XMLHttpRequest < "u", iu = ou && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Ce.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: a } = e, c;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let l;
    if (y.isFormData(o)) {
      if (pe.hasStandardBrowserEnv || pe.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((l = s.getContentType()) !== !1) {
        const [g, ...T] = l ? l.split(";").map((v) => v.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...T].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + T));
    }
    const h = cs(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), rs(h, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function p() {
      if (!f)
        return;
      const g = Ce.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), v = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: g,
        config: e,
        request: f
      };
      Jl(function(b) {
        n(b), u();
      }, function(b) {
        r(b), u();
      }, v), f = null;
    }
    if ("onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, f.onabort = function() {
      f && (r(new O("Request aborted", O.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const v = e.transitional || os;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), r(new O(
        T,
        v.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        f
      )), f = null;
    }, pe.hasStandardBrowserEnv && (a && y.isFunction(a) && (a = a(e)), a || a !== !1 && tu(h))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && Zl.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in f && y.forEach(s.toJSON(), function(T, v) {
      f.setRequestHeader(v, T);
    }), y.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), i && i !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", Ro(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Ro(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (g) => {
      f && (r(!g || g.type ? new wt(null, e, f) : g), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const m = nu(h);
    if (m && pe.protocols.indexOf(m) === -1) {
      r(new O("Unsupported protocol " + m + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(o || null);
  });
}, Gn = {
  http: kl,
  xhr: iu
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
const ko = (e) => `- ${e}`, su = (e) => y.isFunction(e) || e === null || e === !1, ls = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !su(n) && (r = Gn[(i = String(n)).toLowerCase()], r === void 0))
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
` + s.map(ko).join(`
`) : " " + ko(s[0]) : "as no adapter specified";
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
    throw new wt(null, e);
}
function Vo(e) {
  return kn(e), e.headers = Ce.from(e.headers), e.data = Rn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ls.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return kn(e), r.data = Rn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ce.from(r.headers), r;
  }, function(r) {
    return as(r) || (kn(e), r && r.response && (r.response.data = Rn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ce.from(r.response.headers))), Promise.reject(r);
  });
}
const Do = (e) => e instanceof Ce ? e.toJSON() : e;
function Ge(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, f) {
    return y.isPlainObject(u) && y.isPlainObject(l) ? y.merge.call({ caseless: f }, u, l) : y.isPlainObject(l) ? y.merge({}, l) : y.isArray(l) ? l.slice() : l;
  }
  function o(u, l, f) {
    if (y.isUndefined(l)) {
      if (!y.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, l, f);
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
  function a(u, l, f) {
    if (f in t)
      return r(u, l);
    if (f in e)
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
    headers: (u, l) => o(Do(u), Do(l), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = c[l] || o, h = f(e[l], t[l], l);
    y.isUndefined(h) && f !== a || (n[l] = h);
  }), n;
}
const us = "1.6.7", xr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Oo = {};
xr.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + us + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new O(
        o(i, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return n && !Oo[i] && (Oo[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function au(e, t, n) {
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
  assertOptions: au,
  validators: xr
}, Se = Kn.validators;
class Ut {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Po(),
      response: new Po()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ge(this.defaults, n);
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
    ), n.headers = Ce.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let l, f = 0, h;
    if (!c) {
      const m = [Vo.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), h = m.length, l = Promise.resolve(n); f < h; )
        l = l.then(m[f++], m[f++]);
      return l;
    }
    h = a.length;
    let p = n;
    for (f = 0; f < h; ) {
      const m = a[f++], g = a[f++];
      try {
        p = m(p);
      } catch (T) {
        g.call(this, T);
        break;
      }
    }
    try {
      l = Vo.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = u.length; f < h; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(t) {
    t = Ge(this.defaults, t);
    const n = cs(t.baseURL, t.url);
    return rs(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(t) {
  Ut.prototype[t] = function(n, r) {
    return this.request(Ge(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(Ge(a || {}, {
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
const jt = Ut;
class wr {
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
      r.reason || (r.reason = new wt(s, i, a), n(r.reason));
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
      token: new wr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const cu = wr;
function lu(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function uu(e) {
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
const fu = Yn;
function fs(e) {
  const t = new jt(e), n = Hi(jt.prototype.request, t);
  return y.extend(n, jt.prototype, t, { allOwnKeys: !0 }), y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return fs(Ge(e, o));
  }, n;
}
const z = fs(br);
z.Axios = jt;
z.CanceledError = wt;
z.CancelToken = cu;
z.isCancel = as;
z.VERSION = us;
z.toFormData = on;
z.AxiosError = O;
z.Cancel = z.CanceledError;
z.all = function(t) {
  return Promise.all(t);
};
z.spread = lu;
z.isAxiosError = uu;
z.mergeConfig = Ge;
z.AxiosHeaders = Ce;
z.formToJSON = (e) => ss(y.isHTMLForm(e) ? new FormData(e) : e);
z.getAdapter = ls.getAdapter;
z.HttpStatusCode = fu;
z.default = z;
const du = z;
function hu({
  children: e,
  img: t,
  outline: n,
  hideSquircle: r = !1,
  ...o
}) {
  const [s, i] = oe(), a = ge(() => Kc(), [t]);
  return ne(() => {
    (async () => {
      if (!t || r)
        return i(t);
      try {
        const f = (await du.get(t, { responseType: "blob" })).data, h = new FileReader();
        h.onloadend = () => {
          const p = h.result;
          typeof p == "string" && i(p);
        }, h.readAsDataURL(f);
      } catch (l) {
        console.error("Error loading image:", l), i(void 0);
      }
    })();
  }, [t]), /* @__PURE__ */ j(pu, { ...o, children: [
    !r && /* @__PURE__ */ j(
      mu,
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
const pu = P.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(e) => e.theme.theme});
`, mu = P.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function Om({
  children: e,
  small: t = !1,
  active: n,
  height: r,
  padding: o = 8,
  title: s,
  titleStyle: i,
  subtitle: a,
  subtitleStyle: c,
  subtitleExtra: u,
  subtitleExtraStyle: l,
  img: f,
  icon: h,
  leftIcon: p,
  rightIcon: m,
  dragControls: g,
  showArrow: T = !1,
  squircleSize: v = t ? 32 : 48,
  hideSquircle: w = !1,
  ...b
}) {
  const C = ge(() => r || (!w && v ? v + 2 * (o ?? 8) : t ? 36 : 48), [r, t, v, w, o]);
  return /* @__PURE__ */ j(
    gu,
    {
      small: t,
      active: n,
      height: C,
      padding: o,
      ...b,
      children: [
        /* @__PURE__ */ j(yu, { children: [
          !w || f ? /* @__PURE__ */ E(Fo, { small: t, img: f, squircleSize: v, children: /* @__PURE__ */ E(Lo, { children: p || h || e }) }) : p || h || e,
          /* @__PURE__ */ j("div", { children: [
            /* @__PURE__ */ E(vu, { small: t, style: i, children: s }),
            a && /* @__PURE__ */ E(bu, { small: t, style: c, children: a })
          ] })
        ] }),
        /* @__PURE__ */ j(Tu, { children: [
          u && /* @__PURE__ */ E(xu, { small: t, style: l, children: u }),
          m && (w ? m : /* @__PURE__ */ E(Fo, { small: t, squircleSize: v, children: /* @__PURE__ */ E(Lo, { children: m }) })),
          !g && T && /* @__PURE__ */ E(wu, {}),
          g && /* @__PURE__ */ E(Nc, { dragControls: g })
        ] })
      ]
    }
  );
}
const gu = P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: ${(e) => e.padding}px;
  height: ${(e) => e.height};
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(e) => e.active ? e.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(e) => e.theme.listItem.hover};
  }
`, yu = P.div`
  display: flex;
  align-items: center;
  gap: 12px;
`, Fo = P(hu)`
  position: relative;
  flex-shrink: 0;
  width: ${(e) => e.squircleSize}px;
  height: ${(e) => e.squircleSize}px;
  color: ${(e) => e.theme.theme};
`, vu = P(bt).attrs({
  noMargin: !0,
  weight: "semibold"
})`
  font-size: ${(e) => e.small ? "16px" : "18px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`, bu = P(bt).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "12px" : "14px"};
`, xu = P(bt).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "14px" : "16px"};
`, wu = P(kc)`
  color: ${(e) => e.theme.listItem.icon};
  width: 24px;
  height: 24px;
`, Lo = P.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, Fm = P.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`, Tu = P.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
function rt(e) {
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
function Cu(e) {
  let t = "";
  return e.startsWith("top") ? t += "bottom" : e.startsWith("bottom") ? t += "top" : e.startsWith("right") ? t += "left" : t += "right", t += `: -15px;
`, e.startsWith("top") || e.startsWith("bottom") ? e.includes("Start") ? t += "left: 15px;" : e.includes("End") ? t += "right: 15px;" : (t += `left: 50%;
`, t += "transform: translate(-50%, 0);") : e.includes("Start") ? t += "top: 15px;" : e.includes("End") ? t += "bottom: 15px;" : (t += `top: 50%;
`, t += "transform: translate(0, -50%);"), t;
}
const Tr = _e({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), an = _e({});
function Eu() {
  return G(an).visualElement;
}
const Tt = _e(null), Be = typeof document < "u", it = Be ? oc : ne, ds = _e({ strict: !1 });
function Su(e, t, n, r) {
  const o = Eu(), s = G(ds), i = G(Tt), a = G(Tr).reducedMotion, c = Q();
  r = r || s.renderer, !c.current && r && (c.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = c.current;
  return it(() => {
    u && u.render();
  }), it(() => {
    u && u.animationState && u.animationState.animateChanges();
  }), it(() => () => u && u.notify("Unmount"), []), u;
}
function ze(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Pu(e, t, n) {
  return Me(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ze(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function pt(e) {
  return typeof e == "string" || Array.isArray(e);
}
function cn(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Au = [
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
  return cn(e.animate) || Au.some((t) => pt(e[t]));
}
function hs(e) {
  return !!(ln(e) || e.variants);
}
function Ru(e, t) {
  if (ln(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || pt(n) ? n : void 0,
      animate: pt(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ku(e) {
  const { initial: t, animate: n } = Ru(e, G(an));
  return ge(() => ({ initial: t, animate: n }), [Mo(t), Mo(n)]);
}
function Mo(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Te = (e) => ({
  isEnabled: (t) => e.some((n) => !!t[n])
}), mt = {
  measureLayout: Te(["layout", "layoutId", "drag"]),
  animation: Te([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: Te(["exit"]),
  drag: Te(["drag", "dragControls"]),
  focus: Te(["whileFocus"]),
  hover: Te(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: Te(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: Te([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: Te([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function Vu(e) {
  for (const t in e)
    t === "projectionNodeConstructor" ? mt.projectionNodeConstructor = e[t] : mt[t].Component = e[t];
}
function un(e) {
  const t = Q(null);
  return t.current === null && (t.current = e()), t.current;
}
const st = {
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
let Du = 1;
function Ou() {
  return un(() => {
    if (st.hasEverUpdated)
      return Du++;
  });
}
const Cr = _e({});
class Fu extends vt.Component {
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
const ps = _e({}), Lu = Symbol.for("motionComponentSymbol");
function Mu({ preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  e && Vu(e);
  function i(c, u) {
    const l = {
      ...G(Tr),
      ...c,
      layoutId: _u(c)
    }, { isStatic: f } = l;
    let h = null;
    const p = ku(c), m = f ? void 0 : Ou(), g = o(c, f);
    if (!f && Be) {
      p.visualElement = Su(s, g, l, t);
      const T = G(ds).strict, v = G(ps);
      p.visualElement && (h = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        l,
        T,
        e,
        m,
        n || mt.projectionNodeConstructor,
        v
      ));
    }
    return _.createElement(
      Fu,
      { visualElement: p.visualElement, props: l },
      h,
      _.createElement(an.Provider, { value: p }, r(s, c, m, Pu(g, p.visualElement, u), g, f, p.visualElement))
    );
  }
  const a = ic(i);
  return a[Lu] = s, a;
}
function _u({ layoutId: e }) {
  const t = G(Cr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Bu(e) {
  function t(r, o = {}) {
    return Mu(e(r, o));
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
const Iu = [
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
      !!(Iu.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const zt = {};
function ju(e) {
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
], Ie = new Set(Wt);
function ms(e, { layout: t, layoutId: n }) {
  return Ie.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!zt[e] || e === "opacity");
}
const ve = (e) => !!(e != null && e.getVelocity), $u = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Nu = (e, t) => Wt.indexOf(e) - Wt.indexOf(t);
function Uu({ transform: e, transformKeys: t }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  t.sort(Nu);
  for (const a of t)
    i += `${$u[a] || a}(${e[a]}) `;
  return n && !e.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(e, o ? "" : i) : r && o && (i = "none"), i;
}
function gs(e) {
  return e.startsWith("--");
}
const zu = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ke = (e, t, n) => Math.min(Math.max(n, e), t), je = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, at = {
  ...je,
  transform: (e) => Ke(0, 1, e)
}, Ot = {
  ...je,
  default: 1
}, ct = (e) => Math.round(e * 1e5) / 1e5, gt = /(-)?([\d]*\.?[\d])+/g, Xn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Wu = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ct(e) {
  return typeof e == "string";
}
const Et = (e) => ({
  test: (t) => Ct(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Pe = Et("deg"), me = Et("%"), A = Et("px"), Hu = Et("vh"), qu = Et("vw"), _o = {
  ...me,
  parse: (e) => me.parse(e) / 100,
  transform: (e) => me.transform(e * 100)
}, Bo = {
  ...je,
  transform: Math.round
}, ys = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  radius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  size: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  // Transform props
  rotate: Pe,
  rotateX: Pe,
  rotateY: Pe,
  rotateZ: Pe,
  scale: Ot,
  scaleX: Ot,
  scaleY: Ot,
  scaleZ: Ot,
  skew: Pe,
  skewX: Pe,
  skewY: Pe,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: at,
  originX: _o,
  originY: _o,
  originZ: A,
  // Misc
  zIndex: Bo,
  // SVG
  fillOpacity: at,
  strokeOpacity: at,
  numOctaves: Bo
};
function Sr(e, t, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: c } = e;
  a.length = 0;
  let u = !1, l = !1, f = !0;
  for (const h in t) {
    const p = t[h];
    if (gs(h)) {
      s[h] = p;
      continue;
    }
    const m = ys[h], g = zu(p, m);
    if (Ie.has(h)) {
      if (u = !0, i[h] = g, a.push(h), !f)
        continue;
      p !== (m.default || 0) && (f = !1);
    } else
      h.startsWith("origin") ? (l = !0, c[h] = g) : o[h] = g;
  }
  if (t.transform || (u || r ? o.transform = Uu(e, n, f, r) : o.transform && (o.transform = "none")), l) {
    const { originX: h = "50%", originY: p = "50%", originZ: m = 0 } = c;
    o.transformOrigin = `${h} ${p} ${m}`;
  }
}
const Pr = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function vs(e, t, n) {
  for (const r in t)
    !ve(t[r]) && !ms(r, n) && (e[r] = t[r]);
}
function Gu({ transformTemplate: e }, t, n) {
  return ge(() => {
    const r = Pr();
    return Sr(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Ku(e, t, n) {
  const r = e.style || {}, o = {};
  return vs(o, r, e), Object.assign(o, Gu(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Yu(e, t, n) {
  const r = {}, o = Ku(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Xu = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Ju = ["whileTap", "onTap", "onTapStart", "onTapCancel"], Zu = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Qu = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], ef = /* @__PURE__ */ new Set([
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
  ...Qu,
  ...Ju,
  ...Xu,
  ...Zu
]);
function Ht(e) {
  return ef.has(e);
}
let bs = (e) => !Ht(e);
function tf(e) {
  e && (bs = (t) => t.startsWith("on") ? !Ht(t) : e(t));
}
try {
  tf(require("@emotion/is-prop-valid").default);
} catch {
}
function nf(e, t, n) {
  const r = {};
  for (const o in e)
    (bs(o) || n === !0 && Ht(o) || !t && !Ht(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Io(e, t, n) {
  return typeof e == "string" ? e : A.transform(t + n * e);
}
function rf(e, t, n) {
  const r = Io(t, e.x, e.width), o = Io(n, e.y, e.height);
  return `${r} ${o}`;
}
const of = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sf = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function af(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? of : sf;
  e[s.offset] = A.transform(-r);
  const i = A.transform(t), a = A.transform(n);
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
}, u, l, f) {
  if (Sr(e, c, u, f), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: m } = e;
  h.transform && (m && (p.transform = h.transform), delete h.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = rf(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), s !== void 0 && af(h, s, i, a, !1);
}
const xs = () => ({
  ...Pr(),
  attrs: {}
}), Rr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function cf(e, t, n, r) {
  const o = ge(() => {
    const s = xs();
    return Ar(s, t, { enableHardwareAcceleration: !1 }, Rr(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    vs(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function lf(e = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const u = (Er(n) ? cf : Yu)(r, i, a, n), f = {
      ...nf(r, typeof n == "string", e),
      ...u,
      ref: s
    };
    return o && (f["data-projection-id"] = o), ji(n, f);
  };
}
const kr = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ws(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Ts = /* @__PURE__ */ new Set([
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
function Cs(e, t, n, r) {
  ws(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Ts.has(o) ? o : kr(o), t.attrs[o]);
}
function Vr(e) {
  const { style: t } = e, n = {};
  for (const r in t)
    (ve(t[r]) || ms(r, e)) && (n[r] = t[r]);
  return n;
}
function Es(e) {
  const t = Vr(e);
  for (const n in e)
    if (ve(e[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function Dr(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
const qt = (e) => Array.isArray(e), uf = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), ff = (e) => qt(e) ? e[e.length - 1] || 0 : e;
function $t(e) {
  const t = ve(e) ? e.get() : e;
  return uf(t) ? t.toValue() : t;
}
function df({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
  const i = {
    latestValues: hf(r, o, s, e),
    renderState: t()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const Ss = (e) => (t, n) => {
  const r = G(an), o = G(Tt), s = () => df(e, t, r, o);
  return n ? s() : un(s);
};
function hf(e, t, n, r) {
  const o = {}, s = r(e);
  for (const h in s)
    o[h] = $t(s[h]);
  let { initial: i, animate: a } = e;
  const c = ln(e), u = hs(e);
  t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || i === !1;
  const f = l ? a : i;
  return f && typeof f != "boolean" && !cn(f) && (Array.isArray(f) ? f : [f]).forEach((p) => {
    const m = Dr(e, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: T, ...v } = m;
    for (const w in v) {
      let b = v[w];
      if (Array.isArray(b)) {
        const C = l ? b.length - 1 : 0;
        b = b[C];
      }
      b !== null && (o[w] = b);
    }
    for (const w in g)
      o[w] = g[w];
  }), o;
}
const pf = {
  useVisualState: Ss({
    scrapeMotionValuesFromProps: Es,
    createRenderState: xs,
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
      Ar(n, r, { enableHardwareAcceleration: !1 }, Rr(t.tagName), e.transformTemplate), Cs(t, n);
    }
  })
}, mf = {
  useVisualState: Ss({
    scrapeMotionValuesFromProps: Vr,
    createRenderState: Pr
  })
};
function gf(e, { forwardMotionProps: t = !1 }, n, r, o) {
  return {
    ...Er(e) ? pf : mf,
    preloadedFeatures: n,
    useRender: lf(t),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e
  };
}
var I;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(I || (I = {}));
function fn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Jn(e, t, n, r) {
  ne(() => {
    const o = e.current;
    if (n && o)
      return fn(o, t, n, r);
  }, [e, t, n, r]);
}
function yf({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t, r = () => {
    n && n.setActive(I.Focus, !0);
  }, o = () => {
    n && n.setActive(I.Focus, !1);
  };
  Jn(t, "focus", e ? r : void 0), Jn(t, "blur", e ? o : void 0);
}
function Ps(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function As(e) {
  return !!e.touches;
}
function vf(e) {
  return (t) => {
    const n = t instanceof MouseEvent;
    (!n || n && t.button === 0) && e(t);
  };
}
const bf = { pageX: 0, pageY: 0 };
function xf(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || bf;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function wf(e, t = "page") {
  return {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function Or(e, t = "page") {
  return {
    point: As(e) ? xf(e, t) : wf(e, t)
  };
}
const Rs = (e, t = !1) => {
  const n = (r) => e(r, Or(r));
  return t ? vf(n) : n;
}, Tf = () => Be && window.onpointerdown === null, Cf = () => Be && window.ontouchstart === null, Ef = () => Be && window.onmousedown === null, Sf = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Pf = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function ks(e) {
  return Tf() ? e : Cf() ? Pf[e] : Ef() ? Sf[e] : e;
}
function qe(e, t, n, r) {
  return fn(e, ks(t), Rs(n, t === "pointerdown"), r);
}
function Gt(e, t, n, r) {
  return Jn(e, ks(t), n && Rs(n, t === "pointerdown"), r);
}
function Vs(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const jo = Vs("dragHorizontal"), $o = Vs("dragVertical");
function Ds(e) {
  let t = !1;
  if (e === "y")
    t = $o();
  else if (e === "x")
    t = jo();
  else {
    const n = jo(), r = $o();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Os() {
  const e = Ds(!0);
  return e ? (e(), !1) : !0;
}
function No(e, t, n) {
  return (r, o) => {
    !Ps(r) || Os() || (e.animationState && e.animationState.setActive(I.Hover, t), n && n(r, o));
  };
}
function Af({ onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r }) {
  Gt(r, "pointerenter", e || n ? No(r, !0, e) : void 0, { passive: !e }), Gt(r, "pointerleave", t || n ? No(r, !1, t) : void 0, { passive: !t });
}
const Fs = (e, t) => t ? e === t ? !0 : Fs(e, t.parentElement) : !1;
function Fr(e) {
  return ne(() => () => e(), []);
}
const Rf = (e, t) => (n) => t(e(n)), dn = (...e) => e.reduce(Rf);
function kf({ onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = e || t || n || r, i = Q(!1), a = Q(null), c = {
    passive: !(t || e || n || p)
  };
  function u() {
    a.current && a.current(), a.current = null;
  }
  function l() {
    return u(), i.current = !1, o.animationState && o.animationState.setActive(I.Tap, !1), !Os();
  }
  function f(m, g) {
    l() && (Fs(o.current, m.target) ? e && e(m, g) : n && n(m, g));
  }
  function h(m, g) {
    l() && n && n(m, g);
  }
  function p(m, g) {
    u(), !i.current && (i.current = !0, a.current = dn(qe(window, "pointerup", f, c), qe(window, "pointercancel", h, c)), o.animationState && o.animationState.setActive(I.Tap, !0), t && t(m, g));
  }
  Gt(o, "pointerdown", s ? p : void 0, c), Fr(u);
}
const Uo = "production", Lr = typeof process > "u" || process.env === void 0 ? Uo : process.env.NODE_ENV || Uo, zo = /* @__PURE__ */ new Set();
function Mr(e, t, n) {
  e || zo.has(t) || (console.warn(t), n && console.warn(n), zo.add(t));
}
const Zn = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Vf = (e) => {
  const t = Zn.get(e.target);
  t && t(e);
}, Df = (e) => {
  e.forEach(Vf);
};
function Of({ root: e, ...t }) {
  const n = e || document;
  Vn.has(n) || Vn.set(n, {});
  const r = Vn.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Df, { root: e, ...t })), r[o];
}
function Ff(e, t, n) {
  const r = Of(t);
  return Zn.set(e, n), r.observe(e), () => {
    Zn.delete(e), r.unobserve(e);
  };
}
function Lf({ visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = Q({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(t || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? Bf : _f)(i, s.current, e, o);
}
const Mf = {
  some: 0,
  all: 1
};
function _f(e, t, n, { root: r, margin: o, amount: s = "some", once: i }) {
  ne(() => {
    if (!e || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Mf[s]
    }, c = (u) => {
      const { isIntersecting: l } = u;
      if (t.isInView === l || (t.isInView = l, i && !l && t.hasEnteredView))
        return;
      l && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(I.InView, l);
      const f = n.getProps(), h = l ? f.onViewportEnter : f.onViewportLeave;
      h && h(u);
    };
    return Ff(n.current, a, c);
  }, [e, r, o, s]);
}
function Bf(e, t, n, { fallback: r = !0 }) {
  ne(() => {
    !e || !r || (Lr !== "production" && Mr(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      t.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(I.InView, !0);
    }));
  }, [e]);
}
const Re = (e) => (t) => (e(t), null), If = {
  inView: Re(Lf),
  tap: Re(kf),
  focus: Re(yf),
  hover: Re(Af)
};
function Ls() {
  const e = G(Tt);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = pr();
  return ne(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function Ms(e, t) {
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
const jf = (e) => /^\-?\d*\.?\d+$/.test(e), $f = (e) => /^0[^.\s]+$/.test(e), Ee = {
  delta: 0,
  timestamp: 0
}, _s = 1 / 60 * 1e3, Nf = typeof performance < "u" ? () => performance.now() : () => Date.now(), Bs = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(Nf()), _s);
function Uf(e) {
  let t = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, l = !1) => {
      const f = l && o, h = f ? t : n;
      return u && i.add(c), h.indexOf(c) === -1 && (h.push(c), f && o && (r = t.length)), c;
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
const zf = 40;
let Qn = !0, yt = !1, er = !1;
const St = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], hn = St.reduce((e, t) => (e[t] = Uf(() => yt = !0), e), {}), ie = St.reduce((e, t) => {
  const n = hn[t];
  return e[t] = (r, o = !1, s = !1) => (yt || Hf(), n.schedule(r, o, s)), e;
}, {}), ke = St.reduce((e, t) => (e[t] = hn[t].cancel, e), {}), Dn = St.reduce((e, t) => (e[t] = () => hn[t].process(Ee), e), {}), Wf = (e) => hn[e].process(Ee), Is = (e) => {
  yt = !1, Ee.delta = Qn ? _s : Math.max(Math.min(e - Ee.timestamp, zf), 1), Ee.timestamp = e, er = !0, St.forEach(Wf), er = !1, yt && (Qn = !1, Bs(Is));
}, Hf = () => {
  yt = !0, Qn = !0, er || Bs(Is);
};
function _r(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Br(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ir {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return _r(this.subscriptions, t), () => Br(this.subscriptions, t);
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
function jr(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const qf = (e) => !isNaN(parseFloat(e));
class Gf {
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
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, ie.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => ie.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = qf(this.current), this.owner = n.owner;
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
    return this.events[t] || (this.events[t] = new Ir()), this.events[t].add(n);
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
      jr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Ye(e, t) {
  return new Gf(e, t);
}
const $r = (e, t) => (n) => !!(Ct(n) && Wu.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), js = (e, t, n) => (r) => {
  if (!Ct(r))
    return r;
  const [o, s, i, a] = r.match(gt);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Kf = (e) => Ke(0, 255, e), On = {
  ...je,
  transform: (e) => Math.round(Kf(e))
}, Le = {
  test: $r("rgb", "red"),
  parse: js("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + On.transform(e) + ", " + On.transform(t) + ", " + On.transform(n) + ", " + ct(at.transform(r)) + ")"
};
function Yf(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const tr = {
  test: $r("#"),
  parse: Yf,
  transform: Le.transform
}, We = {
  test: $r("hsl", "hue"),
  parse: js("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + me.transform(ct(t)) + ", " + me.transform(ct(n)) + ", " + ct(at.transform(r)) + ")"
}, te = {
  test: (e) => Le.test(e) || tr.test(e) || We.test(e),
  parse: (e) => Le.test(e) ? Le.parse(e) : We.test(e) ? We.parse(e) : tr.parse(e),
  transform: (e) => Ct(e) ? e : e.hasOwnProperty("red") ? Le.transform(e) : We.transform(e)
}, $s = "${c}", Ns = "${n}";
function Xf(e) {
  var t, n;
  return isNaN(e) && Ct(e) && (((t = e.match(gt)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Xn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Kt(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0, r = 0;
  const o = e.match(Xn);
  o && (n = o.length, e = e.replace(Xn, $s), t.push(...o.map(te.parse)));
  const s = e.match(gt);
  return s && (r = s.length, e = e.replace(gt, Ns), t.push(...s.map(je.parse))), { values: t, numColors: n, numNumbers: r, tokenised: e };
}
function Us(e) {
  return Kt(e).values;
}
function zs(e) {
  const { values: t, numColors: n, tokenised: r } = Kt(e), o = t.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? $s : Ns, a < n ? te.transform(s[a]) : ct(s[a]));
    return i;
  };
}
const Jf = (e) => typeof e == "number" ? 0 : e;
function Zf(e) {
  const t = Us(e);
  return zs(e)(t.map(Jf));
}
const Ve = { test: Xf, parse: Us, createTransformer: zs, getAnimatableNone: Zf }, Qf = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ed(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(gt) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = Qf.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const td = /([a-z-]*)\(.*?\)/g, nr = {
  ...Ve,
  getAnimatableNone: (e) => {
    const t = e.match(td);
    return t ? t.map(ed).join(" ") : e;
  }
}, nd = {
  ...ys,
  // Color props
  color: te,
  backgroundColor: te,
  outlineColor: te,
  fill: te,
  stroke: te,
  // Border props
  borderColor: te,
  borderTopColor: te,
  borderRightColor: te,
  borderBottomColor: te,
  borderLeftColor: te,
  filter: nr,
  WebkitFilter: nr
}, Nr = (e) => nd[e];
function Ur(e, t) {
  var n;
  let r = Nr(e);
  return r !== nr && (r = Ve), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
const Ws = (e) => (t) => t.test(e), rd = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Hs = [je, A, me, Pe, qu, Hu, rd], tt = (e) => Hs.find(Ws(e)), od = [...Hs, te, Ve], id = (e) => od.find(Ws(e));
function sd(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function ad(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function pn(e, t, n) {
  const r = e.getProps();
  return Dr(r, t, n !== void 0 ? n : r.custom, sd(e), ad(e));
}
function cd(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ye(n));
}
function ld(e, t) {
  const n = pn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = ff(s[i]);
    cd(e, i, a);
  }
}
function ud(e, t, n) {
  var r, o;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const c = s[a], u = t[c];
      let l = null;
      Array.isArray(u) && (l = u[0]), l === null && (l = (o = (r = n[c]) !== null && r !== void 0 ? r : e.readValue(c)) !== null && o !== void 0 ? o : t[c]), l != null && (typeof l == "string" && (jf(l) || $f(l)) ? l = parseFloat(l) : !id(l) && Ve.test(u) && (l = Ur(c, u)), e.addValue(c, Ye(l, { owner: e })), n[c] === void 0 && (n[c] = l), l !== null && e.setBaseTarget(c, l));
    }
}
function fd(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function dd(e, t, n) {
  var r;
  const o = {};
  for (const s in e) {
    const i = fd(s, t);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function Yt(e) {
  return !!(ve(e) && e.add);
}
const hd = (e, t) => `${e}: ${t}`;
function pd(e, t) {
  const { MotionAppearAnimations: n } = window, r = hd(e, Ie.has(t) ? "transform" : t), o = n && n.get(r);
  return o ? (ie.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const md = "framerAppearId", gd = "data-" + kr(md);
var mn = function() {
}, fe = function() {
};
process.env.NODE_ENV !== "production" && (mn = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, fe = function(e, t) {
  if (!e)
    throw new Error(t);
});
const Nt = (e) => e * 1e3, yd = {
  current: !1
}, zr = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Wr = (e) => (t) => 1 - e(1 - t), Hr = (e) => e * e, vd = Wr(Hr), qr = zr(Hr), $ = (e, t, n) => -n * e + n * t + e;
function Fn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function bd({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
}, xd = [tr, Le, We], wd = (e) => xd.find((t) => t.test(e));
function Wo(e) {
  const t = wd(e);
  fe(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = t.parse(e);
  return t === We && (n = bd(n)), n;
}
const qs = (e, t) => {
  const n = Wo(e), r = Wo(t), o = { ...n };
  return (s) => (o.red = Ln(n.red, r.red, s), o.green = Ln(n.green, r.green, s), o.blue = Ln(n.blue, r.blue, s), o.alpha = $(n.alpha, r.alpha, s), Le.transform(o));
};
function Gs(e, t) {
  return typeof e == "number" ? (n) => $(e, t, n) : te.test(e) ? qs(e, t) : Ys(e, t);
}
const Ks = (e, t) => {
  const n = [...e], r = n.length, o = e.map((s, i) => Gs(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, Td = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Gs(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, Ys = (e, t) => {
  const n = Ve.createTransformer(t), r = Kt(e), o = Kt(t);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? dn(Ks(r.values, o.values), n) : (mn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, Xt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ho = (e, t) => (n) => $(e, t, n);
function Cd(e) {
  return typeof e == "number" ? Ho : typeof e == "string" ? te.test(e) ? qs : Ys : Array.isArray(e) ? Ks : typeof e == "object" ? Td : Ho;
}
function Ed(e, t, n) {
  const r = [], o = n || Cd(e[0]), s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] : t;
      a = dn(c, a);
    }
    r.push(a);
  }
  return r;
}
function Xs(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  fe(s === t.length, "Both input and output ranges must be the same length"), fe(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Ed(t, r, o), a = i.length, c = (u) => {
    let l = 0;
    if (a > 1)
      for (; l < e.length - 2 && !(u < e[l + 1]); l++)
        ;
    const f = Xt(e[l], e[l + 1], u);
    return i[l](f);
  };
  return n ? (u) => c(Ke(e[0], e[s - 1], u)) : c;
}
const Gr = (e) => e, Js = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Sd = 1e-7, Pd = 12;
function Ad(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Js(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > Sd && ++a < Pd);
  return i;
}
function Zs(e, t, n, r) {
  if (e === t && n === r)
    return Gr;
  const o = (s) => Ad(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Js(o(s), t, r);
}
const Qs = (e) => 1 - Math.sin(Math.acos(e)), Kr = Wr(Qs), Rd = zr(Kr), ea = Zs(0.33, 1.53, 0.69, 0.99), Yr = Wr(ea), kd = zr(Yr), Vd = (e) => (e *= 2) < 1 ? 0.5 * Yr(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), qo = {
  linear: Gr,
  easeIn: Hr,
  easeInOut: qr,
  easeOut: vd,
  circIn: Qs,
  circInOut: Rd,
  circOut: Kr,
  backIn: Yr,
  backInOut: kd,
  backOut: ea,
  anticipate: Vd
}, Go = (e) => {
  if (Array.isArray(e)) {
    fe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return Zs(t, n, r, o);
  } else if (typeof e == "string")
    return fe(qo[e] !== void 0, `Invalid easing type '${e}'`), qo[e];
  return e;
}, Dd = (e) => Array.isArray(e) && typeof e[0] != "number";
function Od(e, t) {
  return e.map(() => t || qr).splice(0, e.length - 1);
}
function Fd(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function Ld(e, t) {
  return e.map((n) => n * t);
}
function Jt({ keyframes: e, ease: t = qr, times: n, duration: r = 300 }) {
  e = [...e];
  const o = Jt[0], s = Dd(t) ? t.map(Go) : Go(t), i = { done: !1, value: o }, a = Ld(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === Jt.length ? n : Fd(e),
    r
  );
  function c() {
    return Xs(a, e, {
      ease: Array.isArray(s) ? s : Od(e, s)
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
const Mn = 1e-3, Md = 0.01, Ko = 10, _d = 0.05, Bd = 1;
function Id({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  mn(e <= Ko * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Ke(_d, Bd, i), e = Ke(Md, Ko, e / 1e3), i < 1 ? (o = (u) => {
    const l = u * i, f = l * e, h = l - n, p = rr(u, i), m = Math.exp(-f);
    return Mn - h / p * m;
  }, s = (u) => {
    const f = u * i * e, h = f * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * e, m = Math.exp(-f), g = rr(Math.pow(u, 2), i);
    return (-o(u) + Mn > 0 ? -1 : 1) * ((h - p) * m) / g;
  }) : (o = (u) => {
    const l = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Mn + l * f;
  }, s = (u) => {
    const l = Math.exp(-u * e), f = (n - u) * (e * e);
    return l * f;
  });
  const a = 5 / e, c = $d(o, s, a);
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
const jd = 12;
function $d(e, t, n) {
  let r = n;
  for (let o = 1; o < jd; o++)
    r = r - e(r) / t(r);
  return r;
}
function rr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Nd = ["duration", "bounce"], Ud = ["stiffness", "damping", "mass"];
function Yo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function zd(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Yo(e, Ud) && Yo(e, Nd)) {
    const n = Id(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
const Wd = 5;
function ta({ keyframes: e, restSpeed: t = 2, restDelta: n = 0.01, ...r }) {
  let o = e[0], s = e[e.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: c, mass: u, velocity: l, duration: f, isResolvedFromDuration: h } = zd(r);
  let p = Hd, m = l ? -(l / 1e3) : 0;
  const g = c / (2 * Math.sqrt(a * u));
  function T() {
    const v = s - o, w = Math.sqrt(a / u) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const b = rr(w, g);
      p = (C) => {
        const V = Math.exp(-g * w * C);
        return s - V * ((m + g * w * v) / b * Math.sin(b * C) + v * Math.cos(b * C));
      };
    } else if (g === 1)
      p = (b) => s - Math.exp(-w * b) * (v + (m + w * v) * b);
    else {
      const b = w * Math.sqrt(g * g - 1);
      p = (C) => {
        const V = Math.exp(-g * w * C), L = Math.min(b * C, 300);
        return s - V * ((m + g * w * v) * Math.sinh(L) + b * v * Math.cosh(L)) / b;
      };
    }
  }
  return T(), {
    next: (v) => {
      const w = p(v);
      if (h)
        i.done = v >= f;
      else {
        let b = m;
        if (v !== 0)
          if (g < 1) {
            const L = Math.max(0, v - Wd);
            b = jr(w - p(L), v - L);
          } else
            b = 0;
        const C = Math.abs(b) <= t, V = Math.abs(s - w) <= n;
        i.done = C && V;
      }
      return i.value = i.done ? s : w, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], T();
    }
  };
}
ta.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const Hd = (e) => 0;
function qd({
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
    next: (f) => {
      const h = -c * Math.exp(-f / r);
      return a.done = !(h > o || h < -o), a.value = a.done ? l : l + h, a;
    },
    flipTarget: () => {
    }
  };
}
const Gd = {
  decay: qd,
  keyframes: Jt,
  tween: Jt,
  spring: ta
};
function na(e, t, n = 0) {
  return e - t - n;
}
function Kd(e, t = 0, n = 0, r = !0) {
  return r ? na(t + -e, t, n) : t - (e - t) + n;
}
function Yd(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const Xd = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => ie.update(t, !0),
    stop: () => ke.update(t)
  };
};
function Zt({ duration: e, driver: t = Xd, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: c, onStop: u, onComplete: l, onRepeat: f, onUpdate: h, type: p = "keyframes", ...m }) {
  var g, T;
  let v, w = 0, b = e, C, V = !1, L = !0, W;
  const X = Gd[i.length > 2 ? "keyframes" : p], J = i[0], H = i[i.length - 1];
  !((T = (g = X).needsInterpolation) === null || T === void 0) && T.call(g, J, H) && (W = Xs([0, 100], [J, H], {
    clamp: !1
  }), i = [0, 100]);
  const ae = X({
    ...m,
    duration: e,
    keyframes: i
  });
  function de() {
    w++, o === "reverse" ? (L = w % 2 === 0, n = Kd(n, b, s, L)) : (n = na(n, b, s), o === "mirror" && ae.flipTarget()), V = !1, f && f();
  }
  function Z() {
    v.stop(), l && l();
  }
  function K(re) {
    if (L || (re = -re), n += re, !V) {
      const xe = ae.next(Math.max(0, n));
      C = xe.value, W && (C = W(C)), V = L ? xe.done : n <= 0;
    }
    h && h(C), V && (w === 0 && (b = b !== void 0 ? b : n), w < r ? Yd(n, b, s, L) && de() : Z());
  }
  function M() {
    c && c(), v = t(K), v.start();
  }
  return a && M(), {
    stop: () => {
      u && u(), v.stop();
    },
    sample: (re) => ae.next(Math.max(0, re))
  };
}
function Jd(e) {
  return !e || // Default easing
  Array.isArray(e) || // Bezier curve
  typeof e == "string" && ra[e];
}
const ot = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ra = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ot([0, 0.65, 0.55, 1]),
  circOut: ot([0.55, 0, 1, 0.45]),
  backIn: ot([0.31, 0.01, 0.66, -0.59]),
  backOut: ot([0.33, 1.53, 0.69, 0.99])
};
function Zd(e) {
  if (e)
    return Array.isArray(e) ? ot(e) : ra[e];
}
function Qd(e, t, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: c } = {}) {
  return e.animate({ [t]: n, offset: c }, {
    delay: r,
    duration: o,
    easing: Zd(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Ft = 10;
function eh(e, t, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: c } = o;
  if (o.type === "spring" || !Jd(o.ease)) {
    const l = Zt(o);
    let f = { done: !1, value: s[0] };
    const h = [];
    let p = 0;
    for (; !f.done; )
      f = l.sample(p), h.push(f.value), p += Ft;
    s = h, i = p - Ft, c = "linear";
  }
  const u = Qd(e.owner.current, t, s, {
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
      const f = Zt(o);
      e.setWithVelocity(f.sample(l - Ft).value, f.sample(l).value, Ft);
    }
    ie.update(() => u.cancel());
  };
}
function oa(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (ke.read(r), e(s - t));
  };
  return ie.read(r, !0), () => ke.read(r);
}
function th({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), () => {
  });
  return t ? oa(o, -t) : o();
}
function nh({ keyframes: e, velocity: t = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: c = 1, modifyTarget: u, driver: l, onUpdate: f, onComplete: h, onStop: p }) {
  const m = e[0];
  let g;
  function T(C) {
    return n !== void 0 && C < n || r !== void 0 && C > r;
  }
  function v(C) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - C) < Math.abs(r - C) ? n : r;
  }
  function w(C) {
    g == null || g.stop(), g = Zt({
      keyframes: [0, 1],
      velocity: 0,
      ...C,
      driver: l,
      onUpdate: (V) => {
        var L;
        f == null || f(V), (L = C.onUpdate) === null || L === void 0 || L.call(C, V);
      },
      onComplete: h,
      onStop: p
    });
  }
  function b(C) {
    w({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: c,
      ...C
    });
  }
  if (T(m))
    b({
      velocity: t,
      keyframes: [m, v(m)]
    });
  else {
    let C = o * t + m;
    typeof u < "u" && (C = u(C));
    const V = v(C), L = V === n ? -1 : 1;
    let W, X;
    const J = (H) => {
      W = X, X = H, t = jr(H - W, Ee.delta), (L === 1 && H > V || L === -1 && H < V) && b({ keyframes: [H, V], velocity: t });
    };
    w({
      type: "decay",
      keyframes: [m, 0],
      velocity: t,
      timeConstant: s,
      power: o,
      restDelta: c,
      modifyTarget: u,
      onUpdate: T(C) ? J : void 0
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
}), Lt = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), _n = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), rh = {
  type: "keyframes",
  duration: 0.8
}, Xo = {
  x: De,
  y: De,
  z: De,
  rotate: De,
  rotateX: De,
  rotateY: De,
  rotateZ: De,
  scaleX: Lt,
  scaleY: Lt,
  scale: Lt,
  opacity: _n,
  backgroundColor: _n,
  color: _n,
  default: Lt
}, oh = (e, { keyframes: t }) => t.length > 2 ? rh : (Xo[e] || Xo.default)(t[1]), or = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
Ve.test(t) && // And it contains numbers and/or colors
!t.startsWith("url("));
function ih({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: c, ...u }) {
  return !!Object.keys(u).length;
}
function Jo(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function Zo(e) {
  return typeof e == "number" ? 0 : Ur("", e);
}
function ia(e, t) {
  return e[t] || e.default || e;
}
function sh(e, t, n, r) {
  const o = or(t, n);
  let s = r.from !== void 0 ? r.from : e.get();
  return s === "none" && o && typeof n == "string" ? s = Ur(t, n) : Jo(s) && typeof n == "string" ? s = Zo(n) : !Array.isArray(n) && Jo(n) && typeof s == "string" && (n = Zo(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const Qo = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Bn = {}, sa = {};
for (const e in Qo)
  sa[e] = () => (Bn[e] === void 0 && (Bn[e] = Qo[e]()), Bn[e]);
const ah = /* @__PURE__ */ new Set(["opacity"]), Xr = (e, t, n, r = {}) => (o) => {
  const s = ia(r, e) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - Nt(i);
  const c = sh(t, e, n, s), u = c[0], l = c[c.length - 1], f = or(e, u), h = or(e, l);
  mn(f === h, `You are trying to animate ${e} from "${u}" to "${l}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${l} via the \`style\` property.`);
  let p = {
    keyframes: c,
    velocity: t.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (v) => {
      t.set(v), s.onUpdate && s.onUpdate(v);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!f || !h || yd.current || s.type === !1)
    return th(p);
  if (s.type === "inertia") {
    const v = nh(p);
    return () => v.stop();
  }
  ih(s) || (p = {
    ...p,
    ...oh(e, p)
  }), p.duration && (p.duration = Nt(p.duration)), p.repeatDelay && (p.repeatDelay = Nt(p.repeatDelay));
  const m = t.owner, g = m && m.current;
  if (sa.waapi() && ah.has(e) && !p.repeatDelay && p.repeatType !== "mirror" && p.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return eh(t, e, p);
  {
    const v = Zt(p);
    return () => v.stop();
  }
};
function ch(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => ir(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ir(e, t, n);
  else {
    const o = typeof t == "function" ? pn(e, t, n.custom) : t;
    r = aa(e, o, n);
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function ir(e, t, n = {}) {
  var r;
  const o = pn(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => aa(e, o, n) : () => Promise.resolve(), a = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u = 0) => {
    const { delayChildren: l = 0, staggerChildren: f, staggerDirection: h } = s;
    return lh(e, t, l + u, f, h, n);
  } : () => Promise.resolve(), { when: c } = s;
  if (c) {
    const [u, l] = c === "beforeChildren" ? [i, a] : [a, i];
    return u().then(l);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function aa(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = e.makeTargetAnimatable(t);
  const u = e.getValue("willChange");
  r && (i = r);
  const l = [], f = o && ((s = e.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const h in c) {
    const p = e.getValue(h), m = c[h];
    if (!p || m === void 0 || f && fh(f, h))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (e.shouldReduceMotion && Ie.has(h) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !p.hasAnimated) {
      const v = e.getProps()[gd];
      v && (g.elapsed = pd(v, h));
    }
    let T = p.start(Xr(h, p, m, g));
    Yt(u) && (u.add(h), T = T.then(() => u.remove(h))), l.push(T);
  }
  return Promise.all(l).then(() => {
    a && ld(e, a);
  });
}
function lh(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(uh).forEach((u, l) => {
    i.push(ir(u, t, {
      ...s,
      delay: n + c(l)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function uh(e, t) {
  return e.sortNodePosition(t);
}
function fh({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
const Jr = [
  I.Animate,
  I.InView,
  I.Focus,
  I.Hover,
  I.Tap,
  I.Drag,
  I.Exit
], dh = [...Jr].reverse(), hh = Jr.length;
function ph(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => ch(e, n, r)));
}
function mh(e) {
  let t = ph(e);
  const n = yh();
  let r = !0;
  const o = (c, u) => {
    const l = pn(e, u);
    if (l) {
      const { transition: f, transitionEnd: h, ...p } = l;
      c = { ...c, ...p, ...h };
    }
    return c;
  };
  function s(c) {
    t = c(e);
  }
  function i(c, u) {
    const l = e.getProps(), f = e.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let v = 0; v < hh; v++) {
      const w = dh[v], b = n[w], C = l[w] !== void 0 ? l[w] : f[w], V = pt(C), L = w === u ? b.isActive : null;
      L === !1 && (g = v);
      let W = C === f[w] && C !== l[w] && V;
      if (W && r && e.manuallyAnimateOnMount && (W = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !C && !b.prevProp || // Or if the prop doesn't define an animation
      cn(C) || typeof C == "boolean")
        continue;
      const X = gh(b.prevProp, C);
      let J = X || // If we're making this variant active, we want to always make it active
      w === u && b.isActive && !W && V || // If we removed a higher-priority variant (i is in reverse order)
      v > g && V;
      const H = Array.isArray(C) ? C : [C];
      let ae = H.reduce(o, {});
      L === !1 && (ae = {});
      const { prevResolvedValues: de = {} } = b, Z = {
        ...de,
        ...ae
      }, K = (M) => {
        J = !0, p.delete(M), b.needsAnimating[M] = !0;
      };
      for (const M in Z) {
        const re = ae[M], xe = de[M];
        m.hasOwnProperty(M) || (re !== xe ? qt(re) && qt(xe) ? !Ms(re, xe) || X ? K(M) : b.protectedKeys[M] = !0 : re !== void 0 ? K(M) : p.add(M) : re !== void 0 && p.has(M) ? K(M) : b.protectedKeys[M] = !0);
      }
      b.prevProp = C, b.prevResolvedValues = ae, b.isActive && (m = { ...m, ...ae }), r && e.blockInitialAnimation && (J = !1), J && !W && h.push(...H.map((M) => ({
        animation: M,
        options: { type: w, ...c }
      })));
    }
    if (p.size) {
      const v = {};
      p.forEach((w) => {
        const b = e.getBaseTarget(w);
        b !== void 0 && (v[w] = b);
      }), h.push({ animation: v });
    }
    let T = !!h.length;
    return r && l.initial === !1 && !e.manuallyAnimateOnMount && (T = !1), r = !1, T ? t(h) : Promise.resolve();
  }
  function a(c, u, l) {
    var f;
    if (n[c].isActive === u)
      return Promise.resolve();
    (f = e.variantChildren) === null || f === void 0 || f.forEach((p) => {
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
function gh(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ms(t, e) : !1;
}
function Oe(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yh() {
  return {
    [I.Animate]: Oe(!0),
    [I.InView]: Oe(),
    [I.Hover]: Oe(),
    [I.Tap]: Oe(),
    [I.Drag]: Oe(),
    [I.Focus]: Oe(),
    [I.Exit]: Oe()
  };
}
const vh = {
  animation: Re(({ visualElement: e, animate: t }) => {
    e.animationState || (e.animationState = mh(e)), cn(t) && ne(() => t.subscribe(e), [t]);
  }),
  exit: Re((e) => {
    const { custom: t, visualElement: n } = e, [r, o] = Ls(), s = G(Tt);
    ne(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(I.Exit, !r, {
        custom: s && s.custom || t
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, ei = (e, t) => Math.abs(e - t);
function bh(e, t) {
  const n = ei(e.x, t.x), r = ei(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ca {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = jn(this.lastMoveEventInfo, this.history), l = this.startEvent !== null, f = bh(u.offset, { x: 0, y: 0 }) >= 3;
      if (!l && !f)
        return;
      const { point: h } = u, { timestamp: p } = Ee;
      this.history.push({ ...h, timestamp: p });
      const { onStart: m, onMove: g } = this.handlers;
      l || (m && m(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, l) => {
      if (this.lastMoveEvent = u, this.lastMoveEventInfo = In(l, this.transformPagePoint), Ps(u) && u.buttons === 0) {
        this.handlePointerUp(u, l);
        return;
      }
      ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, l) => {
      this.end();
      const { onEnd: f, onSessionEnd: h } = this.handlers, p = jn(In(l, this.transformPagePoint), this.history);
      this.startEvent && f && f(u, p), h && h(u, p);
    }, As(t) && t.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Or(t), s = In(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = Ee;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: c } = n;
    c && c(t, jn(s, this.history)), this.removeListeners = dn(qe(window, "pointermove", this.handlePointerMove), qe(window, "pointerup", this.handlePointerUp), qe(window, "pointercancel", this.handlePointerUp));
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
function ti(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function jn({ point: e }, t) {
  return {
    point: e,
    delta: ti(e, la(t)),
    offset: ti(e, xh(t)),
    velocity: wh(t, 0.1)
  };
}
function xh(e) {
  return e[0];
}
function la(e) {
  return e[e.length - 1];
}
function wh(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = la(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Nt(t))); )
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
function se(e) {
  return e.max - e.min;
}
function sr(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function ni(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = $(t.min, t.max, e.origin), e.scale = se(n) / se(t), (sr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = $(n.min, n.max, e.origin) - e.originPoint, (sr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function lt(e, t, n, r) {
  ni(e.x, t.x, n.x, r == null ? void 0 : r.originX), ni(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function ri(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + se(t);
}
function Th(e, t, n) {
  ri(e.x, t.x, n.x), ri(e.y, t.y, n.y);
}
function oi(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + se(t);
}
function ut(e, t, n) {
  oi(e.x, t.x, n.x), oi(e.y, t.y, n.y);
}
function Ch(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? $(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? $(n, e, r.max) : Math.min(e, n)), e;
}
function ii(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Eh(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: ii(e.x, n, o),
    y: ii(e.y, t, r)
  };
}
function si(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Sh(e, t) {
  return {
    x: si(e.x, t.x),
    y: si(e.y, t.y)
  };
}
function Ph(e, t) {
  let n = 0.5;
  const r = se(e), o = se(t);
  return o > r ? n = Xt(t.min, t.max - r, e.min) : r > o && (n = Xt(e.min, e.max - o, t.min)), Ke(0, 1, n);
}
function Ah(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ar = 0.35;
function Rh(e = ar) {
  return e === !1 ? e = 0 : e === !0 && (e = ar), {
    x: ai(e, "left", "right"),
    y: ai(e, "top", "bottom")
  };
}
function ai(e, t, n) {
  return {
    min: ci(e, t),
    max: ci(e, n)
  };
}
function ci(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const li = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ft = () => ({
  x: li(),
  y: li()
}), ui = () => ({ min: 0, max: 0 }), q = () => ({
  x: ui(),
  y: ui()
});
function he(e) {
  return [e("x"), e("y")];
}
function ua({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function kh({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Vh(e, t) {
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
  return cr(e) || fa(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function fa(e) {
  return fi(e.x) || fi(e.y);
}
function fi(e) {
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
function Dh(e, t, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let a, c;
  for (let u = 0; u < i; u++)
    a = n[u], c = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && He(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), c && (t.x *= c.x.scale, t.y *= c.y.scale, da(e, c)), r && Fe(a.latestValues) && He(e, a.latestValues));
  t.x = hi(t.x), t.y = hi(t.y);
}
function hi(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ae(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function pi(e, t, [n, r, o]) {
  const s = t[o] !== void 0 ? t[o] : 0.5, i = $(e.min, e.max, s);
  lr(e, t[n], t[r], i, t.scale);
}
const Oh = ["x", "scaleX", "originX"], Fh = ["y", "scaleY", "originY"];
function He(e, t) {
  pi(e.x, t, Oh), pi(e.y, t, Fh);
}
function ha(e, t) {
  return ua(Vh(e.getBoundingClientRect(), t));
}
function Lh(e, t, n) {
  const r = ha(e, n), { scroll: o } = t;
  return o && (Ae(r.x, o.offset.x), Ae(r.y, o.offset.y)), r;
}
const Mh = /* @__PURE__ */ new WeakMap();
class _h {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(Or(a, "page").point);
    }, o = (a, c) => {
      var u;
      const { drag: l, dragPropagation: f, onDragStart: h } = this.getProps();
      l && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ds(l), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), he((p) => {
        var m, g;
        let T = this.getAxisMotionValue(p).get() || 0;
        if (me.test(T)) {
          const v = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[p];
          v && (T = se(v) * (parseFloat(T) / 100));
        }
        this.originPoint[p] = T;
      }), h == null || h(a, c), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(I.Drag, !0));
    }, s = (a, c) => {
      const { dragPropagation: u, dragDirectionLock: l, onDirectionLock: f, onDrag: h } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: p } = c;
      if (l && this.currentDirection === null) {
        this.currentDirection = Bh(p), this.currentDirection !== null && (f == null || f(this.currentDirection));
        return;
      }
      this.updateAxis("x", c.point, p), this.updateAxis("y", c.point, p), this.visualElement.render(), h == null || h(a, c);
    }, i = (a, c) => this.stop(a, c);
    this.panSession = new ca(t, {
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
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(I.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Mt(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = Ch(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    t && ze(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Eh(r.layoutBox, t) : this.constraints = !1, this.elastic = Rh(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && he((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = Ah(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ze(t))
      return !1;
    const r = t.current;
    fe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Lh(r, o.root, this.visualElement.getTransformPagePoint());
    let i = Sh(o.layout.layoutBox, s);
    if (n) {
      const a = n(kh(i));
      this.hasMutatedConstraints = !!a, a && (i = ua(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = he((l) => {
      if (!Mt(l, n, this.currentDirection))
        return;
      let f = (c == null ? void 0 : c[l]) || {};
      i && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[l] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(l, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Xr(t, r, 0, n));
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
      if (!Mt(n, r, this.currentDirection))
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
    if (!ze(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    he((a) => {
      const c = this.getAxisMotionValue(a);
      if (c) {
        const u = c.get();
        s[a] = Ph({ min: u, max: u }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (t = o.root) === null || t === void 0 || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), he((a) => {
      if (!Mt(a, n, null))
        return;
      const c = this.getAxisMotionValue(a), { min: u, max: l } = this.constraints[a];
      c.set($(u, l, s[a]));
    });
  }
  addListeners() {
    var t;
    if (!this.visualElement.current)
      return;
    Mh.set(this.visualElement, this);
    const n = this.visualElement.current, r = qe(n, "pointerdown", (u) => {
      const { drag: l, dragListener: f = !0 } = this.getProps();
      l && f && this.start(u);
    }), o = () => {
      const { dragConstraints: u } = this.getProps();
      ze(u) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((t = s.root) === null || t === void 0 || t.updateScroll(), s.updateLayout()), o();
    const a = fn(window, "resize", () => this.scalePositionWithinConstraints()), c = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (he((f) => {
        const h = this.getAxisMotionValue(f);
        h && (this.originPoint[f] += u[f].translate, h.set(h.get() + u[f].translate));
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
function Mt(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Bh(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function Ih(e) {
  const { dragControls: t, visualElement: n } = e, r = un(() => new _h(n));
  ne(() => t && t.subscribe(r), [r, t]), ne(() => r.addListeners(), [r]);
}
function jh({ onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = e || t || n || r, i = Q(null), { transformPagePoint: a } = G(Tr), c = {
    onSessionStart: r,
    onStart: t,
    onMove: e,
    onEnd: (l, f) => {
      i.current = null, n && n(l, f);
    }
  };
  ne(() => {
    i.current !== null && i.current.updateHandlers(c);
  });
  function u(l) {
    i.current = new ca(l, c, {
      transformPagePoint: a
    });
  }
  Gt(o, "pointerdown", s && u), Fr(() => i.current && i.current.end());
}
const $h = {
  pan: Re(jh),
  drag: Re(Ih)
};
function ur(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
const pa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Nh(e) {
  const t = pa.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
const Uh = 4;
function fr(e, t, n = 1) {
  fe(n <= Uh, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Nh(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  return s ? s.trim() : ur(o) ? fr(o, t, n + 1) : o;
}
function zh(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const s = o.get();
    if (!ur(s))
      return;
    const i = fr(s, r);
    i && o.set(i);
  });
  for (const o in t) {
    const s = t[o];
    if (!ur(s))
      continue;
    const i = fr(s, r);
    i && (t[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: t, transitionEnd: n };
}
const Wh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), ma = (e) => Wh.has(e), Hh = (e) => Object.keys(e).some(ma), ga = (e, t) => {
  e.set(t, !1), e.set(t);
}, _t = (e) => e === je || e === A;
var mi;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(mi || (mi = {}));
const gi = (e, t) => parseFloat(e.split(", ")[t]), yi = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return gi(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? gi(s[1], e) : 0;
  }
}, qh = /* @__PURE__ */ new Set(["x", "y", "z"]), Gh = Wt.filter((e) => !qh.has(e));
function Kh(e) {
  const t = [];
  return Gh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const vi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: yi(4, 13),
  y: yi(5, 14)
}, Yh = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    a[u] = vi[u](r, s);
  }), t.render();
  const c = t.measureViewportBox();
  return n.forEach((u) => {
    const l = t.getValue(u);
    ga(l, a[u]), e[u] = vi[u](c, s);
  }), e;
}, Xh = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(ma);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((c) => {
    const u = e.getValue(c);
    if (!e.hasValue(c))
      return;
    let l = n[c], f = tt(l);
    const h = t[c];
    let p;
    if (qt(h)) {
      const m = h.length, g = h[0] === null ? 1 : 0;
      l = h[g], f = tt(l);
      for (let T = g; T < m; T++)
        p ? fe(tt(h[T]) === p, "All keyframes must be of the same type") : (p = tt(h[T]), fe(p === f || _t(f) && _t(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = tt(h);
    if (f !== p)
      if (_t(f) && _t(p)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof h == "string" ? t[c] = parseFloat(h) : Array.isArray(h) && p === A && (t[c] = h.map(parseFloat));
      } else
        f != null && f.transform && (p != null && p.transform) && (l === 0 || h === 0) ? l === 0 ? u.set(p.transform(l)) : t[c] = f.transform(h) : (i || (s = Kh(e), i = !0), a.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], ga(u, h));
  }), a.length) {
    const c = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = Yh(t, e, a);
    return s.length && s.forEach(([l, f]) => {
      e.getValue(l).set(f);
    }), e.render(), Be && c !== null && window.scrollTo({ top: c }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function Jh(e, t, n, r) {
  return Hh(t) ? Xh(e, t, n, r) : { target: t, transitionEnd: r };
}
const Zh = (e, t, n, r) => {
  const o = zh(e, t, r);
  return t = o.target, r = o.transitionEnd, Jh(e, t, n, r);
}, dr = { current: null }, ya = { current: !1 };
function Qh() {
  if (ya.current = !0, !!Be)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => dr.current = e.matches;
      e.addListener(t), t();
    } else
      dr.current = !1;
}
function ep(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const s = t[o], i = n[o];
    if (ve(s))
      e.addValue(o, s), Yt(r) && r.add(o), process.env.NODE_ENV === "development" && Mr(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (ve(i))
      e.addValue(o, Ye(s, { owner: e })), Yt(r) && r.remove(o);
    else if (i !== s)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Ye(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const va = Object.keys(mt), tp = va.length, bi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class np {
  constructor({ parent: t, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => ie.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = t, this.props = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = ln(n), this.isVariantNode = hs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n);
    for (const l in u) {
      const f = u[l];
      i[l] !== void 0 && ve(f) && (f.set(i[l], !1), Yt(c) && c.add(l));
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
    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), ya.current || Qh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : dr.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var t, n, r;
    (t = this.projection) === null || t === void 0 || t.unmount(), ke.update(this.notifyUpdate), ke.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Ie.has(t), o = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && ie.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
    Lr !== "production" && r && n && fe(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let c = 0; c < tp; c++) {
      const u = va[c], { isEnabled: l, Component: f } = mt[u];
      l(t) && f && a.push(ji(f, {
        key: u,
        ...t,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: c, layout: u, drag: l, dragConstraints: f, layoutScroll: h } = t;
      this.projection.setOptions({
        layoutId: c,
        layout: u,
        alwaysMeasureLayout: !!l || f && ze(f),
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
    for (let n = 0; n < bi.length; n++) {
      const r = bi[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = t["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = ep(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
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
    for (let s = 0; s < rp; s++) {
      const i = ba[s], a = this.props[i];
      (pt(a) || a === !1) && (o[i] = a);
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
    return r === void 0 && n !== void 0 && (r = Ye(n, { owner: this }), this.addValue(t, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Dr(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ve(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ir()), this.events[t].add(n);
  }
  notify(t, ...n) {
    var r;
    (r = this.events[t]) === null || r === void 0 || r.notify(...n);
  }
}
const ba = ["initial", ...Jr], rp = ba.length;
class xa extends np {
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
    let i = dd(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      ud(this, r, i);
      const a = Zh(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function op(e) {
  return window.getComputedStyle(e);
}
class ip extends xa {
  readValueFromInstance(t, n) {
    if (Ie.has(n)) {
      const r = Nr(n);
      return r && r.default || 0;
    } else {
      const r = op(t), o = (gs(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ha(t, n);
  }
  build(t, n, r, o) {
    Sr(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t) {
    return Vr(t);
  }
  renderInstance(t, n, r, o) {
    ws(t, n, r, o);
  }
}
class sp extends xa {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    var r;
    return Ie.has(n) ? ((r = Nr(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = Ts.has(n) ? n : kr(n), t.getAttribute(n));
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
    Cs(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Rr(t.tagName), super.mount(t);
  }
}
const ap = (e, t) => Er(e) ? new sp(t, { enableHardwareAcceleration: !1 }) : new ip(t, { enableHardwareAcceleration: !0 });
function xi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const nt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (A.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = xi(e, t.target.x), r = xi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, wi = "_$css", cp = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = e.includes("var("), s = [];
    o && (e = e.replace(pa, (p) => (s.push(p), wi)));
    const i = Ve.parse(e);
    if (i.length > 5)
      return r;
    const a = Ve.createTransformer(e), c = typeof i[0] != "number" ? 1 : 0, u = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + c] /= u, i[1 + c] /= l;
    const f = $(u, l, 0.5);
    typeof i[2 + c] == "number" && (i[2 + c] /= f), typeof i[3 + c] == "number" && (i[3 + c] /= f);
    let h = a(i);
    if (o) {
      let p = 0;
      h = h.replace(wi, () => {
        const m = s[p];
        return p++, m;
      });
    }
    return h;
  }
};
class lp extends vt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    ju(fp), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), st.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ie.postRender(() => {
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
function up(e) {
  const [t, n] = Ls(), r = G(Cr);
  return vt.createElement(lp, { ...e, layoutGroup: r, switchLayoutGroup: G(ps), isPresent: t, safeToRemove: n });
}
const fp = {
  borderRadius: {
    ...nt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: nt,
  borderTopRightRadius: nt,
  borderBottomLeftRadius: nt,
  borderBottomRightRadius: nt,
  boxShadow: cp
}, dp = {
  measureLayout: up
};
function hp(e, t, n = {}) {
  const r = ve(e) ? e : Ye(e);
  return r.start(Xr("", r, t, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const wa = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], pp = wa.length, Ti = (e) => typeof e == "string" ? parseFloat(e) : e, Ci = (e) => typeof e == "number" || A.test(e);
function mp(e, t, n, r, o, s) {
  o ? (e.opacity = $(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    gp(r)
  ), e.opacityExit = $(t.opacity !== void 0 ? t.opacity : 1, 0, yp(r))) : s && (e.opacity = $(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < pp; i++) {
    const a = `border${wa[i]}Radius`;
    let c = Ei(t, a), u = Ei(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Ci(c) === Ci(u) ? (e[a] = Math.max($(Ti(c), Ti(u), r), 0), (me.test(u) || me.test(c)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = $(t.rotate || 0, n.rotate || 0, r));
}
function Ei(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const gp = Ta(0, 0.5, Kr), yp = Ta(0.5, 0.95, Gr);
function Ta(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Xt(e, t, r));
}
function Si(e, t) {
  e.min = t.min, e.max = t.max;
}
function ue(e, t) {
  Si(e.x, t.x), Si(e.y, t.y);
}
function Pi(e, t, n, r, o) {
  return e -= t, e = Qt(e, 1 / n, r), o !== void 0 && (e = Qt(e, 1 / o, r)), e;
}
function vp(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (me.test(t) && (t = parseFloat(t), t = $(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = $(s.min, s.max, r);
  e === s && (a -= t), e.min = Pi(e.min, t, n, a, o), e.max = Pi(e.max, t, n, a, o);
}
function Ai(e, t, [n, r, o], s, i) {
  vp(e, t[n], t[r], t[o], t.scale, s, i);
}
const bp = ["x", "scaleX", "originX"], xp = ["y", "scaleY", "originY"];
function Ri(e, t, n, r) {
  Ai(e.x, t, bp, n == null ? void 0 : n.x, r == null ? void 0 : r.x), Ai(e.y, t, xp, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function ki(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ca(e) {
  return ki(e.x) && ki(e.y);
}
function Ea(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Vi(e) {
  return se(e.x) / se(e.y);
}
class wp {
  constructor() {
    this.members = [];
  }
  add(t) {
    _r(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Br(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Di(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: c, rotateX: u, rotateY: l } = n;
    c && (r += `rotate(${c}deg) `), u && (r += `rotateX(${u}deg) `), l && (r += `rotateY(${l}deg) `);
  }
  const i = e.x.scale * t.x, a = e.y.scale * t.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const Tp = (e, t) => e.depth - t.depth;
class Cp {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    _r(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Br(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Tp), this.isDirty = !1, this.children.forEach(t);
  }
}
const Oi = ["", "X", "Y", "Z"], Fi = 1e3;
let Ep = 0;
function Sa({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, c = t == null ? void 0 : t()) {
      this.id = Ep++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(Ap), this.nodes.forEach(Vp), this.nodes.forEach(Dp);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Cp());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ir()), this.eventHandlers.get(i).add(a);
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
      const { layoutId: u, layout: l, visualElement: f } = this.options;
      if (f && !f.current && f.mount(i), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (l || u) && (this.isLayoutDirty = !0), e) {
        let h;
        const p = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = oa(p, 250), st.hasAnimatedSinceResize && (st.hasAnimatedSinceResize = !1, this.nodes.forEach(Mi));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && f && (u || l) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        var T, v, w, b, C;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const V = (v = (T = this.options.transition) !== null && T !== void 0 ? T : f.getDefaultTransition()) !== null && v !== void 0 ? v : _p, { onLayoutAnimationStart: L, onLayoutAnimationComplete: W } = f.getProps(), X = !this.targetLayout || !Ea(this.targetLayout, g) || m, J = !p && m;
        if (!((w = this.resumeFrom) === null || w === void 0) && w.instance || J || p && (X || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, J);
          const H = {
            ...ia(V, "layout"),
            onPlay: L,
            onComplete: W
          };
          f.shouldReduceMotion && (H.delay = 0, H.type = !1), this.startAnimation(H);
        } else
          !p && this.animationProgress === 0 && Mi(this), this.isLead() && ((C = (b = this.options).onExitComplete) === null || C === void 0 || C.call(b));
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(Op), this.animationId++);
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
      const { layoutId: l, layout: f } = this.options;
      if (l === void 0 && !f)
        return;
      const h = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
      this.prevTransformTemplateValue = h == null ? void 0 : h(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Li);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Bp), this.potentialNodes.clear()), this.nodes.forEach(kp), this.nodes.forEach(Sp), this.nodes.forEach(Pp), this.clearAllSnapshots(), Dn.update(), Dn.preRender(), Dn.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(Rp), this.sharedNodes.forEach(Fp);
    }
    scheduleUpdateProjection() {
      ie.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
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
      const a = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !Ca(this.projectionDelta), u = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, l = u == null ? void 0 : u(this.latestValues, ""), f = l !== this.prevTransformTemplateValue;
      a && (c || Fe(this.latestValues) || f) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), Ip(c), {
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
      return c && (Ae(a.x, c.offset.x), Ae(a.y, c.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = q();
      ue(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: f } = u;
        if (u !== this.root && l && f.layoutScroll) {
          if (l.isRoot) {
            ue(a, i);
            const { scroll: h } = this.root;
            h && (Ae(a.x, -h.offset.x), Ae(a.y, -h.offset.y));
          }
          Ae(a.x, l.offset.x), Ae(a.y, l.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const c = q();
      ue(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        !a && l.options.layoutScroll && l.scroll && l !== l.root && He(c, {
          x: -l.scroll.offset.x,
          y: -l.scroll.offset.y
        }), Fe(l.latestValues) && He(c, l.latestValues);
      }
      return Fe(this.latestValues) && He(c, this.latestValues), c;
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
        const f = q(), h = l.measurePageBox();
        ue(f, h), Ri(c, l.latestValues, (a = l.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, f);
      }
      return Fe(this.latestValues) && Ri(c, this.latestValues), c;
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
          l && l.layout ? (this.relativeParent = l, this.relativeTarget = q(), this.relativeTargetOrigin = q(), ut(this.relativeTargetOrigin, this.layout.layoutBox, l.layout.layoutBox), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? Th(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ue(this.target, this.layout.layoutBox), da(this.target, this.targetDelta)) : ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const l = this.getClosestProjectingParent();
          l && !!l.resumingFrom == !!this.resumingFrom && !l.options.layoutScroll && l.target ? (this.relativeParent = l, this.relativeTarget = q(), this.relativeTargetOrigin = q(), ut(this.relativeTargetOrigin, this.target, l.target), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || cr(this.parent.latestValues) || fa(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: c } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const u = this.getLead(), l = !!this.resumingFrom || this !== u;
      let f = !0;
      if (a && (f = !1), l && c && (f = !1), f)
        return;
      const { layout: h, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || p))
        return;
      ue(this.layoutCorrected, this.layout.layoutBox), Dh(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: m } = u;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = ft(), this.projectionDeltaWithTransform = ft());
      const g = this.treeScale.x, T = this.treeScale.y, v = this.projectionTransform;
      lt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Di(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== g || this.treeScale.y !== T) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      const l = this.snapshot, f = (l == null ? void 0 : l.latestValues) || {}, h = { ...this.latestValues }, p = ft();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = q(), g = (l == null ? void 0 : l.source) !== ((c = this.layout) === null || c === void 0 ? void 0 : c.source), T = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1, v = !!(g && !T && this.options.crossfade === !0 && !this.path.some(Mp));
      this.animationProgress = 0, this.mixTargetDelta = (w) => {
        var b;
        const C = w / 1e3;
        _i(p.x, i.x, C), _i(p.y, i.y, C), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((b = this.relativeParent) === null || b === void 0) && b.layout) && (ut(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Lp(this.relativeTarget, this.relativeTargetOrigin, m, C)), g && (this.animationValues = h, mp(h, f, this.latestValues, C, v, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (ke.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        st.hasAnimatedSinceResize = !0, this.currentAnimation = hp(0, Fi, {
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
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Fi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = i;
      if (!(!a || !c || !u)) {
        if (this !== i && this.layout && u && Pa(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || q();
          const f = se(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + f;
          const h = se(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + h;
        }
        ue(a, c), He(a, l), lt(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(i, a) {
      var c, u, l;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new wp()), this.sharedNodes.get(i).add(a), a.promote({
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
      for (let l = 0; l < Oi.length; l++) {
        const f = "rotate" + Oi[l];
        c[f] && (u[f] = c[f], i.setStaticValue(f, 0));
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
      const f = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = $t(i.pointerEvents) || "", l.transform = f ? f(this.latestValues, "") : "none", l;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const T = {};
        return this.options.layoutId && (T.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, T.pointerEvents = $t(i.pointerEvents) || ""), this.hasProjected && !Fe(this.latestValues) && (T.transform = f ? f({}, "") : "none", this.hasProjected = !1), T;
      }
      const p = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), l.transform = Di(this.projectionDeltaWithTransform, this.treeScale, p), f && (l.transform = f(p, l.transform));
      const { x: m, y: g } = this.projectionDelta;
      l.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? l.opacity = h === this ? (u = (c = p.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : l.opacity = h === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const T in zt) {
        if (p[T] === void 0)
          continue;
        const { correct: v, applyTo: w } = zt[T], b = v(p[T], h);
        if (w) {
          const C = w.length;
          for (let V = 0; V < C; V++)
            l[w[V]] = b;
        } else
          l[T] = b;
      }
      return this.options.layoutId && (l.pointerEvents = h === this ? $t(i.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Li), this.root.sharedNodes.clear();
    }
  };
}
function Sp(e) {
  e.updateLayout();
}
function Pp(e) {
  var t, n, r;
  const o = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: a } = e.options, c = o.source !== e.layout.source;
    a === "size" ? he((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = se(m);
      m.min = s[p].min, m.max = m.min + g;
    }) : Pa(a, o.layoutBox, s) && he((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = se(s[p]);
      m.max = m.min + g;
    });
    const u = ft();
    lt(u, s, o.layoutBox);
    const l = ft();
    c ? lt(l, e.applyTransform(i, !0), o.measuredBox) : lt(l, s, o.layoutBox);
    const f = !Ca(u);
    let h = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: g } = p;
        if (m && g) {
          const T = q();
          ut(T, o.layoutBox, m.layoutBox);
          const v = q();
          ut(v, s, g.layoutBox), Ea(T, v) || (h = !0);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: l,
      layoutDelta: u,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: h
    });
  } else
    e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
  e.options.transition = void 0;
}
function Ap(e) {
  e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty));
}
function Rp(e) {
  e.clearSnapshot();
}
function Li(e) {
  e.clearMeasurements();
}
function kp(e) {
  const { visualElement: t } = e.options;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Mi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function Vp(e) {
  e.resolveTargetDelta();
}
function Dp(e) {
  e.calcProjection();
}
function Op(e) {
  e.resetRotation();
}
function Fp(e) {
  e.removeLeadSnapshot();
}
function _i(e, t, n) {
  e.translate = $(t.translate, 0, n), e.scale = $(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Bi(e, t, n, r) {
  e.min = $(t.min, n.min, r), e.max = $(t.max, n.max, r);
}
function Lp(e, t, n, r) {
  Bi(e.x, t.x, n.x, r), Bi(e.y, t.y, n.y, r);
}
function Mp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const _p = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Bp(e, t) {
  let n = e.root;
  for (let s = e.path.length - 1; s >= 0; s--)
    if (e.path[s].instance) {
      n = e.path[s];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, !0);
}
function Ii(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Ip(e) {
  Ii(e.x), Ii(e.y);
}
function Pa(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !sr(Vi(t), Vi(n), 0.2);
}
const jp = Sa({
  attachResizeListener: (e, t) => fn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Nn = {
  current: void 0
}, $p = Sa({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Nn.current) {
      const e = new jp(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Nn.current = e;
    }
    return Nn.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Np = {
  ...vh,
  ...If,
  ...$h,
  ...dp
}, gn = /* @__PURE__ */ Bu((e, t) => gf(e, t, Np, ap, $p));
function Aa() {
  const e = Q(!1);
  return it(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Up() {
  const e = Aa(), [t, n] = oe(0), r = Me(() => {
    e.current && n(t + 1);
  }, [t]);
  return [Me(() => ie.postRender(r), [r]), t];
}
class zp extends _.Component {
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
function Wp({ children: e, isPresent: t }) {
  const n = pr(), r = Q(null), o = Q({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return sc(() => {
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
  }, [t]), _.createElement(zp, { isPresent: t, childRef: r, sizeRef: o }, _.cloneElement(e, { ref: r }));
}
const Un = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = un(Hp), c = pr(), u = ge(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (l) => {
        a.set(l, !0);
        for (const f of a.values())
          if (!f)
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
  return ge(() => {
    a.forEach((l, f) => a.set(f, !1));
  }, [n]), _.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = _.createElement(Wp, { isPresent: n }, e)), _.createElement(Tt.Provider, { value: u }, e);
};
function Hp() {
  return /* @__PURE__ */ new Map();
}
const Ue = (e) => e.key || "";
function qp(e, t) {
  e.forEach((n) => {
    const r = Ue(n);
    t.set(r, n);
  });
}
function Gp(e) {
  const t = [];
  return cc.forEach(e, (n) => {
    lc(n) && t.push(n);
  }), t;
}
const yn = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", Mr(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = Up();
  const c = G(Cr).forceRender;
  c && (a = c);
  const u = Aa(), l = Gp(e);
  let f = l;
  const h = /* @__PURE__ */ new Set(), p = Q(f), m = Q(/* @__PURE__ */ new Map()).current, g = Q(!0);
  if (it(() => {
    g.current = !1, qp(l, m), p.current = f;
  }), Fr(() => {
    g.current = !0, m.clear(), h.clear();
  }), g.current)
    return _.createElement(_.Fragment, null, f.map((b) => _.createElement(Un, { key: Ue(b), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, b)));
  f = [...f];
  const T = p.current.map(Ue), v = l.map(Ue), w = T.length;
  for (let b = 0; b < w; b++) {
    const C = T[b];
    v.indexOf(C) === -1 && h.add(C);
  }
  return i === "wait" && h.size && (f = []), h.forEach((b) => {
    if (v.indexOf(b) !== -1)
      return;
    const C = m.get(b);
    if (!C)
      return;
    const V = T.indexOf(b), L = () => {
      m.delete(b), h.delete(b);
      const W = p.current.findIndex((X) => X.key === b);
      if (p.current.splice(W, 1), !h.size) {
        if (p.current = l, u.current === !1)
          return;
        a(), r && r();
      }
    };
    f.splice(V, 0, _.createElement(Un, { key: Ue(C), isPresent: !1, onExitComplete: L, custom: t, presenceAffectsLayout: s, mode: i }, C));
  }), f = f.map((b) => {
    const C = b.key;
    return h.has(C) ? b : _.createElement(Un, { key: Ue(b), isPresent: !0, presenceAffectsLayout: s, mode: i }, b);
  }), Lr !== "production" && i === "wait" && f.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), _.createElement(_.Fragment, null, h.size ? f : f.map((b) => ac(b)));
};
function Mm({
  children: e,
  content: t,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = oe(!1);
  ne(() => (document.addEventListener("mousedown", l), () => {
    document.removeEventListener("mousedown", l);
  }));
  const c = Q(), u = Q();
  function l(f) {
    var h, p;
    o === "click" && (!i && ((h = u.current) != null && h.contains(f.target)) ? a(!0) : i && !((p = c.current) != null && p.contains(f.target)) && (f.preventDefault(), f.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ j(
    Kp,
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
          Yp,
          {
            style: r || rt(n),
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
const Kp = P.div`
  position: relative;
  display: inline-block;
`, Yp = P(gn.div)`
  position: absolute;
  z-index: 100;
`, Ra = _e({
  toasts: [],
  setToast() {
  }
}), Xp = () => G(Ra);
let Jp = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Zp(e) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ _.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ _.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function Qp(e) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ _.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ _.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function ka(e) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ _.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ _.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ _.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function em(e) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ _.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ _.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ _.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
const tm = (e) => {
  switch (e) {
    case "info":
      return ka;
    case "error":
      return em;
    default:
      return Zp;
  }
};
function nm({
  children: e,
  duration: t,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s,
  showProgress: i = !1,
  progressColor: a,
  showIcon: c = !0
}) {
  const [u, l] = oe(100), f = Q(100), h = Q(Date.now()), p = Me(async () => {
    n && (await n.task(), o());
  }, [n, o]);
  return ne(() => {
    if (!i)
      return;
    const g = s + t;
    let T;
    h.current = Date.now();
    const v = () => {
      const w = Date.now(), b = Math.max(0, g - w);
      if (w - h.current >= 16) {
        const C = b / t * 100;
        Math.abs(C - f.current) >= 1 && (l(C), f.current = C), h.current = w;
      }
      b > 0 && (T = requestAnimationFrame(v));
    };
    return v(), () => {
      T && cancelAnimationFrame(T);
    };
  }, [s, t, i]), /* @__PURE__ */ j(rm, { children: [
    /* @__PURE__ */ j(im, { children: [
      c && /* @__PURE__ */ E(sm, { as: tm(r), type: r }),
      /* @__PURE__ */ E(am, { children: e })
    ] }),
    /* @__PURE__ */ j(cm, { children: [
      n && /* @__PURE__ */ E(Oa, { onClick: p, children: n.name }),
      /* @__PURE__ */ E(lm, { onClick: o, children: /* @__PURE__ */ E(um, {}) })
    ] }),
    i && u > 0 && /* @__PURE__ */ E(om, { type: r, progress: u, color: a })
  ] });
}
const Va = ".25rem", rm = P(gn.div).attrs({
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
  //padding: .5rem 1.1rem calc(.5rem + ${Va});
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(e) => e.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + e.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, Da = {
  success: (e) => e.theme.success,
  error: (e) => e.theme.fail,
  info: (e) => e.theme.theme
}, om = P.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${Va};
  width: ${(e) => e.progress || "100"}%;
  background: ${(e) => e.color || Da[e.type](e)};
  will-change: width;
`, en = ".35rem", im = P.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, sm = P(ka)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: ${(e) => Da[e.type](e)};
`, am = P.div`
  padding: ${en} 0;
`, cm = P.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, hr = "1rem", Oa = P.button`
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
`, lm = P(Oa)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${en} * 2 + ${hr});
  height: calc(${en} * 2 + ${hr});
`, um = P(Ui)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, fm = ({ setToasts: e }) => {
  const { toasts: t } = Xp(), n = Me(
    (o) => {
      e((s) => s.filter((i) => i.id !== o));
    },
    [e]
  ), r = Me(
    (o, s) => typeof o == "function" ? o({ close: () => n(s) }) : o,
    [n]
  );
  return /* @__PURE__ */ E(dm, { children: /* @__PURE__ */ E(yn, { children: t.map((o) => /* @__PURE__ */ E(
    nm,
    {
      action: o.action,
      duration: o.duration,
      type: o.type,
      close: () => n(o.id),
      addedAt: o.addedAt,
      showProgress: o.showProgress,
      progressColor: o.progressColor,
      showIcon: o.showIcon,
      children: r(o.content, o.id)
    },
    o.id
  )) }) });
}, dm = P.div`
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
`, _m = {
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
}, Bm = {
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
function Im({
  children: e,
  theme: t
}) {
  const [n, r] = oe([]);
  function o(s) {
    const i = Jp();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((c) => c.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ E(fc, { theme: t, children: /* @__PURE__ */ j(Ra.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ E(fm, { setToasts: r }),
    e
  ] }) });
}
const jm = P.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal: e = !0, showPaddingVertical: t = !0 }) => `${t ? "24px" : "0px"} ${e ? "24px" : "0px"}`};
`;
function $m({
  children: e,
  label: t,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = ge(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ j(mr, { children: [
    t && /* @__PURE__ */ E(Wi, { children: t }),
    /* @__PURE__ */ j(
      zi,
      {
        fullWidth: n,
        sizeVariant: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ E(hm, { ...i, children: e }),
          /* @__PURE__ */ E(zn, { position: "right", children: /* @__PURE__ */ E(Wn, { as: Ni }) })
        ]
      }
    )
  ] });
}
const hm = P.select`
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
function Nm({
  children: e,
  content: t,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, c, u;
  const [s, i] = oe(!1);
  return /* @__PURE__ */ j(
    pm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ E(yn, { children: s && /* @__PURE__ */ E(
          mm,
          {
            ...o,
            position: r,
            style: rt(r),
            initial: {
              opacity: 0,
              transform: (((a = rt(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((c = rt(r)) == null ? void 0 : c.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((u = rt(r)) == null ? void 0 : u.transform) || "") + " scale(.95)"
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
const pm = P.div`
  position: relative;
  display: inline-flex;
  ${(e) => e.underline ? "border-bottom: 1px dotted rgb(" + e.theme.cardBorder + ");" : ""}
  ${(e) => e.underline ? "cursor: pointer;" : ""}
`, mm = P(gn.div)`
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
    ${(e) => Cu(e.position)}
  }
`, Um = P.span`
  display: block;
  height: ${({ y: e }) => e ? `${e}rem` : "0"};
  width: ${({ x: e }) => e ? `${e}rem` : "0"};
`;
function zm({
  children: e,
  accept: t,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = oe([]);
  return ne(() => {
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
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ j(gm, { ...o, children: [
    /* @__PURE__ */ E(bt, { children: s.length === 0 && e || s.join(", ") }),
    /* @__PURE__ */ E(vm, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ E(Qp, {}) }),
    /* @__PURE__ */ E(ym, { accept: t, multiple: n, ref: r })
  ] });
}
const gm = P($i).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, ym = P.input.attrs({
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
`, vm = P(bc).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Wm({
  children: e,
  open: t,
  setOpen: n,
  actions: r,
  root: o,
  showCloseIcon: s = !1
}) {
  return dc.createPortal(
    /* @__PURE__ */ E(yn, { children: t && /* @__PURE__ */ E(bm, { onClick: () => n(!1), children: /* @__PURE__ */ j(xm, { onClick: (i) => i.stopPropagation(), children: [
      s && /* @__PURE__ */ E(Cm, { onClick: () => n(!1) }),
      /* @__PURE__ */ E(wm, { children: e }),
      r && /* @__PURE__ */ E(Tm, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const bm = P(gn.div).attrs({
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
`, xm = P.div`
  position: relative;
  background-color: ${(e) => e.theme.surfaceSecondaryPopup};
  border: 1px solid ${(e) => e.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`, wm = P.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(e) => e.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`, Tm = P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`, Cm = P(Ui)`
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
  Bm as ARCONNECT_DARK_THEME,
  _m as ARCONNECT_LIGHT_THEME,
  bc as Button,
  $i as Card,
  Vm as Checkbox,
  _c as ErrorMsg,
  zm as FileInput,
  Wn as Icon,
  zn as IconWrapper,
  Dm as Input,
  Bc as InputElement,
  zi as InputWrapper,
  Wi as Label,
  Om as ListItem,
  Lo as ListItemIcon,
  Fm as ListItemImg,
  gc as Loading,
  Wm as Modal,
  Mm as Popover,
  Im as Provider,
  jm as Section,
  $m as Select,
  Um as Spacer,
  bt as Text,
  Nm as Tooltip,
  Rm as useCheckbox,
  Am as useInput,
  km as useModal,
  Xp as useToasts
};
