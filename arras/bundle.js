// read only

!(function () {
  const c = {
    K: {
      KEY_OVERRIDE: "R",
      KEY_LEVEL_UP: "N",
      KEY_ABILITY: "F",
      KEY_CHOOSE_1: "Y",
      KEY_CHOOSE_2: "U",
      KEY_CHOOSE_3: "I",
      KEY_CHOOSE_4: "H",
      KEY_CHOOSE_5: "J",
      KEY_CHOOSE_6: "K",
      KEY_SPECIAL: "`",
    },
    KEY_AUTO_FIRE: 69,
    KEY_AUTO_SPIN: 67,
    KEY_FAST_SPIN: 88,
    KEY_OVERRIDE: 82,
    KEY_LEVEL_UP: 78,
    KEY_ABILITY: 70,
    KEY_PAUSE: 71,
    KEY_REVERSE_TANK: 86,
    KEY_REVERSE_MOUSE: 66,
    KEY_SCREENSHOT: 81,
    KEY_UPGRADE_MAX: 77,
    KEY_CLASS_TREE: 84,
    KEY_RECORD: 90,
    KEY_UP: 87,
    KEY_PING: 76,
    KEY_LEFT: 65,
    KEY_DOWN: 83,
    KEY_RIGHT: 68,
    KEY_CHOOSE_1: 89,
    KEY_CHOOSE_2: 85,
    KEY_CHOOSE_3: 73,
    KEY_CHOOSE_4: 72,
    KEY_CHOOSE_5: 74,
    KEY_CHOOSE_6: 75,
    KEY_CHOOSE_7: -1,
    KEY_CHOOSE_8: -1,
    KEY_CHOOSE_9: -1,
    KEY_ENTER: 13,
    KEY_SPAWN: 13,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HLT: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 9,
    KEY_MOUSE_2: 16,
    KEY_SPECIAL: 192,
    KEY_SPECIAL_ALT: 223,
    KEY_SUICIDE: 79,
    i: 1920,
    j: 1080,
    ya: !1,
    W: !1,
    J: !1,
    Pa: 0,
    Qb: !1,
    Ta: [
      {
        z: ["Private", null],
        x: ["Local", null],
        glitch: ["Glitch", 10],
        buyvm: ["BuyVM", 15],
        extravm: ["ExtraVM", 40],
        hetzner: ["Hetzner", 50],
        itc: ["Incubatec", 45],
        ovh: ["OVH", 35],
        wsi: ["WSI", 50],
        vultr: ["Vultr", 30],
      },
      {
        xyz: ["Local", "Localhost", null],
        unk: ["Unknown", "Unknown", null],
        svx: ["US West", "Silicon Valley, CA, US", -7],
        lax: ["US West", "Los Angeles, CA, US", -7],
        dal: ["USA", "Dallas, TX, US", -5],
        kci: ["USA", "Kansas City, MO, US", -5],
        vin: ["US East", "Vint Hill, VA, US", -4],
        mtl: ["US East", "Montreal, CA", -4],
        lon: ["Europe", "London, UK", 1],
        fra: ["Europe", "Frankfurt, DE", 2],
        fsn: ["Europe", "Falkenstein, DE", 2],
        sgp: ["Asia", "Singapore", 8],
      },
      [
        [{ id: "x", C: "-> Trap Guard <-" }],
        [{ id: "e", Hb: "word" }],
        [{ id: "w", Hb: "words" }],
        [{ id: "p", C: "Portal" }],
        [{ id: "o", C: "Open" }],
        [{ id: "m", C: "Maze", delay: !0, remove: "f" }],
        [
          { id: "f", C: "FFA" },
          { id: "d", C: "Duos" },
          { id: "s", C: "Squads" },
          { id: "1", C: "1 Team", advance: !0 },
          { id: "2", C: "2 Team", advance: !0, end: "2TDM" },
          { id: "3", C: "3 Team", advance: !0, end: "3TDM" },
          { id: "4", C: "4 Team", advance: !0, end: "4TDM" },
        ],
        [
          { id: "d", C: "Domination" },
          { id: "m", C: "Mothership", remove: "2" },
          { id: "a", C: "Assault", remove: ["m", "2"] },
          { id: "s", C: "Siege", remove: "1" },
          { id: "t", C: "Tag", remove: ["o", "4"] },
          { id: "p", C: "Pandemic", remove: ["o", "2"] },
          { id: "b", C: "Soccer", remove: "2" },
          { id: "e", C: "Elimination", remove: ["o", "m", "4"] },
          { id: "z", C: "Sandbox" },
        ],
      ],
    ],
    na: new Date().getTimezoneOffset() / -60,
    ua: [],
    U: null,
    Nb: 0,
    md: null,
    mobile:
      "ontouchstart" in document.body &&
      /android|mobi/i.test(navigator.userAgent),
  };
  window.Arras = () => ({
    get graphical() {
      let a = c.ec.l;
      return {
        get darkBorders() {
          return a.xa;
        },
        set darkBorders(b) {
          a.xa = b;
        },
        get neon() {
          return a.Ca;
        },
        set neon(b) {
          a.Ca = b;
        },
        get coloredNest() {
          return a.hb;
        },
        set coloredNest(b) {
          a.hb = b;
        },
        get renderGrid() {
          return a.ab;
        },
        set renderGrid(b) {
          a.ab = b;
        },
        get shieldbars() {
          return a.yb;
        },
        set shieldbars(b) {
          a.yb = b;
        },
        get miter() {
          return a.Ma;
        },
        set miter(b) {
          a.Ma = b;
        },
        get miterStars() {
          return a.nb;
        },
        set miterStars(b) {
          a.nb = b;
        },
        get quadraticStars() {
          return a.qb;
        },
        set quadraticStars(b) {
          a.qb = b;
        },
        get renderNames() {
          return a.ub;
        },
        set renderNames(b) {
          a.ub = b;
        },
        get renderScores() {
          return a.vb;
        },
        set renderScores(b) {
          a.vb = b;
        },
        get renderHealth() {
          return a.tb;
        },
        set renderHealth(b) {
          a.tb = b;
        },
        get reducedInfo() {
          return a.rb;
        },
        set reducedInfo(b) {
          a.rb = b;
        },
        get censorNames() {
          return a.pa;
        },
        set censorNames(b) {
          a.pa = b;
        },
        get lowGraphics() {
          return a.mb;
        },
        set lowGraphics(b) {
          a.mb = b;
        },
        get alphaAnimations() {
          return a.eb;
        },
        set alphaAnimations(b) {
          a.eb = b;
        },
        get borderChunk() {
          return a.Sa;
        },
        set borderChunk(b) {
          a.Sa = b;
        },
        get compensationScale() {
          return a.Db;
        },
        set compensationScale(b) {
          a.Db = b;
        },
        get inversedRender() {
          return a.Xa;
        },
        set inversedRender(b) {
          a.Xa = b;
        },
        get fontSizeOffset() {
          return a.Va;
        },
        set fontSizeOffset(b) {
          a.Va = b;
        },
        get alternateBorder() {
          return a.Ra;
        },
        set alternateBorder(b) {
          a.Ra = b;
        },
      };
    },
    get gui() {
      let a = c.ec.I;
      return {
        get enabled() {
          return a.enabled;
        },
        set enabled(b) {
          a.enabled = b;
        },
        get scale() {
          return a.scale;
        },
        set scale(b) {
          a.scale = b;
        },
        get alcoveSize() {
          return a.Ab;
        },
        set alcoveSize(b) {
          a.Ab = b;
        },
        get spacing() {
          return a.Sb;
        },
        set spacing(b) {
          a.Sb = b;
        },
        get leaderboard() {
          return a.lb;
        },
        set leaderboard(b) {
          a.lb = b;
        },
        get barChunk() {
          return a.va;
        },
        set barChunk(b) {
          a.va = b;
        },
      };
    },
    get themeColor() {
      return c.gd;
    },
  });
  const ca = (a) => {
      if (0 === a.length) return "";
      if (1 === a.length) return a[0];
      let b = `${"and"} ${a[a.length - 1]}`;
      return [...a.slice(0, -1), b].join(2 === a.length ? " " : ", ");
    },
    ha = () => {
      var a = Math.round(c.v.time);
      a = Math.floor(a);
      if (0 >= a) return "less than a second";
      let b = [];
      for (let [d, e] of [
        [60, "second"],
        [60, "minute"],
        [24, "hour"],
        [null, "day"],
      ]) {
        let g = d ? a % d : a;
        a = d ? Math.floor(a / d) : 0;
        b.unshift(`${g} ${e}${1 === g ? "" : "s"}`);
        if (0 === a) break;
      }
      return ca(b);
    },
    ja = (a, b = !1) =>
      b && 0 >= a
        ? ""
        : 1e3 > a
        ? a.toFixed(0)
        : 1e6 > a
        ? (a / 1e3).toFixed(2) + "k"
        : 1e9 > a
        ? (a / 1e6).toFixed(2) + "m"
        : 1e12 > a
        ? (a / 1e9).toFixed(2) + "b"
        : 1e15 > a
        ? (a / 1e12).toFixed(2) + "t"
        : 1e18 > a
        ? (a / 1e15).toFixed(2) + "q"
        : 0 < a
        ? "\u221e"
        : "\u2014",
    ka = (a) =>
      1e18 > a
        ? a.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : 0 < a
        ? "\u221e"
        : "\u2014";
  let la = (a) => {
    c.dd.push({ text: a, time: Date.now(), duration: 1e4 });
  };
  function ma(a) {
    let b = navigator.getGamepads();
    if (-1 !== a.Ba) {
      var d = b[a.Ba];
      if (d && "standard" === d.mapping && d.connected) return d;
      a.Ba = -1;
    }
    for (d = 0; d < b.length; d++) {
      let e = b[d];
      if (e && "standard" === e.mapping && e.connected) return (a.Ba = d), e;
    }
    return null;
  }
  function oa(a, b, d) {
    a.set(0, -0.3826834323650898 > d);
    a.set(1, 0.3826834323650898 < d);
    a.set(2, -0.3826834323650898 > b);
    a.set(3, 0.3826834323650898 < b);
  }
  function qa(a) {
    if (!a.Zb) {
      a.Zb = !0;
      var b = !1,
        d = !1,
        e = !1,
        g = !1,
        k = !1;
      setInterval(() => {
        let l = ma(a);
        k !== !!l &&
          ((k = !!l),
          la(k ? "Controller connected." : "Controller disconnected."));
        if (l) {
          var t = (p) => (p < l.axes.length ? l.axes[p] : 0),
            f = (p) => p < l.buttons.length && l.buttons[p].pressed;
          oa(a, t(0), t(1));
          var h = t(2);
          t = t(3);
          if (0.01 < h * h + t * t) {
            let p = 0.6 * Math.max(c.i, c.j);
            a.setPosition(h * p, t * p);
          }
          a.set(4, f(5) || f(7));
          a.set(6, f(4) || f(6));
          h = f(1);
          b !== h && (h && a.m("t", 2), (b = h));
          h = f(2);
          d !== h && (h && a.u.m("0"), (d = h));
          h = f(10);
          e !== h && (h && a.m("t", 1), (e = h));
          f = f(11);
          g !== f && (f && a.m("t", 0), (g = f));
        }
      }, 10);
    }
  }
  function sa(a, b) {
    b.preventDefault();
    for (let d of b.changedTouches)
      (b = d.identifier),
        a.O === b
          ? ((a.O = null), 3 === c.ma && a.set(6, !1))
          : a.ta === b
          ? ((a.ta = null), oa(a, 0, 0))
          : a.ka === b &&
            ((a.ka = null), a.set(4, !1), 3 !== c.ma && a.set(6, !1));
  }
  function va() {
    var a = Ba,
      b = c.mobile ? document.getElementById("optMobile").value : "desktop",
      d = c.u;
    a.Vb = b;
    a.u = d;
    d = a.D;
    "joysticks" === b
      ? (d.addEventListener(
          "touchstart",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              e.preventDefault();
              if (c.J && c.wb <= Date.now()) a.bb();
              else
                for (let l of e.changedTouches) {
                  e = l.identifier;
                  g = Ea(l);
                  var k = Fa(a, g);
                  null === a.O &&
                    2 === k &&
                    ((a.O = e), 3 === c.ma && a.set(6, !0));
                  k ||
                    ((k = g.x < c.i / 2),
                    null === a.ta && k
                      ? ((a.ta = e), Ga(a, g))
                      : null !== a.ka || k || ((a.ka = e), Ha(a, g, !0)));
                }
              g = void 0;
            }
            return g;
          },
          !1
        ),
        d.addEventListener(
          "touchmove",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              e.preventDefault();
              for (let k of e.changedTouches)
                (e = k.identifier),
                  (g = Ea(k)),
                  a.ta === e ? Ga(a, g) : a.ka === e && Ha(a, g);
              g = void 0;
            }
            return g;
          },
          !1
        ),
        d.addEventListener("touchend", (e) => e.isTrusted && sa(a, e), !1),
        d.addEventListener("touchcancel", (e) => e.isTrusted && sa(a, e), !1))
      : (d.addEventListener(
          "mousedown",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              switch (e.button) {
                case 0:
                  Fa(a, Ea(e)) || a.set(4, !0);
                  break;
                case 1:
                  a.set(5, !0);
                  break;
                case 2:
                  a.set(6, !0);
              }
              g = void 0;
            }
            return g;
          },
          !1
        ),
        d.addEventListener(
          "mousemove",
          (e) => {
            var g;
            if ((g = e.isTrusted))
              (e = Ea(e)),
                null !== c.player.x &&
                  a.setPosition(e.x - c.player.x, e.y - c.player.y),
                (c.Jc = 0 === c.G.lc.check(e)),
                (g = void 0);
            return g;
          },
          !1
        ),
        d.addEventListener(
          "mouseup",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              switch (e.button) {
                case 0:
                  a.set(4, !1);
                  break;
                case 1:
                  a.set(5, !1);
                  break;
                case 2:
                  a.set(6, !1);
              }
              g = void 0;
            }
            return g;
          },
          !1
        ));
    window.addEventListener(
      "keydown",
      (e) => {
        var g;
        if ((g = e.isTrusted)) {
          if (a.pb) e.preventDefault(), a.m("0", e.keyCode);
          else {
            switch (e.keyCode) {
              case c.KEY_SPAWN:
                c.J && c.wb <= Date.now() && a.bb();
                break;
              case c.KEY_UP_ARROW:
              case c.KEY_UP:
                a.set(0, !0);
                break;
              case c.KEY_DOWN_ARROW:
              case c.KEY_DOWN:
                a.set(1, !0);
                break;
              case c.KEY_LEFT_ARROW:
              case c.KEY_LEFT:
                a.set(2, !0);
                break;
              case c.KEY_RIGHT_ARROW:
              case c.KEY_RIGHT:
                a.set(3, !0);
                break;
              case c.KEY_MOUSE_0:
                a.set(4, !0);
                break;
              case c.KEY_MOUSE_1:
                a.set(5, !0);
                break;
              case c.KEY_MOUSE_2:
                a.set(6, !0);
                break;
              case c.KEY_LEVEL_UP:
                a.u.m("L");
                break;
              case c.KEY_ABILITY:
                a.u.m("A");
                break;
              case c.KEY_PAUSE:
                a.u.m("D");
            }
            if (!e.ctrlKey && !e.altKey) {
              if (c.la) {
                g = -1;
                switch (e.keyCode) {
                  case c.KEY_UPGRADE_ATK:
                    g = 0;
                    break;
                  case c.KEY_UPGRADE_HLT:
                    g = 1;
                    break;
                  case c.KEY_UPGRADE_SPD:
                    g = 2;
                    break;
                  case c.KEY_UPGRADE_STR:
                    g = 3;
                    break;
                  case c.KEY_UPGRADE_PEN:
                    g = 4;
                    break;
                  case c.KEY_UPGRADE_DAM:
                    g = 5;
                    break;
                  case c.KEY_UPGRADE_RLD:
                    g = 6;
                    break;
                  case c.KEY_UPGRADE_MOB:
                    g = 7;
                    break;
                  case c.KEY_UPGRADE_RGN:
                    g = 8;
                    break;
                  case c.KEY_UPGRADE_SHI:
                    g = 9;
                }
                if (-1 !== g) {
                  let k = a.Xb ? 12 : 1;
                  for (let l = 0; l < k; l++) a.m("x", g);
                }
              }
              if (!e.repeat) {
                switch (e.keyCode) {
                  case c.KEY_AUTO_SPIN:
                    a.m("t", 0);
                    break;
                  case c.KEY_AUTO_FIRE:
                    a.m("t", 1);
                    break;
                  case c.KEY_OVERRIDE:
                    a.m("t", 2);
                    break;
                  case c.KEY_REVERSE_MOUSE:
                    a.m("t", 3);
                    break;
                  case c.KEY_REVERSE_TANK:
                    a.m("t", 4);
                    break;
                  case c.KEY_FAST_SPIN:
                    a.m("t", 5);
                    break;
                  case c.KEY_SPECIAL_ALT:
                  case c.KEY_SPECIAL:
                    a.u.m("0");
                    a.pb = !0;
                    break;
                  case c.KEY_SUICIDE:
                    a.u.m("K");
                    break;
                  case c.KEY_UPGRADE_MAX:
                    a.Xb = !0;
                    break;
                  case c.KEY_PING:
                    c.Pa = e.shiftKey ? 2 : 1;
                    break;
                  case c.KEY_CLASS_TREE:
                    c.Qb = !0;
                    break;
                  case c.KEY_RECORD:
                    a.capture("video");
                    break;
                  case c.KEY_SCREENSHOT:
                    a.capture("image");
                }
                if (c.oa)
                  switch (e.keyCode) {
                    case c.KEY_CHOOSE_1:
                      a.m("U", 0);
                      break;
                    case c.KEY_CHOOSE_2:
                      a.m("U", 1);
                      break;
                    case c.KEY_CHOOSE_3:
                      a.m("U", 2);
                      break;
                    case c.KEY_CHOOSE_4:
                      a.m("U", 3);
                      break;
                    case c.KEY_CHOOSE_5:
                      a.m("U", 4);
                      break;
                    case c.KEY_CHOOSE_6:
                      a.m("U", 5);
                      break;
                    case c.KEY_CHOOSE_7:
                      a.m("U", 6);
                      break;
                    case c.KEY_CHOOSE_8:
                      a.m("U", 7);
                      break;
                    case c.KEY_CHOOSE_9:
                      a.m("U", 8);
                  }
              }
            }
          }
          g = void 0;
        }
        return g;
      },
      !1
    );
    window.addEventListener(
      "keyup",
      (e) => {
        var g;
        if ((g = e.isTrusted)) {
          switch (e.keyCode) {
            case c.KEY_UP_ARROW:
            case c.KEY_UP:
              a.set(0, !1);
              break;
            case c.KEY_DOWN_ARROW:
            case c.KEY_DOWN:
              a.set(1, !1);
              break;
            case c.KEY_LEFT_ARROW:
            case c.KEY_LEFT:
              a.set(2, !1);
              break;
            case c.KEY_RIGHT_ARROW:
            case c.KEY_RIGHT:
              a.set(3, !1);
              break;
            case c.KEY_MOUSE_0:
              a.set(4, !1);
              break;
            case c.KEY_MOUSE_1:
              a.set(5, !1);
              break;
            case c.KEY_MOUSE_2:
              a.set(6, !1);
              break;
            case c.KEY_SPECIAL_ALT:
            case c.KEY_SPECIAL:
              a.pb = !1;
              break;
            case c.KEY_UPGRADE_MAX:
              a.Xb = !1;
              break;
            case c.KEY_PING:
              2 !== c.Pa && (c.Pa = 0);
              break;
            case c.KEY_CLASS_TREE:
              c.Qb = !1;
          }
          a.pb && a.m("0", -e.keyCode);
          g = void 0;
        }
        return g;
      },
      !1
    );
    ma(a)
      ? qa(a)
      : window.addEventListener(
          "gamepadconnected",
          (e) => e.isTrusted && qa(a)
        );
  }
  function Fa(a, b) {
    var d = c.G.stat.check(b);
    if (-1 !== d) return a.m("x", d), !0;
    if (-1 !== c.G.za.check(b)) return (c.za = !0);
    if (-1 !== c.G.ia.check(b))
      return (
        (a = document.createElement("input")),
        (a.value = c.ia.value),
        document.body.appendChild(a),
        a.select(),
        document.execCommand("copy"),
        (c.ia.fc = !0)
      );
    d = c.G.upgrade.check(b);
    if (-1 !== d) return a.m("U", d), !0;
    b = c.G.Kb.check(b);
    if (-1 !== b) {
      switch (b) {
        case 0:
          return 2;
        case 1:
          c.Na = c.Na ? 0 : 1;
          b = 400 >= Date.now() - a.xb;
          a.xb = Date.now();
          b && c.Na && (c.Na = 2);
          break;
        case 2:
          c.ma = ((c.ma || 0) + 1) % 5;
          a.O = null;
          a.set(6, 1 === c.ma);
          break;
        case 3:
          a.m("t", 1);
          break;
        case 4:
          a.m("t", 4);
          break;
        case 5:
          a.m("t", 0);
          break;
        case 6:
          a.m("t", 2);
          break;
        case 7:
          a.u.m("A");
          break;
        case 8:
          a.u.m("0");
      }
      return !0;
    }
    return !1;
  }
  function Ea(a) {
    return { x: a.clientX * c.Ec, y: a.clientY * c.Ec };
  }
  function Ga(a, b) {
    let d = b.x - c.i / 6;
    b = b.y - (2 * c.j) / 3;
    let e = Math.sqrt(d * d + b * b);
    oa(a, d / e, b / e);
  }
  function Ha(a, b, d = !1) {
    let e = 4 * (b.x - (5 * c.i) / 6);
    b = 4 * (b.y - (2 * c.j) / 3);
    var g = 0.5 * Math.max(c.i, (16 / 9) * c.j);
    g = Math.max(1, Math.abs(e / g), Math.abs(b / (0.5625 * g)));
    e /= g;
    b /= g;
    d && ((a.$b = 500 >= Date.now() - a.xb), (a.xb = Date.now()));
    d = e > -c.i / 2 && e < c.i / 2 && b > -c.j / 2 && b < c.j / 2;
    2 !== c.ma || d ? a.setPosition(e, b) : a.setPosition(-e, -b);
    a.set(6, [!1, !0, !d, null !== a.O, a.$b][c.ma]);
    a.set(4, !0);
  }
  const Ka = class {
    constructor() {
      this.target = { x: 0, y: 0 };
      this.u = null;
      this.pb = this.Xb = !1;
      this.Vb = "";
      this.O = this.ta = this.ka = null;
      this.$b = this.xb = 0;
      this.Ba = -1;
      this.Zb = !1;
      this.h = null;
      this.D = document.getElementById("canvas");
    }
    m(a, b) {
      this.u.m(a, b);
    }
    bb() {
      this.u.bb();
    }
    set(a, b) {
      this.u.cmd.set(a, b);
    }
    setPosition(a, b) {
      this.target.x = a;
      this.target.y = b;
      this.u.cmd.setPosition(a, b);
    }
    capture(a) {
      let b = (e, g) => {
        let k = URL.createObjectURL(e),
          l = document.createElement("a");
        l.style.display = "none";
        l.setAttribute("download", g);
        l.setAttribute("href", k);
        document.body.appendChild(l);
        setTimeout(() => {
          URL.revokeObjectURL(k);
          l.remove();
        }, 100);
        l.click();
      };
      if ("image" === a) {
        var d = this.D.toDataURL();
        a = atob(d.split(",")[1]);
        d = d.split(",")[0].split(":")[1].split(";")[0];
        let e = new Uint8Array(a.length);
        for (let g = 0; g < a.length; g++) e[g] = a.charCodeAt(g);
        b(new Blob([e], { type: d }), "screenshot.png");
      } else if ("video" === a)
        if (this.D.captureStream && window.MediaRecorder) {
          if (!this.h) {
            let e = [];
            this.h = new MediaRecorder(this.D.captureStream(60));
            this.h.addEventListener("dataavailable", (g) => e.push(g.data));
            this.h.addEventListener("stop", () => {
              b(new Blob(e, { type: this.h.mimeType }), "video.webm");
              e.length = 0;
            });
          }
          switch (this.h.state) {
            case "inactive":
              la("Recorder started!");
              this.h.start();
              break;
            case "recording":
              la("Recorder stopped! Saving file..."), this.h.stop();
          }
        } else la("Media recorder is unsupported in this browser!");
    }
  };
  let La = () => {
      let a = (window.aiptag = window.aiptag || {});
      a.cmd = a.cmd || [];
      a.cmd.display = a.cmd.display || [];
      a.cmd.player = a.cmd.player || [];
      a.cmp = a.cmp || {};
      a.cmp.show = !0;
      a.cmp.position = "bottom";
      return a;
    },
    Ma = () => {
      window.nitroAds ||
        (window.nitroAds = {
          createAd() {
            window.nitroAds.queue.push(["createAd", arguments]);
          },
          queue: [],
        });
      return window.nitroAds;
    },
    Na = () => {
      window.optimize || (window.optimize = { queue: [] });
      return window.optimize;
    };
  window.dataLayer = window.dataLayer || [];
  function Oa(a) {
    window.dataLayer.push(arguments);
  }
  Oa("js", new Date());
  Oa("config", "UA-120544149-1");
  let Pa = (a, b) => {
    if ((a = document.getElementById(a))) a.style.display = b;
  };
  var Ta = {
      F: "adinplay",
      Ia: !1,
      show(a = this.F) {
        this.Ia && a !== this.F && this.L();
        this.Ia = !0;
        this.F = a;
        "adinplay" === this.F
          ? La().cmd.display.push(() =>
              window.aipDisplayTag.display("arras-io_336x280")
            )
          : "nitropay" === this.F
          ? (Pa("ad-spawn", "block"),
            Ma().createAd("ad-spawn", {
              refreshLimit: 10,
              refreshTime: 30,
              renderVisibleOnly: !1,
              refreshVisibleOnly: !0,
              sizes: [
                [336, 280],
                [300, 250],
              ],
            }))
          : "bsa" === this.F
          ? (Pa("bsa-zone_1643828555140-9_123456", "block"),
            Na().queue.push(() =>
              window.optimize.push("bsa-zone_1643828555140-9_123456")
            ))
          : Pa("referral-fallback", "block");
      },
      L() {
        this.Ia = !1;
        "adinplay" === this.F
          ? La().cmd.display.push(() =>
              window.aipDisplayTag.clear("arras-io_336x280")
            )
          : "nitropay" === this.F
          ? Pa("ad-spawn", "none")
          : "bsa" === this.F
          ? Pa("bsa-zone_1643828555140-9_123456", "none")
          : Pa("referral-fallback", "none");
      },
    },
    Ua = {
      F: "adinplay",
      Ia: !1,
      show(a = this.F) {
        this.Ia && a !== this.F && this.L();
        this.Ia = !0;
        this.F = a;
        Pa("respawn-banner", "block");
        if ("adinplay" === this.F)
          La().cmd.display.push(() =>
            window.aipDisplayTag.display("arras-io_728x90")
          );
        else if ("nitropay" === this.F || "nitropay-mobile" === this.F) {
          a = document.getElementById("ad-respawn-container");
          let b = document.getElementById("ad-respawn");
          b ||
            ((b = document.createElement("div")),
            (b.id = "ad-respawn"),
            a.appendChild(b));
          a = [];
          "nitropay-mobile" === this.F
            ? a.push([320, 50])
            : (1440 <= window.innerWidth &&
                680 <= window.innerHeight &&
                a.push([970, 250]),
              1440 <= window.innerWidth && a.push([970, 90]),
              a.push([728, 90]),
              700 <= window.innerHeight && a.push([336, 280]),
              680 <= window.innerHeight && a.push([300, 250]));
          Ma().createAd("ad-respawn", {
            refreshLimit: 10,
            refreshTime: 30,
            renderVisibleOnly: !1,
            refreshVisibleOnly: !0,
            sizes: a,
          });
        } else
          "bsa" === this.F &&
            (Pa("bsa-zone_1643827950431-2_123456", "block"),
            Na().queue.push(() =>
              window.optimize.push("bsa-zone_1643827950431-2_123456")
            ));
      },
      L() {
        this.Ia = !1;
        if ("adinplay" === this.F)
          La().cmd.display.push(() =>
            window.aipDisplayTag.clear("arras-io_728x90")
          );
        else if ("nitropay" === this.F || "nitropay-mobile" === this.F) {
          let a = document.getElementById("ad-respawn");
          a && a.remove();
        } else
          "bsa" === this.F && Pa("bsa-zone_1643827950431-2_123456", "none");
        Pa("respawn-banner", "none");
      },
      kd() {
        let a = document.getElementById("respawn-banner");
        return a ? a.clientHeight : 0;
      },
    },
    Va = {
      get zb() {
        return Ma().loaded;
      },
    };
  let Wa = new Uint8Array(2097152),
    Ya = new DataView(Wa.buffer);
  var Za = (a) => {
      let b = [];
      for (var d of a) {
        var e = 0;
        if (0 === d || !1 === d) e = 0;
        else if (1 === d || !0 === d) e = 1;
        else if ("number" === typeof d)
          !Number.isInteger(d) || -4294967296 > d || 4294967296 <= d
            ? (e = 8)
            : 0 <= d
            ? 256 > d
              ? (e = 2)
              : 65536 > d
              ? (e = 4)
              : 4294967296 > d && (e = 6)
            : -256 <= d
            ? (e = 3)
            : -65536 <= d
            ? (e = 5)
            : -4294967296 <= d && (e = 7);
        else if ("string" === typeof d) {
          e = !1;
          for (var g = 0; g < d.length; g++)
            if ("\u00ff" < d.charAt(g)) e = !0;
            else if ("\x00" === d.charAt(g))
              throw (
                (console.error("Null containing string", d),
                Error("Null containing string"))
              );
          e = !e && 1 >= d.length ? 9 : e ? 11 : 10;
        } else
          throw (
            (console.error("Unencodable data type", d, a),
            Error("Unencodable data type"))
          );
        b.push(e);
      }
      b.push(15);
      let k = 0,
        l = -1;
      d = (f) => {
        -1 === l ? (l = f) : (Ya.setUint8(k++, (l << 4) | f), (l = -1));
      };
      e = 15;
      g = 0;
      for (var t of b)
        if (t === e) g++;
        else {
          for (d(e); 0 < g; )
            switch (g) {
              case 0:
                break;
              case 1:
                d(e);
                g = 0;
                break;
              case 2:
                d(12);
                g = 0;
                break;
              case 3:
                d(13);
                g = 0;
                break;
              default:
                d(14), 19 > g ? (d(g - 4), (g = 0)) : (d(15), (g -= 19));
            }
          e = t;
        }
      if (0 !== g || 15 !== e) throw Error("Internal error");
      d(15);
      -1 !== l && d(15);
      for (t = 0; t < b.length; t++)
        switch (((d = a[t]), b[t])) {
          case 2:
          case 3:
            Ya.setUint8(k++, d);
            break;
          case 4:
          case 5:
            Ya.setUint16(k, d, !0);
            k += 2;
            break;
          case 6:
          case 7:
            Ya.setUint32(k, d, !0);
            k += 4;
            break;
          case 8:
            Ya.setFloat32(k, d, !0);
            k += 4;
            break;
          case 9:
            d = 0 === d.length ? 0 : d.charCodeAt(0);
            Ya.setUint8(k++, d);
            break;
          case 10:
            for (e = 0; e < d.length; e++) Ya.setUint8(k++, d.charCodeAt(e));
            Ya.setUint8(k++, 0);
            break;
          case 11:
            for (e = 0; e < d.length; e++)
              Ya.setUint16(k, d.charCodeAt(e), !0), (k += 2);
            Ya.setUint16(k, 0, !0);
            k += 2;
        }
      return Wa.slice(0, k).buffer;
    },
    ab = (a) => {
      var b = new Uint8Array(a);
      if (2097152 < b.length) return null;
      a = 2097152 - b.length;
      Wa.set(b, a);
      if (15 !== Ya.getUint8(a) >> 4) return null;
      b = [];
      for (var d = 15, e = !0; ; ) {
        if (2097152 <= a) return null;
        var g = Ya.getUint8(a);
        e ? ((g &= 15), a++) : (g >>= 4);
        e = !e;
        if (12 === (g & 12)) {
          if (15 === g) {
            e && a++;
            break;
          }
          let k = g - 10;
          if (14 === g) {
            if (2097152 <= a) return null;
            g = Ya.getUint8(a);
            e ? ((g &= 15), a++) : (g >>= 4);
            e = !e;
            k += g;
          }
          for (g = 0; g < k; g++) b.push(d);
        } else b.push(g), (d = g);
      }
      d = [];
      for (let k of b)
        switch (k) {
          case 0:
            d.push(0);
            break;
          case 1:
            d.push(1);
            break;
          case 2:
            if (2097152 <= a) return null;
            d.push(Ya.getUint8(a++));
            break;
          case 3:
            if (2097152 <= a) return null;
            d.push(Ya.getUint8(a++) - 256);
            break;
          case 4:
            if (2097152 <= a + 1) return null;
            d.push(Ya.getUint16(a, !0));
            a += 2;
            break;
          case 5:
            if (2097152 <= a + 1) return null;
            d.push(Ya.getUint16(a, !0) - 65536);
            a += 2;
            break;
          case 6:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getUint32(a, !0));
            a += 4;
            break;
          case 7:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getUint32(a, !0) - 4294967296);
            a += 4;
            break;
          case 8:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getFloat32(a, !0) || 0);
            a += 4;
            break;
          case 9:
            if (2097152 <= a) return null;
            b = Ya.getUint8(a++);
            d.push(0 === b ? "" : String.fromCharCode(b));
            break;
          case 10:
            for (b = ""; 2097152 > a; ) {
              e = Ya.getUint8(a++);
              if (!e) break;
              b += String.fromCharCode(e);
            }
            d.push(b);
            break;
          case 11:
            for (b = ""; 2097152 > a + 1; ) {
              e = Ya.getUint16(a, !0);
              a += 2;
              if (!e) break;
              b += String.fromCharCode(e);
            }
            d.push(b);
        }
      return d;
    };
  let bb =
      (!/Chrome\/8[4-6]\.0\.41([4-7][0-9]|8[0-3])\./.test(
        navigator.userAgent
      ) &&
        window.requestAnimationFrame) ||
      ((a) => setTimeout(() => a(Date.now()), 1e3 / 60)),
    cb = (a) => new Promise((b) => setTimeout(b, a));
  const db = /(^|\.)(localhost|arras\.cx)$/.test(location.hostname),
    eb = window !== window.top;
  (() => {
    if (!db || eb) {
      try {
        //window.top.location = "https://arras.io/";
        return;
      } catch (d) {}
      let b = !1;
      document.addEventListener("click", () => {
        if (!b) {
          b = !0;
          try {
            //window.top.location = "https://arras.io/";
          } catch (d) {}
        }
      });
    }
    if ("http:" === location.protocol || location.hostname.startsWith("www."))
      location.href = `https://${location.host.replace(/^www\.|:80$/g, "")}/${
        "#" === location.hash ? "" : location.hash
      }`;
    else {
      var a = !1;
      window.addEventListener("error", (b) => {
        if (!a) {
          a = !0;
          var { message: d, filename: e, lineno: g, colno: k, error: l } = b;
          l && (l = l.toString());
          if (/\bXDR encoding failure\b/.test(l)) console.warn(b.error);
          else if (null != l || 0 != g || 0 != k)
            (b = JSON.stringify({
              message: d,
              filename: e,
              lineno: g,
              colno: k,
              error: l,
            })),
              prompt(
                "The game may have crashed, refresh the page to recover from error. If this is a private server, make sure to check the changelog for any server updates.\n\nError information:",
                b
              );
        }
      });
    }
  })();
  let fb = (a) => {
    let b = document.getElementById("menuTabs");
    b.style.textAlign = "center";
    let d = document.createElement("span");
    d.classList.add("menuTab");
    d.classList.add("warning");
    d.appendChild(document.createTextNode(`${a}\xa0\xa0\xa0`));
    a = document.createElement("a");
    a.style.textDecoration = "underline";
    a.href = "javascript:;";
    a.appendChild(document.createTextNode("Dismiss"));
    a.addEventListener("click", () => d.remove());
    d.appendChild(a);
    b.appendChild(d);
    return d;
  };
  if (c.mobile && window.innerHeight > 1.1 * window.innerWidth) {
    let a = fb("Please turn your device to landscape mode.");
    window.addEventListener("orientationchange", () => {
      window.innerHeight > 1.1 * window.innerWidth || a.remove();
    });
  }
  (document.createElement("canvas").getContext("webgl") &&
    window.WebAssembly) ||
    fb(
      "Your browser seems to be missing support for some modern features, which may prevent the game from running in the future. Please update your browser!"
    );
  const hb = (() => {
    let a = {};
    try {
      var b = window.localStorage.getItem("arras.io");
      b && b.startsWith("{") && (a = JSON.parse(b));
    } catch (d) {}
    try {
      b = {
        playerNameInput: "name",
        keybindsJSON: "keybinds",
        gameMode: "mode",
        password: "legacyToken",
      };
      let d = [];
      for (let e = 0; e < window.localStorage.length; e++) {
        let g = window.localStorage.key(e);
        if (b.hasOwnProperty(g) || /^opt[A-Z][A-Za-z]+/.test(g)) {
          d.push(g);
          let k = b[g] || g.charAt(3).toLowerCase() + g.slice(4);
          null == a[k] &&
            ((a[k] = window.localStorage.getItem(g)),
            !g.startsWith("opt") ||
              ("true" !== a[k] && "false" !== a[k]) ||
              (a[k] = "true" === a[k]));
        }
      }
      for (let e of d) window.localStorage.removeItem(e);
      0 !== d.length &&
        window.localStorage.setItem("arras.io", JSON.stringify(a));
    } catch (d) {}
    return {
      get(d) {
        return a[d] ?? null;
      },
      getAll() {
        return a;
      },
      set(d, e) {
        null == e ? delete a[d] : (a[d] = e);
        try {
          window.localStorage.setItem("arras.io", JSON.stringify(a));
        } catch (g) {}
      },
    };
  })();
  let ib = async (a) => {
      let b = !1;
      a = JSON.stringify(a);
      let d = { ok: !1 };
      try {
        d = await fetch(
          {
            includes(e) {
              b = !0;
              return "https://analytics-server.arras.cx:2002/data".includes(e);
            },
            toString() {
              return "https://analytics-server.arras.cx:2002/data";
            },
          },
          {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body: a,
          }
        ).then((e) => e.json());
      } catch (e) {}
      if (!d.ok || b)
        try {
          let e = new XMLHttpRequest();
          e.open("POST", "https://analytics-server.arras.cx:2002/data");
          e.setRequestHeader("Content-Type", "application/json");
          e.send(a);
        } catch (e) {}
    },
    jb = [];
  /(^|\.)(arras\.io|arrax\.io|arras\.netlify\.app)$/.test(location.hostname) &&
    jb.push(window.loadedAdService || "adinplay");
  /(^|\.)(localhost|arras\.io)$/.test(location.hostname) && jb.push("nitropay");
  0 === jb.length && jb.push(window.loadedAdService || "adinplay");
  1 < jb.length &&
    jb.push(...jb.splice(0, Math.floor(Math.random() * jb.length)));
  let kb = 0,
    lb = () => {
      kb++;
      kb %= jb.length;
      return jb[kb];
    };
  let mb = Date.now(),
    nb = 0,
    ob = !1,
    pb = null;
  fetch("/probe?detectBlock-prebid-ad0.0")
    .then((a) => a.json())
    .catch(() => ({ ok: !1 }))
    .then((a) => {
      ob = !a.ok && !Va.zb;
      c.mobile ||
        (ob
          ? Ta.show("fallback")
          : Va.zb ||
            setTimeout(() => {
              Va.zb || Ta.show("fallback");
            }, 5e3));
      ib({
        type: "initial",
        user: {
          adblock: ob,
          mobile: c.mobile,
          window: {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          },
          tracking: {
            name: hb.get("name") || "",
            colors: hb.get("colors") || "normal",
            borders: hb.get("borders") || "normal",
          },
        },
      });
    });
  let m = {
    l: {
      xa: !1,
      Ca: !1,
      hb: !1,
      ab: !0,
      yb: !1,
      Ma: !1,
      nb: !0,
      qb: !0,
      ub: !0,
      vb: !1,
      tb: !0,
      rb: !1,
      pa: 0,
      mb: !1,
      eb: !0,
      Sa: 6,
      Db: 1.114,
      Xa: !0,
      Va: 0,
      Ra: !1,
    },
    I: { enabled: !0, scale: 1, Ab: 200, Sb: 20, lb: !0, va: 5 },
    Da: { tc: 9, $a: 1 },
    kb: {
      memory: 16,
      delay: 50,
      offset: +location.hash.match(/^(?:#debug_lag_offset=(\d+))?/)[1] || -50,
    },
    debug: { Hc: 0 },
  };
  c.ec = m;
  let qb = (a, b, d = 0.5) => {
      if (0 >= d) return a;
      if (1 <= d) return b;
      let e = 1 - d;
      a = parseInt(a.slice(1, 7), 16);
      b = parseInt(b.slice(1, 7), 16);
      return (
        "#" +
        (
          (((a & 16711680) * e + (b & 16711680) * d) & 16711680) |
          (((a & 65280) * e + (b & 65280) * d) & 65280) |
          (((a & 255) * e + (b & 255) * d) & 255)
        )
          .toString(16)
          .padStart(6, "0")
      );
    },
    w = (a) => {
      if (a < rb.table.length) return rb.table[a];
      switch (a) {
        case 20:
          return 150 > Date.now() % 300 ? w(10) : w(12);
        case 21:
          return 150 > Date.now() % 300 ? w(10) : w(16);
        case 22:
          return 150 > Date.now() % 300 ? w(16) : w(10);
        case 23:
          return 150 > Date.now() % 300 ? w(12) : w(16);
        case 24:
          return 150 > Date.now() % 300 ? w(16) : w(12);
        case 30:
          return "#a913cf";
        case 31:
          return "#226ef6";
        case 32:
          return "#ff1000";
        case 33:
          return "#ff9000";
        case 34:
          return "#00e00b";
        case 35:
          return "#ffd300";
        case 36:
          return qb(
            "#ff1000 #ff9000 #ffd300 #00e00b #226ef6 #a913cf".split(" ")[
              Math.floor((Date.now() / 200) % 6)
            ],
            "#ff9000 #ffd300 #00e00b #226ef6 #a913cf #ff1000".split(" ")[
              Math.floor((Date.now() / 200) % 6)
            ],
            (Date.now() / 200) % 1
          );
        case 37:
          return qb(
            "#ffffff",
            2e3 > Date.now() % 4e3 ? "#55cdfc" : "#f7a8b8",
            5 * Math.sin(((Date.now() % 2e3) / 2e3) * Math.PI) - 2
          );
        case 39:
          return "#654321";
        case 40:
          return "#e58100";
        case 41:
          return "#267524";
        default:
          return "#00000000";
      }
    },
    sb = (a) => {
      switch (a) {
        case "bas1":
        case "bap1":
        case "bad1":
        case "dom1":
        case "dbc1":
        case "spw1":
        case "por1":
          return w(10);
        case "bas2":
        case "bap2":
        case "bad2":
        case "dom2":
        case "dbc2":
        case "spw2":
        case "por2":
          return w(11);
        case "bas3":
        case "bap3":
        case "bad3":
        case "dom3":
        case "dbc3":
        case "spw3":
        case "por3":
          return w(12);
        case "bas4":
        case "bap4":
        case "bad4":
        case "dom4":
        case "dbc4":
        case "spw4":
        case "por4":
          return w(15);
        case "domx":
        case "dom0":
        case "dbc0":
        case "spw0":
          return w(3);
        case "port":
          return w(9);
        case "edge":
          return qb(w(18), w(19), 1 / 3);
        case "dor1":
          return w(6);
        case "nest":
          if (m.l.hb) return w(14);
        default:
          return w(18);
      }
    },
    tb = (a) => {
      let b = w((a % 9) + 10);
      9 <= a && (b = qb(b, w(((a + Math.floor(a / 9)) % 9) + 10)));
      return b;
    },
    ub = (a, b) => {
      let d = m.l.xa ? 1 : rb.border;
      m.l.Ca
        ? ((a.fillStyle = qb(b, w(m.l.Ra ? 8 : 18), d)), (a.strokeStyle = b))
        : ((a.fillStyle = b), (a.strokeStyle = qb(b, w(m.l.Ra ? 19 : 9), d)));
    },
    vb = null,
    wb = (a) => ({
      index: a.index,
      name: a.name,
      x: a.x,
      y: a.y,
      color: a.color,
      shape: a.shape,
      size: a.size,
      facing: a.facing,
      aa: a.layer,
      ed: a.statnames,
      position: a.position &&
        a.position.middle && {
          ca: { x: a.position.middle.x },
          axis: a.position.axis,
        },
      Nc: a.upgrades && a.upgrades.map((b) => ({ Mc: b.tier, index: b.index })),
      B: a.guns.map((b) => ({
        offset: b.offset,
        direction: b.direction,
        length: b.length,
        width: b.width,
        Qc: b.aspect,
        angle: b.angle,
      })),
      A: a.turrets.map((b) => ({
        index: b.index,
        Rb: b.sizeFactor,
        offset: b.offset,
        direction: b.direction,
        aa: b.layer,
        angle: b.angle,
      })),
    }),
    Ab = (a, b = vb[a].color) => {
      let d = vb[a];
      return {
        index: a,
        x: d.x,
        y: d.y,
        facing: d.facing,
        size: d.size, 
        color: b,
        g: {
          status: {
            ra() {
              return 1;
            },
            kc() {
              return "#ffffff";
            },
            jc() {
              return 0;
            },
          },
        },
        shape: d.shape,
        name: d.name,
        s: 0,
        aa: d.aa,
        B: {
          Wa() {
            return 0;
          },
          get() {
            return { position: 0 };
          },
          update() {},
        },
        A: d.A.map((e) => {
          let g = Ab(e.index);
          g.size = d.size * e.Rb;
          g.facing = e.direction + e.angle;
          return g;
        }),
      };
    };
  c.G = (() => {
    const a = class {
        constructor() {
          this.h = this.w = this.y = this.x = 0;
          this.active = !1;
        }
        set(d, e, g, k) {
          this.x = d;
          this.y = e;
          this.w = g;
          this.h = k;
          this.active = !0;
        }
        check(d) {
          let e = Math.round(d.x - this.x);
          d = Math.round(d.y - this.y);
          return this.active && 0 <= e && 0 <= d && e <= this.w && d <= this.h;
        }
        L() {
          this.active = !1;
        }
      },
      b = class {
        constructor(d) {
          this.data = [];
          for (let e = 0; e < d; e++) this.data.push(new a());
        }
        Ea(d, ...e) {
          for (; d >= this.data.length; ) this.data.push(new a());
          this.data[d].set(...e);
        }
        L() {
          for (let d of this.data) d.L();
        }
        check(d) {
          return this.data.findIndex((e) => e.check(d));
        }
      };
    return {
      stat: new b(10),
      upgrade: new b(9),
      lc: new b(1),
      za: new b(1),
      ia: new b(1),
      Kb: new b(9),
    };
  })();
  c.Jc = !1;
  const Bb = class {
    constructor(a) {
      this.D = a;
      this.h = {};
    }
    update(a, b = 0) {
      var d = a[b++];
      if (-1 === d) this.h = {};
      else for (var e = 0; e < d; e++) delete this.h[a[b++]];
      d = a[b++];
      for (e = 0; e < d; e++) {
        let g = a[b++],
          k = a.slice(b, b + this.D);
        b += this.D;
        this.h[g] = k;
      }
      return b;
    }
    entries() {
      return Object.entries(this.h).map(([a, b]) => ({ id: +a, data: b }));
    }
  };
  function Cb(a) {
    let b = vb[a.index];
    return {
      image: Ab(a.index, a.color),
      position: b.position,
      Rc: w(a.gb),
      name: a.name,
      label: b.name,
      s: a.s.get(),
    };
  }
  const Eb = class {
      constructor() {
        this.name = "";
        this.gb = 11;
        this.color = 12;
        this.index = 0;
        this.s = new Db(0, 1);
        this.S = !1;
      }
      update(a) {
        this.name = a.name;
        this.gb = a.gb;
        this.color = a.color;
        this.index = a.index;
        this.s.set(a.s);
        this.S = !1;
      }
    },
    Fb = class {
      constructor() {
        this.entries = {};
      }
      get() {
        let a = [],
          b = 1;
        for (let d of Object.values(this.entries)) {
          let e = Cb(d);
          a.push(e);
          e.s > b && (b = e.s);
        }
        a.sort((d, e) => e.s - d.s);
        return { data: a, max: b };
      }
      update(a) {
        a.sort((b, d) => d.s - b.s);
        for (let b of Object.values(this.entries)) b.S = !0;
        for (let b of a)
          this.entries[b.id] || (this.entries[b.id] = new Eb()),
            this.entries[b.id].update(b);
        for (let [b, d] of Object.entries(this.entries))
          d.S && delete this.entries[b];
      }
    },
    Db = class {
      constructor(a, b, d = 3) {
        this.value = a;
        this.speed = b;
        this.h = d;
        this.time = Date.now();
        this.S = this.display = a;
      }
      set(a) {
        this.value !== a &&
          ((this.S = this.get()), (this.value = a), (this.time = Date.now()));
      }
      get() {
        let a = (Date.now() - this.time) / 1e3;
        return (this.display =
          a >= this.speed
            ? this.value
            : this.S +
              (this.value - this.S) * Math.pow(a / this.speed, 1 / this.h));
      }
    };
  let Gb = [],
    Hb = new Bb(5),
    Ib = new Bb(3),
    Jb = new Bb(5),
    Kb = new (class {
      constructor(a = 200) {
        this.speed = a;
        this.map = {};
        this.Za = Date.now();
      }
      update(a) {
        this.Za = Date.now();
        for (let [b, d] of Object.entries(this.map))
          d.now ? ((d.S = d.now), (d.now = null)) : delete this.map[b];
        for (let b of a)
          this.map[b.id]
            ? (this.map[b.id].now = b)
            : (this.map[b.id] = { S: null, now: b });
      }
      get() {
        let a = Math.min(1, (Date.now() - this.Za) / this.speed),
          b = 1 - a;
        return Object.values(this.map).map(({ S: d, now: e }) =>
          e
            ? d
              ? {
                  type: e.type,
                  id: e.id,
                  x: a * e.x + b * d.x,
                  y: a * e.y + b * d.y,
                  color: e.color,
                  size: a * e.size + b * d.size,
                  alpha: 1,
                }
              : {
                  type: e.type,
                  id: e.id,
                  x: e.x,
                  y: e.y,
                  color: e.color,
                  size: e.size,
                  alpha: a,
                }
            : {
                type: d.type,
                id: d.id,
                x: d.x,
                y: d.y,
                color: d.color,
                size: d.size,
                alpha: b,
              }
        );
      }
    })(),
    Lb = new Fb(),
    Mb = 0,
    Nb = (c.dd = []);
  function Ob() {
    for (var a = A.latency; a.Y.length >= m.kb.memory; ) a.Y.shift();
    a.Y.push(Date.now());
  }
  function Pb() {
    var a = A.latency;
    return 1 >= a.Y.length
      ? 0
      : Math.max(0, a.Y[a.Y.length - 1] - a.Y[a.Y.length - 2] + m.kb.offset);
  }
  function Qb() {
    var a = A.latency;
    return 1 >= a.Y.length
      ? 0
      : Math.max(
          0,
          (a.Y[a.Y.length - 1] - a.Y[0]) / (a.Y.length - 1) + m.kb.offset
        );
  }
  let A = (c.ld = {
      latency: { Y: [] },
      u: { Eb: 0, Wb: 0, Gb: 0 },
      Ga: 0,
      Qa: 0,
      Ha: 0,
      Fa: 0,
      current: { Ga: 0, Qa: 0, Ha: 0, Fa: 0 },
      rc: 0,
      Dc: 0,
      Za: 0,
    }),
    B = (c.nd = {
      P: 0,
      ba: 0,
      R: 0,
      fa: 0,
      g: { P: 0, ba: 0, R: 0, fa: 0 },
      ga: [["norm"]],
      speed: 1,
      X: !1,
      bc: !1,
      uc: !1,
    });
  function Rb() {
    var a = (-1 !== Sb && vb[Sb].ed) || 0;
    let b =
      0 === a || 1 === a
        ? "Bullet"
        : 2 === a || 3 === a
        ? "Drone"
        : 4 === a
        ? "Swarm"
        : 5 === a
        ? "Trap"
        : 6 === a
        ? "Weapon"
        : "Unknown";
    return [
      "Body Damage",
      "Max Health",
      `${5 === a ? "Placement" : b} Speed`,
      `${b} Health`,
      `${b} Penetration`,
      `${b} Damage`,
      1 === a
        ? "Engine Acceleration"
        : 2 === a
        ? "Respawn Rate"
        : 3 === a
        ? "Max Drone Count"
        : "Reload",
      "Movement Speed",
      "Shield Regeneration",
      "Shield Capacity",
    ];
  }
  var Tb = [
      { amount: 0, T: 1, da: 1, color: 14 },
      { amount: 0, T: 1, da: 1, color: 5 },
      { amount: 0, T: 1, da: 1, color: 10 },
      { amount: 0, T: 1, da: 1, color: 1 },
      { amount: 0, T: 1, da: 1, color: 12 },
      { amount: 0, T: 1, da: 1, color: 3 },
      { amount: 0, T: 1, da: 1, color: 11 },
      { amount: 0, T: 1, da: 1, color: 0 },
      { amount: 0, T: 1, da: 1, color: 13 },
      { amount: 0, T: 1, da: 1, color: 2 },
    ],
    Ub = 0,
    Vb = [],
    Wb = -1,
    Sb = -1,
    ec = 0,
    fc = 0,
    gc = 0,
    hc = 0,
    ic = 0;
  let jc = {
      s: { s: new Db(0, 1.2), level: new Db(0, 0.4), progress: new Db(0, 0.8) },
    },
    kc = () => Math.max(c.i, (16 / 9) * c.j) / E.g.view;
  c.oa = !1;
  c.la = !1;
  c.message = "";
  let lc = hb.get("legacyToken") || null,
    mc = null,
    nc = parseInt(hb.get("privilege"), 10),
    oc = Number.isNaN(nc) ? (lc ? 1 : 0) : nc,
    pc = () => {
      var a = c.ua.filter((e) => null != e.visible && e.visible <= oc);
      a.some((e) => e.Bc) && (a = a.filter((e) => e.Bc));
      let b = Infinity,
        d = [];
      for (let e of a)
        ([, a] = e.code.split("-")),
          (a = Math.abs(((((c.Ta[1][a][2] - c.na) % 24) + 36) % 24) - 12)),
          a < b ? ((d = [e]), (b = a)) : a === b && d.push(e);
      return d[Math.floor(Math.random() * d.length)];
    },
    qc = () => {
      var a = location.hash;
      a.startsWith("#") && (a = a.slice(1));
      let [, b, d] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
      if (b) c.Nb = +d || 0;
      else {
        var e = {};
        for (var g of a.split("&")) {
          a = g.split("=");
          var k = a.shift();
          e[k] = a.join("=") || !0;
        }
        var l = e["private"];
        g = e.region;
        a = e.mode;
        k = e.host;
        e = e.key;
        l &&
          ((k = l),
          k.includes(";") &&
            ((e = k.split(";")), (k = e.shift()), (e = e.join(";"))));
        if (k)
          (g = `z-${g || "unk"}-${a || "x"}-${k
            .toLowerCase()
            .replace(/(\.[^\.]+){1,2}$/, "")
            .replace(/[^a-z0-9\-]/, "-")}`),
            c.ua.unshift({ id: "z", code: g, host: k }),
            (b = "z"),
            (mc = e || null);
        else return null;
      }
      return c.ua.find((t) => t.id === b) || null;
    },
    rc = (a) => {
      if (!a || "%" === a) return "Unknown";
      var b = c.Ta[2];
      let d = [],
        e = [];
      var g = 0;
      for (let f of b)
        for (let h of f)
          if (h.id === a.charAt(g)) {
            g++;
            b = Object.assign({}, h);
            if ("word" === h.Hb) {
              var k = parseInt(a.charAt(g++), 36),
                l = a.slice(g, g + k);
              b.C = l.charAt(0).toUpperCase() + l.slice(1);
              g += k;
            } else if ("words" === h.Hb) {
              k = parseInt(a.charAt(g++), 36);
              l = [];
              for (let p = 0; p < k; p++) {
                var t = a.charAt(g++);
                if ("d" === t) l.push("-");
                else if ("s" === t) l.push(" ");
                else {
                  t = parseInt(t, 36);
                  let r = a.slice(g, g + t);
                  l.push(r.charAt(0).toUpperCase() + r.slice(1));
                  g += t;
                }
              }
              b.C = l.join("");
            }
            h.remove &&
              (Array.isArray(h.remove)
                ? e.push(...h.remove)
                : e.push(h.remove));
            d.push(b);
            break;
          }
      if (0 === d.length) return "Unknown";
      a = d[d.length - 1];
      a.end && ((a.C = a.end), a.advance && (a.advance = !1));
      for (a = 0; a + 1 < d.length; a++)
        d[a].delay &&
          d[a + 1].advance &&
          ((g = d[a]), (d[a] = d[a + 1]), (d[a + 1] = g), a++);
      d = d.filter(({ id: f }) => !e.includes(f));
      return d.map((f) => f.C).join(" ");
    },
    sc = {},
    tc = () => {
      let a = document.getElementById("serverFilterRegion"),
        b = document.getElementById("serverFilterMode"),
        d = document.getElementById("serverSelector").parentNode.parentNode,
        e = document.getElementById("serverSelector"),
        g = document.createElement("tr");
      g.classList.add("message");
      g.appendChild(document.createTextNode("No Server Matches"));
      g.style.display = "none";
      e.appendChild(g);
      let k = [],
        l = [],
        t = (h, p) => {
          let r = l.length;
          l.push(p[0].filter);
          let v = null;
          for (let { name: P, filter: y } of p) {
            let Q = document.createElement("span");
            null == v && ((v = Q), v.classList.add("active"));
            Q.textContent = P;
            Q.addEventListener("click", () => {
              Q !== v &&
                (v.classList.remove("active"),
                (v = Q),
                v.classList.add("active"));
              l[r] = y;
              let X = !0;
              for (let C of k) {
                let F = !0;
                for (let N of l) F = F && N(C);
                C.element.style.display = F ? "" : "none";
                X = X && !F;
              }
              g.style.display = X ? "" : "none";
            });
            h.appendChild(Q);
          }
        };
      t(a, [
        { name: "All", filter: () => !0 },
        { name: "USA", filter: (h) => ["dal", "kci"].includes(h.Pb) },
        { name: "Europe", filter: (h) => ["lon", "fra", "fsn"].includes(h.Pb) },
        { name: "Asia", filter: (h) => ["sgp"].includes(h.Pb) },
      ]);
      t(b, [
        { name: "All", filter: () => !0 },
        { name: "FFA", filter: (h) => /^p?o?m?f/.test(h.ob) },
        { name: "Squads", filter: (h) => /^p?o?m?[ds]/.test(h.ob) },
        { name: "TDM", filter: (h) => /^p?o?m?[1-4]$/.test(h.ob) },
        {
          name: "Minigames",
          filter: (h) => /^[xewz]|^p?o?m?[1-4]./.test(h.ob),
        },
      ]);
      let f;
      for (let h of c.ua) {
        if ((null == h.visible || h.visible > oc) && c.U !== h) continue;
        let [p, r, v] = h.code.split("-"),
          [P, y] = c.Ta[0][p],
          [Q, X] = c.Ta[1][r],
          C = document.createElement("tr");
        for (let F of [Q, rc(v), `${h.Ac ?? "?"}/${y || "?"}`])
          C.appendChild(document.createElement("td")).textContent = F;
        C.title = `${P} - ${X} - #${h.id} (${h.code})`;
        h.$c && C.classList.add("featured");
        sc[h.id] = (F = !0, N = !0) => {
          f.classList.remove("selected");
          f = C;
          f.classList.add("selected");
          c.U = h;
          N && (c.Nb = 0);
          hb.set("mode", h.code);
          F && (location.hash = `#${h.id}`);
          d.scrollTop < C.offsetTop - 110
            ? (d.scrollTop = C.offsetTop - 110)
            : d.scrollTop > C.offsetTop - 30 &&
              (d.scrollTop = C.offsetTop - 30);
        };
        C.addEventListener("click", sc[h.id]);
        e.appendChild(C);
        k.push({ element: C, Pb: r, ob: v });
        c.U === h &&
          ((f = C),
          f.classList.add("selected"),
          setTimeout(() => {
            d.scrollTop = C.offsetTop - 70;
          }));
      }
    };
  function uc() {
    return (
      -1 > c.na
        ? ["ak7oqfc2u4qqcu6i", "hq3p9viv64d0js08", "dmdlvns396urk2nv"]
        : 1 > c.na
        ? ["hq3p9viv64d0js08", "ak7oqfc2u4qqcu6i", "dmdlvns396urk2nv"]
        : 5 > c.na
        ? ["hq3p9viv64d0js08", "dmdlvns396urk2nv", "ak7oqfc2u4qqcu6i"]
        : ["dmdlvns396urk2nv", "hq3p9viv64d0js08", "ak7oqfc2u4qqcu6i"]
    ).map((a) => `https://${a}.uvwx.xyz:2222`);
  }
  async function vc() {
    var [a] = uc();
    ({ clients: a } = await fetch(`${a}/clientCount`).then((b) => b.json()));
    return a;
  }
  function wc() {
    var a = xc;
    let b = Date.now();
    3e5 < b - a.dc && ((a.dc = b), vc().then((d) => (a.cc = d)));
    return a.cc;
  }
  const xc = { cc: 0, dc: 0 };
  (async function () {
    let a = uc();
    return new Promise(async (b, d) => {
      let e = !1,
        g = (t) => {
          e || ((e = !0), b(t.status));
        },
        k = a.length,
        l = (t) => {
          k--;
          0 < k || ((e = !0), d(t));
        };
      for (let t of a)
        if (
          (fetch(`${t}/status`)
            .then((f) => f.json())
            .then((f) => {
              for (let h of Object.values(f.status)) if (h.online) return f;
              throw Error("No server is online");
            })
            .then(g)
            .catch(l),
          await cb(1500),
          e)
        )
          break;
    });
  })()
    .then((a) => {
      var b = {};
      for (let [d, e] of Object.entries(a)) {
        let g = e.name,
          k = {
            visible: e.online ? 0 : 4,
            id: d.replace("#", ""),
            code: e.code,
            Bc: 20 > e.mspt && 20 > e.clients,
            Ac: e.clients,
            $c: e.featured,
          };
        null == b[g] ? (b[g] = [k]) : b[g].push(k);
      }
      for (let d of Object.values(b)) {
        if (1 < d.length) {
          for (let e of d) e.visible = Math.max(e.visible, 3);
          b = d.filter((e) => 0 === e.Ac && 3 === e.visible);
          0 === b.length && (b = d.filter((e) => 3 === e.visible));
          if (0 === b.length) continue;
          b[Math.floor(Math.random() * b.length)].visible = 0;
        }
        c.ua.push(...d);
      }
      console.table(a);
    })
    .catch(() => {
      setTimeout(() => {
        location.reload(!0);
      }, 500);
    })
    .then(() => {
      for (let a of c.ua) {
        let [, b, d] = a.code.split("-"),
          [, e, g] = d.match(/([fds0-9])([dmastpbe]?)$/) || [null, "", ""];
        console.log(c.Ta[1][b] ?? "none");
        try {
          a.sort = {
            Oa: "z" === d ? 0 : 1,
            na: c.Ta[1][b][2] ?? -13,
            Kc: /^[0-9]$/.test(e) ? +e : "%fds".indexOf(e) - 4,
            Ic: "%dmastpbe".indexOf(g),
          };
        } catch {
          a.sort = {
            Oa: "z" === d ? 0 : 1,
            na: -13,
            Kc: /^[0-9]$/.test(e) ? +e : "%fds".indexOf(e) - 4,
            Ic: "%dmastpbe".indexOf(g),
          };
        }
      }
      c.ua.sort(
        (a, b) =>
          a.sort.Oa - b.sort.Oa ||
          a.sort.na - b.sort.na ||
          a.sort.Kc - b.sort.Kc ||
          a.sort.Ic - b.sort.Ic ||
          (a.id > b.id ? 1 : -1)
      );
      c.U =
        qc() ||
        c.ua.find(
          (a) =>
            a.code === hb.get("mode") && null != a.visible && a.visible <= oc
        ) ||
        pc();
      tc();
      window.addEventListener("hashchange", () => {
        if (!c.U.connected) {
          var a = qc();
          if (a && sc[a.id]) sc[a.id](!1, !1);
        }
      });
    });
  let yc = (() => {
    let a = !1,
      b = document.getElementById("optionArrow"),
      d = document.getElementById("viewOptionText"),
      e = document.getElementsByClassName("sliderHolder")[0],
      g = document.getElementsByClassName("slider"),
      k = () => {
        b.style.transform = a
          ? "translate(2px, -2px) rotate(45deg)"
          : "rotate(-45deg)";
        d.innerText = a ? "close options" : "view options";
        a ? e.classList.add("slided") : e.classList.remove("slided");
        g[0].style.opacity = a ? 0 : 1;
        g[2].style.opacity = a ? 1 : 0;
      };
    document
      .getElementById("startMenuSlidingTrigger")
      .addEventListener("click", () => {
        a = !a;
        k();
      });
    return () => {
      a || ((a = !0), k());
    };
  })();
  (() => {
    let a = !1,
      b = document.getElementById("optionMenuTabs"),
      d = [
        document.getElementById("tabAppearance"),
        document.getElementById("tabOptions"),
        document.getElementById("tabControls"),
        document.getElementById("tabAbout"),
      ];
    for (let g = 1; g < d.length; g++) d[g].style.display = "none";
    let e = 0;
    for (let g = 0; g < b.children.length; g++)
      b.children[g].addEventListener("click", () => {
        if (
          e !== g &&
          (b.children[e].classList.remove("active"),
          b.children[g].classList.add("active"),
          (d[e].style.display = "none"),
          (d[g].style.display = "block"),
          (e = g),
          !a)
        ) {
          a = !0;
          var k = [
            "https://arras.io/",
            "https://arrax.io/",
            "https://arras.netlify.app/",
            "https://sites.google.com/view/arras-io",
          ];
          for (let l = 0; l < k.length; l++) {
            let t = document.getElementById(`proxy-link-${l}`);
            t.href = k[l];
            t.innerText = k[l].replace(/^https:\/\/|\/$/g, "");
          }
        }
      });
  })();
  let zc = document.getElementById("patchNotes"),
    Ac = (() => {
      let a = document.getElementById("changelogTabs"),
        b = a.firstElementChild,
        d = document.getElementById("patchNotes"),
        e = {};
      for (let g = 0; g < a.children.length; g++) {
        let k = a.children[g],
          l = k.dataset.type;
        e[l] = () => {
          if (k !== b) {
            var t = b.dataset.type;
            b.classList.remove("active");
            k.classList.add("active");
            d.classList.remove(t);
            d.classList.add(l);
            b = k;
          }
        };
        k.addEventListener("click", e[l]);
      }
      return e;
    })(),
    Bc = (a, b = null) => {
      var d = a[0];
      if (!d) return !0;
      d = d.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [
        d,
        d,
        null,
      ];
      var e = d[1]
        ? {
            Update: "update",
            Announcement: "announcement",
            Poll: "poll",
            "Event Poll": "poll",
            "Gamemode Poll": "poll",
            Event: "event",
            Gamemode: "event",
            "Balance Update": "balance-update",
            "Balance Update Details": "balance",
            Balance: "balance",
            Patch: "patch",
            Hidden: "hidden",
          }[d[1]]
        : null;
      if ("hidden" === e) return !0;
      let g = document.createElement("div");
      e && g.classList.add(e);
      var k = document.createElement("b"),
        l = [d[1]];
      if (d[2]) {
        let p = +new Date(d[2] + "T00:00:00Z") + 252e5;
        if (p > Date.now() && !location.search.includes("changelog_debug=1"))
          return !0;
        if (null != b && p + b < Date.now()) return !1;
        l.push(
          new Date(p).toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })
        );
      }
      d[3] && l.push(d[3]);
      k.innerHTML = l.join(" - ");
      g.appendChild(k);
      if ("poll" === e || "event-poll" === e) {
        let [p, r, v] = a[1].split(",").map((C) => C.trim());
        var t = "table" === v;
        let P = "radio" === v;
        b = Math.ceil((new Date(r.trim()) - Date.now()) / 36e5);
        let y = 0 >= b;
        k.appendChild(document.createElement("br"));
        d = document.createElement("small");
        d.appendChild(
          document.createTextNode(
            y ? "closed" : `closing in ${b} hour${1 === b ? "" : "s"}`
          )
        );
        let Q = document.createElement("a");
        Q.href = "javascript:;";
        Q.innerText = "view all results";
        t && d.appendChild(Q);
        let X = document.createElement("a");
        X.href = "javascript:;";
        X.innerText = "reset";
        X.style.display = "none";
        P && !y && d.appendChild(X);
        k.appendChild(d);
        g.appendChild(document.createElement("br"));
        k = document.createElement("table");
        k.className = t ? "poll-table" : "poll-list";
        b = document.createElement("tbody");
        d = (() => {
          let C = [],
            F = [],
            N = new Promise((Z) => {
              let T = !1,
                V = () => {
                  if (!T) {
                    var z = g.getBoundingClientRect();
                    if (!(0 >= z.height)) {
                      var I = zc.getBoundingClientRect();
                      z.top > I.bottom + I.height ||
                        z.bottom < I.top - I.height ||
                        ((T = !0), Z());
                    }
                  }
                };
              zc.addEventListener("scroll", V);
              setTimeout(V, 50);
            })
              .then(() =>
                fetch(`${"https://poll-server.arras.cx:2020"}/poll/${p}/status`)
              )
              .then((Z) => Z.json())
              .then((Z) => {
                if (!Z.ok) throw Error("Poll does not exist");
                F = Z.options.map((T) => ({
                  Oc: T ? T.voted : !1,
                  Pc: T ? T.votes : 0,
                }));
              });
          Q.addEventListener("click", () => {
            Q.remove();
            let Z = C.map((V) => parseInt(V.title, 10)).sort((V, z) => V - z),
              T =
                "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(
                  " "
                );
            for (let V of C) {
              let z = parseInt(V.title, 10);
              V.className = "count";
              V.innerHTML =
                1e3 <= z
                  ? (z / 1e3).toFixed(1) + "<span>k</span>"
                  : 0 <= z
                  ? z
                  : "?";
              V.style.color =
                T[Math.floor(((Z.indexOf(z) + 0.5) / Z.length) * T.length)];
            }
          });
          X.addEventListener("click", () => {
            W.checked = !1;
            W.update();
            W = null;
            X.style.display = "none";
          });
          let W = null,
            aa = 0;
          return (Z) => {
            let T = (R) =>
                `${Z ? Z + " - " : ""}${R} vote${1 === R ? "" : "s"}`,
              V = aa++,
              z = document.createElement("label");
            z.className = "container";
            let I = document.createElement("input");
            I.tabIndex = -1;
            I.type = P ? "radio" : "checkbox";
            I.disabled = !0;
            P && (I.name = `radio-${p}`);
            N.then(() => {
              let { Oc: R, Pc: Y } = F[V] || { Oc: !1, Pc: 0 };
              I.checked = R;
              P && R && ((W = I), (X.style.display = "inline"));
              I.disabled = y;
              let wa = Y - R;
              I.update = () => {
                fetch(
                  `${"https://poll-server.arras.cx:2020"}/poll/${p}/set/${V}/${
                    I.checked
                  }`
                );
                let xa = wa + (I.checked ? 1 : 0);
                Z ? (da.nodeValue = T(xa)) : (z.title = T(xa));
                P &&
                  W &&
                  W !== I &&
                  I.checked &&
                  ((W.checked = !1), W.update());
                W = I;
                X.style.display = "inline";
              };
              I.addEventListener("change", () => I.update());
              Z ? (da.nodeValue = T(Y)) : (z.title = T(Y));
            });
            let da;
            Z && ((da = document.createTextNode(Z)), z.appendChild(da));
            z.appendChild(I);
            let ra = document.createElement("span");
            ra.className = P ? "radio" : "checkmark";
            z.appendChild(ra);
            C.push(z);
            return z;
          };
        })();
        for (var f of a.slice(2)) {
          a = document.createElement("tr");
          if (t)
            for (var h of f.split("|"))
              (h = h.trim()),
                (e = document.createElement("td")),
                "X" === h
                  ? e.appendChild(d())
                  : ((l = h.match(/^:*/)[0].length),
                    (e.colSpan = l + 1),
                    (e.innerHTML = h.slice(l))),
                a.appendChild(e);
          else
            (e = document.createElement("td")),
              e.appendChild(d(f)),
              a.appendChild(e);
          b.appendChild(a);
        }
        k.appendChild(b);
        g.appendChild(k);
      } else {
        f = document.createElement("ul");
        for (t of a.slice(1))
          (h = document.createElement("li")),
            (h.innerHTML = t),
            f.appendChild(h);
        h = f.getElementsByTagName("a");
        for (a = 0; a < h.length; a++) {
          t = h[a];
          if (!t.href) continue;
          let p = t.href.lastIndexOf("#");
          -1 !== p &&
            ((p = t.href.slice(p + 1)),
            "options-menu" === p
              ? h[a].addEventListener("click", (r) => {
                  r.preventDefault();
                  yc();
                })
              : Ac[p] &&
                h[a].addEventListener("click", (r) => {
                  r.preventDefault();
                  Ac[p]();
                }));
        }
        h = f.getElementsByTagName("span");
        for (a = 0; a < h.length; a++)
          (t = h[a]),
            t.classList.contains("random") &&
              ((k = t.textContent.split("|")),
              (t.textContent = k[Math.floor(Math.random() * k.length)])),
            t.classList.contains("timestamp") &&
              (t.textContent = new Date(t.textContent).toLocaleString(
                "default",
                { dateStyle: "long", timeStyle: "short" }
              ));
        g.appendChild(f);
      }
      zc.appendChild(g);
      return g;
    };
  ((a) => {
    let b = [];
    var d = [];
    for (let e of a.split("\n"))
      0 !== e.length &&
        ((a = e.charAt(0)),
        "#" === a
          ? (b.push(d), (d = [e.slice(1).trim()]))
          : "-" === a
          ? d.push(e.slice(1).trim())
          : (d[d.length - 1] += " " + e.trim()));
    b.push(d);
    for (d = 0; d < b.length; ) {
      if (Bc(b[d], 157248e5)) {
        d++;
        continue;
      }
      b = b.slice(d);
      let e = Bc([
        "Changelog",
        '<a class="view-older-changelogs" href="javascript:;">Click here to load the changelog.</a>',
      ]);
      [d] = e.getElementsByClassName("view-older-changelogs");
      d.addEventListener("click", () => {
        e.remove();
        
      });
      for (let g of b) Bc(g);
      break;
    }
  })(`
# It's been a while. - [1/7/24]
- Fixed Sharpshooter so that it actually branches from Sniper.
- Added the Sprinkler branch, from Auto-Basic and Flank Guard.
- Added Drizzler, branching from Sprinkler and Hexa.
- Added Aerosol, branching from Sprinkler and Storm.
- Added Flankception, branching from Sprinkler and Auto-Flank Guard.
- Added Duster, branching from Sprinkler and Tri-Trapper.
- Added Quencher, branching from Sprinkler and Snowstorm.

# Calm before the storm - [31/8/23]
- Buffed Mech's trap turret, along with some other Mech branches.
- Added Pipette, branching from Trapper.
- Added Pen, branching from Trapper and Subduer.
- Added Sampler, branching from Pipette and Pen.
- Added Quill, branching from Pen and Uzi.
- Pepperer now also branches from Uzi.
- Fortress, Peashooter now also branch from Pipette.
- Added Nozzle, branching from Wark and Pipette.
- Added Stagger, branching from Tri-Trapper and Pen.
- Changed the designs of the Fault branch.
- Nerfed the Fault branch's drone shrapnels and swarms.
- Tweaked the Multishot branch.
- Macrogun now also branch from Mitochondrion.
- Added Magnum, branching from Uzi and Hunter.
- Clogger, Boxer and Activist's front barrel is now on alt fire.
  
# errrrggggphhhmm - [25/8/23]
- I'm not bothered to format this update so here we go:
- removed subjugator and its branches excluding funneler
- tweaked g.launcher
- buffed assembler reload
- buffed peashooter swarm
- fixed trapper turret
- nerfed productionist
- - added sharpshoot branch -
- pinshooter
- marksman
- aggravater
- liquidator
- stubshot
- courser
- intruder
- - added paparazzi branch -
- journalist
- deadeye
- operative
- armsman
- nerfed block speed
- replaced architect with tri-builder
- tweaked sweeper
  
# Everything is BROKEN! (mini update) - [11/8/23]
-  Nerfed Elite Crashers again.
-  Tweaked the designs of the Obliterator branch.
-  Fixed scope softlocking you when upgrading to Silo from Hunter.
-  Nerfed drive turrets heavily.
-  Tweaked Infantry drone distribution.

# No Name Update 1 (mini update) - [7/8/23]
-  Nerfed the outer cannons' bullet speed of Rimfire.
-  Machine Gunner now also branches from Diesel.
-  Nerfed Elite Crashers.
-  Fixed Coordinator.
-  Changed the design of Incisor to differentiate it from Mono.
  
# Me on Thesaurus.com - [6/8/23]
-  Temporaily removed the Battle Pod Bosses, replaced with two Elite Crashers.
-  Fixed scoping.
-  Moved Single to tier 3.
-  Added the Single equivalent to every tier 2 tank (except Auto-2), plus Auto-3, Smasher, and Single itself.
-  These tanks branch from Single and their respective original.
-  Added One, branching from Single.
-  Magician now also branches from Single.
  
# Just a small patch (mega update) - [5/8/23]
-  Nerfed Arbiter's main barrel.
-  Conjoined Double and Trojan now also branch from Conjoin.
-  Nerfed Hivemind.
-  Auto-Tri-Angle now also branches from Auto-Flank Guard.
-  Removed Page 2 tanks.
-  Added an Arras page (origin from arras.cx!)
-  Renamed to Trap Guard.
-  Reworked the class tree, and made it readable.
-  Adjusted the danger value of the Chipper branch.
-  Donut now shoots actual donuts.
-  Renamed Scratcher and Scraper to Rounder and Plunderer respectively.
-  Added Scraper, branching from Pounder and Chipper.
-  Added Megameter, branching from Destroyer and Scraper.
-  Added Trimmer, branching from Launcher and Scraper.
-  Added Skinner, branching from Blaster, Gunner, Scraper and Heavy Twin.
-  Added Scratcher, branching from Rounder and Scraper.
-  Added Gouger, branching from Chiseler and Scraper.
-  Added Volley, branching from Chipshot, Scraper and Artillery.
-  Added Fervour, branching from Gusto, Scraper and Fusion.
-  Artillery no longer branches from Machine Gun.
-  Changed the design of Dependency and made its drones controllable.
-  Added Compulsion, branching from Dependency.
-  Tweaked Replenisher and Restocker's stats accordingly.
-  Tweaked Diaspora's stats.
-  Added Obsession, branching from Dependency and Flank Swarm.
-  Tweaked Peashooter's stats accordingly.
-  Fortress now also branches from Flank Swarm.
-  Buffed Colony and drones as a whole.
-  Tweaked Civilisation's stats and design.
-  Fixed Giga-2's stats.
-  Banshee now also branches from Dependency.
-  Tweaked the hangOutNearMaster controller a bit.
-  Bomber now also branches from Tri-Trapper.
-  Tanker now also branches from Hexa Tank.
-  Tweaked Tanker's design.
-  Tweaked the Barrage branch's stats.
-  Broker now also branches from Mega-2.
-  Added Square-2, branching from Chipper and Auto-2.
-  Added Rectangle-2, branching from Chiseler and Square-2.
-  Added Square+2, branching from Scraper and Square-2.
-  Auto-4 and Mediator now also branch from Square-2.
-  Added Spirit, branching from Basebrid and Auto-2.
-  Added Apparition, branching from Fusion, Spirit and Mega-2.
-  Banshee and Surrogate now also branch from Spirit.
-  Added Poltergeist, branching from Spirit, Square-2, Gusto and Flank Swarm.
-  Added Behemoth, branching from Colony, Auto-3 and Spirit.
-  Readded some tweaked bots.
-  Nerfed sentry health again.
-  Buffed Disassociation.
-  Buffed the Honcho branch.
-  Changed up the main webpages.
-  Nerfed Spawner and Stovepipe a bit.
-  Changed the map layout.
-  Added Hexadecimator, branching from Trap Guard, Hexa Tank and Tri-Trapper.
-  Removed the Mini Smasher branch, replaced by the normal Smasher branch.
-  Buffed Bonker a bit.
-  Hopefully capped the maximum amount of bosses.
-  Modified the boss spawning chance.
-  Other changes i forgor.
`);
  const Cc = (a, b = !1) => {
      let d = document.getElementById(a);
      a = a.charAt(3).toLowerCase() + a.slice(4);
      "text" === d.type || "select-one" === d.type
        ? (b || (b = ""), hb.set(a, d.value && d.value !== b ? d.value : null))
        : ("checkbox" !== d.type && "radio" !== d.type) ||
          hb.set(a, d.checked !== b ? d.checked : null);
    },
    Dc = (a, b = !1) => {
      let d = document.getElementById(a);
      a = a.charAt(3).toLowerCase() + a.slice(4);
      if ("text" === d.type || "select-one" === d.type)
        d.value = hb.get(a) || b || "";
      else if ("checkbox" === d.type || "radio" === d.type)
        d.checked = hb.get(a) ?? b;
    };
  let Ec = (a) => {
      try {
        var b = a.replace(/\s+/g, "");
        2 == b.length % 4 ? (b += "==") : 3 == b.length % 4 && (b += "=");
        let l = atob(b);
        b = "Unknown Theme";
        let t = "";
        var d = l.indexOf("\x00");
        if (-1 === d) return null;
        b = l.slice(0, d) || b;
        l = l.slice(d + 1);
        d = l.indexOf("\x00");
        if (-1 === d) return null;
        t = l.slice(0, d) || t;
        l = l.slice(d + 1);
        let f = l.charCodeAt(0) / 255;
        l = l.slice(1);
        let h = Math.floor(l.length / 3);
        if (2 > h) return null;
        d = [];
        for (let p = 0; p < h; p++)
          d.push(
            "#" +
              (
                (l.charCodeAt(3 * p) << 16) |
                (l.charCodeAt(3 * p + 1) << 8) |
                l.charCodeAt(3 * p + 2)
              )
                .toString(16)
                .padStart(6, "0")
          );
        return { oc: !1, name: b, fb: t, content: { table: d, border: f } };
      } catch (l) {}
      a = JSON.parse(a);
      if ("object" !== typeof a) return null;
      let { name: e = "Unknown Theme", author: g = "", content: k } = a;
      a = [];
      for (let l of [
        k.teal,
        k.lgreen,
        k.orange,
        k.yellow,
        k.lavender,
        k.pink,
        k.vlgrey,
        k.lgrey,
        k.guiwhite,
        k.black,
        k.blue,
        k.green,
        k.red,
        k.gold,
        k.purple,
        k.magenta,
        k.grey,
        k.dgrey,
        k.white,
        k.guiblack,
      ]) {
        if ("string" !== typeof l || !/^#[0-9a-fA-F]{6}$/.test(l)) return null;
        a.push(l);
      }
      return {
        oc: !0,
        name: ("string" === typeof e && e.trim()) || "Unknown Theme",
        fb: ("string" === typeof g && g.trim()) || "",
        content: { table: a, border: Math.min(1, Math.max(0, k.border)) },
      };
    },
    Fc =
      "TGlnaHQgQ29sb3JzAE5lcGgApnrbvLnofueJbf3zgLWO/e+Zw+jr96qfnv///0hISDyky4q8P+A+Qe/HS41q38xmnKenr3Jvb9vb2wAAAA RGFyayBDb2xvcnMATmVwaAAmiXW3DEkdxGdIsrIkfVbFsk+uHh4ePDo6AAAA5eXlN5/GMLU7/2xu/8ZllnPoyGebY19fc3R6EREP//// TmF0dXJhbABOZXBoADN2wbuq013glUX/2ZOTn//Yf7LEtrZ/f3////83ODRPk7UAtlnhT2Xlv0KAU6C2fKqZj49JSVSlsqUAAAA Q2xhc3NpYwBOZXBoAICO//uF4338dnb/6461jv/xd93Nzc2ZmZn///9SUlIAsOEA4GzwT1T/5Gt2jPy+f/WZmZlUVFTAwMAAAAA Rm9yZXN0AFN0ZXJsb24As4hKpYybPtFqgJdZbUmYVWApT93GuH6Unv//6GZXUIB7tqG+VeWwW/9HR7rGdLp40ZmIZlKXWH2gYAAAAA TWlkbmlnaHQAdW9pZWEAmSuQmEuqXTRWeM3GhIl3jqhckMzMzKeyt7rG/wkfKBI0VQmHZQAAE1ZjgXQ3hLKQmFVVVWSet0RERAAAAA U25vdwBEZW9sdmVvcG9sZXIAWYm/urXRfeXg4LW75ZOf/2Rt5bKysn9/f////zg4Na6u/67/rv+urv///8PD2P+1/8zMzKCgsvLy8gAAAA Q29yYWwgUmVlZgBDZWxlc3RlYQBMdu7GQap4/39Q/9JQ3DOI+oByi4iGv8HC////EkZrQgCuDWM43EMz/qkEe0urXCRuZWiE1NfZMoO8AAAA QmFkbGFuZHMASW5jb2duaW91cwBm+cuc8cIyOHYd5pE4t7e3eIZraqhPt7e3pML0AAAADFqebokiWwAAeD8EWRx3IBJNLxwWmZmZVDUXz+Lz QmxlYWNoAGRlZmluaXRlbHlub3QuAGYA//8A/wD/MgD/7AD/JKf/PL3/8YaRgYHx8fFfX18AJf8A/wD/AAD/+iMxAP/U09ODg4NMTEz//v4ICAg UHVtcGtpbiBTa2VsZXRvbgBSb2FkAP9yGXD/Y0cbcTr984CUEQAZRBcbcTqqn57+2LFISEg8pMt27sbwT1QbcTobcTrMZpz///9yb2//m1gAAAA UmV0cm8ARGFtb2NsZXMAwP//Yga/OzGOlZN9AO7o1ecsdsjY5wc2Qv///wAAACw+ue+yCbkSNILf5B5haosSTIOUlna2iwgeIAAAAA UGFzdGVsAERhbW9jbGVzAMD//5iK/7LYs4T/63bu6NX/jb3z8NcHNkL//7VnUkA5dpc/96H2X2TSuGmBZUqnUpnBwcGNqZb126cAAAA RGlzY29yZABEYW1vY2xlcwDA1T8/KbOZ/ygo/+uOtY7//2j/zc3NmZmZ4ODgAAAAconaQ7WB8EdH/+gAXHn/+qQZmZmZVFRUHiEkNjk+ V1IgU2hlZXQgVGhlbWUAYWxldHRlcmEATP2YJ2iRaLuOdfXeup6BcbNXV+rgyaqfnv///3lVSGuyv2jFbLhjWNi8Z254qoRhh4aHiHJvb8u2kAAAAA RGVzY2VudABSb2c0NTYAAJXOz/+l/7yJif//sgAAAL2RxH9zYAAAAP///wAAAKurq6aXaFRUVP3npYeHd4WmhsS7nS4uMjs7NwAAAA U29sYXJpemVkIERhcmsAUm9hZADAtYkAKqGYy0sWZXuD7ujV0zaC4OLkBzZC////AAAAJovShpYA3DIvtYkAZ4yxoIK9g5SWBzZCACs2AAAA RWdncGxhbnQAUm9hZADA6WuoeNS21hAPo56b5+nb6WuojYaHKxop////KxopBrbvSLaF72FV+ZsVgVuk/sQYubawQBE/UDdNAAAA".split(
        " "
      ),
    rb = Ec(Fc[0]).content,
    Gc = document.getElementById("optColors"),
    Hc = document.getElementById("optCustom");
  Dc("optCustom");
  let Ic = ({ name: a, fb: b }, d = !1) => {
    a = d ? (a ? `Custom - ${a}` : "Custom") : a;
    return "" === b
      ? a
      : "fan-made" === b
      ? `${a} (Fan-made)`
      : `${a} (by ${b})`;
  };
  for (let a of Fc) {
    let b = Ic(Ec(a));
    Gc.options.add(new Option(b, a, Gc.options));
  }
  let Jc = new Option("Custom", "custom"),
    Kc = () => {
      let a = { name: "", fb: "" };
      try {
        Hc.value && (a = Ec(Hc.value));
        Hc.classList.remove("error");
        if (a.oc) {
          let { name: b = "Unknown Theme", fb: d = "", content: e } = a,
            { table: g, border: k } = e,
            l =
              b.trim() +
              "\x00" +
              d.trim() +
              "\x00" +
              String.fromCharCode(
                1 <= k ? 255 : 0 > k ? 0 : Math.floor(256 * k)
              );
          for (let t of g) {
            let f = parseInt(t.slice(1), 16);
            l += String.fromCharCode(f >> 16, (f >> 8) & 255, f & 255);
          }
          Hc.value = btoa(l).replace(/=+/, "");
        }
        Jc.text = Ic(a, !0);
      } catch (b) {
        Hc.classList.add("error"), (Jc.text = "Custom");
      }
    };
  Kc();
  Gc.options.add(Jc);
  Gc.addEventListener("change", () => {
    Hc.style.display = "custom" === Gc.value ? "block" : "none";
  });
  Gc.addEventListener("focus", () => {
    Hc.style.display = "custom" === Gc.value ? "block" : "none";
  });
  Hc.addEventListener("input", () => Kc());
  Dc("optName");
  Dc("optColors", Fc[0]);
  Dc("optBorders", "normal");
  Dc("optColoredNest");
  Dc("optNoGrid");
  Dc("optShield");
  Dc("optMiter");
  Dc("optMiterStars");
  Dc("optQuadraticStars");
  Dc("optRenderGui", !0);
  Dc("optRenderNames", !0);
  Dc("optRenderScores");
  Dc("optRenderLeaderboard", !0);
  Dc("optRenderHealth", !0);
  Dc("optReducedInfo");
  Dc("optInterpolation", !0);
  Dc("optLowGraphics");
  Dc("optAlphaAnimations", !0);
  Dc("optNames", "low");
  c.mobile && Dc("optMobile");
  Dc("optInstantMax", !0);
  Dc("optIncognito");
  c.mobile &&
    "" === document.getElementById("optMobile").value &&
    (document.getElementById("optMobile").value = "joysticks");
  "" === document.getElementById("optBorders").value &&
    (document.getElementById("optBorders").value = "normal");
  if (!c.mobile) {
    let a = {};
    try {
      if ("#vi" === location.hash || "#vim" === location.hash)
        a = {
          KEY_ABILITY: ["N", 78],
          KEY_AUTO_FIRE: [";", 186],
          KEY_AUTO_SPIN: ["P", 80],
          KEY_CHOOSE_1: ["Q", 81],
          KEY_CHOOSE_2: ["W", 87],
          KEY_CHOOSE_3: ["E", 69],
          KEY_CHOOSE_4: ["A", 65],
          KEY_CHOOSE_5: ["S", 83],
          KEY_CHOOSE_6: ["D", 68],
          KEY_CHOOSE_7: ["Z", 90],
          KEY_CHOOSE_8: ["X", 88],
          KEY_CHOOSE_9: ["C", 67],
          KEY_CLASS_TREE: ["T", 84],
          KEY_DOWN: ["J", 74],
          KEY_LEFT: ["H", 72],
          KEY_LEVEL_UP: [".", 190],
          KEY_OVERRIDE: ["I", 73],
          KEY_PAUSE: ["B", 66],
          KEY_PING: [",", 188],
          KEY_RECORD: ["V", 86],
          KEY_REVERSE_MOUSE: ["U", 85],
          KEY_REVERSE_TANK: ["Y", 89],
          KEY_RIGHT: ["L", 76],
          KEY_SCREENSHOT: ["G", 71],
          KEY_UP: ["K", 75],
        };
      else {
        let h = hb.get("keybinds");
        a = h ? JSON.parse(h) : {};
      }
    } catch (h) {}
    let b = document.getElementById("controlTable"),
      d = document.getElementById("resetControls"),
      e = null,
      g = [];
    for (let h of b.rows)
      for (let p of h.cells) {
        let r = p.firstChild?.firstChild;
        if (!r) continue;
        let { key: v, K: P } = r.dataset,
          y = {
            element: r,
            key: v,
            K: P,
            ja: r.innerText,
            Z: c[v],
            Mb: r.innerText,
            Lb: c[v],
          };
        a[y.key] &&
          ((r.innerText = y.ja = a[y.key][0]),
          (c[v] = y.Z = a[y.key][1]),
          y.K && (c.K[y.K] = y.ja));
        g.push(y);
      }
    let k = () => g.some(({ Z: h, Lb: p }) => h !== p);
    k() && d.classList.add("active");
    let l = () => {
        window.getSelection && window.getSelection().removeAllRanges();
        e.element.parentNode.parentNode.classList.remove("editing");
        e = null;
      },
      t = (h) => {
        e = h;
        e.element.parentNode.parentNode.classList.add("editing");
        if (-1 !== e.Z && window.getSelection) {
          h = window.getSelection();
          h.removeAllRanges();
          let p = document.createRange();
          p.selectNodeContents(e.element);
          h.addRange(p);
        }
      },
      f = (h, p) => {
        if (" " === h) (h = ""), (p = -1);
        else if (p !== e.Z) {
          let r = g.find(({ Z: v }) => v === p);
          r &&
            ((r.ja = e.ja),
            (r.element.innerText = e.ja),
            (r.Z = e.Z),
            (c[r.key] = e.Z),
            r.K && (c.K[r.K] = e.ja),
            (a[r.key] = [r.ja, r.Z]));
        }
        e.ja = h;
        e.element.innerText = h;
        e.Z = p;
        c[e.key] = p;
        e.K && (c.K[e.K] = h);
        a[e.key] = [e.ja, e.Z];
        hb.set("keybinds", JSON.stringify(a));
        l();
        k()
          ? (d.classList.remove("spin"), d.classList.add("active"))
          : d.classList.remove("active");
      };
    document.addEventListener("click", (h) => {
      if (!c.ya)
        if (e) l();
        else {
          var p = g.find(({ element: r }) => h.target === r);
          p && t(p);
        }
    });
    d.addEventListener("click", () => {
      if (k()) {
        e && l();
        for (let h of g)
          (h.ja = h.Mb),
            (h.element.innerText = h.Mb),
            (h.Z = h.Lb),
            (c[h.key] = h.Lb),
            h.K && (c.K[h.K] = h.Mb);
        a = {};
        hb.set("keybinds", JSON.stringify(a));
        d.classList.remove("active");
        d.classList.add("spin");
      }
    });
    document.addEventListener("keydown", (h) => {
      if (!(c.ya || h.shiftKey || h.ctrlKey || h.altKey)) {
        var p = h.which || h.keyCode;
        e
          ? 1 !== h.key.length || /[0-9]/.test(h.key) || 3 === h.location
            ? ("Backspace" !== h.key && "Delete" !== h.key) || f(" ", 32)
            : f(h.key.toUpperCase(), p)
          : (p !== c.KEY_ENTER && p !== c.KEY_SPAWN) || Lc();
      }
    });
  }
  document.getElementById("startButton").addEventListener("click", () => Lc());
  document.addEventListener("contextmenu", (a) => {
    "A" !== a.target.tagName &&
      "INPUT" !== a.target.tagName &&
      a.preventDefault();
  });
  c.mobile && document.body.classList.add("mobile");
  let Ba = new Ka(),
    Mc = () => {
      let a = window.devicePixelRatio;
      m.l.mb && (a *= 0.5);
      c.Ec = a;
      Ba.D.width = c.i = window.innerWidth * a;
      Ba.D.height = c.j = window.innerHeight * a;
      c.sb = Math.min(1920, Math.max(window.innerWidth, 1280));
    };
  Mc();
  window.addEventListener("resize", Mc);
  let H = Ba.D.getContext("2d"),
    Nc = (a, b, d) => {
      d += m.l.Sa;
      let e = 2 * kc();
      return (
        (a + d) * e > -c.i &&
        (a - d) * e < c.i &&
        (b + d) * e > -c.j &&
        (b - d) * e < c.j
      );
    },
    Zc = (a, b) => {
      b += m.l.Sa;
      let d = 2 * kc();
      return Math.max(
        0,
        Math.min(1, 2 + (-a + c.i / d) / b, 2 + (a + c.i / d) / b)
      );
    };
  function $c(a) {
    a.D = 0;
    a.value = 0;
    a.time = 0;
    a.h = 0;
  }
  function ad(a) {
    var b = E.$;
    return 2 !== b.h ? 0 : (a - b.time) / (1e3 / 30 / B.speed);
  }
  const bd = class {
    constructor(a = !1) {
      this.O = a;
      this.h = this.time = this.value = this.D = 0;
    }
    add(a) {
      this.D = 0 < this.h ? this.value : a;
      this.value = a;
      this.time = 0;
      this.h = 1;
    }
    get(a, b = !1) {
      if (0 === m.Da.$a) return this.value;
      if (0 === this.h) return 0;
      if (1 === this.h) return (this.h = 2), (this.time = a), this.D;
      a -= this.time;
      var d = 1e3 / 30 / B.speed;
      2 === m.Da.$a
        ? ((b = a / d), (b = 8 < b ? 8 : 1 < b ? b : b * b * (3 - 2 * b)))
        : (b = a < d || b ? a / d : 1);
      a = this.D;
      d = this.value;
      if (this.O) {
        var e = 2 * Math.PI;
        d = ((((d - a + Math.PI) % e) + e) % e) - Math.PI;
      } else d -= a;
      return a + d * b;
    }
  };
  let E = {
    x: 0,
    y: 0,
    view: 1,
    g: { x: 0, y: 0, view: 2e3 },
    $: new bd(),
    ea: new bd(),
    name: "",
  };
  c.player = E;
  function cd(a) {
    var b = dd;
    b.enabled = !0;
    b.x = a.x;
    b.y = a.y;
    b.M = a.M;
    b.H = a.H;
  }
  function ed(a) {
    var b = dd;
    b.x += a.Yc;
    b.y += a.Zc;
    b.M += a.Wc;
    b.H += a.Xc;
  }
  const dd = {
      enabled: !1,
      x: 0,
      y: 0,
      M: 0,
      H: 0,
      isEnabled() {
        return c.J || c.W || !c.Aa ? !1 : this.enabled && 0 < gc && 0 < hc;
      },
      get() {
        return this;
      },
    },
    gd = (() => {
      const a = {
          index: 0,
          data: [],
          next() {
            if (this.index >= this.data.length)
              throw (
                (console.error(this.data),
                Error("Trying to crawl past the end of the provided data"))
              );
            return this.data[this.index++];
          },
          all() {
            return this.data.slice(this.index);
          },
          fd(f) {
            this.index += f;
            if (this.index > this.data.length)
              throw (
                (console.error(this.data),
                Error("Trying to crawl past the end of the provided data"))
              );
          },
          set(f) {
            this.data = f;
            this.index = 0;
          },
        },
        b = class {
          constructor() {
            this.B = [];
          }
          Wa() {
            return this.B.length;
          }
          get(f) {
            for (let h = this.B.length; h <= f; h++)
              this.B.push({ position: 0, ha: 0, Cc: 0, Jb: !1, Ib: null });
            return this.B[f];
          }
          update() {
            for (let f of this.B)
              if ((f.Jb && ((f.Jb = !1), (f.ha += f.Cc)), f.ha || f.position))
                (f.ha -= 0.2 * f.position),
                  (f.position += f.ha),
                  0 > f.position && ((f.position = 0), (f.ha = -f.ha)),
                  0 < f.ha && (f.ha *= 0.5);
          }
          Fc(f, h) {
            f = this.get(f);
            null != f.Ib && f.Ib !== h && (f.Jb = !0);
            f.Ib = h;
          }
          Gc(f, h) {
            this.get(f).Cc = Math.sqrt(h) / 20;
          }
        },
        d = class {
          constructor() {
            this.h = "normal";
            this.time = Date.now();
          }
          set(f) {
            if (f !== this.h || "injured" === f)
              "dying" !== this.h && (this.time = Date.now()), (this.h = f);
          }
          ra() {
            return "dying" === this.h || "killed" === this.h
              ? Math.max(0, 1 - (Date.now() - this.time) / 300)
              : 1;
          }
          kc() {
            return "#ffffff";
          }
          jc() {
            "injured" === this.h &&
              500 < Date.now() - this.time &&
              (this.h = "normal");
            return "injured" === this.h || "killed" === this.h
              ? Math.max(0, 1 - (Date.now() - this.time) / 80)
              : 0;
          }
        },
        e = (f) => {
          var h = !1;
          if (f) {
            if (a.next() & 0)
              throw Error("Expecting a turret but found a regular entity");
            h = null == f.facing;
            f.facing = a.next();
            f.aa = a.next();
          } else {
            h = a.next();
            if (h & 1)
              throw Error("Expecting a regular entity but found a turret");
            let v = a.next();
            f = Gb.find((Q) => Q.id === v);
            var p = null == f;
            p && ((f = { id: v }), Gb.push(f));
            f.S = !1;
            f.ib = h & 2;
            var r = h & 4;
            f.Ya = h & 8 ? f.Ya || Date.now() : 0;
            h = f.index;
            f.index = a.next();
            h = p || h !== f.index;
            f.x = a.next();
            f.y = a.next();
            a.next();
            a.next();
            f.size = a.next();
            f.facing = a.next();
            a.next();
            f.Ub = a.next();
            f.aa = a.next();
            f.color = a.next();
            let P = f.N,
              y = f.V;
            f.N = a.next() / 255;
            f.V = a.next() / 255;
            p ||
              (f.g.N.set(f.N),
              f.g.V.set(f.V),
              f.N < P || f.V < y
                ? f.g.status.set("injured")
                : 1 !== f.g.status.ra() && f.g.status.set("normal"));
            f.alpha = a.next() / 255;
            r
              ? ((f.name = a.next()), (f.s = a.next()))
              : ((f.name = ""), (f.s = 0));
            p &&
              (f.g = {
                Ua: f.ib,
                x: f.x,
                y: f.y,
                f: f.facing,
                Ka: new bd(),
                La: new bd(),
                jb: new bd(!0),
                status: new d(),
                N: new Db(f.N, 0.1, 1),
                V: new Db(f.V, 0.1, 1),
              });
            f.g.Ka.add(f.x);
            f.g.La.add(f.y);
            f.g.jb.add(f.facing);
          }
          p = a.next();
          h && (f.B = new b());
          for (r = 0; r < p; r++) f.B.Fc(r, a.next()), f.B.Gc(r, a.next());
          p = a.next();
          if (h) for (f.A = [], h = 0; h < p; h++) f.A.push({});
          else
            f.A.length !== p &&
              console.error(
                "Mismatch between data turret number and remembered turret number"
              );
          for (let v of f.A) e(v);
        },
        g = (f) => {
          var h = !1,
            p = a.next();
          p & 1 && ((f.x = 0.0625 * a.next()), (f.y = 0.0625 * a.next()));
          p & 2 && (f.facing = a.next() * (Math.PI / 256));
          if (p & 4) {
            var r = a.next();
            f.Ub = r & 3;
            f.ib = r & 4;
            f.Ya = r & 8 ? f.Ya || Date.now() : 0;
          }
          r = !1;
          if (p & 8) {
            var v = f.N;
            f.N = a.next() / 255;
            f.N < v && (r = !0);
          }
          p & 16 && ((v = f.V), (f.V = a.next() / 255), f.V < v && (r = !0));
          p & 32 && (f.alpha = a.next() / 255);
          p & 64 && (f.size = 0.0625 * a.next());
          p & 128 && (f.s = a.next());
          p & 256 && (f.name = a.next());
          p & 512 && ((h = f.index), (f.index = a.next()), (h = h !== f.index));
          p & 1024 && (f.color = a.next());
          p & 2048 && (f.aa = a.next());
          f.g ||
            f.pc ||
            (f.g = {
              Ua: f.ib,
              x: f.x,
              y: f.y,
              f: f.facing,
              Ka: new bd(),
              La: new bd(),
              jb: new bd(!0),
              status: new d(),
              N: new Db(f.N, 0.1, 1),
              V: new Db(f.V, 0.1, 1),
            });
          f.g &&
            (f.g.Ka.add(f.x),
            f.g.La.add(f.y),
            f.g.jb.add(f.facing),
            f.g.N.set(f.N),
            f.g.V.set(f.V),
            r
              ? f.g.status.set("injured")
              : 1 !== f.g.status.ra() && f.g.status.set("normal"));
          if (!f.B || h) f.B = new b();
          if (!f.A || h) f.A = [];
          if (p & 4096)
            for (;;) {
              h = a.next();
              if (-1 === h) break;
              r = a.next();
              r & 1 && f.B.Fc(h, a.next());
              r & 2 && f.B.Gc(h, a.next());
            }
          if (p & 8192)
            for (;;) {
              p = a.next();
              if (-1 === p) break;
              for (h = f.A.length; h <= p; h++) f.A.push({ pc: !0 });
              g(f.A[p]);
            }
        },
        k = () => {
          A.u.Eb = 0;
          A.u.Wb = 0;
          for (A.u.Gb = 0; ; ) {
            let h = a.next();
            if (-1 === h) break;
            Gb.find((p) => p.id === h).nc = !0;
            A.u.Gb++;
          }
          for (;;) {
            let h = a.next();
            if (-1 === h) break;
            var f = Gb.find((p) => p.id === h);
            f ? A.u.Wb++ : ((f = { id: h, pc: !1 }), Gb.push(f), A.u.Eb++);
            f.nc = !1;
            g(f);
          }
          f = performance.now();
          for (let h of Gb)
            h.nc &&
              (h.g.status.set(1 === h.N ? "dying" : "killed"),
              (h.hd =
                0 === h.g.status.ra() ||
                !Nc(
                  h.g.Ka.get(f) - E.g.x,
                  h.g.La.get(f) - E.g.y,
                  h.size *
                    (h.g.Ua ? 1.5 : 1) *
                    (0 < h.A.length ? 3.5 : 0 < h.B.Wa() ? 2.5 : 1)
                )));
          Gb = Gb.filter((h) => !h.hd);
          Gb.sort((h, p) => h.aa - p.aa || p.id - h.id);
        },
        l = {
          ac(f) {
            a.set(f);
          },
          data() {
            let f = a.next();
            if (-1 === f) k();
            else {
              for (var h of Gb) h.S = !0;
              for (h = 0; h < f; h++) e(null);
              for (let p of Gb)
                p.S &&
                  (p.g.status.set(1 === p.N ? "dying" : "killed"),
                  (p.S =
                    0 === p.g.status.ra() ||
                    !Nc(
                      p.g.x - E.g.x,
                      p.g.y - E.g.y,
                      p.size *
                        (p.g.Ua ? 1.5 : 1) *
                        (0 < p.A.length ? 3.5 : 0 < p.B.Wa() ? 2.5 : 1)
                    )));
              Gb = Gb.filter((p) => !p.S);
              Gb.sort((p, r) => p.aa - r.aa || r.id - p.id);
            }
          },
          I() {
            var f = a.next(),
              h = f & 2,
              p = f & 4,
              r = f & 8,
              v = f & 16,
              P = f & 32,
              y = f & 64,
              Q = f & 128,
              X = f & 256,
              C = f & 512,
              F = f & 1024;
            f & 1 && (ec = a.next());
            h && ((Sb = a.next()), (fc = a.next()), (Wb = a.next()));
            if (p)
              if (((f = jc.s), (h = a.next()), 0 < h)) {
                p = Math.floor(Math.max(0, Math.pow(h / 0.6, 1 / 2.8) - 1.45));
                let W = 0 >= p ? 0 : 0.6 * Math.pow(p + 1.45, 2.8);
                var N = p + 1;
                N =
                  (h - W) / ((0 >= N ? 0 : 0.6 * Math.pow(N + 1.45, 2.8)) - W);
                f.s.set(h);
                f.level.set(p);
                f.progress.set(N);
              } else f.s.set(0), f.level.set(0), f.progress.set(0);
            r && (Ub = a.next());
            if (v) {
              Vb = [];
              for (let W = 0, aa = a.next(); W < aa; W++) Vb.push(a.next());
              c.za = !1;
            }
            if (P)
              for (r = 9; 0 <= r; r--)
                (Tb[r].name = a.next()),
                  (Tb[r].T = a.next()),
                  (Tb[r].da = a.next());
            y &&
              ((y = parseInt(a.next(), 36)),
              (Tb[0].amount = (y / 68719476736) & 15),
              (Tb[1].amount = (y / 4294967296) & 15),
              (Tb[2].amount = (y / 268435456) & 15),
              (Tb[3].amount = (y / 16777216) & 15),
              (Tb[4].amount = (y / 1048576) & 15),
              (Tb[5].amount = (y / 65536) & 15),
              (Tb[6].amount = (y / 4096) & 15),
              (Tb[7].amount = (y / 256) & 15),
              (Tb[8].amount = (y / 16) & 15),
              (Tb[9].amount = y & 15));
            Q && (gc = a.next());
            X && (hc = a.next());
            C && a.next();
            F && (ic = a.next());
          },
          Uc() {
            var f = a.all();
            let h = Hb.update(f);
            h = Ib.update(f, h);
            h = Jb.update(f, h);
            a.fd(h);
            f = [];
            for (let { id: p, data: r } of Hb.entries())
              f.push({
                id: p,
                type: r[0],
                x: r[1] / 255,
                y: r[2] / 255,
                color: r[3],
                size: r[4],
              });
            for (let { id: p, data: r } of Ib.entries())
              f.push({
                id: p,
                type: 0,
                x: r[0] / 255,
                y: r[1] / 255,
                color: r[2],
                size: 0,
              });
            Kb.update(f);
            f = [];
            for (let { id: p, data: r } of Jb.entries())
              f.push({
                id: p,
                s: r[0],
                index: r[1],
                name: r[2],
                color: r[3],
                gb: r[4],
              });
            Lb.update(f);
          },
        },
        t = async () => {
          for (let f = 0; 5 > f; f++) {
            try {
              let h = await (
                await fetch(`https://${c.U.host}/mockups.json`, {
                  cache: "no-cache",
                })
              ).json();
              null == vb && (vb = {});
              for (let p = 0; p < h.length; p++) {
                let r = wb(h[p]);
                vb[r.index] = r;
              }
              return;
            } catch (h) {
              console.error(h);
            }
            await cb(4e3);
            if (2 <= c.u.readyState) break;
          }
          throw Error("Unable to fetch mockups");
        };
      return (f) => {
        f ||
          ((f = { url: `wss://${c.U.host}/?legacy`, key: null, queue: [] }),
          (c.U.connected = !0));
        let h = new WebSocket(f.url, ["arras.io#v0+ft2", "arras.io#v1+ft2"]);
        h.binaryType = "arraybuffer";
        ib({
          type: "joinServer",
          server: { host: c.U.host, isPrivate: !0 },
          user: {
            adblock: ob,
            mobile: c.mobile,
            window: {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            },
            tracking: {
              name: hb.get("name") || "",
              colors: hb.get("colors") || "normal",
              borders: hb.get("borders") || "normal",
            },
          },
        });
        let p = {
          Yb: h,
          Ob: 0,
          m(...r) {
            r = Za(r);
            A.current.Ha += r.byteLength;
            this.Yb.readyState !== WebSocket.OPEN
              ? f.queue.push(r)
              : this.Yb.send(r);
          },
          cmd: {
            wa: 0,
            x: 0,
            y: 0,
            wc: 0,
            xc: 0,
            yc: 0,
            set(r, v) {
              this.wa = v ? this.wa | (1 << r) : this.wa & ~(1 << r);
              this.m();
            },
            setPosition(r, v) {
              this.x = r;
              this.y = v;
              this.m();
            },
            m() {
              var r = kc();
              let v = Math.round(this.x / r);
              r = Math.round(this.y / r);
              if (this.wc !== this.wa || this.xc !== v || this.yc !== r)
                p.m("C", v, r, this.wa),
                  (this.wc = this.wa),
                  (this.xc = this.od),
                  (this.yc = this.pd);
            },
            bd() {
              let r = (v) => (this.wa & (1 << v) ? 1 : 0);
              return { x: r(3) - r(2), y: r(1) - r(0) };
            },
          },
          bb(r = -1, v = "") {
            1 === p.Ob
              ? this.m("s", c.zc, r, v, c.cd | (c.mc << 1))
              : this.m("s", c.zc, r);
            c.J = !1;
            c.za = !1;
            Ua.L();
            ib({
              type: "respawnAd",
              duration: Date.now() - nb,
              user: {
                adblock: ob,
                mobile: c.mobile,
                window: {
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                },
                tracking: {
                  name: hb.get("name") || "",
                  colors: hb.get("colors") || "normal",
                  borders: hb.get("borders") || "normal",
                },
              },
            });
          },
          close() {
            this.Yb.close();
          },
        };
        h.addEventListener("open", async () => {
          p.Ob = "arras.io#v1+ft2" === h.protocol ? 1 : 0;
          c.message = "";
          if (f.key) {
            p.m("P", f.key);
            for (let r of f.queue) h.send(r);
          } else
            0 === p.Ob &&
              t().catch(() => {
                c.message ||
                  (c.message =
                    "Failed to fetch mockup data. Try reloading or joining another server.");
                p.close();
              }),
              fd(h) &&
                ((c.message =
                  "Cheat detected. Please disable any extensions you have enabled that might interfere with the game."),
                p.close()),
              mc ? p.m("k", mc) : p.m("k");
        });
        h.addEventListener("message", (r) => {
          A.current.Fa += r.data.byteLength;
          let v = ab(r.data);
          if (!v) throw Error("Malformed packet");
          switch (v.shift()) {
            case "w":
              v[0]
                ? (p.bb(c.Nb), p.m("p", 0), (c.message = ""))
                : v[1] && (c.message = v[1]);
              break;
            case "P":
              f.key = v[0];
              break;
            case "R":
              if ("string" === typeof v[0]) {
                if ("" !== v[0])
                  for (var P of v[0].split(","))
                    if (P.startsWith("mode=")) {
                      var y = c.U.code.split("-");
                      y[2] = P.slice(5);
                      c.U.code = y.join("-");
                    } else
                      "radial=true" === P
                        ? (B.X = !0)
                        : "blackout=true" === P
                        ? (B.bc = !0)
                        : "multi=true" === P && (B.uc = !0);
                B.speed = v[1];
                B.P = v[2];
                B.R = v[3];
                B.ba = v[4];
                B.fa = v[5];
                B.ga = JSON.parse(v[6]);
              } else
                (B.P = 0),
                  (B.R = 0),
                  (B.ba = v[0]),
                  (B.fa = v[1]),
                  (B.ga = JSON.parse(v[2])),
                  (B.speed = v[4]);
              break;
            case "r":
              B.ba = v[0];
              B.fa = v[1];
              B.ga = JSON.parse(v[2]);
              break;
            case "J":
              null == vb && (vb = {});
              for (y = 0; y < v.length; y += 2)
                vb[v[y]] = wb(JSON.parse(v[y + 1]));
              break;
            case "M":
              v[0]
                ? cd({ x: v[1], y: v[2], M: v[3], H: v[4] })
                : ed({ Yc: v[1], Zc: v[2], Wc: v[3], Xc: v[4] });
              break;
            case "c":
              $c(E.$);
              $c(E.ea);
              E.$.add(v[0]);
              E.ea.add(v[1]);
              E.view = v[2];
              E.g.view = E.view;
              ob &&
                (clearInterval(pb),
                (y = () =>
                  Nb.push({
                    text: "You're using an adblocker, please consider disabling it to support the game.",
                    time: Date.now(),
                    duration: 3e4,
                  })),
                y(),
                (pb = setInterval(y, 6e5)));
              c.ya = !0;
              break;
            case "m":
              P = Date.now();
              r = v[0].replace(/\x01<([^>]+)>/g, (C, F) => c.K[F]);
              for (y of Nb)
                if (y.text === r && / (en|dis)abled\.$/.test(r)) {
                  var Q = Math.max(
                    0,
                    Math.min(
                      1,
                      (P - y.time) / 300,
                      (y.time + y.duration - P) / 300
                    )
                  );
                  y.duration = Date.now() + 300 * Q;
                  y.time = 0;
                }
              Nb.push({ text: r, time: Date.now(), duration: 1e4 });
              break;
            case "u":
              y = v[1];
              P = v[2];
              r = v[3];
              Q = v.slice(6);
              p.m("d", v[0]);
              let X = Date.now();
              A.Dc = X - A.Za;
              A.Za = X;
              l.ac(Q);
              l.I();
              l.data();
              E.$.add(y);
              E.ea.add(P);
              E.view = r;
              A.current.Qa++;
              break;
            case "b":
              l.ac(v);
              l.Uc();
              break;
            case "p":
              setTimeout(
                () => p.m("p", Math.floor(65536 * Math.random())),
                m.kb.delay
              );
              Ob();
              break;
            case "F":
              c.hc = new Db(0, 4, 1);
              c.hc.set(4);
              if (-1 === v[0]) {
                c.J = !0;
                let C = 1;
                y = (F = 1) => v[C - F];
                c.v = {
                  Fb: v[C++],
                  s: v[C++],
                  time: v[C++],
                  qc: [v[C++], v[C++], v[C++], v[C++]],
                  sa: (() => {
                    let F = v[C++];
                    return {
                      type: F,
                      ratio: 1 === F || 2 === F ? v[C++] : 0,
                      name: 2 === F ? v[C++] : "",
                    };
                  })(),
                  qa: (() => {
                    let F = v[C++],
                      N = null;
                    if (0 === F) {
                      N = [];
                      let W = v[C++];
                      for (let aa = 0; aa < W; aa++)
                        N.push({ name: v[C++], Cb: v[C++] });
                    }
                    return { type: F, sources: N };
                  })(),
                  cb: v[C++],
                };
                c.wb = Date.now() + (v[C++] ? y() + (ob ? 5e3 : 0) : 0);
                c.ia = null;
                v[C++] && (c.ia = { value: y(), fc: !1 });
              } else
                (c.J = !0),
                  (y = 6 + v[5]),
                  (c.v = {
                    Fb: Math.floor(Date.now() / 1e3),
                    s: v[0],
                    time: v[1],
                    qc: [v[2], v[3], v[4], 0],
                    sa: { type: -1 },
                    qa: {
                      type: 0,
                      sources: v
                        .slice(6, y)
                        .map((C) => ({ name: "", Cb: vb[C].name })),
                    },
                    cb: null,
                  }),
                  (c.wb = Date.now() + (v[y] ? v[y] + (ob ? 5e3 : 0) : 0));
              ob
                ? clearInterval(pb)
                : Ua.show(c.mobile ? "nitropay-mobile" : lb());
              nb = Date.now();
              break;
            case "K":
              c.Aa = !1;
              v[0] && (c.message = v[0]);
              break;
            default:
              throw Error("Unknown message index");
          }
        });
        h.addEventListener("close", (r) => {
          c.W = !0;
          c.ic = Math.floor(Date.now() / 1e3);
          c.Aa &&
            ((c.Aa = !1),
            c.J ||
              c.message ||
              (f.key && setTimeout(() => gd(f), 2e3),
              (c.message =
                "Socket closed. If you disconnected, respawn now to regain your score.")));
          console.warn("WebSocket closed", r);
        });
        h.addEventListener("error", (r) => {
          console.warn("WebSocket error", r);
          c.message ||
            (c.message =
              "Socket error. Try reloading or joining another server.");
          c.Aa = !1;
        });
        c.u = p;
      };
    })();
  let fd = (a) => {
      var b = document.getElementById("guia");
      if (
        (b && /multibox/i.test(b.innerText)) ||
        ((b = document.getElementById("all")) &&
          /multibox/i.test(b.innerText)) ||
        document.querySelector(
          'div[style*="Impact"][style*="Charcoal"] p fondo img'
        ) ||
        / {12}let ans = 0, i, chr;\n {12}/.test("".hashCode)
      )
        return !0;
      try {
        b = !1;
        if (window.updateInfo) {
          window.updateInfo("__detect", "scriptDetected");
          for (var d of document.querySelectorAll("body > div"))
            if (d.innerText.includes("scriptDetected")) {
              b = !0;
              break;
            }
          window.updateInfo("__detect", null);
        }
        if (b) return !0;
      } catch (e) {
        return !0;
      }
      d = (e, g, k = Math.random()) => {
        let l = "";
        try {
          Array.prototype.shift.call({
            0: e,
            get [g]() {
              l += "g";
              return k;
            },
            set [g](t) {
              l += "s";
              k = t;
            },
            length: 8,
          });
        } catch (t) {
          l += "e";
        }
        return l;
      };
      b = d("u", 2);
      if (d("u", 4) !== b || d("v", 2) !== b || d("v", 4) !== b) return !0;
      try {
        let e = E.view;
        E.view = 0.05;
        let g = 0.05 !== E.view;
        E.view = "x";
        g = g || "x" !== E.view;
        E.view = e;
        if (g) return !0;
      } catch (e) {
        return !0;
      }
      try {
        if (Array.isArray(a.msgHooks))
          for (let e of a.msgHooks)
            if (e.toString().includes("-0xddc+-0x6f6+0x82*0x29")) return !0;
      } catch (e) {
        return !0;
      }
      return !1;
    },
    hd = !1,
    Lc = () => {
      if (c.U && !hd) {
        hd = !0;
        if (c.mobile) {
          var a = document.body;
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.webkitRequestFullscreen
            ? a.webkitRequestFullscreen()
            : a.mozRequestFullScreen
            ? a.mozRequestFullScreen()
            : a.msRequestFullscreen && a.msRequestFullscreen();
          a =
            navigator.h ||
            (window.matchMedia &&
              window.matchMedia(
                "(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)"
              ).matches);
          c.mobile &&
            !a &&
            Nb.push({
              text: "Add the game to home screen to always enable fullscreen!",
              time: Date.now(),
              duration: 3e4,
            });
        }
        Cc("optColors", Fc[0]);
        Cc("optBorders", "normal");
        Cc("optColoredNest");
        Cc("optNoGrid");
        Cc("optShield");
        Cc("optMiter");
        Cc("optMiterStars");
        Cc("optQuadraticStars");
        Cc("optRenderGui", !0);
        Cc("optRenderNames", !0);
        Cc("optRenderScores");
        Cc("optRenderLeaderboard", !0);
        Cc("optRenderHealth", !0);
        Cc("optReducedInfo");
        Cc("optInterpolation", !0);
        Cc("optLowGraphics");
        Cc("optAlphaAnimations", !0);
        Cc("optNames", "low");
        c.mobile && Cc("optMobile");
        Cc("optInstantMax", !0);
        Cc("optIncognito");
        m.l.hb = document.getElementById("optColoredNest").checked;
        m.l.ab = !document.getElementById("optNoGrid").checked;
        m.l.yb = document.getElementById("optShield").checked;
        m.l.Ma = document.getElementById("optMiter").checked;
        m.l.nb = document.getElementById("optMiterStars").checked;
        m.l.qb = document.getElementById("optQuadraticStars").checked;
        m.I.enabled = document.getElementById("optRenderGui").checked;
        m.l.ub = document.getElementById("optRenderNames").checked;
        m.l.vb = document.getElementById("optRenderScores").checked;
        m.I.lb = document.getElementById("optRenderLeaderboard").checked;
        m.l.tb = document.getElementById("optRenderHealth").checked;
        m.l.rb = document.getElementById("optReducedInfo").checked;
        m.Da.$a = document.getElementById("optInterpolation").checked ? 1 : 0;
        m.l.mb = document.getElementById("optLowGraphics").checked;
        m.l.eb = document.getElementById("optAlphaAnimations").checked;
        m.l.pa =
          "none" === document.getElementById("optNames").value
            ? 0
            : "low" === document.getElementById("optNames").value
            ? 1
            : 2;
        c.cd = document.getElementById("optInstantMax").checked;
        c.mc = document.getElementById("optIncognito").checked;
        switch (document.getElementById("optBorders").value) {
          case "normal":
            m.l.xa = !1;
            m.l.Ca = !1;
            break;
          case "dark":
            m.l.xa = !0;
            m.l.Ca = !1;
            break;
          case "glass":
            m.l.xa = !1;
            m.l.Ca = !0;
            break;
          case "neon":
            (m.l.xa = !0), (m.l.Ca = !0);
        }
        m.l.Ra = !1;
        a = document.getElementById("optColors").value;
        try {
          rb = Ec(
            "custom" === a ? document.getElementById("optCustom").value : a
          ).content;
        } catch (b) {}
        Cc("optCustom");
        c.gd = rb;
        a = document.getElementById("optName");
        a.blur();
        a.disabled = !0;
        Cc("optName");
        c.zc = a.value;
        Mc();
        Ua.L();
        document.getElementById("startMenuWrapper").style.top = "-600px";
        setTimeout(() => {
          c.mobile || Ta.L();
          document.getElementById("startMenuWrapper").remove();
        }, 1e3);
        ib({
          type: "spawnAd",
          duration: Date.now() - mb,
          user: {
            adblock: ob,
            mobile: c.mobile,
            window: {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            },
            tracking: {
              name: hb.get("name") || "",
              colors: hb.get("colors") || "normal",
              borders: hb.get("borders") || "normal",
            },
          },
        });
        if (c.U.host)
          try {
            gd(),
              setInterval(() => {
                var b = dd,
                  d = c.u.cmd.bd();
                if (b.isEnabled()) {
                  var e = b.x,
                    g = b.y,
                    k = b.M,
                    l = b.H,
                    t = Math.sqrt(d.x * d.x + d.y * d.y);
                  if (0 < t) {
                    let f = gc / B.speed;
                    b.M += (f / t) * d.x;
                    b.H += (f / t) * d.y;
                  }
                  if ((d = gc / hc))
                    (b.M /= d / B.speed + 1), (b.H /= d / B.speed + 1);
                  b.x += b.M;
                  b.y += b.H;
                  c.u.m("M", b.x - e, b.y - g, b.M - k, b.H - l);
                }
              }, 1e3 / 30),
              (c.Aa = !0),
              va();
          } catch (b) {
            console.warn("WebSocket error", b),
              (c.W = !0),
              (c.message = "Server invalid. Maybe another server will work.");
          }
        else
          (c.W = !0),
            (c.message =
              "Server unsupported. Go to https://arras.io/ to join this server!"),
            (location.href =
              "https://trap-guard.glitch.me/arras/arras#host=trap-guard.glitch.me");
        id(0);
      }
    },
    jd = (a, b) => {
      H.fillStyle = a;
      H.globalAlpha = b;
      H.fillRect(0, 0, c.i, c.j);
      1 !== b && (H.globalAlpha = 1);
    };
  function kd(a, b) {
    if (typeof a !== typeof b) return !0;
    if (
      "number" === typeof a ||
      "string" === typeof a ||
      null == a ||
      null == b
    )
      return a !== b;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return !0;
      for (let d = 0; d < a.length; d++) if (a[d] !== b[d]) return !0;
      return !1;
    }
    console.error("Unsupported type for difference tracking", a, b);
    throw Error("Unsupported type for difference tracking");
  }
  function ld(a) {
    let b = a.h;
    a.h = !1;
    return b;
  }
  const md = class {
      constructor(a = null) {
        this.value = a;
        this.h = !1;
      }
      update(a) {
        kd(this.value, a) && ((this.h = !0), (this.value = a));
      }
    },
    nd = (() => {
      let a = document.createElement("canvas").getContext("2d");
      return (b, d) => {
        a.font = `bold ${d}px Ubuntu`;
        return a.measureText(b).width;
      };
    })(),
    U = class {
      constructor() {
        this.h = null;
        this.ta = new md("");
        this.ka = new md([0, "#ff0000"]);
        this.D = this.O = this.Ba = 0;
      }
      o(a, b, d, e, g, k = "left", l = !1) {
        if (a) {
          this.h ||
            (this.h = document.createElement("canvas").getContext("2d"));
          var t = Math.max(e / 2, e + m.l.Va);
          e = null;
          var f = 1;
          H.getTransform && ((e = H.getTransform()), (f = e.d), (t *= f));
          this.ta.update(a);
          var h = ld(this.ta);
          this.ka.update([t, g]);
          var p = ld(this.ka);
          if (h || p) {
            this.Ba = h = nd(a, t);
            let r = Math.max(3, 0.2 * t),
              { O: v, D: P } = this,
              y = h + 2 * r;
            p || v < y || v > 2.5 * y
              ? ((v = Math.ceil(1.25 * y)),
                (P = Math.ceil(t + 2 * r)),
                (this.O = v),
                (this.D = P),
                (this.h.canvas.width = v),
                (this.h.canvas.height = P),
                (this.h.lineWidth = r),
                (this.h.font = `bold ${t}px Ubuntu`),
                (this.h.textBaseline = "middle"),
                (this.h.strokeStyle = w(9)),
                (this.h.fillStyle = g),
                (this.h.lineCap = "round"),
                (this.h.lineJoin = "round"))
              : this.h.clearRect(0, 0, v, P);
            g = (v - h) / 2;
            t = P / 2;
            this.h.strokeText(a, g, t);
            this.h.fillText(a, g, t);
          }
          1 !== f && H.scale(1 / f, 1 / f);
          H.drawImage(
            this.h.canvas,
            Math.round(
              b * f -
                (this.O / 2 +
                  this.Ba * ("left" === k ? -0.5 : "right" === k ? 0.5 : 0))
            ),
            Math.round(d * f - this.D * (l ? 0.525 : 0.75))
          );
          1 !== f && H.setTransform(e);
        }
      }
    };
  let od = (a, b, d, e, g = !1) => {
      g ? H.strokeRect(a, b, d, e) : H.fillRect(a, b, d, e);
    },
    pd = (a, b, d, e = !1) => {
      H.beginPath();
      H.arc(a, b, d, 0, 2 * Math.PI);
      e ? H.stroke() : H.fill();
    },
    qd = (a, b, d, e) => {
      H.beginPath();
      H.lineTo(Math.round(a) + 0.5, Math.round(b) + 0.5);
      H.lineTo(Math.round(d) + 0.5, Math.round(e) + 0.5);
      H.stroke();
    },
    rd = (a, b, d, e, g) => {
      H.beginPath();
      H.lineTo(a, d);
      H.lineTo(b, d);
      H.lineWidth = e;
      H.strokeStyle = g;
      H.stroke();
    };
  const sd = (() => {
      let a = [1, 1, 1];
      for (let b = 3; 256 > b; b++) {
        let d = (2 * Math.PI) / b;
        a.push(Math.sqrt(d / Math.sin(d)));
      }
      return (b) => {
        if ("number" !== typeof b || !Number.isInteger(b)) return 1;
        b = Math.abs(b);
        return 256 > b ? a[b] : 1;
      };
    })(),
    td = (() => {
      let a = document.createElement("canvas").getContext("2d"),
        b = (d, e, g, k, l, t = 0) => {
          d.beginPath();
          let f = !1;
          if (l)
            if (l instanceof Array) {
              var h = Math.cos(t);
              t = Math.sin(t);
              for (let [y, Q] of l)
                d.lineTo(e + k * (y * h - Q * t), g + k * (Q * h + y * t));
            } else {
              if ("string" === typeof l) {
                l = new Path2D(l);
                d.save();
                d.translate(e, g);
                d.scale(k, k);
                d.lineWidth /= k;
                d.rotate(t);
                m.l.Xa ? (d.stroke(l), d.fill(l)) : (d.fill(l), d.stroke(l));
                d.restore();
                return;
              }
              if (l == 100) {
                // donut
                d.arc(e, g, k, 0, 2 * Math.PI, false);
                d.arc(e, g, k / 1.5, 0, 2 * Math.PI, true);
              } else if (0 > l) {
                0 === l % 2 && (t += Math.PI / l);
                l = -l;
                var p = 1 - 6 / (l * l);
                d.moveTo(e + k * Math.cos(t), g + k * Math.sin(t));
                for (let y = 0; y < l; y++) {
                  var r = ((y + 0.5) / l) * 2 * Math.PI + t,
                    v = ((y + 1) / l) * 2 * Math.PI + t;
                  h = e + k * p * Math.cos(r);
                  r = g + k * p * Math.sin(r);
                  var P = e + k * Math.cos(v);
                  v = g + k * Math.sin(v);
                  m.l.qb
                    ? d.quadraticCurveTo(h, r, P, v)
                    : (d.lineTo(h, r), d.lineTo(P, v));
                }
                m.l.nb && (f = !m.l.Ma);
              } else if (0 < l)
                for (0 === l % 2 && (t += Math.PI / l), h = 0; h < l; h++)
                  (p = (h / l) * 2 * Math.PI + t),
                    d.lineTo(e + k * Math.cos(p), g + k * Math.sin(p));
            }
          else d.arc(e, g, k, 0, 2 * Math.PI);
          d.closePath();
          f && (d.lineJoin = "miter");
          m.l.Xa ? (d.stroke(), d.fill()) : (d.fill(), d.stroke());
          f && (d.lineJoin = "round");
        };
      return (d, e, g, k, l, t, f, h = !1, p = !1, r = null, v = g.g) => {
        var P = r ? 1 : v.status.ra();
        l *= P;
        if (0 !== l) {
          t = t * k * g.size;
          var y = vb[g.index],
            Q = d,
            X = e;
          r = r || g;
          v.Ua && (t *= 1.5 - 0.5 * P);
          P = !1;
          if (!p && 1 !== l)
            if (m.l.eb)
              (p = y.position),
                (X = Math.ceil(t * p.axis + 20 * k)),
                (a.canvas.width = X),
                (a.canvas.height = X),
                (a.lineCap = "round"),
                (a.lineJoin = m.l.Ma ? "miter" : "round"),
                (Q = X / 2 - (t * p.axis * p.ca.x * Math.cos(f)) / 4),
                (X = X / 2 - (t * p.axis * p.ca.x * Math.sin(f)) / 4),
                (P = p = !0);
            else {
              if (0.5 >= l) return;
              t *= 1.5 * l - 0.5;
            }
          var C = p ? a : H;
          for (var F = 0; F < y.A.length && F < r.A.length; F++) {
            var N = y.A[F];
            if (0 === N.aa) {
              var W = vb[N.index],
                aa = N.direction + N.angle + f,
                Z = N.offset * t;
              td(
                Q + Z * Math.cos(aa),
                X + Z * Math.sin(aa),
                W,
                k,
                1,
                (t / k / W.size) * N.Rb,
                r.A[F].facing + h * f,
                h,
                p,
                r.A[F],
                v
              );
            }
          }
          r.B.update();
          C.lineWidth = k * m.l.Sa;
          F = v.status.kc();
          W = v.status.jc();
          N = qb(w(16), F, W);
          F = qb(w(g.color), F, W);
          g.Ya &&
            100 > (Date.now() - g.Ya) % 200 &&
            ((N = qb(N, w(6), 0.3)), (F = qb(F, w(6), 0.3)));
          ub(C, N);
          for (W = 0; W < y.B.length; W++) {
            var T = y.B[W];
            aa = r.B.get(W).position;
            g = C;
            N =
              Q +
              t *
                (T.offset * Math.cos(T.direction + T.angle + f) +
                  (T.length / 2 - aa) * Math.cos(T.angle + f));
            aa =
              X +
              t *
                (T.offset * Math.sin(T.direction + T.angle + f) +
                  (T.length / 2 - aa) * Math.sin(T.angle + f));
            Z = (t * T.length) / 2;
            var V = (t * T.width) / 2,
              z = T.Qc,
              I = T.angle + f;
            T = V;
            0 < z ? (T *= z) : 0 > z && (V *= -z);
            z = Math.cos(I);
            I = Math.sin(I);
            g.beginPath();
            g.moveTo(N + Z * z - T * I, aa + Z * I + T * z);
            g.lineTo(N - Z * z - V * I, aa - Z * I + V * z);
            g.lineTo(N - Z * z + V * I, aa - Z * I - V * z);
            g.lineTo(N + Z * z + T * I, aa + Z * I - T * z);
            g.closePath();
            m.l.Xa ? (g.stroke(), g.fill()) : (g.fill(), g.stroke());
          }
          ub(C, F);
          b(C, Q, X, t * sd(y.shape), y.shape, f);
          for (F = 0; F < y.A.length && F < r.A.length; F++)
            (g = y.A[F]),
              1 === g.aa &&
                ((N = vb[g.index]),
                (W = g.direction + g.angle + f),
                (aa = g.offset * t),
                td(
                  Q + aa * Math.cos(W),
                  X + aa * Math.sin(W),
                  N,
                  k,
                  1,
                  (t / k / N.size) * g.Rb,
                  r.A[F].facing + h * f,
                  h,
                  p,
                  r.A[F],
                  v
                ));
          P &&
            (H.save(),
            (H.globalAlpha = l),
            H.drawImage(C.canvas, d - Q, e - X),
            H.restore());
        }
      };
    })(),
    ud = (() => {
      let [a, b] = btoa(
        atob(
          "MDYoIHqzYoIGjYoMRWoIKLRWoMQ8pHk62p58k62p54ntBbnJEoYrT4rLA4nJAqHJF2rLMV2rLIV2q7HgYrXIUpbrVoaK3gWrLWq3QaJZaHJLA2ppwrp7Qq2qdA=="
        ).slice(1)
      )
        .split("0")
        .slice(0, 2)
        .map((g, k) =>
          g.match(/[A-Z][a-z]+/g).map((l) => ({
            value: l.toLowerCase().replace(/^x|x$/g, ""),
            Tc: l.startsWith("x"),
            Sc: l.endsWith("x"),
            advanced: 0 === k && 5 <= l.length,
          }))
        );
      var d =
        "w 4g 4g0 6bk 6bl 6bm 6bn 6bo 6bp 6bq 6br 6bs 6bt 6bu 6co 6cp 6cv 6e7;1t 2p 5g 5h 6c 6d 76 77 ct cu fa fb gh pd q9 sw ts ya yb 3vu 4at 5q8 70a wku xve 1ee9 1ef5 1f34 20jk 2kg0 2kgq 2khg 2ki6 2kiw 2kjm 2kkc 2kl2 2kls 2kmi 2kn8 2kny 2koo 2kpe 2kq4 2kqu 2krk 2ksa 2kt0 2ktq 2kug 2kv6 2kvw 2kwm 2kxc 2ky2 2kyw 2kzm 2l0i 2l18 2l24 2l2u 2l3q 2l4g 2l5c 2l62;1u 2q 67 as ih pe qa r4 sy to tu 3wv 3xs 3xw 3y4 41e 4a7 4c7 4ia 6jw wk0 x4k x4l 1eea 1ef6 1f2a 1f35 1f5t 2kg1 2kgr 2khh 2ki7 2kix 2kjn 2kl3 2klt 2kmj 2kn9 2knz 2kop 2kpf 2kq5 2kqv 2krl 2ksb 2kt1 2ktr 2kuh 2kv7 2kvx 2kwn 2kxd 2ky3 2kyx 2kzn 2l0j 2l19 2l25 2l2v 2l3r 2l4h 2l5d 2l63;1v 2r s2 s9 td u9 3xb 40l 5qc 6iq 6jx 6lp 6m5 6te 8tg 8th 946 wka xwv 1eeb 1ef7 1f36 1f5u 1fdh 1fel 1fks 1jhl 1jhu 2kg2 2kgs 2khi 2ki8 2kiy 2kjo 2kke 2kl4 2klu 2kmk 2ko0 2kpg 2kq6 2kqw 2krm 2ksc 2kt2 2kts 2kui 2kv8 2kvy 2kwo 2kxe 2ky4 2rf0;1w 2s zl 3vk 3xj 41b 4bi 4bu 5qd 6kl 6km 6lq 6m6 wk2 wk3 xv4 1eec 1ef8 2kg3 2kgt 2khj 2ki9 2kiz 2kjp 2kkf 2kl5 2klv 2kml 2knb 2ko1 2kor 2kph 2kq7 2kqx 2krn 2ksd 2kt3 2ktt 2kuj 2kv9 2kvz 2kwp 2kxf 2ky5;1x 2t 7o 7p 7u 7v b4 bt ph pv t1 tx xp 100 3vw 3wr 5qf 6iv 6jy 6jz 6k0 6kg 6kn 6q9 6wv 8xl 8y1 wkw xte xvg 1eed 1ef9 1f2e 1fcx 1jfq 1jfy 20j1 2k2p 2kg4 2kgu 2khk 2kia 2kj0 2kjq 2klw 2kmm 2knc 2ko2 2kos 2kpi 2kq8 2kqy 2kro 2kse 2kt4 2ktu 2kuk 2kva 2kw0 2kwq 2kxg 2ky6 2kz0 2kze 2l0m 2l10 2l28 2l2m 2l3u 2l48 2l5g 2l5u;1y 2u an rg rh 138 4ac 61p 6k1 wkd x3s x3t xth 1eee 1efa 1f2f 1f39 1fl1 1jfm 1jgi 2k2b 2kg5 2kgv 2khl 2kib 2kj1 2kjr 2kl7 2klx 2kmn 2knd 2ko3 2kot 2kpj 2kq9 2kqz 2krp 2ksf 2kt5 2ktv 2kul 2kvb 2kw1 2kwr 2kxh 2ky7 2l6y 2l6z;1z 2v 7y 7z 83 b1 di dj dx gx gy zw zx 135 3wg 3xv 3y3 5tv 6iy wk6 xw0 1eef 1efb 2kg6 2kgw 2khm 2kic 2kj2 2kjs 2kki 2kly 2kmo 2kne 2ko4 2kou 2kpk 2kqa 2kr0 2krq 2ksg 2kt6 2ktw 2kum 2kvc 2kw2 2kws 2kxi 2ky8;20 2w ik pj t9 u5 xn 12o 3wb 3wi 48s 6iz 6j0 6j1 6j2 8su wkn xvv 1eeg 1efc 1f4f 2kg7 2kgx 2khn 2kj3 2kjt 2kl9 2klz 2kmp 2ko5 2kpl 2kqb 2kr1 2krr 2ksh 2kt7 2ktx 2kun 2kvd 2kw3 2kwt 2kxj 2ky9 2kz2 2l0o 2l2a 2l3w 2l5i;1d 21 24 2x 30 3g 8c 8d 8h ba cg cv cw h5 h6 in kb oq pl qh sm uu xs y7 14w 15h 15r 17r 19d 1dd 1je 3vp 3xa 42y 4ht 69q 6j4 6j5 6j6 6j7 6k9 6ko 6lc 6lo 6ls 6m4 6qr 703 73x 8sy 8uo 8up 8y7 wkh wky wuf xv9 xwu 1ea5 1ea6 1edt 1eeh 1eek 1efd 1efg 1ejs 1f2i 1f61 1f6o 1fdn 1fer 1fl2 1jfn 1jg2 1jgj 20ie 20iw 2k2y 2kg8 2kgb 2kgy 2kh1 2kho 2khr 2kie 2kih 2kj4 2kj7 2kju 2kjx 2kla 2kld 2km0 2km3 2kmq 2kmt 2knj 2ko6 2ko9 2kow 2koz 2kpm 2kpp 2kqc 2kqf 2kr2 2kr5 2krs 2krv 2ksi 2ksl 2kt8 2ktb 2kty 2ku1 2kuo 2kur 2kve 2kvh 2kw4 2kw7 2kwu 2kwx 2kxk 2kxn 2kya 2kyd 2kys 2kz4 2kzu 2l0q 2l1g 2l2c 2l32 2l3y 2l4o 2l5k 2l6a 2l73 2l7d 2l7n 2l7x 2l87 2ojr 2pkw 2pog 2sc1;22 2y fr ov s3 so uw 12t 3vv 425 5qi 6kp wk9 x4i xvf 1eei 1efe 2kg9 2kgz 2khp 2kif 2kj5 2kjv 2kkl 2klb 2km1 2kmr 2knh 2ko7 2kox 2kpn 2kqd 2kr3 2krt 2ksj 2kt9 2ktz 2kup 2kvf 2kw5 2kwv 2kxl 2kyb 2kyt;23 2z 8o pm qi s0 t6 u2 3xi 4id 5qj 6ju 8t0 8t1 wk7 xx2 1eej 1eff 1fko 2kga 2kh0 2khq 2kig 2kj6 2kjw 2kkm 2klc 2km2 2kms 2kni 2ko8 2koy 2kpo 2kqe 2kr4 2kru 2ksk 2kta 2ku0 2kuq 2kvg 2kw6 2kww 2kxm 2kyc 2kz5 2kzv 2l0e 2l0r 2l1h 2l20 2l2d 2l33 2l3m 2l3z 2l4p 2l58 2l5l 2l6b 2l6u;25 31 i5 po sa t8 u4 3w7 4c0 4ie 5ql 6k3 6lr 6m7 8t4 wkf xvr 1eel 1efh 1f3k 1f69 1j40 1jhf 2kgc 2kh2 2khs 2kii 2kj8 2kjy 2kle 2km4 2kmu 2knk 2koa 2kp0 2kpq 2kqg 2kr6 2krw 2ksm 2ktc 2ku2 2kus 2kvi 2kw8 2kwy 2kxo 2kye 2kz7 2l0t 2l2f 2l41 2l5n;26 32 92 he hg pp 12w 130 6j9 8t6 wkg 1eem 1efi 1fkj 2kgd 2kh3 2kht 2kij 2kj9 2kjz 2kkp 2klf 2km5 2kmv 2knl 2kob 2kpr 2kqh 2kr7 2krx 2ksn 2ktd 2ku3 2kut 2kvj 2kw9 2kwz 2kxp 2kyf 2kz8 2l0u 2l2g 2l42 2l5o;1c 27 33 5y 6u 9a 9b 9c cx cy pr qn qr ta u6 yu yv 11x 139 15t 17t 18n 19h 1by 1c1 1c3 1cl 1dh 1j4 1uu 1ye 21y 25i 274 292 2cm 2de 2g6 2gy 2jq 2ki 2lc 2na 2o2 2ts 2xc 36l 37k 3cv 3ps 5qn 5qp 6k4 6zp 8ta 8tb 8yc 9hj wkz xtp 1dpi 1dpj 1dpk 1dpl 1dpm 1dpn 1dpo 1dpp 1eab 1eac 1ecp 1ecq 1ecr 1ecs 1eds 1een 1efj 1f2q 1f3f 1fd0 1fe4 1fia 1fje 1fkm 1iog 1jg5 1jgo 1jh3 1jhc 2kge 2kh4 2khu 2kik 2kja 2kk0 2kkq 2km6 2kmw 2knm 2koc 2kp2 2kps 2kqi 2kr8 2kry 2kso 2kte 2ku4 2kuu 2kvk 2kwa 2kx0 2kxq 2kyg 2kza 2l00 2l04 2l0w 2l1m 2l1q 2l2i 2l38 2l3c 2l44 2l4u 2l4y 2l5q 2l6g 2l6k 2l72 2l7c 2l7m 2l7w 2l86 2plw 2pno 2pok 2sc0;28 34 66 cf pt qp s1 s7 tc u8 3xe 419 5qw 5rd 6jd 704 8te 8tf wk1 xwy 1eeo 1efk 1f2t 1fic 2kgf 2kh5 2khv 2kil 2kjb 2kk1 2kkr 2klh 2km7 2kmx 2knn 2kod 2kpt 2kqj 2kr9 2krz 2ksp 2ktf 2ku5 2kuv 2kvl 2kwb 2kx1 2kxr 2kyh 2kzc 2l02 2l0g 2l0y 2l1o 2l22 2l2k 2l3a 2l3o 2l46 2l4w 2l5a 2l5s 2l6i 2l6w;29 35 10b 12b 12e 6je 8yd 1eep 1efl 2kgg 2kh6 2khw 2kim 2kjc 2kk2 2kks 2kli 2km8 2kmy 2kno 2koe 2kpu 2kqk 2kra 2ks0 2ksq 2ktg 2ku6 2kuw 2kvm 2kwc 2kx2 2kxs 2kyi;2a 36 bq hs tv 3vl 3wy 493 4hd 5ra 6jf 6jg 6jh 8sl wkj xtz xu0 xv5 xvl xwi 1eeq 1efm 1fhw 20j9 2k2e 2kgh 2kh7 2khx 2kin 2kjd 2kk3 2klj 2km9 2kmz 2kof 2kpv 2kql 2krb 2ks1 2ksr 2kth 2ku7 2kux 2kvn 2kwd 2kx3 2kxt 2kyj;2b 37 cd sl ut 11r 3x1 3x6 wki x0x xwq 1eer 1efn 1f2u 1fds 1few 1jgh 20je 2kgi 2kh8 2khy 2kio 2kje 2kk4 2kku 2klk 2kma 2kn0 2knq 2kog 2kp6 2kpw 2kqm 2krc 2ks2 2kss 2kti 2ku8 2kuy 2kvo 2kwe 2kx4 2kxu 2kyk;2c 38 9u 9v bv ey ez pw qs te ua 3vm 3wf 5qz 6uc 7vd 8ti wk4 xv6 1ees 1efo 1f2v 1f3l 1f6d 1jgc 20i2 2kgj 2kh9 2khz 2kip 2kjf 2kk5 2kkv 2kll 2kmb 2kn1 2knr 2koh 2kp7 2kpx 2kqn 2krd 2ks3 2kst 2ktj 2ku9 2kuz 2kvp 2kwf 2kx5 2kxv 2kyl 2kzf 2l05 2l11 2l1r 2l2n 2l3d 2l49 2l4z 2l5v 2l6l 2rfs;2d 39 a4 a5 cz d0 i3 qt 11p 131 3k0 40c 5r0 6qy 6v7 wl0 x3z xu6 xua 1eet 1efp 1fim 1fjq 1jg8 1jh4 20jm 2kgk 2kha 2ki0 2kiq 2kjg 2kk6 2kkw 2klm 2kmc 2kn2 2kns 2koi 2kp8 2kpy 2kqo 2kre 2ks4 2ksu 2ktk 2kua 2kv0 2kvq 2kwg 2kx6 2kxw 2kym 2l06 2l1s 2l3e 2l50 2l6m;2e 3a ql vo vp 15k 19j 1dj 3x5 3zj 5r4 6lg 6lw 6qw 6v5 8xk wkm wyn xwp 1eeu 1efq 1fkt 1j46 1jfk 1jgg 20i0 2k25 2kgl 2khb 2ki1 2kir 2kjh 2kk7 2kkx 2kln 2kmd 2kn3 2knt 2koj 2kp9 2kpz 2kqp 2krf 2ks5 2ksv 2ktl 2kub 2kv1 2kvr 2kwh 2kx7 2kxx 2kyn 2kzy 2l1k 2l36 2l4s 2l6e;2f 3b hb v5 10c 10d 129 3w3 3x0 5r5 wkq xvn 1eev 1efr 1j4a 1j4e 1j4f 1jhi 1jhr 2kgm 2khc 2ki2 2kis 2kji 2kk8 2kky 2klo 2kme 2kn4 2knu 2kok 2kpa 2kq0 2kqq 2krg 2ks6 2ksw 2ktm 2kuc 2kv2 2kvs 2kwi 2kx8 2kxy 2kyo;2g 3c 5z pz th ud 475 48t 4fh 4fi 4hj 6ll 6m1 7eb 84r 84s 8bz 8to 8yl wkr x4j 1eew 1efs 1f2o 1f3o 1f6f 1f6q 1fl3 1jho 2kgn 2khd 2ki3 2kit 2kjj 2kk9 2kkz 2klp 2kmf 2kn5 2knv 2kol 2kpb 2kq1 2kqr 2krh 2ks7 2ksx 2ktn 2kud 2kv3 2kvt 2kwj 2kx9 2kxz 2kyp 2kzi 2l14 2l2q 2l4c 2l5y;2h 3d gz i7 px qb r6 tf ub xa xb 3c7 3vt 3wd 5u4 64f 6kd 8tk wks xui 1eex 1eft 1f3m 1jfo 1jh8 20jn 2kgo 2khe 2ki4 2kiu 2kjk 2kka 2kl0 2klq 2kmg 2kn6 2knw 2kom 2kpc 2kq2 2kqs 2kri 2ks8 2ksy 2kto 2kue 2kv4 2kvu 2kwk 2kxa 2ky0 2kyq 2kzg 2kzo 2l12 2l1a 2l2o 2l2w 2l4a 2l4i 2l5w 2l64;2i 3e pi 3wj 5r6 6jo 6js wkc xw3 1eey 1efu 1f5h 1jft 1jgk 1jhh 2kgp 2khf 2ki5 2kiv 2kjl 2kkb 2kl1 2klr 2kmh 2kn7 2kon 2kq3 2kqt 2krj 2ks9 2ksz 2ktp 2kuf 2kv5 2kvv 2kwl 2kxb 2ky1 2kyr 2kz1 2l0n 2l29 2l3v 2l5h".split(
          ";"
        );
      let e = {};
      for (let g of d) {
        d = g.split(" ").map((l) => parseInt(l, 36));
        let k = String.fromCharCode(d[0]).toLowerCase();
        "0" === k && (k = "o");
        "1" === k && (k = "i");
        for (let l of d) {
          if (null != e[l]) throw 1;
          e[l] = k;
        }
      }
      return { vc: a, ad: b, map: e };
    })();
  let vd = 1,
    wd = new Map();
  const xd = (a) => {
    var b = m.l.pa;
    if (!a || !b) return a;
    vd !== b && ((vd = b), (wd = new Map()));
    if (wd.has(a)) return wd.get(a);
    100 < wd.size && (wd = new Map());
    let d = [],
      e = [];
    for (var g = 0; g < a.length; g++) {
      var k = a.codePointAt(g);
      65536 <= k && g++;
      d.push(k);
      e.push(ud.map[k] || ".");
    }
    a = 1 >= b ? ud.vc : [...ud.vc, ...ud.ad];
    b = (t) => "a" <= t && "z" >= t;
    for (g = 0; g < e.length; g++)
      if (b(e[g])) {
        k = 0 === g || !b(e[g - 1]);
        for (let t of a) {
          let f = g,
            h = 0;
          for (let p = 0; p < t.value.length; p++) {
            var l = t.value[p];
            let r = null;
            do (r = e[f]), f++;
            while (" " === r);
            if (r !== l && ("1" !== l || "l" !== r))
              if (
                t.advanced &&
                ("a" === l ||
                  "e" === l ||
                  "i" === l ||
                  "o" === l ||
                  "u" === l) &&
                k
              ) {
                if ((h++, 2 <= h)) break;
              } else break;
            if (p === t.value.length - 1) {
              l = f >= e.length || !b(e[f]);
              if (t.Tc && !k) break;
              if (t.Sc && !l) break;
              for (l = g + 1; l < f; l++) d[l] = 42;
            }
          }
        }
      }
    return String.fromCodePoint(...d);
  };
  let yd = (a, b, d, e, g) => {
    if (!(0.05 > g)) {
      var k = d.g.status.ra();
      k *= k;
      H.globalAlpha = k;
      var l = d.size * e,
        t = l * sd(vb[d.index].shape);
      if (d.ib) {
        var f = d.g.N.get(),
          h = d.g.V.get();
        let p = 0 <= h;
        if (1 > f || (p && 1 > h))
          (e = 3 * Math.max(1, e)),
            (t = b + 1.1 * t + 4 * e),
            (H.globalAlpha = g * g * k),
            m.l.yb && p
              ? (rd(a - l, a + l, t, 3 * e, w(9)),
                rd(a - l, a - l + 2 * l * f, t + 0.5 * e, e, w(1)),
                (H.globalAlpha *= 0.7),
                rd(a - l, a - l + 2 * l * h, t - 0.5 * e, e, w(0)))
              : (rd(a - l, a + l, t, 2 * e, w(9)),
                rd(a - l, a - l + 2 * l * f, t, e, w(1)),
                p &&
                  ((H.globalAlpha *= 0.3 + 0.3 * h),
                  rd(a - l, a - l + 2 * l * h, t, e, w(0)))),
            (H.globalAlpha = k);
      }
      k = m.l.ub ? (m.l.pa ? xd(d.name) : d.name) : "";
      f = m.l.vb ? ja(d.s, !0) : "";
      if (((k || d.s) && d.id !== Wb) || 2 <= m.debug.Hc)
        null == d.g.Tb && (d.g.Tb = [new U(), new U()]),
          m.debug.Hc && (k = k ? k + ` [${d.id}]` : `[${d.id}]`),
          (h = w(8)),
          k.startsWith("\u200b") &&
            ((k = k.slice(1)), (h = qb(w(3), h, 0.125))),
          (H.globalAlpha = g),
          (g = Math.max(20, l)),
          d.g.Tb[0].o(k, a, b - g * (f ? 1.9 : 1.45), 0.55 * g, h, "center"),
          d.g.Tb[1].o(f, a, b - 1.45 * g, 0.3 * g, h, "center"),
          (H.globalAlpha = 1);
    }
  };
  const zd = (() => {
      const a = new Db(0, 0.7, 1.5),
        b = new Db(0, 2),
        d = class {
          constructor(z, I, da = !1) {
            this.color = z;
            this.data = [];
            this.D = I;
            this.O = da;
          }
          h(z) {
            this.data.length >= this.D && this.data.shift();
            this.data.push(z);
          }
          o(z, I, da, ra) {
            var R = this.O ? 0 : Math.min(...this.data);
            let Y = Math.max(...this.data),
              wa = Y - R;
            if (0 !== wa) {
              0 < Y && 0 > R && rd(z, z + da, I + (ra * Y) / wa, 2, w(8));
              H.beginPath();
              for (R = 0; R < this.data.length; R++) {
                let xa = (R - this.data.length) / this.D + 1,
                  gb = (Y - this.data[R]) / wa;
                0 === R
                  ? H.moveTo(z + da * xa, I + ra * gb)
                  : H.lineTo(z + da * xa, I + ra * gb);
              }
              H.lineWidth = 1;
              H.strokeStyle = this.color;
              H.stroke();
            }
          }
          ka() {
            var z = this.O ? 0 : Math.min(...this.data),
              I = Math.max(...this.data);
            I = 0.1 * z + 0.9 * I;
            var da = !1;
            z = [];
            for (var ra = this.data.length - 1; 0 <= ra; ra--) {
              let R = this.data[ra];
              if (R > I)
                if (da) {
                  let Y = z[z.length - 1];
                  R > Y.max && ((Y.max = R), (Y.Bb = ra));
                } else (da = !0), z.push({ max: R, Bb: ra });
              else da && (da = !1);
            }
            if (2 > z.length) return null;
            I = z.pop().Bb;
            z = z.pop().Bb;
            da = 0;
            for (ra = I; ra <= z; ra++) da += this.data[ra];
            return da / (z - I + 1);
          }
        },
        e = class {
          constructor() {
            this.h = [];
          }
          get(z) {
            for (; z >= this.h.length; ) this.h.push(new U());
            return this.h[z];
          }
        },
        g = new d(w(3), 300),
        k = new d(w(2), 300, !0),
        l = new d(w(5), 300),
        t = new d(w(0), 300),
        f = (() => {
          let z = [];
          for (let I = 0; I < 2 * m.Da.tc; I++)
            z.push(Math.log((4 * I) / m.Da.tc + 1) / Math.log(5));
          return (I) => z[I];
        })();
      var h = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        p = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        r = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        v = new U(),
        P = new U(),
        y = new U(),
        Q = new U(),
        X = new U(),
        C = new e(),
        F = new e(),
        N = new U(),
        W = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        aa = new e(),
        Z = new e(),
        T = new U();
      let V = 0;
      return (z) => {
        let I = V ? z - V : null;
        V = z;
        A.current.Ga++;
        let da = null == I ? 0 : 0.98 ** I;
        B.g.P = B.g.P * da + B.P * (1 - da);
        B.g.ba = B.g.ba * da + B.ba * (1 - da);
        B.g.R = B.g.R * da + B.R * (1 - da);
        B.g.fa = B.g.fa * da + B.fa * (1 - da);
        let ra = null == I ? 0 : 0.998 ** I;
        E.g.view = E.g.view * ra + E.view * (1 - ra);
        let R = (Math.max(c.i, (16 * c.j) / 9) / c.sb) * m.I.scale,
          Y = kc(),
          wa,
          xa;
        if (dd.isEnabled()) {
          let n = dd.get();
          E.$.add(n.x);
          E.ea.add(n.y);
        }
        let gb = E.$.get(z),
          Oc = E.ea.get(z);
        if (3 === m.Da.$a) {
          let n = null == I ? 0 : 0.98 ** I;
          E.g.x = E.g.x * n + gb * (1 - n);
          E.g.y = E.g.y * n + Oc * (1 - n);
        } else (E.g.x = gb), (E.g.y = Oc);
        wa = Y * E.g.x;
        xa = Y * E.g.y;
        jd(qb(w(18), w(19), 0.1), 1);
        if (B.X)
          H.save(),
            H.translate(c.i / 2, c.j / 2),
            H.rotate(Math.atan2(-E.$.get(z), -E.ea.get(z))),
            H.translate(c.i / -2, c.j / -2),
            (H.globalAlpha = 1),
            (H.fillStyle = w(18)),
            H.beginPath(),
            H.arc(-wa + c.i / 2, -xa + c.j / 2, Y * B.g.ba, 0, 2 * Math.PI),
            H.fill();
        else {
          let n = c.i / 2 - wa + Y * B.g.P,
            u = c.j / 2 - xa + Y * B.g.R,
            q = Y * (B.g.ba - B.g.P),
            x = Y * (B.g.fa - B.g.R);
          H.globalAlpha = 1;
          H.fillStyle = w(18);
          H.fillRect(n, u, q, x);
          let K = B.ga[0].length,
            G = B.ga.length;
          for (let L = 0; L < G; L++)
            for (let D = 0; D < K; D++) {
              let O = n + (D / K) * q,
                M = u + (L / G) * x,
                ba = n + ((D + 1) / K) * q,
                na = u + ((L + 1) / G) * x;
              if (O >= c.i || 0 >= ba || M >= c.j || 0 >= na) continue;
              H.globalAlpha = B.ga[L][D].startsWith("por") ? 1 : 0.3;
              let S = sb(B.ga[L][D]);
              S !== w(18) &&
                ((H.fillStyle = S), H.fillRect(O, M, ba - O, na - M));
            }
        }
        let Ca = 30 * Y;
        if (m.l.ab && 2.5 < Ca) {
          H.lineWidth = 1;
          H.strokeStyle = w(19);
          H.globalAlpha = 0.04;
          H.beginPath();
          if (B.X) {
            let n =
              Math.ceil(Math.sqrt(c.i * c.i + c.j * c.j) / Y / Y / 60) * Ca;
            for (let u = ((c.i / 2 - wa) % Ca) - n; u < c.i + n; u += Ca)
              H.moveTo(u, -n), H.lineTo(u, n + c.j);
            for (let u = ((c.j / 2 - xa) % Ca) - n; u < c.j + n; u += Ca)
              H.moveTo(-n, u), H.lineTo(n + c.i, u);
          } else {
            for (let n = (c.i / 2 - wa) % Ca; n < c.i; n += Ca)
              H.moveTo(n, 0), H.lineTo(n, c.j);
            for (let n = (c.j / 2 - xa) % Ca; n < c.j; n += Ca)
              H.moveTo(0, n), H.lineTo(c.i, n);
          }
          H.stroke();
        } else m.l.ab && jd(w(19), Math.min((1 - 0.9216) / Ca, 0.5));
        H.globalAlpha = 1;
        B.X && H.restore();
        E.x = null;
        E.y = null;
        let Xb, Yb;
        if (B.X) {
          H.save();
          H.translate(c.i / 2, c.j / 2);
          let n = Math.atan2(-E.$.get(z), -E.ea.get(z));
          Xb = Math.cos(n);
          Yb = Math.sin(n);
          H.rotate(n);
        }
        for (let n of Gb) {
          if (n.id === Wb && dd.isEnabled()) {
            let q = dd.get();
            n.g.Ka.add(q.x);
            n.g.La.add(q.y);
          }
          let u = 1 !== n.g.status.ra();
          n.g.x = n.g.Ka.get(z, u);
          n.g.y = n.g.La.get(z, u);
          n.g.f = n.g.jb.get(z, u);
          n.id === Wb &&
            (0 !== (n.Ub & 1) ||
              c.J ||
              c.W ||
              !c.Aa ||
              ((n.g.f = Math.atan2(Ba.target.y, Ba.target.x)),
              B.X && (n.g.f -= Math.atan2(-E.$.get(z), -E.ea.get(z))),
              n.Ub & 2 && (n.g.f += Math.PI)),
            (E.x = Y * n.g.x - wa + c.i / 2),
            (E.y = Y * n.g.y - xa + c.j / 2),
            (E.name = n.name));
        }
        for (let n of Gb) {
          if (
            !Nc(
              n.g.x - E.g.x,
              n.g.y - E.g.y,
              n.size *
                (n.g.Ua ? 1.5 : 1) *
                (0 < n.A.length ? 3.5 : 0 < n.B.Wa() ? 2.5 : 1)
            )
          )
            continue;
          let u = Y * n.g.x - wa,
            q = Y * n.g.y - xa;
          B.X || ((u += c.i / 2), (q += c.j / 2));
          td(u, q, n, Y, n.alpha, 0 === vb[n.index].shape ? 1 : m.l.Db, n.g.f);
        }
        B.X && H.restore();
        if (m.l.tb)
          for (let n of Gb) {
            let u = n.id === Wb ? 1 : n.alpha;
            Nc(n.g.x - E.g.x, n.g.y - E.g.y, n.size) ||
              (u *= Zc(n.g.x - E.g.x, n.size));
            let q = Y * n.g.x - wa,
              x = Y * n.g.y - xa;
            if (B.X) {
              let K = Xb * x + Yb * q;
              q = Xb * q - Yb * x;
              x = K;
            }
            q += c.i / 2;
            x += c.j / 2;
            yd(q, x, n, Y, u);
          }
        if (B.bc) {
          let n = Gb.find((u) => u.id === Wb);
          if (n) {
            H.beginPath();
            let u = c.i / 2 - wa + Y * B.g.P,
              q = c.j / 2 - xa + Y * B.g.R,
              x = Y * (B.g.ba - B.g.P),
              K = Y * (B.g.fa - B.g.R),
              G = B.ga[0].length,
              L = B.ga.length,
              D = 0.6 + 0.1 * Math.sin((Math.PI * (Date.now() % 2e3)) / 1e3);
            for (let S = 0; S < L; S++)
              for (let ea = 0; ea < G; ea++) {
                let ta = q + ((S - D) / L) * K,
                  ya = u + ((ea + 1 + D) / G) * x,
                  Ia = q + ((S + 1 + D) / L) * K;
                if (
                  u + ((ea - D) / G) * x >= c.i ||
                  0 >= ya ||
                  ta >= c.j ||
                  0 >= Ia
                )
                  continue;
                let Pc = u + ((ea + 0.5) / G) * x,
                  Qc = q + ((S + 0.5) / L) * K;
                B.ga[S][ea].startsWith("dro") &&
                  (H.moveTo(Pc + ((0.5 + D) / G) * x, Qc),
                  H.arc(Pc, Qc, ((0.5 + D) / G) * x, 0, 2 * Math.PI));
              }
            let O = c.i / 2,
              M = c.j / 2,
              { B: ba } = vb[n.index];
            H.arc(O, M, n.size * Y * 4, 0, 2 * Math.PI);
            H.moveTo(O, M);
            let na = Math.atan2(Ba.target.y, Ba.target.x);
            H.arc(O, M, n.size * Y * 24, na - 0.1, na + 0.1);
            for (let S of ba) {
              let ea = n.g.f,
                ta =
                  O +
                  S.offset * Math.cos(S.direction + S.angle + ea) +
                  (S.length / 2) * Math.cos(S.angle + ea),
                ya =
                  M +
                  S.offset * Math.sin(S.direction + S.angle + ea) +
                  (S.length / 2) * Math.sin(S.angle + ea);
              H.moveTo(ta, ya);
              let Ia = n.g.f + S.angle;
              H.arc(ta, ya, n.size * Y * S.length * 6, Ia - 0.3, Ia + 0.3);
            }
            H.globalAlpha = 1;
            H.fillStyle = "#000000";
            H.globalCompositeOperation = "destination-in";
            H.fill();
            H.globalCompositeOperation = "destination-over";
            H.fillRect(0, 0, c.i, c.j);
            H.globalCompositeOperation = "source-over";
          }
        }
        if (m.I.enabled) {
          var Qa = (n, u = !1) => {
            c.i /= n;
            c.j /= n;
            H.scale(n, n);
            u || (R *= n);
          };
          Qa(R, !0);
          var fa = m.I.Ab,
            J = m.I.Sb,
            $a = Lb.get();
          if (c.Qb) {
            var Zb =
              null != vb && Object.values(vb).find((n) => "Basic" === n.name);
            if (Zb && Zb.Nc) {
              var Rc = [],
                xb = [],
                $b = (n, u, q, { index: x, Mc: K = 0 }) => {
                  Rc.push({ x: n, y: u, Vc: q, index: x });
                  let { Nc: G } = vb[x];
                  switch (K) {
                    case 3:
                      return { width: 1, height: 1 };
                    case 2:
                      for (q = 0; q < G.length; q++) $b(n, u + 2 + q, q, G[q]);
                      xb.push([
                        { x: n, y: u },
                        { x: n, y: u + 1 + G.length },
                      ]);
                      return { width: 1, height: 2 + G.length };
                    case 1:
                    case 0:
                      let L = n;
                      q = G.map((D, O) => {
                        let M = 4 * (D.Mc - K);
                        D = $b(n, u + M, O, D);
                        xb.push([
                          { x: n, y: u + (0 === O ? 0 : 1) },
                          { x: n, y: u + M },
                        ]);
                        O + 1 === G.length &&
                          xb.push([
                            { x: L, y: u + 1 },
                            { x: n, y: u + 1 },
                          ]);
                        n += D.width;
                        return D;
                      });
                      return {
                        width: q.map((D) => D.width).reduce((D, O) => D + O, 0),
                        height: 2 + Math.max(...q.map((D) => D.height)),
                      };
                  }
                },
                Ra = $b(0, 0, 0, { index: Zb.index }),
                Xa =
                  Math.min((0.9 * c.i) / Ra.width, (0.9 * c.j) / Ra.height) * 6;
              H.globalAlpha = 0.5;
              H.fillStyle = w(8);
              od(0, 0, c.i, c.j);
              var za = Xa - 4;
              H.strokeStyle = w(9);
              H.lineWidth = 2;
              H.beginPath();
              let factor = 0.025;
              let xfactor = 1 + window.innerWidth / 10000;
              for (let [n, u] of xb) {
                let q = c.i / 2 + (u.x - Ra.width / 2) * Xa + 1 + 0.5 * za,
                  x = c.j / 2 + (u.y - Ra.height / 2) * Xa + 1 + 0.5 * za;
                H.moveTo(
                  Math.round(
                    c.i / 2 + (n.x - Ra.width / 2) * Xa + 1 + 0.5 * za
                  ) +
                    0.5 -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  Math.round(
                    c.j / 2 + (n.y - Ra.height / 2) * Xa + 1 + 0.5 * za
                  ) +
                    0.5 -
                    Ba.target.y
                );
                H.lineTo(
                  Math.round(q) +
                    0.5 -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  Math.round(x) + 0.5 - Ba.target.y
                );
              }
              H.stroke();

              for (let { x: n, y: u, Vc: q, index: x } of Rc) {
                let K = c.i / 2 + (n - Ra.width / 2) * Xa + 2,
                  G = c.j / 2 + (u - Ra.height / 2) * Xa + 2;
                H.globalAlpha = 1;
                H.fillStyle = tb(q);
                od(
                  K -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  G - Ba.target.y,
                  za,
                  za
                );
                H.globalAlpha = 0.2;
                H.fillStyle = w(9);
                od(
                  K -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  G + 0.6 * za - Ba.target.y,
                  za,
                  0.4 * za
                );
                H.globalAlpha = 1;
                let L = -Math.PI / 4,
                  D = Ab(x, fc),
                  O = vb[x].position,
                  M = (0.8 * za) / O.axis;
                td(
                  K +
                    0.5 * za -
                    M * O.ca.x * Math.cos(L) -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  G + 0.5 * za - M * O.ca.x * Math.sin(L) - Ba.target.y,
                  D,
                  0.5,
                  1,
                  (M / D.size) * 2,
                  L,
                  !0
                );
                H.strokeStyle = w(9);
                H.lineWidth = 2;
                od(
                  K -
                    Ba.target.x *
                      xfactor *
                      (Ra.width / (window.innerWidth * factor)),
                  G - Ba.target.y,
                  za,
                  za,
                  !0
                );
              }
            }
          }
          if (c.mobile && "joysticks" === Ba.Vb) {
            let n = Math.min(0.6 * c.i, 0.12 * c.j);
            H.globalAlpha = 0.3;
            H.fillStyle = "#ffffff";
            H.beginPath();
            H.arc(c.i / 6, (2 * c.j) / 3, n, 0, 2 * Math.PI);
            H.arc((5 * c.i) / 6, (2 * c.j) / 3, n, 0, 2 * Math.PI);
            H.fill();
          }
          c.mobile && Qa(1.4);
          var ac = c.i / 2,
            yb = J;
          c.mobile &&
            (yb +=
              (c.la ? ((fa / 3 + J) / 1.4) * a.get() : 0) +
              (c.oa ? ((fa / 2 + J) / 1.4) * b.get() : 0));
          var Bd = Date.now();
          for (let n = Nb.length - 1; 0 <= n; n--) {
            let u = Nb[n],
              q = Bd - u.time,
              x = u.duration - q;
            if (0 >= x) {
              Nb.splice(n, 1);
              continue;
            }
            let K = Math.max(0, Math.min(1, q / 300, x / 300));
            null == u.Lc &&
              ((u.Lc = new U()),
              (u.sc = nd(u.text, Math.max(7.5, 15 + m.l.Va))));
            H.globalAlpha = 0.5 * K;
            rd(ac - u.sc / 2, ac + u.sc / 2, yb + 9, 18, w(9));
            H.globalAlpha = K;
            u.Lc.o(
              m.l.pa ? xd(u.text) : u.text,
              ac,
              yb + 9,
              15,
              w(8),
              "center",
              !0
            );
            yb += 22 * (3 - 2 * K) * K * K;
          }
          H.globalAlpha = 1;
          c.mobile && Qa(1 / 1.4);
          if (!c.mobile) {
            c.la = 0 < Ub && Tb.some((L) => L.amount < L.T);
            a.set(c.la || c.J || c.W || c.Jc ? 1 : 0);
            c.G.stat.L();
            let n = fa - 35,
              u = 0,
              q = J + (a.get() - 1) * (J + fa) * 2,
              x = c.j - J - 15,
              K = 10,
              G = Rb();
            for (let L of Tb) {
              K--;
              let D = L.da;
              if (!D) continue;
              let O = L.amount,
                M = w(L.color),
                ba = L.T,
                na = G[K],
                S = fa * f(D);
              rd(q + 7.5, q - 7.5 + S, x + 7.5, 12 + m.I.va, w(9));
              rd(q + 7.5, q + 7.5 + n * f(D), x + 7.5, 12, w(16));
              rd(q + 7.5, q + 7.5 + n * f(O), x + 7.5, 11.5, M);
              H.strokeStyle = w(9);
              H.lineWidth = 1;
              for (let ya = 1; ya <= O; ya++) {
                let Ia = q + n * f(ya);
                qd(Ia, x + 1.5, Ia, x - 3 + 15);
              }
              let ea = 0 < Ub && O < ba && O < D,
                ta = O < ba ? (ea ? w(8) : w(16)) : M;
              h[K].o(na, q + S / 2, x + 7.5, 11, ta, "center", !0);
              p[K].o(
                `[${(K + 1) % 10}]`,
                q + S - 3.75 - 2,
                x + 7.5,
                11,
                ta,
                "right",
                !0
              );
              O &&
                r[K].o(
                  O < ba ? `+${O}` : "MAX",
                  q + S + 4,
                  x + 7.5,
                  11,
                  M,
                  "left",
                  !0
                );
              ea && c.G.stat.Ea(K, q * R, x * R, S * R, 15 * R);
              x -= 19;
              u = S;
            }
            c.G.lc.Ea(0, 0, x * R, (0.5 * fa + a.get() * u) * R, (c.j - x) * R);
            1 < Ub && v.o(`x${Ub}`, q + u - 2, x + 15 - 4, 20, w(8), "right");
          }
          if (!c.J) {
            let n = 1.65 * fa,
              u = 25,
              q = (c.i - n) / 2,
              x = c.j - J - u;
            H.lineWidth = 1;
            rd(q, q + n, x + u / 2, u - 3 + m.I.va, w(9));
            rd(q, q + n, x + u / 2, u - 3, w(16));
            rd(q, q + n * jc.s.progress.get(), x + u / 2, u - 3.5, w(13));
            Q.o(
              `Level ${Math.floor(jc.s.level.get()) + 1} ${
                -1 !== Sb ? vb[Sb].name : "Unknown"
              }`,
              q + n / 2,
              x + u / 2,
              u - 3,
              w(8),
              "center",
              !0
            );
            u = 14;
            x -= u + 4;
            rd(q + 0.1 * n, q + 0.9 * n, x + u / 2, u - 3 + m.I.va, w(9));
            rd(q + 0.1 * n, q + 0.9 * n, x + u / 2, u - 3, w(16));
            rd(
              q + 0.1 * n,
              q +
                n *
                  (0.1 +
                    0.8 * ($a.max ? Math.min(1, jc.s.s.get() / $a.max) : 1)),
              x + u / 2,
              u - 3.5,
              w(11)
            );
            P.o(
              `Score: ${ka(jc.s.s.get())}`,
              q + n / 2,
              x + u / 2,
              u - 1,
              w(8),
              "center",
              !0
            );
            H.lineWidth = 4;
            y.o(E.name, q + n / 2, x - 10 - 4, 32, w(8), "center");
          }
          c.mobile && Qa(0.8);
          var Ja = c.i - J,
            Sa = c.j - J,
            bc = B.g.P,
            cc = B.g.R,
            ua = B.g.ba - B.g.P,
            Da = B.g.fa - B.g.R,
            pa = (fa * ua * 2) / (ua + Da),
            zb = (fa * Da * 2) / (ua + Da),
            ia = B.ga;
          if (B.uc) {
            let n = (E.$.get(z) - B.g.P) / ua,
              u = (E.ea.get(z) - B.g.R) / Da,
              q =
                0 > n
                  ? 0
                  : 1 > n
                  ? Math.floor(n * ia[0].length)
                  : ia[0].length - 1,
              x = 0 > u ? 0 : 1 > u ? Math.floor(u * ia.length) : ia.length - 1;
            if ("edge" === ia[x][q]) {
              let M = q,
                ba = x,
                na = Infinity;
              for (let S = 0; S < ia.length; S++)
                for (let ea = 0; ea < ia[S].length; ea++) {
                  if ("edge" === ia[S][ea]) continue;
                  let ta = Math.abs(ea - q) + Math.abs(S - x);
                  ta < na && ((M = ea), (ba = S), (na = ta));
                }
              q = M;
              x = ba;
            }
            let K = q;
            for (; 0 < K && "edge" !== ia[x][K - 1]; ) K--;
            let G = q;
            for (; G < ia[x].length - 1 && "edge" !== ia[x][G + 1]; ) G++;
            let L = x;
            for (; 0 < L && "edge" !== ia[L - 1][q]; ) L--;
            let D = x;
            for (; D < ia.length - 1 && "edge" !== ia[D + 1][q]; ) D++;
            bc += (ua * K) / ia[0].length;
            cc += (Da * L) / ia.length;
            ua *= (G - K + 1) / ia[0].length;
            Da *= (D - L + 1) / ia.length;
            pa = (fa * ua * 2) / (ua + Da);
            zb = (fa * Da * 2) / (ua + Da);
            let O = [];
            for (let M = L; M <= D; M++) {
              let ba = [];
              for (let na = K; na <= G; na++) ba.push(ia[M][na]);
              O.push(ba);
            }
            ia = O;
          }
          var Sc = (n, u, q, x, K) => {
            H.globalAlpha = 0.5;
            H.fillStyle = qb(w(16), w(6));
            B.X ? pd(n + q / 2, u + x / 2, q / 2) : od(n, u, q, x);
            if (!B.X) {
              var G = ia[0].length,
                L = ia.length,
                D = q / G,
                O = x / L;
              for (let M = 0; M < L; M++)
                for (let ba = 0; ba < G; ba++)
                  (H.globalAlpha = ia[M][ba].startsWith("por") ? 1 : 0.5),
                    (H.fillStyle = sb(ia[M][ba])),
                    od(n + ba * D, u + M * O, D, O);
            }
            H.globalAlpha = 1;
            H.save();
            H.beginPath();
            B.X
              ? H.arc(n + q / 2, u + x / 2, q / 2, 0, 2 * Math.PI)
              : H.rect(n, u, q, x);
            H.clip();
            G = B.g.ba - B.g.P;
            L = B.g.fa - B.g.R;
            for (let M of Kb.get())
              (H.fillStyle = qb(w(M.color), w(9), 0.3)),
                (H.globalAlpha = M.alpha),
                (D = (B.g.P + M.x * G - bc) / ua),
                (O = (B.g.R + M.y * L - cc) / Da),
                2 === M.type
                  ? od(
                      n + (D - M.size / ua) * q - 0.4,
                      u + (O - M.size / ua) * x - 1,
                      ((2 * M.size) / ua) * q + 0.2,
                      ((2 * M.size) / ua) * q + 0.2
                    )
                  : 1 === M.type
                  ? pd(n + D * q, u + O * x, (M.size / ua) * q + 0.2)
                  : M.id !== Wb && pd(n + D * q, u + O * x, K);
            H.fillStyle = w(9);
            H.globalAlpha = 1;
            pd(
              n + ((E.$.get(z) - bc) / ua) * q,
              u + ((E.ea.get(z) - cc) / Da) * x,
              K
            );
            H.restore();
            H.strokeStyle = w(9);
            H.lineWidth = 3;
            B.X ? pd(n + q / 2, u + x / 2, q / 2, !0) : od(n, u, q, x, !0);
          };
          if (c.mobile) {
            Ja -= pa;
            let n =
              (c.la ? (fa / 3 + J + J) * a.get() : 0) +
              (c.oa ? (fa / 2 + J + J) * b.get() : 0);
            Sc(J, n + J, pa, zb, 4);
            c.G.Kb.L();
            let u = (x, K, G, L, D, O) => {
                c.G.Kb.Ea(x, K * R, G * R, L * R, D * R);
                H.globalAlpha = 0.5;
                H.fillStyle = w(16);
                od(K, G, L, D);
                H.globalAlpha = 0.1;
                H.fillStyle = w(9);
                od(K, G + 0.6 * D, L, 0.4 * D);
                H.globalAlpha = 1;
                F.get(x).o(
                  O,
                  K + L / 2,
                  G + 0.725 * D,
                  0.6 * D,
                  w(8),
                  "center"
                );
                H.strokeStyle = w(9);
                H.lineWidth = 3;
                od(K, G, L, D, !0);
              },
              q = (fa - 2 * J) / 3;
            3 === c.ma && u(0, J, n + 2 * J + pa, 2 * q, 2 * q, "\u2756");
            u(1, 2 * J + pa, n + J, q, q, c.Na ? "-" : "+");
            c.Na &&
              (u(
                2,
                3 * J + pa + q,
                n + J,
                6 * q,
                q,
                `\u2756 ${
                  ["Never", "Always", "Automatic", "Manual", "Double Tap"][
                    c.ma || 0
                  ]
                }`
              ),
              u(3, 2 * J + pa, n + 2 * J + q, 3.5 * q, q, "Autofire"),
              u(4, 3 * J + pa + 3.5 * q, n + 2 * J + q, 3.5 * q, q, "Reverse"),
              u(5, 2 * J + pa, n + 3 * J + 2 * q, 3.5 * q, q, "Autospin"),
              u(
                6,
                3 * J + pa + 3.5 * q,
                n + 3 * J + 2 * q,
                3.5 * q,
                q,
                "Override"
              ),
              2 === c.Na &&
                (u(7, 2 * J + pa, n + 4 * J + 3 * q, 3.5 * q, q, "Action"),
                u(
                  8,
                  3 * J + pa + 3.5 * q,
                  n + 4 * J + 3 * q,
                  3.5 * q,
                  q,
                  "???"
                )));
          } else (Ja -= pa), (Sa -= zb), Sc(Ja, Sa, pa, zb, 2);
          var dc = Sa - 10,
            Tc = ad(z);
          g.h(Tc);
          k.h(ic);
          t.h(A.Dc);
          l.h(Pb());
          c.Pa &&
            ((H.fillStyle = w(9)),
            od(Ja, Sa - 40, pa, 30),
            g.o(Ja, Sa - 40, pa, 30),
            k.o(Ja, Sa - 40, pa, 30),
            t.o(Ja, Sa - 40, pa, 30),
            l.o(Ja, Sa - 40, pa, 30),
            (dc -= 40));
          var Aa = [];
          if (!m.l.rb || c.Pa) {
            Aa.push({ line: `${Qb().toFixed(1)} ms  ${c.U.code}` });
            Aa.push({
              line: `${A.Ga} FPS / ${ec.toFixed(1)} mspt`,
              jd: 15 > A.Ga || 25 < ec,
            });
            if (c.Pa) {
              Aa.push({
                line: `Prediction: ${Tc.toFixed(2)} (${
                  ["off", "new", "old", "smoothCamera"][m.Da.$a]
                })`,
              });
              var Uc = 0,
                Vc = 0,
                Wc = 0,
                Xc = 0;
              let u = (x, K) => {
                K ? (Vc += x.length) : (Uc += x.length);
                for (let G of x)
                  (G.name || G.s) && Xc++, (Wc += G.B.Wa()), u(G.A, !0);
              };
              u(Gb, !1);
              Aa.push({ line: `Rendering: e ${Uc} t ${Vc} g ${Wc} n ${Xc}` });
              Aa.push({
                line: `Network: ${A.u.Eb}/${A.u.Wb}/${A.u.Gb} @ ${A.Qa}Hz`,
              });
              Aa.push({ line: `Bandwidth: tx ${A.Ha} rx ${A.Fa}` });
              Aa.push({
                line: `Coordinates: (${E.$.get(z).toFixed(2)}, ${E.ea
                  .get(z)
                  .toFixed(2)})`,
              });
              let q = k.ka();
              Aa.push({
                line: `Speed: ${ic.toFixed(2)} gu/s${
                  q && 0.005 <= q ? ` (${q.toFixed(2)} gu/s)` : ""
                }`,
              });
            }
            let n = wc();
            1 < n && Aa.push({ line: `${ka(n)} players` });
          }
          for (let n = 0; n < Aa.length; n++) {
            let { line: u, jd: q = !1 } = Aa[n];
            C.get(n).o(u, Ja + pa, dc - 14 * n, 11, w(q ? 2 : 8), "right");
          }
          X.o("arras.cx", Ja + pa, dc - 14 * Aa.length - 2, 16, w(8), "right");
          c.mobile && Qa(1.25);
          c.mobile && Qa(1.4);
          if (m.I.lb) {
            let n = c.i - fa - J,
              u = J + 14 + 14;
            c.mobile &&
              (u +=
                (c.la ? (fa / 3 / 1.4) * a.get() : 0) +
                (c.oa && 2 * J + Vb.length * (0.5 * fa + 14) > 1.4 * n
                  ? (fa / 2 / 1.4) * b.get()
                  : 0));
            0 < $a.data.length &&
              N.o("Leaderboard", n + fa / 2, u - 10, 19, w(8), "center");
            for (let q = 0; q < $a.data.length && (!c.mobile || 6 > q); q++) {
              let x = $a.data[q];
              rd(n, n + fa, u + 7, 11 + m.I.va, w(9));
              rd(n, n + fa, u + 7, 11, w(16));
              rd(n, n + fa * Math.min(1, x.s / $a.max), u + 7, 10.5, x.Rc);
              let K = x.name ? `${m.l.pa ? xd(x.name) : x.name} - ` : "",
                G = x.label.includes("#")
                  ? x.label
                      .replace("##", Math.round(x.s).toString())
                      .replace("#s", 1 === Math.round(x.s) ? "" : "s")
                  : `${x.label}: ${ja(x.s)}`;
              W[q].o(K + G, n + fa / 2, u + 7, 10, w(8), "center", !0);
              let L = 14 / x.position.axis;
              td(
                n - 21 - L * x.position.ca.x * Math.SQRT1_2,
                u + 7 + L * x.position.ca.x * Math.SQRT1_2,
                x.image,
                0.5,
                1,
                (2 * L) / x.image.size,
                -Math.PI / 4,
                !0
              );
              u += 18;
            }
          }
          c.mobile && Qa(1 / 1.4);
          c.oa = 0 < Vb.length && !(c.mobile && c.J) && !c.za;
          b.set(+c.oa);
          var Yc = b.get();
          c.G.upgrade.L();
          if (c.oa) {
            let n = 0.5 * fa,
              u = 0.5 * fa,
              q = 2 * Yc * J - J,
              x = J,
              K = q,
              G = 0,
              L = x;
            Mb += 0.01;
            let D = 0;
            for (let na of Vb) {
              x > L && (L = x);
              G = q;
              c.G.upgrade.Ea(D, q * R, x * R, n * R, u * R);
              H.globalAlpha = 0.5;
              H.fillStyle = tb(D);
              od(q, x, n, u);
              H.globalAlpha = 0.1;
              H.fillStyle = w(9);
              od(q, x + 0.6 * u, n, 0.4 * u);
              H.globalAlpha = 1;
              let S = Ab(na, fc),
                ea = vb[na].position,
                ta = (0.6 * n) / ea.axis;
              td(
                q + 0.5 * n - ta * ea.ca.x * Math.cos(Mb),
                x + 0.5 * u - ta * ea.ca.x * Math.sin(Mb),
                S,
                1,
                1,
                ta / S.size,
                Mb,
                !0
              );
              let ya = (c.K[`KEY_CHOOSE_${D + 1}`] || "").toLowerCase().trim();
              !c.mobile && ya
                ? (aa
                    .get(D)
                    .o(
                      S.name,
                      q + (0.9 * n) / 2,
                      x + u - 6,
                      u / 8 - 2,
                      w(8),
                      "center"
                    ),
                  Z.get(D).o(
                    `[${ya}]`,
                    q + n - 4,
                    x + u - 6,
                    u / 8 - 2,
                    w(8),
                    "right"
                  ))
                : aa
                    .get(D)
                    .o(S.name, q + n / 2, x + u - 6, u / 8 - 2, w(8), "center");
              H.strokeStyle = w(9);
              H.globalAlpha = 1;
              H.lineWidth = 3;
              od(q, x, n, u, !0);
              D++;
              0 === D % (c.mobile ? 10 : 3)
                ? ((q = K), (x += u + 14))
                : (q += Yc * (n + 14));
            }
            let O = nd("Don't Upgrade", Math.max(6, 12 + m.l.Va)) + 4,
              M = (G + n + 14 + K - 15) / 2,
              ba = L + u + 14;
            rd(M - O / 2, M + O / 2, ba + 7, 14 + m.I.va, w(9));
            rd(M - O / 2, M + O / 2, ba + 7, 14, w(18));
            T.o("Don't Upgrade", M, ba + 7, 12, w(8), "center", !0);
            c.G.za.Ea(0, (M - O / 2) * R, ba * R, O * R, 14 * R);
          } else c.G.upgrade.L(), c.G.za.L();
          if (c.mobile) {
            c.la = 0 < Ub && Tb.some((G) => G.amount < G.T) && !c.oa;
            a.set(c.la || c.J || c.W ? 1 : 0);
            let n = a.get();
            c.G.stat.L();
            let u = fa / 2,
              q = fa / 3,
              x = 2 * n * J - J,
              K = Rb();
            if (c.la) {
              for (let G = 0; G < Tb.length; G++) {
                let L = Tb[G],
                  D = L.da;
                if (0 >= D) continue;
                let O = L.amount,
                  M = w(L.color),
                  ba = L.T,
                  na = K[9 - G].split(/\s+/),
                  S = Math.floor(na.length / 2),
                  [ea, ta] =
                    1 === na.length
                      ? [na, null]
                      : [na.slice(0, S).join(" "), na.slice(S).join(" ")];
                H.globalAlpha = 0.5;
                H.fillStyle = M;
                od(x, J, u, (2 * q) / 3);
                H.globalAlpha = 0.1;
                H.fillStyle = w(9);
                od(x, J + (((2 * q) / 3) * 2) / 3, u, (2 * q) / 3 / 3);
                H.globalAlpha = 1;
                H.fillStyle = w(8);
                od(x, J + (2 * q) / 3, u, q / 3);
                H.fillStyle = M;
                od(x, J + (2 * q) / 3, (u * O) / D, q / 3);
                H.strokeStyle = w(9);
                H.lineWidth = 1;
                for (let ya = 1; ya < ba; ya++) {
                  let Ia = x + (ya / D) * u;
                  qd(Ia, J + (2 * q) / 3, Ia, J + q);
                }
                O === ba ||
                  !Ub ||
                  (D !== ba && O === D) ||
                  c.G.stat.Ea(9 - G, x * R, J * R, u * R, q * R);
                ta
                  ? (h[G].o(ta, x + u / 2, J + 0.55 * q, q / 5, w(8), "center"),
                    h[G].o(ea, x + u / 2, J + 0.3 * q, q / 5, w(8), "center"))
                  : h[G].o(ea, x + u / 2, J + 0.425 * q, q / 5, w(8), "center");
                0 < O &&
                  r[G].o(
                    O < D ? `+${O}` : "MAX",
                    x + u / 2,
                    J + 1.3 * q,
                    q / 4,
                    M,
                    "center"
                  );
                H.strokeStyle = w(9);
                H.globalAlpha = 1;
                H.lineWidth = 3;
                qd(x, J + (2 * q) / 3, x + u, J + (2 * q) / 3);
                od(x, J, u, q, !0);
                x += n * (u + 14);
              }
              1 < Ub && v.o(`x${Ub}`, x, J + 20, 20, w(8), "left");
            }
          }
          Qa(1 / R, !0);
        }
      };
    })(),
    Ad = (() => {
      var a = new U(),
        b = new U(),
        d = new U(),
        e = new U(),
        g = new U(),
        k = new U(),
        l = new U(),
        t = new U(),
        f = new U(),
        h = new U(),
        p = new U(),
        r = new U();
      let v = () => {
          let y = c.v.qc;
          var Q = y[0] + 0.5 * y[1] + 3 * y[2];
          Q =
            0 === Q
              ? "\ud83c\udf3c"
              : 4 > Q
              ? "\ud83c\udfaf"
              : 8 > Q
              ? "\ud83d\udca5"
              : 15 > Q
              ? "\ud83d\udca2"
              : 25 > Q
              ? "\ud83d\udd25"
              : 50 > Q
              ? "\ud83d\udca3"
              : 75 > Q
              ? "\ud83d\udc7a"
              : 100 > Q
              ? "\ud83c\udf36\ufe0f"
              : "\ud83d\udcaf";
          let X = [],
            C = 0;
          for (let [F, N] of [
            [" kill", ""],
            [" assist", ""],
            [" visitor", " defeated"],
            [" polygon", " destroyed"],
          ]) {
            let W = y[C++];
            0 < W && X.push(W + F + (1 === W ? "" : "s") + N);
          }
          return `${Q} ${ca(X) || "A true pacifist"}`;
        },
        P = () =>
          -1 === c.v.qa.type
            ? "\ud83d\udd2a Death information unavailable"
            : 1 === c.v.qa.type
            ? "\ud83e\udd37 Well, that was kinda dumb"
            : 2 === c.v.qa.type
            ? "\ud83d\udca3 Self-destruct completed"
            : 3 === c.v.qa.type
            ? `\ud83c\udf9b\ufe0f Surrendered control of the ${vb[Sb].name}`
            : 4 === c.v.qa.type
            ? "\ud83d\udce6 Your score has been saved"
            : 0 === c.v.qa.sources.length
            ? "\u26c8\ufe0f Vanished into thin air"
            : `\ud83d\udd2a Succumbed to ${ca(
                c.v.qa.sources.map((y) => {
                  y.name
                    ? (y = `${m.l.pa ? xd(y.name) : y.name}'s ${y.Cb}`)
                    : ((y = y.Cb),
                      (y = `${/^[aeiou]/i.test(y) ? "an" : "a"} ${y}`));
                  return y;
                })
              )}`;
      return () => {
        let y = (Math.max(c.i, (16 * c.j) / 9) / c.sb) * m.I.scale,
          Q = (V, z = !1) => {
            c.i /= V;
            c.j /= V;
            H.scale(V, V);
            z || (y *= V);
          };
        Q(y, !0);
        let X = c.hc.get();
        var C = (V, z) => {
          V = (X - V) / (z - V);
          return 0 >= V ? 0 : 1 <= V ? 1 : V * V * (3 - 2 * V);
        };
        jd(w(9), 0.1 + 0.15 * C(0, 0.5));
        let F = c.i / 2,
          N = Math.min(c.j / 2 - 60, c.j - 500) - 800 * (1 - C(0, 1)),
          W = Ab(Sb, fc);
        var aa = vb[Sb].position;
        let Z = 140 / aa.axis,
          T = F - Z * aa.ca.x * Math.SQRT1_2;
        aa = N + 25 + Z * aa.ca.x * Math.SQRT1_2;
        td(
          T - 190 - 70,
          aa - 10,
          W,
          1.5,
          1,
          (0.5 * Z) / W.size,
          -Math.PI / 4,
          !0
        );
        a.o(
          `Level ${Math.floor(jc.s.level.get()) + 1}`,
          T - 190 - 70,
          aa + 60,
          13,
          w(8),
          "center"
        );
        b.o(vb[Sb].name, T - 190 - 70, aa + 85, 19, w(8), "center");
        d.o(
          E.name ? `${E.name}'s Score:` : "Your Score:",
          F - 170,
          N - 50,
          25,
          w(8)
        );
        e.o(ka(c.v.s * (1 - (1 - C(0, 2)) ** 5)), F - 170, N + 10, 50, w(8));
        H.globalAlpha = C(1, 1.25);
        g.o(`\u231a Survived for ${ha()}`, F - 170, N + 50, 15, w(8));
        H.globalAlpha = C(1.25, 1.5);
        k.o(v(), F - 170, N + 75, 15, w(8));
        H.globalAlpha = C(1.5, 1.75);
        l.o(
          -1 === c.v.sa.type
            ? "\u2753 Kill information unavailable"
            : 1 === c.v.sa.type
            ? `\ud83c\udf6a ${Math.round(
                100 * c.v.sa.ratio
              )}% of your score came from polygons`
            : 2 === c.v.sa.type
            ? `\ud83d\udd2a ${Math.round(
                100 * c.v.sa.ratio
              )}% of your score came from ${
                c.v.sa.name ? `the player ${c.v.sa.name}` : "an unnamed player"
              }`
            : 1e5 < c.v.s
            ? c.mc
              ? "\ud83d\udd75\ufe0f lol you died"
              : "\ud83d\udc80 lol you died"
            : 2e4 < c.v.s
            ? "\u2753 Kill players and polygons to get more score"
            : `\u2753 Press ${c.K.KEY_LEVEL_UP} to get to level 45`,
          F - 170,
          N + 100,
          15,
          w(8)
        );
        H.globalAlpha = C(1.75, 2);
        t.o(P(), F - 170, N + 125, 15, w(8));
        H.globalAlpha = C(2, 2.25);
        f.o(
          `${0.75 <= c.v.cb ? "\ud83d\udccb" : "\u2620\ufe0f"} ${
            null == c.v.cb
              ? "Server activity information unavailable"
              : `The server was alive for ${Math.round(
                  100 * c.v.cb
                )}% of the run`
          }`,
          F - 170,
          N + 150,
          15,
          w(8)
        );
        H.globalAlpha = C(3, 3.25);
        C = Math.ceil((c.wb - Date.now()) / 1e3);
        h.o(
          0 < C
            ? `(you may respawn in ${C} second${1 === C ? "" : "s"})`
            : "joysticks" === Ba.Vb
            ? "(tap to respawn)"
            : "(press enter to respawn)",
          F,
          N + 225,
          15,
          w(8),
          "center"
        );
        H.globalAlpha = 1;
        c.ia
          ? (c.G.ia.Ea(0, (F - 60) * y, (N + 170) * y, 120 * y, 32 * y),
            (H.globalAlpha = 0.5),
            (H.fillStyle = w(16)),
            od(F - 60, N + 170, 120, 32),
            (H.globalAlpha = 0.1),
            (H.fillStyle = w(9)),
            od(F - 60, N + 189.2, 120, 12.8),
            (H.globalAlpha = 1),
            p.o(
              c.ia.fc ? "Copied!" : "Copy Code",
              F,
              N + 194,
              16,
              w(8),
              "center"
            ),
            (H.strokeStyle = w(9)),
            (H.lineWidth = 3),
            od(F - 60, N + 170, 120, 32, !0))
          : c.G.ia.L();
        c.v.Fb &&
          r.o(
            new Date(1e3 * c.v.Fb).toISOString().replace(".000", ""),
            F,
            Math.max(40, N - 160),
            10,
            w(8),
            "center"
          );
        Q(1 / y, !0);
      };
    })();
  window.addEventListener("beforeunload", (a) => {
    !c.Aa || c.J || c.W || (a.preventDefault(), (a.returnValue = ""));
  });
  const Cd = (() => {
      var a = new U(),
        b = new U(),
        d = [
          [
            "Tip: You can view and edit your keybinds in the options menu.",
            "Tip: You can play on mobile by just going to arras.io on your phone!",
          ],
          [
            "Tip: You can have the shield and health bar be separated by going to the options menu.",
            "Tip: If arras.io is having a low frame rate, you can try enabling low graphics in the options menu.",
            "Tip: You can make traps rounded with the classic trap setting in the options menu.",
            "Tip: You can create your own private server with the template in the link on the options menu.",
            "Tip: You can create your own theme with the custom theme maker in the link on the options menu.",
          ],
          [
            "Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.",
            "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
            "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban.",
          ],
        ];
      d = d[Math.floor(Math.random() * d.length)];
      let e = d[Math.floor(Math.random() * d.length)];
      return () => {
        let g = (Math.max(c.i, (16 * c.j) / 9) / c.sb) * m.I.scale,
          k = (l, t = !1) => {
            c.i /= l;
            c.j /= l;
            H.scale(l, l);
            t || (g *= l);
          };
        k(g, !0);
        jd(w(18), 0.5);
        a.o("Connecting...", c.i / 2, c.j / 2, 32, w(8), "center");
        b.o(c.message, c.i / 2, c.j / 2 + 30, 16, w(1), "center");
        b.o(e, c.i / 2, c.j / 2 + 75, 16, w(8), "center");
        k(1 / g, !0);
      };
    })(),
    Dd = (() => {
      var a = new U(),
        b = new U(),
        d = new U();
      return () => {
        let e = (Math.max(c.i, (16 * c.j) / 9) / c.sb) * m.I.scale,
          g = (k, l = !1) => {
            c.i /= k;
            c.j /= k;
            H.scale(k, k);
            l || (e *= k);
          };
        g(e, !0);
        jd(qb(w(12), w(19), 0.3), 0.25);
        a.o(
          "\ud83d\udc80 Disconnected \ud83d\udc80",
          c.i / 2,
          c.j / 2,
          32,
          w(8),
          "center"
        );
        b.o(c.message, c.i / 2, c.j / 2 + 30, 16, w(2), "center");
        if (!c.J && c.ic) {
          let k = c.i / 2,
            l = Math.min(c.j / 2 - 60, c.j - 500);
          d.o(
            new Date(1e3 * c.ic).toISOString().replace(".000", ""),
            k,
            Math.max(40, l - 160),
            10,
            w(8),
            "center"
          );
        }
        g(1 / e, !0);
      };
    })();
  let id = (a) => {
    bb(id);
    H.lineCap = "round";
    H.lineJoin = m.l.Ma ? "miter" : "round";
    c.ya &&
      !c.W &&
      1e3 < a - A.rc &&
      ((A.rc = a),
      (A.Ga = A.current.Ga),
      (A.Qa = A.current.Qa),
      (A.Ha = A.current.Ha),
      (A.Fa = A.current.Fa),
      (A.current.Ga = 0),
      (A.current.Qa = 0),
      (A.current.Ha = 0),
      (A.current.Fa = 0));
    c.ya && vb ? zd(a) : c.W || Cd();
    c.J ? Ad() : c.G.ia.L();
    c.W && Dd();
    if (c.J || c.W) w(18), c.J && w(9), c.W && (w(12), w(19));
  };
  window.$createProfile = (() => {
    var a = new U();
    return (b, d = -1, e = 200, g = -Math.PI / 4) => {
      let k = H.canvas.width,
        l = H.canvas.height,
        t = (H.canvas.width = e);
      e = H.canvas.height = e;
      -1 === d
        ? H.clearRect(0, 0, t, e)
        : ((H.fillStyle = w(18)),
          H.fillRect(0, 0, t, e),
          (H.globalAlpha = 0.5),
          (H.fillStyle = tb(d)),
          od(0, 0, t, e),
          (H.globalAlpha = 0.1),
          (H.fillStyle = w(9)),
          od(0, 0.6 * e, t, 0.4 * e),
          (H.globalAlpha = 1));
      let f = Ab(b, fc);
      b = vb[b].position;
      let h = (0.6 * t) / b.axis;
      td(
        0.5 * t - h * b.ca.x * Math.cos(g),
        0.5 * e - h * b.ca.x * Math.sin(g),
        f,
        1,
        1,
        h / f.size,
        g,
        !0
      );
      -1 !== d &&
        (a.o(f.name, (0.9 * t) / 2, e - 6, e / 8 - 2, w(8), "center"),
        (H.strokeStyle = w(9)),
        (H.globalAlpha = 1),
        (H.lineWidth = 3),
        od(0, 0, t, e, !0));
      d = H.canvas.toDataURL();
      H.canvas.width = k;
      H.canvas.height = l;
      return d;
    };
  })();
  let Ed = new Date(),
    Fd = c.mobile
      ? 0
      : Math.max(
          0,
          1 -
            Math.abs(
              Ed.getTime() -
                new Date(Ed.getFullYear() - (6 > Ed.getMonth() ? 1 : 0), 11, 25)
            ) /
              20736e5
        );
  if (Fd) {
    let a = document.createElement("canvas");
    a.style.position = "absolute";
    a.style.top = "0";
    document.body.insertBefore(a, document.body.firstChild);
    let b = a.getContext("2d"),
      d = [],
      e = () => {
        a.width !== window.innerWidth && (a.width = window.innerWidth);
        a.height !== window.innerHeight && (a.height = window.innerHeight);
        b.clearRect(0, 0, a.width, a.height);
        b.fillStyle = "#ffffff";
        for (let g of d) {
          g.x += 5 / g.r + Math.random();
          g.y += 12.5 / g.r + Math.random();
          let k = 2 * Math.min(0.4, 0.9 - g.y / a.height);
          0 < k
            ? ((b.globalAlpha = k),
              b.beginPath(),
              b.arc(g.x, g.y, g.r, 0, 2 * Math.PI),
              b.fill())
            : (g.Ja = !0);
        }
        0.001 * a.width * Fd > Math.random() &&
          d.push({
            x: a.width * (1.5 * Math.random() - 0.5),
            y: -50 - 100 * Math.random(),
            r: 2 + Math.random() * Math.random() * 4,
          });
        c.ya ? a.remove() : bb(e);
      };
    setInterval(() => {
      d = d.filter((g) => !g.Ja);
    }, 2e3);
    e();
  }
  let Gd = "en-US" === navigator.language && -7 <= c.na && -4 >= c.na,
    Hd = 6 === Ed.getMonth() && 4 === Ed.getDate(),
    Id =
      (11 === Ed.getMonth() && 31 === Ed.getDate()) ||
      (0 === Ed.getMonth() && 3 >= Ed.getDate());
  if (!c.mobile && ((Hd && Gd) || Id)) {
    let a = document.createElement("canvas");
    a.style.position = "absolute";
    a.style.top = "0";
    document.body.insertBefore(a, document.body.firstChild);
    let b = a.getContext("2d"),
      d = () => {
        let k =
          "164,14,14 230,80,0 230,119,0 47,127,51 23,78,166 123,31,163".split(
            " "
          );
        return k[Math.floor(Math.random() * k.length)];
      },
      e = [],
      g = () => {
        if (a.width !== window.innerWidth || a.height !== window.innerHeight)
          (a.width = window.innerWidth),
            (a.height = window.innerHeight),
            (e = []),
            b.clearRect(0, 0, a.width, a.height),
            (b.fillStyle = "rgba(255,255,255,0.01)"),
            b.fillRect(0, 0, a.width, a.height),
            (b.lineWidth = 2.5),
            (b.lineCap = "round");
        b.globalCompositeOperation = "destination-out";
        b.fillStyle = "rgba(0,0,0,0.15)";
        b.fillRect(0, 0, a.width, a.height);
        b.globalCompositeOperation = "lighter";
        for (var k of e) {
          var l = k.x,
            t = k.y;
          k.H += 0.2;
          k.x += k.M;
          k.y += k.H;
          k.H *= 0.99;
          k.M *= 0.99;
          k.time--;
          var f = 0 < k.time ? (k.Oa ? 1 : 10 <= k.time ? 1 : k.time / 10) : 0;
          if (0 < f)
            (b.strokeStyle = `rgba(${k.color},${f})`),
              b.beginPath(),
              b.moveTo(l, t),
              b.lineTo(k.x, k.y),
              b.stroke();
          else {
            if (k.Oa && !k.Ja) {
              l = Math.floor(5 * Math.random()) + 30;
              t = 0.5 * Math.random() + 3;
              f = 25 + 5 * Math.random();
              for (var h = 0; 2 > h; h++) {
                let p = d();
                for (let r = 0; r < l; r++) {
                  let v = ((r + Math.random()) / l) * Math.PI * 2,
                    P = t + 0.5 * Math.random();
                  e.push({
                    color: p,
                    x: k.x,
                    y: k.y,
                    M: Math.cos(v) * P,
                    H: -0.8 + Math.sin(v) * P,
                    time: f + 2 * Math.random(),
                    Oa: !1,
                    Ja: !1,
                  });
                }
              }
            }
            k.Ja = !0;
          }
        }
        3e-5 * a.width > Math.random() &&
          ((k = a.width * Math.random()),
          (l = a.height - 10),
          (t = 4 * Math.random() - 2),
          (f = 5 * Math.random() - 15),
          (h = 30 + 10 * Math.random()),
          e.push({
            color: d(),
            x: k,
            y: l,
            M: t,
            H: f,
            time: h,
            Oa: !0,
            Ja: !1,
          }));
        c.ya ? a.remove() : bb(g);
      };
    setInterval(() => {
      e = e.filter((k) => !k.Ja);
    }, 2e3);
    g();
  }
})();
