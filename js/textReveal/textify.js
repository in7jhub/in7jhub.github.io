/*! For license information please see Textify.min.js.LICENSE.txt */ ! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["Textify.js"] = t() : e["Textify.js"] = t()
}(this, function () {
    return n = {
            490: function (e) {
                var i = "undefined" != typeof document ? document.createElement("p").style : {},
                    r = ["O", "ms", "Moz", "Webkit"],
                    t = /([A-Z])/g,
                    n = {};

                function o(e) {
                    if (e = e.replace(/-([a-z])/g, function (e, t) {
                            return t.toUpperCase()
                        }), void 0 === i[e])
                        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = r.length; n--;) {
                            var o = r[n] + t;
                            if (void 0 !== i[o]) return o
                        }
                    return e
                }
                e.exports = function (e) {
                    return e in n ? n[e] : n[e] = o(e)
                }, e.exports.dash = function (e) {
                    return e = o(e), t.test(e) && (e = "-" + e.replace(t, "-$1"), t.lastIndex = 0), e.toLowerCase()
                }
            }
        }, o = {}, w.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return w.d(t, {
                a: t
            }), t
        }, w.d = function (e, t) {
            for (var n in t) w.o(t, n) && !w.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, w.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, E = {},
        function () {
            "use strict";

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function n(e, t, n) {
                t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                })
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function s(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f() {
                return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
                    var o = function (e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)););
                        return e
                    }(e, t);
                    if (o) return o = Object.getOwnPropertyDescriptor(o, t), o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                }).apply(this, arguments)
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function r(e, t) {
                if (t && ("object" === a(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                t = e;
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            w.d(E, {
                default: function () {
                    return O
                }
            });
            var e = w(490),
                p = w.n(e),
                h = function () {
                    function i(e) {
                        var t = e.element,
                            e = e.elements,
                            n = (c(this, i), t.dataset),
                            o = n.animationDelay,
                            n = n.animationTarget;
                        this.delay = o, this.element = t, this.elements = e, this.repeat = !1, this.target = n ? t.closest(n) : t, this.transformPrefix = p()("transform"), this.isVisible = !1, "IntersectionObserver" in window ? (this.createObserver(), this.animateOut()) : this.animateIn()
                    }
                    return n(i, [{
                        key: "createObserver",
                        value: function () {
                            var n = this;
                            this.observer = new window.IntersectionObserver(function (e, t) {
                                e.forEach(function (e) {
                                    !n.isVisible && e.isIntersecting ? (n.animateIn(), n.repeat && t.unobserve(e.target)) : n.animateOut()
                                })
                            }, {
                                root: null,
                                rootMargin: "0px",
                                threshold: 0
                            }).observe(this.target)
                        }
                    }, {
                        key: "animateIn",
                        value: function () {
                            this.isVisible = !0
                        }
                    }, {
                        key: "animateOut",
                        value: function () {
                            this.isVisible = !1
                        }
                    }]), i
                }();

            function b(e) {
                var t = e.element,
                    n = e.expression,
                    n = void 0 === n ? " " : n,
                    e = e.append,
                    e = void 0 === e || e;
                o = t.innerHTML.toString().trim(), r = n, o = o.split("<br>"), c = [], o.forEach(function (e, t) {
                    var n = !1,
                        o = "",
                        i = [];
                    0 < t && c.push("<br>"), (c = c.concat(e.split(r))).forEach(function (e) {
                        (n = n || !e.includes("<a") && !e.includes("<strong") ? n : !(o = "")) && (o += " ".concat(e)), n && (e.includes("/a>") || e.includes("/strong>")) && (i.push(o), o = ""), n || "" !== o || i.push(e), n && (e.includes("/a>") || e.includes("/strong>")) && (n = !1)
                    }), c = i
                });
                var o, r, c, i = "",
                    n = (c.forEach(function (e) {
                        -1 < e.indexOf("<br>") ? e.split("<br>").forEach(function (e, t) {
                            i += 0 < t ? "<br>" + y(e) : y(e)
                        }) : i += y(e)
                    }), t.innerHTML = i, t.querySelectorAll("span"));
                e && n.forEach(function (e) {
                    var t = 1 === e.textContent.length,
                        n = "" !== e.innerHTML.trim(),
                        o = "&" !== e.textContent,
                        i = "-" !== e.textContent;
                    t && n && o && i && (e.innerHTML = "".concat(e.textContent, "&nbsp;"))
                })
            }

            function y(e) {
                return "" === e ? e : " " === e ? "&nbsp;" : "<br>" === (e = e.trim()) ? "<br>" : "<span>".concat(e, "</span>") + (1 < e.length ? " " : "")
            }

            function d(e) {
                if ("undefined" === e) return t.default;
                if (e && !t[e]) throw new Error("Invalid Easing ".concat(e, " option."));
                return t[e]
            }
            var t = {
                    easeInOut: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                    easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
                    easeIn: "cubic-bezier(0.42, 0, 1, 1)",
                    ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
                    linear: "cubic-bezier(0, 0, 1, 1)",
                    back: "cubic-bezier(.37,1.62,.75,.87)",
                    backIn: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
                    backOut: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    backInOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    elasticIn: "cubic-bezier(0.04, 0.01, 0.23, 1)",
                    elasticOut: "cubic-bezier(0.04, 0.99, 0.32, 0.99)",
                    elasticInOut: "cubic-bezier(0.07, 0.95, 0.07, 1.05)",
                    bounceIn: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    bounceOut: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
                    bounceInOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    circIn: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
                    circOut: "cubic-bezier(0.075, 0.82, 0.165, 1)",
                    circInOut: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                    default: "cubic-bezier(0.77, 0, 0.175, 1)"
                },
                m = {
                    duration: 1450,
                    delay: 100,
                    fade: !1,
                    top: !1,
                    once: !0,
                    rotation: 0,
                    scale: 1,
                    easing: d("default"),
                    fadeEasing: d("default")
                };

            function v(n) {
                var o = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var e, t = u(n);
                    return r(this, o ? (e = u(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            var g = function () {
                var e = r,
                    t = h;
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && l(e, t);
                var i = v(r);

                function r(e) {
                    var t = e.element,
                        e = e.options,
                        e = void 0 === e ? {} : e,
                        n = (c(this, r), []),
                        o = t.querySelectorAll("h1, h2, p");
                    return 0 === o.length && (b({
                        element: t
                    }), b({
                        element: t
                    }), n.push.apply(n, s(t.querySelectorAll("span span")))), 0 !== o.length && o.forEach(function (e) {
                        b({
                            element: e
                        }), b({
                            element: e
                        }), n.push.apply(n, s(e.querySelectorAll("span span")))
                    }), (o = i.call(this, {
                        element: t,
                        elements: {
                            lines: n
                        }
                    })).options = Object.assign({}, m, e), o.repeat = o.options.once, o.onResize(), "IntersectionObserver" in window && o.animateOut(), o
                }
                return n(r, [{
                    key: "addStyles",
                    value: function (e, t) {
                        e.style.transition = "transform ".concat(this.options.duration, "ms ").concat(t * this.options.delay, "ms ").concat(this.options.easing, ", opacity ").concat(this.options.duration - 200, "ms ").concat(t * this.options.delay, "ms ").concat(this.options.fadeEasing), console.log(this.transformPrefix), e.style[this.transformPrefix] = "translateY(0) scale(1) rotate(0)", this.options.fade && (e.style.opacity = "1")
                    }
                }, {
                    key: "animateIn",
                    value: function () {
                        var n = this;
                        f(u(r.prototype), "animateIn", this).call(this), void 0 !== this.lines && ("object" === a(this.lines) ? Object.keys(this.lines).forEach(function (e, t) {
                            n.lines[e].forEach(function (e) {
                                n.addStyles(e, t)
                            })
                        }) : this.lines.forEach(function (e, t) {
                            e.forEach(function (e) {
                                n.addStyles(e, t)
                            })
                        }))
                    }
                }, {
                    key: "animateOut",
                    value: function () {
                        var t = this;
                        f(u(r.prototype), "animateOut", this).call(this), void 0 !== this.lines && ("object" === a(this.lines) ? Object.keys(this.lines).forEach(function (e) {
                            t.lines[e].forEach(function (e) {
                                e.style[t.transformPrefix] = "translateY(".concat(t.options.top ? "-" : "", "150%)  scale(").concat(t.options.scale, ") rotate(").concat(t.options.rotation, "deg)"), t.options.fade && (e.style.opacity = "0")
                            })
                        }) : this.lines.forEach(function (e) {
                            e.forEach(function (e) {
                                e.style[t.transformPrefix] = "translateY(".concat(t.options.top ? "-" : "", "150%)  scale(").concat(t.options.scale, ") rotate(").concat(t.options.rotation, "deg)"), t.options.fade && (e.style.opacity = "0")
                            })
                        }))
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        var n, o, i, r;
                        this.lines = (n = this.elements.lines, o = [], i = [], r = n[0].offsetTop, n.forEach(function (e, t) {
                            e.offsetTop === r && i.push(e), e.offsetTop !== r && (o.push(i), (i = []).push(e), r = e.offsetTop), t + 1 === n.length && o.push(i)
                        }), o)
                    }
                }, {
                    key: "onRefresh",
                    value: function () {
                        this.onResize()
                    }
                }]), r
            }();
            var O = function () {
                function i() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (c(this, i), e.easing) try {
                        e.easing = d(e.easing)
                    } catch (e) {
                        throw new Error(e)
                    } else e.easing = d("default");
                    if (e.fadeEasing) try {
                        e.fadeEasing = d(e.fadeEasing)
                    } catch (e) {
                        throw new Error(e)
                    } else e.fadeEasing = d("default");
                    var t, n, o = Object.assign({}, m, e),
                        e = e.selector || "[data-textify]";
                    this.elements = document.querySelectorAll(e), this.animations = (t = this.elements, n = function (e) {
                        return new g({
                            element: e,
                            options: o
                        })
                    }, t instanceof window.HTMLElement ? [n(t)] : "object" === a(t) ? Object.keys(t).map(function (e) {
                        return n(t[e])
                    }) : t.map(n)), this.elements.forEach(function (e) {
                        e.querySelectorAll("span").forEach(function (e) {
                            e.style.display = "inline-block", e.style.overflow = "hidden", e.style.verticalAlign = "top", e.style.transformOrigin = "center"
                        })
                    }), this.events()
                }
                return n(i, [{
                    key: "events",
                    value: function () {
                        window.addEventListener("resize", this.onResize.bind(this))
                    }
                }, {
                    key: "show",
                    value: function () {
                        this.animations.forEach(function (e) {
                            e.animateIn()
                        })
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.animations.forEach(function (e) {
                            e.animateOut()
                        })
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        this.animations.forEach(function (e) {
                            e.onResize && e.onResize()
                        })
                    }
                }, {
                    key: "onRefresh",
                    value: function () {
                        this.animations.forEach(function (e) {
                            e.onRefresh && e.onRefresh()
                        })
                    }
                }]), i
            }();
            window.Textify = O
        }(), E.default;

    function w(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        t = o[e] = {
            exports: {}
        };
        return n[e](t, t.exports, w), t.exports
    }
    var n, o, E
});