(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Wa={exports:{}},tl={},$a={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Ro=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Ya={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Qa}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ka(){}Ka.prototype=on.prototype;function Ai(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Qa}var Ui=Ai.prototype=new Ka;Ui.constructor=Ai;Ga(Ui,on.prototype);Ui.isPureReactComponent=!0;var Do=Array.isArray,Xa=Object.prototype.hasOwnProperty,Bi={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Xa.call(t,r)&&!Za.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function mc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oo=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,Do(l)?(n="",e!=null&&(n=e.replace(Oo,"$&/")+"/"),xr(l,t,n,"",function(f){return f})):l!=null&&(Vi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Oo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Do(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+wl(i,a);o+=xr(i,t,n,s,l)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+wl(i,a++),o+=xr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},gc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bi};function qa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=lc;L.Profiler=oc;L.PureComponent=Ai;L.StrictMode=ic;L.Suspense=cc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;L.act=qa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ga({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Xa.call(t,s)&&!Za.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};L.createElement=Ja;L.createFactory=function(e){var t=Ja.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:uc,render:e}};L.isValidElement=Vi;L.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:vc}};L.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};L.unstable_act=qa;L.useCallback=function(e,t){return se.current.useCallback(e,t)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,t){return se.current.useEffect(e,t)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";$a.exports=L;var ke=$a.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=ke,xc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),kc=Object.prototype.hasOwnProperty,Sc=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)kc.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:xc,type:e,key:i,ref:o,props:l,_owner:Sc.current}}tl.Fragment=wc;tl.jsx=ba;tl.jsxs=ba;Wa.exports=tl;var p=Wa.exports,es={exports:{}},xe={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,z){var P=C.length;C.push(z);e:for(;0<P;){var $=P-1>>>1,Z=C[$];if(0<l(Z,z))C[$]=z,C[P]=Z,P=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],P=C.pop();if(P!==z){C[0]=P;e:for(var $=0,Z=C.length,er=Z>>>1;$<er;){var gt=2*($+1)-1,xl=C[gt],yt=gt+1,tr=C[yt];if(0>l(xl,P))yt<Z&&0>l(tr,xl)?(C[$]=tr,C[yt]=P,$=yt):(C[$]=xl,C[gt]=P,$=gt);else if(yt<Z&&0>l(tr,P))C[$]=tr,C[yt]=P,$=yt;else break e}}return z}function l(C,z){var P=C.sortIndex-z.sortIndex;return P!==0?P:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],f=[],g=1,h=null,m=3,v=!1,y=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var z=n(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=C)r(f),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(f)}}function x(C){if(k=!1,d(C),!y)if(n(s)!==null)y=!0,gl(E);else{var z=n(f);z!==null&&yl(x,z.startTime-C)}}function E(C,z){y=!1,k&&(k=!1,c(j),j=-1),v=!0;var P=m;try{for(d(z),h=n(s);h!==null&&(!(h.expirationTime>z)||C&&!ze());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var Z=$(h.expirationTime<=z);z=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),d(z)}else r(s);h=n(s)}if(h!==null)var er=!0;else{var gt=n(f);gt!==null&&yl(x,gt.startTime-z),er=!1}return er}finally{h=null,m=P,v=!1}}var N=!1,_=null,j=-1,W=5,M=-1;function ze(){return!(e.unstable_now()-M<W)}function un(){if(_!==null){var C=e.unstable_now();M=C;var z=!0;try{z=_(!0,C)}finally{z?cn():(N=!1,_=null)}}else N=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,nc=Io.port2;Io.port1.onmessage=un,cn=function(){nc.postMessage(null)}}else cn=function(){I(un,0)};function gl(C){_=C,N||(N=!0,cn())}function yl(C,z){j=I(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,gl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return C()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=m;m=C;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(C,z,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,C={id:g++,callback:z,priorityLevel:C,startTime:P,expirationTime:Z,sortIndex:-1},P>$?(C.sortIndex=P,t(f,C),n(s)===null&&C===n(f)&&(k?(c(j),j=-1):k=!0,yl(x,P-$))):(C.sortIndex=Z,t(s,C),y||v||(y=!0,gl(E))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var z=m;return function(){var P=m;m=z;try{return C.apply(this,arguments)}finally{m=P}}}})(ns);ts.exports=ns;var Cc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=ke,ye=Cc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Tn={};function Mt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Tn[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Ao={};function jc(e){return Gl.call(Ao,e)?!0:Gl.call(Fo,e)?!1:_c.test(e)?Ao[e]=!0:(Fo[e]=!0,!1)}function zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pc(e,t,n,r){if(t===null||typeof t>"u"||zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Wi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hi,Wi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pc(t,n,l,r)&&(n=null),r||l===null?jc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),is=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,kl;function xn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Lc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Rt:return"Portal";case Yl:return"Profiler";case Qi:return"StrictMode";case Kl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case is:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tc(e){var t=as(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Tc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=as(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function us(e,t){t=t.checked,t!=null&&$i(e,"checked",t,!1)}function ql(e,t){us(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(wn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function cs(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ds=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Rc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Yt=null,Kt=null;function $o(e){if(e=qn(e)){if(typeof ii!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ol(t),ii(e.stateNode,e.type,t))}}function hs(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function vs(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,$o(e),t)for(e=0;e<t.length;e++)$o(t[e])}}function gs(e,t){return e(t)}function ys(){}var Cl=!1;function xs(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return gs(e,t,n)}finally{Cl=!1,(Yt!==null||Kt!==null)&&(ys(),vs())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var oi=!1;if(Ge)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{oi=!1}function Dc(e,t,n,r,l,i,o,a,s){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var Cn=!1,Tr=null,Ir=!1,ai=null,Oc={onError:function(e){Cn=!0,Tr=e}};function Fc(e,t,n,r,l,i,o,a,s){Cn=!1,Tr=null,Dc.apply(Oc,arguments)}function Ac(e,t,n,r,l,i,o,a,s){if(Fc.apply(this,arguments),Cn){if(Cn){var f=Tr;Cn=!1,Tr=null}else throw Error(w(198));Ir||(Ir=!0,ai=f)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Tt(e)!==e)throw Error(w(188))}function Uc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qo(l),e;if(i===r)return Qo(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ks(e){return e=Uc(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var Es=ye.unstable_scheduleCallback,Go=ye.unstable_cancelCallback,Bc=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,G=ye.unstable_now,Hc=ye.unstable_getCurrentPriorityLevel,Xi=ye.unstable_ImmediatePriority,Cs=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,Wc=ye.unstable_LowPriority,Ns=ye.unstable_IdlePriority,nl=null,Ue=null;function $c(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Yc,Qc=Math.log,Gc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Qc(e)/Gc|0)|0}var or=64,ar=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=kn(a):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function Kc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=Kc(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _s(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function Zc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function js(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zs,Ji,Ps,Ls,Ms,ui=!1,sr=[],lt=null,it=null,ot=null,Dn=new Map,On=new Map,et=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qc(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Dn.set(i,pn(Dn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Ts(e){var t=kt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=ws(n),t!==null){e.blockedOn=t,Ms(e.priority,function(){Ps(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=qn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){kr(e)&&n.delete(t)}function bc(){ui=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),Dn.forEach(Ko),On.forEach(Ko)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,ui||(ui=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,bc)))}function Fn(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),Dn.forEach(t),On.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ts(n),n.blockedOn===null&&et.shift()}var Xt=Ze.ReactCurrentBatchConfig,Or=!0;function ef(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=1,qi(e,t,n,r)}finally{R=l,Xt.transition=i}}function tf(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=4,qi(e,t,n,r)}finally{R=l,Xt.transition=i}}function qi(e,t,n,r){if(Or){var l=ci(e,t,n,r);if(l===null)Dl(e,t,r,Fr,n),Yo(e,r);else if(qc(l,e,t,n,r))r.stopPropagation();else if(Yo(e,r),t&4&&-1<Jc.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&zs(i),i=ci(e,t,n,r),i===null&&Dl(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Fr=null;function ci(e,t,n,r){if(Fr=null,e=Ki(r),e=kt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Xi:return 1;case Cs:return 4;case Rr:case Wc:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var nt=null,bi=null,Sr=null;function Rs(){if(Sr)return Sr;var e,t=bi,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Xo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Xo,this.isPropagationStopped=Xo,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=we(an),Jn=V({},an,{view:0,detail:0}),nf=we(Jn),_l,jl,hn,rl=V({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(_l=e.screenX-hn.screenX,jl=e.screenY-hn.screenY):jl=_l=0,hn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Zo=we(rl),rf=V({},rl,{dataTransfer:0}),lf=we(rf),of=V({},Jn,{relatedTarget:0}),zl=we(of),af=V({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=we(af),uf=V({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=we(uf),ff=V({},an,{data:0}),Jo=we(ff),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function to(){return hf}var vf=V({},Jn,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=we(vf),yf=V({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=we(yf),xf=V({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wf=we(xf),kf=V({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=we(kf),Ef=V({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=we(Ef),Nf=[9,13,27,32],no=Ge&&"CompositionEvent"in window,Nn=null;Ge&&"documentMode"in document&&(Nn=document.documentMode);var _f=Ge&&"TextEvent"in window&&!Nn,Ds=Ge&&(!no||Nn&&8<Nn&&11>=Nn),bo=" ",ea=!1;function Os(e,t){switch(e){case"keyup":return Nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function jf(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(ea=!0,bo);case"textInput":return e=t.data,e===bo&&ea?null:e;default:return null}}function zf(e,t){if(Ot)return e==="compositionend"||!no&&Os(e,t)?(e=Rs(),Sr=bi=nt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ds&&t.locale!=="ko"?null:t.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pf[e.type]:t==="textarea"}function As(e,t,n,r){hs(r),t=Ar(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,An=null;function Lf(e){Xs(e,0)}function ll(e){var t=Ut(e);if(ss(t))return e}function Mf(e,t){if(e==="change")return t}var Us=!1;if(Ge){var Pl;if(Ge){var Ll="oninput"in document;if(!Ll){var na=document.createElement("div");na.setAttribute("oninput","return;"),Ll=typeof na.oninput=="function"}Pl=Ll}else Pl=!1;Us=Pl&&(!document.documentMode||9<document.documentMode)}function ra(){_n&&(_n.detachEvent("onpropertychange",Bs),An=_n=null)}function Bs(e){if(e.propertyName==="value"&&ll(An)){var t=[];As(t,An,e,Ki(e)),xs(Lf,t)}}function Tf(e,t,n){e==="focusin"?(ra(),_n=t,An=n,_n.attachEvent("onpropertychange",Bs)):e==="focusout"&&ra()}function If(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Rf(e,t){if(e==="click")return ll(t)}function Df(e,t){if(e==="input"||e==="change")return ll(t)}function Of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Of;function Un(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=la(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=la(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=Hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ia(n,i);var o=ia(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Ge&&"documentMode"in document&&11>=document.documentMode,Ft=null,fi=null,jn=null,di=!1;function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||Ft==null||Ft!==Mr(r)||(r=Ft,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Ar(fi,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ml={},Ws={};Ge&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Ml[e])return Ml[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ws)return Ml[e]=t[n];return e}var $s=il("animationend"),Qs=il("animationiteration"),Gs=il("animationstart"),Ys=il("transitionend"),Ks=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Ks.set(e,t),Mt(t,[e])}for(var Tl=0;Tl<aa.length;Tl++){var Il=aa[Tl],Uf=Il.toLowerCase(),Bf=Il[0].toUpperCase()+Il.slice(1);mt(Uf,"on"+Bf)}mt($s,"onAnimationEnd");mt(Qs,"onAnimationIteration");mt(Gs,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Ys,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,f=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;sa(l,a,f),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,f=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;sa(l,a,f),i=s}}}if(Ir)throw e=ai,Ir=!1,ai=null,e}function O(e,t){var n=t[gi];n===void 0&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[fr]){e[fr]=!0,rs.forEach(function(n){n!=="selectionchange"&&(Vf.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Is(t)){case 1:var l=ef;break;case 4:l=tf;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xs(function(){var f=i,g=Ki(n),h=[];e:{var m=Ks.get(e);if(m!==void 0){var v=eo,y=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":v=gf;break;case"focusin":y="focus",v=zl;break;case"focusout":y="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wf;break;case $s:case Qs:case Gs:v=sf;break;case Ys:v=Sf;break;case"scroll":v=nf;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qo}var k=(t&4)!==0,I=!k&&e==="scroll",c=k?m!==null?m+"Capture":null:m;k=[];for(var u=f,d;u!==null;){d=u;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,c!==null&&(x=Rn(u,c),x!=null&&k.push(Vn(u,x,d)))),I)break;u=u.return}0<k.length&&(m=new v(m,y,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==li&&(y=n.relatedTarget||n.fromElement)&&(kt(y)||y[Ye]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=f,y=y?kt(y):null,y!==null&&(I=Tt(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=f),v!==y)){if(k=Zo,x="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=qo,x="onPointerLeave",c="onPointerEnter",u="pointer"),I=v==null?m:Ut(v),d=y==null?m:Ut(y),m=new k(x,u+"leave",v,n,g),m.target=I,m.relatedTarget=d,x=null,kt(g)===f&&(k=new k(c,u+"enter",y,n,g),k.target=d,k.relatedTarget=I,x=k),I=x,v&&y)t:{for(k=v,c=y,u=0,d=k;d;d=It(d))u++;for(d=0,x=c;x;x=It(x))d++;for(;0<u-d;)k=It(k),u--;for(;0<d-u;)c=It(c),d--;for(;u--;){if(k===c||c!==null&&k===c.alternate)break t;k=It(k),c=It(c)}k=null}else k=null;v!==null&&ua(h,m,v,k,!1),y!==null&&I!==null&&ua(h,I,y,k,!0)}}e:{if(m=f?Ut(f):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Mf;else if(ta(m))if(Us)E=Df;else{E=If;var N=Tf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Rf);if(E&&(E=E(e,f))){As(h,E,n,g);break e}N&&N(e,m,f),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(N=f?Ut(f):window,e){case"focusin":(ta(N)||N.contentEditable==="true")&&(Ft=N,fi=f,jn=null);break;case"focusout":jn=fi=Ft=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,oa(h,n,g);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":oa(h,n,g)}var _;if(no)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ot?Os(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ds&&n.locale!=="ko"&&(Ot||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ot&&(_=Rs()):(nt=g,bi="value"in nt?nt.value:nt.textContent,Ot=!0)),N=Ar(f,j),0<N.length&&(j=new Jo(j,e,null,n,g),h.push({event:j,listeners:N}),_?j.data=_:(_=Fs(n),_!==null&&(j.data=_)))),(_=_f?jf(e,n):zf(e,n))&&(f=Ar(f,"onBeforeInput"),0<f.length&&(g=new Jo("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=_))}Xs(h,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=Rn(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,f=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&f!==null&&(a=f,l?(s=Rn(n,i),s!=null&&o.unshift(Vn(n,s,a))):l||(s=Rn(n,i),s!=null&&o.push(Vn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Hf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Wf,"")}function dr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(w(425))}function Ur(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Gf)}:vi;function Gf(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+sn,Hn="__reactProps$"+sn,Ye="__reactContainer$"+sn,gi="__reactEvents$"+sn,Yf="__reactListeners$"+sn,Kf="__reactHandles$"+sn;function kt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=da(e);e!==null;){if(n=e[Ae])return n;e=da(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ol(e){return e[Hn]||null}var yi=[],Bt=-1;function ht(e){return{current:e}}function F(e){0>Bt||(e.current=yi[Bt],yi[Bt]=null,Bt--)}function D(e,t){Bt++,yi[Bt]=e.current,e.current=t}var pt={},ie=ht(pt),de=ht(!1),_t=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Br(){F(de),F(ie)}function pa(e,t,n){if(ie.current!==pt)throw Error(w(168));D(ie,t),D(de,n)}function Js(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Mc(e)||"Unknown",l));return V({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,_t=ie.current,D(ie,e),D(de,de.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Js(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,F(de),F(ie),D(ie,e)):F(de),D(de,n)}var He=null,al=!1,Fl=!1;function qs(e){He===null?He=[e]:He.push(e)}function Xf(e){al=!0,qs(e)}function vt(){if(!Fl&&He!==null){Fl=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,al=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Es(Xi,vt),l}finally{R=t,Fl=!1}}return null}var Vt=[],Ht=0,Hr=null,Wr=0,Se=[],Ee=0,jt=null,We=1,$e="";function xt(e,t){Vt[Ht++]=Wr,Vt[Ht++]=Hr,Hr=e,Wr=t}function bs(e,t,n){Se[Ee++]=We,Se[Ee++]=$e,Se[Ee++]=jt,jt=e;var r=We;e=$e;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Ie(t)+l|n<<l|r,$e=i+e}else We=1<<i|n<<l|r,$e=e}function lo(e){e.return!==null&&(xt(e,1),bs(e,1,0))}function io(e){for(;e===Hr;)Hr=Vt[--Ht],Vt[Ht]=null,Wr=Vt[--Ht],Vt[Ht]=null;for(;e===jt;)jt=Se[--Ee],Se[Ee]=null,$e=Se[--Ee],Se[Ee]=null,We=Se[--Ee],Se[Ee]=null}var ge=null,ve=null,A=!1,Te=null;function eu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ve=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(A){var t=ve;if(t){var n=t;if(!ha(e,t)){if(xi(e))throw Error(w(418));t=at(n.nextSibling);var r=ge;t&&ha(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(xi(e))throw Error(w(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!A)return va(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=ve)){if(xi(e))throw tu(),Error(w(418));for(;t;)eu(e,t),t=at(t.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ge?at(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=ve;e;)e=at(e.nextSibling)}function en(){ve=ge=null,A=!1}function oo(e){Te===null?Te=[e]:Te.push(e)}var Zf=Ze.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ga(e){var t=e._init;return t(e._payload)}function nu(e){function t(c,u){if(e){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function l(c,u){return c=ft(c,u),c.index=0,c.sibling=null,c}function i(c,u,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,u,d,x){return u===null||u.tag!==6?(u=$l(d,c.mode,x),u.return=c,u):(u=l(u,d),u.return=c,u)}function s(c,u,d,x){var E=d.type;return E===Dt?g(c,u,d.props.children,x,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&ga(E)===u.type)?(x=l(u,d.props),x.ref=vn(c,u,d),x.return=c,x):(x=Lr(d.type,d.key,d.props,null,c.mode,x),x.ref=vn(c,u,d),x.return=c,x)}function f(c,u,d,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Ql(d,c.mode,x),u.return=c,u):(u=l(u,d.children||[]),u.return=c,u)}function g(c,u,d,x,E){return u===null||u.tag!==7?(u=Nt(d,c.mode,x,E),u.return=c,u):(u=l(u,d),u.return=c,u)}function h(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$l(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return d=Lr(u.type,u.key,u.props,null,c.mode,d),d.ref=vn(c,null,u),d.return=c,d;case Rt:return u=Ql(u,c.mode,d),u.return=c,u;case qe:var x=u._init;return h(c,x(u._payload),d)}if(wn(u)||fn(u))return u=Nt(u,c.mode,d,null),u.return=c,u;mr(c,u)}return null}function m(c,u,d,x){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(c,u,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===E?s(c,u,d,x):null;case Rt:return d.key===E?f(c,u,d,x):null;case qe:return E=d._init,m(c,u,E(d._payload),x)}if(wn(d)||fn(d))return E!==null?null:g(c,u,d,x,null);mr(c,d)}return null}function v(c,u,d,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(d)||null,a(u,c,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rr:return c=c.get(x.key===null?d:x.key)||null,s(u,c,x,E);case Rt:return c=c.get(x.key===null?d:x.key)||null,f(u,c,x,E);case qe:var N=x._init;return v(c,u,d,N(x._payload),E)}if(wn(x)||fn(x))return c=c.get(d)||null,g(u,c,x,E,null);mr(u,x)}return null}function y(c,u,d,x){for(var E=null,N=null,_=u,j=u=0,W=null;_!==null&&j<d.length;j++){_.index>j?(W=_,_=null):W=_.sibling;var M=m(c,_,d[j],x);if(M===null){_===null&&(_=W);break}e&&_&&M.alternate===null&&t(c,_),u=i(M,u,j),N===null?E=M:N.sibling=M,N=M,_=W}if(j===d.length)return n(c,_),A&&xt(c,j),E;if(_===null){for(;j<d.length;j++)_=h(c,d[j],x),_!==null&&(u=i(_,u,j),N===null?E=_:N.sibling=_,N=_);return A&&xt(c,j),E}for(_=r(c,_);j<d.length;j++)W=v(_,c,j,d[j],x),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?j:W.key),u=i(W,u,j),N===null?E=W:N.sibling=W,N=W);return e&&_.forEach(function(ze){return t(c,ze)}),A&&xt(c,j),E}function k(c,u,d,x){var E=fn(d);if(typeof E!="function")throw Error(w(150));if(d=E.call(d),d==null)throw Error(w(151));for(var N=E=null,_=u,j=u=0,W=null,M=d.next();_!==null&&!M.done;j++,M=d.next()){_.index>j?(W=_,_=null):W=_.sibling;var ze=m(c,_,M.value,x);if(ze===null){_===null&&(_=W);break}e&&_&&ze.alternate===null&&t(c,_),u=i(ze,u,j),N===null?E=ze:N.sibling=ze,N=ze,_=W}if(M.done)return n(c,_),A&&xt(c,j),E;if(_===null){for(;!M.done;j++,M=d.next())M=h(c,M.value,x),M!==null&&(u=i(M,u,j),N===null?E=M:N.sibling=M,N=M);return A&&xt(c,j),E}for(_=r(c,_);!M.done;j++,M=d.next())M=v(_,c,j,M.value,x),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?j:M.key),u=i(M,u,j),N===null?E=M:N.sibling=M,N=M);return e&&_.forEach(function(un){return t(c,un)}),A&&xt(c,j),E}function I(c,u,d,x){if(typeof d=="object"&&d!==null&&d.type===Dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var E=d.key,N=u;N!==null;){if(N.key===E){if(E=d.type,E===Dt){if(N.tag===7){n(c,N.sibling),u=l(N,d.props.children),u.return=c,c=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&ga(E)===N.type){n(c,N.sibling),u=l(N,d.props),u.ref=vn(c,N,d),u.return=c,c=u;break e}n(c,N);break}else t(c,N);N=N.sibling}d.type===Dt?(u=Nt(d.props.children,c.mode,x,d.key),u.return=c,c=u):(x=Lr(d.type,d.key,d.props,null,c.mode,x),x.ref=vn(c,u,d),x.return=c,c=x)}return o(c);case Rt:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),u=l(u,d.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=Ql(d,c.mode,x),u.return=c,c=u}return o(c);case qe:return N=d._init,I(c,u,N(d._payload),x)}if(wn(d))return y(c,u,d,x);if(fn(d))return k(c,u,d,x);mr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(c,u.sibling),u=l(u,d),u.return=c,c=u):(n(c,u),u=$l(d,c.mode,x),u.return=c,c=u),o(c)):n(c,u)}return I}var tn=nu(!0),ru=nu(!1),$r=ht(null),Qr=null,Wt=null,ao=null;function so(){ao=Wt=Qr=null}function uo(e){var t=$r.current;F($r),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Qr=e,ao=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Qr===null)throw Error(w(308));Wt=e,Qr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var St=null;function co(e){St===null?St=[e]:St.push(e)}function lu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,f=s.next;s.next=null,o===null?i=f:o.next=f,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=f:a.next=f,g.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,g=f=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,k=a;switch(m=t,v=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=V({},h,m);break e;case 2:be=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(f=g=v,s=h):g=g.next=v,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=f,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var bn={},Be=ht(bn),Wn=ht(bn),$n=ht(bn);function Et(e){if(e===bn)throw Error(w(174));return e}function po(e,t){switch(D($n,t),D(Wn,e),D(Be,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}F(Be),D(Be,t)}function nn(){F(Be),F(Wn),F($n)}function ou(e){Et($n.current);var t=Et(Be.current),n=ti(t,e.type);t!==n&&(D(Wn,e),D(Be,n))}function mo(e){Wn.current===e&&(F(Be),F(Wn))}var U=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function ho(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Nr=Ze.ReactCurrentDispatcher,Ul=Ze.ReactCurrentBatchConfig,zt=0,B=null,K=null,J=null,Kr=!1,zn=!1,Qn=0,Jf=0;function ne(){throw Error(w(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function go(e,t,n,r,l,i){if(zt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?td:nd,e=n(r,l),zn){i=0;do{if(zn=!1,Qn=0,25<=i)throw Error(w(301));i+=1,J=K=null,t.updateQueue=null,Nr.current=rd,e=n(r,l)}while(zn)}if(Nr.current=Xr,t=K!==null&&K.next!==null,zt=0,J=K=B=null,Kr=!1,t)throw Error(w(300));return e}function yo(){var e=Qn!==0;return Qn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function je(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Gn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,f=i;do{var g=f.lane;if((zt&g)===g)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,B.lanes|=g,Pt|=g}f=f.next}while(f!==null&&f!==i);s===null?o=r:s.next=a,De(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function au(){}function su(e,t){var n=B,r=je(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,xo(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,cu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(w(349));zt&30||uu(n,t,l)}return l}function uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,du(t)&&pu(e)}function fu(e,t,n){return n(function(){du(t)&&pu(e)})}function du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function pu(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function wa(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=ed.bind(null,B,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return je().memoizedState}function _r(e,t,n,r){var l=Fe();B.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=je();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Yn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function ka(e,t){return _r(8390656,8,e,t)}function xo(e,t){return sl(2048,8,e,t)}function hu(e,t){return sl(4,2,e,t)}function vu(e,t){return sl(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,gu.bind(null,t,e),n)}function wo(){}function xu(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wu(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ku(e,t,n){return zt&21?(De(n,t)||(n=_s(),B.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function qf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{R=n,Ul.transition=r}}function Su(){return je().memoizedState}function bf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Cu(t,n);else if(n=lu(e,t,n,r),n!==null){var l=ae();Re(n,e,r,l),Nu(n,t,r)}}function ed(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Cu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,De(a,o)){var s=t.interleaved;s===null?(l.next=l,co(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=lu(e,t,l,r),n!==null&&(l=ae(),Re(n,e,r,l),Nu(n,t,r))}}function Eu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Cu(e,t){zn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xr={readContext:_e,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},td={readContext:_e,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=qf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Fe();if(A){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),q===null)throw Error(w(349));zt&30||uu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ka(fu.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,cu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=q.identifierPrefix;if(A){var n=$e,r=We;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nd={readContext:_e,useCallback:xu,useContext:_e,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Bl,useRef:mu,useState:function(){return Bl(Gn)},useDebugValue:wo,useDeferredValue:function(e){var t=je();return ku(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Gn)[0],t=je().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1},rd={readContext:_e,useCallback:xu,useContext:_e,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Vl,useRef:mu,useState:function(){return Vl(Gn)},useDebugValue:wo,useDeferredValue:function(e){var t=je();return K===null?t.memoizedState=e:ku(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Gn)[0],t=je().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Re(t,e,r,n),Cr(t,e,r))}};function Sa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function _u(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=pe(t)?_t:ie.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=pe(t)?_t:ie.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Gr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ld=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Ri=r),Ci(e,t)},n}function zu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ca(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ld;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=yd.bind(null,e,t,n),t.then(e,e))}function Na(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _a(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var id=Ze.ReactCurrentOwner,fe=!1;function oe(e,t,n,r){t.child=e===null?ru(t,null,n,r):tn(t,e.child,n,r)}function ja(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=go(e,t,n,r,i,l),n=yo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&n&&lo(t),t.flags|=1,oe(e,t,r,l),t.child)}function za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!zo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ni(e,t,n,r,l)}function Lu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Qt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Qt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Qt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Qt,he),he|=r;return oe(e,t,l,n),t.child}function Mu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,l){var i=pe(n)?_t:ie.current;return i=bt(t,i),Zt(t,l),n=go(e,t,n,r,i,l),r=yo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&r&&lo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Pa(e,t,n,r,l){if(pe(n)){var i=!0;Vr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)jr(e,t),_u(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=_e(f):(f=pe(n)?_t:ie.current,f=bt(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==f)&&Ea(t,o,r,f),be=!1;var m=t.memoizedState;o.state=m,Gr(t,r,o,l),s=t.memoizedState,a!==r||m!==s||de.current||be?(typeof g=="function"&&(Si(t,n,g,r),s=t.memoizedState),(a=be||Sa(t,n,a,r,m,s,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,iu(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Le(t.type,a),o.props=f,h=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=pe(n)?_t:ie.current,s=bt(t,s));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Ea(t,o,r,s),be=!1,m=t.memoizedState,o.state=m,Gr(t,r,o,l);var y=t.memoizedState;a!==h||m!==y||de.current||be?(typeof v=="function"&&(Si(t,n,v,r),y=t.memoizedState),(f=be||Sa(t,n,f,r,m,y,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _i(e,t,n,r,i,l)}function _i(e,t,n,r,l,i){Mu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ma(t,n,!1),Xe(e,t,i);r=t.stateNode,id.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,a,i)):oe(e,t,a,i),t.memoizedState=r.state,l&&ma(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function La(e,t,n,r,l){return en(),oo(l),t.flags|=256,oe(e,t,n,r),t.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zi(n),t.memoizedState=ji,e):ko(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return od(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ft(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=ft(a,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=ji,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&oo(r),tn(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function od(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(w(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=zi(o),t.memoizedState=ji,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Hl(i,r,void 0),hr(e,t,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Re(r,e,l,-1))}return jo(),r=Hl(Error(w(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=at(l.nextSibling),ge=t,A=!0,Te=null,e!==null&&(Se[Ee++]=We,Se[Ee++]=$e,Se[Ee++]=jt,We=e.id,$e=e.overflow,jt=t),t=ko(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ru(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ad(e,t,n){switch(t.tag){case 3:Tu(t),en();break;case 5:ou(t);break;case 1:pe(t.type)&&Vr(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D($r,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Iu(e,t,n):(D(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ru(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return Xe(e,t,n)}var Du,Pi,Ou,Fu;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Be.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ni(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Tn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var s=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&s!==a&&(s!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(f,n)),n=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Tn.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&O("scroll",e),i||a===s||(i=[])):(i=i||[]).push(f,s))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sd(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Br(),re(t),null;case 3:return r=t.stateNode,nn(),F(de),F(ie),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Fi(Te),Te=null))),Pi(e,t),re(t),null;case 5:mo(t);var l=Et($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return re(t),null}if(e=Et(Be.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Hn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Ho(r,i),O("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Tn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":lr(r),Vo(r,i,!0);break;case"textarea":lr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Hn]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Bo(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ho(e,r),l=ei(e,r),O("invalid",e);break;default:l=r}ni(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ms(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ds(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&In(e,s):typeof s=="number"&&In(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&O("scroll",e):s!=null&&$i(e,i,s,o))}switch(n){case"input":lr(e),Vo(e,r,!1);break;case"textarea":lr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Et($n.current),Et(Be.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return re(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))tu(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ae]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Te!==null&&(Fi(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):jo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return nn(),Pi(e,t),e===null&&Bn(t.stateNode.containerInfo),re(t),null;case 10:return uo(t.type._context),re(t),null;case 17:return pe(t.type)&&Br(),re(t),null;case 19:if(F(U),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return re(t),null}else 2*G()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return _o(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function ud(e,t){switch(io(t),t.tag){case 1:return pe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),F(de),F(ie),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return nn(),null;case 10:return uo(t.type._context),null;case 22:case 23:return _o(),null;case 24:return null;default:return null}}var vr=!1,le=!1,cd=typeof WeakSet=="function"?WeakSet:Set,S=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){H(e,t,r)}}var Ta=!1;function fd(e,t){if(pi=Or,e=Hs(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++f===l&&(a=o),m===i&&++g===r&&(s=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,I=y.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),I);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){H(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=Ta,Ta=!1,y}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Au(e){var t=e.alternate;t!==null&&(e.alternate=null,Au(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Hn],delete t[gi],delete t[Yf],delete t[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}var b=null,Me=!1;function Je(e,t,n){for(n=n.child;n!==null;)Bu(e,t,n),n=n.sibling}function Bu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:le||$t(n,t);case 6:var r=b,l=Me;b=null,Je(e,t,n),b=r,Me=l,b!==null&&(Me?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(Me?(e=b,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Fn(e)):Ol(b,n.stateNode));break;case 4:r=b,l=Me,b=n.stateNode.containerInfo,Me=!0,Je(e,t,n),b=r,Me=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!le&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Je(e,t,n),le=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ra(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cd),t.forEach(function(r){var l=wd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:b=a.stateNode,Me=!1;break e;case 3:b=a.stateNode.containerInfo,Me=!0;break e;case 4:b=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(b===null)throw Error(w(160));Bu(i,o,l),b=null,Me=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(f){H(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(k){H(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:Pe(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(Pe(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){H(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&us(l,i),ri(a,o);var f=ri(a,i);for(o=0;o<s.length;o+=2){var g=s[o],h=s[o+1];g==="style"?ms(l,h):g==="dangerouslySetInnerHTML"?ds(l,h):g==="children"?In(l,h):$i(l,g,h,f)}switch(a){case"input":ql(l,i);break;case"textarea":cs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Gt(l,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Gt(l,!!i.multiple,i.defaultValue,!0):Gt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Hn]=i}catch(k){H(e,e.return,k)}}break;case 6:if(Pe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){H(e,e.return,k)}}break;case 3:if(Pe(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Co=G())),r&4&&Ra(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(f=le)||g,Pe(t,e),le=f):Pe(t,e),Oe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,v=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:$t(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Oa(h);continue}}v!==null?(v.return=m,S=v):Oa(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ps("display",o))}catch(k){H(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(k){H(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Oe(e),r&4&&Ra(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uu(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Ia(e);Ii(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ia(e);Ti(e,a,o);break;default:throw Error(w(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e,t,n){S=e,Hu(e)}function Hu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||vr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||le;a=vr;var f=le;if(vr=o,(le=s)&&!f)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Fa(l):s!==null?(s.return=o,S=s):Fa(l);for(;i!==null;)S=i,Hu(i),i=i.sibling;S=l,vr=a,le=f}Da(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Da(e)}}function Da(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Fn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Mi(t)}catch(m){H(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Oa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var i=t.return;try{Mi(t)}catch(s){H(t,i,s)}break;case 5:var o=t.return;try{Mi(t)}catch(s){H(t,o,s)}}}catch(s){H(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var pd=Math.ceil,Zr=Ze.ReactCurrentDispatcher,So=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,T=0,q=null,Y=null,ee=0,he=0,Qt=ht(0),X=0,Kn=null,Pt=0,fl=0,Eo=0,Ln=null,ce=null,Co=0,ln=1/0,Ve=null,Jr=!1,Ri=null,ut=null,gr=!1,rt=null,qr=0,Mn=0,Di=null,zr=-1,Pr=0;function ae(){return T&6?G():zr!==-1?zr:zr=G()}function ct(e){return e.mode&1?T&2&&ee!==0?ee&-ee:Zf.transition!==null?(Pr===0&&(Pr=_s()),Pr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function Re(e,t,n,r){if(50<Mn)throw Mn=0,Di=null,Error(w(185));Zn(e,n,r),(!(T&2)||e!==q)&&(e===q&&(!(T&2)&&(fl|=n),X===4&&tt(e,ee)),me(e,r),n===1&&T===0&&!(t.mode&1)&&(ln=G()+500,al&&vt()))}function me(e,t){var n=e.callbackNode;Xc(e,t);var r=Dr(e,e===q?ee:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?Xf(Aa.bind(null,e)):qs(Aa.bind(null,e)),Qf(function(){!(T&6)&&vt()}),n=null;else{switch(js(r)){case 1:n=Xi;break;case 4:n=Cs;break;case 16:n=Rr;break;case 536870912:n=Ns;break;default:n=Rr}n=Zu(n,Wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wu(e,t){if(zr=-1,Pr=0,T&6)throw Error(w(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Dr(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=T;T|=2;var i=Qu();(q!==e||ee!==t)&&(Ve=null,ln=G()+500,Ct(e,t));do try{vd();break}catch(a){$u(e,a)}while(!0);so(),Zr.current=i,T=l,Y!==null?t=0:(q=null,ee=0,t=X)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Oi(e,l))),t===1)throw n=Kn,Ct(e,0),tt(e,r),me(e,G()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!md(l)&&(t=br(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Oi(e,i))),t===1))throw n=Kn,Ct(e,0),tt(e,r),me(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:wt(e,ce,Ve);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Co+500-G(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wt.bind(null,e,ce,Ve),t);break}wt(e,ce,Ve);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pd(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,ce,Ve),r);break}wt(e,ce,Ve);break;case 5:wt(e,ce,Ve);break;default:throw Error(w(329))}}}return me(e,G()),e.callbackNode===n?Wu.bind(null,e):null}function Oi(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=br(e,t),e!==2&&(t=ce,ce=n,t!==null&&Fi(t)),e}function Fi(e){ce===null?ce=e:ce.push.apply(ce,e)}function md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Eo,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Aa(e){if(T&6)throw Error(w(327));Jt();var t=Dr(e,0);if(!(t&1))return me(e,G()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Oi(e,r))}if(n===1)throw n=Kn,Ct(e,0),tt(e,t),me(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,Ve),me(e,G()),null}function No(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(ln=G()+500,al&&vt())}}function Lt(e){rt!==null&&rt.tag===0&&!(T&6)&&Jt();var t=T;T|=1;var n=Ne.transition,r=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=r,Ne.transition=n,T=t,!(T&6)&&vt()}}function _o(){he=Qt.current,F(Qt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$f(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),F(de),F(ie),ho();break;case 5:mo(r);break;case 4:nn();break;case 13:F(U);break;case 19:F(U);break;case 10:uo(r.type._context);break;case 22:case 23:_o()}n=n.return}if(q=e,Y=e=ft(e.current,null),ee=he=t,X=0,Kn=null,Eo=fl=Pt=0,ce=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function $u(e,t){do{var n=Y;try{if(so(),Nr.current=Xr,Kr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(zt=0,J=K=B=null,zn=!1,Qn=0,So.current=null,n===null||n.return===null){X=1,Kn=t,Y=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Na(o);if(v!==null){v.flags&=-257,_a(v,o,a,i,t),v.mode&1&&Ca(i,f,t),t=v,s=f;var y=t.updateQueue;if(y===null){var k=new Set;k.add(s),t.updateQueue=k}else y.add(s);break e}else{if(!(t&1)){Ca(i,f,t),jo();break e}s=Error(w(426))}}else if(A&&a.mode&1){var I=Na(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),_a(I,o,a,i,t),oo(rn(s,a));break e}}i=s=rn(s,a),X!==4&&(X=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=ju(i,s,t);ya(i,c);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ut===null||!ut.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=zu(i,a,t);ya(i,x);break e}}i=i.return}while(i!==null)}Yu(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Qu(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function jo(){(X===0||X===3||X===2)&&(X=4),q===null||!(Pt&268435455)&&!(fl&268435455)||tt(q,ee)}function br(e,t){var n=T;T|=2;var r=Qu();(q!==e||ee!==t)&&(Ve=null,Ct(e,t));do try{hd();break}catch(l){$u(e,l)}while(!0);if(so(),T=n,Zr.current=r,Y!==null)throw Error(w(261));return q=null,ee=0,X}function hd(){for(;Y!==null;)Gu(Y)}function vd(){for(;Y!==null&&!Bc();)Gu(Y)}function Gu(e){var t=Xu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Yu(e):Y=t,So.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ud(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=sd(n,t,he),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function wt(e,t,n){var r=R,l=Ne.transition;try{Ne.transition=null,R=1,gd(e,t,n,r)}finally{Ne.transition=l,R=r}return null}function gd(e,t,n,r){do Jt();while(rt!==null);if(T&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zc(e,i),e===q&&(Y=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zu(Rr,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=R;R=1;var a=T;T|=4,So.current=null,fd(e,n),Vu(n,e),Ff(mi),Or=!!pi,mi=pi=null,e.current=n,dd(n),Vc(),T=a,R=o,Ne.transition=i}else e.current=n;if(gr&&(gr=!1,rt=e,qr=l),i=e.pendingLanes,i===0&&(ut=null),$c(n.stateNode),me(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Ri,Ri=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Di?Mn++:(Mn=0,Di=e):Mn=0,vt(),null}function Jt(){if(rt!==null){var e=js(qr),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qr=0,T&6)throw Error(w(331));var l=T;for(T|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var f=a[s];for(S=f;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Pn(8,g,i)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,v=g.return;if(Au(g),g===f){S=null;break}if(m!==null){m.return=v,S=m;break}S=v}}}var y=i.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,S=c;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(E){H(a,a.return,E)}if(a===o){S=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,S=x;break e}S=a.return}}if(T=l,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{R=n,Ne.transition=t}}return!1}function Ua(e,t,n){t=rn(n,t),t=ju(e,t,1),e=st(e,t,1),t=ae(),e!==null&&(Zn(e,1,t),me(e,t))}function H(e,t,n){if(e.tag===3)Ua(e,e,n);else for(;t!==null;){if(t.tag===3){Ua(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=zu(t,e,1),t=st(t,e,1),e=ae(),t!==null&&(Zn(t,1,e),me(t,e));break}}t=t.return}}function yd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>G()-Co?Ct(e,0):Eo|=n),me(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=Ke(e,t),e!==null&&(Zn(e,t,n),me(e,n))}function xd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function wd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Ku(e,n)}var Xu;Xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,ad(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&bs(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var l=bt(t,ie.current);Zt(t,n),l=go(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Vr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=_i(null,t,r,!0,i,n)):(t.tag=0,A&&i&&lo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Sd(r),e=Le(r,e),l){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Pa(null,t,r,e,n);break e;case 11:t=ja(null,t,r,e,n);break e;case 14:t=za(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ni(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Pa(e,t,r,l,n);case 3:e:{if(Tu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,iu(e,t),Gr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(w(423)),t),t=La(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(w(424)),t),t=La(e,t,r,n,l);break e}else for(ve=at(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Te=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Mu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Iu(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ja(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D($r,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!de.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qe(-1,n&-n),s.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ki(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=_e(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),za(e,t,r,l,n);case 15:return Pu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),jr(e,t),t.tag=1,pe(r)?(e=!0,Vr(t)):e=!1,Zt(t,n),_u(t,r,l),Ei(t,r,l,n),_i(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return Lu(e,t,n)}throw Error(w(156,t.tag))};function Zu(e,t){return Es(e,t)}function kd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new kd(e,t,n,r)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sd(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Yi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return Nt(n.children,l,i,t);case Qi:o=8,l|=8;break;case Yl:return e=Ce(12,n,t,l|2),e.elementType=Yl,e.lanes=i,e;case Kl:return e=Ce(13,n,t,l),e.elementType=Kl,e.lanes=i,e;case Xl:return e=Ce(19,n,t,l),e.elementType=Xl,e.lanes=i,e;case os:return dl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:o=10;break e;case is:o=9;break e;case Gi:o=11;break e;case Yi:o=14;break e;case qe:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=os,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ed(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,r,l,i,o,a,s){return e=new Ed(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function Cd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ju(e){if(!e)return pt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(pe(n))return Js(e,n,t)}return t}function qu(e,t,n,r,l,i,o,a,s){return e=Po(n,r,!0,e,l,i,o,a,s),e.context=Ju(null),n=e.current,r=ae(),l=ct(n),i=Qe(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,Zn(e,l,r),me(e,r),e}function pl(e,t,n,r){var l=t.current,i=ae(),o=ct(l);return n=Ju(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(Re(e,l,o,i),Cr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Ba(e,t),(e=e.alternate)&&Ba(e,t)}function Nd(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}ml.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));pl(e,t,null,null)};ml.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ye]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ts(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function _d(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=el(o);i.call(f)}}var o=qu(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=o,e[Ye]=o.current,Bn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=el(s);a.call(f)}}var s=Po(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=s,e[Ye]=s.current,Bn(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,s,n,r)}),s}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=el(o);a.call(s)}}pl(t,o,e,l)}else o=_d(n,t,e,l,r);return el(o)}zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Zi(t,n|1),me(t,G()),!(T&6)&&(ln=G()+500,vt()))}break;case 13:Lt(function(){var r=Ke(e,1);if(r!==null){var l=ae();Re(r,e,1,l)}}),Lo(e,1)}};Ji=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}Lo(e,134217728)}};Ps=function(e){if(e.tag===13){var t=ct(e),n=Ke(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}Lo(e,t)}};Ls=function(){return R};Ms=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(w(90));ss(r),ql(r,l)}}}break;case"textarea":cs(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};gs=No;ys=Lt;var jd={usingClientEntryPoint:!1,Events:[qn,Ut,ol,hs,vs,No]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zd={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(zd),Ue=yr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(t))throw Error(w(200));return Cd(e,t,null,n)};xe.createRoot=function(e,t){if(!To(e))throw Error(w(299));var n=!1,r="",l=bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Mo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Lt(e)};xe.hydrate=function(e,t,n){if(!hl(t))throw Error(w(200));return vl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!To(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=bu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qu(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};xe.render=function(e,t,n){if(!hl(t))throw Error(w(200));return vl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!hl(e))throw Error(w(40));return e._reactRootContainer?(Lt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=No;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return vl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=xe;var Pd=es.exports,tc,Ha=Pd;tc=Ha.createRoot,Ha.hydrateRoot;const Q={personal:{name:"Yashasvi Nagar",tagline:"Graduate Student | AI & Data Engineering",email:"nagaryashasvi@gmail.com",phone:"(617) 212-8032",linkedin:"https://www.linkedin.com/in/yashasvi-nagar-b627542b2",github:"https://github.com/yashasvi1102",bio:["I am a Master's student in Information Systems at Northeastern University with a strong focus on <strong>Artificial Intelligence</strong>, <strong>Data Engineering</strong>, and <strong>Knowledge Graph systems</strong>. My work centers around building AI-powered data systems that combine machine learning, GraphRAG architectures, and scalable data pipelines to extract insights from complex datasets.","Currently, I work as a <strong>GraphRAG AI Full-Stack Co-Op at CareerGPT</strong>, where I develop graph-based AI features and build intelligent knowledge retrieval systems using Neo4j and modern AI frameworks.","My experience includes developing knowledge graph systems, machine learning models, data pipelines, and AI-powered analytics platforms using technologies such as Python, Azure, Snowflake, Databricks, and Neo4j.","I am passionate about solving real-world problems using AI, machine learning, and data engineering, and I am actively seeking opportunities in <strong>AI Engineering</strong>, <strong>Data Engineering</strong>, and <strong>Machine Learning</strong> roles."]},whatIDo:[{title:"AI & GraphRAG Systems",description:"I build intelligent AI systems using Knowledge Graphs and GraphRAG architectures, combining Neo4j with LLMs for natural language querying and intelligent data retrieval.",github:"https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant",icon:"ai"},{title:"Natural Language Processing",description:"I develop NLP solutions including emotion recognition, sentiment analysis, and context-aware models using PyTorch, BERT, and transformer architectures.",github:"https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations",icon:"nlp"},{title:"Data Engineering & ETL",description:"I design and implement scalable data pipelines using Medallion Architecture, Azure Data Factory, Databricks, and Snowflake for end-to-end data solutions.",github:"https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-",icon:"pipeline"},{title:"Database Design & Modeling",description:"I architect robust database solutions with dimensional modeling, OLTP to Data Warehouse migrations, and optimized schema designs using SQL Server and Oracle.",github:"https://github.com/yashasvi1102/IMDb-Team-Project",icon:"database"},{title:"Machine Learning",description:"I develop predictive models and ML solutions using Python and R, implementing algorithms for classification, regression, and data-driven insights.",github:"https://github.com/yashasvi1102/Wine-Quality-Project",icon:"ml"},{title:"Data Visualization & Analytics",description:"I create insightful dashboards and visualizations using Tableau and Power BI, transforming complex data into actionable business intelligence.",github:"https://github.com/yashasvi1102/Kansas-City-Service-Operations",icon:"chart"}],projects:[{id:1,title:"CrimeGraphRAG – AI Crime Investigation Assistant",description:"Built an AI-powered investigation system using Neo4j and GraphRAG. Designed a knowledge graph connecting crimes, suspects, organizations, and locations with natural language querying capabilities.",tags:["Neo4j","GraphRAG","Streamlit","Python"],github:"https://github.com/yashasvi1102/CrimeGraphRAG-AI-Crime-Investigation-Assistant"},{id:2,title:"Emotion Recognition in Multi-Turn Conversations",description:"Built a context-aware emotion detection system using the MELD dataset (13k+ utterances). Implemented BERT, DialogueRNN, and attention-based models achieving 70.4% accuracy across 7 emotional categories.",tags:["PyTorch","BERT","NLP","Streamlit"],github:"https://github.com/yashasvi1102/Emmotion-Recognition-in-Multi-Turn-Conversations"},{id:3,title:"End-to-End LA Crime Analytics – Medallion Architecture",description:"Designed and implemented a complete data lakehouse solution using Databricks with Bronze, Silver, and Gold layers for LA crime data analysis. Built scalable ETL pipelines for crime trend analytics.",tags:["Databricks","Medallion","Spark","Azure"],github:"https://github.com/yashasvi1102/End-to-End-LA-Crime-Analytics-Medallion-Architecture-"},{id:4,title:"IMDB Project",description:"A comprehensive IMDb data analysis project featuring database design, data modeling, and analytics on movie ratings, cast information, and box office performance trends.",tags:["SQL","Data Modeling","Analytics"],github:"https://github.com/yashasvi1102/IMDb-Team-Project"},{id:5,title:"Wine Quality Prediction",description:"A machine learning project analyzing wine quality factors using R. Implements various ML algorithms for quality prediction based on chemical properties and sensory data.",tags:["R","Data Analysis","ML"],github:"https://github.com/yashasvi1102/Wine-Quality-Project"}]};function Ld(){const[e,t]=ke.useState("hero"),[n,r]=ke.useState(!1),[l,i]=ke.useState(!1),[o,a]=ke.useState(0);ke.useEffect(()=>{const v=setInterval(()=>{a(y=>(y+1)%Q.projects.length)},5e3);return()=>clearInterval(v)},[]);const s=()=>{a(v=>(v+1)%Q.projects.length)},f=()=>{a(v=>(v-1+Q.projects.length)%Q.projects.length)};ke.useEffect(()=>{const v=()=>{r(window.scrollY>50);const y=["hero","about","projects","whatido","contact"],k=window.scrollY+200;for(const I of y){const c=document.getElementById(I);if(c){const u=c.offsetTop,d=c.offsetHeight;if(k>=u&&k<u+d){t(I);break}}}};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const g=()=>{const[v,y]=ke.useState(!1),k=ke.useRef(null);return ke.useEffect(()=>{const I=new IntersectionObserver(([c])=>{c.isIntersecting&&y(!0)},{threshold:.1});return k.current&&I.observe(k.current),()=>I.disconnect()},[]),[k,v]},h=["About","Projects","What I Do","Contact"],m=({children:v,className:y=""})=>{const[k,I]=g();return p.jsx("div",{ref:k,className:`reveal ${I?"active":""} ${y}`,children:v})};return p.jsxs("div",{className:"portfolio",children:[p.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        :root {
          --primary: #00d4ff;
          --primary-glow: rgba(0, 212, 255, 0.4);
          --bg-dark: #0a0a0f;
          --bg-card: #12121a;
          --bg-card-hover: #1a1a25;
          --text-primary: #ffffff;
          --text-secondary: #c8c8d8;
          --text-muted: #9090a5;
          --border: #2a2a3a;
          --gradient-1: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .portfolio {
          font-family: 'Rajdhani', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        /* Background Animation */
        .bg-animation {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .bg-animation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(0, 102, 255, 0.08) 0%, transparent 50%);
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .particles { position: absolute; inset: 0; }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.3;
          animation: float 15s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-100px) scale(1.5); opacity: 0.6; }
        }
        
        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1rem 2rem;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          padding: 0.5rem 2rem;
          background: rgba(10, 10, 15, 0.95);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        
        .logo span { color: white; }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-links a:hover, .nav-links a.active { color: var(--primary); }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
        
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        
        .mobile-menu span {
          width: 25px;
          height: 2px;
          background: var(--primary);
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .resume-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 20px var(--primary-glow);
        }
        
        .resume-btn svg {
          width: 16px;
          height: 16px;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .resume-btn:hover {
          background: var(--primary);
          color: var(--bg-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 20px var(--primary-glow);
        }
        
        .resume-btn svg {
          width: 16px;
          height: 16px;
        }
        
        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-greeting {
          font-family: 'Space Mono', monospace;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .hero-greeting::before {
          content: '';
          width: 30px;
          height: 2px;
          background: var(--primary);
        }
        
        .hero-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }
        
        .hero-title {
          font-size: 1.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        
        .hero-description {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 500px;
          margin-bottom: 2rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .btn {
          padding: 1rem 2rem;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        }
        
        .btn-primary {
          background: var(--gradient-1);
          color: var(--bg-dark);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px var(--primary-glow);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
        }
        
        .hero-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        
        .social-link svg {
          width: 24px;
          height: 24px;
        }
        
        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-3px);
        }
        
        .hero-image-container {
          position: relative;
          width: 220px;
          margin: 0 auto;
        }
        
        .hero-image-container img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          position: relative;
          z-index: 1;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
        }
        
        .hero-image-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 100%;
          background: radial-gradient(ellipse at center top, rgba(0, 212, 255, 0.12) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        
        .hero-image-dots {
          display: none;
        }
        
        .hero-image-dots.top-right,
        .hero-image-dots.bottom-left {
          display: none;
        }
        
        /* Sections */
        section {
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .section-label::before, .section-label::after {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--primary);
        }
        
        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
        }
        
        .section-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          margin: 1rem auto 0;
        }
        
        /* About */
        .about-text p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary), transparent);
        }
        
        .timeline-item {
          position: relative;
          padding: 0 0 3rem 2rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 0;
          width: 16px;
          height: 16px;
          background: var(--bg-dark);
          border: 3px solid var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--primary-glow);
        }
        
        .timeline-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all 0.3s;
        }
        
        .timeline-card:hover {
          border-color: var(--primary);
          transform: translateX(10px);
        }
        
        .timeline-date {
          font-family: 'Space Mono', monospace;
          color: var(--primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-company {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          list-style: none;
          color: var(--text-secondary);
        }
        
        .timeline-description li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }
        
        .timeline-description li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        
        /* Projects Slideshow */
        .slideshow-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .slideshow-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
        }
        
        .slide {
          display: none;
          width: 100%;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .slide.active {
          display: block;
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-content {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2.5rem;
          clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px));
        }
        
        .slide-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .slide-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          background: rgba(0, 212, 255, 0.1);
          color: var(--primary);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }
        
        .slide-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        
        .slide-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        
        .slide-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .slide-link:hover {
          gap: 1rem;
        }
        
        .slide-link svg {
          width: 20px;
          height: 20px;
        }
        
        .slide-arrow {
          width: 50px;
          height: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .slide-arrow:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 212, 255, 0.1);
        }
        
        .slide-arrow svg {
          width: 24px;
          height: 24px;
        }
        
        .slide-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        
        .slide-dot {
          width: 12px;
          height: 12px;
          border: 2px solid var(--border);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .slide-dot:hover {
          border-color: var(--primary);
        }
        
        .slide-dot.active {
          background: var(--primary);
          border-color: var(--primary);
        }
        
        /* What I Do */
        .whatido-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .whatido-card {
          background: var(--bg-card);
          padding: 2.5rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          transition: all 0.3s;
          text-decoration: none;
          display: block;
        }
        
        .whatido-card:hover {
          border-color: var(--primary);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15);
        }
        
        .whatido-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 1.5rem;
          color: var(--primary);
          transition: all 0.3s;
        }
        
        .whatido-icon svg {
          width: 100%;
          height: 100%;
        }
        
        .whatido-card:hover .whatido-icon {
          transform: scale(1.1);
        }
        
        .whatido-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          transition: color 0.3s;
        }
        
        .whatido-card:hover .whatido-title {
          color: var(--primary);
        }
        
        .whatido-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }
        
        /* Contact */
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }
        
        .whatido-card:hover .whatido-link {
          gap: 0.75rem;
        }
        
        /* Education */
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        
        .education-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          border-left: 4px solid var(--primary);
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px));
          transition: all 0.3s;
        }
        
        .education-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .education-degree {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .education-school {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .education-date {
          font-family: 'Space Mono', monospace;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        /* Certifications */
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .cert-card {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s;
        }
        
        .cert-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .cert-icon {
          font-size: 2.5rem;
        }
        
        .cert-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .cert-issuer {
          color: var(--primary);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        
        .cert-date {
          font-family: 'Space Mono', monospace;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        
        /* Contact */
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 1.5rem;
          text-decoration: none;
          text-align: center;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          transition: all 0.3s;
        }
        
        .contact-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
          color: var(--primary);
          transition: all 0.3s;
        }
        
        .contact-icon svg {
          width: 100%;
          height: 100%;
        }
        
        .contact-card:hover .contact-icon {
          transform: scale(1.1);
        }
        
        .contact-label {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        
        .contact-value {
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        
        /* Footer */
        footer {
          padding: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-text {
          color: var(--text-muted);
        }
        
        .footer-text span { color: var(--primary); }
        
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover { color: var(--primary); }
        
        /* Reveal Animation */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-name { font-size: 3rem; }
          .hero-buttons { justify-content: center; }
          .hero-social { justify-content: center; }
          .hero-image-container { width: 200px; }
          .slideshow-container { padding: 0 1rem; }
        }
        
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu { display: flex; }
          .resume-btn { padding: 0.5rem 0.8rem; font-size: 0.75rem; }
          .hero-name { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .whatido-grid { grid-template-columns: 1fr; }
          .slide-content { padding: 1.5rem; }
          .slide-title { font-size: 1.2rem; }
          .slide-description { font-size: 1rem; }
          .slide-arrow { width: 40px; height: 40px; }
          .hero-image-container { width: 180px; }
        }
      `}),p.jsxs("div",{className:"bg-animation",children:[p.jsx("div",{className:"grid-overlay"}),p.jsx("div",{className:"particles",children:[10,20,30,50,70,80,90,40].map((v,y)=>p.jsx("div",{className:"particle",style:{left:`${v}%`,top:`${[20,80,40,60,30,70,50,10][y]}%`,animationDelay:`${y*2}s`}},y))})]}),p.jsx("nav",{className:`navbar ${n?"scrolled":""}`,children:p.jsxs("div",{className:"nav-container",children:[p.jsxs("a",{href:"#hero",className:"logo",children:["Y",p.jsx("span",{children:"N"})]}),p.jsx("ul",{className:"nav-links",children:h.map(v=>{const y=v==="What I Do"?"whatido":v.toLowerCase();return p.jsx("li",{children:p.jsx("a",{href:`#${y}`,className:e===y?"active":"",children:v})},v)})}),p.jsxs("div",{className:"nav-right",children:[p.jsxs("a",{href:"yashasvi_resume.pdf",download:!0,className:"resume-btn",children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),p.jsx("polyline",{points:"7 10 12 15 17 10"}),p.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Resume"]}),p.jsxs("div",{className:"mobile-menu",onClick:()=>i(!l),children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]})]})]})}),p.jsx("section",{className:"hero",id:"hero",children:p.jsxs("div",{className:"hero-content",children:[p.jsxs("div",{className:"hero-text",children:[p.jsx("div",{className:"hero-greeting",children:"Hello, I'm"}),p.jsx("h1",{className:"hero-name",children:Q.personal.name}),p.jsx("h2",{className:"hero-title",children:Q.personal.tagline}),p.jsx("p",{className:"hero-description",children:"Building intelligent AI systems that combine machine learning, GraphRAG architectures, and scalable data pipelines to extract insights from complex datasets."}),p.jsxs("div",{className:"hero-social",children:[p.jsx("a",{href:Q.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:p.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),p.jsx("a",{href:Q.personal.github,target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"GitHub",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:p.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),p.jsx("a",{href:`mailto:${Q.personal.email}`,className:"social-link","aria-label":"Email",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[p.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})]}),p.jsx("div",{className:"hero-image",children:p.jsxs("div",{className:"hero-image-container",children:[p.jsx("div",{className:"hero-image-glow"}),p.jsx("div",{className:"hero-image-dots top-right"}),p.jsx("div",{className:"hero-image-dots bottom-left"}),p.jsx("img",{src:"yashasvi_photo.png",alt:"Yashasvi Nagar"})]})})]})}),p.jsx("section",{id:"about",children:p.jsxs("div",{className:"section-container",children:[p.jsx(m,{children:p.jsxs("div",{className:"section-header",children:[p.jsx("div",{className:"section-label",children:"Introduction"}),p.jsx("h2",{className:"section-title",children:"About Me"})]})}),p.jsx(m,{children:p.jsx("div",{className:"about-text",children:Q.personal.bio.map((v,y)=>p.jsx("p",{dangerouslySetInnerHTML:{__html:v}},y))})})]})}),p.jsx("section",{id:"projects",children:p.jsxs("div",{className:"section-container",children:[p.jsx(m,{children:p.jsxs("div",{className:"section-header",children:[p.jsx("div",{className:"section-label",children:"My Work"}),p.jsx("h2",{className:"section-title",children:"Featured Projects"}),p.jsx("p",{className:"section-subtitle",children:"A collection of projects showcasing my expertise in AI, data engineering, and machine learning"})]})}),p.jsxs("div",{className:"slideshow-container",children:[p.jsx("button",{className:"slide-arrow slide-prev",onClick:f,children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:p.jsx("polyline",{points:"15 18 9 12 15 6"})})}),p.jsx("div",{className:"slideshow-wrapper",children:Q.projects.map((v,y)=>p.jsx("div",{className:`slide ${y===o?"active":""}`,children:p.jsxs("div",{className:"slide-content",children:[p.jsx("div",{className:"slide-tags",children:v.tags.map(k=>p.jsx("span",{className:"slide-tag",children:k},k))}),p.jsx("h3",{className:"slide-title",children:v.title}),p.jsx("p",{className:"slide-description",children:v.description}),p.jsxs("a",{href:v.github,target:"_blank",rel:"noopener noreferrer",className:"slide-link",children:[p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20",children:p.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View on GitHub"]})]})},v.id))}),p.jsx("button",{className:"slide-arrow slide-next",onClick:s,children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:p.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),p.jsx("div",{className:"slide-dots",children:Q.projects.map((v,y)=>p.jsx("button",{className:`slide-dot ${y===o?"active":""}`,onClick:()=>a(y)},y))})]})}),p.jsx("section",{id:"whatido",children:p.jsxs("div",{className:"section-container",children:[p.jsx(m,{children:p.jsxs("div",{className:"section-header",children:[p.jsx("div",{className:"section-label",children:"My Expertise"}),p.jsx("h2",{className:"section-title",children:"What I Do"}),p.jsx("p",{className:"section-subtitle",children:"Specialized areas where I deliver impactful solutions"})]})}),p.jsx("div",{className:"whatido-grid",children:Q.whatIDo.map((v,y)=>{const k={ai:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:p.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),nlp:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[p.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),p.jsx("path",{d:"M8 9h8M8 13h6"})]}),pipeline:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:p.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),database:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[p.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),p.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),p.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),ml:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[p.jsx("circle",{cx:"12",cy:"12",r:"3"}),p.jsx("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]}),chart:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:p.jsx("path",{d:"M18 20V10M12 20V4M6 20v-6"})})};return p.jsx(m,{children:p.jsxs("a",{href:v.github,target:"_blank",rel:"noopener noreferrer",className:"whatido-card",children:[p.jsx("div",{className:"whatido-icon",children:k[v.icon]}),p.jsx("h3",{className:"whatido-title",children:v.title}),p.jsx("p",{className:"whatido-description",children:v.description})]})},y)})})]})}),p.jsx("section",{id:"contact",children:p.jsxs("div",{className:"section-container",children:[p.jsx(m,{children:p.jsxs("div",{className:"section-header",children:[p.jsx("div",{className:"section-label",children:"Get In Touch"}),p.jsx("h2",{className:"section-title",children:"Let's Connect"})]})}),p.jsx(m,{children:p.jsxs("div",{className:"contact-cards",children:[p.jsxs("a",{href:`mailto:${Q.personal.email}`,className:"contact-card",children:[p.jsx("div",{className:"contact-icon",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[p.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),p.jsx("div",{className:"contact-label",children:"Email"}),p.jsx("div",{className:"contact-value",children:Q.personal.email})]}),p.jsxs("a",{href:Q.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"contact-card",children:[p.jsx("div",{className:"contact-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),p.jsx("div",{className:"contact-label",children:"LinkedIn"}),p.jsx("div",{className:"contact-value",children:"Connect with me"})]}),p.jsxs("a",{href:Q.personal.github,target:"_blank",rel:"noopener noreferrer",className:"contact-card",children:[p.jsx("div",{className:"contact-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),p.jsx("div",{className:"contact-label",children:"GitHub"}),p.jsx("div",{className:"contact-value",children:"View my code"})]}),p.jsxs("a",{href:"tel:+16172128032",className:"contact-card",children:[p.jsx("div",{className:"contact-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),p.jsx("div",{className:"contact-label",children:"Phone"}),p.jsx("div",{className:"contact-value",children:Q.personal.phone})]})]})})]})}),p.jsx("footer",{children:p.jsxs("div",{className:"footer-content",children:[p.jsxs("p",{className:"footer-text",children:["© 2026 ",p.jsx("span",{children:"Yashasvi Nagar"}),". Designed with passion for AI & Data Engineering."]}),p.jsxs("div",{className:"footer-links",children:[p.jsx("a",{href:Q.personal.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),p.jsx("a",{href:Q.personal.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),p.jsx("a",{href:`mailto:${Q.personal.email}`,children:"Email"})]})]})})]})}function Md(){return p.jsx(Ld,{})}tc(document.getElementById("root")).render(p.jsx(ke.StrictMode,{children:p.jsx(Md,{})}));
