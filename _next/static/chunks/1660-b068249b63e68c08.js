"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1660],
  {
    96992: function (e, t, n) {
      n.d(t, {
        PU: function () {
          return g;
        },
        ht: function () {
          return C;
        },
        rD: function () {
          return f;
        },
      });
      var i = n(39977),
        r = n(67294),
        l = n(5808),
        o = n(99548),
        c = n(49055),
        s = n(59429),
        x = n(80795),
        d = n(77985),
        h = n(74196),
        a = n(98677),
        u = n(71891),
        p = n(10807),
        m = (e) => {
          let { newRates: t } = e,
            { newToAmount: n, oldToAmount: r, toToken: o } = t,
            c = (0, p.U8)(o.address, o.chainId);
          return (0, i.BX)(l.kC, {
            sx: {
              width: "100%",
              alignItems: "center",
              flexDirection: "column",
              mt: "20px",
            },
            children: [
              (0, i.tZ)(l.kC, {
                sx: {
                  p: "8px 4px 4px 4px",
                  borderRadius: "8px",
                  width: "100%",
                  justifyContent: "center",
                },
                children: (0, i.BX)(l.kC, {
                  sx: { width: "210px" },
                  children: [
                    (0, i.tZ)(a.Z, { size: 30, currency: c }),
                    (0, i.BX)(l.kC, {
                      sx: { flexDirection: "column", ml: "10px" },
                      children: [
                        (0, i.tZ)(l.xv, {
                          sx: {
                            fontSize: "12px",
                            fontWeight: "300",
                            lineHeight: "14px",
                          },
                          children: "Old Amount:",
                        }),
                        (0, i.BX)(l.xv, {
                          sx: { fontSize: "16px", fontWeight: "700" },
                          children: [
                            (0, u.ky)(r, o.decimals, 8),
                            " ",
                            o.symbol,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.tZ)(l.kC, {
                sx: { width: "15px", height: "15px", ml: "19px" },
                children: (0, i.tZ)(l.ny, { icon: "arrow", direction: "down" }),
              }),
              (0, i.tZ)(l.kC, {
                sx: {
                  p: "8px 4px 4px 4px",
                  borderRadius: "8px",
                  width: "100%",
                  justifyContent: "center",
                },
                children: (0, i.BX)(l.kC, {
                  sx: { width: "210px" },
                  children: [
                    (0, i.tZ)(a.Z, { size: 30, currency: c }),
                    (0, i.BX)(l.kC, {
                      sx: { flexDirection: "column", ml: "10px" },
                      children: [
                        (0, i.tZ)(l.xv, {
                          sx: {
                            fontSize: "12px",
                            fontWeight: "300",
                            lineHeight: "14px",
                          },
                          children: "New Amount:",
                        }),
                        (0, i.BX)(l.xv, {
                          sx: { fontSize: "16px", fontWeight: "700" },
                          children: [
                            (0, u.ky)(n, o.decimals, 8),
                            " ",
                            o.symbol,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      function g(e) {
        let { pendingText: t } = e,
          { t: n } = (0, c.$G)();
        return (0, i.BX)(l.kC, {
          sx: {
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            margin: "15px 0px",
            borderRadius: "10px",
          },
          children: [
            (0, i.tZ)(l.kC, {
              sx: { alignItems: "center", justifyContent: "center" },
              children: (0, i.tZ)(l.$j, { size: 200 }),
            }),
            (0, i.BX)(l.kC, {
              sx: {
                flexDirection: "column",
                alignItems: "center",
                background: "white3",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "10px",
              },
              children: [
                (0, i.tZ)(l.xv, {
                  size: "20px",
                  weight: 500,
                  margin: "5px 0px",
                  sx: { textAlign: "center" },
                  children: n("Waiting For Confirmation"),
                }),
                (0, i.tZ)(l.kC, {
                  margin: "10px 0px",
                  children: (0, i.tZ)(l.xv, {
                    weight: 700,
                    sx: { textAlign: "center" },
                    children: t,
                  }),
                }),
                (0, i.tZ)(l.xv, {
                  size: "14px",
                  weight: 400,
                  children: n("Confirm this transaction in your wallet"),
                }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { onDismiss: t, hash: n, currencyToAdd: a } = e,
          { connector: u, chainId: p } = (0, d.useWeb3React)(),
          m = null == a ? void 0 : a.wrapped,
          { t: g } = (0, c.$G)(),
          f = (0, h.ZP)(m)[0],
          C = (0, r.useCallback)(() => {
            (null == m ? void 0 : m.symbol) &&
              u.watchAsset &&
              u.watchAsset({
                address: m.address,
                symbol: m.symbol,
                decimals: m.decimals,
                image: f,
              });
          }, [u, f, m]);
        return (0, i.tZ)(l.kC, {
          sx: { width: "100%", alignItems: "center", justifyContent: "center" },
          children: (0, i.BX)(l.kC, {
            sx: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
            children: [
              (0, i.tZ)(o.Z, { strokeWidth: 1, size: 97, color: "#6560C5" }),
              (0, i.BX)(l.kC, {
                sx: {
                  flexDirection: "column",
                  alignItems: "center",
                  mt: "20px",
                },
                children: [
                  (0, i.tZ)(l.xv, {
                    size: "20px",
                    children: g("Transaction Submitted"),
                  }),
                  p &&
                    n &&
                    (0, i.BX)(x.rU, {
                      color: "text",
                      href: (0, s.EB)(n, "transaction", p),
                      target: "_blank",
                      sx: { display: "flex", fontWeight: 500, mt: "15px" },
                      children: [
                        g("View on explorer"),
                        (0, i.tZ)(l.kC, {
                          sx: { ml: "7px" },
                          children: (0, i.tZ)(l.ny, {
                            icon: "external",
                            color: "text",
                            width: 13,
                          }),
                        }),
                      ],
                    }),
                  a &&
                    u.watchAsset &&
                    (0, i.BX)(l.zx, {
                      variant: "tertiary",
                      mt: "20px",
                      onClick: C,
                      children: [
                        (0, i.BX)(l.kC, {
                          children: [
                            (0, i.tZ)(l.xv, {
                              children: g("Add %symbol% to Metamask", {
                                symbol: a.symbol || "",
                              }),
                            }),
                            (0, i.tZ)(l.ny, {
                              icon: "metamask",
                              width: "16px",
                            }),
                          ],
                        }),
                        " ",
                      ],
                    }),
                  (0, i.tZ)(l.zx, {
                    fullWidth: !0,
                    onClick: t,
                    style: { height: "50px", fontSize: "20px" },
                    mt: "20px",
                    children: g("Close"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function C(e) {
        let { message: t, onDismiss: n, newRates: r, confirmNewRates: o } = e,
          { t: s } = (0, c.$G)(),
          x = null == t ? void 0 : t.includes("Exchange rate has changed!");
        return (0, i.BX)(l.kC, {
          sx: {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          },
          children: [
            x && r
              ? (0, i.tZ)(m, { newRates: r })
              : (0, i.BX)(l.kC, {
                  sx: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    pt: "20px",
                  },
                  children: [
                    (0, i.tZ)(l.ny, { icon: "error", color: "error" }),
                    (0, i.tZ)(l.xv, {
                      color: "error",
                      sx: {
                        textAlign: "center",
                        width: "80%",
                        marginTop: "10px",
                        fontSize: "12px",
                        fontWeight: 500,
                        overflow: "hidden",
                      },
                      children: t,
                    }),
                  ],
                }),
            (0, i.tZ)(l.kC, {
              mt: "20px",
              children: (0, i.tZ)(l.zx, {
                onClick: () => (x ? o && o(!0) : n()),
                children: s(x ? "Confirm new rate" : "Dismiss"),
              }),
            }),
          ],
        });
      }
    },
    44156: function (e, t, n) {
      var i,
        r,
        l = n(39977),
        o = n(67294),
        c = n(5808),
        s = n(19101),
        x = n(3366),
        d = n(66325),
        h = n(1113);
      ((i || (i = {})).InvalidInput = "InvalidInput"),
        ((r || (r = {})).InvalidInput = "InvalidInput"),
        (t.Z = () => {
          let [e, t] = (0, s.hT)(),
            [n, i] = (0, s.A6)(),
            [a, u] = (0, o.useState)(""),
            [p, m] = (0, o.useState)(!1),
            [g, f] = (0, o.useState)(""),
            [C, k] = (0, o.useState)(!1),
            Z = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
            w = (e) => {
              if (
                "" === e ||
                Z.test(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
              ) {
                u(e);
                try {
                  let n = Number.parseInt(
                    (100 * Number.parseFloat(e)).toString()
                  );
                  !Number.isNaN(n) &&
                    n < 5e3 &&
                    (new h.Percent(n, 1e4), t(new h.Percent(n, 1e4)));
                } catch (e) {
                  console.error(e);
                }
              }
            };
          return (0, l.tZ)(c.u_, {
            title: "Zap Settings",
            children: (0, l.tZ)(c.kC, {
              sx: { maxWidth: "100%", width: "380px", flexDirection: "column" },
              children: (0, l.BX)(c.kC, {
                sx: { width: "100%", flexDirection: "column" },
                children: [
                  (0, l.BX)(c.kC, {
                    sx: { flexDirection: "column", mb: "10px" },
                    children: [
                      (0, l.tZ)(c.xv, {
                        size: "18px",
                        margin: "10px 0px",
                        children: "Slippage Tolerance",
                      }),
                      (0, l.BX)(c.kC, {
                        sx: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          (0, l.tZ)(c.kC, {
                            sx: {
                              height: "35px",
                              width: "55px",
                              borderRadius: "10px",
                              background:
                                "0.10" === e.toFixed(2)
                                  ? "primaryButton"
                                  : "white3",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            },
                            onClick: () => {
                              u(""), w("0.1");
                            },
                            children: (0, l.tZ)(c.xv, { children: " 0.1% " }),
                          }),
                          (0, l.tZ)(c.kC, {
                            sx: {
                              height: "35px",
                              width: "55px",
                              borderRadius: "10px",
                              background:
                                "0.50" === e.toFixed(2)
                                  ? "primaryButton"
                                  : "white3",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            },
                            onClick: () => {
                              u(""), w("0.5");
                            },
                            children: (0, l.tZ)(c.xv, { children: " 0.5% " }),
                          }),
                          (0, l.tZ)(c.kC, {
                            sx: {
                              height: "35px",
                              width: "55px",
                              borderRadius: "10px",
                              background:
                                "1.00" === e.toFixed(2)
                                  ? "primaryButton"
                                  : "white3",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            },
                            onClick: () => {
                              u(""), w("1.0");
                            },
                            children: (0, l.tZ)(c.xv, { children: " 1.0% " }),
                          }),
                          (0, l.BX)(c.kC, {
                            sx: { width: "45%", position: "relative" },
                            children: [
                              (0, l.tZ)(x.Z, {
                                sx: {
                                  fontWeight: 700,
                                  width: "100%",
                                  height: "35px",
                                  background: "white3",
                                  border: "0px",
                                  ":focus": { outline: "none" },
                                },
                                value: a.length > 0 ? a : e.toFixed(2),
                                onChange: (e) => w(e.target.value),
                                onBlur: () => {
                                  u(""), m(!1);
                                },
                                color: p ? "error" : "",
                              }),
                              (0, l.tZ)(c.kC, {
                                sx: {
                                  position: "absolute",
                                  right: 5,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                },
                                children: (0, l.tZ)(c.xv, {
                                  weight: 700,
                                  children: "%",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.tZ)(c.kC, {
                    children: (0, l.BX)(c.kC, {
                      sx: {
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        margin: "5px 0px",
                      },
                      children: [
                        (0, l.tZ)(c.xv, { children: " tx deadline (mins) " }),
                        (0, l.tZ)(x.Z, {
                          sx: {
                            fontWeight: 700,
                            width: "45%",
                            height: "30px",
                            background: "white3",
                            border: "0px",
                            ":focus": { outline: "none" },
                          },
                          placeholder: (d.PY / 60).toString(),
                          value:
                            g.length > 0
                              ? g
                              : n === d.PY
                              ? ""
                              : (n / 60).toString(),
                          onChange: (e) =>
                            (function (e) {
                              if ((f(e), k(!1), 0 === e.length)) i(d.PY);
                              else
                                try {
                                  let t = Math.floor(60 * Number.parseFloat(e));
                                  !Number.isInteger(t) || t < 60 || t > 259200
                                    ? k(r.InvalidInput)
                                    : i(t);
                                } catch (e) {
                                  console.error(e), k(r.InvalidInput);
                                }
                            })(e.target.value),
                          onBlur: () => {
                            f(""), k(!1);
                          },
                          color: C ? "error" : "",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    61928: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(77985),
        r = n(67294),
        l = n(31525),
        o = n(2593),
        c = n(58671),
        s = n(80535);
      function x() {
        let { chainId: e } = (0, i.useWeb3React)(),
          t = (0, l.C)((e) => e.user.userDeadline),
          n = (function () {
            var e, t, n;
            let i = (0, s.h$)(),
              l =
                null === (n = (0, c.Wk)(i, "getCurrentBlockTimestamp")) ||
                void 0 === n
                  ? void 0
                  : null === (t = n.result) || void 0 === t
                  ? void 0
                  : null === (e = t[0]) || void 0 === e
                  ? void 0
                  : e.toString();
            return (0, r.useMemo)(
              () => ("string" == typeof l ? o.O$.from(l) : void 0),
              [l]
            );
          })();
        return (0, r.useMemo)(() => {
          if (n && t) return n.add(t);
        }, [n, t]);
      }
    },
  },
]);
