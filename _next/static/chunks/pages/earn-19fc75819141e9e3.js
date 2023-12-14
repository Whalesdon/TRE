(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6391],
  {
    4695: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/earn",
        function () {
          return i(3021);
        },
      ]);
    },
    3021: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return X;
          },
        });
      var t = i(39977),
        l = i(98745),
        r = i(29471),
        o = i(67294),
        d = i(5808),
        s = i(77985),
        a = i(12144),
        c = i(1113),
        u = i(49055),
        p = i(97818),
        h = i(6781),
        x = (e) => {
          let { product: n } = e,
            { chainId: i } = (0, s.useWeb3React)(),
            { t: l } = (0, u.$G)(),
            r = (0, p.Z)();
          return (0, t.tZ)(d.kC, {
            sx: {
              width: "100%",
              background: "white2",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            },
            children: (0, t.BX)(d.kC, {
              sx: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "50px 20px",
              },
              children: [
                (0, t.BX)(d.xv, {
                  size: "25px",
                  sx: { mb: "15px", textAlign: "center" },
                  children: ["You're", " connected to: ", h.zl[i]],
                }),
                (0, t.BX)(d.xv, {
                  sx: { margin: "10px 0px 5px 0px", textAlign: "center" },
                  children: [
                    l("%product% are also available on other chains. ", {
                      product: a.D7[n],
                    }),
                    1 === a.rg[n].length
                      ? a.rg[n].map((e) => "".concat(h.zl[e], ". "))
                      : a.rg[n].map((e) =>
                          a.rg[n].indexOf(e) === a.rg[n].length - 1
                            ? "".concat(h.zl[e], ". ")
                            : "".concat(h.zl[e], ", ")
                        ),
                    l("Switch to: "),
                  ],
                }),
                (0, t.tZ)(d.kC, {
                  sx: {
                    mt: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: a.rg[n].map((e) =>
                    e === i
                      ? ""
                      : (0, t.BX)(
                          d.kC,
                          {
                            sx: {
                              padding: "5px 10px",
                              background: "white3",
                              alignItems: "center",
                              borderRadius: "10px",
                              cursor: "pointer",
                              margin: "5px 5px",
                            },
                            onClick: () => r(e),
                            children: [
                              (0, t.tZ)(d.ny, {
                                icon: e
                                  ? h.CU[e]
                                  : h.CU[c.SupportedChainId.BSC],
                                width: "22px",
                              }),
                              (0, t.tZ)(d.xv, {
                                ml: "10px",
                                children: h.zl[e],
                              }),
                            ],
                          },
                          e
                        )
                  ),
                }),
                (0, t.tZ)(d.xv, {
                  mt: "10px",
                  children: "More Opportunities on",
                }),
                (0, t.BX)(d.kC, {
                  sx: {
                    mt: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: [
                    (0, t.BX)(d.kC, {
                      sx: {
                        padding: "5px 10px",
                        background: "white3",
                        alignItems: "center",
                        borderRadius: "10px",
                        cursor: "pointer",
                        margin: "5px 5px",
                      },
                      onClick: () =>
                        window.open("https://quickswap.exchange/#/farm/"),
                      children: [
                        (0, t.tZ)("img", {
                          src: "https://s2.coinmarketcap.com/static/img/coins/64x64/19966.png",
                          alt: "QuickSwap",
                          width: 22,
                          height: 22,
                          style: { borderRadius: "".concat(22, "px") },
                        }),
                        (0, t.tZ)(d.xv, { ml: "10px", children: "QuickSwap" }),
                      ],
                    }),
                    (0, t.BX)(d.kC, {
                      sx: {
                        padding: "5px 10px",
                        background: "white3",
                        alignItems: "center",
                        borderRadius: "10px",
                        cursor: "pointer",
                        margin: "5px 5px",
                      },
                      onClick: () => window.open("https://thena.fi/vaults"),
                      children: [
                        (0, t.tZ)("img", {
                          src: "https://s2.coinmarketcap.com/static/img/coins/64x64/23335.png",
                          alt: "QuickSwap",
                          width: 22,
                          height: 22,
                          style: { borderRadius: "".concat(22, "px") },
                        }),
                        (0, t.tZ)(d.xv, { ml: "10px", children: "Thena" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        f = i(62481),
        m = i(52166),
        v = i(75472),
        g = i.n(v),
        k = i(6837),
        C = i(12199),
        w = i(42755),
        Z = i(69264),
        y = i(11163),
        b = i(66125),
        E = i(31257),
        S = i(32873),
        T = i(48184),
        _ = i(71151),
        A = i(43174),
        R = i.n(A),
        B = i(7538),
        I = i(87962),
        N = i(37652),
        F = () => {
          var e;
          (0, Z.Bb)();
          let { push: n } = (0, y.useRouter)(),
            { account: i, chainId: l } = (0, s.useWeb3React)(),
            c = (0, C.ZP)(),
            u = (0, r.E2)(null != i ? i : ""),
            [p, h] = (0, o.useState)(!1),
            [v, A] = (0, o.useState)(E.ph),
            [F, X] = (0, o.useState)("all"),
            Q = (0, o.useRef)(null),
            [M, U] = (0, o.useState)(""),
            L = (0, k.Z)(),
            { search: j } = L ? window.location : { search: "" },
            z = new URLSearchParams(j),
            H = (null == z ? void 0 : z.get("pid"))
              ? null == z
                ? void 0
                : z.get("pid")
              : "",
            O = (null == z ? void 0 : z.get("jid"))
              ? null == z
                ? void 0
                : z.get("jid")
              : "",
            { farmOrderings: W } = (0, r.Jt)(l),
            q = (() => {
              let e = [];
              return (
                null == u ||
                  u.forEach((n) => {
                    if (
                      ((n.farmType === m.Q.MASTER_CHEF_V1 ||
                        n.farmType === m.Q.MASTER_CHEF_V2) &&
                        0 !== n.pid &&
                        "0X" !== n.multiplier &&
                        e.push(n),
                      n.farmType === m.Q.DUAL_FARM &&
                        "0X" !== n.multiplier &&
                        e.push(n),
                      n.farmType === m.Q.JUNLGE_FARM)
                    ) {
                      var i;
                      (null == n ? void 0 : n.endBlock) && c
                        ? (null !== (i = null == n ? void 0 : n.endBlock) &&
                          void 0 !== i
                            ? i
                            : 0) > (null != c ? c : 0) && e.push(n)
                        : e.push(n);
                    }
                  }),
                e
              );
            })();
          (0, o.useEffect)(() => {
            if (!p) {
              let e = new IntersectionObserver(
                (e) => {
                  let [n] = e;
                  n.isIntersecting && A((e) => e + E.ph);
                },
                { rootMargin: "0px", threshold: 1 }
              );
              e.observe(null == Q ? void 0 : Q.current), h(!0);
            }
          }, [p]),
            (0, w.C0)(
              null == q
                ? void 0
                : q.map((e) => ({
                    currencyIdA: null == e ? void 0 : e.tokenAddress,
                    currencyIdB: null == e ? void 0 : e.quoteTokenAddress,
                  }))
            );
          let D = (0, I.Oh)(null != i ? i : ""),
            G =
              null == D
                ? void 0
                : D.filter(
                    (e) =>
                      !e.forAdmins &&
                      (null == e ? void 0 : e.poolCategory) !== B.jh.JUNGLE &&
                      999 !== e.sousId &&
                      e.contractAddress[l]
                  ),
            J =
              null == G
                ? void 0
                : G.map((e) => {
                    var n;
                    return {
                      ...e,
                      isFinished:
                        0 !== e.sousId &&
                        999 !== e.sousId &&
                        237 !== e.sousId &&
                        (e.isFinished
                          ? e.isFinished
                          : null != e &&
                            !!e.endBlock &&
                            (null != c ? c : 0) >
                              parseInt(
                                null !==
                                  (n = null == e ? void 0 : e.endBlock) &&
                                  void 0 !== n
                                  ? n
                                  : "0"
                              )),
                    };
                  }),
            [, P] = R()(J, (e) => e.isFinished),
            { poolTags: V, jungleTags: Y } = (0, N.e0)(l);
          return (
            (0, N.Sq)(),
            (0, t.BX)(d.kC, {
              sx: S.W.farmContainer,
              children: [
                (0, t.BX)(d.kC, {
                  sx: { width: "100%", flexDirection: "column" },
                  children: [
                    (0, t.tZ)(d.kC, {
                      sx: { justifyContent: "flex-end" },
                      children: (0, t.BX)(d.xv, {
                        sx: {
                          display: "flex",
                          cursor: "pointer",
                          fontWeight: 300,
                          fontSize: "12px",
                        },
                        onClick: () => n("?modal=tutorial"),
                        children: [
                          "Tutorial",
                          (0, t.tZ)(d.kC, {
                            sx: { ml: "5px" },
                            children: (0, t.tZ)(d.ny, {
                              icon: "quiz",
                              width: 13,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.tZ)(b.Z, {
                      title: "Earn",
                      subTitle: (0, t.tZ)(t.HY, {
                        children:
                          "Deposit tokens to earn ABOND or future veABOND. Earning opportunities are available on BNB Chain, Polygon, and Ethereum. Make sure to check additional opportunities on QuickSwap and Thena!",
                      }),
                      hideNumbers: !0,
                    }),
                  ],
                }),
                l
                  ? a.rg[a.Xo.EARN].includes(l)
                    ? (0, t.BX)(t.HY, {
                        children: [
                          (0, t.tZ)(T.Z, {
                            farms:
                              null !==
                                (e = (() => {
                                  var e, n, i, t, l;
                                  let r = q;
                                  if (H) {
                                    let e =
                                      (null == q
                                        ? void 0
                                        : q.find(
                                            (e) =>
                                              e.pid === parseInt(H) &&
                                              e.farmType === m.Q.MASTER_CHEF_V2
                                          )) !== void 0;
                                    if (e) {
                                      let e =
                                        null == q
                                          ? void 0
                                          : q.find(
                                              (e) =>
                                                e.pid === parseInt(H) &&
                                                e.farmType ===
                                                  m.Q.MASTER_CHEF_V2
                                            );
                                      e &&
                                        (r = [
                                          e,
                                          ...(null == q
                                            ? void 0
                                            : q.filter(
                                                (e) =>
                                                  !(
                                                    e.pid === parseInt(H) &&
                                                    e.farmType ===
                                                      m.Q.MASTER_CHEF_V2
                                                  )
                                              )),
                                        ]);
                                    }
                                  }
                                  if (O) {
                                    let e =
                                      (null == q
                                        ? void 0
                                        : q.find(
                                            (e) =>
                                              e.pid === parseInt(O) &&
                                              e.farmType === m.Q.JUNLGE_FARM
                                          )) !== void 0;
                                    if (e) {
                                      let e =
                                        null == q
                                          ? void 0
                                          : q.find(
                                              (e) =>
                                                e.pid === parseInt(O) &&
                                                e.farmType === m.Q.JUNLGE_FARM
                                            );
                                      e &&
                                        (r = [
                                          e,
                                          ...(null == q
                                            ? void 0
                                            : q.filter(
                                                (e) =>
                                                  !(
                                                    e.pid === parseInt(O) &&
                                                    e.farmType ===
                                                      m.Q.JUNLGE_FARM
                                                  )
                                              )),
                                        ]);
                                    }
                                  }
                                  switch (
                                    (M &&
                                      (r =
                                        null === (e = r) || void 0 === e
                                          ? void 0
                                          : e.filter((e) =>
                                              e.lpStakeTokenSymbol
                                                .toUpperCase()
                                                .includes(M.toUpperCase())
                                            )),
                                    F)
                                  ) {
                                    case "all":
                                      return W
                                        ? g()(
                                            r,
                                            (e) => {
                                              var n;
                                              return null ===
                                                (n = W.find(
                                                  (n) => n.pid === e.pid
                                                )) || void 0 === n
                                                ? void 0
                                                : n.order;
                                            },
                                            "asc"
                                          ).slice(0, v)
                                        : null === (n = r) || void 0 === n
                                        ? void 0
                                        : n.slice(0, v);
                                    case "stables":
                                      return null != r
                                        ? r
                                        : []
                                            .filter(
                                              (e) =>
                                                E.FW.includes(e.tokenSymbol) &&
                                                E.FW.includes(
                                                  e.quoteTokenSymbol
                                                )
                                            )
                                            .slice(0, v);
                                    case "apr":
                                      return g()(
                                        r,
                                        (e) =>
                                          parseFloat(
                                            null !== (i = e.apy) && void 0 !== i
                                              ? i
                                              : "0"
                                          ),
                                        "desc"
                                      ).slice(0, v);
                                    case "blueChips":
                                      return null != r
                                        ? r
                                        : []
                                            .filter(
                                              (e) =>
                                                E.tN.includes(e.tokenSymbol) ||
                                                E.tN.includes(
                                                  e.quoteTokenSymbol
                                                )
                                            )
                                            .slice(0, v);
                                    case "liquidity":
                                      return g()(
                                        r,
                                        (e) =>
                                          parseFloat(
                                            null !== (t = e.totalLpStakedUsd) &&
                                              void 0 !== t
                                              ? t
                                              : "0"
                                          ),
                                        "desc"
                                      ).slice(0, v);
                                    default:
                                      return W
                                        ? g()(
                                            r,
                                            (e) => {
                                              var n;
                                              return null ===
                                                (n = W.find(
                                                  (n) => n.pid === e.pid
                                                )) || void 0 === n
                                                ? void 0
                                                : n.order;
                                            },
                                            "asc"
                                          ).slice(0, v)
                                        : null === (l = r) || void 0 === l
                                        ? void 0
                                        : l.slice(0, v);
                                  }
                                })()) && void 0 !== e
                                ? e
                                : [],
                            farmTags: Y,
                            isActive: !0,
                            openPid: H || O,
                            useBorder: !0,
                          }),
                          (0, t.tZ)(_.Z, {
                            pools: P,
                            poolTags: V,
                            isActive: !0,
                          }),
                        ],
                      })
                    : (0, t.tZ)(d.kC, {
                        mt: "20px",
                        children: (0, t.tZ)(f.Z, { product: a.Xo.EARN }),
                      })
                  : (0, t.tZ)(t.HY, {}),
                (0, t.tZ)("div", { ref: Q }),
                (0, t.tZ)(d.kC, {
                  sx: { mt: "20px" },
                  children: (0, t.tZ)(x, { product: a.Xo.EARN }),
                }),
              ],
            })
          );
        },
        X = () => (
          (0, r.L1)(),
          (0, I.cS)(),
          (0, t.tZ)(l.Z, { variant: "listView", children: (0, t.tZ)(F, {}) })
        );
    },
  },
  function (e) {
    e.O(
      0,
      [
        7848, 5472, 9192, 8745, 1660, 4517, 7478, 5732, 1106, 8153, 7743, 9774,
        2888, 179,
      ],
      function () {
        return e((e.s = 4695));
      }
    ),
      (_N_E = e.O());
  },
]);
