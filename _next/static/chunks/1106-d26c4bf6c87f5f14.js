"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1106],{40972:function(t,n,e){e.d(n,{Z:function(){return h}});var i=e(39977),r=e(67294),o=e(24494),l=e(36161),c=e(51526),a=e(34343),d=e(5808),x=t=>{let{infoContent:n,expandedContent:e,expanded:r}=t;return(0,i.BX)(i.HY,{children:[n&&(0,i.tZ)(d.kC,{sx:{display:"inline-block"},children:(0,i.tZ)(d.u,{body:n,transformTip:"translate(11%, 0%)",width:"205px",children:(0,i.tZ)(d.ny,{icon:"info",width:12,color:"text"})})}),e&&(0,i.tZ)("span",{style:{marginLeft:"20px",transform:"translate(0, -3px)"},children:(0,i.tZ)(d.ny,{icon:"caret",direction:r?"up":"down",width:"10px"})})]})},s=r.memo(t=>{let{serviceTokenDisplay:n,title:e,titleWidth:o="310px",iconsContainer:s="117px",cardContent:p,expandedContent:h,infoContent:u,open:f,description:m="",showDescription:C}=t,[Z,k]=(0,r.useState)(f);return(0,r.useEffect)(()=>{k(f)},[f]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(d.kC,{sx:{...l.W.listCardContainer,height:["unset","unset","unset",C?"120px":"86px"]},onClick:()=>k(t=>!t),children:(0,i.BX)(d.kC,{sx:{flexDirection:"column",width:"100%"},children:[(0,i.BX)(d.kC,{sx:{flexDirection:["column","column","column","row"]},children:[(0,i.BX)(d.kC,{sx:{...l.W.titleContainer,maxWidth:["100%","100%","100%","275px",o]},children:[(0,i.BX)(d.kC,{sx:l.W.tokensContainer,children:[(0,i.tZ)(d.kC,{sx:{minWidth:["","","",s],justifyContent:"flex-end"},children:n}),(0,i.tZ)(d.kC,{sx:{flexDirection:"column",marginLeft:"10px"},children:e})]}),(0,i.tZ)(d.kC,{sx:l.W.infoContentMobile,children:(0,i.tZ)(x,{infoContent:u,expandedContent:h,expanded:Z})})]}),p&&(0,i.tZ)(d.kC,{sx:l.W.cardContentContainer,children:p}),u&&(0,i.tZ)(d.kC,{sx:{display:["none","none","none","flex"],minWidth:h?"49px":"20px",justifyContent:"center"},children:(0,i.tZ)(x,{infoContent:u,expandedContent:h,expanded:Z})})]}),(0,i.tZ)(d.kC,{children:m})]})}),(0,i.tZ)(c.M,{children:h&&Z&&(0,i.tZ)(a.E.div,{initial:{height:0},animate:{height:"fit-content",transitionEnd:{overflow:"visible"}},transition:{opacity:{duration:.2}},exit:{height:0,overflow:"hidden"},sx:{position:"relative",width:"100%",overflow:"hidden"},children:(0,i.tZ)(d.kC,{sx:l.W.expandedWrapper,children:h})})})]})}),p=e(69264),h=t=>{let{listViews:n,useBorder:e}=t,r=(0,p.Bb)();return(0,i.tZ)(d.kC,{sx:{...l.W.listViewContainer,"& > div:first-of-type":{borderRadius:r?"0px":"10px 10px 0 0"},"& > div:last-of-type":{borderRadius:r?"0px":"0 0 10px 10px",border:!e&&"none"},"& > div:first-of-type:last-of-type":{borderRadius:r?" 10px 10px 0px 0px":"10px 10px 10px 10px",border:!e&&"none"}},children:n.map(t=>{var n;return(0,i.tZ)(s,{serviceTokenDisplay:(0,i.tZ)(o.Z,{...t.tokenDisplayProps,dualEarn:(null===(n=t.tokenDisplayProps)||void 0===n?void 0:n.token4)!=null}),...t.listProps},t.listProps.id)})})}},78819:function(t,n,e){var i=e(39977),r=e(67294),o=e(49055),l=e(36161),c=e(5808),a=e(20268);n.Z=r.memo(t=>{let{tag:n,title:e,value:r,valueIcon:d,valueColor:x,toolTip:s,toolTipPlacement:p,toolTipTransform:h,value2:u,value2Icon:f,value2Secondary:m,style:C,value2Direction:Z="row",aprCalculator:k}=t,{t:g}=(0,o.$G)();return(0,i.BX)(c.kC,{sx:C,children:[(0,i.tZ)(i.HY,{children:s?(0,i.BX)(c.kC,{sx:{alignItems:"center"},children:[(0,i.tZ)(a.Z,{placement:p,transformTip:h,body:(0,i.tZ)(c.kC,{children:g("".concat(s))}),width:"180px",children:(0,i.BX)(c.xv,{sx:l.W.titleText,children:[g("".concat(e)),(0,i.tZ)("span",{sx:{ml:"5px"},children:(0,i.tZ)(c.ny,{icon:"questionCircle",width:"12px"})})]})}),k]}):(0,i.BX)(c.kC,{sx:{alignItems:"center"},children:[n?(0,i.tZ)(c.kC,{sx:{mr:"5px"},children:(0,i.tZ)(c.Xo,{variant:n})}):(0,i.tZ)(c.xv,{sx:l.W.titleText,children:e}),k]})}),(0,i.BX)(c.kC,{sx:{flexDirection:Z},children:[(0,i.BX)(c.xv,{sx:{...l.W.valueText,color:x},children:[d&&d,(null==r?void 0:r.includes("NaN"))||(null==r?void 0:r.includes("undefined"))||(null==r?void 0:r.includes("null"))?(0,i.tZ)(c.Od,{sx:l.W.skeleton}):r]}),u&&(0,i.BX)(c.xv,{sx:m?l.W.secondaryText:{...l.W.valueText,color:x},children:[f&&f,(null==u?void 0:u.includes("NaN"))||(null==u?void 0:u.includes("undefined"))||(null==u?void 0:u.includes("null"))?(0,i.tZ)(c.Od,{sx:l.W.skeleton}):u]})]})]})})},36161:function(t,n,e){e.d(n,{W:function(){return i}});let i={listCardContainer:{borderRadius:0,flexDirection:["column","column","column","row"],alignItems:"center",justifyContent:"space-between",background:"white2",borderBottom:"1px solid rgba(226, 226, 226, .2)",padding:["10px 20px 10px 20px","10px 20px 10px 20px","10px 20px 10px 20px","0 30px 0 30px"],margin:"0 10px 0 10px",maxWidth:["500px","500px","500px","100%"],minWidth:"300px",width:"100%",height:["unset","unset","unset","86px"]},listViewContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},titleContainer:{width:"100%",justifyContent:"space-between",my:"5px"},infoContentMobile:{display:["flex","flex","flex","none"],alignItems:"center"},tokensContainer:{alignItems:"center",height:"100%",width:"100%"},titleText:{opacity:.6,fontSize:"12px",lineHeight:["16px","16px","16px","24px"],fontWeight:400},skeleton:{width:"60px",maxHeight:"18px",minHeight:"18px"},valueText:{fontSize:["12px","12px","12px","14px"],color:"primaryBright",lineHeight:"16px",fontWeight:700,mr:"5px",display:"flex",alignItems:"center"},secondaryText:{fontSize:"12px",color:"gray",lineHeight:"16px",fontWeight:400},cardContentContainer:{width:"100%",height:"100%",alignItems:"center",justifyContent:"flex-end"},animationDiv:{position:"relative",width:"100%",maxWidth:["500px","500px","500px","100%"],minWidth:"300px"},expandedWrapper:{background:"white3",flexDirection:"column",justifyContent:"space-between",padding:"15px 10px",flexWrap:"wrap",alignItems:"center"}}},62481:function(t,n,e){var i=e(39977),r=e(1113),o=e(77985),l=e(5808),c=e(12144),a=e(49055),d=e(97818);e(67294);var x=e(6781);n.Z=t=>{let{product:n}=t,{chainId:e}=(0,o.useWeb3React)(),{t:s}=(0,a.$G)(),p=(0,d.Z)();return(0,i.tZ)(l.kC,{sx:{width:"100%",background:"white2",alignItems:"center",justifyContent:"center",borderRadius:"10px"},children:(0,i.BX)(l.kC,{sx:{flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px 20px"},children:[(0,i.BX)(l.xv,{size:"25px",sx:{mb:"15px",textAlign:"center"},children:["You're"," connected to: ",x.zl[e]]}),(0,i.tZ)(l.ny,{icon:"placeholderMonkey"}),(0,i.BX)(l.xv,{size:"12px",sx:{margin:"10px 0px 5px 0px",opacity:".5",textAlign:"center"},children:[s("%product% are only available on ",{product:c.D7[n]}),1===c.rg[n].length?c.rg[n].map(t=>"".concat(x.zl[t],". ")):c.rg[n].map(t=>c.rg[n].indexOf(t)===c.rg[n].length-1?"".concat(x.zl[t],". "):"".concat(x.zl[t],", ")),s("Switch to: ")]}),(0,i.tZ)(l.kC,{sx:{mt:"10px",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:c.rg[n].map(t=>(0,i.BX)(l.kC,{sx:{padding:"5px 10px",background:"white3",alignItems:"center",borderRadius:"10px",cursor:"pointer",margin:"5px 5px"},onClick:()=>p(t),children:[(0,i.tZ)(l.ny,{icon:t?x.CU[t]:x.CU[r.SupportedChainId.BSC],width:"22px"}),(0,i.tZ)(l.xv,{ml:"10px",children:x.zl[t]})]},t))})]})})}},92826:function(t,n,e){var i=e(39977);e(67294);var r=e(5694),o=e(49055),l=e(32207),c=e(77985),a=e(5808);n.Z=t=>{let{projectLink:n,twitter:e,bubble:d,audit:x}=t,{t:s}=(0,o.$G)(),{chainId:p}=(0,c.useWeb3React)();return(0,i.BX)(a.kC,{sx:{justifyContent:"center"},children:[(0,i.tZ)(a.kC,{sx:r.W.iconButton,as:a.rU,href:n,target:"_blank",children:(0,i.tZ)(a.ny,{icon:"URL",width:18})}),(0,i.tZ)(a.kC,{sx:r.W.iconButton,as:a.rU,href:e,target:"_blank",children:(0,i.tZ)(a.ny,{icon:"twitter",width:18,color:"text"})}),p===l.a_.BSC&&d&&(0,i.tZ)(a.kC,{sx:r.W.iconButton,as:a.rU,href:"https://app.bubblemaps.io/bsc/token/".concat(d),target:"_blank",children:(0,i.tZ)(a.ny,{icon:"bubble",width:18,color:"text"})}),x&&(0,i.BX)(a.kC,{sx:{...r.W.iconButton,margin:"0 0 5px 0","& svg":{marginRight:"5px"}},as:a.rU,href:x,target:"_blank",children:[(0,i.tZ)(a.ny,{icon:"audit",width:18,color:"text"}),(0,i.tZ)(a.xv,{sx:{paddingRight:"5px"},children:s("Audit")})]})]})}},47037:function(t,n,e){e.d(n,{Z:function(){return Z}});var i=e(39977),r=e(67294),o=e(49055),l=e(5694),c=e(6781),a=e(92826),d=e(5808),x=e(77985),s=e(26052),p=e(9654),h=e(12199),u=e(11025),f=t=>{var n,e,r,o;let{farm:c}=t,a=null!==(e=(0,h.ZP)())&&void 0!==e?e:0,x=(0,s.Z)(),f=null!==(r=null==c?void 0:c.endBlock)&&void 0!==r?r:0,m=null!==(o=null==c?void 0:c.startBlock)&&void 0!==o?o:0,C=(null==c?void 0:c.rewardsPerSecond)?(0,p.Z)(Math.max(m-x/1e3,0),!0):(0,p.Z)(Math.max(m-a,0)*u.hJ,!0),Z=(null==c?void 0:c.rewardsPerSecond)?(0,p.Z)(Math.max(f-x/1e3,0),!0):(0,p.Z)(Math.max(f-a,0)*u.hJ,!0);return(0,i.tZ)(d.kC,{sx:{mt:"5px"},children:f>0&&(null==c?void 0:null===(n=c.rewardToken)||void 0===n?void 0:n.symbol)!=="BANANA"&&(0,i.BX)(d.kC,{sx:l.W.infoRow,children:[(null==c?void 0:c.rewardsPerSecond)?(0,i.BX)(d.xv,{sx:l.W.titleText,children:[m>x/1e3?"Starts in":"Ends in",":"]}):(0,i.BX)(d.xv,{sx:l.W.titleText,children:[m>a?"Starts in":"Ends in",":"]}),(null==c?void 0:c.rewardsPerSecond)?(0,i.tZ)(d.xv,{sx:l.W.contentText,children:m>x/1e3?"".concat(C.days,"d, ").concat(C.hours,"h, ").concat(C.minutes,"m"):"".concat(Z.days,"d, ").concat(Z.hours,"h, ").concat(Z.minutes,"m")}):(0,i.tZ)(d.xv,{sx:l.W.contentText,children:m>a?"".concat(C.days,"d, ").concat(C.hours,"h, ").concat(C.minutes,"m"):"".concat(Z.days,"d, ").concat(Z.hours,"h, ").concat(Z.minutes,"m")})]})})},m=e(46638),C=r.memo(t=>{var n,e,r;let{pool:c}=t,a=null!==(e=(0,h.ZP)())&&void 0!==e?e:0,{t:x}=(0,o.$G)(),u=(0,s.Z)(),f=parseInt((null==c?void 0:c.endBlock)||"0"),C=null!==(r=null==c?void 0:c.startBlock)&&void 0!==r?r:0,Z=(null==c?void 0:c.rewardsPerSecond)?(0,p.Z)(Math.max(C-u/1e3,0),!0):(0,p.Z)(Math.max(C-a,0)*m.hJ,!0),k=(null==c?void 0:c.rewardsPerSecond)?(0,p.Z)(Math.max(f-u/1e3,0),!0):(0,p.Z)(Math.max(f-a,0)*m.hJ,!0);return(0,i.tZ)(d.kC,{sx:{mt:"5px"},children:f>0&&(null==c?void 0:null===(n=c.rewardToken)||void 0===n?void 0:n.symbol)!=="BANANA"&&(0,i.BX)(d.kC,{sx:l.W.infoRow,children:[(null==c?void 0:c.rewardsPerSecond)?(0,i.BX)(d.xv,{sx:l.W.titleText,children:[C>u/1e3?"Starts in":"Ends in",":"]}):(0,i.BX)(d.xv,{sx:l.W.titleText,children:[C>a?"Starts in":"Ends in",":"]}),(null==c?void 0:c.rewardsPerSecond)?(0,i.tZ)(d.xv,{sx:l.W.contentText,children:C>u/1e3?"".concat(Z.days,"d, ").concat(Z.hours,"h, ").concat(Z.minutes,"m"):"".concat(k.days,"d, ").concat(k.hours,"h, ").concat(k.minutes,"m")}):(0,i.tZ)(d.xv,{sx:l.W.contentText,children:C>a?"".concat(Z.days,"d, ").concat(Z.hours,"h, ").concat(Z.minutes,"m"):"".concat(k.days,"d, ").concat(k.hours,"h, ").concat(k.minutes,"m")})]})})}),Z=t=>{let{valueTitle:n,valueContent:e,value2Title:r,value2Content:s,tokenContract:p,secondURL:h,secondURLTitle:u,projectLink:m,twitter:Z,audit:k,jungleFarm:g,pool:v,thirdURL:w,thirdURLTitle:y}=t,{t:B}=(0,o.$G)(),{chainId:W}=(0,x.useWeb3React)(),b=c.My[W],S="".concat(b,"/address/").concat(p);return(0,i.BX)(i.HY,{children:[m&&Z&&(0,i.tZ)(a.Z,{twitter:Z,projectLink:m,bubble:p,audit:k}),n&&(0,i.BX)(d.kC,{sx:l.W.infoRow,children:[(0,i.BX)(d.xv,{sx:l.W.titleText,children:[n,": "]}),(0,i.tZ)(d.xv,{sx:l.W.contentText,children:e})]}),r&&(0,i.BX)(d.kC,{sx:l.W.infoRow,children:[(0,i.BX)(d.xv,{sx:l.W.titleText,children:[r,": "]}),(0,i.tZ)(d.xv,{sx:l.W.contentText,children:s})]}),g&&(0,i.tZ)(f,{farm:g}),v&&(0,i.tZ)(C,{pool:v}),(0,i.tZ)(d.kC,{sx:{justifyContent:"center"},children:(0,i.BX)(d.kC,{sx:{width:"144px",flexDirection:"column"},children:[(0,i.tZ)(d.kC,{sx:l.W.linkRow,children:(0,i.BX)(d.rU,{href:S,sx:l.W.link,target:"_blank",children:[B("View Token Contract"),(0,i.tZ)(d.kC,{sx:{ml:"5px"},children:(0,i.tZ)(d.ny,{icon:"external",color:"text",width:10})})]})}),h&&(0,i.tZ)(d.kC,{sx:l.W.linkRow,children:(0,i.BX)(d.rU,{href:h,sx:l.W.link,target:"_blank",children:[u,(0,i.tZ)(d.kC,{sx:{ml:"5px"},children:(0,i.tZ)(d.ny,{icon:"external",color:"text",width:10})})]})}),w&&(0,i.tZ)(d.kC,{sx:l.W.linkRow,children:(0,i.tZ)(d.rU,{href:w,sx:l.W.link,target:"_blank",children:y})})]})})]})}},5694:function(t,n,e){e.d(n,{W:function(){return i}});let i={infoRow:{justifyContent:"space-between",width:"100%",marginBottom:"5px"},linkRow:{width:"100%",marginTop:"5px",justifyContent:"flex-end","& svg":{width:"11px"}},titleText:{fontSize:"12px",lineHeight:"14px",fontWeight:500},contentText:{fontSize:"12px",lineHeight:"14px",fontWeight:700},iconButton:{background:"white3",textDecoration:"none",alignItems:"center",justifyContent:"center",width:"fit-content",height:"30px",padding:"2px 5px",borderRadius:"8px",margin:"0 5px 5px 0","&:hover":{cursor:"pointer"}},link:{fontSize:"12px",lineHeight:"14px",display:"flex",textDecoration:"none","&: hover":{textDecoration:"underline"}}}},12144:function(t,n,e){e.d(n,{D7:function(){return d},Xo:function(){return o},rg:function(){return a}});var i,r,o,l,c=e(6781);(i=o||(o={})).BILLS="treasury-bills",i.MAXIMIZERS="maximizers",i.JUNGLE_FARMS="jungle-farms",i.POOLS="pools",i.FARMS="farms",i.EARN="earn",(r=l||(l={})).GNANA="gnana",r.MIGRATE="migrate",r.ZAP="zap",r.IAO="iao",r.NFA_COLLECTION="nft",r.NFA_AUCTION="auction",r.NFA_STAKING="staking",r.V3="v3";let a={[o.BILLS]:[c.a_.BSC,c.a_.POLYGON,c.a_.ARBITRUM_ONE],[o.FARMS]:[c.a_.BSC,c.a_.POLYGON],[o.MAXIMIZERS]:[c.a_.BSC],[o.JUNGLE_FARMS]:[c.a_.BSC],[o.POOLS]:[c.a_.BSC],[o.EARN]:[c.a_.BSC,c.a_.POLYGON,c.a_.MAINNET]},d={[o.BILLS]:"Bonds",[o.MAXIMIZERS]:"Banana Maximizers",[o.JUNGLE_FARMS]:"Jungle Farms",[o.POOLS]:"Pools",[o.FARMS]:"Farms",[o.EARN]:"Earn products",[l.GNANA]:"Golden Banana",[l.MIGRATE]:"Migrate",[l.ZAP]:"Zap",[l.IAO]:"Official IAO",[l.NFA_COLLECTION]:"Nfa Collection",[l.NFA_AUCTION]:"Nfa Auction",[l.NFA_STAKING]:"Nfa Staking",[l.V3]:"V3 Concentrated Liquidity"}},67941:function(t,n,e){e.d(n,{H:function(){return r}});var i=e(36517);let r=()=>{let t=(0,i.$o)("hideCircular");return!!t&&JSON.parse(t)}},26052:function(t,n,e){var i=e(67294);n.Z=()=>{let[t,n]=(0,i.useState)(new Date().getTime());return(0,i.useEffect)(()=>{let t=()=>{n(t=>t+1e3)},e=setInterval(()=>t(),1e3);return()=>clearInterval(e)},[]),t}}}]);