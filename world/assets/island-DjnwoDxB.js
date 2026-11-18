var Rx=Object.defineProperty;var Px=(s,e,t)=>e in s?Rx(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ct=(s,e,t)=>Px(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Lx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ih={exports:{}},ba={},Uh={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Dx(){if(_g)return Mt;_g=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(k,ee,Me){this.props=k,this.context=ee,this.refs=A,this.updater=Me||x}y.prototype.isReactComponent={},y.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(k,ee,Me){this.props=k,this.context=ee,this.refs=A,this.updater=Me||x}var C=w.prototype=new S;C.constructor=w,M(C,y.prototype),C.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,P={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function E(k,ee,Me){var Ue,Ne={},le=null,ve=null;if(ee!=null)for(Ue in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(le=""+ee.key),ee)U.call(ee,Ue)&&!D.hasOwnProperty(Ue)&&(Ne[Ue]=ee[Ue]);var de=arguments.length-2;if(de===1)Ne.children=Me;else if(1<de){for(var Re=Array(de),Xe=0;Xe<de;Xe++)Re[Xe]=arguments[Xe+2];Ne.children=Re}if(k&&k.defaultProps)for(Ue in de=k.defaultProps,de)Ne[Ue]===void 0&&(Ne[Ue]=de[Ue]);return{$$typeof:s,type:k,key:le,ref:ve,props:Ne,_owner:P.current}}function N(k,ee){return{$$typeof:s,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function V(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function O(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Me){return ee[Me]})}var B=/\/+/g;function Q(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):ee.toString(36)}function se(k,ee,Me,Ue,Ne){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(le){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case s:case e:ve=!0}}if(ve)return ve=k,Ne=Ne(ve),k=Ue===""?"."+Q(ve,0):Ue,b(Ne)?(Me="",k!=null&&(Me=k.replace(B,"$&/")+"/"),se(Ne,ee,Me,"",function(Xe){return Xe})):Ne!=null&&(V(Ne)&&(Ne=N(Ne,Me+(!Ne.key||ve&&ve.key===Ne.key?"":(""+Ne.key).replace(B,"$&/")+"/")+k)),ee.push(Ne)),1;if(ve=0,Ue=Ue===""?".":Ue+":",b(k))for(var de=0;de<k.length;de++){le=k[de];var Re=Ue+Q(le,de);ve+=se(le,ee,Me,Re,Ne)}else if(Re=m(k),typeof Re=="function")for(k=Re.call(k),de=0;!(le=k.next()).done;)le=le.value,Re=Ue+Q(le,de++),ve+=se(le,ee,Me,Re,Ne);else if(le==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function W(k,ee,Me){if(k==null)return k;var Ue=[],Ne=0;return se(k,Ue,"","",function(le){return ee.call(Me,le,Ne++)}),Ue}function K(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Me){(k._status===0||k._status===-1)&&(k._status=1,k._result=Me)},function(Me){(k._status===0||k._status===-1)&&(k._status=2,k._result=Me)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var Y={current:null},$={transition:null},re={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:W,forEach:function(k,ee,Me){W(k,function(){ee.apply(this,arguments)},Me)},count:function(k){var ee=0;return W(k,function(){ee++}),ee},toArray:function(k){return W(k,function(ee){return ee})||[]},only:function(k){if(!V(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Mt.Component=y,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=w,Mt.StrictMode=i,Mt.Suspense=d,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Mt.act=ae,Mt.cloneElement=function(k,ee,Me){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ue=M({},k.props),Ne=k.key,le=k.ref,ve=k._owner;if(ee!=null){if(ee.ref!==void 0&&(le=ee.ref,ve=P.current),ee.key!==void 0&&(Ne=""+ee.key),k.type&&k.type.defaultProps)var de=k.type.defaultProps;for(Re in ee)U.call(ee,Re)&&!D.hasOwnProperty(Re)&&(Ue[Re]=ee[Re]===void 0&&de!==void 0?de[Re]:ee[Re])}var Re=arguments.length-2;if(Re===1)Ue.children=Me;else if(1<Re){de=Array(Re);for(var Xe=0;Xe<Re;Xe++)de[Xe]=arguments[Xe+2];Ue.children=de}return{$$typeof:s,type:k.type,key:Ne,ref:le,props:Ue,_owner:ve}},Mt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},Mt.createElement=E,Mt.createFactory=function(k){var ee=E.bind(null,k);return ee.type=k,ee},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(k){return{$$typeof:h,render:k}},Mt.isValidElement=V,Mt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:K}},Mt.memo=function(k,ee){return{$$typeof:f,type:k,compare:ee===void 0?null:ee}},Mt.startTransition=function(k){var ee=$.transition;$.transition={};try{k()}finally{$.transition=ee}},Mt.unstable_act=ae,Mt.useCallback=function(k,ee){return Y.current.useCallback(k,ee)},Mt.useContext=function(k){return Y.current.useContext(k)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(k){return Y.current.useDeferredValue(k)},Mt.useEffect=function(k,ee){return Y.current.useEffect(k,ee)},Mt.useId=function(){return Y.current.useId()},Mt.useImperativeHandle=function(k,ee,Me){return Y.current.useImperativeHandle(k,ee,Me)},Mt.useInsertionEffect=function(k,ee){return Y.current.useInsertionEffect(k,ee)},Mt.useLayoutEffect=function(k,ee){return Y.current.useLayoutEffect(k,ee)},Mt.useMemo=function(k,ee){return Y.current.useMemo(k,ee)},Mt.useReducer=function(k,ee,Me){return Y.current.useReducer(k,ee,Me)},Mt.useRef=function(k){return Y.current.useRef(k)},Mt.useState=function(k){return Y.current.useState(k)},Mt.useSyncExternalStore=function(k,ee,Me){return Y.current.useSyncExternalStore(k,ee,Me)},Mt.useTransition=function(){return Y.current.useTransition()},Mt.version="18.3.1",Mt}var vg;function Ef(){return vg||(vg=1,Uh.exports=Dx()),Uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Nx(){if(xg)return ba;xg=1;var s=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,d,f){var g,_={},m=null,x=null;f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(x=d.ref);for(g in d)i.call(d,g)&&!a.hasOwnProperty(g)&&(_[g]=d[g]);if(h&&h.defaultProps)for(g in d=h.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:h,key:m,ref:x,props:_,_owner:o.current}}return ba.Fragment=t,ba.jsx=c,ba.jsxs=c,ba}var yg;function Ix(){return yg||(yg=1,Ih.exports=Nx()),Ih.exports}var ot=Ix(),an=Ef(),ic={},Fh={exports:{}},ei={},Oh={exports:{}},kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Ux(){return Sg||(Sg=1,(function(s){function e($,re){var ae=$.length;$.push(re);e:for(;0<ae;){var k=ae-1>>>1,ee=$[k];if(0<o(ee,re))$[k]=re,$[ae]=ee,ae=k;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var re=$[0],ae=$.pop();if(ae!==re){$[0]=ae;e:for(var k=0,ee=$.length,Me=ee>>>1;k<Me;){var Ue=2*(k+1)-1,Ne=$[Ue],le=Ue+1,ve=$[le];if(0>o(Ne,ae))le<ee&&0>o(ve,Ne)?($[k]=ve,$[le]=ae,k=le):($[k]=Ne,$[Ue]=ae,k=Ue);else if(le<ee&&0>o(ve,ae))$[k]=ve,$[le]=ae,k=le;else break e}}return re}function o($,re){var ae=$.sortIndex-re.sortIndex;return ae!==0?ae:$.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var d=[],f=[],g=1,_=null,m=3,x=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var re=t(f);re!==null;){if(re.callback===null)i(f);else if(re.startTime<=$)i(f),re.sortIndex=re.expirationTime,e(d,re);else break;re=t(f)}}function b($){if(A=!1,C($),!M)if(t(d)!==null)M=!0,K(U);else{var re=t(f);re!==null&&Y(b,re.startTime-$)}}function U($,re){M=!1,A&&(A=!1,S(E),E=-1),x=!0;var ae=m;try{for(C(re),_=t(d);_!==null&&(!(_.expirationTime>re)||$&&!O());){var k=_.callback;if(typeof k=="function"){_.callback=null,m=_.priorityLevel;var ee=k(_.expirationTime<=re);re=s.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(d)&&i(d),C(re)}else i(d);_=t(d)}if(_!==null)var Me=!0;else{var Ue=t(f);Ue!==null&&Y(b,Ue.startTime-re),Me=!1}return Me}finally{_=null,m=ae,x=!1}}var P=!1,D=null,E=-1,N=5,V=-1;function O(){return!(s.unstable_now()-V<N)}function B(){if(D!==null){var $=s.unstable_now();V=$;var re=!0;try{re=D(!0,$)}finally{re?Q():(P=!1,D=null)}}else P=!1}var Q;if(typeof w=="function")Q=function(){w(B)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,W=se.port2;se.port1.onmessage=B,Q=function(){W.postMessage(null)}}else Q=function(){y(B,0)};function K($){D=$,P||(P=!0,Q())}function Y($,re){E=y(function(){$(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,K(U))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function($){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ae=m;m=re;try{return $()}finally{m=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,re){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ae=m;m=$;try{return re()}finally{m=ae}},s.unstable_scheduleCallback=function($,re,ae){var k=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,$){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,$={id:g++,callback:re,priorityLevel:$,startTime:ae,expirationTime:ee,sortIndex:-1},ae>k?($.sortIndex=ae,e(f,$),t(d)===null&&$===t(f)&&(A?(S(E),E=-1):A=!0,Y(b,ae-k))):($.sortIndex=ee,e(d,$),M||x||(M=!0,K(U))),$},s.unstable_shouldYield=O,s.unstable_wrapCallback=function($){var re=m;return function(){var ae=m;m=re;try{return $.apply(this,arguments)}finally{m=ae}}}})(kh)),kh}var Mg;function Fx(){return Mg||(Mg=1,Oh.exports=Ux()),Oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Ox(){if(Eg)return ei;Eg=1;var s=Ef(),e=Fx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return d.call(_,n)?!0:d.call(g,n)?!1:f.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||x(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,l,u,p,v,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,w);y[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,w);y[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,w);y[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),P=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),$=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Me=!1;function Ue(n,r){if(!n||Me)return"";Me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ce){var u=ce}Reflect.construct(n,[],r)}else{try{r.call()}catch(ce){u=ce}n.call(r.prototype)}else{try{throw Error()}catch(ce){u=ce}n()}}catch(ce){if(ce&&u&&typeof ce.stack=="string"){for(var p=ce.stack.split(`
`),v=u.stack.split(`
`),R=p.length-1,F=v.length-1;1<=R&&0<=F&&p[R]!==v[F];)F--;for(;1<=R&&0<=F;R--,F--)if(p[R]!==v[F]){if(R!==1||F!==1)do if(R--,F--,0>F||p[R]!==v[F]){var H=`
`+p[R].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=R&&0<=F);break}}}finally{Me=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ne(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ue(n.type,!1),n;case 11:return n=Ue(n.type.render,!1),n;case 1:return n=Ue(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case P:return"Portal";case N:return"Profiler";case E:return"StrictMode";case Q:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case B:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case K:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Xe(n){var r=Re(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(R){u=""+R,v.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(R){u=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function He(n){n._valueTracker||(n._valueTracker=Xe(n))}function Et(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lt(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function zt(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=de(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function nn(n,r){mt(n,r);var l=de(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?An(n,r.type,l):r.hasOwnProperty("defaultValue")&&An(n,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Gt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function An(n,r,l){(r!=="number"||ht(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var X=Array.isArray;function Wt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+de(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function gt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ut(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(X(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:de(l)}}function Ie(n,r){var l=de(r.value),u=de(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Yt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?I(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Le.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function ue(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function pe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ue(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var Oe=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,r){if(r){if(Oe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,vt=null,G=null;function Te(n){if(n=ha(n)){if(typeof at!="function")throw Error(t(280));var r=n.stateNode;r&&(r=vl(r),at(n.stateNode,n.type,r))}}function he(n){vt?G?G.push(n):G=[n]:vt=n}function ke(){if(vt){var n=vt,r=G;if(G=vt=null,Te(n),r)for(n=0;n<r.length;n++)Te(r[n])}}function Ce(n,r){return n(r)}function ge(){}var Ye=!1;function lt(n,r,l){if(Ye)return n(r,l);Ye=!0;try{return Ce(n,r,l)}finally{Ye=!1,(vt!==null||G!==null)&&(ge(),ke())}}function Ht(n,r){var l=n.stateNode;if(l===null)return null;var u=vl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Dt=!1;if(h)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Dt=!1}function gi(n,r,l,u,p,v,R,F,H){var ce=Array.prototype.slice.call(arguments,3);try{r.apply(l,ce)}catch(xe){this.onError(xe)}}var rr=!1,ks=null,ls=!1,zs=null,sr={onError:function(n){rr=!0,ks=n}};function Wo(n,r,l,u,p,v,R,F,H){rr=!1,ks=null,gi.apply(sr,arguments)}function tl(n,r,l,u,p,v,R,F,H){if(Wo.apply(this,arguments),rr){if(rr){var ce=ks;rr=!1,ks=null}else throw Error(t(198));ls||(ls=!0,zs=ce)}}function Bi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function cs(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Xo(n){if(Bi(n)!==n)throw Error(t(188))}function Bs(n){var r=n.alternate;if(!r){if(r=Bi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Xo(p),n;if(v===u)return Xo(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var R=!1,F=p.child;F;){if(F===l){R=!0,l=p,u=v;break}if(F===u){R=!0,u=p,l=v;break}F=F.sibling}if(!R){for(F=v.child;F;){if(F===l){R=!0,l=v,u=p;break}if(F===u){R=!0,u=v,l=p;break}F=F.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function jo(n){return n=Bs(n),n!==null?Yo(n):null}function Yo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Yo(n);if(r!==null)return r;n=n.sibling}return null}var nl=e.unstable_scheduleCallback,il=e.unstable_cancelCallback,iu=e.unstable_shouldYield,ru=e.unstable_requestPaint,rn=e.unstable_now,su=e.unstable_getCurrentPriorityLevel,qo=e.unstable_ImmediatePriority,L=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,oe=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Pe=null;function Ge(n){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ct,qe=Math.log,Je=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-(qe(n)/Je|0)|0}var ut=64,Ke=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,R=l&268435455;if(R!==0){var F=R&~p;F!==0?u=At(F):(v&=R,v!==0&&(u=At(v)))}else R=l&~p,R!==0?u=At(R):v!==0&&(u=At(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Ae(r),p=1<<l,u|=n[l],r&=~p;return u}function Qt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var R=31-Ae(v),F=1<<R,H=p[R];H===-1?((F&l)===0||(F&u)!==0)&&(p[R]=Qt(F,r)):H<=r&&(n.expiredLanes|=F),v&=~F}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function Cn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function xt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ae(r),n[r]=l}function Yn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ae(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function qn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Ae(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var St=0;function or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var It,qt,bi,Ot,Ai,Vi=!1,us=[],Cr=null,Rr=null,Pr=null,$o=new Map,Ko=new Map,Lr=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ep(n,r){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":$o.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(r.pointerId)}}function Zo(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=ha(r),r!==null&&qt(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function J_(n,r,l,u,p){switch(r){case"focusin":return Cr=Zo(Cr,n,r,l,u,p),!0;case"dragenter":return Rr=Zo(Rr,n,r,l,u,p),!0;case"mouseover":return Pr=Zo(Pr,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return $o.set(v,Zo($o.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Ko.set(v,Zo(Ko.get(v)||null,n,r,l,u,p)),!0}return!1}function tp(n){var r=hs(n.target);if(r!==null){var l=Bi(r);if(l!==null){if(r=l.tag,r===13){if(r=cs(l),r!==null){n.blockedOn=r,Ai(n.priority,function(){bi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=au(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Ee=u,l.target.dispatchEvent(u),Ee=null}else return r=ha(l),r!==null&&qt(r),n.blockedOn=l,!1;r.shift()}return!0}function np(n,r,l){rl(n)&&l.delete(r)}function Q_(){Vi=!1,Cr!==null&&rl(Cr)&&(Cr=null),Rr!==null&&rl(Rr)&&(Rr=null),Pr!==null&&rl(Pr)&&(Pr=null),$o.forEach(np),Ko.forEach(np)}function Jo(n,r){n.blockedOn===r&&(n.blockedOn=null,Vi||(Vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q_)))}function Qo(n){function r(p){return Jo(p,n)}if(0<us.length){Jo(us[0],n);for(var l=1;l<us.length;l++){var u=us[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Cr!==null&&Jo(Cr,n),Rr!==null&&Jo(Rr,n),Pr!==null&&Jo(Pr,n),$o.forEach(r),Ko.forEach(r),l=0;l<Lr.length;l++)u=Lr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Lr.length&&(l=Lr[0],l.blockedOn===null);)tp(l),l.blockedOn===null&&Lr.shift()}var Vs=b.ReactCurrentBatchConfig,sl=!0;function ev(n,r,l,u){var p=St,v=Vs.transition;Vs.transition=null;try{St=1,ou(n,r,l,u)}finally{St=p,Vs.transition=v}}function tv(n,r,l,u){var p=St,v=Vs.transition;Vs.transition=null;try{St=4,ou(n,r,l,u)}finally{St=p,Vs.transition=v}}function ou(n,r,l,u){if(sl){var p=au(n,r,l,u);if(p===null)wu(n,r,u,ol,l),ep(n,u);else if(J_(p,n,r,l,u))u.stopPropagation();else if(ep(n,u),r&4&&-1<Z_.indexOf(n)){for(;p!==null;){var v=ha(p);if(v!==null&&It(v),v=au(n,r,l,u),v===null&&wu(n,r,u,ol,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else wu(n,r,u,null,l)}}var ol=null;function au(n,r,l,u){if(ol=null,n=it(u),n=hs(n),n!==null)if(r=Bi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=cs(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ol=n,null}function ip(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(su()){case qo:return 1;case L:return 4;case q:case oe:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Dr=null,lu=null,al=null;function rp(){if(al)return al;var n,r=lu,l=r.length,u,p="value"in Dr?Dr.value:Dr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var R=l-n;for(u=1;u<=R&&r[l-u]===p[v-u];u++);return al=p.slice(n,1<u?1-u:void 0)}function ll(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function cl(){return!0}function sp(){return!1}function si(n){function r(l,u,p,v,R){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=R,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?cl:sp,this.isPropagationStopped=sp,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),r}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=si(Hs),ea=ae({},Hs,{view:0,detail:0}),nv=si(ea),uu,hu,ta,ul=ae({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ta&&(ta&&n.type==="mousemove"?(uu=n.screenX-ta.screenX,hu=n.screenY-ta.screenY):hu=uu=0,ta=n),uu)},movementY:function(n){return"movementY"in n?n.movementY:hu}}),op=si(ul),iv=ae({},ul,{dataTransfer:0}),rv=si(iv),sv=ae({},ea,{relatedTarget:0}),du=si(sv),ov=ae({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),av=si(ov),lv=ae({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cv=si(lv),uv=ae({},Hs,{data:0}),ap=si(uv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=fv[n])?!!r[n]:!1}function fu(){return pv}var mv=ae({},ea,{key:function(n){if(n.key){var r=hv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ll(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(n){return n.type==="keypress"?ll(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ll(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gv=si(mv),_v=ae({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=si(_v),vv=ae({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),xv=si(vv),yv=ae({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=si(yv),Mv=ae({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=si(Mv),wv=[9,13,27,32],pu=h&&"CompositionEvent"in window,na=null;h&&"documentMode"in document&&(na=document.documentMode);var Tv=h&&"TextEvent"in window&&!na,cp=h&&(!pu||na&&8<na&&11>=na),up=" ",hp=!1;function dp(n,r){switch(n){case"keyup":return wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function bv(n,r){switch(n){case"compositionend":return fp(r);case"keypress":return r.which!==32?null:(hp=!0,up);case"textInput":return n=r.data,n===up&&hp?null:n;default:return null}}function Av(n,r){if(Gs)return n==="compositionend"||!pu&&dp(n,r)?(n=rp(),al=lu=Dr=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return cp&&r.locale!=="ko"?null:r.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Cv[n.type]:r==="textarea"}function mp(n,r,l,u){he(u),r=ml(r,"onChange"),0<r.length&&(l=new cu("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var ia=null,ra=null;function Rv(n){Np(n,0)}function hl(n){var r=qs(n);if(Et(r))return n}function Pv(n,r){if(n==="change")return r}var gp=!1;if(h){var mu;if(h){var gu="oninput"in document;if(!gu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),gu=typeof _p.oninput=="function"}mu=gu}else mu=!1;gp=mu&&(!document.documentMode||9<document.documentMode)}function vp(){ia&&(ia.detachEvent("onpropertychange",xp),ra=ia=null)}function xp(n){if(n.propertyName==="value"&&hl(ra)){var r=[];mp(r,ra,n,it(n)),lt(Rv,r)}}function Lv(n,r,l){n==="focusin"?(vp(),ia=r,ra=l,ia.attachEvent("onpropertychange",xp)):n==="focusout"&&vp()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(ra)}function Nv(n,r){if(n==="click")return hl(r)}function Iv(n,r){if(n==="input"||n==="change")return hl(r)}function Uv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ci=typeof Object.is=="function"?Object.is:Uv;function sa(n,r){if(Ci(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!d.call(r,p)||!Ci(n[p],r[p]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sp(n,r){var l=yp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yp(l)}}function Mp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ep(){for(var n=window,r=ht();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ht(n.document)}return r}function _u(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Fv(n){var r=Ep(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Mp(l.ownerDocument.documentElement,l)){if(u!==null&&_u(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Sp(l,v);var R=Sp(l,u);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ov=h&&"documentMode"in document&&11>=document.documentMode,Ws=null,vu=null,oa=null,xu=!1;function wp(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;xu||Ws==null||Ws!==ht(u)||(u=Ws,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),oa&&sa(oa,u)||(oa=u,u=ml(vu,"onSelect"),0<u.length&&(r=new cu("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Ws)))}function dl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Xs={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},yu={},Tp={};h&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function fl(n){if(yu[n])return yu[n];if(!Xs[n])return n;var r=Xs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Tp)return yu[n]=r[l];return n}var bp=fl("animationend"),Ap=fl("animationiteration"),Cp=fl("animationstart"),Rp=fl("transitionend"),Pp=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,r){Pp.set(n,r),a(r,[n])}for(var Su=0;Su<Lp.length;Su++){var Mu=Lp[Su],kv=Mu.toLowerCase(),zv=Mu[0].toUpperCase()+Mu.slice(1);Nr(kv,"on"+zv)}Nr(bp,"onAnimationEnd"),Nr(Ap,"onAnimationIteration"),Nr(Cp,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Rp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Dp(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,tl(u,r,void 0,n),n.currentTarget=null}function Np(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var R=u.length-1;0<=R;R--){var F=u[R],H=F.instance,ce=F.currentTarget;if(F=F.listener,H!==v&&p.isPropagationStopped())break e;Dp(p,F,ce),v=H}else for(R=0;R<u.length;R++){if(F=u[R],H=F.instance,ce=F.currentTarget,F=F.listener,H!==v&&p.isPropagationStopped())break e;Dp(p,F,ce),v=H}}}if(ls)throw n=zs,ls=!1,zs=null,n}function $t(n,r){var l=r[Pu];l===void 0&&(l=r[Pu]=new Set);var u=n+"__bubble";l.has(u)||(Ip(r,n,2,!1),l.add(u))}function Eu(n,r,l){var u=0;r&&(u|=4),Ip(l,n,u,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[pl]){n[pl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Bv.has(l)||Eu(l,!1,n),Eu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,Eu("selectionchange",!1,r))}}function Ip(n,r,l,u){switch(ip(r)){case 1:var p=ev;break;case 4:p=tv;break;default:p=ou}l=p.bind(null,r,l,n),p=void 0,!Dt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function wu(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var R=u.tag;if(R===3||R===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(R===4)for(R=u.return;R!==null;){var H=R.tag;if((H===3||H===4)&&(H=R.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;R=R.return}for(;F!==null;){if(R=hs(F),R===null)return;if(H=R.tag,H===5||H===6){u=v=R;continue e}F=F.parentNode}}u=u.return}lt(function(){var ce=v,xe=it(l),ye=[];e:{var _e=Pp.get(n);if(_e!==void 0){var Ve=cu,je=n;switch(n){case"keypress":if(ll(l)===0)break e;case"keydown":case"keyup":Ve=gv;break;case"focusin":je="focus",Ve=du;break;case"focusout":je="blur",Ve=du;break;case"beforeblur":case"afterblur":Ve=du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=xv;break;case bp:case Ap:case Cp:Ve=av;break;case Rp:Ve=Sv;break;case"scroll":Ve=nv;break;case"wheel":Ve=Ev;break;case"copy":case"cut":case"paste":Ve=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=lp}var $e=(r&4)!==0,hn=!$e&&n==="scroll",J=$e?_e!==null?_e+"Capture":null:_e;$e=[];for(var j=ce,ie;j!==null;){ie=j;var we=ie.stateNode;if(ie.tag===5&&we!==null&&(ie=we,J!==null&&(we=Ht(j,J),we!=null&&$e.push(ca(j,we,ie)))),hn)break;j=j.return}0<$e.length&&(_e=new Ve(_e,je,null,l,xe),ye.push({event:_e,listeners:$e}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",_e&&l!==Ee&&(je=l.relatedTarget||l.fromElement)&&(hs(je)||je[ar]))break e;if((Ve||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(je=l.relatedTarget||l.toElement,Ve=ce,je=je?hs(je):null,je!==null&&(hn=Bi(je),je!==hn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=ce),Ve!==je)){if($e=op,we="onMouseLeave",J="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&($e=lp,we="onPointerLeave",J="onPointerEnter",j="pointer"),hn=Ve==null?_e:qs(Ve),ie=je==null?_e:qs(je),_e=new $e(we,j+"leave",Ve,l,xe),_e.target=hn,_e.relatedTarget=ie,we=null,hs(xe)===ce&&($e=new $e(J,j+"enter",je,l,xe),$e.target=ie,$e.relatedTarget=hn,we=$e),hn=we,Ve&&je)t:{for($e=Ve,J=je,j=0,ie=$e;ie;ie=js(ie))j++;for(ie=0,we=J;we;we=js(we))ie++;for(;0<j-ie;)$e=js($e),j--;for(;0<ie-j;)J=js(J),ie--;for(;j--;){if($e===J||J!==null&&$e===J.alternate)break t;$e=js($e),J=js(J)}$e=null}else $e=null;Ve!==null&&Up(ye,_e,Ve,$e,!1),je!==null&&hn!==null&&Up(ye,hn,je,$e,!0)}}e:{if(_e=ce?qs(ce):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var Ze=Pv;else if(pp(_e))if(gp)Ze=Iv;else{Ze=Dv;var et=Lv}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=Nv);if(Ze&&(Ze=Ze(n,ce))){mp(ye,Ze,l,xe);break e}et&&et(n,_e,ce),n==="focusout"&&(et=_e._wrapperState)&&et.controlled&&_e.type==="number"&&An(_e,"number",_e.value)}switch(et=ce?qs(ce):window,n){case"focusin":(pp(et)||et.contentEditable==="true")&&(Ws=et,vu=ce,oa=null);break;case"focusout":oa=vu=Ws=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,wp(ye,l,xe);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":wp(ye,l,xe)}var tt;if(pu)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Gs?dp(n,l)&&(st="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(cp&&l.locale!=="ko"&&(Gs||st!=="onCompositionStart"?st==="onCompositionEnd"&&Gs&&(tt=rp()):(Dr=xe,lu="value"in Dr?Dr.value:Dr.textContent,Gs=!0)),et=ml(ce,st),0<et.length&&(st=new ap(st,n,null,l,xe),ye.push({event:st,listeners:et}),tt?st.data=tt:(tt=fp(l),tt!==null&&(st.data=tt)))),(tt=Tv?bv(n,l):Av(n,l))&&(ce=ml(ce,"onBeforeInput"),0<ce.length&&(xe=new ap("onBeforeInput","beforeinput",null,l,xe),ye.push({event:xe,listeners:ce}),xe.data=tt))}Np(ye,r)})}function ca(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ml(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Ht(n,l),v!=null&&u.unshift(ca(n,v,p)),v=Ht(n,r),v!=null&&u.push(ca(n,v,p))),n=n.return}return u}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Up(n,r,l,u,p){for(var v=r._reactName,R=[];l!==null&&l!==u;){var F=l,H=F.alternate,ce=F.stateNode;if(H!==null&&H===u)break;F.tag===5&&ce!==null&&(F=ce,p?(H=Ht(l,v),H!=null&&R.unshift(ca(l,H,F))):p||(H=Ht(l,v),H!=null&&R.push(ca(l,H,F)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var Vv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function Fp(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Hv,"")}function gl(n,r,l){if(r=Fp(r),Fp(n)!==r&&l)throw Error(t(425))}function _l(){}var Tu=null,bu=null;function Au(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(n){return Op.resolve(null).then(n).catch(Xv)}:Cu;function Xv(n){setTimeout(function(){throw n})}function Ru(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Qo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Qo(r)}function Ir(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Ys,ua="__reactProps$"+Ys,ar="__reactContainer$"+Ys,Pu="__reactEvents$"+Ys,jv="__reactListeners$"+Ys,Yv="__reactHandles$"+Ys;function hs(n){var r=n[Hi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ar]||l[Hi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=kp(n);n!==null;){if(l=n[Hi])return l;n=kp(n)}return r}n=l,l=n.parentNode}return null}function ha(n){return n=n[Hi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vl(n){return n[ua]||null}var Lu=[],$s=-1;function Ur(n){return{current:n}}function Kt(n){0>$s||(n.current=Lu[$s],Lu[$s]=null,$s--)}function jt(n,r){$s++,Lu[$s]=n.current,n.current=r}var Fr={},Dn=Ur(Fr),$n=Ur(!1),ds=Fr;function Ks(n,r){var l=n.type.contextTypes;if(!l)return Fr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Kn(n){return n=n.childContextTypes,n!=null}function xl(){Kt($n),Kt(Dn)}function zp(n,r,l){if(Dn.current!==Fr)throw Error(t(168));jt(Dn,r),jt($n,l)}function Bp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return ae({},l,u)}function yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,ds=Dn.current,jt(Dn,n),jt($n,$n.current),!0}function Vp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Bp(n,r,ds),u.__reactInternalMemoizedMergedChildContext=n,Kt($n),Kt(Dn),jt(Dn,n)):Kt($n),jt($n,l)}var lr=null,Sl=!1,Du=!1;function Hp(n){lr===null?lr=[n]:lr.push(n)}function qv(n){Sl=!0,Hp(n)}function Or(){if(!Du&&lr!==null){Du=!0;var n=0,r=St;try{var l=lr;for(St=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}lr=null,Sl=!1}catch(p){throw lr!==null&&(lr=lr.slice(n+1)),nl(qo,Or),p}finally{St=r,Du=!1}}return null}var Zs=[],Js=0,Ml=null,El=0,_i=[],vi=0,fs=null,cr=1,ur="";function ps(n,r){Zs[Js++]=El,Zs[Js++]=Ml,Ml=n,El=r}function Gp(n,r,l){_i[vi++]=cr,_i[vi++]=ur,_i[vi++]=fs,fs=n;var u=cr;n=ur;var p=32-Ae(u)-1;u&=~(1<<p),l+=1;var v=32-Ae(r)+p;if(30<v){var R=p-p%5;v=(u&(1<<R)-1).toString(32),u>>=R,p-=R,cr=1<<32-Ae(r)+p|l<<p|u,ur=v+n}else cr=1<<v|l<<p|u,ur=n}function Nu(n){n.return!==null&&(ps(n,1),Gp(n,1,0))}function Iu(n){for(;n===Ml;)Ml=Zs[--Js],Zs[Js]=null,El=Zs[--Js],Zs[Js]=null;for(;n===fs;)fs=_i[--vi],_i[vi]=null,ur=_i[--vi],_i[vi]=null,cr=_i[--vi],_i[vi]=null}var oi=null,ai=null,en=!1,Ri=null;function Wp(n,r){var l=Mi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Xp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oi=n,ai=Ir(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oi=n,ai=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=fs!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Mi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,oi=n,ai=null,!0):!1;default:return!1}}function Uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fu(n){if(en){var r=ai;if(r){var l=r;if(!Xp(n,r)){if(Uu(n))throw Error(t(418));r=Ir(l.nextSibling);var u=oi;r&&Xp(n,r)?Wp(u,l):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(Uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function wl(n){if(n!==oi)return!1;if(!en)return jp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Au(n.type,n.memoizedProps)),r&&(r=ai)){if(Uu(n))throw Yp(),Error(t(418));for(;r;)Wp(n,r),r=Ir(r.nextSibling)}if(jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ai=Ir(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ai=null}}else ai=oi?Ir(n.stateNode.nextSibling):null;return!0}function Yp(){for(var n=ai;n;)n=Ir(n.nextSibling)}function Qs(){ai=oi=null,en=!1}function Ou(n){Ri===null?Ri=[n]:Ri.push(n)}var $v=b.ReactCurrentBatchConfig;function da(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(R){var F=p.refs;R===null?delete F[v]:F[v]=R},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function qp(n){var r=n._init;return r(n._payload)}function $p(n){function r(J,j){if(n){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function l(J,j){if(!n)return null;for(;j!==null;)r(J,j),j=j.sibling;return null}function u(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function p(J,j){return J=Xr(J,j),J.index=0,J.sibling=null,J}function v(J,j,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function R(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,j,ie,we){return j===null||j.tag!==6?(j=Ch(ie,J.mode,we),j.return=J,j):(j=p(j,ie),j.return=J,j)}function H(J,j,ie,we){var Ze=ie.type;return Ze===D?xe(J,j,ie.props.children,we,ie.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&qp(Ze)===j.type)?(we=p(j,ie.props),we.ref=da(J,j,ie),we.return=J,we):(we=$l(ie.type,ie.key,ie.props,null,J.mode,we),we.ref=da(J,j,ie),we.return=J,we)}function ce(J,j,ie,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Rh(ie,J.mode,we),j.return=J,j):(j=p(j,ie.children||[]),j.return=J,j)}function xe(J,j,ie,we,Ze){return j===null||j.tag!==7?(j=Ms(ie,J.mode,we,Ze),j.return=J,j):(j=p(j,ie),j.return=J,j)}function ye(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ch(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return ie=$l(j.type,j.key,j.props,null,J.mode,ie),ie.ref=da(J,null,j),ie.return=J,ie;case P:return j=Rh(j,J.mode,ie),j.return=J,j;case K:var we=j._init;return ye(J,we(j._payload),ie)}if(X(j)||re(j))return j=Ms(j,J.mode,ie,null),j.return=J,j;Tl(J,j)}return null}function _e(J,j,ie,we){var Ze=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:F(J,j,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:return ie.key===Ze?H(J,j,ie,we):null;case P:return ie.key===Ze?ce(J,j,ie,we):null;case K:return Ze=ie._init,_e(J,j,Ze(ie._payload),we)}if(X(ie)||re(ie))return Ze!==null?null:xe(J,j,ie,we,null);Tl(J,ie)}return null}function Ve(J,j,ie,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(ie)||null,F(j,J,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case U:return J=J.get(we.key===null?ie:we.key)||null,H(j,J,we,Ze);case P:return J=J.get(we.key===null?ie:we.key)||null,ce(j,J,we,Ze);case K:var et=we._init;return Ve(J,j,ie,et(we._payload),Ze)}if(X(we)||re(we))return J=J.get(ie)||null,xe(j,J,we,Ze,null);Tl(j,we)}return null}function je(J,j,ie,we){for(var Ze=null,et=null,tt=j,st=j=0,En=null;tt!==null&&st<ie.length;st++){tt.index>st?(En=tt,tt=null):En=tt.sibling;var Nt=_e(J,tt,ie[st],we);if(Nt===null){tt===null&&(tt=En);break}n&&tt&&Nt.alternate===null&&r(J,tt),j=v(Nt,j,st),et===null?Ze=Nt:et.sibling=Nt,et=Nt,tt=En}if(st===ie.length)return l(J,tt),en&&ps(J,st),Ze;if(tt===null){for(;st<ie.length;st++)tt=ye(J,ie[st],we),tt!==null&&(j=v(tt,j,st),et===null?Ze=tt:et.sibling=tt,et=tt);return en&&ps(J,st),Ze}for(tt=u(J,tt);st<ie.length;st++)En=Ve(tt,J,st,ie[st],we),En!==null&&(n&&En.alternate!==null&&tt.delete(En.key===null?st:En.key),j=v(En,j,st),et===null?Ze=En:et.sibling=En,et=En);return n&&tt.forEach(function(jr){return r(J,jr)}),en&&ps(J,st),Ze}function $e(J,j,ie,we){var Ze=re(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var et=Ze=null,tt=j,st=j=0,En=null,Nt=ie.next();tt!==null&&!Nt.done;st++,Nt=ie.next()){tt.index>st?(En=tt,tt=null):En=tt.sibling;var jr=_e(J,tt,Nt.value,we);if(jr===null){tt===null&&(tt=En);break}n&&tt&&jr.alternate===null&&r(J,tt),j=v(jr,j,st),et===null?Ze=jr:et.sibling=jr,et=jr,tt=En}if(Nt.done)return l(J,tt),en&&ps(J,st),Ze;if(tt===null){for(;!Nt.done;st++,Nt=ie.next())Nt=ye(J,Nt.value,we),Nt!==null&&(j=v(Nt,j,st),et===null?Ze=Nt:et.sibling=Nt,et=Nt);return en&&ps(J,st),Ze}for(tt=u(J,tt);!Nt.done;st++,Nt=ie.next())Nt=Ve(tt,J,st,Nt.value,we),Nt!==null&&(n&&Nt.alternate!==null&&tt.delete(Nt.key===null?st:Nt.key),j=v(Nt,j,st),et===null?Ze=Nt:et.sibling=Nt,et=Nt);return n&&tt.forEach(function(Cx){return r(J,Cx)}),en&&ps(J,st),Ze}function hn(J,j,ie,we){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:e:{for(var Ze=ie.key,et=j;et!==null;){if(et.key===Ze){if(Ze=ie.type,Ze===D){if(et.tag===7){l(J,et.sibling),j=p(et,ie.props.children),j.return=J,J=j;break e}}else if(et.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&qp(Ze)===et.type){l(J,et.sibling),j=p(et,ie.props),j.ref=da(J,et,ie),j.return=J,J=j;break e}l(J,et);break}else r(J,et);et=et.sibling}ie.type===D?(j=Ms(ie.props.children,J.mode,we,ie.key),j.return=J,J=j):(we=$l(ie.type,ie.key,ie.props,null,J.mode,we),we.ref=da(J,j,ie),we.return=J,J=we)}return R(J);case P:e:{for(et=ie.key;j!==null;){if(j.key===et)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){l(J,j.sibling),j=p(j,ie.children||[]),j.return=J,J=j;break e}else{l(J,j);break}else r(J,j);j=j.sibling}j=Rh(ie,J.mode,we),j.return=J,J=j}return R(J);case K:return et=ie._init,hn(J,j,et(ie._payload),we)}if(X(ie))return je(J,j,ie,we);if(re(ie))return $e(J,j,ie,we);Tl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(l(J,j.sibling),j=p(j,ie),j.return=J,J=j):(l(J,j),j=Ch(ie,J.mode,we),j.return=J,J=j),R(J)):l(J,j)}return hn}var eo=$p(!0),Kp=$p(!1),bl=Ur(null),Al=null,to=null,ku=null;function zu(){ku=to=Al=null}function Bu(n){var r=bl.current;Kt(bl),n._currentValue=r}function Vu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function no(n,r){Al=n,ku=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zn=!0),n.firstContext=null)}function xi(n){var r=n._currentValue;if(ku!==n)if(n={context:n,memoizedValue:r,next:null},to===null){if(Al===null)throw Error(t(308));to=n,Al.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return r}var ms=null;function Hu(n){ms===null?ms=[n]:ms.push(n)}function Zp(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Hu(r)):(l.next=p.next,p.next=l),r.interleaved=l,hr(n,u)}function hr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var kr=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Rt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,hr(n,l)}return p=u.interleaved,p===null?(r.next=r,Hu(u)):(r.next=p.next,p.next=r),u.interleaved=r,hr(n,l)}function Cl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,qn(n,l)}}function Qp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=R:v=v.next=R,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Rl(n,r,l,u){var p=n.updateQueue;kr=!1;var v=p.firstBaseUpdate,R=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var H=F,ce=H.next;H.next=null,R===null?v=ce:R.next=ce,R=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==R&&(F===null?xe.firstBaseUpdate=ce:F.next=ce,xe.lastBaseUpdate=H))}if(v!==null){var ye=p.baseState;R=0,xe=ce=H=null,F=v;do{var _e=F.lane,Ve=F.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,$e=F;switch(_e=r,Ve=l,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){ye=je.call(Ve,ye,_e);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,_e=typeof je=="function"?je.call(Ve,ye,_e):je,_e==null)break e;ye=ae({},ye,_e);break e;case 2:kr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=p.effects,_e===null?p.effects=[F]:_e.push(F))}else Ve={eventTime:Ve,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(ce=xe=Ve,H=ye):xe=xe.next=Ve,R|=_e;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(xe===null&&(H=ye),p.baseState=H,p.firstBaseUpdate=ce,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do R|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);vs|=R,n.lanes=R,n.memoizedState=ye}}function em(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var fa={},Gi=Ur(fa),pa=Ur(fa),ma=Ur(fa);function gs(n){if(n===fa)throw Error(t(174));return n}function Wu(n,r){switch(jt(ma,r),jt(pa,n),jt(Gi,fa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:T(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=T(r,n)}Kt(Gi),jt(Gi,r)}function io(){Kt(Gi),Kt(pa),Kt(ma)}function tm(n){gs(ma.current);var r=gs(Gi.current),l=T(r,n.type);r!==l&&(jt(pa,n),jt(Gi,l))}function Xu(n){pa.current===n&&(Kt(Gi),Kt(pa))}var sn=Ur(0);function Pl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ju=[];function Yu(){for(var n=0;n<ju.length;n++)ju[n]._workInProgressVersionPrimary=null;ju.length=0}var Ll=b.ReactCurrentDispatcher,qu=b.ReactCurrentBatchConfig,_s=0,on=null,mn=null,Sn=null,Dl=!1,ga=!1,_a=0,Kv=0;function Nn(){throw Error(t(321))}function $u(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ci(n[l],r[l]))return!1;return!0}function Ku(n,r,l,u,p,v){if(_s=v,on=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ll.current=n===null||n.memoizedState===null?ex:tx,n=l(u,p),ga){v=0;do{if(ga=!1,_a=0,25<=v)throw Error(t(301));v+=1,Sn=mn=null,r.updateQueue=null,Ll.current=nx,n=l(u,p)}while(ga)}if(Ll.current=Ul,r=mn!==null&&mn.next!==null,_s=0,Sn=mn=on=null,Dl=!1,r)throw Error(t(300));return n}function Zu(){var n=_a!==0;return _a=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?on.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function yi(){if(mn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var r=Sn===null?on.memoizedState:Sn.next;if(r!==null)Sn=r,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},Sn===null?on.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function va(n,r){return typeof r=="function"?r(n):r}function Ju(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=mn,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var R=p.next;p.next=v.next,v.next=R}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var F=R=null,H=null,ce=v;do{var xe=ce.lane;if((_s&xe)===xe)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),u=ce.hasEagerState?ce.eagerState:n(u,ce.action);else{var ye={lane:xe,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(F=H=ye,R=u):H=H.next=ye,on.lanes|=xe,vs|=xe}ce=ce.next}while(ce!==null&&ce!==v);H===null?R=u:H.next=F,Ci(u,r.memoizedState)||(Zn=!0),r.memoizedState=u,r.baseState=R,r.baseQueue=H,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,on.lanes|=v,vs|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Qu(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do v=n(v,R.action),R=R.next;while(R!==p);Ci(v,r.memoizedState)||(Zn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function nm(){}function im(n,r){var l=on,u=yi(),p=r(),v=!Ci(u.memoizedState,p);if(v&&(u.memoizedState=p,Zn=!0),u=u.queue,eh(om.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,xa(9,sm.bind(null,l,u,p,r),void 0,null),Mn===null)throw Error(t(349));(_s&30)!==0||rm(l,r,p)}return p}function rm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=on.updateQueue,r===null?(r={lastEffect:null,stores:null},on.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function sm(n,r,l,u){r.value=l,r.getSnapshot=u,am(r)&&lm(n)}function om(n,r,l){return l(function(){am(r)&&lm(n)})}function am(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ci(n,l)}catch{return!0}}function lm(n){var r=hr(n,1);r!==null&&Ni(r,n,1,-1)}function cm(n){var r=Wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},r.queue=n,n=n.dispatch=Qv.bind(null,on,n),[r.memoizedState,n]}function xa(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=on.updateQueue,r===null?(r={lastEffect:null,stores:null},on.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function um(){return yi().memoizedState}function Nl(n,r,l,u){var p=Wi();on.flags|=n,p.memoizedState=xa(1|r,l,void 0,u===void 0?null:u)}function Il(n,r,l,u){var p=yi();u=u===void 0?null:u;var v=void 0;if(mn!==null){var R=mn.memoizedState;if(v=R.destroy,u!==null&&$u(u,R.deps)){p.memoizedState=xa(r,l,v,u);return}}on.flags|=n,p.memoizedState=xa(1|r,l,v,u)}function hm(n,r){return Nl(8390656,8,n,r)}function eh(n,r){return Il(2048,8,n,r)}function dm(n,r){return Il(4,2,n,r)}function fm(n,r){return Il(4,4,n,r)}function pm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function mm(n,r,l){return l=l!=null?l.concat([n]):null,Il(4,4,pm.bind(null,r,n),l)}function th(){}function gm(n,r){var l=yi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&$u(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function _m(n,r){var l=yi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&$u(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function vm(n,r,l){return(_s&21)===0?(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=l):(Ci(l,r)||(l=Be(),on.lanes|=l,vs|=l,n.baseState=!0),r)}function Zv(n,r){var l=St;St=l!==0&&4>l?l:4,n(!0);var u=qu.transition;qu.transition={};try{n(!1),r()}finally{St=l,qu.transition=u}}function xm(){return yi().memoizedState}function Jv(n,r,l){var u=Gr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},ym(n))Sm(r,l);else if(l=Zp(n,r,l,u),l!==null){var p=Wn();Ni(l,n,u,p),Mm(l,r,u)}}function Qv(n,r,l){var u=Gr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(ym(n))Sm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var R=r.lastRenderedState,F=v(R,l);if(p.hasEagerState=!0,p.eagerState=F,Ci(F,R)){var H=r.interleaved;H===null?(p.next=p,Hu(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}l=Zp(n,r,p,u),l!==null&&(p=Wn(),Ni(l,n,u,p),Mm(l,r,u))}}function ym(n){var r=n.alternate;return n===on||r!==null&&r===on}function Sm(n,r){ga=Dl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Mm(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,qn(n,l)}}var Ul={readContext:xi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},ex={readContext:xi,useCallback:function(n,r){return Wi().memoizedState=[n,r===void 0?null:r],n},useContext:xi,useEffect:hm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Nl(4194308,4,pm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Nl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Nl(4,2,n,r)},useMemo:function(n,r){var l=Wi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Wi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Jv.bind(null,on,n),[u.memoizedState,n]},useRef:function(n){var r=Wi();return n={current:n},r.memoizedState=n},useState:cm,useDebugValue:th,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=cm(!1),r=n[0];return n=Zv.bind(null,n[1]),Wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=on,p=Wi();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Mn===null)throw Error(t(349));(_s&30)!==0||rm(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,hm(om.bind(null,u,v,n),[n]),u.flags|=2048,xa(9,sm.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=Wi(),r=Mn.identifierPrefix;if(en){var l=ur,u=cr;l=(u&~(1<<32-Ae(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=_a++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Kv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},tx={readContext:xi,useCallback:gm,useContext:xi,useEffect:eh,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:_m,useReducer:Ju,useRef:um,useState:function(){return Ju(va)},useDebugValue:th,useDeferredValue:function(n){var r=yi();return vm(r,mn.memoizedState,n)},useTransition:function(){var n=Ju(va)[0],r=yi().memoizedState;return[n,r]},useMutableSource:nm,useSyncExternalStore:im,useId:xm,unstable_isNewReconciler:!1},nx={readContext:xi,useCallback:gm,useContext:xi,useEffect:eh,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:_m,useReducer:Qu,useRef:um,useState:function(){return Qu(va)},useDebugValue:th,useDeferredValue:function(n){var r=yi();return mn===null?r.memoizedState=n:vm(r,mn.memoizedState,n)},useTransition:function(){var n=Qu(va)[0],r=yi().memoizedState;return[n,r]},useMutableSource:nm,useSyncExternalStore:im,useId:xm,unstable_isNewReconciler:!1};function Pi(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function nh(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Fl={isMounted:function(n){return(n=n._reactInternals)?Bi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Wn(),p=Gr(n),v=dr(u,p);v.payload=r,l!=null&&(v.callback=l),r=zr(n,v,p),r!==null&&(Ni(r,n,p,u),Cl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Wn(),p=Gr(n),v=dr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=zr(n,v,p),r!==null&&(Ni(r,n,p,u),Cl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Wn(),u=Gr(n),p=dr(l,u);p.tag=2,r!=null&&(p.callback=r),r=zr(n,p,u),r!==null&&(Ni(r,n,u,l),Cl(r,n,u))}};function Em(n,r,l,u,p,v,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,R):r.prototype&&r.prototype.isPureReactComponent?!sa(l,u)||!sa(p,v):!0}function wm(n,r,l){var u=!1,p=Fr,v=r.contextType;return typeof v=="object"&&v!==null?v=xi(v):(p=Kn(r)?ds:Dn.current,u=r.contextTypes,v=(u=u!=null)?Ks(n,p):Fr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Tm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function ih(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Gu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=xi(v):(v=Kn(r)?ds:Dn.current,p.context=Ks(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(nh(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Fl.enqueueReplaceState(p,p.state,null),Rl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,r){try{var l="",u=r;do l+=Ne(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function rh(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function sh(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function bm(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Gl||(Gl=!0,yh=u),sh(n,r)},l}function Am(n,r,l){l=dr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){sh(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){sh(n,r),typeof u!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function Cm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new ix;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=_x.bind(null,n,r,l),r.then(n,n))}function Rm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Pm(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,zr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var rx=b.ReactCurrentOwner,Zn=!1;function Gn(n,r,l,u){r.child=n===null?Kp(r,null,l,u):eo(r,n.child,l,u)}function Lm(n,r,l,u,p){l=l.render;var v=r.ref;return no(r,p),u=Ku(n,r,l,u,v,p),l=Zu(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(en&&l&&Nu(r),r.flags|=1,Gn(n,r,u,p),r.child)}function Dm(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!Ah(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Nm(n,r,v,u,p)):(n=$l(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var R=v.memoizedProps;if(l=l.compare,l=l!==null?l:sa,l(R,u)&&n.ref===r.ref)return fr(n,r,p)}return r.flags|=1,n=Xr(v,u),n.ref=r.ref,n.return=r,r.child=n}function Nm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if(sa(v,u)&&n.ref===r.ref)if(Zn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Zn=!0);else return r.lanes=n.lanes,fr(n,r,p)}return oh(n,r,l,u,p)}function Im(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(oo,li),li|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,jt(oo,li),li|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,jt(oo,li),li|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,jt(oo,li),li|=u;return Gn(n,r,p,l),r.child}function Um(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function oh(n,r,l,u,p){var v=Kn(l)?ds:Dn.current;return v=Ks(r,v),no(r,p),l=Ku(n,r,l,u,v,p),u=Zu(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(en&&u&&Nu(r),r.flags|=1,Gn(n,r,l,p),r.child)}function Fm(n,r,l,u,p){if(Kn(l)){var v=!0;yl(r)}else v=!1;if(no(r,p),r.stateNode===null)kl(n,r),wm(r,l,u),ih(r,l,u,p),u=!0;else if(n===null){var R=r.stateNode,F=r.memoizedProps;R.props=F;var H=R.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=xi(ce):(ce=Kn(l)?ds:Dn.current,ce=Ks(r,ce));var xe=l.getDerivedStateFromProps,ye=typeof xe=="function"||typeof R.getSnapshotBeforeUpdate=="function";ye||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(F!==u||H!==ce)&&Tm(r,R,u,ce),kr=!1;var _e=r.memoizedState;R.state=_e,Rl(r,u,R,p),H=r.memoizedState,F!==u||_e!==H||$n.current||kr?(typeof xe=="function"&&(nh(r,l,xe,u),H=r.memoizedState),(F=kr||Em(r,l,F,u,_e,H,ce))?(ye||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),R.props=u,R.state=H,R.context=ce,u=F):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{R=r.stateNode,Jp(n,r),F=r.memoizedProps,ce=r.type===r.elementType?F:Pi(r.type,F),R.props=ce,ye=r.pendingProps,_e=R.context,H=l.contextType,typeof H=="object"&&H!==null?H=xi(H):(H=Kn(l)?ds:Dn.current,H=Ks(r,H));var Ve=l.getDerivedStateFromProps;(xe=typeof Ve=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(F!==ye||_e!==H)&&Tm(r,R,u,H),kr=!1,_e=r.memoizedState,R.state=_e,Rl(r,u,R,p);var je=r.memoizedState;F!==ye||_e!==je||$n.current||kr?(typeof Ve=="function"&&(nh(r,l,Ve,u),je=r.memoizedState),(ce=kr||Em(r,l,ce,u,_e,je,H)||!1)?(xe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(u,je,H),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(u,je,H)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),R.props=u,R.state=je,R.context=H,u=ce):(typeof R.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),u=!1)}return ah(n,r,l,u,v,p)}function ah(n,r,l,u,p,v){Um(n,r);var R=(r.flags&128)!==0;if(!u&&!R)return p&&Vp(r,l,!1),fr(n,r,v);u=r.stateNode,rx.current=r;var F=R&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&R?(r.child=eo(r,n.child,null,v),r.child=eo(r,null,F,v)):Gn(n,r,F,v),r.memoizedState=u.state,p&&Vp(r,l,!0),r.child}function Om(n){var r=n.stateNode;r.pendingContext?zp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&zp(n,r.context,!1),Wu(n,r.containerInfo)}function km(n,r,l,u,p){return Qs(),Ou(p),r.flags|=256,Gn(n,r,l,u),r.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function zm(n,r,l){var u=r.pendingProps,p=sn.current,v=!1,R=(r.flags&128)!==0,F;if((F=R)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),jt(sn,p&1),n===null)return Fu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=u.children,n=u.fallback,v?(u=r.mode,v=r.child,R={mode:"hidden",children:R},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=R):v=Kl(R,u,0,null),n=Ms(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=ch(l),r.memoizedState=lh,n):uh(r,R));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return sx(n,r,R,u,F,p,l);if(v){v=u.fallback,R=r.mode,p=n.child,F=p.sibling;var H={mode:"hidden",children:u.children};return(R&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=Xr(p,H),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?v=Xr(F,v):(v=Ms(v,R,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,R=n.child.memoizedState,R=R===null?ch(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},v.memoizedState=R,v.childLanes=n.childLanes&~l,r.memoizedState=lh,u}return v=n.child,n=v.sibling,u=Xr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function uh(n,r){return r=Kl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ol(n,r,l,u){return u!==null&&Ou(u),eo(r,n.child,null,l),n=uh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function sx(n,r,l,u,p,v,R){if(l)return r.flags&256?(r.flags&=-257,u=rh(Error(t(422))),Ol(n,r,R,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=Kl({mode:"visible",children:u.children},p,0,null),v=Ms(v,p,R,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&eo(r,n.child,null,R),r.child.memoizedState=ch(R),r.memoizedState=lh,v);if((r.mode&1)===0)return Ol(n,r,R,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,v=Error(t(419)),u=rh(v,u,void 0),Ol(n,r,R,u)}if(F=(R&n.childLanes)!==0,Zn||F){if(u=Mn,u!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|R))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,hr(n,p),Ni(u,n,p,-1))}return bh(),u=rh(Error(t(421))),Ol(n,r,R,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=vx.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,ai=Ir(p.nextSibling),oi=r,en=!0,Ri=null,n!==null&&(_i[vi++]=cr,_i[vi++]=ur,_i[vi++]=fs,cr=n.id,ur=n.overflow,fs=r),r=uh(r,u.children),r.flags|=4096,r)}function Bm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Vu(n.return,r,l)}function hh(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function Vm(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Gn(n,r,u.children,l),u=sn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bm(n,l,r);else if(n.tag===19)Bm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(jt(sn,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Pl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),hh(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Pl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}hh(r,!0,l,null,v);break;case"together":hh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function kl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),vs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ox(n,r,l){switch(r.tag){case 3:Om(r),Qs();break;case 5:tm(r);break;case 1:Kn(r.type)&&yl(r);break;case 4:Wu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;jt(bl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(jt(sn,sn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?zm(n,r,l):(jt(sn,sn.current&1),n=fr(n,r,l),n!==null?n.sibling:null);jt(sn,sn.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Vm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),jt(sn,sn.current),u)break;return null;case 22:case 23:return r.lanes=0,Im(n,r,l)}return fr(n,r,l)}var Hm,dh,Gm,Wm;Hm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},dh=function(){},Gm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,gs(Gi.current);var v=null;switch(l){case"input":p=Lt(n,p),u=Lt(n,u),v=[];break;case"select":p=ae({},p,{value:void 0}),u=ae({},u,{value:void 0}),v=[];break;case"textarea":p=gt(n,p),u=gt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=_l)}ze(l,u);var R;l=null;for(ce in p)if(!u.hasOwnProperty(ce)&&p.hasOwnProperty(ce)&&p[ce]!=null)if(ce==="style"){var F=p[ce];for(R in F)F.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?v||(v=[]):(v=v||[]).push(ce,null));for(ce in u){var H=u[ce];if(F=p?.[ce],u.hasOwnProperty(ce)&&H!==F&&(H!=null||F!=null))if(ce==="style")if(F){for(R in F)!F.hasOwnProperty(R)||H&&H.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in H)H.hasOwnProperty(R)&&F[R]!==H[R]&&(l||(l={}),l[R]=H[R])}else l||(v||(v=[]),v.push(ce,l)),l=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(v=v||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&$t("scroll",n),v||F===H||(v=[])):(v=v||[]).push(ce,H))}l&&(v=v||[]).push("style",l);var ce=v;(r.updateQueue=ce)&&(r.flags|=4)}},Wm=function(n,r,l,u){l!==u&&(r.flags|=4)};function ya(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function In(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function ax(n,r,l){var u=r.pendingProps;switch(Iu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(r),null;case 1:return Kn(r.type)&&xl(),In(r),null;case 3:return u=r.stateNode,io(),Kt($n),Kt(Dn),Yu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ri!==null&&(Eh(Ri),Ri=null))),dh(n,r),In(r),null;case 5:Xu(r);var p=gs(ma.current);if(l=r.type,n!==null&&r.stateNode!=null)Gm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return In(r),null}if(n=gs(Gi.current),wl(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Hi]=r,u[ua]=v,n=(r.mode&1)!==0,l){case"dialog":$t("cancel",u),$t("close",u);break;case"iframe":case"object":case"embed":$t("load",u);break;case"video":case"audio":for(p=0;p<aa.length;p++)$t(aa[p],u);break;case"source":$t("error",u);break;case"img":case"image":case"link":$t("error",u),$t("load",u);break;case"details":$t("toggle",u);break;case"input":zt(u,v),$t("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},$t("invalid",u);break;case"textarea":Ut(u,v),$t("invalid",u)}ze(l,v),p=null;for(var R in v)if(v.hasOwnProperty(R)){var F=v[R];R==="children"?typeof F=="string"?u.textContent!==F&&(v.suppressHydrationWarning!==!0&&gl(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&gl(u.textContent,F,n),p=["children",""+F]):o.hasOwnProperty(R)&&F!=null&&R==="onScroll"&&$t("scroll",u)}switch(l){case"input":He(u),Gt(u,v,!0);break;case"textarea":He(u),Yt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=_l)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=R.createElement(l,{is:u.is}):(n=R.createElement(l),l==="select"&&(R=n,u.multiple?R.multiple=!0:u.size&&(R.size=u.size))):n=R.createElementNS(n,l),n[Hi]=r,n[ua]=u,Hm(n,r,!1,!1),r.stateNode=n;e:{switch(R=be(l,u),l){case"dialog":$t("cancel",n),$t("close",n),p=u;break;case"iframe":case"object":case"embed":$t("load",n),p=u;break;case"video":case"audio":for(p=0;p<aa.length;p++)$t(aa[p],n);p=u;break;case"source":$t("error",n),p=u;break;case"img":case"image":case"link":$t("error",n),$t("load",n),p=u;break;case"details":$t("toggle",n),p=u;break;case"input":zt(n,u),p=Lt(n,u),$t("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ae({},u,{value:void 0}),$t("invalid",n);break;case"textarea":Ut(n,u),p=gt(n,u),$t("invalid",n);break;default:p=u}ze(l,p),F=p;for(v in F)if(F.hasOwnProperty(v)){var H=F[v];v==="style"?pe(n,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&fe(n,H)):v==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&me(n,H):typeof H=="number"&&me(n,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?H!=null&&v==="onScroll"&&$t("scroll",n):H!=null&&C(n,v,H,R))}switch(l){case"input":He(n),Gt(n,u,!1);break;case"textarea":He(n),Yt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+de(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Wt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Wt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=_l)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return In(r),null;case 6:if(n&&r.stateNode!=null)Wm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=gs(ma.current),gs(Gi.current),wl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Hi]=r,(v=u.nodeValue!==l)&&(n=oi,n!==null))switch(n.tag){case 3:gl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Hi]=r,r.stateNode=u}return In(r),null;case 13:if(Kt(sn),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ai!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Yp(),Qs(),r.flags|=98560,v=!1;else if(v=wl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Hi]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;In(r),v=!1}else Ri!==null&&(Eh(Ri),Ri=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(sn.current&1)!==0?gn===0&&(gn=3):bh())),r.updateQueue!==null&&(r.flags|=4),In(r),null);case 4:return io(),dh(n,r),n===null&&la(r.stateNode.containerInfo),In(r),null;case 10:return Bu(r.type._context),In(r),null;case 17:return Kn(r.type)&&xl(),In(r),null;case 19:if(Kt(sn),v=r.memoizedState,v===null)return In(r),null;if(u=(r.flags&128)!==0,R=v.rendering,R===null)if(u)ya(v,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Pl(n),R!==null){for(r.flags|=128,ya(v,!1),u=R.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,R=v.alternate,R===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=R.childLanes,v.lanes=R.lanes,v.child=R.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=R.memoizedProps,v.memoizedState=R.memoizedState,v.updateQueue=R.updateQueue,v.type=R.type,n=R.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return jt(sn,sn.current&1|2),r.child}n=n.sibling}v.tail!==null&&rn()>ao&&(r.flags|=128,u=!0,ya(v,!1),r.lanes=4194304)}else{if(!u)if(n=Pl(R),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ya(v,!0),v.tail===null&&v.tailMode==="hidden"&&!R.alternate&&!en)return In(r),null}else 2*rn()-v.renderingStartTime>ao&&l!==1073741824&&(r.flags|=128,u=!0,ya(v,!1),r.lanes=4194304);v.isBackwards?(R.sibling=r.child,r.child=R):(l=v.last,l!==null?l.sibling=R:r.child=R,v.last=R)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=rn(),r.sibling=null,l=sn.current,jt(sn,u?l&1|2:l&1),r):(In(r),null);case 22:case 23:return Th(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(li&1073741824)!==0&&(In(r),r.subtreeFlags&6&&(r.flags|=8192)):In(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function lx(n,r){switch(Iu(r),r.tag){case 1:return Kn(r.type)&&xl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return io(),Kt($n),Kt(Dn),Yu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xu(r),null;case 13:if(Kt(sn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Kt(sn),null;case 4:return io(),null;case 10:return Bu(r.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var zl=!1,Un=!1,cx=typeof WeakSet=="function"?WeakSet:Set,We=null;function so(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){cn(n,r,u)}else l.current=null}function fh(n,r,l){try{l()}catch(u){cn(n,r,u)}}var Xm=!1;function ux(n,r){if(Tu=sl,n=Ep(),_u(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var R=0,F=-1,H=-1,ce=0,xe=0,ye=n,_e=null;t:for(;;){for(var Ve;ye!==l||p!==0&&ye.nodeType!==3||(F=R+p),ye!==v||u!==0&&ye.nodeType!==3||(H=R+u),ye.nodeType===3&&(R+=ye.nodeValue.length),(Ve=ye.firstChild)!==null;)_e=ye,ye=Ve;for(;;){if(ye===n)break t;if(_e===l&&++ce===p&&(F=R),_e===v&&++xe===u&&(H=R),(Ve=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Ve}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(bu={focusedElem:n,selectionRange:l},sl=!1,We=r;We!==null;)if(r=We,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,We=n;else for(;We!==null;){r=We;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,hn=je.memoizedState,J=r.stateNode,j=J.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Pi(r.type,$e),hn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=r.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){cn(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,We=n;break}We=r.return}return je=Xm,Xm=!1,je}function Sa(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&fh(r,l,v)}p=p.next}while(p!==u)}}function Bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function ph(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function jm(n){var r=n.alternate;r!==null&&(n.alternate=null,jm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Hi],delete r[ua],delete r[Pu],delete r[jv],delete r[Yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mh(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=_l));else if(u!==4&&(n=n.child,n!==null))for(mh(n,r,l),n=n.sibling;n!==null;)mh(n,r,l),n=n.sibling}function gh(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(gh(n,r,l),n=n.sibling;n!==null;)gh(n,r,l),n=n.sibling}var Rn=null,Li=!1;function Br(n,r,l){for(l=l.child;l!==null;)$m(n,r,l),l=l.sibling}function $m(n,r,l){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(te,l)}catch{}switch(l.tag){case 5:Un||so(l,r);case 6:var u=Rn,p=Li;Rn=null,Br(n,r,l),Rn=u,Li=p,Rn!==null&&(Li?(n=Rn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Li?(n=Rn,l=l.stateNode,n.nodeType===8?Ru(n.parentNode,l):n.nodeType===1&&Ru(n,l),Qo(n)):Ru(Rn,l.stateNode));break;case 4:u=Rn,p=Li,Rn=l.stateNode.containerInfo,Li=!0,Br(n,r,l),Rn=u,Li=p;break;case 0:case 11:case 14:case 15:if(!Un&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,R=v.destroy;v=v.tag,R!==void 0&&((v&2)!==0||(v&4)!==0)&&fh(l,r,R),p=p.next}while(p!==u)}Br(n,r,l);break;case 1:if(!Un&&(so(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(F){cn(l,r,F)}Br(n,r,l);break;case 21:Br(n,r,l);break;case 22:l.mode&1?(Un=(u=Un)||l.memoizedState!==null,Br(n,r,l),Un=u):Br(n,r,l);break;default:Br(n,r,l)}}function Km(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new cx),r.forEach(function(u){var p=xx.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Di(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,R=r,F=R;e:for(;F!==null;){switch(F.tag){case 5:Rn=F.stateNode,Li=!1;break e;case 3:Rn=F.stateNode.containerInfo,Li=!0;break e;case 4:Rn=F.stateNode.containerInfo,Li=!0;break e}F=F.return}if(Rn===null)throw Error(t(160));$m(v,R,p),Rn=null,Li=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(ce){cn(p,r,ce)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Zm(r,n),r=r.sibling}function Zm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Di(r,n),Xi(n),u&4){try{Sa(3,n,n.return),Bl(3,n)}catch($e){cn(n,n.return,$e)}try{Sa(5,n,n.return)}catch($e){cn(n,n.return,$e)}}break;case 1:Di(r,n),Xi(n),u&512&&l!==null&&so(l,l.return);break;case 5:if(Di(r,n),Xi(n),u&512&&l!==null&&so(l,l.return),n.flags&32){var p=n.stateNode;try{me(p,"")}catch($e){cn(n,n.return,$e)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,R=l!==null?l.memoizedProps:v,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&mt(p,v),be(F,R);var ce=be(F,v);for(R=0;R<H.length;R+=2){var xe=H[R],ye=H[R+1];xe==="style"?pe(p,ye):xe==="dangerouslySetInnerHTML"?fe(p,ye):xe==="children"?me(p,ye):C(p,xe,ye,ce)}switch(F){case"input":nn(p,v);break;case"textarea":Ie(p,v);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ve=v.value;Ve!=null?Wt(p,!!v.multiple,Ve,!1):_e!==!!v.multiple&&(v.defaultValue!=null?Wt(p,!!v.multiple,v.defaultValue,!0):Wt(p,!!v.multiple,v.multiple?[]:"",!1))}p[ua]=v}catch($e){cn(n,n.return,$e)}}break;case 6:if(Di(r,n),Xi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch($e){cn(n,n.return,$e)}}break;case 3:if(Di(r,n),Xi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Qo(r.containerInfo)}catch($e){cn(n,n.return,$e)}break;case 4:Di(r,n),Xi(n);break;case 13:Di(r,n),Xi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(xh=rn())),u&4&&Km(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(Un=(ce=Un)||xe,Di(r,n),Un=ce):Di(r,n),Xi(n),u&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!xe&&(n.mode&1)!==0)for(We=n,xe=n.child;xe!==null;){for(ye=We=xe;We!==null;){switch(_e=We,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:Sa(4,_e,_e.return);break;case 1:so(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){u=_e,l=_e.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch($e){cn(u,l,$e)}}break;case 5:so(_e,_e.return);break;case 22:if(_e.memoizedState!==null){eg(ye);continue}}Ve!==null?(Ve.return=_e,We=Ve):eg(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{p=ye.stateNode,ce?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=ye.stateNode,H=ye.memoizedProps.style,R=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=ue("display",R))}catch($e){cn(n,n.return,$e)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ce?"":ye.memoizedProps}catch($e){cn(n,n.return,$e)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Di(r,n),Xi(n),u&4&&Km(n);break;case 21:break;default:Di(r,n),Xi(n)}}function Xi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Ym(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(me(p,""),u.flags&=-33);var v=qm(n);gh(n,v,p);break;case 3:case 4:var R=u.stateNode.containerInfo,F=qm(n);mh(n,F,R);break;default:throw Error(t(161))}}catch(H){cn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function hx(n,r,l){We=n,Jm(n)}function Jm(n,r,l){for(var u=(n.mode&1)!==0;We!==null;){var p=We,v=p.child;if(p.tag===22&&u){var R=p.memoizedState!==null||zl;if(!R){var F=p.alternate,H=F!==null&&F.memoizedState!==null||Un;F=zl;var ce=Un;if(zl=R,(Un=H)&&!ce)for(We=p;We!==null;)R=We,H=R.child,R.tag===22&&R.memoizedState!==null?tg(p):H!==null?(H.return=R,We=H):tg(p);for(;v!==null;)We=v,Jm(v),v=v.sibling;We=p,zl=F,Un=ce}Qm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,We=v):Qm(n)}}function Qm(n){for(;We!==null;){var r=We;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Un||Bl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Un)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Pi(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&em(r,v,u);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}em(r,R,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ce=r.alternate;if(ce!==null){var xe=ce.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Qo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||r.flags&512&&ph(r)}catch(_e){cn(r,r.return,_e)}}if(r===n){We=null;break}if(l=r.sibling,l!==null){l.return=r.return,We=l;break}We=r.return}}function eg(n){for(;We!==null;){var r=We;if(r===n){We=null;break}var l=r.sibling;if(l!==null){l.return=r.return,We=l;break}We=r.return}}function tg(n){for(;We!==null;){var r=We;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Bl(4,r)}catch(H){cn(r,l,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(H){cn(r,p,H)}}var v=r.return;try{ph(r)}catch(H){cn(r,v,H)}break;case 5:var R=r.return;try{ph(r)}catch(H){cn(r,R,H)}}}catch(H){cn(r,r.return,H)}if(r===n){We=null;break}var F=r.sibling;if(F!==null){F.return=r.return,We=F;break}We=r.return}}var dx=Math.ceil,Vl=b.ReactCurrentDispatcher,_h=b.ReactCurrentOwner,Si=b.ReactCurrentBatchConfig,Rt=0,Mn=null,fn=null,Pn=0,li=0,oo=Ur(0),gn=0,Ma=null,vs=0,Hl=0,vh=0,Ea=null,Jn=null,xh=0,ao=1/0,pr=null,Gl=!1,yh=null,Vr=null,Wl=!1,Hr=null,Xl=0,wa=0,Sh=null,jl=-1,Yl=0;function Wn(){return(Rt&6)!==0?rn():jl!==-1?jl:jl=rn()}function Gr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&Pn!==0?Pn&-Pn:$v.transition!==null?(Yl===0&&(Yl=Be()),Yl):(n=St,n!==0||(n=window.event,n=n===void 0?16:ip(n.type)),n)}function Ni(n,r,l,u){if(50<wa)throw wa=0,Sh=null,Error(t(185));xt(n,l,u),((Rt&2)===0||n!==Mn)&&(n===Mn&&((Rt&2)===0&&(Hl|=l),gn===4&&Wr(n,Pn)),Qn(n,u),l===1&&Rt===0&&(r.mode&1)===0&&(ao=rn()+500,Sl&&Or()))}function Qn(n,r){var l=n.callbackNode;Ft(n,r);var u=Xt(n,n===Mn?Pn:0);if(u===0)l!==null&&il(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&il(l),r===1)n.tag===0?qv(ig.bind(null,n)):Hp(ig.bind(null,n)),Wv(function(){(Rt&6)===0&&Or()}),l=null;else{switch(or(u)){case 1:l=qo;break;case 4:l=L;break;case 16:l=q;break;case 536870912:l=ne;break;default:l=q}l=hg(l,ng.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function ng(n,r){if(jl=-1,Yl=0,(Rt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(lo()&&n.callbackNode!==l)return null;var u=Xt(n,n===Mn?Pn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=ql(n,u);else{r=u;var p=Rt;Rt|=2;var v=sg();(Mn!==n||Pn!==r)&&(pr=null,ao=rn()+500,ys(n,r));do try{mx();break}catch(F){rg(n,F)}while(!0);zu(),Vl.current=v,Rt=p,fn!==null?r=0:(Mn=null,Pn=0,r=gn)}if(r!==0){if(r===2&&(p=dn(n),p!==0&&(u=p,r=Mh(n,p))),r===1)throw l=Ma,ys(n,0),Wr(n,u),Qn(n,rn()),l;if(r===6)Wr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!fx(p)&&(r=ql(n,u),r===2&&(v=dn(n),v!==0&&(u=v,r=Mh(n,v))),r===1))throw l=Ma,ys(n,0),Wr(n,u),Qn(n,rn()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Ss(n,Jn,pr);break;case 3:if(Wr(n,u),(u&130023424)===u&&(r=xh+500-rn(),10<r)){if(Xt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Cu(Ss.bind(null,n,Jn,pr),r);break}Ss(n,Jn,pr);break;case 4:if(Wr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var R=31-Ae(u);v=1<<R,R=r[R],R>p&&(p=R),u&=~v}if(u=p,u=rn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*dx(u/1960))-u,10<u){n.timeoutHandle=Cu(Ss.bind(null,n,Jn,pr),u);break}Ss(n,Jn,pr);break;case 5:Ss(n,Jn,pr);break;default:throw Error(t(329))}}}return Qn(n,rn()),n.callbackNode===l?ng.bind(null,n):null}function Mh(n,r){var l=Ea;return n.current.memoizedState.isDehydrated&&(ys(n,r).flags|=256),n=ql(n,r),n!==2&&(r=Jn,Jn=l,r!==null&&Eh(r)),n}function Eh(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function fx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!Ci(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(n,r){for(r&=~vh,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ae(r),u=1<<l;n[l]=-1,r&=~u}}function ig(n){if((Rt&6)!==0)throw Error(t(327));lo();var r=Xt(n,0);if((r&1)===0)return Qn(n,rn()),null;var l=ql(n,r);if(n.tag!==0&&l===2){var u=dn(n);u!==0&&(r=u,l=Mh(n,u))}if(l===1)throw l=Ma,ys(n,0),Wr(n,r),Qn(n,rn()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ss(n,Jn,pr),Qn(n,rn()),null}function wh(n,r){var l=Rt;Rt|=1;try{return n(r)}finally{Rt=l,Rt===0&&(ao=rn()+500,Sl&&Or())}}function xs(n){Hr!==null&&Hr.tag===0&&(Rt&6)===0&&lo();var r=Rt;Rt|=1;var l=Si.transition,u=St;try{if(Si.transition=null,St=1,n)return n()}finally{St=u,Si.transition=l,Rt=r,(Rt&6)===0&&Or()}}function Th(){li=oo.current,Kt(oo)}function ys(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Gv(l)),fn!==null)for(l=fn.return;l!==null;){var u=l;switch(Iu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xl();break;case 3:io(),Kt($n),Kt(Dn),Yu();break;case 5:Xu(u);break;case 4:io();break;case 13:Kt(sn);break;case 19:Kt(sn);break;case 10:Bu(u.type._context);break;case 22:case 23:Th()}l=l.return}if(Mn=n,fn=n=Xr(n.current,null),Pn=li=r,gn=0,Ma=null,vh=Hl=vs=0,Jn=Ea=null,ms!==null){for(r=0;r<ms.length;r++)if(l=ms[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var R=v.next;v.next=p,u.next=R}l.pending=u}ms=null}return n}function rg(n,r){do{var l=fn;try{if(zu(),Ll.current=Ul,Dl){for(var u=on.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Dl=!1}if(_s=0,Sn=mn=on=null,ga=!1,_a=0,_h.current=null,l===null||l.return===null){gn=1,Ma=r,fn=null;break}e:{var v=n,R=l.return,F=l,H=r;if(r=Pn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,xe=F,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ve=Rm(R);if(Ve!==null){Ve.flags&=-257,Pm(Ve,R,F,v,r),Ve.mode&1&&Cm(v,ce,r),r=Ve,H=ce;var je=r.updateQueue;if(je===null){var $e=new Set;$e.add(H),r.updateQueue=$e}else je.add(H);break e}else{if((r&1)===0){Cm(v,ce,r),bh();break e}H=Error(t(426))}}else if(en&&F.mode&1){var hn=Rm(R);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),Pm(hn,R,F,v,r),Ou(ro(H,F));break e}}v=H=ro(H,F),gn!==4&&(gn=2),Ea===null?Ea=[v]:Ea.push(v),v=R;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var J=bm(v,H,r);Qp(v,J);break e;case 1:F=H;var j=v.type,ie=v.stateNode;if((v.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Vr===null||!Vr.has(ie)))){v.flags|=65536,r&=-r,v.lanes|=r;var we=Am(v,F,r);Qp(v,we);break e}}v=v.return}while(v!==null)}ag(l)}catch(Ze){r=Ze,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function sg(){var n=Vl.current;return Vl.current=Ul,n===null?Ul:n}function bh(){(gn===0||gn===3||gn===2)&&(gn=4),Mn===null||(vs&268435455)===0&&(Hl&268435455)===0||Wr(Mn,Pn)}function ql(n,r){var l=Rt;Rt|=2;var u=sg();(Mn!==n||Pn!==r)&&(pr=null,ys(n,r));do try{px();break}catch(p){rg(n,p)}while(!0);if(zu(),Rt=l,Vl.current=u,fn!==null)throw Error(t(261));return Mn=null,Pn=0,gn}function px(){for(;fn!==null;)og(fn)}function mx(){for(;fn!==null&&!iu();)og(fn)}function og(n){var r=ug(n.alternate,n,li);n.memoizedProps=n.pendingProps,r===null?ag(n):fn=r,_h.current=null}function ag(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=ax(l,r,li),l!==null){fn=l;return}}else{if(l=lx(l,r),l!==null){l.flags&=32767,fn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,fn=null;return}}if(r=r.sibling,r!==null){fn=r;return}fn=r=n}while(r!==null);gn===0&&(gn=5)}function Ss(n,r,l){var u=St,p=Si.transition;try{Si.transition=null,St=1,gx(n,r,l,u)}finally{Si.transition=p,St=u}return null}function gx(n,r,l,u){do lo();while(Hr!==null);if((Rt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Yn(n,v),n===Mn&&(fn=Mn=null,Pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Wl||(Wl=!0,hg(q,function(){return lo(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=Si.transition,Si.transition=null;var R=St;St=1;var F=Rt;Rt|=4,_h.current=null,ux(n,l),Zm(l,n),Fv(bu),sl=!!Tu,bu=Tu=null,n.current=l,hx(l),ru(),Rt=F,St=R,Si.transition=v}else n.current=l;if(Wl&&(Wl=!1,Hr=n,Xl=p),v=n.pendingLanes,v===0&&(Vr=null),Ge(l.stateNode),Qn(n,rn()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Gl)throw Gl=!1,n=yh,yh=null,n;return(Xl&1)!==0&&n.tag!==0&&lo(),v=n.pendingLanes,(v&1)!==0?n===Sh?wa++:(wa=0,Sh=n):wa=0,Or(),null}function lo(){if(Hr!==null){var n=or(Xl),r=Si.transition,l=St;try{if(Si.transition=null,St=16>n?16:n,Hr===null)var u=!1;else{if(n=Hr,Hr=null,Xl=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,We=n.current;We!==null;){var v=We,R=v.child;if((We.flags&16)!==0){var F=v.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ce=F[H];for(We=ce;We!==null;){var xe=We;switch(xe.tag){case 0:case 11:case 15:Sa(8,xe,v)}var ye=xe.child;if(ye!==null)ye.return=xe,We=ye;else for(;We!==null;){xe=We;var _e=xe.sibling,Ve=xe.return;if(jm(xe),xe===ce){We=null;break}if(_e!==null){_e.return=Ve,We=_e;break}We=Ve}}}var je=v.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var hn=$e.sibling;$e.sibling=null,$e=hn}while($e!==null)}}We=v}}if((v.subtreeFlags&2064)!==0&&R!==null)R.return=v,We=R;else e:for(;We!==null;){if(v=We,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Sa(9,v,v.return)}var J=v.sibling;if(J!==null){J.return=v.return,We=J;break e}We=v.return}}var j=n.current;for(We=j;We!==null;){R=We;var ie=R.child;if((R.subtreeFlags&2064)!==0&&ie!==null)ie.return=R,We=ie;else e:for(R=j;We!==null;){if(F=We,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Bl(9,F)}}catch(Ze){cn(F,F.return,Ze)}if(F===R){We=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,We=we;break e}We=F.return}}if(Rt=p,Or(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(te,n)}catch{}u=!0}return u}finally{St=l,Si.transition=r}}return!1}function lg(n,r,l){r=ro(l,r),r=bm(n,r,1),n=zr(n,r,1),r=Wn(),n!==null&&(xt(n,1,r),Qn(n,r))}function cn(n,r,l){if(n.tag===3)lg(n,n,l);else for(;r!==null;){if(r.tag===3){lg(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Vr===null||!Vr.has(u))){n=ro(l,n),n=Am(r,n,1),r=zr(r,n,1),n=Wn(),r!==null&&(xt(r,1,n),Qn(r,n));break}}r=r.return}}function _x(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Wn(),n.pingedLanes|=n.suspendedLanes&l,Mn===n&&(Pn&l)===l&&(gn===4||gn===3&&(Pn&130023424)===Pn&&500>rn()-xh?ys(n,0):vh|=l),Qn(n,r)}function cg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Wn();n=hr(n,r),n!==null&&(xt(n,r,l),Qn(n,l))}function vx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),cg(n,l)}function xx(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),cg(n,l)}var ug;ug=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||$n.current)Zn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Zn=!1,ox(n,r,l);Zn=(n.flags&131072)!==0}else Zn=!1,en&&(r.flags&1048576)!==0&&Gp(r,El,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;kl(n,r),n=r.pendingProps;var p=Ks(r,Dn.current);no(r,l),p=Ku(null,r,u,n,p,l);var v=Zu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kn(u)?(v=!0,yl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Gu(r),p.updater=Fl,r.stateNode=p,p._reactInternals=r,ih(r,u,n,l),r=ah(null,r,u,!0,v,l)):(r.tag=0,en&&v&&Nu(r),Gn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(kl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Sx(u),n=Pi(u,n),p){case 0:r=oh(null,r,u,n,l);break e;case 1:r=Fm(null,r,u,n,l);break e;case 11:r=Lm(null,r,u,n,l);break e;case 14:r=Dm(null,r,u,Pi(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Pi(u,p),oh(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Pi(u,p),Fm(n,r,u,p,l);case 3:e:{if(Om(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Jp(n,r),Rl(r,u,null,l);var R=r.memoizedState;if(u=R.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=ro(Error(t(423)),r),r=km(n,r,u,l,p);break e}else if(u!==p){p=ro(Error(t(424)),r),r=km(n,r,u,l,p);break e}else for(ai=Ir(r.stateNode.containerInfo.firstChild),oi=r,en=!0,Ri=null,l=Kp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qs(),u===p){r=fr(n,r,l);break e}Gn(n,r,u,l)}r=r.child}return r;case 5:return tm(r),n===null&&Fu(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,R=p.children,Au(u,p)?R=null:v!==null&&Au(u,v)&&(r.flags|=32),Um(n,r),Gn(n,r,R,l),r.child;case 6:return n===null&&Fu(r),null;case 13:return zm(n,r,l);case 4:return Wu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=eo(r,null,u,l):Gn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Pi(u,p),Lm(n,r,u,p,l);case 7:return Gn(n,r,r.pendingProps,l),r.child;case 8:return Gn(n,r,r.pendingProps.children,l),r.child;case 12:return Gn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,R=p.value,jt(bl,u._currentValue),u._currentValue=R,v!==null)if(Ci(v.value,R)){if(v.children===p.children&&!$n.current){r=fr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){R=v.child;for(var H=F.firstContext;H!==null;){if(H.context===u){if(v.tag===1){H=dr(-1,l&-l),H.tag=2;var ce=v.updateQueue;if(ce!==null){ce=ce.shared;var xe=ce.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),ce.pending=H}}v.lanes|=l,H=v.alternate,H!==null&&(H.lanes|=l),Vu(v.return,l,r),F.lanes|=l;break}H=H.next}}else if(v.tag===10)R=v.type===r.type?null:v.child;else if(v.tag===18){if(R=v.return,R===null)throw Error(t(341));R.lanes|=l,F=R.alternate,F!==null&&(F.lanes|=l),Vu(R,l,r),R=v.sibling}else R=v.child;if(R!==null)R.return=v;else for(R=v;R!==null;){if(R===r){R=null;break}if(v=R.sibling,v!==null){v.return=R.return,R=v;break}R=R.return}v=R}Gn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,no(r,l),p=xi(p),u=u(p),r.flags|=1,Gn(n,r,u,l),r.child;case 14:return u=r.type,p=Pi(u,r.pendingProps),p=Pi(u.type,p),Dm(n,r,u,p,l);case 15:return Nm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Pi(u,p),kl(n,r),r.tag=1,Kn(u)?(n=!0,yl(r)):n=!1,no(r,l),wm(r,u,p),ih(r,u,p,l),ah(null,r,u,!0,n,l);case 19:return Vm(n,r,l);case 22:return Im(n,r,l)}throw Error(t(156,r.tag))};function hg(n,r){return nl(n,r)}function yx(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,r,l,u){return new yx(n,r,l,u)}function Ah(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sx(n){if(typeof n=="function")return Ah(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===W)return 14}return 2}function Xr(n,r){var l=n.alternate;return l===null?(l=Mi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function $l(n,r,l,u,p,v){var R=2;if(u=n,typeof n=="function")Ah(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case D:return Ms(l.children,p,v,r);case E:R=8,p|=8;break;case N:return n=Mi(12,l,r,p|2),n.elementType=N,n.lanes=v,n;case Q:return n=Mi(13,l,r,p),n.elementType=Q,n.lanes=v,n;case se:return n=Mi(19,l,r,p),n.elementType=se,n.lanes=v,n;case Y:return Kl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:R=10;break e;case O:R=9;break e;case B:R=11;break e;case W:R=14;break e;case K:R=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Mi(R,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function Ms(n,r,l,u){return n=Mi(7,n,u,r),n.lanes=l,n}function Kl(n,r,l,u){return n=Mi(22,n,u,r),n.elementType=Y,n.lanes=l,n.stateNode={isHidden:!1},n}function Ch(n,r,l){return n=Mi(6,n,null,r),n.lanes=l,n}function Rh(n,r,l){return r=Mi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Mx(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ph(n,r,l,u,p,v,R,F,H){return n=new Mx(n,r,l,F,H),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Mi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(v),n}function Ex(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function dg(n){if(!n)return Fr;n=n._reactInternals;e:{if(Bi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Kn(l))return Bp(n,l,r)}return r}function fg(n,r,l,u,p,v,R,F,H){return n=Ph(l,u,!0,n,p,v,R,F,H),n.context=dg(null),l=n.current,u=Wn(),p=Gr(l),v=dr(u,p),v.callback=r??null,zr(l,v,p),n.current.lanes=p,xt(n,p,u),Qn(n,u),n}function Zl(n,r,l,u){var p=r.current,v=Wn(),R=Gr(p);return l=dg(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(v,R),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=zr(p,r,R),n!==null&&(Ni(n,p,R,v),Cl(n,p,R)),R}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Lh(n,r){pg(n,r),(n=n.alternate)&&pg(n,r)}function wx(){return null}var mg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dh(n){this._internalRoot=n}Ql.prototype.render=Dh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Zl(n,r,null,null)},Ql.prototype.unmount=Dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xs(function(){Zl(null,n,null,null)}),r[ar]=null}};function Ql(n){this._internalRoot=n}Ql.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ot();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Lr.length&&r!==0&&r<Lr[l].priority;l++);Lr.splice(l,0,n),l===0&&tp(n)}};function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gg(){}function Tx(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var ce=Jl(R);v.call(ce)}}var R=fg(r,u,n,0,null,!1,!1,"",gg);return n._reactRootContainer=R,n[ar]=R.current,la(n.nodeType===8?n.parentNode:n),xs(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var ce=Jl(H);F.call(ce)}}var H=Ph(n,0,!1,null,null,!1,!1,"",gg);return n._reactRootContainer=H,n[ar]=H.current,la(n.nodeType===8?n.parentNode:n),xs(function(){Zl(r,H,l,u)}),H}function tc(n,r,l,u,p){var v=l._reactRootContainer;if(v){var R=v;if(typeof p=="function"){var F=p;p=function(){var H=Jl(R);F.call(H)}}Zl(r,R,n,p)}else R=Tx(l,r,n,p,u);return Jl(R)}It=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=At(r.pendingLanes);l!==0&&(qn(r,l|1),Qn(r,rn()),(Rt&6)===0&&(ao=rn()+500,Or()))}break;case 13:xs(function(){var u=hr(n,1);if(u!==null){var p=Wn();Ni(u,n,1,p)}}),Lh(n,1)}},qt=function(n){if(n.tag===13){var r=hr(n,134217728);if(r!==null){var l=Wn();Ni(r,n,134217728,l)}Lh(n,134217728)}},bi=function(n){if(n.tag===13){var r=Gr(n),l=hr(n,r);if(l!==null){var u=Wn();Ni(l,n,r,u)}Lh(n,r)}},Ot=function(){return St},Ai=function(n,r){var l=St;try{return St=n,r()}finally{St=l}},at=function(n,r,l){switch(r){case"input":if(nn(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=vl(u);if(!p)throw Error(t(90));Et(u),nn(u,p)}}}break;case"textarea":Ie(n,l);break;case"select":r=l.value,r!=null&&Wt(n,!!l.multiple,r,!1)}},Ce=wh,ge=xs;var bx={usingClientEntryPoint:!1,Events:[ha,qs,vl,he,ke,wh]},Ta={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{te=nc.inject(Ax),Pe=nc}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx,ei.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(r))throw Error(t(200));return Ex(n,r,null,l)},ei.createRoot=function(n,r){if(!Nh(n))throw Error(t(299));var l=!1,u="",p=mg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ph(n,1,!1,null,null,l,!1,u,p),n[ar]=r.current,la(n.nodeType===8?n.parentNode:n),new Dh(r)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jo(r),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return xs(n)},ei.hydrate=function(n,r,l){if(!ec(r))throw Error(t(200));return tc(null,n,r,!0,l)},ei.hydrateRoot=function(n,r,l){if(!Nh(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",R=mg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=fg(r,null,n,1,l??null,p,!1,v,R),n[ar]=r.current,la(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Ql(r)},ei.render=function(n,r,l){if(!ec(r))throw Error(t(200));return tc(null,n,r,!1,l)},ei.unmountComponentAtNode=function(n){if(!ec(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){tc(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},ei.unstable_batchedUpdates=wh,ei.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!ec(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tc(n,r,l,!1,u)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var wg;function kx(){if(wg)return Fh.exports;wg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fh.exports=Ox(),Fh.exports}var Tg;function zx(){if(Tg)return ic;Tg=1;var s=kx();return ic.createRoot=s.createRoot,ic.hydrateRoot=s.hydrateRoot,ic}var Bx=zx();const Vx=Lx(Bx),Hx={"America/Toronto":["Toronto",43.7,-79.4],"America/New_York":["New York",40.7,-74],"America/Chicago":["Chicago",41.9,-87.6],"America/Denver":["Denver",39.7,-105],"America/Edmonton":["Edmonton",53.5,-113.5],"America/Winnipeg":["Winnipeg",49.9,-97.1],"America/Halifax":["Halifax",44.6,-63.6],"America/St_Johns":["St. John's",47.6,-52.7],"America/Vancouver":["Vancouver",49.3,-123.1],"America/Los_Angeles":["Los Angeles",34.1,-118.2],"America/Phoenix":["Phoenix",33.4,-112.1],"America/Mexico_City":["Mexico City",19.4,-99.1],"America/Sao_Paulo":["São Paulo",-23.6,-46.6],"America/Bogota":["Bogotá",4.7,-74.1],"Europe/London":["London",51.5,-.1],"Europe/Dublin":["Dublin",53.3,-6.3],"Europe/Paris":["Paris",48.9,2.4],"Europe/Berlin":["Berlin",52.5,13.4],"Europe/Madrid":["Madrid",40.4,-3.7],"Europe/Rome":["Rome",41.9,12.5],"Europe/Amsterdam":["Amsterdam",52.4,4.9],"Europe/Stockholm":["Stockholm",59.3,18.1],"Europe/Warsaw":["Warsaw",52.2,21],"Europe/Athens":["Athens",38,23.7],"Europe/Istanbul":["Istanbul",41,29],"Africa/Cairo":["Cairo",30,31.2],"Africa/Lagos":["Lagos",6.5,3.4],"Africa/Johannesburg":["Johannesburg",-26.2,28],"Africa/Nairobi":["Nairobi",-1.3,36.8],"Asia/Dubai":["Dubai",25.2,55.3],"Asia/Karachi":["Karachi",24.9,67],"Asia/Kolkata":["Delhi",28.6,77.2],"Asia/Dhaka":["Dhaka",23.8,90.4],"Asia/Bangkok":["Bangkok",13.8,100.5],"Asia/Singapore":["Singapore",1.35,103.8],"Asia/Hong_Kong":["Hong Kong",22.3,114.2],"Asia/Shanghai":["Shanghai",31.2,121.5],"Asia/Taipei":["Taipei",25,121.5],"Asia/Seoul":["Seoul",37.6,127],"Asia/Tokyo":["Tokyo",35.7,139.7],"Asia/Manila":["Manila",14.6,121],"Australia/Perth":["Perth",-31.9,115.9],"Australia/Sydney":["Sydney",-33.9,151.2],"Australia/Melbourne":["Melbourne",-37.8,145],"Pacific/Auckland":["Auckland",-36.8,174.8]};function Gx(s=Intl.DateTimeFormat().resolvedOptions().timeZone,e=new Date){const t=Hx[s];return t?{name:t[0],lat:t[1],lon:t[2]}:{name:s.split("/").pop()?.replace(/_/g," ")??"Here",lat:45,lon:-e.getTimezoneOffset()/60*15}}const rc=Math.PI/180;function Wx(s,e){const t=new Date(s.getFullYear(),0,0),i=Math.floor((s.getTime()-t.getTime())/864e5),o=2*Math.PI/365*(i-1),a=229.18*(75e-6+.001868*Math.cos(o)-.032077*Math.sin(o)-.014615*Math.cos(2*o)-.040849*Math.sin(2*o)),c=.006918-.399912*Math.cos(o)+.070257*Math.sin(o)-.006758*Math.cos(2*o)+907e-6*Math.sin(2*o),h=(Math.cos(90.833*rc)-Math.sin(e.lat*rc)*Math.sin(c))/(Math.cos(e.lat*rc)*Math.cos(c));if(h<-1||h>1)return null;const d=Math.acos(h)/rc,f=M=>720-4*(e.lon+M*d)-a,g=M=>new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),0,0,0)+M*6e4);let _=g(f(1)),m=g(f(-1));m<_&&(m=new Date(m.getTime()+864e5));const x=Math.round((new Date(s.getFullYear(),s.getMonth(),s.getDate(),12).getTime()-(_.getTime()+m.getTime())/2)/864e5);return x&&(_=new Date(_.getTime()+x*864e5),m=new Date(m.getTime()+x*864e5)),{sunrise:_,sunset:m}}function Xx(s,e){const t=Wx(s,e);if(!t){const M=s.getHours();return{phase:M>=9&&M<17?"midday":"night",sunrise:null,sunset:null,daylightLeft:0,x:.5,y:.5,night:!(M>=9&&M<17)}}const{sunrise:i,sunset:o}=t,a=s.getTime(),c=M=>(a-M.getTime())/6e4,h=c(i),d=-c(o),f=(o.getTime()-i.getTime())/6e4,g=h-f/2,_=h<-40||d<-45?"night":h<50?"dawn":d<15?"dusk":d<95?"golden":g<-100?"morning":"midday",m=_==="night";if(m){const M=1440-f,A=d<0?-d:M+h,y=Math.max(0,Math.min(1,A/M));return{phase:_,sunrise:i,sunset:o,daylightLeft:0,x:y,y:Math.sin(y*Math.PI),night:m}}const x=Math.max(0,Math.min(1,h/f));return{phase:_,sunrise:i,sunset:o,daylightLeft:Math.max(0,Math.round(d)),x,y:Math.max(0,Math.sin(x*Math.PI)),night:m}}const jx={dawn:{sky:["#cdd0ee","#efd3d0","#f8dcc2"],disc:"#fbd9b6",glow:"#f7c9a4",clay:["#dcc6d3","#d0aab0","#c59793"],land:"#f1e3d8",ink:"#4b3a44",blob:"#f3d6dc",blobGlow:"#ffe9d2"},morning:{sky:["#c9e0ec","#e6eef1","#f6ebdb"],disc:"#fff6de",glow:"#fff0c9",clay:["#d6dbe2","#d3c8c9","#ccb2a8"],land:"#f3ebe0",ink:"#3f3a40",blob:"#dfeaf0",blobGlow:"#fff6dc"},midday:{sky:["#bfdbe9","#e2edf1","#f4eee8"],disc:"#fffdf0",glow:"#fff5d6",clay:["#d2dde2","#d4cdc9","#cfb8ab"],land:"#f4ede4",ink:"#3b383d",blob:"#dcebf2",blobGlow:"#fffbe6"},golden:{sky:["#d6cde6","#f3d3c0","#f3bd95"],disc:"#fbc48e",glow:"#f7b071",clay:["#e4bba9","#d99d86","#c88267"],land:"#f3dfcd",ink:"#4a332c",blob:"#f6d2bd",blobGlow:"#ffe0b3"},dusk:{sky:["#a7a1cf","#d9a7a8","#e89c7b"],disc:"#f09a72",glow:"#ee8a62",clay:["#bb92a3","#ab737e","#925864"],land:"#e9cbbf",ink:"#3d2832",blob:"#e9b7bd",blobGlow:"#ffd0b0"},night:{sky:["#13111b","#1d182a","#2c2337"],disc:"#ece5da",glow:"#8f86b8",clay:["#2c2437","#251e2e","#1d1824"],land:"#1a1621",ink:"#cfc4d6",blob:"#5d5486",blobGlow:"#f2c9a6"}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="184",Do={ROTATE:0,DOLLY:1,PAN:2},Po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yx=0,bg=1,qx=2,Fc=1,$0=2,Va=3,os=0,ri=1,ii=2,Er=0,No=1,Ag=2,Cg=3,Rg=4,$x=5,As=100,Kx=101,Zx=102,Jx=103,Qx=104,ey=200,ty=201,ny=202,iy=203,wd=204,Td=205,ry=206,sy=207,oy=208,ay=209,ly=210,cy=211,uy=212,hy=213,dy=214,bd=0,Ad=1,Cd=2,Fo=3,Rd=4,Pd=5,Ld=6,Dd=7,K0=0,fy=1,py=2,Ji=0,Z0=1,J0=2,Q0=3,Tf=4,e_=5,t_=6,n_=7,i_=300,Ns=301,Oo=302,zh=303,Bh=304,Qc=306,Gc=1e3,Mr=1001,Nd=1002,Ln=1003,my=1004,sc=1005,Bn=1006,Vh=1007,Ls=1008,fi=1009,r_=1010,s_=1011,qa=1012,bf=1013,er=1014,ki=1015,br=1016,Af=1017,Cf=1018,$a=1020,o_=35902,a_=35899,l_=1021,c_=1022,zi=1023,Ar=1026,Ds=1027,Rf=1028,Pf=1029,Is=1030,Lf=1031,Df=1033,Oc=33776,kc=33777,zc=33778,Bc=33779,Id=35840,Ud=35841,Fd=35842,Od=35843,kd=36196,zd=37492,Bd=37496,Vd=37488,Hd=37489,Wc=37490,Gd=37491,Wd=37808,Xd=37809,jd=37810,Yd=37811,qd=37812,$d=37813,Kd=37814,Zd=37815,Jd=37816,Qd=37817,ef=37818,tf=37819,nf=37820,rf=37821,sf=36492,of=36494,af=36495,lf=36283,cf=36284,Xc=36285,uf=36286,gy=3200,hf=0,_y=1,rs="",hi="srgb",jc="srgb-linear",Yc="linear",kt="srgb",co=7680,Pg=519,vy=512,xy=513,yy=514,Nf=515,Sy=516,My=517,If=518,Ey=519,df=35044,Lg="300 es",Zi=2e3,Ka=2001;function wy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ty(){const s=qc("canvas");return s.style.display="block",s}const Dg={};function $c(...s){const e="THREE."+s.shift();console.log(e,...s)}function u_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=u_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Tt(...s){s=u_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ff(...s){const e=s.join(" ");e in Dg||(Dg[e]=!0,nt(...s))}function by(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Ay={[bd]:Ad,[Cd]:Ld,[Rd]:Dd,[Fo]:Pd,[Ad]:bd,[Ld]:Cd,[Dd]:Rd,[Pd]:Fo};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,pf=180/Math.PI;function wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Cy(s,e){return(s%e+e)%e}function Hh(s,e,t){return(1-t)*s+t*e}function Ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ry={DEG2RAD:Vc},$f=class $f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;let De=$f;class pi{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,h){let d=i[o+0],f=i[o+1],g=i[o+2],_=i[o+3],m=a[c+0],x=a[c+1],M=a[c+2],A=a[c+3];if(_!==A||d!==m||f!==x||g!==M){let y=d*m+f*x+g*M+_*A;y<0&&(m=-m,x=-x,M=-M,A=-A,y=-y);let S=1-h;if(y<.9995){const w=Math.acos(y),C=Math.sin(w);S=Math.sin(S*w)/C,h=Math.sin(h*w)/C,d=d*S+m*h,f=f*S+x*h,g=g*S+M*h,_=_*S+A*h}else{d=d*S+m*h,f=f*S+x*h,g=g*S+M*h,_=_*S+A*h;const w=1/Math.sqrt(d*d+f*f+g*g+_*_);d*=w,f*=w,g*=w,_*=w}}e[t]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,c){const h=i[o],d=i[o+1],f=i[o+2],g=i[o+3],_=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=h*M+g*_+d*x-f*m,e[t+1]=d*M+g*m+f*_-h*x,e[t+2]=f*M+g*x+h*m-d*_,e[t+3]=g*M-h*_-d*m-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,h=Math.cos,d=Math.sin,f=h(i/2),g=h(o/2),_=h(a/2),m=d(i/2),x=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=m*g*_+f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_-m*x*M;break;case"YXZ":this._x=m*g*_+f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_+m*x*M;break;case"ZXY":this._x=m*g*_-f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_-m*x*M;break;case"ZYX":this._x=m*g*_-f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_+m*x*M;break;case"YZX":this._x=m*g*_+f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_-m*x*M;break;case"XZY":this._x=m*g*_-f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_+m*x*M;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],h=t[5],d=t[9],f=t[2],g=t[6],_=t[10],m=i+h+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-d)*x,this._y=(a-f)*x,this._z=(c-o)*x}else if(i>h&&i>_){const x=2*Math.sqrt(1+i-h-_);this._w=(g-d)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+f)/x}else if(h>_){const x=2*Math.sqrt(1+h-i-_);this._w=(a-f)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-i-h);this._w=(c-o)/x,this._x=(a+f)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,h=t._x,d=t._y,f=t._z,g=t._w;return this._x=i*g+c*h+o*f-a*d,this._y=o*g+c*d+a*h-i*f,this._z=a*g+c*f+i*d-o*h,this._w=c*g-i*h-o*d-a*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,h=this.dot(e);h<0&&(i=-i,o=-o,a=-a,c=-c,h=-h);let d=1-t;if(h<.9995){const f=Math.acos(h),g=Math.sin(f);d=Math.sin(d*f)/g,t=Math.sin(t*f)/g,this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kf=class Kf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ng.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ng.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,h=e.z,d=e.w,f=2*(c*o-h*i),g=2*(h*t-a*o),_=2*(a*i-c*t);return this.x=t+d*f+c*_-h*g,this.y=i+d*g+h*f-a*_,this.z=o+d*_+a*g-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,h=t.y,d=t.z;return this.x=o*d-a*h,this.y=a*c-i*d,this.z=i*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gh.copy(this).projectOnVector(e),this.sub(Gh)}reflect(e){return this.sub(Gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;let z=Kf;const Gh=new z,Ng=new pi,Zf=class Zf{constructor(e,t,i,o,a,c,h,d,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,h,d,f)}set(e,t,i,o,a,c,h,d,f){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=a,g[5]=d,g[6]=i,g[7]=c,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],h=i[3],d=i[6],f=i[1],g=i[4],_=i[7],m=i[2],x=i[5],M=i[8],A=o[0],y=o[3],S=o[6],w=o[1],C=o[4],b=o[7],U=o[2],P=o[5],D=o[8];return a[0]=c*A+h*w+d*U,a[3]=c*y+h*C+d*P,a[6]=c*S+h*b+d*D,a[1]=f*A+g*w+_*U,a[4]=f*y+g*C+_*P,a[7]=f*S+g*b+_*D,a[2]=m*A+x*w+M*U,a[5]=m*y+x*C+M*P,a[8]=m*S+x*b+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],h=e[5],d=e[6],f=e[7],g=e[8];return t*c*g-t*h*f-i*a*g+i*h*d+o*a*f-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],h=e[5],d=e[6],f=e[7],g=e[8],_=g*c-h*f,m=h*d-g*a,x=f*a-c*d,M=t*_+i*m+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*f-g*i)*A,e[2]=(h*i-o*c)*A,e[3]=m*A,e[4]=(g*t-o*d)*A,e[5]=(o*a-h*t)*A,e[6]=x*A,e[7]=(i*d-f*t)*A,e[8]=(c*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,h){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*h)+c+e,-o*f,o*d,-o*(-f*c+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Wh.makeScale(e,t)),this}rotate(e){return this.premultiply(Wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;let dt=Zf;const Wh=new dt,Ig=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Py(){const s={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=Io(o.r),o.g=Io(o.g),o.b=Io(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===rs?Yc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return ff("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return ff("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[jc]:{primaries:e,whitePoint:i,transfer:Yc,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const bt=Py();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let uo;class Ly{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{uo===void 0&&(uo=qc("canvas")),uo.width=e.width,uo.height=e.height;const o=uo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=uo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Tr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dy=0;class Uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?a.push(Xh(o[c].image)):a.push(Xh(o[c]))}else a=Xh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Xh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ly.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Ny=0;const jh=new z;class Vn extends as{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Mr,o=Mr,a=Bn,c=Ls,h=zi,d=fi,f=Vn.DEFAULT_ANISOTROPY,g=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=wr(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=d,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=i_;Vn.DEFAULT_ANISOTROPY=1;const Jf=class Jf{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,f=d[0],g=d[4],_=d[8],m=d[1],x=d[5],M=d[9],A=d[2],y=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(_-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+A)<.1&&Math.abs(M+y)<.1&&Math.abs(f+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(f+1)/2,b=(x+1)/2,U=(S+1)/2,P=(g+m)/4,D=(_+A)/4,E=(M+y)/4;return C>b&&C>U?C<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(C),o=P/i,a=D/i):b>U?b<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),i=P/o,a=E/o):U<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(U),i=D/a,o=E/a),this.set(i,o,a,t),this}let w=Math.sqrt((y-M)*(y-M)+(_-A)*(_-A)+(m-g)*(m-g));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(_-A)/w,this.z=(m-g)/w,this.w=Math.acos((f+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;let un=Jf;class Iy extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Vn(o),c=i.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Uf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Iy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class h_ extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends Vn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,t,i,o,a,c,h,d,f,g,_,m,x,M,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,h,d,f,g,_,m,x,M,A,y)}set(e,t,i,o,a,c,h,d,f,g,_,m,x,M,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=h,S[13]=d,S[2]=f,S[6]=g,S[10]=_,S[14]=m,S[3]=x,S[7]=M,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),a=1/ho.setFromMatrixColumn(e,1).length(),c=1/ho.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=c*g,x=c*_,M=h*g,A=h*_;t[0]=d*g,t[4]=-d*_,t[8]=f,t[1]=x+M*f,t[5]=m-A*f,t[9]=-h*d,t[2]=A-m*f,t[6]=M+x*f,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,x=d*_,M=f*g,A=f*_;t[0]=m+A*h,t[4]=M*h-x,t[8]=c*f,t[1]=c*_,t[5]=c*g,t[9]=-h,t[2]=x*h-M,t[6]=A+m*h,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,x=d*_,M=f*g,A=f*_;t[0]=m-A*h,t[4]=-c*_,t[8]=M+x*h,t[1]=x+M*h,t[5]=c*g,t[9]=A-m*h,t[2]=-c*f,t[6]=h,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,x=c*_,M=h*g,A=h*_;t[0]=d*g,t[4]=M*f-x,t[8]=m*f+A,t[1]=d*_,t[5]=A*f+m,t[9]=x*f-M,t[2]=-f,t[6]=h*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,x=c*f,M=h*d,A=h*f;t[0]=d*g,t[4]=A-m*_,t[8]=M*_+x,t[1]=_,t[5]=c*g,t[9]=-h*g,t[2]=-f*g,t[6]=x*_+M,t[10]=m-A*_}else if(e.order==="XZY"){const m=c*d,x=c*f,M=h*d,A=h*f;t[0]=d*g,t[4]=-_,t[8]=f*g,t[1]=m*_+A,t[5]=c*g,t[9]=x*_-M,t[2]=M*_-x,t[6]=h*g,t[10]=A*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fy,e,Oy)}lookAt(e,t,i){const o=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Yr.crossVectors(i,ci),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Yr.crossVectors(i,ci)),Yr.normalize(),oc.crossVectors(ci,Yr),o[0]=Yr.x,o[4]=oc.x,o[8]=ci.x,o[1]=Yr.y,o[5]=oc.y,o[9]=ci.y,o[2]=Yr.z,o[6]=oc.z,o[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],h=i[4],d=i[8],f=i[12],g=i[1],_=i[5],m=i[9],x=i[13],M=i[2],A=i[6],y=i[10],S=i[14],w=i[3],C=i[7],b=i[11],U=i[15],P=o[0],D=o[4],E=o[8],N=o[12],V=o[1],O=o[5],B=o[9],Q=o[13],se=o[2],W=o[6],K=o[10],Y=o[14],$=o[3],re=o[7],ae=o[11],k=o[15];return a[0]=c*P+h*V+d*se+f*$,a[4]=c*D+h*O+d*W+f*re,a[8]=c*E+h*B+d*K+f*ae,a[12]=c*N+h*Q+d*Y+f*k,a[1]=g*P+_*V+m*se+x*$,a[5]=g*D+_*O+m*W+x*re,a[9]=g*E+_*B+m*K+x*ae,a[13]=g*N+_*Q+m*Y+x*k,a[2]=M*P+A*V+y*se+S*$,a[6]=M*D+A*O+y*W+S*re,a[10]=M*E+A*B+y*K+S*ae,a[14]=M*N+A*Q+y*Y+S*k,a[3]=w*P+C*V+b*se+U*$,a[7]=w*D+C*O+b*W+U*re,a[11]=w*E+C*B+b*K+U*ae,a[15]=w*N+C*Q+b*Y+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],h=e[5],d=e[9],f=e[13],g=e[2],_=e[6],m=e[10],x=e[14],M=e[3],A=e[7],y=e[11],S=e[15],w=d*x-f*m,C=h*x-f*_,b=h*m-d*_,U=c*x-f*g,P=c*m-d*g,D=c*_-h*g;return t*(A*w-y*C+S*b)-i*(M*w-y*U+S*P)+o*(M*C-A*U+S*D)-a*(M*b-A*P+y*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],h=e[5],d=e[6],f=e[7],g=e[8],_=e[9],m=e[10],x=e[11],M=e[12],A=e[13],y=e[14],S=e[15],w=t*h-i*c,C=t*d-o*c,b=t*f-a*c,U=i*d-o*h,P=i*f-a*h,D=o*f-a*d,E=g*A-_*M,N=g*y-m*M,V=g*S-x*M,O=_*y-m*A,B=_*S-x*A,Q=m*S-x*y,se=w*Q-C*B+b*O+U*V-P*N+D*E;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/se;return e[0]=(h*Q-d*B+f*O)*W,e[1]=(o*B-i*Q-a*O)*W,e[2]=(A*D-y*P+S*U)*W,e[3]=(m*P-_*D-x*U)*W,e[4]=(d*V-c*Q-f*N)*W,e[5]=(t*Q-o*V+a*N)*W,e[6]=(y*b-M*D-S*C)*W,e[7]=(g*D-m*b+x*C)*W,e[8]=(c*B-h*V+f*E)*W,e[9]=(i*V-t*B-a*E)*W,e[10]=(M*P-A*b+S*w)*W,e[11]=(_*b-g*P-x*w)*W,e[12]=(h*N-c*O-d*E)*W,e[13]=(t*O-i*N+o*E)*W,e[14]=(A*C-M*U-y*w)*W,e[15]=(g*U-_*C+m*w)*W,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,h=e.y,d=e.z,f=a*c,g=a*h;return this.set(f*c+i,f*h-o*d,f*d+o*h,0,f*h+o*d,g*h+i,g*d-o*c,0,f*d-o*h,g*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,h=t._z,d=t._w,f=a+a,g=c+c,_=h+h,m=a*f,x=a*g,M=a*_,A=c*g,y=c*_,S=h*_,w=d*f,C=d*g,b=d*_,U=i.x,P=i.y,D=i.z;return o[0]=(1-(A+S))*U,o[1]=(x+b)*U,o[2]=(M-C)*U,o[3]=0,o[4]=(x-b)*P,o[5]=(1-(m+S))*P,o[6]=(y+w)*P,o[7]=0,o[8]=(M+C)*D,o[9]=(y-w)*D,o[10]=(1-(m+A))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ho.set(o[0],o[1],o[2]).length();const h=ho.set(o[4],o[5],o[6]).length(),d=ho.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ii.copy(this);const f=1/c,g=1/h,_=1/d;return Ii.elements[0]*=f,Ii.elements[1]*=f,Ii.elements[2]*=f,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,t.setFromRotationMatrix(Ii),i.x=c,i.y=h,i.z=d,this}makePerspective(e,t,i,o,a,c,h=Zi,d=!1){const f=this.elements,g=2*a/(t-e),_=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(h===Zi)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(h===Ka)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=g,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=_,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,c,h=Zi,d=!1){const f=this.elements,g=2/(t-e),_=2/(i-o),m=-(t+e)/(t-e),x=-(i+o)/(i-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(h===Zi)M=-2/(c-a),A=-(c+a)/(c-a);else if(h===Ka)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=g,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=_,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=M,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Jc.prototype.isMatrix4=!0;let Pt=Jc;const ho=new z,Ii=new Pt,Fy=new z(0,0,0),Oy=new z(1,1,1),Yr=new z,oc=new z,ci=new z,Fg=new Pt,Og=new pi;class tr{constructor(e=0,t=0,i=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],h=o[8],d=o[1],f=o[5],g=o[9],_=o[2],m=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ky=0;const kg=new z,fo=new pi,mr=new Pt,ac=new z,Aa=new z,zy=new z,By=new pi,zg=new z(1,0,0),Bg=new z(0,1,0),Vg=new z(0,0,1),Hg={type:"added"},Vy={type:"removed"},po={type:"childadded",child:null},Yh={type:"childremoved",child:null};class vn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new z,t=new tr,i=new pi,o=new z(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pt},normalMatrix:{value:new dt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ac.copy(e):ac.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Aa,ac,this.up):mr.lookAt(ac,Aa,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),fo.setFromRotationMatrix(mr),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),po.child=e,this.dispatchEvent(po),po.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vy),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,By,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const _=d[f];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,f=this.material.length;d<f;d++)h.push(a(e.materials,this.material[d]));o.material=h}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(a(e.animations,d))}}if(t){const h=c(e.geometries),d=c(e.materials),f=c(e.textures),g=c(e.images),_=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);h.length>0&&(i.geometries=h),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(h){const d=[];for(const f in h){const g=h[f];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const h=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,i),S=this._getHandJoint(f,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,M=.005;f.inputState.pinching&&m>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function $h(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=bt.workingColorSpace){if(e=Cy(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=$h(c,a,e+1/3),this.g=$h(c,a,e),this.b=$h(c,a,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function i(a){a!==void 0&&parseFloat(a)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=d_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return bt.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(On.copy(this),t);const i=On.r,o=On.g,a=On.b,c=Math.max(i,o,a),h=Math.min(i,o,a);let d,f;const g=(h+c)/2;if(h===c)d=0,f=0;else{const _=c-h;switch(f=g<=.5?_/(c+h):_/(2-c-h),c){case i:d=(o-a)/_+(o<a?6:0);break;case o:d=(a-i)/_+2;break;case a:d=(i-o)/_+4;break}d/=6}return e.h=d,e.s=f,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=hi){bt.workingToColorSpace(On.copy(this),e);const t=On.r,i=On.g,o=On.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(lc);const i=Hh(qr.h,lc.h,t),o=Hh(qr.s,lc.s,t),a=Hh(qr.l,lc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ft;ft.NAMES=d_;class Gy extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new z,gr=new z,Kh=new z,_r=new z,mo=new z,go=new z,Gg=new z,Zh=new z,Jh=new z,Qh=new z,ed=new un,td=new un,nd=new un;class Ti{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ui.subVectors(e,t),o.cross(Ui);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ui.subVectors(o,t),gr.subVectors(i,t),Kh.subVectors(e,t);const c=Ui.dot(Ui),h=Ui.dot(gr),d=Ui.dot(Kh),f=gr.dot(gr),g=gr.dot(Kh),_=c*f-h*h;if(_===0)return a.set(0,0,0),null;const m=1/_,x=(f*d-h*g)*m,M=(c*g-h*d)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,o,a,c,h,d){return this.getBarycoord(e,t,i,o,_r)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,_r.x),d.addScaledVector(c,_r.y),d.addScaledVector(h,_r.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ed,a.x),c.addScaledVector(td,a.y),c.addScaledVector(nd,a.z),c}static isFrontFacing(e,t,i,o){return Ui.subVectors(i,t),gr.subVectors(e,t),Ui.cross(gr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ui.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,h;mo.subVectors(o,i),go.subVectors(a,i),Zh.subVectors(e,i);const d=mo.dot(Zh),f=go.dot(Zh);if(d<=0&&f<=0)return t.copy(i);Jh.subVectors(e,o);const g=mo.dot(Jh),_=go.dot(Jh);if(g>=0&&_<=g)return t.copy(o);const m=d*_-g*f;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(i).addScaledVector(mo,c);Qh.subVectors(e,a);const x=mo.dot(Qh),M=go.dot(Qh);if(M>=0&&x<=M)return t.copy(a);const A=x*f-d*M;if(A<=0&&f>=0&&M<=0)return h=f/(f-M),t.copy(i).addScaledVector(go,h);const y=g*M-x*_;if(y<=0&&_-g>=0&&x-M>=0)return Gg.subVectors(a,o),h=(_-g)/(_-g+(x-M)),t.copy(o).addScaledVector(Gg,h);const S=1/(y+A+m);return c=A*S,h=m*S,t.copy(i).addScaledVector(mo,c).addScaledVector(go,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Fi):Fi.fromBufferAttribute(a,c),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cc.copy(i.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),uc.subVectors(this.max,Ca),_o.subVectors(e.a,Ca),vo.subVectors(e.b,Ca),xo.subVectors(e.c,Ca),$r.subVectors(vo,_o),Kr.subVectors(xo,vo),Es.subVectors(_o,xo);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Es.z,Es.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Es.z,0,-Es.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Es.y,Es.x,0];return!id(t,_o,vo,xo,uc)||(t=[1,0,0,0,1,0,0,0,1],!id(t,_o,vo,xo,uc))?!1:(hc.crossVectors($r,Kr),t=[hc.x,hc.y,hc.z],id(t,_o,vo,xo,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new z,new z,new z,new z,new z,new z,new z,new z],Fi=new z,cc=new Fs,_o=new z,vo=new z,xo=new z,$r=new z,Kr=new z,Es=new z,Ca=new z,uc=new z,hc=new z,ws=new z;function id(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){ws.fromArray(s,a);const h=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),d=e.dot(ws),f=t.dot(ws),g=i.dot(ws);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>h)return!1}return!0}const pn=new z,dc=new De;let Wy=0;class mi extends as{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),o=Bt(o,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class f_ extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class p_ extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xy=new Fs,Ra=new z,rd=new z;class Vo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xy.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Ra,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(rd)),this.expandByPoint(Ra.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jy=0;const Ei=new Pt,sd=new vn,yo=new z,ui=new Fs,Pa=new Fs,wn=new z;class tn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wy(e)?p_:f_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const h=t[a];Pa.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(ui.min,Pa.min),ui.expandByPoint(wn),wn.addVectors(ui.max,Pa.max),ui.expandByPoint(wn)):(ui.expandByPoint(Pa.min),ui.expandByPoint(Pa.max))}ui.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)wn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(wn));if(t)for(let a=0,c=t.length;a<c;a++){const h=t[a],d=this.morphTargetsRelative;for(let f=0,g=h.count;f<g;f++)wn.fromBufferAttribute(h,f),d&&(yo.fromBufferAttribute(e,f),wn.add(yo)),o=Math.max(o,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),h=[],d=[];for(let E=0;E<i.count;E++)h[E]=new z,d[E]=new z;const f=new z,g=new z,_=new z,m=new De,x=new De,M=new De,A=new z,y=new z;function S(E,N,V){f.fromBufferAttribute(i,E),g.fromBufferAttribute(i,N),_.fromBufferAttribute(i,V),m.fromBufferAttribute(a,E),x.fromBufferAttribute(a,N),M.fromBufferAttribute(a,V),g.sub(f),_.sub(f),x.sub(m),M.sub(m);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(O),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(O),h[E].add(A),h[N].add(A),h[V].add(A),d[E].add(y),d[N].add(y),d[V].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,N=w.length;E<N;++E){const V=w[E],O=V.start,B=V.count;for(let Q=O,se=O+B;Q<se;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const C=new z,b=new z,U=new z,P=new z;function D(E){U.fromBufferAttribute(o,E),P.copy(U);const N=h[E];C.copy(N),C.sub(U.multiplyScalar(U.dot(N))).normalize(),b.crossVectors(P,N);const O=b.dot(d[E])<0?-1:1;c.setXYZW(E,C.x,C.y,C.z,O)}for(let E=0,N=w.length;E<N;++E){const V=w[E],O=V.start,B=V.count;for(let Q=O,se=O+B;Q<se;Q+=3)D(e.getX(Q+0)),D(e.getX(Q+1)),D(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const o=new z,a=new z,c=new z,h=new z,d=new z,f=new z,g=new z,_=new z;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),A=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),g.subVectors(c,a),_.subVectors(o,a),g.cross(_),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),h.add(g),d.add(g),f.add(g),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,x=t.count;m<x;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),_.subVectors(o,a),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,d){const f=h.array,g=h.itemSize,_=h.normalized,m=new f.constructor(d.length*g);let x=0,M=0;for(let A=0,y=d.length;A<y;A++){h.isInterleavedBufferAttribute?x=d[A]*h.data.stride+h.offset:x=d[A]*g;for(let S=0;S<g;S++)m[M++]=f[x++]}return new mi(m,g,_)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,o=this.attributes;for(const h in o){const d=o[h],f=e(d,i);t.setAttribute(h,f)}const a=this.morphAttributes;for(const h in a){const d=[],f=a[h];for(let g=0,_=f.length;g<_;g++){const m=f[g],x=e(m,i);d.push(x)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,d=c.length;h<d;h++){const f=c[h];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let _=0,m=f.length;_<m;_++){const x=f[_];g.push(x.toJSON(e.data))}g.length>0&&(o[d]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const f in o){const g=o[f];this.setAttribute(f,g.clone(t))}const a=e.morphAttributes;for(const f in a){const g=[],_=a[f];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,g=c.length;f<g;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=df,this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new z;class Kc{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),o=Bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),o=Bt(o,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){$c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let qy=0;class Os extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=No,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wd&&(i.blendSrc=this.blendSrc),this.blendDst!==Td&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(i.stencilFail=this.stencilFail),this.stencilZFail!==co&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class m_ extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let So;const La=new z,Mo=new z,Eo=new z,wo=new De,Da=new De,g_=new Pt,fc=new z,Na=new z,pc=new z,Wg=new De,od=new De,Xg=new De;class $y extends vn{constructor(e=new m_){if(super(),this.isSprite=!0,this.type="Sprite",So===void 0){So=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yy(t,5);So.setIndex([0,1,2,0,2,3]),So.setAttribute("position",new Kc(i,3,0,!1)),So.setAttribute("uv",new Kc(i,2,3,!1))}this.geometry=So,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mo.setFromMatrixScale(this.matrixWorld),g_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mo.multiplyScalar(-Eo.z);const i=this.material.rotation;let o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));const c=this.center;mc(fc.set(-.5,-.5,0),Eo,c,Mo,o,a),mc(Na.set(.5,-.5,0),Eo,c,Mo,o,a),mc(pc.set(.5,.5,0),Eo,c,Mo,o,a),Wg.set(0,0),od.set(1,0),Xg.set(1,1);let h=e.ray.intersectTriangle(fc,Na,pc,!1,La);if(h===null&&(mc(Na.set(-.5,.5,0),Eo,c,Mo,o,a),od.set(0,1),h=e.ray.intersectTriangle(fc,pc,Na,!1,La),h===null))return;const d=e.ray.origin.distanceTo(La);d<e.near||d>e.far||t.push({distance:d,point:La.clone(),uv:Ti.getInterpolation(La,fc,Na,pc,Wg,od,Xg,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mc(s,e,t,i,o,a){wo.subVectors(s,t).addScalar(.5).multiply(i),o!==void 0?(Da.x=a*wo.x-o*wo.y,Da.y=o*wo.x+a*wo.y):Da.copy(wo),s.copy(e),s.x+=Da.x,s.y+=Da.y,s.applyMatrix4(g_)}const xr=new z,ad=new z,gc=new z,Zr=new z,ld=new z,_c=new z,cd=new z;class eu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){ad.copy(e).add(t).multiplyScalar(.5),gc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(ad);const a=e.distanceTo(t)*.5,c=-this.direction.dot(gc),h=Zr.dot(this.direction),d=-Zr.dot(gc),f=Zr.lengthSq(),g=Math.abs(1-c*c);let _,m,x,M;if(g>0)if(_=c*d-h,m=c*h-d,M=a*g,_>=0)if(m>=-M)if(m<=M){const A=1/g;_*=A,m*=A,x=_*(_+c*m+2*h)+m*(c*_+m+2*d)+f}else m=a,_=Math.max(0,-(c*m+h)),x=-_*_+m*(m+2*d)+f;else m=-a,_=Math.max(0,-(c*m+h)),x=-_*_+m*(m+2*d)+f;else m<=-M?(_=Math.max(0,-(-c*a+h)),m=_>0?-a:Math.min(Math.max(-a,-d),a),x=-_*_+m*(m+2*d)+f):m<=M?(_=0,m=Math.min(Math.max(-a,-d),a),x=m*(m+2*d)+f):(_=Math.max(0,-(c*a+h)),m=_>0?a:Math.min(Math.max(-a,-d),a),x=-_*_+m*(m+2*d)+f);else m=c>0?-a:a,_=Math.max(0,-(c*m+h)),x=-_*_+m*(m+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ad).addScaledVector(gc,m),x}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const i=xr.dot(this.direction),o=xr.dot(xr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),h=i-c,d=i+c;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,h,d;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,o=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,o=(e.min.x-m.x)*f),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-m.z)*_,d=(e.max.z-m.z)*_):(h=(e.max.z-m.z)*_,d=(e.min.z-m.z)*_),i>d||h>o)||((h>i||i!==i)&&(i=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,o,a){ld.subVectors(t,e),_c.subVectors(i,e),cd.crossVectors(ld,_c);let c=this.direction.dot(cd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Zr.subVectors(this.origin,e);const d=h*this.direction.dot(_c.crossVectors(Zr,_c));if(d<0)return null;const f=h*this.direction.dot(ld.cross(Zr));if(f<0||d+f>c)return null;const g=-h*Zr.dot(cd);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lo extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jg=new Pt,Ts=new eu,vc=new Vo,Yg=new z,xc=new z,yc=new z,Sc=new z,ud=new z,Mc=new z,qg=new z,Ec=new z;class Qe extends vn{constructor(e=new tn,t=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(a&&h){Mc.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const g=h[d],_=a[d];g!==0&&(ud.fromBufferAttribute(_,e),c?Mc.addScaledVector(ud,g):Mc.addScaledVector(ud.sub(t),g))}t.add(Mc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(a),Ts.copy(e.ray).recast(e.near),!(vc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(vc,Yg)===null||Ts.origin.distanceToSquared(Yg)>(e.far-e.near)**2))&&(jg.copy(a).invert(),Ts.copy(e.ray).applyMatrix4(jg),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,h=a.index,d=a.attributes.position,f=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,m=a.groups,x=a.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const y=m[M],S=c[y.materialIndex],w=Math.max(y.start,x.start),C=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let b=w,U=C;b<U;b+=3){const P=h.getX(b),D=h.getX(b+1),E=h.getX(b+2);o=wc(this,S,e,i,f,g,_,P,D,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let y=M,S=A;y<S;y+=3){const w=h.getX(y),C=h.getX(y+1),b=h.getX(y+2);o=wc(this,c,e,i,f,g,_,w,C,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const y=m[M],S=c[y.materialIndex],w=Math.max(y.start,x.start),C=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let b=w,U=C;b<U;b+=3){const P=b,D=b+1,E=b+2;o=wc(this,S,e,i,f,g,_,P,D,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let y=M,S=A;y<S;y+=3){const w=y,C=y+1,b=y+2;o=wc(this,c,e,i,f,g,_,w,C,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Ky(s,e,t,i,o,a,c,h){let d;if(e.side===ri?d=i.intersectTriangle(c,a,o,!0,h):d=i.intersectTriangle(o,a,c,e.side===os,h),d===null)return null;Ec.copy(h),Ec.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Ec);return f<t.near||f>t.far?null:{distance:f,point:Ec.clone(),object:s}}function wc(s,e,t,i,o,a,c,h,d,f){s.getVertexPosition(h,xc),s.getVertexPosition(d,yc),s.getVertexPosition(f,Sc);const g=Ky(s,e,t,i,xc,yc,Sc,qg);if(g){const _=new z;Ti.getBarycoord(qg,xc,yc,Sc,_),o&&(g.uv=Ti.getInterpolatedAttribute(o,h,d,f,_,new De)),a&&(g.uv1=Ti.getInterpolatedAttribute(a,h,d,f,_,new De)),c&&(g.normal=Ti.getInterpolatedAttribute(c,h,d,f,_,new z),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:h,b:d,c:f,normal:new z,materialIndex:0};Ti.getNormal(xc,yc,Sc,m.normal),g.face=m,g.barycoord=_}return g}class __ extends Vn{constructor(e=null,t=1,i=1,o,a,c,h,d,f=Ln,g=Ln,_,m){super(null,c,h,d,f,g,o,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $g extends mi{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const To=new Pt,Kg=new Pt,Tc=[],Zg=new Fs,Zy=new Pt,Ia=new Qe,Ua=new Vo;class wi extends Qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $g(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Zy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,To),Zg.copy(e.boundingBox).applyMatrix4(To),this.boundingBox.union(Zg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,To),Ua.copy(e.boundingSphere).applyMatrix4(To),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let h=0;h<i.length;h++)i[h]=o[c+h]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,To),Kg.multiplyMatrices(i,To),Ia.matrixWorld=Kg,Ia.raycast(e,Tc);for(let c=0,h=Tc.length;c<h;c++){const d=Tc[c];d.instanceId=a,d.object=this,t.push(d)}Tc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $g(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new __(new Float32Array(o*this.count),o,this.count,Rf,ki));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const h=this.geometry.morphTargetsRelative?1:1-c,d=o*e;return a[d]=h,a.set(i,d+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hd=new z,Jy=new z,Qy=new dt;class ns{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=hd.subVectors(i,t).cross(Jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(hd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qy.getNormalMatrix(e),o=this.coplanarPoint(hd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Vo,eS=new De(.5,.5),bc=new z;class Of{constructor(e=new ns,t=new ns,i=new ns,o=new ns,a=new ns,c=new ns){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(i),h[3].copy(o),h[4].copy(a),h[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi,i=!1){const o=this.planes,a=e.elements,c=a[0],h=a[1],d=a[2],f=a[3],g=a[4],_=a[5],m=a[6],x=a[7],M=a[8],A=a[9],y=a[10],S=a[11],w=a[12],C=a[13],b=a[14],U=a[15];if(o[0].setComponents(f-c,x-g,S-M,U-w).normalize(),o[1].setComponents(f+c,x+g,S+M,U+w).normalize(),o[2].setComponents(f+h,x+_,S+A,U+C).normalize(),o[3].setComponents(f-h,x-_,S-A,U-C).normalize(),i)o[4].setComponents(d,m,y,b).normalize(),o[5].setComponents(f-d,x-m,S-y,U-b).normalize();else if(o[4].setComponents(f-d,x-m,S-y,U-b).normalize(),t===Zi)o[5].setComponents(f+d,x+m,S+y,U+b).normalize();else if(t===Ka)o[5].setComponents(d,m,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=eS.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(bc.x=o.normal.x>0?e.max.x:e.min.x,bc.y=o.normal.y>0?e.max.y:e.min.y,bc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v_ extends Os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jg=new Pt,mf=new eu,Ac=new Vo,Cc=new z;class tS extends vn{constructor(e=new tn,t=new v_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(o),Ac.radius+=a,e.ray.intersectsSphere(Ac)===!1)return;Jg.copy(o).invert(),mf.copy(e.ray).applyMatrix4(Jg);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,f=i.index,_=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let M=m,A=x;M<A;M++){const y=f.getX(M);Cc.fromBufferAttribute(_,y),Qg(Cc,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=m,A=x;M<A;M++)Cc.fromBufferAttribute(_,M),Qg(Cc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Qg(s,e,t,i,o,a,c){const h=mf.distanceSqToPoint(s);if(h<t){const d=new z;mf.closestPointToPoint(s,d),d.applyMatrix4(i);const f=o.ray.origin.distanceTo(d);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class x_ extends Vn{constructor(e=[],t=Ns,i,o,a,c,h,d,f,g){super(e,t,i,o,a,c,h,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y_ extends Vn{constructor(e,t,i,o,a,c,h,d,f){super(e,t,i,o,a,c,h,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends Vn{constructor(e,t,i=er,o,a,c,h=Ln,d=Ln,f,g=Ar,_=1){if(g!==Ar&&g!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,o,a,c,h,d,g,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nS extends ko{constructor(e,t=er,i=Ns,o,a,c=Ln,h=Ln,d,f=Ar){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,o,a,c,h,d,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class S_ extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bn extends tn{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const h=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],g=[],_=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(_,2));function M(A,y,S,w,C,b,U,P,D,E,N){const V=b/D,O=U/E,B=b/2,Q=U/2,se=P/2,W=D+1,K=E+1;let Y=0,$=0;const re=new z;for(let ae=0;ae<K;ae++){const k=ae*O-Q;for(let ee=0;ee<W;ee++){const Me=ee*V-B;re[A]=Me*w,re[y]=k*C,re[S]=se,f.push(re.x,re.y,re.z),re[A]=0,re[y]=0,re[S]=P>0?1:-1,g.push(re.x,re.y,re.z),_.push(ee/D),_.push(1-ae/E),Y+=1}}for(let ae=0;ae<E;ae++)for(let k=0;k<D;k++){const ee=m+k+W*ae,Me=m+k+W*(ae+1),Ue=m+(k+1)+W*(ae+1),Ne=m+(k+1)+W*ae;d.push(ee,Me,Ne),d.push(Me,Ue,Ne),$+=6}h.addGroup(x,$,N),x+=$,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kf extends tn{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],h=[],d=[],f=new z,g=new De;c.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let _=0,m=3;_<=t;_++,m+=3){const x=i+_/t*o;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(c[m]/e+1)/2,g.y=(c[m+1]/e+1)/2,d.push(g.x,g.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zn extends tn{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:h,thetaLength:d};const f=this;o=Math.floor(o),a=Math.floor(a);const g=[],_=[],m=[],x=[];let M=0;const A=[],y=i/2;let S=0;w(),c===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(x,2));function w(){const b=new z,U=new z;let P=0;const D=(t-e)/i;for(let E=0;E<=a;E++){const N=[],V=E/a,O=V*(t-e)+e;for(let B=0;B<=o;B++){const Q=B/o,se=Q*d+h,W=Math.sin(se),K=Math.cos(se);U.x=O*W,U.y=-V*i+y,U.z=O*K,_.push(U.x,U.y,U.z),b.set(W,D,K).normalize(),m.push(b.x,b.y,b.z),x.push(Q,1-V),N.push(M++)}A.push(N)}for(let E=0;E<o;E++)for(let N=0;N<a;N++){const V=A[N][E],O=A[N+1][E],B=A[N+1][E+1],Q=A[N][E+1];(e>0||N!==0)&&(g.push(V,O,Q),P+=3),(t>0||N!==a-1)&&(g.push(O,B,Q),P+=3)}f.addGroup(S,P,0),S+=P}function C(b){const U=M,P=new De,D=new z;let E=0;const N=b===!0?e:t,V=b===!0?1:-1;for(let B=1;B<=o;B++)_.push(0,y*V,0),m.push(0,V,0),x.push(.5,.5),M++;const O=M;for(let B=0;B<=o;B++){const se=B/o*d+h,W=Math.cos(se),K=Math.sin(se);D.x=N*K,D.y=y*V,D.z=N*W,_.push(D.x,D.y,D.z),m.push(0,V,0),P.x=W*.5+.5,P.y=K*.5*V+.5,x.push(P.x,P.y),M++}for(let B=0;B<o;B++){const Q=U+B,se=O+B;b===!0?g.push(se,se+1,Q):g.push(se+1,se,Q),E+=3}f.addGroup(S,E,b===!0?1:2),S+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class is extends zn{constructor(e=1,t=1,i=32,o=1,a=!1,c=0,h=Math.PI*2){super(0,e,t,i,o,a,c,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:h}}static fromJSON(e){return new is(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zf extends tn{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const a=[],c=[];h(o),f(i),g(),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(a.slice(),3)),this.setAttribute("uv",new wt(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const C=new z,b=new z,U=new z;for(let P=0;P<t.length;P+=3)x(t[P+0],C),x(t[P+1],b),x(t[P+2],U),d(C,b,U,w)}function d(w,C,b,U){const P=U+1,D=[];for(let E=0;E<=P;E++){D[E]=[];const N=w.clone().lerp(b,E/P),V=C.clone().lerp(b,E/P),O=P-E;for(let B=0;B<=O;B++)B===0&&E===P?D[E][B]=N:D[E][B]=N.clone().lerp(V,B/O)}for(let E=0;E<P;E++)for(let N=0;N<2*(P-E)-1;N++){const V=Math.floor(N/2);N%2===0?(m(D[E][V+1]),m(D[E+1][V]),m(D[E][V])):(m(D[E][V+1]),m(D[E+1][V+1]),m(D[E+1][V]))}}function f(w){const C=new z;for(let b=0;b<a.length;b+=3)C.x=a[b+0],C.y=a[b+1],C.z=a[b+2],C.normalize().multiplyScalar(w),a[b+0]=C.x,a[b+1]=C.y,a[b+2]=C.z}function g(){const w=new z;for(let C=0;C<a.length;C+=3){w.x=a[C+0],w.y=a[C+1],w.z=a[C+2];const b=y(w)/2/Math.PI+.5,U=S(w)/Math.PI+.5;c.push(b,1-U)}M(),_()}function _(){for(let w=0;w<c.length;w+=6){const C=c[w+0],b=c[w+2],U=c[w+4],P=Math.max(C,b,U),D=Math.min(C,b,U);P>.9&&D<.1&&(C<.2&&(c[w+0]+=1),b<.2&&(c[w+2]+=1),U<.2&&(c[w+4]+=1))}}function m(w){a.push(w.x,w.y,w.z)}function x(w,C){const b=w*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function M(){const w=new z,C=new z,b=new z,U=new z,P=new De,D=new De,E=new De;for(let N=0,V=0;N<a.length;N+=9,V+=6){w.set(a[N+0],a[N+1],a[N+2]),C.set(a[N+3],a[N+4],a[N+5]),b.set(a[N+6],a[N+7],a[N+8]),P.set(c[V+0],c[V+1]),D.set(c[V+2],c[V+3]),E.set(c[V+4],c[V+5]),U.copy(w).add(C).add(b).divideScalar(3);const O=y(U);A(P,V+0,w,O),A(D,V+2,C,O),A(E,V+4,b,O)}}function A(w,C,b,U){U<0&&w.x===1&&(c[C]=w.x-1),b.x===0&&b.z===0&&(c[C]=U/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function S(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.vertices,e.indices,e.radius,e.detail)}}class ir{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let h=0,d=a-1,f;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),f=i[o]-c,f<0)h=o+1;else if(f>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(a-1);const g=i[o],m=i[o+1]-g,x=(c-g)/m;return(o+x)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),h=this.getPoint(a),d=t||(c.isVector2?new De:new z);return d.copy(h).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,o=[],a=[],c=[],h=new z,d=new Pt;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new z)}a[0]=new z,c[0]=new z;let f=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=f&&(f=g,i.set(1,0,0)),_<=f&&(f=_,i.set(0,1,0)),m<=f&&i.set(0,0,1),h.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],h),c[0].crossVectors(o[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(yt(o[x-1].dot(o[x]),-1,1));a[x].applyMatrix4(d.makeRotationAxis(h,M))}c[x].crossVectors(o[x],a[x])}if(t===!0){let x=Math.acos(yt(a[0].dot(a[e]),-1,1));x/=e,o[0].dot(h.crossVectors(a[0],a[e]))>0&&(x=-x);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(o[M],x*M)),c[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bf extends ir{constructor(e=0,t=0,i=1,o=1,a=0,c=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=h,this.aRotation=d}getPoint(e,t=new De){const i=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const h=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(h),f=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=d-this.aX,x=f-this.aY;d=m*g-x*_+this.aX,f=m*_+x*g+this.aY}return i.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iS extends Bf{constructor(e,t,i,o,a,c){super(e,t,i,i,o,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Vf(){let s=0,e=0,t=0,i=0;function o(a,c,h,d){s=a,e=h,t=-3*a+3*c-2*h-d,i=2*a-2*c+h+d}return{initCatmullRom:function(a,c,h,d,f){o(c,h,f*(h-a),f*(d-c))},initNonuniformCatmullRom:function(a,c,h,d,f,g,_){let m=(c-a)/f-(h-a)/(f+g)+(h-c)/g,x=(h-c)/g-(d-c)/(g+_)+(d-h)/_;m*=g,x*=g,o(c,h,m,x)},calc:function(a){const c=a*a,h=c*a;return s+e*a+t*c+i*h}}}const e0=new z,t0=new z,dd=new Vf,fd=new Vf,pd=new Vf;class gf extends ir{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new z){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let h=Math.floor(c),d=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/a)+1)*a:d===0&&h===a-1&&(h=a-2,d=1);let f,g;this.closed||h>0?f=o[(h-1)%a]:(t0.subVectors(o[0],o[1]).add(o[0]),f=t0);const _=o[h%a],m=o[(h+1)%a];if(this.closed||h+2<a?g=o[(h+2)%a]:(e0.subVectors(o[a-1],o[a-2]).add(o[a-1]),g=e0),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(f.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(m),x),y=Math.pow(m.distanceToSquared(g),x);A<1e-4&&(A=1),M<1e-4&&(M=A),y<1e-4&&(y=A),dd.initNonuniformCatmullRom(f.x,_.x,m.x,g.x,M,A,y),fd.initNonuniformCatmullRom(f.y,_.y,m.y,g.y,M,A,y),pd.initNonuniformCatmullRom(f.z,_.z,m.z,g.z,M,A,y)}else this.curveType==="catmullrom"&&(dd.initCatmullRom(f.x,_.x,m.x,g.x,this.tension),fd.initCatmullRom(f.y,_.y,m.y,g.y,this.tension),pd.initCatmullRom(f.z,_.z,m.z,g.z,this.tension));return i.set(dd.calc(d),fd.calc(d),pd.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function n0(s,e,t,i,o){const a=(i-e)*.5,c=(o-t)*.5,h=s*s,d=s*h;return(2*t-2*i+a+c)*d+(-3*t+3*i-2*a-c)*h+a*s+t}function rS(s,e){const t=1-s;return t*t*e}function sS(s,e){return 2*(1-s)*s*e}function oS(s,e){return s*s*e}function Xa(s,e,t,i){return rS(s,e)+sS(s,t)+oS(s,i)}function aS(s,e){const t=1-s;return t*t*t*e}function lS(s,e){const t=1-s;return 3*t*t*s*e}function cS(s,e){return 3*(1-s)*s*s*e}function uS(s,e){return s*s*s*e}function ja(s,e,t,i,o){return aS(s,e)+lS(s,t)+cS(s,i)+uS(s,o)}class M_ extends ir{constructor(e=new De,t=new De,i=new De,o=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new De){const i=t,o=this.v0,a=this.v1,c=this.v2,h=this.v3;return i.set(ja(e,o.x,a.x,c.x,h.x),ja(e,o.y,a.y,c.y,h.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hS extends ir{constructor(e=new z,t=new z,i=new z,o=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new z){const i=t,o=this.v0,a=this.v1,c=this.v2,h=this.v3;return i.set(ja(e,o.x,a.x,c.x,h.x),ja(e,o.y,a.y,c.y,h.y),ja(e,o.z,a.z,c.z,h.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E_ extends ir{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dS extends ir{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends ir{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Xa(e,o.x,a.x,c.x),Xa(e,o.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fS extends ir{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Xa(e,o.x,a.x,c.x),Xa(e,o.y,a.y,c.y),Xa(e,o.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,o=this.points,a=(o.length-1)*e,c=Math.floor(a),h=a-c,d=o[c===0?c:c-1],f=o[c],g=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return i.set(n0(h,d.x,f.x,g.x,_.x),n0(h,d.y,f.y,g.y,_.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new De().fromArray(o))}return this}}var i0=Object.freeze({__proto__:null,ArcCurve:iS,CatmullRomCurve3:gf,CubicBezierCurve:M_,CubicBezierCurve3:hS,EllipseCurve:Bf,LineCurve:E_,LineCurve3:dS,QuadraticBezierCurve:w_,QuadraticBezierCurve3:fS,SplineCurve:T_});class pS extends ir{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new i0[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=i){const c=o[a]-i,h=this.curves[a],d=h.getLength(),f=d===0?0:1-c/d;return h.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,a=this.curves;o<a.length;o++){const c=a[o],h=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(h);for(let f=0;f<d.length;f++){const g=d[f];i&&i.equals(g)||(t.push(g),i=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new i0[o.type]().fromJSON(o))}return this}}class r0 extends pS{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new E_(this.currentPoint.clone(),new De(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const a=new w_(this.currentPoint.clone(),new De(e,t),new De(i,o));return this.curves.push(a),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,a,c){const h=new M_(this.currentPoint.clone(),new De(e,t),new De(i,o),new De(a,c));return this.curves.push(h),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new T_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,a,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+h,t+d,i,o,a,c),this}absarc(e,t,i,o,a,c){return this.absellipse(e,t,i,i,o,a,c),this}ellipse(e,t,i,o,a,c,h,d){const f=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+f,t+g,i,o,a,c,h,d),this}absellipse(e,t,i,o,a,c,h,d){const f=new Bf(e,t,i,o,a,c,h,d);if(this.curves.length>0){const _=f.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(f);const g=f.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class b_ extends r0{constructor(e){super(e),this.uuid=wr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,o=this.holes.length;i<o;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(new r0().fromJSON(o))}return this}}function mS(s,e,t=2){const i=e&&e.length,o=i?e[0]*t:s.length;let a=A_(s,0,o,t,!0);const c=[];if(!a||a.next===a.prev)return c;let h,d,f;if(i&&(a=yS(s,e,a,t)),s.length>80*t){h=s[0],d=s[1];let g=h,_=d;for(let m=t;m<o;m+=t){const x=s[m],M=s[m+1];x<h&&(h=x),M<d&&(d=M),x>g&&(g=x),M>_&&(_=M)}f=Math.max(g-h,_-d),f=f!==0?32767/f:0}return Za(a,c,t,h,d,f,0),c}function A_(s,e,t,i,o){let a;if(o===LS(s,e,t,i)>0)for(let c=e;c<t;c+=i)a=s0(c/i|0,s[c],s[c+1],a);else for(let c=t-i;c>=e;c-=i)a=s0(c/i|0,s[c],s[c+1],a);return a&&zo(a,a.next)&&(Qa(a),a=a.next),a}function Us(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(zo(t,t.next)||ln(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Za(s,e,t,i,o,a,c){if(!s)return;!c&&a&&TS(s,i,o,a);let h=s;for(;s.prev!==s.next;){const d=s.prev,f=s.next;if(a?_S(s,i,o,a):gS(s)){e.push(d.i,s.i,f.i),Qa(s),s=f.next,h=f.next;continue}if(s=f,s===h){c?c===1?(s=vS(Us(s),e),Za(s,e,t,i,o,a,2)):c===2&&xS(s,e,t,i,o,a):Za(Us(s),e,t,i,o,a,1);break}}}function gS(s){const e=s.prev,t=s,i=s.next;if(ln(e,t,i)>=0)return!1;const o=e.x,a=t.x,c=i.x,h=e.y,d=t.y,f=i.y,g=Math.min(o,a,c),_=Math.min(h,d,f),m=Math.max(o,a,c),x=Math.max(h,d,f);let M=i.next;for(;M!==e;){if(M.x>=g&&M.x<=m&&M.y>=_&&M.y<=x&&Ha(o,h,a,d,c,f,M.x,M.y)&&ln(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function _S(s,e,t,i){const o=s.prev,a=s,c=s.next;if(ln(o,a,c)>=0)return!1;const h=o.x,d=a.x,f=c.x,g=o.y,_=a.y,m=c.y,x=Math.min(h,d,f),M=Math.min(g,_,m),A=Math.max(h,d,f),y=Math.max(g,_,m),S=_f(x,M,e,t,i),w=_f(A,y,e,t,i);let C=s.prevZ,b=s.nextZ;for(;C&&C.z>=S&&b&&b.z<=w;){if(C.x>=x&&C.x<=A&&C.y>=M&&C.y<=y&&C!==o&&C!==c&&Ha(h,g,d,_,f,m,C.x,C.y)&&ln(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=x&&b.x<=A&&b.y>=M&&b.y<=y&&b!==o&&b!==c&&Ha(h,g,d,_,f,m,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=S;){if(C.x>=x&&C.x<=A&&C.y>=M&&C.y<=y&&C!==o&&C!==c&&Ha(h,g,d,_,f,m,C.x,C.y)&&ln(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=w;){if(b.x>=x&&b.x<=A&&b.y>=M&&b.y<=y&&b!==o&&b!==c&&Ha(h,g,d,_,f,m,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function vS(s,e){let t=s;do{const i=t.prev,o=t.next.next;!zo(i,o)&&R_(i,t,t.next,o)&&Ja(i,o)&&Ja(o,i)&&(e.push(i.i,t.i,o.i),Qa(t),Qa(t.next),t=s=o),t=t.next}while(t!==s);return Us(t)}function xS(s,e,t,i,o,a){let c=s;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&CS(c,h)){let d=P_(c,h);c=Us(c,c.next),d=Us(d,d.next),Za(c,e,t,i,o,a,0),Za(d,e,t,i,o,a,0);return}h=h.next}c=c.next}while(c!==s)}function yS(s,e,t,i){const o=[];for(let a=0,c=e.length;a<c;a++){const h=e[a]*i,d=a<c-1?e[a+1]*i:s.length,f=A_(s,h,d,i,!1);f===f.next&&(f.steiner=!0),o.push(AS(f))}o.sort(SS);for(let a=0;a<o.length;a++)t=MS(o[a],t);return t}function SS(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=i-o}return t}function MS(s,e){const t=ES(s,e);if(!t)return e;const i=P_(t,s);return Us(i,i.next),Us(t,t.next)}function ES(s,e){let t=e;const i=s.x,o=s.y;let a=-1/0,c;if(zo(s,t))return t;do{if(zo(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const _=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=i&&_>a&&(a=_,c=t.x<t.next.x?t:t.next,_===i))return c}t=t.next}while(t!==e);if(!c)return null;const h=c,d=c.x,f=c.y;let g=1/0;t=c;do{if(i>=t.x&&t.x>=d&&i!==t.x&&C_(o<f?i:a,o,d,f,o<f?a:i,o,t.x,t.y)){const _=Math.abs(o-t.y)/(i-t.x);Ja(t,s)&&(_<g||_===g&&(t.x>c.x||t.x===c.x&&wS(c,t)))&&(c=t,g=_)}t=t.next}while(t!==h);return c}function wS(s,e){return ln(s.prev,s,e.prev)<0&&ln(e.next,s,s.next)<0}function TS(s,e,t,i){let o=s;do o.z===0&&(o.z=_f(o.x,o.y,e,t,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,bS(o)}function bS(s){let e,t=1;do{let i=s,o;s=null;let a=null;for(e=0;i;){e++;let c=i,h=0;for(let f=0;f<t&&(h++,c=c.nextZ,!!c);f++);let d=t;for(;h>0||d>0&&c;)h!==0&&(d===0||!c||i.z<=c.z)?(o=i,i=i.nextZ,h--):(o=c,c=c.nextZ,d--),a?a.nextZ=o:s=o,o.prevZ=a,a=o;i=c}a.nextZ=null,t*=2}while(e>1);return s}function _f(s,e,t,i,o){return s=(s-t)*o|0,e=(e-i)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function AS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function C_(s,e,t,i,o,a,c,h){return(o-c)*(e-h)>=(s-c)*(a-h)&&(s-c)*(i-h)>=(t-c)*(e-h)&&(t-c)*(a-h)>=(o-c)*(i-h)}function Ha(s,e,t,i,o,a,c,h){return!(s===c&&e===h)&&C_(s,e,t,i,o,a,c,h)}function CS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!RS(s,e)&&(Ja(s,e)&&Ja(e,s)&&PS(s,e)&&(ln(s.prev,s,e.prev)||ln(s,e.prev,e))||zo(s,e)&&ln(s.prev,s,s.next)>0&&ln(e.prev,e,e.next)>0)}function ln(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function zo(s,e){return s.x===e.x&&s.y===e.y}function R_(s,e,t,i){const o=Pc(ln(s,e,t)),a=Pc(ln(s,e,i)),c=Pc(ln(t,i,s)),h=Pc(ln(t,i,e));return!!(o!==a&&c!==h||o===0&&Rc(s,t,e)||a===0&&Rc(s,i,e)||c===0&&Rc(t,s,i)||h===0&&Rc(t,e,i))}function Rc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Pc(s){return s>0?1:s<0?-1:0}function RS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&R_(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ja(s,e){return ln(s.prev,s,s.next)<0?ln(s,e,s.next)>=0&&ln(s,s.prev,e)>=0:ln(s,e,s.prev)<0||ln(s,s.next,e)<0}function PS(s,e){let t=s,i=!1;const o=(s.x+e.x)/2,a=(s.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function P_(s,e){const t=vf(s.i,s.x,s.y),i=vf(e.i,e.x,e.y),o=s.next,a=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function s0(s,e,t,i){const o=vf(s,e,t);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function Qa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function LS(s,e,t,i){let o=0;for(let a=e,c=t-i;a<t;a+=i)o+=(s[c]-s[a])*(s[a+1]+s[c+1]),c=a;return o}class DS{static triangulate(e,t,i=2){return mS(e,t,i)}}class Ya{static area(e){const t=e.length;let i=0;for(let o=t-1,a=0;a<t;o=a++)i+=e[o].x*e[a].y-e[a].x*e[o].y;return i*.5}static isClockWise(e){return Ya.area(e)<0}static triangulateShape(e,t){const i=[],o=[],a=[];o0(e),a0(i,e);let c=e.length;t.forEach(o0);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,a0(i,t[d]);const h=DS.triangulate(i,o);for(let d=0;d<h.length;d+=3)a.push(h.slice(d,d+3));return a}}function o0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function a0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Cs extends zf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cs(e.radius,e.detail)}}class el extends tn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,h=Math.floor(i),d=Math.floor(o),f=h+1,g=d+1,_=e/h,m=t/d,x=[],M=[],A=[],y=[];for(let S=0;S<g;S++){const w=S*m-c;for(let C=0;C<f;C++){const b=C*_-a;M.push(b,-w,0),A.push(0,0,1),y.push(C/h),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let w=0;w<h;w++){const C=w+f*S,b=w+f*(S+1),U=w+1+f*(S+1),P=w+1+f*S;x.push(C,b,P),x.push(b,U,P)}this.setIndex(x),this.setAttribute("position",new wt(M,3)),this.setAttribute("normal",new wt(A,3)),this.setAttribute("uv",new wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hf extends tn{constructor(e=.5,t=1,i=32,o=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:o,thetaStart:a,thetaLength:c},i=Math.max(3,i),o=Math.max(1,o);const h=[],d=[],f=[],g=[];let _=e;const m=(t-e)/o,x=new z,M=new De;for(let A=0;A<=o;A++){for(let y=0;y<=i;y++){const S=a+y/i*c;x.x=_*Math.cos(S),x.y=_*Math.sin(S),d.push(x.x,x.y,x.z),f.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,g.push(M.x,M.y)}_+=m}for(let A=0;A<o;A++){const y=A*(i+1);for(let S=0;S<i;S++){const w=S+y,C=w,b=w+i+1,U=w+i+2,P=w+1;h.push(C,b,P),h.push(b,U,P)}}this.setIndex(h),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gf extends tn{constructor(e=new b_([new De(0,.5),new De(-.5,-.5),new De(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],o=[],a=[],c=[];let h=0,d=0;if(Array.isArray(e)===!1)f(e);else for(let g=0;g<e.length;g++)f(e[g]),this.addGroup(h,d,g),h+=d,d=0;this.setIndex(i),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(c,2));function f(g){const _=o.length/3,m=g.extractPoints(t);let x=m.shape;const M=m.holes;Ya.isClockWise(x)===!1&&(x=x.reverse());for(let y=0,S=M.length;y<S;y++){const w=M[y];Ya.isClockWise(w)===!0&&(M[y]=w.reverse())}const A=Ya.triangulateShape(x,M);for(let y=0,S=M.length;y<S;y++){const w=M[y];x=x.concat(w)}for(let y=0,S=x.length;y<S;y++){const w=x[y];o.push(w.x,w.y,0),a.push(0,0,1),c.push(w.x,w.y)}for(let y=0,S=A.length;y<S;y++){const w=A[y],C=w[0]+_,b=w[1]+_,U=w[2]+_;i.push(C,b,U),d+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return NS(t,e)}static fromJSON(e,t){const i=[];for(let o=0,a=e.shapes.length;o<a;o++){const c=t[e.shapes[o]];i.push(c)}return new Gf(i,e.curveSegments)}}function NS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class Rs extends tn{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+h,Math.PI);let f=0;const g=[],_=new z,m=new z,x=[],M=[],A=[],y=[];for(let S=0;S<=i;S++){const w=[],C=S/i;let b=0;S===0&&c===0?b=.5/t:S===i&&d===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const P=U/t;_.x=-e*Math.cos(o+P*a)*Math.sin(c+C*h),_.y=e*Math.cos(c+C*h),_.z=e*Math.sin(o+P*a)*Math.sin(c+C*h),M.push(_.x,_.y,_.z),m.copy(_).normalize(),A.push(m.x,m.y,m.z),y.push(P+b,1-C),w.push(f++)}g.push(w)}for(let S=0;S<i;S++)for(let w=0;w<t;w++){const C=g[S][w+1],b=g[S][w],U=g[S+1][w],P=g[S+1][w+1];(S!==0||c>0)&&x.push(C,b,P),(S!==i-1||d<Math.PI)&&x.push(b,U,P)}this.setIndex(x),this.setAttribute("position",new wt(M,3)),this.setAttribute("normal",new wt(A,3)),this.setAttribute("uv",new wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wf extends tn{constructor(e=1,t=.4,i=12,o=48,a=Math.PI*2,c=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:a,thetaStart:c,thetaLength:h},i=Math.floor(i),o=Math.floor(o);const d=[],f=[],g=[],_=[],m=new z,x=new z,M=new z;for(let A=0;A<=i;A++){const y=c+A/i*h;for(let S=0;S<=o;S++){const w=S/o*a;x.x=(e+t*Math.cos(y))*Math.cos(w),x.y=(e+t*Math.cos(y))*Math.sin(w),x.z=t*Math.sin(y),f.push(x.x,x.y,x.z),m.x=e*Math.cos(w),m.y=e*Math.sin(w),M.subVectors(x,m).normalize(),g.push(M.x,M.y,M.z),_.push(S/o),_.push(A/i)}}for(let A=1;A<=i;A++)for(let y=1;y<=o;y++){const S=(o+1)*A+y-1,w=(o+1)*(A-1)+y-1,C=(o+1)*(A-1)+y,b=(o+1)*A+y;d.push(S,w,b),d.push(w,C,b)}this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Bo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];if(l0(o))o.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(l0(o[0])){const a=[];for(let c=0,h=o.length;c<h;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const i=Bo(s[t]);for(const o in i)e[o]=i[o]}return e}function l0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function IS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function L_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const US={clone:Bo,merge:jn};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kS extends nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oi extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zS extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xf extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class VS extends Xf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const md=new Pt,c0=new z,u0=new z;class D_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;c0.setFromMatrixPosition(e.matrixWorld),t.position.copy(c0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ka||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new z,Dc=new pi,ji=new z;class N_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Lc,Dc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new z,h0=new De,d0=new De;class di extends N_{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,h0,d0),t.subVectors(d0,h0)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/f,o*=c.width/d,i*=c.height/f}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class HS extends D_{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class GS extends Xf{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new HS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class jf extends N_{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,h=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class WS extends D_{constructor(){super(new jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XS extends Xf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new WS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const bo=-90,Ao=1;class jS extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(bo,Ao,e,t);o.layers=this.layers,this.add(o);const a=new di(bo,Ao,e,t);a.layers=this.layers,this.add(a);const c=new di(bo,Ao,e,t);c.layers=this.layers,this.add(c);const h=new di(bo,Ao,e,t);h.layers=this.layers,this.add(h);const d=new di(bo,Ao,e,t);d.layers=this.layers,this.add(d);const f=new di(bo,Ao,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,h,d]=t;for(const f of t)this.remove(f);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,d,f,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class YS extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const f0=new Pt;class qS{constructor(e,t,i=0,o=1/0){this.ray=new eu(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new Ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return f0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(e,t=!0,i=[]){return xf(e,this,i,t),i.sort(p0),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)xf(e[o],this,i,t);return i.sort(p0),i}}function p0(s,e){return s.distance-e.distance}function xf(s,e,t,i){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const a=s.children;for(let c=0,h=a.length;c<h;c++)xf(a[c],e,t,!0)}}class $S{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class m0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qf=class Qf{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};Qf.prototype.isMatrix2=!0;let g0=Qf;class KS extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _0(s,e,t,i){const o=ZS(i);switch(t){case l_:return s*e;case Rf:return s*e/o.components*o.byteLength;case Pf:return s*e/o.components*o.byteLength;case Is:return s*e*2/o.components*o.byteLength;case Lf:return s*e*2/o.components*o.byteLength;case c_:return s*e*3/o.components*o.byteLength;case zi:return s*e*4/o.components*o.byteLength;case Df:return s*e*4/o.components*o.byteLength;case Oc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Od:return Math.max(s,16)*Math.max(e,8)/4;case Id:case Fd:return Math.max(s,8)*Math.max(e,8)/2;case kd:case zd:case Vd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bd:case Wc:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sf:case of:case af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xc:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZS(s){switch(s){case fi:case r_:return{byteLength:1,components:1};case qa:case s_:case br:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case er:case bf:case ki:return{byteLength:4,components:1};case o_:case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I_(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function JS(s){const e=new WeakMap;function t(h,d){const f=h.array,g=h.usage,_=f.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,f,g),h.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=s.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:_}}function i(h,d,f){const g=d.array,_=d.updateRanges;if(s.bindBuffer(f,h),_.length===0)s.bufferSubData(f,0,g);else{_.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<_.length;x++){const M=_[m],A=_[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,_[m]=A)}_.length=m+1;for(let x=0,M=_.length;x<M;x++){const A=_[x];s.bufferSubData(f,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function c(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const f=e.get(h);if(f===void 0)e.set(h,t(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,h,d),f.version=h.version}}return{get:o,remove:a,update:c}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,R1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:QS,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:aM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:wM,displacementmap_pars_vertex:TM,displacementmap_vertex:bM,emissivemap_fragment:AM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:DM,envmap_pars_fragment:NM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:XM,envmap_vertex:UM,fog_vertex:FM,fog_pars_vertex:OM,fog_fragment:kM,fog_pars_fragment:zM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:VM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:WM,lights_toon_fragment:jM,lights_toon_pars_fragment:YM,lights_phong_fragment:qM,lights_phong_pars_fragment:$M,lights_physical_fragment:KM,lights_physical_pars_fragment:ZM,lights_fragment_begin:JM,lights_fragment_maps:QM,lights_fragment_end:e1,lightprobes_pars_fragment:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:l1,map_particle_pars_fragment:c1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:h1,morphinstance_vertex:d1,morphcolor_vertex:f1,morphnormal_vertex:p1,morphtarget_pars_vertex:m1,morphtarget_vertex:g1,normal_fragment_begin:_1,normal_fragment_maps:v1,normal_pars_fragment:x1,normal_pars_vertex:y1,normal_vertex:S1,normalmap_pars_fragment:M1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:b1,opaque_fragment:A1,packing:C1,premultiplied_alpha_fragment:R1,project_vertex:P1,dithering_fragment:L1,dithering_pars_fragment:D1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:U1,shadowmap_pars_vertex:F1,shadowmap_vertex:O1,shadowmask_pars_fragment:k1,skinbase_vertex:z1,skinning_pars_vertex:B1,skinning_vertex:V1,skinnormal_vertex:H1,specularmap_fragment:G1,specularmap_pars_fragment:W1,tonemapping_fragment:X1,tonemapping_pars_fragment:j1,transmission_fragment:Y1,transmission_pars_fragment:q1,uv_pars_fragment:$1,uv_pars_vertex:K1,uv_vertex:Z1,worldpos_vertex:J1,background_vert:Q1,background_frag:eE,backgroundCube_vert:tE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:rE,depth_vert:sE,depth_frag:oE,distance_vert:aE,distance_frag:lE,equirect_vert:cE,equirect_frag:uE,linedashed_vert:hE,linedashed_frag:dE,meshbasic_vert:fE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:gE,meshmatcap_vert:_E,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:yE,meshphong_vert:SE,meshphong_frag:ME,meshphysical_vert:EE,meshphysical_frag:wE,meshtoon_vert:TE,meshtoon_frag:bE,points_vert:AE,points_frag:CE,shadow_vert:RE,shadow_frag:PE,sprite_vert:LE,sprite_frag:DE},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},$i={basic:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:jn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:jn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:jn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:jn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:jn([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:jn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:jn([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:jn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:jn([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:jn([Fe.common,Fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:jn([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};$i.physical={uniforms:jn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Nc={r:0,b:0,g:0},NE=new Pt,U_=new dt;U_.set(-1,0,0,0,1,0,0,0,1);function IE(s,e,t,i,o,a){const c=new ft(0);let h=o===!0?0:1,d,f,g=null,_=0,m=null;function x(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){const b=w.backgroundBlurriness>0;C=e.get(C,b)}return C}function M(w){let C=!1;const b=x(w);b===null?y(c,h):b&&b.isColor&&(y(b,1),C=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(w,C){const b=x(C);b&&(b.isCubeTexture||b.mapping===Qc)?(f===void 0&&(f=new Qe(new bn(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Bo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=b,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(U_),f.material.toneMapped=bt.getTransfer(b.colorSpace)!==kt,(g!==b||_!==b.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,g=b,_=b.version,m=s.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Qe(new el(2,2),new nr({name:"BackgroundMaterial",uniforms:Bo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=bt.getTransfer(b.colorSpace)!==kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||_!==b.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=b,_=b.version,m=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,C){w.getRGB(Nc,L_(s)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,C,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,C=1){c.set(w),h=C,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(c,h)},render:M,addToRenderList:A,dispose:S}}function UE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function h(O,B,Q,se,W){let K=!1;const Y=_(O,se,Q,B);a!==Y&&(a=Y,f(a.object)),K=x(O,se,Q,W),K&&M(O,se,Q,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,b(O,B,Q,se),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return s.createVertexArray()}function f(O){return s.bindVertexArray(O)}function g(O){return s.deleteVertexArray(O)}function _(O,B,Q,se){const W=se.wireframe===!0;let K=i[B.id];K===void 0&&(K={},i[B.id]=K);const Y=O.isInstancedMesh===!0?O.id:0;let $=K[Y];$===void 0&&($={},K[Y]=$);let re=$[Q.id];re===void 0&&(re={},$[Q.id]=re);let ae=re[W];return ae===void 0&&(ae=m(d()),re[W]=ae),ae}function m(O){const B=[],Q=[],se=[];for(let W=0;W<t;W++)B[W]=0,Q[W]=0,se[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:se,object:O,attributes:{},index:null}}function x(O,B,Q,se){const W=a.attributes,K=B.attributes;let Y=0;const $=Q.getAttributes();for(const re in $)if($[re].location>=0){const k=W[re];let ee=K[re];if(ee===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;Y++}return a.attributesNum!==Y||a.index!==se}function M(O,B,Q,se){const W={},K=B.attributes;let Y=0;const $=Q.getAttributes();for(const re in $)if($[re].location>=0){let k=K[re];k===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),W[re]=ee,Y++}a.attributes=W,a.attributesNum=Y,a.index=se}function A(){const O=a.newAttributes;for(let B=0,Q=O.length;B<Q;B++)O[B]=0}function y(O){S(O,0)}function S(O,B){const Q=a.newAttributes,se=a.enabledAttributes,W=a.attributeDivisors;Q[O]=1,se[O]===0&&(s.enableVertexAttribArray(O),se[O]=1),W[O]!==B&&(s.vertexAttribDivisor(O,B),W[O]=B)}function w(){const O=a.newAttributes,B=a.enabledAttributes;for(let Q=0,se=B.length;Q<se;Q++)B[Q]!==O[Q]&&(s.disableVertexAttribArray(Q),B[Q]=0)}function C(O,B,Q,se,W,K,Y){Y===!0?s.vertexAttribIPointer(O,B,Q,W,K):s.vertexAttribPointer(O,B,Q,se,W,K)}function b(O,B,Q,se){A();const W=se.attributes,K=Q.getAttributes(),Y=B.defaultAttributeValues;for(const $ in K){const re=K[$];if(re.location>=0){let ae=W[$];if(ae===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const k=ae.normalized,ee=ae.itemSize,Me=e.get(ae);if(Me===void 0)continue;const Ue=Me.buffer,Ne=Me.type,le=Me.bytesPerElement,ve=Ne===s.INT||Ne===s.UNSIGNED_INT||ae.gpuType===bf;if(ae.isInterleavedBufferAttribute){const de=ae.data,Re=de.stride,Xe=ae.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<re.locationSize;He++)S(re.location+He,de.meshPerAttribute);O.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<re.locationSize;He++)y(re.location+He);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let He=0;He<re.locationSize;He++)C(re.location+He,ee/re.locationSize,Ne,k,Re*le,(Xe+ee/re.locationSize*He)*le,ve)}else{if(ae.isInstancedBufferAttribute){for(let de=0;de<re.locationSize;de++)S(re.location+de,ae.meshPerAttribute);O.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<re.locationSize;de++)y(re.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let de=0;de<re.locationSize;de++)C(re.location+de,ee/re.locationSize,Ne,k,ee*le,ee/re.locationSize*de*le,ve)}}else if(Y!==void 0){const k=Y[$];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(re.location,k);break;case 3:s.vertexAttrib3fv(re.location,k);break;case 4:s.vertexAttrib4fv(re.location,k);break;default:s.vertexAttrib1fv(re.location,k)}}}}w()}function U(){N();for(const O in i){const B=i[O];for(const Q in B){const se=B[Q];for(const W in se){const K=se[W];for(const Y in K)g(K[Y].object),delete K[Y];delete se[W]}}delete i[O]}}function P(O){if(i[O.id]===void 0)return;const B=i[O.id];for(const Q in B){const se=B[Q];for(const W in se){const K=se[W];for(const Y in K)g(K[Y].object),delete K[Y];delete se[W]}}delete i[O.id]}function D(O){for(const B in i){const Q=i[B];for(const se in Q){const W=Q[se];if(W[O.id]===void 0)continue;const K=W[O.id];for(const Y in K)g(K[Y].object),delete K[Y];delete W[O.id]}}}function E(O){for(const B in i){const Q=i[B],se=O.isInstancedMesh===!0?O.id:0,W=Q[se];if(W!==void 0){for(const K in W){const Y=W[K];for(const $ in Y)g(Y[$].object),delete Y[$];delete W[K]}delete Q[se],Object.keys(Q).length===0&&delete i[B]}}}function N(){V(),c=!0,a!==o&&(a=o,f(a.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:y,disableUnusedAttributes:w}}function FE(s,e,t){let i;function o(d){i=d}function a(d,f){s.drawArrays(i,d,f),t.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawArraysInstanced(i,d,f,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,f,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function OE(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(D){return!(D!==zi&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const E=D===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==fi&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ki&&!E)}function d(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=d(f);g!==f&&(nt("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:b,maxSamples:U,samples:P}}function kE(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new ns,h=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||i!==0||o;return o=m,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const M=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!o||M===null||M.length===0||a&&!y)a?g(null):f();else{const w=a?0:i,C=w*4;let b=S.clippingState||null;d.value=b,b=g(M,m,C,x);for(let U=0;U!==C;++U)b[U]=t[U];S.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,x,M){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=d.value,M!==!0||y===null){const S=x+A*4,w=m.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,b=x;C!==A;++C,b+=4)c.copy(_[C]).applyMatrix4(w,h),c.normal.toArray(y,b),y[b+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const ss=4,v0=[.125,.215,.35,.446,.526,.582],Ps=20,zE=256,Fa=new jf,x0=new ft;let gd=null,_d=0,vd=0,xd=!1;const BE=new z;class y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:h=BE}=a;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,h),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:br,format:zi,colorSpace:jc,depthBuffer:!1},o=S0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S0(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VE(a)),this._blurMaterial=GE(a,e,t),this._ggxMaterial=HE(a,e,t)}return o}_compileMaterial(e){const t=new Qe(new tn,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,o,a){const d=new di(90,1,t,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(x0),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new bn,new Lo({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(x0),S=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(d.up.set(0,f[C],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[C],a.y,a.z)):b===1?(d.up.set(0,0,f[C]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[C],a.z)):(d.up.set(0,f[C],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[C]));const U=this._cubeSize;Co(o,b*U,C>2?U:0,U,U),_.setRenderTarget(o),S&&_.render(A,d),_.render(e,d)}_.toneMapping=x,_.autoClear=m,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ns||e.mapping===Oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M0());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const h=a.uniforms;h.envMap.value=e;const d=this._cubeSize;Co(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(f*f-g*g),m=0+f*1.25,x=_*m,{_lodMax:M}=this,A=this._sizeLods[i],y=3*A*(i>M-ss?i-M+ss:0),S=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=M-t,Co(a,y,S,3*A,2*A),o.setRenderTarget(a),o.render(h,Fa),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,Co(e,y,S,3*A,2*A),o.setRenderTarget(e),o.render(h,Fa)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,h){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=f;const m=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ps-1),A=a/M,y=isFinite(a)?1+Math.floor(g*A):Ps;y>Ps&&nt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ps}`);const S=[];let w=0;for(let D=0;D<Ps;++D){const E=D/A,N=Math.exp(-E*E/2);S.push(N),D===0?w+=N:D<y&&(w+=2*N)}for(let D=0;D<S.length;D++)S[D]=S[D]/w;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",h&&(m.poleAxis.value=h);const{_lodMax:C}=this;m.dTheta.value=M,m.mipInt.value=C-i;const b=this._sizeLods[o],U=3*b*(o>C-ss?o-C+ss:0),P=4*(this._cubeSize-b);Co(t,U,P,3*b,2*b),d.setRenderTarget(t),d.render(_,Fa)}}function VE(s){const e=[],t=[],i=[];let o=s;const a=s-ss+1+v0.length;for(let c=0;c<a;c++){const h=Math.pow(2,o);e.push(h);let d=1/h;c>s-ss?d=v0[c-s+ss-1]:c===0&&(d=0),t.push(d);const f=1/(h-2),g=-f,_=1+f,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,A=3,y=2,S=1,w=new Float32Array(A*M*x),C=new Float32Array(y*M*x),b=new Float32Array(S*M*x);for(let P=0;P<x;P++){const D=P%3*2/3-1,E=P>2?0:-1,N=[D,E,0,D+2/3,E,0,D+2/3,E+1,0,D,E,0,D+2/3,E+1,0,D,E+1,0];w.set(N,A*M*P),C.set(m,y*M*P);const V=[P,P,P,P,P,P];b.set(V,S*M*P)}const U=new tn;U.setAttribute("position",new mi(w,A)),U.setAttribute("uv",new mi(C,y)),U.setAttribute("faceIndex",new mi(b,S)),i.push(new Qe(U,null)),o>ss&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function S0(s,e,t){const i=new Qi(s,e,t);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function HE(s,e,t){return new nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function GE(s,e,t){const i=new Float32Array(Ps),o=new z(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function M0(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function E0(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class F_ extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new x_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new bn(5,5,5),a=new nr({name:"CubemapFromEquirect",uniforms:Bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:Er});a.uniforms.tEquirect.value=t;const c=new Qe(o,a),h=t.minFilter;return t.minFilter===Ls&&(t.minFilter=Bn),new jS(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function WE(s){let e=new WeakMap,t=new WeakMap,i=null;function o(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===zh||x===Bh)if(e.has(m)){const M=e.get(m).texture;return h(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new F_(M.height);return A.fromEquirectangularTexture(s,m),e.set(m,A),m.addEventListener("dispose",f),h(A.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===zh||x===Bh,A=x===Ns||x===Oo;if(M||A){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new y0(s)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const w=m.image;return M&&w&&w.height>0||A&&w&&d(w)?(i===null&&(i=new y0(s)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function h(m,x){return x===zh?m.mapping=Ns:x===Bh&&(m.mapping=Oo),m}function d(m){let x=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&x++;return x===M}function f(m){const x=m.target;x.removeEventListener("dispose",f);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:_}}function XE(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=s.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ff("WebGLRenderer: "+i+" extension not supported."),o}}}function jE(s,e,t,i){const o={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function h(_,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(_){const m=_.attributes;for(const x in m)e.update(m[x],s.ARRAY_BUFFER)}function f(_){const m=[],x=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(x!==null){const w=x.array;A=x.version;for(let C=0,b=w.length;C<b;C+=3){const U=w[C+0],P=w[C+1],D=w[C+2];m.push(U,P,P,D,D,U)}}else{const w=M.array;A=M.version;for(let C=0,b=w.length/3-1;C<b;C+=3){const U=C+0,P=C+1,D=C+2;m.push(U,P,P,D,D,U)}}const y=new(M.count>=65535?p_:f_)(m,1);y.version=A;const S=a.get(_);S&&e.remove(S),a.set(_,y)}function g(_){const m=a.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function YE(s,e,t){let i;function o(_){i=_}let a,c;function h(_){a=_.type,c=_.bytesPerElement}function d(_,m){s.drawElements(i,m,a,_*c),t.update(m,i,1)}function f(_,m,x){x!==0&&(s.drawElementsInstanced(i,m,a,_*c,x),t.update(m,i,x))}function g(_,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,_,0,x);let A=0;for(let y=0;y<x;y++)A+=m[y];t.update(A,i,1)}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=g}function qE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(a/3);break;case s.LINES:t.lines+=h*(a/2);break;case s.LINE_STRIP:t.lines+=h*(a-1);break;case s.LINE_LOOP:t.lines+=h*a;break;case s.POINTS:t.points+=h*a;break;default:Tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function $E(s,e,t){const i=new WeakMap,o=new un;function a(c,h,d){const f=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(h);if(m===void 0||m.count!==_){let V=function(){E.dispose(),i.delete(h),h.removeEventListener("dispose",V)};var x=V;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),y===!0&&(b=3);let U=h.attributes.position.count*b,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const D=new Float32Array(U*P*4*_),E=new h_(D,U,P,_);E.type=ki,E.needsUpdate=!0;const N=b*4;for(let O=0;O<_;O++){const B=S[O],Q=w[O],se=C[O],W=U*P*4*O;for(let K=0;K<B.count;K++){const Y=K*N;M===!0&&(o.fromBufferAttribute(B,K),D[W+Y+0]=o.x,D[W+Y+1]=o.y,D[W+Y+2]=o.z,D[W+Y+3]=0),A===!0&&(o.fromBufferAttribute(Q,K),D[W+Y+4]=o.x,D[W+Y+5]=o.y,D[W+Y+6]=o.z,D[W+Y+7]=0),y===!0&&(o.fromBufferAttribute(se,K),D[W+Y+8]=o.x,D[W+Y+9]=o.y,D[W+Y+10]=o.z,D[W+Y+11]=se.itemSize===4?o.w:1)}}m={count:_,texture:E,size:new De(U,P)},i.set(h,m),h.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const A=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function KE(s,e,t,i,o){let a=new WeakMap;function c(f){const g=o.render.frame,_=f.geometry,m=e.get(f,_);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==g&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,g))),f.isSkinnedMesh){const x=f.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return m}function h(){a=new WeakMap}function d(f){const g=f.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:h}}const ZE={[Z0]:"LINEAR_TONE_MAPPING",[J0]:"REINHARD_TONE_MAPPING",[Q0]:"CINEON_TONE_MAPPING",[Tf]:"ACES_FILMIC_TONE_MAPPING",[t_]:"AGX_TONE_MAPPING",[n_]:"NEUTRAL_TONE_MAPPING",[e_]:"CUSTOM_TONE_MAPPING"};function JE(s,e,t,i,o){const a=new Qi(e,t,{type:s,depthBuffer:i,stencilBuffer:o,depthTexture:i?new ko(e,t):void 0}),c=new Qi(e,t,{type:br,depthBuffer:!1,stencilBuffer:!1}),h=new tn;h.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wt([0,2,0,0,2,0],2));const d=new kS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qe(h,d),g=new jf(-1,1,1,-1,0,1);let _=null,m=null,x=!1,M,A=null,y=[],S=!1;this.setSize=function(w,C){a.setSize(w,C),c.setSize(w,C);for(let b=0;b<y.length;b++){const U=y[b];U.setSize&&U.setSize(w,C)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const C=a.width,b=a.height;for(let U=0;U<y.length;U++){const P=y[U];P.setSize&&P.setSize(C,b)}},this.begin=function(w,C){if(x||w.toneMapping===Ji&&y.length===0)return!1;if(A=C,C!==null){const b=C.width,U=C.height;(a.width!==b||a.height!==U)&&this.setSize(b,U)}return S===!1&&w.setRenderTarget(a),M=w.toneMapping,w.toneMapping=Ji,!0},this.hasRenderPass=function(){return S},this.end=function(w,C){w.toneMapping=M,x=!0;let b=a,U=c;for(let P=0;P<y.length;P++){const D=y[P];if(D.enabled!==!1&&(D.render(w,U,b,C),D.needsSwap!==!1)){const E=b;b=U,U=E}}if(_!==w.outputColorSpace||m!==w.toneMapping){_=w.outputColorSpace,m=w.toneMapping,d.defines={},bt.getTransfer(_)===kt&&(d.defines.SRGB_TRANSFER="");const P=ZE[m];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(A),w.render(f,g),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),h.dispose(),d.dispose()}}const O_=new Vn,yf=new ko(1,1),k_=new h_,z_=new Uy,B_=new x_,w0=[],T0=[],b0=new Float32Array(16),A0=new Float32Array(9),C0=new Float32Array(4);function Ho(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=w0[o];if(a===void 0&&(a=new Float32Array(o),w0[o]=a),e!==0){i.toArray(a,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(a,h)}return a}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function nu(s,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function QE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function iw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;C0.set(i),s.uniformMatrix2fv(this.addr,!1,C0),yn(t,i)}}function rw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;A0.set(i),s.uniformMatrix3fv(this.addr,!1,A0),yn(t,i)}}function sw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;b0.set(i),s.uniformMatrix4fv(this.addr,!1,b0),yn(t,i)}}function ow(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function uw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function pw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=t.isReversedDepthBuffer()?If:Nf,a=yf):a=O_,t.setTexture2D(e||a,o)}function mw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||z_,o)}function gw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||B_,o)}function _w(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||k_,o)}function vw(s){switch(s){case 5126:return QE;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return hw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(s,e){s.uniform1fv(this.addr,e)}function yw(s,e){const t=Ho(e,this.size,2);s.uniform2fv(this.addr,t)}function Sw(s,e){const t=Ho(e,this.size,3);s.uniform3fv(this.addr,t)}function Mw(s,e){const t=Ho(e,this.size,4);s.uniform4fv(this.addr,t)}function Ew(s,e){const t=Ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ww(s,e){const t=Ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tw(s,e){const t=Ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bw(s,e){s.uniform1iv(this.addr,e)}function Aw(s,e){s.uniform2iv(this.addr,e)}function Cw(s,e){s.uniform3iv(this.addr,e)}function Rw(s,e){s.uniform4iv(this.addr,e)}function Pw(s,e){s.uniform1uiv(this.addr,e)}function Lw(s,e){s.uniform2uiv(this.addr,e)}function Dw(s,e){s.uniform3uiv(this.addr,e)}function Nw(s,e){s.uniform4uiv(this.addr,e)}function Iw(s,e,t){const i=this.cache,o=e.length,a=nu(t,o);xn(i,a)||(s.uniform1iv(this.addr,a),yn(i,a));let c;this.type===s.SAMPLER_2D_SHADOW?c=yf:c=O_;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||c,a[h])}function Uw(s,e,t){const i=this.cache,o=e.length,a=nu(t,o);xn(i,a)||(s.uniform1iv(this.addr,a),yn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||z_,a[c])}function Fw(s,e,t){const i=this.cache,o=e.length,a=nu(t,o);xn(i,a)||(s.uniform1iv(this.addr,a),yn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||B_,a[c])}function Ow(s,e,t){const i=this.cache,o=e.length,a=nu(t,o);xn(i,a)||(s.uniform1iv(this.addr,a),yn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||k_,a[c])}function kw(s){switch(s){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return Ew;case 35675:return ww;case 35676:return Tw;case 5124:case 35670:return bw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Pw;case 36294:return Lw;case 36295:return Dw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Ow}}class zw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vw(t.type)}}class Bw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kw(t.type)}}class Vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const h=o[a];h.setValue(e,t[h.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function R0(s,e){s.seq.push(e),s.map[e.id]=e}function Hw(s,e,t){const i=s.name,o=i.length;for(yd.lastIndex=0;;){const a=yd.exec(i),c=yd.lastIndex;let h=a[1];const d=a[2]==="]",f=a[3];if(d&&(h=h|0),f===void 0||f==="["&&c+2===o){R0(t,f===void 0?new zw(h,s,e):new Bw(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new Vw(h),R0(t,_)),t=_}}}class Hc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const h=e.getActiveUniform(t,c),d=e.getUniformLocation(t,h.name);Hw(h,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const h=t[a],d=i[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function P0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Gw=37297;let Ww=0;function Xw(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const h=c+1;i.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return i.join(`
`)}const L0=new dt;function jw(s){bt._getMatrix(L0,bt.workingColorSpace,s);const e=`mat3( ${L0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case Yc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function D0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Xw(s.getShaderSource(e),h)}else return a}function Yw(s,e){const t=jw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qw={[Z0]:"Linear",[J0]:"Reinhard",[Q0]:"Cineon",[Tf]:"ACESFilmic",[t_]:"AgX",[n_]:"Neutral",[e_]:"Custom"};function $w(s,e){const t=qw[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new z;function Kw(){bt.getLuminanceCoefficients(Ic);const s=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function Jw(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qw(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function Ga(s){return s!==""}function N0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(s){return s.replace(eT,nT)}const tT=new Map;function nT(s,e){let t=_t[e];if(t===void 0){const i=tT.get(e);if(i!==void 0)t=_t[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(s){return s.replace(iT,rT)}function rT(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function F0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sT={[Fc]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function oT(s){return sT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aT={[Ns]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE",[Qc]:"ENVMAP_TYPE_CUBE_UV"};function lT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cT={[Oo]:"ENVMAP_MODE_REFRACTION"};function uT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hT={[K0]:"ENVMAP_BLENDING_MULTIPLY",[fy]:"ENVMAP_BLENDING_MIX",[py]:"ENVMAP_BLENDING_ADD"};function dT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hT[s.combine]||"ENVMAP_BLENDING_NONE"}function fT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pT(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,h=t.fragmentShader;const d=oT(t),f=lT(t),g=uT(t),_=dT(t),m=fT(t),x=Zw(t),M=Jw(a),A=o.createProgram();let y,S,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ga).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ga).join(`
`),S.length>0&&(S+=`
`)):(y=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),S=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?_t.tonemapping_pars_fragment:"",t.toneMapping!==Ji?$w("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),Kw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),c=Sf(c),c=N0(c,t),c=I0(c,t),h=Sf(h),h=N0(h,t),h=I0(h,t),c=U0(c),h=U0(h),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=w+y+c,b=w+S+h,U=P0(o,o.VERTEX_SHADER,C),P=P0(o,o.FRAGMENT_SHADER,b);o.attachShader(A,U),o.attachShader(A,P),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function D(O){if(s.debug.checkShaderErrors){const B=o.getProgramInfoLog(A)||"",Q=o.getShaderInfoLog(U)||"",se=o.getShaderInfoLog(P)||"",W=B.trim(),K=Q.trim(),Y=se.trim();let $=!0,re=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,U,P);else{const ae=D0(o,U,"vertex"),k=D0(o,P,"fragment");Tt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+ae+`
`+k)}else W!==""?nt("WebGLProgram: Program Info Log:",W):(K===""||Y==="")&&(re=!1);re&&(O.diagnostics={runnable:$,programLog:W,vertexShader:{log:K,prefix:y},fragmentShader:{log:Y,prefix:S}})}o.deleteShader(U),o.deleteShader(P),E=new Hc(o,A),N=Qw(o,A)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let N;this.getAttributes=function(){return N===void 0&&D(this),N};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(A,Gw)),V},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=P,this}let mT=0;class gT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _T(e),t.set(e,i)),i}}class _T{constructor(e){this.id=mT++,this.code=e,this.usedTimes=0}}function vT(s){return s===Is||s===Wc||s===Xc}function xT(s,e,t,i,o,a){const c=new Ff,h=new gT,d=new Set,f=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,N,V,O,B,Q){const se=O.fog,W=B.geometry,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=e.get(E.envMap||K,Y),re=$&&$.mapping===Qc?$.image.height:null,ae=x[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const k=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=k!==void 0?k.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let Ue,Ne,le,ve;if(ae){const lt=$i[ae];Ue=lt.vertexShader,Ne=lt.fragmentShader}else Ue=E.vertexShader,Ne=E.fragmentShader,h.update(E),le=h.getVertexShaderID(E),ve=h.getFragmentShaderID(E);const de=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Xe=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,Et=!!E.map,ht=!!E.matcap,Lt=!!$,zt=!!E.aoMap,mt=!!E.lightMap,nn=!!E.bumpMap,Gt=!!E.normalMap,An=!!E.displacementMap,X=!!E.emissiveMap,Wt=!!E.metalnessMap,gt=!!E.roughnessMap,Ut=E.anisotropy>0,Ie=E.clearcoat>0,Yt=E.dispersion>0,I=E.iridescence>0,T=E.sheen>0,Z=E.transmission>0,fe=Ut&&!!E.anisotropyMap,me=Ie&&!!E.clearcoatMap,Se=Ie&&!!E.clearcoatNormalMap,Le=Ie&&!!E.clearcoatRoughnessMap,ue=I&&!!E.iridescenceMap,pe=I&&!!E.iridescenceThicknessMap,Oe=T&&!!E.sheenColorMap,ze=T&&!!E.sheenRoughnessMap,be=!!E.specularMap,Ee=!!E.specularColorMap,it=!!E.specularIntensityMap,at=Z&&!!E.transmissionMap,vt=Z&&!!E.thicknessMap,G=!!E.gradientMap,Te=!!E.alphaMap,he=E.alphaTest>0,ke=!!E.alphaHash,Ce=!!E.extensions;let ge=Ji;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ge=s.toneMapping);const Ye={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Ue,fragmentShader:Ne,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&B.instanceColor!==null,instancingMorph:Xe&&B.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:ht,envMap:Lt,envMapMode:Lt&&$.mapping,envMapCubeUVHeight:re,aoMap:zt,lightMap:mt,bumpMap:nn,normalMap:Gt,displacementMap:An,emissiveMap:X,normalMapObjectSpace:Gt&&E.normalMapType===_y,normalMapTangentSpace:Gt&&E.normalMapType===hf,packedNormalMap:Gt&&E.normalMapType===hf&&vT(E.normalMap.format),metalnessMap:Wt,roughnessMap:gt,anisotropy:Ut,anisotropyMap:fe,clearcoat:Ie,clearcoatMap:me,clearcoatNormalMap:Se,clearcoatRoughnessMap:Le,dispersion:Yt,iridescence:I,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:T,sheenColorMap:Oe,sheenRoughnessMap:ze,specularMap:be,specularColorMap:Ee,specularIntensityMap:it,transmission:Z,transmissionMap:at,thicknessMap:vt,gradientMap:G,opaque:E.transparent===!1&&E.blending===No&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:ke,combine:E.combine,mapUv:Et&&M(E.map.channel),aoMapUv:zt&&M(E.aoMap.channel),lightMapUv:mt&&M(E.lightMap.channel),bumpMapUv:nn&&M(E.bumpMap.channel),normalMapUv:Gt&&M(E.normalMap.channel),displacementMapUv:An&&M(E.displacementMap.channel),emissiveMapUv:X&&M(E.emissiveMap.channel),metalnessMapUv:Wt&&M(E.metalnessMap.channel),roughnessMapUv:gt&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:me&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(E.sheenRoughnessMap.channel),specularMapUv:be&&M(E.specularMap.channel),specularColorMapUv:Ee&&M(E.specularColorMap.channel),specularIntensityMapUv:it&&M(E.specularIntensityMap.channel),transmissionMapUv:at&&M(E.transmissionMap.channel),thicknessMapUv:vt&&M(E.thicknessMap.channel),alphaMapUv:Te&&M(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Gt||Ut),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Et||Te),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ii,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)N.push(V),N.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(S(N,E),w(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function S(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function w(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function C(E){const N=x[E.type];let V;if(N){const O=$i[N];V=US.clone(O.uniforms)}else V=E.uniforms;return V}function b(E,N){let V=g.get(N);return V!==void 0?++V.usedTimes:(V=new pT(s,N,E,o),f.push(V),g.set(N,V)),V}function U(E){if(--E.usedTimes===0){const N=f.indexOf(E);f[N]=f[f.length-1],f.pop(),g.delete(E.cacheKey),E.destroy()}}function P(E){h.remove(E)}function D(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:C,acquireProgram:b,releaseProgram:U,releaseShaderCache:P,programs:f,dispose:D}}function yT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function o(c,h,d){s.get(c)[h]=d}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function ST(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function O0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function k0(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function h(m,x,M,A,y,S){let w=s[e];return w===void 0?(w={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:A,renderOrder:m.renderOrder,z:y,group:S},s[e]=w):(w.id=m.id,w.object=m,w.geometry=x,w.material=M,w.materialVariant=c(m),w.groupOrder=A,w.renderOrder=m.renderOrder,w.z=y,w.group=S),e++,w}function d(m,x,M,A,y,S){const w=h(m,x,M,A,y,S);M.transmission>0?i.push(w):M.transparent===!0?o.push(w):t.push(w)}function f(m,x,M,A,y,S){const w=h(m,x,M,A,y,S);M.transmission>0?i.unshift(w):M.transparent===!0?o.unshift(w):t.unshift(w)}function g(m,x){t.length>1&&t.sort(m||ST),i.length>1&&i.sort(x||O0),o.length>1&&o.sort(x||O0)}function _(){for(let m=e,x=s.length;m<x;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:d,unshift:f,finish:_,sort:g}}function MT(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new k0,s.set(i,[c])):o>=a.length?(c=new k0,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function ET(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ft};break;case"SpotLight":t={position:new z,direction:new z,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function wT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TT=0;function bT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AT(s){const e=new ET,t=wT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new z);const o=new z,a=new Pt,c=new Pt;function h(f){let g=0,_=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let x=0,M=0,A=0,y=0,S=0,w=0,C=0,b=0,U=0,P=0,D=0;f.sort(bT);for(let N=0,V=f.length;N<V;N++){const O=f[N],B=O.color,Q=O.intensity,se=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Is?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)g+=B.r*Q,_+=B.g*Q,m+=B.b*Q;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],Q);D++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Y=O.shadow,$=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.directionalShadow[x]=$,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=O.shadow.matrix,w++}i.directional[x]=K,x++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(B).multiplyScalar(Q),K.distance=se,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[A]=K;const Y=O.shadow;if(O.map&&(i.spotLightMap[U]=O.map,U++,Y.updateMatrices(O),O.castShadow&&P++),i.spotLightMatrix[A]=Y.matrix,O.castShadow){const $=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.spotShadow[A]=$,i.spotShadowMap[A]=W,b++}A++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(B).multiplyScalar(Q),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=K,y++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const Y=O.shadow,$=t.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,i.pointShadow[M]=$,i.pointShadowMap[M]=W,i.pointShadowMatrix[M]=O.shadow.matrix,C++}i.point[M]=K,M++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(Q),K.groundColor.copy(O.groundColor).multiplyScalar(Q),i.hemi[S]=K,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==x||E.pointLength!==M||E.spotLength!==A||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==w||E.numPointShadows!==C||E.numSpotShadows!==b||E.numSpotMaps!==U||E.numLightProbes!==D)&&(i.directional.length=x,i.spot.length=A,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,E.directionalLength=x,E.pointLength=M,E.spotLength=A,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=w,E.numPointShadows=C,E.numSpotShadows=b,E.numSpotMaps=U,E.numLightProbes=D,i.version=TT++)}function d(f,g){let _=0,m=0,x=0,M=0,A=0;const y=g.matrixWorldInverse;for(let S=0,w=f.length;S<w;S++){const C=f[S];if(C.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),_++}else if(C.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),x++}else if(C.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),c.identity(),a.copy(C.matrixWorld),a.premultiply(y),c.extractRotation(a),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),m++}else if(C.isHemisphereLight){const b=i.hemi[A];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(y),A++}}}return{setup:h,setupView:d,state:i}}function z0(s){const e=new AT(s),t=[],i=[],o=[];function a(m){_.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function h(m){i.push(m)}function d(m){o.push(m)}function f(){e.setup(t)}function g(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:_,setupLights:f,setupLightsView:g,pushLight:c,pushShadow:h,pushLightProbeGrid:d}}function CT(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let h;return c===void 0?(h=new z0(s),e.set(o,[h])):a>=c.length?(h=new z0(s),c.push(h)):h=c[a],h}function i(){e=new WeakMap}return{get:t,dispose:i}}const RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LT=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],DT=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],B0=new Pt,Oa=new z,Sd=new z;function NT(s,e,t){let i=new Of;const o=new De,a=new De,c=new un,h=new zS,d=new BS,f={},g=t.maxTextureSize,_={[os]:ri,[ri]:os,[ii]:ii},m=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:RT,fragmentShader:PT}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new tn;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qe(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let S=this.type;this.render=function(P,D,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===$0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const N=s.getRenderTarget(),V=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Er),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Q=S!==this.type;Q&&D.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(W=>W.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,W=P.length;se<W;se++){const K=P[se],Y=K.shadow;if(Y===void 0){nt("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const $=Y.getFrameExtents();o.multiply($),a.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/$.x),o.x=a.x*$.x,Y.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/$.y),o.y=a.y*$.y,Y.mapSize.y=a.y));const re=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=re,Y.map===null||Q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Va){if(K.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Qi(o.x,o.y,{format:Is,type:br,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new ko(o.x,o.y,ki),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=Ar,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ln,Y.map.depthTexture.magFilter=Ln}else K.isPointLight?(Y.map=new F_(o.x),Y.map.depthTexture=new nS(o.x,er)):(Y.map=new Qi(o.x,o.y),Y.map.depthTexture=new ko(o.x,o.y,er)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=Ar,this.type===Fc?(Y.map.depthTexture.compareFunction=re?If:Nf,Y.map.depthTexture.minFilter=Bn,Y.map.depthTexture.magFilter=Bn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ln,Y.map.depthTexture.magFilter=Ln);Y.camera.updateProjectionMatrix()}const ae=Y.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ae;k++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,k),s.clear();else{k===0&&(s.setRenderTarget(Y.map),s.clear());const ee=Y.getViewport(k);c.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),B.viewport(c)}if(K.isPointLight){const ee=Y.camera,Me=Y.matrix,Ue=K.distance||ee.far;Ue!==ee.far&&(ee.far=Ue,ee.updateProjectionMatrix()),Oa.setFromMatrixPosition(K.matrixWorld),ee.position.copy(Oa),Sd.copy(ee.position),Sd.add(LT[k]),ee.up.copy(DT[k]),ee.lookAt(Sd),ee.updateMatrixWorld(),Me.makeTranslation(-Oa.x,-Oa.y,-Oa.z),B0.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(B0,ee.coordinateSystem,ee.reversedDepth)}else Y.updateMatrices(K);i=Y.getFrustum(),b(D,E,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Va&&w(Y,E),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(N,V,O)};function w(P,D){const E=e.update(A);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qi(o.x,o.y,{format:Is,type:br})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,E,m,A,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,E,x,A,null)}function C(P,D,E,N){let V=null;const O=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)V=O;else if(V=E.isPointLight===!0?d:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const B=V.uuid,Q=D.uuid;let se=f[B];se===void 0&&(se={},f[B]=se);let W=se[Q];W===void 0&&(W=V.clone(),se[Q]=W,D.addEventListener("dispose",U)),V=W}if(V.visible=D.visible,V.wireframe=D.wireframe,N===Va?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:_[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const B=s.properties.get(V);B.light=E}return V}function b(P,D,E,N,V){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===Va)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),se=P.material;if(Array.isArray(se)){const W=Q.groups;for(let K=0,Y=W.length;K<Y;K++){const $=W[K],re=se[$.materialIndex];if(re&&re.visible){const ae=C(P,re,N,V);P.onBeforeShadow(s,P,D,E,Q,ae,$),s.renderBufferDirect(E,null,Q,ae,P,$),P.onAfterShadow(s,P,D,E,Q,ae,$)}}}else if(se.visible){const W=C(P,se,N,V);P.onBeforeShadow(s,P,D,E,Q,W,null),s.renderBufferDirect(E,null,Q,W,P,null),P.onAfterShadow(s,P,D,E,Q,W,null)}}const B=P.children;for(let Q=0,se=B.length;Q<se;Q++)b(B[Q],D,E,N,V)}function U(P){P.target.removeEventListener("dispose",U);for(const E in f){const N=f[E],V=P.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function IT(s,e){function t(){let G=!1;const Te=new un;let he=null;const ke=new un(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!G&&(s.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,ge,Ye,lt,Ht){Ht===!0&&(Ce*=lt,ge*=lt,Ye*=lt),Te.set(Ce,ge,Ye,lt),ke.equals(Te)===!1&&(s.clearColor(Ce,ge,Ye,lt),ke.copy(Te))},reset:function(){G=!1,he=null,ke.set(-1,0,0,0)}}}function i(){let G=!1,Te=!1,he=null,ke=null,Ce=null;return{setReversed:function(ge){if(Te!==ge){const Ye=e.get("EXT_clip_control");ge?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;const lt=Ce;Ce=null,this.setClear(lt)}},getReversed:function(){return Te},setTest:function(ge){ge?de(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ge){he!==ge&&!G&&(s.depthMask(ge),he=ge)},setFunc:function(ge){if(Te&&(ge=Ay[ge]),ke!==ge){switch(ge){case bd:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Cd:s.depthFunc(s.LESS);break;case Fo:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Ld:s.depthFunc(s.GREATER);break;case Dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=ge}},setLocked:function(ge){G=ge},setClear:function(ge){Ce!==ge&&(Ce=ge,Te&&(ge=1-ge),s.clearDepth(ge))},reset:function(){G=!1,he=null,ke=null,Ce=null,Te=!1}}}function o(){let G=!1,Te=null,he=null,ke=null,Ce=null,ge=null,Ye=null,lt=null,Ht=null;return{setTest:function(Dt){G||(Dt?de(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!G&&(s.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,Hn,gi){(he!==Dt||ke!==Hn||Ce!==gi)&&(s.stencilFunc(Dt,Hn,gi),he=Dt,ke=Hn,Ce=gi)},setOp:function(Dt,Hn,gi){(ge!==Dt||Ye!==Hn||lt!==gi)&&(s.stencilOp(Dt,Hn,gi),ge=Dt,Ye=Hn,lt=gi)},setLocked:function(Dt){G=Dt},setClear:function(Dt){Ht!==Dt&&(s.clearStencil(Dt),Ht=Dt)},reset:function(){G=!1,Te=null,he=null,ke=null,Ce=null,ge=null,Ye=null,lt=null,Ht=null}}}const a=new t,c=new i,h=new o,d=new WeakMap,f=new WeakMap;let g={},_={},m={},x=new WeakMap,M=[],A=null,y=!1,S=null,w=null,C=null,b=null,U=null,P=null,D=null,E=new ft(0,0,0),N=0,V=!1,O=null,B=null,Q=null,se=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(re)[1]),Y=$>=1):re.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Y=$>=2);let ae=null,k={};const ee=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Ue=new un().fromArray(ee),Ne=new un().fromArray(Me);function le(G,Te,he,ke){const Ce=new Uint8Array(4),ge=s.createTexture();s.bindTexture(G,ge),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<he;Ye++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Te+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return ge}const ve={};ve[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),de(s.DEPTH_TEST),c.setFunc(Fo),nn(!1),Gt(bg),de(s.CULL_FACE),zt(Er);function de(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Re(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Xe(G,Te){return m[G]!==Te?(s.bindFramebuffer(G,Te),m[G]=Te,G===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Te),G===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function He(G,Te){let he=M,ke=!1;if(G){he=x.get(Te),he===void 0&&(he=[],x.set(Te,he));const Ce=G.textures;if(he.length!==Ce.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ye=Ce.length;ge<Ye;ge++)he[ge]=s.COLOR_ATTACHMENT0+ge;he.length=Ce.length,ke=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,ke=!0);ke&&s.drawBuffers(he)}function Et(G){return A!==G?(s.useProgram(G),A=G,!0):!1}const ht={[As]:s.FUNC_ADD,[Kx]:s.FUNC_SUBTRACT,[Zx]:s.FUNC_REVERSE_SUBTRACT};ht[Jx]=s.MIN,ht[Qx]=s.MAX;const Lt={[ey]:s.ZERO,[ty]:s.ONE,[ny]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[ly]:s.SRC_ALPHA_SATURATE,[oy]:s.DST_COLOR,[ry]:s.DST_ALPHA,[iy]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[ay]:s.ONE_MINUS_DST_COLOR,[sy]:s.ONE_MINUS_DST_ALPHA,[cy]:s.CONSTANT_COLOR,[uy]:s.ONE_MINUS_CONSTANT_COLOR,[hy]:s.CONSTANT_ALPHA,[dy]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(G,Te,he,ke,Ce,ge,Ye,lt,Ht,Dt){if(G===Er){y===!0&&(Re(s.BLEND),y=!1);return}if(y===!1&&(de(s.BLEND),y=!0),G!==$x){if(G!==S||Dt!==V){if((w!==As||U!==As)&&(s.blendEquation(s.FUNC_ADD),w=As,U=As),Dt)switch(G){case No:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ag:s.blendFunc(s.ONE,s.ONE);break;case Cg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",G);break}else switch(G){case No:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ag:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cg:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rg:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",G);break}C=null,b=null,P=null,D=null,E.set(0,0,0),N=0,S=G,V=Dt}return}Ce=Ce||Te,ge=ge||he,Ye=Ye||ke,(Te!==w||Ce!==U)&&(s.blendEquationSeparate(ht[Te],ht[Ce]),w=Te,U=Ce),(he!==C||ke!==b||ge!==P||Ye!==D)&&(s.blendFuncSeparate(Lt[he],Lt[ke],Lt[ge],Lt[Ye]),C=he,b=ke,P=ge,D=Ye),(lt.equals(E)===!1||Ht!==N)&&(s.blendColor(lt.r,lt.g,lt.b,Ht),E.copy(lt),N=Ht),S=G,V=!1}function mt(G,Te){G.side===ii?Re(s.CULL_FACE):de(s.CULL_FACE);let he=G.side===ri;Te&&(he=!he),nn(he),G.blending===No&&G.transparent===!1?zt(Er):zt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const ke=G.stencilWrite;h.setTest(ke),ke&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),X(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function nn(G){O!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),O=G)}function Gt(G){G!==Yx?(de(s.CULL_FACE),G!==B&&(G===bg?s.cullFace(s.BACK):G===qx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),B=G}function An(G){G!==Q&&(Y&&s.lineWidth(G),Q=G)}function X(G,Te,he){G?(de(s.POLYGON_OFFSET_FILL),(se!==Te||W!==he)&&(se=Te,W=he,c.getReversed()&&(Te=-Te),s.polygonOffset(Te,he))):Re(s.POLYGON_OFFSET_FILL)}function Wt(G){G?de(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function gt(G){G===void 0&&(G=s.TEXTURE0+K-1),ae!==G&&(s.activeTexture(G),ae=G)}function Ut(G,Te,he){he===void 0&&(ae===null?he=s.TEXTURE0+K-1:he=ae);let ke=k[he];ke===void 0&&(ke={type:void 0,texture:void 0},k[he]=ke),(ke.type!==G||ke.texture!==Te)&&(ae!==he&&(s.activeTexture(he),ae=he),s.bindTexture(G,Te||ve[G]),ke.type=G,ke.texture=Te)}function Ie(){const G=k[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function T(){try{s.texSubImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Z(){try{s.texSubImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Se(){try{s.texStorage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Le(){try{s.texStorage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function ue(){try{s.texImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function pe(){try{s.texImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Oe(G){return _[G]!==void 0?_[G]:s.getParameter(G)}function ze(G,Te){_[G]!==Te&&(s.pixelStorei(G,Te),_[G]=Te)}function be(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Ee(G){Ne.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ne.copy(G))}function it(G,Te){let he=f.get(Te);he===void 0&&(he=new WeakMap,f.set(Te,he));let ke=he.get(G);ke===void 0&&(ke=s.getUniformBlockIndex(Te,G.name),he.set(G,ke))}function at(G,Te){const ke=f.get(Te).get(G);d.get(Te)!==ke&&(s.uniformBlockBinding(Te,ke,G.__bindingPointIndex),d.set(Te,ke))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},ae=null,k={},m={},x=new WeakMap,M=[],A=null,y=!1,S=null,w=null,C=null,b=null,U=null,P=null,D=null,E=new ft(0,0,0),N=0,V=!1,O=null,B=null,Q=null,se=null,W=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:de,disable:Re,bindFramebuffer:Xe,drawBuffers:He,useProgram:Et,setBlending:zt,setMaterial:mt,setFlipSided:nn,setCullFace:Gt,setLineWidth:An,setPolygonOffset:X,setScissorTest:Wt,activeTexture:gt,bindTexture:Ut,unbindTexture:Ie,compressedTexImage2D:Yt,compressedTexImage3D:I,texImage2D:ue,texImage3D:pe,pixelStorei:ze,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Se,texStorage3D:Le,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:be,viewport:Ee,reset:vt}}function UT(s,e,t,i,o,a,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new De,g=new WeakMap,_=new Set;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,T){return M?new OffscreenCanvas(I,T):qc("canvas")}function y(I,T,Z){let fe=1;const me=Yt(I);if((me.width>Z||me.height>Z)&&(fe=Z/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Se=Math.floor(fe*me.width),Le=Math.floor(fe*me.height);m===void 0&&(m=A(Se,Le));const ue=T?A(Se,Le):m;return ue.width=Se,ue.height=Le,ue.getContext("2d").drawImage(I,0,0,Se,Le),nt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Se+"x"+Le+")."),ue}else return"data"in I&&nt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function S(I){return I.generateMipmaps}function w(I){s.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,T,Z,fe,me,Se=!1){if(I!==null){if(s[I]!==void 0)return s[I];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;fe&&(Le=e.get("EXT_texture_norm16"),Le||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=T;if(T===s.RED&&(Z===s.FLOAT&&(ue=s.R32F),Z===s.HALF_FLOAT&&(ue=s.R16F),Z===s.UNSIGNED_BYTE&&(ue=s.R8),Z===s.UNSIGNED_SHORT&&Le&&(ue=Le.R16_EXT),Z===s.SHORT&&Le&&(ue=Le.R16_SNORM_EXT)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.R8UI),Z===s.UNSIGNED_SHORT&&(ue=s.R16UI),Z===s.UNSIGNED_INT&&(ue=s.R32UI),Z===s.BYTE&&(ue=s.R8I),Z===s.SHORT&&(ue=s.R16I),Z===s.INT&&(ue=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(ue=s.RG32F),Z===s.HALF_FLOAT&&(ue=s.RG16F),Z===s.UNSIGNED_BYTE&&(ue=s.RG8),Z===s.UNSIGNED_SHORT&&Le&&(ue=Le.RG16_EXT),Z===s.SHORT&&Le&&(ue=Le.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RG16UI),Z===s.UNSIGNED_INT&&(ue=s.RG32UI),Z===s.BYTE&&(ue=s.RG8I),Z===s.SHORT&&(ue=s.RG16I),Z===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),Z===s.UNSIGNED_INT&&(ue=s.RGB32UI),Z===s.BYTE&&(ue=s.RGB8I),Z===s.SHORT&&(ue=s.RGB16I),Z===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ue=s.RGBA32UI),Z===s.BYTE&&(ue=s.RGBA8I),Z===s.SHORT&&(ue=s.RGBA16I),Z===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&(Z===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGB16_EXT),Z===s.SHORT&&Le&&(ue=Le.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),T===s.RGBA){const pe=Se?Yc:bt.getTransfer(me);Z===s.FLOAT&&(ue=s.RGBA32F),Z===s.HALF_FLOAT&&(ue=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ue=pe===kt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGBA16_EXT),Z===s.SHORT&&Le&&(ue=Le.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function U(I,T){let Z;return I?T===null||T===er||T===$a?Z=s.DEPTH24_STENCIL8:T===ki?Z=s.DEPTH32F_STENCIL8:T===qa&&(Z=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===$a?Z=s.DEPTH_COMPONENT24:T===ki?Z=s.DEPTH_COMPONENT32F:T===qa&&(Z=s.DEPTH_COMPONENT16),Z}function P(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){const T=I.target;T.removeEventListener("dispose",D),N(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(I){const T=I.target;T.removeEventListener("dispose",E),O(T)}function N(I){const T=i.get(I);if(T.__webglInit===void 0)return;const Z=I.source,fe=x.get(Z);if(fe){const me=fe[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&V(I),Object.keys(fe).length===0&&x.delete(Z)}i.remove(I)}function V(I){const T=i.get(I);s.deleteTexture(T.__webglTexture);const Z=I.source,fe=x.get(Z);delete fe[T.__cacheKey],c.memory.textures--}function O(I){const T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let me=0;me<T.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=I.textures;for(let fe=0,me=Z.length;fe<me;fe++){const Se=i.get(Z[fe]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),c.memory.textures--),i.remove(Z[fe])}i.remove(I)}let B=0;function Q(){B=0}function se(){return B}function W(I){B=I}function K(){const I=B;return I>=o.maxTextures&&nt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),B+=1,I}function Y(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function $(I,T){const Z=i.get(I);if(I.isVideoTexture&&Ut(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const fe=I.image;if(fe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Z,I,T);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function re(I,T){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Re(Z,I,T);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ae(I,T){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Re(Z,I,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function k(I,T){const Z=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){Xe(Z,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const ee={[Gc]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},Me={[Ln]:s.NEAREST,[my]:s.NEAREST_MIPMAP_NEAREST,[sc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Vh]:s.LINEAR_MIPMAP_NEAREST,[Ls]:s.LINEAR_MIPMAP_LINEAR},Ue={[vy]:s.NEVER,[Ey]:s.ALWAYS,[xy]:s.LESS,[Nf]:s.LEQUAL,[yy]:s.EQUAL,[If]:s.GEQUAL,[Sy]:s.GREATER,[My]:s.NOTEQUAL};function Ne(I,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Vh||T.magFilter===sc||T.magFilter===Ls||T.minFilter===Bn||T.minFilter===Vh||T.minFilter===sc||T.minFilter===Ls)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ee[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ee[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ee[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Me[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ln||T.minFilter!==sc&&T.minFilter!==Ls||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function le(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D));const fe=T.source;let me=x.get(fe);me===void 0&&(me={},x.set(fe,me));const Se=Y(T);if(Se!==I.__cacheKey){me[Se]===void 0&&(me[Se]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),me[Se].usedTimes++;const Le=me[I.__cacheKey];Le!==void 0&&(me[I.__cacheKey].usedTimes--,Le.usedTimes===0&&V(T)),I.__cacheKey=Se,I.__webglTexture=me[Se].texture}return Z}function ve(I,T,Z){return Math.floor(Math.floor(I/Z)/T)}function de(I,T,Z,fe){const Se=I.updateRanges;if(Se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,Z,fe,T.data);else{Se.sort((ze,be)=>ze.start-be.start);let Le=0;for(let ze=1;ze<Se.length;ze++){const be=Se[Le],Ee=Se[ze],it=be.start+be.count,at=ve(Ee.start,T.width,4),vt=ve(be.start,T.width,4);Ee.start<=it+1&&at===vt&&ve(Ee.start+Ee.count-1,T.width,4)===at?be.count=Math.max(be.count,Ee.start+Ee.count-be.start):(++Le,Se[Le]=Ee)}Se.length=Le+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let ze=0,be=Se.length;ze<be;ze++){const Ee=Se[ze],it=Math.floor(Ee.start/4),at=Math.ceil(Ee.count/4),vt=it%T.width,G=Math.floor(it/T.width),Te=at,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,vt,G,Te,he,Z,fe,T.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function Re(I,T,Z){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const me=le(I,T),Se=T.source;t.bindTexture(fe,I.__webglTexture,s.TEXTURE0+Z);const Le=i.get(Se);if(Se.version!==Le.__version||me===!0){if(t.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const he=bt.getPrimaries(bt.workingColorSpace),ke=T.colorSpace===rs?null:bt.getPrimaries(T.colorSpace),Ce=T.colorSpace===rs||he===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let pe=y(T.image,!1,o.maxTextureSize);pe=Ie(T,pe);const Oe=a.convert(T.format,T.colorSpace),ze=a.convert(T.type);let be=b(T.internalFormat,Oe,ze,T.normalized,T.colorSpace,T.isVideoTexture);Ne(fe,T);let Ee;const it=T.mipmaps,at=T.isVideoTexture!==!0,vt=Le.__version===void 0||me===!0,G=Se.dataReady,Te=P(T,pe);if(T.isDepthTexture)be=U(T.format===Ds,T.type),vt&&(at?t.texStorage2D(s.TEXTURE_2D,1,be,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Oe,ze,null));else if(T.isDataTexture)if(it.length>0){at&&vt&&t.texStorage2D(s.TEXTURE_2D,Te,be,it[0].width,it[0].height);for(let he=0,ke=it.length;he<ke;he++)Ee=it[he],at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Oe,ze,Ee.data):t.texImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,Oe,ze,Ee.data);T.generateMipmaps=!1}else at?(vt&&t.texStorage2D(s.TEXTURE_2D,Te,be,pe.width,pe.height),G&&de(T,pe,Oe,ze)):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Oe,ze,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,it[0].width,it[0].height,pe.depth);for(let he=0,ke=it.length;he<ke;he++)if(Ee=it[he],T.format!==zi)if(Oe!==null)if(at){if(G)if(T.layerUpdates.size>0){const Ce=_0(Ee.width,Ee.height,T.format,T.type);for(const ge of T.layerUpdates){const Ye=Ee.data.subarray(ge*Ce/Ee.data.BYTES_PER_ELEMENT,(ge+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ge,Ee.width,Ee.height,1,Oe,Ye)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,pe.depth,Oe,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,be,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,pe.depth,Oe,ze,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,be,Ee.width,Ee.height,pe.depth,0,Oe,ze,Ee.data)}else{at&&vt&&t.texStorage2D(s.TEXTURE_2D,Te,be,it[0].width,it[0].height);for(let he=0,ke=it.length;he<ke;he++)Ee=it[he],T.format!==zi?Oe!==null?at?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Oe,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,Ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Oe,ze,Ee.data):t.texImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,Oe,ze,Ee.data)}else if(T.isDataArrayTexture)if(at){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,pe.width,pe.height,pe.depth),G)if(T.layerUpdates.size>0){const he=_0(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const Ce=pe.data.subarray(ke*he/pe.data.BYTES_PER_ELEMENT,(ke+1)*he/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,pe.width,pe.height,1,Oe,ze,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Oe,ze,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,pe.width,pe.height,pe.depth,0,Oe,ze,pe.data);else if(T.isData3DTexture)at?(vt&&t.texStorage3D(s.TEXTURE_3D,Te,be,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Oe,ze,pe.data)):t.texImage3D(s.TEXTURE_3D,0,be,pe.width,pe.height,pe.depth,0,Oe,ze,pe.data);else if(T.isFramebufferTexture){if(vt)if(at)t.texStorage2D(s.TEXTURE_2D,Te,be,pe.width,pe.height);else{let he=pe.width,ke=pe.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,be,he,ke,0,Oe,ze,null),he>>=1,ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),pe.parentNode!==he){he.appendChild(pe),_.add(T),he.onpaint=lt=>{const Ht=lt.changedElements;for(const Dt of _)Ht.includes(Dt.image)&&(Dt.needsUpdate=!0)},he.requestPaint();return}const ke=0,Ce=s.RGBA,ge=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ke,Ce,ge,Ye,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&vt){const he=Yt(it[0]);t.texStorage2D(s.TEXTURE_2D,Te,be,he.width,he.height)}for(let he=0,ke=it.length;he<ke;he++)Ee=it[he],at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Oe,ze,Ee):t.texImage2D(s.TEXTURE_2D,he,be,Oe,ze,Ee);T.generateMipmaps=!1}else if(at){if(vt){const he=Yt(pe);t.texStorage2D(s.TEXTURE_2D,Te,be,he.width,he.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,ze,pe)}else t.texImage2D(s.TEXTURE_2D,0,be,Oe,ze,pe);S(T)&&w(fe),Le.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Xe(I,T,Z){if(T.image.length!==6)return;const fe=le(I,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const Se=i.get(me);if(me.version!==Se.__version||fe===!0){t.activeTexture(s.TEXTURE0+Z);const Le=bt.getPrimaries(bt.workingColorSpace),ue=T.colorSpace===rs?null:bt.getPrimaries(T.colorSpace),pe=T.colorSpace===rs||Le===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,be=[];for(let ge=0;ge<6;ge++)!Oe&&!ze?be[ge]=y(T.image[ge],!0,o.maxCubemapSize):be[ge]=ze?T.image[ge].image:T.image[ge],be[ge]=Ie(T,be[ge]);const Ee=be[0],it=a.convert(T.format,T.colorSpace),at=a.convert(T.type),vt=b(T.internalFormat,it,at,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,Te=Se.__version===void 0||fe===!0,he=me.dataReady;let ke=P(T,Ee);Ne(s.TEXTURE_CUBE_MAP,T);let Ce;if(Oe){G&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,Ee.width,Ee.height);for(let ge=0;ge<6;ge++){Ce=be[ge].mipmaps;for(let Ye=0;Ye<Ce.length;Ye++){const lt=Ce[Ye];T.format!==zi?it!==null?G?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,lt.width,lt.height,it,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,vt,lt.width,lt.height,0,lt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,lt.width,lt.height,it,at,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,vt,lt.width,lt.height,0,it,at,lt.data)}}}else{if(Ce=T.mipmaps,G&&Te){Ce.length>0&&ke++;const ge=Yt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ze){G?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,be[ge].width,be[ge].height,it,at,be[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,vt,be[ge].width,be[ge].height,0,it,at,be[ge].data);for(let Ye=0;Ye<Ce.length;Ye++){const Ht=Ce[Ye].image[ge].image;G?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,Ht.width,Ht.height,it,at,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,vt,Ht.width,Ht.height,0,it,at,Ht.data)}}else{G?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,at,be[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,vt,it,at,be[ge]);for(let Ye=0;Ye<Ce.length;Ye++){const lt=Ce[Ye];G?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,it,at,lt.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,vt,it,at,lt.image[ge])}}}S(T)&&w(s.TEXTURE_CUBE_MAP),Se.__version=me.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function He(I,T,Z,fe,me,Se){const Le=a.convert(Z.format,Z.colorSpace),ue=a.convert(Z.type),pe=b(Z.internalFormat,Le,ue,Z.normalized,Z.colorSpace),Oe=i.get(T),ze=i.get(Z);if(ze.__renderTarget=T,!Oe.__hasExternalTextures){const be=Math.max(1,T.width>>Se),Ee=Math.max(1,T.height>>Se);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Se,pe,be,Ee,T.depth,0,Le,ue,null):t.texImage2D(me,Se,pe,be,Ee,0,Le,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,ze.__webglTexture,0,Wt(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,ze.__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(I,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const fe=T.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,Se=U(T.stencilBuffer,me),Le=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),Se,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),Se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,I)}else{const fe=T.textures;for(let me=0;me<fe.length;me++){const Se=fe[me],Le=a.convert(Se.format,Se.colorSpace),ue=a.convert(Se.type),pe=b(Se.internalFormat,Le,ue,Se.normalized,Se.colorSpace);gt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),pe,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(I,T,Z){const fe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",D)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,T.depthTexture);const Oe=a.convert(T.depthTexture.format),ze=a.convert(T.depthTexture.type);let be;T.depthTexture.format===Ar?be=s.DEPTH_COMPONENT24:T.depthTexture.format===Ds&&(be=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,T.width,T.height,0,Oe,ze,null)}}else $(T.depthTexture,0);const Se=me.__webglTexture,Le=Wt(T),ue=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,pe=T.depthTexture.format===Ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ar)gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Se,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Se,0);else if(T.depthTexture.format===Ds)gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Se,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Se,0);else throw new Error("Unknown depthTexture format")}function Lt(I){const T=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const fe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=fe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let fe=0;fe<6;fe++)ht(T.__webglFramebuffer[fe],I,fe);else{const fe=I.texture.mipmaps;fe&&fe.length>0?ht(T.__webglFramebuffer[0],I,0):ht(T.__webglFramebuffer,I,0)}else if(Z){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),Et(T.__webglDepthbuffer[fe],I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Se)}}else{const fe=I.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Et(T.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(I,T,Z){const fe=i.get(I);T!==void 0&&He(fe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Lt(I)}function mt(I){const T=I.texture,Z=i.get(I),fe=i.get(T);I.addEventListener("dispose",E);const me=I.textures,Se=I.isWebGLCubeRenderTarget===!0,Le=me.length>1;if(Le||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,c.memory.textures++),Se){Z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[ue]=[];for(let pe=0;pe<T.mipmaps.length;pe++)Z.__webglFramebuffer[ue][pe]=s.createFramebuffer()}else Z.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)Z.__webglFramebuffer[ue]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ue=0,pe=me.length;ue<pe;ue++){const Oe=i.get(me[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&gt(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ue=0;ue<me.length;ue++){const pe=me[ue];Z.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ue]);const Oe=a.convert(pe.format,pe.colorSpace),ze=a.convert(pe.type),be=b(pe.internalFormat,Oe,ze,pe.normalized,pe.colorSpace,I.isXRRenderTarget===!0),Ee=Wt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,be,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Se){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)He(Z.__webglFramebuffer[ue][pe],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else He(Z.__webglFramebuffer[ue],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(T)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ue=0,pe=me.length;ue<pe;ue++){const Oe=me[ue],ze=i.get(Oe);let be=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,ze.__webglTexture),Ne(be,Oe),He(Z.__webglFramebuffer,I,Oe,s.COLOR_ATTACHMENT0+ue,be,0),S(Oe)&&w(be)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,fe.__webglTexture),Ne(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)He(Z.__webglFramebuffer[pe],I,T,s.COLOR_ATTACHMENT0,ue,pe);else He(Z.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,ue,0);S(T)&&w(ue),t.unbindTexture()}I.depthBuffer&&Lt(I)}function nn(I){const T=I.textures;for(let Z=0,fe=T.length;Z<fe;Z++){const me=T[Z];if(S(me)){const Se=C(I),Le=i.get(me).__webglTexture;t.bindTexture(Se,Le),w(Se),t.unbindTexture()}}}const Gt=[],An=[];function X(I){if(I.samples>0){if(gt(I)===!1){const T=I.textures,Z=I.width,fe=I.height;let me=s.COLOR_BUFFER_BIT;const Se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=i.get(I),ue=T.length>1;if(ue)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const pe=I.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const ze=i.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,me,s.NEAREST),d===!0&&(Gt.length=0,An.length=0,Gt.push(s.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Gt.push(Se),An.push(Se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,An)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const ze=i.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(I){return Math.min(o.maxSamples,I.samples)}function gt(I){const T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(I){const T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Ie(I,T){const Z=I.colorSpace,fe=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==jc&&Z!==rs&&(bt.getTransfer(Z)===kt?(fe!==zi||me!==fi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Z)),T}function Yt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=Q,this.getTextureUnits=se,this.setTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FT(s,e){function t(i,o=rs){let a;const c=bt.getTransfer(o);if(i===fi)return s.UNSIGNED_BYTE;if(i===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(i===o_)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===r_)return s.BYTE;if(i===s_)return s.SHORT;if(i===qa)return s.UNSIGNED_SHORT;if(i===bf)return s.INT;if(i===er)return s.UNSIGNED_INT;if(i===ki)return s.FLOAT;if(i===br)return s.HALF_FLOAT;if(i===l_)return s.ALPHA;if(i===c_)return s.RGB;if(i===zi)return s.RGBA;if(i===Ar)return s.DEPTH_COMPONENT;if(i===Ds)return s.DEPTH_STENCIL;if(i===Rf)return s.RED;if(i===Pf)return s.RED_INTEGER;if(i===Is)return s.RG;if(i===Lf)return s.RG_INTEGER;if(i===Df)return s.RGBA_INTEGER;if(i===Oc||i===kc||i===zc||i===Bc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Ud||i===Fd||i===Od)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===zd||i===Bd||i===Vd||i===Hd||i===Wc||i===Gd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kd||i===zd)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vd)return a.COMPRESSED_R11_EAC;if(i===Hd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return a.COMPRESSED_RG11_EAC;if(i===Gd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wd||i===Xd||i===jd||i===Yd||i===qd||i===$d||i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ef)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sf||i===of||i===af)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===sf)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===af)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lf||i===cf||i===Xc||i===uf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const OT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new S_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nr({vertexShader:OT,fragmentShader:kT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new el(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BT extends as{constructor(e,t){super();const i=this;let o=null,a=1,c=null,h="local-floor",d=1,f=null,g=null,_=null,m=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",y=new zT,S={},w=t.getContextAttributes();let C=null,b=null;const U=[],P=[],D=new De;let E=null;const N=new di;N.viewport=new un;const V=new di;V.viewport=new un;const O=[N,V],B=new YS;let Q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ve=U[le];return ve===void 0&&(ve=new qh,U[le]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(le){let ve=U[le];return ve===void 0&&(ve=new qh,U[le]=ve),ve.getGripSpace()},this.getHand=function(le){let ve=U[le];return ve===void 0&&(ve=new qh,U[le]=ve),ve.getHandSpace()};function W(le){const ve=P.indexOf(le.inputSource);if(ve===-1)return;const de=U[ve];de!==void 0&&(de.update(le.inputSource,le.frame,f||c),de.dispatchEvent({type:le.type,data:le.inputSource}))}function K(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Y);for(let le=0;le<U.length;le++){const ve=P[le];ve!==null&&(P[le]=null,U[le].disconnect(ve))}Q=null,se=null,y.reset();for(const le in S)delete S[le];e.setRenderTarget(C),x=null,m=null,_=null,o=null,b=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){h=le,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Y),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Re=null,Xe=null;w.depth&&(Xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?Ds:Ar,Re=w.stencil?$a:er);const He={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(He),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Qi(m.textureWidth,m.textureHeight,{format:zi,type:fi,depthTexture:new ko(m.textureWidth,m.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Qi(x.framebufferWidth,x.framebufferHeight,{format:zi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await o.requestReferenceSpace(h),Ne.setContext(o),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(le){for(let ve=0;ve<le.removed.length;ve++){const de=le.removed[ve],Re=P.indexOf(de);Re>=0&&(P[Re]=null,U[Re].disconnect(de))}for(let ve=0;ve<le.added.length;ve++){const de=le.added[ve];let Re=P.indexOf(de);if(Re===-1){for(let He=0;He<U.length;He++)if(He>=P.length){P.push(de),Re=He;break}else if(P[He]===null){P[He]=de,Re=He;break}if(Re===-1)break}const Xe=U[Re];Xe&&Xe.connect(de)}}const $=new z,re=new z;function ae(le,ve,de){$.setFromMatrixPosition(ve.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const Re=$.distanceTo(re),Xe=ve.projectionMatrix.elements,He=de.projectionMatrix.elements,Et=Xe[14]/(Xe[10]-1),ht=Xe[14]/(Xe[10]+1),Lt=(Xe[9]+1)/Xe[5],zt=(Xe[9]-1)/Xe[5],mt=(Xe[8]-1)/Xe[0],nn=(He[8]+1)/He[0],Gt=Et*mt,An=Et*nn,X=Re/(-mt+nn),Wt=X*-mt;if(ve.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Wt),le.translateZ(X),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Xe[10]===-1)le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const gt=Et+X,Ut=ht+X,Ie=Gt-Wt,Yt=An+(Re-Wt),I=Lt*ht/Ut*gt,T=zt*ht/Ut*gt;le.projectionMatrix.makePerspective(Ie,Yt,I,T,gt,Ut),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function k(le,ve){ve===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ve.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let ve=le.near,de=le.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(de=y.depthFar)),B.near=V.near=N.near=ve,B.far=V.far=N.far=de,(Q!==B.near||se!==B.far)&&(o.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,se=B.far),B.layers.mask=le.layers.mask|6,N.layers.mask=B.layers.mask&-5,V.layers.mask=B.layers.mask&-3;const Re=le.parent,Xe=B.cameras;k(B,Re);for(let He=0;He<Xe.length;He++)k(Xe[He],Re);Xe.length===2?ae(B,N,V):B.projectionMatrix.copy(N.projectionMatrix),ee(le,B,Re)};function ee(le,ve,de){de===null?le.matrix.copy(ve.matrixWorld):(le.matrix.copy(de.matrixWorld),le.matrix.invert(),le.matrix.multiply(ve.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=pf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(le){d=le,m!==null&&(m.fixedFoveation=le),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(le){return S[le]};let Me=null;function Ue(le,ve){if(g=ve.getViewerPose(f||c),M=ve,g!==null){const de=g.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let Re=!1;de.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let ht=0;ht<de.length;ht++){const Lt=de[ht];let zt=null;if(x!==null)zt=x.getViewport(Lt);else{const nn=_.getViewSubImage(m,Lt);zt=nn.viewport,ht===0&&(e.setRenderTargetTextures(b,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(b))}let mt=O[ht];mt===void 0&&(mt=new di,mt.layers.enable(ht),mt.viewport=new un,O[ht]=mt),mt.matrix.fromArray(Lt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Lt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(zt.x,zt.y,zt.width,zt.height),ht===0&&(B.matrix.copy(mt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(mt)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=i.getBinding();const ht=_.getDepthInformation(de[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(Xe&&Xe.includes("camera-access")&&A){e.state.unbindTexture(),_=i.getBinding();for(let ht=0;ht<de.length;ht++){const Lt=de[ht].camera;if(Lt){let zt=S[Lt];zt||(zt=new S_,S[Lt]=zt);const mt=_.getCameraImage(Lt);zt.sourceTexture=mt}}}}for(let de=0;de<U.length;de++){const Re=P[de],Xe=U[de];Re!==null&&Xe!==void 0&&Xe.update(Re,ve,f||c)}Me&&Me(le,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Ne=new I_;Ne.setAnimationLoop(Ue),this.setAnimationLoop=function(le){Me=le},this.dispose=function(){}}}const VT=new Pt,V_=new dt;V_.set(-1,0,0,0,1,0,0,0,1);function HT(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,L_(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,w,C,b){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),_(y,S)):S.isMeshPhongMaterial?(a(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,b)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),A(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?d(y,S,w,C):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ri&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ri&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),C=w.envMap,b=w.envMapRotation;C&&(y.envMap.value=C,y.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(V_),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,w,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=C*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ri&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function GT(s,e,t,i){let o={},a={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,C){const b=C.program;i.uniformBlockBinding(w,b)}function f(w,C){let b=o[w.id];b===void 0&&(M(w),b=g(w),o[w.id]=b,w.addEventListener("dispose",y));const U=C.program;i.updateUBOMapping(w,U);const P=e.render.frame;a[w.id]!==P&&(m(w),a[w.id]=P)}function g(w){const C=_();w.__bindingPointIndex=C;const b=s.createBuffer(),U=w.__size,P=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,U,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,b),b}function _(){for(let w=0;w<h;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const C=o[w.id],b=w.uniforms,U=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let P=0,D=b.length;P<D;P++){const E=Array.isArray(b[P])?b[P]:[b[P]];for(let N=0,V=E.length;N<V;N++){const O=E[N];if(x(O,P,N,U)===!0){const B=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let W=0;W<Q.length;W++){const K=Q[W],Y=A(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,B+se,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):ArrayBuffer.isView(K)?O.__data.set(new K.constructor(K.buffer,K.byteOffset,O.__data.length)):(K.toArray(O.__data,se),se+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(w,C,b,U){const P=w.value,D=C+"_"+b;if(U[D]===void 0)return typeof P=="number"||typeof P=="boolean"?U[D]=P:ArrayBuffer.isView(P)?U[D]=P.slice():U[D]=P.clone(),!0;{const E=U[D];if(typeof P=="number"||typeof P=="boolean"){if(E!==P)return U[D]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(E.equals(P)===!1)return E.copy(P),!0}}return!1}function M(w){const C=w.uniforms;let b=0;const U=16;for(let D=0,E=C.length;D<E;D++){const N=Array.isArray(C[D])?C[D]:[C[D]];for(let V=0,O=N.length;V<O;V++){const B=N[V],Q=Array.isArray(B.value)?B.value:[B.value];for(let se=0,W=Q.length;se<W;se++){const K=Q[se],Y=A(K),$=b%U,re=$%Y.boundary,ae=$+re;b+=re,ae!==0&&U-ae<Y.storage&&(b+=U-ae),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=Y.storage}}}const P=b%U;return P>0&&(b+=U-P),w.__size=b,w.__cache={},this}function A(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),C}function y(w){const C=w.target;C.removeEventListener("dispose",y);const b=c.indexOf(C.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function S(){for(const w in o)s.deleteBuffer(o[w]);c=[],o={},a={}}return{bind:d,update:f,dispose:S}}const WT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function XT(){return Yi===null&&(Yi=new __(WT,16,16,Is,br),Yi.name="DFG_LUT",Yi.minFilter=Bn,Yi.magFilter=Bn,Yi.wrapS=Mr,Yi.wrapT=Mr,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class jT{constructor(e={}){const{canvas:t=Ty(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=fi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const A=x,y=new Set([Df,Lf,Pf]),S=new Set([fi,er,qa,$a,Af,Cf]),w=new Uint32Array(4),C=new Int32Array(4),b=new z;let U=null,P=null;const D=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let O=!1,B=null;this._outputColorSpace=hi;let Q=0,se=0,W=null,K=-1,Y=null;const $=new un,re=new un;let ae=null;const k=new ft(0);let ee=0,Me=t.width,Ue=t.height,Ne=1,le=null,ve=null;const de=new un(0,0,Me,Ue),Re=new un(0,0,Me,Ue);let Xe=!1;const He=new Of;let Et=!1,ht=!1;const Lt=new Pt,zt=new z,mt=new un,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function An(){return W===null?Ne:1}let X=i;function Wt(L,q){return t.getContext(L,q)}try{const L={alpha:!0,depth:o,stencil:a,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",lt,!1),X===null){const q="webgl2";if(X=Wt(q,L),X===null)throw Wt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Tt("WebGLRenderer: "+L.message),L}let gt,Ut,Ie,Yt,I,T,Z,fe,me,Se,Le,ue,pe,Oe,ze,be,Ee,it,at,vt,G,Te,he;function ke(){gt=new XE(X),gt.init(),G=new FT(X,gt),Ut=new OE(X,gt,e,G),Ie=new IT(X,gt),Ut.reversedDepthBuffer&&m&&Ie.buffers.depth.setReversed(!0),Yt=new qE(X),I=new yT,T=new UT(X,gt,Ie,I,Ut,G,Yt),Z=new WE(V),fe=new JS(X),Te=new UE(X,fe),me=new jE(X,fe,Yt,Te),Se=new KE(X,me,fe,Te,Yt),it=new $E(X,Ut,T),ze=new kE(I),Le=new xT(V,Z,gt,Ut,Te,ze),ue=new HT(V,I),pe=new MT,Oe=new CT(gt),Ee=new IE(V,Z,Ie,Se,M,d),be=new NT(V,Se,Ut),he=new GT(X,Yt,Ut,Ie),at=new FE(X,gt,Yt),vt=new YE(X,gt,Yt),Yt.programs=Le.programs,V.capabilities=Ut,V.extensions=gt,V.properties=I,V.renderLists=pe,V.shadowMap=be,V.state=Ie,V.info=Yt}ke(),A!==fi&&(N=new JE(A,t.width,t.height,o,a));const Ce=new BT(V,X);this.xr=Ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(L){L!==void 0&&(Ne=L,this.setSize(Me,Ue,!1))},this.getSize=function(L){return L.set(Me,Ue)},this.setSize=function(L,q,oe=!0){if(Ce.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=L,Ue=q,t.width=Math.floor(L*Ne),t.height=Math.floor(q*Ne),oe===!0&&(t.style.width=L+"px",t.style.height=q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(Me*Ne,Ue*Ne).floor()},this.setDrawingBufferSize=function(L,q,oe){Me=L,Ue=q,Ne=oe,t.width=Math.floor(L*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(A===fi){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy($)},this.getViewport=function(L){return L.copy(de)},this.setViewport=function(L,q,oe,ne){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,q,oe,ne),Ie.viewport($.copy(de).multiplyScalar(Ne).round())},this.getScissor=function(L){return L.copy(Re)},this.setScissor=function(L,q,oe,ne){L.isVector4?Re.set(L.x,L.y,L.z,L.w):Re.set(L,q,oe,ne),Ie.scissor(re.copy(Re).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(L){Ie.setScissorTest(Xe=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,oe=!0){let ne=0;if(L){let te=!1;if(W!==null){const Pe=W.texture.format;te=y.has(Pe)}if(te){const Pe=W.texture.type,Ge=S.has(Pe),Ae=Ee.getClearColor(),qe=Ee.getClearAlpha(),Je=Ae.r,ct=Ae.g,ut=Ae.b;Ge?(w[0]=Je,w[1]=ct,w[2]=ut,w[3]=qe,X.clearBufferuiv(X.COLOR,0,w)):(C[0]=Je,C[1]=ct,C[2]=ut,C[3]=qe,X.clearBufferiv(X.COLOR,0,C))}else ne|=X.COLOR_BUFFER_BIT}q&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),B=L},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),Ee.dispose(),pe.dispose(),Oe.dispose(),I.dispose(),Z.dispose(),Se.dispose(),Te.dispose(),he.dispose(),Le.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ls),Ce.removeEventListener("sessionend",zs),sr.stop()};function ge(L){L.preventDefault(),$c("WebGLRenderer: Context Lost."),O=!0}function Ye(){$c("WebGLRenderer: Context Restored."),O=!1;const L=Yt.autoReset,q=be.enabled,oe=be.autoUpdate,ne=be.needsUpdate,te=be.type;ke(),Yt.autoReset=L,be.enabled=q,be.autoUpdate=oe,be.needsUpdate=ne,be.type=te}function lt(L){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ht(L){const q=L.target;q.removeEventListener("dispose",Ht),Dt(q)}function Dt(L){Hn(L),I.remove(L)}function Hn(L){const q=I.get(L).programs;q!==void 0&&(q.forEach(function(oe){Le.releaseProgram(oe)}),L.isShaderMaterial&&Le.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,oe,ne,te,Pe){q===null&&(q=nn);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Ae=il(L,q,oe,ne,te);Ie.setMaterial(ne,Ge);let qe=oe.index,Je=1;if(ne.wireframe===!0){if(qe=me.getWireframeAttribute(oe),qe===void 0)return;Je=2}const ct=oe.drawRange,ut=oe.attributes.position;let Ke=ct.start*Je,At=(ct.start+ct.count)*Je;Pe!==null&&(Ke=Math.max(Ke,Pe.start*Je),At=Math.min(At,(Pe.start+Pe.count)*Je)),qe!==null?(Ke=Math.max(Ke,0),At=Math.min(At,qe.count)):ut!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,ut.count));const Xt=At-Ke;if(Xt<0||Xt===1/0)return;Te.setup(te,ne,Ae,oe,qe);let Qt,Ft=at;if(qe!==null&&(Qt=fe.get(qe),Ft=vt,Ft.setIndex(Qt)),te.isMesh)ne.wireframe===!0?(Ie.setLineWidth(ne.wireframeLinewidth*An()),Ft.setMode(X.LINES)):Ft.setMode(X.TRIANGLES);else if(te.isLine){let dn=ne.linewidth;dn===void 0&&(dn=1),Ie.setLineWidth(dn*An()),te.isLineSegments?Ft.setMode(X.LINES):te.isLineLoop?Ft.setMode(X.LINE_LOOP):Ft.setMode(X.LINE_STRIP)}else te.isPoints?Ft.setMode(X.POINTS):te.isSprite&&Ft.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const dn=te._multiDrawStarts,Be=te._multiDrawCounts,Cn=te._multiDrawCount,xt=qe?fe.get(qe).bytesPerElement:1,Yn=I.get(ne).currentProgram.getUniforms();for(let qn=0;qn<Cn;qn++)Yn.setValue(X,"_gl_DrawID",qn),Ft.render(dn[qn]/xt,Be[qn])}else if(te.isInstancedMesh)Ft.renderInstances(Ke,Xt,te.count);else if(oe.isInstancedBufferGeometry){const dn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,dn);Ft.renderInstances(Ke,Xt,Be)}else Ft.render(Ke,Xt)};function gi(L,q,oe){L.transparent===!0&&L.side===ii&&L.forceSinglePass===!1?(L.side=ri,L.needsUpdate=!0,Bs(L,q,oe),L.side=os,L.needsUpdate=!0,Bs(L,q,oe),L.side=ii):Bs(L,q,oe)}this.compile=function(L,q,oe=null){oe===null&&(oe=L),P=Oe.get(oe),P.init(q),E.push(P),oe.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),L!==oe&&L.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ne=new Set;return L.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Pe=te.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Ae=Pe[Ge];gi(Ae,oe,te),ne.add(Ae)}else gi(Pe,oe,te),ne.add(Pe)}),P=E.pop(),ne},this.compileAsync=function(L,q,oe=null){const ne=this.compile(L,q,oe);return new Promise(te=>{function Pe(){if(ne.forEach(function(Ge){I.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){te(L);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let rr=null;function ks(L){rr&&rr(L)}function ls(){sr.stop()}function zs(){sr.start()}const sr=new I_;sr.setAnimationLoop(ks),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(L){rr=L,Ce.setAnimationLoop(L),L===null?sr.stop():sr.start()},Ce.addEventListener("sessionstart",ls),Ce.addEventListener("sessionend",zs),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(L,q);const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ne=N!==null&&(W===null||oe)&&N.begin(V,W);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),L.isScene===!0&&L.onBeforeRender(V,L,q,W),P=Oe.get(L,E.length),P.init(q),P.state.textureUnits=T.getTextureUnits(),E.push(P),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),He.setFromProjectionMatrix(Lt,Zi,q.reversedDepth),ht=this.localClippingEnabled,Et=ze.init(this.clippingPlanes,ht),U=pe.get(L,D.length),U.init(),D.push(U),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=V.xr.getDepthSensingMesh();Ge!==null&&Wo(Ge,q,-1/0,V.sortObjects)}Wo(L,q,0,V.sortObjects),U.finish(),V.sortObjects===!0&&U.sort(le,ve),Gt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Gt&&Ee.addToRenderList(U,L),this.info.render.frame++,Et===!0&&ze.beginShadows();const te=P.state.shadowsArray;if(be.render(te,L,q),Et===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&N.hasRenderPass())===!1){const Ge=U.opaque,Ae=U.transmissive;if(P.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Ae.length>0)for(let Je=0,ct=qe.length;Je<ct;Je++){const ut=qe[Je];Bi(Ge,Ae,L,ut)}Gt&&Ee.render(L);for(let Je=0,ct=qe.length;Je<ct;Je++){const ut=qe[Je];tl(U,L,ut,ut.viewport)}}else Ae.length>0&&Bi(Ge,Ae,L,q),Gt&&Ee.render(L),tl(U,L,q)}W!==null&&se===0&&(T.updateMultisampleRenderTarget(W),T.updateRenderTargetMipmap(W)),ne&&N.end(V),L.isScene===!0&&L.onAfterRender(V,L,q),Te.resetDefaultState(),K=-1,Y=null,E.pop(),E.length>0?(P=E[E.length-1],T.setTextureUnits(P.state.textureUnits),Et===!0&&ze.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?U=D[D.length-1]:U=null,B!==null&&B.renderEnd()};function Wo(L,q,oe,ne){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLightProbeGrid)P.pushLightProbeGrid(L);else if(L.isLight)P.pushLight(L),L.castShadow&&P.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||He.intersectsSprite(L)){ne&&mt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Lt);const Ge=Se.update(L),Ae=L.material;Ae.visible&&U.push(L,Ge,Ae,oe,mt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||He.intersectsObject(L))){const Ge=Se.update(L),Ae=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),mt.copy(L.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),mt.copy(Ge.boundingSphere.center)),mt.applyMatrix4(L.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ae)){const qe=Ge.groups;for(let Je=0,ct=qe.length;Je<ct;Je++){const ut=qe[Je],Ke=Ae[ut.materialIndex];Ke&&Ke.visible&&U.push(L,Ge,Ke,oe,mt.z,ut)}}else Ae.visible&&U.push(L,Ge,Ae,oe,mt.z,null)}}const Pe=L.children;for(let Ge=0,Ae=Pe.length;Ge<Ae;Ge++)Wo(Pe[Ge],q,oe,ne)}function tl(L,q,oe,ne){const{opaque:te,transmissive:Pe,transparent:Ge}=L;P.setupLightsView(oe),Et===!0&&ze.setGlobalState(V.clippingPlanes,oe),ne&&Ie.viewport($.copy(ne)),te.length>0&&cs(te,q,oe),Pe.length>0&&cs(Pe,q,oe),Ge.length>0&&cs(Ge,q,oe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Bi(L,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Ke=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Qi(1,1,{generateMipmaps:!0,type:Ke?br:fi,minFilter:Ls,samples:Math.max(4,Ut.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Pe=P.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||$;Pe.setSize(Ge.z*V.transmissionResolutionScale,Ge.w*V.transmissionResolutionScale);const Ae=V.getRenderTarget(),qe=V.getActiveCubeFace(),Je=V.getActiveMipmapLevel();V.setRenderTarget(Pe),V.getClearColor(k),ee=V.getClearAlpha(),ee<1&&V.setClearColor(16777215,.5),V.clear(),Gt&&Ee.render(oe);const ct=V.toneMapping;V.toneMapping=Ji;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),Et===!0&&ze.setGlobalState(V.clippingPlanes,ne),cs(L,oe,ne),T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,Xt=q.length;At<Xt;At++){const Qt=q[At],{object:Ft,geometry:dn,material:Be,group:Cn}=Qt;if(Be.side===ii&&Ft.layers.test(ne.layers)){const xt=Be.side;Be.side=ri,Be.needsUpdate=!0,Xo(Ft,oe,ne,dn,Be,Cn),Be.side=xt,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe))}V.setRenderTarget(Ae,qe,Je),V.setClearColor(k,ee),ut!==void 0&&(ne.viewport=ut),V.toneMapping=ct}function cs(L,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Pe=L.length;te<Pe;te++){const Ge=L[te],{object:Ae,geometry:qe,group:Je}=Ge;let ct=Ge.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Ae.layers.test(oe.layers)&&Xo(Ae,q,oe,qe,ct,Je)}}function Xo(L,q,oe,ne,te,Pe){L.onBeforeRender(V,q,oe,ne,te,Pe),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),te.onBeforeRender(V,q,oe,ne,L,Pe),te.transparent===!0&&te.side===ii&&te.forceSinglePass===!1?(te.side=ri,te.needsUpdate=!0,V.renderBufferDirect(oe,q,ne,te,L,Pe),te.side=os,te.needsUpdate=!0,V.renderBufferDirect(oe,q,ne,te,L,Pe),te.side=ii):V.renderBufferDirect(oe,q,ne,te,L,Pe),L.onAfterRender(V,q,oe,ne,te,Pe)}function Bs(L,q,oe){q.isScene!==!0&&(q=nn);const ne=I.get(L),te=P.state.lights,Pe=P.state.shadowsArray,Ge=te.state.version,Ae=Le.getParameters(L,te.state,Pe,q,oe,P.state.lightProbeGridArray),qe=Le.getProgramCacheKey(Ae);let Je=ne.programs;ne.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const ct=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ne.envMap=Z.get(L.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",Ht),Je=new Map,ne.programs=Je);let ut=Je.get(qe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Ge)return Yo(L,Ae),ut}else Ae.uniforms=Le.getUniforms(L),B!==null&&L.isNodeMaterial&&B.build(L,oe,Ae),L.onBeforeCompile(Ae,V),ut=Le.acquireProgram(Ae,qe),Je.set(qe,ut),ne.uniforms=Ae.uniforms;const Ke=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ke.clippingPlanes=ze.uniform),Yo(L,Ae),ne.needsLights=ru(L),ne.lightsStateVersion=Ge,ne.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function jo(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=Hc.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Yo(L,q){const oe=I.get(L);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function nl(L,q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;b.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ne=L.length;oe<ne;oe++){const te=L[oe];if(te.texture!==null&&te.boundingBox.containsPoint(b))return te}return null}function il(L,q,oe,ne,te){q.isScene!==!0&&(q=nn),T.resetTextureUnits();const Pe=q.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ae=W===null?V.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=Z.get(ne.envMap||Ge,qe),ct=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,Xt=!!oe.morphAttributes.color;let Qt=Ji;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Qt=V.toneMapping);const Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dn=Ft!==void 0?Ft.length:0,Be=I.get(ne),Cn=P.state.lights;if(Et===!0&&(ht===!0||L!==Y)){const Ot=L===Y&&ne.id===K;ze.setState(ne,L,Ot)}let xt=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Cn.state.version||Be.outputColorSpace!==Ae||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==Je||ne.fog===!0&&Be.fog!==Pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ze.numPlanes||Be.numIntersection!==ze.numIntersection)||Be.vertexAlphas!==ct||Be.vertexTangents!==ut||Be.morphTargets!==Ke||Be.morphNormals!==At||Be.morphColors!==Xt||Be.toneMapping!==Qt||Be.morphTargetsCount!==dn||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Be.__version=ne.version);let Yn=Be.currentProgram;xt===!0&&(Yn=Bs(ne,q,te),B&&ne.isNodeMaterial&&B.onUpdateProgram(ne,Yn,Be));let qn=!1,St=!1,or=!1;const It=Yn.getUniforms(),qt=Be.uniforms;if(Ie.useProgram(Yn.program)&&(qn=!0,St=!0,or=!0),ne.id!==K&&(K=ne.id,St=!0),Be.needsLights){const Ot=nl(P.state.lightProbeGridArray,te);Be.lightProbeGrid!==Ot&&(Be.lightProbeGrid=Ot,St=!0)}if(qn||Y!==L){Ie.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),It.setValue(X,"projectionMatrix",L.projectionMatrix),It.setValue(X,"viewMatrix",L.matrixWorldInverse);const Ai=It.map.cameraPosition;Ai!==void 0&&Ai.setValue(X,zt.setFromMatrixPosition(L.matrixWorld)),Ut.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),Y!==L&&(Y=L,St=!0,or=!0)}if(Be.needsLights&&(Cn.state.directionalShadowMap.length>0&&It.setValue(X,"directionalShadowMap",Cn.state.directionalShadowMap,T),Cn.state.spotShadowMap.length>0&&It.setValue(X,"spotShadowMap",Cn.state.spotShadowMap,T),Cn.state.pointShadowMap.length>0&&It.setValue(X,"pointShadowMap",Cn.state.pointShadowMap,T)),te.isSkinnedMesh){It.setOptional(X,te,"bindMatrix"),It.setOptional(X,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),It.setValue(X,"boneTexture",Ot.boneTexture,T))}te.isBatchedMesh&&(It.setOptional(X,te,"batchingTexture"),It.setValue(X,"batchingTexture",te._matricesTexture,T),It.setOptional(X,te,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",te._indirectTexture,T),It.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",te._colorsTexture,T));const bi=oe.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&it.update(te,oe,Yn),(St||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,It.setValue(X,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(qt.envMapIntensity.value=q.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=XT()),St){if(It.setValue(X,"toneMappingExposure",V.toneMappingExposure),Be.needsLights&&iu(qt,or),Pe&&ne.fog===!0&&ue.refreshFogUniforms(qt,Pe),ue.refreshMaterialUniforms(qt,ne,Ne,Ue,P.state.transmissionRenderTarget[L.id]),Be.needsLights&&Be.lightProbeGrid){const Ot=Be.lightProbeGrid;qt.probesSH.value=Ot.texture,qt.probesMin.value.copy(Ot.boundingBox.min),qt.probesMax.value.copy(Ot.boundingBox.max),qt.probesResolution.value.copy(Ot.resolution)}Hc.upload(X,jo(Be),qt,T)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hc.upload(X,jo(Be),qt,T),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(X,"center",te.center),It.setValue(X,"modelViewMatrix",te.modelViewMatrix),It.setValue(X,"normalMatrix",te.normalMatrix),It.setValue(X,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ot=ne.uniformsGroups;for(let Ai=0,Vi=Ot.length;Ai<Vi;Ai++){const us=Ot[Ai];he.update(us,Yn),he.bind(us,Yn)}}return Yn}function iu(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function ru(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(L,q,oe){const ne=I.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),I.get(L.texture).__webglTexture=q,I.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){const oe=I.get(L);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const rn=X.createFramebuffer();this.setRenderTarget=function(L,q=0,oe=0){W=L,Q=q,se=oe;let ne=null,te=!1,Pe=!1;if(L){const Ae=I.get(L);if(Ae.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(X.FRAMEBUFFER,Ae.__webglFramebuffer),$.copy(L.viewport),re.copy(L.scissor),ae=L.scissorTest,Ie.viewport($),Ie.scissor(re),Ie.setScissorTest(ae),K=-1;return}else if(Ae.__webglFramebuffer===void 0)T.setupRenderTarget(L);else if(Ae.__hasExternalTextures)T.rebindTextures(L,I.get(L.texture).__webglTexture,I.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ct=L.depthTexture;if(Ae.__boundDepthTexture!==ct){if(ct!==null&&I.has(ct)&&(L.width!==ct.image.width||L.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(L)}}const qe=L.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Je=I.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][oe]:ne=Je[q],te=!0):L.samples>0&&T.useMultisampledRTT(L)===!1?ne=I.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[oe]:ne=Je,$.copy(L.viewport),re.copy(L.scissor),ae=L.scissorTest}else $.copy(de).multiplyScalar(Ne).floor(),re.copy(Re).multiplyScalar(Ne).floor(),ae=Xe;if(oe!==0&&(ne=rn),Ie.bindFramebuffer(X.FRAMEBUFFER,ne)&&Ie.drawBuffers(L,ne),Ie.viewport($),Ie.scissor(re),Ie.setScissorTest(ae),te){const Ae=I.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,oe)}else if(Pe){const Ae=q;for(let qe=0;qe<L.textures.length;qe++){const Je=I.get(L.textures[qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qe,Je.__webglTexture,oe,Ae)}}else if(L!==null&&oe!==0){const Ae=I.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ae.__webglTexture,oe)}K=-1},this.readRenderTargetPixels=function(L,q,oe,ne,te,Pe,Ge,Ae=0){if(!(L&&L.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=I.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Ie.bindFramebuffer(X.FRAMEBUFFER,qe);try{const Je=L.textures[Ae],ct=Je.format,ut=Je.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ae),!Ut.textureFormatReadable(ct)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(ut)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-te&&X.readPixels(q,oe,ne,te,G.convert(ct),G.convert(ut),Pe)}finally{const Je=W!==null?I.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,q,oe,ne,te,Pe,Ge,Ae=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=I.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if(q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-te){Ie.bindFramebuffer(X.FRAMEBUFFER,qe);const Je=L.textures[Ae],ct=Je.format,ut=Je.type;if(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ae),!Ut.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.bufferData(X.PIXEL_PACK_BUFFER,Pe.byteLength,X.STREAM_READ),X.readPixels(q,oe,ne,te,G.convert(ct),G.convert(ut),0);const At=W!==null?I.get(W).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,At);const Xt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await by(X,Xt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Pe),X.deleteBuffer(Ke),X.deleteSync(Xt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,oe=0){const ne=Math.pow(2,-oe),te=Math.floor(L.image.width*ne),Pe=Math.floor(L.image.height*ne),Ge=q!==null?q.x:0,Ae=q!==null?q.y:0;T.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Ge,Ae,te,Pe),Ie.unbindTexture()};const su=X.createFramebuffer(),qo=X.createFramebuffer();this.copyTextureToTexture=function(L,q,oe=null,ne=null,te=0,Pe=0){let Ge,Ae,qe,Je,ct,ut,Ke,At,Xt;const Qt=L.isCompressedTexture?L.mipmaps[Pe]:L.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ae=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,ct=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{const qt=Math.pow(2,-te);Ge=Math.floor(Qt.width*qt),Ae=Math.floor(Qt.height*qt),L.isDataArrayTexture?qe=Qt.depth:L.isData3DTexture?qe=Math.floor(Qt.depth*qt):qe=1,Je=0,ct=0,ut=0}ne!==null?(Ke=ne.x,At=ne.y,Xt=ne.z):(Ke=0,At=0,Xt=0);const Ft=G.convert(q.format),dn=G.convert(q.type);let Be;q.isData3DTexture?(T.setTexture3D(q,0),Be=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(T.setTexture2DArray(q,0),Be=X.TEXTURE_2D_ARRAY):(T.setTexture2D(q,0),Be=X.TEXTURE_2D),Ie.activeTexture(X.TEXTURE0),Ie.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),Ie.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ie.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const Cn=Ie.getParameter(X.UNPACK_ROW_LENGTH),xt=Ie.getParameter(X.UNPACK_IMAGE_HEIGHT),Yn=Ie.getParameter(X.UNPACK_SKIP_PIXELS),qn=Ie.getParameter(X.UNPACK_SKIP_ROWS),St=Ie.getParameter(X.UNPACK_SKIP_IMAGES);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,ct),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const or=L.isDataArrayTexture||L.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){const qt=I.get(L),bi=I.get(q),Ot=I.get(qt.__renderTarget),Ai=I.get(bi.__renderTarget);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Vi=0;Vi<qe;Vi++)or&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,I.get(L).__webglTexture,te,ut+Vi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,I.get(q).__webglTexture,Pe,Xt+Vi)),X.blitFramebuffer(Je,ct,Ge,Ae,Ke,At,Ge,Ae,X.DEPTH_BUFFER_BIT,X.NEAREST);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||L.isRenderTargetTexture||I.has(L)){const qt=I.get(L),bi=I.get(q);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,su),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,qo);for(let Ot=0;Ot<qe;Ot++)or?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.__webglTexture,te,ut+Ot):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,te),It?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bi.__webglTexture,Pe,Xt+Ot):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bi.__webglTexture,Pe),te!==0?X.blitFramebuffer(Je,ct,Ge,Ae,Ke,At,Ge,Ae,X.COLOR_BUFFER_BIT,X.NEAREST):It?X.copyTexSubImage3D(Be,Pe,Ke,At,Xt+Ot,Je,ct,Ge,Ae):X.copyTexSubImage2D(Be,Pe,Ke,At,Je,ct,Ge,Ae);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else It?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(Be,Pe,Ke,At,Xt,Ge,Ae,qe,Ft,dn,Qt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Be,Pe,Ke,At,Xt,Ge,Ae,qe,Ft,Qt.data):X.texSubImage3D(Be,Pe,Ke,At,Xt,Ge,Ae,qe,Ft,dn,Qt):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Pe,Ke,At,Ge,Ae,Ft,dn,Qt.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Pe,Ke,At,Qt.width,Qt.height,Ft,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Pe,Ke,At,Ge,Ae,Ft,dn,Qt);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,Cn),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,Yn),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,qn),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,St),Pe===0&&q.generateMipmaps&&X.generateMipmap(Be),Ie.unbindTexture()},this.initRenderTarget=function(L){I.get(L).__webglFramebuffer===void 0&&T.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?T.setTextureCube(L,0):L.isData3DTexture?T.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?T.setTexture2DArray(L,0):T.setTexture2D(L,0),Ie.unbindTexture()},this.resetState=function(){Q=0,se=0,W=null,Ie.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const V0={type:"change"},Yf={type:"start"},H_={type:"end"},Uc=new eu,H0=new ns,YT=Math.cos(70*Ry.DEG2RAD),_n=new z,ti=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Md=1e-6;class qT extends KS{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Do.ROTATE,MIDDLE:Do.DOLLY,RIGHT:Do.PAN},this.touches={ONE:Po.ROTATE,TWO:Po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new pi,this._lastTargetPosition=new z,this._quat=new pi().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new m0,this._sphericalDelta=new m0,this._scale=1,this._panOffset=new z,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new z,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KT.bind(this),this._onPointerDown=$T.bind(this),this._onPointerUp=ZT.bind(this),this._onContextMenu=rb.bind(this),this._onMouseWheel=eb.bind(this),this._onKeyDown=tb.bind(this),this._onTouchStart=nb.bind(this),this._onTouchMove=ib.bind(this),this._onMouseDown=JT.bind(this),this._onMouseMove=QT.bind(this),this._interceptControlDown=sb.bind(this),this._interceptControlUp=ob.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=Vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_n.copy(t).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=ti:i>Math.PI&&(i-=ti),o<-Math.PI?o+=ti:o>Math.PI&&(o-=ti),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),t.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=_n.length();c=this._clampDistance(h*this._scale);const d=h-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),c=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<YT?this.object.lookAt(this.target):(H0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(H0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Md||this._lastTargetPosition.distanceToSquared(this.target)>Md?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ti/60*this.autoRotateSpeed*e:ti/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_n.setFromMatrixColumn(t,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,t){this.screenSpacePanning===!0?_n.setFromMatrixColumn(t,1):(_n.setFromMatrixColumn(t,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;_n.copy(o).sub(this.target);let a=_n.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,h=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $T(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ZT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H_),this.state=Vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function JT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Do.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Vt.DOLLY;break;case Do.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}break;case Do.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Yf)}function QT(s){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function eb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(s.preventDefault(),this.dispatchEvent(Yf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(H_))}function tb(s){this.enabled!==!1&&this._handleKeyDown(s)}function nb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Vt.TOUCH_ROTATE;break;case Po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case Po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Vt.TOUCH_DOLLY_PAN;break;case Po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Yf)}function ib(s){switch(this._trackPointer(s),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Vt.NONE}}function rb(s){this.enabled!==!1&&s.preventDefault()}function sb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ob(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wa=10,ni=Math.PI*2,Qr=.5,ab={dawn:{hemiSky:15853814,hemiGround:14272174,hemi:1.25,sun:16766644,sunPower:2.1,elev:16,azim:95,glow:.9,exposure:1.05,cloud:16773610},morning:{hemiSky:15397880,hemiGround:14208438,hemi:1.3,sun:16773852,sunPower:2.6,elev:38,azim:120,glow:.1,exposure:1,cloud:16777215},midday:{hemiSky:15135223,hemiGround:14274490,hemi:1.35,sun:16775402,sunPower:2.9,elev:60,azim:170,glow:.04,exposure:.98,cloud:16777215},golden:{hemiSky:16049888,hemiGround:14073244,hemi:1.2,sun:16761996,sunPower:2.7,elev:20,azim:250,glow:.8,exposure:1.05,cloud:16773346},dusk:{hemiSky:15129842,hemiGround:13610644,hemi:1.2,sun:16755068,sunPower:2.2,elev:11,azim:262,glow:1.7,exposure:1.1,cloud:16769748},night:{hemiSky:7307472,hemiGround:2304586,hemi:.95,sun:12044031,sunPower:1,elev:44,azim:140,glow:2.6,exposure:.9,cloud:8161464}},rt=s=>{const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)},ka=(s,e,t)=>{const i=Math.min(1,Math.max(0,(t-s)/(e-s)));return i*i*(3-2*i)},qi=s=>Wa*(.9+.07*Math.sin(3*s+1)+.045*Math.sin(5*s+2.3)+.03*Math.sin(9*s+.4)),Zt=(s,e={})=>new Oi({color:s,roughness:.9,...e});function Ro(s){return s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),s}function lb(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new y_(s)}function cb(){const s=document.createElement("canvas");s.width=64,s.height=256;const e=s.getContext("2d");e.fillStyle="rgba(150,215,214,0.85)",e.fillRect(0,0,64,256);for(let i=0;i<46;i+=1)e.fillStyle=`rgba(255,255,255,${.25+rt(i)*.6})`,e.fillRect(rt(i*3)*64,rt(i*7)*256,1.5+rt(i*5)*3,20+rt(i*11)*70);const t=new y_(s);return t.wrapS=t.wrapT=Gc,t}class ub{constructor(e,t){Ct(this,"renderer");Ct(this,"scene",new Gy);Ct(this,"camera");Ct(this,"controls");Ct(this,"island",new Tn);Ct(this,"detail",new Tn);Ct(this,"hills",[]);Ct(this,"river",[]);Ct(this,"sun",new XS(16777215,2));Ct(this,"hemi",new VS(16777215,16777215,1));Ct(this,"windowMats",[]);Ct(this,"spinners",[]);Ct(this,"flags",[]);Ct(this,"clouds",[]);Ct(this,"cloudMat",new Oi({color:16777215,roughness:1,transparent:!0,opacity:.9}));Ct(this,"soft",lb());Ct(this,"fall",cb());Ct(this,"mists",[]);Ct(this,"birds",[]);Ct(this,"rain",null);Ct(this,"pickables",[]);Ct(this,"solids",[]);Ct(this,"anchors",[]);Ct(this,"raycaster",new qS);Ct(this,"clock",new $S);Ct(this,"frame",0);Ct(this,"running",!1);Ct(this,"still",!1);Ct(this,"updating",!1);Ct(this,"energy");Ct(this,"flyTo",null);Ct(this,"data");Ct(this,"onFrame",null);this.data=t,this.energy=t.weekEnergy,this.renderer=new jT({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.outputColorSpace=hi,this.renderer.toneMapping=Tf,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$0,this.renderer.shadowMap.autoUpdate=!1,this.camera=new di(30,1,.1,220),this.camera.position.set(0,16,31),this.controls=new qT(this.camera,e),this.controls.target.set(0,0,0),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minPolarAngle=.7,this.controls.maxPolarAngle=1.36,this.controls.minDistance=11,this.controls.maxDistance=42,this.controls.rotateSpeed=.45,this.controls.zoomSpeed=.6,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.25,this.controls.addEventListener("start",()=>{this.flyTo=null}),this.controls.addEventListener("change",()=>{this.still&&!this.updating&&this.renderOnce()}),this.scene.add(this.hemi),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const i=this.sun.shadow.camera;i.left=i.bottom=-13,i.right=i.top=13,i.near=1,i.far=80,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=5,this.scene.add(this.sun,this.sun.target),this.scene.add(this.island),this.island.add(this.detail),this.build(),this.setPhase("golden")}riverDistance(e,t){let i=1/0;for(const o of this.river)i=Math.min(i,(o.x-e)**2+(o.z-t)**2);return Math.sqrt(i)}wet(e,t,i=.55){return Math.hypot(e,t)<1.25+i||this.riverDistance(e,t)<i}heightAt(e,t){const i=Math.hypot(e,t),o=ka(qi(Math.atan2(t,e)),qi(Math.atan2(t,e))*.8,i);let a=.72+.13*Math.sin(e*.9+1.7)*Math.cos(t*.8-.6)+.06*Math.sin(e*2.3-t*1.9);for(const h of this.hills)a+=h.height*Math.exp(-((e-h.x)**2+(t-h.z)**2)/(2*1.7*1.7));a*=.8+.2*o;const c=Math.max(ka(1.55,1.05,i),ka(.62,.2,this.riverDistance(e,t)));return a*(1-c)+(Qr-.14)*c}stand(e,t,i,o=0){return e.position.set(t,this.heightAt(t,i)+o,i),e}build(){const{courses:e}=this.data;this.hills=e.map((t,i)=>{const o=i/e.length*ni-Math.PI/2+.3,a=5+i%2*.45;return{x:Math.cos(o)*a,z:Math.sin(o)*a,height:.55+t.coverage*2.3,color:new ft(t.color)}}),this.planRiver(),this.buildTerrain(),this.buildCliffs(),this.buildWater(),this.buildCompass(),e.forEach((t,i)=>this.buildCourse(t,this.hills[i],i)),this.buildTurbines(),this.buildPath(),this.buildGroundDetail(),this.buildClouds(),this.buildBirds()}planRiver(){const e=f=>this.data.courses.findIndex(g=>g.id===f),t=this.data.links[0],i=this.hills[t?e(t.from):0]??this.hills[0],o=this.hills[t?e(t.to):2]??this.hills[this.hills.length-1],a=Math.atan2(o.z,o.x)+.62,c=new z(Math.cos(a),0,Math.sin(a)).multiplyScalar(qi(a)+.15),h=(f,g,_)=>new z(f.x*g,0,f.z*g).applyAxisAngle(new z(0,1,0),_),d=new gf([h(i,.78,.5),h(i,.5,.42),new z(0,0,0),h(o,.42,-.5),h(o,.8,-.62),c.clone().multiplyScalar(.86),c]);this.river=d.getSpacedPoints(110)}buildTerrain(){const i=[],o=[],a=[],c=new ft(10472056),h=new ft(8369509),d=new ft(14213028),f=new ft(14864287),g=new ft;for(let M=0;M<=64;M+=1)for(let A=0;A<=160;A+=1){const y=A/160*ni,S=M/64*qi(y),w=Math.cos(y)*S,C=Math.sin(y)*S,b=this.heightAt(w,C);i.push(w,b,C),g.copy(c).lerp(h,.5+.5*Math.sin(w*1.7+C*1.3)).lerp(d,ka(1.4,3.2,b)*.55);for(const U of this.hills)g.lerp(U.color,.2*Math.exp(-((w-U.x)**2+(C-U.z)**2)/(2*1.8*1.8)));g.lerp(f,ka(Qr+.16,Qr-.02,b)),o.push(g.r,g.g,g.b)}for(let M=0;M<64;M+=1)for(let A=0;A<160;A+=1){const y=M*161+A,S=y+160+1;a.push(y,y+1,S,S,y+1,S+1)}const _=new tn;_.setAttribute("position",new wt(i,3)),_.setAttribute("color",new wt(o,3)),_.setIndex(a),_.computeVertexNormals();const m=new Oi({vertexColors:!0,roughness:.95});m.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying float vHeight;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeight = position.y;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeight;`).replace("#include <color_fragment>",`#include <color_fragment>
          float steps = vHeight * 3.0;
          float f = fract(steps);
          float w = fwidth(steps) * 1.1;
          float line = 1.0 - smoothstep(0.0, w, min(f, 1.0 - f));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.72, line * 0.3 * smoothstep(0.75, 1.1, vHeight));`)};const x=new Qe(_,m);x.receiveShadow=!0,x.castShadow=!0,x.name="land",this.island.add(x)}buildCliffs(){const e=this.river[this.river.length-1],t=Math.atan2(e.z,e.x),i=b=>Math.abs(Math.atan2(Math.sin(b-t),Math.cos(b-t)))<.075,o=72,a=[[1,0],[.985,-.5],[.93,-1.2],[.955,-1.45],[.83,-2.4],[.86,-2.65],[.68,-3.7],[.7,-3.95],[.47,-5],[.27,-6.1],[.06,-7]],c=[10126711,9074281,8087903,8811626,7167576,7825247,6444111,6970197,5720647,5063232,4471353].map(b=>new ft(b)),h=[],d=[],f=[];a.forEach(([b,U],P)=>{for(let D=0;D<=o;D+=1){const E=D%o/o*ni,N=P===0?1:1+(rt(D*3.1+P*17)-.5)*.11,V=qi(E)*b*N,O=P===0?this.heightAt(Math.cos(E)*qi(E)*.999,Math.sin(E)*qi(E)*.999):0;h.push(Math.cos(E)*V,P===0?O:U+(rt(D*7+P)-.5)*.22,Math.sin(E)*V);const B=c[P].clone().offsetHSL(0,0,(rt(D*11+P*5)-.5)*.05);d.push(B.r,B.g,B.b)}});for(let b=0;b<a.length-1;b+=1)for(let U=0;U<o;U+=1){const P=b*(o+1)+U,D=P+o+1;f.push(P,P+1,D,D,P+1,D+1)}const g=new tn;g.setAttribute("position",new wt(h,3)),g.setAttribute("color",new wt(d,3)),g.setIndex(f);const _=g.toNonIndexed();_.computeVertexNormals();const m=new Qe(_,new Oi({vertexColors:!0,roughness:1,flatShading:!0}));m.castShadow=!0,m.receiveShadow=!0,this.island.add(m);const x=[],M=[];for(let b=0;b<=o*2;b+=1){const U=b/(o*2)*ni,P=qi(U),D=this.heightAt(Math.cos(U)*P*.999,Math.sin(U)*P*.999),E=i(U)?.04:.28+rt(b*2.7)*.55*(b%3===0?1.4:.6);x.push(Math.cos(U)*P*1.012,D+.02,Math.sin(U)*P*1.012,Math.cos(U)*P*1.03,D-E,Math.sin(U)*P*1.03),b<o*2&&M.push(b*2,b*2+2,b*2+1,b*2+1,b*2+2,b*2+3)}const A=new tn;A.setAttribute("position",new wt(x,3)),A.setIndex(M),A.computeVertexNormals(),this.island.add(new Qe(A,Zt(7974239,{side:ii,flatShading:!0})));const y=46,S=new wi(new zn(.02,.008,1,4),Zt(7296582),y),w=new Pt,C=new pi;for(let b=0;b<y;b+=1){let U=rt(b*1.9)*ni;i(U)&&(U+=.2);const P=qi(U)*(.96+rt(b)*.04),D=.5+rt(b*5)*1.4;C.setFromEuler(new tr((rt(b*3)-.5)*.3,0,(rt(b*7)-.5)*.3)),w.compose(new z(Math.cos(U)*P,-.35-D/2,Math.sin(U)*P),C,new z(1,D,1)),S.setMatrixAt(b,w)}this.island.add(S)}ribbon(e,t,i,o){const a=[],c=[];e.forEach((f,g)=>{const _=e[Math.min(e.length-1,g+1)],m=e[Math.max(0,g-1)],x=new z(-(_.z-m.z),0,_.x-m.x).normalize().multiplyScalar(t(g/(e.length-1))/2),M=i(f);a.push(f.x+x.x,M,f.z+x.z,f.x-x.x,M,f.z-x.z),g<e.length-1&&c.push(g*2,g*2+1,g*2+2,g*2+1,g*2+3,g*2+2)});const h=new tn;h.setAttribute("position",new wt(a,3)),h.setIndex(c),h.computeVertexNormals();const d=new Qe(h,o);return d.receiveShadow=!0,d}buildWater(){const e=new Oi({color:5815736,roughness:.12,metalness:.1,transparent:!0,opacity:.92,side:ii}),t=new Qe(new kf(1.42,40),e);t.rotation.x=-Math.PI/2,t.position.y=Qr,t.receiveShadow=!0,this.island.add(t,this.ribbon(this.river,x=>.5+x*.28,()=>Qr,e));const i=this.river[this.river.length-1],o=Math.atan2(i.x,i.z);this.fall.repeat.set(1,2);const a=40,c=new el(1,1,1,a),h=c.attributes.position,d=.42,f=Math.PI/2*d,g=5.4;for(let x=0;x<h.count;x+=1){const M=.5-h.getY(x),A=M*(f+g);let y,S;if(A<f){const w=A/d;y=Math.sin(w)*d,S=-(1-Math.cos(w))*d}else{const w=A-f;y=d+w*.07+w*w*.004,S=-d-w}h.setXYZ(x,h.getX(x)*(.62+M*.32),S,y)}c.computeVertexNormals();const _=new Qe(c,new Lo({map:this.fall,transparent:!0,opacity:.92,side:ii,depthWrite:!1}));_.position.set(i.x*.985,Qr+.005,i.z*.985),_.rotation.y=o,_.renderOrder=2,this.island.add(_);for(let x=0;x<5;x+=1)this.mist(new z(i.x*1.07+(rt(x)-.5)*.9,Qr-5.6-rt(x*3)*1,i.z*1.07+(rt(x*5)-.5)*.9),1.8+rt(x)*1.2,.5,16777215,this.island);const m=this.river[0];for(let x=0;x<4;x+=1){const M=new Qe(new Cs(.14+rt(x)*.1,0),Zt(10721938,{flatShading:!0}));this.stand(M,m.x+(rt(x*3)-.5)*.5,m.z+(rt(x*7)-.5)*.5,.04),this.island.add(Ro(M))}}mist(e,t,i,o,a,c=!1){const h=new $y(new m_({map:this.soft,color:o,transparent:!0,opacity:i,depthWrite:!1}));h.scale.set(t,t*.6,1),h.position.copy(e),a.add(h),this.mists.push({sprite:h,base:e.clone(),seed:this.mists.length*1.7,rise:c})}buildCompass(){const e=new Tn,t=new Lo({color:2761256,transparent:!0,opacity:.4}),i=new Qe(new Hf(Wa+2.02,Wa+2.045,160),t);i.rotation.x=-Math.PI/2,e.add(i);const o=120,a=new wi(new bn(.02,.005,1),t,o),c=new Pt,h=new pi,d=new z(0,1,0);for(let g=0;g<o;g+=1){const _=g/o*ni,m=g%30===0?.62:g%10===0?.4:.2;h.setFromAxisAngle(d,-_+Math.PI/2),c.compose(new z(Math.cos(_)*(Wa+2.02-m/2),0,Math.sin(_)*(Wa+2.02-m/2)),h,new z(1,1,m)),a.setMatrixAt(g,c)}const f=new Qe(new is(.14,.4,3),new Lo({color:2761256,transparent:!0,opacity:.6}));f.rotation.x=Math.PI/2,f.position.set(0,0,-12.45),e.add(a,f),e.position.y=-.3,this.island.add(e)}glass(e){const t=new Oi({color:e>.5?16768166:5591146,emissive:16756815,emissiveIntensity:0,roughness:.35});return this.windowMats.push({mat:t,secure:e}),t}landmark(e,t,i){const o=new Tn,a=Zt(12169382,{flatShading:!0}),c=Zt(16181974),h=Zt(9069128),d=this.glass(t),f=(g,_,m,x,M=0,A=0,y=0)=>{const S=new Qe(new bn(g,_,m),x);return S.position.set(M,A,y),o.add(S),S};if(e===0){const g=new Qe(new zn(.52,.58,.62,12),a);g.position.y=.31;const _=new Qe(new Rs(.52,16,10,0,ni,0,Math.PI/2),Zt(15330800,{roughness:.5}));_.position.y=.62,o.add(g,_),f(.12,.5,.5,d,0,.82,.14).rotation.x=-.6,f(.14,.26,.03,h,0,.13,.57),f(.13,.13,.03,d,.3,.36,.47)}else if(e===1){f(1.15,.5,.62,c,0,.3,0),f(1.3,.07,.78,a,0,.035,0);const g=new Qe(new zn(.01,.46,1.25,3,1),i);g.rotation.z=Math.PI/2,g.rotation.y=Math.PI/2,g.scale.set(1,1,.62),g.position.y=.72,o.add(g);for(let _=0;_<4;_+=1){const m=new Qe(new zn(.035,.035,.48,8),Zt(16512750));m.position.set(-.42+_*.28,.3,.36),o.add(m)}f(.14,.3,.03,h,0,.2,.32),[-.36,.36].forEach(_=>f(.16,.2,.03,d,_,.33,.32)),[-.62,.62].forEach(_=>{f(.03,.42,.03,h,_,.21,.46),f(.09,.1,.09,this.glass(Math.max(t,.6)),_,.46,.46)})}else if(e===2){f(.95,.14,.6,a,0,.07,0);const g=new Oi({color:13627110,roughness:.1,transparent:!0,opacity:.55,emissive:16767392,emissiveIntensity:0});this.windowMats.push({mat:g,secure:t*.6}),f(.9,.34,.55,g,0,.31,0);const _=new Qe(new zn(.01,.39,.9,3,1),g);_.rotation.z=Math.PI/2,_.rotation.y=Math.PI/2,_.scale.set(1,1,.6),_.position.y=.6,o.add(_);for(let m=0;m<4;m+=1)f(.02,.36,.57,Zt(16249836),-.45+m*.3,.31,0);for(let m=0;m<3;m+=1){const x=new Qe(new Cs(.1,0),Zt(7319132,{flatShading:!0}));x.position.set(-.28+m*.28,.24,0),o.add(x)}}else if(e===3){f(.7,.5,.56,c,0,.25,0);const g=new Qe(new is(.58,.42,4),i);g.rotation.y=Math.PI/4,g.position.y=.71,o.add(g),f(.72,.04,.58,h,0,.38,0),f(.13,.14,.03,d,.16,.26,.29),f(.12,.22,.03,h,-.16,.11,.29);const _=new Tn;_.add(new Qe(new Wf(.32,.03,6,18),h));for(let m=0;m<8;m+=1){const x=new Qe(new bn(.04,.64,.12),h);x.rotation.z=m/8*Math.PI,m<4&&_.add(x)}_.rotation.y=Math.PI/2,_.position.set(.42,.26,0),o.add(_),this.spinners.push({object:_,speed:.9})}else{const g=new Qe(new zn(.26,.34,1.25,8),a);g.position.y=.625;const _=new Qe(new zn(.36,.3,.14,8),a);_.position.y=1.3;const m=new Qe(new is(.38,.52,8),i);m.position.y=1.63,o.add(g,_,m),f(.1,.16,.03,d,0,.95,.3),f(.1,.16,.03,d,0,.5,.33),f(.13,.24,.03,h,0,.12,.35)}return Ro(o)}buildCourse(e,t,i){const o=new Oi({color:t.color.clone().offsetHSL(0,.18,-.2),roughness:.8,flatShading:!0}),a=Zt(16248025),c=Zt(9069128),h=Math.atan2(t.z,t.x)+2.4,d=this.landmark(i%5,e.coverage,o);this.stand(d,t.x+Math.cos(h)*.55,t.z+Math.sin(h)*.55,-.04),d.rotation.y=Math.atan2(t.x,t.z),d.scale.setScalar(1.15),d.userData.pick={kind:"course",id:e.id,title:e.name,detail:`${Math.round(e.coverage*100)}% covered · ${e.lectures.length} lectures`},this.island.add(d),this.pickables.push(d),this.solids.push(d.position.clone().add(new z(0,.6,0)));const f=e.lectures.reduce((D,E)=>D+E.objectives.length,0),g=new wi(new zn(.026,.042,.3,6),Zt(9136725),Math.max(1,f)),_=new wi(new Cs(.2,1),new Oi({roughness:.95,flatShading:!0}),Math.max(1,f*2)),m=new wi(new is(.2,.34,7),new Oi({roughness:.95,flatShading:!0}),Math.max(1,f*3)),x=[];let M=0,A=0,y=0;const S=new Pt,w=new pi,C=new ft,b=(D,E,N,V,O,B,Q=B,se,W=0)=>{S.compose(new z(N,V,O),w.identity(),new z(B,Q,B)),D.setMatrixAt(E,S),se!==void 0&&D.setColorAt(E,C.setHex(se).offsetHSL(0,0,(rt(W)-.5)*.07))},U=e.lectures.length;e.lectures.forEach((D,E)=>{const N=E/Math.max(1,U)*ni+i*1.3;let V=1.45+E%2*.6,O=t.x+Math.cos(N)*V,B=t.z+Math.sin(N)*V;for(let Me=0;Me<6&&this.wet(O,B,.7);Me+=1)V-=.25,O=t.x+Math.cos(N)*V,B=t.z+Math.sin(N)*V;const Q=new Tn,se=new Qe(new bn(.56,.42,.46),a);se.position.y=.21;const W=new Qe(new is(.47,.34,4),o);W.position.y=.59,W.rotation.y=Math.PI/4,W.scale.set(1,1,.84);const K=new Qe(new bn(.07,.2,.07),Zt(12169382));K.position.set(.14,.66,-.06);const Y=new Qe(new bn(.1,.19,.02),c);Y.position.set(-.13,.095,.235);const $=this.glass(D.secure),re=new bn(.12,.12,.02),ae=new Qe(re,$);ae.position.set(.1,.25,.235);const k=new Qe(re,$);k.rotation.y=Math.PI/2,k.position.set(.285,.25,0);const ee=k.clone();if(ee.position.x=-.285,Q.add(se,W,K,Y,ae,k,ee),Ro(Q),this.stand(Q,O,B,-.03),Q.rotation.y=Math.atan2(O-t.x,B-t.z),Q.userData.pick={kind:"lecture",id:D.id,title:D.name,detail:`${e.name} · ${Math.round(D.secure*100)}% secure · ${D.objectives.length} objectives`},this.island.add(Q),this.pickables.push(Q),this.solids.push(Q.position.clone().add(new z(0,.4,0))),D.secure>.6&&E%2===0){const Me=new z(.14,.86,-.06).applyAxisAngle(new z(0,1,0),Q.rotation.y).add(Q.position);for(let Ue=0;Ue<3;Ue+=1)this.mist(Me.clone(),.32,.45,16052460,this.island,!0)}D.objectives.forEach((Me,Ue)=>{const Ne=i*1e3+E*50+Ue,le=N+.9+Ue/Math.max(1,D.objectives.length)*3.6+(rt(Ne)-.5)*.5,ve=.55+rt(Ne+7)*.6+Ue%3*.13,de=O+Math.cos(le)*ve,Re=B+Math.sin(le)*ve;if(this.wet(de,Re,.3))return;const Xe=this.heightAt(de,Re),He=.9+rt(Ne+3)*.45;if(x[M]={kind:"objective",id:`${D.id}:${Ue}`,title:`Objective ${Ue+1} · ${D.name}`,detail:Me==="ready"?"Secure: a full tree":Me==="getting"?"Getting there: still growing":Me==="shaky"?"Shaky: a young tree":"Not started: a sapling, planted and waiting"},Me==="none")b(g,M,de,Xe+.09,Re,.5,.6),b(_,A,de+.03,Xe+.2,Re,.3,.34,12180858,Ne),A+=1;else if(Me==="ready"&&Ue%2===0)b(g,M,de,Xe+.13*He,Re,He),[0,1,2].forEach(Et=>{b(m,y,de,Xe+(.36+Et*.19)*He,Re,He*(1.05-Et*.24),He*(1.05-Et*.12),5215331,Ne+Et),y+=1});else{const Et=Me==="ready"?1:Me==="getting"?.78:.56,ht=Me==="ready"?7320410:Me==="getting"?9225575:11064179;b(g,M,de,Xe+.15*He*Et,Re,He*Et),b(_,A,de,Xe+.4*He*Et,Re,He*Et,He*Et*1.08,ht,Ne),A+=1,Me==="ready"&&(b(_,A,de+.06*He,Xe+.6*He,Re-.03*He,He*.62,He*.62,8240483,Ne+1),A+=1)}M+=1})}),g.count=M,_.count=A,m.count=y;for(const D of[g,_,m])D.castShadow=!0,D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0);g.userData.picks=x,this.island.add(g,_,m),this.pickables.push(g);const P=new z(t.x,this.heightAt(t.x,t.z),t.z);if(this.anchors.push({id:e.id,kind:"course",text:e.name,sub:`${Math.round(e.coverage*100)}% covered`,priority:0,tone:"plain",at:P.clone().add(new z(0,2.1,0))}),e.deadlines.forEach((D,E)=>{const N=D.days<=0?"now":D.days<=2?"near":D.days<=7?"week":"far",V=N==="now"?1972766:N==="near"?13784890:N==="week"?15243906:15129309,O=N==="now"?1.5:N==="near"?1.3:N==="week"?1.05:.8,B=new Tn,Q=Zt(3813429,{roughness:.6});let se=1.25;if(D.exam){const K=new Qe(new zn(.02,.02,1.7,6),Q);K.position.y=.85;const Y=new b_;Y.moveTo(0,0),Y.lineTo(.56,-.16),Y.lineTo(0,-.34);const $=new Qe(new Gf(Y),Zt(N==="far"?13784890:V,{side:ii}));$.position.set(.02,1.68,0),this.flags.push($),B.add(K,$),B.scale.setScalar(.9+O*.25),this.stand(B,t.x,t.z),se=2}else{const K=.7+O*.35,Y=new Qe(new zn(.012,.012,K,5),Q);Y.position.y=K/2;const $=new Qe(new Rs(.085*O,18,14),Zt(V,{roughness:.4}));$.position.y=K+.05*O,B.add(Y,$);const re=E/Math.max(1,e.deadlines.length)*ni+i+2.2;this.stand(B,t.x+Math.cos(re)*2.3,t.z+Math.sin(re)*2.3),se=K+.2}Ro(B);const W=D.days<=0?"today":D.days===1?"tomorrow":`in ${D.days} days`;B.userData.pick={kind:"deadline",id:D.id,title:D.name,detail:`${e.name} · ${W}`},this.island.add(B),this.pickables.push(B),this.anchors.push({id:D.id,kind:D.exam?"exam":"deadline",text:D.name,sub:W,priority:N==="now"?4:N==="near"?3:D.exam&&D.days<=14?2:0,tone:N,at:B.position.clone().add(new z(0,se,0))})}),e.unread||e.overdue)for(let D=0;D<9;D+=1){const E=D/9*ni,N=.4+rt(i*17+D)*2,V=t.x+Math.cos(E)*N,O=t.z+Math.sin(E)*N;this.mist(new z(V,this.heightAt(V,O)+.45+rt(D)*.4,O),2.6+rt(D*3)*1.6,.42,e.overdue?16770780:16777215,this.island)}e.overdue&&this.island.add(this.stand(new GS(16736312,9,5,1.6),t.x,t.z,.6))}buildTurbines(){const e=Zt(16512750,{roughness:.6}),t=[[-2.6,-1.3,1],[-3.3,-.2,.84],[2.5,2.3,.9]];for(const[i,o,a]of t){const c=new Tn,h=new Qe(new zn(.03,.06,1.9,8),e);h.position.y=.95;const d=new Qe(new bn(.1,.1,.24),e);d.position.set(0,1.9,.03);const f=new Tn;f.position.set(0,1.9,.17),f.add(new Qe(new Rs(.055,10,8),e));for(let g=0;g<3;g+=1){const _=new Tn,m=new Qe(new bn(.07,.78,.014),e);m.position.y=.41,_.add(m),_.rotation.z=g/3*ni,f.add(_)}this.spinners.push({object:f,speed:-(.25+this.energy*3.2)}),c.add(h,d,f),c.scale.setScalar(a),c.rotation.y=.5,this.island.add(this.stand(Ro(c),i,o)),this.solids.push(c.position.clone().add(new z(0,1.5*a,0)))}[[-2.2,2.6],[-1.45,2.8]].forEach(([i,o])=>{const a=new Tn,c=new Tn;c.add(new Qe(new bn(.62,.025,.4),Zt(3428476,{roughness:.25,metalness:.3}))),c.rotation.x=-.5,c.position.y=.26;const h=new Qe(new zn(.018,.018,.26,5),Zt(15327958));h.position.y=.13,a.add(c,h),this.island.add(this.stand(Ro(a),i,o))})}buildPath(){const e=this.hills.map(M=>new z(M.x*.66,0,M.z*.66)),t=[];e.forEach((M,A)=>{const y=e[(A+1)%e.length];t.push(M,M.clone().lerp(y,.5).multiplyScalar(.92))});const o=new gf(t,!0,"catmullrom",.5).getSpacedPoints(260),a=M=>this.riverDistance(M.x,M.z)>.42;this.island.add(this.ribbon(o,()=>.3,M=>a(M)?this.heightAt(M.x,M.z)+.025:-5,Zt(14466958,{roughness:1})));const c=new wi(new zn(.04,.04,.016,10),Zt(16775920,{roughness:.7}),130),h=new wi(new bn(.05,.24,.05),Zt(10121808),90),d=new wi(new bn(.03,.03,1),Zt(11108186),90),f=new Pt,g=new pi,_=new z(0,1,0);let m=0,x=0;o.forEach((M,A)=>{const y=o[(A+1)%o.length],S=Math.atan2(y.x-M.x,y.z-M.z);if(!a(M)){if(A%2===0){const w=new Qe(new bn(.46,.035,.11),Zt(11569762));w.position.set(M.x,Qr+.16,M.z),w.rotation.y=S,w.castShadow=!0,this.island.add(w)}return}if(A%2===0&&m<130&&(f.makeTranslation(M.x,this.heightAt(M.x,M.z)+.04,M.z),c.setMatrixAt(m,f),m+=1),Math.floor(A/30)%3===0&&A%5===0&&x<90){const w=new z(Math.cos(S),0,-Math.sin(S)).multiplyScalar(.3),C=M.x+w.x,b=M.z+w.z;g.setFromAxisAngle(_,S),f.compose(new z(C,this.heightAt(C,b)+.12,b),g,new z(1,1,1)),h.setMatrixAt(x,f);const U=o[(A+5)%o.length],P=Math.hypot(U.x-M.x,U.z-M.z);f.compose(new z(C+(U.x-M.x)/2,this.heightAt(C,b)+.17,b+(U.z-M.z)/2),g,new z(1,1,P)),d.setMatrixAt(x,f),x+=1}}),c.count=m,h.count=d.count=x,h.castShadow=!0,this.island.add(c,h,d)}buildGroundDetail(){const e=new Pt,t=new pi,i=new ft,o=(c,h,d,f,g,_,m)=>{let x=0;for(let M=0;M<h*3&&x<h;M+=1){const A=rt(d+M*1.3)*ni,y=Math.sqrt(rt(d+M*2.9))*qi(A)*.95,S=Math.cos(A)*y,w=Math.sin(A)*y;if(this.wet(S,w,.25))continue;const C=f[0]+rt(d+M*4.1)*(f[1]-f[0]);t.setFromEuler(new tr(0,rt(M)*ni,0)),e.compose(new z(S,this.heightAt(S,w)+_*C,w),t,new z(C,C,C)),c.setMatrixAt(x,e),c.setColorAt(x,i.setHex(g[M%g.length]).offsetHSL(0,0,(rt(M*7)-.5)*.06)),x+=1}c.count=x,c.castShadow=!0,m.add(c)},a=()=>new Oi({roughness:1,flatShading:!0});o(new wi(new Cs(.16,0),a(),70),70,11,[.6,1.5],[11051417,9801094,12038310],.05,this.island),o(new wi(new Cs(.2,1),a(),90),90,23,[.6,1.2],[6268250,7649378,5215331],.1,this.island),o(new wi(new is(.05,.16,4),a(),520),520,37,[.7,1.5],[8831082,7647838,10211188],.07,this.detail),o(new wi(new Rs(.035,6,5),a(),220),220,53,[.8,1.4],[16777215,16765286,16164536,13219583],.06,this.detail)}buildClouds(){const e=new Rs(1,16,12);for(let t=0;t<6;t+=1){const i=new Tn,o=3+Math.floor(rt(t*5)*2);for(let c=0;c<o;c+=1){const h=new Qe(e,this.cloudMat),d=.5+rt(t*13+c)*.45;h.scale.set(d*1.3,d*.62,d),h.position.set((c-o/2)*.8,rt(t+c*3)*.2,(rt(t*7+c)-.5)*.5),i.add(h)}const a=t%2===0;i.scale.setScalar(a?1.3+rt(t*11)*.8:.6+rt(t*11)*.3),this.clouds.push({group:i,radius:a?9+rt(t)*9:24+rt(t)*6,angle:t/6*ni+rt(t*3),speed:.008+rt(t*9)*.01,y:a?-8.5+rt(t*2)*2.5:12+rt(t*2)*3}),this.scene.add(i)}}buildBirds(){const e=new tn;e.setAttribute("position",new wt([0,0,0,.26,0,-.06,.02,0,.1],3)),e.computeVertexNormals();const t=new Lo({color:3813429,side:ii});for(let i=0;i<5;i+=1){const o=new Tn,a=new Qe(e,t),c=new Qe(e,t);c.scale.x=-1,o.add(a,c),this.birds.push({group:o,wings:[a,c],radius:6+i*1.1,angle:i*1.3,y:5+i%3*.7}),this.scene.add(o)}}setPhase(e){const t=ab[e];this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemi,this.sun.color.setHex(t.sun),this.sun.intensity=t.sunPower;const i=t.elev*Math.PI/180,o=t.azim*Math.PI/180;this.sun.position.set(Math.cos(i)*Math.sin(o)*30,Math.sin(i)*30,Math.cos(i)*Math.cos(o)*30),this.renderer.toneMappingExposure=t.exposure,this.cloudMat.color.setHex(t.cloud);for(const{mat:a,secure:c}of this.windowMats)a.emissiveIntensity=c>.5?.3+t.glow*c:0;this.renderer.shadowMap.needsUpdate=!0,this.renderOnce()}setWeather(e){const t=e==="clear"?3:6;if(this.clouds.forEach((i,o)=>{i.group.visible=o<t}),this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null),e==="rain"){const o=new Float32Array(1800);for(let c=0;c<600;c+=1)o.set([(rt(c)-.5)*30,rt(c*3.1)*14,(rt(c*7.7)-.5)*30],c*3);const a=new tn;a.setAttribute("position",new mi(o,3)),this.rain=new tS(a,new v_({color:14148590,size:.06,transparent:!0,opacity:.7,depthWrite:!1})),this.scene.add(this.rain)}this.renderOnce()}setStill(e){this.still=e,this.controls.autoRotate=!e,e?this.stop():this.start(),this.renderOnce()}focus(e){const t=this.hills[e?this.data.courses.findIndex(i=>i.id===e):-1];this.controls.autoRotate=!t&&!this.still,this.flyTo=t?{target:new z(t.x,this.heightAt(t.x,t.z)*.6,t.z),distance:13}:{target:new z(0,0,0),distance:35},this.still&&(this.stepCamera(1),this.renderOnce())}stepCamera(e){if(!this.flyTo)return;this.controls.target.lerp(this.flyTo.target,e);const t=this.camera.position.clone().sub(this.controls.target);t.setLength(t.length()+(this.flyTo.distance-t.length())*e),this.camera.position.copy(this.controls.target).add(t),this.controls.target.distanceTo(this.flyTo.target)<.02&&Math.abs(t.length()-this.flyTo.distance)<.05&&(this.flyTo=null)}get distance(){return this.camera.position.distanceTo(this.controls.target)}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.fov=this.camera.aspect<1.3?40:30,this.camera.updateProjectionMatrix(),this.renderOnce()}start(){if(this.running||this.still)return;this.running=!0,this.clock.getDelta();const e=()=>{this.running&&(this.frame=requestAnimationFrame(e),!document.hidden&&this.tick(Math.min(.05,this.clock.getDelta())))};this.frame=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.frame)}tick(e){const t=this.clock.elapsedTime;this.stepCamera(1-Math.pow(.02,e)),this.island.position.y=Math.sin(t*.5)*.08;for(const i of this.spinners)i.object.rotation.z+=e*i.speed;this.flags.forEach((i,o)=>{i.rotation.y=Math.sin(t*2.2+o)*.35});for(const i of this.clouds)i.angle+=i.speed*e;this.fall.offset.y=t*.55%1;for(const i of this.mists)if(i.rise){const o=(t*.22+i.seed)%1;i.sprite.position.set(i.base.x+o*.25,i.base.y+o*.9,i.base.z),i.sprite.material.opacity=.45*(1-o),i.sprite.scale.setScalar(.22+o*.4)}else i.sprite.position.set(i.base.x+Math.sin(t*.12+i.seed)*.45,i.base.y+Math.sin(t*.2+i.seed*2)*.08,i.base.z+Math.cos(t*.1+i.seed)*.45);for(const i of this.birds){i.angle+=e*.16,i.group.position.set(Math.cos(i.angle)*i.radius,i.y+Math.sin(t+i.radius)*.3,Math.sin(i.angle)*i.radius),i.group.rotation.y=-i.angle;const o=Math.sin(t*7+i.radius)*.6;i.wings[0].rotation.z=o,i.wings[1].rotation.z=-o}if(this.rain){const i=this.rain.geometry.attributes.position;for(let o=0;o<i.count;o+=1){const a=i.getY(o)-e*9;i.setY(o,a<-1?14:a)}i.needsUpdate=!0}this.renderOnce()}renderOnce(){for(const e of this.clouds)e.group.position.set(Math.cos(e.angle)*e.radius,e.y,Math.sin(e.angle)*e.radius),e.group.rotation.y=-e.angle;this.detail.visible=this.distance<30,this.updating=!0,this.controls.update(),this.updating=!1,this.renderer.render(this.scene,this.camera),this.onFrame?.()}toScreen(e,t,i){const o=e.clone();return this.island.localToWorld(o),o.project(this.camera),{x:(o.x*.5+.5)*t,y:(-o.y*.5+.5)*i,z:o.z}}project(e,t){const i=new z,o=this.island.getObjectByName("land");return this.anchors.map(a=>{const c=a.at.clone();this.island.localToWorld(c),i.copy(this.camera.position).sub(c).normalize(),this.raycaster.set(c.clone().addScaledVector(i,.3),i);const h=o?this.raycaster.intersectObject(o,!1).length>0:!1,d=this.toScreen(a.at,e,t);return{id:a.id,kind:a.kind,text:a.text,sub:a.sub,priority:a.priority,tone:a.tone,x:d.x,y:d.y,visible:!h&&d.z<1}})}obstacles(e,t){return this.solids.map(i=>this.toScreen(i,e,t))}pick(e,t,i,o){this.raycaster.setFromCamera(new De(e/i*2-1,-(t/o)*2+1),this.camera);for(const a of this.raycaster.intersectObjects(this.pickables,!0)){if(a.instanceId!==void 0){const h=a.object.userData.picks;if(h?.[a.instanceId])return h[a.instanceId]}let c=a.object;for(;c;){if(c.userData.pick)return c.userData.pick;c=c.parent}}return null}dispose(){this.stop(),this.controls.dispose(),this.scene.traverse(e=>{const t=e;t.geometry?.dispose();const i=t.material;Array.isArray(i)?i.forEach(o=>o.dispose()):i?.dispose()}),this.soft.dispose(),this.fall.dispose(),this.renderer.dispose()}}function G_(s){var e,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(e=0;e<o;e++)s[e]&&(t=G_(s[e]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function hb(){for(var s,e,t=0,i="",o=arguments.length;t<o;t++)(s=arguments[t])&&(e=G_(s))&&(i&&(i+=" "),i+=e);return i}const qf="-",db=s=>{const e=pb(s),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=s;return{getClassGroupId:c=>{const h=c.split(qf);return h[0]===""&&h.length!==1&&h.shift(),W_(h,e)||fb(c)},getConflictingClassGroupIds:(c,h)=>{const d=t[c]||[];return h&&i[c]?[...d,...i[c]]:d}}},W_=(s,e)=>{if(s.length===0)return e.classGroupId;const t=s[0],i=e.nextPart.get(t),o=i?W_(s.slice(1),i):void 0;if(o)return o;if(e.validators.length===0)return;const a=s.join(qf);return e.validators.find(({validator:c})=>c(a))?.classGroupId},G0=/^\[(.+)\]$/,fb=s=>{if(G0.test(s)){const e=G0.exec(s)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},pb=s=>{const{theme:e,prefix:t}=s,i={nextPart:new Map,validators:[]};return gb(Object.entries(s.classGroups),t).forEach(([a,c])=>{Mf(c,i,a,e)}),i},Mf=(s,e,t,i)=>{s.forEach(o=>{if(typeof o=="string"){const a=o===""?e:W0(e,o);a.classGroupId=t;return}if(typeof o=="function"){if(mb(o)){Mf(o(i),e,t,i);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([a,c])=>{Mf(c,W0(e,a),t,i)})})},W0=(s,e)=>{let t=s;return e.split(qf).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},mb=s=>s.isThemeGetter,gb=(s,e)=>e?s.map(([t,i])=>{const o=i.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([c,h])=>[e+c,h])):a);return[t,o]}):s,_b=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const o=(a,c)=>{t.set(a,c),e++,e>s&&(e=0,i=t,t=new Map)};return{get(a){let c=t.get(a);if(c!==void 0)return c;if((c=i.get(a))!==void 0)return o(a,c),c},set(a,c){t.has(a)?t.set(a,c):o(a,c)}}},X_="!",vb=s=>{const{separator:e,experimentalParseClassName:t}=s,i=e.length===1,o=e[0],a=e.length,c=h=>{const d=[];let f=0,g=0,_;for(let y=0;y<h.length;y++){let S=h[y];if(f===0){if(S===o&&(i||h.slice(y,y+a)===e)){d.push(h.slice(g,y)),g=y+a;continue}if(S==="/"){_=y;continue}}S==="["?f++:S==="]"&&f--}const m=d.length===0?h:h.substring(g),x=m.startsWith(X_),M=x?m.substring(1):m,A=_&&_>g?_-g:void 0;return{modifiers:d,hasImportantModifier:x,baseClassName:M,maybePostfixModifierPosition:A}};return t?h=>t({className:h,parseClassName:c}):c},xb=s=>{if(s.length<=1)return s;const e=[];let t=[];return s.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e},yb=s=>({cache:_b(s.cacheSize),parseClassName:vb(s),...db(s)}),Sb=/\s+/,Mb=(s,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:o}=e,a=[],c=s.trim().split(Sb);let h="";for(let d=c.length-1;d>=0;d-=1){const f=c[d],{modifiers:g,hasImportantModifier:_,baseClassName:m,maybePostfixModifierPosition:x}=t(f);let M=!!x,A=i(M?m.substring(0,x):m);if(!A){if(!M){h=f+(h.length>0?" "+h:h);continue}if(A=i(m),!A){h=f+(h.length>0?" "+h:h);continue}M=!1}const y=xb(g).join(":"),S=_?y+X_:y,w=S+A;if(a.includes(w))continue;a.push(w);const C=o(A,M);for(let b=0;b<C.length;++b){const U=C[b];a.push(S+U)}h=f+(h.length>0?" "+h:h)}return h};function Eb(){let s=0,e,t,i="";for(;s<arguments.length;)(e=arguments[s++])&&(t=j_(e))&&(i&&(i+=" "),i+=t);return i}const j_=s=>{if(typeof s=="string")return s;let e,t="";for(let i=0;i<s.length;i++)s[i]&&(e=j_(s[i]))&&(t&&(t+=" "),t+=e);return t};function wb(s,...e){let t,i,o,a=c;function c(d){const f=e.reduce((g,_)=>_(g),s());return t=yb(f),i=t.cache.get,o=t.cache.set,a=h,h(d)}function h(d){const f=i(d);if(f)return f;const g=Mb(d,t);return o(d,g),g}return function(){return a(Eb.apply(null,arguments))}}const Jt=s=>{const e=t=>t[s]||[];return e.isThemeGetter=!0,e},Y_=/^\[(?:([a-z-]+):)?(.+)\]$/i,Tb=/^\d+\/\d+$/,bb=new Set(["px","full","screen"]),Ab=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Cb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Rb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Pb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Lb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,yr=s=>Uo(s)||bb.has(s)||Tb.test(s),es=s=>Go(s,"length",zb),Uo=s=>!!s&&!Number.isNaN(Number(s)),Ed=s=>Go(s,"number",Uo),za=s=>!!s&&Number.isInteger(Number(s)),Db=s=>s.endsWith("%")&&Uo(s.slice(0,-1)),pt=s=>Y_.test(s),ts=s=>Ab.test(s),Nb=new Set(["length","size","percentage"]),Ib=s=>Go(s,Nb,q_),Ub=s=>Go(s,"position",q_),Fb=new Set(["image","url"]),Ob=s=>Go(s,Fb,Vb),kb=s=>Go(s,"",Bb),Ba=()=>!0,Go=(s,e,t)=>{const i=Y_.exec(s);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1},zb=s=>Cb.test(s)&&!Rb.test(s),q_=()=>!1,Bb=s=>Pb.test(s),Vb=s=>Lb.test(s),Hb=()=>{const s=Jt("colors"),e=Jt("spacing"),t=Jt("blur"),i=Jt("brightness"),o=Jt("borderColor"),a=Jt("borderRadius"),c=Jt("borderSpacing"),h=Jt("borderWidth"),d=Jt("contrast"),f=Jt("grayscale"),g=Jt("hueRotate"),_=Jt("invert"),m=Jt("gap"),x=Jt("gradientColorStops"),M=Jt("gradientColorStopPositions"),A=Jt("inset"),y=Jt("margin"),S=Jt("opacity"),w=Jt("padding"),C=Jt("saturate"),b=Jt("scale"),U=Jt("sepia"),P=Jt("skew"),D=Jt("space"),E=Jt("translate"),N=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",pt,e],B=()=>[pt,e],Q=()=>["",yr,es],se=()=>["auto",Uo,pt],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],re=()=>["","0",pt],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[Uo,pt];return{cacheSize:500,separator:":",theme:{colors:[Ba],spacing:[yr,es],blur:["none","",ts,pt],brightness:k(),borderColor:[s],borderRadius:["none","","full",ts,pt],borderSpacing:B(),borderWidth:Q(),contrast:k(),grayscale:re(),hueRotate:k(),invert:re(),gap:B(),gradientColorStops:[s],gradientColorStopPositions:[Db,es],inset:O(),margin:O(),opacity:k(),padding:B(),saturate:k(),scale:k(),sepia:re(),skew:k(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",pt]}],container:["container"],columns:[{columns:[ts]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),pt]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",za,pt]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",pt]}],grow:[{grow:re()}],shrink:[{shrink:re()}],order:[{order:["first","last","none",za,pt]}],"grid-cols":[{"grid-cols":[Ba]}],"col-start-end":[{col:["auto",{span:["full",za,pt]},pt]}],"col-start":[{"col-start":se()}],"col-end":[{"col-end":se()}],"grid-rows":[{"grid-rows":[Ba]}],"row-start-end":[{row:["auto",{span:[za,pt]},pt]}],"row-start":[{"row-start":se()}],"row-end":[{"row-end":se()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",pt]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",pt]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",pt,e]}],"min-w":[{"min-w":[pt,e,"min","max","fit"]}],"max-w":[{"max-w":[pt,e,"none","full","min","max","fit","prose",{screen:[ts]},ts]}],h:[{h:[pt,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[pt,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[pt,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[pt,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ts,es]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ed]}],"font-family":[{font:[Ba]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",pt]}],"line-clamp":[{"line-clamp":["none",Uo,Ed]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",yr,pt]}],"list-image":[{"list-image":["none",pt]}],"list-style-type":[{list:["none","disc","decimal",pt]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[s]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[s]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",yr,es]}],"underline-offset":[{"underline-offset":["auto",yr,pt]}],"text-decoration-color":[{decoration:[s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),Ub]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ib]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ob]}],"bg-color":[{bg:[s]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:K()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[yr,pt]}],"outline-w":[{outline:[yr,es]}],"outline-color":[{outline:[s]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[s]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[yr,es]}],"ring-offset-color":[{"ring-offset":[s]}],shadow:[{shadow:["","inner","none",ts,kb]}],"shadow-color":[{shadow:[Ba]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",ts,pt]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[_]}],saturate:[{saturate:[C]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[_]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[c]}],"border-spacing-x":[{"border-spacing-x":[c]}],"border-spacing-y":[{"border-spacing-y":[c]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",pt]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",pt]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",pt]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[za,pt]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",pt]}],accent:[{accent:["auto",s]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pt]}],"caret-color":[{caret:[s]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pt]}],fill:[{fill:[s,"none"]}],"stroke-w":[{stroke:[yr,es,Ed]}],stroke:[{stroke:[s,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Gb=wb(Hb);function Sr(...s){return Gb(hb(s))}const X0={now:"pill-ink",near:"bg-zen-terracotta text-white",week:"bg-[rgb(var(--zen-white)/0.92)] text-zen-graphite ring-1 ring-zen-terracotta/50",far:"bg-[rgb(var(--zen-white)/0.78)] text-zen-graphite-muted",plain:"bg-[rgb(var(--zen-white)/0.9)] text-zen-graphite"};function Wb(s,e,t,i,o,a){const c=[],h=s.filter(d=>d.visible&&(d.priority>0||o||d.id===a)).sort((d,f)=>f.priority-d.priority);for(const d of h){const f=Math.min(230,Math.max(d.text.length,(d.sub??"").length+2)*6.6+26),g=d.sub?38:24,_=[[26,-g-30],[-f-26,-g-30],[34,10],[-f-34,10],[-f/2,-g-58]];for(const[m,x]of _){const M=d.x+m,A=d.y+x;if(!(M<8||A<12||M+f>t-8||A+g>i-8)&&!e.some(y=>y.x>M-16&&y.x<M+f+16&&y.y>A-16&&y.y<A+g+16)&&!c.some(y=>M<y.lx+y.w+8&&M+f+8>y.lx&&A<y.ly+y.h+6&&A+g+6>y.ly)){c.push({...d,lx:M,ly:A,w:f,h:g});break}}}return c}function Xb({data:s,phase:e,weather:t,still:i=!1,focus:o=null,onFocus:a,onPick:c,className:h}){const d=an.useRef(null),f=an.useRef(null),g=an.useRef(null),[_,m]=an.useState([]),[x,M]=an.useState(null),[A,y]=an.useState(!1),S=an.useRef(o);S.current=o;const w=an.useRef(null);w.current=x?.pick.kind==="course"||x?.pick.kind==="deadline"?x.pick.id:null,an.useEffect(()=>{const P=d.current,D=f.current;if(!P||!D)return;let E;try{E=new ub(D,s)}catch{y(!0);return}g.current=E;let N=0;E.onFrame=()=>{N+=1,!(N%4!==0&&!document.hidden)&&m(Wb(E.project(P.clientWidth,P.clientHeight),E.obstacles(P.clientWidth,P.clientHeight),P.clientWidth,P.clientHeight,!!S.current||E.distance<19,w.current))};const V=new ResizeObserver(()=>E.resize(P.clientWidth,P.clientHeight));return V.observe(P),E.resize(P.clientWidth,P.clientHeight),E.start(),()=>{V.disconnect(),E.dispose(),g.current=null}},[s]),an.useEffect(()=>g.current?.setPhase(e),[e,A]),an.useEffect(()=>g.current?.setWeather(t),[t,A]),an.useEffect(()=>g.current?.setStill(i),[i,A]),an.useEffect(()=>g.current?.focus(o),[o]);const C=e==="night"?{sky:["#0d1430","#1a2752","#34436f"],glow:"#5b74c8",ink:"#e6e9f7"}:jx[e],b=P=>{const D=d.current.getBoundingClientRect();return{x:P.clientX-D.left,y:P.clientY-D.top,w:D.width,h:D.height}},U=an.useRef(null);return ot.jsxs("div",{ref:d,"data-testid":"world","data-phase":e,className:Sr("relative overflow-hidden",h),style:{background:`linear-gradient(180deg, ${C.sky[0]} 0%, ${C.sky[1]} 52%, ${C.sky[2]} 100%)`,transition:"background 1400ms ease"},children:[ot.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0",style:{background:`radial-gradient(60% 55% at 72% 78%, ${C.glow}88 0%, transparent 70%)`,transition:"background 1400ms ease"}}),ot.jsx("canvas",{ref:f,className:Sr("absolute inset-0 h-full w-full touch-none",x?"cursor-pointer":"cursor-grab active:cursor-grabbing"),role:"img","aria-label":"Your semester as an island: a hill for each course, a house for each lecture, a tree for each objective",onPointerDown:P=>{U.current={x:P.clientX,y:P.clientY}},onPointerMove:P=>{const D=b(P),E=g.current?.pick(D.x,D.y,D.w,D.h)??null;M(E?{pick:E,x:D.x,y:D.y}:null)},onPointerLeave:()=>M(null),onClick:P=>{if(U.current&&Math.hypot(P.clientX-U.current.x,P.clientY-U.current.y)>5)return;const D=b(P),E=g.current?.pick(D.x,D.y,D.w,D.h);E&&c?.(E)}}),A&&ot.jsx("p",{className:"absolute inset-x-0 top-1/2 text-center text-[14px] text-zen-graphite",children:"This computer cannot draw the island (no 3D graphics available). Everything on it is in the lists."}),ot.jsx("svg",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 h-full w-full",children:_.map(P=>{const D=P.lx+(P.lx>P.x?0:P.w),E=P.ly+P.h/2;return ot.jsxs("g",{stroke:C.ink,strokeOpacity:"0.55",strokeWidth:"1",fill:"none",children:[ot.jsx("path",{d:`M${P.x},${P.y} L${P.x+(D-P.x)*.45},${E} L${D},${E}`}),ot.jsx("circle",{cx:P.x,cy:P.y,r:"2.2",fill:C.ink,stroke:"none"})]},P.id)})}),_.map(P=>{const D=ot.jsxs(ot.Fragment,{children:[ot.jsx("span",{className:"block truncate text-[12px] font-medium leading-tight",children:P.text}),P.sub&&ot.jsx("span",{className:"block truncate text-[10.5px] leading-tight opacity-70",children:P.sub})]}),E={left:P.lx,top:P.ly,width:P.w,height:P.h};return P.kind==="course"?ot.jsx("button",{type:"button","data-testid":"world-course",onClick:()=>a?.(o===P.id?null:P.id),"aria-pressed":o===P.id,title:o===P.id?"Back to the whole island":`Go to ${P.text}`,className:Sr("absolute flex flex-col justify-center rounded-xl px-2.5 text-left shadow-[var(--rail-shadow)] transition-colors",o===P.id?"pill-ink !rounded-xl":`${X0.plain} hover:bg-white`),style:E,children:D},P.id):ot.jsx("span",{"data-testid":"world-label","data-tone":P.tone,className:Sr("pointer-events-none absolute flex flex-col justify-center rounded-xl px-2.5",X0[P.tone]),style:E,children:D},P.id)}),x&&ot.jsxs("div",{role:"status","data-testid":"world-hover",className:"glass pointer-events-none absolute bottom-4 left-1/2 z-10 flex max-w-[80%] -translate-x-1/2 items-baseline gap-2 rounded-full px-4 py-1.5",children:[ot.jsx("span",{className:"whitespace-nowrap text-[12.5px] font-medium text-zen-graphite",children:x.pick.title}),ot.jsx("span",{className:"truncate text-[11.5px] text-zen-graphite-muted",children:x.pick.detail})]})]})}const kn=(s,e,t,i)=>Array.from({length:s},(o,a)=>a<e?"ready":a<e+t?"getting":a<e+t+i?"shaky":"none"),j0={weekEnergy:.45,links:[{from:"bio",to:"chem",topic:"Osmosis"}],courses:[{id:"bio",name:"Biology",color:"#a9c99a",coverage:.7,lectures:[{id:"b6",name:"Lecture 6",secure:.9,objectives:kn(6,5,1,0)},{id:"b7",name:"Lecture 7",secure:.65,objectives:kn(6,3,2,1)},{id:"b8",name:"Lecture 8",secure:.35,objectives:kn(5,1,2,1)},{id:"b9",name:"Lecture 9",secure:.1,objectives:kn(5,0,1,1)}],deadlines:[{id:"b-exam",name:"Exam 2",days:9,exam:!0},{id:"b-quiz",name:"Weekly quiz",days:2}]},{id:"chem",name:"Chemistry",color:"#b9b3e0",coverage:.55,lectures:[{id:"c3",name:"Unit 3",secure:.8,objectives:kn(5,4,1,0)},{id:"c4",name:"Unit 4",secure:.5,objectives:kn(6,2,2,1)},{id:"c5",name:"Unit 5",secure:.1,objectives:kn(5,0,1,1)}],deadlines:[{id:"c-lab",name:"Lab report",days:5}]},{id:"phys",name:"Physics",color:"#a9cdd6",coverage:.85,lectures:[{id:"p1",name:"Lecture 1",secure:.95,objectives:kn(6,6,0,0)},{id:"p2",name:"Lecture 2",secure:.85,objectives:kn(6,5,1,0)},{id:"p3",name:"Lecture 3",secure:.65,objectives:kn(5,3,1,1)}],deadlines:[{id:"p-q",name:"Quiz",days:16}]},{id:"calc",name:"Calculus",color:"#e6c1a0",coverage:.2,unread:!0,lectures:[{id:"k1",name:"Lecture 1",secure:.3,objectives:kn(5,1,1,1)},{id:"k2",name:"Lecture 2",secure:0,objectives:kn(5,0,0,0)},{id:"k3",name:"Lecture 3",secure:0,objectives:kn(4,0,0,0)}],deadlines:[{id:"k-ps",name:"Problem set",days:3}]},{id:"psych",name:"Psychology",color:"#dfb0b6",coverage:.6,lectures:[{id:"y1",name:"Chapter 1",secure:.85,objectives:kn(6,5,1,0)},{id:"y2",name:"Chapter 2",secure:.55,objectives:kn(6,3,2,1)},{id:"y3",name:"Chapter 3",secure:.25,objectives:kn(5,1,1,2)}],deadlines:[{id:"y-mid",name:"Midterm",days:23,exam:!0}]}]},jb=s=>({...s,weekEnergy:.9,courses:s.courses.map(e=>({...e,unread:!1,coverage:Math.min(1,e.coverage+.25),lectures:e.lectures.map(t=>({...t,secure:Math.min(1,t.secure+.3),objectives:t.objectives.map(i=>i==="none"?"shaky":i==="shaky"?"getting":"ready")})),deadlines:e.deadlines.filter(t=>t.days>7).map(t=>({...t,days:t.days-7}))}))}),Y0=[{key:"houses",name:"Houses",course:"bio",text:"Every lecture is a house. Its windows light up as you come to understand it."},{key:"trees",name:"Trees",course:"phys",text:"Every objective is a tree. It starts as a sapling and grows as you practise it."},{key:"flags",name:"Flags",course:"bio",text:"A flag is something due. The closer it gets, the more it stands out."},{key:"windmills",name:"Windmills",course:null,text:"The windmills turn faster the more you studied this week."},{key:"mist",name:"Mist",course:"calc",text:"Mist hangs over pages you haven't opened yet, and lifts as you read them."}],q0={houses:[31,48],trees:[40,66],flags:[56,15],windmills:[38,32],mist:[56,42]},Yb=[["dawn","Dawn"],["morning","Morning"],["midday","Midday"],["golden","Golden"],["dusk","Dusk"],["night","Night"]],qb={dawn:"dawn",morning:"dawn",midday:"golden",golden:"golden",dusk:"dusk",night:"night"},$_=s=>s<=0?"due today":s===1?"tomorrow":`in ${s} days`,K_=s=>`${Math.round(s*100)}%`;function Zc(s){const e=[...s.deadlines].sort((i,o)=>i.days-o.days)[0],t=[...s.lectures].sort((i,o)=>i.secure-o.secure)[0];return{title:s.name,text:s.unread?`This hill is ${s.name}. Most of it is still in mist: pages not opened yet.`:`This hill is ${s.name}. The greener and fuller it is, the more of it you know.`,facts:[`${K_(s.coverage)} covered`,e?`Next: ${e.name}, ${$_(e.days)}`:"Nothing due soon",t?`Youngest trees: ${t.name}`:""].filter(Boolean)}}function $b(s,e){const t=e.courses;if(s.kind==="course")return Zc(t.find(c=>c.id===s.id));if(s.kind==="deadline"){const c=t.find(d=>d.deadlines.some(f=>f.id===s.id)),h=c?.deadlines.find(d=>d.id===s.id);return{title:s.title,text:`A flag is something due. This one is ${c?.name}'s ${s.title.toLowerCase()}, ${h?$_(h.days):""}.`,facts:c?Zc(c).facts:[]}}const i=s.id.split(":")[0],o=t.find(c=>c.lectures.some(h=>h.id===i)),a=o?.lectures.find(c=>c.id===i);return s.kind==="lecture"&&a&&o?{title:`${o.name}, ${a.name}`,text:`A house is a lecture. This one is ${K_(a.secure)} understood, and its windows light up as that grows.`,facts:[`${a.objectives.length} objectives`,`${a.objectives.filter(c=>c==="ready").length} secure`]}:{title:o?`${o.name}, ${a?.name}`:s.title,text:`A tree is one objective. ${s.detail}.`,facts:["Practise it and the tree grows"]}}function Kb(){if(new URLSearchParams(location.search).has("still")||matchMedia("(prefers-reduced-motion: reduce)").matches||innerWidth<700)return!1;try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Zb(){const s=an.useMemo(Kb,[]),[e,t]=an.useState(()=>Xx(new Date,Gx()).phase),[i,o]=an.useState(!1),a=an.useMemo(()=>i?jb(j0):j0,[i]),[c,h]=an.useState(null),[d,f]=an.useState(null),[g,_]=an.useState(null),[m,x]=an.useState(!0),M=()=>parent.postMessage("nota-island-close","*");an.useEffect(()=>{const C=U=>U.key==="Escape"&&M();addEventListener("keydown",C);const b=setTimeout(()=>x(!1),7e3);return()=>(removeEventListener("keydown",C),clearTimeout(b))},[]);const A=C=>{x(!1),f(C.key),h(C.course),_({title:C.name,text:C.text})},y=C=>{x(!1),f(null),h(c===C.id?null:C.id),_(Zc(C))},S="h-8 rounded-full px-3 text-[13px] font-medium transition-colors",w="text-zen-graphite hover:bg-white/70";return ot.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#f6efe9] text-zen-graphite",children:[s?ot.jsx(Xb,{data:a,phase:e,weather:"clear",focus:c,onFocus:C=>{h(C);const b=a.courses.find(U=>U.id===C);b&&_(Zc(b))},onPick:C=>(x(!1),f(null),_($b(C,a))),className:"absolute inset-0"}):ot.jsx("div",{className:"absolute inset-0 grid place-items-center p-3 pb-44 pt-28",children:ot.jsxs("div",{className:"relative w-full max-w-[1100px] overflow-hidden rounded-[28px]",style:{aspectRatio:"1360 / 880"},children:[ot.jsx("img",{src:`../assets/island-${qb[e]}.webp`,alt:"The study island: a hill for each course, houses for lectures, trees for objectives, flags for what is due",className:"absolute inset-0 h-full w-full object-cover"}),Y0.map(C=>ot.jsx("button",{type:"button","aria-label":`${C.name}: ${C.text}`,onClick:()=>A(C),className:Sr("absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md transition-shadow",d===C.key?"ring-[10px] ring-white/60":"ring-[6px] ring-white/35"),style:{left:`${q0[C.key][0]}%`,top:`${q0[C.key][1]}%`},children:ot.jsx("span",{className:"absolute inset-2 rounded-full bg-zen-terracotta"})},C.key))]})}),ot.jsxs("div",{className:"glass absolute left-3 top-3 max-w-[calc(100%-80px)] rounded-[24px] p-3 sm:left-5 sm:top-5 sm:max-w-[560px]",children:[ot.jsx("p",{className:"px-1 text-[15px] font-medium",children:"Your semester, as a place"}),ot.jsx("div",{className:"mt-2 flex flex-wrap gap-1",role:"group","aria-label":"What is on the island",children:Y0.map(C=>ot.jsx("button",{type:"button","aria-pressed":d===C.key,onClick:()=>A(C),className:Sr(S,d===C.key?"pill-ink":w),children:C.name},C.key))}),ot.jsx("div",{className:"mt-1 flex flex-wrap gap-1 border-t border-black/5 pt-2",role:"group","aria-label":"Courses",children:a.courses.map(C=>ot.jsxs("button",{type:"button","aria-pressed":c===C.id,onClick:()=>y(C),className:Sr(S,"flex items-center gap-1.5",c===C.id?"pill-ink":w),children:[ot.jsx("i",{className:"h-2 w-2 rounded-full",style:{background:C.color}}),C.name]},C.id))})]}),ot.jsx("button",{type:"button",onClick:M,"aria-label":"Close the island",className:"glass absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full sm:right-5 sm:top-5",children:ot.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14","aria-hidden":!0,children:ot.jsx("path",{d:"M2 2l10 10M12 2L2 12",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})}),g&&ot.jsxs("section",{"aria-live":"polite",className:"glass absolute bottom-[64px] left-3 w-[min(360px,calc(100%-24px))] rounded-[24px] px-5 py-4 sm:bottom-5 sm:left-5",children:[ot.jsx("p",{className:"font-['Instrument_Serif',serif] text-[24px] leading-tight",children:g.title}),ot.jsx("p",{className:"mt-1 text-[14px] leading-relaxed text-zen-graphite-muted",children:g.text}),g.facts&&g.facts.length>0&&ot.jsx("ul",{className:"mt-2 flex flex-wrap gap-1.5",children:g.facts.map(C=>ot.jsx("li",{className:"rounded-full bg-black/5 px-2.5 py-1 text-[12px]",children:C},C))})]}),ot.jsxs("div",{className:"glass absolute bottom-3 right-3 flex max-w-[calc(100%-24px)] flex-wrap items-center justify-end gap-1 rounded-[22px] p-1.5 sm:bottom-5 sm:right-5",style:g?{bottom:void 0}:void 0,children:[ot.jsx("div",{role:"group","aria-label":"Time of day",className:"flex flex-wrap gap-0.5",children:Yb.map(([C,b])=>ot.jsx("button",{type:"button","aria-pressed":e===C,onClick:()=>t(C),className:Sr(S,"h-7 px-2 text-[12px] sm:px-2.5 sm:text-[12.5px]",e===C?"bg-white shadow-sm":w),children:b},C))}),s&&ot.jsx("button",{type:"button","aria-pressed":i,onClick:()=>(o(C=>!C),_({title:i?"Today":"A week of studying later",text:i?"Back to where the semester stands today.":"Saplings have grown, the mist over Calculus has lifted, and the flags are a week closer."})),className:Sr(S,"h-7 text-[12.5px]",i?"pill-ink":"bg-white/70"),children:i?"Back to today":"A week later"})]}),m&&ot.jsxs("div",{className:"glass pointer-events-none absolute bottom-24 right-5 flex max-w-[300px] items-center gap-3 rounded-[22px] py-2 pl-2 pr-4 max-sm:bottom-28",children:[ot.jsx("img",{src:"../assets/buddy-waving-sm.webp",alt:"",className:"h-12 w-auto"}),ot.jsx("p",{className:"text-[13.5px] leading-snug",children:s?"Drag to turn it, scroll to zoom, and tap anything to ask what it is.":"Tap a white dot, or a word up top, to see what it means."})]})]})}Vx.createRoot(document.getElementById("root")).render(ot.jsx(Zb,{}));
