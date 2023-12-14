"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8153],{16856:function(e,t,n){var i=n(39977),l=n(67294),o=n(89335),a=n(5808);t.Z=e=>{let{targetTime:t,fontSize:n=["10px"]}=e,[r,d]=(0,l.useState)((0,o.KT)(t));return(0,l.useEffect)(()=>{let e=setInterval(()=>{d((0,o.KT)(t))},1e4);return()=>{clearInterval(e)}},[t]),(0,i.tZ)(a.kC,{sx:{width:"100%",justifyContent:"center"},children:(0,i.tZ)(a.xv,{sx:{fontSize:n,minWidth:"100px"},children:r})})}},40837:function(e,t,n){var i=n(39977);n(67294);var l=n(49055),o=n(5808);t.Z=e=>{let{max:t,onChange:n,onSelectMax:a,value:r,inputTitle:d,displayDecimals:s}=e,{t:c}=(0,l.$G)(),u="0"!==t&&t&&"NaN"!==t?parseFloat(t).toFixed(s||4):"0";return(0,i.tZ)(o.kC,{sx:{position:"relative"},children:(0,i.BX)(o.kC,{sx:{flexDirection:"column",backgroundColor:"white3",borderRadius:"16px",color:"text",padding:"8px 16px 8px 0",width:"100%"},children:[(0,i.BX)(o.kC,{sx:{justifyContent:"space-between",alignItems:"flex-end",pl:"16px"},children:[(0,i.tZ)(o.xv,{sx:{fontSize:"14px",fontWeight:800},children:d}),(0,i.BX)(o.xv,{sx:{fontSize:"16px",fontWeight:500},children:[c("Balance"),": ",u.toLocaleString()]})]}),(0,i.BX)(o.kC,{sx:{alignItems:"center",justifyContent:"space-between",mt:"5px"},children:[(0,i.tZ)(o.II,{onChange:n,placeholder:"0",value:r}),(0,i.tZ)(o.zx,{size:"sm",onClick:a,sx:{ml:"1px",fontWeight:600},children:c("Max")})]})]})})}},80362:function(e,t,n){var i=n(39977),l=n(70794),o=n(67294),a=n(49055),r=n(91218),d=n(5808),s=n(40837);let c={sx:{maxHeight:"calc(100% - 30px)",minWidth:["90%","400px"],width:"200px",maxWidth:"425px"}};t.Z=o.memo(e=>{let{onConfirm:t,onDismiss:n,max:u,title:p,withdrawFee:x}=e,[h,m]=(0,o.useState)(""),[v,f]=(0,o.useState)(!1),{t:w}=(0,a.$G)(),C=(0,o.useMemo)(()=>(0,r.NJ)(new l.Z(u)),[u]),k=(0,o.useCallback)(e=>{m(e.currentTarget.value)},[m]),Z=(0,o.useCallback)(()=>{m(C)},[C,m]);return(0,i.BX)(d.u_,{title:p,onDismiss:n,...c,children:[(0,i.tZ)(s.Z,{onSelectMax:Z,onChange:k,value:h,max:C,inputTitle:w("Unstake")}),x&&(0,i.tZ)(d.kC,{sx:{padding:"20px 0 10px 0",justifyContent:"center"},children:(0,i.tZ)(d.xv,{children:w("Withdrawing will have a %withdrawFee%% fee",{withdrawFee:x})})}),(0,i.tZ)(d.zx,{disabled:v||new l.Z(C).lt(h)||!h,onClick:async()=>{f(!0);try{await t(h)}catch(e){console.error("Transaction Failed")}finally{f(!1)}},fullWidth:!0,load:v,style:{borderRadius:"10px",marginTop:"10px"},children:w(v?"Pending Confirmation":"Confirm")})]})})},29471:function(e,t,n){n.d(t,{Jt:function(){return C},E2:function(){return w},L1:function(){return f}});var i=n(23189),l=n(67294),o=n(41248),a=n(31525),r=n(53574),d=n(58671),s=n(91218),c=n(80535),u=n(7538),p=n(77985),x=()=>{let e=(0,c.h5)(),{chainId:t}=(0,p.useWeb3React)(),n=[...[...u.p3,...u.Nl].flatMap(e=>{var n;return(null===(n=e.lpAddresses)||void 0===n?void 0:n[t])?[[e.lpAddresses[t],18]]:[]}),...u.sC.flatMap(e=>{var n;return(null===(n=e.stakingToken.address)||void 0===n?void 0:n[t])?[[e.stakingToken.address[t],18]]:[]}),...u.pe.flatMap(e=>e.stakeTokenAddress?[[e.stakeTokenAddress,18]]:[])],i=(0,d.es)(e,"getLPPrice",n),l=n.map((e,t)=>{var n,l,o,a,r;return{address:null===(n=e[0])||void 0===n?void 0:n.toLowerCase(),price:(null==i?void 0:null===(o=i[t])||void 0===o?void 0:null===(l=o.result)||void 0===l?void 0:l[0])?(0,s.mW)(null==i?void 0:null===(r=i[t].result)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:a.toString(),18):void 0}});return l},h=n(48016),m=n(37652),v=n(81981);let f=()=>{var e,t;(0,m.vr)();let{chainId:n}=(0,p.useWeb3React)(),o=(0,a.T)(),d=x(),s=(0,v.Z)(),{slowRefresh:c}=(0,i.Z)(),u=(0,h.wE)(),f=(0,m.KU)(),w=(null==s?void 0:null===(e=s[0])||void 0===e?void 0:e.price)!==void 0;(0,l.useEffect)(()=>{n&&w&&o((0,r.eG)(n,s,d,u,f))},[o,n,u,w,null==f?void 0:null===(t=f.lpAprs)||void 0===t?void 0:t.length,c])},w=e=>{let{fastRefresh:t}=(0,i.Z)(),n=(0,a.T)(),{chainId:d}=(0,p.useWeb3React)(),s=(0,o.v9)(e=>e.farms.data[d]);return(0,l.useEffect)(()=>{e&&n((0,r.IV)(d,e))},[e,n,t,d]),s},C=e=>{var t;let{Ordering:n}=(0,o.v9)(e=>e.stats),i=null==n?void 0:null===(t=n["".concat(e)])||void 0===t?void 0:t.farms;return{farmOrderings:i}}},37652:function(e,t,n){n.d(t,{KU:function(){return h},Sq:function(){return s},e0:function(){return c},vr:function(){return x}});var i=n(77985),l=n(23189),o=n(67294),a=n(31525),r=n(46348),d=n(41248);let s=()=>{let e=(0,a.T)(),{slowRefresh:t}=(0,l.Z)();(0,o.useEffect)(()=>{e((0,r.w6)()),e((0,r.zb)())},[e,t])},c=e=>{let{poolTags:t}=u(e),{jungleTags:n}=p(e);return{jungleTags:n,poolTags:t}},u=e=>{var t;let{Tags:n}=(0,d.v9)(e=>e.stats),i=null==n?void 0:null===(t=n["".concat(e)])||void 0===t?void 0:t.pools;return{poolTags:i}},p=e=>{var t;let{Tags:n}=(0,d.v9)(e=>e.stats),i=null==n?void 0:null===(t=n["".concat(e)])||void 0===t?void 0:t.jungleFarms;return{jungleTags:i}},x=()=>{let{chainId:e}=(0,i.useWeb3React)(),t=(0,a.T)(),{slowRefresh:n}=(0,l.Z)();(0,o.useEffect)(()=>{e&&t((0,r.Dy)(e))},[n,e,t])},h=()=>{let e=(0,d.v9)(e=>e.stats.FarmLpAprs);return e}},89335:function(e,t,n){n.d(t,{F1:function(){return l},KT:function(){return o},mr:function(){return i}});let i=e=>{let t;let n="string"==typeof e?new Date(e):e,i=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getUTCMonth()],l=n.getUTCDate(),o=String(n.getUTCHours()).padStart(2,"0"),a=String(n.getUTCMinutes()).padStart(2,"0");return t=l%10==1&&11!==l?"".concat(l,"st"):l%10==2&&12!==l?"".concat(l,"nd"):l%10==3&&13!==l?"".concat(l,"rd"):"".concat(l,"th"),"Launches on ".concat(i," ").concat(t,", ").concat(o,":").concat(a," UTC")},l=e=>{let t=new Date,n=new Date(e);return n>t},o=e=>{let t=new Date(e),n=new Date,i=(t.getTime()-n.getTime())/1e3;if(i<=0)return"0d 0h 0m";let l=Math.floor(i/86400);i-=86400*l;let o=Math.floor(i/3600)%24;i-=3600*o;let a=Math.floor(i/60)%60;return"".concat(l,"d ").concat(o,"h ").concat(a,"m")}},48184:function(e,t,n){n.d(t,{Z:function(){return V}});var i=n(39977),l=n(67294),o=n(11163),a=n(52166),r=n(91218),d=n(70794),s=n(40972),c=n(5808),u=n(78819),p=n(49055),x=n(48893),h=n(24494),m=n(47037),v=n(31525),f=n(77985),w=n(80535),C=n(89897),k=n(50434),Z=n(48016),g=n(67941),y=(e,t,n)=>{let{account:i}=(0,f.useWeb3React)(),r=(0,w.mi)(),d=(0,w.sd)(),s=(0,w.w8)(null!=n?n:""),c=(0,w.SI)(),u=(0,C.h7)(),p=(0,Z.wV)(),x=(0,o.useRouter)(),h=(0,g.H)();return(0,l.useCallback)(async()=>e===a.Q.MASTER_CHEF_V1?null==r?void 0:r.deposit(t,"0").then(e=>(h||x.push("?modal=circular-gh"),u(e,{type:k.i.HARVEST}),e.wait())).catch(e=>{console.error(e),p(e)}):e===a.Q.MASTER_CHEF_V2?null==d?void 0:d.deposit(t,"0").then(e=>(h||x.push("?modal=circular-gh"),u(e,{type:k.i.HARVEST}),e.wait())).catch(e=>{console.error(e),p(e)}):e===a.Q.JUNLGE_FARM?null==s?void 0:s.deposit("0").then(e=>(u(e,{type:k.i.HARVEST}),e.wait())).catch(e=>{console.error(e),p(e)}):e===a.Q.DUAL_FARM?null==c?void 0:c.harvest(t,null!=i?i:"").then(e=>(u(e,{type:k.i.HARVEST}),e.wait())).catch(e=>{console.error(e),p(e)}):void 0,[t,e,i,r,d,u,s,c,p,x,h])},T=n(53574),S=l.memo(e=>{let{id:t,pid:n,disabled:o,userEarningsUsd:a,userEarnings:r,farmType:d,contractAddress:s,earnTokenSymbol:m}=e,{account:w,chainId:C}=(0,f.useWeb3React)(),k=(0,v.T)(),[Z,g]=(0,l.useState)(!1),S=y(d,n,s),{t:b}=(0,p.$G)();return(0,i.BX)(c.kC,{sx:x.W2.actionContainer,children:[(0,i.tZ)(u.Z,{title:b("Earned"),value:r,valueIcon:(0,i.tZ)(c.kC,{sx:{height:"16px",alignItems:"center",mr:"3px"},children:(0,i.tZ)(h.Z,{token1:m,size:13})}),value2:a,value2Secondary:!0,value2Direction:"column",style:x.W2.columnView}),(0,i.tZ)(c.kC,{sx:x.W2.depositContainer,children:(0,i.tZ)(c.zx,{disabled:o||Z,onClick:async()=>{g(!0),await S(),k((0,T.ht)(C,t,null!=w?w:"")),g(!1)},load:Z,sx:x.W2.styledBtn,children:b("HARVEST")})})]})}),b=n(40837),A=n(55083),W=n(21815),D=n(62873);let R=(e,t,n)=>{let{chainId:i}=(0,f.useWeb3React)(),o=(0,C.h7)(),r=t===a.Q.JUNLGE_FARM?n:t===a.Q.MASTER_CHEF_V1?A.Wc[i]:t===a.Q.MASTER_CHEF_V2?A.uP[i]:A.Ju[i],d=(0,l.useCallback)(async()=>{let t=await (null==e?void 0:e.approve(null!=r?r:"",W.MaxUint256).then(t=>{var n;return o(t,{type:k.i.APPROVAL,tokenAddress:null!==(n=e.address)&&void 0!==n?n:"",spender:null!=r?r:""}),t.wait()}));return(0,D.Z)({event:"farm",chain:i,data:{token:null==t?void 0:t.to,id:r,cat:"enable"}}),t},[e,r,o,i]);return{onApprove:d}};var E=l.memo(e=>{let{max:t,stakeLpAddress:n,farmTypes:o,contractAddress:a,rawAllowance:s,onConfirm:u}=e,[x,h]=(0,l.useState)(""),[m,v]=(0,l.useState)(!1),{t:f}=(0,p.$G)(),C=(0,r._i)(s,18),k=(0,w.XL)(n),{onApprove:g}=R(k,o,a),y=(0,Z.wV)(),T=(0,l.useMemo)(()=>(0,r.NJ)(new d.Z(t)),[t]),S=(0,l.useCallback)(e=>{h(e.currentTarget.value)},[h]),A=(0,l.useCallback)(()=>{h(T)},[T,h]);return(0,i.BX)(c.u_,{title:f("Stake LP tokens"),sx:{maxHeight:"calc(100% - 30px)",minWidth:["90%","400px"],width:"200px",maxWidth:"425px"},children:[(0,i.tZ)(b.Z,{value:x,onSelectMax:A,onChange:S,max:T,inputTitle:f("Stake")}),(null==C?void 0:C.lt(x))?(0,i.tZ)(c.zx,{onClick:async()=>{v(!0);try{g().catch(e=>y(e)).finally(()=>v(!1))}catch(e){}},disabled:m,load:m,sx:{mt:"10px",width:"100%"},children:f("Approve")}):(0,i.tZ)(c.zx,{fullWidth:!0,disabled:m||"0"===T||"0"===x||!x||parseFloat(T)<parseFloat(x),onClick:async()=>{v(!0),u(x).finally(()=>v(!1))},load:m,sx:{mt:"10px",width:"100%"},children:f(m?"Pending Confirmation":"Confirm")})]})}),B=n(80362),I=(e,t,n)=>{let{account:i}=(0,f.useWeb3React)(),o=(0,w.mi)(),r=(0,w.sd)(),s=(0,w.w8)(null!=n?n:""),c=(0,w.SI)(),u=(0,C.h7)(),p=(0,l.useCallback)(async n=>e===a.Q.MASTER_CHEF_V1?null==o?void 0:o.deposit(t,new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.STAKE}),e.wait())):e===a.Q.MASTER_CHEF_V2?null==r?void 0:r.deposit(t,new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.STAKE}),e.wait())):e===a.Q.JUNLGE_FARM?null==s?void 0:s.deposit(new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.STAKE}),e.wait())):e===a.Q.DUAL_FARM?null==c?void 0:c.deposit(t,new d.Z(n).times(new d.Z(10).pow(18)).toString(),null!=i?i:"").then(e=>(u(e,{type:k.i.STAKE}),e.wait())):void 0,[t,e,i,o,r,u,s,c]),x=(0,l.useCallback)(async e=>{let t=await p(e);return t},[p]);return x},M=(e,t,n)=>{let{account:i}=(0,f.useWeb3React)(),o=(0,w.mi)(),r=(0,w.sd)(),s=(0,w.w8)(null!=n?n:""),c=(0,w.SI)(),u=(0,C.h7)(),p=(0,l.useCallback)(async n=>e===a.Q.MASTER_CHEF_V1?null==o?void 0:o.withdraw(t,new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.WITHDRAW}),e.wait())):e===a.Q.MASTER_CHEF_V2?null==r?void 0:r.withdraw(t,new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.WITHDRAW}),e.wait())):e===a.Q.JUNLGE_FARM?null==s?void 0:s.withdraw(new d.Z(n).times(new d.Z(10).pow(18)).toString()).then(e=>(u(e,{type:k.i.WITHDRAW}),e.wait())):e===a.Q.DUAL_FARM?null==c?void 0:c.withdrawAndHarvest(t,new d.Z(n).times(new d.Z(10).pow(18)).toString(),null!=i?i:"").then(e=>(u(e,{type:k.i.WITHDRAW}),e.wait())):void 0,[t,e,i,u,o,r,s,c]),x=(0,l.useCallback)(async e=>{let t=await p(e);return t},[p]);return x},F=n(36236),L=n(7353),_=l.memo(e=>{let{stakingTokenBalance:t,stakedBalance:n,lpValueUsd:o,pid:a,allowance:r,stakeLpAddress:s,farmTypes:u,contractAddress:h}=e,m=(0,v.T)(),{chainId:w,account:C}=(0,f.useWeb3React)(),[k,g]=(0,l.useState)(!1),[y,S]=(0,l.useState)(!1),[b,A]=(0,l.useState)(),W=!new d.Z(n).gt(0),{t:R}=(0,p.$G)(),_=I(u,a,h),U=M(u,a,h),P=(0,Z.wV)(),[H,V]=(0,F.Z)((0,i.tZ)(E,{max:t,stakeLpAddress:s,farmTypes:u,contractAddress:h,rawAllowance:r,onConfirm:async e=>{A(e),g(!0),await _(e).then(()=>{(0,D.Z)({event:"farm",chain:w,data:{cat:"stake",depositAmount:b,pid:a,usdAmount:parseFloat(null!=b?b:"0")*o}}),V()}).catch(e=>{console.error(e),P(e),g(!1)}),m((0,T.IV)(w,null!=C?C:"")),g(!1)}}),!0,!0,"depositFarmModal".concat(h)),[z,N]=(0,F.Z)((0,i.tZ)(B.Z,{max:n,onConfirm:async e=>{S(!0),await U(e).then(()=>{(0,D.Z)({event:"farm",chain:w,data:{cat:"unstake",depositAmount:b,pid:a,usdAmount:parseFloat(null!=b?b:"0")*o}}),N()}).catch(e=>{console.error(e),P(e),S(!1)}),m((0,T.IV)(w,null!=C?C:"")),S(!1)},title:"Unstake LP tokens"}),!0,!0,"withDrawFarmModal".concat(h));return C?W?(0,i.tZ)(c.zx,{onClick:H,load:k,disabled:k||0===parseFloat(null!=t?t:"0"),sx:x.W2.styledBtn,children:R("DEPOSIT")}):(0,i.BX)(c.kC,{sx:x.W2.stakeActions,children:[(0,i.tZ)(c.zx,{onClick:z,load:y,disabled:y,mr:"10px",size:"sm",sx:x.W2.smallBtn,children:"-"}),(0,i.tZ)(c.zx,{onClick:H,load:k,disabled:k||!new d.Z(t).gt(0),size:"sm",sx:x.W2.smallBtn,children:"+"})]}):(0,i.tZ)(L.Z,{})}),U=e=>{let{id:t,allowance:n,stakingTokenBalance:l,stakedBalance:o,lpValueUsd:a,stakeLpAddress:s,pid:h,farmTypes:m,contractAddress:v}=e,f=(0,r.mW)(new d.Z(o)),{t:w}=(0,p.$G)(),C="$".concat(((0,r.mW)(new d.Z(o||0))*a).toFixed(2));return(0,i.BX)(c.kC,{sx:x.W2.actionContainer,children:[(0,i.tZ)(u.Z,{title:w("Staked"),value:"".concat(f?f.toFixed(6):"0.000"," LP"),value2:C,value2Secondary:!0,value2Direction:"column",style:x.W2.columnView}),(0,i.tZ)(c.kC,{sx:x.W2.depositContainer,children:(0,i.tZ)(_,{id:t,stakedBalance:o,stakingTokenBalance:l,lpValueUsd:a,pid:h,allowance:n,stakeLpAddress:s,farmTypes:m,contractAddress:v})})]})},P=n(57319);n(69776),n(72903);var H=n(70408),V=e=>{let{farms:t,openPid:n,farmTags:f,isActive:w,useBorder:C}=e,{query:k,replace:Z}=(0,o.useRouter)(),{t:g}=(0,p.$G)();(0,v.T)();let[y]=(0,F.Z)((0,i.tZ)(P.Z,{}),!0,!0,"liquidityWidgetModal"),[T]=(0,F.Z)((0,i.tZ)(H.Z,{displayAll:!1,onDismiss:()=>null}),!0,!0,"NetworkModal"),{switchChain:b=!1}=k;(0,l.useEffect)(()=>{b&&(T(),Z("/farms",void 0,{shallow:!0}))},[]);let A=t.map(e=>{var t,l,o,s,p,v,w,C,k,Z,y,T,b,A,W,D,R,E,B,I,M,F,L,_,P,H,V;let z=e.tokenSymbol,N=e.quoteTokenSymbol,X=null==e?void 0:null===(t=e.userData)||void 0===t?void 0:t.allowance,j=null===(l=(0,r.mW)(new d.Z(null!==(D=null==e?void 0:null===(o=e.userData)||void 0===o?void 0:o.rewards)&&void 0!==D?D:0)))||void 0===l?void 0:l.toFixed(3),Q="$".concat((e.farmType===a.Q.DUAL_FARM?(0,r.mW)(new d.Z(null!==(R=null==e?void 0:null===(s=e.userData)||void 0===s?void 0:s.rewards)&&void 0!==R?R:0))*e.earnTokenPrice+(0,r.mW)(new d.Z(null!==(E=null==e?void 0:null===(p=e.userData)||void 0===p?void 0:p.secondRewards)&&void 0!==E?E:0))*(null!==(B=null==e?void 0:e.secondEarnTokenPrice)&&void 0!==B?B:0):(0,r.mW)(new d.Z(null!==(I=null==e?void 0:null===(v=e.userData)||void 0===v?void 0:v.rewards)&&void 0!==I?I:0))*e.earnTokenPrice).toFixed(2)),G="".concat(null===(w=(0,r.mW)(new d.Z(null!==(M=null==e?void 0:null===(C=e.userData)||void 0===C?void 0:C.tokenBalance)&&void 0!==M?M:0)))||void 0===w?void 0:w.toFixed(6)," LP"),O="$".concat(((0,r.mW)(new d.Z(null!==(F=null==e?void 0:null===(k=e.userData)||void 0===k?void 0:k.tokenBalance)&&void 0!==F?F:0))*(null!==(L=null==e?void 0:e.lpValueUsd)&&void 0!==L?L:0)).toFixed(2)),$=null==f?void 0:f.find(t=>t.pid===e.pid);return{tokenDisplayProps:{token1:184===e.pid?"NFTY2":z,token2:N,token3:e.farmType===a.Q.MASTER_CHEF_V1||e.farmType===a.Q.MASTER_CHEF_V2?"BANANA":e.rewardToken.symbol,token4:e.farmType===a.Q.DUAL_FARM&&(null==e?void 0:e.dualImage)!==!1?11===e.pid?"NFTY2":null==e?void 0:null===(Z=e.secondRewardToken)||void 0===Z?void 0:Z.symbol:void 0,stakeLp:!0},listProps:{id:e.id,open:!!n&&e.pid===parseInt(n),title:(0,i.tZ)(u.Z,{tag:(null==$?void 0:$.pid)===e.pid?null==$?void 0:$.text.toLowerCase():null,value:null==e?void 0:e.lpStakeTokenSymbol,style:{maxWidth:"170px"}}),titleWidth:"320px",infoContent:(0,i.tZ)(m.Z,{secondURL:null==e?void 0:e.projectLink,secondURLTitle:g("Learn More"),tokenContract:null==e?void 0:e.lpStakeTokenAddress,jungleFarm:e}),cardContent:(0,i.BX)(c.kC,{sx:x.W2.cardContent,children:[(0,i.tZ)(u.Z,{title:g("APR"),value:"".concat(null==e?void 0:e.apr,"%"),valueIcon:(0,i.tZ)("span",{style:{marginRight:"5px"},children:(0,i.tZ)(h.Z,{token1:e.rewardToken.symbol,size:12})}),toolTip:g("Reward APRs are calculated in real time. Note: APRs are provided for your convenience. APRs are constantly changing and do not represent guaranteed returns."),toolTipPlacement:"bottomLeft",toolTipTransform:"translate(8%, 0%)",style:x.W2.farmInfo}),(0,i.tZ)(c.kC,{sx:{...x.W2.onlyDesktop,maxWidth:"180px"},children:(0,i.tZ)(u.Z,{title:g("Total Staked"),value:"$".concat(Number(null==e?void 0:e.totalLpStakedUsd).toLocaleString(void 0)),toolTip:g("The total value of the LP tokens currently staked in this farm."),toolTipPlacement:"bottomLeft",toolTipTransform:"translate(23%, 0%)",style:x.W2.farmInfo})}),(0,i.tZ)(u.Z,{title:g("Earned"),value:Q,style:x.W2.earnedInfo})]}),expandedContent:(0,i.BX)(c.kC,{sx:x.W2.expandedContent,children:[(0,i.tZ)(c.kC,{sx:{...x.W2.onlyMobile,width:"100%"},children:(0,i.tZ)(u.Z,{title:g("Liquidity"),value:"$".concat(Number(null==e?void 0:e.totalLpStakedUsd).toLocaleString(void 0)),toolTip:g("The total value of the LP tokens currently staked in this farm."),toolTipPlacement:"bottomLeft",toolTipTransform:"translate(23%, 0%)",style:x.W2.farmInfo})}),(0,i.BX)(c.kC,{sx:x.W2.actionContainer,children:[(0,i.tZ)(u.Z,{title:g("Available"),value:G,value2:O,value2Secondary:!0,value2Direction:"column",style:{maxWidth:"50%",flexDirection:"column"}}),(0,i.tZ)(c.kC,{sx:{width:"100%",maxWidth:["130px","130px","130px","140px"],alignItems:"center",justifyContent:"center"},children:(0,i.BX)(c.zx,{onClick:()=>window.open(e.getStakingToken),sx:{...x.W2.styledBtn,alignItems:"flex-start"},children:[(0,i.tZ)(c.xv,{sx:{lineHeight:"18px",mr:"5px"},color:"primaryBright",children:g("GET LP")}),(0,i.tZ)("span",{sx:{ml:"5px"},children:(0,i.tZ)(c.ny,{icon:"ZapIcon",color:"primaryBright"})})]})})]}),(0,i.tZ)(c.kC,{sx:{...x.W2.onlyDesktop,mx:"10px"},children:(0,i.tZ)(c.ny,{icon:"caret",direction:"right",width:"20px"})}),(0,i.tZ)(U,{allowance:null!==(_=null==X?void 0:X.toString())&&void 0!==_?_:"",stakedBalance:null!==(P=null==e?void 0:null===(T=e.userData)||void 0===T?void 0:null===(y=T.stakedBalance)||void 0===y?void 0:y.toString())&&void 0!==P?P:"",stakingTokenBalance:null!==(H=null==e?void 0:null===(A=e.userData)||void 0===A?void 0:null===(b=A.tokenBalance)||void 0===b?void 0:b.toString())&&void 0!==H?H:"",stakeLpAddress:e.lpStakeTokenAddress,lpValueUsd:null!==(V=e.lpValueUsd)&&void 0!==V?V:0,pid:e.pid,id:e.id,farmTypes:e.farmType,contractAddress:null==e?void 0:e.contractAddress}),(0,i.tZ)(c.kC,{sx:{...x.W2.onlyDesktop,mx:"10px"},children:(0,i.tZ)(c.ny,{icon:"caret",direction:"right",width:"20px"})}),(0,i.tZ)(S,{id:e.id,pid:e.pid,disabled:"0.000"===j,userEarnings:j,userEarningsUsd:Q,farmType:e.farmType,contractAddress:null==e?void 0:e.contractAddress,earnTokenSymbol:null==e?void 0:null===(W=e.rewardToken)||void 0===W?void 0:W.symbol})]})}}});return(0,i.tZ)(c.kC,{mt:"20px",children:(0,i.tZ)(s.Z,{listViews:A,useBorder:C})})}},48893:function(e,t,n){n.d(t,{W2:function(){return o}});let i=["space-between","space-between","space-between","flex-start"],l=["row","row","row","column"],o={apyInfo:{width:"100%",justifyContent:i,ml:["0","0","0","20px"],maxWidth:["","","","150px"],flexDirection:l},earnedInfo:{justifyContent:i,maxWidth:["","","","120px"],flexDirection:l},farmInfo:{justifyContent:i,flexDirection:l,maxWidth:["","","","180px"]},cardContent:{flexDirection:["column","column","column","row"],width:"100%",justifyContent:"space-around"},actionContainer:{justifyContent:["space-between","space-between","space-between","space-around"],alignItems:"center",width:"100%",mt:["10px","10px","10px","0"],flexDirection:["row","row","row","row-reverse"]},expandedContent:{width:"100%",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],padding:"0 10px",justifyContent:"space-between"},styledBtn:{fontSize:"16px",lineHeight:"20px",padding:"10px",width:"140px",minWidth:["130px","130px","130px","100px"],height:"44px","&:disabled":{background:"white4"}},smallBtn:{maxWidth:"60px",width:"100%",minWidth:"44px",height:"44px",fontSize:"24px",lineHeight:"30px",fontWeight:600,"&:disabled":{background:"white4"}},depositContainer:{width:"100%",maxWidth:["130px","130px","130px","140px"],justifyContent:"center",alignItems:"center"},columnView:{maxWidth:"50%",flexDirection:"column",justifyContent:"flex-start"},stakeActions:{maxWidth:["","","","94px"],alignItems:"center",width:"100%"},harvestAllBtn:{height:"36px",lineHeight:"18px",justifyContent:"center",minWidth:"fit-content",width:["100%","100%","100%","180px"],fontSize:"16px"},onlyDesktop:{justifyContent:"space-around",display:["none","none","none","flex"]},onlyMobile:{flexDirection:"column",display:["flex","flex","flex","none"]}}},31257:function(e,t,n){n.d(t,{FW:function(){return o},aP:function(){return l},ph:function(){return i},tN:function(){return a}});let i=10,l=[{label:"All",value:"all"},{label:"Blue Chips",value:"blueChips"},{label:"Stables",value:"stables"},{label:"APR",value:"apr"},{label:"Liquidity",value:"liquidity"}],o=["DAI","USDT","BUSD","USDC","MOR","FRAX","TOR"],a=["AAVE","ADA","AVAX","AXS","BANANA","BAT","BTC","CAKE","COMP","COTI","DAI","DOGE","DOT","ETH","FIL","FTM","IOTA","LINK","LTC","MATIC","NEAR","SFP","SHIB","SNX","SUSHI","SXP","TWT","USDC","USDT","XRP","XVS","YFI","ZEC"]},32873:function(e,t,n){n.d(t,{W:function(){return i}});let i={farmContainer:{position:"relative",top:"30px",width:"100%",mb:"100px",justifyContent:"center",flexDirection:"column"},farmContent:{maxWidth:"1130px",width:"100%",flexDirection:"column",alignSelf:"center"}}},66125:function(e,t,n){var i=n(39977),l=n(5808),o=n(16856),a=n(68865);t.Z=e=>{let{title:t,subTitle:n,hideNumbers:r}=e,d=new Date(17023824e5).toISOString(),s=new Date(16971156e5).toISOString(),c=new Date(16971156e5)<new Date,u=new Date(17023824e5)<new Date;return(0,i.BX)(l.kC,{sx:a.W.headerContainer,children:[(0,i.BX)(l.kC,{sx:{flexDirection:"column",maxWidth:"500px"},children:[(0,i.tZ)(l.xv,{sx:a.W.headerTitle,children:t}),(0,i.tZ)(l.xv,{sx:a.W.headerSubTitle,children:n})]}),!r&&(0,i.tZ)(l.kC,{sx:{flexDirection:"column",mt:["10px","10px","10px","0px"],alignItems:"center"},children:u?(0,i.BX)(l.kC,{sx:{flexDirection:["column","column","column","row"],textAlign:"center"},children:[(0,i.BX)(l.kC,{sx:{flexDirection:"column",mt:"10px",mr:["0px","0px","0px","30px"]},children:[(0,i.tZ)(l.xv,{sx:{fontSize:"24px",fontWeight:700},children:"194.20M"}),(0,i.tZ)(l.xv,{sx:{fontSize:"12px",fontWeight:400,mt:"10px"},children:"Total ABOND BURNT"})]}),(0,i.BX)(l.kC,{sx:{flexDirection:"column",mt:"10px"},children:[(0,i.tZ)(l.xv,{sx:{fontSize:"24px",fontWeight:700},children:"189.14M"}),(0,i.tZ)(l.xv,{sx:{fontSize:"12px",fontWeight:400,mt:"10px"},children:"Total ABOND to be Distributed"})]})]}):(0,i.BX)(i.HY,{children:[(0,i.tZ)(l.xv,{sx:{...a.W.headerSubTitle,mb:"5px"},children:c?"Migration closes in":"Migration starts in"}),u?(0,i.tZ)(l.xv,{sx:{fontSize:"22px"},children:"Started!"}):(0,i.tZ)(o.Z,{targetTime:c?d:s,fontSize:["22px"]})]})})]})}},68865:function(e,t,n){n.d(t,{W:function(){return i}});let i={headerContainer:{width:"100%",background:"white2",my:"20px",p:"20px",borderRadius:"10px",justifyContent:"space-between",flexDirection:["column","column","column","row"],textAlign:["center","center","center","unset"]},headerTitle:{fontSize:["24px"],fontWeight:"700"},headerSubTitle:{fontSize:["12px"],lineHeight:["18px"],fontWeight:"400",mt:"10px"},vestingContainer:{p:"20px",flexDirection:"column",borderRadius:"10px",background:"white2",width:"100%",ml:["0px","0px","0px","20px"]},bottomContainer:{mt:"10px",alignItems:"center",width:"100%",py:"10px",flexDirection:["column","column","column","row"]},cardsContainer:{alignItems:"center",width:"100%",flexDirection:"column",pr:["0px","0px","0px","20px"],height:"100%",justifyContent:"space-between",maxWidth:["unset","unset","unset","150px","unset"]},imgContainer:{maxWidth:["unset","unset","unset","400px"],width:"100%"},migrationBodyContainer:{width:"100%",justifyContent:"space-between",flexDirection:["column","column","column","row"]},yourBondsContainer:{flexDirection:"column",width:"100%",alignItems:"center",position:"relative",mt:"30px"},yourMigrationBonds:{position:"absolute",top:"-10px",background:"white1",p:"5px 15px",borderRadius:"10px",fontWeight:700,fontSize:"22px"},regularContainer:{background:"white3",p:"10px",width:"100%",borderRadius:"10px",flexDirection:"column",textAlign:"center",alignItems:"center"},alternativeContainer:{background:"white3",p:"5px",width:"100%",borderRadius:"10px",textAlign:"center",justifyContent:"center"},migrationPanelCont:{background:"white2",p:"20px",width:"100%",borderRadius:"10px",maxWidth:["unset","unset","unset","387px"],flexDirection:"column",mb:["20px","20px","20px","0px"],justifyContent:"space-between"}}}}]);