/*! For license information please see app.js.LICENSE.txt */
(()=>{"use strict";var t,e={348:(t,e,n)=>{var r=n(524);function o(){return window.location.host.includes("8080")||window.location.host.includes("cloudmill.github.io")?"":"/local/templates/main/"}function a(t,e){document.querySelector("#".concat(t))&&(document.querySelector("#".concat(t)).innerHTML="",ymaps.ready((function(){if(document.querySelector("#".concat(t))){console.log("MAP INIT");try{var n=new ymaps.Map(t,{center:e,zoom:11,controls:["smallMapDefaultSet"]},{maxZoom:22}),r=new ymaps.Placemark(e,{},{iconLayout:"default#image",iconImageHref:o()+"assets/images/svg/placemark.svg",iconImageSize:[64,64],iconImageOffset:[-32,-32],balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});n.geoObjects.add(r),n.YMap=n}catch(t){console.error(t)}}})))}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){r.KR.defaults=s(s({},r.KR.defaults),{},{dragToClose:!1}),r.KR.close(),r.KR.show([{src:"#".concat(t),type:"inline"}])}function d(){if(this){var t=this.dataset.pagination,e=document.querySelector("[data-pagination=".concat(t,"]")),n=this.parentElement;this.remove(),y({url:this.dataset.url,method:"get",callback:function(r){var o=r.querySelector("[data-pagination=".concat(t,"]")).querySelector("[data-pagination=item]"),a=r.querySelector("button[data-pagination=".concat(t,"]"));e.append(o),a&&(n.append(a),a.addEventListener("click",d))}})}else console.error("Pagination function error")}function f(){document.querySelectorAll("input[type=checkbox][data-filter=".concat(this.getAttribute("data-filter"),"]")).forEach((function(t){t.checked?window.filters.add(t.getAttribute("data-filter"),t.getAttribute("data-filter-value")):window.filters.delete(t.getAttribute("data-filter"),t.getAttribute("data-filter-value"))}));var t=new URLSearchParams(window.filters.data);window.filters.sendAjax&&(window.filters.sendAjax=!1,y({url:window.location.pathname+"?"+t.toString(),method:"get",callback:function(t){!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"replace";document.querySelectorAll("[data-".concat(e,"]")).forEach((function(n){n.replaceWith(t.querySelector("[data-".concat(e,"=").concat(n.dataset.replace,"]")))}))}(t),document.querySelectorAll("button[data-pagination]").forEach((function(t){return t.addEventListener("click",d)}))}}))}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(){m=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return r(i,"_invoke",{value:k(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function f(){}function h(){}function y(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(A([])));w&&w!==e&&n.call(w,a)&&(v=w);var b=y.prototype=f.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(r,a,i,c){var s=u(t[r],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==p(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(s.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:void 0,done:!0}}return h.prototype=y,r(b,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:h,configurable:!0}),h.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(S.prototype),s(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),s(b,c,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function h(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function y(t){return v.apply(this,arguments)}function v(){var t;return t=m().mark((function t(e){var n,r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url,e);case 2:if(n=t.sent,r="",!n.ok){t.next=25;break}t.t0=e.responseType,t.next="text"===t.t0?8:"json"===t.t0?12:16;break;case 8:return t.next=10,n.text();case 10:return r=t.sent,t.abrupt("break",21);case 12:return t.next=14,n.json();case 14:return r=t.sent,t.abrupt("break",21);case 16:return t.t1=new DOMParser,t.next=19,n.text();case 19:t.t2=t.sent,r=t.t1.parseFromString.call(t.t1,t.t2,"text/html");case 21:return e.callback(r),t.abrupt("return",!0);case 25:return alert("Произошла ошибка ".concat(n.status)),t.abrupt("return",!1);case 27:case"end":return t.stop()}}),t)})),v=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){h(a,r,o,i,c,"next",t)}function c(t){h(a,r,o,i,c,"throw",t)}i(void 0)}))},v.apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-select-back=geo-ajax] > [data-cities-drop-item]").forEach((function(t){t.addEventListener("click",(function(){var t=new FormData;t.append("city_changed",this.innerText),y({url:this.dataset.action,contentType:"json",method:"post",body:t})}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("button[data-pagination]").forEach((function(t){return t.addEventListener("click",d)}))})),document.addEventListener("DOMContentLoaded",(function(){var t,e;document.querySelectorAll("button[data-pagination]").forEach((function(t){return t.addEventListener("click",d)})),document.querySelectorAll("[data-filter]").forEach((function(t){return t.addEventListener("click",f)})),null===(t=document.querySelector("[data-filters-reset]"))||void 0===t||t.addEventListener("click",window.filters.unset),null===(e=document.querySelector("[data-filters-reset]"))||void 0===e||e.addEventListener("click",f)})),window.filters={sendAjax:!1,data:{},add:function(t,e){window.filters.data[t]?window.filters.data[t].includes(e)||window.filters.data[t].push(e):window.filters.data[t]=[e],window.filters.sendAjax=!0},delete:function(t,e){if(window.filters.data[t]){var n=window.filters.data[t].indexOf(e);-1!==n&&window.filters.data[t].splice(n,1)}window.filters.sendAjax=!0},unset:function(){0===Object.keys(window.filters.data).length?window.filters.sendAjax=!1:(window.filters.data={},window.filters.sendAjax=!0)}};var g=n(566),w=n.n(g),b=n(809),E=n.n(b),S=document.getElementById("loader-main"),k=document.getElementById("loader");S&&(E().loadAnimation({wrapper:k,animType:"svg",loop:!0,path:o()+"assets/animations/preloader.json"}),window.addEventListener("load",(function(){setTimeout((function(){S.classList.add("loaded")}),1e3),setTimeout((function(){S.remove()}),2500)})));n(563),n(419);var x=n(638);x((function(){x("form").parsley(),x("form").on("submit",(function(t){t.preventDefault(),t.target.closest("form").querySelectorAll(".form-input").forEach((function(t){return t.classList.remove("active")}))})),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Неверный формат",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru"),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),Inputmask({mask:"99.99.9999 - 99.99.9999",showMaskOnHover:!1}).mask("[data-mask-date]"),Inputmask({mask:"99.99.9999",showMaskOnHover:!1}).mask("[data-mask-bday]");var t=document.querySelectorAll("[data-input]");t.length&&t.forEach((function(t){t.oninput=function(){this.value?this.classList.add("active"):this.classList.remove("active")}})),document.querySelectorAll("form").forEach((function(t){t.addEventListener("submit",(function(e){if(e.preventDefault(),console.log("submit front"),t.hasAttribute("data-form-ajax"))!function(t){var e=t.getAttribute("data-modal"),n=new FormData(t);y({url:t.getAttribute("action"),responseType:"json",method:t.getAttribute("method"),body:n,callback:function(t){t.success?u(e):alert(t.message)}})}(t),t.reset();else if(t.hasAttribute("data-form-w-seccess")){var n=t.getAttribute("data-form-w-seccess");t.reset(),r.KR.close(),r.KR.show([{src:"#".concat(n),type:"inline"}])}}))}));var e=document.querySelector("[data-sms-input]"),n=document.querySelector("[data-sms-button]");null==e||e.addEventListener("input",(function(){e.value.length>0?n.removeAttribute("disabled"):n.setAttribute("disabled","")}));var o=document.querySelectorAll("[data-show-password]");null==o||o.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.closest("[data-password-label]").querySelector("input");"password"===e.getAttribute("type")?e.setAttribute("type","text"):"text"===e.getAttribute("type")&&e.setAttribute("type","password")}))}))}));var O=n(904),L=n(90);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===j(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(){var t=document.querySelectorAll("[data-slider-id]");t.length>0&&t.forEach((function(t){var e=t.getAttribute("data-slider-id"),n={navigation:{prevEl:"[data-prev=".concat(e,"]"),nextEl:"[data-next=".concat(e,"]")}};switch(e){case"main":n=q(q({},n),{},{modules:[L.W_,L.tl,L.VS],loop:!0,autoHeight:!0,parallax:!0,speed:500,pagination:{el:"[data-swiper-pagination=".concat(e,"]"),type:"bullets"},breakpoints:P({},1024,{speed:1500})});break;case"products":n=q(q({},n),{},{modules:[L.W_],slidesPerView:"auto",spaceBetween:12,breakpoints:P({},1024,{slidesPerView:6,spaceBetween:20})});break;case"recipes":n=q(q({},n),{},{modules:[L.W_],slidesPerView:"auto",spaceBetween:12,breakpoints:P({},1024,{slidesPerView:3,spaceBetween:20})});case"review":n=q(q({},n),{},{modules:[L.W_],slidesPerView:"auto",spaceBetween:12,breakpoints:P({},1024,{slidesPerView:3,spaceBetween:20})})}new O.Z('[data-slider-id="'.concat(e,'"]'),n);if("main"===e&&window.matchMedia("(min-width: 1024px)").matches)document.querySelector("[data-prev=main]"),document.querySelector("[data-next=main]")}));var e=new O.Z("#product-thumbs",{slidesPerView:"auto",spaceBetween:4,loop:!0}),n=(new O.Z("#product-img",{modules:[L.W_,L.o3],loop:!0,navigation:{prevEl:'[data-prev="product-img"]',nextEl:'[data-next="product-img"]'},thumbs:{swiper:e}}),new O.Z('[data-slider-id="about-thumbs"]',{slidesPerView:"auto",spaceBetween:4,loop:!0})),r=(new O.Z('[data-slider-id="about"]',{modules:[L.W_,L.o3],loop:!0,navigation:{prevEl:'[data-prev="about"]',nextEl:'[data-next="about"]'},thumbs:{swiper:n}}),new O.Z("#history-thumbs",{slidesPerView:"auto",spaceBetween:4,loop:!0}));new O.Z("#history-main",{modules:[L.W_,L.o3],loop:!0,navigation:{prevEl:'[data-prev="history"]',nextEl:'[data-next="history"]'},thumbs:{swiper:r}})}var _=n(145),C=(n(527),n(638));function M(){var t=C(".tippy-content [data-menu]"),e=C(".tippy-content [data-menu-sub]"),n=C(".tippy-content [data-menu-button]"),r=C(".tippy-content [data-menu-button-sub]");console.log(C(".tippy-content .catalog-menu").css("width"));var o=+C(".tippy-content .catalog-menu").css("width").replace("px","");console.log(o),n.on("mouseenter",(function(){C(".tippy-content .catalog-menu").css("width","".concat(2*o,"px")),t.removeClass("active"),e.removeClass("active"),n.removeClass("active"),r.removeClass("active");var a=C(this);(function(t){return C('.tippy-content [data-menu="'.concat(t,'"]'))})(a.attr("data-menu-button")).addClass("active"),a.addClass("active")})),r.on("mouseenter",(function(){C(".tippy-content .catalog-menu").css("width","".concat(3*o,"px"));var t=C(this),n=t.attr("data-menu-button-sub");e.removeClass("active"),r.removeClass("active"),function(t){return C('.tippy-content [data-menu-sub="'.concat(t,'"]'))}(n).addClass("active"),t.addClass("active")}))}function I(){var t=document.getElementById("city-drop"),e=document.getElementById("catalog-menu"),n=document.getElementById("lk-modal"),o=document.getElementById("lk-logined-modal");if(t&&(0,_.ZP)("[data-cities-drop]",{content:t.innerHTML,maxWidth:400,placement:"bottom",arrow:!1,allowHTML:!0,interactive:!0,trigger:"click",onShown:function(t){document.querySelector(".tippy-content").addEventListener("click",(function(e){var n=e.target.closest("[data-cities-drop-item]");document.querySelector("[data-cities-drop-inner]").innerText=n.innerText,t.hide()}))}}),e){var a=document.querySelector("[data-catalog-button]");a.addEventListener("click",(function(){a.classList.contains("modal-created")||(a.classList.add("modal-created"),setTimeout((function(){M()}),100))})),(0,_.ZP)("[data-catalog-button]",{content:e.innerHTML,placement:"bottom",arrow:!1,allowHTML:!0,interactive:!0,trigger:"click",onHide:function(){!function(){C(".tippy-content .catalog-menu").removeAttr("style");var t=C("[data-menu]"),e=C("[data-menu-sub]"),n=C("[data-menu-button]"),r=C("[data-menu-button-sub]");t.removeClass("active"),e.removeClass("active"),n.removeClass("active"),r.removeClass("active")}()}})}n&&(0,_.ZP)("[data-profile-button]",{content:n.innerHTML,placement:"bottom-end",arrow:!1,allowHTML:!0,interactive:!0,trigger:"click",onShown:function(t){return function(t){document.querySelector('.tippy-content [data-fancy-button="profile-register"]').addEventListener("click",(function(){t.hide(),r.KR.close(),r.KR.show([{src:"#fancy-modal-profile-register",type:"inline"}])}))}(t)}}),o&&(0,_.ZP)("[data-profile-logined]",{content:o.innerHTML,placement:"bottom-end",arrow:!1,allowHTML:!0,interactive:!0,trigger:"click"})}var D=n(638);var H=n(412),B=n(371),R=n(369);(0,n(383).ScrollMagicPluginGsap)(H,B.Q3),window.addEventListener("DOMContentLoaded",(function(){var t,e;document.getElementById("loader-main")&&(document.querySelector("body").style.overflow="hidden"),r.KR.defaults=s(s({},r.KR.defaults),{},{dragToClose:!1}),document.querySelectorAll("[data-fancy-button]").forEach((function(t){var e=t.getAttribute("data-fancy-button");null==t||t.addEventListener("click",(function(){console.log("OPEN MODAL",e),r.KR.close(),r.KR.show([{src:"#fancy-modal-".concat(e),type:"inline"}]),"contacts-map1"===e&&a("contacts-map1",[55.830655,37.932728]),"contacts-map2"===e&&a("contacts-map2",[45.535688,38.062625])}))})),I(),t=D("[data-dropdown]"),e=D("[data-select]"),t&&D("[data-dropdown-button]").on("click",(function(){D(this).closest("[data-dropdown]").toggleClass("active"),D(this).closest("[data-dropdown]").find("[data-dropdown-drop]").slideToggle()})),e&&(D(window).on("click",(function(t){t.target.closest("[data-select-drop]")||(D("[data-select-drop]").slideUp(100),D("[data-select]").removeClass("active"))})),D("[data-select-button]").on("click",(function(){var t=D(this).closest("[data-select]");t.hasClass("active")||setTimeout((function(){t.addClass("active"),t.find("[data-select-drop]").slideDown(100)}))})),document.querySelectorAll("[data-select-checkboxes]").forEach((function(t){t.addEventListener("click",(function(e){setTimeout((function(){var n=e.target.closest("[data-select]"),r=n.querySelector("[data-select-active]"),o=[],a=t.querySelectorAll("input[type=checkbox]:checked");if(a.length>0){a.forEach((function(t){return o.push(t.getAttribute("data-select-checkbox").toLowerCase())}));var i=o.join(", ");r.innerText=i[0].toUpperCase()+i.slice(1)}else{var c=n.getAttribute("data-select-title");r.innerText=c}}))}))})),D("[data-filters-reset]").on("click",(function(){D("[data-select-checkbox]").prop("checked",!1),document.querySelectorAll("[data-select-title]").forEach((function(t){var e=t.getAttribute("data-select-title");t.querySelector("[data-select-active]").innerText=e}))}))),document.querySelectorAll("[data-tabs-panel]").forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.closest("[data-tab]"),n=t.target.closest("[data-tabs-panel]").querySelector("[data-tab].active");e&&(n.classList.remove("active"),e.classList.add("active"))}))})),document.querySelector("[data-slider-id=main]")||T();var n=document.querySelectorAll("[data-search-reset]");n.length>0&&n.forEach((function(t){t.addEventListener("click",(function(){document.querySelectorAll("[data-search]").forEach((function(t){t.value=""}))}))}))})),window.addEventListener("load",(function(){document.getElementById("loader-main")?setTimeout((function(){w().init({once:!0,offset:0,duration:500}),document.querySelector("body").style.overflow="",window.location.search.includes("?set-new-password")&&u("new-password")}),1500):(w().init({once:!0,offset:0,duration:500}),window.location.search.includes("?set-new-password")&&u("new-password")),document.querySelector("[data-slider-id=main]")&&T(),function(){var t=document.querySelector(".chick-list"),e=document.querySelector("[data-lottie-1]"),n=document.querySelector("[data-lottie-2]"),r=document.querySelector("[data-lottie-3]"),a=document.querySelector("[data-lottie-4]"),i=document.querySelector("[data-lottie-5]"),c=document.querySelector("[data-lottie-6]"),s=document.querySelector("[data-chick-card-1]"),l=document.querySelector("[data-chick-card-2]"),u=document.querySelector("[data-chick-parallax]"),d=document.querySelector("[data-chick-section]"),f={root:null,rootMargin:"0px",threshold:.5};if(console.log("CHECK PATH",o()),t){var p=E().loadAnimation({wrapper:e,animType:"svg",loop:!1,autoplay:!1,path:o()+"assets/animations/fruit.json"}),m=E().loadAnimation({wrapper:n,animType:"svg",loop:!1,autoplay:!1,path:o()+"assets/animations/char.json"}),h=E().loadAnimation({wrapper:r,animType:"svg",loop:!1,autoplay:!1,path:o()+"assets/animations/hat_yellow.json"}),y=E().loadAnimation({wrapper:a,animType:"svg",loop:!1,autoplay:!1,path:o()+"assets/animations/hat_green.json"}),v=E().loadAnimation({wrapper:i,animType:"svg",loop:!0,autoplay:!1,path:o()+"assets/animations/grass_yellow.json"}),g=E().loadAnimation({wrapper:c,animType:"svg",loop:!0,autoplay:!1,path:o()+"assets/animations/grass_green.json"}),w=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&t.target.hasAttribute("data-lottie-1")&&p.play(),t.isIntersecting&&t.target.hasAttribute("data-lottie-2")&&m.play()}))}),f);w.observe(e),w.observe(n);var b=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&t.target.hasAttribute("data-chick-card-1")&&(h.play(),v.play()),t.isIntersecting&&t.target.hasAttribute("data-chick-card-2")&&(y.play(),g.play())}))}),f);b.observe(s),b.observe(l)}else if(l){var S=document.querySelectorAll("[data-lottie-4]"),k=[];S.forEach((function(t){k.push(E().loadAnimation({wrapper:t,animType:"svg",loop:!1,autoplay:!1,path:o()+"assets/animations/hat_green.json"}))}));var x=document.querySelectorAll("[data-lottie-6]"),O=[];x.forEach((function(t){O.push(E().loadAnimation({wrapper:t,animType:"svg",loop:!0,autoplay:!1,path:o()+"assets/animations/grass_green.json"}))})),new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&t.target.hasAttribute("data-chick-card-2")&&(k.forEach((function(t){return t.play()})),O.forEach((function(t){return t.play()})))}))}),f).observe(l)}if(u&&d){var L=new H.Controller,j=new R.b_,A=document.documentElement.clientHeight-200;j.add(B.Q3.fromTo(u,5,{y:"10%"},{y:"0%",ease:"linear",immediateRender:!1})),new H.Scene({triggerElement:d,duration:A,triggerHook:1}).setTween(j).addTo(L)}}()}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,r.amdO={},t=[],r.O=(e,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<t.length;u++){for(var[n,o,a]=t[u],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,a,[i,c,s]=n,l=0;if(i.some((e=>0!==t[e]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var u=s(r)}for(e&&e(n);l<i.length;l++)a=i[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[633],(()=>r(348)));o=r.O(o)})();