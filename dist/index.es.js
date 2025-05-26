import * as _ from "react";
import xt, { useState as ne, useCallback as Me, useMemo as de, createContext as Be, useContext as K, useLayoutEffect as ic, useEffect as re, useRef as Q, forwardRef as sc, createElement as Ni, useId as gr, useInsertionEffect as ac, cloneElement as cc, Children as lc, isValidElement as uc } from "react";
import P, { keyframes as dc, ThemeProvider as fc } from "styled-components";
import hc from "react-dom";
function Lm(e) {
  const [t, n] = ne(e), [r, o] = ne("default");
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
function Mm(e = !1) {
  const [t, n] = ne(e);
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
function Bm(e = !1) {
  const [t, n] = ne(e);
  return {
    isOpen: t,
    setOpen: n,
    bindings: {
      open: t,
      setOpen: n
    }
  };
}
var pt = {}, pc = {
  get exports() {
    return pt;
  },
  set exports(e) {
    pt = e;
  }
}, et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function mc() {
  if (xo)
    return et;
  xo = 1;
  var e = xt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return et.Fragment = n, et.jsx = i, et.jsxs = i, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function gc() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function C(f) {
      if (f === null || typeof f != "object")
        return null;
      var b = m && f[m] || f[g];
      return typeof b == "function" ? b : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var b = arguments.length, S = new Array(b > 1 ? b - 1 : 0), R = 1; R < b; R++)
          S[R - 1] = arguments[R];
        v("error", f, S);
      }
    }
    function v(f, b, S) {
      {
        var R = x.ReactDebugCurrentFrame, L = R.getStackAddendum();
        L !== "" && (b += "%s", S = S.concat([L]));
        var I = S.map(function(O) {
          return String(O);
        });
        I.unshift("Warning: " + b), Function.prototype.apply.call(console[f], console, I);
      }
    }
    var E = !1, k = !1, D = !1, z = !1, $ = !1, Y;
    Y = Symbol.for("react.module.reference");
    function N(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || $ || f === o || f === u || f === l || z || f === p || E || k || D || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === i || f.$$typeof === a || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Y || f.getModuleId !== void 0));
    }
    function oe(f, b, S) {
      var R = f.displayName;
      if (R)
        return R;
      var L = b.displayName || b.name || "";
      return L !== "" ? S + "(" + L + ")" : S;
    }
    function pe(f) {
      return f.displayName || "Context";
    }
    function Z(f) {
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
            var b = f;
            return pe(b) + ".Consumer";
          case i:
            var S = f;
            return pe(S._context) + ".Provider";
          case c:
            return oe(f, f.render, "ForwardRef");
          case d:
            var R = f.displayName || null;
            return R !== null ? R : Z(f.type) || "Memo";
          case h: {
            var L = f, I = L._payload, O = L._init;
            try {
              return Z(O(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, M = 0, ie, xe, Qr, eo, to, no, ro;
    function oo() {
    }
    oo.__reactDisabledLog = !0;
    function La() {
      {
        if (M === 0) {
          ie = console.log, xe = console.info, Qr = console.warn, eo = console.error, to = console.group, no = console.groupCollapsed, ro = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: oo,
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
        M++;
      }
    }
    function Ma() {
      {
        if (M--, M === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, f, {
              value: ie
            }),
            info: X({}, f, {
              value: xe
            }),
            warn: X({}, f, {
              value: Qr
            }),
            error: X({}, f, {
              value: eo
            }),
            group: X({}, f, {
              value: to
            }),
            groupCollapsed: X({}, f, {
              value: no
            }),
            groupEnd: X({}, f, {
              value: ro
            })
          });
        }
        M < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xn = x.ReactCurrentDispatcher, wn;
    function kt(f, b, S) {
      {
        if (wn === void 0)
          try {
            throw Error();
          } catch (L) {
            var R = L.stack.trim().match(/\n( *(at )?)/);
            wn = R && R[1] || "";
          }
        return `
` + wn + f;
      }
    }
    var Tn = !1, Vt;
    {
      var Ba = typeof WeakMap == "function" ? WeakMap : Map;
      Vt = new Ba();
    }
    function io(f, b) {
      if (!f || Tn)
        return "";
      {
        var S = Vt.get(f);
        if (S !== void 0)
          return S;
      }
      var R;
      Tn = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = xn.current, xn.current = null, La();
      try {
        if (b) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (we) {
              R = we;
            }
            Reflect.construct(f, [], O);
          } else {
            try {
              O.call();
            } catch (we) {
              R = we;
            }
            f.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            R = we;
          }
          f();
        }
      } catch (we) {
        if (we && R && typeof we.stack == "string") {
          for (var V = we.stack.split(`
`), ee = R.stack.split(`
`), W = V.length - 1, H = ee.length - 1; W >= 1 && H >= 0 && V[W] !== ee[H]; )
            H--;
          for (; W >= 1 && H >= 0; W--, H--)
            if (V[W] !== ee[H]) {
              if (W !== 1 || H !== 1)
                do
                  if (W--, H--, H < 0 || V[W] !== ee[H]) {
                    var ce = `
` + V[W].replace(" at new ", " at ");
                    return f.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", f.displayName)), typeof f == "function" && Vt.set(f, ce), ce;
                  }
                while (W >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        Tn = !1, xn.current = I, Ma(), Error.prepareStackTrace = L;
      }
      var Ne = f ? f.displayName || f.name : "", bo = Ne ? kt(Ne) : "";
      return typeof f == "function" && Vt.set(f, bo), bo;
    }
    function _a(f, b, S) {
      return io(f, !1);
    }
    function Ia(f) {
      var b = f.prototype;
      return !!(b && b.isReactComponent);
    }
    function Dt(f, b, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return io(f, Ia(f));
      if (typeof f == "string")
        return kt(f);
      switch (f) {
        case u:
          return kt("Suspense");
        case l:
          return kt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return _a(f.render);
          case d:
            return Dt(f.type, b, S);
          case h: {
            var R = f, L = R._payload, I = R._init;
            try {
              return Dt(I(L), b, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Ot = Object.prototype.hasOwnProperty, so = {}, ao = x.ReactDebugCurrentFrame;
    function Ft(f) {
      if (f) {
        var b = f._owner, S = Dt(f.type, f._source, b ? b.type : null);
        ao.setExtraStackFrame(S);
      } else
        ao.setExtraStackFrame(null);
    }
    function ja(f, b, S, R, L) {
      {
        var I = Function.call.bind(Ot);
        for (var O in f)
          if (I(f, O)) {
            var V = void 0;
            try {
              if (typeof f[O] != "function") {
                var ee = Error((R || "React class") + ": " + S + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              V = f[O](b, O, R, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              V = W;
            }
            V && !(V instanceof Error) && (Ft(L), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", S, O, typeof V), Ft(null)), V instanceof Error && !(V.message in so) && (so[V.message] = !0, Ft(L), T("Failed %s type: %s", S, V.message), Ft(null));
          }
      }
    }
    var $a = Array.isArray;
    function Cn(f) {
      return $a(f);
    }
    function Na(f) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, S = b && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function Ua(f) {
      try {
        return co(f), !1;
      } catch {
        return !0;
      }
    }
    function co(f) {
      return "" + f;
    }
    function lo(f) {
      if (Ua(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Na(f)), co(f);
    }
    var Qe = x.ReactCurrentOwner, za = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, uo, fo, En;
    En = {};
    function Wa(f) {
      if (Ot.call(f, "ref")) {
        var b = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ha(f) {
      if (Ot.call(f, "key")) {
        var b = Object.getOwnPropertyDescriptor(f, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function qa(f, b) {
      if (typeof f.ref == "string" && Qe.current && b && Qe.current.stateNode !== b) {
        var S = Z(Qe.current.type);
        En[S] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Qe.current.type), f.ref), En[S] = !0);
      }
    }
    function Ga(f, b) {
      {
        var S = function() {
          uo || (uo = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Ya(f, b) {
      {
        var S = function() {
          fo || (fo = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Ka = function(f, b, S, R, L, I, O) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: b,
        ref: S,
        props: O,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Xa(f, b, S, R, L) {
      {
        var I, O = {}, V = null, ee = null;
        S !== void 0 && (lo(S), V = "" + S), Ha(b) && (lo(b.key), V = "" + b.key), Wa(b) && (ee = b.ref, qa(b, L));
        for (I in b)
          Ot.call(b, I) && !za.hasOwnProperty(I) && (O[I] = b[I]);
        if (f && f.defaultProps) {
          var W = f.defaultProps;
          for (I in W)
            O[I] === void 0 && (O[I] = W[I]);
        }
        if (V || ee) {
          var H = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          V && Ga(O, H), ee && Ya(O, H);
        }
        return Ka(f, V, ee, L, R, Qe.current, O);
      }
    }
    var Sn = x.ReactCurrentOwner, ho = x.ReactDebugCurrentFrame;
    function $e(f) {
      if (f) {
        var b = f._owner, S = Dt(f.type, f._source, b ? b.type : null);
        ho.setExtraStackFrame(S);
      } else
        ho.setExtraStackFrame(null);
    }
    var Pn;
    Pn = !1;
    function An(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function po() {
      {
        if (Sn.current) {
          var f = Z(Sn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ja(f) {
      {
        if (f !== void 0) {
          var b = f.fileName.replace(/^.*[\\\/]/, ""), S = f.lineNumber;
          return `

Check your code at ` + b + ":" + S + ".";
        }
        return "";
      }
    }
    var mo = {};
    function Za(f) {
      {
        var b = po();
        if (!b) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (b = `

Check the top-level render call using <` + S + ">.");
        }
        return b;
      }
    }
    function go(f, b) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = Za(b);
        if (mo[S])
          return;
        mo[S] = !0;
        var R = "";
        f && f._owner && f._owner !== Sn.current && (R = " It was passed a child from " + Z(f._owner.type) + "."), $e(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, R), $e(null);
      }
    }
    function yo(f, b) {
      {
        if (typeof f != "object")
          return;
        if (Cn(f))
          for (var S = 0; S < f.length; S++) {
            var R = f[S];
            An(R) && go(R, b);
          }
        else if (An(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var L = C(f);
          if (typeof L == "function" && L !== f.entries)
            for (var I = L.call(f), O; !(O = I.next()).done; )
              An(O.value) && go(O.value, b);
        }
      }
    }
    function Qa(f) {
      {
        var b = f.type;
        if (b == null || typeof b == "string")
          return;
        var S;
        if (typeof b == "function")
          S = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          S = b.propTypes;
        else
          return;
        if (S) {
          var R = Z(b);
          ja(S, f.props, "prop", R, f);
        } else if (b.PropTypes !== void 0 && !Pn) {
          Pn = !0;
          var L = Z(b);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ec(f) {
      {
        for (var b = Object.keys(f.props), S = 0; S < b.length; S++) {
          var R = b[S];
          if (R !== "children" && R !== "key") {
            $e(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), $e(null);
            break;
          }
        }
        f.ref !== null && ($e(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function vo(f, b, S, R, L, I) {
      {
        var O = N(f);
        if (!O) {
          var V = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Ja(L);
          ee ? V += ee : V += po();
          var W;
          f === null ? W = "null" : Cn(f) ? W = "array" : f !== void 0 && f.$$typeof === t ? (W = "<" + (Z(f.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : W = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, V);
        }
        var H = Xa(f, b, S, L, I);
        if (H == null)
          return H;
        if (O) {
          var ce = b.children;
          if (ce !== void 0)
            if (R)
              if (Cn(ce)) {
                for (var Ne = 0; Ne < ce.length; Ne++)
                  yo(ce[Ne], f);
                Object.freeze && Object.freeze(ce);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yo(ce, f);
        }
        return f === r ? ec(H) : Qa(H), H;
      }
    }
    function tc(f, b, S) {
      return vo(f, b, S, !0);
    }
    function nc(f, b, S) {
      return vo(f, b, S, !1);
    }
    var rc = nc, oc = tc;
    tt.Fragment = r, tt.jsx = rc, tt.jsxs = oc;
  }()), tt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = mc() : e.exports = gc();
})(pc);
const wt = pt.Fragment, w = pt.jsx, B = pt.jsxs, yc = (e) => /* @__PURE__ */ B(
  bc,
  {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      /* @__PURE__ */ w(
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
      /* @__PURE__ */ w(
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
), vc = dc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, bc = P.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${vc} 0.9s linear infinite;
`, xc = P.button.attrs((e) => ({
  children: e.loading ? /* @__PURE__ */ w(yc, { style: { margin: ".18rem 0" } }) : e.icon ? /* @__PURE__ */ B(wt, { children: [
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
`, Ui = P.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(e) => e.theme.cardBorder});
  background-color: ${(e) => e.theme.cardBackground};
`, wc = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, Tc = {
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
function Je({
  children: e,
  lineHeight: t,
  noMargin: n = !1,
  as: r = "p",
  size: o = "base",
  weight: s = "regular",
  variant: i = "primary",
  ...a
}) {
  return /* @__PURE__ */ w(
    Cc,
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
const Cc = P.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(e) => Tc[e.$size]};
  font-weight: ${(e) => wc[e.$weight]};
  ${(e) => e.$lineHeight && `line-height: ${e.$lineHeight};`}
  color: ${(e) => e.$variant === "primary" ? e.theme.primaryText : e.$variant === "secondary" ? e.theme.secondaryText : e.theme.tertiaryText};
  ${(e) => e.$noMargin && "margin: 0;"}
`, _m = ({
  checked: e,
  onChange: t,
  size: n = 24,
  label: r,
  labelProps: o
}) => {
  const s = Me(() => {
    t && t(!e);
  }, [t, e]);
  return /* @__PURE__ */ B(Ec, { size: n, onClick: s, children: [
    /* @__PURE__ */ B(Sc, { children: [
      /* @__PURE__ */ w(
        Pc,
        {
          checked: e,
          "aria-checked": e,
          role: "checkbox"
        }
      ),
      /* @__PURE__ */ w(Ac, { size: n })
    ] }),
    r && // @ts-ignore
    /* @__PURE__ */ w(Rc, { ...o, size: n, children: r })
  ] });
}, Ec = P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(e) => Math.max(8, e.size ? e.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`, Sc = P.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
`, Pc = P.input.attrs({ type: "checkbox" })`
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
`, Ac = P.label`
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
`, Rc = P(Je).attrs({
  weight: "medium",
  noMargin: !0
})`
  font-size: ${(e) => Math.max(14, e.size ? e.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(e) => Math.max(e.size || 24, 24)}px;
`;
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fe.apply(this, arguments);
}
var kc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8v4m0 4h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, on = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6 9 6 6 6-6"
    })
  }));
}, Vc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 18 6-6-6-6"
    })
  }));
}, Dc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m18 15-6-6-6 6"
    })
  }));
}, Oc = function(t) {
  return /* @__PURE__ */ B("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: [/* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M2.4201 12.7132c-.1362-.2157-.2043-.3235-.2424-.4898-.0286-.1249-.0286-.3219 0-.4468.0381-.1663.1062-.2741.2424-.4898C3.5455 9.5048 6.8954 5 12.0004 5s8.4549 4.5048 9.5803 6.2868c.1362.2157.2043.3235.2424.4898.0286.1249.0286.3219 0 .4468-.0381.1663-.1062.2741-.2424.4898C20.4553 14.4952 17.1054 19 12.0004 19s-8.4549-4.5048-9.5803-6.2868"
    }), /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.0004 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
    })]
  }));
}, Fc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.7429 5.0923A8.6 8.6 0 0 1 12.0004 5c5.105 0 8.4549 4.5048 9.5803 6.2868.1362.2157.2043.3235.2424.4899.0287.1249.0286.322 0 .4469-.0382.1663-.1067.2749-.2439.492a17.5 17.5 0 0 1-1.3627 1.8649M6.7243 6.715c-2.162 1.4667-3.6298 3.5044-4.3032 4.5703-.1368.2166-.2052.3249-.2434.4912-.0286.1249-.0286.3219 0 .4469.0381.1663.1062.2741.2424.4898C3.5455 14.4952 6.8954 19 12.0004 19c2.0584 0 3.8315-.7324 5.2884-1.7234M3.0004 3l18 18M9.8791 9.8787c-.5429.5429-.8787 1.2929-.8787 2.1213 0 1.6569 1.3432 3 3 3 .8284 0 1.5784-.3358 2.1213-.8787"
    })
  }));
}, Lc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 21-5.9999-6M17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    })
  }));
}, Mc = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15 9-6 6m0-6 6 6m7-3c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, zi = function(t) {
  return /* @__PURE__ */ w("svg", fe({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ w("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 6 6 18M6 6l12 12"
    })
  }));
};
const Bc = {
  small: "42px",
  normal: "52px"
}, _c = {
  small: "16px",
  normal: "18px",
  large: "40px"
};
function Im({
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
  stacked: m,
  ...g
}) {
  const [C, x] = ne(!1), [T, v] = ne(null), [E, k] = ne(!1), D = de(() => h === "password" ? E ? "text" : "password" : h, [s, E, h]), z = de(
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
  ), $ = (X) => {
    const M = setTimeout(() => {
      x(!1), clearTimeout(M);
    }, 200);
    v(M), p == null || p(X);
  }, Y = (X) => {
    var M;
    X.preventDefault(), T && clearTimeout(T), x(!0), (M = g == null ? void 0 : g.onChange) == null || M.call(g, {
      target: { value: "" }
    });
  }, N = () => a || (h === "password" ? /* @__PURE__ */ w(
    qn,
    {
      as: E ? Fc : Oc,
      onClick: () => k(!E)
    }
  ) : s === "dropdown" ? /* @__PURE__ */ w(qn, { as: on, disabled: o }) : g.value && C ? /* @__PURE__ */ w(Nc, { onClick: Y, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ w(kc, { height: 20, width: 20, color: "#D22B1F" }) : null), pe = (() => i || (s === "search" ? /* @__PURE__ */ w($c, { disabled: o }) : null))(), Z = N();
  return /* @__PURE__ */ B(wt, { children: [
    e && /* @__PURE__ */ w(Hi, { style: d, children: e }),
    /* @__PURE__ */ B(
      Wi,
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
          pe && /* @__PURE__ */ w(Hn, { position: "left", children: pe }),
          /* @__PURE__ */ B(Uc, { stacked: m, children: [
            /* @__PURE__ */ w(
              jc,
              {
                ...z,
                type: D,
                disabled: o,
                onFocus: () => x(!0),
                onBlur: $
              }
            ),
            Z && /* @__PURE__ */ w(Hn, { position: "right", children: Z })
          ] })
        ]
      }
    ),
    r === "error" && /* @__PURE__ */ w(Ic, { children: c })
  ] });
}
const Wi = P.div`
  position: relative;
  display: flex;
  flex-direction: ${(e) => e.stacked ? "column" : "row"};
  gap: 4px;
  align-items: center;
  height: ${(e) => Bc[e.sizeVariant ?? "normal"]};
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
`, Hi = P.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, Ic = P.p`
  color: ${(e) => e.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, jc = P.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: ${(e) => _c[e.sizeVariant ?? "normal"]};
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
`, Hn = P.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, $c = P(Lc)`
  color: ${(e) => e.theme.input.icons[e.disabled ? "searchInactive" : "searchActive"]};
`, qn = P(Mc)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme: e, disabled: t }) => t ? e.tertiaryText : e.secondaryText};
`, Nc = ({
  onClick: e,
  width: t = 20,
  height: n = 20,
  color: r = "#838383"
}) => /* @__PURE__ */ w(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    onClick: e,
    children: /* @__PURE__ */ w(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z",
        fill: r
      }
    )
  }
), Uc = P.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  flex: ${(e) => e.stacked ? "0" : "1"};
`, yr = Be({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), sn = Be({});
function zc() {
  return K(sn).visualElement;
}
const Tt = Be(null), _e = typeof document < "u", at = _e ? ic : re, qi = Be({ strict: !1 });
function Wc(e, t, n, r) {
  const o = zc(), s = K(qi), i = K(Tt), a = K(yr).reducedMotion, c = Q();
  r = r || s.renderer, !c.current && r && (c.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = c.current;
  return at(() => {
    u && u.render();
  }), at(() => {
    u && u.animationState && u.animationState.animateChanges();
  }), at(() => () => u && u.notify("Unmount"), []), u;
}
function ze(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Hc(e, t, n) {
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
function mt(e) {
  return typeof e == "string" || Array.isArray(e);
}
function an(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const qc = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function cn(e) {
  return an(e.animate) || qc.some((t) => mt(e[t]));
}
function Gi(e) {
  return !!(cn(e) || e.variants);
}
function Gc(e, t) {
  if (cn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mt(n) ? n : void 0,
      animate: mt(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Yc(e) {
  const { initial: t, animate: n } = Gc(e, K(sn));
  return de(() => ({ initial: t, animate: n }), [To(t), To(n)]);
}
function To(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Te = (e) => ({
  isEnabled: (t) => e.some((n) => !!t[n])
}), gt = {
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
function Kc(e) {
  for (const t in e)
    t === "projectionNodeConstructor" ? gt.projectionNodeConstructor = e[t] : gt[t].Component = e[t];
}
function ln(e) {
  const t = Q(null);
  return t.current === null && (t.current = e()), t.current;
}
const ct = {
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
let Xc = 1;
function Jc() {
  return ln(() => {
    if (ct.hasEverUpdated)
      return Xc++;
  });
}
const vr = Be({});
class Zc extends xt.Component {
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
const Yi = Be({}), Qc = Symbol.for("motionComponentSymbol");
function el({ preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  e && Kc(e);
  function i(c, u) {
    const l = {
      ...K(yr),
      ...c,
      layoutId: tl(c)
    }, { isStatic: d } = l;
    let h = null;
    const p = Yc(c), m = d ? void 0 : Jc(), g = o(c, d);
    if (!d && _e) {
      p.visualElement = Wc(s, g, l, t);
      const C = K(qi).strict, x = K(Yi);
      p.visualElement && (h = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        l,
        C,
        e,
        m,
        n || gt.projectionNodeConstructor,
        x
      ));
    }
    return _.createElement(
      Zc,
      { visualElement: p.visualElement, props: l },
      h,
      _.createElement(sn.Provider, { value: p }, r(s, c, m, Hc(g, p.visualElement, u), g, d, p.visualElement))
    );
  }
  const a = sc(i);
  return a[Qc] = s, a;
}
function tl({ layoutId: e }) {
  const t = K(vr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function nl(e) {
  function t(r, o = {}) {
    return el(e(r, o));
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
const rl = [
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
function br(e) {
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
      !!(rl.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ht = {};
function ol(e) {
  Object.assign(Ht, e);
}
const qt = [
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
], Ie = new Set(qt);
function Ki(e, { layout: t, layoutId: n }) {
  return Ie.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ht[e] || e === "opacity");
}
const ve = (e) => !!(e != null && e.getVelocity), il = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, sl = (e, t) => qt.indexOf(e) - qt.indexOf(t);
function al({ transform: e, transformKeys: t }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  t.sort(sl);
  for (const a of t)
    i += `${il[a] || a}(${e[a]}) `;
  return n && !e.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(e, o ? "" : i) : r && o && (i = "none"), i;
}
function Xi(e) {
  return e.startsWith("--");
}
const cl = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ge = (e, t, n) => Math.min(Math.max(n, e), t), je = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, lt = {
  ...je,
  transform: (e) => Ge(0, 1, e)
}, Lt = {
  ...je,
  default: 1
}, ut = (e) => Math.round(e * 1e5) / 1e5, yt = /(-)?([\d]*\.?[\d])+/g, Gn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ll = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ct(e) {
  return typeof e == "string";
}
const Et = (e) => ({
  test: (t) => Ct(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Pe = Et("deg"), ye = Et("%"), A = Et("px"), ul = Et("vh"), dl = Et("vw"), Co = {
  ...ye,
  parse: (e) => ye.parse(e) / 100,
  transform: (e) => ye.transform(e * 100)
}, Eo = {
  ...je,
  transform: Math.round
}, Ji = {
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
  scale: Lt,
  scaleX: Lt,
  scaleY: Lt,
  scaleZ: Lt,
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
  opacity: lt,
  originX: Co,
  originY: Co,
  originZ: A,
  // Misc
  zIndex: Eo,
  // SVG
  fillOpacity: lt,
  strokeOpacity: lt,
  numOctaves: Eo
};
function xr(e, t, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: c } = e;
  a.length = 0;
  let u = !1, l = !1, d = !0;
  for (const h in t) {
    const p = t[h];
    if (Xi(h)) {
      s[h] = p;
      continue;
    }
    const m = Ji[h], g = cl(p, m);
    if (Ie.has(h)) {
      if (u = !0, i[h] = g, a.push(h), !d)
        continue;
      p !== (m.default || 0) && (d = !1);
    } else
      h.startsWith("origin") ? (l = !0, c[h] = g) : o[h] = g;
  }
  if (t.transform || (u || r ? o.transform = al(e, n, d, r) : o.transform && (o.transform = "none")), l) {
    const { originX: h = "50%", originY: p = "50%", originZ: m = 0 } = c;
    o.transformOrigin = `${h} ${p} ${m}`;
  }
}
const wr = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function Zi(e, t, n) {
  for (const r in t)
    !ve(t[r]) && !Ki(r, n) && (e[r] = t[r]);
}
function fl({ transformTemplate: e }, t, n) {
  return de(() => {
    const r = wr();
    return xr(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function hl(e, t, n) {
  const r = e.style || {}, o = {};
  return Zi(o, r, e), Object.assign(o, fl(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function pl(e, t, n) {
  const r = {}, o = hl(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const ml = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], gl = ["whileTap", "onTap", "onTapStart", "onTapCancel"], yl = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], vl = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], bl = /* @__PURE__ */ new Set([
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
  ...vl,
  ...gl,
  ...ml,
  ...yl
]);
function Gt(e) {
  return bl.has(e);
}
let Qi = (e) => !Gt(e);
function xl(e) {
  e && (Qi = (t) => t.startsWith("on") ? !Gt(t) : e(t));
}
try {
  xl(require("@emotion/is-prop-valid").default);
} catch {
}
function wl(e, t, n) {
  const r = {};
  for (const o in e)
    (Qi(o) || n === !0 && Gt(o) || !t && !Gt(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function So(e, t, n) {
  return typeof e == "string" ? e : A.transform(t + n * e);
}
function Tl(e, t, n) {
  const r = So(t, e.x, e.width), o = So(n, e.y, e.height);
  return `${r} ${o}`;
}
const Cl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, El = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Sl(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? Cl : El;
  e[s.offset] = A.transform(-r);
  const i = A.transform(t), a = A.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Tr(e, {
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
  if (xr(e, c, u, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: m } = e;
  h.transform && (m && (p.transform = h.transform), delete h.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = Tl(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), s !== void 0 && Sl(h, s, i, a, !1);
}
const es = () => ({
  ...wr(),
  attrs: {}
}), Cr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Pl(e, t, n, r) {
  const o = de(() => {
    const s = es();
    return Tr(s, t, { enableHardwareAcceleration: !1 }, Cr(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Zi(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function Al(e = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const u = (br(n) ? Pl : pl)(r, i, a, n), d = {
      ...wl(r, typeof n == "string", e),
      ...u,
      ref: s
    };
    return o && (d["data-projection-id"] = o), Ni(n, d);
  };
}
const Er = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ts(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const ns = /* @__PURE__ */ new Set([
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
function rs(e, t, n, r) {
  ts(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(ns.has(o) ? o : Er(o), t.attrs[o]);
}
function Sr(e) {
  const { style: t } = e, n = {};
  for (const r in t)
    (ve(t[r]) || Ki(r, e)) && (n[r] = t[r]);
  return n;
}
function os(e) {
  const t = Sr(e);
  for (const n in e)
    if (ve(e[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function Pr(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
const Yt = (e) => Array.isArray(e), Rl = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), kl = (e) => Yt(e) ? e[e.length - 1] || 0 : e;
function $t(e) {
  const t = ve(e) ? e.get() : e;
  return Rl(t) ? t.toValue() : t;
}
function Vl({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
  const i = {
    latestValues: Dl(r, o, s, e),
    renderState: t()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const is = (e) => (t, n) => {
  const r = K(sn), o = K(Tt), s = () => Vl(e, t, r, o);
  return n ? s() : ln(s);
};
function Dl(e, t, n, r) {
  const o = {}, s = r(e);
  for (const h in s)
    o[h] = $t(s[h]);
  let { initial: i, animate: a } = e;
  const c = cn(e), u = Gi(e);
  t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || i === !1;
  const d = l ? a : i;
  return d && typeof d != "boolean" && !an(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Pr(e, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: C, ...x } = m;
    for (const T in x) {
      let v = x[T];
      if (Array.isArray(v)) {
        const E = l ? v.length - 1 : 0;
        v = v[E];
      }
      v !== null && (o[T] = v);
    }
    for (const T in g)
      o[T] = g[T];
  }), o;
}
const Ol = {
  useVisualState: is({
    scrapeMotionValuesFromProps: os,
    createRenderState: es,
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
      Tr(n, r, { enableHardwareAcceleration: !1 }, Cr(t.tagName), e.transformTemplate), rs(t, n);
    }
  })
}, Fl = {
  useVisualState: is({
    scrapeMotionValuesFromProps: Sr,
    createRenderState: wr
  })
};
function Ll(e, { forwardMotionProps: t = !1 }, n, r, o) {
  return {
    ...br(e) ? Ol : Fl,
    preloadedFeatures: n,
    useRender: Al(t),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e
  };
}
var j;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(j || (j = {}));
function un(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Yn(e, t, n, r) {
  re(() => {
    const o = e.current;
    if (n && o)
      return un(o, t, n, r);
  }, [e, t, n, r]);
}
function Ml({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t, r = () => {
    n && n.setActive(j.Focus, !0);
  }, o = () => {
    n && n.setActive(j.Focus, !1);
  };
  Yn(t, "focus", e ? r : void 0), Yn(t, "blur", e ? o : void 0);
}
function ss(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function as(e) {
  return !!e.touches;
}
function Bl(e) {
  return (t) => {
    const n = t instanceof MouseEvent;
    (!n || n && t.button === 0) && e(t);
  };
}
const _l = { pageX: 0, pageY: 0 };
function Il(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || _l;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function jl(e, t = "page") {
  return {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function Ar(e, t = "page") {
  return {
    point: as(e) ? Il(e, t) : jl(e, t)
  };
}
const cs = (e, t = !1) => {
  const n = (r) => e(r, Ar(r));
  return t ? Bl(n) : n;
}, $l = () => _e && window.onpointerdown === null, Nl = () => _e && window.ontouchstart === null, Ul = () => _e && window.onmousedown === null, zl = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Wl = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function ls(e) {
  return $l() ? e : Nl() ? Wl[e] : Ul() ? zl[e] : e;
}
function qe(e, t, n, r) {
  return un(e, ls(t), cs(n, t === "pointerdown"), r);
}
function Kt(e, t, n, r) {
  return Yn(e, ls(t), n && cs(n, t === "pointerdown"), r);
}
function us(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Po = us("dragHorizontal"), Ao = us("dragVertical");
function ds(e) {
  let t = !1;
  if (e === "y")
    t = Ao();
  else if (e === "x")
    t = Po();
  else {
    const n = Po(), r = Ao();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function fs() {
  const e = ds(!0);
  return e ? (e(), !1) : !0;
}
function Ro(e, t, n) {
  return (r, o) => {
    !ss(r) || fs() || (e.animationState && e.animationState.setActive(j.Hover, t), n && n(r, o));
  };
}
function Hl({ onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r }) {
  Kt(r, "pointerenter", e || n ? Ro(r, !0, e) : void 0, { passive: !e }), Kt(r, "pointerleave", t || n ? Ro(r, !1, t) : void 0, { passive: !t });
}
const hs = (e, t) => t ? e === t ? !0 : hs(e, t.parentElement) : !1;
function Rr(e) {
  return re(() => () => e(), []);
}
const ql = (e, t) => (n) => t(e(n)), dn = (...e) => e.reduce(ql);
function Gl({ onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = e || t || n || r, i = Q(!1), a = Q(null), c = {
    passive: !(t || e || n || p)
  };
  function u() {
    a.current && a.current(), a.current = null;
  }
  function l() {
    return u(), i.current = !1, o.animationState && o.animationState.setActive(j.Tap, !1), !fs();
  }
  function d(m, g) {
    l() && (hs(o.current, m.target) ? e && e(m, g) : n && n(m, g));
  }
  function h(m, g) {
    l() && n && n(m, g);
  }
  function p(m, g) {
    u(), !i.current && (i.current = !0, a.current = dn(qe(window, "pointerup", d, c), qe(window, "pointercancel", h, c)), o.animationState && o.animationState.setActive(j.Tap, !0), t && t(m, g));
  }
  Kt(o, "pointerdown", s ? p : void 0, c), Rr(u);
}
const ko = "production", kr = typeof process > "u" || process.env === void 0 ? ko : process.env.NODE_ENV || ko, Vo = /* @__PURE__ */ new Set();
function Vr(e, t, n) {
  e || Vo.has(t) || (console.warn(t), n && console.warn(n), Vo.add(t));
}
const Kn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), Yl = (e) => {
  const t = Kn.get(e.target);
  t && t(e);
}, Kl = (e) => {
  e.forEach(Yl);
};
function Xl({ root: e, ...t }) {
  const n = e || document;
  Rn.has(n) || Rn.set(n, {});
  const r = Rn.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Kl, { root: e, ...t })), r[o];
}
function Jl(e, t, n) {
  const r = Xl(t);
  return Kn.set(e, n), r.observe(e), () => {
    Kn.delete(e), r.unobserve(e);
  };
}
function Zl({ visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = Q({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(t || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? tu : eu)(i, s.current, e, o);
}
const Ql = {
  some: 0,
  all: 1
};
function eu(e, t, n, { root: r, margin: o, amount: s = "some", once: i }) {
  re(() => {
    if (!e || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Ql[s]
    }, c = (u) => {
      const { isIntersecting: l } = u;
      if (t.isInView === l || (t.isInView = l, i && !l && t.hasEnteredView))
        return;
      l && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(j.InView, l);
      const d = n.getProps(), h = l ? d.onViewportEnter : d.onViewportLeave;
      h && h(u);
    };
    return Jl(n.current, a, c);
  }, [e, r, o, s]);
}
function tu(e, t, n, { fallback: r = !0 }) {
  re(() => {
    !e || !r || (kr !== "production" && Vr(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      t.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(j.InView, !0);
    }));
  }, [e]);
}
const Re = (e) => (t) => (e(t), null), nu = {
  inView: Re(Zl),
  tap: Re(Gl),
  focus: Re(Ml),
  hover: Re(Hl)
};
function ps() {
  const e = K(Tt);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = gr();
  return re(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function ms(e, t) {
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
const ru = (e) => /^\-?\d*\.?\d+$/.test(e), ou = (e) => /^0[^.\s]+$/.test(e), Ce = {
  delta: 0,
  timestamp: 0
}, gs = 1 / 60 * 1e3, iu = typeof performance < "u" ? () => performance.now() : () => Date.now(), ys = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(iu()), gs);
function su(e) {
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
const au = 40;
let Xn = !0, vt = !1, Jn = !1;
const St = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], fn = St.reduce((e, t) => (e[t] = su(() => vt = !0), e), {}), se = St.reduce((e, t) => {
  const n = fn[t];
  return e[t] = (r, o = !1, s = !1) => (vt || lu(), n.schedule(r, o, s)), e;
}, {}), ke = St.reduce((e, t) => (e[t] = fn[t].cancel, e), {}), kn = St.reduce((e, t) => (e[t] = () => fn[t].process(Ce), e), {}), cu = (e) => fn[e].process(Ce), vs = (e) => {
  vt = !1, Ce.delta = Xn ? gs : Math.max(Math.min(e - Ce.timestamp, au), 1), Ce.timestamp = e, Jn = !0, St.forEach(cu), Jn = !1, vt && (Xn = !1, ys(vs));
}, lu = () => {
  vt = !0, Xn = !0, Jn || ys(vs);
};
function Dr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Or(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Fr {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Dr(this.subscriptions, t), () => Or(this.subscriptions, t);
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
function Lr(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uu = (e) => !isNaN(parseFloat(e));
class du {
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
      const { delta: s, timestamp: i } = Ce;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, se.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => se.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = uu(this.current), this.owner = n.owner;
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
    return this.events[t] || (this.events[t] = new Fr()), this.events[t].add(n);
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
      Lr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new du(e, t);
}
const Mr = (e, t) => (n) => !!(Ct(n) && ll.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), bs = (e, t, n) => (r) => {
  if (!Ct(r))
    return r;
  const [o, s, i, a] = r.match(yt);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, fu = (e) => Ge(0, 255, e), Vn = {
  ...je,
  transform: (e) => Math.round(fu(e))
}, Le = {
  test: Mr("rgb", "red"),
  parse: bs("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Vn.transform(e) + ", " + Vn.transform(t) + ", " + Vn.transform(n) + ", " + ut(lt.transform(r)) + ")"
};
function hu(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Zn = {
  test: Mr("#"),
  parse: hu,
  transform: Le.transform
}, We = {
  test: Mr("hsl", "hue"),
  parse: bs("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + ye.transform(ut(t)) + ", " + ye.transform(ut(n)) + ", " + ut(lt.transform(r)) + ")"
}, te = {
  test: (e) => Le.test(e) || Zn.test(e) || We.test(e),
  parse: (e) => Le.test(e) ? Le.parse(e) : We.test(e) ? We.parse(e) : Zn.parse(e),
  transform: (e) => Ct(e) ? e : e.hasOwnProperty("red") ? Le.transform(e) : We.transform(e)
}, xs = "${c}", ws = "${n}";
function pu(e) {
  var t, n;
  return isNaN(e) && Ct(e) && (((t = e.match(yt)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Gn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Xt(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0, r = 0;
  const o = e.match(Gn);
  o && (n = o.length, e = e.replace(Gn, xs), t.push(...o.map(te.parse)));
  const s = e.match(yt);
  return s && (r = s.length, e = e.replace(yt, ws), t.push(...s.map(je.parse))), { values: t, numColors: n, numNumbers: r, tokenised: e };
}
function Ts(e) {
  return Xt(e).values;
}
function Cs(e) {
  const { values: t, numColors: n, tokenised: r } = Xt(e), o = t.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? xs : ws, a < n ? te.transform(s[a]) : ut(s[a]));
    return i;
  };
}
const mu = (e) => typeof e == "number" ? 0 : e;
function gu(e) {
  const t = Ts(e);
  return Cs(e)(t.map(mu));
}
const Ve = { test: pu, parse: Ts, createTransformer: Cs, getAnimatableNone: gu }, yu = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function vu(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(yt) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = yu.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const bu = /([a-z-]*)\(.*?\)/g, Qn = {
  ...Ve,
  getAnimatableNone: (e) => {
    const t = e.match(bu);
    return t ? t.map(vu).join(" ") : e;
  }
}, xu = {
  ...Ji,
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
  filter: Qn,
  WebkitFilter: Qn
}, Br = (e) => xu[e];
function _r(e, t) {
  var n;
  let r = Br(e);
  return r !== Qn && (r = Ve), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
const Es = (e) => (t) => t.test(e), wu = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ss = [je, A, ye, Pe, dl, ul, wu], nt = (e) => Ss.find(Es(e)), Tu = [...Ss, te, Ve], Cu = (e) => Tu.find(Es(e));
function Eu(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Su(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function hn(e, t, n) {
  const r = e.getProps();
  return Pr(r, t, n !== void 0 ? n : r.custom, Eu(e), Su(e));
}
function Pu(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ye(n));
}
function Au(e, t) {
  const n = hn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = kl(s[i]);
    Pu(e, i, a);
  }
}
function Ru(e, t, n) {
  var r, o;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const c = s[a], u = t[c];
      let l = null;
      Array.isArray(u) && (l = u[0]), l === null && (l = (o = (r = n[c]) !== null && r !== void 0 ? r : e.readValue(c)) !== null && o !== void 0 ? o : t[c]), l != null && (typeof l == "string" && (ru(l) || ou(l)) ? l = parseFloat(l) : !Cu(l) && Ve.test(u) && (l = _r(c, u)), e.addValue(c, Ye(l, { owner: e })), n[c] === void 0 && (n[c] = l), l !== null && e.setBaseTarget(c, l));
    }
}
function ku(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Vu(e, t, n) {
  var r;
  const o = {};
  for (const s in e) {
    const i = ku(s, t);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function Jt(e) {
  return !!(ve(e) && e.add);
}
const Du = (e, t) => `${e}: ${t}`;
function Ou(e, t) {
  const { MotionAppearAnimations: n } = window, r = Du(e, Ie.has(t) ? "transform" : t), o = n && n.get(r);
  return o ? (se.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const Fu = "framerAppearId", Lu = "data-" + Er(Fu);
var pn = function() {
}, he = function() {
};
process.env.NODE_ENV !== "production" && (pn = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, he = function(e, t) {
  if (!e)
    throw new Error(t);
});
const Nt = (e) => e * 1e3, Mu = {
  current: !1
}, Ir = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, jr = (e) => (t) => 1 - e(1 - t), $r = (e) => e * e, Bu = jr($r), Nr = Ir($r), U = (e, t, n) => -n * e + n * t + e;
function Dn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function _u({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    o = Dn(c, a, e + 1 / 3), s = Dn(c, a, e), i = Dn(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const On = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, Iu = [Zn, Le, We], ju = (e) => Iu.find((t) => t.test(e));
function Do(e) {
  const t = ju(e);
  he(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = t.parse(e);
  return t === We && (n = _u(n)), n;
}
const Ps = (e, t) => {
  const n = Do(e), r = Do(t), o = { ...n };
  return (s) => (o.red = On(n.red, r.red, s), o.green = On(n.green, r.green, s), o.blue = On(n.blue, r.blue, s), o.alpha = U(n.alpha, r.alpha, s), Le.transform(o));
};
function As(e, t) {
  return typeof e == "number" ? (n) => U(e, t, n) : te.test(e) ? Ps(e, t) : ks(e, t);
}
const Rs = (e, t) => {
  const n = [...e], r = n.length, o = e.map((s, i) => As(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, $u = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = As(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, ks = (e, t) => {
  const n = Ve.createTransformer(t), r = Xt(e), o = Xt(t);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? dn(Rs(r.values, o.values), n) : (pn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, Zt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Oo = (e, t) => (n) => U(e, t, n);
function Nu(e) {
  return typeof e == "number" ? Oo : typeof e == "string" ? te.test(e) ? Ps : ks : Array.isArray(e) ? Rs : typeof e == "object" ? $u : Oo;
}
function Uu(e, t, n) {
  const r = [], o = n || Nu(e[0]), s = e.length - 1;
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
function Vs(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  he(s === t.length, "Both input and output ranges must be the same length"), he(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Uu(t, r, o), a = i.length, c = (u) => {
    let l = 0;
    if (a > 1)
      for (; l < e.length - 2 && !(u < e[l + 1]); l++)
        ;
    const d = Zt(e[l], e[l + 1], u);
    return i[l](d);
  };
  return n ? (u) => c(Ge(e[0], e[s - 1], u)) : c;
}
const Ur = (e) => e, Ds = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, zu = 1e-7, Wu = 12;
function Hu(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Ds(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > zu && ++a < Wu);
  return i;
}
function Os(e, t, n, r) {
  if (e === t && n === r)
    return Ur;
  const o = (s) => Hu(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Ds(o(s), t, r);
}
const Fs = (e) => 1 - Math.sin(Math.acos(e)), zr = jr(Fs), qu = Ir(zr), Ls = Os(0.33, 1.53, 0.69, 0.99), Wr = jr(Ls), Gu = Ir(Wr), Yu = (e) => (e *= 2) < 1 ? 0.5 * Wr(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Fo = {
  linear: Ur,
  easeIn: $r,
  easeInOut: Nr,
  easeOut: Bu,
  circIn: Fs,
  circInOut: qu,
  circOut: zr,
  backIn: Wr,
  backInOut: Gu,
  backOut: Ls,
  anticipate: Yu
}, Lo = (e) => {
  if (Array.isArray(e)) {
    he(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return Os(t, n, r, o);
  } else if (typeof e == "string")
    return he(Fo[e] !== void 0, `Invalid easing type '${e}'`), Fo[e];
  return e;
}, Ku = (e) => Array.isArray(e) && typeof e[0] != "number";
function Xu(e, t) {
  return e.map(() => t || Nr).splice(0, e.length - 1);
}
function Ju(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function Zu(e, t) {
  return e.map((n) => n * t);
}
function Qt({ keyframes: e, ease: t = Nr, times: n, duration: r = 300 }) {
  e = [...e];
  const o = Qt[0], s = Ku(t) ? t.map(Lo) : Lo(t), i = { done: !1, value: o }, a = Zu(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === Qt.length ? n : Ju(e),
    r
  );
  function c() {
    return Vs(a, e, {
      ease: Array.isArray(s) ? s : Xu(e, s)
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
const Fn = 1e-3, Qu = 0.01, Mo = 10, ed = 0.05, td = 1;
function nd({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  pn(e <= Mo * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Ge(ed, td, i), e = Ge(Qu, Mo, e / 1e3), i < 1 ? (o = (u) => {
    const l = u * i, d = l * e, h = l - n, p = er(u, i), m = Math.exp(-d);
    return Fn - h / p * m;
  }, s = (u) => {
    const d = u * i * e, h = d * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * e, m = Math.exp(-d), g = er(Math.pow(u, 2), i);
    return (-o(u) + Fn > 0 ? -1 : 1) * ((h - p) * m) / g;
  }) : (o = (u) => {
    const l = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Fn + l * d;
  }, s = (u) => {
    const l = Math.exp(-u * e), d = (n - u) * (e * e);
    return l * d;
  });
  const a = 5 / e, c = od(o, s, a);
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
const rd = 12;
function od(e, t, n) {
  let r = n;
  for (let o = 1; o < rd; o++)
    r = r - e(r) / t(r);
  return r;
}
function er(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const id = ["duration", "bounce"], sd = ["stiffness", "damping", "mass"];
function Bo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ad(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Bo(e, sd) && Bo(e, id)) {
    const n = nd(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
const cd = 5;
function Ms({ keyframes: e, restSpeed: t = 2, restDelta: n = 0.01, ...r }) {
  let o = e[0], s = e[e.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: c, mass: u, velocity: l, duration: d, isResolvedFromDuration: h } = ad(r);
  let p = ld, m = l ? -(l / 1e3) : 0;
  const g = c / (2 * Math.sqrt(a * u));
  function C() {
    const x = s - o, T = Math.sqrt(a / u) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const v = er(T, g);
      p = (E) => {
        const k = Math.exp(-g * T * E);
        return s - k * ((m + g * T * x) / v * Math.sin(v * E) + x * Math.cos(v * E));
      };
    } else if (g === 1)
      p = (v) => s - Math.exp(-T * v) * (x + (m + T * x) * v);
    else {
      const v = T * Math.sqrt(g * g - 1);
      p = (E) => {
        const k = Math.exp(-g * T * E), D = Math.min(v * E, 300);
        return s - k * ((m + g * T * x) * Math.sinh(D) + v * x * Math.cosh(D)) / v;
      };
    }
  }
  return C(), {
    next: (x) => {
      const T = p(x);
      if (h)
        i.done = x >= d;
      else {
        let v = m;
        if (x !== 0)
          if (g < 1) {
            const D = Math.max(0, x - cd);
            v = Lr(T - p(D), x - D);
          } else
            v = 0;
        const E = Math.abs(v) <= t, k = Math.abs(s - T) <= n;
        i.done = E && k;
      }
      return i.value = i.done ? s : T, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], C();
    }
  };
}
Ms.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const ld = (e) => 0;
function ud({
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
const dd = {
  decay: ud,
  keyframes: Qt,
  tween: Qt,
  spring: Ms
};
function Bs(e, t, n = 0) {
  return e - t - n;
}
function fd(e, t = 0, n = 0, r = !0) {
  return r ? Bs(t + -e, t, n) : t - (e - t) + n;
}
function hd(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const pd = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => se.update(t, !0),
    stop: () => ke.update(t)
  };
};
function en({ duration: e, driver: t = pd, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: c, onStop: u, onComplete: l, onRepeat: d, onUpdate: h, type: p = "keyframes", ...m }) {
  var g, C;
  let x, T = 0, v = e, E, k = !1, D = !0, z;
  const $ = dd[i.length > 2 ? "keyframes" : p], Y = i[0], N = i[i.length - 1];
  !((C = (g = $).needsInterpolation) === null || C === void 0) && C.call(g, Y, N) && (z = Vs([0, 100], [Y, N], {
    clamp: !1
  }), i = [0, 100]);
  const oe = $({
    ...m,
    duration: e,
    keyframes: i
  });
  function pe() {
    T++, o === "reverse" ? (D = T % 2 === 0, n = fd(n, v, s, D)) : (n = Bs(n, v, s), o === "mirror" && oe.flipTarget()), k = !1, d && d();
  }
  function Z() {
    x.stop(), l && l();
  }
  function X(ie) {
    if (D || (ie = -ie), n += ie, !k) {
      const xe = oe.next(Math.max(0, n));
      E = xe.value, z && (E = z(E)), k = D ? xe.done : n <= 0;
    }
    h && h(E), k && (T === 0 && (v = v !== void 0 ? v : n), T < r ? hd(n, v, s, D) && pe() : Z());
  }
  function M() {
    c && c(), x = t(X), x.start();
  }
  return a && M(), {
    stop: () => {
      u && u(), x.stop();
    },
    sample: (ie) => oe.next(Math.max(0, ie))
  };
}
function md(e) {
  return !e || // Default easing
  Array.isArray(e) || // Bezier curve
  typeof e == "string" && _s[e];
}
const it = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, _s = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: it([0, 0.65, 0.55, 1]),
  circOut: it([0.55, 0, 1, 0.45]),
  backIn: it([0.31, 0.01, 0.66, -0.59]),
  backOut: it([0.33, 1.53, 0.69, 0.99])
};
function gd(e) {
  if (e)
    return Array.isArray(e) ? it(e) : _s[e];
}
function yd(e, t, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: c } = {}) {
  return e.animate({ [t]: n, offset: c }, {
    delay: r,
    duration: o,
    easing: gd(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Mt = 10;
function vd(e, t, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: c } = o;
  if (o.type === "spring" || !md(o.ease)) {
    const l = en(o);
    let d = { done: !1, value: s[0] };
    const h = [];
    let p = 0;
    for (; !d.done; )
      d = l.sample(p), h.push(d.value), p += Mt;
    s = h, i = p - Mt, c = "linear";
  }
  const u = yd(e.owner.current, t, s, {
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
      const d = en(o);
      e.setWithVelocity(d.sample(l - Mt).value, d.sample(l).value, Mt);
    }
    se.update(() => u.cancel());
  };
}
function Is(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (ke.read(r), e(s - t));
  };
  return se.read(r, !0), () => ke.read(r);
}
function bd({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), () => {
  });
  return t ? Is(o, -t) : o();
}
function xd({ keyframes: e, velocity: t = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: c = 1, modifyTarget: u, driver: l, onUpdate: d, onComplete: h, onStop: p }) {
  const m = e[0];
  let g;
  function C(E) {
    return n !== void 0 && E < n || r !== void 0 && E > r;
  }
  function x(E) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - E) < Math.abs(r - E) ? n : r;
  }
  function T(E) {
    g == null || g.stop(), g = en({
      keyframes: [0, 1],
      velocity: 0,
      ...E,
      driver: l,
      onUpdate: (k) => {
        var D;
        d == null || d(k), (D = E.onUpdate) === null || D === void 0 || D.call(E, k);
      },
      onComplete: h,
      onStop: p
    });
  }
  function v(E) {
    T({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: c,
      ...E
    });
  }
  if (C(m))
    v({
      velocity: t,
      keyframes: [m, x(m)]
    });
  else {
    let E = o * t + m;
    typeof u < "u" && (E = u(E));
    const k = x(E), D = k === n ? -1 : 1;
    let z, $;
    const Y = (N) => {
      z = $, $ = N, t = Lr(N - z, Ce.delta), (D === 1 && N > k || D === -1 && N < k) && v({ keyframes: [N, k], velocity: t });
    };
    T({
      type: "decay",
      keyframes: [m, 0],
      velocity: t,
      timeConstant: s,
      power: o,
      restDelta: c,
      modifyTarget: u,
      onUpdate: C(E) ? Y : void 0
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
}), Bt = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ln = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), wd = {
  type: "keyframes",
  duration: 0.8
}, _o = {
  x: De,
  y: De,
  z: De,
  rotate: De,
  rotateX: De,
  rotateY: De,
  rotateZ: De,
  scaleX: Bt,
  scaleY: Bt,
  scale: Bt,
  opacity: Ln,
  backgroundColor: Ln,
  color: Ln,
  default: Bt
}, Td = (e, { keyframes: t }) => t.length > 2 ? wd : (_o[e] || _o.default)(t[1]), tr = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
Ve.test(t) && // And it contains numbers and/or colors
!t.startsWith("url("));
function Cd({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: c, ...u }) {
  return !!Object.keys(u).length;
}
function Io(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function jo(e) {
  return typeof e == "number" ? 0 : _r("", e);
}
function js(e, t) {
  return e[t] || e.default || e;
}
function Ed(e, t, n, r) {
  const o = tr(t, n);
  let s = r.from !== void 0 ? r.from : e.get();
  return s === "none" && o && typeof n == "string" ? s = _r(t, n) : Io(s) && typeof n == "string" ? s = jo(n) : !Array.isArray(n) && Io(n) && typeof s == "string" && (n = jo(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const $o = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Mn = {}, $s = {};
for (const e in $o)
  $s[e] = () => (Mn[e] === void 0 && (Mn[e] = $o[e]()), Mn[e]);
const Sd = /* @__PURE__ */ new Set(["opacity"]), Hr = (e, t, n, r = {}) => (o) => {
  const s = js(r, e) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - Nt(i);
  const c = Ed(t, e, n, s), u = c[0], l = c[c.length - 1], d = tr(e, u), h = tr(e, l);
  pn(d === h, `You are trying to animate ${e} from "${u}" to "${l}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${l} via the \`style\` property.`);
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
  if (!d || !h || Mu.current || s.type === !1)
    return bd(p);
  if (s.type === "inertia") {
    const x = xd(p);
    return () => x.stop();
  }
  Cd(s) || (p = {
    ...p,
    ...Td(e, p)
  }), p.duration && (p.duration = Nt(p.duration)), p.repeatDelay && (p.repeatDelay = Nt(p.repeatDelay));
  const m = t.owner, g = m && m.current;
  if ($s.waapi() && Sd.has(e) && !p.repeatDelay && p.repeatType !== "mirror" && p.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return vd(t, e, p);
  {
    const x = en(p);
    return () => x.stop();
  }
};
function Pd(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => nr(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = nr(e, t, n);
  else {
    const o = typeof t == "function" ? hn(e, t, n.custom) : t;
    r = Ns(e, o, n);
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function nr(e, t, n = {}) {
  var r;
  const o = hn(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Ns(e, o, n) : () => Promise.resolve(), a = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u = 0) => {
    const { delayChildren: l = 0, staggerChildren: d, staggerDirection: h } = s;
    return Ad(e, t, l + u, d, h, n);
  } : () => Promise.resolve(), { when: c } = s;
  if (c) {
    const [u, l] = c === "beforeChildren" ? [i, a] : [a, i];
    return u().then(l);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Ns(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = e.makeTargetAnimatable(t);
  const u = e.getValue("willChange");
  r && (i = r);
  const l = [], d = o && ((s = e.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const h in c) {
    const p = e.getValue(h), m = c[h];
    if (!p || m === void 0 || d && kd(d, h))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (e.shouldReduceMotion && Ie.has(h) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !p.hasAnimated) {
      const x = e.getProps()[Lu];
      x && (g.elapsed = Ou(x, h));
    }
    let C = p.start(Hr(h, p, m, g));
    Jt(u) && (u.add(h), C = C.then(() => u.remove(h))), l.push(C);
  }
  return Promise.all(l).then(() => {
    a && Au(e, a);
  });
}
function Ad(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(Rd).forEach((u, l) => {
    i.push(nr(u, t, {
      ...s,
      delay: n + c(l)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function Rd(e, t) {
  return e.sortNodePosition(t);
}
function kd({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
const qr = [
  j.Animate,
  j.InView,
  j.Focus,
  j.Hover,
  j.Tap,
  j.Drag,
  j.Exit
], Vd = [...qr].reverse(), Dd = qr.length;
function Od(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Pd(e, n, r)));
}
function Fd(e) {
  let t = Od(e);
  const n = Md();
  let r = !0;
  const o = (c, u) => {
    const l = hn(e, u);
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
    for (let x = 0; x < Dd; x++) {
      const T = Vd[x], v = n[T], E = l[T] !== void 0 ? l[T] : d[T], k = mt(E), D = T === u ? v.isActive : null;
      D === !1 && (g = x);
      let z = E === d[T] && E !== l[T] && k;
      if (z && r && e.manuallyAnimateOnMount && (z = !1), v.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && D === null || // If we didn't and don't have any defined prop for this animation type
      !E && !v.prevProp || // Or if the prop doesn't define an animation
      an(E) || typeof E == "boolean")
        continue;
      const $ = Ld(v.prevProp, E);
      let Y = $ || // If we're making this variant active, we want to always make it active
      T === u && v.isActive && !z && k || // If we removed a higher-priority variant (i is in reverse order)
      x > g && k;
      const N = Array.isArray(E) ? E : [E];
      let oe = N.reduce(o, {});
      D === !1 && (oe = {});
      const { prevResolvedValues: pe = {} } = v, Z = {
        ...pe,
        ...oe
      }, X = (M) => {
        Y = !0, p.delete(M), v.needsAnimating[M] = !0;
      };
      for (const M in Z) {
        const ie = oe[M], xe = pe[M];
        m.hasOwnProperty(M) || (ie !== xe ? Yt(ie) && Yt(xe) ? !ms(ie, xe) || $ ? X(M) : v.protectedKeys[M] = !0 : ie !== void 0 ? X(M) : p.add(M) : ie !== void 0 && p.has(M) ? X(M) : v.protectedKeys[M] = !0);
      }
      v.prevProp = E, v.prevResolvedValues = oe, v.isActive && (m = { ...m, ...oe }), r && e.blockInitialAnimation && (Y = !1), Y && !z && h.push(...N.map((M) => ({
        animation: M,
        options: { type: T, ...c }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((T) => {
        const v = e.getBaseTarget(T);
        v !== void 0 && (x[T] = v);
      }), h.push({ animation: x });
    }
    let C = !!h.length;
    return r && l.initial === !1 && !e.manuallyAnimateOnMount && (C = !1), r = !1, C ? t(h) : Promise.resolve();
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
function Ld(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ms(t, e) : !1;
}
function Oe(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Md() {
  return {
    [j.Animate]: Oe(!0),
    [j.InView]: Oe(),
    [j.Hover]: Oe(),
    [j.Tap]: Oe(),
    [j.Drag]: Oe(),
    [j.Focus]: Oe(),
    [j.Exit]: Oe()
  };
}
const Bd = {
  animation: Re(({ visualElement: e, animate: t }) => {
    e.animationState || (e.animationState = Fd(e)), an(t) && re(() => t.subscribe(e), [t]);
  }),
  exit: Re((e) => {
    const { custom: t, visualElement: n } = e, [r, o] = ps(), s = K(Tt);
    re(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(j.Exit, !r, {
        custom: s && s.custom || t
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, No = (e, t) => Math.abs(e - t);
function _d(e, t) {
  const n = No(e.x, t.x), r = No(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Us {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = _n(this.lastMoveEventInfo, this.history), l = this.startEvent !== null, d = _d(u.offset, { x: 0, y: 0 }) >= 3;
      if (!l && !d)
        return;
      const { point: h } = u, { timestamp: p } = Ce;
      this.history.push({ ...h, timestamp: p });
      const { onStart: m, onMove: g } = this.handlers;
      l || (m && m(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, l) => {
      if (this.lastMoveEvent = u, this.lastMoveEventInfo = Bn(l, this.transformPagePoint), ss(u) && u.buttons === 0) {
        this.handlePointerUp(u, l);
        return;
      }
      se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, l) => {
      this.end();
      const { onEnd: d, onSessionEnd: h } = this.handlers, p = _n(Bn(l, this.transformPagePoint), this.history);
      this.startEvent && d && d(u, p), h && h(u, p);
    }, as(t) && t.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Ar(t), s = Bn(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = Ce;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: c } = n;
    c && c(t, _n(s, this.history)), this.removeListeners = dn(qe(window, "pointermove", this.handlePointerMove), qe(window, "pointerup", this.handlePointerUp), qe(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ke.update(this.updatePoint);
  }
}
function Bn(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Uo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _n({ point: e }, t) {
  return {
    point: e,
    delta: Uo(e, zs(t)),
    offset: Uo(e, Id(t)),
    velocity: jd(t, 0.1)
  };
}
function Id(e) {
  return e[0];
}
function zs(e) {
  return e[e.length - 1];
}
function jd(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = zs(e);
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
function ae(e) {
  return e.max - e.min;
}
function rr(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function zo(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = ae(n) / ae(t), (rr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (rr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function dt(e, t, n, r) {
  zo(e.x, t.x, n.x, r == null ? void 0 : r.originX), zo(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function Wo(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ae(t);
}
function $d(e, t, n) {
  Wo(e.x, t.x, n.x), Wo(e.y, t.y, n.y);
}
function Ho(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ae(t);
}
function ft(e, t, n) {
  Ho(e.x, t.x, n.x), Ho(e.y, t.y, n.y);
}
function Nd(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e;
}
function qo(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Ud(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: qo(e.x, n, o),
    y: qo(e.y, t, r)
  };
}
function Go(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function zd(e, t) {
  return {
    x: Go(e.x, t.x),
    y: Go(e.y, t.y)
  };
}
function Wd(e, t) {
  let n = 0.5;
  const r = ae(e), o = ae(t);
  return o > r ? n = Zt(t.min, t.max - r, e.min) : r > o && (n = Zt(e.min, e.max - o, t.min)), Ge(0, 1, n);
}
function Hd(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const or = 0.35;
function qd(e = or) {
  return e === !1 ? e = 0 : e === !0 && (e = or), {
    x: Yo(e, "left", "right"),
    y: Yo(e, "top", "bottom")
  };
}
function Yo(e, t, n) {
  return {
    min: Ko(e, t),
    max: Ko(e, n)
  };
}
function Ko(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ht = () => ({
  x: Xo(),
  y: Xo()
}), Jo = () => ({ min: 0, max: 0 }), G = () => ({
  x: Jo(),
  y: Jo()
});
function me(e) {
  return [e("x"), e("y")];
}
function Ws({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Gd({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Yd(e, t) {
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
function In(e) {
  return e === void 0 || e === 1;
}
function ir({ scale: e, scaleX: t, scaleY: n }) {
  return !In(e) || !In(t) || !In(n);
}
function Fe(e) {
  return ir(e) || Hs(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Hs(e) {
  return Zo(e.x) || Zo(e.y);
}
function Zo(e) {
  return e && e !== "0%";
}
function tn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Qo(e, t, n, r, o) {
  return o !== void 0 && (e = tn(e, o, r)), tn(e, n, r) + t;
}
function sr(e, t = 0, n = 1, r, o) {
  e.min = Qo(e.min, t, n, r, o), e.max = Qo(e.max, t, n, r, o);
}
function qs(e, { x: t, y: n }) {
  sr(e.x, t.translate, t.scale, t.originPoint), sr(e.y, n.translate, n.scale, n.originPoint);
}
function Kd(e, t, n, r = !1) {
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
    }), c && (t.x *= c.x.scale, t.y *= c.y.scale, qs(e, c)), r && Fe(a.latestValues) && He(e, a.latestValues));
  t.x = ei(t.x), t.y = ei(t.y);
}
function ei(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ae(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ti(e, t, [n, r, o]) {
  const s = t[o] !== void 0 ? t[o] : 0.5, i = U(e.min, e.max, s);
  sr(e, t[n], t[r], i, t.scale);
}
const Xd = ["x", "scaleX", "originX"], Jd = ["y", "scaleY", "originY"];
function He(e, t) {
  ti(e.x, t, Xd), ti(e.y, t, Jd);
}
function Gs(e, t) {
  return Ws(Yd(e.getBoundingClientRect(), t));
}
function Zd(e, t, n) {
  const r = Gs(e, n), { scroll: o } = t;
  return o && (Ae(r.x, o.offset.x), Ae(r.y, o.offset.y)), r;
}
const Qd = /* @__PURE__ */ new WeakMap();
class ef {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(Ar(a, "page").point);
    }, o = (a, c) => {
      var u;
      const { drag: l, dragPropagation: d, onDragStart: h } = this.getProps();
      l && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ds(l), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), me((p) => {
        var m, g;
        let C = this.getAxisMotionValue(p).get() || 0;
        if (ye.test(C)) {
          const x = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[p];
          x && (C = ae(x) * (parseFloat(C) / 100));
        }
        this.originPoint[p] = C;
      }), h == null || h(a, c), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(j.Drag, !0));
    }, s = (a, c) => {
      const { dragPropagation: u, dragDirectionLock: l, onDirectionLock: d, onDrag: h } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: p } = c;
      if (l && this.currentDirection === null) {
        this.currentDirection = tf(p), this.currentDirection !== null && (d == null || d(this.currentDirection));
        return;
      }
      this.updateAxis("x", c.point, p), this.updateAxis("y", c.point, p), this.visualElement.render(), h == null || h(a, c);
    }, i = (a, c) => this.stop(a, c);
    this.panSession = new Us(t, {
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
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(j.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !_t(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = Nd(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    t && ze(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Ud(r.layoutBox, t) : this.constraints = !1, this.elastic = qd(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && me((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = Hd(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ze(t))
      return !1;
    const r = t.current;
    he(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Zd(r, o.root, this.visualElement.getTransformPagePoint());
    let i = zd(o.layout.layoutBox, s);
    if (n) {
      const a = n(Gd(i));
      this.hasMutatedConstraints = !!a, a && (i = Ws(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = me((l) => {
      if (!_t(l, n, this.currentDirection))
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
    return r.start(Hr(t, r, 0, n));
  }
  stopAnimation() {
    me((t) => this.getAxisMotionValue(t).stop());
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
    me((n) => {
      const { drag: r } = this.getProps();
      if (!_t(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - U(i, a, 0.5));
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
    me((a) => {
      const c = this.getAxisMotionValue(a);
      if (c) {
        const u = c.get();
        s[a] = Wd({ min: u, max: u }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (t = o.root) === null || t === void 0 || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), me((a) => {
      if (!_t(a, n, null))
        return;
      const c = this.getAxisMotionValue(a), { min: u, max: l } = this.constraints[a];
      c.set(U(u, l, s[a]));
    });
  }
  addListeners() {
    var t;
    if (!this.visualElement.current)
      return;
    Qd.set(this.visualElement, this);
    const n = this.visualElement.current, r = qe(n, "pointerdown", (u) => {
      const { drag: l, dragListener: d = !0 } = this.getProps();
      l && d && this.start(u);
    }), o = () => {
      const { dragConstraints: u } = this.getProps();
      ze(u) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((t = s.root) === null || t === void 0 || t.updateScroll(), s.updateLayout()), o();
    const a = un(window, "resize", () => this.scalePositionWithinConstraints()), c = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (me((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += u[d].translate, h.set(h.get() + u[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), c == null || c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = or, dragMomentum: a = !0 } = t;
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
function _t(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tf(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function nf(e) {
  const { dragControls: t, visualElement: n } = e, r = ln(() => new ef(n));
  re(() => t && t.subscribe(r), [r, t]), re(() => r.addListeners(), [r]);
}
function rf({ onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = e || t || n || r, i = Q(null), { transformPagePoint: a } = K(yr), c = {
    onSessionStart: r,
    onStart: t,
    onMove: e,
    onEnd: (l, d) => {
      i.current = null, n && n(l, d);
    }
  };
  re(() => {
    i.current !== null && i.current.updateHandlers(c);
  });
  function u(l) {
    i.current = new Us(l, c, {
      transformPagePoint: a
    });
  }
  Kt(o, "pointerdown", s && u), Rr(() => i.current && i.current.end());
}
const of = {
  pan: Re(rf),
  drag: Re(nf)
};
function ar(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
const Ys = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function sf(e) {
  const t = Ys.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
const af = 4;
function cr(e, t, n = 1) {
  he(n <= af, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = sf(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  return s ? s.trim() : ar(o) ? cr(o, t, n + 1) : o;
}
function cf(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const s = o.get();
    if (!ar(s))
      return;
    const i = cr(s, r);
    i && o.set(i);
  });
  for (const o in t) {
    const s = t[o];
    if (!ar(s))
      continue;
    const i = cr(s, r);
    i && (t[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: t, transitionEnd: n };
}
const lf = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Ks = (e) => lf.has(e), uf = (e) => Object.keys(e).some(Ks), Xs = (e, t) => {
  e.set(t, !1), e.set(t);
}, It = (e) => e === je || e === A;
var ni;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(ni || (ni = {}));
const ri = (e, t) => parseFloat(e.split(", ")[t]), oi = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return ri(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? ri(s[1], e) : 0;
  }
}, df = /* @__PURE__ */ new Set(["x", "y", "z"]), ff = qt.filter((e) => !df.has(e));
function hf(e) {
  const t = [];
  return ff.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ii = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: oi(4, 13),
  y: oi(5, 14)
}, pf = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    a[u] = ii[u](r, s);
  }), t.render();
  const c = t.measureViewportBox();
  return n.forEach((u) => {
    const l = t.getValue(u);
    Xs(l, a[u]), e[u] = ii[u](c, s);
  }), e;
}, mf = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(Ks);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((c) => {
    const u = e.getValue(c);
    if (!e.hasValue(c))
      return;
    let l = n[c], d = nt(l);
    const h = t[c];
    let p;
    if (Yt(h)) {
      const m = h.length, g = h[0] === null ? 1 : 0;
      l = h[g], d = nt(l);
      for (let C = g; C < m; C++)
        p ? he(nt(h[C]) === p, "All keyframes must be of the same type") : (p = nt(h[C]), he(p === d || It(d) && It(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = nt(h);
    if (d !== p)
      if (It(d) && It(p)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof h == "string" ? t[c] = parseFloat(h) : Array.isArray(h) && p === A && (t[c] = h.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (l === 0 || h === 0) ? l === 0 ? u.set(p.transform(l)) : t[c] = d.transform(h) : (i || (s = hf(e), i = !0), a.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], Xs(u, h));
  }), a.length) {
    const c = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = pf(t, e, a);
    return s.length && s.forEach(([l, d]) => {
      e.getValue(l).set(d);
    }), e.render(), _e && c !== null && window.scrollTo({ top: c }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function gf(e, t, n, r) {
  return uf(t) ? mf(e, t, n, r) : { target: t, transitionEnd: r };
}
const yf = (e, t, n, r) => {
  const o = cf(e, t, r);
  return t = o.target, r = o.transitionEnd, gf(e, t, n, r);
}, lr = { current: null }, Js = { current: !1 };
function vf() {
  if (Js.current = !0, !!_e)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => lr.current = e.matches;
      e.addListener(t), t();
    } else
      lr.current = !1;
}
function bf(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const s = t[o], i = n[o];
    if (ve(s))
      e.addValue(o, s), Jt(r) && r.add(o), process.env.NODE_ENV === "development" && Vr(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (ve(i))
      e.addValue(o, Ye(s, { owner: e })), Jt(r) && r.remove(o);
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
const Zs = Object.keys(gt), xf = Zs.length, si = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class wf {
  constructor({ parent: t, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => se.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = t, this.props = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = cn(n), this.isVariantNode = Gi(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n);
    for (const l in u) {
      const d = u[l];
      i[l] !== void 0 && ve(d) && (d.set(i[l], !1), Jt(c) && c.add(l));
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
    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Js.current || vf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lr.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
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
    kr !== "production" && r && n && he(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let c = 0; c < xf; c++) {
      const u = Zs[c], { isEnabled: l, Component: d } = gt[u];
      l(t) && d && a.push(Ni(d, {
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
        alwaysMeasureLayout: !!l || d && ze(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
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
    for (let n = 0; n < si.length; n++) {
      const r = si[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = t["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = bf(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
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
    for (let s = 0; s < Tf; s++) {
      const i = Qs[s], a = this.props[i];
      (mt(a) || a === !1) && (o[i] = a);
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Pr(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ve(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Fr()), this.events[t].add(n);
  }
  notify(t, ...n) {
    var r;
    (r = this.events[t]) === null || r === void 0 || r.notify(...n);
  }
}
const Qs = ["initial", ...qr], Tf = Qs.length;
class ea extends wf {
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
    let i = Vu(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      Ru(this, r, i);
      const a = yf(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function Cf(e) {
  return window.getComputedStyle(e);
}
class Ef extends ea {
  readValueFromInstance(t, n) {
    if (Ie.has(n)) {
      const r = Br(n);
      return r && r.default || 0;
    } else {
      const r = Cf(t), o = (Xi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gs(t, n);
  }
  build(t, n, r, o) {
    xr(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t) {
    return Sr(t);
  }
  renderInstance(t, n, r, o) {
    ts(t, n, r, o);
  }
}
class Sf extends ea {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    var r;
    return Ie.has(n) ? ((r = Br(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = ns.has(n) ? n : Er(n), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return G();
  }
  scrapeMotionValuesFromProps(t) {
    return os(t);
  }
  build(t, n, r, o) {
    Tr(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rs(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Cr(t.tagName), super.mount(t);
  }
}
const Pf = (e, t) => br(e) ? new Sf(t, { enableHardwareAcceleration: !1 }) : new Ef(t, { enableHardwareAcceleration: !0 });
function ai(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const rt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (A.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ai(e, t.target.x), r = ai(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, ci = "_$css", Af = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = e.includes("var("), s = [];
    o && (e = e.replace(Ys, (p) => (s.push(p), ci)));
    const i = Ve.parse(e);
    if (i.length > 5)
      return r;
    const a = Ve.createTransformer(e), c = typeof i[0] != "number" ? 1 : 0, u = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + c] /= u, i[1 + c] /= l;
    const d = U(u, l, 0.5);
    typeof i[2 + c] == "number" && (i[2 + c] /= d), typeof i[3 + c] == "number" && (i[3 + c] /= d);
    let h = a(i);
    if (o) {
      let p = 0;
      h = h.replace(ci, () => {
        const m = s[p];
        return p++, m;
      });
    }
    return h;
  }
};
class Rf extends xt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    ol(Vf), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), ct.hasEverUpdated = !0;
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
function kf(e) {
  const [t, n] = ps(), r = K(vr);
  return xt.createElement(Rf, { ...e, layoutGroup: r, switchLayoutGroup: K(Yi), isPresent: t, safeToRemove: n });
}
const Vf = {
  borderRadius: {
    ...rt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: rt,
  borderTopRightRadius: rt,
  borderBottomLeftRadius: rt,
  borderBottomRightRadius: rt,
  boxShadow: Af
}, Df = {
  measureLayout: kf
};
function Of(e, t, n = {}) {
  const r = ve(e) ? e : Ye(e);
  return r.start(Hr("", r, t, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const ta = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Ff = ta.length, li = (e) => typeof e == "string" ? parseFloat(e) : e, ui = (e) => typeof e == "number" || A.test(e);
function Lf(e, t, n, r, o, s) {
  o ? (e.opacity = U(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Mf(r)
  ), e.opacityExit = U(t.opacity !== void 0 ? t.opacity : 1, 0, Bf(r))) : s && (e.opacity = U(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < Ff; i++) {
    const a = `border${ta[i]}Radius`;
    let c = di(t, a), u = di(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || ui(c) === ui(u) ? (e[a] = Math.max(U(li(c), li(u), r), 0), (ye.test(u) || ye.test(c)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function di(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Mf = na(0, 0.5, zr), Bf = na(0.5, 0.95, Ur);
function na(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Zt(e, t, r));
}
function fi(e, t) {
  e.min = t.min, e.max = t.max;
}
function ue(e, t) {
  fi(e.x, t.x), fi(e.y, t.y);
}
function hi(e, t, n, r, o) {
  return e -= t, e = tn(e, 1 / n, r), o !== void 0 && (e = tn(e, 1 / o, r)), e;
}
function _f(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (ye.test(t) && (t = parseFloat(t), t = U(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = U(s.min, s.max, r);
  e === s && (a -= t), e.min = hi(e.min, t, n, a, o), e.max = hi(e.max, t, n, a, o);
}
function pi(e, t, [n, r, o], s, i) {
  _f(e, t[n], t[r], t[o], t.scale, s, i);
}
const If = ["x", "scaleX", "originX"], jf = ["y", "scaleY", "originY"];
function mi(e, t, n, r) {
  pi(e.x, t, If, n == null ? void 0 : n.x, r == null ? void 0 : r.x), pi(e.y, t, jf, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function gi(e) {
  return e.translate === 0 && e.scale === 1;
}
function ra(e) {
  return gi(e.x) && gi(e.y);
}
function oa(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function yi(e) {
  return ae(e.x) / ae(e.y);
}
class $f {
  constructor() {
    this.members = [];
  }
  add(t) {
    Dr(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Or(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function vi(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: c, rotateX: u, rotateY: l } = n;
    c && (r += `rotate(${c}deg) `), u && (r += `rotateX(${u}deg) `), l && (r += `rotateY(${l}deg) `);
  }
  const i = e.x.scale * t.x, a = e.y.scale * t.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const Nf = (e, t) => e.depth - t.depth;
class Uf {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Dr(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Or(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Nf), this.isDirty = !1, this.children.forEach(t);
  }
}
const bi = ["", "X", "Y", "Z"], xi = 1e3;
let zf = 0;
function ia({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, c = t == null ? void 0 : t()) {
      this.id = zf++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(qf), this.nodes.forEach(Kf), this.nodes.forEach(Xf);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uf());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Fr()), this.eventHandlers.get(i).add(a);
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
          this.root.updateBlockedByResize = !0, h && h(), h = Is(p, 250), ct.hasAnimatedSinceResize && (ct.hasAnimatedSinceResize = !1, this.nodes.forEach(Ti));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && d && (u || l) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        var C, x, T, v, E;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const k = (x = (C = this.options.transition) !== null && C !== void 0 ? C : d.getDefaultTransition()) !== null && x !== void 0 ? x : th, { onLayoutAnimationStart: D, onLayoutAnimationComplete: z } = d.getProps(), $ = !this.targetLayout || !oa(this.targetLayout, g) || m, Y = !p && m;
        if (!((T = this.resumeFrom) === null || T === void 0) && T.instance || Y || p && ($ || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, Y);
          const N = {
            ...js(k, "layout"),
            onPlay: D,
            onComplete: z
          };
          d.shouldReduceMotion && (N.delay = 0, N.type = !1), this.startAnimation(N);
        } else
          !p && this.animationProgress === 0 && Ti(this), this.isLead() && ((E = (v = this.options).onExitComplete) === null || E === void 0 || E.call(v));
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(Jf), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wi);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(nh), this.potentialNodes.clear()), this.nodes.forEach(Yf), this.nodes.forEach(Wf), this.nodes.forEach(Hf), this.clearAllSnapshots(), kn.update(), kn.preRender(), kn.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(Gf), this.sharedNodes.forEach(Zf);
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
      this.layout = this.measure(!1), this.layoutCorrected = G(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !ra(this.projectionDelta), u = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, l = u == null ? void 0 : u(this.latestValues, ""), d = l !== this.prevTransformTemplateValue;
      a && (c || Fe(this.latestValues) || d) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), rh(c), {
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
        return G();
      const a = i.measureViewportBox(), { scroll: c } = this.root;
      return c && (Ae(a.x, c.offset.x), Ae(a.y, c.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = G();
      ue(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: d } = u;
        if (u !== this.root && l && d.layoutScroll) {
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
      const c = G();
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
      const c = G();
      ue(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        if (!l.instance || !Fe(l.latestValues))
          continue;
        ir(l.latestValues) && l.updateSnapshot();
        const d = G(), h = l.measurePageBox();
        ue(d, h), mi(c, l.latestValues, (a = l.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, d);
      }
      return Fe(this.latestValues) && mi(c, this.latestValues), c;
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
          l && l.layout ? (this.relativeParent = l, this.relativeTarget = G(), this.relativeTargetOrigin = G(), ft(this.relativeTargetOrigin, this.layout.layoutBox, l.layout.layoutBox), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? $d(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ue(this.target, this.layout.layoutBox), qs(this.target, this.targetDelta)) : ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const l = this.getClosestProjectingParent();
          l && !!l.resumingFrom == !!this.resumingFrom && !l.options.layoutScroll && l.target ? (this.relativeParent = l, this.relativeTarget = G(), this.relativeTargetOrigin = G(), ft(this.relativeTargetOrigin, this.target, l.target), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ir(this.parent.latestValues) || Hs(this.parent.latestValues)))
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
      ue(this.layoutCorrected, this.layout.layoutBox), Kd(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: m } = u;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = ht(), this.projectionDeltaWithTransform = ht());
      const g = this.treeScale.x, C = this.treeScale.y, x = this.projectionTransform;
      dt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = vi(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== g || this.treeScale.y !== C) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      const l = this.snapshot, d = (l == null ? void 0 : l.latestValues) || {}, h = { ...this.latestValues }, p = ht();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = G(), g = (l == null ? void 0 : l.source) !== ((c = this.layout) === null || c === void 0 ? void 0 : c.source), C = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1, x = !!(g && !C && this.options.crossfade === !0 && !this.path.some(eh));
      this.animationProgress = 0, this.mixTargetDelta = (T) => {
        var v;
        const E = T / 1e3;
        Ci(p.x, i.x, E), Ci(p.y, i.y, E), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((v = this.relativeParent) === null || v === void 0) && v.layout) && (ft(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Qf(this.relativeTarget, this.relativeTargetOrigin, m, E)), g && (this.animationValues = h, Lf(h, d, this.latestValues, E, x, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (ke.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
        ct.hasAnimatedSinceResize = !0, this.currentAnimation = Of(0, xi, {
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
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, xi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = i;
      if (!(!a || !c || !u)) {
        if (this !== i && this.layout && u && sa(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || G();
          const d = ae(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + d;
          const h = ae(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + h;
        }
        ue(a, c), He(a, l), dt(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(i, a) {
      var c, u, l;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new $f()), this.sharedNodes.get(i).add(a), a.promote({
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
      for (let l = 0; l < bi.length; l++) {
        const d = "rotate" + bi[l];
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
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = $t(i.pointerEvents) || "", l.transform = d ? d(this.latestValues, "") : "none", l;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const C = {};
        return this.options.layoutId && (C.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, C.pointerEvents = $t(i.pointerEvents) || ""), this.hasProjected && !Fe(this.latestValues) && (C.transform = d ? d({}, "") : "none", this.hasProjected = !1), C;
      }
      const p = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), l.transform = vi(this.projectionDeltaWithTransform, this.treeScale, p), d && (l.transform = d(p, l.transform));
      const { x: m, y: g } = this.projectionDelta;
      l.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? l.opacity = h === this ? (u = (c = p.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : l.opacity = h === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const C in Ht) {
        if (p[C] === void 0)
          continue;
        const { correct: x, applyTo: T } = Ht[C], v = x(p[C], h);
        if (T) {
          const E = T.length;
          for (let k = 0; k < E; k++)
            l[T[k]] = v;
        } else
          l[C] = v;
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
      }), this.root.nodes.forEach(wi), this.root.sharedNodes.clear();
    }
  };
}
function Wf(e) {
  e.updateLayout();
}
function Hf(e) {
  var t, n, r;
  const o = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: a } = e.options, c = o.source !== e.layout.source;
    a === "size" ? me((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = ae(m);
      m.min = s[p].min, m.max = m.min + g;
    }) : sa(a, o.layoutBox, s) && me((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = ae(s[p]);
      m.max = m.min + g;
    });
    const u = ht();
    dt(u, s, o.layoutBox);
    const l = ht();
    c ? dt(l, e.applyTransform(i, !0), o.measuredBox) : dt(l, s, o.layoutBox);
    const d = !ra(u);
    let h = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: g } = p;
        if (m && g) {
          const C = G();
          ft(C, o.layoutBox, m.layoutBox);
          const x = G();
          ft(x, s, g.layoutBox), oa(C, x) || (h = !0);
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
function qf(e) {
  e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty));
}
function Gf(e) {
  e.clearSnapshot();
}
function wi(e) {
  e.clearMeasurements();
}
function Yf(e) {
  const { visualElement: t } = e.options;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ti(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function Kf(e) {
  e.resolveTargetDelta();
}
function Xf(e) {
  e.calcProjection();
}
function Jf(e) {
  e.resetRotation();
}
function Zf(e) {
  e.removeLeadSnapshot();
}
function Ci(e, t, n) {
  e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ei(e, t, n, r) {
  e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r);
}
function Qf(e, t, n, r) {
  Ei(e.x, t.x, n.x, r), Ei(e.y, t.y, n.y, r);
}
function eh(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const th = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function nh(e, t) {
  let n = e.root;
  for (let s = e.path.length - 1; s >= 0; s--)
    if (e.path[s].instance) {
      n = e.path[s];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, !0);
}
function Si(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function rh(e) {
  Si(e.x), Si(e.y);
}
function sa(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !rr(yi(t), yi(n), 0.2);
}
const oh = ia({
  attachResizeListener: (e, t) => un(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), jn = {
  current: void 0
}, ih = ia({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!jn.current) {
      const e = new oh(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), jn.current = e;
    }
    return jn.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), sh = {
  ...Bd,
  ...nu,
  ...of,
  ...Df
}, Ke = /* @__PURE__ */ nl((e, t) => Ll(e, t, sh, Pf, ih));
function aa() {
  const e = Q(!1);
  return at(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ah() {
  const e = aa(), [t, n] = ne(0), r = Me(() => {
    e.current && n(t + 1);
  }, [t]);
  return [Me(() => se.postRender(r), [r]), t];
}
class ch extends _.Component {
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
function lh({ children: e, isPresent: t }) {
  const n = gr(), r = Q(null), o = Q({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return ac(() => {
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
  }, [t]), _.createElement(ch, { isPresent: t, childRef: r, sizeRef: o }, _.cloneElement(e, { ref: r }));
}
const $n = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = ln(uh), c = gr(), u = de(
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
  return de(() => {
    a.forEach((l, d) => a.set(d, !1));
  }, [n]), _.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = _.createElement(lh, { isPresent: n }, e)), _.createElement(Tt.Provider, { value: u }, e);
};
function uh() {
  return /* @__PURE__ */ new Map();
}
const Ue = (e) => e.key || "";
function dh(e, t) {
  e.forEach((n) => {
    const r = Ue(n);
    t.set(r, n);
  });
}
function fh(e) {
  const t = [];
  return lc.forEach(e, (n) => {
    uc(n) && t.push(n);
  }), t;
}
const Pt = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", Vr(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = ah();
  const c = K(vr).forceRender;
  c && (a = c);
  const u = aa(), l = fh(e);
  let d = l;
  const h = /* @__PURE__ */ new Set(), p = Q(d), m = Q(/* @__PURE__ */ new Map()).current, g = Q(!0);
  if (at(() => {
    g.current = !1, dh(l, m), p.current = d;
  }), Rr(() => {
    g.current = !0, m.clear(), h.clear();
  }), g.current)
    return _.createElement(_.Fragment, null, d.map((v) => _.createElement($n, { key: Ue(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, v)));
  d = [...d];
  const C = p.current.map(Ue), x = l.map(Ue), T = C.length;
  for (let v = 0; v < T; v++) {
    const E = C[v];
    x.indexOf(E) === -1 && h.add(E);
  }
  return i === "wait" && h.size && (d = []), h.forEach((v) => {
    if (x.indexOf(v) !== -1)
      return;
    const E = m.get(v);
    if (!E)
      return;
    const k = C.indexOf(v), D = () => {
      m.delete(v), h.delete(v);
      const z = p.current.findIndex(($) => $.key === v);
      if (p.current.splice(z, 1), !h.size) {
        if (p.current = l, u.current === !1)
          return;
        a(), r && r();
      }
    };
    d.splice(k, 0, _.createElement($n, { key: Ue(E), isPresent: !1, onExitComplete: D, custom: t, presenceAffectsLayout: s, mode: i }, E));
  }), d = d.map((v) => {
    const E = v.key;
    return h.has(E) ? v : _.createElement($n, { key: Ue(v), isPresent: !0, presenceAffectsLayout: s, mode: i }, v);
  }), kr !== "production" && i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), _.createElement(_.Fragment, null, h.size ? d : d.map((v) => cc(v)));
};
function hh({ dragControls: e }) {
  function t(n) {
    n.stopPropagation(), e.start(n);
  }
  return /* @__PURE__ */ w(
    ph,
    {
      onPointerDown: t,
      title: "Click & drag",
      children: /* @__PURE__ */ B(
        mh,
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ w(
              "path",
              {
                d: "M4.25 8.75H19.25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ w(
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
const ph = P.div`
  display: flex;
  color: rgb(${(e) => e.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, mh = P.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let jt;
const gh = new Uint8Array(16);
function yh() {
  if (!jt && (jt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !jt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return jt(gh);
}
const J = [];
for (let e = 0; e < 256; ++e)
  J.push((e + 256).toString(16).slice(1));
function vh(e, t = 0) {
  return J[e[t + 0]] + J[e[t + 1]] + J[e[t + 2]] + J[e[t + 3]] + "-" + J[e[t + 4]] + J[e[t + 5]] + "-" + J[e[t + 6]] + J[e[t + 7]] + "-" + J[e[t + 8]] + J[e[t + 9]] + "-" + J[e[t + 10]] + J[e[t + 11]] + J[e[t + 12]] + J[e[t + 13]] + J[e[t + 14]] + J[e[t + 15]];
}
const bh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Pi = {
  randomUUID: bh
};
function xh(e, t, n) {
  if (Pi.randomUUID && !t && !e)
    return Pi.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || yh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return vh(r);
}
function ca(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wh } = Object.prototype, { getPrototypeOf: Gr } = Object, mn = ((e) => (t) => {
  const n = wh.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (t) => mn(t) === e), gn = (e) => (t) => typeof t === e, { isArray: Ze } = Array, bt = gn("undefined");
function Th(e) {
  return e !== null && !bt(e) && e.constructor !== null && !bt(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const la = be("ArrayBuffer");
function Ch(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && la(e.buffer), t;
}
const Eh = gn("string"), le = gn("function"), ua = gn("number"), yn = (e) => e !== null && typeof e == "object", Sh = (e) => e === !0 || e === !1, Ut = (e) => {
  if (mn(e) !== "object")
    return !1;
  const t = Gr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ph = be("Date"), Ah = be("File"), Rh = be("Blob"), kh = be("FileList"), Vh = (e) => yn(e) && le(e.pipe), Dh = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || le(e.append) && ((t = mn(e)) === "formdata" || // detect form-data instance
  t === "object" && le(e.toString) && e.toString() === "[object FormData]"));
}, Oh = be("URLSearchParams"), Fh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function At(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ze(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function da(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const fa = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ha = (e) => !bt(e) && e !== fa;
function ur() {
  const { caseless: e } = ha(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && da(t, o) || o;
    Ut(t[s]) && Ut(r) ? t[s] = ur(t[s], r) : Ut(r) ? t[s] = ur({}, r) : Ze(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && At(arguments[r], n);
  return t;
}
const Lh = (e, t, n, { allOwnKeys: r } = {}) => (At(t, (o, s) => {
  n && le(o) ? e[s] = ca(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Mh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bh = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, _h = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Gr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ih = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, jh = (e) => {
  if (!e)
    return null;
  if (Ze(e))
    return e;
  let t = e.length;
  if (!ua(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $h = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Gr(Uint8Array)), Nh = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Uh = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, zh = be("HTMLFormElement"), Wh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ai = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Hh = be("RegExp"), pa = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  At(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, qh = (e) => {
  pa(e, (t, n) => {
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
}, Gh = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ze(e) ? r(e) : r(String(e).split(t)), n;
}, Yh = () => {
}, Kh = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Nn = "abcdefghijklmnopqrstuvwxyz", Ri = "0123456789", ma = {
  DIGIT: Ri,
  ALPHA: Nn,
  ALPHA_DIGIT: Nn + Nn.toUpperCase() + Ri
}, Xh = (e = 16, t = ma.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Jh(e) {
  return !!(e && le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Zh = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (yn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ze(r) ? [] : {};
        return At(r, (i, a) => {
          const c = n(i, o + 1);
          !bt(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qh = be("AsyncFunction"), ep = (e) => e && (yn(e) || le(e)) && le(e.then) && le(e.catch), y = {
  isArray: Ze,
  isArrayBuffer: la,
  isBuffer: Th,
  isFormData: Dh,
  isArrayBufferView: Ch,
  isString: Eh,
  isNumber: ua,
  isBoolean: Sh,
  isObject: yn,
  isPlainObject: Ut,
  isUndefined: bt,
  isDate: Ph,
  isFile: Ah,
  isBlob: Rh,
  isRegExp: Hh,
  isFunction: le,
  isStream: Vh,
  isURLSearchParams: Oh,
  isTypedArray: $h,
  isFileList: kh,
  forEach: At,
  merge: ur,
  extend: Lh,
  trim: Fh,
  stripBOM: Mh,
  inherits: Bh,
  toFlatObject: _h,
  kindOf: mn,
  kindOfTest: be,
  endsWith: Ih,
  toArray: jh,
  forEachEntry: Nh,
  matchAll: Uh,
  isHTMLForm: zh,
  hasOwnProperty: Ai,
  hasOwnProp: Ai,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pa,
  freezeMethods: qh,
  toObjectSet: Gh,
  toCamelCase: Wh,
  noop: Yh,
  toFiniteNumber: Kh,
  findKey: da,
  global: fa,
  isContextDefined: ha,
  ALPHABET: ma,
  generateString: Xh,
  isSpecCompliantForm: Jh,
  toJSONObject: Zh,
  isAsyncFn: Qh,
  isThenable: ep
};
function F(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
y.inherits(F, Error, {
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
const ga = F.prototype, ya = {};
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
  ya[e] = { value: e };
});
Object.defineProperties(F, ya);
Object.defineProperty(ga, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, o, s) => {
  const i = Object.create(ga);
  return y.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), F.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const tp = null;
function dr(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function va(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ki(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = va(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function np(e) {
  return y.isArray(e) && !e.some(dr);
}
const rp = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vn(e, t, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, C) {
    return !y.isUndefined(C[g]);
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
      throw new F("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, g, C) {
    let x = m;
    if (m && !C && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && np(m) || (y.isFileList(m) || y.endsWith(g, "[]")) && (x = y.toArray(m)))
        return g = va(g), x.forEach(function(v, E) {
          !(y.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ki([g], E, s) : i === null ? g : g + "[]",
            u(v)
          );
        }), !1;
    }
    return dr(m) ? !0 : (t.append(ki(C, g, s), u(m)), !1);
  }
  const d = [], h = Object.assign(rp, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: dr
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
function Vi(e) {
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
function Yr(e, t) {
  this._pairs = [], e && vn(e, this, t);
}
const ba = Yr.prototype;
ba.append = function(t, n) {
  this._pairs.push([t, n]);
};
ba.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Vi);
  } : Vi;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function op(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xa(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || op, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = y.isURLSearchParams(t) ? t.toString() : new Yr(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class ip {
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
const Di = ip, wa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sp = typeof URLSearchParams < "u" ? URLSearchParams : Yr, ap = typeof FormData < "u" ? FormData : null, cp = typeof Blob < "u" ? Blob : null, lp = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sp,
    FormData: ap,
    Blob: cp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ta = typeof window < "u" && typeof document < "u", up = ((e) => Ta && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), dp = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ta,
  hasStandardBrowserEnv: up,
  hasStandardBrowserWebWorkerEnv: dp
}, Symbol.toStringTag, { value: "Module" })), ge = {
  ...fp,
  ...lp
};
function hp(e, t) {
  return vn(e, new ge.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ge.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function pp(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mp(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Ca(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, c ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = mp(o[i])), !a);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (r, o) => {
      t(pp(r), o, n, 0);
    }), n;
  }
  return null;
}
function gp(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Kr = {
  transitional: wa,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(t);
    if (s && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return o ? JSON.stringify(Ca(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return hp(t, this.formSerializer).toString();
      if ((a = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return vn(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), gp(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Kr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && y.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ge.classes.FormData,
    Blob: ge.classes.Blob
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
  Kr.headers[e] = {};
});
const Xr = Kr, yp = y.toObjectSet([
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
]), vp = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && yp[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oi = Symbol("internals");
function ot(e) {
  return e && String(e).trim().toLowerCase();
}
function zt(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(zt) : String(e);
}
function bp(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const xp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Un(e, t, n, r, o) {
  if (y.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!y.isString(t)) {
    if (y.isString(r))
      return t.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(t);
  }
}
function wp(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Tp(e, t) {
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
class bn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, c, u) {
      const l = ot(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = y.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = zt(a));
    }
    const i = (a, c) => y.forEach(a, (u, l) => s(u, l, c));
    return y.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : y.isString(t) && (t = t.trim()) && !xp(t) ? i(vp(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = ot(t), t) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return bp(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ot(t), t) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Un(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = ot(i), i) {
        const a = y.findKey(r, i);
        a && (!n || Un(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return y.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Un(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = zt(o), delete n[s];
        return;
      }
      const a = t ? wp(s) : String(s).trim();
      a !== s && delete n[s], n[a] = zt(o), r[a] = !0;
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
    const r = (this[Oi] = this[Oi] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = ot(i);
      r[a] || (Tp(o, i), r[a] = !0);
    }
    return y.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
bn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(bn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
y.freezeMethods(bn);
const Ee = bn;
function zn(e, t) {
  const n = this || Xr, r = t || n, o = Ee.from(r.headers);
  let s = r.data;
  return y.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Ea(e) {
  return !!(e && e.__CANCEL__);
}
function Rt(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
y.inherits(Rt, F, {
  __CANCEL__: !0
});
function Cp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ep = ge.hasStandardBrowserEnv ? (
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
function Sp(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Sa(e, t) {
  return e && !Sp(t) ? Pp(e, t) : t;
}
const Ap = ge.hasStandardBrowserEnv ? (
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
function Rp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function kp(e, t) {
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
function Fi(e, t) {
  let n = 0;
  const r = kp(50, 250);
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
const Vp = typeof XMLHttpRequest < "u", Dp = Vp && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Ee.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: a } = e, c;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let l;
    if (y.isFormData(o)) {
      if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((l = s.getContentType()) !== !1) {
        const [g, ...C] = l ? l.split(";").map((x) => x.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...C].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + C));
    }
    const h = Sa(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), xa(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function p() {
      if (!d)
        return;
      const g = Ee.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: g,
        config: e,
        request: d
      };
      Cp(function(v) {
        n(v), u();
      }, function(v) {
        r(v), u();
      }, x), d = null;
    }
    if ("onloadend" in d ? d.onloadend = p : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, d.onabort = function() {
      d && (r(new F("Request aborted", F.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let C = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const x = e.transitional || wa;
      e.timeoutErrorMessage && (C = e.timeoutErrorMessage), r(new F(
        C,
        x.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        d
      )), d = null;
    }, ge.hasStandardBrowserEnv && (a && y.isFunction(a) && (a = a(e)), a || a !== !1 && Ap(h))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && Ep.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in d && y.forEach(s.toJSON(), function(C, x) {
      d.setRequestHeader(x, C);
    }), y.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), i && i !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Fi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Fi(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (g) => {
      d && (r(!g || g.type ? new Rt(null, e, d) : g), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const m = Rp(h);
    if (m && ge.protocols.indexOf(m) === -1) {
      r(new F("Unsupported protocol " + m + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, fr = {
  http: tp,
  xhr: Dp
};
y.forEach(fr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Li = (e) => `- ${e}`, Op = (e) => y.isFunction(e) || e === null || e === !1, Pa = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !Op(n) && (r = fr[(i = String(n)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Li).join(`
`) : " " + Li(s[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fr
};
function Wn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Rt(null, e);
}
function Mi(e) {
  return Wn(e), e.headers = Ee.from(e.headers), e.data = zn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pa.getAdapter(e.adapter || Xr.adapter)(e).then(function(r) {
    return Wn(e), r.data = zn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ee.from(r.headers), r;
  }, function(r) {
    return Ea(r) || (Wn(e), r && r.response && (r.response.data = zn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ee.from(r.response.headers))), Promise.reject(r);
  });
}
const Bi = (e) => e instanceof Ee ? e.toJSON() : e;
function Xe(e, t) {
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
    headers: (u, l) => o(Bi(u), Bi(l), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = c[l] || o, h = d(e[l], t[l], l);
    y.isUndefined(h) && d !== a || (n[l] = h);
  }), n;
}
const Aa = "1.6.7", Jr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Jr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _i = {};
Jr.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Aa + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new F(
        o(i, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !_i[i] && (_i[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function Fp(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new F("option " + s + " must be " + c, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + s, F.ERR_BAD_OPTION);
  }
}
const hr = {
  assertOptions: Fp,
  validators: Jr
}, Se = hr.validators;
class nn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Di(),
      response: new Di()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Xe(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && hr.assertOptions(r, {
      silentJSONParsing: Se.transitional(Se.boolean),
      forcedJSONParsing: Se.transitional(Se.boolean),
      clarifyTimeoutError: Se.transitional(Se.boolean)
    }, !1), o != null && (y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : hr.assertOptions(o, {
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
    ), n.headers = Ee.concat(i, s);
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
      const m = [Mi.bind(this), void 0];
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
      } catch (C) {
        g.call(this, C);
        break;
      }
    }
    try {
      l = Mi.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = u.length; d < h; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = Xe(this.defaults, t);
    const n = Sa(t.baseURL, t.url);
    return xa(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(t) {
  nn.prototype[t] = function(n, r) {
    return this.request(Xe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(Xe(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  nn.prototype[t] = n(), nn.prototype[t + "Form"] = n(!0);
});
const Wt = nn;
class Zr {
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
      r.reason || (r.reason = new Rt(s, i, a), n(r.reason));
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
      token: new Zr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Lp = Zr;
function Mp(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Bp(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const pr = {
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
Object.entries(pr).forEach(([e, t]) => {
  pr[t] = e;
});
const _p = pr;
function Ra(e) {
  const t = new Wt(e), n = ca(Wt.prototype.request, t);
  return y.extend(n, Wt.prototype, t, { allOwnKeys: !0 }), y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ra(Xe(e, o));
  }, n;
}
const q = Ra(Xr);
q.Axios = Wt;
q.CanceledError = Rt;
q.CancelToken = Lp;
q.isCancel = Ea;
q.VERSION = Aa;
q.toFormData = vn;
q.AxiosError = F;
q.Cancel = q.CanceledError;
q.all = function(t) {
  return Promise.all(t);
};
q.spread = Mp;
q.isAxiosError = Bp;
q.mergeConfig = Xe;
q.AxiosHeaders = Ee;
q.formToJSON = (e) => Ca(y.isHTMLForm(e) ? new FormData(e) : e);
q.getAdapter = Pa.getAdapter;
q.HttpStatusCode = _p;
q.default = q;
const Ip = q;
function jp({
  children: e,
  img: t,
  outline: n,
  hideSquircle: r = !1,
  ...o
}) {
  const [s, i] = ne(), a = de(() => xh(), [t]);
  return re(() => {
    (async () => {
      if (!t || r)
        return i(t);
      try {
        const d = (await Ip.get(t, { responseType: "blob" })).data, h = new FileReader();
        h.onloadend = () => {
          const p = h.result;
          typeof p == "string" && i(p);
        }, h.readAsDataURL(d);
      } catch (l) {
        console.error("Error loading image:", l), i(void 0);
      }
    })();
  }, [t]), /* @__PURE__ */ B($p, { ...o, children: [
    !r && /* @__PURE__ */ B(
      Np,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s && /* @__PURE__ */ w("defs", { children: /* @__PURE__ */ w(
            "pattern",
            {
              id: a,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ w(
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
          /* @__PURE__ */ w(
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
const $p = P.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(e) => e.theme.theme});
`, Np = P.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function $m({
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
  img: d,
  icon: h,
  leftIcon: p,
  rightIcon: m,
  dragControls: g,
  expandableContent: C,
  expandedText: x = "Hide",
  collapsedText: T = "Show",
  expandable: v = !1,
  showArrow: E = !1,
  squircleSize: k = t ? 32 : 48,
  hideSquircle: D = !1,
  ...z
}) {
  const [$, Y] = ne(!1), N = de(() => r || (!D && k ? k + 2 * (o ?? 8) : t ? 36 : 48), [r, t, k, D, o]);
  return /* @__PURE__ */ B(
    Up,
    {
      small: t,
      active: n,
      height: N,
      padding: o,
      ...z,
      children: [
        /* @__PURE__ */ B(zp, { height: N, children: [
          /* @__PURE__ */ B(Hp, { children: [
            !D || d ? /* @__PURE__ */ w(Ii, { small: t, img: d, squircleSize: k, children: /* @__PURE__ */ w(ji, { children: p || h || e }) }) : /* @__PURE__ */ w("div", { style: { flexShrink: 0 }, children: p || h || e }),
            /* @__PURE__ */ B("div", { style: { width: "100%" }, children: [
              typeof s == "string" ? /* @__PURE__ */ w(qp, { small: t, style: i, children: s }) : s,
              a && (typeof a == "string" ? /* @__PURE__ */ w(Gp, { small: t, style: c, children: a }) : a)
            ] })
          ] }),
          /* @__PURE__ */ B(Xp, { children: [
            u && /* @__PURE__ */ w(Yp, { small: t, style: l, children: u }),
            m && (D ? m : /* @__PURE__ */ w(Ii, { small: t, squircleSize: k, children: /* @__PURE__ */ w(ji, { children: m }) })),
            !g && E && /* @__PURE__ */ w(Kp, {}),
            g && /* @__PURE__ */ w(hh, { dragControls: g })
          ] })
        ] }),
        v && /* @__PURE__ */ B(wt, { children: [
          /* @__PURE__ */ B(
            Jp,
            {
              expanded: $,
              onClick: () => Y((oe) => !oe),
              children: [
                /* @__PURE__ */ w($i, { active: n }),
                /* @__PURE__ */ B(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: [
                      /* @__PURE__ */ w(
                        Je,
                        {
                          style: { whiteSpace: "nowrap" },
                          variant: "secondary",
                          size: "xs",
                          weight: "medium",
                          noMargin: !0,
                          children: $ ? x : T
                        }
                      ),
                      /* @__PURE__ */ w(Zp, { as: $ ? Dc : on })
                    ]
                  }
                ),
                /* @__PURE__ */ w($i, { active: n })
              ]
            }
          ),
          /* @__PURE__ */ w(
            Ke.div,
            {
              initial: !1,
              animate: {
                height: $ ? "auto" : 0,
                opacity: $ ? 1 : 0
              },
              transition: {
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2, delay: $ ? 0.1 : 0 }
              },
              style: { overflow: "hidden" },
              children: /* @__PURE__ */ w(Pt, { mode: "wait", children: $ && /* @__PURE__ */ w(
                Ke.div,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: {
                    duration: 0.25,
                    ease: "easeOut"
                  },
                  children: /* @__PURE__ */ w(Wp, { children: C })
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
const Up = P.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  padding: ${(e) => e.padding}px;
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(e) => e.active ? e.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(e) => e.theme.listItem.hover};
  }
`, zp = P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  height: ${(e) => e.height};
  width: 100%;
`, Wp = P.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, Hp = P.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
`, Ii = P(jp)`
  position: relative;
  flex-shrink: 0;
  width: ${(e) => e.squircleSize}px;
  height: ${(e) => e.squircleSize}px;
  color: ${(e) => e.theme.theme};
`, qp = P(Je).attrs({
  noMargin: !0,
  weight: "semibold"
})`
  font-size: ${(e) => e.small ? "16px" : "18px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`, Gp = P(Je).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "12px" : "14px"};
`, Yp = P(Je).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "14px" : "16px"};
`, Kp = P(Vc)`
  color: ${(e) => e.theme.listItem.icon};
  width: 24px;
  height: 24px;
`, ji = P.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, Nm = P.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`, Xp = P.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Jp = P.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: ${(e) => `1rem 0 ${e.expanded ? "1rem" : "0"} 0`};
  cursor: pointer;

  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.92);
  }
`, Zp = P(on)`
  cursor: pointer;
  font-size: 1.25rem;
  width: 1rem;
  height: 1rem;
  color: ${(e) => e.theme.tertiaryText};
`, $i = P.div`
  width: 100%;
  height: ${({ height: e }) => e || 1}px;
  background: ${({ theme: e, active: t }) => t ? e.borderDefault : e.borderSecondary};
  margin: ${({ marginVertical: e }) => e || 0}px 0;
`;
function st(e) {
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
function Qp(e) {
  let t = "";
  return e.startsWith("top") ? t += "bottom" : e.startsWith("bottom") ? t += "top" : e.startsWith("right") ? t += "left" : t += "right", t += `: -15px;
`, e.startsWith("top") || e.startsWith("bottom") ? e.includes("Start") ? t += "left: 15px;" : e.includes("End") ? t += "right: 15px;" : (t += `left: 50%;
`, t += "transform: translate(-50%, 0);") : e.includes("Start") ? t += "top: 15px;" : e.includes("End") ? t += "bottom: 15px;" : (t += `top: 50%;
`, t += "transform: translate(0, -50%);"), t;
}
function Um({
  children: e,
  content: t,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = ne(!1);
  re(() => (document.addEventListener("mousedown", l), () => {
    document.removeEventListener("mousedown", l);
  }));
  const c = Q(), u = Q();
  function l(d) {
    var h, p;
    o === "click" && (!i && ((h = u.current) != null && h.contains(d.target)) ? a(!0) : i && !((p = c.current) != null && p.contains(d.target)) && (d.preventDefault(), d.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ B(
    em,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: u,
      children: [
        /* @__PURE__ */ w(Pt, { children: i && /* @__PURE__ */ w(
          tm,
          {
            style: r || st(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: c,
            children: /* @__PURE__ */ w(Ui, { ...s, children: t })
          }
        ) }),
        e
      ]
    }
  );
}
const em = P.div`
  position: relative;
  display: inline-block;
`, tm = P(Ke.div)`
  position: absolute;
  z-index: 100;
`, ka = Be({
  toasts: [],
  setToast() {
  }
}), nm = () => K(ka);
let rm = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function om(e) {
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
function im(e) {
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
function Va(e) {
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
function sm(e) {
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
const am = (e) => {
  switch (e) {
    case "info":
      return Va;
    case "error":
      return sm;
    default:
      return om;
  }
};
function cm({
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
  const [u, l] = ne(100), d = Q(100), h = Q(Date.now()), p = Me(async () => {
    n && (await n.task(), o());
  }, [n, o]);
  return re(() => {
    if (!i)
      return;
    const g = s + t;
    let C;
    h.current = Date.now();
    const x = () => {
      const T = Date.now(), v = Math.max(0, g - T);
      if (T - h.current >= 16) {
        const E = v / t * 100;
        Math.abs(E - d.current) >= 1 && (l(E), d.current = E), h.current = T;
      }
      v > 0 && (C = requestAnimationFrame(x));
    };
    return x(), () => {
      C && cancelAnimationFrame(C);
    };
  }, [s, t, i]), /* @__PURE__ */ B(lm, { children: [
    /* @__PURE__ */ B(dm, { children: [
      c && /* @__PURE__ */ w(fm, { as: am(r), type: r }),
      /* @__PURE__ */ w(hm, { children: e })
    ] }),
    /* @__PURE__ */ B(pm, { children: [
      n && /* @__PURE__ */ w(Fa, { onClick: p, children: n.name }),
      /* @__PURE__ */ w(mm, { onClick: o, children: /* @__PURE__ */ w(gm, {}) })
    ] }),
    i && u > 0 && /* @__PURE__ */ w(um, { type: r, progress: u, color: a })
  ] });
}
const Da = ".25rem", lm = P(Ke.div).attrs({
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
  //padding: .5rem 1.1rem calc(.5rem + ${Da});
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(e) => e.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + e.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, Oa = {
  success: (e) => e.theme.success,
  error: (e) => e.theme.fail,
  info: (e) => e.theme.theme
}, um = P.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${Da};
  width: ${(e) => e.progress || "100"}%;
  background: ${(e) => e.color || Oa[e.type](e)};
  will-change: width;
`, rn = ".35rem", dm = P.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, fm = P(Va)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: ${(e) => Oa[e.type](e)};
`, hm = P.div`
  padding: ${rn} 0;
`, pm = P.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, mr = "1rem", Fa = P.button`
  font-size: ${mr};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${rn} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, mm = P(Fa)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${rn} * 2 + ${mr});
  height: calc(${rn} * 2 + ${mr});
`, gm = P(zi)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, ym = {
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
}, vm = ({ setToasts: e }) => {
  const { toasts: t } = nm(), n = Me(
    (s) => {
      e((i) => i.filter((a) => a.id !== s));
    },
    [e]
  ), r = Me(
    (s, i) => typeof s == "function" ? s({ close: () => n(i) }) : s,
    [n]
  ), o = de(() => t.reduce((s, i) => {
    const a = i.position || "bottom";
    return s[a] || (s[a] = []), s[a].push(i), s;
  }, {}), [t]);
  return /* @__PURE__ */ w(wt, { children: Object.entries(o).map(([s, i]) => /* @__PURE__ */ w(bm, { position: s, children: /* @__PURE__ */ w(Pt, { children: i.map((a) => /* @__PURE__ */ w(
    cm,
    {
      action: a.action,
      duration: a.duration,
      type: a.type,
      close: () => n(a.id),
      addedAt: a.addedAt,
      showProgress: a.showProgress,
      progressColor: a.progressColor,
      showIcon: a.showIcon,
      children: r(a.content, a.id)
    },
    a.id
  )) }) }, s)) });
}, bm = P.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${(e) => ym[e.position]}
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`, zm = {
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
}, Wm = {
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
function Hm({
  children: e,
  theme: t
}) {
  const [n, r] = ne([]);
  function o(s) {
    const i = rm();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((c) => c.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ w(fc, { theme: t, children: /* @__PURE__ */ B(ka.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ w(vm, { setToasts: r }),
    e
  ] }) });
}
const qm = P.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal: e = !0, showPaddingVertical: t = !0 }) => `${t ? "24px" : "0px"} ${e ? "24px" : "0px"}`};
`;
function Gm({
  children: e,
  label: t,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = de(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ B(wt, { children: [
    t && /* @__PURE__ */ w(Hi, { children: t }),
    /* @__PURE__ */ B(
      Wi,
      {
        fullWidth: n,
        sizeVariant: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ w(xm, { ...i, children: e }),
          /* @__PURE__ */ w(Hn, { position: "right", children: /* @__PURE__ */ w(qn, { as: on }) })
        ]
      }
    )
  ] });
}
const xm = P.select`
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
function Ym({
  children: e,
  content: t,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, c, u;
  const [s, i] = ne(!1);
  return /* @__PURE__ */ B(
    wm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ w(Pt, { children: s && /* @__PURE__ */ w(
          Tm,
          {
            ...o,
            position: r,
            style: st(r),
            initial: {
              opacity: 0,
              transform: (((a = st(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((c = st(r)) == null ? void 0 : c.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((u = st(r)) == null ? void 0 : u.transform) || "") + " scale(.95)"
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
const wm = P.div`
  position: relative;
  display: inline-flex;
  ${(e) => e.underline ? "border-bottom: 1px dotted rgb(" + e.theme.cardBorder + ");" : ""}
  ${(e) => e.underline ? "cursor: pointer;" : ""}
`, Tm = P(Ke.div)`
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
    ${(e) => Qp(e.position)}
  }
`, Km = P.span`
  display: block;
  height: ${({ y: e }) => e ? `${e}rem` : "0"};
  width: ${({ x: e }) => e ? `${e}rem` : "0"};
`;
function Xm({
  children: e,
  accept: t,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = ne([]);
  return re(() => {
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
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ B(Cm, { ...o, children: [
    /* @__PURE__ */ w(Je, { children: s.length === 0 && e || s.join(", ") }),
    /* @__PURE__ */ w(Sm, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ w(im, {}) }),
    /* @__PURE__ */ w(Em, { accept: t, multiple: n, ref: r })
  ] });
}
const Cm = P(Ui).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, Em = P.input.attrs({
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
`, Sm = P(xc).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Jm({
  children: e,
  open: t,
  setOpen: n,
  actions: r,
  root: o,
  showCloseIcon: s = !1
}) {
  return hc.createPortal(
    /* @__PURE__ */ w(Pt, { children: t && /* @__PURE__ */ w(Pm, { onClick: () => n(!1), children: /* @__PURE__ */ B(Am, { onClick: (i) => i.stopPropagation(), children: [
      s && /* @__PURE__ */ w(Vm, { onClick: () => n(!1) }),
      /* @__PURE__ */ w(Rm, { children: e }),
      r && /* @__PURE__ */ w(km, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const Pm = P(Ke.div).attrs({
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
`, Am = P.div`
  position: relative;
  background-color: ${(e) => e.theme.surfaceSecondaryPopup};
  border: 1px solid ${(e) => e.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`, Rm = P.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(e) => e.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`, km = P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`, Vm = P(zi)`
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
  Wm as ARCONNECT_DARK_THEME,
  zm as ARCONNECT_LIGHT_THEME,
  xc as Button,
  Ui as Card,
  _m as Checkbox,
  Ic as ErrorMsg,
  Xm as FileInput,
  qn as Icon,
  Hn as IconWrapper,
  Im as Input,
  jc as InputElement,
  Wi as InputWrapper,
  Hi as Label,
  $m as ListItem,
  ji as ListItemIcon,
  Nm as ListItemImg,
  yc as Loading,
  Jm as Modal,
  Um as Popover,
  Hm as Provider,
  qm as Section,
  Gm as Select,
  Km as Spacer,
  Je as Text,
  Ym as Tooltip,
  Mm as useCheckbox,
  Lm as useInput,
  Bm as useModal,
  nm as useToasts
};
