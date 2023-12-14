"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7478],{90037:function(e,n,t){var i=t(39977),o=t(91613);n.Z=e=>{let{currency0:n,currency1:t,size:r=30,spacing:l="-13px"}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(o.Z,{currency:n,size:r,style:{zIndex:1}}),(0,i.tZ)(o.Z,{currency:t,size:r,style:{transform:"translate(".concat(l,", 0px)"),marginRight:l}})]})}},81279:function(e,n,t){t.d(n,{U:function(){return i}});let i={INDUSTRY_STATS:"industryStats",HISTORICAL_INDUSTRY_STATS:"historicalIndustryStats",LHD_PROFILES:"lhdProfiles",LHD_PROFILE:"lhdProfile",LHD_PASSWORD_VERIFIED:"lhdPasswordVerified",HOMEPAGE_STATS:"homepageStats",LIVE_AND_UPCOMING:"liveAndUpcoming",TVL_STATS:"tvlStats",WIDO_QUOTE:"widoQuote",WIDO_ALLOWANCE:"widoAllowance",WIDO_APPROVAL:"widoApproval",WIDO_SIGN_APPROVAL:"widoSignApproval",TOKEN_HISTORIC:"tokenHistoric",BONDS_LANDING:"bondsLanding",BOND_POST_REFERENCE:"bondPostReference",WIDO_SUPPORTED_CONTRACTS:"widoSupportedContracts"}},29789:function(e,n,t){t.d(n,{P:function(){return g}});var i,o,r=t(67294),l=t(89897),a=t(59429),d=t(17527),c=t(61928),u=t(89346),s=t(77985),p=t(96959),h=t(33781),x=t(80535),v=t(4562),m=t(50434);function g(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.t,i=arguments.length>3?arguments[3]:void 0,g=arguments.length>4?arguments[4]:void 0,y=arguments.length>5?arguments[5]:void 0,f=arguments.length>6?arguments[6]:void 0,{account:b,chainId:C,provider:w}=(0,s.useWeb3React)(),Z=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.t,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,{account:d,chainId:h,provider:m}=(0,s.useWeb3React)(),{address:g}=(0,p.Z)(i),y=null===i?d:g,f=(0,c.Z)(),b=(0,x.n9)();return(0,r.useMemo)(()=>{var i,r;if(!(null==e?void 0:null===(i=e.currencyIn)||void 0===i?void 0:i.currency)||!(null==e?void 0:null===(r=e.pairOut)||void 0===r?void 0:r.pair)||!y||!m||!d||!h||!f||!b)return[];let c=[];return c.push(u.Yx.zapCallParameters(e,{allowedSlippage:t,zapType:n,stakingContractAddress:o,recipient:y,deadline:f.toNumber(),maxPrice:l,stakingPid:a})),c.map(e=>({parameters:e,contract:b}))},[d,t,h,f,m,y,b,e,o,l,n,a])}(e,n,t,i,g,y,f),k=(0,l.h7)(),{address:I}=(0,p.Z)(i),S=null===i?b:I;return(0,r.useMemo)(()=>w&&b&&C?S?{state:o.VALID,callback:async function(){let n=await Promise.all(Z.map(e=>{let{parameters:{methodName:n,args:t,value:i},contract:o}=e,r=!i||(0,d.Z)(i)?{}:{value:i};return o.estimateGas[n](...t,r).then(n=>({call:e,gasEstimate:n})).catch(i=>(console.error("Gas estimate failed, trying eth_call to extract error",e),o.callStatic[n](...t,r).then(n=>(console.error("Unexpected successful call after failed estimate gas",e,i,n),{call:e,error:Error("Unexpected issue with estimating the gas. Please try again.")})).catch(n=>{var t,i;console.error("Call threw error",e,n);let o=n.reason||(null===(t=n.data)||void 0===t?void 0:t.message)||n.message,r="The transaction cannot succeed due to error: ".concat(null!==(i="".concat(o,". This is probably an issue with one of the tokens you are zapping"))&&void 0!==i?i:"Unknown error, check the logs",".");return{call:e,error:Error(r)}})))})),t=n.find((e,n,t)=>"gasEstimate"in e&&(n===t.length-1||"gasEstimate"in t[n+1]));if(!t){let e=n.filter(e=>"error"in e);if(e.length>0)throw e[e.length-1].error;throw Error("Unexpected error. Please contact support: none of the calls threw an error")}let{call:{contract:o,parameters:{methodName:r,args:l,value:c}},gasEstimate:u}=t;return o[r](...l,{gasLimit:(0,h.y)(u),...c&&!(0,d.Z)(c)?{value:c,from:b}:{from:b}}).then(n=>{var t,o,r,l,d,c,u,s;let p=null==e?void 0:null===(o=e.currencyIn)||void 0===o?void 0:null===(t=o.currency)||void 0===t?void 0:t.symbol,h="".concat(null==e?void 0:null===(d=e.pairOut)||void 0===d?void 0:null===(l=d.pair)||void 0===l?void 0:null===(r=l.token0)||void 0===r?void 0:r.symbol," - ").concat(null==e?void 0:null===(s=e.pairOut)||void 0===s?void 0:null===(u=s.pair)||void 0===u?void 0:null===(c=u.token1)||void 0===c?void 0:c.symbol),x="Zap ".concat(p," into ").concat(h);return S===b||"".concat(x," to ").concat((i&&(0,a.UJ)(i),i)),k(n,{type:m.i.ZAP}),n.hash}).catch(e=>{if((null==e?void 0:e.code)===4001)throw Error("Transaction rejected.");throw console.error("Swap failed",e,r,l,c),Error("Swap failed: ".concat(e.message))})},error:null}:null!==i?{state:o.INVALID,callback:null,error:"Invalid recipient"}:{state:o.LOADING,callback:null,error:null}:{state:o.INVALID,callback:null,error:"Missing dependencies"},[e,w,b,C,S,i,Z,k])}(i=o||(o={}))[i.INVALID=0]="INVALID",i[i.LOADING=1]="LOADING",i[i.VALID=2]="VALID"},34731:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(41248),o=t(7538),r=t(67848),l=t(77985),a=t(22227),d=t(81279);let c=async e=>{let{chainId:n,fromToken:t,toToken:i,account:o,fromChainId:r,toChainId:l}=e;try{let e=(0,a.f2)({chainId:n,fromToken:t,toToken:i,accountAddress:o,fromChainId:r,toChainId:l});return e}catch(e){return console.error({e}),null}};var u=e=>{let{toToken:n,fromToken:t,isEnabled:i,fromChainId:o,toChainId:a}=e,{isActive:u,account:s="",chainId:p=0}=(0,l.useWeb3React)();return(0,r.a)({queryKey:[d.U.WIDO_ALLOWANCE,{account:s},{fromToken:t},{toToken:n}],queryFn:()=>c({chainId:p,toToken:n,fromToken:t,account:s,fromChainId:o,toChainId:a}),enabled:i&&!!t&&!!n&&u&&!!s&&!!p})},s=t(85945),p=t(48228);let h=async e=>{let{chainId:n,fromToken:t,toToken:i,fromChainId:o,toChainId:r,amount:l}=e;try{let e=(0,a.dE)({chainId:n,toChainId:r,fromToken:t,toToken:i,amount:l,fromChainId:o});return e}catch(e){return console.error({e}),null}};var x=e=>{let{fromToken:n,toToken:t,fromChainId:i,toChainId:o,amount:a,isEnabled:c}=e,{account:u="",chainId:s=0}=(0,l.useWeb3React)();return(0,r.a)({queryKey:[d.U.WIDO_APPROVAL,{account:u},{fromToken:n},{toToken:t}],queryFn:()=>h({chainId:s,toToken:t,fromToken:n,amount:a,fromChainId:i,toChainId:o}),enabled:c&&!!u&&!!s})},v=t(89897),m=t(66325),g=t(50434),y=e=>{let{inputTokenAddress:n,toTokenAddress:t,fromChainId:i,toChainId:o,amountToApprove:r,spenderAddress:a}=e,c=(0,s.NL)(),{account:u,isActive:h}=(0,l.useWeb3React)(),y=h&&!!n&&!!t&&"ETH"!==n&&n!==m.Ny&&Number(r)>0,{signTransaction:f}=(0,v.ZZ)(),{data:b}=x({fromToken:n,toToken:t,amount:r,isEnabled:y,fromChainId:i,toChainId:o}),{data:C,to:w}=b||{};return(0,p.D)({mutationFn:()=>(console.log("Signing Wido permission Tx"),f({dataToSign:{to:w,data:C},txInfo:{type:g.i.APPROVAL,tokenAddress:t,spender:a}})),onSuccess:()=>c.invalidateQueries({queryKey:[d.U.WIDO_ALLOWANCE,{account:u},{fromToken:n},{toTokenAddress:t},{amountToApprove:r}]})})},f=t(17888),b=e=>{let{inputTokenAddress:n,inputTokenDecimals:t,toTokenAddress:r,zapVersion:l,fromChainId:a,toChainId:d,tokenAmount:c}=e,{typedValue:s}=(0,i.v9)(e=>e.zap),p=(0,f.Z)(s||c||"0",t).toString(),h="ETH"===n||n===m.Ny,x=!h&&Number(p)>0&&!!r&&l===o.mm.Wido,{data:v,isLoading:g}=u({fromToken:n,toToken:null!=r?r:"",isEnabled:x,fromChainId:a,toChainId:d}),{allowance:b,spender:C=""}=null!=v?v:{},w=h?!h:g;h||g||!b||(w=Number(p)>Number(b));let{mutate:Z,isLoading:k}=y({inputTokenAddress:n,toTokenAddress:null!=r?r:"",fromChainId:a,toChainId:d,amountToApprove:p,spenderAddress:C});return{requiresApproval:w,isWidoAllowanceLoading:g,approveWidoSpender:Z,isApproveWidoSpenderLoading:k}}},17888:function(e,n,t){t.d(n,{s:function(){return o}});var i=t(61744);function o(e){let n=e.split(".");return n.length<2?e:n[1].length>18?(n[1]=n[1].slice(0,18),n[0]+"."+n[1]):e}n.Z=(e,n)=>{if(isNaN(parseFloat(e)))return console.error("Error: numberString to parse is not a number"),i.parseUnits("0",n);let t=i.parseUnits(o(e),n);return t}},80003:function(e,n,t){var i=t(39977),o=t(5808),r=t(80795),l=t(30923);n.Z=()=>(0,i.tZ)(o.kC,{sx:l.Z.dexTradeInfoContainer,children:(0,i.BX)(o.kC,{sx:{alignItems:"center"},children:[(0,i.tZ)(r.$j,{size:22,mr:"15px",color:"text"}),(0,i.tZ)(o.xv,{size:"12px",sx:{wordBreak:"break-all",lineHeight:"15px"},children:"Fetching the best route"})]})})},30923:function(e,n){n.Z={swapSwitchContainer:{width:"100%",height:"50px",alignItems:"center",justifyContent:"center"},swapSwitchButton:{background:"primaryButton",height:"30px",width:"30px",borderRadius:"30px",justifyContent:"center",border:"1px solid",color:"primaryBright",paddingRight:"1px",cursor:"pointer",transition:"all .3s linear","&:active":{transform:"scale(0.9)"}},SwapConfirmDisabledInputContainer:{backgroundColor:"white3",borderRadius:"10px",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"10px",height:"60px"},outerLogoCircle:{zIndex:1,height:"30px",width:"30px",borderRadius:"30px",alignItems:"center",justifyContent:"center",backgroundColor:"white2",flexDirection:"column"},innerLogoCircle:{height:"22.5px",width:"22.5px",borderRadius:"22.5px",alignItems:"center",justifyContent:"center",backgroundColor:"yellow",paddingRight:".6px"},dexTradeInfoContainer:{border:"2px solid",borderRadius:"10px",borderColor:"white3",background:"white3",padding:"5px 10px",width:"100%",flexDirection:"column",height:"fit-content",cursor:"pointer",overflow:"hidden",mt:"10px"},inputContainer:{justifyContent:"space-between",height:"50px",background:"white3",borderRadius:"10px",alignItems:"center",padding:"0px 10px",transform:"translate(0px, 10px)"},container:{alignItems:"center",justifyContent:"center",height:"30px",width:"30px",borderRadius:"15px",background:"white2",zIndex:10},subContainer:{height:"20px",width:"20px",borderRadius:"10px",background:"primaryButton",alignItems:"center",justifyContent:"center"},outputContainer:{justifyContent:"space-between",height:"50px",background:"white3",borderRadius:"10px",alignItems:"center",padding:"0px 10px",transform:"translate(0px, -10px)"},discountContainer:{background:"linear-gradient(94deg, #1EBA5C -9.73%, #67E76C 40.14%, #218E05 93.01%)",boxShadow:"0px 5px 7px 0px rgba(0, 0, 0, 0.03) inset",alignItems:"center",justifyContent:"center",borderRadius:"6px",height:"22px",padding:"0px 8px",cursor:"pointer",fontSize:"10px",fontWeight:"600"}}},15826:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(39977),o=t(67294),r=t(5808),l=t(54890),a=t(49055),d=t(66325),c=t(62015),u=t(71891),s=e=>{var n,t,l,s,x,v,m,g,y,f,b,C;let{zap:w}=e,{t:Z}=(0,a.$G)(),{pairOut:k,currencyOut1:I,currencyOut2:S,liquidityProviderFee:T,currencyIn:A,totalPriceImpact:D}=w,R=(0,o.useMemo)(()=>{if(!D)return;if(D.lessThan("0"))return"success";let e=(0,c.oX)(D);return e<1?"text":e<3?"yellow":"error"},[D]);return(0,i.BX)(r.kC,{sx:{flexDirection:"column",marginTop:"15px"},children:[(0,i.BX)(p,{children:[(0,i.tZ)(h,{children:Z("Price Impact")}),(0,i.tZ)(r.xv,{size:"14px",color:R,children:D?(0,u.wA)(D):"-"})]}),(0,i.BX)(p,{children:[(0,i.tZ)(h,{children:Z("Liquidity Provider Fee")}),(0,i.BX)(h,{children:[null==T?void 0:T.toSignificant(3)," ",null==A?void 0:null===(n=A.currency)||void 0===n?void 0:n.symbol]})]}),(0,i.BX)(p,{children:[(0,i.tZ)(h,{children:Z("Share of Pool")}),(0,i.BX)(h,{children:[null!==(C=(null==k?void 0:null===(t=k.poolTokenPercentage)||void 0===t?void 0:t.lessThan(d.IS))?"<0.01":null==k?void 0:null===(l=k.poolTokenPercentage)||void 0===l?void 0:l.toFixed(2))&&void 0!==C?C:"0","%"]})]}),(0,i.BX)(p,{children:[(0,i.tZ)(h,{children:"".concat(null==I?void 0:null===(s=I.outputCurrency)||void 0===s?void 0:s.symbol," per ").concat(null==S?void 0:null===(x=S.outputCurrency)||void 0===x?void 0:x.symbol)}),(0,i.tZ)(h,{children:null==I?void 0:null===(m=I.outputAmount)||void 0===m?void 0:null===(v=m.asFraction.divide((null==S?void 0:S.outputAmount)||""))||void 0===v?void 0:v.toSignificant(5)})]}),(0,i.BX)(p,{children:[(0,i.tZ)(h,{children:"".concat(null==S?void 0:null===(g=S.outputCurrency)||void 0===g?void 0:g.symbol," per ").concat(null==I?void 0:null===(y=I.outputCurrency)||void 0===y?void 0:y.symbol)}),(0,i.tZ)(h,{children:null==S?void 0:null===(b=S.outputAmount)||void 0===b?void 0:null===(f=b.asFraction.divide((null==I?void 0:I.outputAmount)||""))||void 0===f?void 0:f.toSignificant(5)})]})]})};let p=e=>{let{children:n}=e;return(0,i.tZ)(r.kC,{sx:{justifyContent:"space-between"},children:n})},h=e=>{let{children:n}=e;return(0,i.tZ)(r.xv,{sx:{fontSize:"12px",lineHeight:"18px"},children:n})};var x=t(80795),v=t(1113),m=t(39499),g=t.n(m),y=t(91613),f=o.memo(e=>{var n,t,o,l;let{zap:d}=e,{t:c}=(0,a.$G)(),{currencyIn:u,currencyOut1:s,currencyOut2:p,pairOut:h}=d,m=null==h?void 0:null===(t=h.inAmount)||void 0===t?void 0:null===(n=t.token1)||void 0===n?void 0:n.toSignificant(6),f=null==h?void 0:null===(l=h.inAmount)||void 0===l?void 0:null===(o=l.token2)||void 0===o?void 0:o.toSignificant(6),b=(null==u?void 0:u.currency)&&(null==u?void 0:u.inputAmount)?v.CurrencyAmount.fromRawAmount(null==u?void 0:u.currency,null==u?void 0:u.inputAmount).divide(g().BigInt(2)).toSignificant(5):null;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(r.kC,{sx:{width:"100%"},children:(0,i.BX)(r.xv,{size:"12px",children:[c("Converted to"),":"]})}),(0,i.BX)(r.kC,{sx:{width:"100%",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},children:[(0,i.BX)(r.kC,{sx:{minWidth:"160px",justifyContent:"center"},children:[(0,i.tZ)(x.xu,{sx:{margin:"3px"},children:(0,i.tZ)(y.Z,{currency:null==u?void 0:u.currency,size:17})}),(0,i.tZ)(r.xv,{size:"12px",sx:{marginRight:"10px"},children:b}),(0,i.tZ)(r.kC,{sx:{alignItems:"center",justifyContent:"center",mb:"5px",mr:"10px"},children:(0,i.tZ)(r.ny,{color:"primary",icon:"arrow",direction:"right"})}),(0,i.tZ)(x.xu,{sx:{margin:"3px"},children:(0,i.tZ)(y.Z,{currency:null==s?void 0:s.outputCurrency,size:17})}),(0,i.tZ)(r.xv,{size:"12px",children:m})]}),(0,i.BX)(r.kC,{sx:{minWidth:"160px",justifyContent:"center"},children:[(0,i.tZ)(x.xu,{sx:{margin:"3px"},children:(0,i.tZ)(y.Z,{currency:null==u?void 0:u.currency,size:17})}),(0,i.tZ)(r.xv,{size:"12px",sx:{marginRight:"10px"},children:b}),(0,i.tZ)(r.kC,{sx:{alignItems:"center",justifyContent:"center",mb:"5px",mr:"10px"},children:(0,i.tZ)(r.ny,{color:"primary",icon:"arrow",direction:"right"})}),(0,i.tZ)(x.xu,{sx:{margin:"3px"},children:(0,i.tZ)(y.Z,{currency:null==p?void 0:p.outputCurrency,size:17})}),(0,i.tZ)(r.xv,{size:"12px",children:f})]})]})]})}),b=t(51526),C=t(34343),w=o.memo(e=>{var n,t,d,c,u,p;let{zap:h,hideTitle:x}=e,{t:v}=(0,a.$G)(),[m,g]=(0,o.useState)(!1),{currencyOut1:y,currencyOut2:w,pairOut:Z}=h,k=null==Z?void 0:null===(t=Z.inAmount)||void 0===t?void 0:null===(n=t.token1)||void 0===n?void 0:n.toSignificant(6),I=null==Z?void 0:null===(c=Z.inAmount)||void 0===c?void 0:null===(d=c.token2)||void 0===d?void 0:d.toSignificant(6);return(0,i.BX)(r.kC,{sx:l.W.distributionPanelContainer,children:[!x&&(0,i.tZ)(r.kC,{sx:l.W.panelTopContainer,children:(0,i.BX)(r.xv,{sx:l.W.swapDirectionText,children:[v("Distribution"),":"]})}),(0,i.BX)(r.kC,{sx:l.W.pooledText,onClick:()=>g(!m),children:[k," ",null==y?void 0:null===(u=y.outputCurrency)||void 0===u?void 0:u.symbol," & ",I," ",null==w?void 0:null===(p=w.outputCurrency)||void 0===p?void 0:p.symbol," Pooled",(0,i.tZ)(r.ny,{icon:"caret",direction:m?"up":"down",width:"10px"})]}),(0,i.tZ)(b.M,{children:m&&(0,i.BX)(C.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"fit-content"},transition:{opacity:{duration:.2}},exit:{opacity:0,height:0},sx:{position:"relative",overflow:"hidden",marginTop:"20px"},children:[(0,i.tZ)(f,{zap:h}),(0,i.tZ)(s,{zap:h})]})})]})})},76400:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(39977),o=t(67294),r=t(5808),l=t(49055),a=t(28626),d=t(54890),c=t(96992),u=t(6781),s=t(42755),p=t(77985),h=t(7538),x=o.memo(e=>{var n,t,o,a,d,x,v,m,g,y;let{zap:f,zapVersion:b=h.mm.ZapV1,title:C,onDismiss:w,txHash:Z,zapErrorMessage:k,inputCurrencyAmount:I,inputCurrencySymbol:S,toTokenAmount:T,outputCurrencySymbol:A}=e,{currencyIn:D,pairOut:R}=null!=f?f:{},{t:P}=(0,l.$G)(),{chainId:B}=(0,p.useWeb3React)(),{typedValue:L}=(0,s.NR)(),W=(0,u.bt)(B),E=(null==D?void 0:null===(n=D.currency)||void 0===n?void 0:n.symbol)==="ETH"?null==W?void 0:W.nativeCurrency.symbol:null==D?void 0:null===(t=D.currency)||void 0===t?void 0:t.symbol,N="Zapping ".concat(L||I," ").concat(E||S,"\n   into ").concat(null==R?void 0:null===(o=R.liquidityMinted)||void 0===o?void 0:o.toSignificant(4)," ").concat(null==R?void 0:null===(x=R.pair)||void 0===x?void 0:null===(d=x.token0)||void 0===d?void 0:null===(a=d.wrapped)||void 0===a?void 0:a.symbol,"-").concat(null==R?void 0:null===(g=R.pair)||void 0===g?void 0:null===(m=g.token1)||void 0===m?void 0:null===(v=m.wrapped)||void 0===v?void 0:v.symbol," LP"),z="Zapping ".concat(I," ").concat(S,"\n  into ").concat(T," ").concat(A," LP"),O=b===h.mm.Wido?z:N;return(0,i.tZ)(r.u_,{title:C,onDismiss:w,sx:{zIndex:120,overflowY:"auto",maxHeight:"calc(100% - 30px)",width:"380px"},children:k?(0,i.tZ)(c.ht,{onDismiss:w,message:k.includes("INSUFFICIENT")?P("Slippage Error: Please check your slippage using the ⚙️ icon & try again!"):k.includes("user rejected transaction")?P("Transaction rejected"):k}):Z?(0,i.tZ)(c.rD,{hash:Z,onDismiss:w,LpToAdd:null!==(y=null==R?void 0:R.pair)&&void 0!==y?y:void 0}):(0,i.tZ)(c.PU,{pendingText:O})})}),v=t(36236),m=t(7353),g=t(19101),y=t(21125),f=t(1113),b=t(34731),C=o.memo(e=>{let{zapInputError:n,zap:t,handleZap:o,zapErrorMessage:c,zapRouteState:u,txHash:s,handleDismissConfirmation:C,shouldUseWido:w=!1,widoQuote:Z,inputTokenAddress:k="",inputTokenDecimals:I=18,toTokenAddress:S="",zapVersion:T=h.mm.ZapV1,inputTokenChainId:A=f.SupportedChainId.BSC,outputTokenChainId:D=f.SupportedChainId.BSC}=e,{t:R}=(0,l.$G)(),{account:P}=(0,p.useWeb3React)(),{requiresApproval:B,approveWidoSpender:L,isApproveWidoSpenderLoading:W}=(0,b.Z)({inputTokenAddress:k,inputTokenDecimals:I,toTokenAddress:S,zapVersion:T,toChainId:A,fromChainId:D}),[E]=(0,v.Z)((0,i.tZ)(x,{title:R("Confirm ZAP"),zap:t,onDismiss:C,txHash:s,zapErrorMessage:c}),!0,!0,"zapConfirmationModal"),N=()=>{E(),o()},[z]=(0,g.hT)(),[O,_]=(0,a.fA)(t,z),j=!n&&(O===a.UK.NOT_APPROVED||O===a.UK.PENDING);return(0,i.tZ)(r.kC,{sx:d.W.zapActionsContainer,children:(()=>{var e,o,l,d,c,s,p,h;switch(!0){case!P:return(0,i.tZ)(m.Z,{});case!!n:return(0,i.tZ)(r.zx,{fullWidth:!0,disabled:!0,children:n});case w&&B:return(0,i.tZ)(r.zx,{onClick:()=>L(),disabled:W,load:W,children:W?"".concat(R("Enabling")," ").concat(null==t?void 0:null===(o=t.currencyIn)||void 0===o?void 0:null===(e=o.currency)||void 0===e?void 0:e.symbol):"".concat(R("Enable")," ").concat(null==t?void 0:null===(d=t.currencyIn)||void 0===d?void 0:null===(l=d.currency)||void 0===l?void 0:l.symbol)});case j&&!w:return(0,i.tZ)(r.kC,{sx:{width:"100%"},children:(0,i.tZ)(i.HY,{children:(0,i.tZ)(r.zx,{onClick:_,disabled:O!==a.UK.NOT_APPROVED,load:O===a.UK.PENDING,fullWidth:!0,sx:{padding:"10px 2px"},children:O===a.UK.PENDING?"".concat(R("Enabling")," ").concat(null==t?void 0:null===(s=t.currencyIn)||void 0===s?void 0:null===(c=s.currency)||void 0===c?void 0:c.symbol):"".concat(R("Enable")," ").concat(null==t?void 0:null===(h=t.currencyIn)||void 0===h?void 0:null===(p=h.currency)||void 0===p?void 0:p.symbol)})})});default:return(0,i.tZ)(r.zx,{fullWidth:!0,onClick:()=>N(),disabled:u===y.q.LOADING||!Z&&w,children:R("Zap Liquidity")})}})()})})},34678:function(e,n,t){t.d(n,{Z:function(){return B}});var i=t(39977),o=t(67294),r=t(5808),l=t(49055),a=t(80795),d=t(77985),c=t(96624),u=t(25115),s=t(54890),p=t(93359),h=t(28948),x=t(10166),v=t(50670);let m={LpRowContainer:{justifyContent:"space-between",padding:"5px",":hover":{background:"white4",cursor:"pointer"}},displayRowsContainer:{height:"300px",overflow:"auto",background:"white3",borderRadius:"10px"},inputContainer:{position:"relative",margin:"10px 0px 15px 0px"}};var g=t(24494),y=t(39371);let f=(0,x.Z)(r.xv,{target:"e118n8k20"})("white-space:nowrap;overflow:hidden;max-width:5rem;text-overflow:ellipsis;weight:400;font-size:14px;line-height:35px;margin-right:5px;");function b(e){let{balance:n}=e;return(0,i.tZ)(f,{title:null==n?void 0:n.toExact(),children:null==n?void 0:n.toSignificant(6)})}var C=o.memo(e=>{let{tokens:n,onLpSelect:t,style:o}=e,{account:l}=(0,d.useWeb3React)(),u=null==n?void 0:n.currencyA,s=null==n?void 0:n.currencyB,[p,h]=(0,y.Oo)(u,s),x=(0,c.ZP)(null!=l?l:void 0,null==h?void 0:h.liquidityToken),v=null==h?void 0:h.liquidityToken.address;return p===y._G.INVALID?null:(0,i.BX)(r.kC,{sx:m.LpRowContainer,onClick:t,style:o,children:[(0,i.BX)(r.kC,{sx:{alignItems:"center"},children:[(0,i.tZ)(g.Z,{token1:null==u?void 0:u.wrapped.symbol,token2:null==s?void 0:s.wrapped.symbol,noEarnToken:!0}),(0,i.BX)(r.xv,{weight:700,sx:{lineHeight:"22px",marginLeft:"5px"},children:[null==u?void 0:u.wrapped.symbol,"-",null==s?void 0:s.wrapped.symbol]})]}),x?(0,i.tZ)(b,{balance:x}):l?(0,i.tZ)(a.$j,{width:"20px",height:"20px"}):null]},"lp-item-".concat(v))});let w=(0,x.Z)(v.t7,{target:"eolkfn80"})("border-radius:10px 0px 0px 10px;");var Z=o.memo(e=>{let{tokens:n,onSelect:t}=e,r=(0,o.useCallback)(e=>{let{data:n,index:o,style:r}=e,l=n[o];return(0,i.tZ)(C,{style:r,tokens:l,onLpSelect:()=>t(l.currencyA,l.currencyB)})},[t]);return(0,i.tZ)(w,{height:300,width:"100%",itemData:n,itemCount:(null==n?void 0:n.length)||0,itemSize:45,children:r})}),k=o.memo(e=>{let{tokens:n,onSelect:t}=e,r=(0,o.useCallback)(()=>(0,i.tZ)(Z,{tokens:n,onSelect:t}),[t,n]);return(0,i.tZ)(i.HY,{children:r()})}),I=t(42755);let S=(0,x.Z)(r.II,{target:"egd7be70"})("width:420px;max-width:100% !important;height:40px;border-radius:10px;border:none;background-color:",e=>{let{theme:n}=e;return n.colors.white3},";color:",e=>{let{theme:n}=e;return n.colors.text},";placeholder-color:",e=>{let{theme:n}=e;return n.colors.gray},";::placeholder{color:",e=>e.theme.colors.text,";}:focus{box-shadow:none !important;}");var T=o.memo(function(e){let{onSelect:n}=e,{t}=(0,l.$G)(),[d,c]=(0,o.useState)(""),u=(0,I.uW)(),s=(0,o.useMemo)(()=>null==u?void 0:u.filter(e=>{let{currencyA:n,currencyB:t}=e;return!!n&&!!t&&"".concat(null==n?void 0:n.symbol.toUpperCase()).concat(null==t?void 0:t.symbol.toUpperCase()).includes(d.toUpperCase())}),[d,u]);return(0,i.BX)(r.kC,{sx:{flexDirection:"column"},children:[(0,i.tZ)(r.kC,{sx:m.inputContainer,children:(0,i.tZ)(S,{id:"token-search-input",placeholder:t("Name or Address"),autoComplete:"off",value:d,onChange:e=>{c(e.target.value)},icon:"search",autoFocus:!0})}),(0,i.tZ)(a.xu,{sx:m.displayRowsContainer,children:(0,i.tZ)(k,{tokens:s,onSelect:n})})]})}),A=o.memo(e=>{let{onDismiss:n=()=>null,onSelect:t}=e,{t:a}=(0,l.$G)(),d=(0,o.useCallback)((e,i)=>{n(),t(e,i)},[n,t]);return(0,i.tZ)(r.u_,{onDismiss:n,title:a("LP Tokens"),children:(0,i.tZ)(r.kC,{sx:{flexDirection:"column",width:"380px",maxWidth:"100%"},children:(0,i.tZ)(T,{onSelect:d})})})}),D=t(36236),R=t(90037),P=e=>{var n,t,o,l;let{lpPair:d,onSelect:c}=e,[u]=(0,D.Z)((0,i.tZ)(A,{onSelect:c}),!0,!0,"DualModalLP");return(0,i.BX)(r.kC,{sx:h.W.primaryFlex,onClick:u,children:[d?(0,i.BX)(i.HY,{children:[(0,i.tZ)(R.Z,{currency0:null==d?void 0:d.token0,currency1:null==d?void 0:d.token1,size:30}),(0,i.BX)(r.xv,{sx:h.W.tokenText,children:[null===(t=d.token0)||void 0===t?void 0:null===(n=t.wrapped)||void 0===n?void 0:n.symbol,"-",null===(l=d.token1)||void 0===l?void 0:null===(o=l.wrapped)||void 0===o?void 0:o.symbol]})]}):(0,i.tZ)(a.$j,{width:"15px",height:"15px",sx:{marginRight:"10px"}}),(0,i.tZ)(r.ny,{icon:"caret"})]})},B=o.memo(e=>{var n;let{value:t,onSelect:o,lpPair:h}=e,{account:x}=(0,d.useWeb3React)(),v=(0,c.ZP)(null!=x?x:void 0,null!==(n=null==h?void 0:h.liquidityToken)&&void 0!==n?n:void 0),m=null==v?void 0:v.toSignificant(6),{t:g}=(0,l.$G)(),[y]=(0,u.Z)(null==h?void 0:h.liquidityToken,!0);return(0,i.BX)(r.kC,{sx:s.W.dexPanelContainer,children:[(0,i.BX)(r.kC,{sx:s.W.panelTopContainer,children:[(0,i.BX)(r.xv,{sx:s.W.swapDirectionText,children:[g("To"),":"]}),(0,i.tZ)(r.Af,{value:t,onUserInput:()=>null}),(0,i.tZ)(P,{lpPair:h,onSelect:o})]}),(0,i.BX)(r.kC,{sx:s.W.panelBottomContainer,children:[(0,i.tZ)(r.kC,{sx:s.W.centered,children:(0,i.tZ)(r.xv,{size:"12px",sx:s.W.panelBottomText,children:y||"0.0"===t?"0.0"!==t&&0!==y&&t?"$".concat((y*parseFloat(t)).toFixed(2)):null:(0,i.tZ)(a.$j,{width:"15px",height:"15px"})})}),(0,i.tZ)(r.kC,{sx:{alignItems:"center"},children:x?(0,i.BX)(r.xv,{size:"12px",sx:s.W.panelBottomText,children:[g("Balance: %balance%",{balance:m||"loading"}),!m&&(0,i.tZ)(p.Z,{})]}):null})]})]})})},54890:function(e,n,t){t.d(n,{W:function(){return i}});let i={liquidityContainer:{width:"auto",height:"fit-content",background:"white2",borderRadius:"10px",flexDirection:"column",fontWeight:600,fontSize:"14px"},dexPanelContainer:{position:"relative",width:"100%",height:"94px",background:"white3",padding:"10px",borderRadius:"10px",justifyContent:"space-between",flexDirection:"column"},zapActionsContainer:{position:"relative",width:"100%",marginTop:"15px"},panelTopContainer:{width:"100%",height:"auto",justifyContent:"space-between"},panelBottomContainer:{width:"100%",justifyContent:"space-between"},panelBottomText:{opacity:.8},swapDirectionText:{position:"absolute",left:0,top:0,transform:"translate(0px, -30px)"},maxButton:{background:"yellow",alignItems:"center",justifyContent:"center",borderRadius:"6px",height:"22px",padding:"0px 8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",ml:"10px",transition:"all .3s linear","&:active":{transform:"scale(0.9)"}},primaryFlex:{minWidth:"max-content",height:"40px",background:"white4",padding:"5px 10px",borderRadius:"10px",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .3s linear","&:active":{transform:"scale(0.9)"},":hover":{background:"navMenuLogo"}},tokenText:{fontSize:"14px",margin:"0px 7.5px",textTransform:"uppercase"},distributionPanelContainer:{position:"relative",width:"100%",background:"white3",padding:"10px",borderRadius:"10px",justifyContent:"flex-start",flexDirection:"column"},centered:{alignItems:"center",justifyContent:"center"},warningMessageContainer:{flexDirection:"column",background:"error",borderRadius:"10px",marginTop:"15px",padding:"15px",alignItems:"center",justifyContent:"center",transform:"translate(0px, -15px)"},pooledText:{fontSize:"12px",lineHeight:"18px",justifyContent:"space-between",cursor:"pointer"},switchStyles:{display:"flex",alignItems:"center",backgroundColor:"rgba(56, 56, 56, 1)",height:"20px",width:"40px","& div":{width:"15px",height:"15px",marginLeft:"4px"},"input:checked ~ &":{backgroundColor:"yellow"}}}}}]);