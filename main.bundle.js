!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={startBtnRef:document.querySelector('button[data-action="start"]'),stopBtnRef:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548","#a5286d","#f7e010","#6021f3","#d80909"],u=r.stopBtnRef,c=r.body,a=null,l=!1,f=function(){var t,e;c.style.backgroundColor=o[(t=0,e=o.length-1,Math.floor(Math.random()*(e-t+1)+t))]};r.startBtnRef.addEventListener("click",(function(){l||(l=!0,a=setInterval((function(){f()}),1e3))})),u.addEventListener("click",(function(){clearInterval(a),l=!1,a=null}))}]);
//# sourceMappingURL=main.bundle.js.map