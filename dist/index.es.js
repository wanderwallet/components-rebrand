import * as k from "react";
import be, { useState as it, createContext as Mt, useContext as H, useLayoutEffect as ac, useEffect as K, useRef as et, useCallback as Hn, useMemo as mt, forwardRef as cc, createElement as ji, useId as mr, useInsertionEffect as lc, cloneElement as uc, Children as fc, isValidElement as dc } from "react";
import P, { keyframes as hc, ThemeProvider as pc } from "styled-components";
import Ni from "react-dom";
function Am(t) {
  const [e, n] = it(t), [r, o] = it("default");
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
function Rm(t = !1) {
  const [e, n] = it(t);
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
function km(t = !1) {
  const [e, n] = it(t);
  return {
    isOpen: e,
    setOpen: n,
    bindings: {
      open: e,
      setOpen: n
    }
  };
}
var he = {}, mc = {
  get exports() {
    return he;
  },
  set exports(t) {
    he = t;
  }
}, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function gc() {
  if (To)
    return Qt;
  To = 1;
  var t = be, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, l) {
    var u, f = {}, h = null, p = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c)
      r.call(c, u) && !s.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps)
      for (u in c = a.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: e, type: a, key: h, ref: p, props: f, _owner: o.current };
  }
  return Qt.Fragment = n, Qt.jsx = i, Qt.jsxs = i, Qt;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function yc() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = be, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function w(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = m && d[m] || d[g];
      return typeof v == "function" ? v : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(d) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          E[R - 1] = arguments[R];
        b("error", d, E);
      }
    }
    function b(d, v, E) {
      {
        var R = x.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (v += "%s", E = E.concat([F]));
        var _ = E.map(function(O) {
          return String(O);
        });
        _.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, _);
      }
    }
    var C = !1, L = !1, M = !1, q = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function G(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === s || Z || d === o || d === l || d === u || q || d === p || C || L || M || typeof d == "object" && d !== null && (d.$$typeof === h || d.$$typeof === f || d.$$typeof === i || d.$$typeof === a || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Q || d.getModuleId !== void 0));
    }
    function lt(d, v, E) {
      var R = d.displayName;
      if (R)
        return R;
      var F = v.displayName || v.name || "";
      return F !== "" ? E + "(" + F + ")" : E;
    }
    function Vt(d) {
      return d.displayName || "Context";
    }
    function rt(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
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
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var v = d;
            return Vt(v) + ".Consumer";
          case i:
            var E = d;
            return Vt(E._context) + ".Provider";
          case c:
            return lt(d, d.render, "ForwardRef");
          case f:
            var R = d.displayName || null;
            return R !== null ? R : rt(d.type) || "Memo";
          case h: {
            var F = d, _ = F._payload, O = F._init;
            try {
              return rt(O(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = Object.assign, $ = 0, tt, vt, eo, no, ro, oo, io;
    function so() {
    }
    so.__reactDisabledLog = !0;
    function _a() {
      {
        if ($ === 0) {
          tt = console.log, vt = console.info, eo = console.warn, no = console.error, ro = console.group, oo = console.groupCollapsed, io = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: so,
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
        $++;
      }
    }
    function Ba() {
      {
        if ($--, $ === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, d, {
              value: tt
            }),
            info: ot({}, d, {
              value: vt
            }),
            warn: ot({}, d, {
              value: eo
            }),
            error: ot({}, d, {
              value: no
            }),
            group: ot({}, d, {
              value: ro
            }),
            groupCollapsed: ot({}, d, {
              value: oo
            }),
            groupEnd: ot({}, d, {
              value: io
            })
          });
        }
        $ < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bn = x.ReactCurrentDispatcher, xn;
    function Pe(d, v, E) {
      {
        if (xn === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            xn = R && R[1] || "";
          }
        return `
` + xn + d;
      }
    }
    var wn = !1, Ae;
    {
      var Ia = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new Ia();
    }
    function ao(d, v) {
      if (!d || wn)
        return "";
      {
        var E = Ae.get(d);
        if (E !== void 0)
          return E;
      }
      var R;
      wn = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = bn.current, bn.current = null, _a();
      try {
        if (v) {
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
            } catch (bt) {
              R = bt;
            }
            Reflect.construct(d, [], O);
          } else {
            try {
              O.call();
            } catch (bt) {
              R = bt;
            }
            d.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            R = bt;
          }
          d();
        }
      } catch (bt) {
        if (bt && R && typeof bt.stack == "string") {
          for (var V = bt.stack.split(`
`), X = R.stack.split(`
`), N = V.length - 1, U = X.length - 1; N >= 1 && U >= 0 && V[N] !== X[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (V[N] !== X[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || V[N] !== X[U]) {
                    var at = `
` + V[N].replace(" at new ", " at ");
                    return d.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", d.displayName)), typeof d == "function" && Ae.set(d, at), at;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        wn = !1, bn.current = _, Ba(), Error.prepareStackTrace = F;
      }
      var jt = d ? d.displayName || d.name : "", wo = jt ? Pe(jt) : "";
      return typeof d == "function" && Ae.set(d, wo), wo;
    }
    function $a(d, v, E) {
      return ao(d, !1);
    }
    function ja(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function Re(d, v, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ao(d, ja(d));
      if (typeof d == "string")
        return Pe(d);
      switch (d) {
        case l:
          return Pe("Suspense");
        case u:
          return Pe("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return $a(d.render);
          case f:
            return Re(d.type, v, E);
          case h: {
            var R = d, F = R._payload, _ = R._init;
            try {
              return Re(_(F), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, co = {}, lo = x.ReactDebugCurrentFrame;
    function Ve(d) {
      if (d) {
        var v = d._owner, E = Re(d.type, d._source, v ? v.type : null);
        lo.setExtraStackFrame(E);
      } else
        lo.setExtraStackFrame(null);
    }
    function Na(d, v, E, R, F) {
      {
        var _ = Function.call.bind(ke);
        for (var O in d)
          if (_(d, O)) {
            var V = void 0;
            try {
              if (typeof d[O] != "function") {
                var X = Error((R || "React class") + ": " + E + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              V = d[O](v, O, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              V = N;
            }
            V && !(V instanceof Error) && (Ve(F), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, O, typeof V), Ve(null)), V instanceof Error && !(V.message in co) && (co[V.message] = !0, Ve(F), T("Failed %s type: %s", E, V.message), Ve(null));
          }
      }
    }
    var Ua = Array.isArray;
    function Tn(d) {
      return Ua(d);
    }
    function za(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function Wa(d) {
      try {
        return uo(d), !1;
      } catch {
        return !0;
      }
    }
    function uo(d) {
      return "" + d;
    }
    function fo(d) {
      if (Wa(d))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", za(d)), uo(d);
    }
    var Zt = x.ReactCurrentOwner, Ha = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ho, po, En;
    En = {};
    function qa(d) {
      if (ke.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Ga(d) {
      if (ke.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Ya(d, v) {
      if (typeof d.ref == "string" && Zt.current && v && Zt.current.stateNode !== v) {
        var E = rt(Zt.current.type);
        En[E] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', rt(Zt.current.type), d.ref), En[E] = !0);
      }
    }
    function Ka(d, v) {
      {
        var E = function() {
          ho || (ho = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Xa(d, v) {
      {
        var E = function() {
          po || (po = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Ja = function(d, v, E, R, F, _, O) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: E,
        props: O,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: F
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Za(d, v, E, R, F) {
      {
        var _, O = {}, V = null, X = null;
        E !== void 0 && (fo(E), V = "" + E), Ga(v) && (fo(v.key), V = "" + v.key), qa(v) && (X = v.ref, Ya(v, F));
        for (_ in v)
          ke.call(v, _) && !Ha.hasOwnProperty(_) && (O[_] = v[_]);
        if (d && d.defaultProps) {
          var N = d.defaultProps;
          for (_ in N)
            O[_] === void 0 && (O[_] = N[_]);
        }
        if (V || X) {
          var U = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          V && Ka(O, U), X && Xa(O, U);
        }
        return Ja(d, V, X, F, R, Zt.current, O);
      }
    }
    var Cn = x.ReactCurrentOwner, mo = x.ReactDebugCurrentFrame;
    function $t(d) {
      if (d) {
        var v = d._owner, E = Re(d.type, d._source, v ? v.type : null);
        mo.setExtraStackFrame(E);
      } else
        mo.setExtraStackFrame(null);
    }
    var Sn;
    Sn = !1;
    function Pn(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function go() {
      {
        if (Cn.current) {
          var d = rt(Cn.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Qa(d) {
      {
        if (d !== void 0) {
          var v = d.fileName.replace(/^.*[\\\/]/, ""), E = d.lineNumber;
          return `

Check your code at ` + v + ":" + E + ".";
        }
        return "";
      }
    }
    var yo = {};
    function tc(d) {
      {
        var v = go();
        if (!v) {
          var E = typeof d == "string" ? d : d.displayName || d.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function vo(d, v) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var E = tc(v);
        if (yo[E])
          return;
        yo[E] = !0;
        var R = "";
        d && d._owner && d._owner !== Cn.current && (R = " It was passed a child from " + rt(d._owner.type) + "."), $t(d), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, R), $t(null);
      }
    }
    function bo(d, v) {
      {
        if (typeof d != "object")
          return;
        if (Tn(d))
          for (var E = 0; E < d.length; E++) {
            var R = d[E];
            Pn(R) && vo(R, v);
          }
        else if (Pn(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var F = w(d);
          if (typeof F == "function" && F !== d.entries)
            for (var _ = F.call(d), O; !(O = _.next()).done; )
              Pn(O.value) && vo(O.value, v);
        }
      }
    }
    function ec(d) {
      {
        var v = d.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === f))
          E = v.propTypes;
        else
          return;
        if (E) {
          var R = rt(v);
          Na(E, d.props, "prop", R, d);
        } else if (v.PropTypes !== void 0 && !Sn) {
          Sn = !0;
          var F = rt(v);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nc(d) {
      {
        for (var v = Object.keys(d.props), E = 0; E < v.length; E++) {
          var R = v[E];
          if (R !== "children" && R !== "key") {
            $t(d), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), $t(null);
            break;
          }
        }
        d.ref !== null && ($t(d), T("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function xo(d, v, E, R, F, _) {
      {
        var O = G(d);
        if (!O) {
          var V = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Qa(F);
          X ? V += X : V += go();
          var N;
          d === null ? N = "null" : Tn(d) ? N = "array" : d !== void 0 && d.$$typeof === e ? (N = "<" + (rt(d.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : N = typeof d, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, V);
        }
        var U = Za(d, v, E, F, _);
        if (U == null)
          return U;
        if (O) {
          var at = v.children;
          if (at !== void 0)
            if (R)
              if (Tn(at)) {
                for (var jt = 0; jt < at.length; jt++)
                  bo(at[jt], d);
                Object.freeze && Object.freeze(at);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bo(at, d);
        }
        return d === r ? nc(U) : ec(U), U;
      }
    }
    function rc(d, v, E) {
      return xo(d, v, E, !0);
    }
    function oc(d, v, E) {
      return xo(d, v, E, !1);
    }
    var ic = oc, sc = rc;
    te.Fragment = r, te.jsx = ic, te.jsxs = sc;
  }()), te;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = gc() : t.exports = yc();
})(mc);
const rn = he.Fragment, S = he.jsx, I = he.jsxs, vc = (t) => /* @__PURE__ */ I(
  xc,
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
), bc = hc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, xc = P.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${bc} 0.9s linear infinite;
`, wc = P.button.attrs((t) => ({
  children: t.loading ? /* @__PURE__ */ S(vc, { style: { margin: ".18rem 0" } }) : t.children
}))`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(t) => t.fullWidth ? "100%" : "250px"};
  min-width: 100px;
  height: 46px;
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
`, gr = P.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(t) => t.theme.cardBorder});
  background-color: ${(t) => t.theme.cardBackground};
`, yr = Mt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), on = Mt({});
function Tc() {
  return H(on).visualElement;
}
const xe = Mt(null), _t = typeof document < "u", se = _t ? ac : K, Ui = Mt({ strict: !1 });
function Ec(t, e, n, r) {
  const o = Tc(), s = H(Ui), i = H(xe), a = H(yr).reducedMotion, c = et();
  r = r || s.renderer, !c.current && r && (c.current = r(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const l = c.current;
  return se(() => {
    l && l.render();
  }), se(() => {
    l && l.animationState && l.animationState.animateChanges();
  }), se(() => () => l && l.notify("Unmount"), []), l;
}
function Ut(t) {
  return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Cc(t, e, n) {
  return Hn(
    (r) => {
      r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : Ut(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function pe(t) {
  return typeof t == "string" || Array.isArray(t);
}
function sn(t) {
  return typeof t == "object" && typeof t.start == "function";
}
const Sc = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function an(t) {
  return sn(t.animate) || Sc.some((e) => pe(t[e]));
}
function zi(t) {
  return !!(an(t) || t.variants);
}
function Pc(t, e) {
  if (an(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || pe(n) ? n : void 0,
      animate: pe(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Ac(t) {
  const { initial: e, animate: n } = Pc(t, H(on));
  return mt(() => ({ initial: e, animate: n }), [Co(e), Co(n)]);
}
function Co(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const xt = (t) => ({
  isEnabled: (e) => t.some((n) => !!e[n])
}), me = {
  measureLayout: xt(["layout", "layoutId", "drag"]),
  animation: xt([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: xt(["exit"]),
  drag: xt(["drag", "dragControls"]),
  focus: xt(["whileFocus"]),
  hover: xt(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: xt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: xt([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: xt([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function Rc(t) {
  for (const e in t)
    e === "projectionNodeConstructor" ? me.projectionNodeConstructor = t[e] : me[e].Component = t[e];
}
function cn(t) {
  const e = et(null);
  return e.current === null && (e.current = t()), e.current;
}
const ae = {
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
let kc = 1;
function Vc() {
  return cn(() => {
    if (ae.hasEverUpdated)
      return kc++;
  });
}
const vr = Mt({});
class Oc extends be.Component {
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
const Wi = Mt({}), Dc = Symbol.for("motionComponentSymbol");
function Lc({ preloadedFeatures: t, createVisualElement: e, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  t && Rc(t);
  function i(c, l) {
    const u = {
      ...H(yr),
      ...c,
      layoutId: Fc(c)
    }, { isStatic: f } = u;
    let h = null;
    const p = Ac(c), m = f ? void 0 : Vc(), g = o(c, f);
    if (!f && _t) {
      p.visualElement = Ec(s, g, u, e);
      const w = H(Ui).strict, x = H(Wi);
      p.visualElement && (h = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        w,
        t,
        m,
        n || me.projectionNodeConstructor,
        x
      ));
    }
    return k.createElement(
      Oc,
      { visualElement: p.visualElement, props: u },
      h,
      k.createElement(on.Provider, { value: p }, r(s, c, m, Cc(g, p.visualElement, l), g, f, p.visualElement))
    );
  }
  const a = cc(i);
  return a[Dc] = s, a;
}
function Fc({ layoutId: t }) {
  const e = H(vr).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Mc(t) {
  function e(r, o = {}) {
    return Lc(t(r, o));
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
const _c = [
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
function br(t) {
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
      !!(_c.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const ze = {};
function Bc(t) {
  Object.assign(ze, t);
}
const We = [
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
], Bt = new Set(We);
function Hi(t, { layout: e, layoutId: n }) {
  return Bt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!ze[t] || t === "opacity");
}
const gt = (t) => !!(t != null && t.getVelocity), Ic = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, $c = (t, e) => We.indexOf(t) - We.indexOf(e);
function jc({ transform: t, transformKeys: e }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  e.sort($c);
  for (const a of e)
    i += `${Ic[a] || a}(${t[a]}) `;
  return n && !t.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(t, o ? "" : i) : r && o && (i = "none"), i;
}
function qi(t) {
  return t.startsWith("--");
}
const Nc = (t, e) => e && typeof t == "number" ? e.transform(t) : t, qt = (t, e, n) => Math.min(Math.max(n, t), e), It = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ce = {
  ...It,
  transform: (t) => qt(0, 1, t)
}, Oe = {
  ...It,
  default: 1
}, le = (t) => Math.round(t * 1e5) / 1e5, ge = /(-)?([\d]*\.?[\d])+/g, qn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Uc = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function we(t) {
  return typeof t == "string";
}
const Te = (t) => ({
  test: (e) => we(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), St = Te("deg"), pt = Te("%"), A = Te("px"), zc = Te("vh"), Wc = Te("vw"), So = {
  ...pt,
  parse: (t) => pt.parse(t) / 100,
  transform: (t) => pt.transform(t * 100)
}, Po = {
  ...It,
  transform: Math.round
}, Gi = {
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
  rotate: St,
  rotateX: St,
  rotateY: St,
  rotateZ: St,
  scale: Oe,
  scaleX: Oe,
  scaleY: Oe,
  scaleZ: Oe,
  skew: St,
  skewX: St,
  skewY: St,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: ce,
  originX: So,
  originY: So,
  originZ: A,
  // Misc
  zIndex: Po,
  // SVG
  fillOpacity: ce,
  strokeOpacity: ce,
  numOctaves: Po
};
function xr(t, e, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: c } = t;
  a.length = 0;
  let l = !1, u = !1, f = !0;
  for (const h in e) {
    const p = e[h];
    if (qi(h)) {
      s[h] = p;
      continue;
    }
    const m = Gi[h], g = Nc(p, m);
    if (Bt.has(h)) {
      if (l = !0, i[h] = g, a.push(h), !f)
        continue;
      p !== (m.default || 0) && (f = !1);
    } else
      h.startsWith("origin") ? (u = !0, c[h] = g) : o[h] = g;
  }
  if (e.transform || (l || r ? o.transform = jc(t, n, f, r) : o.transform && (o.transform = "none")), u) {
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
function Yi(t, e, n) {
  for (const r in e)
    !gt(e[r]) && !Hi(r, n) && (t[r] = e[r]);
}
function Hc({ transformTemplate: t }, e, n) {
  return mt(() => {
    const r = wr();
    return xr(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function qc(t, e, n) {
  const r = t.style || {}, o = {};
  return Yi(o, r, t), Object.assign(o, Hc(t, e, n)), t.transformValues ? t.transformValues(o) : o;
}
function Gc(t, e, n) {
  const r = {}, o = qc(t, e, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Yc = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Kc = ["whileTap", "onTap", "onTapStart", "onTapCancel"], Xc = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Jc = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], Zc = /* @__PURE__ */ new Set([
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
  ...Jc,
  ...Kc,
  ...Yc,
  ...Xc
]);
function He(t) {
  return Zc.has(t);
}
let Ki = (t) => !He(t);
function Qc(t) {
  t && (Ki = (e) => e.startsWith("on") ? !He(e) : t(e));
}
try {
  Qc(require("@emotion/is-prop-valid").default);
} catch {
}
function tl(t, e, n) {
  const r = {};
  for (const o in t)
    (Ki(o) || n === !0 && He(o) || !e && !He(o) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
  return r;
}
function Ao(t, e, n) {
  return typeof t == "string" ? t : A.transform(e + n * t);
}
function el(t, e, n) {
  const r = Ao(e, t.x, t.width), o = Ao(n, t.y, t.height);
  return `${r} ${o}`;
}
const nl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, rl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ol(t, e, n = 1, r = 0, o = !0) {
  t.pathLength = 1;
  const s = o ? nl : rl;
  t[s.offset] = A.transform(-r);
  const i = A.transform(e), a = A.transform(n);
  t[s.array] = `${i} ${a}`;
}
function Tr(t, {
  attrX: e,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, u, f) {
  if (xr(t, c, l, f), u) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: p, dimensions: m } = t;
  h.transform && (m && (p.transform = h.transform), delete h.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = el(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && ol(h, s, i, a, !1);
}
const Xi = () => ({
  ...wr(),
  attrs: {}
}), Er = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function il(t, e, n, r) {
  const o = mt(() => {
    const s = Xi();
    return Tr(s, e, { enableHardwareAcceleration: !1 }, Er(r), t.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [e]);
  if (t.style) {
    const s = {};
    Yi(s, t.style, t), o.style = { ...s, ...o.style };
  }
  return o;
}
function sl(t = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const l = (br(n) ? il : Gc)(r, i, a, n), f = {
      ...tl(r, typeof n == "string", t),
      ...l,
      ref: s
    };
    return o && (f["data-projection-id"] = o), ji(n, f);
  };
}
const Cr = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Ji(t, { style: e, vars: n }, r, o) {
  Object.assign(t.style, e, o && o.getProjectionStyles(r));
  for (const s in n)
    t.style.setProperty(s, n[s]);
}
const Zi = /* @__PURE__ */ new Set([
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
function Qi(t, e, n, r) {
  Ji(t, e, void 0, r);
  for (const o in e.attrs)
    t.setAttribute(Zi.has(o) ? o : Cr(o), e.attrs[o]);
}
function Sr(t) {
  const { style: e } = t, n = {};
  for (const r in e)
    (gt(e[r]) || Hi(r, t)) && (n[r] = e[r]);
  return n;
}
function ts(t) {
  const e = Sr(t);
  for (const n in t)
    if (gt(t[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      e[r] = t[n];
    }
  return e;
}
function Pr(t, e, n, r = {}, o = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), e;
}
const qe = (t) => Array.isArray(t), al = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), cl = (t) => qe(t) ? t[t.length - 1] || 0 : t;
function Ie(t) {
  const e = gt(t) ? t.get() : t;
  return al(e) ? e.toValue() : e;
}
function ll({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, o, s) {
  const i = {
    latestValues: ul(r, o, s, t),
    renderState: e()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const es = (t) => (e, n) => {
  const r = H(on), o = H(xe), s = () => ll(t, e, r, o);
  return n ? s() : cn(s);
};
function ul(t, e, n, r) {
  const o = {}, s = r(t);
  for (const h in s)
    o[h] = Ie(s[h]);
  let { initial: i, animate: a } = t;
  const c = an(t), l = zi(t);
  e && l && !c && t.inherit !== !1 && (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? a : i;
  return f && typeof f != "boolean" && !sn(f) && (Array.isArray(f) ? f : [f]).forEach((p) => {
    const m = Pr(t, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: w, ...x } = m;
    for (const T in x) {
      let b = x[T];
      if (Array.isArray(b)) {
        const C = u ? b.length - 1 : 0;
        b = b[C];
      }
      b !== null && (o[T] = b);
    }
    for (const T in g)
      o[T] = g[T];
  }), o;
}
const fl = {
  useVisualState: es({
    scrapeMotionValuesFromProps: ts,
    createRenderState: Xi,
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
      Tr(n, r, { enableHardwareAcceleration: !1 }, Er(e.tagName), t.transformTemplate), Qi(e, n);
    }
  })
}, dl = {
  useVisualState: es({
    scrapeMotionValuesFromProps: Sr,
    createRenderState: wr
  })
};
function hl(t, { forwardMotionProps: e = !1 }, n, r, o) {
  return {
    ...br(t) ? fl : dl,
    preloadedFeatures: n,
    useRender: sl(e),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: t
  };
}
var B;
(function(t) {
  t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit";
})(B || (B = {}));
function ln(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
function Gn(t, e, n, r) {
  K(() => {
    const o = t.current;
    if (n && o)
      return ln(o, e, n, r);
  }, [t, e, n, r]);
}
function pl({ whileFocus: t, visualElement: e }) {
  const { animationState: n } = e, r = () => {
    n && n.setActive(B.Focus, !0);
  }, o = () => {
    n && n.setActive(B.Focus, !1);
  };
  Gn(e, "focus", t ? r : void 0), Gn(e, "blur", t ? o : void 0);
}
function ns(t) {
  return typeof PointerEvent < "u" && t instanceof PointerEvent ? t.pointerType === "mouse" : t instanceof MouseEvent;
}
function rs(t) {
  return !!t.touches;
}
function ml(t) {
  return (e) => {
    const n = e instanceof MouseEvent;
    (!n || n && e.button === 0) && t(e);
  };
}
const gl = { pageX: 0, pageY: 0 };
function yl(t, e = "page") {
  const r = t.touches[0] || t.changedTouches[0] || gl;
  return {
    x: r[e + "X"],
    y: r[e + "Y"]
  };
}
function vl(t, e = "page") {
  return {
    x: t[e + "X"],
    y: t[e + "Y"]
  };
}
function Ar(t, e = "page") {
  return {
    point: rs(t) ? yl(t, e) : vl(t, e)
  };
}
const os = (t, e = !1) => {
  const n = (r) => t(r, Ar(r));
  return e ? ml(n) : n;
}, bl = () => _t && window.onpointerdown === null, xl = () => _t && window.ontouchstart === null, wl = () => _t && window.onmousedown === null, Tl = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, El = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function is(t) {
  return bl() ? t : xl() ? El[t] : wl() ? Tl[t] : t;
}
function Ht(t, e, n, r) {
  return ln(t, is(e), os(n, e === "pointerdown"), r);
}
function Ge(t, e, n, r) {
  return Gn(t, is(e), n && os(n, e === "pointerdown"), r);
}
function ss(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const Ro = ss("dragHorizontal"), ko = ss("dragVertical");
function as(t) {
  let e = !1;
  if (t === "y")
    e = ko();
  else if (t === "x")
    e = Ro();
  else {
    const n = Ro(), r = ko();
    n && r ? e = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return e;
}
function cs() {
  const t = as(!0);
  return t ? (t(), !1) : !0;
}
function Vo(t, e, n) {
  return (r, o) => {
    !ns(r) || cs() || (t.animationState && t.animationState.setActive(B.Hover, e), n && n(r, o));
  };
}
function Cl({ onHoverStart: t, onHoverEnd: e, whileHover: n, visualElement: r }) {
  Ge(r, "pointerenter", t || n ? Vo(r, !0, t) : void 0, { passive: !t }), Ge(r, "pointerleave", e || n ? Vo(r, !1, e) : void 0, { passive: !e });
}
const ls = (t, e) => e ? t === e ? !0 : ls(t, e.parentElement) : !1;
function Rr(t) {
  return K(() => () => t(), []);
}
const Sl = (t, e) => (n) => e(t(n)), un = (...t) => t.reduce(Sl);
function Pl({ onTap: t, onTapStart: e, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = t || e || n || r, i = et(!1), a = et(null), c = {
    passive: !(e || t || n || p)
  };
  function l() {
    a.current && a.current(), a.current = null;
  }
  function u() {
    return l(), i.current = !1, o.animationState && o.animationState.setActive(B.Tap, !1), !cs();
  }
  function f(m, g) {
    u() && (ls(o.current, m.target) ? t && t(m, g) : n && n(m, g));
  }
  function h(m, g) {
    u() && n && n(m, g);
  }
  function p(m, g) {
    l(), !i.current && (i.current = !0, a.current = un(Ht(window, "pointerup", f, c), Ht(window, "pointercancel", h, c)), o.animationState && o.animationState.setActive(B.Tap, !0), e && e(m, g));
  }
  Ge(o, "pointerdown", s ? p : void 0, c), Rr(l);
}
const Oo = "production", kr = typeof process > "u" || process.env === void 0 ? Oo : process.env.NODE_ENV || Oo, Do = /* @__PURE__ */ new Set();
function Vr(t, e, n) {
  t || Do.has(e) || (console.warn(e), n && console.warn(n), Do.add(e));
}
const Yn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Al = (t) => {
  const e = Yn.get(t.target);
  e && e(t);
}, Rl = (t) => {
  t.forEach(Al);
};
function kl({ root: t, ...e }) {
  const n = t || document;
  An.has(n) || An.set(n, {});
  const r = An.get(n), o = JSON.stringify(e);
  return r[o] || (r[o] = new IntersectionObserver(Rl, { root: t, ...e })), r[o];
}
function Vl(t, e, n) {
  const r = kl(e);
  return Yn.set(t, n), r.observe(t), () => {
    Yn.delete(t), r.unobserve(t);
  };
}
function Ol({ visualElement: t, whileInView: e, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = et({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(e || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? Fl : Ll)(i, s.current, t, o);
}
const Dl = {
  some: 0,
  all: 1
};
function Ll(t, e, n, { root: r, margin: o, amount: s = "some", once: i }) {
  K(() => {
    if (!t || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Dl[s]
    }, c = (l) => {
      const { isIntersecting: u } = l;
      if (e.isInView === u || (e.isInView = u, i && !u && e.hasEnteredView))
        return;
      u && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(B.InView, u);
      const f = n.getProps(), h = u ? f.onViewportEnter : f.onViewportLeave;
      h && h(l);
    };
    return Vl(n.current, a, c);
  }, [t, r, o, s]);
}
function Fl(t, e, n, { fallback: r = !0 }) {
  K(() => {
    !t || !r || (kr !== "production" && Vr(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      e.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(B.InView, !0);
    }));
  }, [t]);
}
const At = (t) => (e) => (t(e), null), Ml = {
  inView: At(Ol),
  tap: At(Pl),
  focus: At(pl),
  hover: At(Cl)
};
function us() {
  const t = H(xe);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t, o = mr();
  return K(() => r(o), []), !e && n ? [!1, () => n && n(o)] : [!0];
}
function fs(t, e) {
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
const _l = (t) => /^\-?\d*\.?\d+$/.test(t), Bl = (t) => /^0[^.\s]+$/.test(t), wt = {
  delta: 0,
  timestamp: 0
}, ds = 1 / 60 * 1e3, Il = typeof performance < "u" ? () => performance.now() : () => Date.now(), hs = typeof window < "u" ? (t) => window.requestAnimationFrame(t) : (t) => setTimeout(() => t(Il()), ds);
function $l(t) {
  let e = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, l = !1, u = !1) => {
      const f = u && o, h = f ? e : n;
      return l && i.add(c), h.indexOf(c) === -1 && (h.push(c), f && o && (r = e.length)), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      const l = n.indexOf(c);
      l !== -1 && n.splice(l, 1), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (o) {
        s = !0;
        return;
      }
      if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
        for (let l = 0; l < r; l++) {
          const u = e[l];
          u(c), i.has(u) && (a.schedule(u), t());
        }
      o = !1, s && (s = !1, a.process(c));
    }
  };
  return a;
}
const jl = 40;
let Kn = !0, ye = !1, Xn = !1;
const Ee = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], fn = Ee.reduce((t, e) => (t[e] = $l(() => ye = !0), t), {}), nt = Ee.reduce((t, e) => {
  const n = fn[e];
  return t[e] = (r, o = !1, s = !1) => (ye || Ul(), n.schedule(r, o, s)), t;
}, {}), Rt = Ee.reduce((t, e) => (t[e] = fn[e].cancel, t), {}), Rn = Ee.reduce((t, e) => (t[e] = () => fn[e].process(wt), t), {}), Nl = (t) => fn[t].process(wt), ps = (t) => {
  ye = !1, wt.delta = Kn ? ds : Math.max(Math.min(t - wt.timestamp, jl), 1), wt.timestamp = t, Xn = !0, Ee.forEach(Nl), Xn = !1, ye && (Kn = !1, hs(ps));
}, Ul = () => {
  ye = !0, Kn = !0, Xn || hs(ps);
};
function Or(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Dr(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Lr {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Or(this.subscriptions, e), () => Dr(this.subscriptions, e);
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
function Fr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const zl = (t) => !isNaN(parseFloat(t));
class Wl {
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
      const { delta: s, timestamp: i } = wt;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, nt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => nt.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = zl(this.current), this.owner = n.owner;
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
    return this.events[e] || (this.events[e] = new Lr()), this.events[e].add(n);
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
      Fr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Gt(t, e) {
  return new Wl(t, e);
}
const Mr = (t, e) => (n) => !!(we(n) && Uc.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), ms = (t, e, n) => (r) => {
  if (!we(r))
    return r;
  const [o, s, i, a] = r.match(ge);
  return {
    [t]: parseFloat(o),
    [e]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Hl = (t) => qt(0, 255, t), kn = {
  ...It,
  transform: (t) => Math.round(Hl(t))
}, Ft = {
  test: Mr("rgb", "red"),
  parse: ms("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + kn.transform(t) + ", " + kn.transform(e) + ", " + kn.transform(n) + ", " + le(ce.transform(r)) + ")"
};
function ql(t) {
  let e = "", n = "", r = "", o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, r += r, o += o), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Jn = {
  test: Mr("#"),
  parse: ql,
  transform: Ft.transform
}, zt = {
  test: Mr("hsl", "hue"),
  parse: ms("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + pt.transform(le(e)) + ", " + pt.transform(le(n)) + ", " + le(ce.transform(r)) + ")"
}, J = {
  test: (t) => Ft.test(t) || Jn.test(t) || zt.test(t),
  parse: (t) => Ft.test(t) ? Ft.parse(t) : zt.test(t) ? zt.parse(t) : Jn.parse(t),
  transform: (t) => we(t) ? t : t.hasOwnProperty("red") ? Ft.transform(t) : zt.transform(t)
}, gs = "${c}", ys = "${n}";
function Gl(t) {
  var e, n;
  return isNaN(t) && we(t) && (((e = t.match(ge)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(qn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Ye(t) {
  typeof t == "number" && (t = `${t}`);
  const e = [];
  let n = 0, r = 0;
  const o = t.match(qn);
  o && (n = o.length, t = t.replace(qn, gs), e.push(...o.map(J.parse)));
  const s = t.match(ge);
  return s && (r = s.length, t = t.replace(ge, ys), e.push(...s.map(It.parse))), { values: e, numColors: n, numNumbers: r, tokenised: t };
}
function vs(t) {
  return Ye(t).values;
}
function bs(t) {
  const { values: e, numColors: n, tokenised: r } = Ye(t), o = e.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? gs : ys, a < n ? J.transform(s[a]) : le(s[a]));
    return i;
  };
}
const Yl = (t) => typeof t == "number" ? 0 : t;
function Kl(t) {
  const e = vs(t);
  return bs(t)(e.map(Yl));
}
const kt = { test: Gl, parse: vs, createTransformer: bs, getAnimatableNone: Kl }, Xl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(ge) || [];
  if (!r)
    return t;
  const o = n.replace(r, "");
  let s = Xl.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + o + ")";
}
const Zl = /([a-z-]*)\(.*?\)/g, Zn = {
  ...kt,
  getAnimatableNone: (t) => {
    const e = t.match(Zl);
    return e ? e.map(Jl).join(" ") : t;
  }
}, Ql = {
  ...Gi,
  // Color props
  color: J,
  backgroundColor: J,
  outlineColor: J,
  fill: J,
  stroke: J,
  // Border props
  borderColor: J,
  borderTopColor: J,
  borderRightColor: J,
  borderBottomColor: J,
  borderLeftColor: J,
  filter: Zn,
  WebkitFilter: Zn
}, _r = (t) => Ql[t];
function Br(t, e) {
  var n;
  let r = _r(t);
  return r !== Zn && (r = kt), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, e);
}
const xs = (t) => (e) => e.test(t), tu = {
  test: (t) => t === "auto",
  parse: (t) => t
}, ws = [It, A, pt, St, Wc, zc, tu], ee = (t) => ws.find(xs(t)), eu = [...ws, J, kt], nu = (t) => eu.find(xs(t));
function ru(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.get()), e;
}
function ou(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.getVelocity()), e;
}
function dn(t, e, n) {
  const r = t.getProps();
  return Pr(r, e, n !== void 0 ? n : r.custom, ru(t), ou(t));
}
function iu(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Gt(n));
}
function su(t, e) {
  const n = dn(t, e);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = cl(s[i]);
    iu(t, i, a);
  }
}
function au(t, e, n) {
  var r, o;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const c = s[a], l = e[c];
      let u = null;
      Array.isArray(l) && (u = l[0]), u === null && (u = (o = (r = n[c]) !== null && r !== void 0 ? r : t.readValue(c)) !== null && o !== void 0 ? o : e[c]), u != null && (typeof u == "string" && (_l(u) || Bl(u)) ? u = parseFloat(u) : !nu(u) && kt.test(l) && (u = Br(c, l)), t.addValue(c, Gt(u, { owner: t })), n[c] === void 0 && (n[c] = u), u !== null && t.setBaseTarget(c, u));
    }
}
function cu(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function lu(t, e, n) {
  var r;
  const o = {};
  for (const s in t) {
    const i = cu(s, e);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function Ke(t) {
  return !!(gt(t) && t.add);
}
const uu = (t, e) => `${t}: ${e}`;
function fu(t, e) {
  const { MotionAppearAnimations: n } = window, r = uu(t, Bt.has(e) ? "transform" : e), o = n && n.get(r);
  return o ? (nt.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const du = "framerAppearId", hu = "data-" + Cr(du);
var hn = function() {
}, ft = function() {
};
process.env.NODE_ENV !== "production" && (hn = function(t, e) {
  !t && typeof console < "u" && console.warn(e);
}, ft = function(t, e) {
  if (!t)
    throw new Error(e);
});
const $e = (t) => t * 1e3, pu = {
  current: !1
}, Ir = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, $r = (t) => (e) => 1 - t(1 - e), jr = (t) => t * t, mu = $r(jr), Nr = Ir(jr), j = (t, e, n) => -n * t + n * e + t;
function Vn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function gu({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!e)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    o = Vn(c, a, t + 1 / 3), s = Vn(c, a, t), i = Vn(c, a, t - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const On = (t, e, n) => {
  const r = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - r) + r));
}, yu = [Jn, Ft, zt], vu = (t) => yu.find((e) => e.test(t));
function Lo(t) {
  const e = vu(t);
  ft(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === zt && (n = gu(n)), n;
}
const Ts = (t, e) => {
  const n = Lo(t), r = Lo(e), o = { ...n };
  return (s) => (o.red = On(n.red, r.red, s), o.green = On(n.green, r.green, s), o.blue = On(n.blue, r.blue, s), o.alpha = j(n.alpha, r.alpha, s), Ft.transform(o));
};
function Es(t, e) {
  return typeof t == "number" ? (n) => j(t, e, n) : J.test(t) ? Ts(t, e) : Ss(t, e);
}
const Cs = (t, e) => {
  const n = [...t], r = n.length, o = t.map((s, i) => Es(s, e[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, bu = (t, e) => {
  const n = { ...t, ...e }, r = {};
  for (const o in n)
    t[o] !== void 0 && e[o] !== void 0 && (r[o] = Es(t[o], e[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, Ss = (t, e) => {
  const n = kt.createTransformer(e), r = Ye(t), o = Ye(e);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? un(Cs(r.values, o.values), n) : (hn(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? e : t}`);
}, Xe = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
}, Fo = (t, e) => (n) => j(t, e, n);
function xu(t) {
  return typeof t == "number" ? Fo : typeof t == "string" ? J.test(t) ? Ts : Ss : Array.isArray(t) ? Cs : typeof t == "object" ? bu : Fo;
}
function wu(t, e, n) {
  const r = [], o = n || xu(t[0]), s = t.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(t[i], t[i + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[i] : e;
      a = un(c, a);
    }
    r.push(a);
  }
  return r;
}
function Ps(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = t.length;
  ft(s === e.length, "Both input and output ranges must be the same length"), ft(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const i = wu(e, r, o), a = i.length, c = (l) => {
    let u = 0;
    if (a > 1)
      for (; u < t.length - 2 && !(l < t[u + 1]); u++)
        ;
    const f = Xe(t[u], t[u + 1], l);
    return i[u](f);
  };
  return n ? (l) => c(qt(t[0], t[s - 1], l)) : c;
}
const Ur = (t) => t, As = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Tu = 1e-7, Eu = 12;
function Cu(t, e, n, r, o) {
  let s, i, a = 0;
  do
    i = e + (n - e) / 2, s = As(i, r, o) - t, s > 0 ? n = i : e = i;
  while (Math.abs(s) > Tu && ++a < Eu);
  return i;
}
function Rs(t, e, n, r) {
  if (t === e && n === r)
    return Ur;
  const o = (s) => Cu(s, 0, 1, t, n);
  return (s) => s === 0 || s === 1 ? s : As(o(s), e, r);
}
const ks = (t) => 1 - Math.sin(Math.acos(t)), zr = $r(ks), Su = Ir(zr), Vs = Rs(0.33, 1.53, 0.69, 0.99), Wr = $r(Vs), Pu = Ir(Wr), Au = (t) => (t *= 2) < 1 ? 0.5 * Wr(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Mo = {
  linear: Ur,
  easeIn: jr,
  easeInOut: Nr,
  easeOut: mu,
  circIn: ks,
  circInOut: Su,
  circOut: zr,
  backIn: Wr,
  backInOut: Pu,
  backOut: Vs,
  anticipate: Au
}, _o = (t) => {
  if (Array.isArray(t)) {
    ft(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, o] = t;
    return Rs(e, n, r, o);
  } else if (typeof t == "string")
    return ft(Mo[t] !== void 0, `Invalid easing type '${t}'`), Mo[t];
  return t;
}, Ru = (t) => Array.isArray(t) && typeof t[0] != "number";
function ku(t, e) {
  return t.map(() => e || Nr).splice(0, t.length - 1);
}
function Vu(t) {
  const e = t.length;
  return t.map((n, r) => r !== 0 ? r / (e - 1) : 0);
}
function Ou(t, e) {
  return t.map((n) => n * e);
}
function Je({ keyframes: t, ease: e = Nr, times: n, duration: r = 300 }) {
  t = [...t];
  const o = Je[0], s = Ru(e) ? e.map(_o) : _o(e), i = { done: !1, value: o }, a = Ou(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === Je.length ? n : Vu(t),
    r
  );
  function c() {
    return Ps(a, t, {
      ease: Array.isArray(s) ? s : ku(t, s)
    });
  }
  let l = c();
  return {
    next: (u) => (i.value = l(u), i.done = u >= r, i),
    flipTarget: () => {
      t.reverse(), l = c();
    }
  };
}
const Dn = 1e-3, Du = 0.01, Bo = 10, Lu = 0.05, Fu = 1;
function Mu({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  hn(t <= Bo * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - e;
  i = qt(Lu, Fu, i), t = qt(Du, Bo, t / 1e3), i < 1 ? (o = (l) => {
    const u = l * i, f = u * t, h = u - n, p = Qn(l, i), m = Math.exp(-f);
    return Dn - h / p * m;
  }, s = (l) => {
    const f = l * i * t, h = f * n + n, p = Math.pow(i, 2) * Math.pow(l, 2) * t, m = Math.exp(-f), g = Qn(Math.pow(l, 2), i);
    return (-o(l) + Dn > 0 ? -1 : 1) * ((h - p) * m) / g;
  }) : (o = (l) => {
    const u = Math.exp(-l * t), f = (l - n) * t + 1;
    return -Dn + u * f;
  }, s = (l) => {
    const u = Math.exp(-l * t), f = (n - l) * (t * t);
    return u * f;
  });
  const a = 5 / t, c = Bu(o, s, a);
  if (t = t * 1e3, isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const l = Math.pow(c, 2) * r;
    return {
      stiffness: l,
      damping: i * 2 * Math.sqrt(r * l),
      duration: t
    };
  }
}
const _u = 12;
function Bu(t, e, n) {
  let r = n;
  for (let o = 1; o < _u; o++)
    r = r - t(r) / e(r);
  return r;
}
function Qn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Iu = ["duration", "bounce"], $u = ["stiffness", "damping", "mass"];
function Io(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ju(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Io(t, $u) && Io(t, Iu)) {
    const n = Mu(t);
    e = {
      ...e,
      ...n,
      velocity: 0,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
const Nu = 5;
function Os({ keyframes: t, restSpeed: e = 2, restDelta: n = 0.01, ...r }) {
  let o = t[0], s = t[t.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: c, mass: l, velocity: u, duration: f, isResolvedFromDuration: h } = ju(r);
  let p = Uu, m = u ? -(u / 1e3) : 0;
  const g = c / (2 * Math.sqrt(a * l));
  function w() {
    const x = s - o, T = Math.sqrt(a / l) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const b = Qn(T, g);
      p = (C) => {
        const L = Math.exp(-g * T * C);
        return s - L * ((m + g * T * x) / b * Math.sin(b * C) + x * Math.cos(b * C));
      };
    } else if (g === 1)
      p = (b) => s - Math.exp(-T * b) * (x + (m + T * x) * b);
    else {
      const b = T * Math.sqrt(g * g - 1);
      p = (C) => {
        const L = Math.exp(-g * T * C), M = Math.min(b * C, 300);
        return s - L * ((m + g * T * x) * Math.sinh(M) + b * x * Math.cosh(M)) / b;
      };
    }
  }
  return w(), {
    next: (x) => {
      const T = p(x);
      if (h)
        i.done = x >= f;
      else {
        let b = m;
        if (x !== 0)
          if (g < 1) {
            const M = Math.max(0, x - Nu);
            b = Fr(T - p(M), x - M);
          } else
            b = 0;
        const C = Math.abs(b) <= e, L = Math.abs(s - T) <= n;
        i.done = C && L;
      }
      return i.value = i.done ? s : T, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], w();
    }
  };
}
Os.needsInterpolation = (t, e) => typeof t == "string" || typeof e == "string";
const Uu = (t) => 0;
function zu({
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
  let c = n * e;
  const l = i + c, u = s === void 0 ? l : s(l);
  return u !== l && (c = u - i), {
    next: (f) => {
      const h = -c * Math.exp(-f / r);
      return a.done = !(h > o || h < -o), a.value = a.done ? u : u + h, a;
    },
    flipTarget: () => {
    }
  };
}
const Wu = {
  decay: zu,
  keyframes: Je,
  tween: Je,
  spring: Os
};
function Ds(t, e, n = 0) {
  return t - e - n;
}
function Hu(t, e = 0, n = 0, r = !0) {
  return r ? Ds(e + -t, e, n) : e - (t - e) + n;
}
function qu(t, e, n, r) {
  return r ? t >= e + n : t <= -n;
}
const Gu = (t) => {
  const e = ({ delta: n }) => t(n);
  return {
    start: () => nt.update(e, !0),
    stop: () => Rt.update(e)
  };
};
function Ze({ duration: t, driver: e = Gu, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: c, onStop: l, onComplete: u, onRepeat: f, onUpdate: h, type: p = "keyframes", ...m }) {
  var g, w;
  let x, T = 0, b = t, C, L = !1, M = !0, q;
  const Z = Wu[i.length > 2 ? "keyframes" : p], Q = i[0], G = i[i.length - 1];
  !((w = (g = Z).needsInterpolation) === null || w === void 0) && w.call(g, Q, G) && (q = Ps([0, 100], [Q, G], {
    clamp: !1
  }), i = [0, 100]);
  const lt = Z({
    ...m,
    duration: t,
    keyframes: i
  });
  function Vt() {
    T++, o === "reverse" ? (M = T % 2 === 0, n = Hu(n, b, s, M)) : (n = Ds(n, b, s), o === "mirror" && lt.flipTarget()), L = !1, f && f();
  }
  function rt() {
    x.stop(), u && u();
  }
  function ot(tt) {
    if (M || (tt = -tt), n += tt, !L) {
      const vt = lt.next(Math.max(0, n));
      C = vt.value, q && (C = q(C)), L = M ? vt.done : n <= 0;
    }
    h && h(C), L && (T === 0 && (b = b !== void 0 ? b : n), T < r ? qu(n, b, s, M) && Vt() : rt());
  }
  function $() {
    c && c(), x = e(ot), x.start();
  }
  return a && $(), {
    stop: () => {
      l && l(), x.stop();
    },
    sample: (tt) => lt.next(Math.max(0, tt))
  };
}
function Yu(t) {
  return !t || // Default easing
  Array.isArray(t) || // Bezier curve
  typeof t == "string" && Ls[t];
}
const oe = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, Ls = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: oe([0, 0.65, 0.55, 1]),
  circOut: oe([0.55, 0, 1, 0.45]),
  backIn: oe([0.31, 0.01, 0.66, -0.59]),
  backOut: oe([0.33, 1.53, 0.69, 0.99])
};
function Ku(t) {
  if (t)
    return Array.isArray(t) ? oe(t) : Ls[t];
}
function Xu(t, e, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: c } = {}) {
  return t.animate({ [e]: n, offset: c }, {
    delay: r,
    duration: o,
    easing: Ku(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const De = 10;
function Ju(t, e, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: c } = o;
  if (o.type === "spring" || !Yu(o.ease)) {
    const u = Ze(o);
    let f = { done: !1, value: s[0] };
    const h = [];
    let p = 0;
    for (; !f.done; )
      f = u.sample(p), h.push(f.value), p += De;
    s = h, i = p - De, c = "linear";
  }
  const l = Xu(t.owner.current, e, s, {
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
  return l.onfinish = () => {
    t.set(s[s.length - 1]), r && r();
  }, () => {
    const { currentTime: u } = l;
    if (u) {
      const f = Ze(o);
      t.setWithVelocity(f.sample(u - De).value, f.sample(u).value, De);
    }
    nt.update(() => l.cancel());
  };
}
function Fs(t, e) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= e && (Rt.read(r), t(s - e));
  };
  return nt.read(r, !0), () => Rt.read(r);
}
function Zu({ keyframes: t, elapsed: e, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(t[t.length - 1]), r && r(), () => {
  });
  return e ? Fs(o, -e) : o();
}
function Qu({ keyframes: t, velocity: e = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: c = 1, modifyTarget: l, driver: u, onUpdate: f, onComplete: h, onStop: p }) {
  const m = t[0];
  let g;
  function w(C) {
    return n !== void 0 && C < n || r !== void 0 && C > r;
  }
  function x(C) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - C) < Math.abs(r - C) ? n : r;
  }
  function T(C) {
    g == null || g.stop(), g = Ze({
      keyframes: [0, 1],
      velocity: 0,
      ...C,
      driver: u,
      onUpdate: (L) => {
        var M;
        f == null || f(L), (M = C.onUpdate) === null || M === void 0 || M.call(C, L);
      },
      onComplete: h,
      onStop: p
    });
  }
  function b(C) {
    T({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: c,
      ...C
    });
  }
  if (w(m))
    b({
      velocity: e,
      keyframes: [m, x(m)]
    });
  else {
    let C = o * e + m;
    typeof l < "u" && (C = l(C));
    const L = x(C), M = L === n ? -1 : 1;
    let q, Z;
    const Q = (G) => {
      q = Z, Z = G, e = Fr(G - q, wt.delta), (M === 1 && G > L || M === -1 && G < L) && b({ keyframes: [G, L], velocity: e });
    };
    T({
      type: "decay",
      keyframes: [m, 0],
      velocity: e,
      timeConstant: s,
      power: o,
      restDelta: c,
      modifyTarget: l,
      onUpdate: w(C) ? Q : void 0
    });
  }
  return {
    stop: () => g == null ? void 0 : g.stop()
  };
}
const Ot = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}), Le = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ln = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), tf = {
  type: "keyframes",
  duration: 0.8
}, $o = {
  x: Ot,
  y: Ot,
  z: Ot,
  rotate: Ot,
  rotateX: Ot,
  rotateY: Ot,
  rotateZ: Ot,
  scaleX: Le,
  scaleY: Le,
  scale: Le,
  opacity: Ln,
  backgroundColor: Ln,
  color: Ln,
  default: Le
}, ef = (t, { keyframes: e }) => e.length > 2 ? tf : ($o[t] || $o.default)(e[1]), tr = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
kt.test(e) && // And it contains numbers and/or colors
!e.startsWith("url("));
function nf({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: c, ...l }) {
  return !!Object.keys(l).length;
}
function jo(t) {
  return t === 0 || typeof t == "string" && parseFloat(t) === 0 && t.indexOf(" ") === -1;
}
function No(t) {
  return typeof t == "number" ? 0 : Br("", t);
}
function Ms(t, e) {
  return t[e] || t.default || t;
}
function rf(t, e, n, r) {
  const o = tr(e, n);
  let s = r.from !== void 0 ? r.from : t.get();
  return s === "none" && o && typeof n == "string" ? s = Br(e, n) : jo(s) && typeof n == "string" ? s = No(n) : !Array.isArray(n) && jo(n) && typeof s == "string" && (n = No(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const Uo = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Fn = {}, _s = {};
for (const t in Uo)
  _s[t] = () => (Fn[t] === void 0 && (Fn[t] = Uo[t]()), Fn[t]);
const of = /* @__PURE__ */ new Set(["opacity"]), Hr = (t, e, n, r = {}) => (o) => {
  const s = Ms(r, t) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - $e(i);
  const c = rf(e, t, n, s), l = c[0], u = c[c.length - 1], f = tr(t, l), h = tr(t, u);
  hn(f === h, `You are trying to animate ${t} from "${l}" to "${u}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${u} via the \`style\` property.`);
  let p = {
    keyframes: c,
    velocity: e.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (x) => {
      e.set(x), s.onUpdate && s.onUpdate(x);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!f || !h || pu.current || s.type === !1)
    return Zu(p);
  if (s.type === "inertia") {
    const x = Qu(p);
    return () => x.stop();
  }
  nf(s) || (p = {
    ...p,
    ...ef(t, p)
  }), p.duration && (p.duration = $e(p.duration)), p.repeatDelay && (p.repeatDelay = $e(p.repeatDelay));
  const m = e.owner, g = m && m.current;
  if (_s.waapi() && of.has(t) && !p.repeatDelay && p.repeatType !== "mirror" && p.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return Ju(e, t, p);
  {
    const x = Ze(p);
    return () => x.stop();
  }
};
function sf(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const o = e.map((s) => er(t, s, n));
    r = Promise.all(o);
  } else if (typeof e == "string")
    r = er(t, e, n);
  else {
    const o = typeof e == "function" ? dn(t, e, n.custom) : e;
    r = Bs(t, o, n);
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
function er(t, e, n = {}) {
  var r;
  const o = dn(t, e, n.custom);
  let { transition: s = t.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Bs(t, o, n) : () => Promise.resolve(), a = !((r = t.variantChildren) === null || r === void 0) && r.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: h } = s;
    return af(t, e, u + l, f, h, n);
  } : () => Promise.resolve(), { when: c } = s;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [i, a] : [a, i];
    return l().then(u);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Bs(t, e, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = t.getDefaultTransition(), transitionEnd: a, ...c } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  r && (i = r);
  const u = [], f = o && ((s = t.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const h in c) {
    const p = t.getValue(h), m = c[h];
    if (!p || m === void 0 || f && lf(f, h))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (t.shouldReduceMotion && Bt.has(h) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !p.hasAnimated) {
      const x = t.getProps()[hu];
      x && (g.elapsed = fu(x, h));
    }
    let w = p.start(Hr(h, p, m, g));
    Ke(l) && (l.add(h), w = w.then(() => l.remove(h))), u.push(w);
  }
  return Promise.all(u).then(() => {
    a && su(t, a);
  });
}
function af(t, e, n = 0, r = 0, o = 1, s) {
  const i = [], a = (t.variantChildren.size - 1) * r, c = o === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return Array.from(t.variantChildren).sort(cf).forEach((l, u) => {
    i.push(er(l, e, {
      ...s,
      delay: n + c(u)
    }).then(() => l.notify("AnimationComplete", e)));
  }), Promise.all(i);
}
function cf(t, e) {
  return t.sortNodePosition(e);
}
function lf({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
const qr = [
  B.Animate,
  B.InView,
  B.Focus,
  B.Hover,
  B.Tap,
  B.Drag,
  B.Exit
], uf = [...qr].reverse(), ff = qr.length;
function df(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => sf(t, n, r)));
}
function hf(t) {
  let e = df(t);
  const n = mf();
  let r = !0;
  const o = (c, l) => {
    const u = dn(t, l);
    if (u) {
      const { transition: f, transitionEnd: h, ...p } = u;
      c = { ...c, ...p, ...h };
    }
    return c;
  };
  function s(c) {
    e = c(t);
  }
  function i(c, l) {
    const u = t.getProps(), f = t.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let x = 0; x < ff; x++) {
      const T = uf[x], b = n[T], C = u[T] !== void 0 ? u[T] : f[T], L = pe(C), M = T === l ? b.isActive : null;
      M === !1 && (g = x);
      let q = C === f[T] && C !== u[T] && L;
      if (q && r && t.manuallyAnimateOnMount && (q = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !C && !b.prevProp || // Or if the prop doesn't define an animation
      sn(C) || typeof C == "boolean")
        continue;
      const Z = pf(b.prevProp, C);
      let Q = Z || // If we're making this variant active, we want to always make it active
      T === l && b.isActive && !q && L || // If we removed a higher-priority variant (i is in reverse order)
      x > g && L;
      const G = Array.isArray(C) ? C : [C];
      let lt = G.reduce(o, {});
      M === !1 && (lt = {});
      const { prevResolvedValues: Vt = {} } = b, rt = {
        ...Vt,
        ...lt
      }, ot = ($) => {
        Q = !0, p.delete($), b.needsAnimating[$] = !0;
      };
      for (const $ in rt) {
        const tt = lt[$], vt = Vt[$];
        m.hasOwnProperty($) || (tt !== vt ? qe(tt) && qe(vt) ? !fs(tt, vt) || Z ? ot($) : b.protectedKeys[$] = !0 : tt !== void 0 ? ot($) : p.add($) : tt !== void 0 && p.has($) ? ot($) : b.protectedKeys[$] = !0);
      }
      b.prevProp = C, b.prevResolvedValues = lt, b.isActive && (m = { ...m, ...lt }), r && t.blockInitialAnimation && (Q = !1), Q && !q && h.push(...G.map(($) => ({
        animation: $,
        options: { type: T, ...c }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((T) => {
        const b = t.getBaseTarget(T);
        b !== void 0 && (x[T] = b);
      }), h.push({ animation: x });
    }
    let w = !!h.length;
    return r && u.initial === !1 && !t.manuallyAnimateOnMount && (w = !1), r = !1, w ? e(h) : Promise.resolve();
  }
  function a(c, l, u) {
    var f;
    if (n[c].isActive === l)
      return Promise.resolve();
    (f = t.variantChildren) === null || f === void 0 || f.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(c, l);
    }), n[c].isActive = l;
    const h = i(u, c);
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
function pf(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !fs(e, t) : !1;
}
function Dt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function mf() {
  return {
    [B.Animate]: Dt(!0),
    [B.InView]: Dt(),
    [B.Hover]: Dt(),
    [B.Tap]: Dt(),
    [B.Drag]: Dt(),
    [B.Focus]: Dt(),
    [B.Exit]: Dt()
  };
}
const gf = {
  animation: At(({ visualElement: t, animate: e }) => {
    t.animationState || (t.animationState = hf(t)), sn(e) && K(() => e.subscribe(t), [e]);
  }),
  exit: At((t) => {
    const { custom: e, visualElement: n } = t, [r, o] = us(), s = H(xe);
    K(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(B.Exit, !r, {
        custom: s && s.custom || e
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, zo = (t, e) => Math.abs(t - e);
function yf(t, e) {
  const n = zo(t.x, e.x), r = zo(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Is {
  constructor(e, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const l = _n(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, f = yf(l.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !f)
        return;
      const { point: h } = l, { timestamp: p } = wt;
      this.history.push({ ...h, timestamp: p });
      const { onStart: m, onMove: g } = this.handlers;
      u || (m && m(this.lastMoveEvent, l), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, l);
    }, this.handlePointerMove = (l, u) => {
      if (this.lastMoveEvent = l, this.lastMoveEventInfo = Mn(u, this.transformPagePoint), ns(l) && l.buttons === 0) {
        this.handlePointerUp(l, u);
        return;
      }
      nt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (l, u) => {
      this.end();
      const { onEnd: f, onSessionEnd: h } = this.handlers, p = _n(Mn(u, this.transformPagePoint), this.history);
      this.startEvent && f && f(l, p), h && h(l, p);
    }, rs(e) && e.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Ar(e), s = Mn(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = wt;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: c } = n;
    c && c(e, _n(s, this.history)), this.removeListeners = un(Ht(window, "pointermove", this.handlePointerMove), Ht(window, "pointerup", this.handlePointerUp), Ht(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Rt.update(this.updatePoint);
  }
}
function Mn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Wo(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function _n({ point: t }, e) {
  return {
    point: t,
    delta: Wo(t, $s(e)),
    offset: Wo(t, vf(e)),
    velocity: bf(e, 0.1)
  };
}
function vf(t) {
  return t[0];
}
function $s(t) {
  return t[t.length - 1];
}
function bf(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const o = $s(t);
  for (; n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > $e(e))); )
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
function st(t) {
  return t.max - t.min;
}
function nr(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Ho(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = j(e.min, e.max, t.origin), t.scale = st(n) / st(e), (nr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = j(n.min, n.max, t.origin) - t.originPoint, (nr(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function ue(t, e, n, r) {
  Ho(t.x, e.x, n.x, r == null ? void 0 : r.originX), Ho(t.y, e.y, n.y, r == null ? void 0 : r.originY);
}
function qo(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + st(e);
}
function xf(t, e, n) {
  qo(t.x, e.x, n.x), qo(t.y, e.y, n.y);
}
function Go(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + st(e);
}
function fe(t, e, n) {
  Go(t.x, e.x, n.x), Go(t.y, e.y, n.y);
}
function wf(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? j(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? j(n, t, r.max) : Math.min(t, n)), t;
}
function Yo(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Tf(t, { top: e, left: n, bottom: r, right: o }) {
  return {
    x: Yo(t.x, n, o),
    y: Yo(t.y, e, r)
  };
}
function Ko(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ef(t, e) {
  return {
    x: Ko(t.x, e.x),
    y: Ko(t.y, e.y)
  };
}
function Cf(t, e) {
  let n = 0.5;
  const r = st(t), o = st(e);
  return o > r ? n = Xe(e.min, e.max - r, t.min) : r > o && (n = Xe(t.min, t.max - o, e.min)), qt(0, 1, n);
}
function Sf(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const rr = 0.35;
function Pf(t = rr) {
  return t === !1 ? t = 0 : t === !0 && (t = rr), {
    x: Xo(t, "left", "right"),
    y: Xo(t, "top", "bottom")
  };
}
function Xo(t, e, n) {
  return {
    min: Jo(t, e),
    max: Jo(t, n)
  };
}
function Jo(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Zo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), de = () => ({
  x: Zo(),
  y: Zo()
}), Qo = () => ({ min: 0, max: 0 }), W = () => ({
  x: Qo(),
  y: Qo()
});
function dt(t) {
  return [t("x"), t("y")];
}
function js({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function Af({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Rf(t, e) {
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
function Bn(t) {
  return t === void 0 || t === 1;
}
function or({ scale: t, scaleX: e, scaleY: n }) {
  return !Bn(t) || !Bn(e) || !Bn(n);
}
function Lt(t) {
  return or(t) || Ns(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Ns(t) {
  return ti(t.x) || ti(t.y);
}
function ti(t) {
  return t && t !== "0%";
}
function Qe(t, e, n) {
  const r = t - n, o = e * r;
  return n + o;
}
function ei(t, e, n, r, o) {
  return o !== void 0 && (t = Qe(t, o, r)), Qe(t, n, r) + e;
}
function ir(t, e = 0, n = 1, r, o) {
  t.min = ei(t.min, e, n, r, o), t.max = ei(t.max, e, n, r, o);
}
function Us(t, { x: e, y: n }) {
  ir(t.x, e.translate, e.scale, e.originPoint), ir(t.y, n.translate, n.scale, n.originPoint);
}
function kf(t, e, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let a, c;
  for (let l = 0; l < i; l++)
    a = n[l], c = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && Wt(t, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), c && (e.x *= c.x.scale, e.y *= c.y.scale, Us(t, c)), r && Lt(a.latestValues) && Wt(t, a.latestValues));
  e.x = ni(e.x), e.y = ni(e.y);
}
function ni(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function Pt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ri(t, e, [n, r, o]) {
  const s = e[o] !== void 0 ? e[o] : 0.5, i = j(t.min, t.max, s);
  ir(t, e[n], e[r], i, e.scale);
}
const Vf = ["x", "scaleX", "originX"], Of = ["y", "scaleY", "originY"];
function Wt(t, e) {
  ri(t.x, e, Vf), ri(t.y, e, Of);
}
function zs(t, e) {
  return js(Rf(t.getBoundingClientRect(), e));
}
function Df(t, e, n) {
  const r = zs(t, n), { scroll: o } = e;
  return o && (Pt(r.x, o.offset.x), Pt(r.y, o.offset.y)), r;
}
const Lf = /* @__PURE__ */ new WeakMap();
class Ff {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = W(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(Ar(a, "page").point);
    }, o = (a, c) => {
      var l;
      const { drag: u, dragPropagation: f, onDragStart: h } = this.getProps();
      u && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = as(u), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), dt((p) => {
        var m, g;
        let w = this.getAxisMotionValue(p).get() || 0;
        if (pt.test(w)) {
          const x = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[p];
          x && (w = st(x) * (parseFloat(w) / 100));
        }
        this.originPoint[p] = w;
      }), h == null || h(a, c), (l = this.visualElement.animationState) === null || l === void 0 || l.setActive(B.Drag, !0));
    }, s = (a, c) => {
      const { dragPropagation: l, dragDirectionLock: u, onDirectionLock: f, onDrag: h } = this.getProps();
      if (!l && !this.openGlobalLock)
        return;
      const { offset: p } = c;
      if (u && this.currentDirection === null) {
        this.currentDirection = Mf(p), this.currentDirection !== null && (f == null || f(this.currentDirection));
        return;
      }
      this.updateAxis("x", c.point, p), this.updateAxis("y", c.point, p), this.visualElement.render(), h == null || h(a, c);
    }, i = (a, c) => this.stop(a, c);
    this.panSession = new Is(e, {
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
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(B.Drag, !1);
  }
  updateAxis(e, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Fe(e, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (i = wf(i, this.constraints[e], this.elastic[e])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    e && Ut(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = Tf(r.layoutBox, e) : this.constraints = !1, this.elastic = Pf(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && dt((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = Sf(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Ut(e))
      return !1;
    const r = e.current;
    ft(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Df(r, o.root, this.visualElement.getTransformPagePoint());
    let i = Ef(o.layout.layoutBox, s);
    if (n) {
      const a = n(Af(i));
      this.hasMutatedConstraints = !!a, a && (i = js(a));
    }
    return i;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = dt((u) => {
      if (!Fe(u, n, this.currentDirection))
        return;
      let f = (c == null ? void 0 : c[u]) || {};
      i && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? e[u] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Hr(e, r, 0, n));
  }
  stopAnimation() {
    dt((e) => this.getAxisMotionValue(e).stop());
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
    dt((n) => {
      const { drag: r } = this.getProps();
      if (!Fe(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(e[n] - j(i, a, 0.5));
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
    if (!Ut(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    dt((a) => {
      const c = this.getAxisMotionValue(a);
      if (c) {
        const l = c.get();
        s[a] = Cf({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (e = o.root) === null || e === void 0 || e.updateScroll(), o.updateLayout(), this.resolveConstraints(), dt((a) => {
      if (!Fe(a, n, null))
        return;
      const c = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      c.set(j(l, u, s[a]));
    });
  }
  addListeners() {
    var e;
    if (!this.visualElement.current)
      return;
    Lf.set(this.visualElement, this);
    const n = this.visualElement.current, r = Ht(n, "pointerdown", (l) => {
      const { drag: u, dragListener: f = !0 } = this.getProps();
      u && f && this.start(l);
    }), o = () => {
      const { dragConstraints: l } = this.getProps();
      Ut(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((e = s.root) === null || e === void 0 || e.updateScroll(), s.updateLayout()), o();
    const a = ln(window, "resize", () => this.scalePositionWithinConstraints()), c = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (dt((f) => {
        const h = this.getAxisMotionValue(f);
        h && (this.originPoint[f] += l[f].translate, h.set(h.get() + l[f].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), c == null || c();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = rr, dragMomentum: a = !0 } = e;
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
function Fe(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Mf(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
function _f(t) {
  const { dragControls: e, visualElement: n } = t, r = cn(() => new Ff(n));
  K(() => e && e.subscribe(r), [r, e]), K(() => r.addListeners(), [r]);
}
function Bf({ onPan: t, onPanStart: e, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = t || e || n || r, i = et(null), { transformPagePoint: a } = H(yr), c = {
    onSessionStart: r,
    onStart: e,
    onMove: t,
    onEnd: (u, f) => {
      i.current = null, n && n(u, f);
    }
  };
  K(() => {
    i.current !== null && i.current.updateHandlers(c);
  });
  function l(u) {
    i.current = new Is(u, c, {
      transformPagePoint: a
    });
  }
  Ge(o, "pointerdown", s && l), Rr(() => i.current && i.current.end());
}
const If = {
  pan: At(Bf),
  drag: At(_f)
};
function sr(t) {
  return typeof t == "string" && t.startsWith("var(--");
}
const Ws = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function $f(t) {
  const e = Ws.exec(t);
  if (!e)
    return [,];
  const [, n, r] = e;
  return [n, r];
}
const jf = 4;
function ar(t, e, n = 1) {
  ft(n <= jf, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, o] = $f(t);
  if (!r)
    return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  return s ? s.trim() : sr(o) ? ar(o, e, n + 1) : o;
}
function Nf(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((o) => {
    const s = o.get();
    if (!sr(s))
      return;
    const i = ar(s, r);
    i && o.set(i);
  });
  for (const o in e) {
    const s = e[o];
    if (!sr(s))
      continue;
    const i = ar(s, r);
    i && (e[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: e, transitionEnd: n };
}
const Uf = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Hs = (t) => Uf.has(t), zf = (t) => Object.keys(t).some(Hs), qs = (t, e) => {
  t.set(e, !1), t.set(e);
}, Me = (t) => t === It || t === A;
var oi;
(function(t) {
  t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom";
})(oi || (oi = {}));
const ii = (t, e) => parseFloat(t.split(", ")[e]), si = (t, e) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return ii(o[1], e);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? ii(s[1], t) : 0;
  }
}, Wf = /* @__PURE__ */ new Set(["x", "y", "z"]), Hf = We.filter((t) => !Wf.has(t));
function qf(t) {
  const e = [];
  return Hf.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const ai = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: si(4, 13),
  y: si(5, 14)
}, Gf = (t, e, n) => {
  const r = e.measureViewportBox(), o = e.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((l) => {
    a[l] = ai[l](r, s);
  }), e.render();
  const c = e.measureViewportBox();
  return n.forEach((l) => {
    const u = e.getValue(l);
    qs(u, a[l]), t[l] = ai[l](c, s);
  }), t;
}, Yf = (t, e, n = {}, r = {}) => {
  e = { ...e }, r = { ...r };
  const o = Object.keys(e).filter(Hs);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((c) => {
    const l = t.getValue(c);
    if (!t.hasValue(c))
      return;
    let u = n[c], f = ee(u);
    const h = e[c];
    let p;
    if (qe(h)) {
      const m = h.length, g = h[0] === null ? 1 : 0;
      u = h[g], f = ee(u);
      for (let w = g; w < m; w++)
        p ? ft(ee(h[w]) === p, "All keyframes must be of the same type") : (p = ee(h[w]), ft(p === f || Me(f) && Me(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = ee(h);
    if (f !== p)
      if (Me(f) && Me(p)) {
        const m = l.get();
        typeof m == "string" && l.set(parseFloat(m)), typeof h == "string" ? e[c] = parseFloat(h) : Array.isArray(h) && p === A && (e[c] = h.map(parseFloat));
      } else
        f != null && f.transform && (p != null && p.transform) && (u === 0 || h === 0) ? u === 0 ? l.set(p.transform(u)) : e[c] = f.transform(h) : (i || (s = qf(t), i = !0), a.push(c), r[c] = r[c] !== void 0 ? r[c] : e[c], qs(l, h));
  }), a.length) {
    const c = a.indexOf("height") >= 0 ? window.pageYOffset : null, l = Gf(e, t, a);
    return s.length && s.forEach(([u, f]) => {
      t.getValue(u).set(f);
    }), t.render(), _t && c !== null && window.scrollTo({ top: c }), { target: l, transitionEnd: r };
  } else
    return { target: e, transitionEnd: r };
};
function Kf(t, e, n, r) {
  return zf(e) ? Yf(t, e, n, r) : { target: e, transitionEnd: r };
}
const Xf = (t, e, n, r) => {
  const o = Nf(t, e, r);
  return e = o.target, r = o.transitionEnd, Kf(t, e, n, r);
}, cr = { current: null }, Gs = { current: !1 };
function Jf() {
  if (Gs.current = !0, !!_t)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => cr.current = t.matches;
      t.addListener(e), e();
    } else
      cr.current = !1;
}
function Zf(t, e, n) {
  const { willChange: r } = e;
  for (const o in e) {
    const s = e[o], i = n[o];
    if (gt(s))
      t.addValue(o, s), Ke(r) && r.add(o), process.env.NODE_ENV === "development" && Vr(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (gt(i))
      t.addValue(o, Gt(s, { owner: t })), Ke(r) && r.remove(o);
    else if (i !== s)
      if (t.hasValue(o)) {
        const a = t.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(o);
        t.addValue(o, Gt(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    e[o] === void 0 && t.removeValue(o);
  return e;
}
const Ys = Object.keys(me), Qf = Ys.length, ci = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class td {
  constructor({ parent: e, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => nt.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = e, this.props = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = an(n), this.isVariantNode = zi(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...l } = this.scrapeMotionValuesFromProps(n);
    for (const u in l) {
      const f = l[u];
      i[u] !== void 0 && gt(f) && (f.set(i[u], !1), Ke(c) && c.add(u));
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
    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Gs.current || Jf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cr.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var e, n, r;
    (e = this.projection) === null || e === void 0 || e.unmount(), Rt.update(this.notifyUpdate), Rt.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Bt.has(e), o = n.on("change", (i) => {
      this.latestValues[e] = i, this.props.onUpdate && nt.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
    kr !== "production" && r && n && ft(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let c = 0; c < Qf; c++) {
      const l = Ys[c], { isEnabled: u, Component: f } = me[l];
      u(e) && f && a.push(ji(f, {
        key: l,
        ...e,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: c, layout: l, drag: u, dragConstraints: f, layoutScroll: h } = e;
      this.projection.setOptions({
        layoutId: c,
        layout: l,
        alwaysMeasureLayout: !!u || f && Ut(f),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof l == "string" ? l : "both",
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : W();
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
    for (let n = 0; n < ci.length; n++) {
      const r = ci[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = e["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = Zf(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues);
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
    for (let s = 0; s < ed; s++) {
      const i = Ks[s], a = this.props[i];
      (pe(a) || a === !1) && (o[i] = a);
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
    return r === void 0 && n !== void 0 && (r = Gt(n, { owner: this }), this.addValue(e, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Pr(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !gt(s) ? s : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Lr()), this.events[e].add(n);
  }
  notify(e, ...n) {
    var r;
    (r = this.events[e]) === null || r === void 0 || r.notify(...n);
  }
}
const Ks = ["initial", ...qr], ed = Ks.length;
class Xs extends td {
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
    let i = lu(r, e || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      au(this, r, i);
      const a = Xf(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...r
    };
  }
}
function nd(t) {
  return window.getComputedStyle(t);
}
class rd extends Xs {
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const r = _r(n);
      return r && r.default || 0;
    } else {
      const r = nd(e), o = (qi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return zs(e, n);
  }
  build(e, n, r, o) {
    xr(e, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(e) {
    return Sr(e);
  }
  renderInstance(e, n, r, o) {
    Ji(e, n, r, o);
  }
}
class od extends Xs {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    var r;
    return Bt.has(n) ? ((r = _r(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = Zi.has(n) ? n : Cr(n), e.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return W();
  }
  scrapeMotionValuesFromProps(e) {
    return ts(e);
  }
  build(e, n, r, o) {
    Tr(e, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(e, n, r, o) {
    Qi(e, n, r, o);
  }
  mount(e) {
    this.isSVGTag = Er(e.tagName), super.mount(e);
  }
}
const id = (t, e) => br(t) ? new od(e, { enableHardwareAcceleration: !1 }) : new rd(e, { enableHardwareAcceleration: !0 });
function li(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const ne = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = li(t, e.target.x), r = li(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, ui = "_$css", sd = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, o = t.includes("var("), s = [];
    o && (t = t.replace(Ws, (p) => (s.push(p), ui)));
    const i = kt.parse(t);
    if (i.length > 5)
      return r;
    const a = kt.createTransformer(t), c = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * e.x, u = n.y.scale * e.y;
    i[0 + c] /= l, i[1 + c] /= u;
    const f = j(l, u, 0.5);
    typeof i[2 + c] == "number" && (i[2 + c] /= f), typeof i[3 + c] == "number" && (i[3 + c] /= f);
    let h = a(i);
    if (o) {
      let p = 0;
      h = h.replace(ui, () => {
        const m = s[p];
        return p++, m;
      });
    }
    return h;
  }
};
class ad extends be.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = e;
    Bc(ld), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), ae.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || e.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? i.promote() : i.relegate() || nt.postRender(() => {
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
function cd(t) {
  const [e, n] = us(), r = H(vr);
  return be.createElement(ad, { ...t, layoutGroup: r, switchLayoutGroup: H(Wi), isPresent: e, safeToRemove: n });
}
const ld = {
  borderRadius: {
    ...ne,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ne,
  borderTopRightRadius: ne,
  borderBottomLeftRadius: ne,
  borderBottomRightRadius: ne,
  boxShadow: sd
}, ud = {
  measureLayout: cd
};
function fd(t, e, n = {}) {
  const r = gt(t) ? t : Gt(t);
  return r.start(Hr("", r, e, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const Js = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], dd = Js.length, fi = (t) => typeof t == "string" ? parseFloat(t) : t, di = (t) => typeof t == "number" || A.test(t);
function hd(t, e, n, r, o, s) {
  o ? (t.opacity = j(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    pd(r)
  ), t.opacityExit = j(e.opacity !== void 0 ? e.opacity : 1, 0, md(r))) : s && (t.opacity = j(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < dd; i++) {
    const a = `border${Js[i]}Radius`;
    let c = hi(e, a), l = hi(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || di(c) === di(l) ? (t[a] = Math.max(j(fi(c), fi(l), r), 0), (pt.test(l) || pt.test(c)) && (t[a] += "%")) : t[a] = l;
  }
  (e.rotate || n.rotate) && (t.rotate = j(e.rotate || 0, n.rotate || 0, r));
}
function hi(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const pd = Zs(0, 0.5, zr), md = Zs(0.5, 0.95, Ur);
function Zs(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(Xe(t, e, r));
}
function pi(t, e) {
  t.min = e.min, t.max = e.max;
}
function ut(t, e) {
  pi(t.x, e.x), pi(t.y, e.y);
}
function mi(t, e, n, r, o) {
  return t -= e, t = Qe(t, 1 / n, r), o !== void 0 && (t = Qe(t, 1 / o, r)), t;
}
function gd(t, e = 0, n = 1, r = 0.5, o, s = t, i = t) {
  if (pt.test(e) && (e = parseFloat(e), e = j(i.min, i.max, e / 100) - i.min), typeof e != "number")
    return;
  let a = j(s.min, s.max, r);
  t === s && (a -= e), t.min = mi(t.min, e, n, a, o), t.max = mi(t.max, e, n, a, o);
}
function gi(t, e, [n, r, o], s, i) {
  gd(t, e[n], e[r], e[o], e.scale, s, i);
}
const yd = ["x", "scaleX", "originX"], vd = ["y", "scaleY", "originY"];
function yi(t, e, n, r) {
  gi(t.x, e, yd, n == null ? void 0 : n.x, r == null ? void 0 : r.x), gi(t.y, e, vd, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function vi(t) {
  return t.translate === 0 && t.scale === 1;
}
function Qs(t) {
  return vi(t.x) && vi(t.y);
}
function ta(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function bi(t) {
  return st(t.x) / st(t.y);
}
class bd {
  constructor() {
    this.members = [];
  }
  add(e) {
    Or(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Dr(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function xi(t, e, n) {
  let r = "";
  const o = t.x.translate / e.x, s = t.y.translate / e.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: c, rotateX: l, rotateY: u } = n;
    c && (r += `rotate(${c}deg) `), l && (r += `rotateX(${l}deg) `), u && (r += `rotateY(${u}deg) `);
  }
  const i = t.x.scale * e.x, a = t.y.scale * e.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const xd = (t, e) => t.depth - e.depth;
class wd {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Or(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Dr(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(xd), this.isDirty = !1, this.children.forEach(e);
  }
}
const wi = ["", "X", "Y", "Z"], Ti = 1e3;
let Td = 0;
function ea({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, c = e == null ? void 0 : e()) {
      this.id = Td++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(Sd), this.nodes.forEach(Rd), this.nodes.forEach(kd);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wd());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Lr()), this.eventHandlers.get(i).add(a);
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
      const { layoutId: l, layout: u, visualElement: f } = this.options;
      if (f && !f.current && f.mount(i), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const p = () => this.root.updateBlockedByResize = !1;
        t(i, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Fs(p, 250), ae.hasAnimatedSinceResize && (ae.hasAnimatedSinceResize = !1, this.nodes.forEach(Ci));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && f && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        var w, x, T, b, C;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const L = (x = (w = this.options.transition) !== null && w !== void 0 ? w : f.getDefaultTransition()) !== null && x !== void 0 ? x : Fd, { onLayoutAnimationStart: M, onLayoutAnimationComplete: q } = f.getProps(), Z = !this.targetLayout || !ta(this.targetLayout, g) || m, Q = !p && m;
        if (!((T = this.resumeFrom) === null || T === void 0) && T.instance || Q || p && (Z || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, Q);
          const G = {
            ...Ms(L, "layout"),
            onPlay: M,
            onComplete: q
          };
          f.shouldReduceMotion && (G.delay = 0, G.type = !1), this.startAnimation(G);
        } else
          !p && this.animationProgress === 0 && Ci(this), this.isLead() && ((C = (b = this.options).onExitComplete) === null || C === void 0 || C.call(b));
        this.targetLayout = g;
      });
    }
    unmount() {
      var i, a;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (a = this.parent) === null || a === void 0 || a.children.delete(this), this.instance = void 0, Rt.preRender(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(Vd), this.animationId++);
    }
    willUpdate(i = !0) {
      var a, c, l;
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
      const { layoutId: u, layout: f } = this.options;
      if (u === void 0 && !f)
        return;
      const h = (l = this.options.visualElement) === null || l === void 0 ? void 0 : l.getProps().transformTemplate;
      this.prevTransformTemplateValue = h == null ? void 0 : h(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ei);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Md), this.potentialNodes.clear()), this.nodes.forEach(Ad), this.nodes.forEach(Ed), this.nodes.forEach(Cd), this.clearAllSnapshots(), Rn.update(), Rn.preRender(), Rn.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(Pd), this.sharedNodes.forEach(Od);
    }
    scheduleUpdateProjection() {
      nt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      nt.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = W(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !Qs(this.projectionDelta), l = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, u = l == null ? void 0 : l(this.latestValues, ""), f = u !== this.prevTransformTemplateValue;
      a && (c || Lt(this.latestValues) || f) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), _d(c), {
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
        return W();
      const a = i.measureViewportBox(), { scroll: c } = this.root;
      return c && (Pt(a.x, c.offset.x), Pt(a.y, c.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = W();
      ut(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c], { scroll: u, options: f } = l;
        if (l !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            ut(a, i);
            const { scroll: h } = this.root;
            h && (Pt(a.x, -h.offset.x), Pt(a.y, -h.offset.y));
          }
          Pt(a.x, u.offset.x), Pt(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const c = W();
      ut(c, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Wt(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Lt(u.latestValues) && Wt(c, u.latestValues);
      }
      return Lt(this.latestValues) && Wt(c, this.latestValues), c;
    }
    removeTransform(i) {
      var a;
      const c = W();
      ut(c, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Lt(u.latestValues))
          continue;
        or(u.latestValues) && u.updateSnapshot();
        const f = W(), h = u.measurePageBox();
        ut(f, h), yi(c, u.latestValues, (a = u.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, f);
      }
      return Lt(this.latestValues) && yi(c, this.latestValues), c;
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
      const { layout: c, layoutId: l } = this.options;
      if (!(!this.layout || !(c || l))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const u = this.getClosestProjectingParent();
          u && u.layout ? (this.relativeParent = u, this.relativeTarget = W(), this.relativeTargetOrigin = W(), fe(this.relativeTargetOrigin, this.layout.layoutBox, u.layout.layoutBox), ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = W(), this.targetWithTransforms = W()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? xf(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ut(this.target, this.layout.layoutBox), Us(this.target, this.targetDelta)) : ut(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const u = this.getClosestProjectingParent();
          u && !!u.resumingFrom == !!this.resumingFrom && !u.options.layoutScroll && u.target ? (this.relativeParent = u, this.relativeTarget = W(), this.relativeTargetOrigin = W(), fe(this.relativeTargetOrigin, this.target, u.target), ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || or(this.parent.latestValues) || Ns(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: c } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const l = this.getLead(), u = !!this.resumingFrom || this !== l;
      let f = !0;
      if (a && (f = !1), u && c && (f = !1), f)
        return;
      const { layout: h, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || p))
        return;
      ut(this.layoutCorrected, this.layout.layoutBox), kf(this.layoutCorrected, this.treeScale, this.path, u);
      const { target: m } = l;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = de(), this.projectionDeltaWithTransform = de());
      const g = this.treeScale.x, w = this.treeScale.y, x = this.projectionTransform;
      ue(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = xi(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== g || this.treeScale.y !== w) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a, c, l;
      (c = (a = this.options).scheduleRender) === null || c === void 0 || c.call(a), i && ((l = this.getStack()) === null || l === void 0 || l.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      var c, l;
      const u = this.snapshot, f = (u == null ? void 0 : u.latestValues) || {}, h = { ...this.latestValues }, p = de();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = W(), g = (u == null ? void 0 : u.source) !== ((c = this.layout) === null || c === void 0 ? void 0 : c.source), w = (((l = this.getStack()) === null || l === void 0 ? void 0 : l.members.length) || 0) <= 1, x = !!(g && !w && this.options.crossfade === !0 && !this.path.some(Ld));
      this.animationProgress = 0, this.mixTargetDelta = (T) => {
        var b;
        const C = T / 1e3;
        Si(p.x, i.x, C), Si(p.y, i.y, C), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((b = this.relativeParent) === null || b === void 0) && b.layout) && (fe(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Dd(this.relativeTarget, this.relativeTargetOrigin, m, C)), g && (this.animationValues = h, hd(h, f, this.latestValues, C, x, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (Rt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = nt.update(() => {
        ae.hasAnimatedSinceResize = !0, this.currentAnimation = fd(0, Ti, {
          ...i,
          onUpdate: (l) => {
            var u;
            this.mixTargetDelta(l), (u = i.onUpdate) === null || u === void 0 || u.call(i, l);
          },
          onComplete: () => {
            var l;
            (l = i.onComplete) === null || l === void 0 || l.call(i), this.completeAnimation();
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
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Ti), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = i;
      if (!(!a || !c || !l)) {
        if (this !== i && this.layout && l && na(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || W();
          const f = st(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + f;
          const h = st(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + h;
        }
        ut(a, c), Wt(a, u), ue(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      var c, l, u;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new bd()), this.sharedNodes.get(i).add(a), a.promote({
        transition: (c = a.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.transition,
        preserveFollowOpacity: (u = (l = a.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.shouldPreserveFollowOpacity) === null || u === void 0 ? void 0 : u.call(l, a)
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
      const l = this.getStack();
      l && l.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const l = {};
      for (let u = 0; u < wi.length; u++) {
        const f = "rotate" + wi[u];
        c[f] && (l[f] = c[f], i.setStaticValue(f, 0));
      }
      i == null || i.render();
      for (const u in l)
        i.setStaticValue(u, l[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, c, l;
      const u = {};
      if (!this.instance || this.isSVG)
        return u;
      if (this.isVisible)
        u.visibility = "";
      else
        return { visibility: "hidden" };
      const f = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ie(i.pointerEvents) || "", u.transform = f ? f(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const w = {};
        return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = Ie(i.pointerEvents) || ""), this.hasProjected && !Lt(this.latestValues) && (w.transform = f ? f({}, "") : "none", this.hasProjected = !1), w;
      }
      const p = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = xi(this.projectionDeltaWithTransform, this.treeScale, p), f && (u.transform = f(p, u.transform));
      const { x: m, y: g } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (c = p.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = h === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const w in ze) {
        if (p[w] === void 0)
          continue;
        const { correct: x, applyTo: T } = ze[w], b = x(p[w], h);
        if (T) {
          const C = T.length;
          for (let L = 0; L < C; L++)
            u[T[L]] = b;
        } else
          u[w] = b;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? Ie(i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Ei), this.root.sharedNodes.clear();
    }
  };
}
function Ed(t) {
  t.updateLayout();
}
function Cd(t) {
  var e, n, r;
  const o = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: a } = t.options, c = o.source !== t.layout.source;
    a === "size" ? dt((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = st(m);
      m.min = s[p].min, m.max = m.min + g;
    }) : na(a, o.layoutBox, s) && dt((p) => {
      const m = c ? o.measuredBox[p] : o.layoutBox[p], g = st(s[p]);
      m.max = m.min + g;
    });
    const l = de();
    ue(l, s, o.layoutBox);
    const u = de();
    c ? ue(u, t.applyTransform(i, !0), o.measuredBox) : ue(u, s, o.layoutBox);
    const f = !Qs(l);
    let h = !1;
    if (!t.resumeFrom) {
      const p = t.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: g } = p;
        if (m && g) {
          const w = W();
          fe(w, o.layoutBox, m.layoutBox);
          const x = W();
          fe(x, s, g.layoutBox), ta(w, x) || (h = !0);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: u,
      layoutDelta: l,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: h
    });
  } else
    t.isLead() && ((r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n));
  t.options.transition = void 0;
}
function Sd(t) {
  t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty));
}
function Pd(t) {
  t.clearSnapshot();
}
function Ei(t) {
  t.clearMeasurements();
}
function Ad(t) {
  const { visualElement: e } = t.options;
  e != null && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ci(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0;
}
function Rd(t) {
  t.resolveTargetDelta();
}
function kd(t) {
  t.calcProjection();
}
function Vd(t) {
  t.resetRotation();
}
function Od(t) {
  t.removeLeadSnapshot();
}
function Si(t, e, n) {
  t.translate = j(e.translate, 0, n), t.scale = j(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Pi(t, e, n, r) {
  t.min = j(e.min, n.min, r), t.max = j(e.max, n.max, r);
}
function Dd(t, e, n, r) {
  Pi(t.x, e.x, n.x, r), Pi(t.y, e.y, n.y, r);
}
function Ld(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Fd = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Md(t, e) {
  let n = t.root;
  for (let s = t.path.length - 1; s >= 0; s--)
    if (t.path[s].instance) {
      n = t.path[s];
      break;
    }
  const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
  o && t.mount(o, !0);
}
function Ai(t) {
  t.min = Math.round(t.min), t.max = Math.round(t.max);
}
function _d(t) {
  Ai(t.x), Ai(t.y);
}
function na(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !nr(bi(e), bi(n), 0.2);
}
const Bd = ea({
  attachResizeListener: (t, e) => ln(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), In = {
  current: void 0
}, Id = ea({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!In.current) {
      const t = new Bd(0, {});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), In.current = t;
    }
    return In.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), $d = {
  ...gf,
  ...Ml,
  ...If,
  ...ud
}, Et = /* @__PURE__ */ Mc((t, e) => hl(t, e, $d, id, Id));
function ra() {
  const t = et(!1);
  return se(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function jd() {
  const t = ra(), [e, n] = it(0), r = Hn(() => {
    t.current && n(e + 1);
  }, [e]);
  return [Hn(() => nt.postRender(r), [r]), e];
}
class Nd extends k.Component {
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
function Ud({ children: t, isPresent: e }) {
  const n = mr(), r = et(null), o = et({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return lc(() => {
    const { width: s, height: i, top: a, left: c } = o.current;
    if (e || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const l = document.createElement("style");
    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(l);
    };
  }, [e]), k.createElement(Nd, { isPresent: e, childRef: r, sizeRef: o }, k.cloneElement(t, { ref: r }));
}
const $n = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = cn(zd), c = mr(), l = mt(
    () => ({
      id: c,
      initial: e,
      isPresent: n,
      custom: o,
      onExitComplete: (u) => {
        a.set(u, !0);
        for (const f of a.values())
          if (!f)
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
  return mt(() => {
    a.forEach((u, f) => a.set(f, !1));
  }, [n]), k.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (t = k.createElement(Ud, { isPresent: n }, t)), k.createElement(xe.Provider, { value: l }, t);
};
function zd() {
  return /* @__PURE__ */ new Map();
}
const Nt = (t) => t.key || "";
function Wd(t, e) {
  t.forEach((n) => {
    const r = Nt(n);
    e.set(r, n);
  });
}
function Hd(t) {
  const e = [];
  return fc.forEach(t, (n) => {
    dc(n) && e.push(n);
  }), e;
}
const Xt = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", Vr(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = jd();
  const c = H(vr).forceRender;
  c && (a = c);
  const l = ra(), u = Hd(t);
  let f = u;
  const h = /* @__PURE__ */ new Set(), p = et(f), m = et(/* @__PURE__ */ new Map()).current, g = et(!0);
  if (se(() => {
    g.current = !1, Wd(u, m), p.current = f;
  }), Rr(() => {
    g.current = !0, m.clear(), h.clear();
  }), g.current)
    return k.createElement(k.Fragment, null, f.map((b) => k.createElement($n, { key: Nt(b), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, b)));
  f = [...f];
  const w = p.current.map(Nt), x = u.map(Nt), T = w.length;
  for (let b = 0; b < T; b++) {
    const C = w[b];
    x.indexOf(C) === -1 && h.add(C);
  }
  return i === "wait" && h.size && (f = []), h.forEach((b) => {
    if (x.indexOf(b) !== -1)
      return;
    const C = m.get(b);
    if (!C)
      return;
    const L = w.indexOf(b), M = () => {
      m.delete(b), h.delete(b);
      const q = p.current.findIndex((Z) => Z.key === b);
      if (p.current.splice(q, 1), !h.size) {
        if (p.current = u, l.current === !1)
          return;
        a(), r && r();
      }
    };
    f.splice(L, 0, k.createElement($n, { key: Nt(C), isPresent: !1, onExitComplete: M, custom: e, presenceAffectsLayout: s, mode: i }, C));
  }), f = f.map((b) => {
    const C = b.key;
    return h.has(C) ? b : k.createElement($n, { key: Nt(b), isPresent: !0, presenceAffectsLayout: s, mode: i }, b);
  }), kr !== "production" && i === "wait" && f.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), k.createElement(k.Fragment, null, h.size ? f : f.map((b) => uc(b)));
};
function Om({
  children: t,
  checked: e = !1,
  onChange: n,
  ...r
}) {
  const [o, s] = it(e), i = "M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75";
  K(() => s(e), [e]);
  async function a() {
    let c = o;
    s((l) => (c = !l, c)), n && await n(c);
  }
  return /* @__PURE__ */ I(qd, { ...r, onClick: a, children: [
    /* @__PURE__ */ S(Yd, { children: /* @__PURE__ */ S(Kd, { state: o, children: /* @__PURE__ */ S(Et.svg, { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ S(
      Et.path,
      {
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        initial: { d: i },
        animate: { d: o ? i : "" },
        transition: {
          ease: "easeInOut",
          duration: 0.15
        }
      }
    ) }) }) }),
    t && /* @__PURE__ */ S(Gd, { children: t })
  ] });
}
const qd = P.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`, Gd = P.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(${(t) => t.theme.secondaryText});
  margin: 0;
`, Yd = P.div`
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: rgba(${(t) => t.theme.theme}, .15);
`, Kd = P(Et.div)`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(${(t) => t.theme.theme});
  transition: color .17s ease;

  svg {
    font-size: 1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
`;
function Dm({
  label: t,
  fullWidth: e,
  small: n,
  status: r = "default",
  alternative: o,
  icon: s,
  ...i
}) {
  const a = mt(
    () => ({ fullWidth: e, small: n, status: r, alternative: o, ...i }),
    [e, n, r, o, i]
  );
  return /* @__PURE__ */ I(rn, { children: [
    t && /* @__PURE__ */ S(ia, { children: t }),
    /* @__PURE__ */ I(
      oa,
      {
        fullWidth: e,
        alternative: o,
        small: n,
        status: r ?? "default",
        children: [
          /* @__PURE__ */ S(Xd, { ...a }),
          s && /* @__PURE__ */ S(
            sa,
            {
              fullWidth: e,
              small: n,
              status: r ?? "default",
              children: s
            }
          )
        ]
      }
    )
  ] });
}
const jn = {
  success: "#14D110",
  error: "#FF0000",
  warning: "#FFB800"
}, oa = P.div`
  position: relative;
  display: flex;
  width: ${(t) => t.fullWidth ? "calc(100% - 2px)" : "max-content"};
  border: 1px solid
    ${(t) => t.status === "default" || !t.status ? "rgb(" + t.theme.cardBorder + ")" : jn[t.status]};
  border-radius: ${(t) => t.alternative ? "10" : t.small ? "14" : "18"}px;

  overflow: hidden;
  color: rgb(${(t) => t.theme.cardBorder});
  transition: all 0.13s ease-in-out;

  &:focus-within,
  &:active {
    border-color: ${(t) => t.status === "default" || !t.status ? "rgba(" + t.theme.theme + ", .5)" : jn[t.status]};
    color: rgb(${(t) => t.theme.theme});
    box-shadow: 0 0 0 1px
      ${(t) => t.status === "default" || !t.status ? "rgba(" + t.theme.theme + ", .5)" : jn[t.status]};
  }
`, ia = P.p`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(${(t) => t.theme.secondaryText});
  margin: 0;
  margin-bottom: 0.8em;
`, Yt = 1.25, tn = 0.75, Xd = P.input`
  outline: none;
  border: none;
  background-color: ${(t) => t.alternative ? "rgba(171, 154, 255, 0.15)" : "transparent"};
  color: rgb(
    ${(t) => t.alternative ? "185, 185, 185" : t.theme.theme}
  );

  font-size: ${(t) => t.small ? ".9rem" : "1.2rem"};
  font-weight: 500;
  padding: ${({ small: t }) => (t ? tn / 3 * 2 : tn) + "rem"}
    ${({ small: t }) => (t ? Yt / 3 * 2 : Yt) + "rem"};
  width: 100%;
  transition: all 0.23s ease-in-out;

  ${(t) => t.alternative && t.type === "number" && `
    -moz-appearance: textfield; 
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `}
  ::-webkit-input-placeholder {
    color: rgb(
      ${(t) => t.alternative ? "185, 185, 185" : t.theme.cardBorder}
    );
  }

  :-ms-input-placeholder {
    color: rgb(
      ${(t) => t.alternative ? "185, 185, 185" : t.theme.cardBorder}
    );
  }

  ::placeholder {
    color: rgb(
      ${(t) => t.alternative ? "185, 185, 185" : t.theme.cardBorder}
    );
  }
`, sa = P.div`
  position: absolute;
  display: flex;
  z-index: 10;
  font-size: ${(t) => t.small ? ".9rem" : "1.2rem"};
  top: 50%;
  right: ${(t) => t.small ? Yt / 3 * 2 : Yt}rem;
  transform: translateY(-50%);
`;
function Jd(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function Gr(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.25 10.75L12 14.25L8.75 10.75"
  }));
}
function Zd(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10.75 8.75L14.25 12L10.75 15.25"
  }));
}
function Qd(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.25 6.75L6.75 17.25"
  }), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6.75 6.75L17.25 17.25"
  }));
}
function th(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function aa(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ k.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ k.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function eh(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
  }));
}
function nh(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ k.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ k.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function rh(t) {
  return /* @__PURE__ */ k.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ k.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17 14.75V19.25M11.25 19.25H5.78165C5.21714 19.25 4.77296 18.7817 4.88545 18.2285C5.19601 16.7012 6.21027 14 9.49996 14C10.1744 14 10.7532 14.0563 11.25 14.25M19.25 17H14.75M14.75 10.25C16.2687 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2687 4.75 14.75 4.75M12.25 7.5C12.25 9.01878 11.0187 10.25 9.49996 10.25C7.98118 10.25 6.74996 9.01878 6.74996 7.5C6.74996 5.98122 7.98118 4.75 9.49996 4.75C11.0187 4.75 12.25 5.98122 12.25 7.5Z"
  }));
}
function Lm({
  label: t,
  fullWidth: e,
  small: n,
  status: r = "default",
  disabled: o,
  dropdown: s,
  popup: i,
  search: a,
  icon: c,
  errorMessage: l,
  ...u
}) {
  const f = mt(
    () => ({
      fullWidth: e,
      small: n,
      dropdown: s,
      popup: i,
      search: a,
      status: r,
      disabled: o,
      icon: c,
      ...u
    }),
    [e, n, s, i, a, r, o, c, u]
  ), p = (() => c || (s ? /* @__PURE__ */ S(Gr, {}) : i ? /* @__PURE__ */ S(Zd, {}) : a ? /* @__PURE__ */ S(eh, {}) : null))();
  return /* @__PURE__ */ I(rn, { children: [
    t && /* @__PURE__ */ S(la, { children: t }),
    /* @__PURE__ */ I(
      ca,
      {
        fullWidth: e,
        small: n,
        status: r ?? "default",
        children: [
          /* @__PURE__ */ S(ih, { ...f, disabled: o }),
          p && /* @__PURE__ */ S(
            ua,
            {
              fullWidth: e,
              small: n,
              status: r ?? "default",
              children: p
            }
          )
        ]
      }
    ),
    r === "error" && /* @__PURE__ */ S(oh, { children: l })
  ] });
}
const ca = P.div`
  position: relative;
  display: flex;
  width: ${(t) => t.fullWidth ? "calc(100% - 2px)" : "max-content"};
  border: 1.5px solid
    ${(t) => t.status === "error" ? t.theme.fail : t.theme.inputField};
  border-radius: 10px;

  overflow: hidden;
  color: rgb(${(t) => t.theme.cardBorder});
  transition: all 0.13s ease-in-out;

  &:focus-within,
  &: hover {
    ${(t) => "border: 1.5px solid " + (t.status === "error" ? t.theme.fail : t.theme.primaryTextv2)};
  }

  &:active {
    border-color: ${(t) => t.status === "error" ? t.theme.fail : t.theme.inputField};
    color: rgb(${(t) => t.theme.theme});
  }
`, la = P.p`
  font-size:16px;
  font-weight: 500;
  color: ${(t) => t.theme.primaryTextv2}
  margin: 0;
  margin-bottom: 8px;
`, oh = P.p`
  color: ${(t) => t.theme.fail};
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`, ih = P.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(t) => t.theme.primaryTextv2};

  font-size: 16px;
  font-weight: 500;
  padding: ${(t) => t.small ? "8.5px 15px" : "13.5px 15px"};
  line-height: 22px;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: rgb(${(t) => t.theme.inputField});
  }

  :-ms-input-placeholder {
    color: rgb(${(t) => t.theme.inputField});
  }

  ::placeholder {
    color: rgb(${(t) => t.theme.inputField});
  }
`, ua = P.div`
  position: absolute;
  z-index: 10;
  font-size: 16px;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: ${(t) => t.theme.primaryTextv2};
  cursor: pointer;
`;
function sh({ dragControls: t }) {
  function e(n) {
    n.stopPropagation(), t.start(n);
  }
  return /* @__PURE__ */ S(
    ah,
    {
      onPointerDown: e,
      title: "Click & drag",
      children: /* @__PURE__ */ I(
        ch,
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
const ah = P.div`
  display: flex;
  color: rgb(${(t) => t.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, ch = P.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let _e;
const lh = new Uint8Array(16);
function uh() {
  if (!_e && (_e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !_e))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return _e(lh);
}
const Y = [];
for (let t = 0; t < 256; ++t)
  Y.push((t + 256).toString(16).slice(1));
function fh(t, e = 0) {
  return Y[t[e + 0]] + Y[t[e + 1]] + Y[t[e + 2]] + Y[t[e + 3]] + "-" + Y[t[e + 4]] + Y[t[e + 5]] + "-" + Y[t[e + 6]] + Y[t[e + 7]] + "-" + Y[t[e + 8]] + Y[t[e + 9]] + "-" + Y[t[e + 10]] + Y[t[e + 11]] + Y[t[e + 12]] + Y[t[e + 13]] + Y[t[e + 14]] + Y[t[e + 15]];
}
const dh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ri = {
  randomUUID: dh
};
function hh(t, e, n) {
  if (Ri.randomUUID && !e && !t)
    return Ri.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || uh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      e[n + o] = r[o];
    return e;
  }
  return fh(r);
}
function fa(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ph } = Object.prototype, { getPrototypeOf: Yr } = Object, pn = ((t) => (e) => {
  const n = ph.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (t) => (t = t.toLowerCase(), (e) => pn(e) === t), mn = (t) => (e) => typeof e === t, { isArray: Jt } = Array, ve = mn("undefined");
function mh(t) {
  return t !== null && !ve(t) && t.constructor !== null && !ve(t.constructor) && ct(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const da = yt("ArrayBuffer");
function gh(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && da(t.buffer), e;
}
const yh = mn("string"), ct = mn("function"), ha = mn("number"), gn = (t) => t !== null && typeof t == "object", vh = (t) => t === !0 || t === !1, je = (t) => {
  if (pn(t) !== "object")
    return !1;
  const e = Yr(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, bh = yt("Date"), xh = yt("File"), wh = yt("Blob"), Th = yt("FileList"), Eh = (t) => gn(t) && ct(t.pipe), Ch = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ct(t.append) && ((e = pn(t)) === "formdata" || // detect form-data instance
  e === "object" && ct(t.toString) && t.toString() === "[object FormData]"));
}, Sh = yt("URLSearchParams"), Ph = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ce(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), Jt(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], e.call(null, t[a], a, t);
  }
}
function pa(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const ma = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ga = (t) => !ve(t) && t !== ma;
function lr() {
  const { caseless: t } = ga(this) && this || {}, e = {}, n = (r, o) => {
    const s = t && pa(e, o) || o;
    je(e[s]) && je(r) ? e[s] = lr(e[s], r) : je(r) ? e[s] = lr({}, r) : Jt(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ce(arguments[r], n);
  return e;
}
const Ah = (t, e, n, { allOwnKeys: r } = {}) => (Ce(e, (o, s) => {
  n && ct(o) ? t[s] = fa(o, n) : t[s] = o;
}, { allOwnKeys: r }), t), Rh = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), kh = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Vh = (t, e, n, r) => {
  let o, s, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && Yr(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Oh = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Dh = (t) => {
  if (!t)
    return null;
  if (Jt(t))
    return t;
  let e = t.length;
  if (!ha(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Lh = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Yr(Uint8Array)), Fh = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    e.call(t, s[0], s[1]);
  }
}, Mh = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, _h = yt("HTMLFormElement"), Bh = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), ki = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Ih = yt("RegExp"), ya = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ce(n, (o, s) => {
    let i;
    (i = e(o, s, t)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(t, r);
}, $h = (t) => {
  ya(t, (e, n) => {
    if (ct(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (ct(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, jh = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Jt(t) ? r(t) : r(String(t).split(e)), n;
}, Nh = () => {
}, Uh = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Nn = "abcdefghijklmnopqrstuvwxyz", Vi = "0123456789", va = {
  DIGIT: Vi,
  ALPHA: Nn,
  ALPHA_DIGIT: Nn + Nn.toUpperCase() + Vi
}, zh = (t = 16, e = va.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Wh(t) {
  return !!(t && ct(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Hh = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (gn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const s = Jt(r) ? [] : {};
        return Ce(r, (i, a) => {
          const c = n(i, o + 1);
          !ve(c) && (s[a] = c);
        }), e[o] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, qh = yt("AsyncFunction"), Gh = (t) => t && (gn(t) || ct(t)) && ct(t.then) && ct(t.catch), y = {
  isArray: Jt,
  isArrayBuffer: da,
  isBuffer: mh,
  isFormData: Ch,
  isArrayBufferView: gh,
  isString: yh,
  isNumber: ha,
  isBoolean: vh,
  isObject: gn,
  isPlainObject: je,
  isUndefined: ve,
  isDate: bh,
  isFile: xh,
  isBlob: wh,
  isRegExp: Ih,
  isFunction: ct,
  isStream: Eh,
  isURLSearchParams: Sh,
  isTypedArray: Lh,
  isFileList: Th,
  forEach: Ce,
  merge: lr,
  extend: Ah,
  trim: Ph,
  stripBOM: Rh,
  inherits: kh,
  toFlatObject: Vh,
  kindOf: pn,
  kindOfTest: yt,
  endsWith: Oh,
  toArray: Dh,
  forEachEntry: Fh,
  matchAll: Mh,
  isHTMLForm: _h,
  hasOwnProperty: ki,
  hasOwnProp: ki,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ya,
  freezeMethods: $h,
  toObjectSet: jh,
  toCamelCase: Bh,
  noop: Nh,
  toFiniteNumber: Uh,
  findKey: pa,
  global: ma,
  isContextDefined: ga,
  ALPHABET: va,
  generateString: zh,
  isSpecCompliantForm: Wh,
  toJSONObject: Hh,
  isAsyncFn: qh,
  isThenable: Gh
};
function D(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
y.inherits(D, Error, {
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
const ba = D.prototype, xa = {};
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
  xa[t] = { value: t };
});
Object.defineProperties(D, xa);
Object.defineProperty(ba, "isAxiosError", { value: !0 });
D.from = (t, e, n, r, o, s) => {
  const i = Object.create(ba);
  return y.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), D.call(i, t.message, e, n, r, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
const Yh = null;
function ur(t) {
  return y.isPlainObject(t) || y.isArray(t);
}
function wa(t) {
  return y.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Oi(t, e, n) {
  return t ? t.concat(e).map(function(o, s) {
    return o = wa(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Kh(t) {
  return y.isArray(t) && !t.some(ur);
}
const Xh = y.toFlatObject(y, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function yn(t, e, n) {
  if (!y.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, w) {
    return !y.isUndefined(w[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, s = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(e);
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null)
      return "";
    if (y.isDate(m))
      return m.toISOString();
    if (!c && y.isBlob(m))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, g, w) {
    let x = m;
    if (m && !w && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && Kh(m) || (y.isFileList(m) || y.endsWith(g, "[]")) && (x = y.toArray(m)))
        return g = wa(g), x.forEach(function(b, C) {
          !(y.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Oi([g], C, s) : i === null ? g : g + "[]",
            l(b)
          );
        }), !1;
    }
    return ur(m) ? !0 : (e.append(Oi(w, g, s), l(m)), !1);
  }
  const f = [], h = Object.assign(Xh, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ur
  });
  function p(m, g) {
    if (!y.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(m), y.forEach(m, function(x, T) {
        (!(y.isUndefined(x) || x === null) && o.call(
          e,
          x,
          y.isString(T) ? T.trim() : T,
          g,
          h
        )) === !0 && p(x, g ? g.concat(T) : [T]);
      }), f.pop();
    }
  }
  if (!y.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), e;
}
function Di(t) {
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
function Kr(t, e) {
  this._pairs = [], t && yn(t, this, e);
}
const Ta = Kr.prototype;
Ta.append = function(e, n) {
  this._pairs.push([e, n]);
};
Ta.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Di);
  } : Di;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Jh(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ea(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Jh, o = n && n.serialize;
  let s;
  if (o ? s = o(e, n) : s = y.isURLSearchParams(e) ? e.toString() : new Kr(e, n).toString(r), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Zh {
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
    y.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Li = Zh, Ca = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Qh = typeof URLSearchParams < "u" ? URLSearchParams : Kr, tp = typeof FormData < "u" ? FormData : null, ep = typeof Blob < "u" ? Blob : null, np = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Qh,
    FormData: tp,
    Blob: ep
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sa = typeof window < "u" && typeof document < "u", rp = ((t) => Sa && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), op = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sa,
  hasStandardBrowserEnv: rp,
  hasStandardBrowserWebWorkerEnv: op
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...ip,
  ...np
};
function sp(t, e) {
  return yn(t, new ht.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ht.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function ap(t) {
  return y.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function cp(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function Pa(t) {
  function e(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, c ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), e(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = cp(o[i])), !a);
  }
  if (y.isFormData(t) && y.isFunction(t.entries)) {
    const n = {};
    return y.forEachEntry(t, (r, o) => {
      e(ap(r), o, n, 0);
    }), n;
  }
  return null;
}
function lp(t, e, n) {
  if (y.isString(t))
    try {
      return (e || JSON.parse)(t), y.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Xr = {
  transitional: Ca,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(e);
    if (s && y.isHTMLForm(e) && (e = new FormData(e)), y.isFormData(e))
      return o ? JSON.stringify(Pa(e)) : e;
    if (y.isArrayBuffer(e) || y.isBuffer(e) || y.isStream(e) || y.isFile(e) || y.isBlob(e))
      return e;
    if (y.isArrayBufferView(e))
      return e.buffer;
    if (y.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return sp(e, this.formSerializer).toString();
      if ((a = y.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return yn(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), lp(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Xr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && y.isString(e) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? D.from(a, D.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ht.classes.FormData,
    Blob: ht.classes.Blob
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
y.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Xr.headers[t] = {};
});
const Jr = Xr, up = y.toObjectSet([
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
]), fp = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || e[n] && up[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Fi = Symbol("internals");
function re(t) {
  return t && String(t).trim().toLowerCase();
}
function Ne(t) {
  return t === !1 || t == null ? t : y.isArray(t) ? t.map(Ne) : String(t);
}
function dp(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const hp = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Un(t, e, n, r, o) {
  if (y.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!y.isString(e)) {
    if (y.isString(r))
      return e.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(e);
  }
}
function pp(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function mp(t, e) {
  const n = y.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, e, o, s, i);
      },
      configurable: !0
    });
  });
}
class vn {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function s(a, c, l) {
      const u = re(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Ne(a));
    }
    const i = (a, c) => y.forEach(a, (l, u) => s(l, u, c));
    return y.isPlainObject(e) || e instanceof this.constructor ? i(e, n) : y.isString(e) && (e = e.trim()) && !hp(e) ? i(fp(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = re(e), e) {
      const r = y.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return dp(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = re(e), e) {
      const r = y.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Un(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = re(i), i) {
        const a = y.findKey(r, i);
        a && (!n || Un(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return y.isArray(e) ? e.forEach(s) : s(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || Un(this, this[s], s, e, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = Ne(o), delete n[s];
        return;
      }
      const a = e ? pp(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Ne(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && y.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Fi] = this[Fi] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = re(i);
      r[a] || (mp(o, i), r[a] = !0);
    }
    return y.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
vn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(vn.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
y.freezeMethods(vn);
const Tt = vn;
function zn(t, e) {
  const n = this || Jr, r = e || n, o = Tt.from(r.headers);
  let s = r.data;
  return y.forEach(t, function(a) {
    s = a.call(n, s, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), s;
}
function Aa(t) {
  return !!(t && t.__CANCEL__);
}
function Se(t, e, n) {
  D.call(this, t ?? "canceled", D.ERR_CANCELED, e, n), this.name = "CanceledError";
}
y.inherits(Se, D, {
  __CANCEL__: !0
});
function gp(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new D(
    "Request failed with status code " + n.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const yp = ht.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, s) {
      const i = [t + "=" + encodeURIComponent(e)];
      y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), y.isString(r) && i.push("path=" + r), y.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function vp(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function bp(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ra(t, e) {
  return t && !vp(e) ? bp(t, e) : e;
}
const xp = ht.hasStandardBrowserEnv ? (
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
function wp(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Tp(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, s = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const l = Date.now(), u = r[s];
    i || (i = l), n[o] = c, r[o] = l;
    let f = s, h = 0;
    for (; f !== o; )
      h += n[f++], f = f % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), l - i < e)
      return;
    const p = u && l - u;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Mi(t, e) {
  let n = 0;
  const r = Tp(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, c = r(a), l = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && l ? (i - s) / c : void 0,
      event: o
    };
    u[e ? "download" : "upload"] = !0, t(u);
  };
}
const Ep = typeof XMLHttpRequest < "u", Cp = Ep && function(t) {
  return new Promise(function(n, r) {
    let o = t.data;
    const s = Tt.from(t.headers).normalize();
    let { responseType: i, withXSRFToken: a } = t, c;
    function l() {
      t.cancelToken && t.cancelToken.unsubscribe(c), t.signal && t.signal.removeEventListener("abort", c);
    }
    let u;
    if (y.isFormData(o)) {
      if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((u = s.getContentType()) !== !1) {
        const [g, ...w] = u ? u.split(";").map((x) => x.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (t.auth) {
      const g = t.auth.username || "", w = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + w));
    }
    const h = Ra(t.baseURL, t.url);
    f.open(t.method.toUpperCase(), Ea(h, t.params, t.paramsSerializer), !0), f.timeout = t.timeout;
    function p() {
      if (!f)
        return;
      const g = Tt.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: g,
        config: t,
        request: f
      };
      gp(function(b) {
        n(b), l();
      }, function(b) {
        r(b), l();
      }, x), f = null;
    }
    if ("onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, f.onabort = function() {
      f && (r(new D("Request aborted", D.ECONNABORTED, t, f)), f = null);
    }, f.onerror = function() {
      r(new D("Network Error", D.ERR_NETWORK, t, f)), f = null;
    }, f.ontimeout = function() {
      let w = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const x = t.transitional || Ca;
      t.timeoutErrorMessage && (w = t.timeoutErrorMessage), r(new D(
        w,
        x.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        t,
        f
      )), f = null;
    }, ht.hasStandardBrowserEnv && (a && y.isFunction(a) && (a = a(t)), a || a !== !1 && xp(h))) {
      const g = t.xsrfHeaderName && t.xsrfCookieName && yp.read(t.xsrfCookieName);
      g && s.set(t.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in f && y.forEach(s.toJSON(), function(w, x) {
      f.setRequestHeader(x, w);
    }), y.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials), i && i !== "json" && (f.responseType = t.responseType), typeof t.onDownloadProgress == "function" && f.addEventListener("progress", Mi(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Mi(t.onUploadProgress)), (t.cancelToken || t.signal) && (c = (g) => {
      f && (r(!g || g.type ? new Se(null, t, f) : g), f.abort(), f = null);
    }, t.cancelToken && t.cancelToken.subscribe(c), t.signal && (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
    const m = wp(h);
    if (m && ht.protocols.indexOf(m) === -1) {
      r(new D("Unsupported protocol " + m + ":", D.ERR_BAD_REQUEST, t));
      return;
    }
    f.send(o || null);
  });
}, fr = {
  http: Yh,
  xhr: Cp
};
y.forEach(fr, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const _i = (t) => `- ${t}`, Sp = (t) => y.isFunction(t) || t === null || t === !1, ka = {
  getAdapter: (t) => {
    t = y.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let i;
      if (r = n, !Sp(n) && (r = fr[(i = String(n)).toLowerCase()], r === void 0))
        throw new D(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? s.length > 1 ? `since :
` + s.map(_i).join(`
`) : " " + _i(s[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fr
};
function Wn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Se(null, t);
}
function Bi(t) {
  return Wn(t), t.headers = Tt.from(t.headers), t.data = zn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ka.getAdapter(t.adapter || Jr.adapter)(t).then(function(r) {
    return Wn(t), r.data = zn.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Tt.from(r.headers), r;
  }, function(r) {
    return Aa(r) || (Wn(t), r && r.response && (r.response.data = zn.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Tt.from(r.response.headers))), Promise.reject(r);
  });
}
const Ii = (t) => t instanceof Tt ? t.toJSON() : t;
function Kt(t, e) {
  e = e || {};
  const n = {};
  function r(l, u, f) {
    return y.isPlainObject(l) && y.isPlainObject(u) ? y.merge.call({ caseless: f }, l, u) : y.isPlainObject(u) ? y.merge({}, u) : y.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(l))
        return r(void 0, l, f);
    } else
      return r(l, u, f);
  }
  function s(l, u) {
    if (!y.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, u);
  }
  function a(l, u, f) {
    if (f in e)
      return r(l, u);
    if (f in t)
      return r(void 0, l);
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
    headers: (l, u) => o(Ii(l), Ii(u), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const f = c[u] || o, h = f(t[u], e[u], u);
    y.isUndefined(h) && f !== a || (n[u] = h);
  }), n;
}
const Va = "1.6.7", Zr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Zr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const $i = {};
Zr.transitional = function(e, n, r) {
  function o(s, i) {
    return "[Axios v" + Va + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (e === !1)
      throw new D(
        o(i, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return n && !$i[i] && ($i[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, i, a) : !0;
  };
};
function Pp(t, e, n) {
  if (typeof t != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = e[s];
    if (i) {
      const a = t[s], c = a === void 0 || i(a, s, t);
      if (c !== !0)
        throw new D("option " + s + " must be " + c, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new D("Unknown option " + s, D.ERR_BAD_OPTION);
  }
}
const dr = {
  assertOptions: Pp,
  validators: Zr
}, Ct = dr.validators;
class en {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Li(),
      response: new Li()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Kt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && dr.assertOptions(r, {
      silentJSONParsing: Ct.transitional(Ct.boolean),
      forcedJSONParsing: Ct.transitional(Ct.boolean),
      clarifyTimeoutError: Ct.transitional(Ct.boolean)
    }, !1), o != null && (y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : dr.assertOptions(o, {
      encode: Ct.function,
      serialize: Ct.function
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
    ), n.headers = Tt.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, h;
    if (!c) {
      const m = [Bi.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, l), h = m.length, u = Promise.resolve(n); f < h; )
        u = u.then(m[f++], m[f++]);
      return u;
    }
    h = a.length;
    let p = n;
    for (f = 0; f < h; ) {
      const m = a[f++], g = a[f++];
      try {
        p = m(p);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      u = Bi.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = l.length; f < h; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(e) {
    e = Kt(this.defaults, e);
    const n = Ra(e.baseURL, e.url);
    return Ea(n, e.params, e.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(e) {
  en.prototype[e] = function(n, r) {
    return this.request(Kt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, i, a) {
      return this.request(Kt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  en.prototype[e] = n(), en.prototype[e + "Form"] = n(!0);
});
const Ue = en;
class Qr {
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
      r.reason || (r.reason = new Se(s, i, a), n(r.reason));
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
      token: new Qr(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const Ap = Qr;
function Rp(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function kp(t) {
  return y.isObject(t) && t.isAxiosError === !0;
}
const hr = {
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
Object.entries(hr).forEach(([t, e]) => {
  hr[e] = t;
});
const Vp = hr;
function Oa(t) {
  const e = new Ue(t), n = fa(Ue.prototype.request, e);
  return y.extend(n, Ue.prototype, e, { allOwnKeys: !0 }), y.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Oa(Kt(t, o));
  }, n;
}
const z = Oa(Jr);
z.Axios = Ue;
z.CanceledError = Se;
z.CancelToken = Ap;
z.isCancel = Aa;
z.VERSION = Va;
z.toFormData = yn;
z.AxiosError = D;
z.Cancel = z.CanceledError;
z.all = function(e) {
  return Promise.all(e);
};
z.spread = Rp;
z.isAxiosError = kp;
z.mergeConfig = Kt;
z.AxiosHeaders = Tt;
z.formToJSON = (t) => Pa(y.isHTMLForm(t) ? new FormData(t) : t);
z.getAdapter = ka.getAdapter;
z.HttpStatusCode = Vp;
z.default = z;
const Op = z;
function Dp({
  children: t,
  img: e,
  outline: n,
  ...r
}) {
  const [o, s] = it(), i = mt(() => hh(), [e]);
  return K(() => {
    (async () => {
      if (!e)
        return s(e);
      try {
        const u = (await Op.get(e, { responseType: "blob" })).data, f = new FileReader();
        f.onloadend = () => {
          const h = f.result;
          typeof h == "string" && s(h);
        }, f.readAsDataURL(u);
      } catch (l) {
        console.error("Error loading image:", l), s(void 0);
      }
    })();
  }, [e]), /* @__PURE__ */ I(Lp, { ...r, children: [
    /* @__PURE__ */ I(
      Fp,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          o && /* @__PURE__ */ S("defs", { children: /* @__PURE__ */ S(
            "pattern",
            {
              id: i,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ S(
                "image",
                {
                  xlinkHref: o,
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
              fill: o ? `url(#${i})` : "currentColor",
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
const Lp = P.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(t) => t.theme.theme});
`, Fp = P.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Mp = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, _p = {
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
  base: "1.125rem",
  // 18px
  md: "1rem",
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
function to({
  children: t,
  lineHeight: e,
  as: n = "p",
  size: r = "md",
  weight: o = "regular",
  variant: s = "primary",
  ...i
}) {
  return /* @__PURE__ */ S(
    Bp,
    {
      as: n,
      $size: r,
      $weight: o,
      $variant: s,
      $lineHeight: e,
      ...i,
      children: t
    }
  );
}
const Bp = P.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(t) => _p[t.$size]};
  font-weight: ${(t) => Mp[t.$weight]};
  ${(t) => t.$lineHeight && `line-height: ${t.$lineHeight};`}
  color: ${(t) => t.$variant === "primary" ? t.theme.primaryText : t.theme.secondaryText};
`;
function Fm({
  children: t,
  small: e = !1,
  active: n,
  title: r,
  description: o,
  img: s,
  dragControls: i,
  ...a
}) {
  return /* @__PURE__ */ I(Ip, { small: e, active: n, ...a, children: [
    /* @__PURE__ */ I($p, { small: e, children: [
      /* @__PURE__ */ S(jp, { small: e, img: s, children: t }),
      /* @__PURE__ */ I("div", { children: [
        /* @__PURE__ */ S(Np, { small: e, children: r }),
        /* @__PURE__ */ S(Up, { small: e, children: o })
      ] })
    ] }),
    i && /* @__PURE__ */ S(sh, { dragControls: i })
  ] });
}
const Ip = P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(t) => t.small ? "10px" : "20px"};
  overflow: hidden;
  cursor: pointer;
  padding: ${(t) => t.small ? "10px" : "15px"};
  height: ${(t) => t.small ? "36px" : "48px"};
  background-color: ${(t) => t.active ? t.theme.secondaryBtnHover : "transparent"};
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: ${(t) => t.active ? "none" : t.theme.secondaryItemHover};
  };
`, $p = P.div`
  display: flex;
  align-items: center;
  gap: ${(t) => t.small ? "12px" : "17px"};
`, jp = P(Dp)`
  position: relative;
  flex-shrink: 0;
  width: ${(t) => t.small ? "32px" : "48px"};
  height: ${(t) => t.small ? "32px" : "48px"};
  color: rgb(${(t) => t.theme.theme});
`, Np = P(to).attrs({
  noMargin: !0,
  heading: !1
})`
  font-weight: 500;
  font-size: ${(t) => t.small ? "16px" : "20px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
  color: ${(t) => t.theme.primaryTextv2};
`, Up = P(to).attrs({
  noMargin: !0,
  heading: !1
})`
  font-size: ${(t) => t.small ? "10px" : "14px"};
  font-weight: 500;
`, Mm = P(rh)`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, _m = P.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`;
function ie(t) {
  return {
    top: {
      bottom: "125%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "125%",
      left: "0"
    },
    topEnd: {
      bottom: "125%",
      right: "0"
    },
    bottom: {
      top: "125%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "125%",
      left: "50%"
    },
    bottomEnd: {
      top: "112%",
      right: "0"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    leftStart: {
      top: "0",
      right: "125%"
    },
    leftEnd: {
      bottom: "0",
      right: "125%"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    },
    rightStart: {
      top: "0",
      left: "125%"
    },
    rightEnd: {
      bottom: "0",
      left: "125%"
    }
  }[t];
}
function zp(t) {
  let e = "";
  return t.startsWith("top") ? e += "bottom" : t.startsWith("bottom") ? e += "top" : t.startsWith("right") ? e += "left" : e += "right", e += `: -8px;
`, t.startsWith("top") || t.startsWith("bottom") ? t.includes("Start") ? e += "left: 8px;" : t.includes("End") ? e += "right: 8px;" : (e += `left: 50%;
`, e += "transform: translate(-50%, 0);") : t.includes("Start") ? e += "top: 8px;" : t.includes("End") ? e += "bottom: 8px;" : (e += `top: 50%;
`, e += "transform: translate(0, -50%);"), e;
}
function Bm({
  children: t,
  content: e,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = it(!1);
  K(() => (document.addEventListener("mousedown", u), () => {
    document.removeEventListener("mousedown", u);
  }));
  const c = et(), l = et();
  function u(f) {
    var h, p;
    o === "click" && (!i && ((h = l.current) != null && h.contains(f.target)) ? a(!0) : i && !((p = c.current) != null && p.contains(f.target)) && (f.preventDefault(), f.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ I(
    Wp,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: l,
      children: [
        /* @__PURE__ */ S(Xt, { children: i && /* @__PURE__ */ S(
          Hp,
          {
            style: r || ie(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: c,
            children: /* @__PURE__ */ S(gr, { ...s, children: e })
          }
        ) }),
        t
      ]
    }
  );
}
const Wp = P.div`
  position: relative;
  display: inline-block;
`, Hp = P(Et.div)`
  position: absolute;
  z-index: 100;
`, Da = Mt({
  toasts: [],
  setToast() {
  }
}), qp = () => H(Da);
let Gp = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Yp({
  children: t,
  duration: e,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s
}) {
  const [i, a] = it(100);
  return K(() => {
    const c = setInterval(() => {
      if (i === 0) {
        clearInterval(c);
        return;
      }
      const l = (/* @__PURE__ */ new Date()).getTime();
      a(100 - (l - s) / e * 100);
    }, e / 100);
    return () => clearInterval(c);
  }, [i]), /* @__PURE__ */ I(Kp, { children: [
    /* @__PURE__ */ I(Xp, { children: [
      /* @__PURE__ */ S(
        Jp,
        {
          as: r === "info" ? aa : r === "error" ? nh : Jd,
          type: r
        }
      ),
      /* @__PURE__ */ S(Zp, { children: t })
    ] }),
    /* @__PURE__ */ I(Qp, { children: [
      n && /* @__PURE__ */ S(
        Ma,
        {
          onClick: async () => {
            await n.task(), o();
          },
          children: n.name
        }
      ),
      /* @__PURE__ */ S(tm, { onClick: o, children: /* @__PURE__ */ S(em, {}) })
    ] })
  ] });
}
const La = ".2rem", Kp = P(Et.div).attrs({
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
  background-color: rgb(
    ${(t) => t.theme.displayTheme === "light" ? "0, 0, 0" : t.theme.cardBackground}
  );
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${La});
  padding: 0.5rem 1.1rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(t) => t.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + t.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, Fa = {
  success: "20, 209, 16",
  error: "255, 0, 0"
};
P.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${La};
  width: ${(t) => t.progress || "100"}%;
  background-color: rgb(
    ${(t) => t.type === "info" ? t.theme.theme : Fa[t.type]}
  );
  transition: all 0.05s ease-in-out;
`;
const nn = ".35rem", Xp = P.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, Jp = P(aa)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  color: rgb(
    ${(t) => t.type === "info" ? t.theme.theme : Fa[t.type]}
  );
`, Zp = P.div`
  padding: ${nn} 0;
`, Qp = P.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, pr = "1rem", Ma = P.button`
  font-size: ${pr};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${nn} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, tm = P(Ma)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${nn} * 2 + ${pr});
  height: calc(${nn} * 2 + ${pr});
`, em = P(Qd)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, nm = ({ setToasts: t }) => {
  const { toasts: e } = qp();
  return /* @__PURE__ */ S(rm, { children: /* @__PURE__ */ S(Xt, { children: e.map((n, r) => /* @__PURE__ */ S(
    Yp,
    {
      action: n.action,
      duration: n.duration,
      type: n.type,
      close: (o) => {
        t((s) => s.filter((i) => i.id !== o));
      },
      addedAt: n.addedAt,
      children: n.content
    },
    r
  )) }) });
}, rm = P.div`
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
`, Im = {
  displayTheme: "light",
  theme: "171, 154, 255",
  primaryText: "#121212",
  secondaryText: "#666",
  cardBorder: "235, 235, 241",
  background: "255, 255, 255",
  cardBackground: "#FFF",
  // New styles:
  backgroundv2: "#FFFFFF",
  primary: "#7866D3",
  primaryBtnHover: "#5647A0",
  secondaryBtnHover: "#DDD9F4",
  secondaryItemHover: "#EBE8F8",
  buttonDisabled: "#BCB3E9",
  primaryTextv2: "#191919",
  secondaryTextv2: "#757575",
  buttonDisabledText: "#DDD9F4",
  inputField: "#757575",
  success: "#17A815",
  fail: "#EB0000",
  backgroundSecondary: "#CCCCCC",
  delete: "#F58080",
  secondaryDelete: "#F58080",
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
  }
}, $m = {
  displayTheme: "dark",
  theme: "171, 154, 255",
  primaryText: "#EEE",
  secondaryText: "#AAA",
  cardBorder: "44, 44, 47",
  background: "0, 0, 0",
  cardBackground: "#121212",
  // New styles:
  backgroundv2: "#191919",
  primary: "#8E7BEA",
  primaryBtnHover: "#6751D0",
  secondaryBtnHover: "#36324D",
  secondaryItemHover: "#2B2838",
  buttonDisabled: "#544A81",
  primaryTextv2: "#FFFFFF",
  secondaryTextv2: "#A3A3A3",
  buttonDisabledText: "#A9A4C0",
  inputField: "#847F90",
  success: "#14D110",
  fail: "#FF1A1A",
  backgroundSecondary: "#333333",
  delete: "#8C1A1A",
  secondaryDelete: "#C51A1A",
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
  }
};
function jm({
  children: t,
  theme: e
}) {
  const [n, r] = it([]);
  function o(s) {
    const i = Gp();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((c) => c.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ S(pc, { theme: e, children: /* @__PURE__ */ I(Da.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ S(nm, { setToasts: r }),
    t
  ] }) });
}
const om = {
  popup: {
    normal: "20px",
    slim: "12px"
  },
  page: {
    normal: "12vw",
    slim: "24px"
  }
}, Nm = P.div`
  position: relative;
  padding: 1rem
    ${(t) => om[t.type || "popup"][t.size || "normal"]};
`;
function Um({
  children: t,
  label: e,
  fullWidth: n,
  small: r,
  status: o = "default",
  icon: s,
  ...i
}) {
  const a = mt(
    () => ({ fullWidth: n, small: r, status: o, ...i }),
    [n, r, o, i]
  );
  return /* @__PURE__ */ I(rn, { children: [
    e && /* @__PURE__ */ S(ia, { children: e }),
    /* @__PURE__ */ I(
      im,
      {
        fullWidth: n,
        small: r,
        status: o ?? "default",
        children: [
          /* @__PURE__ */ S(sm, { ...a, children: t }),
          /* @__PURE__ */ S(
            sa,
            {
              fullWidth: n,
              small: r,
              status: o ?? "default",
              children: s || /* @__PURE__ */ S(Gr, {})
            }
          )
        ]
      }
    )
  ] });
}
const im = P(oa)`
  color: rgb(${(t) => t.theme.theme});
`, sm = P.select`
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(${(t) => t.theme.theme});
  font-size: ${(t) => t.small ? ".9rem" : "1.2rem"};
  font-weight: 500;
  padding: ${({ small: t }) => (t ? tn / 3 * 2 : tn) + "rem"}
    ${({ small: t }) => (t ? Yt / 3 * 2 : Yt) + "rem"};
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 15;
  transition: all 0.23s ease-in-out;

  &::-ms-expand {
    display: none;
  }
`;
function zm({
  children: t,
  label: e,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = mt(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ I(rn, { children: [
    e && /* @__PURE__ */ S(la, { children: e }),
    /* @__PURE__ */ I(
      ca,
      {
        fullWidth: n,
        small: r,
        status: o ?? "default",
        children: [
          /* @__PURE__ */ S(am, { ...i, children: t }),
          /* @__PURE__ */ S(
            ua,
            {
              fullWidth: n,
              small: r,
              status: o ?? "default",
              children: /* @__PURE__ */ S(Gr, {})
            }
          )
        ]
      }
    )
  ] });
}
const am = P.select`
    outline: none;
    border: none;
    background-color: transparent;
    color: ${(t) => t.theme.primaryTextv2};

    font-size: 16px;
    font-weight: 500;
    padding: ${(t) => t.small ? "8.5px 15px" : "13.5px 15px"};
    line-height: 22px;
    width: 100%;
    cursor: pointer;
    transition: all 0.23s ease-in-out;
    z-index: 15;

    -webkit-appearance: none;
    -moz-appearance: none;
  
    &::-ms-expand {
      display: none;
    };

    option {

    };
  `;
function Wm({
  children: t,
  content: e,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, c, l;
  const [s, i] = it(!1);
  return /* @__PURE__ */ I(
    cm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ S(Xt, { children: s && /* @__PURE__ */ S(
          lm,
          {
            ...o,
            position: r,
            style: ie(r),
            initial: {
              opacity: 0,
              transform: (((a = ie(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((c = ie(r)) == null ? void 0 : c.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((l = ie(r)) == null ? void 0 : l.transform) || "") + " scale(.95)"
            },
            transition: { duration: 0.23, ease: "easeInOut" },
            children: e
          }
        ) }),
        t
      ]
    }
  );
}
const cm = P.div`
  position: relative;
  display: inline-flex;
  ${(t) => t.underline ? "border-bottom: 1px dotted rgb(" + t.theme.cardBorder + ");" : ""}
  ${(t) => t.underline ? "cursor: pointer;" : ""}
`, lm = P(Et.div)`
  position: absolute;
  padding: 0.37rem 0.58rem;
  border-radius: 7px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #eaeaea;
  background-color: #18191c;
  z-index: 100;
  width: max-content;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);

  &::after {
    position: absolute;
    content: "";
    border: 4px solid;
    border-color: ${(t) => t.position.startsWith("top") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("right") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("bottom") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("left") ? "#18191C" : "transparent"};
    ${(t) => zp(t.position)}
  }
`;
function Be(t) {
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
function um(t) {
  let e = "";
  return t.startsWith("top") ? e += "bottom" : t.startsWith("bottom") ? e += "top" : t.startsWith("right") ? e += "left" : e += "right", e += `: -15px;
`, t.startsWith("top") || t.startsWith("bottom") ? t.includes("Start") ? e += "left: 15px;" : t.includes("End") ? e += "right: 15px;" : (e += `left: 50%;
`, e += "transform: translate(-50%, 0);") : t.includes("Start") ? e += "top: 15px;" : t.includes("End") ? e += "bottom: 15px;" : (e += `top: 50%;
`, e += "transform: translate(0, -50%);"), e;
}
function Hm({
  children: t,
  content: e,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, c, l;
  const [s, i] = it(!1);
  return /* @__PURE__ */ I(
    fm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ S(Xt, { children: s && /* @__PURE__ */ S(
          dm,
          {
            ...o,
            position: r,
            style: Be(r),
            initial: {
              opacity: 0,
              transform: (((a = Be(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((c = Be(r)) == null ? void 0 : c.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((l = Be(r)) == null ? void 0 : l.transform) || "") + " scale(.95)"
            },
            transition: { duration: 0.23, ease: "easeInOut" },
            children: e
          }
        ) }),
        t
      ]
    }
  );
}
const fm = P.div`
  position: relative;
  display: inline-flex;
  ${(t) => t.underline ? "border-bottom: 1px dotted rgb(" + t.theme.cardBorder + ");" : ""}
  ${(t) => t.underline ? "cursor: pointer;" : ""}
`, dm = P(Et.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 0px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background-color: ${(t) => t.theme.backgroundSecondary};
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
    border-color: ${(t) => t.position.startsWith("top") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("right") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("bottom") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("left") ? t.theme.backgroundSecondary : "transparent"};
    ${(t) => um(t.position)}
  }
`, qm = P.span`
  display: block;
  height: ${({ y: t }) => t ? `${t}rem` : "0"};
  width: ${({ x: t }) => t ? `${t}rem` : "0"};
`;
function Gm({
  children: t,
  accept: e,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = it([]);
  return K(() => {
    if (!(r != null && r.current))
      return;
    const a = () => {
      var l;
      const c = (l = r == null ? void 0 : r.current) == null ? void 0 : l.files;
      if (!c || c.length === 0)
        return i([]);
      i(Array.from(c).map((u) => u.name));
    };
    return r.current.addEventListener("change", a), () => {
      var c;
      return (c = r.current) == null ? void 0 : c.removeEventListener("change", a);
    };
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ I(hm, { ...o, children: [
    /* @__PURE__ */ S(to, { children: s.length === 0 && t || s.join(", ") }),
    /* @__PURE__ */ S(mm, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ S(th, {}) }),
    /* @__PURE__ */ S(pm, { accept: e, multiple: n, ref: r })
  ] });
}
const hm = P(gr).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, pm = P.input.attrs({
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
`, mm = P(wc).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Ym({
  children: t,
  open: e,
  setOpen: n,
  actions: r,
  root: o
}) {
  return Ni.createPortal(
    /* @__PURE__ */ S(Xt, { children: e && /* @__PURE__ */ S(gm, { onClick: () => n(!1), children: /* @__PURE__ */ I(ym, { onClick: (s) => s.stopPropagation(), children: [
      /* @__PURE__ */ S(vm, { children: t }),
      r && /* @__PURE__ */ S(bm, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const gm = P(Et.div).attrs({
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
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`, ym = P(gr)`
  padding: 0;
  background-color: rgb(${(t) => t.theme.background});
  max-width: 47%;
  min-width: 30%;
  overflow: hidden;
  margin: auto;

  @media screen and (max-width: 720px) {
    max-width: 94vw;
  }
`, vm = P.div`
  padding: 1rem;
`, bm = P.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`, Km = P.button`
  outline: none;
  border: none;
  border-top: 1px solid rgb(${(t) => t.theme.cardBorder});
  background-color: transparent;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  color: rgb(${(t) => t.theme.secondaryText});
  background-color: transparent;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(${(t) => t.theme.cardBorder}, 0.35);
  }
`;
function Xm({
  children: t,
  open: e,
  setOpen: n,
  actions: r,
  root: o
}) {
  return Ni.createPortal(
    /* @__PURE__ */ S(Xt, { children: e && /* @__PURE__ */ S(xm, { onClick: () => n(!1), children: /* @__PURE__ */ I(wm, { onClick: (s) => s.stopPropagation(), children: [
      /* @__PURE__ */ S(Tm, { children: t }),
      r && /* @__PURE__ */ S(Em, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const xm = P(Et.div).attrs({
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
`, wm = P.div`
  background-color: ${(t) => t.theme.displayTheme === "light" ? t.theme.backgroundv2 : t.theme.backgroundSecondary};
  outline: 1px solid #7866d3;
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 24px 30px;
  box-sizing: border-box;
  gap: 16px;
`, Tm = P.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(t) => t.theme.primaryTextv2};
  line-height: 25px;
  align-self: stretch;
`, Em = P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;
export {
  $m as ARCONNECT_DARK_THEME,
  Im as ARCONNECT_LIGHT_THEME,
  wc as Button,
  gr as Card,
  Om as Checkbox,
  oh as ErrorMsg,
  Gm as FileInput,
  sa as IconWrapper,
  ua as IconWrapperV2,
  Dm as Input,
  Xd as InputElement,
  Lm as InputV2,
  ih as InputV2Element,
  ca as InputV2Wrapper,
  oa as InputWrapper,
  ia as Label,
  la as LabelV2,
  Fm as ListItem,
  Mm as ListItemIcon,
  _m as ListItemImg,
  vc as Loading,
  Ym as Modal,
  Km as ModalButton,
  Xm as ModalV2,
  Bm as Popover,
  jm as Provider,
  Nm as Section,
  Um as Select,
  zm as SelectV2,
  qm as Spacer,
  to as Text,
  Wm as Tooltip,
  Hm as TooltipV2,
  Yt as side_padding,
  tn as top_padding,
  Rm as useCheckbox,
  Am as useInput,
  km as useModal,
  qp as useToasts
};
