"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5732],{57319:function(e,n,t){t.d(n,{Z:function(){return J}});var i=t(39977),o=t(67294),r=t(80795),l=t(49055),d=t(15115),a=t(56778),u=t(90105),s=t(4562),c=t(48317),p=t(10807),v=t(49454),h=t(62206);let C={liquidityContainer:{width:"auto",height:"fit-content",background:"white2",borderRadius:"10px",flexDirection:"column",fontWeight:600,fontSize:"14px"},dexPanelContainer:{position:"relative",width:"100%",height:"94px",background:"white3",padding:"10px",borderRadius:"10px",justifyContent:"space-between",flexDirection:"column"},zapActionsContainer:{position:"relative",width:"100%",marginTop:"20px"},panelTopContainer:{width:"100%",height:"auto",justifyContent:"space-between"},panelBottomContainer:{width:"100%",justifyContent:"space-between"},panelBottomText:{opacity:.8},swapDirectionText:{position:"absolute",left:0,top:0,transform:"translate(0px, -30px)"},maxButton:{background:"primaryButton",alignItems:"center",justifyContent:"center",borderRadius:"6px",height:"22px",padding:"0px 8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",ml:"10px",transition:"all .3s linear","&:active":{transform:"scale(0.9)"},":hover":h.hk},primaryFlex:{minWidth:"max-content",height:"40px",background:"white4",padding:"5px 10px",borderRadius:"10px",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .3s linear","&:active":{transform:"scale(0.9)"},":hover":{background:"navMenuLogo"}},tokenText:{fontSize:"14px",margin:"0px 7.5px",textTransform:"uppercase"},distributionPanelContainer:{position:"relative",width:"100%",background:"white3",padding:"10px",borderRadius:"10px",justifyContent:"flex-start",flexDirection:"column",cursor:"pointer"},centered:{alignItems:"center",justifyContent:"center"},warningMessageContainer:{flexDirection:"column",background:"error",borderRadius:"10px",marginTop:"15px",padding:"15px",alignItems:"center",justifyContent:"center",transform:"translate(0px, -15px)"},pooledText:{fontSize:"12px",lineHeight:"18px",justifyContent:"space-between"},switchStyles:{display:"flex",alignItems:"center",height:"20px",width:"40px",backgroundColor:"white3","& div":{width:"15px",height:"15px",marginLeft:"4px"},"input:checked ~ &":{backgroundColor:"primaryButton"}}};var g=t(77985),m=t(23848),x=t(5808),f=t(83759),y=t(48340),R=t(45129),N=o.memo(e=>{var n,t,r,h;let{handleConfirmedTx:N}=e,{t:b}=(0,l.$G)(),{chainId:Z}=(0,g.useWeb3React)(),{INPUT:w,OUTPUT:k}=(0,c.dU)(),U=null!==(t=w.currencyId)&&void 0!==t?t:"",T=null!==(r=k.currencyId)&&void 0!==r?r:"",[E,_]=(0,o.useState)((0,p.U8)(U)),[I,A]=(0,o.useState)((0,p.U8)(T)),B=(0,o.useCallback)((e,n)=>{e===d.gN.CURRENCY_A&&_(n),e===d.gN.CURRENCY_B&&A(n)},[]),{independentField:Y,typedValue:S,otherTypedValue:O}=(0,v.OY)(),{dependentField:q,currencies:P,currencyBalances:M,parsedAmounts:W,price:L,noLiquidity:j,liquidityMinted:z,poolTokenPercentage:D,error:G}=(0,v.Qw)(null!=E?E:void 0,null!=I?I:void 0),{onFieldAInput:F,onFieldBInput:H}=(0,v.OA)(j),V={[Y]:S,[q]:j?O:null!==(h=null===(n=W[q])||void 0===n?void 0:n.toSignificant(6))&&void 0!==h?h:""},X=[d.gN.CURRENCY_A,d.gN.CURRENCY_B].reduce((e,n)=>({...e,[n]:(0,m.i)(M[n])}),{});return(0,i.tZ)(y.Z,{children:(0,i.BX)(x.kC,{sx:C.liquidityContainer,children:[j&&(0,i.BX)(x.kC,{sx:C.warningMessageContainer,children:[(0,i.tZ)(x.xv,{size:"14px",weight:700,mb:"10px",color:"primaryBright",children:b("You are the first liquidity provider.")}),(0,i.tZ)(x.xv,{size:"12px",weight:500,color:"primaryBright",sx:{textAlign:"center"},children:b("The ratio of tokens you add will set the price of this pool. Once you are happy with the rate click supply to review.")})]}),(0,i.tZ)(x.kC,{sx:{marginTop:"30px"},children:(0,i.tZ)(f.Z,{value:V[d.gN.CURRENCY_A],panelText:"Token 1",currency:E,otherCurrency:I,fieldType:d.gN.CURRENCY_A,onCurrencySelect:e=>B(d.gN.CURRENCY_A,e),onUserInput:F,handleMaxInput:()=>{var e,n;F(null!==(n=null===(e=X[d.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())&&void 0!==n?n:"")},showCommonBases:!0,pricing:R.n.PRICEGETTER})}),(0,i.tZ)(a.Z,{}),(0,i.tZ)(f.Z,{value:V[d.gN.CURRENCY_B],panelText:"Token 2",currency:I,otherCurrency:E,fieldType:d.gN.CURRENCY_B,onCurrencySelect:e=>B(d.gN.CURRENCY_B,e),onUserInput:H,handleMaxInput:()=>{var e,n;H(null!==(n=null===(e=X[d.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())&&void 0!==n?n:"")},showCommonBases:!0,pricing:R.n.PRICEGETTER}),(0,i.tZ)(u.Z,{currencies:P,poolTokenPercentage:D,noLiquidity:j,price:L,chainId:Z,liquidityMinted:z}),(0,i.tZ)(s.Z,{currencies:P,error:G,parsedAmounts:W,noLiquidity:j,liquidityMinted:z,poolTokenPercentage:D,price:L,handleConfirmedTx:N})]})})}),b=t(1113),Z=t(69776),w=t(42755),k=t(29789),U=t(19101),T=t(62873),E=t(70794),_=t(25115),I=t(34678),A=t(15826),B=t(76400),Y=t(91218),S=t(89346),O=t(80003),q=t(21125),P=t(11163),M=t(7538),W=t(93411),L=t(39371),j=t(89897),z=t(66325),D=e=>{let{currencyA:n,currencyB:t,pair:i}=e;if(t){let{liquidityToken:{address:e,decimals:n,chainId:t}={address:"",decimals:18,chainId:0}}=i||{};return{address:e,decimals:n,chainId:t}}if(null==n?void 0:n.isNative)return{address:z.Ny,decimals:n.decimals,chainId:n.chainId};let{tokenInfo:{address:o,decimals:r,chainId:l}={address:"",decimals:18,chainId:0}}=n||{};return{address:o||(null==n?void 0:n.address),decimals:r,chainId:l||(null==n?void 0:n.chainId)}},G=t(50434),F=o.memo(e=>{var n,t,d,a,u,s,c,v,h,N,z,F,H;let{handleConfirmedTx:V,poolAddress:X,pid:$,zapIntoProductType:Q,zapable:K,txHash:J}=e;(0,w.xz)();let[ee,en]=(0,o.useState)(""),[et,ei]=(0,o.useState)(!0),[eo,er]=(0,o.useState)(!1),{route:el}=(0,P.useRouter)(),{t:ed}=(0,l.$G)(),{chainId:ea=b.SupportedChainId.BSC}=(0,g.useWeb3React)(),{signTransaction:eu}=(0,j.ZZ)(),{INPUT:es,typedValue:ec,recipient:ep,zapType:ev,OUTPUT:eh}=(0,w.NR)(),[eC]=(0,U.hT)(),eg=es.currencyId,{currency1:em,currency2:ex}=eh,ef=(0,p.U8)(em),ey=(0,p.U8)(ex),eR=(0,p.U8)(eg),[,eN]=(0,L.Oo)(ef,ey),{address:eb,chainId:eZ}=D({currencyA:ef,currencyB:ey,pair:eN}),{address:ew,decimals:ek,chainId:eU}=D({currencyA:eR}),{data:eT,isLoading:eE}=(0,W.Z)({inputTokenAddress:ew,inputTokenDecimals:ek,toTokenAddress:eb,zapVersion:M.mm.ZapV1,fromChainId:eU,toChainId:eZ}),{to:e_,data:eI,value:eA,isSupported:eB=!1}=null!=eT?eT:{},eY=el.includes("bonds"),eS=eB&&eY,{zap:eO,inputError:eq,currencyBalances:eP,zapRouteState:eM}=(0,w.um)(),{onUserInput:eW,onInputSelect:eL,onCurrencySelection:ej,onSetZapType:ez}=(0,w.yR)(),[eD]=(0,_.Z)(eO.currencyIn.currency),eG=(0,o.useCallback)((e,n)=>{eW(e,""),ej(e,n)},[ej,eW]),eF=(0,o.useCallback)((e,n)=>{ej(Z.gN.OUTPUT,[e,n]),er(!0),ez(S.pA.ZAP),ei(!1)},[ej,ez]),eH=e=>{ei(e),e?ez(Q):ez(S.pA.ZAP)},{callback:eV}=(0,k.P)(eO,ev,eC,ep,X,"",$),eX=(0,o.useCallback)(()=>{let e=eS?eu({dataToSign:{to:e_,data:eI,value:eA},txInfo:{type:G.i.ZAP}}):eV();eS&&console.log("Signing Wido buy tx"),en(""),e.then(e=>{V(e,null==eO?void 0:eO.pairOut.pair);let n=(0,Y.mW)(new E.Z(eO.currencyIn.inputAmount.toString()));(0,T.Z)({event:"zap",chain:ea,data:{cat:"liquidity",token1:eO.currencyIn.currency.symbol,token2:"".concat(eO.currencyOut1.outputCurrency.symbol,"-").concat(eO.currencyOut2.outputCurrency.symbol),amount:n,usdAmount:n*eD}})}).catch(e=>{en(e.message)})},[ea,V,eD,eO,eV]),e$=(0,o.useCallback)(()=>{en("")},[]),eQ=(0,o.useCallback)(e=>{let n={[Z.gN.INPUT]:(0,m.i)(eP[Z.gN.INPUT]),[Z.gN.OUTPUT]:(0,m.i)(eP[Z.gN.OUTPUT])};if(n){var t,i;eW(e,null!==(i=null===(t=n[e])||void 0===t?void 0:t.toExact())&&void 0!==i?i:"")}},[eP,eW]);return(0,o.useEffect)(()=>{eW(Z.gN.INPUT,""),ez(K?Q:S.pA.ZAP)},[K]),(0,i.tZ)("div",{children:(0,i.BX)(x.kC,{sx:C.liquidityContainer,children:[K&&(null==eO?void 0:null===(d=eO.pairOut)||void 0===d?void 0:null===(t=d.pair)||void 0===t?void 0:null===(n=t.token0)||void 0===n?void 0:n.symbol)&&(0,i.BX)(x.kC,{sx:{marginBottom:"10px",fontSize:"12px",alignItems:"center"},children:[(0,i.BX)(x.xv,{children:[ed("Stake in")," ","".concat(null==eO?void 0:null===(c=eO.pairOut)||void 0===c?void 0:null===(s=c.pair)||void 0===s?void 0:null===(u=s.token0)||void 0===u?void 0:null===(a=u.wrapped)||void 0===a?void 0:a.symbol," - ").concat(null==eO?void 0:null===(N=eO.pairOut)||void 0===N?void 0:null===(h=N.pair)||void 0===h?void 0:null===(v=h.token1)||void 0===v?void 0:v.wrapped.symbol," ").concat(ed("Farm"))]}),(0,i.tZ)(r.xu,{sx:{width:"50px",marginLeft:"10px"},children:(0,i.tZ)(r.rs,{checked:et,onChange:()=>eH(!et),sx:C.switchStyles,disabled:eo})})]}),(0,i.tZ)(x.kC,{sx:{marginTop:"30px"},children:(0,i.tZ)(f.Z,{value:ec,panelText:"From:",currency:eR,otherCurrency:null,fieldType:Z.gN.INPUT,onCurrencySelect:e=>eG(Z.gN.INPUT,[e]),onUserInput:e=>eW(Z.gN.INPUT,e),handleMaxInput:eQ,isZapInput:!0,pricing:R.n.PRICEGETTER})}),(0,i.tZ)(x.kC,{sx:{margin:"10px",justifyContent:"center"},children:(0,i.tZ)(x.ny,{icon:"ZapArrow",color:"primaryButton"})}),(0,i.tZ)(I.Z,{value:(null==eO?void 0:null===(F=eO.pairOut)||void 0===F?void 0:null===(z=F.liquidityMinted)||void 0===z?void 0:z.toSignificant(10))||"0.0",onSelect:eF,lpPair:eO.pairOut.pair}),eM===q.q.LOADING&&(0,i.tZ)(x.kC,{mt:"10px",children:(0,i.tZ)(O.Z,{})}),ec&&parseFloat(ec)>0&&(null==eO?void 0:null===(H=eO.pairOut)||void 0===H?void 0:H.liquidityMinted)&&(0,i.tZ)(x.kC,{sx:{marginTop:"40px"},children:(0,i.tZ)(A.Z,{zap:eO})}),(0,i.tZ)(y.Z,{children:(0,i.tZ)(B.Z,{zapInputError:eq,zap:eO,handleZap:eX,zapErrorMessage:ee,zapRouteState:eM,handleDismissConfirmation:e$,shouldUseWido:eS,widoQuote:eT,inputTokenAddress:ew,inputTokenDecimals:ek,inputTokenChainId:eU,outputTokenChainId:eZ,toTokenAddress:eb})}),(0,i.tZ)(x.kC,{sx:{marginTop:"10px",justifyContent:"center"},children:(0,i.tZ)(x.rU,{href:"https://apeswap.gitbook.io/apeswap-finance/product-and-features/exchange/liquidity",target:"_blank",textAlign:"center",sx:{textDecoration:"none"},children:(0,i.BX)(x.xv,{style:{fontSize:"12px",lineHeight:"18px",fontWeight:400,borderBottom:"1px solid"},children:["Learn more",">"]})})})]})})}),H=t(50743),V=t(36236),X=t(20268),$=t(44156),Q=o.memo(e=>{let{handleZapSwitch:n,goZap:t}=e,{t:o}=(0,l.$G)(),{colorMode:d}=(0,H.B7)(),[a]=(0,V.Z)((0,i.tZ)($.Z,{}));return(0,i.BX)(x.kC,{sx:{margin:"15px 0 5px 0",justifyContent:"space-between",alignItems:"center"},children:[(0,i.BX)(x.kC,{sx:{alignItems:"flex-start"},children:[(0,i.tZ)(x.kC,{sx:{marginRight:"5px",alignItems:"center"},children:(0,i.tZ)(x.ny,{icon:"ZapIcon"})}),(0,i.tZ)(x.xv,{weight:700,size:"16px",sx:{marginRight:"10px",lineHeight:"18px"},children:o("ZAP")}),(0,i.tZ)(r.xu,{sx:{width:"50px"},children:(0,i.tZ)(r.rs,{checked:t,onChange:n,sx:{...C.switchStyles,backgroundColor:"dark"===d?"rgba(56, 56, 56, 1)":"rgba(241, 234, 218, 1)"}})}),(0,i.tZ)(X.Z,{placement:"bottomLeft",transformTip:"translate(-6%, 2%)",body:(0,i.tZ)(x.kC,{children:o("Zap enables you to convert a single token into an LP token in one transaction. Disable Zap to add liquidity with two tokens.")}),width:"180px",children:(0,i.tZ)(x.xv,{children:(0,i.tZ)(x.ny,{color:"grey",icon:"questionCircle",width:"19px"})})})]}),(0,i.tZ)(x.kC,{children:(0,i.tZ)(x.kC,{sx:{cursor:"pointer"},onClick:a,children:(0,i.tZ)(x.ny,{icon:"cog",width:"24px"})})})]})}),K=t(96992),J=o.memo(e=>{let{onDismiss:n=()=>null,poolAddress:t,pid:d,zapIntoProductType:a,zapable:u}=e,{t:s}=(0,l.$G)(),[c,p]=(0,o.useState)(!0),[{txHash:v,pairOut:h},C]=(0,o.useState)({txHash:"",pairOut:null}),g=(0,o.useCallback)((e,n)=>{C({txHash:e,pairOut:n})},[]),m=(0,o.useCallback)(()=>{p(!c)},[c]);return(0,i.tZ)(i.HY,{children:v?(0,i.tZ)(x.u_,{title:s("Confirm ZAP"),onDismiss:n,children:(0,i.tZ)(K.rD,{hash:v,onDismiss:n,LpToAdd:null!=h?h:void 0})}):(0,i.tZ)(x.u_,{title:s("Liquidity"),onDismiss:n,children:(0,i.BX)(r.xu,{children:[(0,i.tZ)(Q,{goZap:c,handleZapSwitch:m}),c?(0,i.tZ)(F,{handleConfirmedTx:g,poolAddress:null!=t?t:"",pid:null!=d?d:"",zapIntoProductType:null!=a?a:S.pA.ZAP,zapable:null!=u&&u}):(0,i.tZ)(N,{handleConfirmedTx:g})]})})})})},81981:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(91218),o=t(7538),r=t(77985),l=t(66325),d=t(80535),a=t(58671),u=t(67294);function s(e,n,t){return(0,u.useMemo)(()=>Object.values(e).map(e=>{var i,r,d,a,u,s,c,p,v,h,C,g,m,x,f,y,R,N,b;let Z;let w=null===(i=e.liquidityDex)||void 0===i?void 0:i[n],k=2,U=null!==(h=null===(d=o.RM)||void 0===d?void 0:null===(r=d[n])||void 0===r?void 0:r[2])&&void 0!==h?h:l.r_,T=null!==(C=null===(u=o.RM)||void 0===u?void 0:null===(a=u[n])||void 0===a?void 0:a[3])&&void 0!==C?C:l.r_,E=null!==(g=null===(c=o.RM)||void 0===c?void 0:null===(s=c[n])||void 0===s?void 0:s[4])&&void 0!==g?g:l.r_,_=null!==(m=null===(v=o.RM)||void 0===v?void 0:null===(p=v[n])||void 0===p?void 0:p[7])&&void 0!==m?m:l.r_;if(w)switch(k=null!==(f=null==(Z=null===(x=o.n_[n])||void 0===x?void 0:x[w])?void 0:Z.protocol)&&void 0!==f?f:o.Uw.V2){case o.Uw.V2:U=null!==(y=null==Z?void 0:Z.factory)&&void 0!==y?y:U;break;case o.Uw.V3:T=null!==(R=null==Z?void 0:Z.factory)&&void 0!==R?R:T;break;case o.Uw.Algebra:E=null!==(N=null==Z?void 0:Z.factory)&&void 0!==N?N:E;break;case o.Uw.Solidly:_=null!==(b=null==Z?void 0:Z.factory)&&void 0!==b?b:_}let I="No default dex factory found for retrieving price. For Protocol: ".concat(k,".");switch(k){case o.Uw.Both:if(U===l.r_||T===l.r_)throw Error(I);break;case o.Uw.V2:if(U===l.r_)throw Error(I);break;case o.Uw.V3:if(T===l.r_)throw Error(I)}return t&&k==o.Uw.Algebra&&(k=o.Uw.Gamma),t&&k==o.Uw.V3&&(k=o.Uw.Steer),[e.address[n],k,U,T,E,_]}),[e,n,t])}var c=t(55083),p=()=>{let{chainId:e}=(0,r.useWeb3React)(),n=Object.fromEntries(Object.entries(o.TV).filter(n=>{var t;let[,i]=n;return(null==i?void 0:i.active)&&!(null==i?void 0:i.lpToken)&&i.address[e]&&(null===(t=i.decimals)||void 0===t?void 0:t[e])})),t=Object.fromEntries(Object.entries(o.TV).filter(n=>{var t;let[,i]=n;return(null==i?void 0:i.active)&&(null==i?void 0:i.lpToken)&&i.address[e]&&(null===(t=i.decimals)||void 0===t?void 0:t[e])})),l=function(e){let{chainId:n}=(0,r.useWeb3React)(),t=s(e,n,!1),i=(0,d.h5)(),o=(0,a.es)(i,"getPriceFromFactory",t);return o}(n),u=function(e){let{chainId:n}=(0,r.useWeb3React)(),t=s(e,n,!0),i=(0,d.h5)(),o=(0,a.es)(i,"getLPPriceFromFactory",t);return o}(t),p=Object.values(n),v=p.findIndex(n=>{var t,i;return(null===(t=n.address[e])||void 0===t?void 0:t.toLowerCase())===(null===(i=c.v_[e])||void 0===i?void 0:i.toLowerCase())}),h=p.map((e,n)=>{var t,o,r,d,a,u,s,c,p,h,C,g;let m="GNANA"===e.symbol?(null==l?void 0:null===(o=l[0])||void 0===o?void 0:null===(t=o.result)||void 0===t?void 0:t[0])?1.389*(0,i.mW)(null==l?void 0:null===(d=l[0].result)||void 0===d?void 0:null===(r=d[0])||void 0===r?void 0:r.toString(),18):void 0:"veabond"===e.symbol.toLowerCase()?(null==l?void 0:null===(u=l[v])||void 0===u?void 0:null===(a=u.result)||void 0===a?void 0:a[0])?(0,i.mW)(null==l?void 0:null===(c=l[v].result)||void 0===c?void 0:null===(s=c[0])||void 0===s?void 0:s.toString(),18):void 0:(null==l?void 0:null===(h=l[n])||void 0===h?void 0:null===(p=h.result)||void 0===p?void 0:p[0])?(0,i.mW)(null==l?void 0:null===(g=l[n].result)||void 0===g?void 0:null===(C=g[0])||void 0===C?void 0:C.toString(),18):void 0;return{symbol:e.symbol,address:e.address,price:m,decimals:e.decimals}}),C=Object.values(t).map((e,n)=>{var t,o,r,l;return{symbol:e.symbol,address:e.address,price:(null==u?void 0:null===(o=u[n])||void 0===o?void 0:null===(t=o.result)||void 0===t?void 0:t[0])?(0,i.mW)(null==u?void 0:null===(l=u[n].result)||void 0===l?void 0:null===(r=l[0])||void 0===r?void 0:r.toString(),18):void 0,decimals:e.decimals}});return[...h,...C]}},49454:function(e,n,t){t.d(n,{Qw:function(){return y},OA:function(){return f},OY:function(){return x}});var i=t(39977),o=t(1113),r=t(77985),l=t(39499),d=t.n(l),a=t(61744);function u(e,n){if(e&&n)try{let t=(0,a.parseUnits)(e,n.decimals).toString();if("0"!==t)return o.CurrencyAmount.fromRawAmount(n,d().BigInt(t))}catch(n){console.debug('Failed to parse input amount: "'.concat(e,'"'),n)}}var s=t(67294),c=t(31525),p=t(70707),v=t(39371),h=t(96624),C=t(15115),g=t(49055);let m=d().BigInt(0);function x(){return(0,c.C)(e=>e.mint)}function f(e){let n=(0,c.T)(),t=(0,s.useCallback)(t=>{n((0,C.LC)({field:C.gN.CURRENCY_A,typedValue:t,noLiquidity:!0===e}))},[n,e]),i=(0,s.useCallback)(t=>{n((0,C.LC)({field:C.gN.CURRENCY_B,typedValue:t,noLiquidity:!0===e}))},[n,e]);return{onFieldAInput:t,onFieldBInput:i}}function y(e,n){var t,l,a,c;let f;let{account:y}=(0,r.useWeb3React)(),{t:R}=(0,g.$G)(),{independentField:N,typedValue:b,otherTypedValue:Z}=x(),w=N===C.gN.CURRENCY_A?C.gN.CURRENCY_B:C.gN.CURRENCY_A,k=(0,s.useMemo)(()=>({[C.gN.CURRENCY_A]:null!=e?e:void 0,[C.gN.CURRENCY_B]:null!=n?n:void 0}),[e,n]),[U,T]=(0,v.Oo)(k[C.gN.CURRENCY_A],k[C.gN.CURRENCY_B]),E=(0,p.A)(null==T?void 0:T.liquidityToken),_=U===v._G.NOT_EXISTS||!!(E&&d().equal(E.quotient,m))||!!(U===v._G.EXISTS&&T&&d().equal(T.reserve0.quotient,m)&&d().equal(T.reserve1.quotient,m)),I=(0,h.K5)(null!=y?y:void 0,(0,s.useMemo)(()=>[k[C.gN.CURRENCY_A],k[C.gN.CURRENCY_B]],[k])),A={[C.gN.CURRENCY_A]:I[0],[C.gN.CURRENCY_B]:I[1]},B=u(b,k[N]),Y=(0,s.useMemo)(()=>{if(_)return Z&&k[w]?u(Z,k[w]):void 0;if(B){let t=null==B?void 0:B.wrapped,[i,r]=[null==e?void 0:e.wrapped,null==n?void 0:n.wrapped];if(i&&r&&t&&T){let l=w===C.gN.CURRENCY_B?n:e,d=w===C.gN.CURRENCY_B?T.priceOf(i).quote(t):T.priceOf(r).quote(t);return(null==l?void 0:l.isNative)?o.CurrencyAmount.fromRawAmount(l,d.quotient):d}return}},[_,Z,k,w,B,e,n,T]),S=(0,s.useMemo)(()=>({[C.gN.CURRENCY_A]:N===C.gN.CURRENCY_A?B:Y,[C.gN.CURRENCY_B]:N===C.gN.CURRENCY_A?Y:B}),[Y,B,N]),O=(0,s.useMemo)(()=>{if(_){let{[C.gN.CURRENCY_A]:e,[C.gN.CURRENCY_B]:n}=S;if((null==e?void 0:e.greaterThan(0))&&(null==n?void 0:n.greaterThan(0))){let t=n.divide(e);return new o.Price(e.currency,n.currency,t.denominator,t.numerator)}return}{let n=null==e?void 0:e.wrapped;return T&&n?T.priceOf(n):void 0}},[e,_,T,S]),q=(0,s.useMemo)(()=>{let{[C.gN.CURRENCY_A]:e,[C.gN.CURRENCY_B]:n}=S,[t,i]=[null==e?void 0:e.wrapped,null==n?void 0:n.wrapped];if(T&&E&&t&&i)try{return T.getLiquidityMinted(E,t,i)}catch(e){console.error(e);return}},[S,T,E]),P=(0,s.useMemo)(()=>q&&E?new o.Percent(q.quotient,E.add(q).quotient):void 0,[q,E]);y||(f=(0,i.tZ)(i.HY,{children:R("Connect Wallet")})),U===v._G.INVALID&&(f=null!=f?f:(0,i.tZ)(i.HY,{children:R("Invalid pair")})),S[C.gN.CURRENCY_A]&&S[C.gN.CURRENCY_B]||(f=null!=f?f:(0,i.tZ)(i.HY,{children:R("Enter an amount")}));let{[C.gN.CURRENCY_A]:M,[C.gN.CURRENCY_B]:W}=S;return M&&(null==A?void 0:null===(t=A[C.gN.CURRENCY_A])||void 0===t?void 0:t.lessThan(M))&&(f=(0,i.tZ)(i.HY,{children:R("Insufficient %b% balance",{b:(null===(a=k[C.gN.CURRENCY_A])||void 0===a?void 0:a.symbol)||0})})),W&&(null==A?void 0:null===(l=A[C.gN.CURRENCY_B])||void 0===l?void 0:l.lessThan(W))&&(f=(0,i.tZ)(i.HY,{children:R("Insufficient %b% balance",{b:(null===(c=k[C.gN.CURRENCY_B])||void 0===c?void 0:c.symbol)||0})})),{dependentField:w,currencies:k,pair:T,pairState:U,currencyBalances:A,parsedAmounts:S,price:O,noLiquidity:_,liquidityMinted:q,poolTokenPercentage:P,error:f}}},93411:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(67848),o=t(22227),r=t(41248),l=t(77985),d=t(7538),a=t(17888),u=t(81279),s=t(66325);let c=async e=>{let{inputTokenAddress:n,amount:t,toTokenAddress:i,slippagePercentage:r,account:l,fromChainId:d,toChainId:a}=e;try{if(!i)return null;return await (0,o.mW)({fromChainId:d,toChainId:a,fromToken:n,toToken:i,user:l,amount:t,slippagePercentage:r,varsOverride:{validate:!1}})}catch(e){return console.error({e}),null}};function p(e){let{inputTokenAddress:n,inputTokenDecimals:t,toTokenAddress:o,zapVersion:p,fromChainId:v,toChainId:h,tokenAmount:C,enabled:g}=e,{chainId:m,account:x=""}=(0,l.useWeb3React)(),f="ETH"===n?s.Ny:n,{userZapSlippage:y}=(0,r.v9)(e=>e.user),R=(0,a.Z)(C||"0",t).toString(),N=y/1e4||.05,b=!!f&&!!o&&p===d.mm.Wido;return(0,i.a)({queryKey:[u.U.WIDO_QUOTE,{inputTokenAddress:f},{amount:R},{toTokenAddress:o},{slippagePercentage:N},{account:x},{chainId:m},{zapVersion:p}],queryFn:()=>c({inputTokenAddress:f,amount:R,toTokenAddress:o,slippagePercentage:N,account:x,fromChainId:v,toChainId:h}),enabled:b&&!!m&&!!x&&g,refetchOnWindowFocus:!1,staleTime:12e4})}},9654:function(e,n){n.Z=(e,n)=>{let t=e,i={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=31557600&&!n&&(i.years=Math.floor(t/31557600),t-=31557600*i.years),t>=2629800&&!n&&(i.months=Math.floor(t/2629800),t-=2629800*i.months),t>=86400&&(i.days=Math.floor(t/86400),t-=86400*i.days),t>=3600&&(i.hours=Math.floor(t/3600),t-=3600*i.hours),t>=60&&(i.minutes=Math.floor(t/60),t-=60*i.minutes),i.seconds=t,i}},56778:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(39977),o=t(5808),r={swapSwitchContainer:{width:"100%",height:"50px",alignItems:"center",justifyContent:"center"},swapSwitchButton:{backgroundColor:"primaryButton",height:"30px",width:"30px",borderRadius:"30px",alignItems:"center",justifyContent:"center",cursor:"pointer"}},l=()=>(0,i.tZ)(o.kC,{sx:r.swapSwitchContainer,children:(0,i.tZ)(o.kC,{sx:r.swapSwitchButton,children:(0,i.tZ)(o.xv,{weight:700,size:"20px",color:"primaryBright",sx:{mb:"1px",mr:".5px"},children:"+"})})})}}]);