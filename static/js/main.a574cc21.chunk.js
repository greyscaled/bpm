(this["webpackJsonp@vapurrmaid/bpm-react-app"]=this["webpackJsonp@vapurrmaid/bpm-react-app"]||[]).push([[0],{696:function(e,t,a){e.exports=a(716)},712:function(e,t,a){},713:function(e,t,a){},714:function(e){e.exports=JSON.parse('{"name":"@vapurrmaid/bpm-react-app","version":"0.3.4","private":true,"homepage":"https://vapurrmaid.ca/bpm","scripts":{"start":"react-scripts start","build":"react-scripts build"},"dependencies":{"@vapurrmaid/bpm":"^0.1.7","react":"^16.13.1","react-dom":"^16.13.1","tone":"14.5.43"},"devDependencies":{"@types/node":"^14.11.1","@types/react":"^16.9.32","@types/react-dom":"^16.9.6","node-sass":"^4.13.1","react-scripts":"^3.4.1","typescript":"^4.0.3"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},715:function(e,t,a){},716:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(534),o=a.n(l),c=a(12),i=a(535),s=a(3),u=a(4),f=a(37),p=function(){function e(){var t=this;Object(s.a)(this,e),this.callback=void 0,this._beatsPerMeasure=4,this._currentBeat=1,this.loop=void 0,this.createLoopCallback=function(){return function(a){var n=t._currentBeat;f.a.schedule((function(){t.callback({currentBeat:n,beatsPerMeasure:t._beatsPerMeasure,time:a})}),a),e.synth.triggerAttackRelease(1===n?"G#3":"G3","4n",a);var r=n+1;t._currentBeat=r<=t._beatsPerMeasure?r:1}},this.loop=new f.b,this.loop.callback=this.createLoopCallback(),this.callback=function(){}}return Object(u.a)(e,[{key:"addClickCallback",value:function(e){this.callback=e}},{key:"setBPM",value:function(e){if(e<0||e>220)throw new Error("bpm must be in the range (0, 220). Received: ".concat(e));f.d.bpm.value=e}},{key:"setBeatsPerMeasure",value:function(e){if(!Number.isInteger(e))throw new Error("beatsPerMeasure must be an integer. Received: ".concat(e));if(e<2)throw new Error("beatsPerMeasure must be greater than or equal to 2. Received: ".concat(e));this._beatsPerMeasure=e,this.loop.callback=this.createLoopCallback()}},{key:"start",value:function(){var e=this;return new Promise((function(t,a){Object(f.e)().then((function(){f.d.start("+0.1"),e.loop.start(),t()})).catch((function(){a()}))}))}},{key:"stop",value:function(){f.d.pause(),this.loop.stop()}},{key:"beatsPerMeasure",get:function(){return this._beatsPerMeasure}},{key:"currentBeat",get:function(){return this._currentBeat}}]),e}();p.MAX_BEATS_PER_MINUTE=220,p.MIN_BEATS_PER_MINUTE=1,p.MIN_BEATS_PER_MEASURE=2,p.synth=(new f.c).toDestination();var m=new p,b=Object(n.createContext)(m),d=function(){var e=Object(n.useContext)(b);return Object(n.useRef)(e)},v=function(e){var t=e.children;return r.a.createElement(b.Provider,{value:m},t)},h=new Intl.NumberFormat("en",{maximumSignificantDigits:3});a(712);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("path",{d:"M35.875 23.268C37.2083 24.0378 37.2083 25.9623 35.875 26.7321L14.125 39.2894C12.7917 40.0592 11.125 39.097 11.125 37.5574L11.125 12.4426C11.125 10.903 12.7917 9.94078 14.125 10.7106L35.875 23.268Z",fill:"black"}),O=function(e){var t=e.svgRef,a=e.title,n=g(e,["svgRef","title"]);return r.a.createElement("svg",E({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,y)},w=r.a.forwardRef((function(e,t){return r.a.createElement(O,E({svgRef:t},e))}));a.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.4201 35.563C14.0242 37.383 12.2148 40.6775 13.3278 43.1559C14.5151 45.7996 18.5949 46.5457 22.4344 44.8213C26.274 43.097 28.4266 39.5519 27.2393 36.9083C26.0521 34.2647 21.9723 33.5186 18.1327 35.2429C17.8928 35.3507 17.6465 35.4417 17.4201 35.563Z",fill:"black"}),N=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.7875 4.74994V38.3375H26.2875V4.74994H27.7875Z",fill:"black"}),j=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.0329 5.70978C26.4704 12.0223 31.8754 14.2835 34.5329 17.2098C37.0589 19.9912 37.9816 23.1995 37.8784 26.2054C37.8508 27.0079 37.6329 30.4855 35.2639 33.9721C38.4318 25.225 35.4824 21.714 32.6009 18.9205C29.111 15.5371 26.5148 12.3483 27.0329 5.70978Z",fill:"black"}),P=function(e){var t=e.svgRef,a=e.title,n=k(e,["svgRef","title"]);return r.a.createElement("svg",C({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,R,N,j)},M=r.a.forwardRef((function(e,t){return r.a.createElement(P,C({svgRef:t},e))}));a.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1458 44.6713C31.5416 42.8513 33.351 39.5567 32.238 37.0783C31.0507 34.4347 26.971 33.6886 23.1314 35.4129C19.2918 37.1373 17.1392 40.6823 18.3265 43.326C19.5138 45.9696 23.5935 46.7157 27.4331 44.9913C27.673 44.8836 27.9194 44.7926 28.1458 44.6713ZM27.036 42.4291C26.7948 42.5534 26.5505 42.6471 26.2948 42.762C23.0218 44.2319 19.8606 44.301 19.2387 42.9163C18.6168 41.5315 20.7685 39.2147 24.0416 37.7447C27.3147 36.2748 30.4758 36.2056 31.0977 37.5904C31.671 38.867 29.8826 40.962 27.036 42.4291Z",fill:"black"}),_=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.5283 4.75031V38.3379H31.0283V4.75031H32.5283Z",fill:"black"}),I=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return r.a.createElement("svg",S({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,B,_)},A=r.a.forwardRef((function(e,t){return r.a.createElement(I,S({svgRef:t},e))}));a.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Z=r.a.createElement("path",{d:"M35.875 23.268C37.2083 24.0378 37.2083 25.9623 35.875 26.7321L14.125 39.2894C12.7917 40.0592 11.125 39.097 11.125 37.5574L11.125 12.4426C11.125 10.903 12.7917 9.94078 14.125 10.7106L35.875 23.268Z",fill:"black"}),L=function(e){var t=e.svgRef,a=e.title,n=F(e,["svgRef","title"]);return r.a.createElement("svg",T({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,Z)},D=r.a.forwardRef((function(e,t){return r.a.createElement(L,T({svgRef:t},e))}));a.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1457 44.6712C31.5416 42.8513 33.351 39.5567 32.238 37.0783C31.0507 34.4346 26.9709 33.6886 23.1314 35.4129C19.2918 37.1373 17.1392 40.6823 18.3265 43.3259C19.5137 45.9696 23.5935 46.7156 27.4331 44.9913C27.673 44.8835 27.9193 44.7926 28.1457 44.6712Z",fill:"black"}),W=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.5282 4.75027V38.3379H31.0282V4.75027H32.5282Z",fill:"black"}),q=function(e){var t=e.svgRef,a=e.title,n=V(e,["svgRef","title"]);return r.a.createElement("svg",U({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,H,W)},J=r.a.forwardRef((function(e,t){return r.a.createElement(q,U({svgRef:t},e))}));a.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.42 36.813C14.0242 38.6329 12.2147 41.9275 13.3278 44.4059C14.5151 47.0496 18.5948 47.7957 22.4344 46.0713C26.2739 44.3469 28.4265 40.8019 27.2393 38.1583C26.052 35.5146 21.9723 34.7686 18.1327 36.4929C17.8927 36.6007 17.6464 36.6916 17.42 36.813Z",fill:"black"}),$=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.7875 2.74991V39.5875H26.2875V2.74991H27.7875Z",fill:"black"}),z=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5328 3.45975C25.9703 9.77225 31.3754 12.0335 34.0328 14.9597C36.5588 17.7412 37.4815 20.9495 37.3783 23.9553C37.3508 24.7579 37.1329 28.2355 34.7639 31.7221C37.9318 22.975 34.9823 19.464 32.1009 16.6705C28.611 13.287 26.0148 10.0983 26.5328 3.45975Z",fill:"black"}),K=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2994 9.49376C25.7369 15.8063 31.1419 18.0675 33.7994 20.9938C36.3253 23.7752 37.248 26.9835 37.1449 29.9894C37.1173 30.7919 36.8994 34.2695 34.5304 37.7561C37.6983 29.009 34.7489 25.498 31.8675 22.7045C28.3775 19.321 25.7813 16.1323 26.2994 9.49376Z",fill:"black"}),Q=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",X({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,Y,$,z,K)},ee=r.a.forwardRef((function(e,t){return r.a.createElement(Q,X({svgRef:t},e))}));a.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=r.a.createElement("path",{d:"M10.427 12.427C10.427 11.3224 11.3224 10.427 12.427 10.427H37.573C38.6775 10.427 39.573 11.3224 39.573 12.427V37.573C39.573 38.6776 38.6775 39.573 37.573 39.573H12.427C11.3224 39.573 10.427 38.6776 10.427 37.573V12.427Z",fill:"black"}),re=function(e){var t=e.svgRef,a=e.title,n=ae(e,["svgRef","title"]);return r.a.createElement("svg",te({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,ne)},le=r.a.forwardRef((function(e,t){return r.a.createElement(re,te({svgRef:t},e))}));a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ie=r.a.createElement("path",{opacity:.9,d:"M23.7451 15.6605C15.5596 15.9534 9.07281 19.8131 9.07281 24.504C9.07281 29.3857 16.0962 33.3476 24.75 33.3476C33.4038 33.3476 40.4272 29.3857 40.4272 24.504C40.4272 19.6224 33.4038 15.6605 24.75 15.6605C24.412 15.6605 24.0778 15.6486 23.7451 15.6605ZM21.1322 17.3689C23.3156 17.1454 26.0653 18.1577 28.3678 20.2329C31.8169 23.3413 32.9845 27.6999 30.9807 29.9809L30.9305 30.0312C28.887 32.2986 24.3986 31.5986 20.9312 28.4735C17.4638 25.3485 16.3252 20.9426 18.3686 18.6753C19.0551 17.9136 20.0277 17.4819 21.1322 17.3689Z",fill:"black"}),se=function(e){var t=e.svgRef,a=e.title,n=ce(e,["svgRef","title"]);return r.a.createElement("svg",oe({width:50,height:50,viewBox:"0 0 50 50",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,ie)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(se,oe({svgRef:t},e))}));a.p;var fe=function(){var e=d(),t=Object(n.useState)(120),a=Object(c.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(4),u=Object(c.a)(s,2),f=u[0],m=u[1],b=Object(n.useState)("quarter"),v=Object(c.a)(b,2),E=v[0],g=v[1],y=new i.BPM(l);e.current.setBPM(l);var O,C=[{beats:y.numberOfBeatsFor("sixteenth",E),note:r.a.createElement(ee,{className:"note-icon"}),seconds:y.durationFor("sixteenth",E),value:"sixteenth"},{beats:y.numberOfBeatsFor("eigth",E),note:r.a.createElement(M,{className:"note-icon"}),seconds:y.durationFor("eigth",E),value:"eigth"},{beats:y.numberOfBeatsFor("quarter",E),note:r.a.createElement(J,{className:"note-icon"}),seconds:y.durationFor("quarter",E),value:"quarter"},{beats:y.numberOfBeatsFor("half",E),note:r.a.createElement(A,{className:"note-icon"}),seconds:y.durationFor("half",E),value:"half"},{beats:y.numberOfBeatsFor("whole",E),note:r.a.createElement(ue,{className:"note-icon"}),seconds:y.durationFor("whole",E),value:"whole"}];return r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{className:"calculator-top"},r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"BPM Controls"),r.a.createElement("div",{className:"calculator-bpm"},r.a.createElement("div",{className:"calculator-bpm-btns calculator-top-btn-group"},r.a.createElement("button",{"aria-label":"Increase beats per minute",className:"calculator-top-btn",onClick:function(){l+1<=p.MAX_BEATS_PER_MINUTE&&o(l+1)}},r.a.createElement(w,{className:"arrow arrow--up"})),r.a.createElement("button",{"aria-label":"Decrease beats per minute",className:"calculator-top-btn",onClick:function(){l-1>=p.MIN_BEATS_PER_MINUTE&&o(l-1)}},r.a.createElement(w,{className:"arrow arrow--down"}))),r.a.createElement("div",{className:"calculator-bpm-displays"},r.a.createElement("input",{className:"bpm-display",disabled:!0,id:"bpmDisplay",max:p.MAX_BEATS_PER_MINUTE,min:p.MIN_BEATS_PER_MINUTE,type:"text",value:l}),r.a.createElement("div",{className:"calculator-bpm-displays-bottom"},r.a.createElement("div",{className:"beepers"},r.a.createElement(pe,null)),r.a.createElement("label",{className:"label",htmlFor:"bpmDisplay"},"BPM"))))),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Time Signature Controls"),r.a.createElement("div",{className:"calculator-signature"},r.a.createElement("div",{className:"calculator-signature-lcd"},r.a.createElement("label",{htmlFor:"beatsPerMeasureDisplay",style:{display:"none"}},"Beats per measure"),r.a.createElement("input",{className:"time-signature",disabled:!0,id:"beatsPerMeasureDisplay",min:p.MIN_BEATS_PER_MEASURE,type:"text",value:f}),r.a.createElement("label",{htmlFor:"beatNoteDisplay",style:{display:"none"}},"Beat note"),r.a.createElement("input",{className:"time-signature",disabled:!0,id:"beatNoteDisplay",type:"text",value:(O=E,"thirtysecondth"===O?32:"sixteenth"===O?16:"eigth"===O?8:"quarter"===O?4:"half"===O?2:1)})),r.a.createElement("div",{className:"calculator-top-btn-group"},r.a.createElement("button",{"aria-label":"Increase beats per measure",className:"calculator-top-btn",onClick:function(){var t=f+1;m(t),e.current.setBeatsPerMeasure(t)}},r.a.createElement(w,{className:"arrow arrow--up"})),r.a.createElement("button",{"aria-label":"Decrease beats per measure",className:"calculator-top-btn",disabled:f===p.MIN_BEATS_PER_MEASURE,onClick:function(){var t=f-1;t>=p.MIN_BEATS_PER_MEASURE&&(m(t),e.current.setBeatsPerMeasure(t))}},r.a.createElement(w,{className:"arrow arrow--down"})))))),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Note Information"),r.a.createElement("section",{className:"note-info"},C.map((function(e){var t,a=e.beats,n=e.note,o=e.seconds,c=e.value;return r.a.createElement("div",{key:c,className:"note-info-line"},r.a.createElement("span",{"aria-label":"Number of beats for ".concat(c," note at bpm ").concat(l),style:{display:"flex",whiteSpace:"pre"}},n," = ".concat(a)),r.a.createElement("span",{style:{display:"flex"}},r.a.createElement("span",{"aria-label":"Number of seconds for each ".concat(c," note at bpm ").concat(l)},(t=o,h.format(t))),r.a.createElement("span",null,"s")))})))),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Beat Note Controls"),r.a.createElement("div",{className:"note-btn-group"},C.map((function(e){var t=e.note,a=e.value;return r.a.createElement("button",{"aria-label":"Sets the beat note to a ".concat(a," note"),"aria-pressed":a===E,className:"btn note-btn ".concat(a===E?"pushed":""),key:a,onClick:function(){g(a)}},t)})))),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Playback Controls"),r.a.createElement("div",{className:"calculator-playback"},r.a.createElement(me,null))))},pe=function(){var e=d(),t=Object(n.useState)(1),a=Object(c.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){e.current.addClickCallback((function(e){var t=e.currentBeat;return o(t)}))}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"beeper beeper--downbeat ".concat(1===l?"on":"off")}),r.a.createElement("span",{className:"beeper beeper--upbeat ".concat(l%2===0?"on":"off")}),r.a.createElement("span",{className:"beeper beeper--oddbeat ".concat(1!==l&&l%2!==0?"on":"off")}))},me=function(){var e=d(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement("div",{className:"playback-btn-wrap"},r.a.createElement("button",{"aria-label":"Starts sounding the metronome","aria-pressed":l,className:"playback-btn play ".concat(l?"playback-btn--on pushed":"playback-btn--off"),onClick:function(){l||e.current.start().then((function(){o(!0)}))}},r.a.createElement(D,null)),r.a.createElement("button",{"aria-label":"Stops sounding the metronome","aria-pressed":!l,className:"playback-btn stop  ".concat(l?"playback-btn--off":"playback-btn--on pushed"),onClick:function(){if(l)return e.current.stop(),o(!1)}},r.a.createElement(le,null)))},be=Object(n.createContext)(void 0),de=function(e){var t=e.children,a=Object(n.useState)(void 0),l=Object(c.a)(a,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),i(e)};window.addEventListener("beforeinstallprompt",e);var t=function(){i(void 0)};return window.addEventListener("appinstalled",t),function(){window.removeEventListener("beforeinstallprompt",e),window.removeEventListener("appinstalled",t)}}),[]),r.a.createElement(be.Provider,{value:o},t)},ve=(a(713),a(714).version),he=function(e){var t=e.children,a=Object(n.useContext)(be);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"app-title"},"Beats Calculator"),a?r.a.createElement("button",{className:"pwa-install-btn",onClick:function(){return a.prompt()}},"Install Version ",ve):r.a.createElement("div",{className:"version-box"},r.a.createElement("span",null,"Version ",ve))),r.a.createElement("main",{className:"main"},r.a.createElement("article",{className:"article"},"A digital metronome with beat and note length metrics"),t),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9 ".concat((new Date).getFullYear())," ",r.a.createElement("a",{className:"link",href:"https://github.com/vapurrmaid",rel:"noreferrer noopener",target:"_blank"},"@vapurrmaid"))))},Ee=function(){return r.a.createElement(de,null,r.a.createElement(he,null,r.a.createElement(v,null,r.a.createElement(fe,null))))},ge=(a(715),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bpm",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bpm","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[696,1,2]]]);
//# sourceMappingURL=main.a574cc21.chunk.js.map