"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7848],{67848:function(t,e,r){let s;r.d(e,{a:function(){return F}});var i=r(32161),n=r(30081),u=r(15761),l=r(33989),o=r(72379);class a extends l.l{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),c(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),(0,i.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&d(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(e),n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let u=this.computeRefetchInterval();n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(t){let e=this.client.getQueryCache().build(this.client,t),r=this.createResult(e,t);return!t.keepPreviousData&&(void 0!==t.placeholderData?r.isPlaceholderData:this.getCurrentResult()!==r)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){let e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){let e=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(i.ZT)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),i.sk||this.currentResult.isStale||!(0,i.PN)(this.options.staleTime))return;let t=(0,i.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t+1)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!i.sk&&!1!==this.options.enabled&&(0,i.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){let r;let s=this.currentQuery,n=this.options,u=this.currentResult,l=this.currentResultState,a=this.currentResultOptions,h=t!==s,f=h?t.state:this.currentQueryInitialState,y=h?this.currentResult:this.previousQueryResult,{state:R}=t,{dataUpdatedAt:v,error:b,errorUpdatedAt:m,fetchStatus:S,status:Q}=R,I=!1,C=!1;if(e._optimisticResults){let r=this.hasListeners(),i=!r&&c(t,e),u=r&&d(t,s,e,n);(i||u)&&(S=(0,o.Kw)(t.options.networkMode)?"fetching":"paused",v||(Q="loading")),"isRestoring"===e._optimisticResults&&(S="idle")}if(e.keepPreviousData&&!R.dataUpdatedAt&&null!=y&&y.isSuccess&&"error"!==Q)r=y.data,v=y.dataUpdatedAt,Q=y.status,I=!0;else if(e.select&&void 0!==R.data){if(u&&R.data===(null==l?void 0:l.data)&&e.select===this.selectFn)r=this.selectResult;else try{this.selectFn=e.select,r=e.select(R.data),r=(0,i.oE)(null==u?void 0:u.data,r,e),this.selectResult=r,this.selectError=null}catch(t){this.selectError=t}}else r=R.data;if(void 0!==e.placeholderData&&void 0===r&&"loading"===Q){let t;if(null!=u&&u.isPlaceholderData&&e.placeholderData===(null==a?void 0:a.placeholderData))t=u.data;else if(t="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.selectError=null}catch(t){this.selectError=t}void 0!==t&&(Q="success",r=(0,i.oE)(null==u?void 0:u.data,t,e),C=!0)}this.selectError&&(b=this.selectError,r=this.selectResult,m=Date.now(),Q="error");let E="fetching"===S,g="loading"===Q,O="error"===Q,T={status:Q,fetchStatus:S,isLoading:g,isSuccess:"success"===Q,isError:O,isInitialLoading:g&&E,data:r,dataUpdatedAt:v,error:b,errorUpdatedAt:m,failureCount:R.fetchFailureCount,failureReason:R.fetchFailureReason,errorUpdateCount:R.errorUpdateCount,isFetched:R.dataUpdateCount>0||R.errorUpdateCount>0,isFetchedAfterMount:R.dataUpdateCount>f.dataUpdateCount||R.errorUpdateCount>f.errorUpdateCount,isFetching:E,isRefetching:E&&!g,isLoadingError:O&&0===R.dataUpdatedAt,isPaused:"paused"===S,isPlaceholderData:C,isPreviousData:I,isRefetchError:O&&0!==R.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove};return T}updateResult(t){let e=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,i.VS)(r,e))return;this.currentResult=r;let s={cache:!0};(null==t?void 0:t.listeners)!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.trackedProps.size)return!0;let s=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&s.add("error"),Object.keys(this.currentResult).some(t=>{let r=this.currentResult[t]!==e[t];return r&&s.has(t)})})()&&(s.listeners=!0),this.notify({...s,...t})}updateQuery(){let t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;let e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){let e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||(0,o.DV)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){n.V.batch(()=>{var e,r,s,i,n,u,l,o;t.onSuccess?(null==(e=(r=this.options).onSuccess)||e.call(r,this.currentResult.data),null==(s=(i=this.options).onSettled)||s.call(i,this.currentResult.data,null)):t.onError&&(null==(n=(u=this.options).onError)||n.call(u,this.currentResult.error),null==(l=(o=this.options).onSettled)||l.call(o,void 0,this.currentResult.error)),t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function c(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)||t.state.dataUpdatedAt>0&&h(t,e,e.refetchOnMount)}function h(t,e,r){if(!1!==e.enabled){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&p(t,e)}return!1}function d(t,e,r,s){return!1!==r.enabled&&(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}var f=r(67294),y=r(464);let R=f.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),v=()=>f.useContext(R);var b=r(85945);let m=f.createContext(!1),S=()=>f.useContext(m);m.Provider;var Q=r(24798);let I=(t,e)=>{(t.suspense||t.useErrorBoundary)&&!e.isReset()&&(t.retryOnMount=!1)},C=t=>{f.useEffect(()=>{t.clearReset()},[t])},E=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&(0,Q.L)(r,[t.error,s]),g=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},O=(t,e)=>t.isLoading&&t.isFetching&&!e,T=(t,e,r)=>(null==t?void 0:t.suspense)&&O(e,r),k=(t,e,r)=>e.fetchOptimistic(t).then(({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)}).catch(e=>{r.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)});function F(t,e,r){let s=(0,i._v)(t,e,r);return function(t,e){let r=(0,b.NL)({context:t.context}),s=S(),i=v(),u=r.defaultQueryOptions(t);u._optimisticResults=s?"isRestoring":"optimistic",u.onError&&(u.onError=n.V.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=n.V.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=n.V.batchCalls(u.onSettled)),g(u),I(u,i),C(i);let[l]=f.useState(()=>new e(r,u)),o=l.getOptimisticResult(u);if((0,y.$)(f.useCallback(t=>{let e=s?()=>void 0:l.subscribe(n.V.batchCalls(t));return l.updateResult(),e},[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),f.useEffect(()=>{l.setOptions(u,{listeners:!1})},[u,l]),T(u,o,s))throw k(u,l,i);if(E({result:o,errorResetBoundary:i,useErrorBoundary:u.useErrorBoundary,query:l.getCurrentQuery()}))throw o.error;return u.notifyOnChangeProps?o:l.trackResult(o)}(s,a)}},464:function(t,e,r){r.d(e,{$:function(){return i}});var s=r(61688);let i=s.useSyncExternalStore},24798:function(t,e,r){r.d(e,{L:function(){return s}});function s(t,e){return"function"==typeof t?t(...e):!!t}}}]);