var U_ = Object.defineProperty,
  B_ = Object.defineProperties;
var j_ = Object.getOwnPropertyDescriptors;
var Hd = Object.getOwnPropertySymbols;
var F_ = Object.prototype.hasOwnProperty,
  W_ = Object.prototype.propertyIsEnumerable;
var yo = (a, r, t) =>
    r in a
      ? U_(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[r] = t),
  Tr = (a, r) => {
    for (var t in r || (r = {})) F_.call(r, t) && yo(a, t, r[t]);
    if (Hd) for (var t of Hd(r)) W_.call(r, t) && yo(a, t, r[t]);
    return a;
  },
  $i = (a, r) => B_(a, j_(r));
var xo = (a, r, t) => (yo(a, typeof r != "symbol" ? r + "" : r, t), t);
import {
  d as H_,
  r as W,
  a as he,
  c as A,
  b as E,
  n as $e,
  u as $,
  e as Tn,
  o as k,
  v as Ur,
  f as pe,
  w as C,
  g as yt,
  h as bs,
  T as dr,
  i as z_,
  j as J_,
  k as ct,
  R as G_,
  l as Ro,
  p as dc,
  m as p,
  C as cc,
  q as ys,
  s as Ne,
  t as be,
  x as Y,
  D as q_,
  y as V_,
  z as Ge,
  L as Y_,
  F as qe,
  A as hc,
  I as X_,
  Q as cn,
  _ as ks,
  B as Hi,
  E as Q,
  G as $s,
  Y as Es,
  H as $n,
  J as K_,
  K as Q_,
  M as zd,
  N as Z_,
  O as Xo,
  P as Ko,
  S as Ni,
  U as fc,
  V as pc,
  $ as eb,
  W as Ss,
  X as tb,
  Z as Jd,
  a0 as Qo,
  a1 as ln,
  a2 as un,
  a3 as Zo,
  a4 as el,
  a5 as nb,
  a6 as rb,
  a7 as sb,
  a8 as ib,
  a9 as ab,
  aa as ob,
} from "./vendor.678adbdb.js";
const lb = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const d of l.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = t(o);
    fetch(o.href, l);
  }
};
lb();
const Se = H_(
    "main",
    () => {
      const a = W(!1),
        r = W(!1),
        t = W(!1),
        s = W(1),
        o = W({}),
        l = W([]),
        d = W([]),
        c = W([]),
        m = W({}),
        v = W(!1),
        f = W(!1);
      return {
        loading: a,
        darkMode: r,
        showProPlan: t,
        maxDashboards: s,
        user: o,
        dashboards: l,
        savedDashboards: d,
        deployedDashboards: c,
        previewDashboard: m,
        initializingData: v,
        initialized: f,
      };
    },
    { persist: !0 }
  ),
  ub = he({
    setup(a) {
      const r = Se();
      return (t, s) => {
        const o = Tn("router-view");
        return (
          k(), A("div", { class: $e($(r).darkMode ? "dark" : "") }, [E(o)], 2)
        );
      };
    },
  });
const db = "1.34.1",
  gc = { "X-Client-Info": `supabase-js/${db}` },
  cb = "supabase.auth.token";
function hb(a) {
  return a.replace(/\/$/, "");
}
const fb = () => typeof window != "undefined";
var Ts =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
const pb = (a) =>
    a.msg || a.message || a.error_description || a.error || JSON.stringify(a),
  gb = (a, r) => {
    if (typeof a.json != "function") return r(a);
    a.json().then((t) =>
      r({ message: pb(t), status: (a == null ? void 0 : a.status) || 500 })
    );
  },
  mb = (a, r, t) => {
    const s = { method: a, headers: (r == null ? void 0 : r.headers) || {} };
    return (
      a === "GET" ||
        ((s.headers = Object.assign(
          { "Content-Type": "text/plain;charset=UTF-8" },
          r == null ? void 0 : r.headers
        )),
        (s.body = JSON.stringify(t))),
      s
    );
  };
function zi(a, r, t, s, o) {
  return Ts(this, void 0, void 0, function* () {
    return new Promise((l, d) => {
      a(t, mb(r, s, o))
        .then((c) => {
          if (!c.ok) throw c;
          return s != null && s.noResolveJson ? l : c.json();
        })
        .then((c) => l(c))
        .catch((c) => gb(c, d));
    });
  });
}
function wo(a, r, t) {
  return Ts(this, void 0, void 0, function* () {
    return zi(a, "GET", r, t);
  });
}
function _t(a, r, t, s) {
  return Ts(this, void 0, void 0, function* () {
    return zi(a, "POST", r, s, t);
  });
}
function Gd(a, r, t, s) {
  return Ts(this, void 0, void 0, function* () {
    return zi(a, "PUT", r, s, t);
  });
}
function vb(a, r, t, s) {
  return Ts(this, void 0, void 0, function* () {
    return zi(a, "DELETE", r, s, t);
  });
}
const _b = "1.22.12",
  bb = "http://localhost:9999",
  yb = { "X-Client-Info": `gotrue-js/${_b}` },
  us = "supabase.auth.token",
  xb = {
    name: "sb",
    lifetime: 60 * 60 * 8,
    domain: "",
    path: "/",
    sameSite: "lax",
  };
function wb(a, r, t) {
  const s = t || {},
    o = encodeURIComponent,
    l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  if (typeof o != "function") throw new TypeError("option encode is invalid");
  if (!l.test(a)) throw new TypeError("argument name is invalid");
  const d = o(r);
  if (d && !l.test(d)) throw new TypeError("argument val is invalid");
  let c = a + "=" + d;
  if (s.maxAge != null) {
    const m = s.maxAge - 0;
    if (isNaN(m) || !isFinite(m))
      throw new TypeError("option maxAge is invalid");
    c += "; Max-Age=" + Math.floor(m);
  }
  if (s.domain) {
    if (!l.test(s.domain)) throw new TypeError("option domain is invalid");
    c += "; Domain=" + s.domain;
  }
  if (s.path) {
    if (!l.test(s.path)) throw new TypeError("option path is invalid");
    c += "; Path=" + s.path;
  }
  if (s.expires) {
    if (typeof s.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    c += "; Expires=" + s.expires.toUTCString();
  }
  if (
    (s.httpOnly && (c += "; HttpOnly"),
    s.secure && (c += "; Secure"),
    s.sameSite)
  )
    switch (
      typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite
    ) {
      case "lax":
        c += "; SameSite=Lax";
        break;
      case "strict":
        c += "; SameSite=Strict";
        break;
      case "none":
        c += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return c;
}
function kb(a) {
  if (!a || !a.headers || !a.headers.host)
    throw new Error('The "host" request header is not available');
  const r =
    (a.headers.host.indexOf(":") > -1 && a.headers.host.split(":")[0]) ||
    a.headers.host;
  return !(["localhost", "127.0.0.1"].indexOf(r) > -1 || r.endsWith(".local"));
}
function $b(a, r) {
  var t, s, o;
  return wb(a.name, a.value, {
    maxAge: a.maxAge,
    expires: new Date(Date.now() + a.maxAge * 1e3),
    httpOnly: !0,
    secure: r,
    path: (t = a.path) !== null && t !== void 0 ? t : "/",
    domain: (s = a.domain) !== null && s !== void 0 ? s : "",
    sameSite: (o = a.sameSite) !== null && o !== void 0 ? o : "lax",
  });
}
function Lo(a, r, t) {
  const s = t.map((l) => $b(l, kb(a))),
    o = r.getHeader("Set-Cookie");
  return (
    o &&
      (o instanceof Array
        ? Array.prototype.push.apply(s, o)
        : typeof o == "string" && s.push(o)),
    s
  );
}
function Ei(a, r, t) {
  r.setHeader("Set-Cookie", Lo(a, r, t));
}
var Cr =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function Eb(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var No = { exports: {} };
(function (a, r) {
  var t = typeof self != "undefined" ? self : Cr,
    s = (function () {
      function l() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (l.prototype = t), new l();
    })();
  (function (l) {
    (function (d) {
      var c = {
        searchParams: "URLSearchParams" in l,
        iterable: "Symbol" in l && "iterator" in Symbol,
        blob:
          "FileReader" in l &&
          "Blob" in l &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in l,
        arrayBuffer: "ArrayBuffer" in l,
      };
      function m(T) {
        return T && DataView.prototype.isPrototypeOf(T);
      }
      if (c.arrayBuffer)
        var v = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          f =
            ArrayBuffer.isView ||
            function (T) {
              return T && v.indexOf(Object.prototype.toString.call(T)) > -1;
            };
      function b(T) {
        if (
          (typeof T != "string" && (T = String(T)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T))
        )
          throw new TypeError("Invalid character in header field name");
        return T.toLowerCase();
      }
      function I(T) {
        return typeof T != "string" && (T = String(T)), T;
      }
      function U(T) {
        var B = {
          next: function () {
            var te = T.shift();
            return { done: te === void 0, value: te };
          },
        };
        return (
          c.iterable &&
            (B[Symbol.iterator] = function () {
              return B;
            }),
          B
        );
      }
      function j(T) {
        (this.map = {}),
          T instanceof j
            ? T.forEach(function (B, te) {
                this.append(te, B);
              }, this)
            : Array.isArray(T)
            ? T.forEach(function (B) {
                this.append(B[0], B[1]);
              }, this)
            : T &&
              Object.getOwnPropertyNames(T).forEach(function (B) {
                this.append(B, T[B]);
              }, this);
      }
      (j.prototype.append = function (T, B) {
        (T = b(T)), (B = I(B));
        var te = this.map[T];
        this.map[T] = te ? te + ", " + B : B;
      }),
        (j.prototype.delete = function (T) {
          delete this.map[b(T)];
        }),
        (j.prototype.get = function (T) {
          return (T = b(T)), this.has(T) ? this.map[T] : null;
        }),
        (j.prototype.has = function (T) {
          return this.map.hasOwnProperty(b(T));
        }),
        (j.prototype.set = function (T, B) {
          this.map[b(T)] = I(B);
        }),
        (j.prototype.forEach = function (T, B) {
          for (var te in this.map)
            this.map.hasOwnProperty(te) && T.call(B, this.map[te], te, this);
        }),
        (j.prototype.keys = function () {
          var T = [];
          return (
            this.forEach(function (B, te) {
              T.push(te);
            }),
            U(T)
          );
        }),
        (j.prototype.values = function () {
          var T = [];
          return (
            this.forEach(function (B) {
              T.push(B);
            }),
            U(T)
          );
        }),
        (j.prototype.entries = function () {
          var T = [];
          return (
            this.forEach(function (B, te) {
              T.push([te, B]);
            }),
            U(T)
          );
        }),
        c.iterable && (j.prototype[Symbol.iterator] = j.prototype.entries);
      function N(T) {
        if (T.bodyUsed) return Promise.reject(new TypeError("Already read"));
        T.bodyUsed = !0;
      }
      function F(T) {
        return new Promise(function (B, te) {
          (T.onload = function () {
            B(T.result);
          }),
            (T.onerror = function () {
              te(T.error);
            });
        });
      }
      function X(T) {
        var B = new FileReader(),
          te = F(B);
        return B.readAsArrayBuffer(T), te;
      }
      function K(T) {
        var B = new FileReader(),
          te = F(B);
        return B.readAsText(T), te;
      }
      function ee(T) {
        for (
          var B = new Uint8Array(T), te = new Array(B.length), Re = 0;
          Re < B.length;
          Re++
        )
          te[Re] = String.fromCharCode(B[Re]);
        return te.join("");
      }
      function re(T) {
        if (T.slice) return T.slice(0);
        var B = new Uint8Array(T.byteLength);
        return B.set(new Uint8Array(T)), B.buffer;
      }
      function ce() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (T) {
            (this._bodyInit = T),
              T
                ? typeof T == "string"
                  ? (this._bodyText = T)
                  : c.blob && Blob.prototype.isPrototypeOf(T)
                  ? (this._bodyBlob = T)
                  : c.formData && FormData.prototype.isPrototypeOf(T)
                  ? (this._bodyFormData = T)
                  : c.searchParams && URLSearchParams.prototype.isPrototypeOf(T)
                  ? (this._bodyText = T.toString())
                  : c.arrayBuffer && c.blob && m(T)
                  ? ((this._bodyArrayBuffer = re(T.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : c.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(T) || f(T))
                  ? (this._bodyArrayBuffer = re(T))
                  : (this._bodyText = T = Object.prototype.toString.call(T))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof T == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : c.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(T) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          c.blob &&
            ((this.blob = function () {
              var T = N(this);
              if (T) return T;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? N(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(X);
            })),
          (this.text = function () {
            var T = N(this);
            if (T) return T;
            if (this._bodyBlob) return K(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(ee(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          c.formData &&
            (this.formData = function () {
              return this.text().then(H);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var G = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function se(T) {
        var B = T.toUpperCase();
        return G.indexOf(B) > -1 ? B : T;
      }
      function D(T, B) {
        B = B || {};
        var te = B.body;
        if (T instanceof D) {
          if (T.bodyUsed) throw new TypeError("Already read");
          (this.url = T.url),
            (this.credentials = T.credentials),
            B.headers || (this.headers = new j(T.headers)),
            (this.method = T.method),
            (this.mode = T.mode),
            (this.signal = T.signal),
            !te &&
              T._bodyInit != null &&
              ((te = T._bodyInit), (T.bodyUsed = !0));
        } else this.url = String(T);
        if (
          ((this.credentials =
            B.credentials || this.credentials || "same-origin"),
          (B.headers || !this.headers) && (this.headers = new j(B.headers)),
          (this.method = se(B.method || this.method || "GET")),
          (this.mode = B.mode || this.mode || null),
          (this.signal = B.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && te)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(te);
      }
      D.prototype.clone = function () {
        return new D(this, { body: this._bodyInit });
      };
      function H(T) {
        var B = new FormData();
        return (
          T.trim()
            .split("&")
            .forEach(function (te) {
              if (te) {
                var Re = te.split("="),
                  Te = Re.shift().replace(/\+/g, " "),
                  Ae = Re.join("=").replace(/\+/g, " ");
                B.append(decodeURIComponent(Te), decodeURIComponent(Ae));
              }
            }),
          B
        );
      }
      function We(T) {
        var B = new j(),
          te = T.replace(/\r?\n[\t ]+/g, " ");
        return (
          te.split(/\r?\n/).forEach(function (Re) {
            var Te = Re.split(":"),
              Ae = Te.shift().trim();
            if (Ae) {
              var tn = Te.join(":").trim();
              B.append(Ae, tn);
            }
          }),
          B
        );
      }
      ce.call(D.prototype);
      function ie(T, B) {
        B || (B = {}),
          (this.type = "default"),
          (this.status = B.status === void 0 ? 200 : B.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in B ? B.statusText : "OK"),
          (this.headers = new j(B.headers)),
          (this.url = B.url || ""),
          this._initBody(T);
      }
      ce.call(ie.prototype),
        (ie.prototype.clone = function () {
          return new ie(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new j(this.headers),
            url: this.url,
          });
        }),
        (ie.error = function () {
          var T = new ie(null, { status: 0, statusText: "" });
          return (T.type = "error"), T;
        });
      var Oe = [301, 302, 303, 307, 308];
      (ie.redirect = function (T, B) {
        if (Oe.indexOf(B) === -1) throw new RangeError("Invalid status code");
        return new ie(null, { status: B, headers: { location: T } });
      }),
        (d.DOMException = l.DOMException);
      try {
        new d.DOMException();
      } catch {
        (d.DOMException = function (B, te) {
          (this.message = B), (this.name = te);
          var Re = Error(B);
          this.stack = Re.stack;
        }),
          (d.DOMException.prototype = Object.create(Error.prototype)),
          (d.DOMException.prototype.constructor = d.DOMException);
      }
      function ne(T, B) {
        return new Promise(function (te, Re) {
          var Te = new D(T, B);
          if (Te.signal && Te.signal.aborted)
            return Re(new d.DOMException("Aborted", "AbortError"));
          var Ae = new XMLHttpRequest();
          function tn() {
            Ae.abort();
          }
          (Ae.onload = function () {
            var nt = {
              status: Ae.status,
              statusText: Ae.statusText,
              headers: We(Ae.getAllResponseHeaders() || ""),
            };
            nt.url =
              "responseURL" in Ae
                ? Ae.responseURL
                : nt.headers.get("X-Request-URL");
            var Vn = "response" in Ae ? Ae.response : Ae.responseText;
            te(new ie(Vn, nt));
          }),
            (Ae.onerror = function () {
              Re(new TypeError("Network request failed"));
            }),
            (Ae.ontimeout = function () {
              Re(new TypeError("Network request failed"));
            }),
            (Ae.onabort = function () {
              Re(new d.DOMException("Aborted", "AbortError"));
            }),
            Ae.open(Te.method, Te.url, !0),
            Te.credentials === "include"
              ? (Ae.withCredentials = !0)
              : Te.credentials === "omit" && (Ae.withCredentials = !1),
            "responseType" in Ae && c.blob && (Ae.responseType = "blob"),
            Te.headers.forEach(function (nt, Vn) {
              Ae.setRequestHeader(Vn, nt);
            }),
            Te.signal &&
              (Te.signal.addEventListener("abort", tn),
              (Ae.onreadystatechange = function () {
                Ae.readyState === 4 &&
                  Te.signal.removeEventListener("abort", tn);
              })),
            Ae.send(typeof Te._bodyInit == "undefined" ? null : Te._bodyInit);
        });
      }
      return (
        (ne.polyfill = !0),
        l.fetch ||
          ((l.fetch = ne), (l.Headers = j), (l.Request = D), (l.Response = ie)),
        (d.Headers = j),
        (d.Request = D),
        (d.Response = ie),
        (d.fetch = ne),
        Object.defineProperty(d, "__esModule", { value: !0 }),
        d
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (r = o.fetch),
    (r.default = o.fetch),
    (r.fetch = o.fetch),
    (r.Headers = o.Headers),
    (r.Request = o.Request),
    (r.Response = o.Response),
    (a.exports = r);
})(No, No.exports);
var Ji = Eb(No.exports);
function jn(a) {
  return Math.round(Date.now() / 1e3) + a;
}
function Sb() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
    const r = (Math.random() * 16) | 0;
    return (a == "x" ? r : (r & 3) | 8).toString(16);
  });
}
const Fn = () => typeof window != "undefined";
function Wn(a, r) {
  var t;
  r ||
    (r =
      ((t = window == null ? void 0 : window.location) === null || t === void 0
        ? void 0
        : t.href) || ""),
    (a = a.replace(/[\[\]]/g, "\\$&"));
  const s = new RegExp("[?&#]" + a + "(=([^&#]*)|&|#|$)"),
    o = s.exec(r);
  return o ? (o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "") : null;
}
const Tb = (a) => {
  let r;
  return (
    a ? (r = a) : typeof fetch == "undefined" ? (r = Ji) : (r = fetch),
    (...t) => r(...t)
  );
};
var Ye =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
class Ob {
  constructor({ url: r = "", headers: t = {}, cookieOptions: s, fetch: o }) {
    (this.url = r),
      (this.headers = t),
      (this.cookieOptions = Object.assign(Object.assign({}, xb), s)),
      (this.fetch = Tb(o));
  }
  _createRequestHeaders(r) {
    const t = Object.assign({}, this.headers);
    return (t.Authorization = `Bearer ${r}`), t;
  }
  cookieName() {
    var r;
    return (r = this.cookieOptions.name) !== null && r !== void 0 ? r : "";
  }
  getUrlForProvider(r, t) {
    const s = [`provider=${encodeURIComponent(r)}`];
    return (
      t != null &&
        t.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
      t != null && t.scopes && s.push(`scopes=${encodeURIComponent(t.scopes)}`),
      `${this.url}/authorize?${s.join("&")}`
    );
  }
  signUpWithEmail(r, t, s = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = Object.assign({}, this.headers);
        let l = "";
        s.redirectTo &&
          (l = "?redirect_to=" + encodeURIComponent(s.redirectTo));
        const d = yield _t(
            this.fetch,
            `${this.url}/signup${l}`,
            {
              email: r,
              password: t,
              data: s.data,
              gotrue_meta_security: { hcaptcha_token: s.captchaToken },
            },
            { headers: o }
          ),
          c = Object.assign({}, d);
        return (
          c.expires_in && (c.expires_at = jn(d.expires_in)),
          { data: c, error: null }
        );
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  signInWithEmail(r, t, s = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = Object.assign({}, this.headers);
        let l = "?grant_type=password";
        s.redirectTo &&
          (l += "&redirect_to=" + encodeURIComponent(s.redirectTo));
        const d = yield _t(
            this.fetch,
            `${this.url}/token${l}`,
            { email: r, password: t },
            { headers: o }
          ),
          c = Object.assign({}, d);
        return (
          c.expires_in && (c.expires_at = jn(d.expires_in)),
          { data: c, error: null }
        );
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  signUpWithPhone(r, t, s = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = Object.assign({}, this.headers),
          l = yield _t(
            this.fetch,
            `${this.url}/signup`,
            {
              phone: r,
              password: t,
              data: s.data,
              gotrue_meta_security: { hcaptcha_token: s.captchaToken },
            },
            { headers: o }
          ),
          d = Object.assign({}, l);
        return (
          d.expires_in && (d.expires_at = jn(l.expires_in)),
          { data: d, error: null }
        );
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  signInWithPhone(r, t) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const s = Object.assign({}, this.headers),
          o = "?grant_type=password",
          l = yield _t(
            this.fetch,
            `${this.url}/token${o}`,
            { phone: r, password: t },
            { headers: s }
          ),
          d = Object.assign({}, l);
        return (
          d.expires_in && (d.expires_at = jn(l.expires_in)),
          { data: d, error: null }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  signInWithOpenIDConnect({
    id_token: r,
    nonce: t,
    client_id: s,
    issuer: o,
    provider: l,
  }) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const d = Object.assign({}, this.headers),
          c = "?grant_type=id_token",
          m = yield _t(
            this.fetch,
            `${this.url}/token${c}`,
            { id_token: r, nonce: t, client_id: s, issuer: o, provider: l },
            { headers: d }
          ),
          v = Object.assign({}, m);
        return (
          v.expires_in && (v.expires_at = jn(m.expires_in)),
          { data: v, error: null }
        );
      } catch (d) {
        return { data: null, error: d };
      }
    });
  }
  sendMagicLinkEmail(r, t = {}) {
    var s;
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = Object.assign({}, this.headers);
        let l = "";
        t.redirectTo &&
          (l += "?redirect_to=" + encodeURIComponent(t.redirectTo));
        const d = (s = t.shouldCreateUser) !== null && s !== void 0 ? s : !0;
        return {
          data: yield _t(
            this.fetch,
            `${this.url}/otp${l}`,
            {
              email: r,
              create_user: d,
              gotrue_meta_security: { hcaptcha_token: t.captchaToken },
            },
            { headers: o }
          ),
          error: null,
        };
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  sendMobileOTP(r, t = {}) {
    var s;
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = (s = t.shouldCreateUser) !== null && s !== void 0 ? s : !0,
          l = Object.assign({}, this.headers);
        return {
          data: yield _t(
            this.fetch,
            `${this.url}/otp`,
            {
              phone: r,
              create_user: o,
              gotrue_meta_security: { hcaptcha_token: t.captchaToken },
            },
            { headers: l }
          ),
          error: null,
        };
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  signOut(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        return (
          yield _t(
            this.fetch,
            `${this.url}/logout`,
            {},
            { headers: this._createRequestHeaders(r), noResolveJson: !0 }
          ),
          { error: null }
        );
      } catch (t) {
        return { error: t };
      }
    });
  }
  verifyMobileOTP(r, t, s = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const o = Object.assign({}, this.headers),
          l = yield _t(
            this.fetch,
            `${this.url}/verify`,
            { phone: r, token: t, type: "sms", redirect_to: s.redirectTo },
            { headers: o }
          ),
          d = Object.assign({}, l);
        return (
          d.expires_in && (d.expires_at = jn(l.expires_in)),
          { data: d, error: null }
        );
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  verifyOTP({ email: r, phone: t, token: s, type: o = "sms" }, l = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const d = Object.assign({}, this.headers),
          c = yield _t(
            this.fetch,
            `${this.url}/verify`,
            {
              email: r,
              phone: t,
              token: s,
              type: o,
              redirect_to: l.redirectTo,
            },
            { headers: d }
          ),
          m = Object.assign({}, c);
        return (
          m.expires_in && (m.expires_at = jn(c.expires_in)),
          { data: m, error: null }
        );
      } catch (d) {
        return { data: null, error: d };
      }
    });
  }
  inviteUserByEmail(r, t = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const s = Object.assign({}, this.headers);
        let o = "";
        return (
          t.redirectTo &&
            (o += "?redirect_to=" + encodeURIComponent(t.redirectTo)),
          {
            data: yield _t(
              this.fetch,
              `${this.url}/invite${o}`,
              { email: r, data: t.data },
              { headers: s }
            ),
            error: null,
          }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  resetPasswordForEmail(r, t = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const s = Object.assign({}, this.headers);
        let o = "";
        return (
          t.redirectTo &&
            (o += "?redirect_to=" + encodeURIComponent(t.redirectTo)),
          {
            data: yield _t(
              this.fetch,
              `${this.url}/recover${o}`,
              {
                email: r,
                gotrue_meta_security: { hcaptcha_token: t.captchaToken },
              },
              { headers: s }
            ),
            error: null,
          }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  refreshAccessToken(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const t = yield _t(
            this.fetch,
            `${this.url}/token?grant_type=refresh_token`,
            { refresh_token: r },
            { headers: this.headers }
          ),
          s = Object.assign({}, t);
        return (
          s.expires_in && (s.expires_at = jn(t.expires_in)),
          { data: s, error: null }
        );
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  setAuthCookie(r, t) {
    r.method !== "POST" &&
      (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
    const { event: s, session: o } = r.body;
    if (!s) throw new Error("Auth event missing!");
    if (s === "SIGNED_IN") {
      if (!o) throw new Error("Auth session missing!");
      Ei(
        r,
        t,
        [
          { key: "access-token", value: o.access_token },
          { key: "refresh-token", value: o.refresh_token },
        ].map((l) => {
          var d;
          return {
            name: `${this.cookieName()}-${l.key}`,
            value: l.value,
            domain: this.cookieOptions.domain,
            maxAge:
              (d = this.cookieOptions.lifetime) !== null && d !== void 0
                ? d
                : 0,
            path: this.cookieOptions.path,
            sameSite: this.cookieOptions.sameSite,
          };
        })
      );
    }
    s === "SIGNED_OUT" &&
      Ei(
        r,
        t,
        ["access-token", "refresh-token"].map((l) => ({
          name: `${this.cookieName()}-${l}`,
          value: "",
          maxAge: -1,
        }))
      ),
      t.status(200).json({});
  }
  deleteAuthCookie(r, t, { redirectTo: s = "/" }) {
    return (
      Ei(
        r,
        t,
        ["access-token", "refresh-token"].map((o) => ({
          name: `${this.cookieName()}-${o}`,
          value: "",
          maxAge: -1,
        }))
      ),
      t.redirect(307, s)
    );
  }
  getAuthCookieString(r, t) {
    r.method !== "POST" &&
      (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
    const { event: s, session: o } = r.body;
    if (!s) throw new Error("Auth event missing!");
    if (s === "SIGNED_IN") {
      if (!o) throw new Error("Auth session missing!");
      return Lo(
        r,
        t,
        [
          { key: "access-token", value: o.access_token },
          { key: "refresh-token", value: o.refresh_token },
        ].map((l) => {
          var d;
          return {
            name: `${this.cookieName()}-${l.key}`,
            value: l.value,
            domain: this.cookieOptions.domain,
            maxAge:
              (d = this.cookieOptions.lifetime) !== null && d !== void 0
                ? d
                : 0,
            path: this.cookieOptions.path,
            sameSite: this.cookieOptions.sameSite,
          };
        })
      );
    }
    return s === "SIGNED_OUT"
      ? Lo(
          r,
          t,
          ["access-token", "refresh-token"].map((l) => ({
            name: `${this.cookieName()}-${l}`,
            value: "",
            maxAge: -1,
          }))
        )
      : t.getHeader("Set-Cookie");
  }
  generateLink(r, t, s = {}) {
    return Ye(this, void 0, void 0, function* () {
      try {
        return {
          data: yield _t(
            this.fetch,
            `${this.url}/admin/generate_link`,
            {
              type: r,
              email: t,
              password: s.password,
              data: s.data,
              redirect_to: s.redirectTo,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  createUser(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const t = yield _t(this.fetch, `${this.url}/admin/users`, r, {
          headers: this.headers,
        });
        return { user: t, data: t, error: null };
      } catch (t) {
        return { user: null, data: null, error: t };
      }
    });
  }
  listUsers() {
    return Ye(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield wo(this.fetch, `${this.url}/admin/users`, {
            headers: this.headers,
          })).users,
          error: null,
        };
      } catch (r) {
        return { data: null, error: r };
      }
    });
  }
  getUserById(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        return {
          data: yield wo(this.fetch, `${this.url}/admin/users/${r}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  getUserByCookie(r, t) {
    return Ye(this, void 0, void 0, function* () {
      try {
        if (!r.cookies)
          throw new Error(
            "Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!"
          );
        const s = r.cookies[`${this.cookieName()}-access-token`],
          o = r.cookies[`${this.cookieName()}-refresh-token`];
        if (!s) throw new Error("No cookie found!");
        const { user: l, error: d } = yield this.getUser(s);
        if (d) {
          if (!o) throw new Error("No refresh_token cookie found!");
          if (!t)
            throw new Error(
              "You need to pass the res object to automatically refresh the session!"
            );
          const { data: c, error: m } = yield this.refreshAccessToken(o);
          if (m) throw m;
          if (c)
            return (
              Ei(
                r,
                t,
                [
                  { key: "access-token", value: c.access_token },
                  { key: "refresh-token", value: c.refresh_token },
                ].map((v) => {
                  var f;
                  return {
                    name: `${this.cookieName()}-${v.key}`,
                    value: v.value,
                    domain: this.cookieOptions.domain,
                    maxAge:
                      (f = this.cookieOptions.lifetime) !== null && f !== void 0
                        ? f
                        : 0,
                    path: this.cookieOptions.path,
                    sameSite: this.cookieOptions.sameSite,
                  };
                })
              ),
              { token: c.access_token, user: c.user, data: c.user, error: null }
            );
        }
        return { token: s, user: l, data: l, error: null };
      } catch (s) {
        return { token: null, user: null, data: null, error: s };
      }
    });
  }
  updateUserById(r, t) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const s = yield Gd(this.fetch, `${this.url}/admin/users/${r}`, t, {
          headers: this.headers,
        });
        return { user: s, data: s, error: null };
      } catch (s) {
        return { user: null, data: null, error: s };
      }
    });
  }
  deleteUser(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const t = yield vb(
          this.fetch,
          `${this.url}/admin/users/${r}`,
          {},
          { headers: this.headers }
        );
        return { user: t, data: t, error: null };
      } catch (t) {
        return { user: null, data: null, error: t };
      }
    });
  }
  getUser(r) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const t = yield wo(this.fetch, `${this.url}/user`, {
          headers: this._createRequestHeaders(r),
        });
        return { user: t, data: t, error: null };
      } catch (t) {
        return { user: null, data: null, error: t };
      }
    });
  }
  updateUser(r, t) {
    return Ye(this, void 0, void 0, function* () {
      try {
        const s = yield Gd(this.fetch, `${this.url}/user`, t, {
          headers: this._createRequestHeaders(r),
        });
        return { user: s, data: s, error: null };
      } catch (s) {
        return { user: null, data: null, error: s };
      }
    });
  }
}
function Ab() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self != "undefined" && (self.globalThis = self);
    }
}
var Et =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
Ab();
const Ib = {
  url: bb,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  multiTab: !0,
  headers: yb,
};
class Cb {
  constructor(r) {
    this.stateChangeEmitters = new Map();
    const t = Object.assign(Object.assign({}, Ib), r);
    (this.currentUser = null),
      (this.currentSession = null),
      (this.autoRefreshToken = t.autoRefreshToken),
      (this.persistSession = t.persistSession),
      (this.multiTab = t.multiTab),
      (this.localStorage = t.localStorage || globalThis.localStorage),
      (this.api = new Ob({
        url: t.url,
        headers: t.headers,
        cookieOptions: t.cookieOptions,
        fetch: t.fetch,
      })),
      this._recoverSession(),
      this._recoverAndRefresh(),
      this._listenForMultiTabEvents(),
      t.detectSessionInUrl &&
        Fn() &&
        !!Wn("access_token") &&
        this.getSessionFromUrl({ storeSession: !0 }).then(({ error: s }) => {
          s && console.error("Error getting session from URL.", s);
        });
  }
  signUp({ email: r, password: t, phone: s }, o = {}) {
    return Et(this, void 0, void 0, function* () {
      try {
        this._removeSession();
        const { data: l, error: d } =
          s && t
            ? yield this.api.signUpWithPhone(s, t, {
                data: o.data,
                captchaToken: o.captchaToken,
              })
            : yield this.api.signUpWithEmail(r, t, {
                redirectTo: o.redirectTo,
                data: o.data,
                captchaToken: o.captchaToken,
              });
        if (d) throw d;
        if (!l) throw "An error occurred on sign up.";
        let c = null,
          m = null;
        return (
          l.access_token &&
            ((c = l),
            (m = c.user),
            this._saveSession(c),
            this._notifyAllSubscribers("SIGNED_IN")),
          l.id && (m = l),
          { user: m, session: c, error: null }
        );
      } catch (l) {
        return { user: null, session: null, error: l };
      }
    });
  }
  signIn(
    { email: r, phone: t, password: s, refreshToken: o, provider: l, oidc: d },
    c = {}
  ) {
    return Et(this, void 0, void 0, function* () {
      try {
        if ((this._removeSession(), r && !s)) {
          const { error: m } = yield this.api.sendMagicLinkEmail(r, {
            redirectTo: c.redirectTo,
            shouldCreateUser: c.shouldCreateUser,
            captchaToken: c.captchaToken,
          });
          return { user: null, session: null, error: m };
        }
        if (r && s)
          return this._handleEmailSignIn(r, s, { redirectTo: c.redirectTo });
        if (t && !s) {
          const { error: m } = yield this.api.sendMobileOTP(t, {
            shouldCreateUser: c.shouldCreateUser,
            captchaToken: c.captchaToken,
          });
          return { user: null, session: null, error: m };
        }
        if (t && s) return this._handlePhoneSignIn(t, s);
        if (o) {
          const { error: m } = yield this._callRefreshToken(o);
          if (m) throw m;
          return {
            user: this.currentUser,
            session: this.currentSession,
            error: null,
          };
        }
        if (l)
          return this._handleProviderSignIn(l, {
            redirectTo: c.redirectTo,
            scopes: c.scopes,
          });
        if (d) return this._handleOpenIDConnectSignIn(d);
        throw new Error(
          "You must provide either an email, phone number, a third-party provider or OpenID Connect."
        );
      } catch (m) {
        return { user: null, session: null, error: m };
      }
    });
  }
  verifyOTP(r, t = {}) {
    return Et(this, void 0, void 0, function* () {
      try {
        this._removeSession();
        const { data: s, error: o } = yield this.api.verifyOTP(r, t);
        if (o) throw o;
        if (!s) throw "An error occurred on token verification.";
        let l = null,
          d = null;
        return (
          s.access_token &&
            ((l = s),
            (d = l.user),
            this._saveSession(l),
            this._notifyAllSubscribers("SIGNED_IN")),
          s.id && (d = s),
          { user: d, session: l, error: null }
        );
      } catch (s) {
        return { user: null, session: null, error: s };
      }
    });
  }
  user() {
    return this.currentUser;
  }
  session() {
    return this.currentSession;
  }
  refreshSession() {
    var r;
    return Et(this, void 0, void 0, function* () {
      try {
        if (
          !(
            !((r = this.currentSession) === null || r === void 0) &&
            r.access_token
          )
        )
          throw new Error("Not logged in.");
        const { error: t } = yield this._callRefreshToken();
        if (t) throw t;
        return {
          data: this.currentSession,
          user: this.currentUser,
          error: null,
        };
      } catch (t) {
        return { data: null, user: null, error: t };
      }
    });
  }
  update(r) {
    var t;
    return Et(this, void 0, void 0, function* () {
      try {
        if (
          !(
            !((t = this.currentSession) === null || t === void 0) &&
            t.access_token
          )
        )
          throw new Error("Not logged in.");
        const { user: s, error: o } = yield this.api.updateUser(
          this.currentSession.access_token,
          r
        );
        if (o) throw o;
        if (!s) throw Error("Invalid user data.");
        const l = Object.assign(Object.assign({}, this.currentSession), {
          user: s,
        });
        return (
          this._saveSession(l),
          this._notifyAllSubscribers("USER_UPDATED"),
          { data: s, user: s, error: null }
        );
      } catch (s) {
        return { data: null, user: null, error: s };
      }
    });
  }
  setSession(r) {
    return Et(this, void 0, void 0, function* () {
      try {
        if (!r) throw new Error("No current session.");
        const { data: t, error: s } = yield this.api.refreshAccessToken(r);
        return s
          ? { session: null, error: s }
          : (this._saveSession(t),
            this._notifyAllSubscribers("SIGNED_IN"),
            { session: t, error: null });
      } catch (t) {
        return { error: t, session: null };
      }
    });
  }
  setAuth(r) {
    return (
      (this.currentSession = Object.assign(
        Object.assign({}, this.currentSession),
        { access_token: r, token_type: "bearer", user: this.user() }
      )),
      this.currentSession
    );
  }
  getSessionFromUrl(r) {
    return Et(this, void 0, void 0, function* () {
      try {
        if (!Fn()) throw new Error("No browser detected.");
        const t = Wn("error_description");
        if (t) throw new Error(t);
        const s = Wn("provider_token"),
          o = Wn("access_token");
        if (!o) throw new Error("No access_token detected.");
        const l = Wn("expires_in");
        if (!l) throw new Error("No expires_in detected.");
        const d = Wn("refresh_token");
        if (!d) throw new Error("No refresh_token detected.");
        const c = Wn("token_type");
        if (!c) throw new Error("No token_type detected.");
        const v = Math.round(Date.now() / 1e3) + parseInt(l),
          { user: f, error: b } = yield this.api.getUser(o);
        if (b) throw b;
        const I = {
          provider_token: s,
          access_token: o,
          expires_in: parseInt(l),
          expires_at: v,
          refresh_token: d,
          token_type: c,
          user: f,
        };
        if (r != null && r.storeSession) {
          this._saveSession(I);
          const U = Wn("type");
          this._notifyAllSubscribers("SIGNED_IN"),
            U === "recovery" && this._notifyAllSubscribers("PASSWORD_RECOVERY");
        }
        return (window.location.hash = ""), { data: I, error: null };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  signOut() {
    var r;
    return Et(this, void 0, void 0, function* () {
      const t =
        (r = this.currentSession) === null || r === void 0
          ? void 0
          : r.access_token;
      if (
        (this._removeSession(), this._notifyAllSubscribers("SIGNED_OUT"), t)
      ) {
        const { error: s } = yield this.api.signOut(t);
        if (s) return { error: s };
      }
      return { error: null };
    });
  }
  onAuthStateChange(r) {
    try {
      const t = Sb(),
        s = {
          id: t,
          callback: r,
          unsubscribe: () => {
            this.stateChangeEmitters.delete(t);
          },
        };
      return this.stateChangeEmitters.set(t, s), { data: s, error: null };
    } catch (t) {
      return { data: null, error: t };
    }
  }
  _handleEmailSignIn(r, t, s = {}) {
    var o, l;
    return Et(this, void 0, void 0, function* () {
      try {
        const { data: d, error: c } = yield this.api.signInWithEmail(r, t, {
          redirectTo: s.redirectTo,
        });
        return c || !d
          ? { data: null, user: null, session: null, error: c }
          : ((((o = d == null ? void 0 : d.user) === null || o === void 0
              ? void 0
              : o.confirmed_at) ||
              ((l = d == null ? void 0 : d.user) === null || l === void 0
                ? void 0
                : l.email_confirmed_at)) &&
              (this._saveSession(d), this._notifyAllSubscribers("SIGNED_IN")),
            { data: d, user: d.user, session: d, error: null });
      } catch (d) {
        return { data: null, user: null, session: null, error: d };
      }
    });
  }
  _handlePhoneSignIn(r, t) {
    var s;
    return Et(this, void 0, void 0, function* () {
      try {
        const { data: o, error: l } = yield this.api.signInWithPhone(r, t);
        return l || !o
          ? { data: null, user: null, session: null, error: l }
          : (!((s = o == null ? void 0 : o.user) === null || s === void 0) &&
              s.phone_confirmed_at &&
              (this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN")),
            { data: o, user: o.user, session: o, error: null });
      } catch (o) {
        return { data: null, user: null, session: null, error: o };
      }
    });
  }
  _handleProviderSignIn(r, t = {}) {
    const s = this.api.getUrlForProvider(r, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
    });
    try {
      return (
        Fn() && (window.location.href = s),
        {
          provider: r,
          url: s,
          data: null,
          session: null,
          user: null,
          error: null,
        }
      );
    } catch (o) {
      return s
        ? {
            provider: r,
            url: s,
            data: null,
            session: null,
            user: null,
            error: null,
          }
        : { data: null, user: null, session: null, error: o };
    }
  }
  _handleOpenIDConnectSignIn({
    id_token: r,
    nonce: t,
    client_id: s,
    issuer: o,
    provider: l,
  }) {
    return Et(this, void 0, void 0, function* () {
      if (r && t && ((s && o) || l))
        try {
          const { data: d, error: c } = yield this.api.signInWithOpenIDConnect({
            id_token: r,
            nonce: t,
            client_id: s,
            issuer: o,
            provider: l,
          });
          return c || !d
            ? { user: null, session: null, error: c }
            : (this._saveSession(d),
              this._notifyAllSubscribers("SIGNED_IN"),
              { user: d.user, session: d, error: null });
        } catch (d) {
          return { user: null, session: null, error: d };
        }
      throw new Error(
        "You must provide a OpenID Connect provider with your id token and nonce."
      );
    });
  }
  _recoverSession() {
    var r;
    try {
      const t =
        Fn() &&
        ((r = this.localStorage) === null || r === void 0
          ? void 0
          : r.getItem(us));
      if (!t || typeof t != "string") return null;
      const s = JSON.parse(t),
        { currentSession: o, expiresAt: l } = s,
        d = Math.round(Date.now() / 1e3);
      l >= d &&
        (o == null ? void 0 : o.user) &&
        (this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN"));
    } catch (t) {
      console.log("error", t);
    }
  }
  _recoverAndRefresh() {
    return Et(this, void 0, void 0, function* () {
      try {
        const r = Fn() && (yield this.localStorage.getItem(us));
        if (!r) return null;
        const t = JSON.parse(r),
          { currentSession: s, expiresAt: o } = t,
          l = Math.round(Date.now() / 1e3);
        if (o < l)
          if (this.autoRefreshToken && s.refresh_token) {
            const { error: d } = yield this._callRefreshToken(s.refresh_token);
            d && (console.log(d.message), yield this._removeSession());
          } else this._removeSession();
        else
          s
            ? (this._saveSession(s), this._notifyAllSubscribers("SIGNED_IN"))
            : (console.log("Current session is missing data."),
              this._removeSession());
      } catch (r) {
        return console.error(r), null;
      }
    });
  }
  _callRefreshToken(r) {
    var t;
    return (
      r === void 0 &&
        (r =
          (t = this.currentSession) === null || t === void 0
            ? void 0
            : t.refresh_token),
      Et(this, void 0, void 0, function* () {
        try {
          if (!r) throw new Error("No current session.");
          const { data: s, error: o } = yield this.api.refreshAccessToken(r);
          if (o) throw o;
          if (!s) throw Error("Invalid session data.");
          return (
            this._saveSession(s),
            this._notifyAllSubscribers("TOKEN_REFRESHED"),
            this._notifyAllSubscribers("SIGNED_IN"),
            { data: s, error: null }
          );
        } catch (s) {
          return { data: null, error: s };
        }
      })
    );
  }
  _notifyAllSubscribers(r) {
    this.stateChangeEmitters.forEach((t) => t.callback(r, this.currentSession));
  }
  _saveSession(r) {
    (this.currentSession = r), (this.currentUser = r.user);
    const t = r.expires_at;
    if (t) {
      const s = Math.round(Date.now() / 1e3),
        o = t - s,
        l = o > 60 ? 60 : 0.5;
      this._startAutoRefreshToken((o - l) * 1e3);
    }
    this.persistSession &&
      r.expires_at &&
      this._persistSession(this.currentSession);
  }
  _persistSession(r) {
    const t = { currentSession: r, expiresAt: r.expires_at };
    Fn() && this.localStorage.setItem(us, JSON.stringify(t));
  }
  _removeSession() {
    return Et(this, void 0, void 0, function* () {
      (this.currentSession = null),
        (this.currentUser = null),
        this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
        Fn() && (yield this.localStorage.removeItem(us));
    });
  }
  _startAutoRefreshToken(r) {
    this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
      !(r <= 0 || !this.autoRefreshToken) &&
        ((this.refreshTokenTimer = setTimeout(
          () => this._callRefreshToken(),
          r
        )),
        typeof this.refreshTokenTimer.unref == "function" &&
          this.refreshTokenTimer.unref());
  }
  _listenForMultiTabEvents() {
    if (!this.multiTab || !Fn() || !(window != null && window.addEventListener))
      return !1;
    try {
      window == null ||
        window.addEventListener("storage", (r) => {
          var t;
          if (r.key === us) {
            const s = JSON.parse(String(r.newValue));
            !(
              (t = s == null ? void 0 : s.currentSession) === null ||
              t === void 0
            ) && t.access_token
              ? (this._recoverAndRefresh(),
                this._notifyAllSubscribers("SIGNED_IN"))
              : (this._removeSession(),
                this._notifyAllSubscribers("SIGNED_OUT"));
          }
        });
    } catch (r) {
      console.error("_listenForMultiTabEvents", r);
    }
  }
}
class Db extends Cb {
  constructor(r) {
    super(r);
  }
}
var Pb =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
class tl {
  constructor(r) {
    Object.assign(this, r);
    let t;
    r.fetch
      ? (t = r.fetch)
      : typeof fetch == "undefined"
      ? (t = Ji)
      : (t = fetch),
      (this.fetch = (...s) => t(...s)),
      (this.shouldThrowOnError = r.shouldThrowOnError || !1);
  }
  throwOnError(r) {
    return r == null && (r = !0), (this.shouldThrowOnError = r), this;
  }
  then(r, t) {
    typeof this.schema == "undefined" ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    let s = this.fetch(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then((o) =>
      Pb(this, void 0, void 0, function* () {
        var l, d, c;
        let m = null,
          v = null,
          f = null;
        if (o.ok) {
          const I =
            (l = this.headers.Prefer) === null || l === void 0
              ? void 0
              : l.split(",").includes("return=minimal");
          if (this.method !== "HEAD" && !I) {
            const N = yield o.text();
            N &&
              (this.headers.Accept === "text/csv"
                ? (v = N)
                : (v = JSON.parse(N)));
          }
          const U =
              (d = this.headers.Prefer) === null || d === void 0
                ? void 0
                : d.match(/count=(exact|planned|estimated)/),
            j =
              (c = o.headers.get("content-range")) === null || c === void 0
                ? void 0
                : c.split("/");
          U && j && j.length > 1 && (f = parseInt(j[1]));
        } else {
          const I = yield o.text();
          try {
            m = JSON.parse(I);
          } catch {
            m = { message: I };
          }
          if (m && this.shouldThrowOnError) throw m;
        }
        return {
          error: m,
          data: v,
          count: f,
          status: o.status,
          statusText: o.statusText,
          body: v,
        };
      })
    );
    return (
      this.shouldThrowOnError ||
        (s = s.catch((o) => ({
          error: {
            message: `FetchError: ${o.message}`,
            details: "",
            hint: "",
            code: o.code || "",
          },
          data: null,
          body: null,
          count: null,
          status: 400,
          statusText: "Bad Request",
        }))),
      s.then(r, t)
    );
  }
}
class nl extends tl {
  select(r = "*") {
    let t = !1;
    const s = r
      .split("")
      .map((o) => (/\s/.test(o) && !t ? "" : (o === '"' && (t = !t), o)))
      .join("");
    return this.url.searchParams.set("select", s), this;
  }
  order(r, { ascending: t = !0, nullsFirst: s = !1, foreignTable: o } = {}) {
    const l = typeof o == "undefined" ? "order" : `${o}.order`,
      d = this.url.searchParams.get(l);
    return (
      this.url.searchParams.set(
        l,
        `${d ? `${d},` : ""}${r}.${t ? "asc" : "desc"}.${
          s ? "nullsfirst" : "nullslast"
        }`
      ),
      this
    );
  }
  limit(r, { foreignTable: t } = {}) {
    const s = typeof t == "undefined" ? "limit" : `${t}.limit`;
    return this.url.searchParams.set(s, `${r}`), this;
  }
  range(r, t, { foreignTable: s } = {}) {
    const o = typeof s == "undefined" ? "offset" : `${s}.offset`,
      l = typeof s == "undefined" ? "limit" : `${s}.limit`;
    return (
      this.url.searchParams.set(o, `${r}`),
      this.url.searchParams.set(l, `${t - r + 1}`),
      this
    );
  }
  abortSignal(r) {
    return (this.signal = r), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    this.headers.Accept = "application/vnd.pgrst.object+json";
    const r = new nl(this);
    return (
      (r.then = (t, s) =>
        this.then((o) => {
          var l, d;
          return !(
            (d =
              (l = o.error) === null || l === void 0 ? void 0 : l.details) ===
              null || d === void 0
          ) && d.includes("Results contain 0 rows")
            ? t({
                error: null,
                data: null,
                count: o.count,
                status: 200,
                statusText: "OK",
                body: null,
              })
            : t(o);
        }, s)),
      r
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
}
class Dr extends nl {
  constructor() {
    super(...arguments),
      (this.cs = this.contains),
      (this.cd = this.containedBy),
      (this.sl = this.rangeLt),
      (this.sr = this.rangeGt),
      (this.nxl = this.rangeGte),
      (this.nxr = this.rangeLte),
      (this.adj = this.rangeAdjacent),
      (this.ov = this.overlaps);
  }
  not(r, t, s) {
    return this.url.searchParams.append(`${r}`, `not.${t}.${s}`), this;
  }
  or(r, { foreignTable: t } = {}) {
    const s = typeof t == "undefined" ? "or" : `${t}.or`;
    return this.url.searchParams.append(s, `(${r})`), this;
  }
  eq(r, t) {
    return this.url.searchParams.append(`${r}`, `eq.${t}`), this;
  }
  neq(r, t) {
    return this.url.searchParams.append(`${r}`, `neq.${t}`), this;
  }
  gt(r, t) {
    return this.url.searchParams.append(`${r}`, `gt.${t}`), this;
  }
  gte(r, t) {
    return this.url.searchParams.append(`${r}`, `gte.${t}`), this;
  }
  lt(r, t) {
    return this.url.searchParams.append(`${r}`, `lt.${t}`), this;
  }
  lte(r, t) {
    return this.url.searchParams.append(`${r}`, `lte.${t}`), this;
  }
  like(r, t) {
    return this.url.searchParams.append(`${r}`, `like.${t}`), this;
  }
  ilike(r, t) {
    return this.url.searchParams.append(`${r}`, `ilike.${t}`), this;
  }
  is(r, t) {
    return this.url.searchParams.append(`${r}`, `is.${t}`), this;
  }
  in(r, t) {
    const s = t
      .map((o) =>
        typeof o == "string" && new RegExp("[,()]").test(o) ? `"${o}"` : `${o}`
      )
      .join(",");
    return this.url.searchParams.append(`${r}`, `in.(${s})`), this;
  }
  contains(r, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(`${r}`, `cs.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(`${r}`, `cs.{${t.join(",")}}`)
        : this.url.searchParams.append(`${r}`, `cs.${JSON.stringify(t)}`),
      this
    );
  }
  containedBy(r, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(`${r}`, `cd.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(`${r}`, `cd.{${t.join(",")}}`)
        : this.url.searchParams.append(`${r}`, `cd.${JSON.stringify(t)}`),
      this
    );
  }
  rangeLt(r, t) {
    return this.url.searchParams.append(`${r}`, `sl.${t}`), this;
  }
  rangeGt(r, t) {
    return this.url.searchParams.append(`${r}`, `sr.${t}`), this;
  }
  rangeGte(r, t) {
    return this.url.searchParams.append(`${r}`, `nxl.${t}`), this;
  }
  rangeLte(r, t) {
    return this.url.searchParams.append(`${r}`, `nxr.${t}`), this;
  }
  rangeAdjacent(r, t) {
    return this.url.searchParams.append(`${r}`, `adj.${t}`), this;
  }
  overlaps(r, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(`${r}`, `ov.${t}`)
        : this.url.searchParams.append(`${r}`, `ov.{${t.join(",")}}`),
      this
    );
  }
  textSearch(r, t, { config: s, type: o = null } = {}) {
    let l = "";
    o === "plain"
      ? (l = "pl")
      : o === "phrase"
      ? (l = "ph")
      : o === "websearch" && (l = "w");
    const d = s === void 0 ? "" : `(${s})`;
    return this.url.searchParams.append(`${r}`, `${l}fts${d}.${t}`), this;
  }
  fts(r, t, { config: s } = {}) {
    const o = typeof s == "undefined" ? "" : `(${s})`;
    return this.url.searchParams.append(`${r}`, `fts${o}.${t}`), this;
  }
  plfts(r, t, { config: s } = {}) {
    const o = typeof s == "undefined" ? "" : `(${s})`;
    return this.url.searchParams.append(`${r}`, `plfts${o}.${t}`), this;
  }
  phfts(r, t, { config: s } = {}) {
    const o = typeof s == "undefined" ? "" : `(${s})`;
    return this.url.searchParams.append(`${r}`, `phfts${o}.${t}`), this;
  }
  wfts(r, t, { config: s } = {}) {
    const o = typeof s == "undefined" ? "" : `(${s})`;
    return this.url.searchParams.append(`${r}`, `wfts${o}.${t}`), this;
  }
  filter(r, t, s) {
    return this.url.searchParams.append(`${r}`, `${t}.${s}`), this;
  }
  match(r) {
    return (
      Object.keys(r).forEach((t) => {
        this.url.searchParams.append(`${t}`, `eq.${r[t]}`);
      }),
      this
    );
  }
}
class mc extends tl {
  constructor(
    r,
    { headers: t = {}, schema: s, fetch: o, shouldThrowOnError: l } = {}
  ) {
    super({ fetch: o, shouldThrowOnError: l }),
      (this.url = new URL(r)),
      (this.headers = Object.assign({}, t)),
      (this.schema = s);
  }
  select(r = "*", { head: t = !1, count: s = null } = {}) {
    this.method = "GET";
    let o = !1;
    const l = r
      .split("")
      .map((d) => (/\s/.test(d) && !o ? "" : (d === '"' && (o = !o), d)))
      .join("");
    return (
      this.url.searchParams.set("select", l),
      s && (this.headers.Prefer = `count=${s}`),
      t && (this.method = "HEAD"),
      new Dr(this)
    );
  }
  insert(
    r,
    {
      upsert: t = !1,
      onConflict: s,
      returning: o = "representation",
      count: l = null,
    } = {}
  ) {
    this.method = "POST";
    const d = [`return=${o}`];
    if (
      (t && d.push("resolution=merge-duplicates"),
      t && s !== void 0 && this.url.searchParams.set("on_conflict", s),
      (this.body = r),
      l && d.push(`count=${l}`),
      this.headers.Prefer && d.unshift(this.headers.Prefer),
      (this.headers.Prefer = d.join(",")),
      Array.isArray(r))
    ) {
      const c = r.reduce((m, v) => m.concat(Object.keys(v)), []);
      if (c.length > 0) {
        const m = [...new Set(c)].map((v) => `"${v}"`);
        this.url.searchParams.set("columns", m.join(","));
      }
    }
    return new Dr(this);
  }
  upsert(
    r,
    {
      onConflict: t,
      returning: s = "representation",
      count: o = null,
      ignoreDuplicates: l = !1,
    } = {}
  ) {
    this.method = "POST";
    const d = [
      `resolution=${l ? "ignore" : "merge"}-duplicates`,
      `return=${s}`,
    ];
    return (
      t !== void 0 && this.url.searchParams.set("on_conflict", t),
      (this.body = r),
      o && d.push(`count=${o}`),
      this.headers.Prefer && d.unshift(this.headers.Prefer),
      (this.headers.Prefer = d.join(",")),
      new Dr(this)
    );
  }
  update(r, { returning: t = "representation", count: s = null } = {}) {
    this.method = "PATCH";
    const o = [`return=${t}`];
    return (
      (this.body = r),
      s && o.push(`count=${s}`),
      this.headers.Prefer && o.unshift(this.headers.Prefer),
      (this.headers.Prefer = o.join(",")),
      new Dr(this)
    );
  }
  delete({ returning: r = "representation", count: t = null } = {}) {
    this.method = "DELETE";
    const s = [`return=${r}`];
    return (
      t && s.push(`count=${t}`),
      this.headers.Prefer && s.unshift(this.headers.Prefer),
      (this.headers.Prefer = s.join(",")),
      new Dr(this)
    );
  }
}
class Rb extends tl {
  constructor(
    r,
    { headers: t = {}, schema: s, fetch: o, shouldThrowOnError: l } = {}
  ) {
    super({ fetch: o, shouldThrowOnError: l }),
      (this.url = new URL(r)),
      (this.headers = Object.assign({}, t)),
      (this.schema = s);
  }
  rpc(r, { head: t = !1, count: s = null } = {}) {
    return (
      t
        ? ((this.method = "HEAD"),
          r &&
            Object.entries(r).forEach(([o, l]) => {
              this.url.searchParams.append(o, l);
            }))
        : ((this.method = "POST"), (this.body = r)),
      s &&
        (this.headers.Prefer !== void 0
          ? (this.headers.Prefer += `,count=${s}`)
          : (this.headers.Prefer = `count=${s}`)),
      new Dr(this)
    );
  }
}
const Lb = "0.37.2",
  Nb = { "X-Client-Info": `postgrest-js/${Lb}` };
class Mb {
  constructor(
    r,
    { headers: t = {}, schema: s, fetch: o, throwOnError: l } = {}
  ) {
    (this.url = r),
      (this.headers = Object.assign(Object.assign({}, Nb), t)),
      (this.schema = s),
      (this.fetch = o),
      (this.shouldThrowOnError = l);
  }
  auth(r) {
    return (this.headers.Authorization = `Bearer ${r}`), this;
  }
  from(r) {
    const t = `${this.url}/${r}`;
    return new mc(t, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    });
  }
  rpc(r, t, { head: s = !1, count: o = null } = {}) {
    const l = `${this.url}/rpc/${r}`;
    return new Rb(l, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    }).rpc(t, { head: s, count: o });
  }
}
var Be;
(function (a) {
  (a.abstime = "abstime"),
    (a.bool = "bool"),
    (a.date = "date"),
    (a.daterange = "daterange"),
    (a.float4 = "float4"),
    (a.float8 = "float8"),
    (a.int2 = "int2"),
    (a.int4 = "int4"),
    (a.int4range = "int4range"),
    (a.int8 = "int8"),
    (a.int8range = "int8range"),
    (a.json = "json"),
    (a.jsonb = "jsonb"),
    (a.money = "money"),
    (a.numeric = "numeric"),
    (a.oid = "oid"),
    (a.reltime = "reltime"),
    (a.text = "text"),
    (a.time = "time"),
    (a.timestamp = "timestamp"),
    (a.timestamptz = "timestamptz"),
    (a.timetz = "timetz"),
    (a.tsrange = "tsrange"),
    (a.tstzrange = "tstzrange");
})(Be || (Be = {}));
const qd = (a, r, t = {}) => {
    var s;
    const o = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
    return Object.keys(r).reduce((l, d) => ((l[d] = Ub(d, a, r, o)), l), {});
  },
  Ub = (a, r, t, s) => {
    const o = r.find((c) => c.name === a),
      l = o == null ? void 0 : o.type,
      d = t[a];
    return l && !s.includes(l) ? vc(l, d) : Mo(d);
  },
  vc = (a, r) => {
    if (a.charAt(0) === "_") {
      const t = a.slice(1, a.length);
      return Wb(r, t);
    }
    switch (a) {
      case Be.bool:
        return Bb(r);
      case Be.float4:
      case Be.float8:
      case Be.int2:
      case Be.int4:
      case Be.int8:
      case Be.numeric:
      case Be.oid:
        return jb(r);
      case Be.json:
      case Be.jsonb:
        return Fb(r);
      case Be.timestamp:
        return Hb(r);
      case Be.abstime:
      case Be.date:
      case Be.daterange:
      case Be.int4range:
      case Be.int8range:
      case Be.money:
      case Be.reltime:
      case Be.text:
      case Be.time:
      case Be.timestamptz:
      case Be.timetz:
      case Be.tsrange:
      case Be.tstzrange:
        return Mo(r);
      default:
        return Mo(r);
    }
  },
  Mo = (a) => a,
  Bb = (a) => {
    switch (a) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return a;
    }
  },
  jb = (a) => {
    if (typeof a == "string") {
      const r = parseFloat(a);
      if (!Number.isNaN(r)) return r;
    }
    return a;
  },
  Fb = (a) => {
    if (typeof a == "string")
      try {
        return JSON.parse(a);
      } catch (r) {
        return console.log(`JSON parse error: ${r}`), a;
      }
    return a;
  },
  Wb = (a, r) => {
    if (typeof a != "string") return a;
    const t = a.length - 1,
      s = a[t];
    if (a[0] === "{" && s === "}") {
      let l;
      const d = a.slice(1, t);
      try {
        l = JSON.parse("[" + d + "]");
      } catch {
        l = d ? d.split(",") : [];
      }
      return l.map((c) => vc(r, c));
    }
    return a;
  },
  Hb = (a) => (typeof a == "string" ? a.replace(" ", "T") : a),
  zb = "websocket",
  Jb =
    "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
  Gb = [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client",
  ],
  qb =
    "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
  Vb = ["I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
  Yb = "1.0.34",
  Xb = {
    type: "git",
    url: "https://github.com/theturtle32/WebSocket-Node.git",
  },
  Kb = "https://github.com/theturtle32/WebSocket-Node",
  Qb = { node: ">=4.0.0" },
  Zb = {
    bufferutil: "^4.0.1",
    debug: "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    yaeti: "^0.0.6",
  },
  ey = {
    "buffer-equal": "^1.0.0",
    gulp: "^4.0.2",
    "gulp-jshint": "^2.0.4",
    "jshint-stylish": "^2.2.1",
    jshint: "^2.0.0",
    tape: "^4.9.1",
  },
  ty = { verbose: !1 },
  ny = { test: "tape test/unit/*.js", gulp: "gulp" },
  ry = "index",
  sy = { lib: "./lib" },
  iy = "lib/browser.js",
  ay = "Apache-2.0";
var oy = {
    name: zb,
    description: Jb,
    keywords: Gb,
    author: qb,
    contributors: Vb,
    version: Yb,
    repository: Xb,
    homepage: Kb,
    engines: Qb,
    dependencies: Zb,
    devDependencies: ey,
    config: ty,
    scripts: ny,
    main: ry,
    directories: sy,
    browser: iy,
    license: ay,
  },
  ly = oy.version,
  or;
if (typeof globalThis == "object") or = globalThis;
else
  try {
    or = require("es5-ext/global");
  } catch {
  } finally {
    if ((!or && typeof window != "undefined" && (or = window), !or))
      throw new Error("Could not determine global this");
  }
var xs = or.WebSocket || or.MozWebSocket,
  uy = ly;
function _c(a, r) {
  var t;
  return r ? (t = new xs(a, r)) : (t = new xs(a)), t;
}
xs &&
  ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (a) {
    Object.defineProperty(_c, a, {
      get: function () {
        return xs[a];
      },
    });
  });
var dy = { w3cwebsocket: xs ? _c : null, version: uy };
const cy = "1.7.1",
  hy = { "X-Client-Info": `realtime-js/${cy}` },
  fy = "1.0.0",
  bc = 1e4,
  py = 1e3;
var fs;
(function (a) {
  (a[(a.connecting = 0)] = "connecting"),
    (a[(a.open = 1)] = "open"),
    (a[(a.closing = 2)] = "closing"),
    (a[(a.closed = 3)] = "closed");
})(fs || (fs = {}));
var je;
(function (a) {
  (a.closed = "closed"),
    (a.errored = "errored"),
    (a.joined = "joined"),
    (a.joining = "joining"),
    (a.leaving = "leaving");
})(je || (je = {}));
var ot;
(function (a) {
  (a.close = "phx_close"),
    (a.error = "phx_error"),
    (a.join = "phx_join"),
    (a.reply = "phx_reply"),
    (a.leave = "phx_leave"),
    (a.access_token = "access_token");
})(ot || (ot = {}));
var Uo;
(function (a) {
  a.websocket = "websocket";
})(Uo || (Uo = {}));
var lr;
(function (a) {
  (a.Connecting = "connecting"),
    (a.Open = "open"),
    (a.Closing = "closing"),
    (a.Closed = "closed");
})(lr || (lr = {}));
class rl {
  constructor(r, t) {
    (this.callback = r),
      (this.timerCalc = t),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = r),
      (this.timerCalc = t);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class gy {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(r, t) {
    return r.constructor === ArrayBuffer
      ? t(this._binaryDecode(r))
      : t(typeof r == "string" ? JSON.parse(r) : {});
  }
  _binaryDecode(r) {
    const t = new DataView(r),
      s = new TextDecoder();
    return this._decodeBroadcast(r, t, s);
  }
  _decodeBroadcast(r, t, s) {
    const o = t.getUint8(1),
      l = t.getUint8(2);
    let d = this.HEADER_LENGTH + 2;
    const c = s.decode(r.slice(d, d + o));
    d = d + o;
    const m = s.decode(r.slice(d, d + l));
    d = d + l;
    const v = JSON.parse(s.decode(r.slice(d, r.byteLength)));
    return { ref: null, topic: c, event: m, payload: v };
  }
}
class Nr {
  constructor(r, t, s = {}, o = bc) {
    (this.channel = r),
      (this.event = t),
      (this.payload = s),
      (this.timeout = o),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(r) {
    (this.timeout = r),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
      }));
  }
  updatePayload(r) {
    this.payload = Object.assign(Object.assign({}, this.payload), r);
  }
  receive(r, t) {
    var s;
    return (
      this._hasReceived(r) &&
        t(
          (s = this.receivedResp) === null || s === void 0 ? void 0 : s.response
        ),
      this.recHooks.push({ status: r, callback: t }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket.makeRef()),
      (this.refEvent = this.channel.replyEventName(this.ref));
    const r = (t) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = t),
        this._matchReceive(t);
    };
    this.channel instanceof Bo
      ? this.channel.on(this.refEvent, r)
      : this.channel.on(this.refEvent, {}, r),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(r, t) {
    this.refEvent &&
      this.channel.trigger(this.refEvent, { status: r, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    !this.refEvent ||
      (this.channel instanceof Bo
        ? this.channel.off(this.refEvent)
        : this.channel.off(this.refEvent, {}));
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: r, response: t }) {
    this.recHooks.filter((s) => s.status === r).forEach((s) => s.callback(t));
  }
  _hasReceived(r) {
    return this.receivedResp && this.receivedResp.status === r;
  }
}
class Bo {
  constructor(r, t = {}, s) {
    (this.topic = r),
      (this.params = t),
      (this.socket = s),
      (this.bindings = []),
      (this.state = je.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Nr(this, ot.join, this.params, this.timeout)),
      (this.rejoinTimer = new rl(
        () => this.rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = je.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []);
      }),
      this.onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
          (this.state = je.closed),
          this.socket.remove(this);
      }),
      this.onError((o) => {
        this.isLeaving() ||
          this.isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = je.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        !this.isJoining() ||
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = je.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.on(ot.reply, (o, l) => {
        this.trigger(this.replyEventName(l), o);
      });
  }
  rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this.rejoin();
  }
  subscribe(r = this.timeout) {
    if (this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    return (this.joinedOnce = !0), this.rejoin(r), this.joinPush;
  }
  onClose(r) {
    this.on(ot.close, r);
  }
  onError(r) {
    this.on(ot.error, (t) => r(t));
  }
  on(r, t) {
    this.bindings.push({ event: r, callback: t });
  }
  off(r) {
    this.bindings = this.bindings.filter((t) => t.event !== r);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(r, t, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let o = new Nr(this, r, t, s);
    return (
      this.canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)), o
    );
  }
  updateJoinPayload(r) {
    this.joinPush.updatePayload(r);
  }
  unsubscribe(r = this.timeout) {
    this.state = je.leaving;
    let t = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this.trigger(ot.close, "leave", this.joinRef());
    };
    this.joinPush.destroy();
    let s = new Nr(this, ot.leave, {}, r);
    return (
      s.receive("ok", () => t()).receive("timeout", () => t()),
      s.send(),
      this.canPush() || s.trigger("ok", {}),
      s
    );
  }
  onMessage(r, t, s) {
    return t;
  }
  isMember(r) {
    return this.topic === r;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(r = this.timeout) {
    this.isLeaving() ||
      (this.socket.leaveOpenTopic(this.topic),
      (this.state = je.joining),
      this.joinPush.resend(r));
  }
  trigger(r, t, s) {
    let { close: o, error: l, leave: d, join: c } = ot;
    if (s && [o, l, d, c].indexOf(r) >= 0 && s !== this.joinRef()) return;
    let v = this.onMessage(r, t, s);
    if (t && !v)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    this.bindings
      .filter((f) =>
        f.event === "*" ? r === (t == null ? void 0 : t.type) : f.event === r
      )
      .map((f) => f.callback(v, s));
  }
  replyEventName(r) {
    return `chan_reply_${r}`;
  }
  isClosed() {
    return this.state === je.closed;
  }
  isErrored() {
    return this.state === je.errored;
  }
  isJoined() {
    return this.state === je.joined;
  }
  isJoining() {
    return this.state === je.joining;
  }
  isLeaving() {
    return this.state === je.leaving;
  }
}
class Rr {
  constructor(r, t) {
    (this.channel = r),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const s = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel.on(s.state, {}, (o) => {
      const { onJoin: l, onLeave: d, onSync: c } = this.caller;
      (this.joinRef = this.channel.joinRef()),
        (this.state = Rr.syncState(this.state, o, l, d)),
        this.pendingDiffs.forEach((m) => {
          this.state = Rr.syncDiff(this.state, m, l, d);
        }),
        (this.pendingDiffs = []),
        c();
    }),
      this.channel.on(s.diff, {}, (o) => {
        const { onJoin: l, onLeave: d, onSync: c } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(o)
          : ((this.state = Rr.syncDiff(this.state, o, l, d)), c());
      });
  }
  static syncState(r, t, s, o) {
    const l = this.cloneDeep(r),
      d = this.transformState(t),
      c = {},
      m = {};
    return (
      this.map(l, (v, f) => {
        d[v] || (m[v] = f);
      }),
      this.map(d, (v, f) => {
        const b = l[v];
        if (b) {
          const I = f.map((F) => F.presence_id),
            U = b.map((F) => F.presence_id),
            j = f.filter((F) => U.indexOf(F.presence_id) < 0),
            N = b.filter((F) => I.indexOf(F.presence_id) < 0);
          j.length > 0 && (c[v] = j), N.length > 0 && (m[v] = N);
        } else c[v] = f;
      }),
      this.syncDiff(l, { joins: c, leaves: m }, s, o)
    );
  }
  static syncDiff(r, t, s, o) {
    const { joins: l, leaves: d } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves),
    };
    return (
      s || (s = () => {}),
      o || (o = () => {}),
      this.map(l, (c, m) => {
        const v = r[c];
        if (((r[c] = this.cloneDeep(m)), v)) {
          const f = r[c].map((I) => I.presence_id),
            b = v.filter((I) => f.indexOf(I.presence_id) < 0);
          r[c].unshift(...b);
        }
        s(c, v, m);
      }),
      this.map(d, (c, m) => {
        let v = r[c];
        if (!v) return;
        const f = m.map((b) => b.presence_id);
        (v = v.filter((b) => f.indexOf(b.presence_id) < 0)),
          (r[c] = v),
          o(c, v, m),
          v.length === 0 && delete r[c];
      }),
      r
    );
  }
  static list(r, t) {
    return t || (t = (s, o) => o), this.map(r, (s, o) => t(s, o));
  }
  static map(r, t) {
    return Object.getOwnPropertyNames(r).map((s) => t(s, r[s]));
  }
  static transformState(r) {
    return (
      (r = this.cloneDeep(r)),
      Object.getOwnPropertyNames(r).reduce((t, s) => {
        const o = r[s];
        return (
          "metas" in o
            ? (t[s] = o.metas.map(
                (l) => (
                  (l.presence_id = l.phx_ref),
                  delete l.phx_ref,
                  delete l.phx_ref_prev,
                  l
                )
              ))
            : (t[s] = o),
          t
        );
      }, {})
    );
  }
  static cloneDeep(r) {
    return JSON.parse(JSON.stringify(r));
  }
  onJoin(r) {
    this.caller.onJoin = r;
  }
  onLeave(r) {
    this.caller.onLeave = r;
  }
  onSync(r) {
    this.caller.onSync = r;
  }
  list(r) {
    return Rr.list(this.state, r);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
}
class Mi {
  constructor(r, t = {}, s) {
    (this.topic = r),
      (this.params = t),
      (this.socket = s),
      (this.bindings = []),
      (this.state = je.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Nr(this, ot.join, this.params, this.timeout)),
      (this.rejoinTimer = new rl(
        () => this.rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = je.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []);
      }),
      this.onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`),
          (this.state = je.closed),
          this.socket.remove(this);
      }),
      this.onError((o) => {
        this.isLeaving() ||
          this.isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = je.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        !this.isJoining() ||
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = je.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.on(ot.reply, {}, (o, l) => {
        this.trigger(this.replyEventName(l), o);
      }),
      (this.presence = new Rr(this));
  }
  list() {
    return this.presence.list();
  }
  rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this.rejoin();
  }
  subscribe(r = this.timeout) {
    if (this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const t = this.bindings.reduce((s, o) => {
        const { type: l } = o;
        return (
          [
            "phx_close",
            "phx_error",
            "phx_reply",
            "presence_diff",
            "presence_state",
          ].includes(l) || (s[l] = o),
          s
        );
      }, {});
      return (
        Object.keys(t).length && this.updateJoinPayload({ configs: t }),
        (this.joinedOnce = !0),
        this.rejoin(r),
        this.joinPush
      );
    }
  }
  onClose(r) {
    this.on(ot.close, {}, r);
  }
  onError(r) {
    this.on(ot.error, {}, (t) => r(t));
  }
  on(r, t, s) {
    this.bindings.push({
      type: r,
      filter: t != null ? t : {},
      callback: s != null ? s : () => {},
    });
  }
  off(r, t) {
    this.bindings = this.bindings.filter(
      (s) => !(s.type === r && Mi.isEqual(s.filter, t))
    );
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(r, t, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let o = new Nr(this, r, t, s);
    return (
      this.canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)), o
    );
  }
  updateJoinPayload(r) {
    this.joinPush.updatePayload(r);
  }
  unsubscribe(r = this.timeout) {
    this.state = je.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this.trigger(ot.close, "leave", this.joinRef());
    };
    this.joinPush.destroy();
    const s = new Nr(this, ot.leave, {}, r);
    return (
      s.receive("ok", () => t()).receive("timeout", () => t()),
      s.send(),
      this.canPush() || s.trigger("ok", {}),
      s
    );
  }
  onMessage(r, t, s) {
    return t;
  }
  isMember(r) {
    return this.topic === r;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(r = this.timeout) {
    this.isLeaving() ||
      (this.socket.leaveOpenTopic(this.topic),
      (this.state = je.joining),
      this.joinPush.resend(r));
  }
  trigger(r, t, s) {
    const { close: o, error: l, leave: d, join: c } = ot;
    if (s && [o, l, d, c].indexOf(r) >= 0 && s !== this.joinRef()) return;
    const v = this.onMessage(r, t, s);
    if (t && !v)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    this.bindings
      .filter((f) => {
        var b, I;
        return (
          (f == null ? void 0 : f.type) === r &&
          (((b = f == null ? void 0 : f.filter) === null || b === void 0
            ? void 0
            : b.event) === "*" ||
            ((I = f == null ? void 0 : f.filter) === null || I === void 0
              ? void 0
              : I.event) === (t == null ? void 0 : t.event))
        );
      })
      .map((f) => f.callback(v, s));
  }
  send(r) {
    const t = this.push(r.type, r);
    return new Promise((s, o) => {
      t.receive("ok", () => s("ok")), t.receive("timeout", () => o("timeout"));
    });
  }
  replyEventName(r) {
    return `chan_reply_${r}`;
  }
  isClosed() {
    return this.state === je.closed;
  }
  isErrored() {
    return this.state === je.errored;
  }
  isJoined() {
    return this.state === je.joined;
  }
  isJoining() {
    return this.state === je.joining;
  }
  isLeaving() {
    return this.state === je.leaving;
  }
  static isEqual(r, t) {
    if (Object.keys(r).length !== Object.keys(t).length) return !1;
    for (const s in r) if (r[s] !== t[s]) return !1;
    return !0;
  }
}
var my =
    (globalThis && globalThis.__awaiter) ||
    function (a, r, t, s) {
      function o(l) {
        return l instanceof t
          ? l
          : new t(function (d) {
              d(l);
            });
      }
      return new (t || (t = Promise))(function (l, d) {
        function c(f) {
          try {
            v(s.next(f));
          } catch (b) {
            d(b);
          }
        }
        function m(f) {
          try {
            v(s.throw(f));
          } catch (b) {
            d(b);
          }
        }
        function v(f) {
          f.done ? l(f.value) : o(f.value).then(c, m);
        }
        v((s = s.apply(a, r || [])).next());
      });
    },
  vy =
    (globalThis && globalThis.__rest) ||
    function (a, r) {
      var t = {};
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) &&
          r.indexOf(s) < 0 &&
          (t[s] = a[s]);
      if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, s = Object.getOwnPropertySymbols(a); o < s.length; o++)
          r.indexOf(s[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(a, s[o]) &&
            (t[s[o]] = a[s[o]]);
      return t;
    };
const _y = () => {};
class by {
  constructor(r, t) {
    (this.accessToken = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.headers = hy),
      (this.params = {}),
      (this.timeout = bc),
      (this.transport = dy.w3cwebsocket),
      (this.heartbeatIntervalMs = 3e4),
      (this.longpollerTimeout = 2e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = _y),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new gy()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.versionDate = void 0),
      (this.endPoint = `${r}/${Uo.websocket}`),
      t != null && t.params && (this.params = t.params),
      t != null &&
        t.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          t.headers
        )),
      t != null && t.timeout && (this.timeout = t.timeout),
      t != null && t.logger && (this.logger = t.logger),
      t != null && t.transport && (this.transport = t.transport),
      t != null &&
        t.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs),
      t != null &&
        t.longpollerTimeout &&
        (this.longpollerTimeout = t.longpollerTimeout),
      (this.reconnectAfterMs =
        t != null && t.reconnectAfterMs
          ? t.reconnectAfterMs
          : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
      (this.encode =
        t != null && t.encode ? t.encode : (s, o) => o(JSON.stringify(s))),
      (this.decode =
        t != null && t.decode
          ? t.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new rl(
        () =>
          my(this, void 0, void 0, function* () {
            yield this.disconnect(), this.connect();
          }),
        this.reconnectAfterMs
      ));
  }
  connect() {
    var r;
    if (
      !this.conn &&
      ((this.conn = new this.transport(
        this.endPointURL(),
        [],
        null,
        this.headers
      )),
      this.conn)
    ) {
      (this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (s) => this._onConnError(s)),
        (this.conn.onmessage = (s) => this.onConnMessage(s)),
        (this.conn.onclose = (s) => this._onConnClose(s));
      const t = new Date(
        (r = new URL(this.conn.url).searchParams.get("vsndate")) !== null &&
        r !== void 0
          ? r
          : ""
      );
      t.toString() !== "Invalid Date" && (this.versionDate = t);
    }
  }
  disconnect(r, t) {
    return new Promise((s, o) => {
      try {
        this.conn &&
          ((this.conn.onclose = function () {}),
          r ? this.conn.close(r, t || "") : this.conn.close(),
          (this.conn = null),
          this.heartbeatTimer && clearInterval(this.heartbeatTimer),
          this.reconnectTimer.reset()),
          s({ error: null, data: !0 });
      } catch (l) {
        s({ error: l, data: !1 });
      }
    });
  }
  log(r, t, s) {
    this.logger(r, t, s);
  }
  onOpen(r) {
    this.stateChangeCallbacks.open.push(r);
  }
  onClose(r) {
    this.stateChangeCallbacks.close.push(r);
  }
  onError(r) {
    this.stateChangeCallbacks.error.push(r);
  }
  onMessage(r) {
    this.stateChangeCallbacks.message.push(r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case fs.connecting:
        return lr.Connecting;
      case fs.open:
        return lr.Open;
      case fs.closing:
        return lr.Closing;
      default:
        return lr.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === lr.Open;
  }
  remove(r) {
    this.channels = this.channels.filter((t) => t.joinRef() !== r.joinRef());
  }
  channel(r, t = {}) {
    const { selfBroadcast: s } = t,
      o = vy(t, ["selfBroadcast"]);
    s && (o.self_broadcast = s);
    const l = this.versionDate ? new Mi(r, o, this) : new Bo(r, o, this);
    return (
      l instanceof Mi &&
        (l.presence.onJoin((d, c, m) => {
          l.trigger("presence", {
            event: "JOIN",
            key: d,
            currentPresences: c,
            newPresences: m,
          });
        }),
        l.presence.onLeave((d, c, m) => {
          l.trigger("presence", {
            event: "LEAVE",
            key: d,
            currentPresences: c,
            leftPresences: m,
          });
        }),
        l.presence.onSync(() => {
          l.trigger("presence", { event: "SYNC" });
        })),
      this.channels.push(l),
      l
    );
  }
  push(r) {
    const { topic: t, event: s, payload: o, ref: l } = r;
    let d = () => {
      this.encode(r, (c) => {
        var m;
        (m = this.conn) === null || m === void 0 || m.send(c);
      });
    };
    this.log("push", `${t} ${s} (${l})`, o),
      this.isConnected() ? d() : this.sendBuffer.push(d);
  }
  onConnMessage(r) {
    this.decode(r.data, (t) => {
      let { topic: s, event: o, payload: l, ref: d } = t;
      ((d && d === this.pendingHeartbeatRef) ||
        o === (l == null ? void 0 : l.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${l.status || ""} ${s} ${o} ${(d && "(" + d + ")") || ""}`,
          l
        ),
        this.channels
          .filter((c) => c.isMember(s))
          .forEach((c) => c.trigger(o, l, d)),
        this.stateChangeCallbacks.message.forEach((c) => c(t));
    });
  }
  endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: fy })
    );
  }
  makeRef() {
    let r = this.ref + 1;
    return (
      r === this.ref ? (this.ref = 0) : (this.ref = r), this.ref.toString()
    );
  }
  setAuth(r) {
    (this.accessToken = r),
      this.channels.forEach((t) => {
        r && t.updateJoinPayload({ user_token: r }),
          t.joinedOnce &&
            t.isJoined() &&
            t.push(ot.access_token, { access_token: r });
      });
  }
  leaveOpenTopic(r) {
    let t = this.channels.find(
      (s) => s.topic === r && (s.isJoined() || s.isJoining())
    );
    t &&
      (this.log("transport", `leaving duplicate topic "${r}"`),
      t.unsubscribe());
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this.endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((r) => r());
  }
  _onConnClose(r) {
    this.log("transport", "close", r),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((t) => t(r));
  }
  _onConnError(r) {
    this.log("transport", r.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((t) => t(r));
  }
  _triggerChanError() {
    this.channels.forEach((r) => r.trigger(ot.error));
  }
  _appendParams(r, t) {
    if (Object.keys(t).length === 0) return r;
    const s = r.match(/\?/) ? "&" : "?",
      o = new URLSearchParams(t);
    return `${r}${s}${o}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((r) => r()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var r;
    if (!!this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (r = this.conn) === null ||
            r === void 0 ||
            r.close(py, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this.makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class yy {
  constructor(r, t, s, o) {
    const l = {},
      d = o === "*" ? `realtime:${s}` : `realtime:${s}:${o}`,
      c = t.Authorization.split(" ")[1];
    c && (l.user_token = c), (this.subscription = r.channel(d, l));
  }
  getPayloadRecords(r) {
    const t = { new: {}, old: {} };
    return (
      (r.type === "INSERT" || r.type === "UPDATE") &&
        (t.new = qd(r.columns, r.record)),
      (r.type === "UPDATE" || r.type === "DELETE") &&
        (t.old = qd(r.columns, r.old_record)),
      t
    );
  }
  on(r, t) {
    return (
      this.subscription.on(r, (s) => {
        let o = {
          schema: s.schema,
          table: s.table,
          commit_timestamp: s.commit_timestamp,
          eventType: s.type,
          new: {},
          old: {},
          errors: s.errors,
        };
        (o = Object.assign(Object.assign({}, o), this.getPayloadRecords(s))),
          t(o);
      }),
      this
    );
  }
  subscribe(r = () => {}) {
    return (
      this.subscription.onError((t) => r("SUBSCRIPTION_ERROR", t)),
      this.subscription.onClose(() => r("CLOSED")),
      this.subscription
        .subscribe()
        .receive("ok", () => r("SUBSCRIBED"))
        .receive("error", (t) => r("SUBSCRIPTION_ERROR", t))
        .receive("timeout", () => r("RETRYING_AFTER_TIMEOUT")),
      this.subscription
    );
  }
}
class xy extends mc {
  constructor(
    r,
    {
      headers: t = {},
      schema: s,
      realtime: o,
      table: l,
      fetch: d,
      shouldThrowOnError: c,
    }
  ) {
    super(r, { headers: t, schema: s, fetch: d, shouldThrowOnError: c }),
      (this._subscription = null),
      (this._realtime = o),
      (this._headers = t),
      (this._schema = s),
      (this._table = l);
  }
  on(r, t) {
    return (
      this._realtime.isConnected() || this._realtime.connect(),
      this._subscription ||
        (this._subscription = new yy(
          this._realtime,
          this._headers,
          this._schema,
          this._table
        )),
      this._subscription.on(r, t)
    );
  }
}
const wy = "0.0.0",
  ky = { "X-Client-Info": `storage-js/${wy}` };
var Os =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
const $y = (a) =>
    a.msg || a.message || a.error_description || a.error || JSON.stringify(a),
  Ey = (a, r) => {
    if (typeof a.json != "function") return r(a);
    a.json().then((t) =>
      r({ message: $y(t), status: (a == null ? void 0 : a.status) || 500 })
    );
  },
  Sy = (a, r, t, s) => {
    const o = { method: a, headers: (r == null ? void 0 : r.headers) || {} };
    return a === "GET"
      ? o
      : ((o.headers = Object.assign(
          { "Content-Type": "application/json" },
          r == null ? void 0 : r.headers
        )),
        (o.body = JSON.stringify(s)),
        Object.assign(Object.assign({}, o), t));
  };
function Gi(a, r, t, s, o, l) {
  return Os(this, void 0, void 0, function* () {
    return new Promise((d, c) => {
      a(t, Sy(r, s, o, l))
        .then((m) => {
          if (!m.ok) throw m;
          return s != null && s.noResolveJson ? d(m) : m.json();
        })
        .then((m) => d(m))
        .catch((m) => Ey(m, c));
    });
  });
}
function jo(a, r, t, s) {
  return Os(this, void 0, void 0, function* () {
    return Gi(a, "GET", r, t, s);
  });
}
function ur(a, r, t, s, o) {
  return Os(this, void 0, void 0, function* () {
    return Gi(a, "POST", r, s, o, t);
  });
}
function Ty(a, r, t, s, o) {
  return Os(this, void 0, void 0, function* () {
    return Gi(a, "PUT", r, s, o, t);
  });
}
function yc(a, r, t, s, o) {
  return Os(this, void 0, void 0, function* () {
    return Gi(a, "DELETE", r, s, o, t);
  });
}
const xc = (a) => {
  let r;
  return (
    a ? (r = a) : typeof fetch == "undefined" ? (r = Ji) : (r = fetch),
    (...t) => r(...t)
  );
};
var Or =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
class Oy {
  constructor(r, t = {}, s) {
    (this.url = r),
      (this.headers = Object.assign(Object.assign({}, ky), t)),
      (this.fetch = xc(s));
  }
  listBuckets() {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: yield jo(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (r) {
        return { data: null, error: r };
      }
    });
  }
  getBucket(r) {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: yield jo(this.fetch, `${this.url}/bucket/${r}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  createBucket(r, t = { public: !1 }) {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield ur(
            this.fetch,
            `${this.url}/bucket`,
            { id: r, name: r, public: t.public },
            { headers: this.headers }
          )).name,
          error: null,
        };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  updateBucket(r, t) {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ty(
            this.fetch,
            `${this.url}/bucket/${r}`,
            { id: r, name: r, public: t.public },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  emptyBucket(r) {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ur(
            this.fetch,
            `${this.url}/bucket/${r}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  deleteBucket(r) {
    return Or(this, void 0, void 0, function* () {
      try {
        return {
          data: yield yc(
            this.fetch,
            `${this.url}/bucket/${r}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
}
var an =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
const Ay = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Iy = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class Cy {
  constructor(r, t = {}, s, o) {
    (this.url = r),
      (this.headers = t),
      (this.bucketId = s),
      (this.fetch = xc(o));
  }
  uploadOrUpdate(r, t, s, o) {
    return an(this, void 0, void 0, function* () {
      try {
        let l;
        const d = Object.assign(Object.assign({}, Iy), o),
          c = Object.assign(
            Object.assign({}, this.headers),
            r === "POST" && { "x-upsert": String(d.upsert) }
          );
        typeof Blob != "undefined" && s instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", d.cacheControl),
            l.append("", s))
          : typeof FormData != "undefined" && s instanceof FormData
          ? ((l = s), l.append("cacheControl", d.cacheControl))
          : ((l = s),
            (c["cache-control"] = `max-age=${d.cacheControl}`),
            (c["content-type"] = d.contentType));
        const m = this._removeEmptyFolders(t),
          v = this._getFinalPath(m),
          f = yield this.fetch(`${this.url}/object/${v}`, {
            method: r,
            body: l,
            headers: c,
          });
        if (f.ok) return { data: { Key: v }, error: null };
        {
          const b = yield f.json();
          return { data: null, error: b };
        }
      } catch (l) {
        return { data: null, error: l };
      }
    });
  }
  upload(r, t, s) {
    return an(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", r, t, s);
    });
  }
  update(r, t, s) {
    return an(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", r, t, s);
    });
  }
  move(r, t) {
    return an(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ur(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: r, destinationKey: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  copy(r, t) {
    return an(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ur(
            this.fetch,
            `${this.url}/object/copy`,
            { bucketId: this.bucketId, sourceKey: r, destinationKey: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  createSignedUrl(r, t) {
    return an(this, void 0, void 0, function* () {
      try {
        const s = this._getFinalPath(r);
        let o = yield ur(
          this.fetch,
          `${this.url}/object/sign/${s}`,
          { expiresIn: t },
          { headers: this.headers }
        );
        const l = `${this.url}${o.signedURL}`;
        return (o = { signedURL: l }), { data: o, error: null, signedURL: l };
      } catch (s) {
        return { data: null, error: s, signedURL: null };
      }
    });
  }
  createSignedUrls(r, t) {
    return an(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield ur(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: t, paths: r },
            { headers: this.headers }
          )).map((o) =>
            Object.assign(Object.assign({}, o), {
              signedURL: o.signedURL ? `${this.url}${o.signedURL}` : null,
            })
          ),
          error: null,
        };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
  download(r) {
    return an(this, void 0, void 0, function* () {
      try {
        const t = this._getFinalPath(r);
        return {
          data: yield (yield jo(this.fetch, `${this.url}/object/${t}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  getPublicUrl(r) {
    try {
      const t = this._getFinalPath(r),
        s = `${this.url}/object/public/${t}`;
      return { data: { publicURL: s }, error: null, publicURL: s };
    } catch (t) {
      return { data: null, error: t, publicURL: null };
    }
  }
  remove(r) {
    return an(this, void 0, void 0, function* () {
      try {
        return {
          data: yield yc(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: r },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        return { data: null, error: t };
      }
    });
  }
  list(r, t, s) {
    return an(this, void 0, void 0, function* () {
      try {
        const o = Object.assign(Object.assign(Object.assign({}, Ay), t), {
          prefix: r || "",
        });
        return {
          data: yield ur(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            o,
            { headers: this.headers },
            s
          ),
          error: null,
        };
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
  _getFinalPath(r) {
    return `${this.bucketId}/${r}`;
  }
  _removeEmptyFolders(r) {
    return r.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
}
class Dy extends Oy {
  constructor(r, t = {}, s) {
    super(r, t, s);
  }
  from(r) {
    return new Cy(this.url, this.headers, r, this.fetch);
  }
}
const Py = (a) => {
  let r;
  return (
    a ? (r = a) : typeof fetch == "undefined" ? (r = Ji) : (r = fetch),
    (...t) => r(...t)
  );
};
var Ry =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
class Ly {
  constructor(r, { headers: t = {}, customFetch: s } = {}) {
    (this.url = r), (this.headers = t), (this.fetch = Py(s));
  }
  setAuth(r) {
    this.headers.Authorization = `Bearer ${r}`;
  }
  invoke(r, t) {
    return Ry(this, void 0, void 0, function* () {
      try {
        const { headers: s, body: o } = t != null ? t : {},
          l = yield this.fetch(`${this.url}/${r}`, {
            method: "POST",
            headers: Object.assign({}, this.headers, s),
            body: o,
          }),
          d = l.headers.get("x-relay-error");
        if (d && d === "true")
          return { data: null, error: new Error(yield l.text()) };
        let c;
        const { responseType: m } = t != null ? t : {};
        return (
          !m || m === "json"
            ? (c = yield l.json())
            : m === "arrayBuffer"
            ? (c = yield l.arrayBuffer())
            : m === "blob"
            ? (c = yield l.blob())
            : (c = yield l.text()),
          { data: c, error: null }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
}
var Si =
  (globalThis && globalThis.__awaiter) ||
  function (a, r, t, s) {
    function o(l) {
      return l instanceof t
        ? l
        : new t(function (d) {
            d(l);
          });
    }
    return new (t || (t = Promise))(function (l, d) {
      function c(f) {
        try {
          v(s.next(f));
        } catch (b) {
          d(b);
        }
      }
      function m(f) {
        try {
          v(s.throw(f));
        } catch (b) {
          d(b);
        }
      }
      function v(f) {
        f.done ? l(f.value) : o(f.value).then(c, m);
      }
      v((s = s.apply(a, r || [])).next());
    });
  };
const Ny = {
  schema: "public",
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  multiTab: !0,
  headers: gc,
};
class My {
  constructor(r, t, s) {
    if (((this.supabaseUrl = r), (this.supabaseKey = t), !r))
      throw new Error("supabaseUrl is required.");
    if (!t) throw new Error("supabaseKey is required.");
    const o = hb(r),
      l = Object.assign(Object.assign({}, Ny), s);
    if (
      ((this.restUrl = `${o}/rest/v1`),
      (this.realtimeUrl = `${o}/realtime/v1`.replace("http", "ws")),
      (this.authUrl = `${o}/auth/v1`),
      (this.storageUrl = `${o}/storage/v1`),
      o.match(/(supabase\.co)|(supabase\.in)/))
    ) {
      const c = o.split(".");
      this.functionsUrl = `${c[0]}.functions.${c[1]}.${c[2]}`;
    } else this.functionsUrl = `${o}/functions/v1`;
    (this.schema = l.schema),
      (this.multiTab = l.multiTab),
      (this.fetch = l.fetch),
      (this.headers = Object.assign(
        Object.assign({}, gc),
        s == null ? void 0 : s.headers
      )),
      (this.shouldThrowOnError = l.shouldThrowOnError || !1),
      (this.auth = this._initSupabaseAuthClient(l)),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, l.realtime)
      )),
      this._listenForAuthEvents(),
      this._listenForMultiTabEvents();
  }
  get functions() {
    return new Ly(this.functionsUrl, {
      headers: this._getAuthHeaders(),
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new Dy(this.storageUrl, this._getAuthHeaders(), this.fetch);
  }
  from(r) {
    const t = `${this.restUrl}/${r}`;
    return new xy(t, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      realtime: this.realtime,
      table: r,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    });
  }
  rpc(r, t, { head: s = !1, count: o = null } = {}) {
    return this._initPostgRESTClient().rpc(r, t, { head: s, count: o });
  }
  channel(r, t) {
    var s, o;
    const l =
      (o =
        (s = this.auth.session()) === null || s === void 0
          ? void 0
          : s.access_token) !== null && o !== void 0
        ? o
        : this.supabaseKey;
    return (
      this.realtime.isConnected() || this.realtime.connect(),
      this.realtime.channel(
        r,
        Object.assign(Object.assign({}, t), { user_token: l })
      )
    );
  }
  removeAllSubscriptions() {
    return Si(this, void 0, void 0, function* () {
      const r = this.getSubscriptions().slice(),
        t = r.map((o) => this.removeSubscription(o));
      return (yield Promise.all(t)).map(({ error: o }, l) => ({
        data: { subscription: r[l] },
        error: o,
      }));
    });
  }
  removeChannel(r) {
    return Si(this, void 0, void 0, function* () {
      const { error: t } = yield this._closeSubscription(r),
        s = this.getSubscriptions(),
        o = s.filter((l) => l.isJoined()).length;
      return (
        s.length === 0 && (yield this.realtime.disconnect()),
        { data: { openChannels: o }, error: t }
      );
    });
  }
  removeSubscription(r) {
    return Si(this, void 0, void 0, function* () {
      const { error: t } = yield this._closeSubscription(r),
        s = this.getSubscriptions(),
        o = s.filter((l) => l.isJoined()).length;
      return (
        s.length === 0 && (yield this.realtime.disconnect()),
        { data: { openSubscriptions: o }, error: t }
      );
    });
  }
  _closeSubscription(r) {
    return Si(this, void 0, void 0, function* () {
      let t = null;
      if (!r.isClosed()) {
        const { error: s } = yield this._unsubscribeSubscription(r);
        t = s;
      }
      return this.realtime.remove(r), { error: t };
    });
  }
  _unsubscribeSubscription(r) {
    return new Promise((t) => {
      r.unsubscribe()
        .receive("ok", () => t({ error: null }))
        .receive("error", (s) => t({ error: s }))
        .receive("timeout", () => t({ error: new Error("timed out") }));
    });
  }
  getSubscriptions() {
    return this.realtime.channels;
  }
  _initSupabaseAuthClient({
    autoRefreshToken: r,
    persistSession: t,
    detectSessionInUrl: s,
    localStorage: o,
    headers: l,
    fetch: d,
  }) {
    const c = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new Db({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, l), c),
      autoRefreshToken: r,
      persistSession: t,
      detectSessionInUrl: s,
      localStorage: o,
      fetch: d,
    });
  }
  _initRealtimeClient(r) {
    return new by(
      this.realtimeUrl,
      Object.assign(Object.assign({}, r), {
        params: Object.assign(
          Object.assign({}, r == null ? void 0 : r.params),
          { apikey: this.supabaseKey }
        ),
      })
    );
  }
  _initPostgRESTClient() {
    return new Mb(this.restUrl, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      fetch: this.fetch,
      throwOnError: this.shouldThrowOnError,
    });
  }
  _getAuthHeaders() {
    var r, t;
    const s = Object.assign({}, this.headers),
      o =
        (t =
          (r = this.auth.session()) === null || r === void 0
            ? void 0
            : r.access_token) !== null && t !== void 0
          ? t
          : this.supabaseKey;
    return (
      (s.apikey = this.supabaseKey),
      (s.Authorization = s.Authorization || `Bearer ${o}`),
      s
    );
  }
  _listenForMultiTabEvents() {
    if (!this.multiTab || !fb() || !(window != null && window.addEventListener))
      return null;
    try {
      return window == null
        ? void 0
        : window.addEventListener("storage", (r) => {
            var t, s, o;
            if (r.key === cb) {
              const l = JSON.parse(String(r.newValue)),
                d =
                  (s =
                    (t = l == null ? void 0 : l.currentSession) === null ||
                    t === void 0
                      ? void 0
                      : t.access_token) !== null && s !== void 0
                    ? s
                    : void 0,
                c =
                  (o = this.auth.session()) === null || o === void 0
                    ? void 0
                    : o.access_token;
              d
                ? !c && d
                  ? this._handleTokenChanged("SIGNED_IN", d, "STORAGE")
                  : c !== d &&
                    this._handleTokenChanged("TOKEN_REFRESHED", d, "STORAGE")
                : this._handleTokenChanged("SIGNED_OUT", d, "STORAGE");
            }
          });
    } catch (r) {
      return console.error("_listenForMultiTabEvents", r), null;
    }
  }
  _listenForAuthEvents() {
    let { data: r } = this.auth.onAuthStateChange((t, s) => {
      this._handleTokenChanged(
        t,
        s == null ? void 0 : s.access_token,
        "CLIENT"
      );
    });
    return r;
  }
  _handleTokenChanged(r, t, s) {
    (r === "TOKEN_REFRESHED" || r === "SIGNED_IN") &&
    this.changedAccessToken !== t
      ? (this.realtime.setAuth(t),
        s == "STORAGE" && this.auth.setAuth(t),
        (this.changedAccessToken = t))
      : (r === "SIGNED_OUT" || r === "USER_DELETED") &&
        (this.realtime.setAuth(this.supabaseKey),
        s == "STORAGE" && this.auth.signOut());
  }
}
const Uy = (a, r, t) => new My(a, r, t),
  By = "https://cikahocszfogccapupzr.supabase.co",
  jy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpa2Fob2NzemZvZ2NjYXB1cHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAxMjA4MTYsImV4cCI6MTk2NTY5NjgxNn0.vLOJy09FKJAuBvPpQdS00jxiQj6Psu506mf6Ltgy8rc",
  tt = Uy(By, jy);
const Fy = he({
  setup(a) {
    const r = Se(),
      t = yt(),
      s = tt.auth.user();
    s && (r.user = s),
      tt.auth.onAuthStateChange((l, d) => {
        r.user = d == null ? void 0 : d.user;
      }),
      t.fullPath.includes("type=recovery")
        ? De.push(
            `/reset?access_token=${
              t.fullPath.split("&expires_in")[0].split("access_token=")[1]
            }`
          )
        : !r.user || !r.user.id
        ? ["/login", "/signup"].includes(t.path) || De.push("/login")
        : r.dashboards.length === 0
        ? o()
        : ["/", "/login", "/signup", "/dashboards"].includes(t.path) &&
          De.push(`/dashboards/${r.dashboards[0].id}`);
    function o() {
      const l = Ur(),
        d = {
          id: l,
          name: "My Dashboard",
          app_id: Math.random().toString(36).substring(2),
          supabase_url: "",
          supabase_anon_key: "",
          schema: null,
          pages: [],
        };
      r.dashboards.push(d), De.push(`/dashboards/${l}`);
    }
    return (l, d) => {
      const c = Tn("router-view");
      return (
        k(),
        pe(c, null, {
          default: C(({ Component: m }) => [
            E(
              dr,
              { mode: "out-in" },
              { default: C(() => [(k(), pe(bs(m)))]), _: 2 },
              1024
            ),
          ]),
          _: 1,
        })
      );
    };
  },
});
var Wy =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAODUlEQVR4nNVbeY8cxRWv3f0MEL4BIh/DUqREIWCDPdWzxvbuTPXiYyNubxIBARJ2IRBzCJAQR5RwJJHBKPE/8AeQmEMgggFjJZESgglgcNjdmerZ2dmdq6Lfq3rdNT1Xj9c2dkml6emj6r1X76x6T4jTbJuvL4lARSKYrgmpVoRUeixQ0YQslnEtgjASObU8LpW+VCq9XSo9L5U+JEN9VCp9UipdDZRuyVC3ce3u4dlLUukFqfQkvs2p0rgMIxpTqrKQoZ6gucJI5KfaFobdJXFOmyRgABQBNhYoAoqAkYXShAz1Jqn0Aan0Mal0XSpt0IMwMoGK7G8YGZn6H99377tvjwUYK9SbckUaWwR2/olA6TGGIwj12Uc8wMQhJuceOcTp/yVS6Tmp9PEY2aQ3gzACMg0Z6pZUtOrtAL+WA7jjWQPvum88YhFBMPZ+GWIu5gpNRGG4zhohZKhFvhjZVVZ6fP+CYQ64yLHskoc4EAHCTQ+5tltd+u3VpYrid7yOMRoBPwMhQr0YhHpehjS3KOwELHocsOUdYc5YmwxLhHzOdV71yZkKJpqVSp/y2LgRIx1iheleX4QzdPutiphTmoGKGgFxA57rUzLUs3mrg7D6lhscV25YNwSxrGtWckRlqfR3pdJv8IrLkFabWBtISwv4RhDvRYiEO8Bhoa7buUg0jkilLwP7SxVB8Y6xmObC8ukiH3mKLhrfosrM/tNS6ZpbXax4yxGhzSx8NjvmYO5yczfcdc3BJnKqRCLBihkWY6SWh7lJtDwNlLem6AFv1YE8a+0zveJDOcLTKeA4KE6IBP4fcLBavRBaAuSy6oVgd6kDeYjB5CQNdtDKXQQZb8Wsfg5WvT83kDjAmjA3ADZcH7waustarXG2EtvCDDpBxiYOKx+JfJ7k6rCjMGTdaeMzLucb0g/wKRxsdeKEUB/eVnTmEURweA1HPrQKT6oSsU6AlU8UnWO78wLxLm6IuUJp+BHECRCHLWqRcMqRaPchQsAODXla0KQkAgecuYmR/zZZfigRoBz5V0V1xxUPkCJU0fg2VbJ+Qi/LELDtVBouJml7yJaTq/Me+Q4iqPi36czktBOFCUeMvsiPu9/LApgVS8HWMA/ufOtOP/mww0Relug2Tx8Eu2NZF/IXRsiZKh4ecXJPNvY8UXajE8H6B2Qi4bhtn1kVz95PbrPIhZHYPFWyDo/tNqKDe+tYn+38yNo+HQzlZ2zviAr7fIfO7w8aM0NvB9Z9jnGxrjvptgly60MthPyO4ZAWvxeTb48BNsD6AH7yWnu9raDN5p22D0OEn/H7+Bb/MVaaIKcpCqdc8EY4X75vUYigULHKwcbZ8+5j8rOzrjwDzkhfPaXN5ZOafqdmI3PHr6rmzvuqhND23QlCfsc9PMM7d91v35/6cTLWVVOdc2TlCBeYQYHXnUJccFw/cfVMmRQgrX5g4/nFZPWzubeeO2x+tN0iff2tFfPbP9TMex/UTancMmjr622z++aK+d7WsrniGrvCV+3SZssue417eLb3loqp19v0Db7924d1GuuGWys0Nubw58wkCogfEi5A2H4Jc4Gw4S3JxRy5lBRckAnJjHyuaOX24SdWzUfHGzEC3Fot+/+d9+vmN8/XzMuvrpu/vFU3b75rO65xD8/efb/e8Q23eqNNY2OOyRk7Z1YieIEa64I5NosCe3g5bGMpfdwN2BxV3rfs1ISE35rNNvV2O+lZm/9Ns2XH8dvrb67TnKPoBenhBly3Fpcn4Bix3489PGIXOcLqQx7Buvc/Wo1XzUfaR8Z/Pqjzyvcaw39+3yNVmhswZBOFeFcK+xbG4SwEdlyx6eiQQiCR2eyBDXfsicyXXzU72Da94r2IYa/x2/95miP8OTAn5mZRyKILOFhyBADOQuSmyTM6xuzvQt5Mqw+F9OzBWszyacDPdOOxeS7MDRiyc0GHSTwmi6Vx4fbt6x3xdQbFB3NVuC4yS8uteGVGlfXTIQA6c8FSqWWK11lYsijE1OYsOOFS4Q4gOoOeIZ1X/3d/9Ff/7CLvEwFzMRcABuaCjBzQ9jZOtgu3pY2HScibUQQ+/zIt+2cd/1hv8JyAYUQR8PXAPAjwknvQyIT4jNX89zyUaP5O5dWp1Fjz83t8v5+SG/xN5/std2PhIWcRXLyRAQ8OkA6BAEdZOWTZ6YHtvXKHNq+9sU6TJ2YvAc5HpHP1uonQzwpwSxPBJzKLwatH1gmmLH6Bc43dnqY+CgKc9Fgjk+nbtS8yi0utvqbLR+LTz5oE4Md/b3QQot+3aHgXBD7xXytivcb2v/1mqUUwZTWJniI8CQJUsxCAw1T47Qhu/JXox86/P7RGQMHfRzBz78NVU1vrbefR1tba9A7HCPgWYwwSG74FmAAbh90ZCVBFLIC4OQ4dh2n/H+a1ef7FRPungWK2hI+PKI71Br79fq5snnqu1qU7WFSefr5G7+BdlmeM8eY79aHzPfdCjWDLYg3irfQwagl2DbN4f+T379KEHAPUT8ahJCGXDBC+3VbUJrwhMtXVbjbGPTyDTWdZxrcYA0quFxf4MIBI2eMDCo7oN7MI+GLwnxOJ+evFyghgfvrLFWJ7HyCw9DV7IpLZNEL/W2zRs5zHvvgW4vCzu1c63Gx/Pr7/yYlmJvanbh0+/FZHUoJYHWxwRBUfAdMToF8/tkqmCZscjMzWgjZ7bqmYtfVuDoD877m5Qu8w0fAtxsBYvQmeEERHLYKNvcJRlODRxAz2J0IeOz3T2sz+JNmw6OX5MQE+PN4wm3dos3U6QQjyffBPa311AJ7hHZ9gEIEPPm7EnJVuDMN6vW1m5yoE4zD59+KBoyDAoSyOELPj3F0rfQOfNEKvvL7umSdtnnim1jfa498nn6l1mNtXXlsfGGv4AdLcnSsE4zA94DlCL4EA812nP/0U4E5tbltY6YlEGhG+Xi61zIcfN8wXJ3vb9F5j4V18g2Bn0HvpsQDbMEXo9jvi/UHhMriGBkPsA9x+zwoFI1kIkPYEB3l1fK/fN8MIAJgAWyYCJMHQZFc4TPuBA0xgWiP3B8jKrL/TM2osQN0jyCBvEN8ANsA4gADd4XBuuuxviLSG6YCbfw4OMBSIdPv19n+j2TartZS9TgU4vXqMeIoLMBbGTOZKcY27BmzDdIC3L3hMqqVxOhaj7SHrGdUdB/TkAjgy2Ks/+XXiB/gry5wBH/7G2yrmsadXzT//1ehi6ywNRMC3jz61SmOd+Lx7243n5y0ywDYgHqDNHk8B2i2x1KZoksPXwwliXwAe21/frncAm15ZAPzIk6tm5saKuen2FXKBEeAAqcXllqnV2nRWAJ8A1wiu8Azv4F18c+1NFfPIU6vmsy+aXZziExW7xOr6oTtDLN6cUeI2RQslkZtezrQtTp5gGJFth41feLAae4W8Oml//YU/r5kfSHsYApsOc7hjb0QA79tfMXv3V+ga9/AM7+BdfPPiYesz8Ir7u8Jo//60ae4+UI39jQHIc/5QvC2eU8g6LdOu8ITLxZ0j9xDJTwm1ehPBHWddeY2dDGyKsDfdsKrhDRUSHXh17KqCTeHkwGlBxzXu8dh8RIZvOez22yefNumABO/zPkB+MPK812kPRkK9n3MhhJdTh+OiJVaGg3KA4rNAh9AV2+1/hLJvv1c31apdpQcfXx1515bH533Hhx63bvBKtW3eerdOXMdzwn8BDINX3p0SJ5sgi3QMaE+GxoQslKEIJ5wyXHBZmDbRKMMeARHCIUhnfju02TdXiQE9jWPtjvHR5x+skqhgtcF1hHjGQ9IkeRNmj7gBjp9Ntg6/ESLYZROIKBVdlS/i43HPJGY+HsdqgB3B1lbeswE5iLjoV3oxBa94xjGS4/E4tRY4IulTj+WnX+Z0WC/r2ub/0iGpk5fMJ0U+0GyLN8oB/lgjjsdmD9fIUgcuszGuLi1IIE2EEC9qccfnRkzuRQGEfsNNZtNQL8gUmZj12e4fyatVm1luc4qTZOrO5Ej6RUJRLbhQk6RY7jmjNZ0kFfaoK5CuzMVPk0sHSRcCEVKwNp3Tg5Q/h1ufeoJAlUU+rAicmQdhnBbPydH1C4EIKRjjU2BidyR/hqhzqoigXwq9pFRzSicd21L4WgQhFSIcdBr0vCZCJ2zW5BHsIbb9sPNVHoPnR5lhQ/OFFeuDsgjyp3B92B2be8nS5zxFvl+39QPeyju5PxxMA3Za0GzJ0nGJTEopOiIc9HRCnC7/rXJDnC4fdaXLBwWCuQP5zCU0QUIAO0CxzOJAYXNXwUT4bRdMxKYO/QHL9m7lXUIkikBGakEXEb7iIgpbMhN6JTPWceobQJ1pWfdXnatFuGQGyntL8WSy8r1MXtaWh9KIiVB2RVOxn3Ak4QDaSAEh6JjNJVmd0aKp5DjL1ReiaCpZdRRwIcHbpfqX46IpWLcNtYBKaFzZKkykcyPzYY3zik/ZMJoIEZfN8enLhnQEH9d7NYRUJJVwA1JfZyevXeNSuQmUxaBSjEr7spTIZG12gkpcOKnuZZeyfHFgs0wQZsYr5szmiIWTunfhpF3tROZttueCC97E/Pt+4SSl/oqz0gJXcpJwBLiBwmk8w37Cfi6dTWWbJaWz7gTKL58NspTOWsSPu/LcS2z4nsDgCqs3zvJZGsnajC1YpgJm7Cc44uSmFyEim4J+xdPpVXe9B7K8df2RK8TelJta4pR+2sOIN3Ncmdw5bYHTDcHmf4jA6oYxKm0vLrviq0jkCnH5PDLRICYojY/L5x0HQHnG5fMBSuxtqT0ObC7NFZao9o/GLNDYFvHisgh2fE2LgVL+023/B6Pa/e2SEeJDAAAAAElFTkSuQmCC";
function Hy(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function wc(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function zy(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
        }),
        E("path", {
          d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
        }),
      ]
    )
  );
}
function Jy(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function Vd(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function Gy(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function jr(a, r) {
  return (
    k(),
    pe(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
var Z = ((a) => (
  (a.Text = "TEXT"),
  (a.LongText = "LONGTEXT"),
  (a.Date = "DATE"),
  (a.Bool = "BOOL"),
  (a.Enum = "ENUM"),
  (a.Join = "JOIN"),
  a
))(Z || {});
async function Fo(a, r) {
  try {
    return await (
      await (await fetch(`${a}/rest/v1/?apikey=${r}`)).json()
    ).definitions;
  } catch {
    throw Error(
      "We can't seem to find your Supabase project. Check your URL and Anon Key again?"
    );
  }
}
class qi {
  constructor(r = "") {
    xo(this, "user");
    const t = Se();
    this.user = r || t.user.id;
  }
  async getDashboards(r = !1, t = !1) {
    const s = Se();
    if (((s.initialized = !0), s.initializingData && !t)) return;
    (s.initializingData = !0), await qy();
    const o = await tt
      .from("dashboards")
      .select(
        "id,supabase_url,supabase_anon_key,app_id,app_name,views(id,label,page_id,table_id,attributes,mode,readonly,order,id_col,user_col,enforce_user_col,triggers)"
      )
      .eq("user", this.user);
    o.error && console.error(o.error.message);
    const l = await tt
      .from("dashboards_staging")
      .select(
        "id,supabase_url,supabase_anon_key,app_id,app_name,views_staging(id,label,page_id,table_id,attributes,mode,readonly,order,id_col,user_col,enforce_user_col,triggers)"
      )
      .eq("user", this.user);
    l.error && console.error(l.error.message);
    let d = l.data || [];
    d = d.map((v) => Object.assign(v, { views: v.views_staging }));
    let c = [];
    o.data &&
      (c = o.data.filter(
        (v) => !(d != null && d.map((f) => f.id).includes(v.id))
      )),
      (d = d.concat(c));
    const m = await this.hydrateDashboards(d);
    return (
      r
        ? (s.dashboards = m)
        : (m.map((v) => v.id),
          m.forEach((v) => {
            if (!s.dashboards.map((f) => f.id).includes(v.id))
              s.dashboards.push(JSON.parse(JSON.stringify(v)));
            else {
              const f = s.dashboards.findIndex((b) => b.id === v.id);
              s.dashboards[f].schema = v.schema;
            }
          })),
      (s.savedDashboards = JSON.parse(JSON.stringify(m))),
      (s.deployedDashboards = JSON.parse(
        JSON.stringify(await this.hydrateDashboards(o.data))
      )),
      (s.initializingData = !1),
      { dashboards: m, error: o.error || l.error }
    );
  }
  async createDashboard(r) {
    Se().dashboards.push(r), await this.saveDashboard(r.id);
  }
  async deleteDashboard(r) {
    const t = Se(),
      s = t.dashboards.findIndex((m) => m.id === r);
    t.dashboards.splice(s, 1);
    const o = await tt.from("views_staging").delete().match({ dashboard: r });
    if (o.error) throw Error(o.error.message);
    const l = await tt.from("dashboards_staging").delete().match({ id: r });
    if (l.error) throw Error(l.error.message);
    const d = await tt.from("views").delete().match({ dashboard: r });
    if (d.error) throw Error(d.error.message);
    const c = await tt.from("dashboards").delete().match({ id: r });
    if (c.error) throw Error(c.error.message);
  }
  async saveDashboard(r, t = "staging") {
    const s = Se();
    let o = "dashboards_staging",
      l = "views_staging";
    t === "prod" && ((o = "dashboards"), (l = "views"));
    const d = s.dashboards.find((v) => v.id === r);
    if (!d) throw Error("Dashboard not found");
    const c = await tt
      .from(o)
      .upsert({
        id: r,
        supabase_url: d.supabase_url,
        supabase_anon_key: d.supabase_anon_key,
        app_id: d.app_id,
        app_name: d.name,
        user: s.user.id,
      });
    if (c.error) throw Error(c.error.message);
    const m = await tt.from(l).delete().match({ dashboard: d.id });
    if (m.error) throw Error(m.error.message);
    if (d.pages.length) {
      const v = await tt
        .from(l)
        .upsert(
          d.pages.map((f) => ({
            id: f.id,
            label: f.name,
            page_id: f.page_id,
            table_id: f.table_id,
            attributes: f.attributes,
            user: s.user.id,
            dashboard: d.id,
            mode: f.mode,
            readonly: f.readonly,
            order: f.order,
            enforce_user_col: f.enforce_user_col,
            user_col: f.user_col,
            id_col: f.id_col,
            triggers: f.triggers || [],
          }))
        );
      if (v.error) throw Error(v.error.message);
    }
    return d;
  }
  async hydrateDashboards(r) {
    let t = [];
    return (
      r &&
        (t = await Promise.all(
          r.map(async (s) => {
            let o = [];
            (o = s.views.map((d) => {
              let c = [];
              return (
                d.attributes &&
                  (c = d.attributes.map((m) => ({
                    id: m.id,
                    label: m.label,
                    required: m.required === "true" || m.required === !0,
                    readonly: m.readonly || !1,
                    type: Object.values(Z).includes(m.type) ? m.type : Z.Text,
                    enumOptions: m.enumOptions || [],
                    hidden: m.hidden || !1,
                  }))),
                {
                  id: d.id,
                  name: d.label,
                  page_id: d.page_id || d.table_id,
                  table_id: d.table_id,
                  mode: d.mode,
                  readonly: d.readonly,
                  attributes: c,
                  triggers: d.triggers || [],
                  id_col: d.id_col || "id",
                  user_col: d.user_col || "user",
                  enforce_user_col:
                    typeof d.enforce_user_col == "boolean"
                      ? d.enforce_user_col
                      : !0,
                  order: d.order,
                }
              );
            })),
              o.sort((d, c) => d.order - c.order);
            let l = {};
            return (
              await Fo(s.supabase_url, s.supabase_anon_key)
                .then((d) => (l = d))
                .catch(() => console.error("Failed to retrieve schema")),
              {
                id: s.id,
                name: s.app_name,
                app_id: s.app_id,
                supabase_url: s.supabase_url,
                supabase_anon_key: s.supabase_anon_key,
                schema: l,
                pages: o,
              }
            );
          })
        )),
      t
    );
  }
}
async function qy() {
  const a = Se(),
    { data: r, error: t } = await tt
      .from("pro_profiles")
      .select("num_dashboards")
      .eq("user", a.user.id)
      .single();
  t ? console.error(t.message) : (a.maxDashboards = r.num_dashboards || 1);
}
async function Vy(a) {
  const r = Se(),
    t = ["name", "app_id", "supabase_url", "supabase_anon_key"],
    s = ["name", "page_id", "table_id"],
    o = r.dashboards.find((c) => c.id === a);
  if (!o) throw Error("We can't seem to find this dashboard...");
  const l = t.filter((c) => !o[c]);
  if (l.length) {
    const c = `${l.join(", ")} need${l.length === 1 ? "s" : ""} to be filled.`;
    throw Error(c);
  }
  o.pages.forEach((c) => {
    const m = s.filter((v) => !c[v]);
    if (m.length) {
      const v = `${m.join(", ")} need${
        m.length === 1 ? "s" : ""
      } to be filled in all of your pages.`;
      throw Error(v);
    }
  }),
    o.pages.forEach((c) => {
      const m = Object.keys(o.schema[c.table_id].properties);
      if (!m.includes(c.user_col) && c.enforce_user_col)
        throw Error(`Invalid user column for page ${c.name}`);
      if (!m.includes(c.id_col))
        throw Error(`Invalid ID column for page ${c.name}`);
    }),
    o.pages.forEach((c, m) => {
      if (
        o.pages
          .slice(0, m)
          .concat(o.pages.slice(m + 1))
          .map((f) => f.page_id)
          .includes(c.page_id)
      )
        throw Error(
          `Page IDs need to be unique. Found duplicate page ID: ${c.page_id}`
        );
    }),
    (r.loading = !0),
    await new qi()
      .saveDashboard(a)
      .then((c) => {
        const m = r.savedDashboards.findIndex((v) => v.id === a);
        r.savedDashboards[m] = JSON.parse(JSON.stringify(c));
      })
      .catch((c) => {
        console.error(c.message);
      })
      .finally(() => (r.loading = !1));
}
async function Yy(a) {
  const r = Se();
  (r.loading = !0),
    new qi()
      .saveDashboard(a, "prod")
      .then((s) => {
        const o = r.deployedDashboards.findIndex((l) => l.id === a);
        r.deployedDashboards[o] = JSON.parse(JSON.stringify(s));
      })
      .catch((s) => {
        console.error(s.message);
      })
      .finally(() => (r.loading = !1));
}
const Wo = he({
    setup(a) {
      const r = Se();
      return (t, s) => (
        k(),
        A(
          "div",
          {
            class:
              "flex items-center justify-center rounded-full w-8 h-8 cursor-pointer text-neutral-700 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700",
            onClick: s[0] || (s[0] = (o) => ($(r).darkMode = !$(r).darkMode)),
            title: "Toggle dark mode",
          },
          [
            E($(z_), { class: "w-5 dark:hidden" }),
            E($(J_), { class: "w-5 hidden dark:block" }),
          ]
        )
      );
    },
  }),
  Xy = ["disabled"],
  Vi = he({
    props: {
      disabled: { type: Boolean, default: !1 },
      to: { type: String, default: "" },
      target: { type: String, default: "_self" },
    },
    emits: ["click"],
    setup(a, { emit: r }) {
      const t = a;
      return (s, o) =>
        a.to
          ? (k(),
            pe(
              $(G_),
              {
                key: 0,
                to: a.to,
                target: a.target,
                class:
                  "rounded-md py-1 px-3 inline-flex justify-center items-center gap-1 text-sm font-medium focus:outline-none focus:ring-0 transition",
                onClick: o[0] || (o[0] = (l) => r("click")),
              },
              { default: C(() => [ct(s.$slots, "default")]), _: 3 },
              8,
              ["to", "target"]
            ))
          : (k(),
            A(
              "button",
              {
                key: 1,
                disabled: t.disabled,
                class:
                  "rounded-md py-1 px-3 inline-flex justify-center items-center gap-1 text-sm font-medium focus:outline-none focus:ring-0 transition",
                onClick: o[1] || (o[1] = (l) => r("click")),
              },
              [ct(s.$slots, "default")],
              8,
              Xy
            ));
    },
  }),
  En = he({
    props: { disabled: { type: Boolean, default: !1 } },
    emits: ["click"],
    setup(a, { emit: r }) {
      const t = a;
      return (s, o) => (
        k(),
        pe(
          Vi,
          {
            class:
              "border border-transparent hover:shadow text-primary hover:bg-highlight disabled:hover:shadow-none disabled:text-tertiary dark:text-primary-dark dark:hover:bg-highlight-dark dark:disabled:text-tertiary-dark dark:disabled:bg-transparent",
            disabled: t.disabled,
            onClick: o[0] || (o[0] = (l) => r("click")),
          },
          { default: C(() => [ct(s.$slots, "default")]), _: 3 },
          8,
          ["disabled"]
        )
      );
    },
  }),
  Ky = { class: "h-5 w-4 flex items-center" },
  Qy = {
    class:
      "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 pointer-events-auto bg-mainpanel dark:bg-[#262626]",
  },
  qt = he({
    props: { align: { type: String, default: "right" } },
    emits: ["open"],
    setup(a, { emit: r }) {
      return (t, s) => (
        k(),
        pe(
          $(cc),
          { class: "relative" },
          {
            default: C(({ open: o }) => [
              E(
                $(Ro),
                { onClick: s[0] || (s[0] = (l) => l.stopPropagation()) },
                {
                  default: C(() => [
                    ct(t.$slots, "button", {}, () => [
                      E(En, null, {
                        default: C(() => [
                          p("div", Ky, [
                            E($(ys), {
                              class: "w-4 text-primary dark:text-primary-dark",
                            }),
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                  ]),
                  _: 3,
                }
              ),
              E(
                dr,
                {
                  "enter-active-class": "transition ease-out duration-200",
                  "enter-from-class": "opacity-0 translate-y-1",
                  "enter-to-class": "opacity-100 translate-y-0",
                  "leave-active-class": "transition ease-in duration-150",
                  "leave-from-class": "opacity-100 translate-y-0",
                  "leave-to-class": "opacity-0 translate-y-1",
                  onBeforeEnter: s[1] || (s[1] = (l) => r("open")),
                },
                {
                  default: C(() => [
                    E(
                      $(dc),
                      {
                        class: $e([
                          "bg-transparent pointer-events-none pb-24 absolute z-10 transform mt-3 px-2 w-max max-w-xs sm:px-0",
                          [
                            a.align === "left" ? "left-0" : "",
                            a.align === "right" ? "right-0" : "",
                          ],
                        ]),
                      },
                      {
                        default: C(() => [
                          p("div", Qy, [ct(t.$slots, "default")]),
                        ]),
                        _: 3,
                      },
                      8,
                      ["class"]
                    ),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          }
        )
      );
    },
  });
var Zy = "/assets/dashibase-light.51ca689d.png",
  On = (a, r) => {
    const t = a.__vccOpts || a;
    for (const [s, o] of r) t[s] = o;
    return t;
  };
const e1 = {},
  t1 = { src: Zy };
function n1(a, r) {
  return k(), A("img", t1);
}
var Yi = On(e1, [["render", n1]]);
const Mt = he({
    props: { disabled: { type: Boolean, default: !1 } },
    emits: ["click"],
    setup(a, { emit: r }) {
      const t = a;
      return (s, o) => (
        k(),
        pe(
          Vi,
          {
            class:
              "shadow border border-transparent bg-primary text-input-focus hover:bg-primary-focus disabled:bg-input-disabled disabled:text-tertiary dark:bg-primary-dark dark:text-input-focus-dark dark:hover:bg-primary-focus-dark dark:disabled:text-tertiary-dark dark:disabled:bg-input-disabled-dark",
            disabled: t.disabled,
            onClick: o[0] || (o[0] = (l) => r("click")),
          },
          { default: C(() => [ct(s.$slots, "default")]), _: 3 },
          8,
          ["disabled"]
        )
      );
    },
  }),
  Nt = he({
    props: { disabled: { type: Boolean, default: !1 } },
    emits: ["click"],
    setup(a, { emit: r }) {
      const t = a;
      return (s, o) => (
        k(),
        pe(
          Vi,
          {
            class:
              "shadow border border-transparent bg-overlay text-primary hover:bg-highlight hover:text-primary-focus disabled:bg-input-disabled disabled:text-tertiary dark:bg-overlay-dark dark:text-primary-dark dark:hover:bg-highlight-dark dark:hover:text-primary-focus-dark dark:disabled:bg-input-disabled-dark dark:disabled:text-tertiary-dark",
            disabled: t.disabled,
            onClick: o[0] || (o[0] = (l) => r("click")),
          },
          { default: C(() => [ct(s.$slots, "default")]), _: 3 },
          8,
          ["disabled"]
        )
      );
    },
  }),
  r1 = { class: "relative text-primary dark:text-primary-dark" },
  s1 = ["src"],
  i1 = { class: "truncate" },
  a1 = {
    key: 0,
    class:
      "absolute inset-y-0 right-0 flex items-center pr-0 pointer-events-none",
  },
  o1 = {
    class:
      "mt-1 w-max max-w-xs shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm pointer-events-auto bg-mainpanel dark:bg-[#262626]",
  },
  l1 = ["src"],
  Gn = he({
    props: {
      options: { type: Array, required: !0 },
      modelValue: { type: [String, Boolean, Number], required: !0 },
      hidden: { type: Boolean, default: !1 },
      align: { type: String, default: "left" },
    },
    emits: ["update:modelValue"],
    setup(a, { emit: r }) {
      const t = a,
        s = Ne({
          get() {
            return t.modelValue;
          },
          set(l) {
            r("update:modelValue", l);
          },
        }),
        o = Ne(() => {
          const l = t.options.find((d) => d.value === s.value);
          return l ? l.label : "Select";
        });
      return (l, d) => (
        k(),
        pe(
          $(X_),
          {
            as: "div",
            modelValue: $(s),
            "onUpdate:modelValue":
              d[0] || (d[0] = (c) => (hc(s) ? (s.value = c) : null)),
            class: "inline-block",
          },
          {
            default: C(() => [
              p("div", r1, [
                E(
                  $(q_),
                  {
                    class: $e([
                      "relative w-full border rounded-md py-0.5 text-left focus:outline-none focus:ring-0 text-sm",
                      a.hidden
                        ? "bg-transparent border-transparent px-1 hover:border-neutral-300 dark:hover:border-neutral-700"
                        : "bg-surface dark:bg-surface-dark border-neutral-200 dark:border-neutral-700 pl-2 pr-6",
                    ]),
                  },
                  {
                    default: C(() => {
                      var c, m;
                      return [
                        p(
                          "div",
                          {
                            class: $e([
                              "block truncate flex gap-2",
                              t.options.find((v) => v.value === $(s))
                                ? ""
                                : "text-neutral-300 dark:text-neutral-600",
                            ]),
                          },
                          [
                            t.options.find((v) => v.value === $(s)) &&
                            ((c = t.options.find((v) => v.value === $(s))) ==
                            null
                              ? void 0
                              : c.img)
                              ? (k(),
                                A(
                                  "img",
                                  {
                                    key: 0,
                                    src:
                                      (m = t.options.find(
                                        (v) => v.value === $(s)
                                      )) == null
                                        ? void 0
                                        : m.img,
                                    class: "w-5",
                                  },
                                  null,
                                  8,
                                  s1
                                ))
                              : be("", !0),
                            p("span", i1, Y($(o)), 1),
                          ],
                          2
                        ),
                        a.hidden
                          ? be("", !0)
                          : (k(),
                            A("span", a1, [
                              E($(Gy), {
                                class:
                                  "h-5 w-5 text-neutral-300 dark:text-neutral-700",
                                "aria-hidden": "true",
                              }),
                            ])),
                      ];
                    }),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
                E(
                  dr,
                  {
                    "enter-active-class": "transition ease-in duration-150",
                    "leave-active-class": "transition ease-in duration-150",
                    "leave-from-class": "opacity-100",
                    "leave-to-class": "opacity-0",
                    "enter-from-class": "opacity-0",
                    "enter-to-class": "opacity-100",
                  },
                  {
                    default: C(() => [
                      E(
                        $(V_),
                        {
                          class: $e([
                            "z-10 absolute pb-24 focus:outline-none text-sm pointer-events-none bg-transparent",
                            t.align === "right" ? "right-0" : "",
                          ]),
                        },
                        {
                          default: C(() => [
                            p("div", o1, [
                              (k(!0),
                              A(
                                qe,
                                null,
                                Ge(
                                  a.options,
                                  (c, m) => (
                                    k(),
                                    pe(
                                      $(Y_),
                                      {
                                        as: "template",
                                        key: m,
                                        value: c.value,
                                      },
                                      {
                                        default: C(
                                          ({ active: v, selected: f }) => [
                                            p(
                                              "li",
                                              {
                                                class: $e([
                                                  v
                                                    ? "bg-neutral-100 dark:bg-neutral-700"
                                                    : "",
                                                  "cursor-pointer select-none relative py-2 pl-2 pr-6 flex gap-2",
                                                ]),
                                              },
                                              [
                                                c.img
                                                  ? (k(),
                                                    A(
                                                      "img",
                                                      {
                                                        key: 0,
                                                        src: c.img,
                                                        class: "w-5",
                                                      },
                                                      null,
                                                      8,
                                                      l1
                                                    ))
                                                  : be("", !0),
                                                p(
                                                  "span",
                                                  {
                                                    class: $e([
                                                      f
                                                        ? "font-semibold"
                                                        : "font-normal",
                                                      "block truncate",
                                                    ]),
                                                  },
                                                  Y(c.label),
                                                  3
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["value"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue"]
        )
      );
    },
  }),
  u1 = {
    class:
      "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
  },
  d1 = p(
    "span",
    {
      class: "hidden sm:inline-block sm:align-middle sm:h-screen",
      "aria-hidden": "true",
    },
    "\u200B",
    -1
  ),
  c1 = {
    class:
      "relative inline-block align-bottom bg-mainpanel dark:bg-mainpanel-dark text-primary dark:text-primary-dark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-12",
  },
  h1 = p(
    "div",
    {
      class: "h-2 w-full bg-primary dark:bg-primary-dark absolute top-0 left-0",
    },
    null,
    -1
  ),
  f1 = { class: "flex items-start gap-2" },
  p1 = { class: "shrink flex flex-col gap-4" },
  g1 = { class: "mt-5 sm:mt-6 flex gap-2 justify-end" },
  m1 = Q("Cancel"),
  v1 = Q("Confirm"),
  sl = he({
    props: {
      title: { type: String, default: "Are you sure you want to delete?" },
      message: { type: String, default: "" },
    },
    setup(a, { expose: r }) {
      const t = Se(),
        s = W("Are you sure you want to delete?"),
        o = W("Deleting is irreversible"),
        l = W(!1),
        d = W(void 0),
        c = W(void 0);
      function m() {
        return (
          (l.value = !0),
          new Promise((b, I) => {
            (d.value = b), (c.value = I);
          })
        );
      }
      function v() {
        (l.value = !1), d.value && d.value(!0);
      }
      function f() {
        (l.value = !1), d.value && d.value(!1);
      }
      return (
        r({ confirm: m, title: s, message: o }),
        (b, I) => (
          k(),
          pe(
            $(Es),
            { as: "template", show: l.value },
            {
              default: C(() => [
                E(
                  $($s),
                  {
                    as: "div",
                    class: $e([
                      "fixed z-50 inset-0 overflow-y-auto",
                      $(t).darkMode ? "dark" : "",
                    ]),
                    onClose: I[1] || (I[1] = (U) => (l.value = !1)),
                  },
                  {
                    default: C(() => [
                      p("div", u1, [
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0",
                          },
                          {
                            default: C(() => [
                              E($(ks), {
                                class:
                                  "fixed inset-0 transition-opacity bg-neutral-50 dark:bg-[#131313] bg-opacity-75 dark:bg-opacity-75",
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        d1,
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: C(() => [
                              p("div", c1, [
                                h1,
                                E($(jr), {
                                  class:
                                    "h-5 text-neutral-500 absolute top-6 right-4 cursor-pointer",
                                  onClick:
                                    I[0] || (I[0] = (U) => (l.value = !1)),
                                }),
                                p("div", f1, [
                                  E($(wc), {
                                    class:
                                      "mt-0.5 shrink-0 w-7 text-red-500 dark:text-red-400",
                                  }),
                                  p("div", p1, [
                                    p("div", null, [
                                      E(
                                        $(Hi),
                                        {
                                          as: "h3",
                                          class:
                                            "text-2xl font-bold items-start flex gap-2",
                                        },
                                        {
                                          default: C(() => [Q(Y(s.value), 1)]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    p("p", null, Y(o.value), 1),
                                  ]),
                                ]),
                                p("div", g1, [
                                  E(
                                    En,
                                    { onClick: f },
                                    { default: C(() => [m1]), _: 1 }
                                  ),
                                  E(
                                    Mt,
                                    { onClick: v },
                                    { default: C(() => [v1]), _: 1 }
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            8,
            ["show"]
          )
        )
      );
    },
  }),
  _1 = {
    class:
      "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
  },
  b1 = p(
    "span",
    {
      class: "hidden sm:inline-block sm:align-middle sm:h-screen",
      "aria-hidden": "true",
    },
    "\u200B",
    -1
  ),
  y1 = {
    class:
      "relative inline-block align-bottom bg-mainpanel dark:bg-mainpanel-dark text-primary dark:text-primary-dark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-12",
  },
  x1 = p(
    "div",
    {
      class: "h-2 w-full bg-primary dark:bg-primary-dark absolute top-0 left-0",
    },
    null,
    -1
  ),
  w1 = { class: "flex items-start gap-2" },
  k1 = { class: "shrink flex flex-col gap-4" },
  $1 = { class: "mt-5 sm:mt-6 flex gap-2 justify-end" },
  E1 = Q("Okay"),
  S1 = he({
    props: {
      title: { type: String, default: "Are you sure you want to delete?" },
      message: { type: String, default: "" },
    },
    setup(a, { expose: r }) {
      const t = Se(),
        s = W("Something went wrong"),
        o = W("Hmm"),
        l = W(!1),
        d = W(void 0),
        c = W(void 0);
      function m() {
        return (
          (l.value = !0),
          new Promise((f, b) => {
            (d.value = f), (c.value = b);
          })
        );
      }
      function v() {
        (l.value = !1), d.value && d.value(!0);
      }
      return (
        r({ confirm: m, title: s, message: o }),
        (f, b) => (
          k(),
          pe(
            $(Es),
            { as: "template", show: l.value },
            {
              default: C(() => [
                E(
                  $($s),
                  {
                    as: "div",
                    class: $e([
                      "fixed z-50 inset-0 overflow-y-auto",
                      $(t).darkMode ? "dark" : "",
                    ]),
                    onClose: b[1] || (b[1] = (I) => (l.value = !1)),
                  },
                  {
                    default: C(() => [
                      p("div", _1, [
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0",
                          },
                          {
                            default: C(() => [
                              E($(ks), {
                                class:
                                  "fixed inset-0 transition-opacity bg-neutral-50 dark:bg-[#131313] bg-opacity-75 dark:bg-opacity-75",
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        b1,
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: C(() => [
                              p("div", y1, [
                                x1,
                                E($(jr), {
                                  class:
                                    "h-5 text-neutral-500 absolute top-6 right-4 cursor-pointer",
                                  onClick:
                                    b[0] || (b[0] = (I) => (l.value = !1)),
                                }),
                                p("div", w1, [
                                  E($(wc), {
                                    class:
                                      "mt-0.5 shrink-0 w-7 text-red-500 dark:text-red-400",
                                  }),
                                  p("div", k1, [
                                    p("div", null, [
                                      E(
                                        $(Hi),
                                        {
                                          as: "h3",
                                          class:
                                            "text-2xl font-bold items-start flex gap-2",
                                        },
                                        {
                                          default: C(() => [Q(Y(s.value), 1)]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    p("p", null, Y(o.value), 1),
                                  ]),
                                ]),
                                p("div", $1, [
                                  E(
                                    Mt,
                                    { onClick: v },
                                    { default: C(() => [E1]), _: 1 }
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            8,
            ["show"]
          )
        )
      );
    },
  });
var T1 = "/assets/SK.49dc3085.jpg";
const O1 = {
    class:
      "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
  },
  A1 = p(
    "span",
    {
      class: "hidden sm:inline-block sm:align-middle sm:h-screen",
      "aria-hidden": "true",
    },
    "\u200B",
    -1
  ),
  I1 = {
    class:
      "relative inline-block align-bottom bg-mainpanel dark:bg-mainpanel-dark text-primary dark:text-primary-dark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-12",
  },
  C1 = p(
    "div",
    {
      class: "h-2 w-full bg-primary dark:bg-primary-dark absolute top-0 left-0",
    },
    null,
    -1
  ),
  D1 = { class: "flex flex-col gap-4" },
  P1 = Q(" Creating more dashboards? "),
  R1 = p("p", { class: "text-2xl font-bold" }, "Way to go! \u{1F389}", -1),
  L1 = { key: 0 },
  N1 = Q(" and additional dashboards are $25 per month per dashboard. "),
  M1 = p(
    "p",
    null,
    [
      Q(" Ping me in "),
      p(
        "a",
        {
          class: "underline focus-visible:outline-none",
          href: "https://discord.gg/CqgZGh4ZA8",
          target: "_blank",
        },
        "Discord"
      ),
      Q(" or email me at "),
      p(
        "a",
        {
          href: "mailto:sk@dashibase.com",
          class: "underline focus-visible:outline-none",
        },
        "sk@dashibase.com"
      ),
      Q(" if you have any questions! "),
    ],
    -1
  ),
  U1 = { class: "mt-5 sm:mt-6 flex gap-2 justify-between" },
  B1 = p(
    "div",
    { class: "flex gap-2 items-center" },
    [
      p("img", { src: T1, class: "rounded-full w-10" }),
      p("div", { class: "text-xs" }, [
        p("p", null, "Swee Kiat"),
        p("p", null, "Cofounder, Dashibase"),
      ]),
    ],
    -1
  ),
  j1 = Q("Support Us"),
  F1 = he({
    setup(a) {
      const r = Se(),
        t = "https://buy.stripe.com/8wM2bEgRl0Y10Te8wz";
      function s() {
        window.open(t);
      }
      return (o, l) => (
        k(),
        pe(
          $(Es),
          { as: "template", show: $(r).showProPlan },
          {
            default: C(() => [
              E(
                $($s),
                {
                  as: "div",
                  class: $e([
                    "fixed z-50 inset-0 overflow-y-auto",
                    $(r).darkMode ? "dark" : "",
                  ]),
                  onClose: l[1] || (l[1] = (d) => ($(r).showProPlan = !1)),
                },
                {
                  default: C(() => [
                    p("div", O1, [
                      E(
                        $(cn),
                        {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0",
                        },
                        {
                          default: C(() => [
                            E($(ks), {
                              class:
                                "fixed inset-0 transition-opacity bg-neutral-50 dark:bg-[#131313] bg-opacity-75 dark:bg-opacity-75",
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                      A1,
                      E(
                        $(cn),
                        {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from":
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          "leave-from":
                            "opacity-100 translate-y-0 sm:scale-100",
                          "leave-to":
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        },
                        {
                          default: C(() => [
                            p("div", I1, [
                              C1,
                              E($(jr), {
                                class:
                                  "h-5 text-gray-500 absolute top-6 right-4 cursor-pointer",
                                onClick:
                                  l[0] ||
                                  (l[0] = (d) => ($(r).showProPlan = !1)),
                              }),
                              p("div", null, [
                                p("div", D1, [
                                  p("div", null, [
                                    E(
                                      $(Hi),
                                      { as: "h3", class: "text-2xl font-bold" },
                                      { default: C(() => [P1]), _: 1 }
                                    ),
                                    R1,
                                  ]),
                                  p("p", null, [
                                    Q(
                                      " You have reached your limit of " +
                                        Y($(r).maxDashboards) +
                                        " dashboard",
                                      1
                                    ),
                                    $(r).maxDashboards > 1
                                      ? (k(), A("span", L1, "s"))
                                      : be("", !0),
                                    N1,
                                  ]),
                                  M1,
                                ]),
                              ]),
                              p("div", U1, [
                                B1,
                                E(
                                  Mt,
                                  { onClick: s },
                                  { default: C(() => [j1]), _: 1 }
                                ),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["class"]
              ),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    },
  }),
  W1 = {
    class:
      "absolute w-full flex justify-between py-2 px-10 border-b z-40 bg-surface dark:bg-surface-dark dark:border-neutral-700 text-primary dark:text-primary-dark",
  },
  H1 = { class: "flex gap-4 items-center text-sm" },
  z1 = { key: 0, class: "flex gap-1 items-center" },
  J1 = Q("Dashboard"),
  G1 = { class: "ml-1" },
  q1 = { class: "flex gap-2" },
  V1 = { class: "relative group" },
  Y1 = Q(" Save "),
  X1 = { class: "relative group" },
  K1 = Q(" Deploy "),
  Q1 = Q("Help"),
  Z1 = { class: "text-sm dark:bg-neutral-750 rounded-lg w-72 p-4" },
  ex = p("h3", { class: "font-semibold" }, "Need help?", -1),
  tx = { class: "space-y-2 pt-3" },
  nx = p(
    "p",
    null,
    [
      Q(" We have a detailed walkthrough "),
      p(
        "a",
        {
          href: "https://medium.com/dashibase/how-to-create-your-new-app-with-dashibase-a237768b1634",
          target: "_blank",
          class: "underline font-medium",
        },
        "here"
      ),
      Q(". You can also check our "),
      p(
        "a",
        {
          href: "https://dashibase.com/help",
          target: "_blank",
          class: "underline font-medium",
        },
        "Help"
      ),
      Q(" page. "),
    ],
    -1
  ),
  rx = p("p", null, " Or just reach out - we are always happy to help! ", -1),
  sx = { class: "flex gap-2 pt-2" },
  ix = { href: "mailto:sk@dashibase.com", class: "inline-block" },
  ax = Q("Contact us"),
  ox = { href: "https://discord.gg/CqgZGh4ZA8", class: "inline-block" },
  lx = p("img", { src: Wy, class: "w-4" }, null, -1),
  ux = Q("Join our Discord"),
  dx = he({
    setup(a) {
      const r = yt(),
        t = Se(),
        s = Ne(() => r.params.dashboardId || "");
      $n(s, (N) => {
        o.value = N;
      });
      const o = W(r.params.dashboardId || "new"),
        l = Ne(
          () => t.dashboards.find((N) => N.id === o.value) || { pages: [] }
        ),
        d = Ne(
          () =>
            l.value.pages.find((N) => N.id === r.params.pageId) || { name: "" }
        ),
        c = Ne(() =>
          t.dashboards.map((N) => Object({ label: N.name, value: N.id }))
        );
      $n(o, (N) => {
        N !== "" && (N === "new" ? U() : De.push(`/dashboards/${N}`));
      });
      const m = Ne(() => {
          const N = t.savedDashboards.find((F) => F.id === o.value);
          return JSON.stringify(N) !== JSON.stringify(l.value);
        }),
        v = Ne(() => {
          const N = t.savedDashboards.find((X) => X.id === o.value) || {},
            F = t.deployedDashboards.find((X) => X.id === o.value) || {};
          return JSON.stringify(N) !== JSON.stringify(F);
        }),
        f = W(null),
        b = W(null);
      async function I() {
        var X;
        const N = t.dashboards.filter(
          (K, ee) => JSON.stringify(K) !== JSON.stringify(t.savedDashboards[ee])
        );
        if (
          N.length &&
          (!f.value ||
            ((f.value.title = "You have unsaved changes!"),
            (f.value.message = `${N[0].name} is unsaved. Are you sure you want to leave without saving?`),
            !(await ((X = f.value) == null ? void 0 : X.confirm()))))
        )
          return;
        t.loading = !0;
        const { error: F } = await tt.auth.signOut();
        F ? console.error(F) : (t.$reset(), De.push("/login"));
      }
      function U() {
        const N = Ur(),
          F = {
            id: N,
            name: "My Dashboard",
            app_id: Math.random().toString(36).substring(2),
            supabase_url: "",
            supabase_anon_key: "",
            schema: null,
            pages: [],
          };
        t.dashboards.push(F), De.push(`/dashboards/${N}`);
      }
      function j() {
        Vy(o.value).catch(async (N) => {
          var F;
          b.value &&
            ((b.value.message = N.message),
            await ((F = b.value) == null ? void 0 : F.confirm()));
        });
      }
      return (N, F) => (
        k(),
        A("div", W1, [
          p("div", H1, [
            E(Yi, { class: "h-6" }),
            E(
              Gn,
              {
                class: "pt-0.5",
                options: $(c),
                modelValue: o.value,
                "onUpdate:modelValue": F[0] || (F[0] = (X) => (o.value = X)),
              },
              null,
              8,
              ["options", "modelValue"]
            ),
            $(r).fullPath.includes("/pages/")
              ? (k(),
                A("div", z1, [
                  E(
                    En,
                    {
                      to: `/dashboards/${o.value}`,
                      class: "px-1.5 py-0.5 font-normal",
                    },
                    { default: C(() => [J1]), _: 1 },
                    8,
                    ["to"]
                  ),
                  E($(Hy), { class: "w-4" }),
                  p(
                    "div",
                    G1,
                    Y($(r).params.pageId ? $(d).name : "New Page"),
                    1
                  ),
                ]))
              : be("", !0),
          ]),
          p("div", q1, [
            p("div", V1, [
              E(
                Mt,
                { disabled: !$(m), onClick: j },
                { default: C(() => [Y1]), _: 1 },
                8,
                ["disabled"]
              ),
              p(
                "div",
                {
                  class: $e([
                    "absolute top-full translate-y-2 left-1/2 -translate-x-1/2 bg-overlay dark:bg-overlay-dark px-4 py-2 rounded text-sm whitespace-nowrap shadow opacity-0 transition pointer-events-none",
                    $(m) ? "" : "group-hover:opacity-100",
                  ]),
                },
                Y($(m) ? "Save changes" : "No unsaved changes"),
                3
              ),
            ]),
            p("div", X1, [
              E(
                Mt,
                {
                  disabled: $(m) || !$(v),
                  onClick: F[1] || (F[1] = (X) => $(Yy)(o.value)),
                },
                { default: C(() => [K1]), _: 1 },
                8,
                ["disabled"]
              ),
              p(
                "div",
                {
                  class: $e([
                    "absolute top-full translate-y-2 left-1/2 -translate-x-1/2 bg-overlay dark:bg-overlay-dark px-4 py-2 rounded text-sm whitespace-nowrap shadow opacity-0 transition pointer-events-none",
                    $(m) || !$(v) ? "group-hover:opacity-100" : "",
                  ]),
                },
                Y(
                  $(m)
                    ? "Please save changes before deploying"
                    : $(v)
                    ? "Deploy changes"
                    : "No undeployed changes"
                ),
                3
              ),
            ]),
            E(qt, null, {
              button: C(() => [
                E(Nt, null, {
                  default: C(() => [E($(K_), { class: "w-4" }), Q1]),
                  _: 1,
                }),
              ]),
              default: C(() => [
                p("div", Z1, [
                  ex,
                  p("div", tx, [
                    nx,
                    rx,
                    p("div", sx, [
                      p("a", ix, [
                        E(
                          Nt,
                          { class: "text-xs" },
                          {
                            default: C(() => [E($(zy), { class: "w-4" }), ax]),
                            _: 1,
                          }
                        ),
                      ]),
                      p("a", ox, [
                        E(
                          Nt,
                          { class: "text-xs" },
                          { default: C(() => [lx, ux]), _: 1 }
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            }),
            E(Wo),
            E(qt, null, {
              default: C(() => [
                p("div", { class: "text-sm dark:bg-neutral-750 rounded-lg" }, [
                  p(
                    "div",
                    {
                      class:
                        "px-4 py-2 cursor-pointer rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700",
                      onClick: I,
                    },
                    "Log out"
                  ),
                ]),
              ]),
              _: 1,
            }),
          ]),
          E(sl, { ref_key: "deleteModal", ref: f }, null, 512),
          E(S1, { ref_key: "alertModal", ref: b }, null, 512),
          E(F1),
        ])
      );
    },
  }),
  cx = {
    id: "resizee",
    class: "overflow-auto flex justify-between grow-0 shrink-0 h-full",
    style: { width: "50%" },
  },
  hx = p(
    "div",
    {
      id: "resizer",
      class:
        "shrink-0 w-16 h-full cursor-ew-resize flex items-center z-20 bg-transparent",
    },
    null,
    -1
  ),
  fx = he({
    props: { initialWidth: { type: String, default: "50%" } },
    emits: ["resized"],
    setup(a, { emit: r }) {
      const t = a;
      document.addEventListener("selectstart", (o) =>
        s.value ? o.preventDefault() : null
      );
      const s = W(!1);
      return (
        Q_(() => {
          const o = document.getElementById("resizee");
          o.style.width = t.initialWidth;
          const l = document.getElementById("resizer");
          l == null || l.addEventListener("mousedown", d, !1);
          function d(v) {
            window.addEventListener("mousemove", c, !1),
              window.addEventListener("mouseup", m, !1),
              (s.value = !0);
          }
          function c(v) {
            (o.style.width = v.clientX + "px"), r("resized", v.clientX);
          }
          function m(v) {
            window.removeEventListener("mousemove", c, !1),
              window.removeEventListener("mouseup", m, !1),
              (s.value = !1);
          }
        }),
        (o, l) => (k(), A("div", cx, [ct(o.$slots, "default"), hx]))
      );
    },
  }),
  px = Z_(
    '<div class="bg-neutral-100 dark:bg-neutral-750 h-9 flex items-center justify-between drop-shadow"><div class="px-2 flex gap-1"><div class="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400"></div><div class="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400"></div><div class="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400"></div></div><div class="px-2"></div></div>',
    1
  ),
  gx = { class: "flex items-center justify-between w-full top-1.5 absolute" },
  mx = {
    class:
      "pt-0.5 bg-white dark:bg-neutral-800 w-[30rem] h-6 rounded text-neutral-700 dark:text-neutral-300 text-center mx-auto max-w-[60%] text-sm",
  },
  vx = { class: "overflow-auto grow rounded-b-md" },
  _x = { class: "h-full w-full bg-white" },
  bx = he({
    props: {
      url: { type: String, default: "https://dashibase.com" },
      initialHeight: { type: Number, default: 982 },
      initialWidth: { type: Number, default: 1512 },
      scale: { type: Number, default: 0.5 },
    },
    setup(a) {
      return (r, t) => (
        k(),
        A(
          "div",
          {
            class:
              "overflow-hidden drop-shadow-lg rounded bg-neutral-100 dark:bg-neutral-700 outline outline-1 outline-neutral-100 dark:outline-neutral-700",
            style: zd({
              height: `${a.initialHeight * a.scale}px`,
              width: `${a.initialWidth * a.scale}px`,
            }),
          },
          [
            p(
              "div",
              {
                class: "origin-top-left flex flex-col",
                style: zd({
                  height: `${a.initialHeight}px`,
                  width: `${a.initialWidth}px`,
                  transform: `scale(${a.scale})`,
                }),
              },
              [
                px,
                p("div", gx, [p("div", mx, Y(a.url), 1)]),
                p("div", vx, [p("div", _x, [ct(r.$slots, "default")])]),
              ],
              4
            ),
          ],
          4
        )
      );
    },
  });
var yx = "/assets/dashibase.56d635d6.svg";
const xx = (a) => (Xo("data-v-4f60c3be"), (a = a()), Ko(), a),
  wx = {
    class:
      "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
  },
  kx = xx(() =>
    p(
      "span",
      {
        class: "hidden sm:inline-block sm:align-middle sm:h-screen",
        "aria-hidden": "true",
      },
      "\u200B",
      -1
    )
  ),
  $x = {
    class:
      "relative inline-block align-bottom bg-transparent rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",
  },
  Ex = { class: "flex items-center justify-center" },
  Sx = ["src"],
  Tx = he({
    setup(a) {
      const r = Se();
      return (t, s) => (
        k(),
        pe(
          $(Es),
          { as: "template", show: $(r).loading },
          {
            default: C(() => [
              E(
                $($s),
                {
                  as: "div",
                  class: $e([
                    "fixed z-50 inset-0 overflow-y-auto",
                    $(r).darkMode ? "dark" : "",
                  ]),
                },
                {
                  default: C(() => [
                    p("div", wx, [
                      E(
                        $(cn),
                        {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0",
                        },
                        {
                          default: C(() => [
                            E($(ks), {
                              class:
                                "fixed inset-0 bg-neutral-50 dark:bg-[#131313] bg-opacity-75 dark:bg-opacity-75 transition-opacity",
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                      kx,
                      E(
                        $(cn),
                        {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from":
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          "leave-from":
                            "opacity-100 translate-y-0 sm:scale-100",
                          "leave-to":
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        },
                        {
                          default: C(() => [
                            p("div", $x, [
                              p("div", Ex, [
                                p(
                                  "img",
                                  {
                                    src: $(yx),
                                    class: "w-14 animate-metronome",
                                  },
                                  null,
                                  8,
                                  Sx
                                ),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["class"]
              ),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    },
  });
var Ox = On(Tx, [["__scopeId", "data-v-4f60c3be"]]);
const Ax = he({
    setup(a) {
      const r = yt(),
        t = Se();
      if (t.user && t.user.id) {
        const s = new qi();
        if (!t.initialized)
          (t.loading = !0),
            s.getDashboards(!0, !0).finally(() => {
              if (((t.loading = !1), t.dashboards.length === 0)) {
                const l = {
                  id: Ur(),
                  name: "My Dashboard",
                  app_id: Math.random().toString(36).substring(2),
                  supabase_url: "",
                  supabase_anon_key: "",
                  schema: null,
                  pages: [],
                };
                t.dashboards.push(l);
              }
              ["/"].includes(r.path) &&
                De.push(`/dashboards/${t.dashboards[0].id}`);
            });
        else {
          const o = setTimeout(() => (t.initializingData = !1), 1e4);
          s.getDashboards().then(() => {
            clearTimeout(o);
          });
        }
      }
      return (s, o) => null;
    },
  }),
  Ix = {},
  Cx = { class: "w-full sm:h-full overflow-auto sm:shadow" };
function Dx(a, r) {
  return k(), A("div", Cx, [ct(a.$slots, "default")]);
}
var kc = On(Ix, [["render", Dx]]);
const Px = ["title"],
  Rx = { class: "font-medium leading-none uppercase" },
  Yd = he({
    props: { size: { type: String, default: "xl" } },
    setup(a) {
      const r = a,
        t = Se(),
        s = {
          xs: ["text-xs", "h-5", "w-5"],
          sm: ["text-sm", "h-7", "w-7"],
          md: ["text-md", "h-8", "w-8"],
          lg: ["text-lg", "h-10", "w-10"],
          xl: ["text-xl", "h-11", "w-11"],
        };
      Ne(() => {
        if (!t.user.email) return "#D4D4D4";
        const l = t.user.email;
        let d = 0;
        for (let m = 0; m < l.length; m++) d = l.charCodeAt(m) + ((d << 5) - d);
        const c = d % 360;
        return {
          background: t.darkMode ? `hsl(${c},60%,30%)` : `hsl(${c},60%,85%)`,
        };
      });
      const o = Ne(() => (t.user.email ? t.user.email[0] : ""));
      return (l, d) => {
        var c;
        return (
          k(),
          A(
            "span",
            {
              class: $e([
                "inline-flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 cursor-default bg-neutral-200 dark:bg-neutral-750",
                $(s)[r.size],
              ]),
              title: ((c = $(t).user) == null ? void 0 : c.email) || "",
            },
            [p("span", Rx, Y($(o)), 1)],
            10,
            Px
          )
        );
      };
    },
  }),
  Lx = ["title"],
  Ho = he({
    setup(a) {
      const r = Se();
      return (t, s) => (
        k(),
        A(
          "h2",
          {
            class:
              "text-xl text-center font-semibold select-none transition text-primary dark:text-neutral-300",
            title: $(r).previewDashboard.name,
          },
          Y($(r).previewDashboard.name),
          9,
          Lx
        )
      );
    },
  }),
  Nx = {
    class:
      "h-full bg-gradient-to-b from-backdrop to-surface dark:from-backdrop-dark dark:to-surface-dark flex-none sm:w-64 flex flex-col justify-between text-primary dark:text-primary-dark",
  },
  Mx = { class: "space-y-8" },
  Ux = { class: "flex justify-between items-center sm:block w-full" },
  Bx = { class: "px-7 py-6" },
  jx = { class: "mr-4 sm:hidden flex items-center gap-4" },
  Fx = p("span", { class: "sr-only" }, "Open menu", -1),
  Wx = { class: "hidden sm:block" },
  Hx = { class: "space-y-1 px-3" },
  zx = ["onClick"],
  Jx = { class: "hidden sm:flex p-4 justify-between items-center" },
  Gx = { class: "flex items-center gap-2 group" },
  qx = { class: "flex-shrink-0 h-12 w-12" },
  Vx = {
    class:
      "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 bg-white divide-neutral-50 dark:bg-neutral-800 dark:divide-neutral-700",
  },
  Yx = { class: "pt-4 pb-6 px-5" },
  Xx = { class: "flex items-center justify-between" },
  Kx = { class: "flex items-center gap-2" },
  Qx = { class: "-mr-2" },
  Zx = p("span", { class: "sr-only" }, "Close menu", -1),
  ew = { class: "sm:hidden" },
  tw = ["title"],
  nw = { class: "flex-shrink-0 h-12 w-12" },
  rw = {
    class:
      "space-y-1 shrink font-medium truncate text-neutral-800 dark:text-neutral-200",
  },
  sw = {
    class:
      "flex flex-col divide-y border-t text-neutral-800 border-neutral-200 divide-neutral-200 dark:text-neutral-300 dark:border-neutral-700 dark:divide-neutral-700",
  },
  iw = ["onClick"],
  $c = he({
    props: { selected: { type: String, required: !0 } },
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = a,
        s = Se(),
        o = yt();
      function l(c) {
        o.fullPath.includes("/preview/")
          ? De.push(`/preview/${s.previewDashboard.id}/${c}`)
          : r("routerPush", c);
      }
      async function d() {
        o.fullPath.includes("/preview/") &&
          De.push(`/preview/${s.previewDashboard.id}/login`);
      }
      return (c, m) => (
        k(),
        pe(
          $(cc),
          { class: "" },
          {
            default: C(() => [
              p("div", Nx, [
                p("div", Mx, [
                  p("div", Ux, [
                    p("div", Bx, [E(Ho, { class: "w-max" })]),
                    p("div", jx, [
                      E(Wo),
                      E(
                        $(Ro),
                        {
                          class:
                            "rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-0",
                        },
                        {
                          default: C(() => [
                            Fx,
                            E($(Jy), {
                              class: "h-6 w-6",
                              "aria-hidden": "true",
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    p("div", Wx, [
                      p("div", Hx, [
                        (k(!0),
                        A(
                          qe,
                          null,
                          Ge(
                            $(s).previewDashboard.pages,
                            (v) => (
                              k(),
                              A(
                                "button",
                                {
                                  key: v.name,
                                  onClick: (f) => l(v.page_id),
                                  class: $e([
                                    "w-full truncate font-medium text-left px-4 py-2 hover:bg-surface dark:hover:bg-surface-dark",
                                    [
                                      t.selected === v.page_id
                                        ? "bg-surface dark:bg-surface-dark font-semibold shadow rounded"
                                        : "",
                                    ],
                                  ]),
                                },
                                Y(v.name),
                                11,
                                zx
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ]),
                p("div", Jx, [
                  p("div", Gx, [
                    p("div", qx, [E(Yd)]),
                    p(
                      "div",
                      {
                        class:
                          "font-medium text-sm opacity-0 group-hover:opacity-100 transition cursor-pointer",
                        onClick: d,
                      },
                      " Log out "
                    ),
                  ]),
                  E(Wo),
                ]),
              ]),
              E(
                dr,
                {
                  "enter-active-class": "duration-200 ease-out",
                  "enter-from-class": "opacity-0 scale-95",
                  "enter-to-class": "opacity-100 scale-100",
                  "leave-active-class": "duration-100 ease-in",
                  "leave-from-class": "opacity-100 scale-100",
                  "leave-to-class": "opacity-0 scale-95",
                },
                {
                  default: C(() => [
                    E(
                      $(dc),
                      {
                        focus: "",
                        class:
                          "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50",
                      },
                      {
                        default: C(() => {
                          var v, f;
                          return [
                            p("div", Vx, [
                              p("div", Yx, [
                                p("div", Xx, [
                                  p("div", Kx, [E(Ho)]),
                                  p("div", Qx, [
                                    E(
                                      $(Ro),
                                      {
                                        class:
                                          "rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-0 text-neutral-400 dark:text-neutral-500",
                                      },
                                      {
                                        default: C(() => [
                                          Zx,
                                          E($(jr), {
                                            class: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ]),
                              ]),
                              p("div", ew, [
                                p(
                                  "a",
                                  {
                                    class:
                                      "py-6 flex items-center space-x-3 px-4 sm:px-6 select-none w-full",
                                    title:
                                      ((v = $(s).user) == null
                                        ? void 0
                                        : v.email) || "",
                                  },
                                  [
                                    p("div", nw, [E(Yd)]),
                                    p(
                                      "div",
                                      rw,
                                      Y(
                                        ((f = $(s).user) == null
                                          ? void 0
                                          : f.email) || ""
                                      ),
                                      1
                                    ),
                                  ],
                                  8,
                                  tw
                                ),
                                p("div", sw, [
                                  (k(!0),
                                  A(
                                    qe,
                                    null,
                                    Ge(
                                      $(s).previewDashboard.pages,
                                      (b) => (
                                        k(),
                                        A(
                                          "template",
                                          {
                                            key: b.name,
                                            class:
                                              "block hover:bg-neutral-100 font-medium",
                                          },
                                          [
                                            p(
                                              "button",
                                              {
                                                onClick: (I) => l(b.page_id),
                                                class:
                                                  "px-4 sm:px-6 py-4 block w-full truncate font-medium text-left",
                                              },
                                              Y(b.name),
                                              9,
                                              iw
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  p(
                                    "a",
                                    {
                                      class:
                                        "cursor-pointer hover:bg-neutral-100 font-medium px-4 sm:px-6 py-4 block w-full truncate",
                                      onClick: d,
                                    },
                                    "Log out"
                                  ),
                                ]),
                              ]),
                            ]),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  }),
  aw = { key: 0, class: "text-sm" },
  ow = ["onClick"],
  lw = { class: "flex flex-col gap-2 w-full" },
  uw = { class: "font-semibold text-2xl flex items-center justify-between" },
  dw = { class: "truncate" },
  cw = ["checked", "onClick"],
  hw = { class: "text-2xs text-tertiary dark:text-tertiary-dark uppercase" },
  fw = {
    key: 0,
    class:
      "truncate text-xs font-semibold bg-neutral-600 text-white w-max px-2 py-0.5 rounded dark:bg-neutral-400 dark:text-neutral-800",
  },
  pw = { key: 1, class: "-mt-0.5 truncate text-sm" },
  gw = he({
    props: {
      attributes: { type: Array, default: [] },
      items: { type: Array, default: [] },
      countFrom: { type: Number, default: 0 },
      readonly: { type: Boolean, default: !1 },
    },
    emits: ["createItem", "viewItem", "deleteItem"],
    setup(a, { emit: r }) {
      const t = yt(),
        s = W([]);
      function o(d, c) {
        c.preventDefault(), r("viewItem", d);
      }
      function l(d, c) {
        c.stopPropagation(),
          s.value.includes(d)
            ? s.value.splice(s.value.indexOf(d), 1)
            : s.value.push(d);
      }
      return (d, c) => (
        k(),
        A(
          "div",
          {
            class: $e([
              "px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-primary dark:text-primary-dark",
              $(t).fullPath.includes("/preview/") ? "2xl:grid-cols-4" : "",
            ]),
          },
          [
            a.items.length === 0
              ? (k(), A("div", aw, " No cards found. "))
              : be("", !0),
            (k(!0),
            A(
              qe,
              null,
              Ge(
                a.items,
                (m, v) => (
                  k(),
                  A(
                    "button",
                    {
                      key: m.id,
                      class:
                        "text-left border border-2 rounded-lg p-7 flex justify-between hover:shadow-md hover:scale-[101%] transition border-neutral-100 bg-overlay dark:bg-overlay-dark dark:border-neutral-750 shadow",
                      onClick: [
                        Ni((f) => o(v, f), ["exact"]),
                        Ni((f) => l(v, f), ["shift", "left", "exact"]),
                      ],
                    },
                    [
                      p("div", lw, [
                        p("div", uw, [
                          p(
                            "div",
                            dw,
                            Y(
                              a.attributes.length ? m[a.attributes[0].id] : " "
                            ),
                            1
                          ),
                          s.value.length
                            ? (k(),
                              A(
                                "input",
                                {
                                  key: 0,
                                  type: "checkbox",
                                  checked: s.value.includes(v),
                                  class:
                                    "cursor-pointer focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 h-4 w-4 rounded text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600",
                                  onClick: (f) => l(v, f),
                                },
                                null,
                                8,
                                cw
                              ))
                            : be("", !0),
                        ]),
                        (k(!0),
                        A(
                          qe,
                          null,
                          Ge(
                            a.attributes
                              .slice(1)
                              .filter((f) => m[f.id] || f.type === $(Z).Bool),
                            (f) => (
                              k(),
                              A("div", { key: f.id, class: "flex flex-col" }, [
                                p("div", hw, Y(f.label), 1),
                                f.type === $(Z).Enum || f.type === $(Z).Bool
                                  ? (k(), A("div", fw, Y(m[f.id]), 1))
                                  : (k(), A("div", pw, Y(m[f.id]), 1)),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ],
                    8,
                    ow
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  mw = {},
  vw = {
    class:
      "text-3xl font-semibold flex flex-col sm:flex-row sm:items-end justify-between gap-2 w-full transition text-primary dark:text-primary-dark",
  };
function _w(a, r) {
  return k(), A("div", vw, [ct(a.$slots, "default")]);
}
var bw = On(mw, [["render", _w]]);
const yw = { class: "w-full mb-24" },
  xw = {
    class:
      "px-4 md:px-10 pt-20 pb-10 flex flex-col sm:flex-row justify-between gap-4 sm:items-end",
  },
  il = he({
    setup(a) {
      return (r, t) => (
        k(),
        A("div", yw, [
          p("div", xw, [
            E(bw, null, { default: C(() => [ct(r.$slots, "header")]), _: 3 }),
          ]),
          ct(r.$slots, "default"),
        ])
      );
    },
  }),
  ww = { class: "flex gap-2 items-end" },
  kw = Q("Filter"),
  $w = Q("Sort"),
  Ew = Q("New"),
  Sw = he({
    props: { page: { type: Object, required: !0 } },
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = a,
        s = Se(),
        o = yt();
      function l() {
        o.fullPath.includes("/preview/")
          ? De.push(`/preview/${s.previewDashboard.id}/${t.page.page_id}/new`)
          : r("routerPush", "new");
      }
      function d(v) {
        const f = m.value[v].id;
        o.fullPath.includes("/preview/")
          ? De.push(
              `/preview/${s.previewDashboard.id}/${t.page.page_id}/view/${f}`
            )
          : r("routerPush", "view");
      }
      async function c(v) {}
      const m = Ne(() => {
        if (!t.page.attributes) return [];
        const v = t.page.attributes
          .map((f) => {
            var I;
            let b = "Lorem ipsum dolor sit amet";
            switch (f.type) {
              case Z.LongText:
                b =
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                break;
              case Z.Date:
                b = "1948-04-28";
                break;
              case Z.Bool:
                b = !0;
                break;
              case Z.Enum:
                b =
                  (I = f.enumOptions) != null && I.length
                    ? f.enumOptions[0]
                    : "";
                break;
            }
            return [f.id, b];
          })
          .reduce((f, b) => $i(Tr({}, f), { [b[0]]: b[1] }), { id: "" });
        return (v.id = "00000000-0000-0000-0000-000000000000"), [v, v, v];
      });
      return (v, f) => (
        k(),
        pe(
          il,
          { ref: "view" },
          {
            header: C(() => [
              p("div", null, Y(a.page.name), 1),
              p("div", ww, [
                E(Nt, null, {
                  default: C(() => [kw, E($(fc), { class: "w-3.5" })]),
                  _: 1,
                }),
                E(Nt, null, {
                  default: C(() => [$w, E($(pc), { class: "w-3.5" })]),
                  _: 1,
                }),
                E(Mt, { onClick: l }, { default: C(() => [Ew]), _: 1 }),
              ]),
            ]),
            default: C(() => [
              E(
                gw,
                {
                  attributes: a.page.attributes.filter((b) => !b.hidden),
                  items: $(m),
                  onCreateItem: l,
                  onViewItem: d,
                  onDeleteItem: c,
                },
                null,
                8,
                ["attributes", "items"]
              ),
            ]),
            _: 1,
          },
          512
        )
      );
    },
  }),
  Tw = {
    class:
      "rounded-lg border border-[#EAEAEA] dark:border-[#2F2F2F] shadow overflow-y-hidden",
  },
  Ow = {
    class:
      "w-full table-fixed transition text-primary dark:text-primary-dark overflow-x-auto",
  },
  Aw = { class: "drop-shadow dark:border-b-2 dark:border-b-neutral-750" },
  Iw = { class: "transition bg-table-hover dark:bg-table-hover-dark" },
  Cw = {
    class:
      "hidden sm:table-cell px-1 py-2 text-center text-xs font-medium uppercase tracking-wider w-[1rem] text-neutral-400 dark:text-neutral-600",
  },
  Dw = { key: 0 },
  Pw = ["checked"],
  Rw = { class: "lg:pl-2" },
  Lw = {
    class:
      "divide-y transition text-neutral-800 divide-neutral-200 bg-surface dark:bg-surface-dark dark:text-neutral-200 dark:divide-neutral-750",
  },
  Nw = { key: 0, class: "table-row text-sm" },
  Mw = p("td", null, null, -1),
  Uw = p(
    "td",
    { class: "px-2 py-2 max-w-0 whitespace-nowrap text-sm" },
    "No rows found.",
    -1
  ),
  Bw = [Mw, Uw],
  jw = ["onClick"],
  Fw = {
    class:
      "hidden sm:table-cell w-10 px-1 py-2 whitespace-nowrap text-sm text-center transition group text-neutral-400 dark:text-neutral-600",
  },
  Ww = { key: 0, class: "group-hover:hidden" },
  Hw = ["onClick", "checked"],
  zw = ["checked"],
  Jw = { class: "flex items-center space-x-3 lg:pl-2" },
  Gw = {
    key: 0,
    class:
      "truncate text-xs font-semibold bg-neutral-600 text-white w-max px-2 py-0.5 rounded dark:bg-neutral-400 dark:text-neutral-800",
  },
  qw = ["title"],
  Xd = he({
    props: {
      attributes: { type: Array, default: [] },
      items: { type: Array, default: [] },
      countFrom: { type: Number, default: 0 },
    },
    emits: ["createItem", "viewItem", "deleteItem"],
    setup(a, { emit: r }) {
      const t = a,
        s = W([]);
      function o(c, m) {
        m.preventDefault(), r("viewItem", c);
      }
      function l(c, m) {
        m.stopPropagation(),
          s.value.includes(c)
            ? s.value.splice(s.value.indexOf(c), 1)
            : s.value.push(c);
      }
      function d() {
        s.value.length !== t.items.length
          ? (s.value = [...Array(t.items.length).keys()])
          : (s.value = []);
      }
      return (c, m) => (
        k(),
        A("div", Tw, [
          p("table", Ow, [
            p("thead", Aw, [
              p("tr", Iw, [
                p("th", Cw, [
                  s.value.length ? be("", !0) : (k(), A("span", Dw, "#")),
                  s.value.length
                    ? (k(),
                      A(
                        "input",
                        {
                          key: 1,
                          type: "checkbox",
                          class:
                            "cursor-pointer focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 h-4 w-4 rounded text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600",
                          onClick: d,
                          checked: s.value.length === a.items.length,
                        },
                        null,
                        8,
                        Pw
                      ))
                    : be("", !0),
                ]),
                (k(!0),
                A(
                  qe,
                  null,
                  Ge(
                    a.attributes,
                    (v) => (
                      k(),
                      A(
                        "th",
                        {
                          key: v.id,
                          class:
                            "px-2 py-2 text-left text-xs font-medium uppercase tracking-wider w-[10rem]",
                        },
                        [p("span", Rw, Y(v.label), 1)]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            p("tbody", Lw, [
              a.items.length === 0 ? (k(), A("div", Nw, Bw)) : be("", !0),
              (k(!0),
              A(
                qe,
                null,
                Ge(
                  a.items,
                  (v, f) => (
                    k(),
                    A(
                      "a",
                      {
                        key: f,
                        class:
                          "table-row cursor-pointer hover:bg-table-hover dark:hover:bg-table-hover-dark text-primary dark:text-primary-dark",
                        onClick: [
                          Ni((b) => o(f, b), ["exact"]),
                          Ni((b) => l(f, b), ["shift", "left", "exact"]),
                        ],
                      },
                      [
                        p("td", Fw, [
                          s.value.length
                            ? be("", !0)
                            : (k(), A("span", Ww, Y(f + 1 + a.countFrom), 1)),
                          p(
                            "input",
                            {
                              type: "checkbox",
                              class:
                                "hidden group-hover:inline-block cursor-pointer focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 h-4 w-4 rounded text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600",
                              onClick: (b) => l(f, b),
                              checked: s.value.includes(f),
                            },
                            null,
                            8,
                            Hw
                          ),
                          s.value.length
                            ? (k(),
                              A(
                                "input",
                                {
                                  key: 1,
                                  type: "checkbox",
                                  class:
                                    "group-hover:hidden cursor-pointer focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 h-4 w-4 rounded text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600",
                                  checked: s.value.includes(f),
                                },
                                null,
                                8,
                                zw
                              ))
                            : be("", !0),
                        ]),
                        (k(!0),
                        A(
                          qe,
                          null,
                          Ge(
                            a.attributes,
                            (b, I) => (
                              k(),
                              A(
                                "td",
                                {
                                  key: b.id,
                                  class: $e([
                                    "px-2 py-2 max-w-0 whitespace-nowrap text-sm",
                                    I === 0 ? "font-medium" : "",
                                  ]),
                                },
                                [
                                  p("div", Jw, [
                                    b.type === $(Z).Enum || b.type === $(Z).Bool
                                      ? (k(), A("div", Gw, Y(v[b.id]), 1))
                                      : (k(),
                                        A(
                                          "div",
                                          {
                                            key: 1,
                                            class: "truncate",
                                            title: v[b.id],
                                          },
                                          Y(v[b.id]),
                                          9,
                                          qw
                                        )),
                                  ]),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      8,
                      jw
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    },
  }),
  Vw = { class: "flex gap-2 items-end" },
  Yw = Q("Filter"),
  Xw = Q("Sort"),
  Kw = Q("New"),
  Qw = { class: "mt-2 sm:hidden mb-36" },
  Zw = { class: "hidden sm:block mb-24 px-10" },
  ek = he({
    props: { page: { type: Object, required: !0 } },
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = a,
        s = Se(),
        o = yt();
      function l() {
        o.fullPath.includes("/preview/")
          ? De.push(`/preview/${s.previewDashboard.id}/${t.page.page_id}/new`)
          : r("routerPush", "new");
      }
      function d(v) {
        const f = m.value[v].id;
        o.fullPath.includes("/preview/")
          ? De.push(
              `/preview/${s.previewDashboard.id}/${t.page.page_id}/view/${f}`
            )
          : r("routerPush", "view");
      }
      async function c(v) {}
      const m = Ne(() => {
        if (!t.page.attributes) return [];
        const v = t.page.attributes
          .map((f) => {
            var I;
            let b = "Lorem ipsum dolor sit amet";
            switch (f.type) {
              case Z.LongText:
                b =
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                break;
              case Z.Date:
                b = "1948-04-28";
                break;
              case Z.Bool:
                b = !0;
                break;
              case Z.Enum:
                b =
                  (I = f.enumOptions) != null && I.length
                    ? f.enumOptions[0]
                    : "";
                break;
            }
            return [f.id, b];
          })
          .reduce((f, b) => $i(Tr({}, f), { [b[0]]: b[1] }), { id: "" });
        return (v.id = "00000000-0000-0000-0000-000000000000"), [v, v, v];
      });
      return (v, f) => (
        k(),
        pe(
          il,
          { ref: "view" },
          {
            header: C(() => [
              p("div", null, Y(a.page.name), 1),
              p("div", Vw, [
                E(Nt, null, {
                  default: C(() => [Yw, E($(fc), { class: "w-3.5" })]),
                  _: 1,
                }),
                E(Nt, null, {
                  default: C(() => [Xw, E($(pc), { class: "w-3.5" })]),
                  _: 1,
                }),
                E(Mt, { onClick: l }, { default: C(() => [Kw]), _: 1 }),
              ]),
            ]),
            default: C(() => [
              p("div", Qw, [
                E(
                  Xd,
                  {
                    attributes: a.page.attributes
                      .filter((b) => !b.hidden)
                      .slice(0, 1),
                    items: $(m),
                    onCreateItem: l,
                    onViewItem: d,
                    onDeleteItem: c,
                  },
                  null,
                  8,
                  ["attributes", "items"]
                ),
              ]),
              p("div", Zw, [
                E(
                  Xd,
                  {
                    attributes: a.page.attributes.filter((b) => !b.hidden),
                    items: $(m),
                    onCreateItem: l,
                    onViewItem: d,
                    onDeleteItem: c,
                  },
                  null,
                  8,
                  ["attributes", "items"]
                ),
              ]),
            ]),
            _: 1,
          },
          512
        )
      );
    },
  }),
  tk = he({
    props: { disabled: { type: Boolean, default: !1 } },
    emits: ["click"],
    setup(a, { emit: r }) {
      const t = a;
      return (s, o) => (
        k(),
        pe(
          Vi,
          {
            disabled: t.disabled,
            class:
              "shadow border border-transparent bg-overlay text-primary hover:text-red-600 hover:border-red-600 disabled:bg-input-disabled disabled:text-tertiary disabled:border-transparent dark:bg-overlay-dark dark:text-primary-dark dark:hover:text-red-400 dark:hover:border-red-400 dark:disabled:bg-input-disabled-dark dark:disabled:text-tertiary-dark",
            onClick: o[0] || (o[0] = (l) => r("click")),
          },
          { default: C(() => [ct(s.$slots, "default")]), _: 3 },
          8,
          ["disabled"]
        )
      );
    },
  }),
  nk = p("span", { class: "sr-only" }, "Use setting", -1),
  Kd = he({
    props: {
      modelValue: { type: Boolean, required: !0 },
      disabled: { type: Boolean, default: !1 },
    },
    emits: ["update:modelValue"],
    setup(a, { emit: r }) {
      const t = a,
        s = Ne({
          get() {
            return t.modelValue;
          },
          set(o) {
            r("update:modelValue", o);
          },
        });
      return (o, l) => (
        k(),
        pe(
          $(eb),
          {
            modelValue: $(s),
            "onUpdate:modelValue":
              l[0] || (l[0] = (d) => (hc(s) ? (s.value = d) : null)),
            disabled: a.disabled,
            class: $e([
              $(s)
                ? "bg-neutral-500 dark:bg-neutral-800"
                : "bg-neutral-200 dark:bg-neutral-800",
              "disabled:cursor-default relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition focus:outline-none focus:ring-0",
            ]),
          },
          {
            default: C(() => [
              nk,
              p(
                "span",
                {
                  "aria-hidden": "true",
                  class: $e([
                    $(s)
                      ? "bg-white dark:bg-neutral-300 translate-x-5"
                      : "bg-neutral-100 dark:bg-neutral-700 translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition",
                  ]),
                },
                null,
                2
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "disabled", "class"]
        )
      );
    },
  }),
  rk = { class: "flex flex-col gap-6 max-w-[40rem]" },
  sk = {
    class: "px-4 md:px-10 transition text-primary dark:text-primary-dark",
  },
  ik = ["for"],
  ak = {
    key: 0,
    class: "font-normal transition text-neutral-400 dark:text-neutral-600",
  },
  ok = { class: "mt-1" },
  lk = { key: 0 },
  uk = ["id", "value"],
  dk = { key: 1, disabled: "", class: "sm:text-sm flex items-center gap-2" },
  ck = { class: "capitalize" },
  hk = ["id", "value"],
  fk = { key: 1 },
  pk = ["id", "value", "onInput"],
  gk = { key: 1, class: "sm:text-sm flex items-center gap-2" },
  mk = { class: "capitalize" },
  vk = ["id", "value", "onInput"],
  _k = ["value"],
  bk = ["id", "value", "onInput"],
  yk = ["id", "value", "onInput"],
  xk = { class: "px-4 md:px-10 flex justify-between gap-4" },
  wk = Q(" Delete "),
  kk = { class: "flex gap-4" },
  $k = Q(" Back "),
  Ek = Q(" Save "),
  ws = he({
    props: {
      page: { type: Object, required: !0 },
      itemId: { type: String, default: "" },
      createMode: { type: Boolean, default: !1 },
    },
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = a,
        s = yt();
      function o() {
        s.fullPath.includes("/preview/")
          ? (t.createMode || t.itemId) && De.go(-1)
          : r("routerPush", "");
      }
      function l(m, v) {
        (c.value[m] = v), (d.value = !0);
      }
      const d = W(!1),
        c = Ne(() => {
          if (!t.page.attributes) return [{}];
          if (t.createMode) return [{}];
          const m = t.page.attributes
            .map((v) => {
              var b;
              let f = "Lorem ipsum dolor sit amet";
              switch (v.type) {
                case Z.LongText:
                  f =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                  break;
                case Z.Date:
                  f = "1948-04-28";
                  break;
                case Z.Bool:
                  f = !0;
                  break;
                case Z.Enum:
                  f =
                    (b = v.enumOptions) != null && b.length
                      ? v.enumOptions[0]
                      : "";
                  break;
              }
              return [v.id, f];
            })
            .reduce((v, f) => $i(Tr({}, v), { [f[0]]: f[1] }), { id: "" });
          return (m.id = "00000000-0000-0000-0000-000000000000"), m;
        });
      return (m, v) => (
        k(),
        pe(il, null, {
          header: C(() => [p("div", null, Y(a.page.name), 1)]),
          default: C(() => [
            p("div", rk, [
              (k(!0),
              A(
                qe,
                null,
                Ge(
                  a.page.attributes,
                  (f) => (
                    k(),
                    A("div", { key: f.id }, [
                      p("div", sk, [
                        p(
                          "label",
                          {
                            for: f.id,
                            class:
                              "block text-sm font-medium transition text-neutral-600 dark:text-neutral-400",
                          },
                          [
                            Q(Y(f.label) + " ", 1),
                            f.required ? (k(), A("span", ak, "*")) : be("", !0),
                          ],
                          8,
                          ik
                        ),
                        p("div", ok, [
                          a.page.readonly || f.readonly
                            ? (k(),
                              A("div", lk, [
                                f.type === $(Z).LongText
                                  ? (k(),
                                    A(
                                      "textarea",
                                      {
                                        key: 0,
                                        readonly: "",
                                        id: f.id,
                                        value: $(c)[f.id] || "",
                                        class:
                                          "sm:text-sm w-full shadow-sm bg-transparent transition border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700",
                                      },
                                      null,
                                      8,
                                      uk
                                    ))
                                  : f.type === $(Z).Bool
                                  ? (k(),
                                    A("div", dk, [
                                      E(
                                        Kd,
                                        { modelValue: $(c)[f.id] || !1 },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      p(
                                        "span",
                                        ck,
                                        Y([!0, "true"].includes($(c)[f.id])),
                                        1
                                      ),
                                    ]))
                                  : (k(),
                                    A(
                                      "input",
                                      {
                                        key: 2,
                                        type: "text",
                                        readonly: "",
                                        id: f.id,
                                        value: $(c)[f.id] || "",
                                        class:
                                          "sm:text-sm w-full shadow-sm bg-transparent transition border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700",
                                      },
                                      null,
                                      8,
                                      hk
                                    )),
                              ]))
                            : (k(),
                              A("div", fk, [
                                f.type === $(Z).Date
                                  ? (k(),
                                    A(
                                      "input",
                                      {
                                        key: 0,
                                        type: "date",
                                        id: f.id,
                                        value: $(c)[f.id] || "",
                                        onInput: (b) => l(f.id, b.target.value),
                                        class:
                                          "sm:text-sm w-full border shadow-sm cursor-pointer transition bg-white border-neutral-300 focus:border-neutral-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-500",
                                      },
                                      null,
                                      40,
                                      pk
                                    ))
                                  : f.type === $(Z).Bool
                                  ? (k(),
                                    A("div", gk, [
                                      E(
                                        Kd,
                                        {
                                          modelValue: $(c)[f.id] || !1,
                                          "onUpdate:modelValue": (b) =>
                                            l(f.id, b),
                                        },
                                        null,
                                        8,
                                        ["modelValue", "onUpdate:modelValue"]
                                      ),
                                      p(
                                        "span",
                                        mk,
                                        Y([!0, "true"].includes($(c)[f.id])),
                                        1
                                      ),
                                    ]))
                                  : f.type === $(Z).Enum
                                  ? (k(),
                                    A(
                                      "select",
                                      {
                                        key: 2,
                                        id: f.id,
                                        value:
                                          $(c)[f.id] ||
                                          (f.enumOptions
                                            ? f.enumOptions[0]
                                            : ""),
                                        onInput: (b) => l(f.id, b.target.value),
                                        class:
                                          "sm:text-sm shadow-sm pr-8 cursor-pointer transition bg-white border-neutral-300 focus:border-neutral-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-500",
                                      },
                                      [
                                        (k(!0),
                                        A(
                                          qe,
                                          null,
                                          Ge(
                                            f.enumOptions,
                                            (b) => (
                                              k(),
                                              A(
                                                "option",
                                                { key: b, value: b },
                                                Y(b),
                                                9,
                                                _k
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      40,
                                      vk
                                    ))
                                  : f.type === $(Z).LongText
                                  ? (k(),
                                    A(
                                      "textarea",
                                      {
                                        key: 3,
                                        id: f.id,
                                        value: $(c)[f.id] || "",
                                        onInput: (b) => l(f.id, b.target.value),
                                        class:
                                          "sm:text-sm w-full border shadow-sm transition bg-white border-neutral-300 focus:border-neutral-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-500",
                                      },
                                      null,
                                      40,
                                      bk
                                    ))
                                  : (k(),
                                    A(
                                      "input",
                                      {
                                        key: 4,
                                        type: "text",
                                        id: f.id,
                                        value: $(c)[f.id] || "",
                                        onInput: (b) => l(f.id, b.target.value),
                                        class:
                                          "sm:text-sm w-full shadow-sm transition bg-white border-neutral-300 focus:border-neutral-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-500",
                                      },
                                      null,
                                      40,
                                      yk
                                    )),
                              ])),
                        ]),
                      ]),
                    ])
                  )
                ),
                128
              )),
              p("div", xk, [
                p("div", null, [
                  a.itemId
                    ? (k(),
                      pe(
                        tk,
                        { key: 0, onClick: o },
                        { default: C(() => [wk]), _: 1 }
                      ))
                    : be("", !0),
                ]),
                p("div", kk, [
                  a.createMode || a.itemId
                    ? (k(),
                      pe(
                        En,
                        { key: 0, onClick: o },
                        { default: C(() => [$k]), _: 1 }
                      ))
                    : be("", !0),
                  E(
                    Mt,
                    { disabled: !d.value, onClick: o },
                    { default: C(() => [Ek]), _: 1 },
                    8,
                    ["disabled"]
                  ),
                ]),
              ]),
            ]),
          ]),
          _: 1,
        })
      );
    },
  }),
  Ec = he({
    props: { page: { type: Object, required: !0 } },
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = { list: ek, card: Sw, single: ws };
      return (s, o) => (
        k(),
        pe(
          bs($(t)[a.page.mode]),
          {
            page: a.page,
            onRouterPush: o[0] || (o[0] = (l) => r("routerPush", l)),
          },
          null,
          8,
          ["page"]
        )
      );
    },
  }),
  Sk = {},
  Tk = {
    class: "text-primary dark:text-primary-dark font-medium text-xs",
    href: "https://dashibase.com",
  };
function Ok(a, r) {
  return k(), A("a", Tk, " Powered by Dashibase ");
}
var Xi = On(Sk, [["render", Ok]]);
const Ak = {
    class:
      "h-full min-h-full grid lg:grid-cols-2 bg-surface text-primary dark:bg-surface-dark dark:text-primary-dark",
  },
  Ik = { class: "flex flex-col justify-center items-center" },
  Ck = { class: "w-96 max-w-xl" },
  Dk = { class: "space-y-6 text-primary dark:text-primary-dark" },
  Pk = p(
    "h2",
    {
      class:
        "mt-6 text-left text-4xl font-extrabold text-primary dark:text-primary-dark",
    },
    "Log in",
    -1
  ),
  Rk = { class: "space-y-4" },
  Lk = p(
    "div",
    null,
    [
      p(
        "label",
        { for: "email", class: "block text-sm font-medium" },
        "Email address"
      ),
      p("div", { class: "mt-1" }, [
        p("input", {
          id: "email",
          name: "email",
          type: "email",
          autocomplete: "email",
          required: "",
          class:
            "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
        }),
      ]),
    ],
    -1
  ),
  Nk = p(
    "label",
    { for: "password", class: "block text-sm font-medium" },
    "Password",
    -1
  ),
  Mk = { class: "mt-1" },
  Uk = ["onKeyup"],
  Bk = Q(" Log in "),
  jk = { class: "text-xs flex justify-between" },
  Fk = Q(" Don't have an account? "),
  Wk = p(
    "div",
    {
      class:
        "hidden lg:block bank-note dark:bank-note-dark bg-backdrop dark:bg-backdrop-dark dark:opacity-[5%]",
    },
    null,
    -1
  ),
  Sc = he({
    emits: ["routerPush"],
    setup(a, { emit: r }) {
      const t = yt(),
        s = Se();
      async function o() {
        s.previewDashboard.pages.length !== 0 &&
          (t.fullPath.includes("/preview/")
            ? De.push(
                `/preview/${s.previewDashboard.id}/${s.previewDashboard.pages[0].page_id}`
              )
            : r("routerPush", ""));
      }
      return (l, d) => (
        k(),
        A("div", Ak, [
          p("div", Ik, [
            p("div", Ck, [
              E(Ho, { class: "w-max" }),
              p("div", Dk, [
                Pk,
                p("div", Rk, [
                  Lk,
                  p("div", null, [
                    Nk,
                    p("div", Mk, [
                      p(
                        "input",
                        {
                          id: "password",
                          name: "password",
                          type: "password",
                          autocomplete: "current-password",
                          required: "",
                          class:
                            "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                          onKeyup: Ss(o, ["enter"]),
                        },
                        null,
                        40,
                        Uk
                      ),
                    ]),
                  ]),
                  p("div", null, [
                    E(
                      Mt,
                      { class: "w-full h-10", onClick: o },
                      { default: C(() => [Bk]), _: 1 }
                    ),
                  ]),
                ]),
                p("div", jk, [
                  p("div", null, [
                    Fk,
                    p(
                      "button",
                      {
                        onClick: d[0] || (d[0] = () => {}),
                        class: "font-semibold hover:underline",
                      },
                      " Sign up "
                    ),
                  ]),
                  p("div", null, [E(Xi)]),
                ]),
              ]),
            ]),
          ]),
          Wk,
        ])
      );
    },
  }),
  Hk = {
    class: "w-screen h-screen flex flex-col bg-surface dark:bg-surface-dark",
  },
  zk = { class: "h-screen pt-11 flex" },
  Jk = { class: "h-full w-full overflow-y-auto" },
  Gk = { key: 0, class: "w-full flex flex-col" },
  qk = { class: "mt-24" },
  Vk = {
    class:
      "flex text-2xl font-medium gap-2 py-2 text-primary dark:text-primary-dark",
  },
  Yk = Q(" Preview "),
  Xk = { key: 0, class: "h-full sm:flex bg-surface dark:bg-surface-dark" },
  Qd = he({
    setup(a) {
      const r = Se(),
        t = yt(),
        s = W(""),
        o = W(""),
        l = Ne(
          () => r.dashboards.find((N) => N.id === t.params.dashboardId) || null
        ),
        d = Ne(() =>
          l.value
            ? t.fullPath.includes("/json")
              ? l.value.pages.length === 0
                ? {}
                : l.value.pages.find((N) => N.id === o.value) ||
                  l.value.pages[0]
              : l.value.pages.length === 0
              ? {}
              : l.value.pages.find((N) => N.id === t.params.pageId) ||
                l.value.pages[0]
            : {}
        );
      window.addEventListener("resize", () => {
        m.value = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
      }),
        $n(l, (N) => {
          r.previewDashboard = N;
        }),
        $n(d, () => {
          s.value = "";
        });
      const c = { "": Ec, view: ws, new: ws },
        m = W(
          Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          )
        ),
        v = 1200,
        f = W(0.55),
        b = Ne(() => (m.value * (1 - f.value) - 50) / v);
      function I(N) {
        f.value = N / m.value;
      }
      function U(N, F = "") {
        var X, K;
        if (t.fullPath.includes("/json")) {
          const ee =
            (X = l.value.pages.find((re) => re.page_id === N)) == null
              ? void 0
              : X.id;
          (o.value = ee), (s.value = F);
        } else {
          s.value = F;
          const ee =
            (K = l.value.pages.find((re) => re.page_id === N)) == null
              ? void 0
              : K.id;
          De.push(`/dashboards/${t.params.dashboardId}/pages/${ee}`);
        }
      }
      t.params.pathMatch &&
        (r.user && r.user.id
          ? r.dashboards.length === 0
            ? j()
            : De.push(`/dashboards/${r.dashboards[0].id}`)
          : De.push("/login"));
      function j() {
        const N = Ur(),
          F = {
            id: N,
            name: "My Dashboard",
            app_id: Math.random().toString(36).substring(2),
            supabase_url: "",
            supabase_anon_key: "",
            schema: null,
            pages: [],
          };
        r.dashboards.push(F), De.push(`/dashboards/${N}`);
      }
      return (N, F) => {
        const X = Tn("router-view");
        return (
          k(),
          A("div", Hk, [
            E(Ox),
            E(dx),
            p("div", zk, [
              E(
                fx,
                { onResized: I, initialWidth: "55%" },
                {
                  default: C(() => [
                    p("div", Jk, [
                      E(X, null, {
                        default: C(({ Component: K }) => [
                          E(
                            dr,
                            { mode: "out-in" },
                            {
                              default: C(() => [
                                (k(), pe(bs(K), { key: N.$route.fullPath })),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              $(l)
                ? (k(),
                  A("div", Gk, [
                    p("div", qk, [
                      p("h2", Vk, [
                        Yk,
                        E(
                          En,
                          {
                            to: `/preview/${$(t).params.dashboardId}/login`,
                            target: "_blank",
                          },
                          {
                            default: C(() => [E($(tb), { class: "w-5" })]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                      ]),
                      E(
                        bx,
                        {
                          url: `https://${
                            $(r).previewDashboard
                              ? $(r).previewDashboard.app_id + "."
                              : ""
                          }app.dashibase.com`,
                          scale: $(b),
                          initialWidth: v,
                          initialHeight: 780,
                        },
                        {
                          default: C(() => [
                            $(d).page_id
                              ? (k(),
                                A("div", Xk, [
                                  E(
                                    $c,
                                    {
                                      selected: $(d).page_id || "",
                                      onRouterPush: U,
                                    },
                                    null,
                                    8,
                                    ["selected"]
                                  ),
                                  E(kc, null, {
                                    default: C(() => [
                                      E(
                                        dr,
                                        { mode: "out-in" },
                                        {
                                          default: C(() => [
                                            (k(),
                                            pe(
                                              bs($(c)[s.value]),
                                              {
                                                page: $(d),
                                                onRouterPush:
                                                  F[0] ||
                                                  (F[0] = (K) =>
                                                    U($(d).page_id, K)),
                                                createMode: s.value === "new",
                                                itemId:
                                                  s.value === "view"
                                                    ? "00000000-0000-0000-0000-000000000000"
                                                    : "",
                                              },
                                              null,
                                              8,
                                              ["page", "createMode", "itemId"]
                                            )),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]))
                              : (k(),
                                pe(Sc, {
                                  key: 1,
                                  onRouterPush:
                                    F[1] ||
                                    (F[1] = (K) => U($(l).pages[0].page_id)),
                                })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["url", "scale"]
                      ),
                    ]),
                  ]))
                : be("", !0),
            ]),
            (k(), pe(Ax, { key: $(t).fullPath })),
          ])
        );
      };
    },
  });
var Hn = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (a, r) {
  (function () {
    var t,
      s = "4.17.21",
      o = 200,
      l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      d = "Expected a function",
      c = "Invalid `variable` option passed into `_.template`",
      m = "__lodash_hash_undefined__",
      v = 500,
      f = "__lodash_placeholder__",
      b = 1,
      I = 2,
      U = 4,
      j = 1,
      N = 2,
      F = 1,
      X = 2,
      K = 4,
      ee = 8,
      re = 16,
      ce = 32,
      G = 64,
      se = 128,
      D = 256,
      H = 512,
      We = 30,
      ie = "...",
      Oe = 800,
      ne = 16,
      T = 1,
      B = 2,
      te = 3,
      Re = 1 / 0,
      Te = 9007199254740991,
      Ae = 17976931348623157e292,
      tn = 0 / 0,
      nt = 4294967295,
      Vn = nt - 1,
      Xc = nt >>> 1,
      Kc = [
        ["ary", se],
        ["bind", F],
        ["bindKey", X],
        ["curry", ee],
        ["curryRight", re],
        ["flip", H],
        ["partial", ce],
        ["partialRight", G],
        ["rearg", D],
      ],
      cr = "[object Arguments]",
      Ds = "[object Array]",
      Qc = "[object AsyncFunction]",
      Fr = "[object Boolean]",
      Wr = "[object Date]",
      Zc = "[object DOMException]",
      Ps = "[object Error]",
      Rs = "[object Function]",
      hl = "[object GeneratorFunction]",
      Vt = "[object Map]",
      Hr = "[object Number]",
      eh = "[object Null]",
      fn = "[object Object]",
      fl = "[object Promise]",
      th = "[object Proxy]",
      zr = "[object RegExp]",
      Yt = "[object Set]",
      Jr = "[object String]",
      Ls = "[object Symbol]",
      nh = "[object Undefined]",
      Gr = "[object WeakMap]",
      rh = "[object WeakSet]",
      qr = "[object ArrayBuffer]",
      hr = "[object DataView]",
      Qi = "[object Float32Array]",
      Zi = "[object Float64Array]",
      ea = "[object Int8Array]",
      ta = "[object Int16Array]",
      na = "[object Int32Array]",
      ra = "[object Uint8Array]",
      sa = "[object Uint8ClampedArray]",
      ia = "[object Uint16Array]",
      aa = "[object Uint32Array]",
      sh = /\b__p \+= '';/g,
      ih = /\b(__p \+=) '' \+/g,
      ah = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      pl = /&(?:amp|lt|gt|quot|#39);/g,
      gl = /[&<>"']/g,
      oh = RegExp(pl.source),
      lh = RegExp(gl.source),
      uh = /<%-([\s\S]+?)%>/g,
      dh = /<%([\s\S]+?)%>/g,
      ml = /<%=([\s\S]+?)%>/g,
      ch = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      hh = /^\w*$/,
      fh =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oa = /[\\^$.*+?()[\]{}|]/g,
      ph = RegExp(oa.source),
      la = /^\s+/,
      gh = /\s/,
      mh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      vh = /\{\n\/\* \[wrapped with (.+)\] \*/,
      _h = /,? & /,
      bh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      yh = /[()=,{}\[\]\/\s]/,
      xh = /\\(\\)?/g,
      wh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      vl = /\w*$/,
      kh = /^[-+]0x[0-9a-f]+$/i,
      $h = /^0b[01]+$/i,
      Eh = /^\[object .+?Constructor\]$/,
      Sh = /^0o[0-7]+$/i,
      Th = /^(?:0|[1-9]\d*)$/,
      Oh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Ns = /($^)/,
      Ah = /['\n\r\u2028\u2029\\]/g,
      Ms = "\\ud800-\\udfff",
      Ih = "\\u0300-\\u036f",
      Ch = "\\ufe20-\\ufe2f",
      Dh = "\\u20d0-\\u20ff",
      _l = Ih + Ch + Dh,
      bl = "\\u2700-\\u27bf",
      yl = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Ph = "\\xac\\xb1\\xd7\\xf7",
      Rh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Lh = "\\u2000-\\u206f",
      Nh =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      xl = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      wl = "\\ufe0e\\ufe0f",
      kl = Ph + Rh + Lh + Nh,
      ua = "['\u2019]",
      Mh = "[" + Ms + "]",
      $l = "[" + kl + "]",
      Us = "[" + _l + "]",
      El = "\\d+",
      Uh = "[" + bl + "]",
      Sl = "[" + yl + "]",
      Tl = "[^" + Ms + kl + El + bl + yl + xl + "]",
      da = "\\ud83c[\\udffb-\\udfff]",
      Bh = "(?:" + Us + "|" + da + ")",
      Ol = "[^" + Ms + "]",
      ca = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ha = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      fr = "[" + xl + "]",
      Al = "\\u200d",
      Il = "(?:" + Sl + "|" + Tl + ")",
      jh = "(?:" + fr + "|" + Tl + ")",
      Cl = "(?:" + ua + "(?:d|ll|m|re|s|t|ve))?",
      Dl = "(?:" + ua + "(?:D|LL|M|RE|S|T|VE))?",
      Pl = Bh + "?",
      Rl = "[" + wl + "]?",
      Fh = "(?:" + Al + "(?:" + [Ol, ca, ha].join("|") + ")" + Rl + Pl + ")*",
      Wh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Hh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Ll = Rl + Pl + Fh,
      zh = "(?:" + [Uh, ca, ha].join("|") + ")" + Ll,
      Jh = "(?:" + [Ol + Us + "?", Us, ca, ha, Mh].join("|") + ")",
      Gh = RegExp(ua, "g"),
      qh = RegExp(Us, "g"),
      fa = RegExp(da + "(?=" + da + ")|" + Jh + Ll, "g"),
      Vh = RegExp(
        [
          fr + "?" + Sl + "+" + Cl + "(?=" + [$l, fr, "$"].join("|") + ")",
          jh + "+" + Dl + "(?=" + [$l, fr + Il, "$"].join("|") + ")",
          fr + "?" + Il + "+" + Cl,
          fr + "+" + Dl,
          Hh,
          Wh,
          El,
          zh,
        ].join("|"),
        "g"
      ),
      Yh = RegExp("[" + Al + Ms + _l + wl + "]"),
      Xh = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Kh = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      Qh = -1,
      Fe = {};
    (Fe[Qi] =
      Fe[Zi] =
      Fe[ea] =
      Fe[ta] =
      Fe[na] =
      Fe[ra] =
      Fe[sa] =
      Fe[ia] =
      Fe[aa] =
        !0),
      (Fe[cr] =
        Fe[Ds] =
        Fe[qr] =
        Fe[Fr] =
        Fe[hr] =
        Fe[Wr] =
        Fe[Ps] =
        Fe[Rs] =
        Fe[Vt] =
        Fe[Hr] =
        Fe[fn] =
        Fe[zr] =
        Fe[Yt] =
        Fe[Jr] =
        Fe[Gr] =
          !1);
    var Ue = {};
    (Ue[cr] =
      Ue[Ds] =
      Ue[qr] =
      Ue[hr] =
      Ue[Fr] =
      Ue[Wr] =
      Ue[Qi] =
      Ue[Zi] =
      Ue[ea] =
      Ue[ta] =
      Ue[na] =
      Ue[Vt] =
      Ue[Hr] =
      Ue[fn] =
      Ue[zr] =
      Ue[Yt] =
      Ue[Jr] =
      Ue[Ls] =
      Ue[ra] =
      Ue[sa] =
      Ue[ia] =
      Ue[aa] =
        !0),
      (Ue[Ps] = Ue[Rs] = Ue[Gr] = !1);
    var Zh = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      ef = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      tf = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      nf = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      rf = parseFloat,
      sf = parseInt,
      Nl = typeof Cr == "object" && Cr && Cr.Object === Object && Cr,
      af = typeof self == "object" && self && self.Object === Object && self,
      lt = Nl || af || Function("return this")(),
      pa = r && !r.nodeType && r,
      Yn = pa && !0 && a && !a.nodeType && a,
      Ml = Yn && Yn.exports === pa,
      ga = Ml && Nl.process,
      Ut = (function () {
        try {
          var w = Yn && Yn.require && Yn.require("util").types;
          return w || (ga && ga.binding && ga.binding("util"));
        } catch {}
      })(),
      Ul = Ut && Ut.isArrayBuffer,
      Bl = Ut && Ut.isDate,
      jl = Ut && Ut.isMap,
      Fl = Ut && Ut.isRegExp,
      Wl = Ut && Ut.isSet,
      Hl = Ut && Ut.isTypedArray;
    function Tt(w, P, O) {
      switch (O.length) {
        case 0:
          return w.call(P);
        case 1:
          return w.call(P, O[0]);
        case 2:
          return w.call(P, O[0], O[1]);
        case 3:
          return w.call(P, O[0], O[1], O[2]);
      }
      return w.apply(P, O);
    }
    function of(w, P, O, q) {
      for (var fe = -1, Ie = w == null ? 0 : w.length; ++fe < Ie; ) {
        var rt = w[fe];
        P(q, rt, O(rt), w);
      }
      return q;
    }
    function Bt(w, P) {
      for (
        var O = -1, q = w == null ? 0 : w.length;
        ++O < q && P(w[O], O, w) !== !1;

      );
      return w;
    }
    function lf(w, P) {
      for (var O = w == null ? 0 : w.length; O-- && P(w[O], O, w) !== !1; );
      return w;
    }
    function zl(w, P) {
      for (var O = -1, q = w == null ? 0 : w.length; ++O < q; )
        if (!P(w[O], O, w)) return !1;
      return !0;
    }
    function Cn(w, P) {
      for (
        var O = -1, q = w == null ? 0 : w.length, fe = 0, Ie = [];
        ++O < q;

      ) {
        var rt = w[O];
        P(rt, O, w) && (Ie[fe++] = rt);
      }
      return Ie;
    }
    function Bs(w, P) {
      var O = w == null ? 0 : w.length;
      return !!O && pr(w, P, 0) > -1;
    }
    function ma(w, P, O) {
      for (var q = -1, fe = w == null ? 0 : w.length; ++q < fe; )
        if (O(P, w[q])) return !0;
      return !1;
    }
    function He(w, P) {
      for (var O = -1, q = w == null ? 0 : w.length, fe = Array(q); ++O < q; )
        fe[O] = P(w[O], O, w);
      return fe;
    }
    function Dn(w, P) {
      for (var O = -1, q = P.length, fe = w.length; ++O < q; ) w[fe + O] = P[O];
      return w;
    }
    function va(w, P, O, q) {
      var fe = -1,
        Ie = w == null ? 0 : w.length;
      for (q && Ie && (O = w[++fe]); ++fe < Ie; ) O = P(O, w[fe], fe, w);
      return O;
    }
    function uf(w, P, O, q) {
      var fe = w == null ? 0 : w.length;
      for (q && fe && (O = w[--fe]); fe--; ) O = P(O, w[fe], fe, w);
      return O;
    }
    function _a(w, P) {
      for (var O = -1, q = w == null ? 0 : w.length; ++O < q; )
        if (P(w[O], O, w)) return !0;
      return !1;
    }
    var df = ba("length");
    function cf(w) {
      return w.split("");
    }
    function hf(w) {
      return w.match(bh) || [];
    }
    function Jl(w, P, O) {
      var q;
      return (
        O(w, function (fe, Ie, rt) {
          if (P(fe, Ie, rt)) return (q = Ie), !1;
        }),
        q
      );
    }
    function js(w, P, O, q) {
      for (var fe = w.length, Ie = O + (q ? 1 : -1); q ? Ie-- : ++Ie < fe; )
        if (P(w[Ie], Ie, w)) return Ie;
      return -1;
    }
    function pr(w, P, O) {
      return P === P ? $f(w, P, O) : js(w, Gl, O);
    }
    function ff(w, P, O, q) {
      for (var fe = O - 1, Ie = w.length; ++fe < Ie; )
        if (q(w[fe], P)) return fe;
      return -1;
    }
    function Gl(w) {
      return w !== w;
    }
    function ql(w, P) {
      var O = w == null ? 0 : w.length;
      return O ? xa(w, P) / O : tn;
    }
    function ba(w) {
      return function (P) {
        return P == null ? t : P[w];
      };
    }
    function ya(w) {
      return function (P) {
        return w == null ? t : w[P];
      };
    }
    function Vl(w, P, O, q, fe) {
      return (
        fe(w, function (Ie, rt, Me) {
          O = q ? ((q = !1), Ie) : P(O, Ie, rt, Me);
        }),
        O
      );
    }
    function pf(w, P) {
      var O = w.length;
      for (w.sort(P); O--; ) w[O] = w[O].value;
      return w;
    }
    function xa(w, P) {
      for (var O, q = -1, fe = w.length; ++q < fe; ) {
        var Ie = P(w[q]);
        Ie !== t && (O = O === t ? Ie : O + Ie);
      }
      return O;
    }
    function wa(w, P) {
      for (var O = -1, q = Array(w); ++O < w; ) q[O] = P(O);
      return q;
    }
    function gf(w, P) {
      return He(P, function (O) {
        return [O, w[O]];
      });
    }
    function Yl(w) {
      return w && w.slice(0, Zl(w) + 1).replace(la, "");
    }
    function Ot(w) {
      return function (P) {
        return w(P);
      };
    }
    function ka(w, P) {
      return He(P, function (O) {
        return w[O];
      });
    }
    function Vr(w, P) {
      return w.has(P);
    }
    function Xl(w, P) {
      for (var O = -1, q = w.length; ++O < q && pr(P, w[O], 0) > -1; );
      return O;
    }
    function Kl(w, P) {
      for (var O = w.length; O-- && pr(P, w[O], 0) > -1; );
      return O;
    }
    function mf(w, P) {
      for (var O = w.length, q = 0; O--; ) w[O] === P && ++q;
      return q;
    }
    var vf = ya(Zh),
      _f = ya(ef);
    function bf(w) {
      return "\\" + nf[w];
    }
    function yf(w, P) {
      return w == null ? t : w[P];
    }
    function gr(w) {
      return Yh.test(w);
    }
    function xf(w) {
      return Xh.test(w);
    }
    function wf(w) {
      for (var P, O = []; !(P = w.next()).done; ) O.push(P.value);
      return O;
    }
    function $a(w) {
      var P = -1,
        O = Array(w.size);
      return (
        w.forEach(function (q, fe) {
          O[++P] = [fe, q];
        }),
        O
      );
    }
    function Ql(w, P) {
      return function (O) {
        return w(P(O));
      };
    }
    function Pn(w, P) {
      for (var O = -1, q = w.length, fe = 0, Ie = []; ++O < q; ) {
        var rt = w[O];
        (rt === P || rt === f) && ((w[O] = f), (Ie[fe++] = O));
      }
      return Ie;
    }
    function Fs(w) {
      var P = -1,
        O = Array(w.size);
      return (
        w.forEach(function (q) {
          O[++P] = q;
        }),
        O
      );
    }
    function kf(w) {
      var P = -1,
        O = Array(w.size);
      return (
        w.forEach(function (q) {
          O[++P] = [q, q];
        }),
        O
      );
    }
    function $f(w, P, O) {
      for (var q = O - 1, fe = w.length; ++q < fe; ) if (w[q] === P) return q;
      return -1;
    }
    function Ef(w, P, O) {
      for (var q = O + 1; q--; ) if (w[q] === P) return q;
      return q;
    }
    function mr(w) {
      return gr(w) ? Tf(w) : df(w);
    }
    function Xt(w) {
      return gr(w) ? Of(w) : cf(w);
    }
    function Zl(w) {
      for (var P = w.length; P-- && gh.test(w.charAt(P)); );
      return P;
    }
    var Sf = ya(tf);
    function Tf(w) {
      for (var P = (fa.lastIndex = 0); fa.test(w); ) ++P;
      return P;
    }
    function Of(w) {
      return w.match(fa) || [];
    }
    function Af(w) {
      return w.match(Vh) || [];
    }
    var If = function w(P) {
        P = P == null ? lt : vr.defaults(lt.Object(), P, vr.pick(lt, Kh));
        var O = P.Array,
          q = P.Date,
          fe = P.Error,
          Ie = P.Function,
          rt = P.Math,
          Me = P.Object,
          Ea = P.RegExp,
          Cf = P.String,
          jt = P.TypeError,
          Ws = O.prototype,
          Df = Ie.prototype,
          _r = Me.prototype,
          Hs = P["__core-js_shared__"],
          zs = Df.toString,
          Le = _r.hasOwnProperty,
          Pf = 0,
          eu = (function () {
            var e = /[^.]+$/.exec((Hs && Hs.keys && Hs.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          Js = _r.toString,
          Rf = zs.call(Me),
          Lf = lt._,
          Nf = Ea(
            "^" +
              zs
                .call(Le)
                .replace(oa, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Gs = Ml ? P.Buffer : t,
          Rn = P.Symbol,
          qs = P.Uint8Array,
          tu = Gs ? Gs.allocUnsafe : t,
          Vs = Ql(Me.getPrototypeOf, Me),
          nu = Me.create,
          ru = _r.propertyIsEnumerable,
          Ys = Ws.splice,
          su = Rn ? Rn.isConcatSpreadable : t,
          Yr = Rn ? Rn.iterator : t,
          Xn = Rn ? Rn.toStringTag : t,
          Xs = (function () {
            try {
              var e = tr(Me, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          Mf = P.clearTimeout !== lt.clearTimeout && P.clearTimeout,
          Uf = q && q.now !== lt.Date.now && q.now,
          Bf = P.setTimeout !== lt.setTimeout && P.setTimeout,
          Ks = rt.ceil,
          Qs = rt.floor,
          Sa = Me.getOwnPropertySymbols,
          jf = Gs ? Gs.isBuffer : t,
          iu = P.isFinite,
          Ff = Ws.join,
          Wf = Ql(Me.keys, Me),
          st = rt.max,
          ht = rt.min,
          Hf = q.now,
          zf = P.parseInt,
          au = rt.random,
          Jf = Ws.reverse,
          Ta = tr(P, "DataView"),
          Xr = tr(P, "Map"),
          Oa = tr(P, "Promise"),
          br = tr(P, "Set"),
          Kr = tr(P, "WeakMap"),
          Qr = tr(Me, "create"),
          Zs = Kr && new Kr(),
          yr = {},
          Gf = nr(Ta),
          qf = nr(Xr),
          Vf = nr(Oa),
          Yf = nr(br),
          Xf = nr(Kr),
          ei = Rn ? Rn.prototype : t,
          Zr = ei ? ei.valueOf : t,
          ou = ei ? ei.toString : t;
        function g(e) {
          if (Ve(e) && !ge(e) && !(e instanceof we)) {
            if (e instanceof Ft) return e;
            if (Le.call(e, "__wrapped__")) return ld(e);
          }
          return new Ft(e);
        }
        var xr = (function () {
          function e() {}
          return function (n) {
            if (!Je(n)) return {};
            if (nu) return nu(n);
            e.prototype = n;
            var i = new e();
            return (e.prototype = t), i;
          };
        })();
        function ti() {}
        function Ft(e, n) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (g.templateSettings = {
          escape: uh,
          evaluate: dh,
          interpolate: ml,
          variable: "",
          imports: { _: g },
        }),
          (g.prototype = ti.prototype),
          (g.prototype.constructor = g),
          (Ft.prototype = xr(ti.prototype)),
          (Ft.prototype.constructor = Ft);
        function we(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = nt),
            (this.__views__ = []);
        }
        function Kf() {
          var e = new we(this.__wrapped__);
          return (
            (e.__actions__ = xt(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = xt(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = xt(this.__views__)),
            e
          );
        }
        function Qf() {
          if (this.__filtered__) {
            var e = new we(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function Zf() {
          var e = this.__wrapped__.value(),
            n = this.__dir__,
            i = ge(e),
            u = n < 0,
            h = i ? e.length : 0,
            _ = cg(0, h, this.__views__),
            y = _.start,
            x = _.end,
            S = x - y,
            R = u ? x : y - 1,
            L = this.__iteratees__,
            M = L.length,
            J = 0,
            V = ht(S, this.__takeCount__);
          if (!i || (!u && h == S && V == S)) return Cu(e, this.__actions__);
          var oe = [];
          e: for (; S-- && J < V; ) {
            R += n;
            for (var _e = -1, le = e[R]; ++_e < M; ) {
              var xe = L[_e],
                ke = xe.iteratee,
                Ct = xe.type,
                vt = ke(le);
              if (Ct == B) le = vt;
              else if (!vt) {
                if (Ct == T) continue e;
                break e;
              }
            }
            oe[J++] = le;
          }
          return oe;
        }
        (we.prototype = xr(ti.prototype)), (we.prototype.constructor = we);
        function Kn(e) {
          var n = -1,
            i = e == null ? 0 : e.length;
          for (this.clear(); ++n < i; ) {
            var u = e[n];
            this.set(u[0], u[1]);
          }
        }
        function ep() {
          (this.__data__ = Qr ? Qr(null) : {}), (this.size = 0);
        }
        function tp(e) {
          var n = this.has(e) && delete this.__data__[e];
          return (this.size -= n ? 1 : 0), n;
        }
        function np(e) {
          var n = this.__data__;
          if (Qr) {
            var i = n[e];
            return i === m ? t : i;
          }
          return Le.call(n, e) ? n[e] : t;
        }
        function rp(e) {
          var n = this.__data__;
          return Qr ? n[e] !== t : Le.call(n, e);
        }
        function sp(e, n) {
          var i = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (i[e] = Qr && n === t ? m : n),
            this
          );
        }
        (Kn.prototype.clear = ep),
          (Kn.prototype.delete = tp),
          (Kn.prototype.get = np),
          (Kn.prototype.has = rp),
          (Kn.prototype.set = sp);
        function pn(e) {
          var n = -1,
            i = e == null ? 0 : e.length;
          for (this.clear(); ++n < i; ) {
            var u = e[n];
            this.set(u[0], u[1]);
          }
        }
        function ip() {
          (this.__data__ = []), (this.size = 0);
        }
        function ap(e) {
          var n = this.__data__,
            i = ni(n, e);
          if (i < 0) return !1;
          var u = n.length - 1;
          return i == u ? n.pop() : Ys.call(n, i, 1), --this.size, !0;
        }
        function op(e) {
          var n = this.__data__,
            i = ni(n, e);
          return i < 0 ? t : n[i][1];
        }
        function lp(e) {
          return ni(this.__data__, e) > -1;
        }
        function up(e, n) {
          var i = this.__data__,
            u = ni(i, e);
          return u < 0 ? (++this.size, i.push([e, n])) : (i[u][1] = n), this;
        }
        (pn.prototype.clear = ip),
          (pn.prototype.delete = ap),
          (pn.prototype.get = op),
          (pn.prototype.has = lp),
          (pn.prototype.set = up);
        function gn(e) {
          var n = -1,
            i = e == null ? 0 : e.length;
          for (this.clear(); ++n < i; ) {
            var u = e[n];
            this.set(u[0], u[1]);
          }
        }
        function dp() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Kn(),
              map: new (Xr || pn)(),
              string: new Kn(),
            });
        }
        function cp(e) {
          var n = pi(this, e).delete(e);
          return (this.size -= n ? 1 : 0), n;
        }
        function hp(e) {
          return pi(this, e).get(e);
        }
        function fp(e) {
          return pi(this, e).has(e);
        }
        function pp(e, n) {
          var i = pi(this, e),
            u = i.size;
          return i.set(e, n), (this.size += i.size == u ? 0 : 1), this;
        }
        (gn.prototype.clear = dp),
          (gn.prototype.delete = cp),
          (gn.prototype.get = hp),
          (gn.prototype.has = fp),
          (gn.prototype.set = pp);
        function Qn(e) {
          var n = -1,
            i = e == null ? 0 : e.length;
          for (this.__data__ = new gn(); ++n < i; ) this.add(e[n]);
        }
        function gp(e) {
          return this.__data__.set(e, m), this;
        }
        function mp(e) {
          return this.__data__.has(e);
        }
        (Qn.prototype.add = Qn.prototype.push = gp), (Qn.prototype.has = mp);
        function Kt(e) {
          var n = (this.__data__ = new pn(e));
          this.size = n.size;
        }
        function vp() {
          (this.__data__ = new pn()), (this.size = 0);
        }
        function _p(e) {
          var n = this.__data__,
            i = n.delete(e);
          return (this.size = n.size), i;
        }
        function bp(e) {
          return this.__data__.get(e);
        }
        function yp(e) {
          return this.__data__.has(e);
        }
        function xp(e, n) {
          var i = this.__data__;
          if (i instanceof pn) {
            var u = i.__data__;
            if (!Xr || u.length < o - 1)
              return u.push([e, n]), (this.size = ++i.size), this;
            i = this.__data__ = new gn(u);
          }
          return i.set(e, n), (this.size = i.size), this;
        }
        (Kt.prototype.clear = vp),
          (Kt.prototype.delete = _p),
          (Kt.prototype.get = bp),
          (Kt.prototype.has = yp),
          (Kt.prototype.set = xp);
        function lu(e, n) {
          var i = ge(e),
            u = !i && rr(e),
            h = !i && !u && Bn(e),
            _ = !i && !u && !h && Er(e),
            y = i || u || h || _,
            x = y ? wa(e.length, Cf) : [],
            S = x.length;
          for (var R in e)
            (n || Le.call(e, R)) &&
              !(
                y &&
                (R == "length" ||
                  (h && (R == "offset" || R == "parent")) ||
                  (_ &&
                    (R == "buffer" ||
                      R == "byteLength" ||
                      R == "byteOffset")) ||
                  bn(R, S))
              ) &&
              x.push(R);
          return x;
        }
        function uu(e) {
          var n = e.length;
          return n ? e[Ba(0, n - 1)] : t;
        }
        function wp(e, n) {
          return gi(xt(e), Zn(n, 0, e.length));
        }
        function kp(e) {
          return gi(xt(e));
        }
        function Aa(e, n, i) {
          ((i !== t && !Qt(e[n], i)) || (i === t && !(n in e))) && mn(e, n, i);
        }
        function es(e, n, i) {
          var u = e[n];
          (!(Le.call(e, n) && Qt(u, i)) || (i === t && !(n in e))) &&
            mn(e, n, i);
        }
        function ni(e, n) {
          for (var i = e.length; i--; ) if (Qt(e[i][0], n)) return i;
          return -1;
        }
        function $p(e, n, i, u) {
          return (
            Ln(e, function (h, _, y) {
              n(u, h, i(h), y);
            }),
            u
          );
        }
        function du(e, n) {
          return e && rn(n, at(n), e);
        }
        function Ep(e, n) {
          return e && rn(n, kt(n), e);
        }
        function mn(e, n, i) {
          n == "__proto__" && Xs
            ? Xs(e, n, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (e[n] = i);
        }
        function Ia(e, n) {
          for (var i = -1, u = n.length, h = O(u), _ = e == null; ++i < u; )
            h[i] = _ ? t : co(e, n[i]);
          return h;
        }
        function Zn(e, n, i) {
          return (
            e === e &&
              (i !== t && (e = e <= i ? e : i),
              n !== t && (e = e >= n ? e : n)),
            e
          );
        }
        function Wt(e, n, i, u, h, _) {
          var y,
            x = n & b,
            S = n & I,
            R = n & U;
          if ((i && (y = h ? i(e, u, h, _) : i(e)), y !== t)) return y;
          if (!Je(e)) return e;
          var L = ge(e);
          if (L) {
            if (((y = fg(e)), !x)) return xt(e, y);
          } else {
            var M = ft(e),
              J = M == Rs || M == hl;
            if (Bn(e)) return Ru(e, x);
            if (M == fn || M == cr || (J && !h)) {
              if (((y = S || J ? {} : Zu(e)), !x))
                return S ? ng(e, Ep(y, e)) : tg(e, du(y, e));
            } else {
              if (!Ue[M]) return h ? e : {};
              y = pg(e, M, x);
            }
          }
          _ || (_ = new Kt());
          var V = _.get(e);
          if (V) return V;
          _.set(e, y),
            Od(e)
              ? e.forEach(function (le) {
                  y.add(Wt(le, n, i, le, e, _));
                })
              : Sd(e) &&
                e.forEach(function (le, xe) {
                  y.set(xe, Wt(le, n, i, xe, e, _));
                });
          var oe = R ? (S ? Xa : Ya) : S ? kt : at,
            _e = L ? t : oe(e);
          return (
            Bt(_e || e, function (le, xe) {
              _e && ((xe = le), (le = e[xe])),
                es(y, xe, Wt(le, n, i, xe, e, _));
            }),
            y
          );
        }
        function Sp(e) {
          var n = at(e);
          return function (i) {
            return cu(i, e, n);
          };
        }
        function cu(e, n, i) {
          var u = i.length;
          if (e == null) return !u;
          for (e = Me(e); u--; ) {
            var h = i[u],
              _ = n[h],
              y = e[h];
            if ((y === t && !(h in e)) || !_(y)) return !1;
          }
          return !0;
        }
        function hu(e, n, i) {
          if (typeof e != "function") throw new jt(d);
          return os(function () {
            e.apply(t, i);
          }, n);
        }
        function ts(e, n, i, u) {
          var h = -1,
            _ = Bs,
            y = !0,
            x = e.length,
            S = [],
            R = n.length;
          if (!x) return S;
          i && (n = He(n, Ot(i))),
            u
              ? ((_ = ma), (y = !1))
              : n.length >= o && ((_ = Vr), (y = !1), (n = new Qn(n)));
          e: for (; ++h < x; ) {
            var L = e[h],
              M = i == null ? L : i(L);
            if (((L = u || L !== 0 ? L : 0), y && M === M)) {
              for (var J = R; J--; ) if (n[J] === M) continue e;
              S.push(L);
            } else _(n, M, u) || S.push(L);
          }
          return S;
        }
        var Ln = Bu(nn),
          fu = Bu(Da, !0);
        function Tp(e, n) {
          var i = !0;
          return (
            Ln(e, function (u, h, _) {
              return (i = !!n(u, h, _)), i;
            }),
            i
          );
        }
        function ri(e, n, i) {
          for (var u = -1, h = e.length; ++u < h; ) {
            var _ = e[u],
              y = n(_);
            if (y != null && (x === t ? y === y && !It(y) : i(y, x)))
              var x = y,
                S = _;
          }
          return S;
        }
        function Op(e, n, i, u) {
          var h = e.length;
          for (
            i = ve(i),
              i < 0 && (i = -i > h ? 0 : h + i),
              u = u === t || u > h ? h : ve(u),
              u < 0 && (u += h),
              u = i > u ? 0 : Id(u);
            i < u;

          )
            e[i++] = n;
          return e;
        }
        function pu(e, n) {
          var i = [];
          return (
            Ln(e, function (u, h, _) {
              n(u, h, _) && i.push(u);
            }),
            i
          );
        }
        function ut(e, n, i, u, h) {
          var _ = -1,
            y = e.length;
          for (i || (i = mg), h || (h = []); ++_ < y; ) {
            var x = e[_];
            n > 0 && i(x)
              ? n > 1
                ? ut(x, n - 1, i, u, h)
                : Dn(h, x)
              : u || (h[h.length] = x);
          }
          return h;
        }
        var Ca = ju(),
          gu = ju(!0);
        function nn(e, n) {
          return e && Ca(e, n, at);
        }
        function Da(e, n) {
          return e && gu(e, n, at);
        }
        function si(e, n) {
          return Cn(n, function (i) {
            return yn(e[i]);
          });
        }
        function er(e, n) {
          n = Mn(n, e);
          for (var i = 0, u = n.length; e != null && i < u; ) e = e[sn(n[i++])];
          return i && i == u ? e : t;
        }
        function mu(e, n, i) {
          var u = n(e);
          return ge(e) ? u : Dn(u, i(e));
        }
        function gt(e) {
          return e == null
            ? e === t
              ? nh
              : eh
            : Xn && Xn in Me(e)
            ? dg(e)
            : kg(e);
        }
        function Pa(e, n) {
          return e > n;
        }
        function Ap(e, n) {
          return e != null && Le.call(e, n);
        }
        function Ip(e, n) {
          return e != null && n in Me(e);
        }
        function Cp(e, n, i) {
          return e >= ht(n, i) && e < st(n, i);
        }
        function Ra(e, n, i) {
          for (
            var u = i ? ma : Bs,
              h = e[0].length,
              _ = e.length,
              y = _,
              x = O(_),
              S = 1 / 0,
              R = [];
            y--;

          ) {
            var L = e[y];
            y && n && (L = He(L, Ot(n))),
              (S = ht(L.length, S)),
              (x[y] =
                !i && (n || (h >= 120 && L.length >= 120))
                  ? new Qn(y && L)
                  : t);
          }
          L = e[0];
          var M = -1,
            J = x[0];
          e: for (; ++M < h && R.length < S; ) {
            var V = L[M],
              oe = n ? n(V) : V;
            if (((V = i || V !== 0 ? V : 0), !(J ? Vr(J, oe) : u(R, oe, i)))) {
              for (y = _; --y; ) {
                var _e = x[y];
                if (!(_e ? Vr(_e, oe) : u(e[y], oe, i))) continue e;
              }
              J && J.push(oe), R.push(V);
            }
          }
          return R;
        }
        function Dp(e, n, i, u) {
          return (
            nn(e, function (h, _, y) {
              n(u, i(h), _, y);
            }),
            u
          );
        }
        function ns(e, n, i) {
          (n = Mn(n, e)), (e = rd(e, n));
          var u = e == null ? e : e[sn(zt(n))];
          return u == null ? t : Tt(u, e, i);
        }
        function vu(e) {
          return Ve(e) && gt(e) == cr;
        }
        function Pp(e) {
          return Ve(e) && gt(e) == qr;
        }
        function Rp(e) {
          return Ve(e) && gt(e) == Wr;
        }
        function rs(e, n, i, u, h) {
          return e === n
            ? !0
            : e == null || n == null || (!Ve(e) && !Ve(n))
            ? e !== e && n !== n
            : Lp(e, n, i, u, rs, h);
        }
        function Lp(e, n, i, u, h, _) {
          var y = ge(e),
            x = ge(n),
            S = y ? Ds : ft(e),
            R = x ? Ds : ft(n);
          (S = S == cr ? fn : S), (R = R == cr ? fn : R);
          var L = S == fn,
            M = R == fn,
            J = S == R;
          if (J && Bn(e)) {
            if (!Bn(n)) return !1;
            (y = !0), (L = !1);
          }
          if (J && !L)
            return (
              _ || (_ = new Kt()),
              y || Er(e) ? Xu(e, n, i, u, h, _) : lg(e, n, S, i, u, h, _)
            );
          if (!(i & j)) {
            var V = L && Le.call(e, "__wrapped__"),
              oe = M && Le.call(n, "__wrapped__");
            if (V || oe) {
              var _e = V ? e.value() : e,
                le = oe ? n.value() : n;
              return _ || (_ = new Kt()), h(_e, le, i, u, _);
            }
          }
          return J ? (_ || (_ = new Kt()), ug(e, n, i, u, h, _)) : !1;
        }
        function Np(e) {
          return Ve(e) && ft(e) == Vt;
        }
        function La(e, n, i, u) {
          var h = i.length,
            _ = h,
            y = !u;
          if (e == null) return !_;
          for (e = Me(e); h--; ) {
            var x = i[h];
            if (y && x[2] ? x[1] !== e[x[0]] : !(x[0] in e)) return !1;
          }
          for (; ++h < _; ) {
            x = i[h];
            var S = x[0],
              R = e[S],
              L = x[1];
            if (y && x[2]) {
              if (R === t && !(S in e)) return !1;
            } else {
              var M = new Kt();
              if (u) var J = u(R, L, S, e, n, M);
              if (!(J === t ? rs(L, R, j | N, u, M) : J)) return !1;
            }
          }
          return !0;
        }
        function _u(e) {
          if (!Je(e) || _g(e)) return !1;
          var n = yn(e) ? Nf : Eh;
          return n.test(nr(e));
        }
        function Mp(e) {
          return Ve(e) && gt(e) == zr;
        }
        function Up(e) {
          return Ve(e) && ft(e) == Yt;
        }
        function Bp(e) {
          return Ve(e) && xi(e.length) && !!Fe[gt(e)];
        }
        function bu(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? $t
            : typeof e == "object"
            ? ge(e)
              ? wu(e[0], e[1])
              : xu(e)
            : Fd(e);
        }
        function Na(e) {
          if (!as(e)) return Wf(e);
          var n = [];
          for (var i in Me(e)) Le.call(e, i) && i != "constructor" && n.push(i);
          return n;
        }
        function jp(e) {
          if (!Je(e)) return wg(e);
          var n = as(e),
            i = [];
          for (var u in e)
            (u == "constructor" && (n || !Le.call(e, u))) || i.push(u);
          return i;
        }
        function Ma(e, n) {
          return e < n;
        }
        function yu(e, n) {
          var i = -1,
            u = wt(e) ? O(e.length) : [];
          return (
            Ln(e, function (h, _, y) {
              u[++i] = n(h, _, y);
            }),
            u
          );
        }
        function xu(e) {
          var n = Qa(e);
          return n.length == 1 && n[0][2]
            ? td(n[0][0], n[0][1])
            : function (i) {
                return i === e || La(i, e, n);
              };
        }
        function wu(e, n) {
          return eo(e) && ed(n)
            ? td(sn(e), n)
            : function (i) {
                var u = co(i, e);
                return u === t && u === n ? ho(i, e) : rs(n, u, j | N);
              };
        }
        function ii(e, n, i, u, h) {
          e !== n &&
            Ca(
              n,
              function (_, y) {
                if ((h || (h = new Kt()), Je(_))) Fp(e, n, y, i, ii, u, h);
                else {
                  var x = u ? u(no(e, y), _, y + "", e, n, h) : t;
                  x === t && (x = _), Aa(e, y, x);
                }
              },
              kt
            );
        }
        function Fp(e, n, i, u, h, _, y) {
          var x = no(e, i),
            S = no(n, i),
            R = y.get(S);
          if (R) {
            Aa(e, i, R);
            return;
          }
          var L = _ ? _(x, S, i + "", e, n, y) : t,
            M = L === t;
          if (M) {
            var J = ge(S),
              V = !J && Bn(S),
              oe = !J && !V && Er(S);
            (L = S),
              J || V || oe
                ? ge(x)
                  ? (L = x)
                  : Qe(x)
                  ? (L = xt(x))
                  : V
                  ? ((M = !1), (L = Ru(S, !0)))
                  : oe
                  ? ((M = !1), (L = Lu(S, !0)))
                  : (L = [])
                : ls(S) || rr(S)
                ? ((L = x),
                  rr(x) ? (L = Cd(x)) : (!Je(x) || yn(x)) && (L = Zu(S)))
                : (M = !1);
          }
          M && (y.set(S, L), h(L, S, u, _, y), y.delete(S)), Aa(e, i, L);
        }
        function ku(e, n) {
          var i = e.length;
          if (!!i) return (n += n < 0 ? i : 0), bn(n, i) ? e[n] : t;
        }
        function $u(e, n, i) {
          n.length
            ? (n = He(n, function (_) {
                return ge(_)
                  ? function (y) {
                      return er(y, _.length === 1 ? _[0] : _);
                    }
                  : _;
              }))
            : (n = [$t]);
          var u = -1;
          n = He(n, Ot(ae()));
          var h = yu(e, function (_, y, x) {
            var S = He(n, function (R) {
              return R(_);
            });
            return { criteria: S, index: ++u, value: _ };
          });
          return pf(h, function (_, y) {
            return eg(_, y, i);
          });
        }
        function Wp(e, n) {
          return Eu(e, n, function (i, u) {
            return ho(e, u);
          });
        }
        function Eu(e, n, i) {
          for (var u = -1, h = n.length, _ = {}; ++u < h; ) {
            var y = n[u],
              x = er(e, y);
            i(x, y) && ss(_, Mn(y, e), x);
          }
          return _;
        }
        function Hp(e) {
          return function (n) {
            return er(n, e);
          };
        }
        function Ua(e, n, i, u) {
          var h = u ? ff : pr,
            _ = -1,
            y = n.length,
            x = e;
          for (e === n && (n = xt(n)), i && (x = He(e, Ot(i))); ++_ < y; )
            for (
              var S = 0, R = n[_], L = i ? i(R) : R;
              (S = h(x, L, S, u)) > -1;

            )
              x !== e && Ys.call(x, S, 1), Ys.call(e, S, 1);
          return e;
        }
        function Su(e, n) {
          for (var i = e ? n.length : 0, u = i - 1; i--; ) {
            var h = n[i];
            if (i == u || h !== _) {
              var _ = h;
              bn(h) ? Ys.call(e, h, 1) : Wa(e, h);
            }
          }
          return e;
        }
        function Ba(e, n) {
          return e + Qs(au() * (n - e + 1));
        }
        function zp(e, n, i, u) {
          for (var h = -1, _ = st(Ks((n - e) / (i || 1)), 0), y = O(_); _--; )
            (y[u ? _ : ++h] = e), (e += i);
          return y;
        }
        function ja(e, n) {
          var i = "";
          if (!e || n < 1 || n > Te) return i;
          do n % 2 && (i += e), (n = Qs(n / 2)), n && (e += e);
          while (n);
          return i;
        }
        function ye(e, n) {
          return ro(nd(e, n, $t), e + "");
        }
        function Jp(e) {
          return uu(Sr(e));
        }
        function Gp(e, n) {
          var i = Sr(e);
          return gi(i, Zn(n, 0, i.length));
        }
        function ss(e, n, i, u) {
          if (!Je(e)) return e;
          n = Mn(n, e);
          for (
            var h = -1, _ = n.length, y = _ - 1, x = e;
            x != null && ++h < _;

          ) {
            var S = sn(n[h]),
              R = i;
            if (S === "__proto__" || S === "constructor" || S === "prototype")
              return e;
            if (h != y) {
              var L = x[S];
              (R = u ? u(L, S, x) : t),
                R === t && (R = Je(L) ? L : bn(n[h + 1]) ? [] : {});
            }
            es(x, S, R), (x = x[S]);
          }
          return e;
        }
        var Tu = Zs
            ? function (e, n) {
                return Zs.set(e, n), e;
              }
            : $t,
          qp = Xs
            ? function (e, n) {
                return Xs(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: po(n),
                  writable: !0,
                });
              }
            : $t;
        function Vp(e) {
          return gi(Sr(e));
        }
        function Ht(e, n, i) {
          var u = -1,
            h = e.length;
          n < 0 && (n = -n > h ? 0 : h + n),
            (i = i > h ? h : i),
            i < 0 && (i += h),
            (h = n > i ? 0 : (i - n) >>> 0),
            (n >>>= 0);
          for (var _ = O(h); ++u < h; ) _[u] = e[u + n];
          return _;
        }
        function Yp(e, n) {
          var i;
          return (
            Ln(e, function (u, h, _) {
              return (i = n(u, h, _)), !i;
            }),
            !!i
          );
        }
        function ai(e, n, i) {
          var u = 0,
            h = e == null ? u : e.length;
          if (typeof n == "number" && n === n && h <= Xc) {
            for (; u < h; ) {
              var _ = (u + h) >>> 1,
                y = e[_];
              y !== null && !It(y) && (i ? y <= n : y < n)
                ? (u = _ + 1)
                : (h = _);
            }
            return h;
          }
          return Fa(e, n, $t, i);
        }
        function Fa(e, n, i, u) {
          var h = 0,
            _ = e == null ? 0 : e.length;
          if (_ === 0) return 0;
          n = i(n);
          for (
            var y = n !== n, x = n === null, S = It(n), R = n === t;
            h < _;

          ) {
            var L = Qs((h + _) / 2),
              M = i(e[L]),
              J = M !== t,
              V = M === null,
              oe = M === M,
              _e = It(M);
            if (y) var le = u || oe;
            else
              R
                ? (le = oe && (u || J))
                : x
                ? (le = oe && J && (u || !V))
                : S
                ? (le = oe && J && !V && (u || !_e))
                : V || _e
                ? (le = !1)
                : (le = u ? M <= n : M < n);
            le ? (h = L + 1) : (_ = L);
          }
          return ht(_, Vn);
        }
        function Ou(e, n) {
          for (var i = -1, u = e.length, h = 0, _ = []; ++i < u; ) {
            var y = e[i],
              x = n ? n(y) : y;
            if (!i || !Qt(x, S)) {
              var S = x;
              _[h++] = y === 0 ? 0 : y;
            }
          }
          return _;
        }
        function Au(e) {
          return typeof e == "number" ? e : It(e) ? tn : +e;
        }
        function At(e) {
          if (typeof e == "string") return e;
          if (ge(e)) return He(e, At) + "";
          if (It(e)) return ou ? ou.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -Re ? "-0" : n;
        }
        function Nn(e, n, i) {
          var u = -1,
            h = Bs,
            _ = e.length,
            y = !0,
            x = [],
            S = x;
          if (i) (y = !1), (h = ma);
          else if (_ >= o) {
            var R = n ? null : ag(e);
            if (R) return Fs(R);
            (y = !1), (h = Vr), (S = new Qn());
          } else S = n ? [] : x;
          e: for (; ++u < _; ) {
            var L = e[u],
              M = n ? n(L) : L;
            if (((L = i || L !== 0 ? L : 0), y && M === M)) {
              for (var J = S.length; J--; ) if (S[J] === M) continue e;
              n && S.push(M), x.push(L);
            } else h(S, M, i) || (S !== x && S.push(M), x.push(L));
          }
          return x;
        }
        function Wa(e, n) {
          return (
            (n = Mn(n, e)), (e = rd(e, n)), e == null || delete e[sn(zt(n))]
          );
        }
        function Iu(e, n, i, u) {
          return ss(e, n, i(er(e, n)), u);
        }
        function oi(e, n, i, u) {
          for (
            var h = e.length, _ = u ? h : -1;
            (u ? _-- : ++_ < h) && n(e[_], _, e);

          );
          return i
            ? Ht(e, u ? 0 : _, u ? _ + 1 : h)
            : Ht(e, u ? _ + 1 : 0, u ? h : _);
        }
        function Cu(e, n) {
          var i = e;
          return (
            i instanceof we && (i = i.value()),
            va(
              n,
              function (u, h) {
                return h.func.apply(h.thisArg, Dn([u], h.args));
              },
              i
            )
          );
        }
        function Ha(e, n, i) {
          var u = e.length;
          if (u < 2) return u ? Nn(e[0]) : [];
          for (var h = -1, _ = O(u); ++h < u; )
            for (var y = e[h], x = -1; ++x < u; )
              x != h && (_[h] = ts(_[h] || y, e[x], n, i));
          return Nn(ut(_, 1), n, i);
        }
        function Du(e, n, i) {
          for (var u = -1, h = e.length, _ = n.length, y = {}; ++u < h; ) {
            var x = u < _ ? n[u] : t;
            i(y, e[u], x);
          }
          return y;
        }
        function za(e) {
          return Qe(e) ? e : [];
        }
        function Ja(e) {
          return typeof e == "function" ? e : $t;
        }
        function Mn(e, n) {
          return ge(e) ? e : eo(e, n) ? [e] : od(Pe(e));
        }
        var Xp = ye;
        function Un(e, n, i) {
          var u = e.length;
          return (i = i === t ? u : i), !n && i >= u ? e : Ht(e, n, i);
        }
        var Pu =
          Mf ||
          function (e) {
            return lt.clearTimeout(e);
          };
        function Ru(e, n) {
          if (n) return e.slice();
          var i = e.length,
            u = tu ? tu(i) : new e.constructor(i);
          return e.copy(u), u;
        }
        function Ga(e) {
          var n = new e.constructor(e.byteLength);
          return new qs(n).set(new qs(e)), n;
        }
        function Kp(e, n) {
          var i = n ? Ga(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function Qp(e) {
          var n = new e.constructor(e.source, vl.exec(e));
          return (n.lastIndex = e.lastIndex), n;
        }
        function Zp(e) {
          return Zr ? Me(Zr.call(e)) : {};
        }
        function Lu(e, n) {
          var i = n ? Ga(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function Nu(e, n) {
          if (e !== n) {
            var i = e !== t,
              u = e === null,
              h = e === e,
              _ = It(e),
              y = n !== t,
              x = n === null,
              S = n === n,
              R = It(n);
            if (
              (!x && !R && !_ && e > n) ||
              (_ && y && S && !x && !R) ||
              (u && y && S) ||
              (!i && S) ||
              !h
            )
              return 1;
            if (
              (!u && !_ && !R && e < n) ||
              (R && i && h && !u && !_) ||
              (x && i && h) ||
              (!y && h) ||
              !S
            )
              return -1;
          }
          return 0;
        }
        function eg(e, n, i) {
          for (
            var u = -1,
              h = e.criteria,
              _ = n.criteria,
              y = h.length,
              x = i.length;
            ++u < y;

          ) {
            var S = Nu(h[u], _[u]);
            if (S) {
              if (u >= x) return S;
              var R = i[u];
              return S * (R == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function Mu(e, n, i, u) {
          for (
            var h = -1,
              _ = e.length,
              y = i.length,
              x = -1,
              S = n.length,
              R = st(_ - y, 0),
              L = O(S + R),
              M = !u;
            ++x < S;

          )
            L[x] = n[x];
          for (; ++h < y; ) (M || h < _) && (L[i[h]] = e[h]);
          for (; R--; ) L[x++] = e[h++];
          return L;
        }
        function Uu(e, n, i, u) {
          for (
            var h = -1,
              _ = e.length,
              y = -1,
              x = i.length,
              S = -1,
              R = n.length,
              L = st(_ - x, 0),
              M = O(L + R),
              J = !u;
            ++h < L;

          )
            M[h] = e[h];
          for (var V = h; ++S < R; ) M[V + S] = n[S];
          for (; ++y < x; ) (J || h < _) && (M[V + i[y]] = e[h++]);
          return M;
        }
        function xt(e, n) {
          var i = -1,
            u = e.length;
          for (n || (n = O(u)); ++i < u; ) n[i] = e[i];
          return n;
        }
        function rn(e, n, i, u) {
          var h = !i;
          i || (i = {});
          for (var _ = -1, y = n.length; ++_ < y; ) {
            var x = n[_],
              S = u ? u(i[x], e[x], x, i, e) : t;
            S === t && (S = e[x]), h ? mn(i, x, S) : es(i, x, S);
          }
          return i;
        }
        function tg(e, n) {
          return rn(e, Za(e), n);
        }
        function ng(e, n) {
          return rn(e, Ku(e), n);
        }
        function li(e, n) {
          return function (i, u) {
            var h = ge(i) ? of : $p,
              _ = n ? n() : {};
            return h(i, e, ae(u, 2), _);
          };
        }
        function wr(e) {
          return ye(function (n, i) {
            var u = -1,
              h = i.length,
              _ = h > 1 ? i[h - 1] : t,
              y = h > 2 ? i[2] : t;
            for (
              _ = e.length > 3 && typeof _ == "function" ? (h--, _) : t,
                y && mt(i[0], i[1], y) && ((_ = h < 3 ? t : _), (h = 1)),
                n = Me(n);
              ++u < h;

            ) {
              var x = i[u];
              x && e(n, x, u, _);
            }
            return n;
          });
        }
        function Bu(e, n) {
          return function (i, u) {
            if (i == null) return i;
            if (!wt(i)) return e(i, u);
            for (
              var h = i.length, _ = n ? h : -1, y = Me(i);
              (n ? _-- : ++_ < h) && u(y[_], _, y) !== !1;

            );
            return i;
          };
        }
        function ju(e) {
          return function (n, i, u) {
            for (var h = -1, _ = Me(n), y = u(n), x = y.length; x--; ) {
              var S = y[e ? x : ++h];
              if (i(_[S], S, _) === !1) break;
            }
            return n;
          };
        }
        function rg(e, n, i) {
          var u = n & F,
            h = is(e);
          function _() {
            var y = this && this !== lt && this instanceof _ ? h : e;
            return y.apply(u ? i : this, arguments);
          }
          return _;
        }
        function Fu(e) {
          return function (n) {
            n = Pe(n);
            var i = gr(n) ? Xt(n) : t,
              u = i ? i[0] : n.charAt(0),
              h = i ? Un(i, 1).join("") : n.slice(1);
            return u[e]() + h;
          };
        }
        function kr(e) {
          return function (n) {
            return va(Bd(Ud(n).replace(Gh, "")), e, "");
          };
        }
        function is(e) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var i = xr(e.prototype),
              u = e.apply(i, n);
            return Je(u) ? u : i;
          };
        }
        function sg(e, n, i) {
          var u = is(e);
          function h() {
            for (var _ = arguments.length, y = O(_), x = _, S = $r(h); x--; )
              y[x] = arguments[x];
            var R = _ < 3 && y[0] !== S && y[_ - 1] !== S ? [] : Pn(y, S);
            if (((_ -= R.length), _ < i))
              return Gu(e, n, ui, h.placeholder, t, y, R, t, t, i - _);
            var L = this && this !== lt && this instanceof h ? u : e;
            return Tt(L, this, y);
          }
          return h;
        }
        function Wu(e) {
          return function (n, i, u) {
            var h = Me(n);
            if (!wt(n)) {
              var _ = ae(i, 3);
              (n = at(n)),
                (i = function (x) {
                  return _(h[x], x, h);
                });
            }
            var y = e(n, i, u);
            return y > -1 ? h[_ ? n[y] : y] : t;
          };
        }
        function Hu(e) {
          return _n(function (n) {
            var i = n.length,
              u = i,
              h = Ft.prototype.thru;
            for (e && n.reverse(); u--; ) {
              var _ = n[u];
              if (typeof _ != "function") throw new jt(d);
              if (h && !y && fi(_) == "wrapper") var y = new Ft([], !0);
            }
            for (u = y ? u : i; ++u < i; ) {
              _ = n[u];
              var x = fi(_),
                S = x == "wrapper" ? Ka(_) : t;
              S &&
              to(S[0]) &&
              S[1] == (se | ee | ce | D) &&
              !S[4].length &&
              S[9] == 1
                ? (y = y[fi(S[0])].apply(y, S[3]))
                : (y = _.length == 1 && to(_) ? y[x]() : y.thru(_));
            }
            return function () {
              var R = arguments,
                L = R[0];
              if (y && R.length == 1 && ge(L)) return y.plant(L).value();
              for (var M = 0, J = i ? n[M].apply(this, R) : L; ++M < i; )
                J = n[M].call(this, J);
              return J;
            };
          });
        }
        function ui(e, n, i, u, h, _, y, x, S, R) {
          var L = n & se,
            M = n & F,
            J = n & X,
            V = n & (ee | re),
            oe = n & H,
            _e = J ? t : is(e);
          function le() {
            for (var xe = arguments.length, ke = O(xe), Ct = xe; Ct--; )
              ke[Ct] = arguments[Ct];
            if (V)
              var vt = $r(le),
                Dt = mf(ke, vt);
            if (
              (u && (ke = Mu(ke, u, h, V)),
              _ && (ke = Uu(ke, _, y, V)),
              (xe -= Dt),
              V && xe < R)
            ) {
              var Ze = Pn(ke, vt);
              return Gu(e, n, ui, le.placeholder, i, ke, Ze, x, S, R - xe);
            }
            var Zt = M ? i : this,
              wn = J ? Zt[e] : e;
            return (
              (xe = ke.length),
              x ? (ke = $g(ke, x)) : oe && xe > 1 && ke.reverse(),
              L && S < xe && (ke.length = S),
              this && this !== lt && this instanceof le && (wn = _e || is(wn)),
              wn.apply(Zt, ke)
            );
          }
          return le;
        }
        function zu(e, n) {
          return function (i, u) {
            return Dp(i, e, n(u), {});
          };
        }
        function di(e, n) {
          return function (i, u) {
            var h;
            if (i === t && u === t) return n;
            if ((i !== t && (h = i), u !== t)) {
              if (h === t) return u;
              typeof i == "string" || typeof u == "string"
                ? ((i = At(i)), (u = At(u)))
                : ((i = Au(i)), (u = Au(u))),
                (h = e(i, u));
            }
            return h;
          };
        }
        function qa(e) {
          return _n(function (n) {
            return (
              (n = He(n, Ot(ae()))),
              ye(function (i) {
                var u = this;
                return e(n, function (h) {
                  return Tt(h, u, i);
                });
              })
            );
          });
        }
        function ci(e, n) {
          n = n === t ? " " : At(n);
          var i = n.length;
          if (i < 2) return i ? ja(n, e) : n;
          var u = ja(n, Ks(e / mr(n)));
          return gr(n) ? Un(Xt(u), 0, e).join("") : u.slice(0, e);
        }
        function ig(e, n, i, u) {
          var h = n & F,
            _ = is(e);
          function y() {
            for (
              var x = -1,
                S = arguments.length,
                R = -1,
                L = u.length,
                M = O(L + S),
                J = this && this !== lt && this instanceof y ? _ : e;
              ++R < L;

            )
              M[R] = u[R];
            for (; S--; ) M[R++] = arguments[++x];
            return Tt(J, h ? i : this, M);
          }
          return y;
        }
        function Ju(e) {
          return function (n, i, u) {
            return (
              u && typeof u != "number" && mt(n, i, u) && (i = u = t),
              (n = xn(n)),
              i === t ? ((i = n), (n = 0)) : (i = xn(i)),
              (u = u === t ? (n < i ? 1 : -1) : xn(u)),
              zp(n, i, u, e)
            );
          };
        }
        function hi(e) {
          return function (n, i) {
            return (
              (typeof n == "string" && typeof i == "string") ||
                ((n = Jt(n)), (i = Jt(i))),
              e(n, i)
            );
          };
        }
        function Gu(e, n, i, u, h, _, y, x, S, R) {
          var L = n & ee,
            M = L ? y : t,
            J = L ? t : y,
            V = L ? _ : t,
            oe = L ? t : _;
          (n |= L ? ce : G), (n &= ~(L ? G : ce)), n & K || (n &= ~(F | X));
          var _e = [e, n, h, V, M, oe, J, x, S, R],
            le = i.apply(t, _e);
          return to(e) && sd(le, _e), (le.placeholder = u), id(le, e, n);
        }
        function Va(e) {
          var n = rt[e];
          return function (i, u) {
            if (
              ((i = Jt(i)), (u = u == null ? 0 : ht(ve(u), 292)), u && iu(i))
            ) {
              var h = (Pe(i) + "e").split("e"),
                _ = n(h[0] + "e" + (+h[1] + u));
              return (
                (h = (Pe(_) + "e").split("e")), +(h[0] + "e" + (+h[1] - u))
              );
            }
            return n(i);
          };
        }
        var ag =
          br && 1 / Fs(new br([, -0]))[1] == Re
            ? function (e) {
                return new br(e);
              }
            : vo;
        function qu(e) {
          return function (n) {
            var i = ft(n);
            return i == Vt ? $a(n) : i == Yt ? kf(n) : gf(n, e(n));
          };
        }
        function vn(e, n, i, u, h, _, y, x) {
          var S = n & X;
          if (!S && typeof e != "function") throw new jt(d);
          var R = u ? u.length : 0;
          if (
            (R || ((n &= ~(ce | G)), (u = h = t)),
            (y = y === t ? y : st(ve(y), 0)),
            (x = x === t ? x : ve(x)),
            (R -= h ? h.length : 0),
            n & G)
          ) {
            var L = u,
              M = h;
            u = h = t;
          }
          var J = S ? t : Ka(e),
            V = [e, n, i, u, h, L, M, _, y, x];
          if (
            (J && xg(V, J),
            (e = V[0]),
            (n = V[1]),
            (i = V[2]),
            (u = V[3]),
            (h = V[4]),
            (x = V[9] = V[9] === t ? (S ? 0 : e.length) : st(V[9] - R, 0)),
            !x && n & (ee | re) && (n &= ~(ee | re)),
            !n || n == F)
          )
            var oe = rg(e, n, i);
          else
            n == ee || n == re
              ? (oe = sg(e, n, x))
              : (n == ce || n == (F | ce)) && !h.length
              ? (oe = ig(e, n, i, u))
              : (oe = ui.apply(t, V));
          var _e = J ? Tu : sd;
          return id(_e(oe, V), e, n);
        }
        function Vu(e, n, i, u) {
          return e === t || (Qt(e, _r[i]) && !Le.call(u, i)) ? n : e;
        }
        function Yu(e, n, i, u, h, _) {
          return (
            Je(e) && Je(n) && (_.set(n, e), ii(e, n, t, Yu, _), _.delete(n)), e
          );
        }
        function og(e) {
          return ls(e) ? t : e;
        }
        function Xu(e, n, i, u, h, _) {
          var y = i & j,
            x = e.length,
            S = n.length;
          if (x != S && !(y && S > x)) return !1;
          var R = _.get(e),
            L = _.get(n);
          if (R && L) return R == n && L == e;
          var M = -1,
            J = !0,
            V = i & N ? new Qn() : t;
          for (_.set(e, n), _.set(n, e); ++M < x; ) {
            var oe = e[M],
              _e = n[M];
            if (u) var le = y ? u(_e, oe, M, n, e, _) : u(oe, _e, M, e, n, _);
            if (le !== t) {
              if (le) continue;
              J = !1;
              break;
            }
            if (V) {
              if (
                !_a(n, function (xe, ke) {
                  if (!Vr(V, ke) && (oe === xe || h(oe, xe, i, u, _)))
                    return V.push(ke);
                })
              ) {
                J = !1;
                break;
              }
            } else if (!(oe === _e || h(oe, _e, i, u, _))) {
              J = !1;
              break;
            }
          }
          return _.delete(e), _.delete(n), J;
        }
        function lg(e, n, i, u, h, _, y) {
          switch (i) {
            case hr:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              (e = e.buffer), (n = n.buffer);
            case qr:
              return !(
                e.byteLength != n.byteLength || !_(new qs(e), new qs(n))
              );
            case Fr:
            case Wr:
            case Hr:
              return Qt(+e, +n);
            case Ps:
              return e.name == n.name && e.message == n.message;
            case zr:
            case Jr:
              return e == n + "";
            case Vt:
              var x = $a;
            case Yt:
              var S = u & j;
              if ((x || (x = Fs), e.size != n.size && !S)) return !1;
              var R = y.get(e);
              if (R) return R == n;
              (u |= N), y.set(e, n);
              var L = Xu(x(e), x(n), u, h, _, y);
              return y.delete(e), L;
            case Ls:
              if (Zr) return Zr.call(e) == Zr.call(n);
          }
          return !1;
        }
        function ug(e, n, i, u, h, _) {
          var y = i & j,
            x = Ya(e),
            S = x.length,
            R = Ya(n),
            L = R.length;
          if (S != L && !y) return !1;
          for (var M = S; M--; ) {
            var J = x[M];
            if (!(y ? J in n : Le.call(n, J))) return !1;
          }
          var V = _.get(e),
            oe = _.get(n);
          if (V && oe) return V == n && oe == e;
          var _e = !0;
          _.set(e, n), _.set(n, e);
          for (var le = y; ++M < S; ) {
            J = x[M];
            var xe = e[J],
              ke = n[J];
            if (u) var Ct = y ? u(ke, xe, J, n, e, _) : u(xe, ke, J, e, n, _);
            if (!(Ct === t ? xe === ke || h(xe, ke, i, u, _) : Ct)) {
              _e = !1;
              break;
            }
            le || (le = J == "constructor");
          }
          if (_e && !le) {
            var vt = e.constructor,
              Dt = n.constructor;
            vt != Dt &&
              "constructor" in e &&
              "constructor" in n &&
              !(
                typeof vt == "function" &&
                vt instanceof vt &&
                typeof Dt == "function" &&
                Dt instanceof Dt
              ) &&
              (_e = !1);
          }
          return _.delete(e), _.delete(n), _e;
        }
        function _n(e) {
          return ro(nd(e, t, cd), e + "");
        }
        function Ya(e) {
          return mu(e, at, Za);
        }
        function Xa(e) {
          return mu(e, kt, Ku);
        }
        var Ka = Zs
          ? function (e) {
              return Zs.get(e);
            }
          : vo;
        function fi(e) {
          for (
            var n = e.name + "", i = yr[n], u = Le.call(yr, n) ? i.length : 0;
            u--;

          ) {
            var h = i[u],
              _ = h.func;
            if (_ == null || _ == e) return h.name;
          }
          return n;
        }
        function $r(e) {
          var n = Le.call(g, "placeholder") ? g : e;
          return n.placeholder;
        }
        function ae() {
          var e = g.iteratee || go;
          return (
            (e = e === go ? bu : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function pi(e, n) {
          var i = e.__data__;
          return vg(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
        }
        function Qa(e) {
          for (var n = at(e), i = n.length; i--; ) {
            var u = n[i],
              h = e[u];
            n[i] = [u, h, ed(h)];
          }
          return n;
        }
        function tr(e, n) {
          var i = yf(e, n);
          return _u(i) ? i : t;
        }
        function dg(e) {
          var n = Le.call(e, Xn),
            i = e[Xn];
          try {
            e[Xn] = t;
            var u = !0;
          } catch {}
          var h = Js.call(e);
          return u && (n ? (e[Xn] = i) : delete e[Xn]), h;
        }
        var Za = Sa
            ? function (e) {
                return e == null
                  ? []
                  : ((e = Me(e)),
                    Cn(Sa(e), function (n) {
                      return ru.call(e, n);
                    }));
              }
            : _o,
          Ku = Sa
            ? function (e) {
                for (var n = []; e; ) Dn(n, Za(e)), (e = Vs(e));
                return n;
              }
            : _o,
          ft = gt;
        ((Ta && ft(new Ta(new ArrayBuffer(1))) != hr) ||
          (Xr && ft(new Xr()) != Vt) ||
          (Oa && ft(Oa.resolve()) != fl) ||
          (br && ft(new br()) != Yt) ||
          (Kr && ft(new Kr()) != Gr)) &&
          (ft = function (e) {
            var n = gt(e),
              i = n == fn ? e.constructor : t,
              u = i ? nr(i) : "";
            if (u)
              switch (u) {
                case Gf:
                  return hr;
                case qf:
                  return Vt;
                case Vf:
                  return fl;
                case Yf:
                  return Yt;
                case Xf:
                  return Gr;
              }
            return n;
          });
        function cg(e, n, i) {
          for (var u = -1, h = i.length; ++u < h; ) {
            var _ = i[u],
              y = _.size;
            switch (_.type) {
              case "drop":
                e += y;
                break;
              case "dropRight":
                n -= y;
                break;
              case "take":
                n = ht(n, e + y);
                break;
              case "takeRight":
                e = st(e, n - y);
                break;
            }
          }
          return { start: e, end: n };
        }
        function hg(e) {
          var n = e.match(vh);
          return n ? n[1].split(_h) : [];
        }
        function Qu(e, n, i) {
          n = Mn(n, e);
          for (var u = -1, h = n.length, _ = !1; ++u < h; ) {
            var y = sn(n[u]);
            if (!(_ = e != null && i(e, y))) break;
            e = e[y];
          }
          return _ || ++u != h
            ? _
            : ((h = e == null ? 0 : e.length),
              !!h && xi(h) && bn(y, h) && (ge(e) || rr(e)));
        }
        function fg(e) {
          var n = e.length,
            i = new e.constructor(n);
          return (
            n &&
              typeof e[0] == "string" &&
              Le.call(e, "index") &&
              ((i.index = e.index), (i.input = e.input)),
            i
          );
        }
        function Zu(e) {
          return typeof e.constructor == "function" && !as(e) ? xr(Vs(e)) : {};
        }
        function pg(e, n, i) {
          var u = e.constructor;
          switch (n) {
            case qr:
              return Ga(e);
            case Fr:
            case Wr:
              return new u(+e);
            case hr:
              return Kp(e, i);
            case Qi:
            case Zi:
            case ea:
            case ta:
            case na:
            case ra:
            case sa:
            case ia:
            case aa:
              return Lu(e, i);
            case Vt:
              return new u();
            case Hr:
            case Jr:
              return new u(e);
            case zr:
              return Qp(e);
            case Yt:
              return new u();
            case Ls:
              return Zp(e);
          }
        }
        function gg(e, n) {
          var i = n.length;
          if (!i) return e;
          var u = i - 1;
          return (
            (n[u] = (i > 1 ? "& " : "") + n[u]),
            (n = n.join(i > 2 ? ", " : " ")),
            e.replace(
              mh,
              `{
/* [wrapped with ` +
                n +
                `] */
`
            )
          );
        }
        function mg(e) {
          return ge(e) || rr(e) || !!(su && e && e[su]);
        }
        function bn(e, n) {
          var i = typeof e;
          return (
            (n = n == null ? Te : n),
            !!n &&
              (i == "number" || (i != "symbol" && Th.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < n
          );
        }
        function mt(e, n, i) {
          if (!Je(i)) return !1;
          var u = typeof n;
          return (
            u == "number" ? wt(i) && bn(n, i.length) : u == "string" && n in i
          )
            ? Qt(i[n], e)
            : !1;
        }
        function eo(e, n) {
          if (ge(e)) return !1;
          var i = typeof e;
          return i == "number" ||
            i == "symbol" ||
            i == "boolean" ||
            e == null ||
            It(e)
            ? !0
            : hh.test(e) || !ch.test(e) || (n != null && e in Me(n));
        }
        function vg(e) {
          var n = typeof e;
          return n == "string" ||
            n == "number" ||
            n == "symbol" ||
            n == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function to(e) {
          var n = fi(e),
            i = g[n];
          if (typeof i != "function" || !(n in we.prototype)) return !1;
          if (e === i) return !0;
          var u = Ka(i);
          return !!u && e === u[0];
        }
        function _g(e) {
          return !!eu && eu in e;
        }
        var bg = Hs ? yn : bo;
        function as(e) {
          var n = e && e.constructor,
            i = (typeof n == "function" && n.prototype) || _r;
          return e === i;
        }
        function ed(e) {
          return e === e && !Je(e);
        }
        function td(e, n) {
          return function (i) {
            return i == null ? !1 : i[e] === n && (n !== t || e in Me(i));
          };
        }
        function yg(e) {
          var n = bi(e, function (u) {
              return i.size === v && i.clear(), u;
            }),
            i = n.cache;
          return n;
        }
        function xg(e, n) {
          var i = e[1],
            u = n[1],
            h = i | u,
            _ = h < (F | X | se),
            y =
              (u == se && i == ee) ||
              (u == se && i == D && e[7].length <= n[8]) ||
              (u == (se | D) && n[7].length <= n[8] && i == ee);
          if (!(_ || y)) return e;
          u & F && ((e[2] = n[2]), (h |= i & F ? 0 : K));
          var x = n[3];
          if (x) {
            var S = e[3];
            (e[3] = S ? Mu(S, x, n[4]) : x), (e[4] = S ? Pn(e[3], f) : n[4]);
          }
          return (
            (x = n[5]),
            x &&
              ((S = e[5]),
              (e[5] = S ? Uu(S, x, n[6]) : x),
              (e[6] = S ? Pn(e[5], f) : n[6])),
            (x = n[7]),
            x && (e[7] = x),
            u & se && (e[8] = e[8] == null ? n[8] : ht(e[8], n[8])),
            e[9] == null && (e[9] = n[9]),
            (e[0] = n[0]),
            (e[1] = h),
            e
          );
        }
        function wg(e) {
          var n = [];
          if (e != null) for (var i in Me(e)) n.push(i);
          return n;
        }
        function kg(e) {
          return Js.call(e);
        }
        function nd(e, n, i) {
          return (
            (n = st(n === t ? e.length - 1 : n, 0)),
            function () {
              for (
                var u = arguments, h = -1, _ = st(u.length - n, 0), y = O(_);
                ++h < _;

              )
                y[h] = u[n + h];
              h = -1;
              for (var x = O(n + 1); ++h < n; ) x[h] = u[h];
              return (x[n] = i(y)), Tt(e, this, x);
            }
          );
        }
        function rd(e, n) {
          return n.length < 2 ? e : er(e, Ht(n, 0, -1));
        }
        function $g(e, n) {
          for (var i = e.length, u = ht(n.length, i), h = xt(e); u--; ) {
            var _ = n[u];
            e[u] = bn(_, i) ? h[_] : t;
          }
          return e;
        }
        function no(e, n) {
          if (
            !(n === "constructor" && typeof e[n] == "function") &&
            n != "__proto__"
          )
            return e[n];
        }
        var sd = ad(Tu),
          os =
            Bf ||
            function (e, n) {
              return lt.setTimeout(e, n);
            },
          ro = ad(qp);
        function id(e, n, i) {
          var u = n + "";
          return ro(e, gg(u, Eg(hg(u), i)));
        }
        function ad(e) {
          var n = 0,
            i = 0;
          return function () {
            var u = Hf(),
              h = ne - (u - i);
            if (((i = u), h > 0)) {
              if (++n >= Oe) return arguments[0];
            } else n = 0;
            return e.apply(t, arguments);
          };
        }
        function gi(e, n) {
          var i = -1,
            u = e.length,
            h = u - 1;
          for (n = n === t ? u : n; ++i < n; ) {
            var _ = Ba(i, h),
              y = e[_];
            (e[_] = e[i]), (e[i] = y);
          }
          return (e.length = n), e;
        }
        var od = yg(function (e) {
          var n = [];
          return (
            e.charCodeAt(0) === 46 && n.push(""),
            e.replace(fh, function (i, u, h, _) {
              n.push(h ? _.replace(xh, "$1") : u || i);
            }),
            n
          );
        });
        function sn(e) {
          if (typeof e == "string" || It(e)) return e;
          var n = e + "";
          return n == "0" && 1 / e == -Re ? "-0" : n;
        }
        function nr(e) {
          if (e != null) {
            try {
              return zs.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function Eg(e, n) {
          return (
            Bt(Kc, function (i) {
              var u = "_." + i[0];
              n & i[1] && !Bs(e, u) && e.push(u);
            }),
            e.sort()
          );
        }
        function ld(e) {
          if (e instanceof we) return e.clone();
          var n = new Ft(e.__wrapped__, e.__chain__);
          return (
            (n.__actions__ = xt(e.__actions__)),
            (n.__index__ = e.__index__),
            (n.__values__ = e.__values__),
            n
          );
        }
        function Sg(e, n, i) {
          (i ? mt(e, n, i) : n === t) ? (n = 1) : (n = st(ve(n), 0));
          var u = e == null ? 0 : e.length;
          if (!u || n < 1) return [];
          for (var h = 0, _ = 0, y = O(Ks(u / n)); h < u; )
            y[_++] = Ht(e, h, (h += n));
          return y;
        }
        function Tg(e) {
          for (
            var n = -1, i = e == null ? 0 : e.length, u = 0, h = [];
            ++n < i;

          ) {
            var _ = e[n];
            _ && (h[u++] = _);
          }
          return h;
        }
        function Og() {
          var e = arguments.length;
          if (!e) return [];
          for (var n = O(e - 1), i = arguments[0], u = e; u--; )
            n[u - 1] = arguments[u];
          return Dn(ge(i) ? xt(i) : [i], ut(n, 1));
        }
        var Ag = ye(function (e, n) {
            return Qe(e) ? ts(e, ut(n, 1, Qe, !0)) : [];
          }),
          Ig = ye(function (e, n) {
            var i = zt(n);
            return (
              Qe(i) && (i = t), Qe(e) ? ts(e, ut(n, 1, Qe, !0), ae(i, 2)) : []
            );
          }),
          Cg = ye(function (e, n) {
            var i = zt(n);
            return Qe(i) && (i = t), Qe(e) ? ts(e, ut(n, 1, Qe, !0), t, i) : [];
          });
        function Dg(e, n, i) {
          var u = e == null ? 0 : e.length;
          return u
            ? ((n = i || n === t ? 1 : ve(n)), Ht(e, n < 0 ? 0 : n, u))
            : [];
        }
        function Pg(e, n, i) {
          var u = e == null ? 0 : e.length;
          return u
            ? ((n = i || n === t ? 1 : ve(n)),
              (n = u - n),
              Ht(e, 0, n < 0 ? 0 : n))
            : [];
        }
        function Rg(e, n) {
          return e && e.length ? oi(e, ae(n, 3), !0, !0) : [];
        }
        function Lg(e, n) {
          return e && e.length ? oi(e, ae(n, 3), !0) : [];
        }
        function Ng(e, n, i, u) {
          var h = e == null ? 0 : e.length;
          return h
            ? (i && typeof i != "number" && mt(e, n, i) && ((i = 0), (u = h)),
              Op(e, n, i, u))
            : [];
        }
        function ud(e, n, i) {
          var u = e == null ? 0 : e.length;
          if (!u) return -1;
          var h = i == null ? 0 : ve(i);
          return h < 0 && (h = st(u + h, 0)), js(e, ae(n, 3), h);
        }
        function dd(e, n, i) {
          var u = e == null ? 0 : e.length;
          if (!u) return -1;
          var h = u - 1;
          return (
            i !== t && ((h = ve(i)), (h = i < 0 ? st(u + h, 0) : ht(h, u - 1))),
            js(e, ae(n, 3), h, !0)
          );
        }
        function cd(e) {
          var n = e == null ? 0 : e.length;
          return n ? ut(e, 1) : [];
        }
        function Mg(e) {
          var n = e == null ? 0 : e.length;
          return n ? ut(e, Re) : [];
        }
        function Ug(e, n) {
          var i = e == null ? 0 : e.length;
          return i ? ((n = n === t ? 1 : ve(n)), ut(e, n)) : [];
        }
        function Bg(e) {
          for (var n = -1, i = e == null ? 0 : e.length, u = {}; ++n < i; ) {
            var h = e[n];
            u[h[0]] = h[1];
          }
          return u;
        }
        function hd(e) {
          return e && e.length ? e[0] : t;
        }
        function jg(e, n, i) {
          var u = e == null ? 0 : e.length;
          if (!u) return -1;
          var h = i == null ? 0 : ve(i);
          return h < 0 && (h = st(u + h, 0)), pr(e, n, h);
        }
        function Fg(e) {
          var n = e == null ? 0 : e.length;
          return n ? Ht(e, 0, -1) : [];
        }
        var Wg = ye(function (e) {
            var n = He(e, za);
            return n.length && n[0] === e[0] ? Ra(n) : [];
          }),
          Hg = ye(function (e) {
            var n = zt(e),
              i = He(e, za);
            return (
              n === zt(i) ? (n = t) : i.pop(),
              i.length && i[0] === e[0] ? Ra(i, ae(n, 2)) : []
            );
          }),
          zg = ye(function (e) {
            var n = zt(e),
              i = He(e, za);
            return (
              (n = typeof n == "function" ? n : t),
              n && i.pop(),
              i.length && i[0] === e[0] ? Ra(i, t, n) : []
            );
          });
        function Jg(e, n) {
          return e == null ? "" : Ff.call(e, n);
        }
        function zt(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : t;
        }
        function Gg(e, n, i) {
          var u = e == null ? 0 : e.length;
          if (!u) return -1;
          var h = u;
          return (
            i !== t && ((h = ve(i)), (h = h < 0 ? st(u + h, 0) : ht(h, u - 1))),
            n === n ? Ef(e, n, h) : js(e, Gl, h, !0)
          );
        }
        function qg(e, n) {
          return e && e.length ? ku(e, ve(n)) : t;
        }
        var Vg = ye(fd);
        function fd(e, n) {
          return e && e.length && n && n.length ? Ua(e, n) : e;
        }
        function Yg(e, n, i) {
          return e && e.length && n && n.length ? Ua(e, n, ae(i, 2)) : e;
        }
        function Xg(e, n, i) {
          return e && e.length && n && n.length ? Ua(e, n, t, i) : e;
        }
        var Kg = _n(function (e, n) {
          var i = e == null ? 0 : e.length,
            u = Ia(e, n);
          return (
            Su(
              e,
              He(n, function (h) {
                return bn(h, i) ? +h : h;
              }).sort(Nu)
            ),
            u
          );
        });
        function Qg(e, n) {
          var i = [];
          if (!(e && e.length)) return i;
          var u = -1,
            h = [],
            _ = e.length;
          for (n = ae(n, 3); ++u < _; ) {
            var y = e[u];
            n(y, u, e) && (i.push(y), h.push(u));
          }
          return Su(e, h), i;
        }
        function so(e) {
          return e == null ? e : Jf.call(e);
        }
        function Zg(e, n, i) {
          var u = e == null ? 0 : e.length;
          return u
            ? (i && typeof i != "number" && mt(e, n, i)
                ? ((n = 0), (i = u))
                : ((n = n == null ? 0 : ve(n)), (i = i === t ? u : ve(i))),
              Ht(e, n, i))
            : [];
        }
        function em(e, n) {
          return ai(e, n);
        }
        function tm(e, n, i) {
          return Fa(e, n, ae(i, 2));
        }
        function nm(e, n) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var u = ai(e, n);
            if (u < i && Qt(e[u], n)) return u;
          }
          return -1;
        }
        function rm(e, n) {
          return ai(e, n, !0);
        }
        function sm(e, n, i) {
          return Fa(e, n, ae(i, 2), !0);
        }
        function im(e, n) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var u = ai(e, n, !0) - 1;
            if (Qt(e[u], n)) return u;
          }
          return -1;
        }
        function am(e) {
          return e && e.length ? Ou(e) : [];
        }
        function om(e, n) {
          return e && e.length ? Ou(e, ae(n, 2)) : [];
        }
        function lm(e) {
          var n = e == null ? 0 : e.length;
          return n ? Ht(e, 1, n) : [];
        }
        function um(e, n, i) {
          return e && e.length
            ? ((n = i || n === t ? 1 : ve(n)), Ht(e, 0, n < 0 ? 0 : n))
            : [];
        }
        function dm(e, n, i) {
          var u = e == null ? 0 : e.length;
          return u
            ? ((n = i || n === t ? 1 : ve(n)),
              (n = u - n),
              Ht(e, n < 0 ? 0 : n, u))
            : [];
        }
        function cm(e, n) {
          return e && e.length ? oi(e, ae(n, 3), !1, !0) : [];
        }
        function hm(e, n) {
          return e && e.length ? oi(e, ae(n, 3)) : [];
        }
        var fm = ye(function (e) {
            return Nn(ut(e, 1, Qe, !0));
          }),
          pm = ye(function (e) {
            var n = zt(e);
            return Qe(n) && (n = t), Nn(ut(e, 1, Qe, !0), ae(n, 2));
          }),
          gm = ye(function (e) {
            var n = zt(e);
            return (
              (n = typeof n == "function" ? n : t), Nn(ut(e, 1, Qe, !0), t, n)
            );
          });
        function mm(e) {
          return e && e.length ? Nn(e) : [];
        }
        function vm(e, n) {
          return e && e.length ? Nn(e, ae(n, 2)) : [];
        }
        function _m(e, n) {
          return (
            (n = typeof n == "function" ? n : t),
            e && e.length ? Nn(e, t, n) : []
          );
        }
        function io(e) {
          if (!(e && e.length)) return [];
          var n = 0;
          return (
            (e = Cn(e, function (i) {
              if (Qe(i)) return (n = st(i.length, n)), !0;
            })),
            wa(n, function (i) {
              return He(e, ba(i));
            })
          );
        }
        function pd(e, n) {
          if (!(e && e.length)) return [];
          var i = io(e);
          return n == null
            ? i
            : He(i, function (u) {
                return Tt(n, t, u);
              });
        }
        var bm = ye(function (e, n) {
            return Qe(e) ? ts(e, n) : [];
          }),
          ym = ye(function (e) {
            return Ha(Cn(e, Qe));
          }),
          xm = ye(function (e) {
            var n = zt(e);
            return Qe(n) && (n = t), Ha(Cn(e, Qe), ae(n, 2));
          }),
          wm = ye(function (e) {
            var n = zt(e);
            return (n = typeof n == "function" ? n : t), Ha(Cn(e, Qe), t, n);
          }),
          km = ye(io);
        function $m(e, n) {
          return Du(e || [], n || [], es);
        }
        function Em(e, n) {
          return Du(e || [], n || [], ss);
        }
        var Sm = ye(function (e) {
          var n = e.length,
            i = n > 1 ? e[n - 1] : t;
          return (i = typeof i == "function" ? (e.pop(), i) : t), pd(e, i);
        });
        function gd(e) {
          var n = g(e);
          return (n.__chain__ = !0), n;
        }
        function Tm(e, n) {
          return n(e), e;
        }
        function mi(e, n) {
          return n(e);
        }
        var Om = _n(function (e) {
          var n = e.length,
            i = n ? e[0] : 0,
            u = this.__wrapped__,
            h = function (_) {
              return Ia(_, e);
            };
          return n > 1 ||
            this.__actions__.length ||
            !(u instanceof we) ||
            !bn(i)
            ? this.thru(h)
            : ((u = u.slice(i, +i + (n ? 1 : 0))),
              u.__actions__.push({ func: mi, args: [h], thisArg: t }),
              new Ft(u, this.__chain__).thru(function (_) {
                return n && !_.length && _.push(t), _;
              }));
        });
        function Am() {
          return gd(this);
        }
        function Im() {
          return new Ft(this.value(), this.__chain__);
        }
        function Cm() {
          this.__values__ === t && (this.__values__ = Ad(this.value()));
          var e = this.__index__ >= this.__values__.length,
            n = e ? t : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function Dm() {
          return this;
        }
        function Pm(e) {
          for (var n, i = this; i instanceof ti; ) {
            var u = ld(i);
            (u.__index__ = 0),
              (u.__values__ = t),
              n ? (h.__wrapped__ = u) : (n = u);
            var h = u;
            i = i.__wrapped__;
          }
          return (h.__wrapped__ = e), n;
        }
        function Rm() {
          var e = this.__wrapped__;
          if (e instanceof we) {
            var n = e;
            return (
              this.__actions__.length && (n = new we(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: mi, args: [so], thisArg: t }),
              new Ft(n, this.__chain__)
            );
          }
          return this.thru(so);
        }
        function Lm() {
          return Cu(this.__wrapped__, this.__actions__);
        }
        var Nm = li(function (e, n, i) {
          Le.call(e, i) ? ++e[i] : mn(e, i, 1);
        });
        function Mm(e, n, i) {
          var u = ge(e) ? zl : Tp;
          return i && mt(e, n, i) && (n = t), u(e, ae(n, 3));
        }
        function Um(e, n) {
          var i = ge(e) ? Cn : pu;
          return i(e, ae(n, 3));
        }
        var Bm = Wu(ud),
          jm = Wu(dd);
        function Fm(e, n) {
          return ut(vi(e, n), 1);
        }
        function Wm(e, n) {
          return ut(vi(e, n), Re);
        }
        function Hm(e, n, i) {
          return (i = i === t ? 1 : ve(i)), ut(vi(e, n), i);
        }
        function md(e, n) {
          var i = ge(e) ? Bt : Ln;
          return i(e, ae(n, 3));
        }
        function vd(e, n) {
          var i = ge(e) ? lf : fu;
          return i(e, ae(n, 3));
        }
        var zm = li(function (e, n, i) {
          Le.call(e, i) ? e[i].push(n) : mn(e, i, [n]);
        });
        function Jm(e, n, i, u) {
          (e = wt(e) ? e : Sr(e)), (i = i && !u ? ve(i) : 0);
          var h = e.length;
          return (
            i < 0 && (i = st(h + i, 0)),
            wi(e) ? i <= h && e.indexOf(n, i) > -1 : !!h && pr(e, n, i) > -1
          );
        }
        var Gm = ye(function (e, n, i) {
            var u = -1,
              h = typeof n == "function",
              _ = wt(e) ? O(e.length) : [];
            return (
              Ln(e, function (y) {
                _[++u] = h ? Tt(n, y, i) : ns(y, n, i);
              }),
              _
            );
          }),
          qm = li(function (e, n, i) {
            mn(e, i, n);
          });
        function vi(e, n) {
          var i = ge(e) ? He : yu;
          return i(e, ae(n, 3));
        }
        function Vm(e, n, i, u) {
          return e == null
            ? []
            : (ge(n) || (n = n == null ? [] : [n]),
              (i = u ? t : i),
              ge(i) || (i = i == null ? [] : [i]),
              $u(e, n, i));
        }
        var Ym = li(
          function (e, n, i) {
            e[i ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          }
        );
        function Xm(e, n, i) {
          var u = ge(e) ? va : Vl,
            h = arguments.length < 3;
          return u(e, ae(n, 4), i, h, Ln);
        }
        function Km(e, n, i) {
          var u = ge(e) ? uf : Vl,
            h = arguments.length < 3;
          return u(e, ae(n, 4), i, h, fu);
        }
        function Qm(e, n) {
          var i = ge(e) ? Cn : pu;
          return i(e, yi(ae(n, 3)));
        }
        function Zm(e) {
          var n = ge(e) ? uu : Jp;
          return n(e);
        }
        function ev(e, n, i) {
          (i ? mt(e, n, i) : n === t) ? (n = 1) : (n = ve(n));
          var u = ge(e) ? wp : Gp;
          return u(e, n);
        }
        function tv(e) {
          var n = ge(e) ? kp : Vp;
          return n(e);
        }
        function nv(e) {
          if (e == null) return 0;
          if (wt(e)) return wi(e) ? mr(e) : e.length;
          var n = ft(e);
          return n == Vt || n == Yt ? e.size : Na(e).length;
        }
        function rv(e, n, i) {
          var u = ge(e) ? _a : Yp;
          return i && mt(e, n, i) && (n = t), u(e, ae(n, 3));
        }
        var sv = ye(function (e, n) {
            if (e == null) return [];
            var i = n.length;
            return (
              i > 1 && mt(e, n[0], n[1])
                ? (n = [])
                : i > 2 && mt(n[0], n[1], n[2]) && (n = [n[0]]),
              $u(e, ut(n, 1), [])
            );
          }),
          _i =
            Uf ||
            function () {
              return lt.Date.now();
            };
        function iv(e, n) {
          if (typeof n != "function") throw new jt(d);
          return (
            (e = ve(e)),
            function () {
              if (--e < 1) return n.apply(this, arguments);
            }
          );
        }
        function _d(e, n, i) {
          return (
            (n = i ? t : n),
            (n = e && n == null ? e.length : n),
            vn(e, se, t, t, t, t, n)
          );
        }
        function bd(e, n) {
          var i;
          if (typeof n != "function") throw new jt(d);
          return (
            (e = ve(e)),
            function () {
              return (
                --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = t), i
              );
            }
          );
        }
        var ao = ye(function (e, n, i) {
            var u = F;
            if (i.length) {
              var h = Pn(i, $r(ao));
              u |= ce;
            }
            return vn(e, u, n, i, h);
          }),
          yd = ye(function (e, n, i) {
            var u = F | X;
            if (i.length) {
              var h = Pn(i, $r(yd));
              u |= ce;
            }
            return vn(n, u, e, i, h);
          });
        function xd(e, n, i) {
          n = i ? t : n;
          var u = vn(e, ee, t, t, t, t, t, n);
          return (u.placeholder = xd.placeholder), u;
        }
        function wd(e, n, i) {
          n = i ? t : n;
          var u = vn(e, re, t, t, t, t, t, n);
          return (u.placeholder = wd.placeholder), u;
        }
        function kd(e, n, i) {
          var u,
            h,
            _,
            y,
            x,
            S,
            R = 0,
            L = !1,
            M = !1,
            J = !0;
          if (typeof e != "function") throw new jt(d);
          (n = Jt(n) || 0),
            Je(i) &&
              ((L = !!i.leading),
              (M = "maxWait" in i),
              (_ = M ? st(Jt(i.maxWait) || 0, n) : _),
              (J = "trailing" in i ? !!i.trailing : J));
          function V(Ze) {
            var Zt = u,
              wn = h;
            return (u = h = t), (R = Ze), (y = e.apply(wn, Zt)), y;
          }
          function oe(Ze) {
            return (R = Ze), (x = os(xe, n)), L ? V(Ze) : y;
          }
          function _e(Ze) {
            var Zt = Ze - S,
              wn = Ze - R,
              Wd = n - Zt;
            return M ? ht(Wd, _ - wn) : Wd;
          }
          function le(Ze) {
            var Zt = Ze - S,
              wn = Ze - R;
            return S === t || Zt >= n || Zt < 0 || (M && wn >= _);
          }
          function xe() {
            var Ze = _i();
            if (le(Ze)) return ke(Ze);
            x = os(xe, _e(Ze));
          }
          function ke(Ze) {
            return (x = t), J && u ? V(Ze) : ((u = h = t), y);
          }
          function Ct() {
            x !== t && Pu(x), (R = 0), (u = S = h = x = t);
          }
          function vt() {
            return x === t ? y : ke(_i());
          }
          function Dt() {
            var Ze = _i(),
              Zt = le(Ze);
            if (((u = arguments), (h = this), (S = Ze), Zt)) {
              if (x === t) return oe(S);
              if (M) return Pu(x), (x = os(xe, n)), V(S);
            }
            return x === t && (x = os(xe, n)), y;
          }
          return (Dt.cancel = Ct), (Dt.flush = vt), Dt;
        }
        var av = ye(function (e, n) {
            return hu(e, 1, n);
          }),
          ov = ye(function (e, n, i) {
            return hu(e, Jt(n) || 0, i);
          });
        function lv(e) {
          return vn(e, H);
        }
        function bi(e, n) {
          if (typeof e != "function" || (n != null && typeof n != "function"))
            throw new jt(d);
          var i = function () {
            var u = arguments,
              h = n ? n.apply(this, u) : u[0],
              _ = i.cache;
            if (_.has(h)) return _.get(h);
            var y = e.apply(this, u);
            return (i.cache = _.set(h, y) || _), y;
          };
          return (i.cache = new (bi.Cache || gn)()), i;
        }
        bi.Cache = gn;
        function yi(e) {
          if (typeof e != "function") throw new jt(d);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function uv(e) {
          return bd(2, e);
        }
        var dv = Xp(function (e, n) {
            n =
              n.length == 1 && ge(n[0])
                ? He(n[0], Ot(ae()))
                : He(ut(n, 1), Ot(ae()));
            var i = n.length;
            return ye(function (u) {
              for (var h = -1, _ = ht(u.length, i); ++h < _; )
                u[h] = n[h].call(this, u[h]);
              return Tt(e, this, u);
            });
          }),
          oo = ye(function (e, n) {
            var i = Pn(n, $r(oo));
            return vn(e, ce, t, n, i);
          }),
          $d = ye(function (e, n) {
            var i = Pn(n, $r($d));
            return vn(e, G, t, n, i);
          }),
          cv = _n(function (e, n) {
            return vn(e, D, t, t, t, n);
          });
        function hv(e, n) {
          if (typeof e != "function") throw new jt(d);
          return (n = n === t ? n : ve(n)), ye(e, n);
        }
        function fv(e, n) {
          if (typeof e != "function") throw new jt(d);
          return (
            (n = n == null ? 0 : st(ve(n), 0)),
            ye(function (i) {
              var u = i[n],
                h = Un(i, 0, n);
              return u && Dn(h, u), Tt(e, this, h);
            })
          );
        }
        function pv(e, n, i) {
          var u = !0,
            h = !0;
          if (typeof e != "function") throw new jt(d);
          return (
            Je(i) &&
              ((u = "leading" in i ? !!i.leading : u),
              (h = "trailing" in i ? !!i.trailing : h)),
            kd(e, n, { leading: u, maxWait: n, trailing: h })
          );
        }
        function gv(e) {
          return _d(e, 1);
        }
        function mv(e, n) {
          return oo(Ja(n), e);
        }
        function vv() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return ge(e) ? e : [e];
        }
        function _v(e) {
          return Wt(e, U);
        }
        function bv(e, n) {
          return (n = typeof n == "function" ? n : t), Wt(e, U, n);
        }
        function yv(e) {
          return Wt(e, b | U);
        }
        function xv(e, n) {
          return (n = typeof n == "function" ? n : t), Wt(e, b | U, n);
        }
        function wv(e, n) {
          return n == null || cu(e, n, at(n));
        }
        function Qt(e, n) {
          return e === n || (e !== e && n !== n);
        }
        var kv = hi(Pa),
          $v = hi(function (e, n) {
            return e >= n;
          }),
          rr = vu(
            (function () {
              return arguments;
            })()
          )
            ? vu
            : function (e) {
                return Ve(e) && Le.call(e, "callee") && !ru.call(e, "callee");
              },
          ge = O.isArray,
          Ev = Ul ? Ot(Ul) : Pp;
        function wt(e) {
          return e != null && xi(e.length) && !yn(e);
        }
        function Qe(e) {
          return Ve(e) && wt(e);
        }
        function Sv(e) {
          return e === !0 || e === !1 || (Ve(e) && gt(e) == Fr);
        }
        var Bn = jf || bo,
          Tv = Bl ? Ot(Bl) : Rp;
        function Ov(e) {
          return Ve(e) && e.nodeType === 1 && !ls(e);
        }
        function Av(e) {
          if (e == null) return !0;
          if (
            wt(e) &&
            (ge(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              Bn(e) ||
              Er(e) ||
              rr(e))
          )
            return !e.length;
          var n = ft(e);
          if (n == Vt || n == Yt) return !e.size;
          if (as(e)) return !Na(e).length;
          for (var i in e) if (Le.call(e, i)) return !1;
          return !0;
        }
        function Iv(e, n) {
          return rs(e, n);
        }
        function Cv(e, n, i) {
          i = typeof i == "function" ? i : t;
          var u = i ? i(e, n) : t;
          return u === t ? rs(e, n, t, i) : !!u;
        }
        function lo(e) {
          if (!Ve(e)) return !1;
          var n = gt(e);
          return (
            n == Ps ||
            n == Zc ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !ls(e))
          );
        }
        function Dv(e) {
          return typeof e == "number" && iu(e);
        }
        function yn(e) {
          if (!Je(e)) return !1;
          var n = gt(e);
          return n == Rs || n == hl || n == Qc || n == th;
        }
        function Ed(e) {
          return typeof e == "number" && e == ve(e);
        }
        function xi(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Te;
        }
        function Je(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ve(e) {
          return e != null && typeof e == "object";
        }
        var Sd = jl ? Ot(jl) : Np;
        function Pv(e, n) {
          return e === n || La(e, n, Qa(n));
        }
        function Rv(e, n, i) {
          return (i = typeof i == "function" ? i : t), La(e, n, Qa(n), i);
        }
        function Lv(e) {
          return Td(e) && e != +e;
        }
        function Nv(e) {
          if (bg(e)) throw new fe(l);
          return _u(e);
        }
        function Mv(e) {
          return e === null;
        }
        function Uv(e) {
          return e == null;
        }
        function Td(e) {
          return typeof e == "number" || (Ve(e) && gt(e) == Hr);
        }
        function ls(e) {
          if (!Ve(e) || gt(e) != fn) return !1;
          var n = Vs(e);
          if (n === null) return !0;
          var i = Le.call(n, "constructor") && n.constructor;
          return typeof i == "function" && i instanceof i && zs.call(i) == Rf;
        }
        var uo = Fl ? Ot(Fl) : Mp;
        function Bv(e) {
          return Ed(e) && e >= -Te && e <= Te;
        }
        var Od = Wl ? Ot(Wl) : Up;
        function wi(e) {
          return typeof e == "string" || (!ge(e) && Ve(e) && gt(e) == Jr);
        }
        function It(e) {
          return typeof e == "symbol" || (Ve(e) && gt(e) == Ls);
        }
        var Er = Hl ? Ot(Hl) : Bp;
        function jv(e) {
          return e === t;
        }
        function Fv(e) {
          return Ve(e) && ft(e) == Gr;
        }
        function Wv(e) {
          return Ve(e) && gt(e) == rh;
        }
        var Hv = hi(Ma),
          zv = hi(function (e, n) {
            return e <= n;
          });
        function Ad(e) {
          if (!e) return [];
          if (wt(e)) return wi(e) ? Xt(e) : xt(e);
          if (Yr && e[Yr]) return wf(e[Yr]());
          var n = ft(e),
            i = n == Vt ? $a : n == Yt ? Fs : Sr;
          return i(e);
        }
        function xn(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = Jt(e)), e === Re || e === -Re)) {
            var n = e < 0 ? -1 : 1;
            return n * Ae;
          }
          return e === e ? e : 0;
        }
        function ve(e) {
          var n = xn(e),
            i = n % 1;
          return n === n ? (i ? n - i : n) : 0;
        }
        function Id(e) {
          return e ? Zn(ve(e), 0, nt) : 0;
        }
        function Jt(e) {
          if (typeof e == "number") return e;
          if (It(e)) return tn;
          if (Je(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Je(n) ? n + "" : n;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = Yl(e);
          var i = $h.test(e);
          return i || Sh.test(e)
            ? sf(e.slice(2), i ? 2 : 8)
            : kh.test(e)
            ? tn
            : +e;
        }
        function Cd(e) {
          return rn(e, kt(e));
        }
        function Jv(e) {
          return e ? Zn(ve(e), -Te, Te) : e === 0 ? e : 0;
        }
        function Pe(e) {
          return e == null ? "" : At(e);
        }
        var Gv = wr(function (e, n) {
            if (as(n) || wt(n)) {
              rn(n, at(n), e);
              return;
            }
            for (var i in n) Le.call(n, i) && es(e, i, n[i]);
          }),
          Dd = wr(function (e, n) {
            rn(n, kt(n), e);
          }),
          ki = wr(function (e, n, i, u) {
            rn(n, kt(n), e, u);
          }),
          qv = wr(function (e, n, i, u) {
            rn(n, at(n), e, u);
          }),
          Vv = _n(Ia);
        function Yv(e, n) {
          var i = xr(e);
          return n == null ? i : du(i, n);
        }
        var Xv = ye(function (e, n) {
            e = Me(e);
            var i = -1,
              u = n.length,
              h = u > 2 ? n[2] : t;
            for (h && mt(n[0], n[1], h) && (u = 1); ++i < u; )
              for (var _ = n[i], y = kt(_), x = -1, S = y.length; ++x < S; ) {
                var R = y[x],
                  L = e[R];
                (L === t || (Qt(L, _r[R]) && !Le.call(e, R))) && (e[R] = _[R]);
              }
            return e;
          }),
          Kv = ye(function (e) {
            return e.push(t, Yu), Tt(Pd, t, e);
          });
        function Qv(e, n) {
          return Jl(e, ae(n, 3), nn);
        }
        function Zv(e, n) {
          return Jl(e, ae(n, 3), Da);
        }
        function e0(e, n) {
          return e == null ? e : Ca(e, ae(n, 3), kt);
        }
        function t0(e, n) {
          return e == null ? e : gu(e, ae(n, 3), kt);
        }
        function n0(e, n) {
          return e && nn(e, ae(n, 3));
        }
        function r0(e, n) {
          return e && Da(e, ae(n, 3));
        }
        function s0(e) {
          return e == null ? [] : si(e, at(e));
        }
        function i0(e) {
          return e == null ? [] : si(e, kt(e));
        }
        function co(e, n, i) {
          var u = e == null ? t : er(e, n);
          return u === t ? i : u;
        }
        function a0(e, n) {
          return e != null && Qu(e, n, Ap);
        }
        function ho(e, n) {
          return e != null && Qu(e, n, Ip);
        }
        var o0 = zu(function (e, n, i) {
            n != null && typeof n.toString != "function" && (n = Js.call(n)),
              (e[n] = i);
          }, po($t)),
          l0 = zu(function (e, n, i) {
            n != null && typeof n.toString != "function" && (n = Js.call(n)),
              Le.call(e, n) ? e[n].push(i) : (e[n] = [i]);
          }, ae),
          u0 = ye(ns);
        function at(e) {
          return wt(e) ? lu(e) : Na(e);
        }
        function kt(e) {
          return wt(e) ? lu(e, !0) : jp(e);
        }
        function d0(e, n) {
          var i = {};
          return (
            (n = ae(n, 3)),
            nn(e, function (u, h, _) {
              mn(i, n(u, h, _), u);
            }),
            i
          );
        }
        function c0(e, n) {
          var i = {};
          return (
            (n = ae(n, 3)),
            nn(e, function (u, h, _) {
              mn(i, h, n(u, h, _));
            }),
            i
          );
        }
        var h0 = wr(function (e, n, i) {
            ii(e, n, i);
          }),
          Pd = wr(function (e, n, i, u) {
            ii(e, n, i, u);
          }),
          f0 = _n(function (e, n) {
            var i = {};
            if (e == null) return i;
            var u = !1;
            (n = He(n, function (_) {
              return (_ = Mn(_, e)), u || (u = _.length > 1), _;
            })),
              rn(e, Xa(e), i),
              u && (i = Wt(i, b | I | U, og));
            for (var h = n.length; h--; ) Wa(i, n[h]);
            return i;
          });
        function p0(e, n) {
          return Rd(e, yi(ae(n)));
        }
        var g0 = _n(function (e, n) {
          return e == null ? {} : Wp(e, n);
        });
        function Rd(e, n) {
          if (e == null) return {};
          var i = He(Xa(e), function (u) {
            return [u];
          });
          return (
            (n = ae(n)),
            Eu(e, i, function (u, h) {
              return n(u, h[0]);
            })
          );
        }
        function m0(e, n, i) {
          n = Mn(n, e);
          var u = -1,
            h = n.length;
          for (h || ((h = 1), (e = t)); ++u < h; ) {
            var _ = e == null ? t : e[sn(n[u])];
            _ === t && ((u = h), (_ = i)), (e = yn(_) ? _.call(e) : _);
          }
          return e;
        }
        function v0(e, n, i) {
          return e == null ? e : ss(e, n, i);
        }
        function _0(e, n, i, u) {
          return (
            (u = typeof u == "function" ? u : t), e == null ? e : ss(e, n, i, u)
          );
        }
        var Ld = qu(at),
          Nd = qu(kt);
        function b0(e, n, i) {
          var u = ge(e),
            h = u || Bn(e) || Er(e);
          if (((n = ae(n, 4)), i == null)) {
            var _ = e && e.constructor;
            h
              ? (i = u ? new _() : [])
              : Je(e)
              ? (i = yn(_) ? xr(Vs(e)) : {})
              : (i = {});
          }
          return (
            (h ? Bt : nn)(e, function (y, x, S) {
              return n(i, y, x, S);
            }),
            i
          );
        }
        function y0(e, n) {
          return e == null ? !0 : Wa(e, n);
        }
        function x0(e, n, i) {
          return e == null ? e : Iu(e, n, Ja(i));
        }
        function w0(e, n, i, u) {
          return (
            (u = typeof u == "function" ? u : t),
            e == null ? e : Iu(e, n, Ja(i), u)
          );
        }
        function Sr(e) {
          return e == null ? [] : ka(e, at(e));
        }
        function k0(e) {
          return e == null ? [] : ka(e, kt(e));
        }
        function $0(e, n, i) {
          return (
            i === t && ((i = n), (n = t)),
            i !== t && ((i = Jt(i)), (i = i === i ? i : 0)),
            n !== t && ((n = Jt(n)), (n = n === n ? n : 0)),
            Zn(Jt(e), n, i)
          );
        }
        function E0(e, n, i) {
          return (
            (n = xn(n)),
            i === t ? ((i = n), (n = 0)) : (i = xn(i)),
            (e = Jt(e)),
            Cp(e, n, i)
          );
        }
        function S0(e, n, i) {
          if (
            (i && typeof i != "boolean" && mt(e, n, i) && (n = i = t),
            i === t &&
              (typeof n == "boolean"
                ? ((i = n), (n = t))
                : typeof e == "boolean" && ((i = e), (e = t))),
            e === t && n === t
              ? ((e = 0), (n = 1))
              : ((e = xn(e)), n === t ? ((n = e), (e = 0)) : (n = xn(n))),
            e > n)
          ) {
            var u = e;
            (e = n), (n = u);
          }
          if (i || e % 1 || n % 1) {
            var h = au();
            return ht(e + h * (n - e + rf("1e-" + ((h + "").length - 1))), n);
          }
          return Ba(e, n);
        }
        var T0 = kr(function (e, n, i) {
          return (n = n.toLowerCase()), e + (i ? Md(n) : n);
        });
        function Md(e) {
          return fo(Pe(e).toLowerCase());
        }
        function Ud(e) {
          return (e = Pe(e)), e && e.replace(Oh, vf).replace(qh, "");
        }
        function O0(e, n, i) {
          (e = Pe(e)), (n = At(n));
          var u = e.length;
          i = i === t ? u : Zn(ve(i), 0, u);
          var h = i;
          return (i -= n.length), i >= 0 && e.slice(i, h) == n;
        }
        function A0(e) {
          return (e = Pe(e)), e && lh.test(e) ? e.replace(gl, _f) : e;
        }
        function I0(e) {
          return (e = Pe(e)), e && ph.test(e) ? e.replace(oa, "\\$&") : e;
        }
        var C0 = kr(function (e, n, i) {
            return e + (i ? "-" : "") + n.toLowerCase();
          }),
          D0 = kr(function (e, n, i) {
            return e + (i ? " " : "") + n.toLowerCase();
          }),
          P0 = Fu("toLowerCase");
        function R0(e, n, i) {
          (e = Pe(e)), (n = ve(n));
          var u = n ? mr(e) : 0;
          if (!n || u >= n) return e;
          var h = (n - u) / 2;
          return ci(Qs(h), i) + e + ci(Ks(h), i);
        }
        function L0(e, n, i) {
          (e = Pe(e)), (n = ve(n));
          var u = n ? mr(e) : 0;
          return n && u < n ? e + ci(n - u, i) : e;
        }
        function N0(e, n, i) {
          (e = Pe(e)), (n = ve(n));
          var u = n ? mr(e) : 0;
          return n && u < n ? ci(n - u, i) + e : e;
        }
        function M0(e, n, i) {
          return (
            i || n == null ? (n = 0) : n && (n = +n),
            zf(Pe(e).replace(la, ""), n || 0)
          );
        }
        function U0(e, n, i) {
          return (
            (i ? mt(e, n, i) : n === t) ? (n = 1) : (n = ve(n)), ja(Pe(e), n)
          );
        }
        function B0() {
          var e = arguments,
            n = Pe(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var j0 = kr(function (e, n, i) {
          return e + (i ? "_" : "") + n.toLowerCase();
        });
        function F0(e, n, i) {
          return (
            i && typeof i != "number" && mt(e, n, i) && (n = i = t),
            (i = i === t ? nt : i >>> 0),
            i
              ? ((e = Pe(e)),
                e &&
                (typeof n == "string" || (n != null && !uo(n))) &&
                ((n = At(n)), !n && gr(e))
                  ? Un(Xt(e), 0, i)
                  : e.split(n, i))
              : []
          );
        }
        var W0 = kr(function (e, n, i) {
          return e + (i ? " " : "") + fo(n);
        });
        function H0(e, n, i) {
          return (
            (e = Pe(e)),
            (i = i == null ? 0 : Zn(ve(i), 0, e.length)),
            (n = At(n)),
            e.slice(i, i + n.length) == n
          );
        }
        function z0(e, n, i) {
          var u = g.templateSettings;
          i && mt(e, n, i) && (n = t), (e = Pe(e)), (n = ki({}, n, u, Vu));
          var h = ki({}, n.imports, u.imports, Vu),
            _ = at(h),
            y = ka(h, _),
            x,
            S,
            R = 0,
            L = n.interpolate || Ns,
            M = "__p += '",
            J = Ea(
              (n.escape || Ns).source +
                "|" +
                L.source +
                "|" +
                (L === ml ? wh : Ns).source +
                "|" +
                (n.evaluate || Ns).source +
                "|$",
              "g"
            ),
            V =
              "//# sourceURL=" +
              (Le.call(n, "sourceURL")
                ? (n.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++Qh + "]") +
              `
`;
          e.replace(J, function (le, xe, ke, Ct, vt, Dt) {
            return (
              ke || (ke = Ct),
              (M += e.slice(R, Dt).replace(Ah, bf)),
              xe &&
                ((x = !0),
                (M +=
                  `' +
__e(` +
                  xe +
                  `) +
'`)),
              vt &&
                ((S = !0),
                (M +=
                  `';
` +
                  vt +
                  `;
__p += '`)),
              ke &&
                (M +=
                  `' +
((__t = (` +
                  ke +
                  `)) == null ? '' : __t) +
'`),
              (R = Dt + le.length),
              le
            );
          }),
            (M += `';
`);
          var oe = Le.call(n, "variable") && n.variable;
          if (!oe)
            M =
              `with (obj) {
` +
              M +
              `
}
`;
          else if (yh.test(oe)) throw new fe(c);
          (M = (S ? M.replace(sh, "") : M)
            .replace(ih, "$1")
            .replace(ah, "$1;")),
            (M =
              "function(" +
              (oe || "obj") +
              `) {
` +
              (oe
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (x ? ", __e = _.escape" : "") +
              (S
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              M +
              `return __p
}`);
          var _e = jd(function () {
            return Ie(_, V + "return " + M).apply(t, y);
          });
          if (((_e.source = M), lo(_e))) throw _e;
          return _e;
        }
        function J0(e) {
          return Pe(e).toLowerCase();
        }
        function G0(e) {
          return Pe(e).toUpperCase();
        }
        function q0(e, n, i) {
          if (((e = Pe(e)), e && (i || n === t))) return Yl(e);
          if (!e || !(n = At(n))) return e;
          var u = Xt(e),
            h = Xt(n),
            _ = Xl(u, h),
            y = Kl(u, h) + 1;
          return Un(u, _, y).join("");
        }
        function V0(e, n, i) {
          if (((e = Pe(e)), e && (i || n === t))) return e.slice(0, Zl(e) + 1);
          if (!e || !(n = At(n))) return e;
          var u = Xt(e),
            h = Kl(u, Xt(n)) + 1;
          return Un(u, 0, h).join("");
        }
        function Y0(e, n, i) {
          if (((e = Pe(e)), e && (i || n === t))) return e.replace(la, "");
          if (!e || !(n = At(n))) return e;
          var u = Xt(e),
            h = Xl(u, Xt(n));
          return Un(u, h).join("");
        }
        function X0(e, n) {
          var i = We,
            u = ie;
          if (Je(n)) {
            var h = "separator" in n ? n.separator : h;
            (i = "length" in n ? ve(n.length) : i),
              (u = "omission" in n ? At(n.omission) : u);
          }
          e = Pe(e);
          var _ = e.length;
          if (gr(e)) {
            var y = Xt(e);
            _ = y.length;
          }
          if (i >= _) return e;
          var x = i - mr(u);
          if (x < 1) return u;
          var S = y ? Un(y, 0, x).join("") : e.slice(0, x);
          if (h === t) return S + u;
          if ((y && (x += S.length - x), uo(h))) {
            if (e.slice(x).search(h)) {
              var R,
                L = S;
              for (
                h.global || (h = Ea(h.source, Pe(vl.exec(h)) + "g")),
                  h.lastIndex = 0;
                (R = h.exec(L));

              )
                var M = R.index;
              S = S.slice(0, M === t ? x : M);
            }
          } else if (e.indexOf(At(h), x) != x) {
            var J = S.lastIndexOf(h);
            J > -1 && (S = S.slice(0, J));
          }
          return S + u;
        }
        function K0(e) {
          return (e = Pe(e)), e && oh.test(e) ? e.replace(pl, Sf) : e;
        }
        var Q0 = kr(function (e, n, i) {
            return e + (i ? " " : "") + n.toUpperCase();
          }),
          fo = Fu("toUpperCase");
        function Bd(e, n, i) {
          return (
            (e = Pe(e)),
            (n = i ? t : n),
            n === t ? (xf(e) ? Af(e) : hf(e)) : e.match(n) || []
          );
        }
        var jd = ye(function (e, n) {
            try {
              return Tt(e, t, n);
            } catch (i) {
              return lo(i) ? i : new fe(i);
            }
          }),
          Z0 = _n(function (e, n) {
            return (
              Bt(n, function (i) {
                (i = sn(i)), mn(e, i, ao(e[i], e));
              }),
              e
            );
          });
        function e_(e) {
          var n = e == null ? 0 : e.length,
            i = ae();
          return (
            (e = n
              ? He(e, function (u) {
                  if (typeof u[1] != "function") throw new jt(d);
                  return [i(u[0]), u[1]];
                })
              : []),
            ye(function (u) {
              for (var h = -1; ++h < n; ) {
                var _ = e[h];
                if (Tt(_[0], this, u)) return Tt(_[1], this, u);
              }
            })
          );
        }
        function t_(e) {
          return Sp(Wt(e, b));
        }
        function po(e) {
          return function () {
            return e;
          };
        }
        function n_(e, n) {
          return e == null || e !== e ? n : e;
        }
        var r_ = Hu(),
          s_ = Hu(!0);
        function $t(e) {
          return e;
        }
        function go(e) {
          return bu(typeof e == "function" ? e : Wt(e, b));
        }
        function i_(e) {
          return xu(Wt(e, b));
        }
        function a_(e, n) {
          return wu(e, Wt(n, b));
        }
        var o_ = ye(function (e, n) {
            return function (i) {
              return ns(i, e, n);
            };
          }),
          l_ = ye(function (e, n) {
            return function (i) {
              return ns(e, i, n);
            };
          });
        function mo(e, n, i) {
          var u = at(n),
            h = si(n, u);
          i == null &&
            !(Je(n) && (h.length || !u.length)) &&
            ((i = n), (n = e), (e = this), (h = si(n, at(n))));
          var _ = !(Je(i) && "chain" in i) || !!i.chain,
            y = yn(e);
          return (
            Bt(h, function (x) {
              var S = n[x];
              (e[x] = S),
                y &&
                  (e.prototype[x] = function () {
                    var R = this.__chain__;
                    if (_ || R) {
                      var L = e(this.__wrapped__),
                        M = (L.__actions__ = xt(this.__actions__));
                      return (
                        M.push({ func: S, args: arguments, thisArg: e }),
                        (L.__chain__ = R),
                        L
                      );
                    }
                    return S.apply(e, Dn([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function u_() {
          return lt._ === this && (lt._ = Lf), this;
        }
        function vo() {}
        function d_(e) {
          return (
            (e = ve(e)),
            ye(function (n) {
              return ku(n, e);
            })
          );
        }
        var c_ = qa(He),
          h_ = qa(zl),
          f_ = qa(_a);
        function Fd(e) {
          return eo(e) ? ba(sn(e)) : Hp(e);
        }
        function p_(e) {
          return function (n) {
            return e == null ? t : er(e, n);
          };
        }
        var g_ = Ju(),
          m_ = Ju(!0);
        function _o() {
          return [];
        }
        function bo() {
          return !1;
        }
        function v_() {
          return {};
        }
        function __() {
          return "";
        }
        function b_() {
          return !0;
        }
        function y_(e, n) {
          if (((e = ve(e)), e < 1 || e > Te)) return [];
          var i = nt,
            u = ht(e, nt);
          (n = ae(n)), (e -= nt);
          for (var h = wa(u, n); ++i < e; ) n(i);
          return h;
        }
        function x_(e) {
          return ge(e) ? He(e, sn) : It(e) ? [e] : xt(od(Pe(e)));
        }
        function w_(e) {
          var n = ++Pf;
          return Pe(e) + n;
        }
        var k_ = di(function (e, n) {
            return e + n;
          }, 0),
          $_ = Va("ceil"),
          E_ = di(function (e, n) {
            return e / n;
          }, 1),
          S_ = Va("floor");
        function T_(e) {
          return e && e.length ? ri(e, $t, Pa) : t;
        }
        function O_(e, n) {
          return e && e.length ? ri(e, ae(n, 2), Pa) : t;
        }
        function A_(e) {
          return ql(e, $t);
        }
        function I_(e, n) {
          return ql(e, ae(n, 2));
        }
        function C_(e) {
          return e && e.length ? ri(e, $t, Ma) : t;
        }
        function D_(e, n) {
          return e && e.length ? ri(e, ae(n, 2), Ma) : t;
        }
        var P_ = di(function (e, n) {
            return e * n;
          }, 1),
          R_ = Va("round"),
          L_ = di(function (e, n) {
            return e - n;
          }, 0);
        function N_(e) {
          return e && e.length ? xa(e, $t) : 0;
        }
        function M_(e, n) {
          return e && e.length ? xa(e, ae(n, 2)) : 0;
        }
        return (
          (g.after = iv),
          (g.ary = _d),
          (g.assign = Gv),
          (g.assignIn = Dd),
          (g.assignInWith = ki),
          (g.assignWith = qv),
          (g.at = Vv),
          (g.before = bd),
          (g.bind = ao),
          (g.bindAll = Z0),
          (g.bindKey = yd),
          (g.castArray = vv),
          (g.chain = gd),
          (g.chunk = Sg),
          (g.compact = Tg),
          (g.concat = Og),
          (g.cond = e_),
          (g.conforms = t_),
          (g.constant = po),
          (g.countBy = Nm),
          (g.create = Yv),
          (g.curry = xd),
          (g.curryRight = wd),
          (g.debounce = kd),
          (g.defaults = Xv),
          (g.defaultsDeep = Kv),
          (g.defer = av),
          (g.delay = ov),
          (g.difference = Ag),
          (g.differenceBy = Ig),
          (g.differenceWith = Cg),
          (g.drop = Dg),
          (g.dropRight = Pg),
          (g.dropRightWhile = Rg),
          (g.dropWhile = Lg),
          (g.fill = Ng),
          (g.filter = Um),
          (g.flatMap = Fm),
          (g.flatMapDeep = Wm),
          (g.flatMapDepth = Hm),
          (g.flatten = cd),
          (g.flattenDeep = Mg),
          (g.flattenDepth = Ug),
          (g.flip = lv),
          (g.flow = r_),
          (g.flowRight = s_),
          (g.fromPairs = Bg),
          (g.functions = s0),
          (g.functionsIn = i0),
          (g.groupBy = zm),
          (g.initial = Fg),
          (g.intersection = Wg),
          (g.intersectionBy = Hg),
          (g.intersectionWith = zg),
          (g.invert = o0),
          (g.invertBy = l0),
          (g.invokeMap = Gm),
          (g.iteratee = go),
          (g.keyBy = qm),
          (g.keys = at),
          (g.keysIn = kt),
          (g.map = vi),
          (g.mapKeys = d0),
          (g.mapValues = c0),
          (g.matches = i_),
          (g.matchesProperty = a_),
          (g.memoize = bi),
          (g.merge = h0),
          (g.mergeWith = Pd),
          (g.method = o_),
          (g.methodOf = l_),
          (g.mixin = mo),
          (g.negate = yi),
          (g.nthArg = d_),
          (g.omit = f0),
          (g.omitBy = p0),
          (g.once = uv),
          (g.orderBy = Vm),
          (g.over = c_),
          (g.overArgs = dv),
          (g.overEvery = h_),
          (g.overSome = f_),
          (g.partial = oo),
          (g.partialRight = $d),
          (g.partition = Ym),
          (g.pick = g0),
          (g.pickBy = Rd),
          (g.property = Fd),
          (g.propertyOf = p_),
          (g.pull = Vg),
          (g.pullAll = fd),
          (g.pullAllBy = Yg),
          (g.pullAllWith = Xg),
          (g.pullAt = Kg),
          (g.range = g_),
          (g.rangeRight = m_),
          (g.rearg = cv),
          (g.reject = Qm),
          (g.remove = Qg),
          (g.rest = hv),
          (g.reverse = so),
          (g.sampleSize = ev),
          (g.set = v0),
          (g.setWith = _0),
          (g.shuffle = tv),
          (g.slice = Zg),
          (g.sortBy = sv),
          (g.sortedUniq = am),
          (g.sortedUniqBy = om),
          (g.split = F0),
          (g.spread = fv),
          (g.tail = lm),
          (g.take = um),
          (g.takeRight = dm),
          (g.takeRightWhile = cm),
          (g.takeWhile = hm),
          (g.tap = Tm),
          (g.throttle = pv),
          (g.thru = mi),
          (g.toArray = Ad),
          (g.toPairs = Ld),
          (g.toPairsIn = Nd),
          (g.toPath = x_),
          (g.toPlainObject = Cd),
          (g.transform = b0),
          (g.unary = gv),
          (g.union = fm),
          (g.unionBy = pm),
          (g.unionWith = gm),
          (g.uniq = mm),
          (g.uniqBy = vm),
          (g.uniqWith = _m),
          (g.unset = y0),
          (g.unzip = io),
          (g.unzipWith = pd),
          (g.update = x0),
          (g.updateWith = w0),
          (g.values = Sr),
          (g.valuesIn = k0),
          (g.without = bm),
          (g.words = Bd),
          (g.wrap = mv),
          (g.xor = ym),
          (g.xorBy = xm),
          (g.xorWith = wm),
          (g.zip = km),
          (g.zipObject = $m),
          (g.zipObjectDeep = Em),
          (g.zipWith = Sm),
          (g.entries = Ld),
          (g.entriesIn = Nd),
          (g.extend = Dd),
          (g.extendWith = ki),
          mo(g, g),
          (g.add = k_),
          (g.attempt = jd),
          (g.camelCase = T0),
          (g.capitalize = Md),
          (g.ceil = $_),
          (g.clamp = $0),
          (g.clone = _v),
          (g.cloneDeep = yv),
          (g.cloneDeepWith = xv),
          (g.cloneWith = bv),
          (g.conformsTo = wv),
          (g.deburr = Ud),
          (g.defaultTo = n_),
          (g.divide = E_),
          (g.endsWith = O0),
          (g.eq = Qt),
          (g.escape = A0),
          (g.escapeRegExp = I0),
          (g.every = Mm),
          (g.find = Bm),
          (g.findIndex = ud),
          (g.findKey = Qv),
          (g.findLast = jm),
          (g.findLastIndex = dd),
          (g.findLastKey = Zv),
          (g.floor = S_),
          (g.forEach = md),
          (g.forEachRight = vd),
          (g.forIn = e0),
          (g.forInRight = t0),
          (g.forOwn = n0),
          (g.forOwnRight = r0),
          (g.get = co),
          (g.gt = kv),
          (g.gte = $v),
          (g.has = a0),
          (g.hasIn = ho),
          (g.head = hd),
          (g.identity = $t),
          (g.includes = Jm),
          (g.indexOf = jg),
          (g.inRange = E0),
          (g.invoke = u0),
          (g.isArguments = rr),
          (g.isArray = ge),
          (g.isArrayBuffer = Ev),
          (g.isArrayLike = wt),
          (g.isArrayLikeObject = Qe),
          (g.isBoolean = Sv),
          (g.isBuffer = Bn),
          (g.isDate = Tv),
          (g.isElement = Ov),
          (g.isEmpty = Av),
          (g.isEqual = Iv),
          (g.isEqualWith = Cv),
          (g.isError = lo),
          (g.isFinite = Dv),
          (g.isFunction = yn),
          (g.isInteger = Ed),
          (g.isLength = xi),
          (g.isMap = Sd),
          (g.isMatch = Pv),
          (g.isMatchWith = Rv),
          (g.isNaN = Lv),
          (g.isNative = Nv),
          (g.isNil = Uv),
          (g.isNull = Mv),
          (g.isNumber = Td),
          (g.isObject = Je),
          (g.isObjectLike = Ve),
          (g.isPlainObject = ls),
          (g.isRegExp = uo),
          (g.isSafeInteger = Bv),
          (g.isSet = Od),
          (g.isString = wi),
          (g.isSymbol = It),
          (g.isTypedArray = Er),
          (g.isUndefined = jv),
          (g.isWeakMap = Fv),
          (g.isWeakSet = Wv),
          (g.join = Jg),
          (g.kebabCase = C0),
          (g.last = zt),
          (g.lastIndexOf = Gg),
          (g.lowerCase = D0),
          (g.lowerFirst = P0),
          (g.lt = Hv),
          (g.lte = zv),
          (g.max = T_),
          (g.maxBy = O_),
          (g.mean = A_),
          (g.meanBy = I_),
          (g.min = C_),
          (g.minBy = D_),
          (g.stubArray = _o),
          (g.stubFalse = bo),
          (g.stubObject = v_),
          (g.stubString = __),
          (g.stubTrue = b_),
          (g.multiply = P_),
          (g.nth = qg),
          (g.noConflict = u_),
          (g.noop = vo),
          (g.now = _i),
          (g.pad = R0),
          (g.padEnd = L0),
          (g.padStart = N0),
          (g.parseInt = M0),
          (g.random = S0),
          (g.reduce = Xm),
          (g.reduceRight = Km),
          (g.repeat = U0),
          (g.replace = B0),
          (g.result = m0),
          (g.round = R_),
          (g.runInContext = w),
          (g.sample = Zm),
          (g.size = nv),
          (g.snakeCase = j0),
          (g.some = rv),
          (g.sortedIndex = em),
          (g.sortedIndexBy = tm),
          (g.sortedIndexOf = nm),
          (g.sortedLastIndex = rm),
          (g.sortedLastIndexBy = sm),
          (g.sortedLastIndexOf = im),
          (g.startCase = W0),
          (g.startsWith = H0),
          (g.subtract = L_),
          (g.sum = N_),
          (g.sumBy = M_),
          (g.template = z0),
          (g.times = y_),
          (g.toFinite = xn),
          (g.toInteger = ve),
          (g.toLength = Id),
          (g.toLower = J0),
          (g.toNumber = Jt),
          (g.toSafeInteger = Jv),
          (g.toString = Pe),
          (g.toUpper = G0),
          (g.trim = q0),
          (g.trimEnd = V0),
          (g.trimStart = Y0),
          (g.truncate = X0),
          (g.unescape = K0),
          (g.uniqueId = w_),
          (g.upperCase = Q0),
          (g.upperFirst = fo),
          (g.each = md),
          (g.eachRight = vd),
          (g.first = hd),
          mo(
            g,
            (function () {
              var e = {};
              return (
                nn(g, function (n, i) {
                  Le.call(g.prototype, i) || (e[i] = n);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (g.VERSION = s),
          Bt(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              g[e].placeholder = g;
            }
          ),
          Bt(["drop", "take"], function (e, n) {
            (we.prototype[e] = function (i) {
              i = i === t ? 1 : st(ve(i), 0);
              var u = this.__filtered__ && !n ? new we(this) : this.clone();
              return (
                u.__filtered__
                  ? (u.__takeCount__ = ht(i, u.__takeCount__))
                  : u.__views__.push({
                      size: ht(i, nt),
                      type: e + (u.__dir__ < 0 ? "Right" : ""),
                    }),
                u
              );
            }),
              (we.prototype[e + "Right"] = function (i) {
                return this.reverse()[e](i).reverse();
              });
          }),
          Bt(["filter", "map", "takeWhile"], function (e, n) {
            var i = n + 1,
              u = i == T || i == te;
            we.prototype[e] = function (h) {
              var _ = this.clone();
              return (
                _.__iteratees__.push({ iteratee: ae(h, 3), type: i }),
                (_.__filtered__ = _.__filtered__ || u),
                _
              );
            };
          }),
          Bt(["head", "last"], function (e, n) {
            var i = "take" + (n ? "Right" : "");
            we.prototype[e] = function () {
              return this[i](1).value()[0];
            };
          }),
          Bt(["initial", "tail"], function (e, n) {
            var i = "drop" + (n ? "" : "Right");
            we.prototype[e] = function () {
              return this.__filtered__ ? new we(this) : this[i](1);
            };
          }),
          (we.prototype.compact = function () {
            return this.filter($t);
          }),
          (we.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (we.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (we.prototype.invokeMap = ye(function (e, n) {
            return typeof e == "function"
              ? new we(this)
              : this.map(function (i) {
                  return ns(i, e, n);
                });
          })),
          (we.prototype.reject = function (e) {
            return this.filter(yi(ae(e)));
          }),
          (we.prototype.slice = function (e, n) {
            e = ve(e);
            var i = this;
            return i.__filtered__ && (e > 0 || n < 0)
              ? new we(i)
              : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)),
                n !== t &&
                  ((n = ve(n)), (i = n < 0 ? i.dropRight(-n) : i.take(n - e))),
                i);
          }),
          (we.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (we.prototype.toArray = function () {
            return this.take(nt);
          }),
          nn(we.prototype, function (e, n) {
            var i = /^(?:filter|find|map|reject)|While$/.test(n),
              u = /^(?:head|last)$/.test(n),
              h = g[u ? "take" + (n == "last" ? "Right" : "") : n],
              _ = u || /^find/.test(n);
            !h ||
              (g.prototype[n] = function () {
                var y = this.__wrapped__,
                  x = u ? [1] : arguments,
                  S = y instanceof we,
                  R = x[0],
                  L = S || ge(y),
                  M = function (xe) {
                    var ke = h.apply(g, Dn([xe], x));
                    return u && J ? ke[0] : ke;
                  };
                L &&
                  i &&
                  typeof R == "function" &&
                  R.length != 1 &&
                  (S = L = !1);
                var J = this.__chain__,
                  V = !!this.__actions__.length,
                  oe = _ && !J,
                  _e = S && !V;
                if (!_ && L) {
                  y = _e ? y : new we(this);
                  var le = e.apply(y, x);
                  return (
                    le.__actions__.push({ func: mi, args: [M], thisArg: t }),
                    new Ft(le, J)
                  );
                }
                return oe && _e
                  ? e.apply(this, x)
                  : ((le = this.thru(M)),
                    oe ? (u ? le.value()[0] : le.value()) : le);
              });
          }),
          Bt(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var n = Ws[e],
                i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                u = /^(?:pop|shift)$/.test(e);
              g.prototype[e] = function () {
                var h = arguments;
                if (u && !this.__chain__) {
                  var _ = this.value();
                  return n.apply(ge(_) ? _ : [], h);
                }
                return this[i](function (y) {
                  return n.apply(ge(y) ? y : [], h);
                });
              };
            }
          ),
          nn(we.prototype, function (e, n) {
            var i = g[n];
            if (i) {
              var u = i.name + "";
              Le.call(yr, u) || (yr[u] = []), yr[u].push({ name: n, func: i });
            }
          }),
          (yr[ui(t, X).name] = [{ name: "wrapper", func: t }]),
          (we.prototype.clone = Kf),
          (we.prototype.reverse = Qf),
          (we.prototype.value = Zf),
          (g.prototype.at = Om),
          (g.prototype.chain = Am),
          (g.prototype.commit = Im),
          (g.prototype.next = Cm),
          (g.prototype.plant = Pm),
          (g.prototype.reverse = Rm),
          (g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = Lm),
          (g.prototype.first = g.prototype.head),
          Yr && (g.prototype[Yr] = Dm),
          g
        );
      },
      vr = If();
    Yn ? (((Yn.exports = vr)._ = vr), (pa._ = vr)) : (lt._ = vr);
  }.call(Cr));
})(Hn, Hn.exports);
class Kk {
  constructor(r) {
    xo(this, "schema");
    this.schema = r;
  }
  getAttributeIds(r) {
    return Object.keys(this.schema[r].properties);
  }
  getPrimaryKey(r) {
    const t = /<pk\/>/,
      s = Object.entries(this.schema[r].properties).find((o) => {
        const l = o[1];
        return l.description ? !!l.description.match(t) : !1;
      });
    return s ? s[0] : null;
  }
  getForeignTable(r, t) {
    const s = this.schema[r].properties[t];
    if (!s.description) return null;
    const o =
        /<fk table='(?<foreignTableId>.*?)' column='(?<foreignJoinId>.*?)'\/>/,
      l = s.description.match(o);
    return l
      ? { tableId: l.groups.foreignTableId, joinId: l.groups.foreignJoinId }
      : null;
  }
  getFkColumns(r, t) {
    return this.getOutgoingJoins(r)
      .filter((s) => s.table === t)
      .map((s) => s.attributeId);
  }
  getRelevantAttributes(r, t) {
    function s(d, c) {
      return d ? (c ? Hn.exports.union(d, c) : d) : c;
    }
    const o = t.map((d) => {
      const c = /^(?<foreignTableId>@.*?)\.(?<foreignAttributeId>.*?)$/,
        m = /^(?<foreignKey>.*?)\.(?<foreignAttributeId>.*?)$/,
        v = d.match(c),
        f = d.match(m);
      let b = {};
      if (v) {
        const I = v.groups.foreignTableId,
          U = v.groups.foreignAttributeId,
          j = this.getRelevantAttributes(I, [U]);
        return (b = Hn.exports.mergeWith(b, j, s)), b;
      } else if (f) {
        const I = f.groups.foreignKey,
          U = this.getForeignTable(r, I),
          j = U == null ? void 0 : U.tableId,
          N = U == null ? void 0 : U.joinId,
          F = f.groups.foreignAttributeId,
          X = this.getRelevantAttributes(j, [F]);
        return (
          (b = Hn.exports.mergeWith(b, X, s)),
          (b = Hn.exports.mergeWith(b, { [r]: [I] }, s)),
          (b = Hn.exports.mergeWith(b, { [j]: [N] }, s)),
          b
        );
      } else return (b[r] = [d]), b;
    });
    let l = {};
    return (
      o.forEach((d) => {
        l = Hn.exports.mergeWith(l, d, s);
      }),
      l
    );
  }
  getOutgoingJoins(r) {
    return Object.entries(this.schema[r].properties)
      .map((s) => {
        const o = s[0],
          l = s[1],
          d = /<fk table='(?<tableId>.*?)' column=/;
        if (!l.description) return null;
        const c = l.description.match(d);
        return c ? { attributeId: o, table: c.groups.tableId } : null;
      })
      .filter((s) => s);
  }
  getIncomingJoins(r) {
    const t = Object.keys(this.schema).filter((s) =>
      this.getOutgoingJoins(s)
        .map((o) => o.table)
        .includes(r)
    );
    return (
      t.forEach((s) => {
        this.getOutgoingJoins(s)
          .map((o) => o.table)
          .forEach((o) => {});
      }),
      t
    );
  }
  getAllJoins(r) {
    const t = this.getIncomingJoins(r),
      s = this.getOutgoingJoins(r).map((o) => o.table);
    return t.concat(s);
  }
}
/*!
 * vue-draggable-next v2.1.0
 * (c) 2021 Anish George
 * @license MIT
 */ /**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function Zd(a, r) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    r &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      t.push.apply(t, s);
  }
  return t;
}
function hn(a) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Zd(Object(t), !0).forEach(function (s) {
          Qk(a, s, t[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : Zd(Object(t)).forEach(function (s) {
          Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
        });
  }
  return a;
}
function Ci(a) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ci = function (r) {
          return typeof r;
        })
      : (Ci = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ci(a)
  );
}
function Qk(a, r, t) {
  return (
    r in a
      ? Object.defineProperty(a, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[r] = t),
    a
  );
}
function Sn() {
  return (
    (Sn =
      Object.assign ||
      function (a) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var s in t)
            Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
        }
        return a;
      }),
    Sn.apply(this, arguments)
  );
}
function Zk(a, r) {
  if (a == null) return {};
  var t = {},
    s = Object.keys(a),
    o,
    l;
  for (l = 0; l < s.length; l++)
    (o = s[l]), !(r.indexOf(o) >= 0) && (t[o] = a[o]);
  return t;
}
function e$(a, r) {
  if (a == null) return {};
  var t = Zk(a, r),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(a);
    for (o = 0; o < l.length; o++)
      (s = l[o]),
        !(r.indexOf(s) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(a, s) || (t[s] = a[s]));
  }
  return t;
}
var t$ = "1.14.0";
function kn(a) {
  if (typeof window != "undefined" && window.navigator)
    return !!navigator.userAgent.match(a);
}
var An = kn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  As = kn(/Edge/i),
  ec = kn(/firefox/i),
  ps = kn(/safari/i) && !kn(/chrome/i) && !kn(/android/i),
  Tc = kn(/iP(ad|od|hone)/i),
  n$ = kn(/chrome/i) && kn(/android/i),
  Oc = { capture: !1, passive: !1 };
function Ce(a, r, t) {
  a.addEventListener(r, t, !An && Oc);
}
function Ee(a, r, t) {
  a.removeEventListener(r, t, !An && Oc);
}
function Ui(a, r) {
  if (!!r) {
    if ((r[0] === ">" && (r = r.substring(1)), a))
      try {
        if (a.matches) return a.matches(r);
        if (a.msMatchesSelector) return a.msMatchesSelector(r);
        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function r$(a) {
  return a.host && a !== document && a.host.nodeType ? a.host : a.parentNode;
}
function on(a, r, t, s) {
  if (a) {
    t = t || document;
    do {
      if (
        (r != null &&
          (r[0] === ">" ? a.parentNode === t && Ui(a, r) : Ui(a, r))) ||
        (s && a === t)
      )
        return a;
      if (a === t) break;
    } while ((a = r$(a)));
  }
  return null;
}
var tc = /\s+/g;
function Pt(a, r, t) {
  if (a && r)
    if (a.classList) a.classList[t ? "add" : "remove"](r);
    else {
      var s = (" " + a.className + " ")
        .replace(tc, " ")
        .replace(" " + r + " ", " ");
      a.className = (s + (t ? " " + r : "")).replace(tc, " ");
    }
}
function ue(a, r, t) {
  var s = a && a.style;
  if (s) {
    if (t === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (t = document.defaultView.getComputedStyle(a, ""))
          : a.currentStyle && (t = a.currentStyle),
        r === void 0 ? t : t[r]
      );
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r),
      (s[r] = t + (typeof t == "string" ? "" : "px"));
  }
}
function Mr(a, r) {
  var t = "";
  if (typeof a == "string") t = a;
  else
    do {
      var s = ue(a, "transform");
      s && s !== "none" && (t = s + " " + t);
    } while (!r && (a = a.parentNode));
  var o =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return o && new o(t);
}
function Ac(a, r, t) {
  if (a) {
    var s = a.getElementsByTagName(r),
      o = 0,
      l = s.length;
    if (t) for (; o < l; o++) t(s[o], o);
    return s;
  }
  return [];
}
function dn() {
  var a = document.scrollingElement;
  return a || document.documentElement;
}
function it(a, r, t, s, o) {
  if (!(!a.getBoundingClientRect && a !== window)) {
    var l, d, c, m, v, f, b;
    if (
      (a !== window && a.parentNode && a !== dn()
        ? ((l = a.getBoundingClientRect()),
          (d = l.top),
          (c = l.left),
          (m = l.bottom),
          (v = l.right),
          (f = l.height),
          (b = l.width))
        : ((d = 0),
          (c = 0),
          (m = window.innerHeight),
          (v = window.innerWidth),
          (f = window.innerHeight),
          (b = window.innerWidth)),
      (r || t) && a !== window && ((o = o || a.parentNode), !An))
    )
      do
        if (
          o &&
          o.getBoundingClientRect &&
          (ue(o, "transform") !== "none" ||
            (t && ue(o, "position") !== "static"))
        ) {
          var I = o.getBoundingClientRect();
          (d -= I.top + parseInt(ue(o, "border-top-width"))),
            (c -= I.left + parseInt(ue(o, "border-left-width"))),
            (m = d + l.height),
            (v = c + l.width);
          break;
        }
      while ((o = o.parentNode));
    if (s && a !== window) {
      var U = Mr(o || a),
        j = U && U.a,
        N = U && U.d;
      U && ((d /= N), (c /= j), (b /= j), (f /= N), (m = d + f), (v = c + b));
    }
    return { top: d, left: c, bottom: m, right: v, width: b, height: f };
  }
}
function nc(a, r, t) {
  for (var s = qn(a, !0), o = it(a)[r]; s; ) {
    var l = it(s)[t],
      d = void 0;
    if ((t === "top" || t === "left" ? (d = o >= l) : (d = o <= l), !d))
      return s;
    if (s === dn()) break;
    s = qn(s, !1);
  }
  return !1;
}
function Br(a, r, t, s) {
  for (var o = 0, l = 0, d = a.children; l < d.length; ) {
    if (
      d[l].style.display !== "none" &&
      d[l] !== de.ghost &&
      (s || d[l] !== de.dragged) &&
      on(d[l], t.draggable, a, !1)
    ) {
      if (o === r) return d[l];
      o++;
    }
    l++;
  }
  return null;
}
function al(a, r) {
  for (
    var t = a.lastElementChild;
    t && (t === de.ghost || ue(t, "display") === "none" || (r && !Ui(t, r)));

  )
    t = t.previousElementSibling;
  return t || null;
}
function Gt(a, r) {
  var t = 0;
  if (!a || !a.parentNode) return -1;
  for (; (a = a.previousElementSibling); )
    a.nodeName.toUpperCase() !== "TEMPLATE" &&
      a !== de.clone &&
      (!r || Ui(a, r)) &&
      t++;
  return t;
}
function rc(a) {
  var r = 0,
    t = 0,
    s = dn();
  if (a)
    do {
      var o = Mr(a),
        l = o.a,
        d = o.d;
      (r += a.scrollLeft * l), (t += a.scrollTop * d);
    } while (a !== s && (a = a.parentNode));
  return [r, t];
}
function s$(a, r) {
  for (var t in a)
    if (!!a.hasOwnProperty(t)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === a[t][s]) return Number(t);
    }
  return -1;
}
function qn(a, r) {
  if (!a || !a.getBoundingClientRect) return dn();
  var t = a,
    s = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var o = ue(t);
      if (
        (t.clientWidth < t.scrollWidth &&
          (o.overflowX == "auto" || o.overflowX == "scroll")) ||
        (t.clientHeight < t.scrollHeight &&
          (o.overflowY == "auto" || o.overflowY == "scroll"))
      ) {
        if (!t.getBoundingClientRect || t === document.body) return dn();
        if (s || r) return t;
        s = !0;
      }
    }
  while ((t = t.parentNode));
  return dn();
}
function i$(a, r) {
  if (a && r) for (var t in r) r.hasOwnProperty(t) && (a[t] = r[t]);
  return a;
}
function ko(a, r) {
  return (
    Math.round(a.top) === Math.round(r.top) &&
    Math.round(a.left) === Math.round(r.left) &&
    Math.round(a.height) === Math.round(r.height) &&
    Math.round(a.width) === Math.round(r.width)
  );
}
var gs;
function Ic(a, r) {
  return function () {
    if (!gs) {
      var t = arguments,
        s = this;
      t.length === 1 ? a.call(s, t[0]) : a.apply(s, t),
        (gs = setTimeout(function () {
          gs = void 0;
        }, r));
    }
  };
}
function a$() {
  clearTimeout(gs), (gs = void 0);
}
function Cc(a, r, t) {
  (a.scrollLeft += r), (a.scrollTop += t);
}
function Dc(a) {
  var r = window.Polymer,
    t = window.jQuery || window.Zepto;
  return r && r.dom
    ? r.dom(a).cloneNode(!0)
    : t
    ? t(a).clone(!0)[0]
    : a.cloneNode(!0);
}
var Lt = "Sortable" + new Date().getTime();
function o$() {
  var a = [],
    r;
  return {
    captureAnimationState: function () {
      if (((a = []), !!this.options.animation)) {
        var s = [].slice.call(this.el.children);
        s.forEach(function (o) {
          if (!(ue(o, "display") === "none" || o === de.ghost)) {
            a.push({ target: o, rect: it(o) });
            var l = hn({}, a[a.length - 1].rect);
            if (o.thisAnimationDuration) {
              var d = Mr(o, !0);
              d && ((l.top -= d.f), (l.left -= d.e));
            }
            o.fromRect = l;
          }
        });
      }
    },
    addAnimationState: function (s) {
      a.push(s);
    },
    removeAnimationState: function (s) {
      a.splice(s$(a, { target: s }), 1);
    },
    animateAll: function (s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var l = !1,
        d = 0;
      a.forEach(function (c) {
        var m = 0,
          v = c.target,
          f = v.fromRect,
          b = it(v),
          I = v.prevFromRect,
          U = v.prevToRect,
          j = c.rect,
          N = Mr(v, !0);
        N && ((b.top -= N.f), (b.left -= N.e)),
          (v.toRect = b),
          v.thisAnimationDuration &&
            ko(I, b) &&
            !ko(f, b) &&
            (j.top - b.top) / (j.left - b.left) ===
              (f.top - b.top) / (f.left - b.left) &&
            (m = u$(j, I, U, o.options)),
          ko(b, f) ||
            ((v.prevFromRect = f),
            (v.prevToRect = b),
            m || (m = o.options.animation),
            o.animate(v, j, b, m)),
          m &&
            ((l = !0),
            (d = Math.max(d, m)),
            clearTimeout(v.animationResetTimer),
            (v.animationResetTimer = setTimeout(function () {
              (v.animationTime = 0),
                (v.prevFromRect = null),
                (v.fromRect = null),
                (v.prevToRect = null),
                (v.thisAnimationDuration = null);
            }, m)),
            (v.thisAnimationDuration = m));
      }),
        clearTimeout(r),
        l
          ? (r = setTimeout(function () {
              typeof s == "function" && s();
            }, d))
          : typeof s == "function" && s(),
        (a = []);
    },
    animate: function (s, o, l, d) {
      if (d) {
        ue(s, "transition", ""), ue(s, "transform", "");
        var c = Mr(this.el),
          m = c && c.a,
          v = c && c.d,
          f = (o.left - l.left) / (m || 1),
          b = (o.top - l.top) / (v || 1);
        (s.animatingX = !!f),
          (s.animatingY = !!b),
          ue(s, "transform", "translate3d(" + f + "px," + b + "px,0)"),
          (this.forRepaintDummy = l$(s)),
          ue(
            s,
            "transition",
            "transform " +
              d +
              "ms" +
              (this.options.easing ? " " + this.options.easing : "")
          ),
          ue(s, "transform", "translate3d(0,0,0)"),
          typeof s.animated == "number" && clearTimeout(s.animated),
          (s.animated = setTimeout(function () {
            ue(s, "transition", ""),
              ue(s, "transform", ""),
              (s.animated = !1),
              (s.animatingX = !1),
              (s.animatingY = !1);
          }, d));
      }
    },
  };
}
function l$(a) {
  return a.offsetWidth;
}
function u$(a, r, t, s) {
  return (
    (Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) /
      Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2))) *
    s.animation
  );
}
var Ar = [],
  $o = { initializeByDefault: !0 },
  Is = {
    mount: function (r) {
      for (var t in $o) $o.hasOwnProperty(t) && !(t in r) && (r[t] = $o[t]);
      Ar.forEach(function (s) {
        if (s.pluginName === r.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            r.pluginName,
            " more than once"
          );
      }),
        Ar.push(r);
    },
    pluginEvent: function (r, t, s) {
      var o = this;
      (this.eventCanceled = !1),
        (s.cancel = function () {
          o.eventCanceled = !0;
        });
      var l = r + "Global";
      Ar.forEach(function (d) {
        !t[d.pluginName] ||
          (t[d.pluginName][l] && t[d.pluginName][l](hn({ sortable: t }, s)),
          t.options[d.pluginName] &&
            t[d.pluginName][r] &&
            t[d.pluginName][r](hn({ sortable: t }, s)));
      });
    },
    initializePlugins: function (r, t, s, o) {
      Ar.forEach(function (c) {
        var m = c.pluginName;
        if (!(!r.options[m] && !c.initializeByDefault)) {
          var v = new c(r, t, r.options);
          (v.sortable = r),
            (v.options = r.options),
            (r[m] = v),
            Sn(s, v.defaults);
        }
      });
      for (var l in r.options)
        if (!!r.options.hasOwnProperty(l)) {
          var d = this.modifyOption(r, l, r.options[l]);
          typeof d != "undefined" && (r.options[l] = d);
        }
    },
    getEventProperties: function (r, t) {
      var s = {};
      return (
        Ar.forEach(function (o) {
          typeof o.eventProperties == "function" &&
            Sn(s, o.eventProperties.call(t[o.pluginName], r));
        }),
        s
      );
    },
    modifyOption: function (r, t, s) {
      var o;
      return (
        Ar.forEach(function (l) {
          !r[l.pluginName] ||
            (l.optionListeners &&
              typeof l.optionListeners[t] == "function" &&
              (o = l.optionListeners[t].call(r[l.pluginName], s)));
        }),
        o
      );
    },
  };
function d$(a) {
  var r = a.sortable,
    t = a.rootEl,
    s = a.name,
    o = a.targetEl,
    l = a.cloneEl,
    d = a.toEl,
    c = a.fromEl,
    m = a.oldIndex,
    v = a.newIndex,
    f = a.oldDraggableIndex,
    b = a.newDraggableIndex,
    I = a.originalEvent,
    U = a.putSortable,
    j = a.extraEventProperties;
  if (((r = r || (t && t[Lt])), !!r)) {
    var N,
      F = r.options,
      X = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !An && !As
      ? (N = new CustomEvent(s, { bubbles: !0, cancelable: !0 }))
      : ((N = document.createEvent("Event")), N.initEvent(s, !0, !0)),
      (N.to = d || t),
      (N.from = c || t),
      (N.item = o || t),
      (N.clone = l),
      (N.oldIndex = m),
      (N.newIndex = v),
      (N.oldDraggableIndex = f),
      (N.newDraggableIndex = b),
      (N.originalEvent = I),
      (N.pullMode = U ? U.lastPutMode : void 0);
    var K = hn(hn({}, j), Is.getEventProperties(s, r));
    for (var ee in K) N[ee] = K[ee];
    t && t.dispatchEvent(N), F[X] && F[X].call(r, N);
  }
}
var c$ = ["evt"],
  St = function (r, t) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = s.evt,
      l = e$(s, c$);
    Is.pluginEvent.bind(de)(
      r,
      t,
      hn(
        {
          dragEl: z,
          parentEl: Xe,
          ghostEl: me,
          rootEl: ze,
          nextEl: ar,
          lastDownEl: Di,
          cloneEl: Ke,
          cloneHidden: Jn,
          dragStarted: ds,
          putSortable: dt,
          activeSortable: de.active,
          originalEvent: o,
          oldIndex: Lr,
          oldDraggableIndex: ms,
          newIndex: Rt,
          newDraggableIndex: zn,
          hideGhostForTarget: Nc,
          unhideGhostForTarget: Mc,
          cloneNowHidden: function () {
            Jn = !0;
          },
          cloneNowShown: function () {
            Jn = !1;
          },
          dispatchSortableEvent: function (c) {
            bt({ sortable: t, name: c, originalEvent: o });
          },
        },
        l
      )
    );
  };
function bt(a) {
  d$(
    hn(
      {
        putSortable: dt,
        cloneEl: Ke,
        targetEl: z,
        rootEl: ze,
        oldIndex: Lr,
        oldDraggableIndex: ms,
        newIndex: Rt,
        newDraggableIndex: zn,
      },
      a
    )
  );
}
var z,
  Xe,
  me,
  ze,
  ar,
  Di,
  Ke,
  Jn,
  Lr,
  Rt,
  ms,
  zn,
  Ti,
  dt,
  Pr = !1,
  Bi = !1,
  ji = [],
  sr,
  en,
  Eo,
  So,
  sc,
  ic,
  ds,
  Ir,
  vs,
  _s = !1,
  Oi = !1,
  Pi,
  pt,
  To = [],
  zo = !1,
  Fi = [],
  Ki = typeof document != "undefined",
  Ai = Tc,
  ac = As || An ? "cssFloat" : "float",
  h$ = Ki && !n$ && !Tc && "draggable" in document.createElement("div"),
  Pc = (function () {
    if (!!Ki) {
      if (An) return !1;
      var a = document.createElement("x");
      return (
        (a.style.cssText = "pointer-events:auto"),
        a.style.pointerEvents === "auto"
      );
    }
  })(),
  Rc = function (r, t) {
    var s = ue(r),
      o =
        parseInt(s.width) -
        parseInt(s.paddingLeft) -
        parseInt(s.paddingRight) -
        parseInt(s.borderLeftWidth) -
        parseInt(s.borderRightWidth),
      l = Br(r, 0, t),
      d = Br(r, 1, t),
      c = l && ue(l),
      m = d && ue(d),
      v = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + it(l).width,
      f = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + it(d).width;
    if (s.display === "flex")
      return s.flexDirection === "column" ||
        s.flexDirection === "column-reverse"
        ? "vertical"
        : "horizontal";
    if (s.display === "grid")
      return s.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (l && c.float && c.float !== "none") {
      var b = c.float === "left" ? "left" : "right";
      return d && (m.clear === "both" || m.clear === b)
        ? "vertical"
        : "horizontal";
    }
    return l &&
      (c.display === "block" ||
        c.display === "flex" ||
        c.display === "table" ||
        c.display === "grid" ||
        (v >= o && s[ac] === "none") ||
        (d && s[ac] === "none" && v + f > o))
      ? "vertical"
      : "horizontal";
  },
  f$ = function (r, t, s) {
    var o = s ? r.left : r.top,
      l = s ? r.right : r.bottom,
      d = s ? r.width : r.height,
      c = s ? t.left : t.top,
      m = s ? t.right : t.bottom,
      v = s ? t.width : t.height;
    return o === c || l === m || o + d / 2 === c + v / 2;
  },
  p$ = function (r, t) {
    var s;
    return (
      ji.some(function (o) {
        var l = o[Lt].options.emptyInsertThreshold;
        if (!(!l || al(o))) {
          var d = it(o),
            c = r >= d.left - l && r <= d.right + l,
            m = t >= d.top - l && t <= d.bottom + l;
          if (c && m) return (s = o);
        }
      }),
      s
    );
  },
  Lc = function (r) {
    function t(l, d) {
      return function (c, m, v, f) {
        var b =
          c.options.group.name &&
          m.options.group.name &&
          c.options.group.name === m.options.group.name;
        if (l == null && (d || b)) return !0;
        if (l == null || l === !1) return !1;
        if (d && l === "clone") return l;
        if (typeof l == "function") return t(l(c, m, v, f), d)(c, m, v, f);
        var I = (d ? c : m).options.group.name;
        return (
          l === !0 ||
          (typeof l == "string" && l === I) ||
          (l.join && l.indexOf(I) > -1)
        );
      };
    }
    var s = {},
      o = r.group;
    (!o || Ci(o) != "object") && (o = { name: o }),
      (s.name = o.name),
      (s.checkPull = t(o.pull, !0)),
      (s.checkPut = t(o.put)),
      (s.revertClone = o.revertClone),
      (r.group = s);
  },
  Nc = function () {
    !Pc && me && ue(me, "display", "none");
  },
  Mc = function () {
    !Pc && me && ue(me, "display", "");
  };
Ki &&
  document.addEventListener(
    "click",
    function (a) {
      if (Bi)
        return (
          a.preventDefault(),
          a.stopPropagation && a.stopPropagation(),
          a.stopImmediatePropagation && a.stopImmediatePropagation(),
          (Bi = !1),
          !1
        );
    },
    !0
  );
var ir = function (r) {
    if (z) {
      r = r.touches ? r.touches[0] : r;
      var t = p$(r.clientX, r.clientY);
      if (t) {
        var s = {};
        for (var o in r) r.hasOwnProperty(o) && (s[o] = r[o]);
        (s.target = s.rootEl = t),
          (s.preventDefault = void 0),
          (s.stopPropagation = void 0),
          t[Lt]._onDragOver(s);
      }
    }
  },
  g$ = function (r) {
    z && z.parentNode[Lt]._isOutsideThisEl(r.target);
  };
function de(a, r) {
  if (!(a && a.nodeType && a.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(a)
    );
  (this.el = a), (this.options = r = Sn({}, r)), (a[Lt] = this);
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(a.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return Rc(a, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (d, c) {
      d.setData("Text", c.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: de.supportPointer !== !1 && "PointerEvent" in window && !ps,
    emptyInsertThreshold: 5,
  };
  Is.initializePlugins(this, a, t);
  for (var s in t) !(s in r) && (r[s] = t[s]);
  Lc(r);
  for (var o in this)
    o.charAt(0) === "_" &&
      typeof this[o] == "function" &&
      (this[o] = this[o].bind(this));
  (this.nativeDraggable = r.forceFallback ? !1 : h$),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    r.supportPointer
      ? Ce(a, "pointerdown", this._onTapStart)
      : (Ce(a, "mousedown", this._onTapStart),
        Ce(a, "touchstart", this._onTapStart)),
    this.nativeDraggable && (Ce(a, "dragover", this), Ce(a, "dragenter", this)),
    ji.push(this.el),
    r.store && r.store.get && this.sort(r.store.get(this) || []),
    Sn(this, o$());
}
de.prototype = {
  constructor: de,
  _isOutsideThisEl: function (r) {
    !this.el.contains(r) && r !== this.el && (Ir = null);
  },
  _getDirection: function (r, t) {
    return typeof this.options.direction == "function"
      ? this.options.direction.call(this, r, t, z)
      : this.options.direction;
  },
  _onTapStart: function (r) {
    if (!!r.cancelable) {
      var t = this,
        s = this.el,
        o = this.options,
        l = o.preventOnFilter,
        d = r.type,
        c =
          (r.touches && r.touches[0]) ||
          (r.pointerType && r.pointerType === "touch" && r),
        m = (c || r).target,
        v =
          (r.target.shadowRoot &&
            ((r.path && r.path[0]) ||
              (r.composedPath && r.composedPath()[0]))) ||
          m,
        f = o.filter;
      if (
        (k$(s),
        !z &&
          !(
            (/mousedown|pointerdown/.test(d) && r.button !== 0) ||
            o.disabled
          ) &&
          !v.isContentEditable &&
          !(
            !this.nativeDraggable &&
            ps &&
            m &&
            m.tagName.toUpperCase() === "SELECT"
          ) &&
          ((m = on(m, o.draggable, s, !1)), !(m && m.animated) && Di !== m))
      ) {
        if (((Lr = Gt(m)), (ms = Gt(m, o.draggable)), typeof f == "function")) {
          if (f.call(this, r, m, this)) {
            bt({
              sortable: t,
              rootEl: v,
              name: "filter",
              targetEl: m,
              toEl: s,
              fromEl: s,
            }),
              St("filter", t, { evt: r }),
              l && r.cancelable && r.preventDefault();
            return;
          }
        } else if (
          f &&
          ((f = f.split(",").some(function (b) {
            if (((b = on(v, b.trim(), s, !1)), b))
              return (
                bt({
                  sortable: t,
                  rootEl: b,
                  name: "filter",
                  targetEl: m,
                  fromEl: s,
                  toEl: s,
                }),
                St("filter", t, { evt: r }),
                !0
              );
          })),
          f)
        ) {
          l && r.cancelable && r.preventDefault();
          return;
        }
        (o.handle && !on(v, o.handle, s, !1)) ||
          this._prepareDragStart(r, c, m);
      }
    }
  },
  _prepareDragStart: function (r, t, s) {
    var o = this,
      l = o.el,
      d = o.options,
      c = l.ownerDocument,
      m;
    if (s && !z && s.parentNode === l) {
      var v = it(s);
      if (
        ((ze = l),
        (z = s),
        (Xe = z.parentNode),
        (ar = z.nextSibling),
        (Di = s),
        (Ti = d.group),
        (de.dragged = z),
        (sr = {
          target: z,
          clientX: (t || r).clientX,
          clientY: (t || r).clientY,
        }),
        (sc = sr.clientX - v.left),
        (ic = sr.clientY - v.top),
        (this._lastX = (t || r).clientX),
        (this._lastY = (t || r).clientY),
        (z.style["will-change"] = "all"),
        (m = function () {
          if ((St("delayEnded", o, { evt: r }), de.eventCanceled)) {
            o._onDrop();
            return;
          }
          o._disableDelayedDragEvents(),
            !ec && o.nativeDraggable && (z.draggable = !0),
            o._triggerDragStart(r, t),
            bt({ sortable: o, name: "choose", originalEvent: r }),
            Pt(z, d.chosenClass, !0);
        }),
        d.ignore.split(",").forEach(function (f) {
          Ac(z, f.trim(), Oo);
        }),
        Ce(c, "dragover", ir),
        Ce(c, "mousemove", ir),
        Ce(c, "touchmove", ir),
        Ce(c, "mouseup", o._onDrop),
        Ce(c, "touchend", o._onDrop),
        Ce(c, "touchcancel", o._onDrop),
        ec &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (z.draggable = !0)),
        St("delayStart", this, { evt: r }),
        d.delay &&
          (!d.delayOnTouchOnly || t) &&
          (!this.nativeDraggable || !(As || An)))
      ) {
        if (de.eventCanceled) {
          this._onDrop();
          return;
        }
        Ce(c, "mouseup", o._disableDelayedDrag),
          Ce(c, "touchend", o._disableDelayedDrag),
          Ce(c, "touchcancel", o._disableDelayedDrag),
          Ce(c, "mousemove", o._delayedDragTouchMoveHandler),
          Ce(c, "touchmove", o._delayedDragTouchMoveHandler),
          d.supportPointer &&
            Ce(c, "pointermove", o._delayedDragTouchMoveHandler),
          (o._dragStartTimer = setTimeout(m, d.delay));
      } else m();
    }
  },
  _delayedDragTouchMoveHandler: function (r) {
    var t = r.touches ? r.touches[0] : r;
    Math.max(
      Math.abs(t.clientX - this._lastX),
      Math.abs(t.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    z && Oo(z),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var r = this.el.ownerDocument;
    Ee(r, "mouseup", this._disableDelayedDrag),
      Ee(r, "touchend", this._disableDelayedDrag),
      Ee(r, "touchcancel", this._disableDelayedDrag),
      Ee(r, "mousemove", this._delayedDragTouchMoveHandler),
      Ee(r, "touchmove", this._delayedDragTouchMoveHandler),
      Ee(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (r, t) {
    (t = t || (r.pointerType == "touch" && r)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? Ce(document, "pointermove", this._onTouchMove)
          : t
          ? Ce(document, "touchmove", this._onTouchMove)
          : Ce(document, "mousemove", this._onTouchMove)
        : (Ce(z, "dragend", this), Ce(ze, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Ri(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (r, t) {
    if (((Pr = !1), ze && z)) {
      St("dragStarted", this, { evt: t }),
        this.nativeDraggable && Ce(document, "dragover", g$);
      var s = this.options;
      !r && Pt(z, s.dragClass, !1),
        Pt(z, s.ghostClass, !0),
        (de.active = this),
        r && this._appendGhost(),
        bt({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (en) {
      (this._lastX = en.clientX), (this._lastY = en.clientY), Nc();
      for (
        var r = document.elementFromPoint(en.clientX, en.clientY), t = r;
        r &&
        r.shadowRoot &&
        ((r = r.shadowRoot.elementFromPoint(en.clientX, en.clientY)), r !== t);

      )
        t = r;
      if ((z.parentNode[Lt]._isOutsideThisEl(r), t))
        do {
          if (t[Lt]) {
            var s = void 0;
            if (
              ((s = t[Lt]._onDragOver({
                clientX: en.clientX,
                clientY: en.clientY,
                target: r,
                rootEl: t,
              })),
              s && !this.options.dragoverBubble)
            )
              break;
          }
          r = t;
        } while ((t = t.parentNode));
      Mc();
    }
  },
  _onTouchMove: function (r) {
    if (sr) {
      var t = this.options,
        s = t.fallbackTolerance,
        o = t.fallbackOffset,
        l = r.touches ? r.touches[0] : r,
        d = me && Mr(me, !0),
        c = me && d && d.a,
        m = me && d && d.d,
        v = Ai && pt && rc(pt),
        f =
          (l.clientX - sr.clientX + o.x) / (c || 1) +
          (v ? v[0] - To[0] : 0) / (c || 1),
        b =
          (l.clientY - sr.clientY + o.y) / (m || 1) +
          (v ? v[1] - To[1] : 0) / (m || 1);
      if (!de.active && !Pr) {
        if (
          s &&
          Math.max(
            Math.abs(l.clientX - this._lastX),
            Math.abs(l.clientY - this._lastY)
          ) < s
        )
          return;
        this._onDragStart(r, !0);
      }
      if (me) {
        d
          ? ((d.e += f - (Eo || 0)), (d.f += b - (So || 0)))
          : (d = { a: 1, b: 0, c: 0, d: 1, e: f, f: b });
        var I = "matrix("
          .concat(d.a, ",")
          .concat(d.b, ",")
          .concat(d.c, ",")
          .concat(d.d, ",")
          .concat(d.e, ",")
          .concat(d.f, ")");
        ue(me, "webkitTransform", I),
          ue(me, "mozTransform", I),
          ue(me, "msTransform", I),
          ue(me, "transform", I),
          (Eo = f),
          (So = b),
          (en = l);
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!me) {
      var r = this.options.fallbackOnBody ? document.body : ze,
        t = it(z, !0, Ai, !0, r),
        s = this.options;
      if (Ai) {
        for (
          pt = r;
          ue(pt, "position") === "static" &&
          ue(pt, "transform") === "none" &&
          pt !== document;

        )
          pt = pt.parentNode;
        pt !== document.body && pt !== document.documentElement
          ? (pt === document && (pt = dn()),
            (t.top += pt.scrollTop),
            (t.left += pt.scrollLeft))
          : (pt = dn()),
          (To = rc(pt));
      }
      (me = z.cloneNode(!0)),
        Pt(me, s.ghostClass, !1),
        Pt(me, s.fallbackClass, !0),
        Pt(me, s.dragClass, !0),
        ue(me, "transition", ""),
        ue(me, "transform", ""),
        ue(me, "box-sizing", "border-box"),
        ue(me, "margin", 0),
        ue(me, "top", t.top),
        ue(me, "left", t.left),
        ue(me, "width", t.width),
        ue(me, "height", t.height),
        ue(me, "opacity", "0.8"),
        ue(me, "position", Ai ? "absolute" : "fixed"),
        ue(me, "zIndex", "100000"),
        ue(me, "pointerEvents", "none"),
        (de.ghost = me),
        r.appendChild(me),
        ue(
          me,
          "transform-origin",
          (sc / parseInt(me.style.width)) * 100 +
            "% " +
            (ic / parseInt(me.style.height)) * 100 +
            "%"
        );
    }
  },
  _onDragStart: function (r, t) {
    var s = this,
      o = r.dataTransfer,
      l = s.options;
    if ((St("dragStart", this, { evt: r }), de.eventCanceled)) {
      this._onDrop();
      return;
    }
    St("setupClone", this),
      de.eventCanceled ||
        ((Ke = Dc(z)),
        (Ke.draggable = !1),
        (Ke.style["will-change"] = ""),
        this._hideClone(),
        Pt(Ke, this.options.chosenClass, !1),
        (de.clone = Ke)),
      (s.cloneId = Ri(function () {
        St("clone", s),
          !de.eventCanceled &&
            (s.options.removeCloneOnHide || ze.insertBefore(Ke, z),
            s._hideClone(),
            bt({ sortable: s, name: "clone" }));
      })),
      !t && Pt(z, l.dragClass, !0),
      t
        ? ((Bi = !0), (s._loopId = setInterval(s._emulateDragOver, 50)))
        : (Ee(document, "mouseup", s._onDrop),
          Ee(document, "touchend", s._onDrop),
          Ee(document, "touchcancel", s._onDrop),
          o &&
            ((o.effectAllowed = "move"), l.setData && l.setData.call(s, o, z)),
          Ce(document, "drop", s),
          ue(z, "transform", "translateZ(0)")),
      (Pr = !0),
      (s._dragStartId = Ri(s._dragStarted.bind(s, t, r))),
      Ce(document, "selectstart", s),
      (ds = !0),
      ps && ue(document.body, "user-select", "none");
  },
  _onDragOver: function (r) {
    var t = this.el,
      s = r.target,
      o,
      l,
      d,
      c = this.options,
      m = c.group,
      v = de.active,
      f = Ti === m,
      b = c.sort,
      I = dt || v,
      U,
      j = this,
      N = !1;
    if (zo) return;
    function F(Te, Ae) {
      St(
        Te,
        j,
        hn(
          {
            evt: r,
            isOwner: f,
            axis: U ? "vertical" : "horizontal",
            revert: d,
            dragRect: o,
            targetRect: l,
            canSort: b,
            fromSortable: I,
            target: s,
            completed: K,
            onMove: function (nt, Vn) {
              return Ii(ze, t, z, o, nt, it(nt), r, Vn);
            },
            changed: ee,
          },
          Ae
        )
      );
    }
    function X() {
      F("dragOverAnimationCapture"),
        j.captureAnimationState(),
        j !== I && I.captureAnimationState();
    }
    function K(Te) {
      return (
        F("dragOverCompleted", { insertion: Te }),
        Te &&
          (f ? v._hideClone() : v._showClone(j),
          j !== I &&
            (Pt(z, dt ? dt.options.ghostClass : v.options.ghostClass, !1),
            Pt(z, c.ghostClass, !0)),
          dt !== j && j !== de.active
            ? (dt = j)
            : j === de.active && dt && (dt = null),
          I === j && (j._ignoreWhileAnimating = s),
          j.animateAll(function () {
            F("dragOverAnimationComplete"), (j._ignoreWhileAnimating = null);
          }),
          j !== I && (I.animateAll(), (I._ignoreWhileAnimating = null))),
        ((s === z && !z.animated) || (s === t && !s.animated)) && (Ir = null),
        !c.dragoverBubble &&
          !r.rootEl &&
          s !== document &&
          (z.parentNode[Lt]._isOutsideThisEl(r.target), !Te && ir(r)),
        !c.dragoverBubble && r.stopPropagation && r.stopPropagation(),
        (N = !0)
      );
    }
    function ee() {
      (Rt = Gt(z)),
        (zn = Gt(z, c.draggable)),
        bt({
          sortable: j,
          name: "change",
          toEl: t,
          newIndex: Rt,
          newDraggableIndex: zn,
          originalEvent: r,
        });
    }
    if (
      (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(),
      (s = on(s, c.draggable, t, !0)),
      F("dragOver"),
      de.eventCanceled)
    )
      return N;
    if (
      z.contains(r.target) ||
      (s.animated && s.animatingX && s.animatingY) ||
      j._ignoreWhileAnimating === s
    )
      return K(!1);
    if (
      ((Bi = !1),
      v &&
        !c.disabled &&
        (f
          ? b || (d = Xe !== ze)
          : dt === this ||
            ((this.lastPutMode = Ti.checkPull(this, v, z, r)) &&
              m.checkPut(this, v, z, r))))
    ) {
      if (
        ((U = this._getDirection(r, s) === "vertical"),
        (o = it(z)),
        F("dragOverValid"),
        de.eventCanceled)
      )
        return N;
      if (d)
        return (
          (Xe = ze),
          X(),
          this._hideClone(),
          F("revert"),
          de.eventCanceled || (ar ? ze.insertBefore(z, ar) : ze.appendChild(z)),
          K(!0)
        );
      var re = al(t, c.draggable);
      if (!re || (b$(r, U, this) && !re.animated)) {
        if (re === z) return K(!1);
        if (
          (re && t === r.target && (s = re),
          s && (l = it(s)),
          Ii(ze, t, z, o, s, l, r, !!s) !== !1)
        )
          return X(), t.appendChild(z), (Xe = t), ee(), K(!0);
      } else if (re && _$(r, U, this)) {
        var ce = Br(t, 0, c, !0);
        if (ce === z) return K(!1);
        if (((s = ce), (l = it(s)), Ii(ze, t, z, o, s, l, r, !1) !== !1))
          return X(), t.insertBefore(z, ce), (Xe = t), ee(), K(!0);
      } else if (s.parentNode === t) {
        l = it(s);
        var G = 0,
          se,
          D = z.parentNode !== t,
          H = !f$(
            (z.animated && z.toRect) || o,
            (s.animated && s.toRect) || l,
            U
          ),
          We = U ? "top" : "left",
          ie = nc(s, "top", "top") || nc(z, "top", "top"),
          Oe = ie ? ie.scrollTop : void 0;
        Ir !== s && ((se = l[We]), (_s = !1), (Oi = (!H && c.invertSwap) || D)),
          (G = y$(
            r,
            s,
            l,
            U,
            H ? 1 : c.swapThreshold,
            c.invertedSwapThreshold == null
              ? c.swapThreshold
              : c.invertedSwapThreshold,
            Oi,
            Ir === s
          ));
        var ne;
        if (G !== 0) {
          var T = Gt(z);
          do (T -= G), (ne = Xe.children[T]);
          while (ne && (ue(ne, "display") === "none" || ne === me));
        }
        if (G === 0 || ne === s) return K(!1);
        (Ir = s), (vs = G);
        var B = s.nextElementSibling,
          te = !1;
        te = G === 1;
        var Re = Ii(ze, t, z, o, s, l, r, te);
        if (Re !== !1)
          return (
            (Re === 1 || Re === -1) && (te = Re === 1),
            (zo = !0),
            setTimeout(v$, 30),
            X(),
            te && !B
              ? t.appendChild(z)
              : s.parentNode.insertBefore(z, te ? B : s),
            ie && Cc(ie, 0, Oe - ie.scrollTop),
            (Xe = z.parentNode),
            se !== void 0 && !Oi && (Pi = Math.abs(se - it(s)[We])),
            ee(),
            K(!0)
          );
      }
      if (t.contains(z)) return K(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    Ee(document, "mousemove", this._onTouchMove),
      Ee(document, "touchmove", this._onTouchMove),
      Ee(document, "pointermove", this._onTouchMove),
      Ee(document, "dragover", ir),
      Ee(document, "mousemove", ir),
      Ee(document, "touchmove", ir);
  },
  _offUpEvents: function () {
    var r = this.el.ownerDocument;
    Ee(r, "mouseup", this._onDrop),
      Ee(r, "touchend", this._onDrop),
      Ee(r, "pointerup", this._onDrop),
      Ee(r, "touchcancel", this._onDrop),
      Ee(document, "selectstart", this);
  },
  _onDrop: function (r) {
    var t = this.el,
      s = this.options;
    if (
      ((Rt = Gt(z)),
      (zn = Gt(z, s.draggable)),
      St("drop", this, { evt: r }),
      (Xe = z && z.parentNode),
      (Rt = Gt(z)),
      (zn = Gt(z, s.draggable)),
      de.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (Pr = !1),
      (Oi = !1),
      (_s = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      Jo(this.cloneId),
      Jo(this._dragStartId),
      this.nativeDraggable &&
        (Ee(document, "drop", this), Ee(t, "dragstart", this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      ps && ue(document.body, "user-select", ""),
      ue(z, "transform", ""),
      r &&
        (ds &&
          (r.cancelable && r.preventDefault(),
          !s.dropBubble && r.stopPropagation()),
        me && me.parentNode && me.parentNode.removeChild(me),
        (ze === Xe || (dt && dt.lastPutMode !== "clone")) &&
          Ke &&
          Ke.parentNode &&
          Ke.parentNode.removeChild(Ke),
        z &&
          (this.nativeDraggable && Ee(z, "dragend", this),
          Oo(z),
          (z.style["will-change"] = ""),
          ds &&
            !Pr &&
            Pt(z, dt ? dt.options.ghostClass : this.options.ghostClass, !1),
          Pt(z, this.options.chosenClass, !1),
          bt({
            sortable: this,
            name: "unchoose",
            toEl: Xe,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: r,
          }),
          ze !== Xe
            ? (Rt >= 0 &&
                (bt({
                  rootEl: Xe,
                  name: "add",
                  toEl: Xe,
                  fromEl: ze,
                  originalEvent: r,
                }),
                bt({
                  sortable: this,
                  name: "remove",
                  toEl: Xe,
                  originalEvent: r,
                }),
                bt({
                  rootEl: Xe,
                  name: "sort",
                  toEl: Xe,
                  fromEl: ze,
                  originalEvent: r,
                }),
                bt({
                  sortable: this,
                  name: "sort",
                  toEl: Xe,
                  originalEvent: r,
                })),
              dt && dt.save())
            : Rt !== Lr &&
              Rt >= 0 &&
              (bt({
                sortable: this,
                name: "update",
                toEl: Xe,
                originalEvent: r,
              }),
              bt({ sortable: this, name: "sort", toEl: Xe, originalEvent: r })),
          de.active &&
            ((Rt == null || Rt === -1) && ((Rt = Lr), (zn = ms)),
            bt({ sortable: this, name: "end", toEl: Xe, originalEvent: r }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    St("nulling", this),
      (ze =
        z =
        Xe =
        me =
        ar =
        Ke =
        Di =
        Jn =
        sr =
        en =
        ds =
        Rt =
        zn =
        Lr =
        ms =
        Ir =
        vs =
        dt =
        Ti =
        de.dragged =
        de.ghost =
        de.clone =
        de.active =
          null),
      Fi.forEach(function (r) {
        r.checked = !0;
      }),
      (Fi.length = Eo = So = 0);
  },
  handleEvent: function (r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        z && (this._onDragOver(r), m$(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (
      var r = [],
        t,
        s = this.el.children,
        o = 0,
        l = s.length,
        d = this.options;
      o < l;
      o++
    )
      (t = s[o]),
        on(t, d.draggable, this.el, !1) &&
          r.push(t.getAttribute(d.dataIdAttr) || w$(t));
    return r;
  },
  sort: function (r, t) {
    var s = {},
      o = this.el;
    this.toArray().forEach(function (l, d) {
      var c = o.children[d];
      on(c, this.options.draggable, o, !1) && (s[l] = c);
    }, this),
      t && this.captureAnimationState(),
      r.forEach(function (l) {
        s[l] && (o.removeChild(s[l]), o.appendChild(s[l]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  closest: function (r, t) {
    return on(r, t || this.options.draggable, this.el, !1);
  },
  option: function (r, t) {
    var s = this.options;
    if (t === void 0) return s[r];
    var o = Is.modifyOption(this, r, t);
    typeof o != "undefined" ? (s[r] = o) : (s[r] = t), r === "group" && Lc(s);
  },
  destroy: function () {
    St("destroy", this);
    var r = this.el;
    (r[Lt] = null),
      Ee(r, "mousedown", this._onTapStart),
      Ee(r, "touchstart", this._onTapStart),
      Ee(r, "pointerdown", this._onTapStart),
      this.nativeDraggable &&
        (Ee(r, "dragover", this), Ee(r, "dragenter", this)),
      Array.prototype.forEach.call(
        r.querySelectorAll("[draggable]"),
        function (t) {
          t.removeAttribute("draggable");
        }
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      ji.splice(ji.indexOf(this.el), 1),
      (this.el = r = null);
  },
  _hideClone: function () {
    if (!Jn) {
      if ((St("hideClone", this), de.eventCanceled)) return;
      ue(Ke, "display", "none"),
        this.options.removeCloneOnHide &&
          Ke.parentNode &&
          Ke.parentNode.removeChild(Ke),
        (Jn = !0);
    }
  },
  _showClone: function (r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Jn) {
      if ((St("showClone", this), de.eventCanceled)) return;
      z.parentNode == ze && !this.options.group.revertClone
        ? ze.insertBefore(Ke, z)
        : ar
        ? ze.insertBefore(Ke, ar)
        : ze.appendChild(Ke),
        this.options.group.revertClone && this.animate(z, Ke),
        ue(Ke, "display", ""),
        (Jn = !1);
    }
  },
};
function m$(a) {
  a.dataTransfer && (a.dataTransfer.dropEffect = "move"),
    a.cancelable && a.preventDefault();
}
function Ii(a, r, t, s, o, l, d, c) {
  var m,
    v = a[Lt],
    f = v.options.onMove,
    b;
  return (
    window.CustomEvent && !An && !As
      ? (m = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
      : ((m = document.createEvent("Event")), m.initEvent("move", !0, !0)),
    (m.to = r),
    (m.from = a),
    (m.dragged = t),
    (m.draggedRect = s),
    (m.related = o || r),
    (m.relatedRect = l || it(r)),
    (m.willInsertAfter = c),
    (m.originalEvent = d),
    a.dispatchEvent(m),
    f && (b = f.call(v, m, d)),
    b
  );
}
function Oo(a) {
  a.draggable = !1;
}
function v$() {
  zo = !1;
}
function _$(a, r, t) {
  var s = it(Br(t.el, 0, t.options, !0)),
    o = 10;
  return r
    ? a.clientX < s.left - o || (a.clientY < s.top && a.clientX < s.right)
    : a.clientY < s.top - o || (a.clientY < s.bottom && a.clientX < s.left);
}
function b$(a, r, t) {
  var s = it(al(t.el, t.options.draggable)),
    o = 10;
  return r
    ? a.clientX > s.right + o ||
        (a.clientX <= s.right && a.clientY > s.bottom && a.clientX >= s.left)
    : (a.clientX > s.right && a.clientY > s.top) ||
        (a.clientX <= s.right && a.clientY > s.bottom + o);
}
function y$(a, r, t, s, o, l, d, c) {
  var m = s ? a.clientY : a.clientX,
    v = s ? t.height : t.width,
    f = s ? t.top : t.left,
    b = s ? t.bottom : t.right,
    I = !1;
  if (!d) {
    if (c && Pi < v * o) {
      if (
        (!_s &&
          (vs === 1 ? m > f + (v * l) / 2 : m < b - (v * l) / 2) &&
          (_s = !0),
        _s)
      )
        I = !0;
      else if (vs === 1 ? m < f + Pi : m > b - Pi) return -vs;
    } else if (m > f + (v * (1 - o)) / 2 && m < b - (v * (1 - o)) / 2)
      return x$(r);
  }
  return (
    (I = I || d),
    I && (m < f + (v * l) / 2 || m > b - (v * l) / 2)
      ? m > f + v / 2
        ? 1
        : -1
      : 0
  );
}
function x$(a) {
  return Gt(z) < Gt(a) ? 1 : -1;
}
function w$(a) {
  for (
    var r = a.tagName + a.className + a.src + a.href + a.textContent,
      t = r.length,
      s = 0;
    t--;

  )
    s += r.charCodeAt(t);
  return s.toString(36);
}
function k$(a) {
  Fi.length = 0;
  for (var r = a.getElementsByTagName("input"), t = r.length; t--; ) {
    var s = r[t];
    s.checked && Fi.push(s);
  }
}
function Ri(a) {
  return setTimeout(a, 0);
}
function Jo(a) {
  return clearTimeout(a);
}
Ki &&
  Ce(document, "touchmove", function (a) {
    (de.active || Pr) && a.cancelable && a.preventDefault();
  });
de.utils = {
  on: Ce,
  off: Ee,
  css: ue,
  find: Ac,
  is: function (r, t) {
    return !!on(r, t, r, !1);
  },
  extend: i$,
  throttle: Ic,
  closest: on,
  toggleClass: Pt,
  clone: Dc,
  index: Gt,
  nextTick: Ri,
  cancelNextTick: Jo,
  detectDirection: Rc,
  getChild: Br,
};
de.get = function (a) {
  return a[Lt];
};
de.mount = function () {
  for (var a = arguments.length, r = new Array(a), t = 0; t < a; t++)
    r[t] = arguments[t];
  r[0].constructor === Array && (r = r[0]),
    r.forEach(function (s) {
      if (!s.prototype || !s.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
          {}.toString.call(s)
        );
      s.utils && (de.utils = hn(hn({}, de.utils), s.utils)), Is.mount(s);
    });
};
de.create = function (a, r) {
  return new de(a, r);
};
de.version = t$;
var et = [],
  cs,
  Go,
  qo = !1,
  Ao,
  Io,
  Wi,
  hs;
function $$() {
  function a() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0,
    };
    for (var r in this)
      r.charAt(0) === "_" &&
        typeof this[r] == "function" &&
        (this[r] = this[r].bind(this));
  }
  return (
    (a.prototype = {
      dragStarted: function (t) {
        var s = t.originalEvent;
        this.sortable.nativeDraggable
          ? Ce(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
          ? Ce(document, "pointermove", this._handleFallbackAutoScroll)
          : s.touches
          ? Ce(document, "touchmove", this._handleFallbackAutoScroll)
          : Ce(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (t) {
        var s = t.originalEvent;
        !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? Ee(document, "dragover", this._handleAutoScroll)
          : (Ee(document, "pointermove", this._handleFallbackAutoScroll),
            Ee(document, "touchmove", this._handleFallbackAutoScroll),
            Ee(document, "mousemove", this._handleFallbackAutoScroll)),
          oc(),
          Li(),
          a$();
      },
      nulling: function () {
        (Wi = Go = cs = qo = hs = Ao = Io = null), (et.length = 0);
      },
      _handleFallbackAutoScroll: function (t) {
        this._handleAutoScroll(t, !0);
      },
      _handleAutoScroll: function (t, s) {
        var o = this,
          l = (t.touches ? t.touches[0] : t).clientX,
          d = (t.touches ? t.touches[0] : t).clientY,
          c = document.elementFromPoint(l, d);
        if (
          ((Wi = t),
          s || this.options.forceAutoScrollFallback || As || An || ps)
        ) {
          Co(t, this.options, c, s);
          var m = qn(c, !0);
          qo &&
            (!hs || l !== Ao || d !== Io) &&
            (hs && oc(),
            (hs = setInterval(function () {
              var v = qn(document.elementFromPoint(l, d), !0);
              v !== m && ((m = v), Li()), Co(t, o.options, v, s);
            }, 10)),
            (Ao = l),
            (Io = d));
        } else {
          if (!this.options.bubbleScroll || qn(c, !0) === dn()) {
            Li();
            return;
          }
          Co(t, this.options, qn(c, !1), !1);
        }
      },
    }),
    Sn(a, { pluginName: "scroll", initializeByDefault: !0 })
  );
}
function Li() {
  et.forEach(function (a) {
    clearInterval(a.pid);
  }),
    (et = []);
}
function oc() {
  clearInterval(hs);
}
var Co = Ic(function (a, r, t, s) {
    if (!!r.scroll) {
      var o = (a.touches ? a.touches[0] : a).clientX,
        l = (a.touches ? a.touches[0] : a).clientY,
        d = r.scrollSensitivity,
        c = r.scrollSpeed,
        m = dn(),
        v = !1,
        f;
      Go !== t &&
        ((Go = t),
        Li(),
        (cs = r.scroll),
        (f = r.scrollFn),
        cs === !0 && (cs = qn(t, !0)));
      var b = 0,
        I = cs;
      do {
        var U = I,
          j = it(U),
          N = j.top,
          F = j.bottom,
          X = j.left,
          K = j.right,
          ee = j.width,
          re = j.height,
          ce = void 0,
          G = void 0,
          se = U.scrollWidth,
          D = U.scrollHeight,
          H = ue(U),
          We = U.scrollLeft,
          ie = U.scrollTop;
        U === m
          ? ((ce =
              ee < se &&
              (H.overflowX === "auto" ||
                H.overflowX === "scroll" ||
                H.overflowX === "visible")),
            (G =
              re < D &&
              (H.overflowY === "auto" ||
                H.overflowY === "scroll" ||
                H.overflowY === "visible")))
          : ((ce =
              ee < se && (H.overflowX === "auto" || H.overflowX === "scroll")),
            (G =
              re < D && (H.overflowY === "auto" || H.overflowY === "scroll")));
        var Oe =
            ce &&
            (Math.abs(K - o) <= d && We + ee < se) -
              (Math.abs(X - o) <= d && !!We),
          ne =
            G &&
            (Math.abs(F - l) <= d && ie + re < D) -
              (Math.abs(N - l) <= d && !!ie);
        if (!et[b]) for (var T = 0; T <= b; T++) et[T] || (et[T] = {});
        (et[b].vx != Oe || et[b].vy != ne || et[b].el !== U) &&
          ((et[b].el = U),
          (et[b].vx = Oe),
          (et[b].vy = ne),
          clearInterval(et[b].pid),
          (Oe != 0 || ne != 0) &&
            ((v = !0),
            (et[b].pid = setInterval(
              function () {
                s && this.layer === 0 && de.active._onTouchMove(Wi);
                var B = et[this.layer].vy ? et[this.layer].vy * c : 0,
                  te = et[this.layer].vx ? et[this.layer].vx * c : 0;
                (typeof f == "function" &&
                  f.call(
                    de.dragged.parentNode[Lt],
                    te,
                    B,
                    a,
                    Wi,
                    et[this.layer].el
                  ) !== "continue") ||
                  Cc(et[this.layer].el, te, B);
              }.bind({ layer: b }),
              24
            )))),
          b++;
      } while (r.bubbleScroll && I !== m && (I = qn(I, !1)));
      qo = v;
    }
  }, 30),
  Uc = function (r) {
    var t = r.originalEvent,
      s = r.putSortable,
      o = r.dragEl,
      l = r.activeSortable,
      d = r.dispatchSortableEvent,
      c = r.hideGhostForTarget,
      m = r.unhideGhostForTarget;
    if (!!t) {
      var v = s || l;
      c();
      var f =
          t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        b = document.elementFromPoint(f.clientX, f.clientY);
      m(),
        v &&
          !v.el.contains(b) &&
          (d("spill"), this.onSpill({ dragEl: o, putSortable: s }));
    }
  };
function ol() {}
ol.prototype = {
  startIndex: null,
  dragStart: function (r) {
    var t = r.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (r) {
    var t = r.dragEl,
      s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Br(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      s && s.animateAll();
  },
  drop: Uc,
};
Sn(ol, { pluginName: "revertOnSpill" });
function ll() {}
ll.prototype = {
  onSpill: function (r) {
    var t = r.dragEl,
      s = r.putSortable,
      o = s || this.sortable;
    o.captureAnimationState(),
      t.parentNode && t.parentNode.removeChild(t),
      o.animateAll();
  },
  drop: Uc,
};
Sn(ll, { pluginName: "removeOnSpill" });
de.mount(new $$());
de.mount(ll, ol);
function E$() {
  return typeof window != "undefined" ? window.console : global.console;
}
const S$ = E$();
function T$(a) {
  const r = Object.create(null);
  return function (s) {
    return r[s] || (r[s] = a(s));
  };
}
const O$ = /-(\w)/g,
  lc = T$((a) => a.replace(O$, (r, t) => (t ? t.toUpperCase() : "")));
function Do(a) {
  a.parentElement !== null && a.parentElement.removeChild(a);
}
function uc(a, r, t) {
  const s = t === 0 ? a.children[0] : a.children[t - 1].nextSibling;
  a.insertBefore(r, s);
}
function A$(a, r) {
  return Object.values(a).indexOf(r);
}
function I$(a, r, t, s) {
  if (!a) return [];
  const o = Object.values(a),
    l = r.length - s;
  return [...r].map((c, m) => (m >= l ? o.length : o.indexOf(c)));
}
function Bc(a, r) {
  this.$nextTick(() => this.$emit(a.toLowerCase(), r));
}
function C$(a) {
  return (r) => {
    this.realList !== null && this["onDrag" + a](r), Bc.call(this, a, r);
  };
}
function D$(a) {
  return ["transition-group", "TransitionGroup"].includes(a);
}
function P$(a) {
  if (!a || a.length !== 1) return !1;
  const [{ type: r }] = a;
  return r ? D$(r.name) : !1;
}
function R$(a, r) {
  return r ? Tr(Tr({}, r.props), r.attrs) : a;
}
const Vo = ["Start", "Add", "Remove", "Update", "End"],
  Yo = ["Choose", "Unchoose", "Sort", "Filter", "Clone"],
  L$ = ["Move", ...Vo, ...Yo].map((a) => "on" + a);
let Po = null;
const N$ = {
    options: Object,
    list: { type: Array, required: !1, default: null },
    noTransitionOnDrag: { type: Boolean, default: !1 },
    clone: { type: Function, default: (a) => a },
    tag: { type: String, default: "div" },
    move: { type: Function, default: null },
    componentData: { type: Object, required: !1, default: null },
    component: { type: String, default: null },
    modelValue: { type: Array, required: !1, default: null },
  },
  ul = he({
    name: "VueDraggableNext",
    inheritAttrs: !1,
    emits: [
      "update:modelValue",
      "move",
      "change",
      ...Vo.map((a) => a.toLowerCase()),
      ...Yo.map((a) => a.toLowerCase()),
    ],
    props: N$,
    data() {
      return {
        transitionMode: !1,
        noneFunctionalComponentMode: !1,
        headerOffset: 0,
        footerOffset: 0,
        _sortable: {},
        visibleIndexes: [],
        context: {},
      };
    },
    render() {
      const a = this.$slots.default ? this.$slots.default() : null,
        r = R$(this.$attrs, this.componentData);
      return a
        ? ((this.transitionMode = P$(a)), Jd(this.getTag(), r, a))
        : Jd(this.getTag(), r, []);
    },
    created() {
      this.list !== null &&
        this.modelValue !== null &&
        S$.error("list props are mutually exclusive! Please set one.");
    },
    mounted() {
      const a = {};
      Vo.forEach((o) => {
        a["on" + o] = C$.call(this, o);
      }),
        Yo.forEach((o) => {
          a["on" + o] = Bc.bind(this, o);
        });
      const r = Object.keys(this.$attrs).reduce(
          (o, l) => ((o[lc(l)] = this.$attrs[l]), o),
          {}
        ),
        t = Object.assign({}, r, a, {
          onMove: (o, l) => this.onDragMove(o, l),
        });
      !("draggable" in t) && (t.draggable = ">*");
      const s = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
      (this._sortable = new de(s, t)),
        (s.__draggable_component__ = this),
        this.computeIndexes();
    },
    beforeUnmount() {
      try {
        this._sortable !== void 0 && this._sortable.destroy();
      } catch {}
    },
    computed: {
      realList() {
        return this.list ? this.list : this.modelValue;
      },
    },
    watch: {
      $attrs: {
        handler(a) {
          this.updateOptions(a);
        },
        deep: !0,
      },
      realList() {
        this.computeIndexes();
      },
    },
    methods: {
      getTag() {
        return this.component ? Tn(this.component) : this.tag;
      },
      updateOptions(a) {
        for (var r in a) {
          const t = lc(r);
          L$.indexOf(t) === -1 && this._sortable.option(t, a[r]);
        }
      },
      getChildrenNodes() {
        return this.$el.children;
      },
      computeIndexes() {
        this.$nextTick(() => {
          this.visibleIndexes = I$(
            this.getChildrenNodes(),
            this.$el.children,
            this.transitionMode,
            this.footerOffset
          );
        });
      },
      getUnderlyingVm(a) {
        const r = A$(this.getChildrenNodes() || [], a);
        if (r === -1) return null;
        const t = this.realList[r];
        return { index: r, element: t };
      },
      emitChanges(a) {
        this.$nextTick(() => {
          this.$emit("change", a);
        });
      },
      alterList(a) {
        if (this.list) {
          a(this.list);
          return;
        }
        const r = [...this.modelValue];
        a(r), this.$emit("update:modelValue", r);
      },
      spliceList() {
        const a = (r) => r.splice(...arguments);
        this.alterList(a);
      },
      updatePosition(a, r) {
        const t = (s) => s.splice(r, 0, s.splice(a, 1)[0]);
        this.alterList(t);
      },
      getVmIndex(a) {
        const r = this.visibleIndexes,
          t = r.length;
        return a > t - 1 ? t : r[a];
      },
      getComponent() {
        return this.$slots.default
          ? this.$slots.default()[0].componentInstance
          : null;
      },
      resetTransitionData(a) {
        if (!this.noTransitionOnDrag || !this.transitionMode) return;
        var r = this.getChildrenNodes();
        r[a].data = null;
        const t = this.getComponent();
        (t.children = []), (t.kept = void 0);
      },
      onDragStart(a) {
        (this.context = this.getUnderlyingVm(a.item)),
          this.context &&
            ((a.item._underlying_vm_ = this.clone(this.context.element)),
            (Po = a.item));
      },
      onDragAdd(a) {
        const r = a.item._underlying_vm_;
        if (r === void 0) return;
        Do(a.item);
        const t = this.getVmIndex(a.newIndex);
        this.spliceList(t, 0, r), this.computeIndexes();
        const s = { element: r, newIndex: t };
        this.emitChanges({ added: s });
      },
      onDragRemove(a) {
        if ((uc(this.$el, a.item, a.oldIndex), a.pullMode === "clone")) {
          Do(a.clone);
          return;
        }
        if (!this.context) return;
        const r = this.context.index;
        this.spliceList(r, 1);
        const t = { element: this.context.element, oldIndex: r };
        this.resetTransitionData(r), this.emitChanges({ removed: t });
      },
      onDragUpdate(a) {
        Do(a.item), uc(a.from, a.item, a.oldIndex);
        const r = this.context.index,
          t = this.getVmIndex(a.newIndex);
        this.updatePosition(r, t);
        const s = { element: this.context.element, oldIndex: r, newIndex: t };
        this.emitChanges({ moved: s });
      },
      updateProperty(a, r) {
        a.hasOwnProperty(r) && (a[r] += this.headerOffset);
      },
      onDragMove(a, r) {
        const t = this.move;
        if (!t || !this.realList) return !0;
        const s = this.getRelatedContextFromMoveEvent(a),
          o = this.context,
          l = this.computeFutureIndex(s, a);
        Object.assign(o, { futureIndex: l });
        const d = Object.assign({}, a, {
          relatedContext: s,
          draggedContext: o,
        });
        return t(d, r);
      },
      onDragEnd() {
        this.computeIndexes(), (Po = null);
      },
      getTrargetedComponent(a) {
        return a.__draggable_component__;
      },
      getRelatedContextFromMoveEvent({ to: a, related: r }) {
        const t = this.getTrargetedComponent(a);
        if (!t) return { component: t };
        const s = t.realList,
          o = { list: s, component: t };
        if (a !== r && s && t.getUnderlyingVm) {
          const l = t.getUnderlyingVm(r);
          if (l) return Object.assign(l, o);
        }
        return o;
      },
      computeFutureIndex(a, r) {
        const t = [...r.to.children].filter((d) => d.style.display !== "none");
        if (t.length === 0) return 0;
        const s = t.indexOf(r.related),
          o = a.component.getVmIndex(s);
        return t.indexOf(Po) !== -1 || !r.willInsertAfter ? o : o + 1;
      },
    },
  });
var jc = "/assets/short text.3302042c.svg",
  Fc = "/assets/long text.cfd565aa.svg",
  Wc = "/assets/boolean.f2fe5170.svg",
  Hc = "/assets/enum.8716cc0d.svg",
  zc = "/assets/date.075be135.svg",
  M$ = "/assets/join.b26d4df1.svg",
  Jc = "/assets/short text-dark.21175bca.svg",
  Gc = "/assets/long text-dark.f659b35a.svg",
  qc = "/assets/boolean-dark.e3e90fb0.svg",
  Vc = "/assets/enum-dark.57d78c52.svg",
  Yc = "/assets/date-dark.0916d724.svg",
  U$ = "/assets/join-dark.0a932687.svg";
const B$ = {},
  j$ = {
    class:
      "h-max uppercase font-bold text-2xs text-primary dark:text-primary-dark border border-tertiary dark:border-tertiary-dark rounded px-1 py-0.5",
  };
function F$(a, r) {
  return k(), A("span", j$, "Alpha");
}
var dl = On(B$, [["render", F$]]);
const In = (a) => (Xo("data-v-4a3b7d9a"), (a = a()), Ko(), a),
  W$ = {
    class: "rounded-lg border border-[#EAEAEA] dark:border-[#2F2F2F] shadow",
  },
  H$ = {
    class:
      "table-fixed w-full transition text-primary dark:text-primary-dark overflow-x-auto",
  },
  z$ = In(() =>
    p(
      "colgroup",
      null,
      [
        p("col", { class: "w-10" }),
        p("col", { width: "30%" }),
        p("col", { width: "70%" }),
        p("col", { class: "w-32" }),
        p("col", { class: "w-14" }),
      ],
      -1
    )
  ),
  J$ = { class: "drop-shadow dark:border-b-2 dark:border-b-neutral-750" },
  G$ = { class: "transition" },
  q$ = In(() =>
    p(
      "th",
      {
        class:
          "hidden sm:table-cell px-1 py-2 text-center text-xs font-medium uppercase tracking-wider w-[1rem] rounded-tl-lg bg-table-hover dark:bg-table-hover-dark",
      },
      null,
      -1
    )
  ),
  V$ = { class: "lg:pl-2" },
  Y$ = In(() =>
    p(
      "th",
      { class: "rounded-tr-lg bg-table-hover dark:bg-table-hover-dark" },
      null,
      -1
    )
  ),
  X$ = { key: 0 },
  K$ = In(() =>
    p("td", { class: "hidden sm:table-cell w-10 px-2 pl-4 py-1" }, null, -1)
  ),
  Q$ = ["colspan"],
  Z$ = In(() =>
    p(
      "div",
      { class: "py-1 text-sm text-tertiary dark:text-tertiary-dark" },
      " This page has no attributes. Add one! ",
      -1
    )
  ),
  e2 = [Z$],
  t2 = ["onMouseup"],
  n2 = { class: "flex items-center space-x-3 pl-1" },
  r2 = { key: 0, class: "w-full" },
  s2 = ["title"],
  i2 = ["value", "id", "onInput"],
  a2 = { key: 1, class: "w-full" },
  o2 = {
    key: 2,
    class:
      "text-sm font-normal border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 rounded mt-0.5 flex items-center gap-2 px-1 py-0.5",
  },
  l2 = ["src"],
  u2 = Q(" Join "),
  d2 = {
    class:
      "text-sm font-normal border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 rounded mt-0.5 flex items-center gap-2 truncate px-1 py-0.5",
  },
  c2 = ["src"],
  h2 = {
    class:
      "text-sm divide-y w-56 h-max divide-neutral-300 dark:divide-neutral-700",
  },
  f2 = {
    class:
      "flex items-center justify-between gap-4 text-primary dark:text-primary-dark px-4 py-3 text-xs font-medium",
  },
  p2 = In(() => p("span", { class: "uppercase" }, "Type", -1)),
  g2 = { key: 0, class: "px-4 py-3" },
  m2 = In(() =>
    p(
      "div",
      {
        class:
          "block text-xs text-primary dark:text-primary-dark uppercase font-medium",
      },
      "Options",
      -1
    )
  ),
  v2 = {
    class:
      "mt-3 block w-full sm:text-xs text-primary dark:text-primary-dark flex flex-col gap-1",
  },
  _2 = ["onClick"],
  b2 = { class: "truncate" },
  y2 = {
    key: 0,
    class:
      "py-0.5 rounded flex justify-between items-center relative truncate text-primary dark:text-primary-dark",
  },
  x2 = ["onKeyup"],
  w2 = In(() => p("div", null, "Add Option", -1)),
  k2 = In(() =>
    p(
      "div",
      { class: "text-sm" },
      [
        p(
          "div",
          { class: "px-4 py-2 cursor-pointer hover:bg-neutral-100" },
          "Edit page"
        ),
        p(
          "div",
          {
            class: "px-4 py-2 text-red-500 cursor-pointer hover:bg-neutral-100",
          },
          "Delete page"
        ),
      ],
      -1
    )
  ),
  $2 = he({
    props: {
      headers: { type: Array, default: [] },
      items: { type: Array, default: [] },
      columns: { type: Array, default: [] },
    },
    emits: ["viewItem", "update:items", "update:attribute"],
    setup(a, { emit: r }) {
      const t = a,
        s = Ne(() => ({
          TEXT: c.darkMode ? Jc : jc,
          LONGTEXT: c.darkMode ? Gc : Fc,
          BOOL: c.darkMode ? qc : Wc,
          ENUM: c.darkMode ? Vc : Hc,
          DATE: c.darkMode ? Yc : zc,
          JOIN: c.darkMode ? U$ : M$,
        })),
        o = {
          TEXT: "Text",
          LONGTEXT: "Long text",
          BOOL: "True/false",
          ENUM: "Single select",
          DATE: "Date",
          JOIN: "Join",
        };
      document.addEventListener("click", () => (f.value = ""));
      const l = W(!1),
        d = yt(),
        c = Se();
      Ne(() => c.dashboards.find((K) => K.id === d.params.dashboardId) || {}),
        $n(t.items, (K) => {
          b.value = JSON.parse(JSON.stringify(K));
        });
      const m = W(""),
        v = W(-1),
        f = W(""),
        b = W(JSON.parse(JSON.stringify(t.items))),
        I = {
          animation: 150,
          group: "description",
          disabled: !1,
          ghostClass: "ghost",
        };
      function U() {
        b.value.forEach((K, ee) => {
          K.order = ee + 1;
        }),
          r("update:items", b.value);
      }
      function j(K, ee, re, ce) {
        K.stopPropagation(),
          ce === Z.Bool || ce === Z.Enum
            ? ((v.value = -1), (f.value = ""))
            : ((v.value = ee),
              (f.value = re),
              setTimeout(
                () => document.querySelector(`input#${re}`).focus(),
                50
              ));
      }
      function N() {
        (l.value = !0),
          setTimeout(() => {
            var K;
            (K = document.getElementById("new-option")) == null || K.focus();
          }, 100);
      }
      function F(K, ee) {
        const re = document.getElementById("new-option").value,
          ce = t.items[K].enumOptions || [];
        ce.push(re),
          r("update:attribute", K, "enumOptions", ce),
          (m.value = ""),
          (l.value = !1);
      }
      function X(K, ee) {
        const re = t.items[K].enumOptions;
        re.splice(ee, 1), r("update:attribute", K, "enumOptions", re);
      }
      return (K, ee) => (
        k(),
        A("div", W$, [
          p("table", H$, [
            z$,
            p("thead", J$, [
              p("tr", G$, [
                q$,
                (k(!0),
                A(
                  qe,
                  null,
                  Ge(
                    a.headers,
                    (re) => (
                      k(),
                      A(
                        "th",
                        {
                          key: re.id,
                          class: $e([
                            "py-2 text-left text-xs font-medium uppercase bg-table-hover dark:bg-table-hover-dark",
                            re.id === "label" ? "" : "w-[25%]",
                          ]),
                        },
                        [p("span", V$, Y(re.label), 1)],
                        2
                      )
                    )
                  ),
                  128
                )),
                Y$,
              ]),
            ]),
            b.value.length === 0
              ? (k(),
                A("tbody", X$, [
                  p("tr", null, [
                    K$,
                    p(
                      "td",
                      { class: "px-2 py-1", colspan: a.headers.length },
                      e2,
                      8,
                      Q$
                    ),
                  ]),
                ]))
              : (k(),
                pe(
                  $(ul),
                  el(
                    {
                      key: 1,
                      class:
                        "list-group divide-y transition divide-neutral-200 dark:divide-neutral-750",
                      tag: "tbody",
                      list: b.value,
                    },
                    I,
                    { onChange: U }
                  ),
                  {
                    default: C(() => [
                      E(
                        Zo,
                        { type: "transition", name: "flip-list" },
                        {
                          default: C(() => [
                            (k(!0),
                            A(
                              qe,
                              null,
                              Ge(
                                b.value,
                                (re, ce) => (
                                  k(),
                                  A(
                                    "tr",
                                    {
                                      class:
                                        "list-group-item group cursor-pointer",
                                      key: ce,
                                    },
                                    [
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "hidden sm:table-cell w-10 px-2 pl-4 py-1 whitespace-nowrap text-sm text-gray-500 text-center cursor-grab bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            ce === b.value.length - 1
                                              ? "rounded-bl-lg"
                                              : "",
                                          ]),
                                        },
                                        [
                                          E($(Qo), {
                                            class: "w-4 text-neutral-300",
                                          }),
                                        ],
                                        2
                                      ),
                                      (k(!0),
                                      A(
                                        qe,
                                        null,
                                        Ge(
                                          a.headers,
                                          (G, se) => (
                                            k(),
                                            A(
                                              "td",
                                              {
                                                key: G.id,
                                                class: $e([
                                                  "px-0 py-1 whitespace-nowrap text-sm group bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                                  [
                                                    se === 0
                                                      ? "font-medium"
                                                      : "",
                                                  ],
                                                ]),
                                                onMouseup: (D) =>
                                                  j(D, ce, G.id, G.type),
                                              },
                                              [
                                                p("div", n2, [
                                                  G.id === "label"
                                                    ? (k(),
                                                      A("div", r2, [
                                                        f.value !== G.id ||
                                                        v.value !== ce
                                                          ? (k(),
                                                            A(
                                                              "div",
                                                              {
                                                                key: 0,
                                                                class:
                                                                  "w-full border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 rounded px-1 py-0.5 truncate block",
                                                                title: re[G.id],
                                                              },
                                                              Y(re[G.id]),
                                                              9,
                                                              s2
                                                            ))
                                                          : be("", !0),
                                                        f.value === G.id &&
                                                        v.value === ce
                                                          ? (k(),
                                                            A(
                                                              "input",
                                                              {
                                                                key: 1,
                                                                type: "text",
                                                                value: re[G.id],
                                                                id: G.id,
                                                                class: $e([
                                                                  "w-full border border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700 px-1 py-0.5 rounded text-sm bg-transparent truncate",
                                                                  se === 0
                                                                    ? "font-medium"
                                                                    : "",
                                                                ]),
                                                                onInput: (D) =>
                                                                  r(
                                                                    "update:attribute",
                                                                    ce,
                                                                    G.id,
                                                                    D.target
                                                                      .value
                                                                  ),
                                                              },
                                                              null,
                                                              42,
                                                              i2
                                                            ))
                                                          : be("", !0),
                                                      ]))
                                                    : G.id === "id"
                                                    ? (k(),
                                                      A("div", a2, [
                                                        E(
                                                          Gn,
                                                          {
                                                            hidden: !0,
                                                            id: G.id,
                                                            static: !0,
                                                            options:
                                                              a.columns.map(
                                                                (D) => ({
                                                                  label: D,
                                                                  value: D,
                                                                })
                                                              ),
                                                            modelValue:
                                                              re[G.id] ||
                                                              a.columns[0],
                                                            "onUpdate:modelValue":
                                                              (D) =>
                                                                r(
                                                                  "update:attribute",
                                                                  ce,
                                                                  G.id,
                                                                  D
                                                                ),
                                                            class: "w-full",
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            "id",
                                                            "options",
                                                            "modelValue",
                                                            "onUpdate:modelValue",
                                                          ]
                                                        ),
                                                      ]))
                                                    : G.id === "type" &&
                                                      re.id.includes("(")
                                                    ? (k(),
                                                      A("div", o2, [
                                                        p(
                                                          "img",
                                                          {
                                                            src: $(s)[
                                                              $(Z).Join
                                                            ],
                                                            class: "w-5",
                                                          },
                                                          null,
                                                          8,
                                                          l2
                                                        ),
                                                        u2,
                                                        E(dl),
                                                      ]))
                                                    : G.id === "type"
                                                    ? (k(),
                                                      pe(
                                                        qt,
                                                        {
                                                          key: 3,
                                                          align: "right",
                                                        },
                                                        {
                                                          button: C(() => [
                                                            p("div", d2, [
                                                              p(
                                                                "img",
                                                                {
                                                                  src: $(s)[
                                                                    re.type
                                                                  ],
                                                                  class: "w-5",
                                                                },
                                                                null,
                                                                8,
                                                                c2
                                                              ),
                                                              Q(
                                                                " " +
                                                                  Y(
                                                                    $(o)[
                                                                      re.type
                                                                    ]
                                                                  ),
                                                                1
                                                              ),
                                                            ]),
                                                          ]),
                                                          default: C(() => [
                                                            p("div", h2, [
                                                              p("div", f2, [
                                                                p2,
                                                                E(
                                                                  Gn,
                                                                  {
                                                                    options:
                                                                      Object.values(
                                                                        $(Z)
                                                                      )
                                                                        .filter(
                                                                          (D) =>
                                                                            D !==
                                                                            "JOIN"
                                                                        )
                                                                        .map(
                                                                          (
                                                                            D
                                                                          ) => ({
                                                                            label:
                                                                              $(
                                                                                o
                                                                              )[
                                                                                D
                                                                              ],
                                                                            value:
                                                                              D,
                                                                            img: $(
                                                                              s
                                                                            )[
                                                                              D
                                                                            ],
                                                                          })
                                                                        ),
                                                                    modelValue:
                                                                      re.type,
                                                                    "onUpdate:modelValue":
                                                                      (D) =>
                                                                        r(
                                                                          "update:attribute",
                                                                          ce,
                                                                          G.id,
                                                                          D
                                                                        ),
                                                                    align:
                                                                      "right",
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                    "options",
                                                                    "modelValue",
                                                                    "onUpdate:modelValue",
                                                                  ]
                                                                ),
                                                              ]),
                                                              re.type ===
                                                              $(Z).Enum
                                                                ? (k(),
                                                                  A("div", g2, [
                                                                    m2,
                                                                    p(
                                                                      "div",
                                                                      v2,
                                                                      [
                                                                        (k(!0),
                                                                        A(
                                                                          qe,
                                                                          null,
                                                                          Ge(
                                                                            re.enumOptions,
                                                                            (
                                                                              D,
                                                                              H
                                                                            ) => (
                                                                              k(),
                                                                              A(
                                                                                "div",
                                                                                {
                                                                                  key: D,
                                                                                  class:
                                                                                    "py-0.5 rounded flex justify-between items-center cursor-pointer hover:text-red-600 dark:hover:text-red-400",
                                                                                  onClick:
                                                                                    (
                                                                                      We
                                                                                    ) =>
                                                                                      X(
                                                                                        ce,
                                                                                        H
                                                                                      ),
                                                                                },
                                                                                [
                                                                                  p(
                                                                                    "div",
                                                                                    b2,
                                                                                    Y(
                                                                                      D
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                  E(
                                                                                    $(
                                                                                      jr
                                                                                    ),
                                                                                    {
                                                                                      class:
                                                                                        "w-3 flex-none",
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                                8,
                                                                                _2
                                                                              )
                                                                            )
                                                                          ),
                                                                          128
                                                                        )),
                                                                        l.value
                                                                          ? (k(),
                                                                            A(
                                                                              "div",
                                                                              y2,
                                                                              [
                                                                                ln(
                                                                                  p(
                                                                                    "input",
                                                                                    {
                                                                                      id: "new-option",
                                                                                      type: "text",
                                                                                      autofocus:
                                                                                        "",
                                                                                      class:
                                                                                        "w-full px-0 pr-4 py-0 text-xs border-none focus:border-none focus:ring-0 bg-transparent text-primary dark:text-primary-dark",
                                                                                      "onUpdate:modelValue":
                                                                                        ee[0] ||
                                                                                        (ee[0] =
                                                                                          (
                                                                                            D
                                                                                          ) =>
                                                                                            (m.value =
                                                                                              D)),
                                                                                      onKeyup:
                                                                                        Ss(
                                                                                          (
                                                                                            D
                                                                                          ) =>
                                                                                            F(
                                                                                              ce,
                                                                                              D
                                                                                                .target
                                                                                                .value
                                                                                            ),
                                                                                          [
                                                                                            "enter",
                                                                                          ]
                                                                                        ),
                                                                                    },
                                                                                    null,
                                                                                    40,
                                                                                    x2
                                                                                  ),
                                                                                  [
                                                                                    [
                                                                                      un,
                                                                                      m.value,
                                                                                    ],
                                                                                  ]
                                                                                ),
                                                                                E(
                                                                                  $(
                                                                                    Vd
                                                                                  ),
                                                                                  {
                                                                                    class:
                                                                                      "w-3 cursor-pointer",
                                                                                    onClick:
                                                                                      (
                                                                                        D
                                                                                      ) =>
                                                                                        F(
                                                                                          ce,
                                                                                          D
                                                                                            .target
                                                                                            .value
                                                                                        ),
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  [
                                                                                    "onClick",
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : be(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                        l.value
                                                                          ? be(
                                                                              "",
                                                                              !0
                                                                            )
                                                                          : (k(),
                                                                            A(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  "py-0.5 text-secondary dark:text-secondary-dark rounded flex justify-between items-center cursor-pointer hover:text-primary-focus dark:hover:text-primary-focus-dark",
                                                                                onClick:
                                                                                  N,
                                                                              },
                                                                              [
                                                                                w2,
                                                                                E(
                                                                                  $(
                                                                                    Vd
                                                                                  ),
                                                                                  {
                                                                                    class:
                                                                                      "w-3",
                                                                                  }
                                                                                ),
                                                                              ]
                                                                            )),
                                                                      ]
                                                                    ),
                                                                  ]))
                                                                : be("", !0),
                                                            ]),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ))
                                                    : be("", !0),
                                                ]),
                                              ],
                                              42,
                                              t2
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "w-10 px-2 pr-4 py-1 bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            ce === b.value.length - 1
                                              ? "rounded-br-lg"
                                              : "",
                                          ]),
                                        },
                                        [
                                          ct(
                                            K.$slots,
                                            "options",
                                            { itemIdx: ce },
                                            () => [
                                              E(qt, null, {
                                                default: C(() => [k2]),
                                                _: 1,
                                              }),
                                            ],
                                            !0
                                          ),
                                        ],
                                        2
                                      ),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 3,
                        }
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  ["list"]
                )),
          ]),
        ])
      );
    },
  });
var E2 = On($2, [["__scopeId", "data-v-4a3b7d9a"]]);
const S2 = {
    class:
      "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
  },
  T2 = p(
    "span",
    {
      class: "hidden sm:inline-block sm:align-middle sm:h-screen",
      "aria-hidden": "true",
    },
    "\u200B",
    -1
  ),
  O2 = {
    class:
      "relative inline-block align-bottom bg-mainpanel dark:bg-mainpanel-dark text-primary dark:text-primary-dark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-12",
  },
  A2 = p(
    "div",
    {
      class: "h-2 w-full bg-primary dark:bg-primary-dark absolute top-0 left-0",
    },
    null,
    -1
  ),
  I2 = { class: "flex items-start gap-2" },
  C2 = { class: "w-full flex flex-col gap-4 text-sm" },
  D2 = Q(" Action "),
  P2 = Q(" (items, user) => { "),
  R2 = Q(" } "),
  L2 = { class: "mt-5 sm:mt-6 flex gap-2 justify-end" },
  N2 = Q("Save"),
  M2 = he({
    props: {
      title: { type: String, default: "Are you sure you want to delete?" },
    },
    emits: ["update:code"],
    setup(a, { expose: r, emit: t }) {
      const s = Se();
      Ne({
        get() {
          return l.value;
        },
        set(b) {
          t("update:code", b);
        },
      });
      const o = W("Something went wrong");
      W("Hmm");
      const l = W(""),
        d = W(!1),
        c = W(void 0),
        m = W(void 0);
      function v() {
        return (
          (d.value = !0),
          new Promise((b, I) => {
            (c.value = b), (m.value = I);
          })
        );
      }
      function f() {
        (d.value = !1), c.value && c.value(!0);
      }
      return (
        r({ confirm: v, title: o, code: l }),
        (b, I) => (
          k(),
          pe(
            $(Es),
            { as: "template", show: d.value },
            {
              default: C(() => [
                E(
                  $($s),
                  {
                    as: "div",
                    class: $e([
                      "fixed z-50 inset-0 overflow-y-auto",
                      $(s).darkMode ? "dark" : "",
                    ]),
                    onClose: I[2] || (I[2] = (U) => (d.value = !1)),
                  },
                  {
                    default: C(() => [
                      p("div", S2, [
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0",
                          },
                          {
                            default: C(() => [
                              E($(ks), {
                                class:
                                  "fixed inset-0 transition-opacity bg-neutral-50 dark:bg-[#131313] bg-opacity-75 dark:bg-opacity-75",
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        T2,
                        E(
                          $(cn),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: C(() => [
                              p("div", O2, [
                                A2,
                                E($(jr), {
                                  class:
                                    "h-5 text-neutral-500 absolute top-6 right-4 cursor-pointer",
                                  onClick:
                                    I[0] || (I[0] = (U) => (d.value = !1)),
                                }),
                                p("div", I2, [
                                  p("div", C2, [
                                    p("div", null, [
                                      E(
                                        $(Hi),
                                        {
                                          as: "h3",
                                          class:
                                            "text-2xl font-bold items-start flex gap-2",
                                        },
                                        { default: C(() => [D2]), _: 1 }
                                      ),
                                    ]),
                                    P2,
                                    ln(
                                      p(
                                        "textarea",
                                        {
                                          "onUpdate:modelValue":
                                            I[1] ||
                                            (I[1] = (U) => (l.value = U)),
                                          spellcheck: "false",
                                          class:
                                            "w-full bg-input dark:bg-input-dark border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 focus:dark:border-neutral-700 text-sm",
                                          placeholder: "// alert(user.email)",
                                        },
                                        null,
                                        512
                                      ),
                                      [[un, l.value]]
                                    ),
                                    R2,
                                  ]),
                                ]),
                                p("div", L2, [
                                  E(
                                    Mt,
                                    { onClick: f },
                                    { default: C(() => [N2]), _: 1 }
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            8,
            ["show"]
          )
        )
      );
    },
  });
const Cs = (a) => (Xo("data-v-1f0eee74"), (a = a()), Ko(), a),
  U2 = {
    class: "rounded-lg border border-[#EAEAEA] dark:border-[#2F2F2F] shadow",
  },
  B2 = {
    class:
      "w-full transition text-primary dark:text-primary-dark overflow-x-auto",
  },
  j2 = { class: "drop-shadow dark:border-b-2 dark:border-b-neutral-750" },
  F2 = { class: "transition" },
  W2 = Cs(() =>
    p(
      "th",
      {
        class:
          "hidden sm:table-cell px-1 py-2 text-center text-xs font-medium uppercase tracking-wider w-[1rem] rounded-tl-lg bg-table-hover dark:bg-table-hover-dark",
      },
      null,
      -1
    )
  ),
  H2 = { class: "lg:pl-2" },
  z2 = Cs(() =>
    p(
      "th",
      { class: "rounded-tr-lg bg-table-hover dark:bg-table-hover-dark" },
      null,
      -1
    )
  ),
  J2 = { key: 0 },
  G2 = Cs(() =>
    p("td", { class: "hidden sm:table-cell w-10 px-2 pl-4 py-1" }, null, -1)
  ),
  q2 = ["colspan"],
  V2 = Cs(() =>
    p(
      "div",
      { class: "py-1 text-sm text-tertiary dark:text-tertiary-dark" },
      " This page has no actions. Add one! ",
      -1
    )
  ),
  Y2 = [V2],
  X2 = ["onMouseup"],
  K2 = { class: "flex items-center space-x-3 pl-1" },
  Q2 = { key: 0 },
  Z2 = ["title"],
  eE = ["value", "id", "onInput"],
  tE = { key: 1 },
  nE = { class: "flex gap-2" },
  rE = Q("Edit"),
  sE = Cs(() =>
    p(
      "div",
      { class: "text-sm" },
      [
        p(
          "div",
          { class: "px-4 py-2 cursor-pointer hover:bg-neutral-100" },
          "Edit page"
        ),
        p(
          "div",
          {
            class: "px-4 py-2 text-red-500 cursor-pointer hover:bg-neutral-100",
          },
          "Delete page"
        ),
      ],
      -1
    )
  ),
  iE = he({
    props: {
      headers: { type: Array, default: [] },
      items: { type: Array, default: [] },
      columns: { type: Array, default: [] },
    },
    emits: ["viewItem", "update:items", "update:attribute"],
    setup(a, { emit: r }) {
      const t = a;
      Ne(() => ({
        TEXT: o.darkMode ? Jc : jc,
        LONGTEXT: o.darkMode ? Gc : Fc,
        BOOL: o.darkMode ? qc : Wc,
        ENUM: o.darkMode ? Vc : Hc,
        DATE: o.darkMode ? Yc : zc,
      })),
        document.addEventListener("click", () => (d.value = "")),
        W(!1);
      const s = yt(),
        o = Se();
      Ne(() => o.dashboards.find((U) => U.id === s.params.dashboardId) || {}),
        $n(t.items, (U) => {
          c.value = JSON.parse(JSON.stringify(U));
        }),
        W("");
      const l = W(-1),
        d = W(""),
        c = W(JSON.parse(JSON.stringify(t.items))),
        m = {
          animation: 150,
          group: "description",
          disabled: !1,
          ghostClass: "ghost",
        };
      function v() {
        c.value.forEach((U, j) => {
          U.order = j + 1;
        }),
          r("update:items", c.value);
      }
      function f(U, j, N, F) {
        U.stopPropagation(),
          F === Z.Bool || F === Z.Enum
            ? ((l.value = -1), (d.value = ""))
            : ((l.value = j),
              (d.value = N),
              setTimeout(
                () => document.querySelector(`input#${N}`).focus(),
                50
              ));
      }
      const b = W(null);
      async function I(U) {
        var N;
        if (!b.value) return;
        (b.value.title = "Confirm deletion"),
          (b.value.code = t.items[U].code),
          (await ((N = b.value) == null ? void 0 : N.confirm())) &&
            r("update:attribute", U, "code", b.value.code);
      }
      return (U, j) => (
        k(),
        A("div", U2, [
          p("table", B2, [
            p("thead", j2, [
              p("tr", F2, [
                W2,
                (k(!0),
                A(
                  qe,
                  null,
                  Ge(
                    a.headers,
                    (N) => (
                      k(),
                      A(
                        "th",
                        {
                          key: N.id,
                          class: $e([
                            "py-2 text-left text-xs font-medium uppercase bg-table-hover dark:bg-table-hover-dark",
                            N.id === "label" ? "" : "w-[25%]",
                          ]),
                        },
                        [p("span", H2, Y(N.label), 1)],
                        2
                      )
                    )
                  ),
                  128
                )),
                z2,
              ]),
            ]),
            c.value.length === 0
              ? (k(),
                A("tbody", J2, [
                  p("tr", null, [
                    G2,
                    p(
                      "td",
                      { class: "px-0 py-1", colspan: a.headers.length },
                      Y2,
                      8,
                      q2
                    ),
                  ]),
                ]))
              : (k(),
                pe(
                  $(ul),
                  el(
                    {
                      key: 1,
                      class:
                        "list-group divide-y transition divide-neutral-200 dark:divide-neutral-750",
                      tag: "tbody",
                      list: c.value,
                    },
                    m,
                    { onChange: v }
                  ),
                  {
                    default: C(() => [
                      E(
                        Zo,
                        { type: "transition", name: "flip-list" },
                        {
                          default: C(() => [
                            (k(!0),
                            A(
                              qe,
                              null,
                              Ge(
                                c.value,
                                (N, F) => (
                                  k(),
                                  A(
                                    "tr",
                                    {
                                      class:
                                        "list-group-item group cursor-pointer",
                                      key: F,
                                    },
                                    [
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "hidden sm:table-cell w-10 px-2 pl-4 py-1 whitespace-nowrap text-sm text-gray-500 text-center cursor-grab bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            F === c.value.length - 1
                                              ? "rounded-bl-lg"
                                              : "",
                                          ]),
                                        },
                                        [
                                          E($(Qo), {
                                            class: "w-4 text-neutral-300",
                                          }),
                                        ],
                                        2
                                      ),
                                      (k(!0),
                                      A(
                                        qe,
                                        null,
                                        Ge(
                                          a.headers,
                                          (X, K) => (
                                            k(),
                                            A(
                                              "td",
                                              {
                                                key: X.id,
                                                class: $e([
                                                  "px-0 py-1 max-w-0 whitespace-nowrap text-sm group bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                                  [
                                                    K === 0
                                                      ? "font-medium"
                                                      : "",
                                                  ],
                                                ]),
                                                onMouseup: (ee) =>
                                                  f(ee, F, X.id, X.type),
                                              },
                                              [
                                                p("div", K2, [
                                                  X.id === "label"
                                                    ? (k(),
                                                      A("div", Q2, [
                                                        d.value !== X.id ||
                                                        l.value !== F
                                                          ? (k(),
                                                            A(
                                                              "div",
                                                              {
                                                                key: 0,
                                                                class:
                                                                  "truncate border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 rounded px-1 py-0.5",
                                                                title: N[X.id],
                                                              },
                                                              Y(N[X.id]),
                                                              9,
                                                              Z2
                                                            ))
                                                          : be("", !0),
                                                        d.value === X.id &&
                                                        l.value === F
                                                          ? (k(),
                                                            A(
                                                              "input",
                                                              {
                                                                key: 1,
                                                                type: "text",
                                                                value: N[X.id],
                                                                id: X.id,
                                                                class: $e([
                                                                  "w-full border border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700 px-1 py-0.5 rounded text-sm bg-transparent",
                                                                  K === 0
                                                                    ? "font-medium"
                                                                    : "",
                                                                ]),
                                                                onInput: (ee) =>
                                                                  r(
                                                                    "update:attribute",
                                                                    F,
                                                                    X.id,
                                                                    ee.target
                                                                      .value
                                                                  ),
                                                              },
                                                              null,
                                                              42,
                                                              eE
                                                            ))
                                                          : be("", !0),
                                                      ]))
                                                    : X.id === "id"
                                                    ? (k(),
                                                      A("div", tE, [
                                                        E(
                                                          Gn,
                                                          {
                                                            hidden: !0,
                                                            id: X.id,
                                                            static: !0,
                                                            options:
                                                              a.columns.map(
                                                                (ee) => ({
                                                                  label: ee,
                                                                  value: ee,
                                                                })
                                                              ),
                                                            modelValue:
                                                              N[X.id] ||
                                                              a.columns[0],
                                                            "onUpdate:modelValue":
                                                              (ee) =>
                                                                r(
                                                                  "update:attribute",
                                                                  F,
                                                                  X.id,
                                                                  ee
                                                                ),
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            "id",
                                                            "options",
                                                            "modelValue",
                                                            "onUpdate:modelValue",
                                                          ]
                                                        ),
                                                      ]))
                                                    : be("", !0),
                                                ]),
                                              ],
                                              42,
                                              X2
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "w-10 px-2 pr-4 py-1 bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            F === c.value.length - 1
                                              ? "rounded-br-lg"
                                              : "",
                                          ]),
                                        },
                                        [
                                          p("div", nE, [
                                            E(
                                              Nt,
                                              { onClick: (X) => I(F) },
                                              { default: C(() => [rE]), _: 2 },
                                              1032,
                                              ["onClick"]
                                            ),
                                            ct(
                                              U.$slots,
                                              "options",
                                              { itemIdx: F },
                                              () => [
                                                E(qt, null, {
                                                  default: C(() => [sE]),
                                                  _: 1,
                                                }),
                                              ],
                                              !0
                                            ),
                                          ]),
                                        ],
                                        2
                                      ),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 3,
                        }
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  ["list"]
                )),
          ]),
          E(M2, { ref_key: "triggerModal", ref: b }, null, 512),
        ])
      );
    },
  });
var aE = On(iE, [["__scopeId", "data-v-1f0eee74"]]);
const oE = {
    class:
      "space-y-10 2xl:space-y-16 sm:pl-6 pr-1 lg:pl-10 py-10 2xl:py-16 w-full min-h-full bg-surface dark:bg-surface-dark text-primary dark:text-primary-dark",
  },
  lE = { class: "space-y-2" },
  uE = p("h3", { class: "uppercase text-neutral-400 font-medium" }, "Page", -1),
  dE = { class: "flex justify-between items-end" },
  cE = ["title"],
  hE = { class: "flex gap-2" },
  fE = { class: "text-sm w-full space-y-0.5" },
  pE = { class: "flex items-center w-full" },
  gE = { class: "w-48 flex-none text-neutral-500" },
  mE = { key: 3, class: "flex-1" },
  vE = ["onClick"],
  _E = { key: 1, class: "overflow-visible" },
  bE = ["value", "id", "onInput"],
  yE = { key: 4 },
  xE = {
    key: 1,
    class:
      "border border-2 border-transparent w-max max-w-full px-1 py-0.5 text-tertiary dark:text-tertiary-dark",
  },
  wE = { key: 5, class: "flex-1 truncate" },
  kE = ["onClick"],
  $E = { key: 1, class: "flex w-full" },
  EE = { class: "block pl-1 py-0.5 ml-[1px] truncate flex-initial" },
  SE = p(
    "span",
    { class: "block pr-1 py-0.5 flex-initial" },
    ".app.dashibase.com/",
    -1
  ),
  TE = ["value", "id", "onInput"],
  OE = { key: 6, class: "flex-1" },
  AE = ["onClick"],
  IE = { key: 1, class: "overflow-visible" },
  CE = ["value", "id", "onInput"],
  DE = { class: "space-y-2" },
  PE = { class: "flex justify-between items-center" },
  RE = p("h2", { class: "text-2xl font-medium" }, "Attributes", -1),
  LE = Q("Add attribute"),
  NE = { class: "h-5 w-4 flex items-center" },
  ME = { class: "text-sm divide-y dark:divide-neutral-700" },
  UE = { class: "px-4 py-2 font-medium" },
  BE = p("div", { class: "pb-2" }, "Options", -1),
  jE = { class: "flex items-center" },
  FE = { class: "w-36 flex-none text-neutral-500" },
  WE = ["onClick"],
  HE = {
    key: 0,
    class:
      "border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 w-max max-w-full px-1 py-0.5 rounded truncate",
  },
  zE = ["value", "id", "onInput"],
  JE = ["onClick"],
  GE = { class: "space-y-2" },
  qE = { class: "flex justify-between items-center" },
  VE = { class: "flex gap-2 items-center" },
  YE = p("h2", { class: "text-2xl font-medium" }, "Actions", -1),
  XE = Q("Add action"),
  KE = { class: "h-5 w-4 flex items-center" },
  QE = { class: "text-sm divide-y dark:divide-neutral-700" },
  ZE = ["onClick"],
  eS = he({
    props: {
      dashboardId: { type: String, default: "" },
      pageId: { type: String, default: "" },
    },
    setup(a) {
      const r = a;
      document.addEventListener("click", () => (v.value = ""));
      const t = Se(),
        s = Ne(() => t.dashboards.find((G) => G.id === r.dashboardId) || {}),
        o = Ne(() =>
          s.value.pages
            ? s.value.pages.find((G) => G.id === r.pageId) || {}
            : {}
        ),
        l = Ne(() => {
          if (f.value.table_id) {
            let G = Object.keys(s.value.schema[f.value.table_id].properties);
            const se = new Kk(s.value.schema);
            return (
              se.getAllJoins(f.value.table_id).forEach((H) => {
                se.getAttributeIds(H).forEach((We) => {
                  G.push(`${H}(${We})`);
                }),
                  se
                    .getAllJoins(H)
                    .filter((We) => We !== f.value.table_id)
                    .forEach((We) => {
                      se.getAttributeIds(We).forEach((ie) => {
                        G.push(`${H}(${We}(${ie}))`);
                      });
                    });
              }),
              G
            );
          } else return [];
        }),
        d = [
          {
            id: "name",
            label: "Name",
            description: "",
            category: "basic",
            type: Z.Text,
            required: !0,
          },
          {
            id: "page_id",
            label: "Page URL",
            description: "The name that you gave your Supabase table",
            category: "basic",
            type: Z.Text,
            required: !0,
          },
          {
            id: "table_id",
            label: "Supabase table ID",
            description: "The name that you gave your Supabase table",
            category: "basic",
            type: Z.Text,
            required: !0,
          },
          {
            id: "mode",
            label: "Display",
            description: "Display mode - single, card, or list",
            category: "basic",
            type: Z.Enum,
            enumOptions: ["single", "card", "list"],
            required: !0,
          },
          {
            id: "readonly",
            label: "Read-only",
            description:
              "Prevent user from modifying table contents - if true, overrides what is specified per-attribute below",
            category: "advanced",
            type: Z.Bool,
            required: !0,
          },
          {
            id: "enforce_user_col",
            label: "Data access",
            category: "advanced",
            type: Z.Bool,
          },
          {
            id: "user_col",
            label: "User column",
            category: "advanced",
            type: Z.Text,
          },
          {
            id: "attributes",
            label: "Attributes",
            description: "Which columns to display to users",
            category: "null",
            type: Z.Enum,
            required: !1,
          },
        ],
        c = [
          { id: "label", label: "Label", category: "basic", type: Z.Text },
          { id: "id", label: "Column ID", category: "basic", type: Z.Enum },
          { id: "type", label: "Type", category: "basic", type: Z.Enum },
          {
            id: "required",
            label: "Required",
            category: "options",
            type: Z.Bool,
          },
          {
            id: "readonly",
            label: "Read-only",
            category: "options",
            type: Z.Bool,
          },
          { id: "hidden", label: "Hide", category: "options", type: Z.Bool },
        ],
        m = [
          { id: "label", label: "Label", category: "basic", type: Z.Text },
          { id: "code", label: "Code", category: "options", type: Z.LongText },
        ],
        v = W("");
      W("");
      const f = W({
        name: o.value.name,
        page_id: o.value.page_id,
        table_id: o.value.table_id,
        mode: o.value.mode,
        readonly: o.value.readonly,
        id_col: o.value.id_col || "id",
        user_col: o.value.user_col || "user",
        enforce_user_col:
          typeof o.value.enforce_user_col == "boolean"
            ? o.value.enforce_user_col
            : !0,
        attributes: o.value.attributes,
        triggers: o.value.triggers,
      });
      W(-1);
      const b = W(null);
      function I(G, se) {
        (f.value[G] = se), (o.value[G] = se);
      }
      function U(G, se, D) {
        (o.value.attributes[G][se] = D),
          se === "id" &&
            (D.includes("(")
              ? (o.value.attributes[G].type = Z.Join)
              : o.value.attributes[G].type === Z.Join &&
                (o.value.attributes[G].type = Z.Text));
      }
      function j(G, se, D) {
        o.value.triggers[G][se] = D;
      }
      function N() {
        f.value.attributes.push({
          label: "My Label",
          id: l.value[0],
          type: Z.Text,
          required: !1,
          readonly: !1,
          hidden: !1,
        });
      }
      function F() {
        f.value.triggers.push({ label: "My Action", code: "" });
      }
      function X(G) {
        f.value.attributes.splice(G, 1);
      }
      function K(G) {
        f.value.triggers.splice(G, 1);
      }
      function ee(G, se, D) {
        G.stopPropagation(),
          se === Z.Bool
            ? ((v.value = ""),
              (f.value[D] = !f.value[D]),
              (o.value[D] = f.value[D]))
            : ((v.value = D),
              setTimeout(
                () => document.querySelector(`input#${D}`).focus(),
                50
              ));
      }
      function re(G, se, D, H) {
        G.stopPropagation(),
          D === Z.Bool
            ? ((v.value = ""),
              (f.value.attributes[se][H] = !f.value.attributes[se][H]))
            : D === Z.Enum
            ? (v.value = "")
            : ((v.value = H),
              setTimeout(
                () => document.querySelector(`input#${H}`).focus(),
                50
              ));
      }
      async function ce() {
        var se;
        if (!b.value) return;
        if (
          ((b.value.title = "Confirm deletion"),
          (b.value.message = `Are you sure you want to delete ${f.value.name}?`),
          await ((se = b.value) == null ? void 0 : se.confirm()))
        ) {
          const D = s.value.pages.findIndex((H) => H.id === r.pageId);
          s.value.pages.splice(D, 1), De.push(`/dashboards/${r.dashboardId}`);
        }
      }
      return (G, se) => (
        k(),
        A("div", oE, [
          p("div", lE, [
            uE,
            p("div", dE, [
              p(
                "h1",
                { class: "text-4xl font-bold truncate", title: f.value.name },
                Y(f.value.name),
                9,
                cE
              ),
              p("div", hE, [
                E(qt, null, {
                  default: C(() => [
                    p("div", { class: "text-sm" }, [
                      p(
                        "div",
                        {
                          class:
                            "px-4 py-2 text-red-500 dark:text-red-400 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-750 rounded-lg",
                          onClick: ce,
                        },
                        "Delete page"
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
            ]),
            p("div", fE, [
              (k(!0),
              A(
                qe,
                null,
                Ge(
                  d.filter((D) => ["basic", "advanced"].includes(D.category)),
                  (D) => (
                    k(),
                    A("div", pE, [
                      p("div", gE, Y(D.label), 1),
                      D.id === "table_id"
                        ? (k(),
                          pe(
                            Gn,
                            {
                              key: 0,
                              hidden: !0,
                              id: D.id,
                              static: !0,
                              options: Object.keys($(s).schema).map((H) => ({
                                label: H,
                                value: H,
                              })),
                              modelValue: f.value[D.id],
                              "onUpdate:modelValue": (H) => I(D.id, H),
                            },
                            null,
                            8,
                            [
                              "id",
                              "options",
                              "modelValue",
                              "onUpdate:modelValue",
                            ]
                          ))
                        : D.id === "mode"
                        ? (k(),
                          pe(
                            Gn,
                            {
                              key: 1,
                              hidden: !0,
                              id: D.id,
                              static: !0,
                              options: ["card", "list", "single"].map((H) => ({
                                label: H,
                                value: H,
                              })),
                              modelValue: f.value[D.id],
                              "onUpdate:modelValue": (H) => I(D.id, H),
                            },
                            null,
                            8,
                            [
                              "id",
                              "options",
                              "modelValue",
                              "onUpdate:modelValue",
                            ]
                          ))
                        : D.id === "id_col"
                        ? (k(),
                          pe(
                            Gn,
                            {
                              key: 2,
                              hidden: !0,
                              id: D.id,
                              static: !0,
                              options: Object.keys(
                                $(s).schema[f.value.table_id].properties
                              ).map((H) => ({ label: H, value: H })),
                              modelValue: f.value[D.id],
                              "onUpdate:modelValue": (H) => I(D.id, H),
                            },
                            null,
                            8,
                            [
                              "id",
                              "options",
                              "modelValue",
                              "onUpdate:modelValue",
                            ]
                          ))
                        : D.id === "enforce_user_col"
                        ? (k(),
                          A("div", mE, [
                            v.value !== D.id
                              ? (k(),
                                A(
                                  "div",
                                  {
                                    key: 0,
                                    class:
                                      "border border-transparent w-max max-w-full px-1 py-0.5 rounded truncate hover:border-neutral-300 dark:group-hover:border-neutral-700 cursor-pointer",
                                    onClick: (H) => ee(H, D.type, D.id),
                                  },
                                  Y(f.value[D.id] ? "Individual" : "Shared"),
                                  9,
                                  vE
                                ))
                              : be("", !0),
                            v.value === D.id
                              ? (k(),
                                A("div", _E, [
                                  p(
                                    "input",
                                    {
                                      type: "text",
                                      value: f.value[D.id],
                                      id: D.id,
                                      onInput: (H) => I(D.id, H.target.value),
                                      class:
                                        "border border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700 w-full px-1 py-0.5 rounded text-sm bg-input dark:bg-input-dark",
                                    },
                                    null,
                                    40,
                                    bE
                                  ),
                                ]))
                              : be("", !0),
                          ]))
                        : D.id === "user_col"
                        ? (k(),
                          A("div", yE, [
                            f.value.enforce_user_col
                              ? (k(),
                                pe(
                                  Gn,
                                  {
                                    key: 0,
                                    hidden: !0,
                                    id: D.id,
                                    static: !0,
                                    options: Object.keys(
                                      $(s).schema[f.value.table_id].properties
                                    ).map((H) => ({ label: H, value: H })),
                                    modelValue: f.value[D.id],
                                    "onUpdate:modelValue": (H) => I(D.id, H),
                                  },
                                  null,
                                  8,
                                  [
                                    "id",
                                    "options",
                                    "modelValue",
                                    "onUpdate:modelValue",
                                  ]
                                ))
                              : (k(), A("div", xE, "NA")),
                          ]))
                        : D.id === "page_id"
                        ? (k(),
                          A("div", wE, [
                            v.value !== D.id
                              ? (k(),
                                A(
                                  "div",
                                  {
                                    key: 0,
                                    class:
                                      "border border-transparent w-max max-w-full px-1 py-0.5 rounded truncate hover:border-neutral-300 dark:group-hover:border-neutral-700 cursor-pointer",
                                    onClick: (H) => ee(H, D.type, D.id),
                                  },
                                  " /" + Y(f.value[D.id]),
                                  9,
                                  kE
                                ))
                              : be("", !0),
                            v.value === D.id
                              ? (k(),
                                A("div", $E, [
                                  p("span", EE, "https://" + Y($(s).app_id), 1),
                                  SE,
                                  p(
                                    "input",
                                    {
                                      type: "text",
                                      value: f.value[D.id],
                                      id: D.id,
                                      onInput: (H) => I(D.id, H.target.value),
                                      class:
                                        "flex-none w-48 border border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700 px-1 py-0.5 rounded text-sm bg-input dark:bg-input-dark",
                                    },
                                    null,
                                    40,
                                    TE
                                  ),
                                ]))
                              : be("", !0),
                          ]))
                        : (k(),
                          A("div", OE, [
                            v.value !== D.id
                              ? (k(),
                                A(
                                  "div",
                                  {
                                    key: 0,
                                    class:
                                      "border border-transparent w-max max-w-full px-1 py-0.5 rounded truncate hover:border-neutral-300 dark:group-hover:border-neutral-700 cursor-pointer",
                                    onClick: (H) => ee(H, D.type, D.id),
                                  },
                                  Y(f.value[D.id]),
                                  9,
                                  AE
                                ))
                              : be("", !0),
                            v.value === D.id
                              ? (k(),
                                A("div", IE, [
                                  p(
                                    "input",
                                    {
                                      type: "text",
                                      value: f.value[D.id],
                                      id: D.id,
                                      onInput: (H) => I(D.id, H.target.value),
                                      class:
                                        "border border-neutral-300 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-700 w-full px-1 py-0.5 rounded text-sm bg-input dark:bg-input-dark",
                                    },
                                    null,
                                    40,
                                    CE
                                  ),
                                ]))
                              : be("", !0),
                          ])),
                    ])
                  )
                ),
                256
              )),
            ]),
          ]),
          p("div", DE, [
            p("div", PE, [
              RE,
              E(Nt, { onClick: N }, { default: C(() => [LE]), _: 1 }),
            ]),
            E(
              E2,
              {
                headers: c.filter((D) => D.category === "basic"),
                items: f.value.attributes,
                columns: $(l),
                "onUpdate:attribute": U,
                "onUpdate:items":
                  se[0] || (se[0] = (D) => ($(o).attributes = D)),
              },
              {
                options: C((D) => [
                  E(
                    qt,
                    null,
                    {
                      button: C(() => [
                        E(
                          En,
                          { class: "dark:hover:bg-[#2F2F2F]" },
                          {
                            default: C(() => [
                              p("div", NE, [
                                E($(ys), {
                                  class:
                                    "w-4 text-primary dark:text-primary-dark",
                                }),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      default: C(() => [
                        p("div", ME, [
                          p("div", UE, [
                            BE,
                            (k(!0),
                            A(
                              qe,
                              null,
                              Ge(
                                c.filter((H) => H.category === "options"),
                                (H) => (
                                  k(),
                                  A("div", jE, [
                                    p("div", FE, Y(H.label), 1),
                                    p(
                                      "div",
                                      {
                                        class:
                                          "flex-1 truncate cursor-pointer group w-24",
                                        onClick: (We) =>
                                          re(We, D.itemIdx, H.type, H.id),
                                      },
                                      [
                                        v.value !== H.id
                                          ? (k(),
                                            A(
                                              "div",
                                              HE,
                                              Y(
                                                f.value.attributes[D.itemIdx][
                                                  H.id
                                                ]
                                              ),
                                              1
                                            ))
                                          : be("", !0),
                                        v.value === H.id
                                          ? (k(),
                                            A(
                                              "input",
                                              {
                                                key: 1,
                                                type: "text",
                                                value: f.value[H.id],
                                                id: H.id,
                                                class:
                                                  "border border-neutral-300 focus:border-neutral-300 w-full px-1 py-0.5 rounded text-sm",
                                                onInput: (We) =>
                                                  U(
                                                    D.itemIdx,
                                                    H.id,
                                                    We.target.value
                                                  ),
                                              },
                                              null,
                                              40,
                                              zE
                                            ))
                                          : be("", !0),
                                      ],
                                      8,
                                      WE
                                    ),
                                  ])
                                )
                              ),
                              256
                            )),
                          ]),
                          p(
                            "div",
                            {
                              class:
                                "px-4 py-2 text-red-500 dark:text-red-400 cursor-pointer hover:bg-red-50 dark:hover:bg-[#222222] rounded-b-lg",
                              onClick: (H) => X(D.itemIdx),
                            },
                            "Delete attribute",
                            8,
                            JE
                          ),
                        ]),
                      ]),
                      _: 2,
                    },
                    1024
                  ),
                ]),
                _: 1,
              },
              8,
              ["headers", "items", "columns"]
            ),
          ]),
          p("div", GE, [
            p("div", qE, [
              p("div", VE, [YE, E(dl)]),
              E(Nt, { onClick: F }, { default: C(() => [XE]), _: 1 }),
            ]),
            E(
              aE,
              {
                headers: m.filter((D) => D.category === "basic"),
                items: f.value.triggers,
                columns: $(l),
                "onUpdate:attribute": j,
                "onUpdate:items": se[1] || (se[1] = (D) => ($(o).triggers = D)),
                onDeleteTrigger: K,
              },
              {
                options: C((D) => [
                  E(
                    qt,
                    null,
                    {
                      button: C(() => [
                        E(
                          En,
                          { class: "dark:hover:bg-[#2F2F2F]" },
                          {
                            default: C(() => [
                              p("div", KE, [
                                E($(ys), {
                                  class:
                                    "w-4 text-primary dark:text-primary-dark",
                                }),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      default: C(() => [
                        p("div", QE, [
                          p(
                            "div",
                            {
                              class:
                                "px-4 py-2 text-red-500 dark:text-red-400 cursor-pointer hover:bg-red-50 dark:hover:bg-[#222222] rounded-b-lg",
                              onClick: (H) => K(D.itemIdx),
                            },
                            "Delete action",
                            8,
                            ZE
                          ),
                        ]),
                      ]),
                      _: 2,
                    },
                    1024
                  ),
                ]),
                _: 1,
              },
              8,
              ["headers", "items", "columns"]
            ),
          ]),
          E(sl, { ref_key: "deleteModal", ref: b }, null, 512),
        ])
      );
    },
  });
function tS(a) {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(a);
  {
    let r = document.createElement("textarea");
    return (
      (r.value = a),
      (r.style.position = "fixed"),
      (r.style.left = "-999999px"),
      (r.style.top = "-999999px"),
      document.body.appendChild(r),
      r.focus(),
      r.select(),
      new Promise((t, s) => {
        document.execCommand("copy") ? t() : s(), r.remove();
      })
    );
  }
}
function nS(a, r = 0) {
  let t = 3735928559 ^ r,
    s = 1103547991 ^ r;
  for (let o = 0, l; o < a.length; o++)
    (l = a.charCodeAt(o)),
      (t = Math.imul(t ^ l, 2654435761)),
      (s = Math.imul(s ^ l, 1597334677));
  return (
    (t =
      Math.imul(t ^ (t >>> 16), 2246822507) ^
      Math.imul(s ^ (s >>> 13), 3266489909)),
    (s =
      Math.imul(s ^ (s >>> 16), 2246822507) ^
      Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & s) + (t >>> 0)
  );
}
const rS = {
    class: "rounded-lg border border-[#EAEAEA] dark:border-[#2F2F2F] shadow",
  },
  sS = {
    class:
      "w-full transition text-primary dark:text-primary-dark overflow-x-auto",
  },
  iS = { class: "drop-shadow dark:border-b-2 dark:border-b-neutral-750" },
  aS = { class: "transition" },
  oS = p(
    "th",
    {
      class:
        "hidden sm:table-cell px-1 py-2 text-center text-xs font-medium uppercase tracking-wider w-[1rem] rounded-tl-lg bg-table-hover dark:bg-table-hover-dark",
    },
    null,
    -1
  ),
  lS = { class: "lg:pl-2" },
  uS = p(
    "th",
    { class: "rounded-tr-lg bg-table-hover dark:bg-table-hover-dark" },
    null,
    -1
  ),
  dS = { key: 0 },
  cS = p("td", { class: "hidden sm:table-cell w-10 px-2 pl-4 py-1" }, null, -1),
  hS = ["colspan"],
  fS = p(
    "div",
    { class: "lg:pl-2 py-1 text-sm text-tertiary dark:text-tertiary-dark" },
    " This dashboard has no pages. Add one! ",
    -1
  ),
  pS = [fS],
  gS = ["onMouseup"],
  mS = ["onMouseup"],
  vS = { class: "flex items-center space-x-3 lg:pl-2" },
  _S = ["title"],
  bS = { class: "h-5 w-4 flex items-center" },
  yS = p(
    "div",
    { class: "text-sm" },
    [
      p(
        "div",
        {
          class:
            "px-4 py-2 cursor-pointer hover:bg-surface dark:hover:bg-surface-dark",
        },
        "Edit page"
      ),
      p(
        "div",
        {
          class:
            "px-4 py-2 text-red-500 cursor-pointer hover:bg-surface dark:hover:bg-surface-dark",
        },
        "Delete page"
      ),
    ],
    -1
  ),
  xS = he({
    props: {
      attributes: { type: Array, default: [] },
      items: { type: Array, default: [] },
    },
    emits: ["viewItem", "update:items"],
    setup(a, { emit: r }) {
      const t = a,
        s = Ne(() => t.items);
      $n(s, (m) => {
        o.value = JSON.parse(JSON.stringify(m));
      });
      const o = W(JSON.parse(JSON.stringify(t.items))),
        l = {
          animation: 150,
          group: "description",
          disabled: !1,
          ghostClass: "ghost",
        };
      function d() {
        o.value.forEach((m, v) => {
          m.order = v + 1;
        }),
          r("update:items", o.value);
      }
      function c(m, v) {
        v.preventDefault(), r("viewItem", m);
      }
      return (m, v) => (
        k(),
        A("div", rS, [
          p("table", sS, [
            p("thead", iS, [
              p("tr", aS, [
                oS,
                (k(!0),
                A(
                  qe,
                  null,
                  Ge(
                    a.attributes,
                    (f) => (
                      k(),
                      A(
                        "th",
                        {
                          key: f.id,
                          class:
                            "px-2 py-2 text-left text-xs font-medium uppercase bg-table-hover dark:bg-table-hover-dark",
                        },
                        [p("span", lS, Y(f.label), 1)]
                      )
                    )
                  ),
                  128
                )),
                uS,
              ]),
            ]),
            o.value.length === 0
              ? (k(),
                A("tbody", dS, [
                  p("tr", null, [
                    cS,
                    p(
                      "td",
                      { class: "px-2 py-1", colspan: a.attributes.length },
                      pS,
                      8,
                      hS
                    ),
                  ]),
                ]))
              : (k(),
                pe(
                  $(ul),
                  el(
                    {
                      key: 1,
                      class:
                        "list-group divide-y transition text-primary divide-neutral-200 dark:text-primary-dark dark:divide-neutral-750",
                      tag: "tbody",
                      list: o.value,
                    },
                    l,
                    { onChange: d }
                  ),
                  {
                    default: C(() => [
                      E(
                        Zo,
                        { type: "transition", name: "flip-list" },
                        {
                          default: C(() => [
                            (k(!0),
                            A(
                              qe,
                              null,
                              Ge(
                                o.value,
                                (f, b) => (
                                  k(),
                                  A(
                                    "tr",
                                    {
                                      class:
                                        "list-group-item text-primary dark:text-primary-dark cursor-pointer group",
                                      key: b,
                                    },
                                    [
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "hidden sm:table-cell w-10 px-2 pl-4 py-1 text-center cursor-grab bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            b === o.value.length - 1
                                              ? "rounded-bl-lg"
                                              : "",
                                          ]),
                                          onMouseup: (I) => c(b, I),
                                        },
                                        [
                                          E($(Qo), {
                                            class: "w-4 text-neutral-300",
                                          }),
                                        ],
                                        42,
                                        gS
                                      ),
                                      (k(!0),
                                      A(
                                        qe,
                                        null,
                                        Ge(
                                          a.attributes,
                                          (I) => (
                                            k(),
                                            A(
                                              "td",
                                              {
                                                key: I.id,
                                                class:
                                                  "px-2 py-1 max-w-0 whitespace-nowrap text-sm font-medium bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                                onMouseup: (U) => c(b, U),
                                              },
                                              [
                                                p("div", vS, [
                                                  p(
                                                    "div",
                                                    {
                                                      class: "truncate",
                                                      title: f[I.id],
                                                    },
                                                    Y(f[I.id]),
                                                    9,
                                                    _S
                                                  ),
                                                ]),
                                              ],
                                              40,
                                              mS
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                      p(
                                        "td",
                                        {
                                          class: $e([
                                            "w-10 px-2 pr-4 py-1 bg-surface dark:bg-surface-dark group-hover:bg-table-hover dark:group-hover:bg-table-hover-dark",
                                            b === o.value.length - 1
                                              ? "rounded-br-lg"
                                              : "",
                                          ]),
                                        },
                                        [
                                          ct(
                                            m.$slots,
                                            "options",
                                            { itemIdx: b },
                                            () => [
                                              E(qt, null, {
                                                button: C(() => [
                                                  E(En, null, {
                                                    default: C(() => [
                                                      p("div", bS, [
                                                        E($(ys), {
                                                          class:
                                                            "w-4 text-primary dark:text-primary-dark",
                                                        }),
                                                      ]),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                default: C(() => [yS]),
                                                _: 1,
                                              }),
                                            ]
                                          ),
                                        ],
                                        2
                                      ),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 3,
                        }
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  ["list"]
                )),
          ]),
        ])
      );
    },
  }),
  wS = {
    class:
      "space-y-6 sm:pl-6 pr-1 lg:pl-10 py-16 w-full min-h-full bg-surface dark:bg-surface-dark text-primary dark:text-primary-dark",
  },
  kS = { class: "space-y-2" },
  $S = p(
    "h3",
    { class: "uppercase text-neutral-400 font-medium" },
    "Dashboard",
    -1
  ),
  ES = { class: "flex justify-between items-end gap-2" },
  SS = ["title"],
  TS = { class: "flex gap-2 flex-none" },
  OS = { class: "flex gap-1.5 items-center" },
  AS = Q(" Edit in JSON "),
  IS = { class: "text-sm space-y-0.5" },
  CS = { class: "flex items-center" },
  DS = { class: "w-36 flex-none text-neutral-500 flex gap-2 items-center" },
  PS = { key: 0, class: "relative" },
  RS = { class: "flex-1 truncate" },
  LS = ["onClick"],
  NS = { key: 1 },
  MS = p("span", { class: "px-1 py-0.5 ml-[1px]" }, "https://", -1),
  US = ["value", "id", "onInput"],
  BS = p("span", { class: "px-1 py-0.5" }, ".app.dashibase.com", -1),
  jS = ["value", "id", "onInput"],
  FS = { class: "text-red-500 text-sm" },
  WS = { class: "space-y-2" },
  HS = { class: "flex justify-between items-center" },
  zS = p("h2", { class: "text-2xl font-medium" }, "Pages", -1),
  JS = Q("Add page"),
  GS = { class: "h-5 w-4 flex items-center" },
  qS = { class: "text-sm" },
  VS = ["onClick"],
  YS = ["onClick"],
  XS = he({
    props: { dashboardId: { type: String, default: "" } },
    setup(a) {
      var G, se, D, H, We;
      const r = a;
      document.addEventListener("click", () => (v.value = ""));
      const t = Se(),
        s = [
          { id: "name", label: "App Name", type: "text", required: !0 },
          { id: "app_id", label: "App URL", type: "text", required: !0 },
          {
            id: "supabase_url",
            label: "Supabase URL",
            type: "text",
            required: !0,
          },
          {
            id: "supabase_anon_key",
            label: "Supabase Anon Key",
            type: "text",
            required: !0,
          },
          {
            id: "views",
            type: "table",
            label: "Pages",
            description: "Create pages in your dashboard",
            required: !1,
          },
        ],
        o = [
          { id: "name", label: "Name" },
          { id: "page_id", label: "Page ID" },
          { id: "mode", label: "Type" },
        ],
        l = Ne(
          () =>
            t.dashboards.find((ie) => ie.id === r.dashboardId) || {
              name: "",
              app_id: "",
              supabase_url: "",
              supabase_anon_key: "",
              pages: [],
            }
        ),
        d = Ne(() =>
          l.value.pages.map((ie) => ({
            id: ie.id,
            name: ie.name,
            page_id: "/" + ie.page_id,
            mode: ie.mode,
          }))
        ),
        c = {
          name: "Enter a name for your app",
          app_id: "foo",
          supabase_url: "Find this at Supabase Settings > API > Project URL",
          supabase_anon_key:
            "Find this at Supabase Settings > API > Project API keys",
        },
        m = W(!1),
        v = W(""),
        f = W(""),
        b = W({
          id: r.dashboardId,
          name: ((G = l.value) == null ? void 0 : G.name) || "",
          app_id: ((se = l.value) == null ? void 0 : se.app_id) || "",
          supabase_url: ((D = l.value) == null ? void 0 : D.supabase_url) || "",
          supabase_anon_key:
            ((H = l.value) == null ? void 0 : H.supabase_anon_key) || "",
          pages: ((We = l.value) == null ? void 0 : We.pages) || [],
        }),
        I = W(null);
      function U(ie, Oe) {
        (b.value[ie] = Oe),
          (l.value[ie] = Oe),
          ["supabase_url", "supabase_anon_key"].includes(ie) &&
            l.value.supabase_url &&
            l.value.supabase_anon_key &&
            ((f.value = ""),
            Fo(l.value.supabase_url, l.value.supabase_anon_key)
              .then((ne) => (l.value.schema = ne))
              .catch((ne) => {
                (l.value.schema = null), (f.value = ne.message);
              }));
      }
      function j(ie) {
        const Oe = b.value.pages[ie].id;
        De.push(`/dashboards/${r.dashboardId}/pages/${Oe}`);
      }
      async function N() {
        var Oe;
        if (!I.value) return;
        (I.value.title = "Confirm deletion"),
          (I.value.message = `Are you sure you want to delete ${l.value.name}?`),
          (await ((Oe = I.value) == null ? void 0 : Oe.confirm())) &&
            ((t.loading = !0),
            new qi()
              .deleteDashboard(r.dashboardId)
              .catch((T) => (f.value = T.message))
              .finally(() => {
                (t.loading = !1),
                  t.dashboards.length === 0
                    ? F()
                    : De.push(`/dashboards/${t.dashboards[0].id}`);
              }));
      }
      function F() {
        const ie = Ur(),
          Oe = {
            id: ie,
            name: "My Dashboard",
            app_id: Math.random().toString(36).substring(2),
            supabase_url: "",
            supabase_anon_key: "",
            schema: null,
            pages: [],
          };
        t.dashboards.push(Oe), De.push(`/dashboards/${ie}`);
      }
      function X(ie, Oe) {
        ie.stopPropagation(),
          (v.value = Oe),
          setTimeout(() => document.querySelector(`input#${Oe}`).focus(), 50);
      }
      function K(ie) {
        const Oe = ie.map((ne) => {
          const T = l.value.pages.find((B) => B.id === ne.id);
          return (T.order = ne.order), T;
        });
        (b.value.pages = Oe),
          (l.value.pages = Oe),
          (t.previewDashboard.pages = Oe);
      }
      async function ee() {
        if (
          ((f.value = ""), !l.value.supabase_url || !l.value.supabase_anon_key)
        ) {
          f.value =
            "We need a valid Supabase URL and Anon Key before creating a page.";
          return;
        }
        if (!l.value.schema) {
          const { schema: T, error: B } = await Fo(
            l.value.supabase_url,
            l.value.supabase_anon_key
          )
            .then((te) =>
              te
                ? { schema: te }
                : {
                    error:
                      "There doesn't seem to be any tables in your Supabase project. Try creating a table in your database first?",
                  }
            )
            .catch(
              (te) => (
                (l.value.schema = null), { error: te.message, schema: null }
              )
            );
          if (B) {
            f.value = B;
            return;
          } else l.value.schema = T;
        }
        const ie = Object.keys(l.value.schema),
          Oe = Ur(),
          ne = {
            id: Oe,
            name: "My Page",
            page_id: "my_page",
            table_id: ie[0],
            mode: "list",
            readonly: !1,
            id_col: "id",
            user_col: "user",
            enforce_user_col: !0,
            attributes: [],
            triggers: [],
            order: l.value.pages.length,
          };
        l.value.pages.push(ne),
          De.push(`/dashboards/${r.dashboardId}/pages/${Oe}`);
      }
      async function re(ie) {
        var ne;
        if (!I.value) return;
        (I.value.title = "Confirm deletion"),
          (I.value.message = `Are you sure you want to delete ${l.value.pages[ie].name}?`),
          (await ((ne = I.value) == null ? void 0 : ne.confirm())) &&
            (l.value.pages.splice(ie, 1),
            t.previewDashboard.pages.splice(ie, 1));
      }
      function ce() {
        tS(`https://${b.value.app_id}.app.dashibase.com`),
          (m.value = !0),
          setTimeout(() => (m.value = !1), 1e3);
      }
      return (ie, Oe) => (
        k(),
        A("div", wS, [
          p("div", kS, [
            $S,
            p("div", ES, [
              p(
                "h1",
                { class: "text-4xl font-bold truncate", title: b.value.name },
                Y(b.value.name),
                9,
                SS
              ),
              p("div", TS, [
                E(
                  Nt,
                  { to: `/dashboards/${a.dashboardId}/json` },
                  { default: C(() => [p("div", OS, [AS, E(dl)])]), _: 1 },
                  8,
                  ["to"]
                ),
                E(qt, null, {
                  default: C(() => [
                    p("div", { class: "text-sm" }, [
                      p(
                        "div",
                        {
                          class:
                            "px-4 py-2 text-red-500 cursor-pointer hover:bg-neutral-100",
                          onClick: N,
                        },
                        "Delete dashboard"
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
            ]),
            p("div", IS, [
              (k(!0),
              A(
                qe,
                null,
                Ge(
                  s.filter((ne) => ne.id !== "views"),
                  (ne) => (
                    k(),
                    A("div", CS, [
                      p("div", DS, [
                        Q(Y(ne.label) + " ", 1),
                        ne.id === "app_id"
                          ? (k(),
                            A("div", PS, [
                              E($(nb), {
                                class: "w-4 cursor-pointer",
                                onClick: ce,
                              }),
                              p(
                                "div",
                                {
                                  class: $e([
                                    "absolute text-primary dark:text-primary-dark top-1/2 -translate-y-1/2 left-full translate-x-1 px-2 py-1 rounded text-xs font-semibold shadow bg-mainpanel dark:bg-mainpanel-dark transition",
                                    m.value
                                      ? "opacity-100"
                                      : "opacity-0 pointer-events-none",
                                  ]),
                                },
                                " Copied! ",
                                2
                              ),
                            ]))
                          : be("", !0),
                      ]),
                      p("div", RS, [
                        v.value !== ne.id
                          ? (k(),
                            A(
                              "div",
                              {
                                key: 0,
                                class: $e([
                                  "border border-transparent w-max max-w-full px-1 py-0.5 rounded truncate hover:border-neutral-300 dark:group-hover:border-neutral-700 cursor-pointer",
                                  b.value[ne.id]
                                    ? ""
                                    : "text-tertiary dark:text-tertiary-dark",
                                ]),
                                onClick: (T) => X(T, ne.id),
                              },
                              Y(
                                ne.id === "app_id"
                                  ? `https://${
                                      b.value[ne.id]
                                    }.app.dashibase.com`
                                  : b.value[ne.id] || $(c)[ne.id]
                              ),
                              11,
                              LS
                            ))
                          : be("", !0),
                        v.value === ne.id && ne.id === "app_id"
                          ? (k(),
                            A("div", NS, [
                              MS,
                              p(
                                "input",
                                {
                                  type: "text",
                                  value: b.value[ne.id],
                                  id: ne.id,
                                  class:
                                    "bg-input dark:bg-input-dark border border-neutral-300 dark:border-neutral-700 focus:border-neutral-300 px-1 py-0.5 rounded text-sm",
                                  onInput: (T) =>
                                    U(ne.id, T.target.value.toLowerCase()),
                                },
                                null,
                                40,
                                US
                              ),
                              BS,
                            ]))
                          : v.value === ne.id
                          ? (k(),
                            A(
                              "input",
                              {
                                key: 2,
                                type: "text",
                                value: b.value[ne.id],
                                id: ne.id,
                                class:
                                  "bg-input dark:bg-input-dark border border-neutral-300 dark:border-neutral-700 focus:border-neutral-300 dark:focus:border-neutral-700 w-full px-1 py-0.5 rounded text-sm",
                                onInput: (T) => U(ne.id, T.target.value),
                              },
                              null,
                              40,
                              jS
                            ))
                          : be("", !0),
                      ]),
                    ])
                  )
                ),
                256
              )),
            ]),
          ]),
          p("div", FS, Y(f.value) + " \xA0 ", 1),
          p("div", WS, [
            p("div", HS, [
              zS,
              E(Nt, { onClick: ee }, { default: C(() => [JS]), _: 1 }),
            ]),
            E(
              xS,
              {
                attributes: $(o),
                items: $(d),
                onViewItem: j,
                "onUpdate:items": K,
              },
              {
                options: C((ne) => [
                  E(
                    qt,
                    null,
                    {
                      button: C(() => [
                        E(En, null, {
                          default: C(() => [
                            p("div", GS, [
                              E($(ys), {
                                class:
                                  "w-4 text-primary dark:text-primary-dark",
                              }),
                            ]),
                          ]),
                          _: 1,
                        }),
                      ]),
                      default: C(() => [
                        p("div", qS, [
                          p(
                            "div",
                            {
                              class:
                                "px-4 py-2 cursor-pointer hover:bg-input dark:hover:bg-input-dark",
                              onClick: (T) => j(ne.itemIdx),
                            },
                            "Edit page",
                            8,
                            VS
                          ),
                          p(
                            "div",
                            {
                              class:
                                "px-4 py-2 text-red-500 cursor-pointer hover:bg-input dark:hover:bg-input-dark",
                              onClick: (T) => re(ne.itemIdx),
                            },
                            "Delete page",
                            8,
                            YS
                          ),
                        ]),
                      ]),
                      _: 2,
                    },
                    1024
                  ),
                ]),
                _: 1,
              },
              8,
              ["attributes", "items"]
            ),
          ]),
          E(sl, { ref_key: "deleteModal", ref: I }, null, 512),
        ])
      );
    },
  }),
  KS = {
    class:
      "space-y-16 sm:pl-6 pr-1 lg:pl-10 py-16 w-full h-full max-h-full flex flex-col bg-surface dark:bg-surface-dark text-primary dark:text-primary-dark",
  },
  QS = { class: "space-y-2" },
  ZS = p(
    "h3",
    { class: "uppercase text-neutral-400 font-medium flex items-center" },
    [
      Q(" Dashboard JSON mode "),
      p(
        "span",
        {
          class:
            "ml-3 uppercase font-bold text-2xs text-primary dark:text-primary-dark border border-tertiary dark:border-tertiary-dark rounded px-1 py-0.5",
        },
        "Alpha"
      ),
    ],
    -1
  ),
  eT = { class: "flex justify-between items-end gap-2" },
  tT = ["title"],
  nT = { class: "flex gap-2 flex-none" },
  rT = Q("Edit in GUI"),
  sT = p(
    "div",
    { class: "text-sm" },
    [
      p(
        "div",
        { class: "px-4 py-2 text-red-500 cursor-pointer hover:bg-neutral-100" },
        "Delete dashboard"
      ),
    ],
    -1
  ),
  iT = { class: "flex-1 flex flex-col" },
  aT = { class: "text-red-500 dark:text-red-400" },
  oT = he({
    props: { dashboardId: { type: String, required: !0 } },
    setup(a) {
      const r = a,
        t = Se(),
        s = W(""),
        o = W(t.dashboards.find((d) => d.id === r.dashboardId) || {}),
        l = W(
          JSON.stringify(
            {
              name: o.value.name,
              app_id: o.value.app_id,
              supabase_url: o.value.supabase_url,
              supabase_anon_key: o.value.supabase_anon_key,
              pages: o.value.pages,
            },
            null,
            2
          )
        );
      return (
        $n(l, (d) => {
          try {
            s.value = "";
            const c = JSON.parse(d);
            (o.value.name = c.name),
              (o.value.app_id = c.app_id),
              (o.value.supabase_url = c.supabase_url),
              (o.value.supabase_anon_key = c.supabase_anon_key),
              (o.value.pages = c.pages);
          } catch (c) {
            s.value = c.message;
          } finally {
            return;
          }
        }),
        (d, c) => (
          k(),
          A("div", KS, [
            p("div", QS, [
              ZS,
              p("div", eT, [
                p(
                  "h1",
                  { class: "text-4xl font-bold truncate", title: o.value.name },
                  Y(o.value.name),
                  9,
                  tT
                ),
                p("div", nT, [
                  E(
                    Nt,
                    { to: `/dashboards/${a.dashboardId}` },
                    { default: C(() => [rT]), _: 1 },
                    8,
                    ["to"]
                  ),
                  E(qt, null, { default: C(() => [sT]), _: 1 }),
                ]),
              ]),
            ]),
            p("div", iT, [
              p("div", aT, Y(s.value) + " \xA0", 1),
              ln(
                p(
                  "textarea",
                  {
                    id: "test",
                    spellcheck: "false",
                    class:
                      "w-full flex-1 overflow-y-auto overflow-x-hidden border text-sm border-neutral-200 rounded-lg focus:border-neutral-200 dark:border-neutral-700 dark:focus:border-neutral-700 pb-96 bg-mainpanel dark:bg-mainpanel-dark text-primary dark:text-primary-dark",
                    "onUpdate:modelValue":
                      c[0] || (c[0] = (m) => (l.value = m)),
                  },
                  null,
                  512
                ),
                [[un, l.value]]
              ),
            ]),
          ])
        )
      );
    },
  }),
  lT = {
    class:
      "h-screen min-h-full grid lg:grid-cols-2 bg-surface text-primary dark:bg-surface-dark dark:text-primary-dark",
  },
  uT = { class: "flex flex-col justify-center items-center" },
  dT = { class: "w-96 max-w-xl" },
  cT = { class: "flex gap-2 transition duration-1000" },
  hT = p("h1", { class: "font-bold text-2xl font-logo" }, "dashibase", -1),
  fT = { class: "space-y-6" },
  pT = p(
    "h2",
    {
      class:
        "mt-6 text-left text-4xl font-extrabold text-primary dark:text-primary-dark",
    },
    "Sign up",
    -1
  ),
  gT = { class: "space-y-4" },
  mT = p(
    "label",
    { for: "email", class: "block text-sm font-medium" },
    "Email address",
    -1
  ),
  vT = { class: "mt-1" },
  _T = ["disabled"],
  bT = p(
    "label",
    { for: "password", class: "block text-sm font-medium" },
    "Password",
    -1
  ),
  yT = { class: "mt-1" },
  xT = ["disabled"],
  wT = p(
    "label",
    { for: "invite-code", class: "block text-sm font-medium" },
    "Invite code",
    -1
  ),
  kT = { class: "mt-1" },
  $T = ["disabled", "onKeyup"],
  ET = { key: 0, class: "text-sm text-red-500 dark:text-red-400" },
  ST = { class: "text-xs flex justify-between" },
  TT = Q(" Already have an account? "),
  OT = Q(" Log in "),
  AT = p(
    "div",
    {
      class:
        "hidden lg:block bank-note dark:bank-note-dark bg-backdrop dark:bg-backdrop-dark dark:opacity-[5%]",
    },
    null,
    -1
  ),
  IT = he({
    setup(a) {
      const r = W(!1),
        t = W(!1),
        s = W(""),
        o = W(""),
        l = W(""),
        d = W(""),
        c = W(6),
        m = W(!0);
      async function v() {
        if (((d.value = ""), nS(l.value) !== 8206183026185355)) {
          d.value = "Invalid invite code";
          return;
        }
        if (
          (s.value || (d.value = "Please enter an email"),
          o.value || (d.value = "Please enter a password"),
          (r.value = !0),
          o.value.length < c.value)
        )
          d.value = `Password needs to be at least ${c.value} characters`;
        else {
          const { error: f } = await tt.auth.signUp(
            { email: s.value, password: o.value },
            { redirectTo: window.location.origin }
          );
          (r.value = !1),
            f
              ? (d.value = f.message)
              : ((t.value = !0),
                fetch(
                  "https://1zgvejiu04.execute-api.us-east-1.amazonaws.com/prod/dashibase-signup-mailchimp",
                  { method: "POST", body: JSON.stringify({ email: s.value }) }
                ),
                await tt
                  .from("profiles")
                  .update({ dashibase_app: "user" })
                  .match({ email: s.value }),
                m.value || De.push("/"));
        }
      }
      return (f, b) => {
        const I = Tn("router-link");
        return (
          k(),
          A("div", lT, [
            p("div", uT, [
              p("div", dT, [
                p("div", cT, [E(Yi, { class: "w-8" }), hT]),
                p("div", fT, [
                  pT,
                  p("div", gT, [
                    p("div", null, [
                      mT,
                      p("div", vT, [
                        ln(
                          p(
                            "input",
                            {
                              id: "email",
                              disabled: r.value,
                              "onUpdate:modelValue":
                                b[0] || (b[0] = (U) => (s.value = U)),
                              name: "email",
                              type: "email",
                              autocomplete: "email",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                            },
                            null,
                            8,
                            _T
                          ),
                          [[un, s.value]]
                        ),
                      ]),
                    ]),
                    p("div", null, [
                      bT,
                      p("div", yT, [
                        ln(
                          p(
                            "input",
                            {
                              id: "password",
                              disabled: r.value,
                              "onUpdate:modelValue":
                                b[1] || (b[1] = (U) => (o.value = U)),
                              name: "password",
                              type: "password",
                              autocomplete: "current-password",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                            },
                            null,
                            8,
                            xT
                          ),
                          [[un, o.value]]
                        ),
                      ]),
                    ]),
                    p("div", null, [
                      wT,
                      p("div", kT, [
                        ln(
                          p(
                            "input",
                            {
                              id: "invite-code",
                              disabled: r.value,
                              "onUpdate:modelValue":
                                b[2] || (b[2] = (U) => (l.value = U)),
                              name: "invite-code",
                              type: "text",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                              onKeyup: Ss(v, ["enter"]),
                            },
                            null,
                            40,
                            $T
                          ),
                          [[un, l.value]]
                        ),
                      ]),
                    ]),
                    d.value ? (k(), A("div", ET, Y(d.value), 1)) : be("", !0),
                    p("div", null, [
                      E(
                        Mt,
                        { class: "w-full h-10", onClick: v },
                        {
                          default: C(() => [
                            Q(
                              Y(
                                r.value
                                  ? "Loading..."
                                  : t.value
                                  ? m.value
                                    ? "Check your email!"
                                    : "Redirecting..."
                                  : "Create account"
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  p("div", ST, [
                    p("div", null, [
                      TT,
                      E(
                        I,
                        {
                          to: "/login",
                          class: "font-semibold hover:underline",
                        },
                        { default: C(() => [OT]), _: 1 }
                      ),
                    ]),
                    p("div", null, [E(Xi)]),
                  ]),
                ]),
              ]),
            ]),
            AT,
          ])
        );
      };
    },
  }),
  CT = {
    class:
      "h-screen min-h-full grid lg:grid-cols-2 bg-surface text-primary dark:bg-surface-dark dark:text-primary-dark",
  },
  DT = { class: "flex flex-col justify-center items-center" },
  PT = { class: "w-96 max-w-xl" },
  RT = { class: "flex gap-2 transition duration-1000" },
  LT = p("h1", { class: "font-bold text-2xl font-logo" }, "dashibase", -1),
  NT = { class: "space-y-6" },
  MT = p(
    "h2",
    {
      class:
        "mt-6 text-left text-4xl font-extrabold text-primary dark:text-primary-dark",
    },
    "Log in",
    -1
  ),
  UT = { class: "space-y-4" },
  BT = p(
    "label",
    { for: "email", class: "block text-sm font-medium" },
    "Email address",
    -1
  ),
  jT = { class: "mt-1" },
  FT = ["disabled"],
  WT = p(
    "label",
    { for: "password", class: "block text-sm font-medium" },
    "Password",
    -1
  ),
  HT = { class: "mt-1" },
  zT = ["disabled", "onKeyup"],
  JT = { key: 0, class: "text-sm text-red-500 dark:text-red-400" },
  GT = { class: "text-xs flex justify-between" },
  qT = Q(" Don't have an account? "),
  VT = Q(" Sign up "),
  YT = p(
    "div",
    {
      class:
        "hidden lg:block bank-note dark:bank-note-dark bg-backdrop dark:bg-backdrop-dark dark:opacity-[5%]",
    },
    null,
    -1
  ),
  XT = he({
    setup(a) {
      const r = W(!1),
        t = W(!1),
        s = W(""),
        o = W(""),
        l = W("");
      async function d() {
        var m;
        s.value || (l.value = "Please enter an email"),
          o.value || (l.value = "Please enter a password"),
          (r.value = !0);
        const { error: c } = await tt.auth.signIn({
          email: s.value,
          password: o.value,
        });
        if (c) (r.value = !1), (l.value = c.message);
        else {
          const { data: v, error: f } = await tt
            .from("profiles")
            .select("dashibase_app")
            .eq("id", (m = tt.auth.user()) == null ? void 0 : m.id)
            .single();
          (r.value = !1),
            (r.value = !1),
            f && (l.value = f.message),
            v.dashibase_app !== "user"
              ? (await tt.auth.signOut(),
                (l.value = "Account does not exist. Try signing up?"))
              : ((t.value = !0), De.push("/"));
        }
      }
      return (c, m) => {
        const v = Tn("router-link");
        return (
          k(),
          A("div", CT, [
            p("div", DT, [
              p("div", PT, [
                p("div", RT, [E(Yi, { class: "w-8" }), LT]),
                p("div", NT, [
                  MT,
                  p("div", UT, [
                    p("div", null, [
                      BT,
                      p("div", jT, [
                        ln(
                          p(
                            "input",
                            {
                              id: "email",
                              disabled: r.value,
                              "onUpdate:modelValue":
                                m[0] || (m[0] = (f) => (s.value = f)),
                              name: "email",
                              type: "email",
                              autocomplete: "email",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                            },
                            null,
                            8,
                            FT
                          ),
                          [[un, s.value]]
                        ),
                      ]),
                    ]),
                    p("div", null, [
                      WT,
                      p("div", HT, [
                        ln(
                          p(
                            "input",
                            {
                              id: "password",
                              disabled: r.value,
                              "onUpdate:modelValue":
                                m[1] || (m[1] = (f) => (o.value = f)),
                              name: "password",
                              type: "password",
                              autocomplete: "current-password",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                              onKeyup: Ss(d, ["enter"]),
                            },
                            null,
                            40,
                            zT
                          ),
                          [[un, o.value]]
                        ),
                      ]),
                    ]),
                    l.value ? (k(), A("div", JT, Y(l.value), 1)) : be("", !0),
                    p("div", null, [
                      E(
                        Mt,
                        { class: "w-full h-10", onClick: d },
                        {
                          default: C(() => [
                            Q(
                              Y(
                                r.value
                                  ? "Loading..."
                                  : t.value
                                  ? "Redirecting..."
                                  : "Log in"
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  p("div", GT, [
                    p("div", null, [
                      qT,
                      E(
                        v,
                        {
                          to: "/signup",
                          class: "font-semibold hover:underline",
                        },
                        { default: C(() => [VT]), _: 1 }
                      ),
                    ]),
                    p("div", null, [E(Xi)]),
                  ]),
                ]),
              ]),
            ]),
            YT,
          ])
        );
      };
    },
  }),
  KT = {
    class:
      "h-screen min-h-full grid lg:grid-cols-2 bg-surface text-primary dark:bg-surface-dark dark:text-primary-dark",
  },
  QT = { class: "flex flex-col justify-center items-center" },
  ZT = { class: "w-96 max-w-xl" },
  eO = { class: "flex gap-2 transition duration-1000" },
  tO = p("h1", { class: "font-bold text-2xl font-logo" }, "dashibase", -1),
  nO = { class: "space-y-6" },
  rO = p(
    "h2",
    {
      class:
        "mt-6 text-left text-4xl font-extrabold text-primary dark:text-primary-dark",
    },
    "Reset Password",
    -1
  ),
  sO = { class: "space-y-4" },
  iO = p(
    "label",
    { for: "email", class: "block text-sm font-medium" },
    "Email address",
    -1
  ),
  aO = { class: "mt-1" },
  oO = ["disabled"],
  lO = p(
    "label",
    { for: "password", class: "block text-sm font-medium" },
    "Password",
    -1
  ),
  uO = { class: "mt-1" },
  dO = ["disabled", "onKeyup"],
  cO = { key: 0, class: "text-sm text-red-500 dark:text-red-400" },
  hO = { class: "text-xs flex justify-between" },
  fO = Q(" Remember your password? "),
  pO = Q(" Log in "),
  gO = p(
    "div",
    {
      class:
        "hidden lg:block bank-note dark:bank-note-dark bg-backdrop dark:bg-backdrop-dark dark:opacity-[5%]",
    },
    null,
    -1
  ),
  mO = he({
    setup(a) {
      const r = yt(),
        t = W(!1),
        s = W(!1),
        o = W(""),
        l = W("");
      W("");
      const d = W(""),
        c = W(6);
      W(!0);
      async function m() {
        if (
          (o.value || (d.value = "Please enter an email"),
          l.value || (d.value = "Please enter a password"),
          (t.value = !0),
          l.value.length < c.value)
        )
          d.value = `Password needs to be at least ${c.value} characters`;
        else {
          const { error: v } = await tt.auth.api.updateUser(
            r.query.access_token,
            { password: l.value }
          );
          (t.value = !1),
            v ? (d.value = v.message) : ((s.value = !0), De.push("/"));
        }
      }
      return (v, f) => {
        const b = Tn("router-link");
        return (
          k(),
          A("div", KT, [
            p("div", QT, [
              p("div", ZT, [
                p("div", eO, [E(Yi, { class: "w-8" }), tO]),
                p("div", nO, [
                  rO,
                  p("div", sO, [
                    p("div", null, [
                      iO,
                      p("div", aO, [
                        ln(
                          p(
                            "input",
                            {
                              id: "email",
                              disabled: t.value,
                              "onUpdate:modelValue":
                                f[0] || (f[0] = (I) => (o.value = I)),
                              name: "email",
                              type: "email",
                              autocomplete: "email",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                            },
                            null,
                            8,
                            oO
                          ),
                          [[un, o.value]]
                        ),
                      ]),
                    ]),
                    p("div", null, [
                      lO,
                      p("div", uO, [
                        ln(
                          p(
                            "input",
                            {
                              id: "password",
                              disabled: t.value,
                              "onUpdate:modelValue":
                                f[1] || (f[1] = (I) => (l.value = I)),
                              name: "password",
                              type: "password",
                              autocomplete: "current-password",
                              required: "",
                              class:
                                "bg-transparent w-full px-3 py-2 shadow-sm sm:text-sm border-neutral-300 focus:border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-600 dark:autofill:text-neutral-800",
                              onKeyup: Ss(m, ["enter"]),
                            },
                            null,
                            40,
                            dO
                          ),
                          [[un, l.value]]
                        ),
                      ]),
                    ]),
                    d.value ? (k(), A("div", cO, Y(d.value), 1)) : be("", !0),
                    p("div", null, [
                      E(
                        Mt,
                        { class: "w-full h-10", onClick: m },
                        {
                          default: C(() => [
                            Q(
                              Y(
                                t.value
                                  ? "Loading..."
                                  : s.value
                                  ? "Success!"
                                  : "Reset password"
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  p("div", hO, [
                    p("div", null, [
                      fO,
                      E(
                        b,
                        {
                          to: "/login",
                          class: "font-semibold hover:underline",
                        },
                        { default: C(() => [pO]), _: 1 }
                      ),
                    ]),
                    p("div", null, [E(Xi)]),
                  ]),
                ]),
              ]),
            ]),
            gO,
          ])
        );
      };
    },
  }),
  vO = {
    class:
      "z-50 absolute bottom-4 right-4 sm:right-none mx-auto bg-mainpanel dark:bg-mainpanel-dark rounded-lg drop-shadow px-4 py-3 text-sm text-primary dark:text-primary-dark outline outline-primary dark:outline-primary-dark",
  },
  _O = p("h3", { class: "font-semibold" }, "Preview Mode", -1),
  bO = he({
    setup(a) {
      const r = Se();
      return (t, s) => (
        k(),
        A("div", vO, [
          _O,
          Q(
            " This is a preview of https://" +
              Y($(r).previewDashboard.app_id) +
              ".app.dashibase.com ",
            1
          ),
        ])
      );
    },
  }),
  yO = { class: "h-screen flex flex-col" },
  xO = he({
    props: { dashboardId: { type: String, required: !0 } },
    setup(a) {
      const r = a,
        t = yt(),
        s = Se(),
        o = window.location === window.parent.location;
      return (
        (s.previewDashboard = s.dashboards.find((l) => l.id === r.dashboardId)),
        t.fullPath.includes("/preview") &&
          setInterval(() => {
            const l = JSON.parse(window.localStorage.getItem("main"));
            s.previewDashboard = l.previewDashboard;
          }, 500),
        (l, d) => {
          const c = Tn("router-view");
          return (
            k(),
            A("div", yO, [o ? (k(), pe(bO, { key: 0 })) : be("", !0), E(c)])
          );
        }
      );
    },
  });
const wO = { class: "h-full relative flex flex-col" },
  kO = {
    class: "flex-grow w-full mx-auto sm:flex bg-surface dark:bg-surface-dark",
  },
  $O = { class: "flex-1 min-w-0 sm:flex" },
  EO = he({
    props: { pageId: { type: String, default: "" } },
    setup(a) {
      var o;
      const r = Se(),
        t = Ne(() =>
          r.previewDashboard.pages ? r.previewDashboard.pages[0].page_id : ""
        );
      $n(t, (l) => {
        s.path === `/preview/${r.previewDashboard.id}/` &&
          l &&
          De.push(`/preview/${r.previewDashboard.id}/${l}`);
      });
      const s = yt();
      return (
        s.path === `/preview/${r.previewDashboard.id}/` &&
          ((o = r.previewDashboard.pages) == null ? void 0 : o.length) &&
          De.push(
            `/preview/${r.previewDashboard.id}/${r.previewDashboard.pages[0].page_id}`
          ),
        (l, d) => {
          const c = Tn("router-view");
          return (
            k(),
            A("div", wO, [
              p("div", kO, [
                p("div", $O, [
                  E($c, { selected: a.pageId }, null, 8, ["selected"]),
                  E(kc, null, {
                    default: C(() => [
                      E(c, null, {
                        default: C(({ Component: m }) => [
                          E(
                            dr,
                            { mode: "out-in" },
                            {
                              default: C(() => {
                                var v;
                                return [
                                  (k(),
                                  pe(
                                    bs(m),
                                    {
                                      key: l.$route.fullPath,
                                      page:
                                        ((v = $(r).previewDashboard.pages) ==
                                        null
                                          ? void 0
                                          : v.find(
                                              (f) => f.page_id === a.pageId
                                            )) || {},
                                    },
                                    null,
                                    8,
                                    ["page"]
                                  )),
                                ];
                              }),
                              _: 2,
                            },
                            1024
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
var SO = On(EO, [["__scopeId", "data-v-8c16d542"]]);
const TO = [
    {
      path: "/",
      name: "Home",
      component: Fy,
      children: [
        {
          path: "",
          name: "Dashboard",
          component: Qd,
          children: [
            {
              path: "dashboards/:dashboardId",
              component: XS,
              name: "ViewDashboard",
              props: !0,
            },
            { path: "dashboards/:dashboardId/json", component: oT, props: !0 },
            {
              path: "dashboards/:dashboardId/pages/:pageId",
              component: eS,
              name: "ViewView",
              props: !0,
            },
          ],
        },
        {
          path: "/preview/:dashboardId",
          name: "Preview",
          component: xO,
          props: !0,
          children: [
            { path: "login", component: Sc },
            {
              path: ":pageId",
              component: SO,
              props: !0,
              children: [
                { path: "", component: Ec },
                { path: "view/:itemId", component: ws, props: !0 },
                {
                  path: "new",
                  component: ws,
                  props: (a) => ({ pageId: a.params.pageId, createMode: !0 }),
                },
              ],
            },
          ],
        },
        { path: "signup", name: "Sign Up", component: IT },
        { path: "login", name: "Log In", component: XT },
        { path: "reset", name: "Reset", component: mO },
      ],
    },
    { path: "/:pathMatch(.*)*", component: Qd, props: { notFound: !0 } },
  ],
  De = rb({ history: sb(), routes: TO });
function OO({ store: a }) {
  const r = {
    loading: !1,
    showProPlan: !1,
    maxDashboards: 1,
    user: {},
    dashboards: [],
    savedDashboards: [],
    deployedDashboards: [],
    previewDashboard: null,
    initializingData: !1,
    initialized: !1,
  };
  a.$reset = () => a.$patch(JSON.parse(JSON.stringify(r)));
}
const cl = ib();
cl.use(ab);
cl.use(OO);
ob(ub).use(De).use(cl).mount("#app");
