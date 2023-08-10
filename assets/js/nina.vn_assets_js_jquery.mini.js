!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  function r(a) {
    var b = a.length,
      c = m.type(a);
    return (
      "function" !== c &&
      !m.isWindow(a) &&
      (!(1 !== a.nodeType || !b) ||
        "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);
    return a;
  }
  function G(a) {
    var b = (F[a] = {});
    return (
      m.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function I() {
    y.addEventListener
      ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1))
      : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (y.addEventListener ||
      "load" === event.type ||
      "complete" === y.readyState) &&
      (I(), m.ready());
  }
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if ("string" == typeof (c = a.getAttribute(d))) {
        try {
          c =
            "true" === c ||
            ("false" !== c &&
              ("null" === c
                ? null
                : +c + "" === c
                ? +c
                : M.test(c)
                ? m.parseJSON(c)
                : c));
        } catch (a) {}
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
        g,
        h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || m.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: m.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = m.extend(j[k], b))
              : (j[k].data = m.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[m.camelCase(b)] = d),
          "string" == typeof b
            ? null == (f = g[b]) && (f = g[m.camelCase(b)])
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? m.cache : a,
        h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b)
            ? (b = b.concat(m.map(b, m.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = m.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          for (; e--; ) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? m.cleanData([a], !0)
            : k.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  function aa() {
    return !0;
  }
  function ba() {
    return !1;
  }
  function ca() {
    try {
      return y.activeElement;
    } catch (a) {}
  }
  function da(a) {
    var b = ea.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) for (; b.length; ) c.createElement(b.pop());
    return c;
  }
  function ua(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== K
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== K
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
    return void 0 === b || (b && m.nodeName(a, b)) ? m.merge([a], f) : f;
  }
  function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wa(a, b) {
    return m.nodeName(a, "table") &&
      m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function xa(a) {
    return (a.type = (null !== m.find.attr(a, "type")) + "/" + a.type), a;
  }
  function ya(a) {
    var b = pa.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }
  function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
        d,
        e,
        f = m._data(a),
        g = m._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Ba(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !k.noCloneEvent && b[m.expando])) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      "script" === c && b.text !== a.text
        ? ((xa(b).text = a.text), ya(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          k.html5Clone &&
            a.innerHTML &&
            !m.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && W.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ea(b, c) {
    var d,
      e = m(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : m.css(e[0], "display");
    return e.detach(), f;
  }
  function Fa(a) {
    var b = y,
      c = Da[a];
    return (
      c ||
        ((c = Ea(a, b)),
        ("none" !== c && c) ||
          ((Ca = (
            Ca || m("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ca[0].contentWindow || Ca[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Ea(a, b)),
          Ca.detach()),
        (Da[a] = c)),
      c
    );
  }
  function La(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  function Ua(a, b) {
    if (b in a) return b;
    for (
      var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
      e--;

    )
      if ((b = Ta[e] + c) in a) return b;
    return d;
  }
  function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = m._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                U(d) &&
                (f[g] = m._data(d, "olddisplay", Fa(d.nodeName))))
            : ((e = U(d)),
              ((c && "none" !== c) || !e) &&
                m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Wa(a, b, c) {
    var d = Pa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Xa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += m.css(a, c + T[f], !0, e)),
        d
          ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e)))
          : ((g += m.css(a, "padding" + T[f], !0, e)),
            "padding" !== c &&
              (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g;
  }
  function Ya(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ia(a),
      g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Ja(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ha.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e);
  }
  function fb() {
    return (
      setTimeout(function () {
        $a = void 0;
      }),
      ($a = m.now())
    );
  }
  function gb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = T[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function hb(a, b, c) {
    for (
      var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      n = this,
      o = {},
      p = a.style,
      q = a.nodeType && U(a),
      r = m._data(a, "fxshow");
    c.queue ||
      ((h = m._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      n.always(function () {
        n.always(function () {
          h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = m.css(a, "display")),
        "inline" ===
          ("none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j) &&
          "none" === m.css(a, "float") &&
          (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        k.shrinkWrapBlocks() ||
          n.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ab.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || m.style(a, d);
      } else j = void 0;
    if (m.isEmptyObject(o))
      "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = m._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? m(a).show()
          : n.done(function () {
              m(a).hide();
            }),
        n.done(function () {
          var b;
          m._removeData(a, "fxshow");
          for (b in o) m.style(a, b, o[b]);
        });
      for (d in o)
        (g = hb(q ? r[d] : 0, d, n)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = m.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        m.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = m.cssHooks[d]) && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = db.length,
      h = m.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = $a || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $a || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); g > f; f++)
      if ((d = db[f].call(j, a, k, j.opts))) return d;
    return (
      m.map(k, hb, j),
      m.isFunction(j.opts.start) && j.opts.start.call(a, j),
      m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function Kb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Lb(a, b, c, d) {
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        m.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    var e = {},
      f = a === Ib;
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Mb(a, b) {
    var c,
      d,
      e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Nb(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ob(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (!(g = j[i + " " + f] || j["* " + f]))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                !0 === g
                  ? (g = j[e])
                  : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (!0 !== g)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (a) {
                return {
                  state: "parsererror",
                  error: g ? a : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  function Ub(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Qb.test(a)
          ? d(a, e)
          : Ub(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== m.type(b)) d(a, b);
    else for (e in b) Ub(a + "[" + e + "]", b[e], c, d);
  }
  function Yb() {
    try {
      return new a.XMLHttpRequest();
    } catch (a) {}
  }
  function Zb() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (a) {}
  }
  function cc(a) {
    return m.isWindow(a)
      ? a
      : 9 === a.nodeType && (a.defaultView || a.parentWindow);
  }
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.1",
    m = function (a, b) {
      return new m.fn.init(a, b);
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function (a, b) {
      return b.toUpperCase();
    };
  (m.fn = m.prototype =
    {
      jquery: l,
      constructor: m,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = m.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return m.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          m.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || m.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (m.isPlainObject(c) || (b = m.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && m.isArray(a) ? a : []))
                        : (f = a && m.isPlainObject(a) ? a : {}),
                      (g[d] = m.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    m.extend({
      expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === m.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === m.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !m.isArray(a) && a - parseFloat(a) >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (a) {
          return !1;
        }
        if (k.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          m.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var e = 0,
          f = a.length,
          g = r(a);
        if (c) {
          if (g) for (; f > e && !1 !== b.apply(a[e], c); e++);
          else for (e in a) if (!1 === b.apply(a[e], c)) break;
        } else if (g) for (; f > e && !1 !== b.call(a[e], e, a[e]); e++);
        else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (r(Object(a))
              ? m.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; ) a[e++] = b[d++];
        if (c !== c) for (; void 0 !== b[d]; ) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var e = [], f = 0, g = a.length, h = !c; g > f; f++)
          !b(a[f], f) !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
        if (h) for (; g > f; f++) null != (d = b(a[f], f, c)) && i.push(d);
        else for (f in a) null != (d = b(a[f], f, c)) && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          m.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || m.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: k,
    }),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  var s = (function (a) {
    function ea(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        !a || "string" != typeof a)
      )
        return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];
      if (p && !e) {
        if ((f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (!(h = b.getElementById(j)) || !h.parentNode) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
            if (
              (j = f[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return I.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 9 === k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            for (
              o = g(a),
                (r = b.getAttribute("id"))
                  ? (s = r.replace(ba, "\\$&"))
                  : b.setAttribute("id", s),
                s = "[id='" + s + "'] ",
                l = o.length;
              l--;

            )
              o[l] = s + pa(o[l]);
            (w = (aa.test(a) && na(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return I.apply(d, w.querySelectorAll(x)), d;
            } catch (a) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function fa() {
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      var a = [];
      return b;
    }
    function ga(a) {
      return (a[u] = !0), a;
    }
    function ha(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (a) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ia(a, b) {
      for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
    }
    function ja(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ka(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ma(a) {
      return ga(function (b) {
        return (
          (b = +b),
          ga(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--; )
              c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function na(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }
    function oa() {}
    function pa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function qa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              for (; (b = b[d]); )
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              for (; (b = b[d]); )
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ra(a) {
      return a.length > 1
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function sa(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ea(a, b[d], c);
      return c;
    }
    function ta(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function ua(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = ua(d)),
        e && !e[u] && (e = ua(e, f)),
        ga(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || sa(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ta(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d))
            for (j = ta(r, n), d(j, [], h, i), k = j.length; k--; )
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          if (f) {
            if (e || a) {
              if (e) {
                for (j = [], k = r.length; k--; )
                  (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              for (k = r.length; k--; )
                (l = r[k]) &&
                  (j = e ? K.call(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ta(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : I.apply(g, r);
        })
      );
    }
    function va(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = qa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = qa(
            function (a) {
              return K.call(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              );
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [qa(ra(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e && !d.relative[a[e].type]; e++);
            return ua(
              i > 1 && ra(m),
              i > 1 &&
                pa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && va(a.slice(i, e)),
              f > e && va((a = a.slice(e))),
              f > e && pa(a)
            );
          }
          m.push(c);
        }
      return ra(m);
    }
    function wa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              for (m = 0; (o = a[m++]); )
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            for (m = 0; (o = b[m++]); ) o(r, s, g, h);
            if (f) {
              if (p > 0) for (; q--; ) r[q] || s[q] || (s[q] = G.call(i));
              s = ta(s);
            }
            I.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ea.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ga(f) : f;
    }
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + -new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = fa(),
      z = fa(),
      A = fa(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = "undefined",
      D = 1 << 31,
      E = {}.hasOwnProperty,
      F = [],
      G = F.pop,
      H = F.push,
      I = F.push,
      J = F.slice,
      K =
        F.indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1;
        },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      O = N.replace("w", "w#"),
      P =
        "\\[" +
        M +
        "*(" +
        N +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        O +
        "))|)" +
        M +
        "*\\]",
      Q =
        ":(" +
        N +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      S = new RegExp("^" + M + "*," + M + "*"),
      T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      V = new RegExp(Q),
      W = new RegExp("^" + O + "$"),
      X = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + Q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      };
    try {
      I.apply((F = J.call(v.childNodes)), v.childNodes),
        F[v.childNodes.length].nodeType;
    } catch (a) {
      I = {
        apply: F.length
          ? function (a, b) {
              H.apply(a, J.call(b));
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1;
            },
      };
    }
    (c = ea.support = {}),
      (f = ea.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = ea.setDocument =
        function (a) {
          var b,
            e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
          return e !== n && 9 === e.nodeType && e.documentElement
            ? ((n = e),
              (o = e.documentElement),
              (p = !f(e)),
              g &&
                g !== g.top &&
                (g.addEventListener
                  ? g.addEventListener(
                      "unload",
                      function () {
                        m();
                      },
                      !1
                    )
                  : g.attachEvent &&
                    g.attachEvent("onunload", function () {
                      m();
                    })),
              (c.attributes = ha(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ha(function (a) {
                return (
                  a.appendChild(e.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName =
                $.test(e.getElementsByClassName) &&
                ha(function (a) {
                  return (
                    (a.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (a.firstChild.className = "i"),
                    2 === a.getElementsByClassName("i").length
                  );
                })),
              (c.getById = ha(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !e.getElementsByName || !e.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if (typeof b.getElementById !== C && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        typeof a.getAttributeNode !== C &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return typeof b.getElementsByTagName !== C
                      ? b.getElementsByTagName(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return typeof b.getElementsByClassName !== C && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(e.querySelectorAll)) &&
                (ha(function (a) {
                  (a.innerHTML =
                    "<select msallowclip=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowclip^='']").length &&
                      q.push("[*^$]=" + M + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + M + "*(?:value|" + L + ")"),
                    a.querySelectorAll(":checked").length || q.push(":checked");
                }),
                ha(function (a) {
                  var b = e.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + M + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ha(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", Q);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b)
                        for (; (b = b.parentNode); ) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return (
                      d ||
                      ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === e || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === e || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? K.call(k, a) - K.call(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1)
                    );
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      f = a.parentNode,
                      g = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!f || !g)
                      return a === e
                        ? -1
                        : b === e
                        ? 1
                        : f
                        ? -1
                        : g
                        ? 1
                        : k
                        ? K.call(k, a) - K.call(k, b)
                        : 0;
                    if (f === g) return ja(a, b);
                    for (c = a; (c = c.parentNode); ) h.unshift(c);
                    for (c = b; (c = c.parentNode); ) i.unshift(c);
                    for (; h[d] === i[d]; ) d++;
                    return d
                      ? ja(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              e)
            : n;
        }),
      (ea.matches = function (a, b) {
        return ea(a, null, null, b);
      }),
      (ea.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (a) {}
        return ea(b, n, null, [a]).length > 0;
      }),
      (ea.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ea.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ea.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ea.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          for (; (b = a[f++]); ) b === a[f] && (e = d.push(f));
          for (; e--; ) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ea.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else for (; (b = a[d++]); ) c += e(b);
          return c;
        }),
      (d = ea.selectors =
        {
          cacheLength: 50,
          createPseudo: ga,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ea.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ea.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        (typeof a.getAttribute !== C &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ea.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e + " ").indexOf(c) > -1
                        : "|=" === b &&
                          (e === c || e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        for (; p; ) {
                          for (l = b; (l = l[p]); )
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        for (
                          k = q[u] || (q[u] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            m = j[0] === w && j[2],
                            l = n && q.childNodes[n];
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        for (
                          ;
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                          ((h
                            ? l.nodeName.toLowerCase() !== r
                            : 1 !== l.nodeType) ||
                            !++m ||
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                            l !== b));

                        );
                      return (m -= e) === d || (m % d == 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ea.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ga(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; )
                          (d = K.call(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ga(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ga(function (a, b, c, e) {
                    for (var f, g = d(a, null, e, []), h = a.length; h--; )
                      (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: ga(function (a) {
              return function (b) {
                return ea(a, b).length > 0;
              };
            }),
            contains: ga(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              };
            }),
            lang: ga(function (a) {
              return (
                W.test(a || "") || ea.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do {
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                      );
                  } while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return !1 === a.disabled;
            },
            disabled: function (a) {
              return !0 === a.disabled;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: ma(function () {
              return [0];
            }),
            last: ma(function (a, b) {
              return [b - 1];
            }),
            eq: ma(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: ma(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: ma(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: ma(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: ma(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ka(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = la(b);
    return (
      (oa.prototype = d.filters = d.pseudos),
      (d.setFilters = new oa()),
      (g = ea.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          for (h = a, i = [], j = d.preFilter; h; ) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
        }),
      (h = ea.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            for (b || (b = g(a)), c = b.length; c--; )
              (f = va(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, wa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ea.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (!(b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]))
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            for (
              i = X.needsContext.test(a) ? 0 : j.length;
              i-- && ((k = j[i]), !d.relative[(l = k.type)]);

            )
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && na(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), !(a = f.length && pa(j))))
                  return I.apply(e, f), e;
                break;
              }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && na(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ha(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ha(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ia("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ha(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ia("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ha(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ia(L, function (a, b, c) {
          var d;
          return c
            ? void 0
            : !0 === a[b]
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ea
    );
  })(a);
  (m.find = s),
    (m.expr = s.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.unique = s.uniqueSort),
    (m.text = s.getText),
    (m.isXMLDoc = s.isXML),
    (m.contains = s.contains);
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;
  (m.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? m.find.matchesSelector(d, a)
          ? [d]
          : []
        : m.find.matches(
            a,
            m.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            m(a).filter(function () {
              for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) m.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? m.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(w(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(w(this, a || [], !0));
      },
      is: function (a) {
        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1)
          .length;
      },
    });
  var x,
    y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((m.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;
    if ("string" == typeof a) {
      if (
        !(c =
          "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3
            ? [null, a, null]
            : z.exec(a)) ||
        (!c[1] && b)
      )
        return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (
          ((b = b instanceof m ? b[0] : b),
          m.merge(
            this,
            m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)
          ),
          u.test(c[1]) && m.isPlainObject(b))
        )
          for (c in b)
            m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this;
      }
      if ((d = y.getElementById(c[2])) && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);
        (this.length = 1), (this[0] = d);
      }
      return (this.context = y), (this.selector = a), this;
    }
    return a.nodeType
      ? ((this.context = this[0] = a), (this.length = 1), this)
      : m.isFunction(a)
      ? void 0 !== x.ready
        ? x.ready(a)
        : a(m)
      : (void 0 !== a.selector &&
          ((this.selector = a.selector), (this.context = a.context)),
        m.makeArray(a, this));
  }).prototype = m.fn),
    (x = m(y));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  m.extend({
    dir: function (a, b, c) {
      for (
        var d = [], e = a[b];
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !m(e).is(c));

      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    m.fn.extend({
      has: function (a) {
        var b,
          c = m(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && m.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? m.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? m.inArray(this[0], m(a))
            : m.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
    m.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return m.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return m.dir(a, "parentNode", c);
        },
        next: function (a) {
          return D(a, "nextSibling");
        },
        prev: function (a) {
          return D(a, "previousSibling");
        },
        nextAll: function (a) {
          return m.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return m.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return m.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return m.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return m.sibling(a.firstChild);
        },
        contents: function (a) {
          return m.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : m.merge([], a.childNodes);
        },
      },
      function (a, b) {
        m.fn[a] = function (c, d) {
          var e = m.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 &&
              (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
            this.pushStack(e)
          );
        };
      }
    );
  var E = /\S+/g,
    F = {};
  (m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (!1 === h[f].apply(l[0], l[1]) && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function b(c) {
              m.each(c, function (c, d) {
                var e = m.type(d);
                "function" === e
                  ? (a.unique && k.has(d)) || h.push(d)
                  : d && d.length && "string" !== e && b(d);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              m.each(arguments, function (a, c) {
                for (var d; (d = m.inArray(c, h, d)) > -1; )
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    m.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return m
                .Deferred(function (c) {
                  m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? m.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          m.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var i,
          j,
          k,
          b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && m.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          };
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && m.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0);
      },
      ready: function (a) {
        if (!0 === a ? !--m.readyWait : !m.isReady) {
          if (!y.body) return setTimeout(m.ready);
          (m.isReady = !0),
            (!0 !== a && --m.readyWait > 0) ||
              (H.resolveWith(y, [m]),
              m.fn.triggerHandler &&
                (m(y).triggerHandler("ready"), m(y).off("ready")));
        }
      },
    }),
    (m.ready.promise = function (b) {
      if (!H)
        if (((H = m.Deferred()), "complete" === y.readyState))
          setTimeout(m.ready);
        else if (y.addEventListener)
          y.addEventListener("DOMContentLoaded", J, !1),
            a.addEventListener("load", J, !1);
        else {
          y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
          var c = !1;
          try {
            c = null == a.frameElement && y.documentElement;
          } catch (a) {}
          c &&
            c.doScroll &&
            (function a() {
              if (!m.isReady) {
                try {
                  c.doScroll("left");
                } catch (b) {
                  return setTimeout(a, 50);
                }
                I(), m.ready();
              }
            })();
        }
      return H.promise(b);
    });
  var L,
    K = "undefined";
  for (L in m(k)) break;
  (k.ownLast = "0" !== L),
    (k.inlineBlockNeedsLayout = !1),
    m(function () {
      var a, b, c, d;
      (c = y.getElementsByTagName("body")[0]) &&
        c.style &&
        ((b = y.createElement("div")),
        (d = y.createElement("div")),
        (d.style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K &&
          ((b.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
          a && (c.style.zoom = 1)),
        c.removeChild(d));
    }),
    (function () {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test;
        } catch (a) {
          k.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (m.acceptData = function (a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return (
        (1 === c || 9 === c) &&
        (!b || (!0 !== b && a.getAttribute("classid") === b))
      );
    });
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return !!(a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando]) && !P(a);
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    m.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = m.data(f)), 1 === f.nodeType && !m._data(f, "parsedAttrs"))
          ) {
            for (c = g.length; c--; )
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = m.camelCase(d.slice(5))), O(f, d, e[d])));
            m._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              m.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              m.data(this, a, b);
            })
          : f
          ? O(f, a, m.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          m.removeData(this, a);
        });
      },
    }),
    m.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = m._data(a, b)),
            c &&
              (!d || m.isArray(c)
                ? (d = m._data(a, b, m.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
            m.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          m._data(a, c) ||
          m._data(a, c, {
            empty: m.Callbacks("once memory").add(function () {
              m._removeData(a, b + "queue"), m._removeData(a, c);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? m.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          m.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = m._data(f[g], a + "queueHooks")) &&
            c.empty &&
            (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function (a, b) {
      return (
        (a = b || a),
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      );
    },
    V = (m.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        m.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(m(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    W = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (
      ((b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (k.leadingWhitespace = 3 === b.firstChild.nodeType),
      (k.tbody = !b.getElementsByTagName("tbody").length),
      (k.htmlSerialize = !!b.getElementsByTagName("link").length),
      (k.html5Clone =
        "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML),
      (a.type = "checkbox"),
      (a.checked = !0),
      c.appendChild(a),
      (k.appendChecked = a.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      c.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (k.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          k.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == k.deleteExpando)
    ) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (a) {
        k.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var b,
        c,
        d = y.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (k[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (k[b + "Bubbles"] = !1 === d.attributes[c].expando));
      d = null;
    })();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;
  (m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m._data(a);
      if (r) {
        for (
          c.handler && ((i = c), (c = i.handler), (e = i.selector)),
            c.guid || (c.guid = m.guid++),
            (g = r.events) || (g = r.events = {}),
            (k = r.handle) ||
              ((k = r.handle =
                function (a) {
                  return typeof m === K || (a && m.event.triggered === a.type)
                    ? void 0
                    : m.event.dispatch.apply(k.elem, arguments);
                }),
              (k.elem = a)),
            b = (b || "").match(E) || [""],
            h = b.length;
          h--;

        )
          (f = _.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = m.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = m.event.special[o] || {}),
              (l = m.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && m.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (n = g[o]) ||
                ((n = g[o] = []),
                (n.delegateCount = 0),
                (j.setup && !1 !== j.setup.call(a, d, p, k)) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
              (m.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        for (b = (b || "").match(E) || [""], j = b.length; j--; )
          if (
            ((h = _.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            for (
              l = m.event.special[o] || {},
                o = (d ? l.delegateType : l.bindType) || o,
                n = k[o] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                i = f = n.length;
              f--;

            )
              (g = n[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (n.splice(f, 1),
                  g.selector && n.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !n.length &&
              ((l.teardown && !1 !== l.teardown.call(a, p, r.handle)) ||
                m.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        n,
        o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || y),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : m.makeArray(c, [b])),
          (k = m.event.special[p] || {}),
          e || !k.trigger || !1 !== k.trigger.apply(d, c)))
      ) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (
            i = k.delegateType || p, $.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || y) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        for (n = 0; (h = o[n++]) && !b.isPropagationStopped(); )
          (b.type = n > 1 ? i : k.bindType || p),
            (f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]) &&
              f.apply &&
              m.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              !1 === b.result && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || !1 === k._default.apply(o.pop(), c)) &&
            m.acceptData(d) &&
            g &&
            d[p] &&
            !m.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (m.event.triggered = p);
          try {
            d[p]();
          } catch (a) {}
          (m.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (m._data(this, "events") || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || !1 !== k.preDispatch.call(this, a))
      ) {
        for (
          h = m.event.handlers.call(this, a, j), b = 0;
          (f = h[b++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = f.elem, g = 0;
            (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();

          )
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              void 0 !==
                (c = (
                  (m.event.special[e.origType] || {}).handle || e.handler
                ).apply(f.elem, i)) &&
                !1 === (a.result = c) &&
                (a.preventDefault(), a.stopPropagation()));
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? m(c, this).index(i) >= 0
                    : m.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (
        g ||
          (this.fixHooks[e] = g =
            Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
          d = g.props ? this.props.concat(g.props) : this.props,
          a = new m.Event(f),
          b = d.length;
        b--;

      )
        (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || y),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || y),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ca() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return m.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (m.removeEvent = y.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
        }),
    (m.Event = function (a, b) {
      return this instanceof m.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && !1 === a.returnValue)
                  ? aa
                  : ba))
            : (this.type = a),
          b && m.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(a, b);
    }),
    (m.Event.prototype = {
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = aa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = aa),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = aa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !m.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.submitBubbles ||
      (m.event.special.submit = {
        setup: function () {
          return (
            !m.nodeName(this, "form") &&
            void m.event.add(
              this,
              "click._submit keypress._submit",
              function (a) {
                var b = a.target,
                  c =
                    m.nodeName(b, "input") || m.nodeName(b, "button")
                      ? b.form
                      : void 0;
                c &&
                  !m._data(c, "submitBubbles") &&
                  (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0;
                  }),
                  m._data(c, "submitBubbles", !0));
              }
            )
          );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return (
            !m.nodeName(this, "form") && void m.event.remove(this, "._submit")
          );
        },
      }),
    k.changeBubbles ||
      (m.event.special.change = {
        setup: function () {
          return X.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (m.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                m.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    m.event.simulate("change", this, a, !0);
                })),
              !1)
            : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) &&
                  !m._data(b, "changeBubbles") &&
                  (m.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      m.event.simulate("change", this.parentNode, a, !0);
                  }),
                  m._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return m.event.remove(this, "._change"), !X.test(this.nodeName);
        },
      }),
    k.focusinBubbles ||
      m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e
              ? m._data(d, b, e)
              : (d.removeEventListener(a, c, !0), m._removeData(d, b));
          },
        };
      }),
    m.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          !1 === d)
        )
          d = ba;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return m().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = m.guid++))),
          this.each(function () {
            m.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            m(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (!1 === b || "function" == typeof b) && ((c = b), (b = void 0)),
          !1 === c && (c = ba),
          this.each(function () {
            m.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          m.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ea =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fa = / jQuery\d+="(?:null|\d+)"/g,
    ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
    ha = /^\s+/,
    ia =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ja = /<([\w:]+)/,
    ka = /<tbody/i,
    la = /<|&#?\w+;/,
    ma = /<(?:script|style|link)/i,
    na = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oa = /^$|\/(?:java|ecma)script/i,
    pa = /^true\/(.*)/,
    qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ra = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    sa = da(y),
    ta = sa.appendChild(y.createElement("div"));
  (ra.optgroup = ra.option),
    (ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead),
    (ra.th = ra.td),
    m.extend({
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);
        if (
          (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">")
            ? (f = a.cloneNode(!0))
            : ((ta.innerHTML = a.outerHTML),
              ta.removeChild((f = ta.firstChild))),
          !(
            (k.noCloneEvent && k.noCloneChecked) ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            m.isXMLDoc(a)
          ))
        )
          for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)
            d[g] && Ba(e, d[g]);
        if (b)
          if (c)
            for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)
              Aa(e, d[g]);
          else Aa(a, f);
        return (
          (d = ua(f, "script")),
          d.length > 0 && za(d, !i && ua(a, "script")),
          (d = h = e = null),
          f
        );
      },
      buildFragment: function (a, b, c, d) {
        for (
          var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0;
          n > q;
          q++
        )
          if ((f = a[q]) || 0 === f)
            if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
            else if (la.test(f)) {
              for (
                h = h || o.appendChild(b.createElement("div")),
                  i = (ja.exec(f) || ["", ""])[1].toLowerCase(),
                  l = ra[i] || ra._default,
                  h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2],
                  e = l[0];
                e--;

              )
                h = h.lastChild;
              if (
                (!k.leadingWhitespace &&
                  ha.test(f) &&
                  p.push(b.createTextNode(ha.exec(f)[0])),
                !k.tbody)
              )
                for (
                  f =
                    "table" !== i || ka.test(f)
                      ? "<table>" !== l[1] || ka.test(f)
                        ? 0
                        : h
                      : h.firstChild,
                    e = f && f.childNodes.length;
                  e--;

                )
                  m.nodeName((j = f.childNodes[e]), "tbody") &&
                    !j.childNodes.length &&
                    f.removeChild(j);
              for (m.merge(p, h.childNodes), h.textContent = ""; h.firstChild; )
                h.removeChild(h.firstChild);
              h = o.lastChild;
            } else p.push(b.createTextNode(f));
        for (
          h && o.removeChild(h),
            k.appendChecked || m.grep(ua(p, "input"), va),
            q = 0;
          (f = p[q++]);

        )
          if (
            (!d || -1 === m.inArray(f, d)) &&
            ((g = m.contains(f.ownerDocument, f)),
            (h = ua(o.appendChild(f), "script")),
            g && za(h),
            c)
          )
            for (e = 0; (f = h[e++]); ) oa.test(f.type || "") && c.push(f);
        return (h = null), o;
      },
      cleanData: function (a, b) {
        for (
          var d,
            e,
            f,
            g,
            h = 0,
            i = m.expando,
            j = m.cache,
            l = k.deleteExpando,
            n = m.event.special;
          null != (d = a[h]);
          h++
        )
          if ((b || m.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
            if (g.events)
              for (e in g.events)
                n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
            j[f] &&
              (delete j[f],
              l
                ? delete d[i]
                : typeof d.removeAttribute !== K
                ? d.removeAttribute(i)
                : (d[i] = null),
              c.push(f));
          }
      },
    }),
    m.fn.extend({
      text: function (a) {
        return V(
          this,
          function (a) {
            return void 0 === a
              ? m.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || y).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            wa(this, a).appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? m.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || m.cleanData(ua(c)),
            c.parentNode &&
              (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          for (1 === a.nodeType && m.cleanData(ua(a, !1)); a.firstChild; )
            a.removeChild(a.firstChild);
          a.options && m.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return m.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return V(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                ma.test(a) ||
                (!k.htmlSerialize && ga.test(a)) ||
                (!k.leadingWhitespace && ha.test(a)) ||
                ra[(ja.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(ia, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (m.cleanData(ua(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (a) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              m.cleanData(ua(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && na.test(p)))
          return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((i = m.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)
            (d = i),
              j !== o &&
                ((d = m.clone(d, !0, !0)), f && m.merge(g, ua(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                oa.test(d.type || "") &&
                  !m._data(d, "globalEval") &&
                  m.contains(h, d) &&
                  (d.src
                    ? m._evalUrl && m._evalUrl(d.src)
                    : m.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          qa,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        m.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              m(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ca,
    Da = {};
  !(function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return (
        (c = y.getElementsByTagName("body")[0]),
        c && c.style
          ? ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(y.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(d),
            a)
          : void 0
      );
    };
  })();
  var Ia,
    Ja,
    Ga = /^margin/,
    Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ia = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
            Ha.test(g) &&
              Ga.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : y.documentElement.currentStyle &&
      ((Ia = function (a) {
        return a.currentStyle;
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Ha.test(g) &&
            !Ka.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      })),
    !(function () {
      function i() {
        var b, c, d, i;
        (c = y.getElementsByTagName("body")[0]) &&
          c.style &&
          ((b = y.createElement("div")),
          (d = y.createElement("div")),
          (d.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(d).appendChild(b),
          (b.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (e = f = !1),
          (h = !0),
          a.getComputedStyle &&
            ((e = "1%" !== (a.getComputedStyle(b, null) || {}).top),
            (f =
              "4px" ===
              (a.getComputedStyle(b, null) || { width: "4px" }).width),
            (i = b.appendChild(y.createElement("div"))),
            (i.style.cssText = b.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (i.style.marginRight = i.style.width = "0"),
            (b.style.width = "1px"),
            (h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight))),
          (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (i = b.getElementsByTagName("td")),
          (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
          (g = 0 === i[0].offsetHeight),
          g &&
            ((i[0].style.display = ""),
            (i[1].style.display = "none"),
            (g = 0 === i[0].offsetHeight)),
          c.removeChild(d));
      }
      var b, c, d, e, f, g, h;
      (b = y.createElement("div")),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = d && d.style) &&
          ((c.cssText = "float:left;opacity:.5"),
          (k.opacity = "0.5" === c.opacity),
          (k.cssFloat = !!c.cssFloat),
          (b.style.backgroundClip = "content-box"),
          (b.cloneNode(!0).style.backgroundClip = ""),
          (k.clearCloneStyle = "content-box" === b.style.backgroundClip),
          (k.boxSizing =
            "" === c.boxSizing ||
            "" === c.MozBoxSizing ||
            "" === c.WebkitBoxSizing),
          m.extend(k, {
            reliableHiddenOffsets: function () {
              return null == g && i(), g;
            },
            boxSizingReliable: function () {
              return null == f && i(), f;
            },
            pixelPosition: function () {
              return null == e && i(), e;
            },
            reliableMarginRight: function () {
              return null == h && i(), h;
            },
          }));
    })(),
    (m.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Ma = /alpha\([^)]*\)/i,
    Na = /opacity\s*=\s*([^)]*)/,
    Oa = /^(none|table(?!-c[ea]).+)/,
    Pa = new RegExp("^(" + S + ")(.*)$", "i"),
    Qa = new RegExp("^([+-])=(" + S + ")", "i"),
    Ra = { position: "absolute", visibility: "hidden", display: "block" },
    Sa = { letterSpacing: "0", fontWeight: "400" },
    Ta = ["Webkit", "O", "Moz", "ms"];
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Ja(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: k.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = m.camelCase(b),
          i = a.style;
        if (
          ((b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h))),
          (g = m.cssHooks[b] || m.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Qa.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"),
            k.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (a) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = m.camelCase(b);
      return (
        (b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h))),
        (g = m.cssHooks[b] || m.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Ja(a, b, d)),
        "normal" === f && b in Sa && (f = Sa[b]),
        "" === c || c
          ? ((e = parseFloat(f)), !0 === c || m.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    m.each(["height", "width"], function (a, b) {
      m.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth
              ? m.swap(a, Ra, function () {
                  return Ya(a, b, d);
                })
              : Ya(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ia(a);
          return Wa(
            a,
            c,
            d
              ? Xa(
                  a,
                  b,
                  d,
                  k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    k.opacity ||
      (m.cssHooks.opacity = {
        get: function (a, b) {
          return Na.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === m.trim(f.replace(Ma, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        },
      }),
    (m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
      return b
        ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"])
        : void 0;
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (m.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }),
    m.fn.extend({
      css: function (a, b) {
        return V(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ia(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Va(this, !0);
      },
      hide: function () {
        return Va(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? m(this).show() : m(this).hide();
            });
      },
    }),
    (m.Tween = Za),
    (Za.prototype = {
      constructor: Za,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (m.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Za.propHooks[this.prop];
        return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Za.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? m.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Za.propHooks._default.set(this),
          this
        );
      },
    }),
    (Za.prototype.init.prototype = Za.prototype),
    (Za.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = m.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          m.fx.step[a.prop]
            ? m.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
            ? m.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Za.propHooks.scrollTop = Za.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (m.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (m.fx = Za.prototype.init),
    (m.fx.step = {});
  var $a,
    _a,
    ab = /^(?:toggle|show|hide)$/,
    bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cb = /queueHooks$/,
    db = [ib],
    eb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = bb.exec(b),
            f = (e && e[3]) || (m.cssNumber[a] ? "" : "px"),
            g =
              (m.cssNumber[a] || ("px" !== f && +d)) &&
              bb.exec(m.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do {
              (h = h || ".5"), (g /= h), m.style(c.elem, a, g + f);
            } while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  (m.Animation = m.extend(kb, {
    tweener: function (a, b) {
      m.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (eb[c] = eb[c] || []), eb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? db.unshift(a) : db.push(a);
    },
  })),
    (m.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? m.extend({}, a)
          : {
              complete: c || (!c && b) || (m.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !m.isFunction(b) && b),
            };
      return (
        (d.duration = m.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in m.fx.speeds
          ? m.fx.speeds[d.duration]
          : m.fx.speeds._default),
        (null == d.queue || !0 === d.queue) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue);
        }),
        d
      );
    }),
    m.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
            var b = kb(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = m.timers,
              g = m._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && m.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var b,
              c = m._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = m.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (a, b) {
      var c = m.fn[b];
      m.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    m.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        m.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var a,
        b = m.timers,
        c = 0;
      for ($a = m.now(); c < b.length; c++)
        (a = b[c])() || b[c] !== a || b.splice(c--, 1);
      b.length || m.fx.stop(), ($a = void 0);
    }),
    (m.fx.timer = function (a) {
      m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      clearInterval(_a), (_a = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (a, b) {
      return (
        (a = m.fx ? m.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a, b, c, d, e;
      (b = y.createElement("div")),
        b.setAttribute("className", "t"),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = y.createElement("select")),
        (e = c.appendChild(y.createElement("option"))),
        (a = b.getElementsByTagName("input")[0]),
        (d.style.cssText = "top:1px"),
        (k.getSetAttribute = "t" !== b.className),
        (k.style = /top/.test(d.getAttribute("style"))),
        (k.hrefNormalized = "/a" === d.getAttribute("href")),
        (k.checkOn = !!a.value),
        (k.optSelected = e.selected),
        (k.enctype = !!y.createElement("form").enctype),
        (c.disabled = !0),
        (k.optDisabled = !e.disabled),
        (a = y.createElement("input")),
        a.setAttribute("value", ""),
        (k.input = "" === a.getAttribute("value")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var lb = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      return arguments.length
        ? ((d = m.isFunction(a)),
          this.each(function (c) {
            var e;
            1 === this.nodeType &&
              ((e = d ? a.call(this, c, m(this).val()) : a),
              null == e
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : m.isArray(e) &&
                  (e = m.map(e, function (a) {
                    return null == a ? "" : a + "";
                  })),
              ((b =
                m.valHooks[this.type] ||
                m.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in b &&
                void 0 !== b.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
        ? ((b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()]),
          b && "get" in b && void 0 !== (c = b.get(e, "value"))
            ? c
            : ((c = e.value),
              "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c))
        : void 0;
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = m.find.attr(a, "value");
            return null != b ? b : m.trim(m.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    m.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = m(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = m.makeArray(b), g = e.length;
              g--;

            )
              if (((d = e[g]), m.inArray(m.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (a) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (a, b) {
          return m.isArray(b)
            ? (a.checked = m.inArray(m(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var mb,
    nb,
    ob = m.expr.attrHandle,
    pb = /^(?:checked|selected)$/i,
    qb = k.getSetAttribute,
    rb = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    },
  }),
    m.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === K
            ? m.prop(a, b, c)
            : ((1 === f && m.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = m.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void m.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          for (; (c = f[e++]); )
            (d = m.propFix[c] || c),
              m.expr.match.bool.test(c)
                ? (rb && qb) || !pb.test(c)
                  ? (a[d] = !1)
                  : (a[m.camelCase("default-" + c)] = a[d] = !1)
                : m.attr(a, c, ""),
              a.removeAttribute(qb ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (nb = {
      set: function (a, b, c) {
        return (
          !1 === b
            ? m.removeAttr(a, c)
            : (rb && qb) || !pb.test(c)
            ? a.setAttribute((!qb && m.propFix[c]) || c, c)
            : (a[m.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = ob[b] || m.find.attr;
      ob[b] =
        (rb && qb) || !pb.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = ob[b]),
                  (ob[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (ob[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[m.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (rb && qb) ||
      (m.attrHooks.value = {
        set: function (a, b, c) {
          return m.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : mb && mb.set(a, b, c);
        },
      }),
    qb ||
      ((mb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (ob.id =
        ob.name =
        ob.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (m.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: mb.set,
      }),
      (m.attrHooks.contenteditable = {
        set: function (a, b, c) {
          mb.set(a, "" !== b && b, c);
        },
      }),
      m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    k.style ||
      (m.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var sb = /^(?:input|select|textarea|button|object)$/i,
    tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = m.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (a) {}
        })
      );
    },
  }),
    m.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !m.isXMLDoc(a)),
            f && ((b = m.propFix[b] || b), (e = m.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = m.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : sb.test(a.nodeName) || (tb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    k.hrefNormalized ||
      m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    k.optSelected ||
      (m.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")))
          ) {
            for (f = 0; (e = b[f++]); )
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = m.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : "")))
          ) {
            for (f = 0; (e = b[f++]); )
              for (; d.indexOf(" " + e + " ") >= 0; )
                d = d.replace(" " + e + " ", " ");
            (g = a ? m.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            m.isFunction(a)
              ? function (c) {
                  m(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c)
                    for (
                      var b, d = 0, e = m(this), f = a.match(E) || [];
                      (b = f[d++]);

                    )
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  else
                    (c === K || "boolean" === c) &&
                      (this.className &&
                        m._data(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === a
                          ? ""
                          : m._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        m.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    m.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var vb = m.now(),
    wb = /\?/,
    xb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = m.trim(b + "");
    return e &&
      !m.trim(
        e.replace(xb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : m.error("Invalid JSON: " + b);
  }),
    (m.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (a) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          m.error("Invalid XML: " + b),
        c
      );
    });
  var yb,
    zb,
    Ab = /#.*$/,
    Bb = /([?&])_=[^&]*/,
    Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Eb = /^(?:GET|HEAD)$/,
    Fb = /^\/\//,
    Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hb = {},
    Ib = {},
    Jb = "*/".concat("*");
  try {
    zb = location.href;
  } catch (a) {
    (zb = y.createElement("a")), (zb.href = ""), (zb = zb.href);
  }
  (yb = Gb.exec(zb.toLowerCase()) || []),
    m.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: zb,
        type: "GET",
        isLocal: Db.test(yb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Jb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": m.parseJSON,
          "text xml": m.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? Mb(Mb(a, m.ajaxSettings), b) : Mb(m.ajaxSettings, a);
      },
      ajaxPrefilter: Kb(Hb),
      ajaxTransport: Kb(Ib),
      ajax: function (a, b) {
        function w(a, b, c, d) {
          var j,
            r,
            s,
            u,
            w,
            x = b;
          2 !== t &&
            ((t = 2),
            g && clearTimeout(g),
            (i = void 0),
            (f = d || ""),
            (v.readyState = a > 0 ? 4 : 0),
            (j = (a >= 200 && 300 > a) || 304 === a),
            c && (u = Nb(k, v, c)),
            (u = Ob(k, u, v, j)),
            j
              ? (k.ifModified &&
                  ((w = v.getResponseHeader("Last-Modified")),
                  w && (m.lastModified[e] = w),
                  (w = v.getResponseHeader("etag")) && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type
                  ? (x = "nocontent")
                  : 304 === a
                  ? (x = "notmodified")
                  : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
              : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
            (v.status = a),
            (v.statusText = (b || x) + ""),
            j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
            v.statusCode(q),
            (q = void 0),
            h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
            p.fireWith(l, [v, x]),
            h &&
              (n.trigger("ajaxComplete", [v, k]),
              --m.active || m.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (2 === t) {
                if (!j)
                  for (j = {}; (b = Cb.exec(f)); ) j[b[1].toLowerCase()] = b[2];
                b = j[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return 2 === t ? f : null;
            },
            setRequestHeader: function (a, b) {
              var c = a.toLowerCase();
              return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
            },
            overrideMimeType: function (a) {
              return t || (k.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this;
            },
            abort: function (a) {
              var b = a || u;
              return i && i.abort(b), w(0, b), this;
            },
          };
        if (
          ((o.promise(v).complete = p.add),
          (v.success = v.done),
          (v.error = v.fail),
          (k.url = ((a || k.url || zb) + "")
            .replace(Ab, "")
            .replace(Fb, yb[1] + "//")),
          (k.type = b.method || b.type || k.method || k.type),
          (k.dataTypes = m
            .trim(k.dataType || "*")
            .toLowerCase()
            .match(E) || [""]),
          null == k.crossDomain &&
            ((c = Gb.exec(k.url.toLowerCase())),
            (k.crossDomain = !(
              !c ||
              (c[1] === yb[1] &&
                c[2] === yb[2] &&
                (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                  (yb[3] || ("http:" === yb[1] ? "80" : "443")))
            ))),
          k.data &&
            k.processData &&
            "string" != typeof k.data &&
            (k.data = m.param(k.data, k.traditional)),
          Lb(Hb, k, b, v),
          2 === t)
        )
          return v;
        (h = k.global),
          h && 0 == m.active++ && m.event.trigger("ajaxStart"),
          (k.type = k.type.toUpperCase()),
          (k.hasContent = !Eb.test(k.type)),
          (e = k.url),
          k.hasContent ||
            (k.data &&
              ((e = k.url += (wb.test(e) ? "&" : "?") + k.data), delete k.data),
            !1 === k.cache &&
              (k.url = Bb.test(e)
                ? e.replace(Bb, "$1_=" + vb++)
                : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)),
          k.ifModified &&
            (m.lastModified[e] &&
              v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
          ((k.data && k.hasContent && !1 !== k.contentType) || b.contentType) &&
            v.setRequestHeader("Content-Type", k.contentType),
          v.setRequestHeader(
            "Accept",
            k.dataTypes[0] && k.accepts[k.dataTypes[0]]
              ? k.accepts[k.dataTypes[0]] +
                  ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "")
              : k.accepts["*"]
          );
        for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
        if (k.beforeSend && (!1 === k.beforeSend.call(l, v, k) || 2 === t))
          return v.abort();
        u = "abort";
        for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
        if ((i = Lb(Ib, k, b, v))) {
          (v.readyState = 1),
            h && n.trigger("ajaxSend", [v, k]),
            k.async &&
              k.timeout > 0 &&
              (g = setTimeout(function () {
                v.abort("timeout");
              }, k.timeout));
          try {
            (t = 1), i.send(r, w);
          } catch (a) {
            if (!(2 > t)) throw a;
            w(-1, a);
          }
        } else w(-1, "No Transport");
        return v;
      },
      getJSON: function (a, b, c) {
        return m.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return m.get(a, void 0, b, "script");
      },
    }),
    m.each(["get", "post"], function (a, b) {
      m[b] = function (a, c, d, e) {
        return (
          m.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          m.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        m.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (m._evalUrl = function (a) {
      return m.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (a) {
        if (m.isFunction(a))
          return this.each(function (b) {
            m(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                for (
                  var a = this;
                  a.firstChild && 1 === a.firstChild.nodeType;

                )
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          m.isFunction(a)
            ? function (b) {
                m(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = m(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
          m(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (m.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!k.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || m.css(a, "display")))
      );
    }),
    (m.expr.filters.visible = function (a) {
      return !m.expr.filters.hidden(a);
    });
  var Pb = /%20/g,
    Qb = /\[\]$/,
    Rb = /\r?\n/g,
    Sb = /^(?:submit|button|image|reset|file)$/i,
    Tb = /^(?:input|select|textarea|keygen)/i;
  (m.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = m.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
      m.isArray(a) || (a.jquery && !m.isPlainObject(a)))
    )
      m.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ub(c, a[c], b, e);
    return d.join("&").replace(Pb, "+");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = m.prop(this, "elements");
          return a ? m.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              Tb.test(this.nodeName) &&
              !Sb.test(a) &&
              (this.checked || !W.test(a))
            );
          })
          .map(function (a, b) {
            var c = m(this).val();
            return null == c
              ? null
              : m.isArray(c)
              ? m.map(c, function (a) {
                  return { name: b.name, value: a.replace(Rb, "\r\n") };
                })
              : { name: b.name, value: c.replace(Rb, "\r\n") };
          })
          .get();
      },
    }),
    (m.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Yb()) ||
              Zb()
            );
          }
        : Yb);
  var Vb = 0,
    Wb = {},
    Xb = m.ajaxSettings.xhr();
  a.ActiveXObject &&
    m(a).on("unload", function () {
      for (var a in Wb) Wb[a](void 0, !0);
    }),
    (k.cors = !!Xb && "withCredentials" in Xb),
    (Xb = k.ajax = !!Xb) &&
      m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Vb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Wb[g],
                      (b = void 0),
                      (f.onreadystatechange = m.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (a) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Wb[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      }),
    m.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return m.globalEval(a), a;
        },
      },
    }),
    m.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    m.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = y.head || m("head")[0] || y.documentElement;
        return {
          send: function (d, e) {
            (b = y.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || e(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var $b = [],
    _b = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = $b.pop() || m.expando + "_" + vb++;
      return (this[a] = !0), a;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          !1 !== b.jsonp &&
          (_b.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              _b.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            m.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(_b, "$1" + e))
            : !1 !== b.jsonp &&
              (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), $b.push(e)),
              g && m.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (m.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || y);
      var d = u.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = m.buildFragment([a], b, e)),
          e && e.length && m(e).remove(),
          m.merge([], d.childNodes));
    });
  var ac = m.fn.load;
  (m.fn.load = function (a, b, c) {
    if ("string" != typeof a && ac) return ac.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = m.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      m.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        m
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    (m.expr.filters.animated = function (a) {
      return m.grep(m.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var bc = a.document.documentElement;
  (m.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.css(a, "position"),
        l = m(a),
        n = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = m.css(a, "top")),
        (i = m.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        m.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (n.top = b.top - h.top + g),
        null != b.left && (n.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, n) : l.css(n);
    },
  }),
    m.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                m.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        return f
          ? ((b = f.documentElement),
            m.contains(b, e)
              ? (typeof e.getBoundingClientRect !== K &&
                  (d = e.getBoundingClientRect()),
                (c = cc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === m.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                m.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += m.css(a[0], "borderTopWidth", !0)),
                (c.left += m.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || bc;
            a && !m.nodeName(a, "html") && "static" === m.css(a, "position");

          )
            a = a.offsetParent;
          return a || bc;
        });
      },
    }),
    m.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
          return V(
            this,
            function (a, d, e) {
              var f = cc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? m(f).scrollLeft() : e,
                        c ? e : m(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    m.each(["top", "left"], function (a, b) {
      m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
        return c
          ? ((c = Ja(a, b)), Ha.test(c) ? m(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (a, b) {
      m.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          m.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (!0 === d || !0 === e ? "margin" : "border");
            return V(
              this,
              function (b, c, d) {
                var e;
                return m.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? m.css(b, c, g)
                  : m.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (m.fn.size = function () {
      return this.length;
    }),
    (m.fn.andSelf = m.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var dc = a.jQuery,
    ec = a.$;
  return (
    (m.noConflict = function (b) {
      return a.$ === m && (a.$ = ec), b && a.jQuery === m && (a.jQuery = dc), m;
    }),
    typeof b === K && (a.jQuery = a.$ = m),
    m
  );
});
function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e());
})(this, function () {
  "use strict";
  function r(t, e) {
    var n,
      o = new t(e);
    try {
      n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: o } });
    } catch (t) {
      (n = document.createEvent("CustomEvent")).initCustomEvent(
        "LazyLoad::Initialized",
        !1,
        !1,
        { instance: o }
      );
    }
    window.dispatchEvent(n);
  }
  function d(t, e) {
    return t.getAttribute("data-" + e);
  }
  function a(t, e, n) {
    var o = "data-" + e;
    null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
  }
  function s(t) {
    return "true" === d(t, "was-processed");
  }
  function f(t, e) {
    return a(t, "ll-timeout", e), 0;
  }
  function _(t) {
    return d(t, "ll-timeout");
  }
  function v(t, e) {
    t && t(e);
  }
  function g(t, e) {
    (t._loadingCount += e),
      0 === t._elements.length &&
        0 === t._loadingCount &&
        v(t._settings.callback_finish);
  }
  function o(t) {
    for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
      "SOURCE" === e.tagName && n.push(e);
    return n;
  }
  function n(t, e, n) {
    n && t.setAttribute(e, n);
  }
  function i(t, e) {
    n(t, "sizes", d(t, e.data_sizes)),
      n(t, "srcset", d(t, e.data_srcset)),
      n(t, "src", d(t, e.data_src));
  }
  function c(t, e) {
    O ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
  }
  function l(t, e, n) {
    t.addEventListener(e, n);
  }
  function u(t, e, n) {
    t.removeEventListener(e, n);
  }
  function b(t, e, n) {
    u(t, "load", e), u(t, "loadeddata", e), u(t, "error", n);
  }
  function m(t, e, n) {
    var o,
      r,
      a = n._settings,
      s = e ? a.class_loaded : a.class_error,
      i = e ? a.callback_loaded : a.callback_error,
      l = t.target;
    (o = l),
      (r = a.class_loading),
      O
        ? o.classList.remove(r)
        : (o.className = o.className
            .replace(new RegExp("(^|\\s+)" + r + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, "")),
      c(l, s),
      v(i, l),
      g(n, -1);
  }
  function h(n, o) {
    function r(t) {
      m(t, !0, o), b(n, r, s);
    }
    var t,
      e,
      a,
      s = function t(e) {
        m(e, !1, o), b(n, r, t);
      };
    (a = s),
      l((t = n), "load", (e = r)),
      l(t, "loadeddata", e),
      l(t, "error", a);
  }
  function p(t, e) {
    var n = e._observer;
    z(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
  }
  function y(t) {
    var e = _(t);
    e && (clearTimeout(e), f(t, null));
  }
  function E(u) {
    return (
      !!k &&
      ((u._observer = new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            return t.isIntersecting || 0 < t.intersectionRatio
              ? ((o = t.target),
                (c = (r = u)._settings),
                v(c.callback_enter, o),
                void (c.load_delay
                  ? ((a = o),
                    (i = (s = r)._settings.load_delay),
                    (l = _(a)) ||
                      ((l = setTimeout(function () {
                        p(a, s), y(a);
                      }, i)),
                      f(a, l)))
                  : p(o, r)))
              : ((e = t.target),
                (n = u._settings),
                v(n.callback_exit, e),
                void (n.load_delay && y(e)));
            var e, n, o, r, a, s, i, l, c;
          });
        },
        {
          root: (t = u._settings).container === document ? null : t.container,
          rootMargin: t.thresholds || t.threshold + "px",
        }
      )),
      !0)
    );
    var t;
  }
  function w(t, e) {
    return (
      (o = t || (n = e).container.querySelectorAll(n.elements_selector)),
      Array.prototype.slice.call(o).filter(function (t) {
        return !s(t);
      })
    );
    var n, o;
  }
  function t(t, e) {
    (this._settings = _extends({}, A, t)),
      (this._loadingCount = 0),
      E(this),
      this.update(e);
  }
  var e = "undefined" != typeof window,
    I =
      (e && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    k =
      e &&
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
      "isIntersecting" in window.IntersectionObserverEntry.prototype,
    O = e && "classList" in document.createElement("p"),
    A = {
      elements_selector: "img",
      container: I || e ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1,
    },
    L = {
      IMG: function (t, e) {
        var n = t.parentNode;
        n &&
          "PICTURE" === n.tagName &&
          o(n).forEach(function (t) {
            i(t, e);
          }),
          i(t, e);
      },
      IFRAME: function (t, e) {
        n(t, "src", d(t, e.data_src));
      },
      VIDEO: function (t, e) {
        o(t).forEach(function (t) {
          n(t, "src", d(t, e.data_src));
        }),
          n(t, "src", d(t, e.data_src)),
          t.load();
      },
    },
    x = ["IMG", "IFRAME", "VIDEO"],
    z = function (t, e, n) {
      var o = e._settings;
      (!n && s(t)) ||
        (-1 < x.indexOf(t.tagName) && (h(t, e), c(t, o.class_loading)),
        (function (t, e) {
          var n,
            o,
            r,
            a,
            s,
            i,
            l = e._settings,
            c = t.tagName,
            u = L[c];
          if (u)
            return (
              u(t, l),
              g(e, 1),
              (e._elements =
                ((n = e._elements),
                (o = t),
                n.filter(function (t) {
                  return t !== o;
                })))
            );
          (s = d((r = t), (a = l).data_src)),
            (i = d(r, a.data_bg)),
            s && (r.style.backgroundImage = 'url("'.concat(s, '")')),
            i && (r.style.backgroundImage = i);
        })(t, e),
        a(t, "was-processed", "true"),
        v(o.callback_reveal, t),
        v(o.callback_set, t));
    },
    N = ["IMG", "IFRAME"];
  return (
    (t.prototype = {
      update: function (t) {
        var e,
          n = this,
          o = this._settings;
        (this._elements = w(t, o)),
          !I && this._observer
            ? (o.use_native &&
                "loading" in HTMLImageElement.prototype &&
                ((e = this)._elements.forEach(function (t) {
                  -1 !== N.indexOf(t.tagName) &&
                    (t.setAttribute("loading", "lazy"), z(t, e));
                }),
                (this._elements = w(t, o))),
              this._elements.forEach(function (t) {
                n._observer.observe(t);
              }))
            : this.loadAll();
      },
      destroy: function () {
        var e = this;
        this._observer &&
          (this._elements.forEach(function (t) {
            e._observer.unobserve(t);
          }),
          (this._observer = null)),
          (this._elements = null),
          (this._settings = null);
      },
      load: function (t, e) {
        z(t, this, e);
      },
      loadAll: function () {
        var e = this;
        this._elements.forEach(function (t) {
          p(t, e);
        });
      },
    }),
    e &&
      (function (t, e) {
        if (e)
          if (e.length) for (var n, o = 0; (n = e[o]); o += 1) r(t, n);
          else r(t, e);
      })(t, window.lazyLoadOptions),
    t
  );
});
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e((t.bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  for (
    var o,
      s,
      a,
      l,
      c,
      h,
      f,
      u,
      d,
      p,
      g,
      m,
      _,
      v,
      E,
      y,
      b,
      T,
      C,
      w,
      I,
      A,
      D,
      S,
      O,
      N,
      k = (function (t) {
        var e = !1;
        function n(e) {
          var n = this,
            r = !1;
          return (
            t(this).one(i.TRANSITION_END, function () {
              r = !0;
            }),
            setTimeout(function () {
              r || i.triggerTransitionEnd(n);
            }, e),
            this
          );
        }
        var i = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var n,
              i = e.getAttribute("data-target");
            (i && "#" !== i) || (i = e.getAttribute("href") || ""),
              "#" === i.charAt(0) &&
                ((n = i),
                (i = n =
                  "function" == typeof t.escapeSelector
                    ? t.escapeSelector(n).substr(1)
                    : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
            try {
              return t(document).find(i).length > 0 ? i : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, n) {
            for (var r in n)
              if (Object.prototype.hasOwnProperty.call(n, r)) {
                var o = n[r],
                  s = e[r],
                  a =
                    s && i.isElement(s)
                      ? "element"
                      : ((l = s),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(o).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ':Option "' +
                      r +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      o +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (t.fn.emulateTransitionEnd = n),
          i.supportsTransitionEnd() &&
            (t.event.special[i.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            }),
          i
        );
      })((e = e && e.hasOwnProperty("default") ? e.default : e)),
      L =
        ((s = "alert"),
        (l = "." + (a = "bs.alert")),
        (c = (o = e).fn[s]),
        (h = {
          CLOSE: "close" + l,
          CLOSED: "closed" + l,
          CLICK_DATA_API: "click" + l + ".data-api",
        }),
        (f = "alert"),
        (u = "fade"),
        (d = "show"),
        (p = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
            }),
            (e.dispose = function () {
              o.removeData(this._element, a), (this._element = null);
            }),
            (e._getRootElement = function (t) {
              var e = k.getSelectorFromElement(t),
                n = !1;
              return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
            }),
            (e._triggerCloseEvent = function (t) {
              var e = o.Event(h.CLOSE);
              return o(t).trigger(e), e;
            }),
            (e._removeElement = function (t) {
              var e = this;
              o(t).removeClass(d),
                k.supportsTransitionEnd() && o(t).hasClass(u)
                  ? o(t)
                      .one(k.TRANSITION_END, function (n) {
                        return e._destroyElement(t, n);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(t);
            }),
            (e._destroyElement = function (t) {
              o(t).detach().trigger(h.CLOSED).remove();
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = o(this),
                  i = n.data(a);
                i || ((i = new t(this)), n.data(a, i)),
                  "close" === e && i[e](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        o(document).on(
          h.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          p._handleDismiss(new p())
        ),
        (o.fn[s] = p._jQueryInterface),
        (o.fn[s].Constructor = p),
        (o.fn[s].noConflict = function () {
          return (o.fn[s] = c), p._jQueryInterface;
        }),
        p),
      P =
        ((m = "button"),
        (v = "." + (_ = "bs.button")),
        (E = ".data-api"),
        (y = (g = e).fn[m]),
        (b = "active"),
        (T = "btn"),
        (C = "focus"),
        (w = '[data-toggle^="button"]'),
        (I = '[data-toggle="buttons"]'),
        (A = "input"),
        (D = ".active"),
        (S = ".btn"),
        (O = {
          CLICK_DATA_API: "click" + v + E,
          FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E,
        }),
        (N = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              var t = !0,
                e = !0,
                n = g(this._element).closest(I)[0];
              if (n) {
                var i = g(this._element).find(A)[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && g(this._element).hasClass(b)) t = !1;
                    else {
                      var r = g(n).find(D)[0];
                      r && g(r).removeClass(b);
                    }
                  if (t) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !g(this._element).hasClass(b)),
                      g(i).trigger("change");
                  }
                  i.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !g(this._element).hasClass(b)
                ),
                t && g(this._element).toggleClass(b);
            }),
            (e.dispose = function () {
              g.removeData(this._element, _), (this._element = null);
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = g(this).data(_);
                n || ((n = new t(this)), g(this).data(_, n)),
                  "toggle" === e && n[e]();
              });
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        g(document)
          .on(O.CLICK_DATA_API, w, function (t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(T) || (e = g(e).closest(S)),
              N._jQueryInterface.call(g(e), "toggle");
          })
          .on(O.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = g(t.target).closest(S)[0];
            g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
          }),
        (g.fn[m] = N._jQueryInterface),
        (g.fn[m].Constructor = N),
        (g.fn[m].noConflict = function () {
          return (g.fn[m] = y), N._jQueryInterface;
        }),
        N),
      x = (function (t) {
        var e = "carousel",
          n = "bs.carousel",
          o = "." + n,
          s = t.fn[e],
          a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          c = "next",
          h = "prev",
          f = "left",
          u = "right",
          d = {
            SLIDE: "slide" + o,
            SLID: "slid" + o,
            KEYDOWN: "keydown" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o,
            TOUCHEND: "touchend" + o,
            LOAD_DATA_API: "load" + o + ".data-api",
            CLICK_DATA_API: "click" + o + ".data-api",
          },
          p = "carousel",
          g = "active",
          m = "slide",
          _ = "carousel-item-right",
          v = "carousel-item-left",
          E = "carousel-item-next",
          y = "carousel-item-prev",
          b = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          T = (function () {
            function s(e, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(
                  b.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            var T = s.prototype;
            return (
              (T.next = function () {
                this._isSliding || this._slide(c);
              }),
              (T.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (T.prev = function () {
                this._isSliding || this._slide(h);
              }),
              (T.pause = function (e) {
                e || (this._isPaused = !0),
                  t(this._element).find(b.NEXT_PREV)[0] &&
                    k.supportsTransitionEnd() &&
                    (k.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (T.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (T.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(d.SLID, function () {
                      return n.to(e);
                    });
                  else {
                    if (i === e) return this.pause(), void this.cycle();
                    var r = e > i ? c : h;
                    this._slide(r, this._items[e]);
                  }
              }),
              (T.dispose = function () {
                t(this._element).off(o),
                  t.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (T._getConfig = function (t) {
                return (t = r({}, a, t)), k.typeCheckConfig(e, t, l), t;
              }),
              (T._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(d.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(d.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                    ("ontouchstart" in document.documentElement) &&
                      t(this._element).on(d.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (T._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (T._getItemIndex = function (e) {
                return (
                  (this._items = t.makeArray(t(e).parent().find(b.ITEM))),
                  this._items.indexOf(e)
                );
              }),
              (T._getItemByDirection = function (t, e) {
                var n = t === c,
                  i = t === h,
                  r = this._getItemIndex(e),
                  o = this._items.length - 1;
                if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                  return e;
                var s = (r + (t === h ? -1 : 1)) % this._items.length;
                return -1 === s
                  ? this._items[this._items.length - 1]
                  : this._items[s];
              }),
              (T._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                  r = this._getItemIndex(
                    t(this._element).find(b.ACTIVE_ITEM)[0]
                  ),
                  o = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: r,
                    to: i,
                  });
                return t(this._element).trigger(o), o;
              }),
              (T._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);
                  var n =
                    this._indicatorsElement.children[this._getItemIndex(e)];
                  n && t(n).addClass(g);
                }
              }),
              (T._slide = function (e, n) {
                var i,
                  r,
                  o,
                  s = this,
                  a = t(this._element).find(b.ACTIVE_ITEM)[0],
                  l = this._getItemIndex(a),
                  h = n || (a && this._getItemByDirection(e, a)),
                  p = this._getItemIndex(h),
                  T = Boolean(this._interval);
                if (
                  (e === c
                    ? ((i = v), (r = E), (o = f))
                    : ((i = _), (r = y), (o = u)),
                  h && t(h).hasClass(g))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(h, o).isDefaultPrevented() &&
                  a &&
                  h
                ) {
                  (this._isSliding = !0),
                    T && this.pause(),
                    this._setActiveIndicatorElement(h);
                  var C = t.Event(d.SLID, {
                    relatedTarget: h,
                    direction: o,
                    from: l,
                    to: p,
                  });
                  k.supportsTransitionEnd() && t(this._element).hasClass(m)
                    ? (t(h).addClass(r),
                      k.reflow(h),
                      t(a).addClass(i),
                      t(h).addClass(i),
                      t(a)
                        .one(k.TRANSITION_END, function () {
                          t(h)
                            .removeClass(i + " " + r)
                            .addClass(g),
                            t(a).removeClass(g + " " + r + " " + i),
                            (s._isSliding = !1),
                            setTimeout(function () {
                              return t(s._element).trigger(C);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(a).removeClass(g),
                      t(h).addClass(g),
                      (this._isSliding = !1),
                      t(this._element).trigger(C)),
                    T && this.cycle();
                }
              }),
              (s._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    o = r({}, a, t(this).data());
                  "object" == typeof e && (o = r({}, o, e));
                  var l = "string" == typeof e ? e : o.slide;
                  if (
                    (i || ((i = new s(this, o)), t(this).data(n, i)),
                    "number" == typeof e)
                  )
                    i.to(e);
                  else if ("string" == typeof l) {
                    if ("undefined" == typeof i[l])
                      throw new TypeError('No method named "' + l + '"');
                    i[l]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (s._dataApiClickHandler = function (e) {
                var i = k.getSelectorFromElement(this);
                if (i) {
                  var o = t(i)[0];
                  if (o && t(o).hasClass(p)) {
                    var a = r({}, t(o).data(), t(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (a.interval = !1),
                      s._jQueryInterface.call(t(o), a),
                      l && t(o).data(n).to(l),
                      e.preventDefault();
                  }
                }
              }),
              i(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              s
            );
          })();
        return (
          t(document).on(
            d.CLICK_DATA_API,
            b.DATA_SLIDE,
            T._dataApiClickHandler
          ),
          t(window).on(d.LOAD_DATA_API, function () {
            t(b.DATA_RIDE).each(function () {
              var e = t(this);
              T._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = T._jQueryInterface),
          (t.fn[e].Constructor = T),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = s), T._jQueryInterface;
          }),
          T
        );
      })(e),
      R = (function (t) {
        var e = "collapse",
          n = "bs.collapse",
          o = "." + n,
          s = t.fn[e],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api",
          },
          h = "show",
          f = "collapse",
          u = "collapsing",
          d = "collapsed",
          p = "width",
          g = "height",
          m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          _ = (function () {
            function o(e, n) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(n)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var i = t(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
                var o = i[r],
                  s = k.getSelectorFromElement(o);
                null !== s &&
                  t(s).filter(e).length > 0 &&
                  ((this._selector = s), this._triggerArray.push(o));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var s = o.prototype;
            return (
              (s.toggle = function () {
                t(this._element).hasClass(h) ? this.hide() : this.show();
              }),
              (s.show = function () {
                var e,
                  i,
                  r = this;
                if (
                  !this._isTransitioning &&
                  !t(this._element).hasClass(h) &&
                  (this._parent &&
                    0 ===
                      (e = t.makeArray(
                        t(this._parent)
                          .find(m.ACTIVES)
                          .filter('[data-parent="' + this._config.parent + '"]')
                      )).length &&
                    (e = null),
                  !(
                    e &&
                    (i = t(e).not(this._selector).data(n)) &&
                    i._isTransitioning
                  ))
                ) {
                  var s = t.Event(c.SHOW);
                  if ((t(this._element).trigger(s), !s.isDefaultPrevented())) {
                    e &&
                      (o._jQueryInterface.call(
                        t(e).not(this._selector),
                        "hide"
                      ),
                      i || t(e).data(n, null));
                    var a = this._getDimension();
                    t(this._element).removeClass(f).addClass(u),
                      (this._element.style[a] = 0),
                      this._triggerArray.length > 0 &&
                        t(this._triggerArray)
                          .removeClass(d)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var l = function () {
                      t(r._element).removeClass(u).addClass(f).addClass(h),
                        (r._element.style[a] = ""),
                        r.setTransitioning(!1),
                        t(r._element).trigger(c.SHOWN);
                    };
                    if (k.supportsTransitionEnd()) {
                      var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                      t(this._element)
                        .one(k.TRANSITION_END, l)
                        .emulateTransitionEnd(600),
                        (this._element.style[a] = this._element[p] + "px");
                    } else l();
                  }
                }
              }),
              (s.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(h)) {
                  var n = t.Event(c.HIDE);
                  if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      k.reflow(this._element),
                      t(this._element)
                        .addClass(u)
                        .removeClass(f)
                        .removeClass(h),
                      this._triggerArray.length > 0)
                    )
                      for (var r = 0; r < this._triggerArray.length; r++) {
                        var o = this._triggerArray[r],
                          s = k.getSelectorFromElement(o);
                        if (null !== s)
                          t(s).hasClass(h) ||
                            t(o).addClass(d).attr("aria-expanded", !1);
                      }
                    this.setTransitioning(!0);
                    var a = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(u)
                          .addClass(f)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      k.supportsTransitionEnd()
                        ? t(this._element)
                            .one(k.TRANSITION_END, a)
                            .emulateTransitionEnd(600)
                        : a();
                  }
                }
              }),
              (s.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (s.dispose = function () {
                t.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (s._getConfig = function (t) {
                return (
                  ((t = r({}, a, t)).toggle = Boolean(t.toggle)),
                  k.typeCheckConfig(e, t, l),
                  t
                );
              }),
              (s._getDimension = function () {
                return t(this._element).hasClass(p) ? p : g;
              }),
              (s._getParent = function () {
                var e = this,
                  n = null;
                k.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    "undefined" != typeof this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = t(this._config.parent)[0]);
                var i =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(n)
                    .find(i)
                    .each(function (t, n) {
                      e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [
                        n,
                      ]);
                    }),
                  n
                );
              }),
              (s._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                  var i = t(e).hasClass(h);
                  n.length > 0 &&
                    t(n).toggleClass(d, !i).attr("aria-expanded", i);
                }
              }),
              (o._getTargetFromElement = function (e) {
                var n = k.getSelectorFromElement(e);
                return n ? t(n)[0] : null;
              }),
              (o._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this),
                    s = i.data(n),
                    l = r({}, a, i.data(), "object" == typeof e && e);
                  if (
                    (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    s || ((s = new o(this, l)), i.data(n, s)),
                    "string" == typeof e)
                  ) {
                    if ("undefined" == typeof s[e])
                      throw new TypeError('No method named "' + e + '"');
                    s[e]();
                  }
                });
              }),
              i(o, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              o
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this),
              r = k.getSelectorFromElement(this);
            t(r).each(function () {
              var e = t(this),
                r = e.data(n) ? "toggle" : i.data();
              _._jQueryInterface.call(e, r);
            });
          }),
          (t.fn[e] = _._jQueryInterface),
          (t.fn[e].Constructor = _),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = s), _._jQueryInterface;
          }),
          _
        );
      })(e),
      j = "undefined" != typeof window && "undefined" != typeof document,
      H = ["Edge", "Trident", "Firefox"],
      M = 0,
      W = 0;
    W < H.length;
    W += 1
  )
    if (j && navigator.userAgent.indexOf(H[W]) >= 0) {
      M = 1;
      break;
    }
  var U =
    j && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, M));
          };
        };
  function B(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function F(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function K(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function V(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = F(t),
      n = e.overflow,
      i = e.overflowX,
      r = e.overflowY;
    return /(auto|scroll)/.test(n + r + i) ? t : V(K(t));
  }
  function Q(t) {
    var e = t && t.offsetParent,
      n = e && e.nodeName;
    return n && "BODY" !== n && "HTML" !== n
      ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) &&
        "static" === F(e, "position")
        ? Q(e)
        : e
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Y(t) {
    return null !== t.parentNode ? Y(t.parentNode) : t;
  }
  function G(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      r = n ? e : t,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
      a,
      l = o.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(r))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && Q(s.firstElementChild) !== s)
        ? Q(l)
        : l;
    var c = Y(t);
    return c.host ? G(c.host, e) : G(t, Y(e).host);
  }
  function q(t) {
    var e =
        "top" ===
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = t.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || i)[e];
    }
    return t[e];
  }
  function z(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  var X = void 0,
    Z = function () {
      return (
        void 0 === X && (X = -1 !== navigator.appVersion.indexOf("MSIE 10")), X
      );
    };
  function J(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Z()
        ? n["offset" + t] +
            i["margin" + ("Height" === t ? "Top" : "Left")] +
            i["margin" + ("Height" === t ? "Bottom" : "Right")]
        : 0
    );
  }
  function $() {
    var t = document.body,
      e = document.documentElement,
      n = Z() && getComputedStyle(e);
    return { height: J("Height", t, e, n), width: J("Width", t, e, n) };
  }
  var tt = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    et = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    nt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    it =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function rt(t) {
    return it({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function ot(t) {
    var e = {};
    if (Z())
      try {
        e = t.getBoundingClientRect();
        var n = q(t, "top"),
          i = q(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } catch (t) {}
    else e = t.getBoundingClientRect();
    var r = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      o = "HTML" === t.nodeName ? $() : {},
      s = o.width || t.clientWidth || r.right - r.left,
      a = o.height || t.clientHeight || r.bottom - r.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = F(t);
      (l -= z(h, "x")), (c -= z(h, "y")), (r.width -= l), (r.height -= c);
    }
    return rt(r);
  }
  function st(t, e) {
    var n = Z(),
      i = "HTML" === e.nodeName,
      r = ot(t),
      o = ot(e),
      s = V(t),
      a = F(e),
      l = parseFloat(a.borderTopWidth, 10),
      c = parseFloat(a.borderLeftWidth, 10),
      h = rt({
        top: r.top - o.top - l,
        left: r.left - o.left - c,
        width: r.width,
        height: r.height,
      });
    if (((h.marginTop = 0), (h.marginLeft = 0), !n && i)) {
      var f = parseFloat(a.marginTop, 10),
        u = parseFloat(a.marginLeft, 10);
      (h.top -= l - f),
        (h.bottom -= l - f),
        (h.left -= c - u),
        (h.right -= c - u),
        (h.marginTop = f),
        (h.marginLeft = u);
    }
    return (
      (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (h = (function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = q(e, "top"),
            r = q(e, "left"),
            o = n ? -1 : 1;
          return (
            (t.top += i * o),
            (t.bottom += i * o),
            (t.left += r * o),
            (t.right += r * o),
            t
          );
        })(h, e)),
      h
    );
  }
  function at(t, e, n, i) {
    var r,
      o,
      s,
      a,
      l,
      c,
      h,
      f = { top: 0, left: 0 },
      u = G(t, e);
    if ("viewport" === i)
      (o = (r = u).ownerDocument.documentElement),
        (s = st(r, o)),
        (a = Math.max(o.clientWidth, window.innerWidth || 0)),
        (l = Math.max(o.clientHeight, window.innerHeight || 0)),
        (c = q(o)),
        (h = q(o, "left")),
        (f = rt({
          top: c - s.top + s.marginTop,
          left: h - s.left + s.marginLeft,
          width: a,
          height: l,
        }));
    else {
      var d = void 0;
      "scrollParent" === i
        ? "BODY" === (d = V(K(e))).nodeName &&
          (d = t.ownerDocument.documentElement)
        : (d = "window" === i ? t.ownerDocument.documentElement : i);
      var p = st(d, u);
      if (
        "HTML" !== d.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === F(e, "position") || t(K(e)))
          );
        })(u)
      )
        f = p;
      else {
        var g = $(),
          m = g.height,
          _ = g.width;
        (f.top += p.top - p.marginTop),
          (f.bottom = m + p.top),
          (f.left += p.left - p.marginLeft),
          (f.right = _ + p.left);
      }
    }
    return (f.left += n), (f.top += n), (f.right -= n), (f.bottom -= n), f;
  }
  function lt(t, e, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = at(n, i, o, r),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return it({ key: t }, a[t], {
            area: ((e = a[t]), e.width * e.height),
          });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      h = c.length > 0 ? c[0].key : l[0].key,
      f = t.split("-")[1];
    return h + (f ? "-" + f : "");
  }
  function ct(t, e, n) {
    return st(n, G(e, n));
  }
  function ht(t) {
    var e = getComputedStyle(t),
      n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function ft(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function ut(t, e, n) {
    n = n.split("-")[0];
    var i = ht(t),
      r = { width: i.width, height: i.height },
      o = -1 !== ["right", "left"].indexOf(n),
      s = o ? "top" : "left",
      a = o ? "left" : "top",
      l = o ? "height" : "width",
      c = o ? "width" : "height";
    return (
      (r[s] = e[s] + e[l] / 2 - i[l] / 2),
      (r[a] = n === a ? e[a] - i[c] : e[ft(a)]),
      r
    );
  }
  function dt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function pt(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = dt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          B(n) &&
          ((e.offsets.popper = rt(e.offsets.popper)),
          (e.offsets.reference = rt(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function gt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function mt(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length - 1;
      i++
    ) {
      var r = e[i],
        o = r ? "" + r + n : t;
      if ("undefined" != typeof document.body.style[o]) return o;
    }
    return null;
  }
  function _t(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function vt(t, e, n, i) {
    (n.updateBound = i),
      _t(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var r = V(t);
    return (
      (function t(e, n, i, r) {
        var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          o || t(V(s.parentNode), n, i, r),
          r.push(s);
      })(r, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = r),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Et() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        _t(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function yt(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        yt(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  function Tt(t, e, n) {
    var i = dt(t, function (t) {
        return t.name === e;
      }),
      r =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!r) {
      var o = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }
    return r;
  }
  var Ct = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    wt = Ct.slice(3);
  function It(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = wt.indexOf(t),
      i = wt.slice(n + 1).concat(wt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var At = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise",
  };
  function Dt(t, e, n, i) {
    var r = [0, 0],
      o = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        dt(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] &&
      -1 === s[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
              if (!o) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (rt(a)[e] / 100) * o;
              }
              if ("vh" === s || "vw" === s)
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  o
                );
              return o;
            })(t, r, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          yt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      r
    );
  }
  var St = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: nt({}, l, o[l]),
                  end: nt({}, l, o[l] + o[c] - s[c]),
                };
              t.offsets.popper = it({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = yt(+n) ? [+n, 0] : Dt(n, o, s, a)),
              "left" === a
                ? ((o.top += l[0]), (o.left -= l[1]))
                : "right" === a
                ? ((o.top += l[0]), (o.left += l[1]))
                : "top" === a
                ? ((o.left += l[0]), (o.top -= l[1]))
                : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
              (t.popper = o),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || Q(t.instance.popper);
            t.instance.reference === n && (n = Q(n));
            var i = at(t.instance.popper, t.instance.reference, e.padding, n);
            e.boundaries = i;
            var r = e.priority,
              o = t.offsets.popper,
              s = {
                primary: function (t) {
                  var n = o[t];
                  return (
                    o[t] < i[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(o[t], i[t])),
                    nt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    r = o[n];
                  return (
                    o[t] > i[t] &&
                      !e.escapeWithReference &&
                      (r = Math.min(
                        o[n],
                        i[t] - ("right" === t ? o.width : o.height)
                      )),
                    nt({}, n, r)
                  );
                },
              };
            return (
              r.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                o = it({}, o, s[e](t));
              }),
              (t.offsets.popper = o),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
              n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Tt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              f = h.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = ht(i)[c];
            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
              (t.offsets.popper = rt(t.offsets.popper));
            var g = a[f] + a[c] / 2 - p / 2,
              m = F(t.instance.popper),
              _ = parseFloat(m["margin" + h], 10),
              v = parseFloat(m["border" + h + "Width"], 10),
              E = g - t.offsets.popper[f] - _ - v;
            return (
              (E = Math.max(Math.min(s[c] - p, E), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (nt((n = {}), f, Math.round(E)), nt(n, u, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (gt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = at(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement
              ),
              i = t.placement.split("-")[0],
              r = ft(i),
              o = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case At.FLIP:
                s = [i, r];
                break;
              case At.CLOCKWISE:
                s = It(i);
                break;
              case At.COUNTERCLOCKWISE:
                s = It(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (r = ft(i));
                var c,
                  h = t.offsets.popper,
                  f = t.offsets.reference,
                  u = Math.floor,
                  d =
                    ("left" === i && u(h.right) > u(f.left)) ||
                    ("right" === i && u(h.left) < u(f.right)) ||
                    ("top" === i && u(h.bottom) > u(f.top)) ||
                    ("bottom" === i && u(h.top) < u(f.bottom)),
                  p = u(h.left) < u(n.left),
                  g = u(h.right) > u(n.right),
                  m = u(h.top) < u(n.top),
                  _ = u(h.bottom) > u(n.bottom),
                  v =
                    ("left" === i && p) ||
                    ("right" === i && g) ||
                    ("top" === i && m) ||
                    ("bottom" === i && _),
                  E = -1 !== ["top", "bottom"].indexOf(i),
                  y =
                    !!e.flipVariations &&
                    ((E && "start" === o && p) ||
                      (E && "end" === o && g) ||
                      (!E && "start" === o && m) ||
                      (!E && "end" === o && _));
                (d || v || y) &&
                  ((t.flipped = !0),
                  (d || v) && (i = s[l + 1]),
                  y &&
                    (o =
                      "end" === (c = o) ? "start" : "start" === c ? "end" : c),
                  (t.placement = i + (o ? "-" + o : "")),
                  (t.offsets.popper = it(
                    {},
                    t.offsets.popper,
                    ut(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = pt(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (r[s ? "left" : "top"] =
                o[n] - (a ? r[s ? "width" : "height"] : 0)),
              (t.placement = ft(e)),
              (t.offsets.popper = rt(r)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Tt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = dt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = dt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== o &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== o ? o : e.gpuAcceleration,
              a = ot(Q(t.instance.popper)),
              l = { position: r.position },
              c = {
                left: Math.floor(r.left),
                top: Math.floor(r.top),
                bottom: Math.floor(r.bottom),
                right: Math.floor(r.right),
              },
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              u = mt("transform"),
              d = void 0,
              p = void 0;
            if (
              ((p = "bottom" === h ? -a.height + c.bottom : c.top),
              (d = "right" === f ? -a.width + c.right : c.left),
              s && u)
            )
              (l[u] = "translate3d(" + d + "px, " + p + "px, 0)"),
                (l[h] = 0),
                (l[f] = 0),
                (l.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                m = "right" === f ? -1 : 1;
              (l[h] = p * g), (l[f] = d * m), (l.willChange = h + ", " + f);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = it({}, _, t.attributes)),
              (t.styles = it({}, l, t.styles)),
              (t.arrowStyles = it({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, r) {
            var o = ct(0, e, t),
              s = lt(
                n.placement,
                o,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              bt(e, { position: "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Ot = (function () {
      function t(e, n) {
        var i = this,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        tt(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = U(this.update.bind(this))),
          (this.options = it({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(it({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = it(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return it({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              B(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
      }
      return (
        et(t, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (t.offsets.reference = ct(
                    this.state,
                    this.popper,
                    this.reference
                  )),
                    (t.placement = lt(
                      this.options.placement,
                      t.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.offsets.popper = ut(
                      this.popper,
                      t.offsets.reference,
                      t.placement
                    )),
                    (t.offsets.popper.position = "absolute"),
                    (t = pt(this.modifiers, t)),
                    this.state.isCreated
                      ? this.options.onUpdate(t)
                      : ((this.state.isCreated = !0), this.options.onCreate(t));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  gt(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.left = ""),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style[mt("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = vt(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return Et.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Ot.placements = Ct),
    (Ot.Defaults = St);
  var Nt = (function (t) {
      var e = "dropdown",
        n = "bs.dropdown",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("38|40|27"),
        l = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          CLICK: "click" + o,
          CLICK_DATA_API: "click" + o + ".data-api",
          KEYDOWN_DATA_API: "keydown" + o + ".data-api",
          KEYUP_DATA_API: "keyup" + o + ".data-api",
        },
        c = "disabled",
        h = "show",
        f = "dropup",
        u = "dropright",
        d = "dropleft",
        p = "dropdown-menu-right",
        g = "dropdown-menu-left",
        m = "position-static",
        _ = '[data-toggle="dropdown"]',
        v = ".dropdown form",
        E = ".dropdown-menu",
        y = ".navbar-nav",
        b = ".dropdown-menu .dropdown-item:not(.disabled)",
        T = "top-start",
        C = "top-end",
        w = "bottom-start",
        I = "bottom-end",
        A = "right-start",
        D = "left-start",
        S = { offset: 0, flip: !0, boundary: "scrollParent" },
        O = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
        },
        N = (function () {
          function s(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var v = s.prototype;
          return (
            (v.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(c)) {
                var e = s._getParentFromElement(this._element),
                  n = t(this._menu).hasClass(h);
                if ((s._clearMenus(), !n)) {
                  var i = { relatedTarget: this._element },
                    r = t.Event(l.SHOW, i);
                  if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if ("undefined" == typeof Ot)
                        throw new TypeError(
                          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                      var o = this._element;
                      t(e).hasClass(f) &&
                        (t(this._menu).hasClass(g) ||
                          t(this._menu).hasClass(p)) &&
                        (o = e),
                        "scrollParent" !== this._config.boundary &&
                          t(e).addClass(m),
                        (this._popper = new Ot(
                          o,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === t(e).closest(y).length &&
                      t("body").children().on("mouseover", null, t.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      t(this._menu).toggleClass(h),
                      t(e).toggleClass(h).trigger(t.Event(l.SHOWN, i));
                  }
                }
              }
            }),
            (v.dispose = function () {
              t.removeData(this._element, n),
                t(this._element).off(o),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (v.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (v._addEventListeners = function () {
              var e = this;
              t(this._element).on(l.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (v._getConfig = function (n) {
              return (
                (n = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  n
                )),
                k.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (v._getMenuElement = function () {
              if (!this._menu) {
                var e = s._getParentFromElement(this._element);
                this._menu = t(e).find(E)[0];
              }
              return this._menu;
            }),
            (v._getPlacement = function () {
              var e = t(this._element).parent(),
                n = w;
              return (
                e.hasClass(f)
                  ? ((n = T), t(this._menu).hasClass(p) && (n = C))
                  : e.hasClass(u)
                  ? (n = A)
                  : e.hasClass(d)
                  ? (n = D)
                  : t(this._menu).hasClass(p) && (n = I),
                n
              );
            }),
            (v._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (v._getPopperConfig = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = r(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: e,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                }
              );
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new s(this, "object" == typeof e ? e : null)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            (s._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              )
                for (var i = t.makeArray(t(_)), r = 0; r < i.length; r++) {
                  var o = s._getParentFromElement(i[r]),
                    a = t(i[r]).data(n),
                    c = { relatedTarget: i[r] };
                  if (a) {
                    var f = a._menu;
                    if (
                      t(o).hasClass(h) &&
                      !(
                        e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        t.contains(o, e.target)
                      )
                    ) {
                      var u = t.Event(l.HIDE, c);
                      t(o).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t("body").children().off("mouseover", null, t.noop),
                          i[r].setAttribute("aria-expanded", "false"),
                          t(f).removeClass(h),
                          t(o).removeClass(h).trigger(t.Event(l.HIDDEN, c)));
                    }
                  }
                }
            }),
            (s._getParentFromElement = function (e) {
              var n,
                i = k.getSelectorFromElement(e);
              return i && (n = t(i)[0]), n || e.parentNode;
            }),
            (s._dataApiKeydownHandler = function (e) {
              if (
                (/input|textarea/i.test(e.target.tagName)
                  ? !(
                      32 === e.which ||
                      (27 !== e.which &&
                        ((40 !== e.which && 38 !== e.which) ||
                          t(e.target).closest(E).length))
                    )
                  : a.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(c))
              ) {
                var n = s._getParentFromElement(this),
                  i = t(n).hasClass(h);
                if (
                  (i || (27 === e.which && 32 === e.which)) &&
                  (!i || (27 !== e.which && 32 !== e.which))
                ) {
                  var r = t(n).find(b).get();
                  if (0 !== r.length) {
                    var o = r.indexOf(e.target);
                    38 === e.which && o > 0 && o--,
                      40 === e.which && o < r.length - 1 && o++,
                      o < 0 && (o = 0),
                      r[o].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var l = t(n).find(_)[0];
                    t(l).trigger("focus");
                  }
                  t(this).trigger("click");
                }
              }
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return S;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return O;
                },
              },
            ]),
            s
          );
        })();
      return (
        t(document)
          .on(l.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler)
          .on(l.KEYDOWN_DATA_API, E, N._dataApiKeydownHandler)
          .on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, N._clearMenus)
          .on(l.CLICK_DATA_API, _, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              N._jQueryInterface.call(t(this), "toggle");
          })
          .on(l.CLICK_DATA_API, v, function (t) {
            t.stopPropagation();
          }),
        (t.fn[e] = N._jQueryInterface),
        (t.fn[e].Constructor = N),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), N._jQueryInterface;
        }),
        N
      );
    })(e),
    kt = (function (t) {
      var e = "bs.modal",
        n = "." + e,
        o = t.fn.modal,
        s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        a = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        l = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          FOCUSIN: "focusin" + n,
          RESIZE: "resize" + n,
          CLICK_DISMISS: "click.dismiss" + n,
          KEYDOWN_DISMISS: "keydown.dismiss" + n,
          MOUSEUP_DISMISS: "mouseup.dismiss" + n,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        c = "modal-scrollbar-measure",
        h = "modal-backdrop",
        f = "modal-open",
        u = "fade",
        d = "show",
        p = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler",
        },
        g = (function () {
          function o(e, n) {
            (this._config = this._getConfig(n)),
              (this._element = e),
              (this._dialog = t(e).find(p.DIALOG)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var g = o.prototype;
          return (
            (g.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (g.show = function (e) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                k.supportsTransitionEnd() &&
                  t(this._element).hasClass(u) &&
                  (this._isTransitioning = !0);
                var i = t.Event(l.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      l.CLICK_DISMISS,
                      p.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      }
                    ),
                    t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (g.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = t.Event(l.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r =
                    k.supportsTransitionEnd() && t(this._element).hasClass(u);
                  r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(l.FOCUSIN),
                    t(this._element).removeClass(d),
                    t(this._element).off(l.CLICK_DISMISS),
                    t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                    r
                      ? t(this._element)
                          .one(k.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (g.dispose = function () {
              t.removeData(this._element, e),
                t(window, document, this._element, this._backdrop).off(n),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (g.handleUpdate = function () {
              this._adjustDialog();
            }),
            (g._getConfig = function (t) {
              return (t = r({}, s, t)), k.typeCheckConfig("modal", t, a), t;
            }),
            (g._showElement = function (e) {
              var n = this,
                i = k.supportsTransitionEnd() && t(this._element).hasClass(u);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                i && k.reflow(this._element),
                t(this._element).addClass(d),
                this._config.focus && this._enforceFocus();
              var r = t.Event(l.SHOWN, { relatedTarget: e }),
                o = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(r);
                };
              i
                ? t(this._dialog)
                    .one(k.TRANSITION_END, o)
                    .emulateTransitionEnd(300)
                : o();
            }),
            (g._enforceFocus = function () {
              var e = this;
              t(document)
                .off(l.FOCUSIN)
                .on(l.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (g._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                  })
                : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS);
            }),
            (g._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(l.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(l.RESIZE);
            }),
            (g._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(f),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(l.HIDDEN);
                });
            }),
            (g._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (g._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(u) ? u : "";
              if (this._isShown && this._config.backdrop) {
                var r = k.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = h),
                  i && t(this._backdrop).addClass(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(l.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  r && k.reflow(this._backdrop),
                  t(this._backdrop).addClass(d),
                  !e)
                )
                  return;
                if (!r) return void e();
                t(this._backdrop)
                  .one(k.TRANSITION_END, e)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(d);
                var o = function () {
                  n._removeBackdrop(), e && e();
                };
                k.supportsTransitionEnd() && t(this._element).hasClass(u)
                  ? t(this._backdrop)
                      .one(k.TRANSITION_END, o)
                      .emulateTransitionEnd(150)
                  : o();
              } else e && e();
            }),
            (g._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (g._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (g._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (g._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(p.FIXED_CONTENT).each(function (n, i) {
                  var r = t(i)[0].style.paddingRight,
                    o = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", r)
                    .css(
                      "padding-right",
                      parseFloat(o) + e._scrollbarWidth + "px"
                    );
                }),
                  t(p.STICKY_CONTENT).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) - e._scrollbarWidth + "px"
                      );
                  }),
                  t(p.NAVBAR_TOGGLER).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) + e._scrollbarWidth + "px"
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = t("body").css("padding-right");
                t("body")
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (g._resetScrollbar = function () {
              t(p.FIXED_CONTENT).each(function (e, n) {
                var i = t(n).data("padding-right");
                "undefined" != typeof i &&
                  t(n).css("padding-right", i).removeData("padding-right");
              }),
                t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (
                  e,
                  n
                ) {
                  var i = t(n).data("margin-right");
                  "undefined" != typeof i &&
                    t(n).css("margin-right", i).removeData("margin-right");
                });
              var e = t("body").data("padding-right");
              "undefined" != typeof e &&
                t("body").css("padding-right", e).removeData("padding-right");
            }),
            (g._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = c), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (o._jQueryInterface = function (n, i) {
              return this.each(function () {
                var s = t(this).data(e),
                  a = r(
                    {},
                    o.Default,
                    t(this).data(),
                    "object" == typeof n && n
                  );
                if (
                  (s || ((s = new o(this, a)), t(this).data(e, s)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof s[n])
                    throw new TypeError('No method named "' + n + '"');
                  s[n](i);
                } else a.show && s.show(i);
              });
            }),
            i(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return s;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
          var i,
            o = this,
            s = k.getSelectorFromElement(this);
          s && (i = t(s)[0]);
          var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            n.preventDefault();
          var c = t(i).one(l.SHOW, function (e) {
            e.isDefaultPrevented() ||
              c.one(l.HIDDEN, function () {
                t(o).is(":visible") && o.focus();
              });
          });
          g._jQueryInterface.call(t(i), a, this);
        }),
        (t.fn.modal = g._jQueryInterface),
        (t.fn.modal.Constructor = g),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    Lt = (function (t) {
      var e = "tooltip",
        n = "bs.tooltip",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        h = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
        },
        f = "show",
        u = "out",
        d = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o,
        },
        p = "fade",
        g = "show",
        m = ".tooltip-inner",
        _ = ".arrow",
        v = "hover",
        E = "focus",
        y = "click",
        b = "manual",
        T = (function () {
          function s(t, e) {
            if ("undefined" == typeof Ot)
              throw new TypeError(
                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var T = s.prototype;
          return (
            (T.enable = function () {
              this._isEnabled = !0;
            }),
            (T.disable = function () {
              this._isEnabled = !1;
            }),
            (T.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (T.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(g))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (T.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (T.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var n = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(n);
                var i = t.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (n.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                  o = k.getUID(this.constructor.NAME);
                r.setAttribute("id", o),
                  this.element.setAttribute("aria-describedby", o),
                  this.setContent(),
                  this.config.animation && t(r).addClass(p);
                var a =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, r, this.element)
                      : this.config.placement,
                  l = this._getAttachment(a);
                this.addAttachmentClass(l);
                var c =
                  !1 === this.config.container
                    ? document.body
                    : t(this.config.container);
                t(r).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(r).appendTo(c),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new Ot(this.element, r, {
                    placement: l,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: _ },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t);
                    },
                  })),
                  t(r).addClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().on("mouseover", null, t.noop);
                var h = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === u && e._leave(null, e);
                };
                k.supportsTransitionEnd() && t(this.tip).hasClass(p)
                  ? t(this.tip)
                      .one(k.TRANSITION_END, h)
                      .emulateTransitionEnd(s._TRANSITION_DURATION)
                  : h();
              }
            }),
            (T.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                r = t.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== f &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              t(this.element).trigger(r),
                r.isDefaultPrevented() ||
                  (t(i).removeClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().off("mouseover", null, t.noop),
                  (this._activeTrigger[y] = !1),
                  (this._activeTrigger[E] = !1),
                  (this._activeTrigger[v] = !1),
                  k.supportsTransitionEnd() && t(this.tip).hasClass(p)
                    ? t(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150)
                    : o(),
                  (this._hoverState = ""));
            }),
            (T.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (T.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (T.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (T.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (T.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(p + " " + g);
            }),
            (T.setElementContent = function (e, n) {
              var i = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text())
                : e[i ? "html" : "text"](n);
            }),
            (T.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (T._getAttachment = function (t) {
              return c[t.toUpperCase()];
            }),
            (T._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if (n !== b) {
                  var i =
                      n === v
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    r =
                      n === v
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(r, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
                t(e.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return e.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (T._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (T._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? E : v] = !0),
                t(n.getTipElement()).hasClass(g) || n._hoverState === f
                  ? (n._hoverState = f)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (T._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? E : v] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = u),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === u && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (T._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (T._getConfig = function (n) {
              return (
                "number" ==
                  typeof (n = r(
                    {},
                    this.constructor.Default,
                    t(this.element).data(),
                    n
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content &&
                  (n.content = n.content.toString()),
                k.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (T._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (T._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (T._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (T._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(p),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  r = "object" == typeof e && e;
                if (
                  (i || !/dispose|hide/.test(e)) &&
                  (i || ((i = new s(this, r)), t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return h;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "Event",
                get: function () {
                  return d;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return o;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            s
          );
        })();
      return (
        (t.fn[e] = T._jQueryInterface),
        (t.fn[e].Constructor = T),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), T._jQueryInterface;
        }),
        T
      );
    })(e),
    Pt = (function (t) {
      var e = "popover",
        n = "bs.popover",
        o = "." + n,
        s = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, Lt.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        c = r({}, Lt.DefaultType, { content: "(string|element|function)" }),
        h = "fade",
        f = "show",
        u = ".popover-header",
        d = ".popover-body",
        p = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o,
        },
        g = (function (r) {
          var s, g;
          function m() {
            return r.apply(this, arguments) || this;
          }
          (g = r),
            ((s = m).prototype = Object.create(g.prototype)),
            (s.prototype.constructor = s),
            (s.__proto__ = g);
          var _ = m.prototype;
          return (
            (_.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (_.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (_.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (_.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(u), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(d), n),
                e.removeClass(h + " " + f);
            }),
            (_._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (_._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (m._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  r = "object" == typeof e ? e : null;
                if (
                  (i || !/destroy|hide/.test(e)) &&
                  (i || ((i = new m(this, r)), t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(m, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "Event",
                get: function () {
                  return p;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return o;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return c;
                },
              },
            ]),
            m
          );
        })(Lt);
      return (
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), g._jQueryInterface;
        }),
        g
      );
    })(e),
    xt = (function (t) {
      var e = "scrollspy",
        n = "bs.scrollspy",
        o = "." + n,
        s = t.fn[e],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        c = {
          ACTIVATE: "activate" + o,
          SCROLL: "scroll" + o,
          LOAD_DATA_API: "load" + o + ".data-api",
        },
        h = "dropdown-item",
        f = "active",
        u = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        d = "offset",
        p = "position",
        g = (function () {
          function s(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                u.NAV_LINKS +
                "," +
                this._config.target +
                " " +
                u.LIST_ITEMS +
                "," +
                this._config.target +
                " " +
                u.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(c.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var g = s.prototype;
          return (
            (g.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? d : p,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === p ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                  .makeArray(t(this._selector))
                  .map(function (e) {
                    var n,
                      o = k.getSelectorFromElement(e);
                    if ((o && (n = t(o)[0]), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[i]().top + r, o];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (g.dispose = function () {
              t.removeData(this._element, n),
                t(this._scrollElement).off(o),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (g._getConfig = function (n) {
              if ("string" != typeof (n = r({}, a, n)).target) {
                var i = t(n.target).attr("id");
                i || ((i = k.getUID(e)), t(n.target).attr("id", i)),
                  (n.target = "#" + i);
              }
              return k.typeCheckConfig(e, n, l), n;
            }),
            (g._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (g._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (g._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (g._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var r = this._offsets.length; r--; ) {
                  this._activeTarget !== this._targets[r] &&
                    t >= this._offsets[r] &&
                    ("undefined" == typeof this._offsets[r + 1] ||
                      t < this._offsets[r + 1]) &&
                    this._activate(this._targets[r]);
                }
              }
            }),
            (g._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",");
              n = n.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              });
              var i = t(n.join(","));
              i.hasClass(h)
                ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f),
                  i.addClass(f))
                : (i.addClass(f),
                  i
                    .parents(u.NAV_LIST_GROUP)
                    .prev(u.NAV_LINKS + ", " + u.LIST_ITEMS)
                    .addClass(f),
                  i
                    .parents(u.NAV_LIST_GROUP)
                    .prev(u.NAV_ITEMS)
                    .children(u.NAV_LINKS)
                    .addClass(f)),
                t(this._scrollElement).trigger(c.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (g._clear = function () {
              t(this._selector).filter(u.ACTIVE).removeClass(f);
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new s(this, "object" == typeof e && e)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if ("undefined" == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            s
          );
        })();
      return (
        t(window).on(c.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--; ) {
            var i = t(e[n]);
            g._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), g._jQueryInterface;
        }),
        g
      );
    })(e),
    Rt = (function (t) {
      var e = ".bs.tab",
        n = t.fn.tab,
        r = {
          HIDE: "hide" + e,
          HIDDEN: "hidden" + e,
          SHOW: "show" + e,
          SHOWN: "shown" + e,
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        o = "dropdown-menu",
        s = "active",
        a = "disabled",
        l = "fade",
        c = "show",
        h = ".dropdown",
        f = ".nav, .list-group",
        u = ".active",
        d = "> li > .active",
        p = '[data-toggle="tab"],[data-toggle="pill"],[data-toggle="list"]',
        g = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        _ = (function () {
          function e(t) {
            this._element = t;
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(s)) ||
                  t(this._element).hasClass(a)
                )
              ) {
                var n,
                  i,
                  o = t(this._element).closest(f)[0],
                  l = k.getSelectorFromElement(this._element);
                if (o) {
                  var c = "UL" === o.nodeName ? d : u;
                  i = (i = t.makeArray(t(o).find(c)))[i.length - 1];
                }
                var h = t.Event(r.HIDE, { relatedTarget: this._element }),
                  p = t.Event(r.SHOW, { relatedTarget: i });
                if (
                  (i && t(i).trigger(h),
                  t(this._element).trigger(p),
                  !p.isDefaultPrevented() && !h.isDefaultPrevented())
                ) {
                  l && (n = t(l)[0]), this._activate(this._element, o);
                  var g = function () {
                    var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                      o = t.Event(r.SHOWN, { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(o);
                  };
                  n ? this._activate(n, n.parentNode, g) : g();
                }
              }
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (n._activate = function (e, n, i) {
              var r = this,
                o = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0],
                s = i && k.supportsTransitionEnd() && o && t(o).hasClass(l),
                a = function () {
                  return r._transitionComplete(e, o, i);
                };
              o && s
                ? t(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150)
                : a();
            }),
            (n._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(c + " " + s);
                var r = t(n.parentNode).find(m)[0];
                r && t(r).removeClass(s),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(s),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                k.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(o))
              ) {
                var a = t(e).closest(h)[0];
                a && t(a).find(g).addClass(s),
                  e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.tab");
                if (
                  (r || ((r = new e(this)), i.data("bs.tab", r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })();
      return (
        t(document).on(r.CLICK_DATA_API, p, function (e) {
          e.preventDefault(), _._jQueryInterface.call(t(this), "show");
        }),
        (t.fn.tab = _._jQueryInterface),
        (t.fn.tab.Constructor = _),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = n), _._jQueryInterface;
        }),
        _
      );
    })(e);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      e[0] >= 4
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = k),
    (t.Alert = L),
    (t.Button = P),
    (t.Carousel = x),
    (t.Collapse = R),
    (t.Dropdown = Nt),
    (t.Modal = kt),
    (t.Popover = Pt),
    (t.Scrollspy = xt),
    (t.Tab = Rt),
    (t.Tooltip = Lt),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (f[b] === a) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (g[c] === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations,please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function () {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]) && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);
!(function (h, i, n, a) {
  function l(t, e) {
    (this.settings = null),
      (this.options = h.extend({}, l.Defaults, e)),
      (this.$element = h(t)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      h.each(
        ["onResize", "onThrottledResize"],
        h.proxy(function (t, e) {
          this._handlers[e] = h.proxy(this[e], this);
        }, this)
      ),
      h.each(
        l.Plugins,
        h.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
        }, this)
      ),
      h.each(
        l.Workers,
        h.proxy(function (t, e) {
          this._pipe.push({ filter: e.filter, run: h.proxy(e.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (l.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: i,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (l.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (l.Type = { Event: "event", State: "state" }),
    (l.Plugins = {}),
    (l.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
              width: "auto",
              "margin-left": s ? e : "",
              "margin-right": s ? "" : e,
            };
          !i && this.$stage.children().css(n), (t.css = n);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            o = [];
          for (t.items = { merge: !1, width: e }; s--; )
            (i = this._mergers[s]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = 1 < i || t.items.merge),
              (o[s] = n ? e * i : this._items[s].width());
          this._widths = o;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var t = [],
            e = this._items,
            i = this.settings,
            s = Math.max(2 * i.items, 4),
            n = 2 * Math.ceil(e.length / 2),
            o = i.loop && e.length ? (i.rewind ? s : Math.max(s, n)) : 0,
            r = "",
            a = "";
          for (o /= 2; 0 < o; )
            t.push(this.normalize(t.length / 2, !0)),
              (r += e[t[t.length - 1]][0].outerHTML),
              t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
              (a = e[t[t.length - 1]][0].outerHTML + a),
              (o -= 1);
          (this._clones = t),
            h(r).addClass("cloned").appendTo(this.$stage),
            h(a).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var t = this.settings.rtl ? 1 : -1,
              e = this._clones.length + this._items.length,
              i = -1,
              s = 0,
              n = 0,
              o = [];
            ++i < e;

          )
            (s = o[i - 1] || 0),
              (n = this._widths[this.relative(i)] + this.settings.margin),
              o.push(s + n * t);
          this._coordinates = o;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              "padding-left": t || "",
              "padding-right": t || "",
            };
          this.$stage.css(i);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
          if (i && t.items.merge)
            for (; e--; )
              (t.css.width = this._widths[this.relative(e)]),
                s.eq(e).css(t.css);
          else i && ((t.css.width = t.items.width), s.css(t.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          (t.current = t.current ? this.$stage.children().index(t.current) : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var t,
            e,
            i,
            s,
            n = this.settings.rtl ? 1 : -1,
            o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o,
            a = r + this.width() * n,
            h = [];
          for (i = 0, s = this._coordinates.length; i < s; i++)
            (t = this._coordinates[i - 1] || 0),
              (e = Math.abs(this._coordinates[i]) + o * n),
              ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                (this.op(e, "<", r) && this.op(e, ">", a))) &&
                h.push(i);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + h.join("),:eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (l.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = h("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(h("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (l.prototype.initializeItems = function () {
      var t = this.$element.find(".owl-item");
      if (t.length)
        return (
          (this._items = t.get().map(function (t) {
            return h(t);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (l.prototype.initialize = function () {
      var t, e, i;
      this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth &&
          !this.is("pre-loading") &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : a),
          (i = this.$element.children(e).width()),
          t.length && i <= 0 && this.preloadAutoWidthImages(t)),
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (l.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (l.prototype.setup = function () {
      var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        s = null;
      t
        ? (h.each(t, function (t) {
            t <= e && i < t && (i = Number(t));
          }),
          "function" ==
            typeof (s = h.extend({}, this.options, t[i])).stagePadding &&
            (s.stagePadding = s.stagePadding()),
          delete s.responsive,
          s.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + i
                )
            ))
        : (s = h.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: s } }),
        (this._breakpoint = i),
        (this.settings = s),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (l.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (l.prototype.prepare = function (t) {
      var e = this.trigger("prepare", { content: t });
      return (
        e.data ||
          (e.data = h("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(t)),
        this.trigger("prepared", { content: e.data }),
        e.data
      );
    }),
    (l.prototype.update = function () {
      for (
        var t = 0,
          e = this._pipe.length,
          i = h.proxy(function (t) {
            return this[t];
          }, this._invalidated),
          s = {};
        t < e;

      )
        (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) &&
          this._pipe[t].run(s),
          t++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (l.prototype.width = function (t) {
      switch ((t = t || l.Width.Default)) {
        case l.Width.Inner:
        case l.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (l.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (l.prototype.onThrottledResize = function () {
      i.clearTimeout(this.resizeTimer),
        (this.resizeTimer = i.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (l.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (l.prototype.registerEventHandlers = function () {
      h.support.transition &&
        this.$stage.on(
          h.support.transition.end + ".owl.core",
          h.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            h.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            h.proxy(this.onDragEnd, this)
          ));
    }),
    (l.prototype.onDragStart = function (t) {
      var e = null;
      3 !== t.which &&
        ((e = h.support.transform
          ? {
              x: (e = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(","))[16 === e.length ? 12 : 4],
              y: e[16 === e.length ? 13 : 5],
            }
          : ((e = this.$stage.position()),
            {
              x: this.settings.rtl
                ? e.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : e.left,
              y: e.top,
            })),
        this.is("animating") &&
          (h.support.transform ? this.animate(e.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === t.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = h(t.target)),
        (this._drag.stage.start = e),
        (this._drag.stage.current = e),
        (this._drag.pointer = this.pointer(t)),
        h(n).on(
          "mouseup.owl.core touchend.owl.core",
          h.proxy(this.onDragEnd, this)
        ),
        h(n).one(
          "mousemove.owl.core touchmove.owl.core",
          h.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on(
              "mousemove.owl.core touchmove.owl.core",
              h.proxy(this.onDragMove, this)
            ),
              (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) ||
                (t.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (l.prototype.onDragMove = function (t) {
      var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
      this.is("dragging") &&
        (t.preventDefault(),
        this.settings.loop
          ? ((e = this.coordinates(this.minimum())),
            (i = this.coordinates(this.maximum() + 1) - e),
            (o.x = ((((o.x - e) % i) + i) % i) + e))
          : ((e = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (i = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
            (o.x = Math.max(Math.min(o.x, e + s), i + s))),
        (this._drag.stage.current = o),
        this.animate(o.x));
    }),
    (l.prototype.onDragEnd = function (t) {
      var e = this.difference(this._drag.pointer, this.pointer(t)),
        i = this._drag.stage.current,
        s = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
      h(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = s),
          (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (l.prototype.closest = function (i, s) {
      var n = -1,
        o = this.width(),
        r = this.coordinates();
      return (
        this.settings.freeDrag ||
          h.each(
            r,
            h.proxy(function (t, e) {
              return (
                "left" === s && e - 30 < i && i < e + 30
                  ? (n = t)
                  : "right" === s && e - o - 30 < i && i < e - o + 30
                  ? (n = t + 1)
                  : this.op(i, "<", e) &&
                    this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) &&
                    (n = "left" === s ? t + 1 : t),
                -1 === n
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(i, ">", r[this.minimum()])
            ? (n = i = this.minimum())
            : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
        n
      );
    }),
    (l.prototype.animate = function (t) {
      var e = 0 < this.speed();
      this.is("animating") && this.onTransitionEnd(),
        e && (this.enter("animating"), this.trigger("translate")),
        h.support.transform3d && h.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + t + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : e
          ? this.$stage.animate(
              { left: t + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              h.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: t + "px" });
    }),
    (l.prototype.is = function (t) {
      return this._states.current[t] && 0 < this._states.current[t];
    }),
    (l.prototype.current = function (t) {
      if (t === a) return this._current;
      if (0 === this._items.length) return a;
      if (((t = this.normalize(t)), this._current !== t)) {
        var e = this.trigger("change", {
          property: { name: "position", value: t },
        });
        e.data !== a && (t = this.normalize(e.data)),
          (this._current = t),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (l.prototype.invalidate = function (t) {
      return (
        "string" === h.type(t) &&
          ((this._invalidated[t] = !0),
          this.is("valid") && this.leave("valid")),
        h.map(this._invalidated, function (t, e) {
          return e;
        })
      );
    }),
    (l.prototype.reset = function (t) {
      (t = this.normalize(t)) !== a &&
        ((this._speed = 0),
        (this._current = t),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]));
    }),
    (l.prototype.normalize = function (t, e) {
      var i = this._items.length,
        s = e ? 0 : this._clones.length;
      return (
        !this.isNumeric(t) || i < 1
          ? (t = a)
          : (t < 0 || i + s <= t) &&
            (t = ((((t - s / 2) % i) + i) % i) + s / 2),
        t
      );
    }),
    (l.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0);
    }),
    (l.prototype.maximum = function (t) {
      var e,
        i,
        s,
        n = this.settings,
        o = this._coordinates.length;
      if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
      else if (n.autoWidth || n.merge) {
        if ((e = this._items.length))
          for (
            i = this._items[--e].width(), s = this.$element.width();
            e-- && !(s < (i += this._items[e].width() + this.settings.margin));

          );
        o = e + 1;
      } else
        o = n.center ? this._items.length - 1 : this._items.length - n.items;
      return t && (o -= this._clones.length / 2), Math.max(o, 0);
    }),
    (l.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2;
    }),
    (l.prototype.items = function (t) {
      return t === a
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t]);
    }),
    (l.prototype.mergers = function (t) {
      return t === a
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t]);
    }),
    (l.prototype.clones = function (i) {
      var e = this._clones.length / 2,
        s = e + this._items.length,
        n = function (t) {
          return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2;
        };
      return i === a
        ? h.map(this._clones, function (t, e) {
            return n(e);
          })
        : h.map(this._clones, function (t, e) {
            return t === i ? n(e) : null;
          });
    }),
    (l.prototype.speed = function (t) {
      return t !== a && (this._speed = t), this._speed;
    }),
    (l.prototype.coordinates = function (t) {
      var e,
        i = 1,
        s = t - 1;
      return t === a
        ? h.map(
            this._coordinates,
            h.proxy(function (t, e) {
              return this.coordinates(e);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((i = -1), (s = t + 1)),
              (e = this._coordinates[t]),
              (e += ((this.width() - e + (this._coordinates[s] || 0)) / 2) * i))
            : (e = this._coordinates[s] || 0),
          (e = Math.ceil(e)));
    }),
    (l.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed);
    }),
    (l.prototype.to = function (t, e) {
      var i = this.current(),
        s = null,
        n = t - this.relative(i),
        o = (0 < n) - (n < 0),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
          (s = (((((t = i + n) - a) % r) + r) % r) + a) !== t &&
            s - n <= h &&
            0 < s - n &&
            ((i = s - n), (t = s), this.reset(i)))
        : (t = this.settings.rewind
            ? ((t % (h += 1)) + h) % h
            : Math.max(a, Math.min(h, t))),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.isVisible() && this.update();
    }),
    (l.prototype.next = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) + 1, t);
    }),
    (l.prototype.prev = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) - 1, t);
    }),
    (l.prototype.onTransitionEnd = function (t) {
      if (
        t !== a &&
        (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (l.prototype.viewport = function () {
      var t;
      return (
        this.options.responsiveBaseElement !== i
          ? (t = h(this.options.responsiveBaseElement).width())
          : i.innerWidth
          ? (t = i.innerWidth)
          : n.documentElement && n.documentElement.clientWidth
          ? (t = n.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        t
      );
    }),
    (l.prototype.replace = function (t) {
      this.$stage.empty(),
        (this._items = []),
        t && (t = t instanceof jQuery ? t : h(t)),
        this.settings.nestedItemSelector &&
          (t = t.find("." + this.settings.nestedItemSelector)),
        t
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            h.proxy(function (t, e) {
              (e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (l.prototype.add = function (t, e) {
      var i = this.relative(this._current);
      (e = e === a ? this._items.length : this.normalize(e, !0)),
        (t = t instanceof jQuery ? t : h(t)),
        this.trigger("add", { content: t, position: e }),
        (t = this.prepare(t)),
        0 === this._items.length || e === this._items.length
          ? (0 === this._items.length && this.$stage.append(t),
            0 !== this._items.length && this._items[e - 1].after(t),
            this._items.push(t),
            this._mergers.push(
              1 *
                t
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[e].before(t),
            this._items.splice(e, 0, t),
            this._mergers.splice(
              e,
              0,
              1 *
                t
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate("items"),
        this.trigger("added", { content: t, position: e });
    }),
    (l.prototype.remove = function (t) {
      (t = this.normalize(t, !0)) !== a &&
        (this.trigger("remove", { content: this._items[t], position: t }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: t }));
    }),
    (l.prototype.preloadAutoWidthImages = function (t) {
      t.each(
        h.proxy(function (t, e) {
          this.enter("pre-loading"),
            (e = h(e)),
            h(new Image())
              .one(
                "load",
                h.proxy(function (t) {
                  e.attr("src", t.target.src),
                    e.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (l.prototype.destroy = function () {
      for (var t in (this.$element.off(".owl.core"),
      this.$stage.off(".owl.core"),
      h(n).off(".owl.core"),
      !1 !== this.settings.responsive &&
        (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
      this._plugins))
        this._plugins[t].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (l.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? i < t : t < i;
        case ">":
          return s ? t < i : i < t;
        case ">=":
          return s ? t <= i : i <= t;
        case "<=":
          return s ? i <= t : t <= i;
      }
    }),
    (l.prototype.on = function (t, e, i, s) {
      t.addEventListener
        ? t.addEventListener(e, i, s)
        : t.attachEvent && t.attachEvent("on" + e, i);
    }),
    (l.prototype.off = function (t, e, i, s) {
      t.removeEventListener
        ? t.removeEventListener(e, i, s)
        : t.detachEvent && t.detachEvent("on" + e, i);
    }),
    (l.prototype.trigger = function (t, e, i, s, n) {
      var o = { item: { count: this._items.length, index: this.current() } },
        r = h.camelCase(
          h
            .grep(["on", t, i], function (t) {
              return t;
            })
            .join("-")
            .toLowerCase()
        ),
        a = h.Event(
          [t, "owl", i || "carousel"].join(".").toLowerCase(),
          h.extend({ relatedTarget: this }, o, e)
        );
      return (
        this._supress[t] ||
          (h.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a);
          }),
          this.register({ type: l.Type.Event, name: t }),
          this.$element.trigger(a),
          this.settings &&
            "function" == typeof this.settings[r] &&
            this.settings[r].call(this, a)),
        a
      );
    }),
    (l.prototype.enter = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e] === a && (this._states.current[e] = 0),
            this._states.current[e]++;
        }, this)
      );
    }),
    (l.prototype.leave = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e]--;
        }, this)
      );
    }),
    (l.prototype.register = function (i) {
      if (i.type === l.Type.Event) {
        if (
          (h.event.special[i.name] || (h.event.special[i.name] = {}),
          !h.event.special[i.name].owl)
        ) {
          var e = h.event.special[i.name]._default;
          (h.event.special[i.name]._default = function (t) {
            return !e ||
              !e.apply ||
              (t.namespace && -1 !== t.namespace.indexOf("owl"))
              ? t.namespace && -1 < t.namespace.indexOf("owl")
              : e.apply(this, arguments);
          }),
            (h.event.special[i.name].owl = !0);
        }
      } else
        i.type === l.Type.State &&
          (this._states.tags[i.name]
            ? (this._states.tags[i.name] = this._states.tags[i.name].concat(
                i.tags
              ))
            : (this._states.tags[i.name] = i.tags),
          (this._states.tags[i.name] = h.grep(
            this._states.tags[i.name],
            h.proxy(function (t, e) {
              return h.inArray(t, this._states.tags[i.name]) === e;
            }, this)
          )));
    }),
    (l.prototype.suppress = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          this._supress[e] = !0;
        }, this)
      );
    }),
    (l.prototype.release = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          delete this._supress[e];
        }, this)
      );
    }),
    (l.prototype.pointer = function (t) {
      var e = { x: null, y: null };
      return (
        (t =
          (t = t.originalEvent || t || i.event).touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t).pageX
          ? ((e.x = t.pageX), (e.y = t.pageY))
          : ((e.x = t.clientX), (e.y = t.clientY)),
        e
      );
    }),
    (l.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t));
    }),
    (l.prototype.difference = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }),
    (h.fn.owlCarousel = function (e) {
      var s = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var t = h(this),
          i = t.data("owl.carousel");
        i ||
          ((i = new l(this, "object" == typeof e && e)),
          t.data("owl.carousel", i),
          h.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (t, e) {
              i.register({ type: l.Type.Event, name: e }),
                i.$element.on(
                  e + ".owl.carousel.core",
                  h.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([e]),
                      i[e].apply(this, [].slice.call(arguments, 1)),
                      this.release([e]));
                  }, i)
                );
            }
          )),
          "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s);
      });
    }),
    (h.fn.owlCarousel.Constructor = l);
})(window.Zepto || window.jQuery, window, document),
  (function (e, i, t, s) {
    var n = function (t) {
      (this._core = t),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": e.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = e.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (n.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = i.setInterval(
            e.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (n.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in (i.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, o, t, e) {
    var i = function (t) {
      (this._core = t),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (t) {
              if (
                t.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((t.property && "position" == t.property.name) ||
                  "initialized" == t.type)
              ) {
                var e = this._core.settings,
                  i = (e.center && Math.ceil(e.items / 2)) || e.items,
                  s = (e.center && -1 * i) || 0,
                  n =
                    (t.property && void 0 !== t.property.value
                      ? t.property.value
                      : this._core.current()) + s,
                  o = this._core.clones().length,
                  r = a.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  0 < e.lazyLoadEager &&
                  ((i += e.lazyLoadEager),
                  e.loop && ((n -= e.lazyLoadEager), i++));
                  s++ < i;

                )
                  this.load(o / 2 + this._core.relative(n)),
                    o && a.each(this._core.clones(this._core.relative(n)), r),
                    n++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (i.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (i.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
          i = e && e.find(".owl-lazy");
        !i ||
          -1 < a.inArray(e.get(0), this._loaded) ||
          (i.each(
            a.proxy(function (t, e) {
              var i,
                s = a(e),
                n =
                  (1 < o.devicePixelRatio && s.attr("data-src-retina")) ||
                  s.attr("data-src") ||
                  s.attr("data-srcset");
              this._core.trigger("load", { element: s, url: n }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: n },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", n)
                  : s.is("source")
                  ? s
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: s, url: n },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", n)
                  : (((i = new Image()).onload = a.proxy(function () {
                      s.css({
                        "background-image": 'url("' + n + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: n },
                          "lazy"
                        );
                    }, this)),
                    (i.src = n));
            }, this)
          ),
          this._loaded.push(e.get(0)));
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (r, i, t, e) {
    var s = function (t) {
      (this._core = t),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": r.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = r.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var e = this;
      r(i).on("load", function () {
        e._core.settings.autoHeight && e.update();
      }),
        r(i).resize(function () {
          e._core.settings.autoHeight &&
            (null != e._intervalId && clearTimeout(e._intervalId),
            (e._intervalId = setTimeout(function () {
              e.update();
            }, 250)));
        });
    };
    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (s.prototype.update = function () {
        var t = this._core._current,
          e = t + this._core.settings.items,
          i = this._core.settings.lazyLoad,
          s = this._core.$stage.children().toArray().slice(t, e),
          n = [],
          o = 0;
        r.each(s, function (t, e) {
          n.push(r(e).height());
        }),
          (o = Math.max.apply(null, n)) <= 1 &&
            i &&
            this._previousHeight &&
            (o = this._previousHeight),
          (this._previousHeight = o),
          this._core.$stage
            .parent()
            .height(o)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (r.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (c, t, e, i) {
    var s = function (t) {
      (this._core = t),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": c.proxy(function (t) {
            if (t.namespace) {
              var e = c(t.content).find(".owl-video");
              e.length &&
                (e.css("display", "none"), this.fetch(e, c(t.content)));
            }
          }, this),
        }),
        (this._core.options = c.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          c.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          -1 <
          (s = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu")
        )
          i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
          if (!(-1 < s[3].indexOf("vzaar")))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (s = s[6]),
          (this._videos[r] = { type: i, id: s, width: n, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (s.prototype.thumbnail = function (e, t) {
        var i,
          s,
          n =
            t.width && t.height
              ? "width:" + t.width + "px;height:" + t.height + "px;"
              : "",
          o = e.find("img"),
          r = "src",
          a = "",
          h = this._core.settings,
          l = function (t) {
            (i = h.lazyLoad
              ? c("<div/>", { class: "owl-video-tn " + a, srcType: t })
              : c("<div/>", {
                  class: "owl-video-tn",
                  style: "opacity:1;background-image:url(" + t + ")",
                })),
              e.after(i),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap(c("<div/>", { class: "owl-video-wrapper", style: n })),
          this._core.settings.lazyLoad && ((r = "data-src"), (a = "owl-lazy")),
          o.length)
        )
          return l(o.attr(r)), o.remove(), !1;
        "youtube" === t.type
          ? ((s = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), l(s))
          : "vimeo" === t.type
          ? c.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t[0].thumbnail_large), l(s);
              },
            })
          : "vzaar" === t.type &&
            c.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t.framegrab_url), l(s);
              },
            });
      }),
      (s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (s.prototype.play = function (t) {
        var e,
          i = c(t.target).closest("." + this._core.settings.itemClass),
          s = this._videos[i.attr("data-video")],
          n = s.width || "100%",
          o = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          (e = c(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", o),
          e.attr("width", n),
          "youtube" === s.type
            ? e.attr(
                "src",
                "//www.youtube.com/embed/" +
                  s.id +
                  "?autoplay=1&rel=0&v=" +
                  s.id
              )
            : "vimeo" === s.type
            ? e.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1")
            : "vzaar" === s.type &&
              e.attr(
                "src",
                "//view.vzaar.com/" + s.id + "/player?autoplay=true"
              ),
          c(e)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(i.find(".owl-video")),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (s.prototype.isInFullScreen = function () {
        var t =
          e.fullscreenElement ||
          e.mozFullScreenElement ||
          e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame");
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (c.fn.owlCarousel.Constructor.Plugins.Video = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (r, t, e, i) {
    var s = function (t) {
      (this.core = t),
        (this.core.options = r.extend({}, s.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = void 0),
        (this.next = void 0),
        (this.handlers = {
          "change.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            r.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (s.Defaults = { animateOut: !1, animateIn: !1 }),
      (s.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          r.support.animation &&
          r.support.transition
        ) {
          this.core.speed(0);
          var t,
            e = r.proxy(this.clear, this),
            i = this.core.$stage.children().eq(this.previous),
            s = this.core.$stage.children().eq(this.next),
            n = this.core.settings.animateIn,
            o = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (o &&
              ((t =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(r.support.animation.end, e)
                .css({ left: t + "px" })
                .addClass("animated owl-animated-out")
                .addClass(o)),
            n &&
              s
                .one(r.support.animation.end, e)
                .addClass("animated owl-animated-in")
                .addClass(n));
        }
      }),
      (s.prototype.clear = function (t) {
        r(t.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (r.fn.owlCarousel.Constructor.Plugins.Animate = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, n, e, t) {
    var i = function (t) {
      (this._core = t),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": s.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": s.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": s.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": s.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = s.extend({}, i.Defaults, this._core.options));
    };
    (i.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (i.prototype._next = function (t) {
        (this._call = n.setTimeout(
          s.proxy(this._next, this, t),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            e.hidden ||
            this._core.next(t || this._core.settings.autoplaySpeed);
      }),
      (i.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (i.prototype.play = function (t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"),
          (t = t || this._core.settings.autoplayTimeout),
          (i = Math.min(this._time % (this._timeout || t), t)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : n.clearTimeout(this._call),
          (this._time += (this.read() % t) - i),
          (this._timeout = t),
          (this._call = n.setTimeout(s.proxy(this._next, this, e), t - i));
      }),
      (i.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          n.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (i.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          n.clearTimeout(this._call));
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.autoplay = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, t, e, i) {
    "use strict";
    var s = function (t) {
      (this._core = t),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  o(t.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = o.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (s.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (s.prototype.initialize = function () {
        var t,
          i = this._core.settings;
        for (t in ((this._controls.$relative = (
          i.navContainer
            ? o(i.navContainer)
            : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = o("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = o("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            o('<button role="button">')
              .addClass(i.dotClass)
              .append(o("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? o(i.dotsContainer)
            : o("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          o.proxy(function (t) {
            var e = o(t.target).parent().is(this._controls.$absolute)
              ? o(t.target).index()
              : o(t.target).parent().index();
            t.preventDefault(), this.to(e, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[t] = o.proxy(this[t], this);
      }),
      (s.prototype.destroy = function () {
        var t, e, i, s, n;
        for (t in ((n = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && n.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (s.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          s = i + this._core.items().length,
          n = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0; t < s; t++) {
            if (r <= e || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(n, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(n, t - i) === n)
              )
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (s.prototype.draw = function () {
        var t,
          e = this._core.settings,
          i = this._core.items().length <= e.items,
          s = this._core.relative(this._core.current()),
          n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i),
          e.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !n && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !n && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !e.dots || i),
          e.dots &&
            ((t =
              this._pages.length - this._controls.$absolute.children().length),
            e.dotsData && 0 !== t
              ? this._controls.$absolute.html(this._templates.join(""))
              : 0 < t
              ? this._controls.$absolute.append(
                  new Array(t + 1).join(this._templates[0])
                )
              : t < 0 && this._controls.$absolute.children().slice(t).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(o.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (s.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
          index: o.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            e &&
            (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items),
        };
      }),
      (s.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o
          .grep(
            this._pages,
            o.proxy(function (t, e) {
              return t.start <= i && t.end >= i;
            }, this)
          )
          .pop();
      }),
      (s.prototype.getPosition = function (t) {
        var e,
          i,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((e = o.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              t ? ++e : --e,
              (e = this._pages[((e % i) + i) % i].start))
            : ((e = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              t ? (e += s.slideBy) : (e -= s.slideBy)),
          e
        );
      }),
      (s.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
      }),
      (s.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
      }),
      (s.prototype.to = function (t, e, i) {
        var s;
        !i && this._pages.length
          ? ((s = this._pages.length),
            o.proxy(this._overrides.to, this._core)(
              this._pages[((t % s) + s) % s].start,
              e
            ))
          : o.proxy(this._overrides.to, this._core)(t, e);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Navigation = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, n, t, e) {
    "use strict";
    var i = function (t) {
      (this._core = t),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (t) {
            t.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              s(n).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": s.proxy(function (t) {
            if (t.namespace) {
              var e = s(t.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!e) return;
              this._hashes[e] = t.content;
            }
          }, this),
          "changed.owl.carousel": s.proxy(function (t) {
            if (t.namespace && "position" === t.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = s
                  .map(this._hashes, function (t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!e || n.location.hash.slice(1) === e) return;
              n.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = s.extend({}, i.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        s(n).on(
          "hashchange.owl.navigation",
          s.proxy(function (t) {
            var e = n.location.hash.substring(1),
              i = this._core.$stage.children(),
              s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (i.Defaults = { URLhashListener: !1 }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in (s(n).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Hash = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (n, t, e, o) {
    var r = n("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      };
    function s(t, i) {
      var s = !1,
        e = t.charAt(0).toUpperCase() + t.slice(1);
      return (
        n.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
          if (r[e] !== o) return (s = !i || e), !1;
        }),
        s
      );
    }
    function h(t) {
      return s(t, !0);
    }
    !!s("transition") &&
      ((n.support.transition = new String(h("transition"))),
      (n.support.transition.end = i.transition.end[n.support.transition])),
      !!s("animation") &&
        ((n.support.animation = new String(h("animation"))),
        (n.support.animation.end = i.animation.end[n.support.animation])),
      s("transform") &&
        ((n.support.transform = new String(h("transform"))),
        (n.support.transform3d = !!s("perspective")));
  })(window.Zepto || window.jQuery, window, document);
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "undefined" != typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  "use strict";
  var b = window.Slick || {};
  (b = (function () {
    function c(c, d) {
      var f,
        e = this;
      (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        a.extend(e, e.initials),
        (e.activeBreakpoint = null),
        (e.animType = null),
        (e.animProp = null),
        (e.breakpoints = []),
        (e.breakpointSettings = []),
        (e.cssTransitions = !1),
        (e.focussed = !1),
        (e.interrupted = !1),
        (e.hidden = "hidden"),
        (e.paused = !0),
        (e.positionProp = null),
        (e.respondTo = null),
        (e.rowCount = 1),
        (e.shouldClick = !0),
        (e.$slider = a(c)),
        (e.$slidesCache = null),
        (e.transformType = null),
        (e.transitionType = null),
        (e.visibilityChange = "visibilitychange"),
        (e.windowWidth = 0),
        (e.windowTimer = null),
        (f = a(c).data("slick") || {}),
        (e.options = a.extend({}, e.defaults, d, f)),
        (e.currentSlide = e.options.initialSlide),
        (e.originalSettings = e.options),
        void 0 !== document.mozHidden
          ? ((e.hidden = "mozHidden"),
            (e.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((e.hidden = "webkitHidden"),
            (e.visibilityChange = "webkitvisibilitychange")),
        (e.autoPlay = a.proxy(e.autoPlay, e)),
        (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
        (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
        (e.changeSlide = a.proxy(e.changeSlide, e)),
        (e.clickHandler = a.proxy(e.clickHandler, e)),
        (e.selectHandler = a.proxy(e.selectHandler, e)),
        (e.setPosition = a.proxy(e.setPosition, e)),
        (e.swipeHandler = a.proxy(e.swipeHandler, e)),
        (e.dragHandler = a.proxy(e.dragHandler, e)),
        (e.keyHandler = a.proxy(e.keyHandler, e)),
        (e.instanceUid = b++),
        (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        e.registerBreakpoints(),
        e.init(!0);
    }
    var b = 0;
    return c;
  })()),
    (b.prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a,input,button,select")
        .attr({ tabindex: "0" });
    }),
    (b.prototype.addSlide = b.prototype.slickAdd =
      function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) (d = c), (c = null);
        else if (c < 0 || c >= e.slideCount) return !1;
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
              ? a(b).insertBefore(e.$slides.eq(c))
              : a(b).insertAfter(e.$slides.eq(c))
            : !0 === d
            ? a(b).prependTo(e.$slideTrack)
            : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
          }),
          (e.$slidesCache = e.$slides),
          e.reinit();
      }),
    (b.prototype.animateHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        !0 === a.options.adaptiveHeight &&
        !1 === a.options.vertical
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({ height: b }, a.options.speed);
      }
    }),
    (b.prototype.animateSlide = function (b, c) {
      var d = {},
        e = this;
      e.animateHeight(),
        !0 === e.options.rtl && !1 === e.options.vertical && (b = -b),
        !1 === e.transformsEnabled
          ? !1 === e.options.vertical
            ? e.$slideTrack.animate(
                { left: b },
                e.options.speed,
                e.options.easing,
                c
              )
            : e.$slideTrack.animate(
                { top: b },
                e.options.speed,
                e.options.easing,
                c
              )
          : !1 === e.cssTransitions
          ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft),
            a({ animStart: e.currentLeft }).animate(
              { animStart: b },
              {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                  (a = Math.ceil(a)),
                    !1 === e.options.vertical
                      ? ((d[e.animType] = "translate(" + a + "px,0px)"),
                        e.$slideTrack.css(d))
                      : ((d[e.animType] = "translate(0px," + a + "px)"),
                        e.$slideTrack.css(d));
                },
                complete: function () {
                  c && c.call();
                },
              }
            ))
          : (e.applyTransition(),
            (b = Math.ceil(b)),
            !1 === e.options.vertical
              ? (d[e.animType] = "translate3d(" + b + "px,0px,0px)")
              : (d[e.animType] = "translate3d(0px," + b + "px,0px)"),
            e.$slideTrack.css(d),
            c &&
              setTimeout(function () {
                e.disableTransition(), c.call();
              }, e.options.speed));
    }),
    (b.prototype.getNavTarget = function () {
      var b = this,
        c = b.options.asNavFor;
      return c && null !== c && (c = a(c).not(b.$slider)), c;
    }),
    (b.prototype.asNavFor = function (b) {
      var c = this,
        d = c.getNavTarget();
      null !== d &&
        "object" == typeof d &&
        d.each(function () {
          var c = a(this).slick("getSlick");
          c.unslicked || c.slideHandler(b, !0);
        });
    }),
    (b.prototype.applyTransition = function (a) {
      var b = this,
        c = {};
      !1 === b.options.fade
        ? (c[b.transitionType] =
            b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
        : (c[b.transitionType] =
            "opacity " + b.options.speed + "ms " + b.options.cssEase),
        !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow &&
          (a.autoPlayTimer = setInterval(
            a.autoPlayIterator,
            a.options.autoplaySpeed
          ));
    }),
    (b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }),
    (b.prototype.autoPlayIterator = function () {
      var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
      a.paused ||
        a.interrupted ||
        a.focussed ||
        (!1 === a.options.infinite &&
          (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
            ? (a.direction = 0)
            : 0 === a.direction &&
              ((b = a.currentSlide - a.options.slidesToScroll),
              a.currentSlide - 1 == 0 && (a.direction = 1))),
        a.slideHandler(b));
    }),
    (b.prototype.buildArrows = function () {
      var b = this;
      !0 === b.options.arrows &&
        ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
        (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
        b.slideCount > b.options.slidesToShow
          ? (b.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.htmlExpr.test(b.options.prevArrow) &&
              b.$prevArrow.prependTo(b.options.appendArrows),
            b.htmlExpr.test(b.options.nextArrow) &&
              b.$nextArrow.appendTo(b.options.appendArrows),
            !0 !== b.options.infinite &&
              b.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : b.$prevArrow
              .add(b.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (b.prototype.buildDots = function () {
      var c,
        d,
        b = this;
      if (!0 === b.options.dots && b.slideCount > b.options.slidesToShow) {
        for (
          b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0;
          c <= b.getDotCount();
          c += 1
        )
          d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
        (b.$dots = d.appendTo(b.options.appendDots)),
          b.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (b.prototype.buildOut = function () {
      var b = this;
      (b.$slides = b.$slider
        .children(b.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.$slides.each(function (b, c) {
          a(c)
            .attr("data-slick-index", b)
            .data("originalStyling", a(c).attr("style") || "");
        }),
        b.$slider.addClass("slick-slider"),
        (b.$slideTrack =
          0 === b.slideCount
            ? a('<div class="slick-track"/>').appendTo(b.$slider)
            : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (b.$list = b.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        b.$slideTrack.css("opacity", 0),
        (!0 !== b.options.centerMode && !0 !== b.options.swipeToSlide) ||
          (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        !0 === b.options.draggable && b.$list.addClass("draggable");
    }),
    (b.prototype.buildRows = function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;
      if (
        ((e = document.createDocumentFragment()),
        (g = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0;
          b < f;
          b++
        ) {
          var i = document.createElement("div");
          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");
            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }
            i.appendChild(j);
          }
          e.appendChild(i);
        }
        a.$slider.empty().append(e),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (b.prototype.checkResponsive = function (b, c) {
      var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();
      if (
        ("window" === d.respondTo
          ? (g = j)
          : "slider" === d.respondTo
          ? (g = i)
          : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive &&
          d.options.responsive.length &&
          null !== d.options.responsive)
      ) {
        f = null;
        for (e in d.breakpoints)
          d.breakpoints.hasOwnProperty(e) &&
            (!1 === d.originalSettings.mobileFirst
              ? g < d.breakpoints[e] && (f = d.breakpoints[e])
              : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        null !== f
          ? null !== d.activeBreakpoint
            ? (f !== d.activeBreakpoint || c) &&
              ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  !0 === b && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
            : ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  !0 === b && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
          : null !== d.activeBreakpoint &&
            ((d.activeBreakpoint = null),
            (d.options = d.originalSettings),
            !0 === b && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            (h = f)),
          b || !1 === h || d.$slider.trigger("breakpoint", [d, h]);
      }
    }),
    (b.prototype.changeSlide = function (b, c) {
      var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);
      switch (
        (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        (h = d.slideCount % d.options.slidesToScroll != 0),
        (f = h
          ? 0
          : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
        b.data.message)
      ) {
        case "previous":
          (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide - g, !1, c);
          break;
        case "next":
          (g = 0 === f ? d.options.slidesToScroll : f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide + g, !1, c);
          break;
        case "index":
          var i =
            0 === b.data.index
              ? 0
              : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (b.prototype.checkNavigable = function (a) {
      var c,
        d,
        b = this;
      if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
        a = c[c.length - 1];
      else
        for (var e in c) {
          if (a < c[e]) {
            a = d;
            break;
          }
          d = c[e];
        }
      return a;
    }),
    (b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots &&
        null !== b.$dots &&
        a("li", b.$dots)
          .off("click.slick", b.changeSlide)
          .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
          .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        !0 === b.options.arrows &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
          b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        !0 === b.options.accessibility &&
          b.$list.off("keydown.slick", b.keyHandler),
        !0 === b.options.focusOnSelect &&
          a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + b.instanceUid,
          b.orientationChange
        ),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off(
          "dragstart",
          b.preventDefault
        ),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.cleanUpSlideEvents = function () {
      var b = this;
      b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.cleanUpRows = function () {
      var b,
        a = this;
      a.options.rows > 1 &&
        ((b = a.$slides.children().children()),
        b.removeAttr("style"),
        a.$slider.empty().append(b));
    }),
    (b.prototype.clickHandler = function (a) {
      !1 === this.shouldClick &&
        (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }),
    (b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(),
        (c.touchObject = {}),
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow &&
          c.$prevArrow.length &&
          (c.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow &&
          c.$nextArrow.length &&
          (c.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides &&
          (c.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          c.$slideTrack.children(this.options.slide).detach(),
          c.$slideTrack.detach(),
          c.$list.detach(),
          c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        (c.unslicked = !0),
        b || c.$slider.trigger("destroy", [c]);
    }),
    (b.prototype.disableTransition = function (a) {
      var b = this,
        c = {};
      (c[b.transitionType] = ""),
        !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.fadeSlide = function (a, b) {
      var c = this;
      !1 === c.cssTransitions
        ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
          c.$slides
            .eq(a)
            .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a),
          c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
          b &&
            setTimeout(function () {
              c.disableTransition(a), b.call();
            }, c.options.speed));
    }),
    (b.prototype.fadeSlideOut = function (a) {
      var b = this;
      !1 === b.cssTransitions
        ? b.$slides
            .eq(a)
            .animate(
              { opacity: 0, zIndex: b.options.zIndex - 2 },
              b.options.speed,
              b.options.easing
            )
        : (b.applyTransition(a),
          b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }),
    (b.prototype.filterSlides = b.prototype.slickFilter =
      function (a) {
        var b = this;
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit());
      }),
    (b.prototype.focusHandler = function () {
      var b = this;
      b.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
          c.stopImmediatePropagation();
          var d = a(this);
          setTimeout(function () {
            b.options.pauseOnFocus &&
              ((b.focussed = d.is(":focus")), b.autoPlay());
          }, 0);
        });
    }),
    (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (b.prototype.getDotCount = function () {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (!0 === a.options.infinite)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else if (!0 === a.options.centerMode) d = a.slideCount;
      else if (a.options.asNavFor)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else
        d =
          1 +
          Math.ceil(
            (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
          );
      return d - 1;
    }),
    (b.prototype.getLeft = function (a) {
      var c,
        d,
        f,
        b = this,
        e = 0;
      return (
        (b.slideOffset = 0),
        (d = b.$slides.first().outerHeight(!0)),
        !0 === b.options.infinite
          ? (b.slideCount > b.options.slidesToShow &&
              ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
              (e = d * b.options.slidesToShow * -1)),
            b.slideCount % b.options.slidesToScroll != 0 &&
              a + b.options.slidesToScroll > b.slideCount &&
              b.slideCount > b.options.slidesToShow &&
              (a > b.slideCount
                ? ((b.slideOffset =
                    (b.options.slidesToShow - (a - b.slideCount)) *
                    b.slideWidth *
                    -1),
                  (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                : ((b.slideOffset =
                    (b.slideCount % b.options.slidesToScroll) *
                    b.slideWidth *
                    -1),
                  (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
          : a + b.options.slidesToShow > b.slideCount &&
            ((b.slideOffset =
              (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
        b.slideCount <= b.options.slidesToShow &&
          ((b.slideOffset = 0), (e = 0)),
        !0 === b.options.centerMode && b.slideCount <= b.options.slidesToShow
          ? (b.slideOffset =
              (b.slideWidth * Math.floor(b.options.slidesToShow)) / 2 -
              (b.slideWidth * b.slideCount) / 2)
          : !0 === b.options.centerMode && !0 === b.options.infinite
          ? (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
              b.slideWidth)
          : !0 === b.options.centerMode &&
            ((b.slideOffset = 0),
            (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
        (c =
          !1 === b.options.vertical
            ? a * b.slideWidth * -1 + b.slideOffset
            : a * d * -1 + e),
        !0 === b.options.variableWidth &&
          ((f =
            b.slideCount <= b.options.slidesToShow || !1 === b.options.infinite
              ? b.$slideTrack.children(".slick-slide").eq(a)
              : b.$slideTrack
                  .children(".slick-slide")
                  .eq(a + b.options.slidesToShow)),
          (c =
            !0 === b.options.rtl
              ? f[0]
                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                : 0
              : f[0]
              ? -1 * f[0].offsetLeft
              : 0),
          !0 === b.options.centerMode &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              !1 === b.options.infinite
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow + 1)),
            (c =
              !0 === b.options.rtl
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            (c += (b.$list.width() - f.outerWidth()) / 2))),
        c
      );
    }),
    (b.prototype.getOption = b.prototype.slickGetOption =
      function (a) {
        return this.options[a];
      }),
    (b.prototype.getNavigableIndexes = function () {
      var e,
        a = this,
        b = 0,
        c = 0,
        d = [];
      for (
        !1 === a.options.infinite
          ? (e = a.slideCount)
          : ((b = -1 * a.options.slidesToScroll),
            (c = -1 * a.options.slidesToScroll),
            (e = 2 * a.slideCount));
        b < e;

      )
        d.push(b),
          (b = c + a.options.slidesToScroll),
          (c +=
            a.options.slidesToScroll <= a.options.slidesToShow
              ? a.options.slidesToScroll
              : a.options.slidesToShow);
      return d;
    }),
    (b.prototype.getSlick = function () {
      return this;
    }),
    (b.prototype.getSlideCount = function () {
      var d,
        e,
        b = this;
      return (
        (e =
          !0 === b.options.centerMode
            ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
            : 0),
        !0 === b.options.swipeToSlide
          ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
              if (f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft)
                return (d = f), !1;
            }),
            Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1)
          : b.options.slidesToScroll
      );
    }),
    (b.prototype.goTo = b.prototype.slickGoTo =
      function (a, b) {
        this.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
      }),
    (b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") ||
        (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        !0 === c.options.accessibility && c.initADA(),
        c.options.autoplay && ((c.paused = !1), c.autoPlay());
    }),
    (b.prototype.initADA = function () {
      var b = this;
      b.$slides
        .add(b.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a,input,button,select")
        .attr({ tabindex: "-1" }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
          a(this).attr("role", "option");
          var d = b.options.centerMode
            ? c
            : Math.floor(c / b.options.slidesToShow);
          !0 === b.options.dots &&
            a(this).attr("aria-describedby", "slick-slide" + b.instanceUid + d);
        }),
        null !== b.$dots &&
          b.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (c) {
              a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        b.activateADA();
    }),
    (b.prototype.initArrowEvents = function () {
      var a = this;
      !0 === a.options.arrows &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, a.changeSlide),
        a.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, a.changeSlide));
    }),
    (b.prototype.initDotEvents = function () {
      var b = this;
      !0 === b.options.dots &&
        b.slideCount > b.options.slidesToShow &&
        a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
        !0 === b.options.dots &&
          !0 === b.options.pauseOnDotsHover &&
          a("li", b.$dots)
            .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.initSlideEvents = function () {
      var b = this;
      b.options.pauseOnHover &&
        (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }),
    (b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        !0 === b.options.accessibility &&
          b.$list.on("keydown.slick", b.keyHandler),
        !0 === b.options.focusOnSelect &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + b.instanceUid,
          a.proxy(b.orientationChange, b)
        ),
        a(window).on(
          "resize.slick.slick-" + b.instanceUid,
          a.proxy(b.resize, b)
        ),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).ready(b.setPosition);
    }),
    (b.prototype.initUI = function () {
      var a = this;
      !0 === a.options.arrows &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.show(), a.$nextArrow.show()),
        !0 === a.options.dots &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.show();
    }),
    (b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === a.keyCode && !0 === b.options.accessibility
          ? b.changeSlide({
              data: { message: !0 === b.options.rtl ? "next" : "previous" },
            })
          : 39 === a.keyCode &&
            !0 === b.options.accessibility &&
            b.changeSlide({
              data: { message: !0 === b.options.rtl ? "previous" : "next" },
            }));
    }),
    (b.prototype.lazyLoad = function () {
      function g(c) {
        a("img[data-lazy]", c).each(function () {
          var c = a(this),
            d = a(this).attr("data-lazy"),
            e = a(this).attr("data-srcset"),
            f = a(this).attr("data-sizes") || b.$slider.attr("data-sizes"),
            g = document.createElement("img");
          (g.onload = function () {
            c.animate({ opacity: 0 }, 100, function () {
              e && (c.attr("srcset", e), f && c.attr("sizes", f)),
                c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                  c.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                b.$slider.trigger("lazyLoaded", [b, c, d]);
            });
          }),
            (g.onerror = function () {
              c
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                b.$slider.trigger("lazyLoadError", [b, c, d]);
            }),
            (g.src = d);
        });
      }
      var c,
        d,
        e,
        f,
        b = this;
      if (
        (!0 === b.options.centerMode
          ? !0 === b.options.infinite
            ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
              (f = e + b.options.slidesToShow + 2))
            : ((e = Math.max(
                0,
                b.currentSlide - (b.options.slidesToShow / 2 + 1)
              )),
              (f = b.options.slidesToShow / 2 + 1 + 2 + b.currentSlide))
          : ((e = b.options.infinite
              ? b.options.slidesToShow + b.currentSlide
              : b.currentSlide),
            (f = Math.ceil(e + b.options.slidesToShow)),
            !0 === b.options.fade && (e > 0 && e--, f <= b.slideCount && f++)),
        (c = b.$slider.find(".slick-slide").slice(e, f)),
        "anticipated" === b.options.lazyLoad)
      )
        for (
          var h = e - 1, i = f, j = b.$slider.find(".slick-slide"), k = 0;
          k < b.options.slidesToScroll;
          k++
        )
          h < 0 && (h = b.slideCount - 1),
            (c = c.add(j.eq(h))),
            (c = c.add(j.eq(i))),
            h--,
            i++;
      g(c),
        b.slideCount <= b.options.slidesToShow
          ? ((d = b.$slider.find(".slick-slide")), g(d))
          : b.currentSlide >= b.slideCount - b.options.slidesToShow
          ? ((d = b.$slider
              .find(".slick-cloned")
              .slice(0, b.options.slidesToShow)),
            g(d))
          : 0 === b.currentSlide &&
            ((d = b.$slider
              .find(".slick-cloned")
              .slice(-1 * b.options.slidesToShow)),
            g(d));
    }),
    (b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(),
        a.$slideTrack.css({ opacity: 1 }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }),
    (b.prototype.next = b.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }),
    (b.prototype.pause = b.prototype.slickPause =
      function () {
        var a = this;
        a.autoPlayClear(), (a.paused = !0);
      }),
    (b.prototype.play = b.prototype.slickPlay =
      function () {
        var a = this;
        a.autoPlay(),
          (a.options.autoplay = !0),
          (a.paused = !1),
          (a.focussed = !1),
          (a.interrupted = !1);
      }),
    (b.prototype.postSlide = function (a) {
      var b = this;
      b.unslicked ||
        (b.$slider.trigger("afterChange", [b, a]),
        (b.animating = !1),
        b.setPosition(),
        (b.swipeLeft = null),
        b.options.autoplay && b.autoPlay(),
        !0 === b.options.accessibility && b.initADA());
    }),
    (b.prototype.prev = b.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }),
    (b.prototype.progressiveLazyLoad = function (b) {
      b = b || 1;
      var e,
        f,
        g,
        h,
        i,
        c = this,
        d = a("img[data-lazy]", c.$slider);
      d.length
        ? ((e = d.first()),
          (f = e.attr("data-lazy")),
          (g = e.attr("data-srcset")),
          (h = e.attr("data-sizes") || c.$slider.attr("data-sizes")),
          (i = document.createElement("img")),
          (i.onload = function () {
            g && (e.attr("srcset", g), h && e.attr("sizes", h)),
              e
                .attr("src", f)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === c.options.adaptiveHeight && c.setPosition(),
              c.$slider.trigger("lazyLoaded", [c, e, f]),
              c.progressiveLazyLoad();
          }),
          (i.onerror = function () {
            b < 3
              ? setTimeout(function () {
                  c.progressiveLazyLoad(b + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                c.$slider.trigger("lazyLoadError", [c, e, f]),
                c.progressiveLazyLoad());
          }),
          (i.src = f))
        : c.$slider.trigger("allImagesLoaded", [c]);
    }),
    (b.prototype.refresh = function (b) {
      var d,
        e,
        c = this;
      (e = c.slideCount - c.options.slidesToShow),
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        (d = c.currentSlide),
        c.destroy(!0),
        a.extend(c, c.initials, { currentSlide: d }),
        c.init(),
        b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }),
    (b.prototype.registerBreakpoints = function () {
      var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";
        for (c in f)
          if (((e = b.breakpoints.length - 1), f.hasOwnProperty(c))) {
            for (d = f[c].breakpoint; e >= 0; )
              b.breakpoints[e] &&
                b.breakpoints[e] === d &&
                b.breakpoints.splice(e, 1),
                e--;
            b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
          }
        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }),
    (b.prototype.reinit = function () {
      var b = this;
      (b.$slides = b.$slideTrack
        .children(b.options.slide)
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.currentSlide >= b.slideCount &&
          0 !== b.currentSlide &&
          (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        !0 === b.options.focusOnSelect &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.setPosition(),
        b.focusHandler(),
        (b.paused = !b.options.autoplay),
        b.autoPlay(),
        b.$slider.trigger("reInit", [b]);
    }),
    (b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth &&
        (clearTimeout(b.windowDelay),
        (b.windowDelay = window.setTimeout(function () {
          (b.windowWidth = a(window).width()),
            b.checkResponsive(),
            b.unslicked || b.setPosition();
        }, 50)));
    }),
    (b.prototype.removeSlide = b.prototype.slickRemove =
      function (a, b, c) {
        var d = this;
        if (
          ("boolean" == typeof a
            ? ((b = a), (a = !0 === b ? 0 : d.slideCount - 1))
            : (a = !0 === b ? --a : a),
          d.slideCount < 1 || a < 0 || a > d.slideCount - 1)
        )
          return !1;
        d.unload(),
          !0 === c
            ? d.$slideTrack.children().remove()
            : d.$slideTrack.children(this.options.slide).eq(a).remove(),
          (d.$slides = d.$slideTrack.children(this.options.slide)),
          d.$slideTrack.children(this.options.slide).detach(),
          d.$slideTrack.append(d.$slides),
          (d.$slidesCache = d.$slides),
          d.reinit();
      }),
    (b.prototype.setCSS = function (a) {
      var d,
        e,
        b = this,
        c = {};
      !0 === b.options.rtl && (a = -a),
        (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (c[b.positionProp] = a),
        !1 === b.transformsEnabled
          ? b.$slideTrack.css(c)
          : ((c = {}),
            !1 === b.cssTransitions
              ? ((c[b.animType] = "translate(" + d + "," + e + ")"),
                b.$slideTrack.css(c))
              : ((c[b.animType] = "translate3d(" + d + "," + e + ",0px)"),
                b.$slideTrack.css(c)));
    }),
    (b.prototype.setDimensions = function () {
      var a = this;
      !1 === a.options.vertical
        ? !0 === a.options.centerMode &&
          a.$list.css({ padding: "0px " + a.options.centerPadding })
        : (a.$list.height(
            a.$slides.first().outerHeight(!0) * a.options.slidesToShow
          ),
          !0 === a.options.centerMode &&
            a.$list.css({ padding: a.options.centerPadding + " 0px" })),
        (a.listWidth = a.$list.width()),
        (a.listHeight = a.$list.height()),
        !1 === a.options.vertical && !1 === a.options.variableWidth
          ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
            a.$slideTrack.width(
              Math.ceil(
                a.slideWidth * a.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === a.options.variableWidth
          ? a.$slideTrack.width(5e3 * a.slideCount)
          : ((a.slideWidth = Math.ceil(a.listWidth)),
            a.$slideTrack.height(
              Math.ceil(
                a.$slides.first().outerHeight(!0) *
                  a.$slideTrack.children(".slick-slide").length
              )
            ));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      !1 === a.options.variableWidth &&
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }),
    (b.prototype.setFade = function () {
      var c,
        b = this;
      b.$slides.each(function (d, e) {
        (c = b.slideWidth * d * -1),
          !0 === b.options.rtl
            ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              });
      }),
        b.$slides
          .eq(b.currentSlide)
          .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }),
    (b.prototype.setHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        !0 === a.options.adaptiveHeight &&
        !1 === a.options.vertical
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }),
    (b.prototype.setOption = b.prototype.slickSetOption =
      function () {
        var c,
          d,
          e,
          f,
          h,
          b = this,
          g = !1;
        if (
          ("object" === a.type(arguments[0])
            ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((e = arguments[0]),
              (f = arguments[1]),
              (g = arguments[2]),
              "responsive" === arguments[0] && "array" === a.type(arguments[1])
                ? (h = "responsive")
                : void 0 !== arguments[1] && (h = "single")),
          "single" === h)
        )
          b.options[e] = f;
        else if ("multiple" === h)
          a.each(e, function (a, c) {
            b.options[a] = c;
          });
        else if ("responsive" === h)
          for (d in f)
            if ("array" !== a.type(b.options.responsive))
              b.options.responsive = [f[d]];
            else {
              for (c = b.options.responsive.length - 1; c >= 0; )
                b.options.responsive[c].breakpoint === f[d].breakpoint &&
                  b.options.responsive.splice(c, 1),
                  c--;
              b.options.responsive.push(f[d]);
            }
        g && (b.unload(), b.reinit());
      }),
    (b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(),
        a.setHeight(),
        !1 === a.options.fade
          ? a.setCSS(a.getLeft(a.currentSlide))
          : a.setFade(),
        a.$slider.trigger("setPosition", [a]);
    }),
    (b.prototype.setProps = function () {
      var a = this,
        b = document.body.style;
      (a.positionProp = !0 === a.options.vertical ? "top" : "left"),
        "top" === a.positionProp
          ? a.$slider.addClass("slick-vertical")
          : a.$slider.removeClass("slick-vertical"),
        (void 0 === b.WebkitTransition &&
          void 0 === b.MozTransition &&
          void 0 === b.msTransition) ||
          (!0 === a.options.useCSS && (a.cssTransitions = !0)),
        a.options.fade &&
          ("number" == typeof a.options.zIndex
            ? a.options.zIndex < 3 && (a.options.zIndex = 3)
            : (a.options.zIndex = a.defaults.zIndex)),
        void 0 !== b.OTransform &&
          ((a.animType = "OTransform"),
          (a.transformType = "-o-transform"),
          (a.transitionType = "OTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.MozTransform &&
          ((a.animType = "MozTransform"),
          (a.transformType = "-moz-transform"),
          (a.transitionType = "MozTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.MozPerspective &&
            (a.animType = !1)),
        void 0 !== b.webkitTransform &&
          ((a.animType = "webkitTransform"),
          (a.transformType = "-webkit-transform"),
          (a.transitionType = "webkitTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.msTransform &&
          ((a.animType = "msTransform"),
          (a.transformType = "-ms-transform"),
          (a.transitionType = "msTransition"),
          void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform &&
          !1 !== a.animType &&
          ((a.animType = "transform"),
          (a.transformType = "transform"),
          (a.transitionType = "transition")),
        (a.transformsEnabled =
          a.options.useTransform && null !== a.animType && !1 !== a.animType);
    }),
    (b.prototype.setSlideClasses = function (a) {
      var c,
        d,
        e,
        f,
        b = this;
      (d = b.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        b.$slides.eq(a).addClass("slick-current"),
        !0 === b.options.centerMode
          ? ((c = Math.floor(b.options.slidesToShow / 2)),
            !0 === b.options.infinite &&
              (a >= c && a <= b.slideCount - 1 - c
                ? b.$slides
                    .slice(a - c, a + c + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((e = b.options.slidesToShow + a),
                  d
                    .slice(e - c + 1, e + c + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? d
                    .eq(d.length - 1 - b.options.slidesToShow)
                    .addClass("slick-center")
                : a === b.slideCount - 1 &&
                  d.eq(b.options.slidesToShow).addClass("slick-center")),
            b.$slides.eq(a).addClass("slick-center"))
          : a >= 0 && a <= b.slideCount - b.options.slidesToShow
          ? b.$slides
              .slice(a, a + b.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : d.length <= b.options.slidesToShow
          ? d.addClass("slick-active").attr("aria-hidden", "false")
          : ((f = b.slideCount % b.options.slidesToShow),
            (e = !0 === b.options.infinite ? b.options.slidesToShow + a : a),
            b.options.slidesToShow == b.options.slidesToScroll &&
            b.slideCount - a < b.options.slidesToShow
              ? d
                  .slice(e - (b.options.slidesToShow - f), e + f)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : d
                  .slice(e, e + b.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        ("ondemand" !== b.options.lazyLoad &&
          "anticipated" !== b.options.lazyLoad) ||
          b.lazyLoad();
    }),
    (b.prototype.setupInfinite = function () {
      var c,
        d,
        e,
        b = this;
      if (
        (!0 === b.options.fade && (b.options.centerMode = !1),
        !0 === b.options.infinite &&
          !1 === b.options.fade &&
          ((d = null), b.slideCount > b.options.slidesToShow))
      ) {
        for (
          e =
            !0 === b.options.centerMode
              ? b.options.slidesToShow + 1
              : b.options.slidesToShow,
            c = b.slideCount;
          c > b.slideCount - e;
          c -= 1
        )
          (d = c - 1),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d - b.slideCount)
              .prependTo(b.$slideTrack)
              .addClass("slick-cloned");
        for (c = 0; c < e; c += 1)
          (d = c),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d + b.slideCount)
              .appendTo(b.$slideTrack)
              .addClass("slick-cloned");
        b.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (b.prototype.interrupt = function (a) {
      var b = this;
      a || b.autoPlay(), (b.interrupted = a);
    }),
    (b.prototype.selectHandler = function (b) {
      var c = this,
        d = a(b.target).is(".slick-slide")
          ? a(b.target)
          : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      if ((e || (e = 0), c.slideCount <= c.options.slidesToShow))
        return c.setSlideClasses(e), void c.asNavFor(e);
      c.slideHandler(e);
    }),
    (b.prototype.slideHandler = function (a, b, c) {
      var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
      if (
        ((b = b || !1),
        (!0 !== i.animating || !0 !== i.options.waitForAnimate) &&
          !(
            (!0 === i.options.fade && i.currentSlide === a) ||
            i.slideCount <= i.options.slidesToShow
          ))
      ) {
        if (
          (!1 === b && i.asNavFor(a),
          (d = a),
          (h = i.getLeft(d)),
          (g = i.getLeft(i.currentSlide)),
          (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
          !1 === i.options.infinite &&
            !1 === i.options.centerMode &&
            (a < 0 || a > i.getDotCount() * i.options.slidesToScroll))
        )
          return void (
            !1 === i.options.fade &&
            ((d = i.currentSlide),
            !0 !== c
              ? i.animateSlide(g, function () {
                  i.postSlide(d);
                })
              : i.postSlide(d))
          );
        if (
          !1 === i.options.infinite &&
          !0 === i.options.centerMode &&
          (a < 0 || a > i.slideCount - i.options.slidesToScroll)
        )
          return void (
            !1 === i.options.fade &&
            ((d = i.currentSlide),
            !0 !== c
              ? i.animateSlide(g, function () {
                  i.postSlide(d);
                })
              : i.postSlide(d))
          );
        if (
          (i.options.autoplay && clearInterval(i.autoPlayTimer),
          (e =
            d < 0
              ? i.slideCount % i.options.slidesToScroll != 0
                ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                : i.slideCount + d
              : d >= i.slideCount
              ? i.slideCount % i.options.slidesToScroll != 0
                ? 0
                : d - i.slideCount
              : d),
          (i.animating = !0),
          i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
          (f = i.currentSlide),
          (i.currentSlide = e),
          i.setSlideClasses(i.currentSlide),
          i.options.asNavFor &&
            ((j = i.getNavTarget()),
            (j = j.slick("getSlick")),
            j.slideCount <= j.options.slidesToShow &&
              j.setSlideClasses(i.currentSlide)),
          i.updateDots(),
          i.updateArrows(),
          !0 === i.options.fade)
        )
          return (
            !0 !== c
              ? (i.fadeSlideOut(f),
                i.fadeSlide(e, function () {
                  i.postSlide(e);
                }))
              : i.postSlide(e),
            void i.animateHeight()
          );
        !0 !== c
          ? i.animateSlide(h, function () {
              i.postSlide(e);
            })
          : i.postSlide(e);
      }
    }),
    (b.prototype.startLoad = function () {
      var a = this;
      !0 === a.options.arrows &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.hide(), a.$nextArrow.hide()),
        !0 === a.options.dots &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.hide(),
        a.$slider.addClass("slick-loading");
    }),
    (b.prototype.swipeDirection = function () {
      var a,
        b,
        c,
        d,
        e = this;
      return (
        (a = e.touchObject.startX - e.touchObject.curX),
        (b = e.touchObject.startY - e.touchObject.curY),
        (c = Math.atan2(b, a)),
        (d = Math.round((180 * c) / Math.PI)),
        d < 0 && (d = 360 - Math.abs(d)),
        d <= 45 && d >= 0
          ? !1 === e.options.rtl
            ? "left"
            : "right"
          : d <= 360 && d >= 315
          ? !1 === e.options.rtl
            ? "left"
            : "right"
          : d >= 135 && d <= 225
          ? !1 === e.options.rtl
            ? "right"
            : "left"
          : !0 === e.options.verticalSwiping
          ? d >= 35 && d <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (b.prototype.swipeEnd = function (a) {
      var c,
        d,
        b = this;
      if (
        ((b.dragging = !1),
        (b.interrupted = !1),
        (b.shouldClick = !(b.touchObject.swipeLength > 10)),
        void 0 === b.touchObject.curX)
      )
        return !1;
      if (
        (!0 === b.touchObject.edgeHit &&
          b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
      ) {
        switch ((d = b.swipeDirection())) {
          case "left":
          case "down":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide + b.getSlideCount())
              : b.currentSlide + b.getSlideCount()),
              (b.currentDirection = 0);
            break;
          case "right":
          case "up":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide - b.getSlideCount())
              : b.currentSlide - b.getSlideCount()),
              (b.currentDirection = 1);
        }
        "vertical" != d &&
          (b.slideHandler(c),
          (b.touchObject = {}),
          b.$slider.trigger("swipe", [b, d]));
      } else
        b.touchObject.startX !== b.touchObject.curX &&
          (b.slideHandler(b.currentSlide), (b.touchObject = {}));
    }),
    (b.prototype.swipeHandler = function (a) {
      var b = this;
      if (
        !(
          !1 === b.options.swipe ||
          ("ontouchend" in document && !1 === b.options.swipe) ||
          (!1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))
        )
      )
        switch (
          ((b.touchObject.fingerCount =
            a.originalEvent && void 0 !== a.originalEvent.touches
              ? a.originalEvent.touches.length
              : 1),
          (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
          !0 === b.options.verticalSwiping &&
            (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
          a.data.action)
        ) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a);
        }
    }),
    (b.prototype.swipeMove = function (a) {
      var d,
        e,
        f,
        g,
        h,
        b = this;
      return (
        (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
        !(!b.dragging || (h && 1 !== h.length)) &&
          ((d = b.getLeft(b.currentSlide)),
          (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
          (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
          (b.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
          )),
          !0 === b.options.verticalSwiping &&
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2))
            )),
          "vertical" !== (e = b.swipeDirection())
            ? (void 0 !== a.originalEvent &&
                b.touchObject.swipeLength > 4 &&
                a.preventDefault(),
              (g =
                (!1 === b.options.rtl ? 1 : -1) *
                (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
              !0 === b.options.verticalSwiping &&
                (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
              (f = b.touchObject.swipeLength),
              (b.touchObject.edgeHit = !1),
              !1 === b.options.infinite &&
                ((0 === b.currentSlide && "right" === e) ||
                  (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                (b.touchObject.edgeHit = !0)),
              !1 === b.options.vertical
                ? (b.swipeLeft = d + f * g)
                : (b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g),
              !0 === b.options.verticalSwiping && (b.swipeLeft = d + f * g),
              !0 !== b.options.fade &&
                !1 !== b.options.touchMove &&
                (!0 === b.animating
                  ? ((b.swipeLeft = null), !1)
                  : void b.setCSS(b.swipeLeft)))
            : void 0)
      );
    }),
    (b.prototype.swipeStart = function (a) {
      var c,
        b = this;
      if (
        ((b.interrupted = !0),
        1 !== b.touchObject.fingerCount ||
          b.slideCount <= b.options.slidesToShow)
      )
        return (b.touchObject = {}), !1;
      void 0 !== a.originalEvent &&
        void 0 !== a.originalEvent.touches &&
        (c = a.originalEvent.touches[0]),
        (b.touchObject.startX = b.touchObject.curX =
          void 0 !== c ? c.pageX : a.clientX),
        (b.touchObject.startY = b.touchObject.curY =
          void 0 !== c ? c.pageY : a.clientY),
        (b.dragging = !0);
    }),
    (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
      function () {
        var a = this;
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit());
      }),
    (b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow &&
          b.htmlExpr.test(b.options.prevArrow) &&
          b.$prevArrow.remove(),
        b.$nextArrow &&
          b.htmlExpr.test(b.options.nextArrow) &&
          b.$nextArrow.remove(),
        b.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }),
    (b.prototype.updateArrows = function () {
      var a = this;
      Math.floor(a.options.slidesToShow / 2),
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          !a.options.infinite &&
          (a.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          a.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === a.currentSlide
            ? (a.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
              !1 === a.options.centerMode
            ? (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - 1 &&
              !0 === a.options.centerMode &&
              (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots &&
        (a.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        a.$dots
          .find("li")
          .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (b.prototype.visibility = function () {
      var a = this;
      a.options.autoplay &&
        (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
    }),
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;
      for (f = 0; f < e; f++)
        if (
          ("object" == typeof c || void 0 === c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          void 0 !== g)
        )
          return g;
      return a;
    });
});
!(function (t) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).Parallax = t();
  }
})(function () {
  return (function t(e, i, n) {
    function o(r, a) {
      if (!i[r]) {
        if (!e[r]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(r, !0);
          if (s) return s(r, !0);
          var h = new Error("Cannot find module '" + r + "'");
          throw ((h.code = "MODULE_NOT_FOUND"), h);
        }
        var u = (i[r] = { exports: {} });
        e[r][0].call(
          u.exports,
          function (t) {
            var i = e[r][1][t];
            return o(i || t);
          },
          u,
          u.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[r].exports;
    }
    for (
      var s = "function" == typeof require && require, r = 0;
      r < n.length;
      r++
    )
      o(n[r]);
    return o;
  })(
    {
      1: [
        function (t, e, i) {
          "use strict";
          function n(t) {
            if (null === t || void 0 === t)
              throw new TypeError(
                "Object.assign cannot be called with null or undefined"
              );
            return Object(t);
          }
          var o = Object.getOwnPropertySymbols,
            s = Object.prototype.hasOwnProperty,
            r = Object.prototype.propertyIsEnumerable;
          e.exports = (function () {
            try {
              if (!Object.assign) return !1;
              var t = new String("abc");
              if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                return !1;
              for (var e = {}, i = 0; i < 10; i++)
                e["_" + String.fromCharCode(i)] = i;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(e)
                  .map(function (t) {
                    return e[t];
                  })
                  .join("")
              )
                return !1;
              var n = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (t) {
                  n[t] = t;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, n)).join("")
              );
            } catch (t) {
              return !1;
            }
          })()
            ? Object.assign
            : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                  i = Object(arguments[h]);
                  for (var u in i) s.call(i, u) && (l[u] = i[u]);
                  if (o) {
                    a = o(i);
                    for (var c = 0; c < a.length; c++)
                      r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                  }
                }
                return l;
              };
        },
        {},
      ],
      2: [
        function (t, e, i) {
          (function (t) {
            (function () {
              var i, n, o, s, r, a;
              "undefined" != typeof performance &&
              null !== performance &&
              performance.now
                ? (e.exports = function () {
                    return performance.now();
                  })
                : void 0 !== t && null !== t && t.hrtime
                ? ((e.exports = function () {
                    return (i() - r) / 1e6;
                  }),
                  (n = t.hrtime),
                  (s = (i = function () {
                    var t;
                    return 1e9 * (t = n())[0] + t[1];
                  })()),
                  (a = 1e9 * t.uptime()),
                  (r = s - a))
                : Date.now
                ? ((e.exports = function () {
                    return Date.now() - o;
                  }),
                  (o = Date.now()))
                : ((e.exports = function () {
                    return new Date().getTime() - o;
                  }),
                  (o = new Date().getTime()));
            }).call(this);
          }).call(this, t("_process"));
        },
        { _process: 3 },
      ],
      3: [
        function (t, e, i) {
          function n() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === n || !c) && setTimeout)
              return (c = setTimeout), setTimeout(t, 0);
            try {
              return c(t, 0);
            } catch (e) {
              try {
                return c.call(null, t, 0);
              } catch (e) {
                return c.call(this, t, 0);
              }
            }
          }
          function r(t) {
            if (d === clearTimeout) return clearTimeout(t);
            if ((d === o || !d) && clearTimeout)
              return (d = clearTimeout), clearTimeout(t);
            try {
              return d(t);
            } catch (e) {
              try {
                return d.call(null, t);
              } catch (e) {
                return d.call(this, t);
              }
            }
          }
          function a() {
            v &&
              p &&
              ((v = !1),
              p.length ? (f = p.concat(f)) : (y = -1),
              f.length && l());
          }
          function l() {
            if (!v) {
              var t = s(a);
              v = !0;
              for (var e = f.length; e; ) {
                for (p = f, f = []; ++y < e; ) p && p[y].run();
                (y = -1), (e = f.length);
              }
              (p = null), (v = !1), r(t);
            }
          }
          function h(t, e) {
            (this.fun = t), (this.array = e);
          }
          function u() {}
          var c,
            d,
            m = (e.exports = {});
          !(function () {
            try {
              c = "function" == typeof setTimeout ? setTimeout : n;
            } catch (t) {
              c = n;
            }
            try {
              d = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (t) {
              d = o;
            }
          })();
          var p,
            f = [],
            v = !1,
            y = -1;
          (m.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
            f.push(new h(t, e)), 1 !== f.length || v || s(l);
          }),
            (h.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (m.title = "browser"),
            (m.browser = !0),
            (m.env = {}),
            (m.argv = []),
            (m.version = ""),
            (m.versions = {}),
            (m.on = u),
            (m.addListener = u),
            (m.once = u),
            (m.off = u),
            (m.removeListener = u),
            (m.removeAllListeners = u),
            (m.emit = u),
            (m.prependListener = u),
            (m.prependOnceListener = u),
            (m.listeners = function (t) {
              return [];
            }),
            (m.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (m.cwd = function () {
              return "/";
            }),
            (m.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (m.umask = function () {
              return 0;
            });
        },
        {},
      ],
      4: [
        function (t, e, i) {
          (function (i) {
            for (
              var n = t("performance-now"),
                o = "undefined" == typeof window ? i : window,
                s = ["moz", "webkit"],
                r = "AnimationFrame",
                a = o["request" + r],
                l = o["cancel" + r] || o["cancelRequest" + r],
                h = 0;
              !a && h < s.length;
              h++
            )
              (a = o[s[h] + "Request" + r]),
                (l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r]);
            if (!a || !l) {
              var u = 0,
                c = 0,
                d = [];
              (a = function (t) {
                if (0 === d.length) {
                  var e = n(),
                    i = Math.max(0, 1e3 / 60 - (e - u));
                  (u = i + e),
                    setTimeout(function () {
                      var t = d.slice(0);
                      d.length = 0;
                      for (var e = 0; e < t.length; e++)
                        if (!t[e].cancelled)
                          try {
                            t[e].callback(u);
                          } catch (t) {
                            setTimeout(function () {
                              throw t;
                            }, 0);
                          }
                    }, Math.round(i));
                }
                return d.push({ handle: ++c, callback: t, cancelled: !1 }), c;
              }),
                (l = function (t) {
                  for (var e = 0; e < d.length; e++)
                    d[e].handle === t && (d[e].cancelled = !0);
                });
            }
            (e.exports = function (t) {
              return a.call(o, t);
            }),
              (e.exports.cancel = function () {
                l.apply(o, arguments);
              }),
              (e.exports.polyfill = function () {
                (o.requestAnimationFrame = a), (o.cancelAnimationFrame = l);
              });
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        { "performance-now": 2 },
      ],
      5: [
        function (t, e, i) {
          "use strict";
          function n(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          var o = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
              };
            })(),
            s = t("raf"),
            r = t("object-assign"),
            a = {
              propertyCache: {},
              vendors: [
                null,
                ["-webkit-", "webkit"],
                ["-moz-", "Moz"],
                ["-o-", "O"],
                ["-ms-", "ms"],
              ],
              clamp: function (t, e, i) {
                return e < i
                  ? t < e
                    ? e
                    : t > i
                    ? i
                    : t
                  : t < i
                  ? i
                  : t > e
                  ? e
                  : t;
              },
              data: function (t, e) {
                return a.deserialize(t.getAttribute("data-" + e));
              },
              deserialize: function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : !isNaN(parseFloat(t)) && isFinite(t)
                      ? parseFloat(t)
                      : t))
                );
              },
              camelCase: function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                  return e ? e.toUpperCase() : "";
                });
              },
              accelerate: function (t) {
                a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                  a.css(t, "transform-style", "preserve-3d"),
                  a.css(t, "backface-visibility", "hidden");
              },
              transformSupport: function (t) {
                for (
                  var e = document.createElement("div"),
                    i = !1,
                    n = null,
                    o = !1,
                    s = null,
                    r = null,
                    l = 0,
                    h = a.vendors.length;
                  l < h;
                  l++
                )
                  if (
                    (null !== a.vendors[l]
                      ? ((s = a.vendors[l][0] + "transform"),
                        (r = a.vendors[l][1] + "Transform"))
                      : ((s = "transform"), (r = "transform")),
                    void 0 !== e.style[r])
                  ) {
                    i = !0;
                    break;
                  }
                switch (t) {
                  case "2D":
                    o = i;
                    break;
                  case "3D":
                    if (i) {
                      var u = document.body || document.createElement("body"),
                        c = document.documentElement,
                        d = c.style.overflow,
                        m = !1;
                      document.body ||
                        ((m = !0),
                        (c.style.overflow = "hidden"),
                        c.appendChild(u),
                        (u.style.overflow = "hidden"),
                        (u.style.background = "")),
                        u.appendChild(e),
                        (e.style[r] = "translate3d(1px,1px,1px)"),
                        (o =
                          void 0 !==
                            (n = window
                              .getComputedStyle(e)
                              .getPropertyValue(s)) &&
                          n.length > 0 &&
                          "none" !== n),
                        (c.style.overflow = d),
                        u.removeChild(e),
                        m &&
                          (u.removeAttribute("style"),
                          u.parentNode.removeChild(u));
                    }
                }
                return o;
              },
              css: function (t, e, i) {
                var n = a.propertyCache[e];
                if (!n)
                  for (var o = 0, s = a.vendors.length; o < s; o++)
                    if (
                      ((n =
                        null !== a.vendors[o]
                          ? a.camelCase(a.vendors[o][1] + "-" + e)
                          : e),
                      void 0 !== t.style[n])
                    ) {
                      a.propertyCache[e] = n;
                      break;
                    }
                t.style[n] = i;
              },
            },
            l = {
              relativeInput: !1,
              clipRelativeInput: !1,
              inputElement: null,
              hoverOnly: !1,
              calibrationThreshold: 100,
              calibrationDelay: 500,
              supportDelay: 500,
              calibrateX: !1,
              calibrateY: !0,
              invertX: !0,
              invertY: !0,
              limitX: !1,
              limitY: !1,
              scalarX: 10,
              scalarY: 10,
              frictionX: 0.1,
              frictionY: 0.1,
              originX: 0.5,
              originY: 0.5,
              pointerEvents: !1,
              precision: 1,
              onReady: null,
              selector: null,
            },
            h = (function () {
              function t(e, i) {
                n(this, t), (this.element = e);
                var o = {
                  calibrateX: a.data(this.element, "calibrate-x"),
                  calibrateY: a.data(this.element, "calibrate-y"),
                  invertX: a.data(this.element, "invert-x"),
                  invertY: a.data(this.element, "invert-y"),
                  limitX: a.data(this.element, "limit-x"),
                  limitY: a.data(this.element, "limit-y"),
                  scalarX: a.data(this.element, "scalar-x"),
                  scalarY: a.data(this.element, "scalar-y"),
                  frictionX: a.data(this.element, "friction-x"),
                  frictionY: a.data(this.element, "friction-y"),
                  originX: a.data(this.element, "origin-x"),
                  originY: a.data(this.element, "origin-y"),
                  pointerEvents: a.data(this.element, "pointer-events"),
                  precision: a.data(this.element, "precision"),
                  relativeInput: a.data(this.element, "relative-input"),
                  clipRelativeInput: a.data(
                    this.element,
                    "clip-relative-input"
                  ),
                  hoverOnly: a.data(this.element, "hover-only"),
                  inputElement: document.querySelector(
                    a.data(this.element, "input-element")
                  ),
                  selector: a.data(this.element, "selector"),
                };
                for (var s in o) null === o[s] && delete o[s];
                r(this, l, o, i),
                  this.inputElement || (this.inputElement = this.element),
                  (this.calibrationTimer = null),
                  (this.calibrationFlag = !0),
                  (this.enabled = !1),
                  (this.depthsX = []),
                  (this.depthsY = []),
                  (this.raf = null),
                  (this.bounds = null),
                  (this.elementPositionX = 0),
                  (this.elementPositionY = 0),
                  (this.elementWidth = 0),
                  (this.elementHeight = 0),
                  (this.elementCenterX = 0),
                  (this.elementCenterY = 0),
                  (this.elementRangeX = 0),
                  (this.elementRangeY = 0),
                  (this.calibrationX = 0),
                  (this.calibrationY = 0),
                  (this.inputX = 0),
                  (this.inputY = 0),
                  (this.motionX = 0),
                  (this.motionY = 0),
                  (this.velocityX = 0),
                  (this.velocityY = 0),
                  (this.onMouseMove = this.onMouseMove.bind(this)),
                  (this.onDeviceOrientation =
                    this.onDeviceOrientation.bind(this)),
                  (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                  (this.onOrientationTimer =
                    this.onOrientationTimer.bind(this)),
                  (this.onMotionTimer = this.onMotionTimer.bind(this)),
                  (this.onCalibrationTimer =
                    this.onCalibrationTimer.bind(this)),
                  (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                  (this.onWindowResize = this.onWindowResize.bind(this)),
                  (this.windowWidth = null),
                  (this.windowHeight = null),
                  (this.windowCenterX = null),
                  (this.windowCenterY = null),
                  (this.windowRadiusX = null),
                  (this.windowRadiusY = null),
                  (this.portrait = !1),
                  (this.desktop = !navigator.userAgent.match(
                    /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                  )),
                  (this.motionSupport =
                    !!window.DeviceMotionEvent && !this.desktop),
                  (this.orientationSupport =
                    !!window.DeviceOrientationEvent && !this.desktop),
                  (this.orientationStatus = 0),
                  (this.motionStatus = 0),
                  this.initialise();
              }
              return (
                o(t, [
                  {
                    key: "initialise",
                    value: function () {
                      void 0 === this.transform2DSupport &&
                        ((this.transform2DSupport = a.transformSupport("2D")),
                        (this.transform3DSupport = a.transformSupport("3D"))),
                        this.transform3DSupport && a.accelerate(this.element),
                        "static" ===
                          window
                            .getComputedStyle(this.element)
                            .getPropertyValue("position") &&
                          (this.element.style.position = "relative"),
                        this.pointerEvents ||
                          (this.element.style.pointerEvents = "none"),
                        this.updateLayers(),
                        this.updateDimensions(),
                        this.enable(),
                        this.queueCalibration(this.calibrationDelay);
                    },
                  },
                  {
                    key: "doReadyCallback",
                    value: function () {
                      this.onReady && this.onReady();
                    },
                  },
                  {
                    key: "updateLayers",
                    value: function () {
                      this.selector
                        ? (this.layers = this.element.querySelectorAll(
                            this.selector
                          ))
                        : (this.layers = this.element.children),
                        this.layers.length ||
                          console.warn(
                            "ParallaxJS:Your scene does not have any layers."
                          ),
                        (this.depthsX = []),
                        (this.depthsY = []);
                      for (var t = 0; t < this.layers.length; t++) {
                        var e = this.layers[t];
                        this.transform3DSupport && a.accelerate(e),
                          (e.style.position = t ? "absolute" : "relative"),
                          (e.style.display = "block"),
                          (e.style.left = 0),
                          (e.style.top = 0);
                        var i = a.data(e, "depth") || 0;
                        this.depthsX.push(a.data(e, "depth-x") || i),
                          this.depthsY.push(a.data(e, "depth-y") || i);
                      }
                    },
                  },
                  {
                    key: "updateDimensions",
                    value: function () {
                      (this.windowWidth = window.innerWidth),
                        (this.windowHeight = window.innerHeight),
                        (this.windowCenterX = this.windowWidth * this.originX),
                        (this.windowCenterY = this.windowHeight * this.originY),
                        (this.windowRadiusX = Math.max(
                          this.windowCenterX,
                          this.windowWidth - this.windowCenterX
                        )),
                        (this.windowRadiusY = Math.max(
                          this.windowCenterY,
                          this.windowHeight - this.windowCenterY
                        ));
                    },
                  },
                  {
                    key: "updateBounds",
                    value: function () {
                      (this.bounds = this.inputElement.getBoundingClientRect()),
                        (this.elementPositionX = this.bounds.left),
                        (this.elementPositionY = this.bounds.top),
                        (this.elementWidth = this.bounds.width),
                        (this.elementHeight = this.bounds.height),
                        (this.elementCenterX =
                          this.elementWidth * this.originX),
                        (this.elementCenterY =
                          this.elementHeight * this.originY),
                        (this.elementRangeX = Math.max(
                          this.elementCenterX,
                          this.elementWidth - this.elementCenterX
                        )),
                        (this.elementRangeY = Math.max(
                          this.elementCenterY,
                          this.elementHeight - this.elementCenterY
                        ));
                    },
                  },
                  {
                    key: "queueCalibration",
                    value: function (t) {
                      clearTimeout(this.calibrationTimer),
                        (this.calibrationTimer = setTimeout(
                          this.onCalibrationTimer,
                          t
                        ));
                    },
                  },
                  {
                    key: "enable",
                    value: function () {
                      this.enabled ||
                        ((this.enabled = !0),
                        this.orientationSupport
                          ? ((this.portrait = !1),
                            window.addEventListener(
                              "deviceorientation",
                              this.onDeviceOrientation
                            ),
                            (this.detectionTimer = setTimeout(
                              this.onOrientationTimer,
                              this.supportDelay
                            )))
                          : this.motionSupport
                          ? ((this.portrait = !1),
                            window.addEventListener(
                              "devicemotion",
                              this.onDeviceMotion
                            ),
                            (this.detectionTimer = setTimeout(
                              this.onMotionTimer,
                              this.supportDelay
                            )))
                          : ((this.calibrationX = 0),
                            (this.calibrationY = 0),
                            (this.portrait = !1),
                            window.addEventListener(
                              "mousemove",
                              this.onMouseMove
                            ),
                            this.doReadyCallback()),
                        window.addEventListener("resize", this.onWindowResize),
                        (this.raf = s(this.onAnimationFrame)));
                    },
                  },
                  {
                    key: "disable",
                    value: function () {
                      this.enabled &&
                        ((this.enabled = !1),
                        this.orientationSupport
                          ? window.removeEventListener(
                              "deviceorientation",
                              this.onDeviceOrientation
                            )
                          : this.motionSupport
                          ? window.removeEventListener(
                              "devicemotion",
                              this.onDeviceMotion
                            )
                          : window.removeEventListener(
                              "mousemove",
                              this.onMouseMove
                            ),
                        window.removeEventListener(
                          "resize",
                          this.onWindowResize
                        ),
                        s.cancel(this.raf));
                    },
                  },
                  {
                    key: "calibrate",
                    value: function (t, e) {
                      (this.calibrateX = void 0 === t ? this.calibrateX : t),
                        (this.calibrateY = void 0 === e ? this.calibrateY : e);
                    },
                  },
                  {
                    key: "invert",
                    value: function (t, e) {
                      (this.invertX = void 0 === t ? this.invertX : t),
                        (this.invertY = void 0 === e ? this.invertY : e);
                    },
                  },
                  {
                    key: "friction",
                    value: function (t, e) {
                      (this.frictionX = void 0 === t ? this.frictionX : t),
                        (this.frictionY = void 0 === e ? this.frictionY : e);
                    },
                  },
                  {
                    key: "scalar",
                    value: function (t, e) {
                      (this.scalarX = void 0 === t ? this.scalarX : t),
                        (this.scalarY = void 0 === e ? this.scalarY : e);
                    },
                  },
                  {
                    key: "limit",
                    value: function (t, e) {
                      (this.limitX = void 0 === t ? this.limitX : t),
                        (this.limitY = void 0 === e ? this.limitY : e);
                    },
                  },
                  {
                    key: "origin",
                    value: function (t, e) {
                      (this.originX = void 0 === t ? this.originX : t),
                        (this.originY = void 0 === e ? this.originY : e);
                    },
                  },
                  {
                    key: "setInputElement",
                    value: function (t) {
                      (this.inputElement = t), this.updateDimensions();
                    },
                  },
                  {
                    key: "setPosition",
                    value: function (t, e, i) {
                      (e = e.toFixed(this.precision) + "px"),
                        (i = i.toFixed(this.precision) + "px"),
                        this.transform3DSupport
                          ? a.css(
                              t,
                              "transform",
                              "translate3d(" + e + "," + i + ",0)"
                            )
                          : this.transform2DSupport
                          ? a.css(
                              t,
                              "transform",
                              "translate(" + e + "," + i + ")"
                            )
                          : ((t.style.left = e), (t.style.top = i));
                    },
                  },
                  {
                    key: "onOrientationTimer",
                    value: function () {
                      this.orientationSupport && 0 === this.orientationStatus
                        ? (this.disable(),
                          (this.orientationSupport = !1),
                          this.enable())
                        : this.doReadyCallback();
                    },
                  },
                  {
                    key: "onMotionTimer",
                    value: function () {
                      this.motionSupport && 0 === this.motionStatus
                        ? (this.disable(),
                          (this.motionSupport = !1),
                          this.enable())
                        : this.doReadyCallback();
                    },
                  },
                  {
                    key: "onCalibrationTimer",
                    value: function () {
                      this.calibrationFlag = !0;
                    },
                  },
                  {
                    key: "onWindowResize",
                    value: function () {
                      this.updateDimensions();
                    },
                  },
                  {
                    key: "onAnimationFrame",
                    value: function () {
                      this.updateBounds();
                      var t = this.inputX - this.calibrationX,
                        e = this.inputY - this.calibrationY;
                      (Math.abs(t) > this.calibrationThreshold ||
                        Math.abs(e) > this.calibrationThreshold) &&
                        this.queueCalibration(0),
                        this.portrait
                          ? ((this.motionX = this.calibrateX ? e : this.inputY),
                            (this.motionY = this.calibrateY ? t : this.inputX))
                          : ((this.motionX = this.calibrateX ? t : this.inputX),
                            (this.motionY = this.calibrateY ? e : this.inputY)),
                        (this.motionX *=
                          this.elementWidth * (this.scalarX / 100)),
                        (this.motionY *=
                          this.elementHeight * (this.scalarY / 100)),
                        isNaN(parseFloat(this.limitX)) ||
                          (this.motionX = a.clamp(
                            this.motionX,
                            -this.limitX,
                            this.limitX
                          )),
                        isNaN(parseFloat(this.limitY)) ||
                          (this.motionY = a.clamp(
                            this.motionY,
                            -this.limitY,
                            this.limitY
                          )),
                        (this.velocityX +=
                          (this.motionX - this.velocityX) * this.frictionX),
                        (this.velocityY +=
                          (this.motionY - this.velocityY) * this.frictionY);
                      for (var i = 0; i < this.layers.length; i++) {
                        var n = this.layers[i],
                          o = this.depthsX[i],
                          r = this.depthsY[i],
                          l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                          h = this.velocityY * (r * (this.invertY ? -1 : 1));
                        this.setPosition(n, l, h);
                      }
                      this.raf = s(this.onAnimationFrame);
                    },
                  },
                  {
                    key: "rotate",
                    value: function (t, e) {
                      var i = (t || 0) / 30,
                        n = (e || 0) / 30,
                        o = this.windowHeight > this.windowWidth;
                      this.portrait !== o &&
                        ((this.portrait = o), (this.calibrationFlag = !0)),
                        this.calibrationFlag &&
                          ((this.calibrationFlag = !1),
                          (this.calibrationX = i),
                          (this.calibrationY = n)),
                        (this.inputX = i),
                        (this.inputY = n);
                    },
                  },
                  {
                    key: "onDeviceOrientation",
                    value: function (t) {
                      var e = t.beta,
                        i = t.gamma;
                      null !== e &&
                        null !== i &&
                        ((this.orientationStatus = 1), this.rotate(e, i));
                    },
                  },
                  {
                    key: "onDeviceMotion",
                    value: function (t) {
                      var e = t.rotationRate.beta,
                        i = t.rotationRate.gamma;
                      null !== e &&
                        null !== i &&
                        ((this.motionStatus = 1), this.rotate(e, i));
                    },
                  },
                  {
                    key: "onMouseMove",
                    value: function (t) {
                      var e = t.clientX,
                        i = t.clientY;
                      if (
                        this.hoverOnly &&
                        (e < this.elementPositionX ||
                          e > this.elementPositionX + this.elementWidth ||
                          i < this.elementPositionY ||
                          i > this.elementPositionY + this.elementHeight)
                      )
                        return (this.inputX = 0), void (this.inputY = 0);
                      this.relativeInput
                        ? (this.clipRelativeInput &&
                            ((e = Math.max(e, this.elementPositionX)),
                            (e = Math.min(
                              e,
                              this.elementPositionX + this.elementWidth
                            )),
                            (i = Math.max(i, this.elementPositionY)),
                            (i = Math.min(
                              i,
                              this.elementPositionY + this.elementHeight
                            ))),
                          this.elementRangeX &&
                            this.elementRangeY &&
                            ((this.inputX =
                              (e -
                                this.elementPositionX -
                                this.elementCenterX) /
                              this.elementRangeX),
                            (this.inputY =
                              (i -
                                this.elementPositionY -
                                this.elementCenterY) /
                              this.elementRangeY)))
                        : this.windowRadiusX &&
                          this.windowRadiusY &&
                          ((this.inputX =
                            (e - this.windowCenterX) / this.windowRadiusX),
                          (this.inputY =
                            (i - this.windowCenterY) / this.windowRadiusY));
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.disable(),
                        clearTimeout(this.calibrationTimer),
                        clearTimeout(this.detectionTimer),
                        this.element.removeAttribute("style");
                      for (var t = 0; t < this.layers.length; t++)
                        this.layers[t].removeAttribute("style");
                      delete this.element, delete this.layers;
                    },
                  },
                  {
                    key: "version",
                    value: function () {
                      return "3.1.0";
                    },
                  },
                ]),
                t
              );
            })();
          e.exports = h;
        },
        { "object-assign": 1, raf: 4 },
      ],
    },
    {},
    [5]
  )(5);
});
function validateForm(ele = "") {
  if (ele) {
    $("." + ele)
      .find("input[type=submit]")
      .removeAttr("disabled");
    var forms = document.getElementsByClassName(ele);
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }
}
function loadPaging(url = "", eShow = "") {
  if ($(eShow).length && url) {
    $.ajax({
      url: url,
      type: "GET",
      data: { eShow: eShow },
      success: function (result) {
        $(eShow).html(result);
        NN_FRAMEWORK.Lazys();
      },
    });
  }
}
function doEnter(event, obj) {
  if (event.keyCode == 13 || event.which == 13) onSearch(obj);
}
function onSearch(obj) {
  var keyword = $("#" + obj).val();
  if (keyword == "") {
    notifyDialog(LANG["no_keywords"]);
    return false;
  } else {
    location.href = "tim-kiem?keyword=" + encodeURI(keyword);
    loadPage(document.location);
  }
}
function goToByScroll(id) {
  var offsetMenu = 0;
  id = id.replace("#", "");
  if ($(".menu").length) offsetMenu = $(".menu").height();
  $("html,body").animate(
    { scrollTop: $("#" + id).offset().top - offsetMenu * 2 },
    "slow"
  );
}
validateForm("validation-newsletter");
validateForm("validation-cart");
validateForm("validation-user");
validateForm("validation-contact");
$.fn.exists = function () {
  return this.length;
};
NN_FRAMEWORK.Lazys = function () {
  if ($(".lazy").exists()) {
    var lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });
  }
};
NN_FRAMEWORK.GoTop = function () {};
NN_FRAMEWORK.AltImg = function () {
  $("img").each(function (index, element) {
    if (!$(this).attr("alt") || $(this).attr("alt") == "") {
      $(this).attr("alt", WEBSITE_NAME);
    }
  });
};
NN_FRAMEWORK.Wows = function () {
  new WOW().init();
};
NN_FRAMEWORK.Pagings = function () {
  if ($(".paging-product").exists()) {
    loadPaging("ajax/product.php?perpage=8", ".paging-product");
  }
  if ($(".paging-product-category").exists()) {
    $(".paging-product-category").each(function () {
      var list = $(this).data("list");
      loadPaging(
        "ajax/product.php?perpage=8&idList=" + list,
        ".paging-product-category-" + list
      );
    });
  }
};
NN_FRAMEWORK.aweOwl = function () {
  var owl = $(".owl-carousel.owl-page");
  owl.each(function () {
    var xs_item = $(this).attr("data-xs-items");
    var md_item = $(this).attr("data-md-items");
    var lg_item = $(this).attr("data-lg-items");
    var ltg_item = $(this).attr("data-ltg-items");
    var sm_item = $(this).attr("data-sm-items");
    var margin = $(this).attr("data-margin");
    var dot = $(this).attr("data-dot");
    var nav = $(this).attr("data-nav");
    var center = $(this).attr("data-center");
    var height = $(this).attr("data-height");
    var play = $(this).attr("data-play");
    var loop = $(this).attr("data-loop");
    var animateOut = $(this).attr("data-animateOut");
    var animateIn = $(this).attr("data-animateIn");
    var autoplayTimeout = $(this).attr("data-autoplayTimeout");
    var smartSpeed = $(this).attr("data-smartSpeed");
    if (
      typeof autoplayTimeout !== typeof undefined &&
      autoplayTimeout !== false
    ) {
    } else {
      autoplayTimeout = 4000;
    }
    if (typeof smartSpeed !== typeof undefined && smartSpeed !== false) {
    } else {
      smartSpeed = 3000;
    }
    if (typeof margin !== typeof undefined && margin !== false) {
    } else {
      margin = 30;
    }
    if (typeof xs_item !== typeof undefined && xs_item !== false) {
    } else {
      xs_item = 1;
    }
    if (typeof sm_item !== typeof undefined && sm_item !== false) {
    } else {
      sm_item = 3;
    }
    if (typeof md_item !== typeof undefined && md_item !== false) {
    } else {
      md_item = 3;
    }
    if (typeof lg_item !== typeof undefined && lg_item !== false) {
    } else {
      lg_item = 3;
    }
    if (typeof ltg_item !== typeof undefined && ltg_item !== false) {
    } else {
      ltg_item = 1;
    }
    if (loop == 1) {
      loop = true;
    } else {
      loop = false;
    }
    if (dot == 1) {
      dot = true;
    } else {
      dot = false;
    }
    if (nav == 1) {
      nav = true;
    } else {
      nav = false;
    }
    if (play == 1) {
      play = true;
    } else {
      play = false;
    }
    if (center == 1) {
      center = true;
    } else {
      center = false;
    }
    if (animateOut == 0) {
      animateOut = false;
    }
    if (animateIn == 0) {
      animateIn = false;
    }
    $(this).owlCarousel({
      loop: loop,
      margin: Number(margin),
      responsiveClass: true,
      center: center,
      dots: dot,
      nav: nav,
      navText: [
        '<div class="owlleft"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="row" points="11040,1920 4960,8000 11040,14080 "></polyline></svg></div>',
        '<div class="owlright"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="row" points="4960,1920 11040,8000 4960,14080 "></polyline></svg></div>',
      ],
      autoplay: play,
      autoplayTimeout: 7000,
      smartSpeed: 3000,
      autoplayHoverPause: true,
      autoHeight: false,
      animateOut: animateOut,
      animateIn: animateIn,
      responsive: {
        0: { items: Number(xs_item) },
        600: { items: Number(sm_item) },
        1000: { items: Number(md_item) },
        1200: { items: Number(lg_item) },
        1400: { items: Number(ltg_item) },
      },
    });
  });
};
NN_FRAMEWORK.parallaxImage = function () {
  if ($(".parallax-scene-1").length) {
    var scene1 = $(".parallax-scene-1").get(0);
    var parallaxInstance1 = new Parallax(scene1);
  }
  if ($(".parallax-scene-2").length) {
    var scene2 = $(".parallax-scene-2").get(0);
    var parallaxInstance2 = new Parallax(scene2);
  }
};
NN_FRAMEWORK.tabsHosting = function () {
  $(".nina-nav-host").on("click", ".nav-list-item", function (e) {
    e.preventDefault();
    $(".nina-nav-host .nav-list-item").removeClass("active");
    $(this).addClass("active");
    var r = $(this).data("rel");
    $(".contents_host .tabs-content").addClass("tabs-hide");
    $("#tabs-" + r).removeClass("tabs-hide");
    $(".owl-carousel").trigger("refresh.owl.carousel");
  });
  $(".nina-nav-host .nav-list-item:first").trigger("click");
};
NN_FRAMEWORK.tabsWebsite = function () {
  $(".nina-nav-web").on("click", ".nav-list-item", function (e) {
    e.preventDefault();
    $(".nina-nav-web .nav-list-item").removeClass("active");
    $(this).addClass("active");
    var r = $(this).data("rel");
    $(".contents_web .tabs-content").addClass("tabs-hide");
    $("#tabs-" + r).removeClass("tabs-hide");
  });
  $(".nina-nav-web .nav-list-item:first").trigger("click");
};
NN_FRAMEWORK.tabsDemo = function () {
  $(".nina-tabs-demo").on("click", ".nav-demo-list-item", function (e) {
    e.preventDefault();
    $(".nina-tabs-demo .nav-demo-list-item").removeClass("active");
    $(this).addClass("active");
    var i = $(this).data("id");
    $(".nina-tab-content").removeClass("nina-tab-show");
    $('[data-id="' + i + '"]').addClass("nina-tab-show");
  });
};
NN_FRAMEWORK.btnLoading = function () {
  $(".btn-loading").on("click", function () {
    var o = $(this);
    var d = {
      id: parseInt(o.attr("data-id")),
      rand: o.attr("data-rand"),
      show: parseInt(o.attr("data-show")),
      page: parseInt(o.attr("data-page")),
    };
    $.ajax({
      url: "ajax/load_more.php",
      type: "POST",
      dataType: "json",
      data: d,
      beforeSend: function () {
        o.css("display", "none");
        o.next(".lds-spinner").css("display", "inline-block");
      },
      success: function (data) {
        setTimeout(function () {
          o.css("display", "inline-block");
          o.next(".lds-spinner").css("display", "none");
        }, 1000);
        setTimeout(function () {
          if (data.check != "null") {
            if (data.count < 4) {
              o.css("display", "none");
              o.next(".lds-spinner").css("display", "none");
            }
            var p = parseInt(o.attr("data-page"));
            o.attr("data-page", p + 1);
            o.attr("data-rand", data.rand);
            o.parents(".nina-tab-content")
              .find(".nina-portfolio")
              .append(data.items);
          } else {
            o.css("display", "none");
            o.next(".lds-spinner").css("display", "none");
          }
        }, 1000);
      },
    });
  });
};
NN_FRAMEWORK.checkItemDomain = function (domain, ext) {
  var result = "";
  $.ajax({
    url: "ajax/checkdomain.php",
    type: "POST",
    dataType: "json",
    data: { action: "checkdomain", domain: domain, ext: ext },
    success: function (data) {
      var elem = $('.item[data-domain="' + ext + '"]');
      if (data.status == 0) {
        elem.addClass("no-exists");
        elem
          .find(".nina-name")
          .append(
            '<p class="text-ket-qua-whois"><img src="assets/images/icon_deleted.svg" alt="Exists"> Tên miền đã được đăng ký.</p>'
          );
        elem
          .find(".nina-desc")
          .html(
            '<p><button type="button" class="view-whois" data-xdomain="' +
              domain +
              '" data-xext="' +
              ext +
              '">Xem thông tin</button></p>'
          );
      } else {
        elem.addClass("exists");
        if (data.info.price_check == 1) {
          elem
            .find(".nina-desc")
            .html("<p><span>" + data.info.price_txt + "/năm</span></p>");
        } else {
          elem
            .find(".nina-desc")
            .html(
              '<p><button type="button" class="success">Giá liên hệ</button></p>'
            );
        }
      }
    },
  });
};
NN_FRAMEWORK.whoisDomain = function () {
  $("body").on("click", ".view-whois", function (event) {
    event.preventDefault();
    var o = $(this);
    $(".name-send")
      .find("b")
      .text(o.data("xdomain") + "." + o.data("xext"));
    $.ajax({
      url: "ajax/checkwhois.php",
      type: "POST",
      data: { domain: o.data("xdomain"), ext: o.data("xext") },
      beforeSend: function () {},
      success: function (data) {
        setTimeout(function () {
          $("#show-whois-info").html(data);
        }, 1000);
      },
    });
  });
};
NN_FRAMEWORK.PopupCustom = function () {
  if ($('[data-role="popup"]').exists()) {
    $("body").on("click", ".view-whois", function () {
      event.preventDefault();
      if ($(".nina-popup-info-over").hasClass("opacity")) {
        $(".nina-popup-info-over").addClass("on");
      }
    });
    $("body").on("click", ".close-send", function (event) {
      event.preventDefault();
      $(".nina-popup-info-over").removeClass("on");
      $(".name-send").find("b").text("");
      $("#show-whois-info").html(
        '<div class="nina-loading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>'
      );
    });
    $("body").on("click", ".nina-popup-info-form", function (event) {
      event.stopPropagation();
    });
    $("body").on("click", ".nina-popup-info-over", function (event) {
      event.preventDefault();
      $(this).removeClass("on");
      $(".name-send").find("b").text("");
      $("#show-whois-info").html(
        '<div class="nina-loading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>'
      );
    });
  }
};
NN_FRAMEWORK.PopupWeb = function () {
  if ($('[data-role="popup-web"]').length > 0) {
    $("body").on("click", ".btn-views", function (event) {
      event.preventDefault();
      if ($(".nina-popup-info-over").hasClass("opacity")) {
        $(".nina-popup-info-over").addClass("on");
        var package = $(this).attr("data-package");
        $("#package").val(package);
        $(".name-send b").html(package);
        var action = "bao-gia.html?package=" + package;
        $("#frm_package").attr("action", action);
        $("#tieude").val(
          "Hiện tại tôi cần tư vấn gói thiết kế website [" + package + "]"
        );
      }
    });
    $("body").on("click", ".close-send", function (event) {
      event.preventDefault();
      $(".nina-popup-info-over").removeClass("on");
    });
    $("body").on("click", ".nina-popup-info-form", function (event) {
      event.stopPropagation();
    });
    $("body").on("click", ".nina-popup-info-over", function (event) {
      event.preventDefault();
      $(this).removeClass("on");
    });
    $("body").on("click", "#btn-submit-package", function (event) {
      event.preventDefault();
      var error_status = false;
      var hoten = $("#hoten").val();
      if (hoten == "") {
        $("#hoten").next("p").html("Quý khách chưa nhập họ tên");
        error_status = true;
        return false;
      }
      var p_email =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var email = $("#email").val();
      if (email == "") {
        $("#email").next("p").html("Quý khách chưa nhập email");
        error_status = true;
        return false;
      }
      var check_email = p_email.test(email);
      if (!check_email) {
        $("#email").next("p").html("Quý khách nhập email không đúng định dạng");
        error_status = true;
        return false;
      }
      var dienthoai = $("#dienthoai").val();
      if (dienthoai == "") {
        $("#dienthoai").next("p").html("Quý khách chưa nhập điện thoại");
        error_status = true;
        return false;
      }
      var tieude = $("#tieude").val();
      if (tieude == "") {
        $("#tieude").next("p").html("Quý khách chưa nhập tiêu đề tư vấn");
        error_status = true;
        return false;
      }
      if (error_status == false) {
        grecaptcha.ready(function () {
          grecaptcha
            .execute(SITEKEY_RECAPT, { action: "packageWeb" })
            .then(function (token) {
              document.getElementById("recaptchaResponseWeb").value = token;
              document.getElementById("frm_package").submit();
            });
        });
      }
    });
  }
};
NN_FRAMEWORK.IsUnicode = function (text) {
  var unicode = [
    { key: "a", value: "á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ" },
    { key: "d", value: "đ" },
    { key: "e", value: "é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ" },
    { key: "i", value: "í|ì|ỉ|ĩ|ị" },
    { key: "o", value: "ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ" },
    { key: "u", value: "ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự" },
    { key: "y", value: "ý|ỳ|ỷ|ỹ|ỵ" },
    { key: "A", value: "Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ" },
    { key: "D", value: "Đ" },
    { key: "E", value: "É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ" },
    { key: "I", value: "Í|Ì|Ỉ|Ĩ|Ị" },
    { key: "O", value: "Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ" },
    { key: "U", value: "Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự" },
    { key: "Y", value: "Ý|Ỳ|Ỷ|Ỹ|Ỵ" },
  ];
  for (vars in unicode) {
    return new RegExp(unicode[vars].value, "g").test(text);
  }
  return text;
};
NN_FRAMEWORK.RemoveUnicode = function (text) {
  var unicode = [
    { key: "a", value: "á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ" },
    { key: "d", value: "đ" },
    { key: "e", value: "é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ" },
    { key: "i", value: "í|ì|ỉ|ĩ|ị" },
    { key: "o", value: "ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ" },
    { key: "u", value: "ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự" },
    { key: "y", value: "ý|ỳ|ỷ|ỹ|ỵ" },
    { key: "A", value: "Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ" },
    { key: "D", value: "Đ" },
    { key: "E", value: "É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ" },
    { key: "I", value: "Í|Ì|Ỉ|Ĩ|Ị" },
    { key: "O", value: "Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ" },
    { key: "U", value: "Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự" },
    { key: "Y", value: "Ý|Ỳ|Ỷ|Ỹ|Ỵ" },
  ];
  for (vars in unicode) {
    text = text.replace(
      new RegExp(unicode[vars].value, "g"),
      unicode[vars].key
    );
  }
  return text;
};
NN_FRAMEWORK.getItemDomain = function (name_domain, ext_domain) {
  var s =
    '<div class="item" data-domain="' +
    ext_domain +
    '"><div class="nina-name"><div class="i"><span>' +
    name_domain +
    "</span><span>." +
    ext_domain +
    '</span></div></div><div class="nina-desc flex"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div></div>';
  return s;
};
NN_FRAMEWORK.checkDomainSubmit = function (domain) {
  var re = new RegExp(
    /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/
  );
  if (domain.indexOf(".") > 0) {
    name_domain = domain.substr(0, domain.indexOf("."));
    ext_domain = domain.substr(name_domain.length + 1, domain.length);
    var s = NN_FRAMEWORK.getItemDomain(name_domain, ext_domain);
    $("#result-domain").append(s);
    NN_FRAMEWORK.checkItemDomain(name_domain, ext_domain);
  } else {
    var ext_domain = $("#phobien .extension:first input[type=checkbox]").val();
    name_domain = domain;
    var s = NN_FRAMEWORK.getItemDomain(name_domain, ext_domain);
    $("#result-domain").append(s);
    NN_FRAMEWORK.checkItemDomain(name_domain, ext_domain);
  }
  var t = "";
  $(".nina-left-domain input[type=checkbox]").each(function (index, el) {
    if ($(this).is(":checked")) {
      var v = $(this).val();
      var ext = "." + v;
      if (v != ext_domain) {
        t += NN_FRAMEWORK.getItemDomain(name_domain, v);
      }
    }
  });
  $("#result-more-domain").html(t);
  $(".nina-left-domain input[type=checkbox]").each(function (index, el) {
    if ($(this).is(":checked")) {
      var v = $(this).val();
      var ext = "." + v;
      if (v != ext_domain) {
        NN_FRAMEWORK.checkItemDomain(name_domain, v);
      }
    }
  });
};
NN_FRAMEWORK.CheckDomain = function () {
  var str = $("#domain").val();
  str = str.replace(/\s+/gi, "");
  str = str.replace(/\,+/gi, "", str);
  str = str.replace(/^\s+/gi, "");
  if (str.length < 1) {
    $("#domain").val(str);
    $("#domain").focus();
    return false;
  }
  if (str.length < 2 || str.length > 63) {
    alert("Tên miền ít nhất 2 ký tự và nhiều nhất là 63 ký tự");
    return false;
  }
  if (str.lastIndexOf(" ") != -1) {
    var array = str.split(" ");
    var len_array = array.length;
    for ($v in array) {
      if ($v < len_array - 1) {
        array[$v] = array[$v].replace(".", "");
      }
    }
    str = array.join("");
    str = str.replace(/\s+/gi, "", str);
  }
  var tmpstr = NN_FRAMEWORK.RemoveUnicode(str);
  var pattern1 = /^([^a-z0-9]+)/gi;
  var pattern2 = /([^a-z0-9]+)$/gi;
  var pattern3 = /([^a-z0-9\.\-\s]+)/gi;
  if (pattern1.test(tmpstr) || pattern2.test(tmpstr) || pattern3.test(tmpstr)) {
    alert(
      "Tên miền chỉ chứa các ký tự a-z, 0-9, dấu - và các ký tự tiếng việt có mũ, dấu trong bảng mã Unicode dựng sẵn(theo TCVN 6909-2001)"
    );
    return false;
  }
  var codau = NN_FRAMEWORK.IsUnicode(str);
  if (str.lastIndexOf(",") != -1) {
    str = str.replace(/\,+/gi, ",", str);
  }
  $("#domain").val(str);
  return true;
};
NN_FRAMEWORK.ChooseDomain = function () {
  $("body").on("click", ".item-ext", function (event) {
    var ext = $(this).val();
    if ($(this).is(":checked")) {
      NN_FRAMEWORK.CheckDomain();
      var domain = $("#domain").val();
      if (domain.indexOf(".") > 0) {
        var name_domain = domain.substr(0, domain.indexOf("."));
        var ext_domain = ext;
      } else {
        var ext_domain = ext;
        var name_domain = domain;
      }
      var s = NN_FRAMEWORK.getItemDomain(name_domain, ext_domain);
      $("#result-more-domain").prepend(s);
      NN_FRAMEWORK.checkItemDomain(name_domain, ext_domain);
      $("html,body").animate(
        { scrollTop: $("#result-more-domain").offset().top },
        "slow"
      );
    } else {
      var el = $('.item[data-domain="' + ext + '"]');
      el.remove();
    }
  });
};
NN_FRAMEWORK.tabsQuestion = function () {
  $("body").on("click", ".nina-question-box-content h3", function (event) {
    var o = $(this);
    $(".nina-question-box-content h3").removeClass("active");
    o.addClass("active");
    $(".nina-question-box-content h3")
      .next(".nina-question-desc")
      .stop()
      .slideUp();
    o.next(".nina-question-desc").stop().slideDown();
  });
};
NN_FRAMEWORK.tabsFooter = function () {
  $("body").on("click", ".nina-footer-item h3", function (e) {
    e.preventDefault();
    $(".nina-footer-item h3").next(".nina-collapse").stop().slideUp(400);
    $(".nina-footer-item h3").removeClass("open");
    $(this).addClass("open");
    $(this).next(".nina-collapse").stop().slideDown(400);
  });
};
NN_FRAMEWORK.menuMobile = function () {
  $("body").on("click", "span.btn-dropdown-menu", function () {
    var o = $(this);
    if (!o.hasClass("active")) {
      o.addClass("active");
      o.next(".sub-menu").stop().slideDown(300);
    } else {
      o.removeClass("active");
      o.next(".sub-menu").stop().slideUp(300);
    }
  });
  $(".nina-menu-mobile").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".nina-fixwidth").toggleClass("open-sidebar-menu");
    $(".opacity-menu").toggleClass("open-opacity");
  });
  $(".opacity-menu").click(function (e) {
    $(".open-menu-header").removeClass("open-button");
    $(".nina-fixwidth").removeClass("open-sidebar-menu");
    $(".opacity-menu").removeClass("open-opacity");
  });
};
NN_FRAMEWORK.tabsDomain = function () {
  $("body").on("click", ".nina-sub-left h4", function (e) {
    if (!$(this).hasClass("active")) {
      $(".nina-sub-left h4").next(".domain-list").stop().slideUp(400);
      $(".nina-sub-left h4").removeClass("active");
      $(this).addClass("active");
      $(this).next(".domain-list").stop().slideDown(400);
    } else {
      $(this).removeClass("active");
      $(this).next(".domain-list").stop().slideUp(400);
    }
  });
};
NN_FRAMEWORK.clickDemo = function () {
  $("body").on("click", ".item-search", function (e) {
    var o = $(this);
    var id = parseInt(o.data("id"));
    $(".item-search").removeClass("active");
    o.addClass("active");
    if (id == 0) {
      $("#nina-content-demo")
        .find(".nina-tab-content")
        .addClass("nina-tab-show");
    } else {
      $("#nina-content-demo")
        .find(".nina-tab-content")
        .removeClass("nina-tab-show");
      $("#category-" + id).addClass("nina-tab-show");
      goToByScroll("category-" + id);
    }
  });
};
$(window).load(function () {
  $(".mask").addClass("show");
  setTimeout(function () {
    $(".mask").addClass("finish");
  }, 1000);
});
$(document).ready(function () {
  var check_post = $("#check-post").val();
  if (check_post != "" && typeof check_post !== "undefined") {
    NN_FRAMEWORK.checkDomainSubmit(check_post);
  }
  NN_FRAMEWORK.clickDemo();
  NN_FRAMEWORK.tabsDomain();
  NN_FRAMEWORK.menuMobile();
  NN_FRAMEWORK.tabsFooter();
  NN_FRAMEWORK.PopupCustom();
  NN_FRAMEWORK.PopupWeb();
  NN_FRAMEWORK.whoisDomain();
  NN_FRAMEWORK.ChooseDomain();
  NN_FRAMEWORK.tabsQuestion();
  NN_FRAMEWORK.Lazys();
  NN_FRAMEWORK.Wows();
  NN_FRAMEWORK.AltImg();
  NN_FRAMEWORK.GoTop();
  NN_FRAMEWORK.aweOwl();
  NN_FRAMEWORK.parallaxImage();
  NN_FRAMEWORK.tabsHosting();
  NN_FRAMEWORK.tabsWebsite();
  NN_FRAMEWORK.tabsDemo();
  NN_FRAMEWORK.btnLoading();
});
$(document).ready(function () {
  "use strict";
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});
