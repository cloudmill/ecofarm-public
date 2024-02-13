/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 117:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./scripts/backend/forms.js

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-form=ajax]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      void sendRequest({
        url: this.getAttribute('action'),
        contentType: 'json',
        method: this.getAttribute('method'),
        body: formData,
        callback: function callback(r) {
          if (r.success) {
            alert('success');
          } else {
            alert(r.message);
          }
        }
      });
    });
  });
});
;// CONCATENATED MODULE: ./scripts/backend/geo.js

document.addEventListener('DOMContentLoaded', function () {
  var selector = '[data-select=geo-ajax] > [data-cities-drop-item]';
  document.querySelectorAll(selector).forEach(function (item) {
    item.addEventListener('click', function () {
      var formData = new FormData();
      formData.append('city_changed', this.innerText);
      void sendRequest({
        url: this.dataset.action,
        contentType: 'json',
        method: 'post',
        body: formData
      });
    });
  });
});
;// CONCATENATED MODULE: ./scripts/backend/main.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function sendRequest(_x) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var response, r;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(params.url, params);
        case 2:
          response = _context.sent;
          r = '';
          if (!response.ok) {
            _context.next = 25;
            break;
          }
          _context.t0 = params.contentType;
          _context.next = _context.t0 === 'text' ? 8 : _context.t0 === 'json' ? 12 : 16;
          break;
        case 8:
          _context.next = 10;
          return response.text();
        case 10:
          r = _context.sent;
          return _context.abrupt("break", 21);
        case 12:
          _context.next = 14;
          return response.json();
        case 14:
          r = _context.sent;
          return _context.abrupt("break", 21);
        case 16:
          _context.t1 = new DOMParser();
          _context.next = 19;
          return response.text();
        case 19:
          _context.t2 = _context.sent;
          r = _context.t1.parseFromString.call(_context.t1, _context.t2, 'text/html');
        case 21:
          params.callback(r);
          return _context.abrupt("return", true);
        case 25:
          alert("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 ".concat(response.status));
          return _context.abrupt("return", false);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendRequest.apply(this, arguments);
}
// EXTERNAL MODULE: ../node_modules/aos/dist/aos.js
var aos = __webpack_require__(566);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ../node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(809);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
;// CONCATENATED MODULE: ./scripts/preloader.js

var loader = document.getElementById('loader-main');
var loaderEl = document.getElementById('loader');
if (loader) {
  lottie_default().loadAnimation({
    wrapper: loaderEl,
    animType: 'svg',
    loop: true,
    path: 'assets/animations/preloader.json'
  });
  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('loaded');
    }, 1000);
    setTimeout(function () {
      loader.remove();
    }, 2500);
  });
}
// EXTERNAL MODULE: ../node_modules/parsleyjs/dist/parsley.js
var parsley = __webpack_require__(563);
// EXTERNAL MODULE: ../node_modules/inputmask/dist/inputmask.js
var inputmask = __webpack_require__(419);
// EXTERNAL MODULE: ../node_modules/@fancyapps/ui/dist/index.esm.js
var index_esm = __webpack_require__(524);
;// CONCATENATED MODULE: ./scripts/forms.js
/* provided dependency */ var $ = __webpack_require__(638);



$(function () {
  // parsley
  $('form').parsley();
  Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение',
    type: {
      email: 'Введите адрес электронной почты',
      url: 'Введите URL адрес',
      number: 'Введите число',
      integer: 'Введите целое число',
      digits: 'Введите только цифры',
      alphanum: 'Введите буквенно-цифровое значение'
    },
    notblank: 'Это поле должно быть заполнено',
    required: 'Обязательное поле',
    pattern: 'Это значение некорректно',
    min: 'Это значение должно быть не менее чем %s',
    max: 'Это значение должно быть не более чем %s',
    range: 'Это значение должно быть от %s до %s',
    minlength: 'Минимум %s символов',
    maxlength: 'Это значение должно содержать не более %s символов',
    length: 'Это значение должно содержать от %s до %s символов',
    mincheck: 'Выберите не менее %s значений',
    maxcheck: 'Выберите не более %s значений',
    check: 'Выберите от %s до %s значений',
    equalto: 'Пароли не совпадают'
  });
  Parsley.setLocale('ru');

  // маска на телефон
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
  }).mask('[data-mask-phone]');

  // маска на дату
  Inputmask({
    mask: '99.99.9999 - 99.99.9999',
    showMaskOnHover: false
  }).mask('[data-mask-date]');

  // маска на день рождения
  Inputmask({
    mask: '__.__.____',
    showMaskOnHover: false
  }).mask('[data-mask-bday]');
  var inputs = document.querySelectorAll('[data-input]');
  if (inputs.length) {
    inputs.forEach(function (input) {
      input.oninput = function () {
        if (this.value) {
          this.classList.add('active');
        } else {
          this.classList.remove('active');
        }
      };
    });
  }
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.hasAttribute('data-form-w-seccess')) {
        var tag = form.getAttribute('data-form-w-seccess');
        index_esm/* Fancybox */.KR.show([{
          src: "#".concat(tag),
          type: 'inline'
        }]);
      }
    });
  });
});
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(904);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(90);
;// CONCATENATED MODULE: ./scripts/sliders.ts
function sliders_typeof(obj) { "@babel/helpers - typeof"; return sliders_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, sliders_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return sliders_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (sliders_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (sliders_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function swiperInit() {
  var sliders = document.querySelectorAll('[data-slider-id]');
  if (sliders.length > 0) {
    sliders.forEach(function (slider) {
      var slider_id = slider.getAttribute('data-slider-id');
      var slider_options = {
        navigation: {
          prevEl: "[data-prev=".concat(slider_id, "]"),
          nextEl: "[data-next=".concat(slider_id, "]")
        }
      };
      switch (slider_id) {
        case 'main':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_, modules/* Pagination */.tl, modules/* Parallax */.VS],
            loop: true,
            autoHeight: true,
            parallax: true,
            speed: 500,
            pagination: {
              el: "[data-swiper-pagination=".concat(slider_id, "]"),
              type: 'bullets'
            },
            breakpoints: _defineProperty({}, 1024, {
              speed: 1500
            })
          });
          break;
        case 'products':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: _defineProperty({}, 1024, {
              slidesPerView: 6,
              spaceBetween: 20
            })
          });
          break;
        case 'recipes':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: _defineProperty({}, 1024, {
              slidesPerView: 3,
              spaceBetween: 20
            })
          });
        case 'review':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: _defineProperty({}, 1024, {
              slidesPerView: 3,
              spaceBetween: 20
            })
          });
          break;
        default:
          break;
      }
      var slider_el = new swiper/* default */.Z("[data-slider-id=\"".concat(slider_id, "\"]"), slider_options);
      if (slider_id === 'main' && window.matchMedia('(min-width: 1024px)').matches) {
        var getSlideBg = function getSlideBg(selector) {
          var _document$querySelect;
          return (_document$querySelect = document.querySelector(".main-slider-slide.swiper-slide-".concat(selector))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('[data-for-parallax]');
        }; // controlPrev?.addEventListener('click', () => {
        //   getSlideBg('active')?.setAttribute('data-swiper-parallax', '')
        //   getSlideBg('prev')?.setAttribute('data-swiper-parallax', '-30%')
        //   slider_el.slidePrev()
        // })
        // controlNext?.addEventListener('click', () => {
        //   getSlideBg('active')?.setAttribute('data-swiper-parallax', '30%')
        //   getSlideBg('next')?.setAttribute('data-swiper-parallax', '')
        //   slider_el.slideNext()
        // })
        var controlPrev = document.querySelector('[data-prev=main]');
        var controlNext = document.querySelector('[data-next=main]');
      }
    });
  }
  var productThumbs = new swiper/* default */.Z('[data-slider-id="product-thumbs"]', {
    slidesPerView: 'auto',
    spaceBetween: 4
  });
  var productImg = new swiper/* default */.Z('[data-slider-id="product-img"]', {
    modules: [modules/* Navigation */.W_, modules/* Thumbs */.o3],
    navigation: {
      prevEl: "[data-prev=\"product-img]",
      nextEl: "[data-next=\"product-img\"]"
    },
    thumbs: {
      swiper: productThumbs
    }
  });
  var aboutThumbs = new swiper/* default */.Z('[data-slider-id="about-thumbs"]', {
    slidesPerView: 'auto',
    spaceBetween: 4
  });
  var aboutImg = new swiper/* default */.Z('[data-slider-id="about"]', {
    modules: [modules/* Navigation */.W_, modules/* Thumbs */.o3],
    navigation: {
      prevEl: "[data-prev=\"about\"]",
      nextEl: "[data-next=\"about\"]"
    },
    thumbs: {
      swiper: aboutThumbs
    }
  });
}
;// CONCATENATED MODULE: ./scripts/fancybox.ts
function fancybox_typeof(obj) { "@babel/helpers - typeof"; return fancybox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fancybox_typeof(obj); }
function fancybox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fancybox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fancybox_ownKeys(Object(source), !0).forEach(function (key) { fancybox_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fancybox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function fancybox_defineProperty(obj, key, value) { key = fancybox_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function fancybox_toPropertyKey(arg) { var key = fancybox_toPrimitive(arg, "string"); return fancybox_typeof(key) === "symbol" ? key : String(key); }
function fancybox_toPrimitive(input, hint) { if (fancybox_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fancybox_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function fancyboxInit() {
  index_esm/* Fancybox */.KR.defaults = fancybox_objectSpread(fancybox_objectSpread({}, index_esm/* Fancybox */.KR.defaults), {}, {
    dragToClose: false
  });
  var buttons = document.querySelectorAll('[data-fancy-button]');
  buttons.forEach(function (button) {
    var id = button.getAttribute('data-fancy-button');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
      // console.log('CLIIICK', id)

      // @ts-ignore
      index_esm/* Fancybox */.KR.show([{
        src: "#fancy-modal-".concat(id),
        type: 'inline'
      }]);
    });
  });
}
// EXTERNAL MODULE: ../node_modules/tippy.js/dist/tippy.esm.js + 54 modules
var tippy_esm = __webpack_require__(145);
// EXTERNAL MODULE: ../node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(527);
;// CONCATENATED MODULE: ./scripts/catalog-menu.js
/* provided dependency */ var catalog_menu_$ = __webpack_require__(638);
function catalogMenu() {
  catalog_menu_$('[data-menu-button]').on('mouseenter', function () {
    var id = this.getAttribute('data-menu-button');
    if (catalog_menu_$(this).hasClass('active')) {
      catalog_menu_$("[data-menu]").css('display', 'none');
      catalog_menu_$(this).removeClass('active');
      catalog_menu_$("[data-menu-sub]").css('display', 'none');
      catalog_menu_$('[data-menu-button-sub]').removeClass('active');
    } else {
      catalog_menu_$("[data-menu]").css('display', 'none');
      catalog_menu_$("[data-menu=\"".concat(id, "\"]")).toggle('slide');
      catalog_menu_$('[data-menu-button]').removeClass('active');
      catalog_menu_$(this).addClass('active');
      catalog_menu_$("[data-menu-sub]").css('display', 'none');
      catalog_menu_$('[data-menu-button-sub]').removeClass('active');
    }
  });
  catalog_menu_$('[data-menu-button-sub]').on('mouseenter', function () {
    var id = this.getAttribute('data-menu-button-sub');
    if (catalog_menu_$(this).hasClass('active')) {
      catalog_menu_$("[data-menu-sub]").css('display', 'none');
      catalog_menu_$(this).removeClass('active');
    } else {
      catalog_menu_$("[data-menu-sub]").css('display', 'none');
      catalog_menu_$("[data-menu-sub=\"".concat(id, "\"]")).toggle('slide');
      catalog_menu_$('[data-menu-button-sub]').removeClass('active');
      catalog_menu_$(this).addClass('active');
    }
  });
}
;// CONCATENATED MODULE: ./scripts/tippy.js



function tooltip() {
  var template1 = document.getElementById('city-drop');
  var template2 = document.getElementById('catalog-menu');
  if (template1) {
    (0,tippy_esm/* default */.ZP)('[data-cities-drop]', {
      content: template1.innerHTML,
      maxWidth: 400,
      placement: 'bottom',
      arrow: false,
      allowHTML: true,
      interactive: true,
      trigger: 'click'
    });
  }
  if (template2) {
    (0,tippy_esm/* default */.ZP)('[data-catalog-button]', {
      content: template2.innerHTML,
      placement: 'bottom',
      arrow: false,
      allowHTML: true,
      interactive: true,
      trigger: 'click',
      onShow: function onShow() {
        setTimeout(function () {
          catalogMenu();
        }, 100);
      }
    });
  }
}
;// CONCATENATED MODULE: ./scripts/dropdown.js
/* provided dependency */ var dropdown_$ = __webpack_require__(638);
function dropdown() {
  dropdown_$('[data-dropdown-button]').on('click', function () {
    dropdown_$(this).closest('[data-dropdown]').toggleClass('active');
    dropdown_$(this).closest('[data-dropdown]').find('[data-dropdown-drop]').slideToggle();
  });
}
;// CONCATENATED MODULE: ./scripts/tabs.js
function tabs() {
  var panels = document.querySelectorAll('[data-tabs-panel]');
  panels.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var activeTab = e.target.closest('[data-tab]');
      var activePanel = e.target.closest('[data-tabs-panel]');
      var oldActiveTab = activePanel.querySelector('[data-tab].active');
      if (activeTab) {
        oldActiveTab.classList.remove('active');
        activeTab.classList.add('active');
      }
    });
  });
}
// EXTERNAL MODULE: ../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js
var ScrollMagic = __webpack_require__(412);
// EXTERNAL MODULE: ../node_modules/gsap/index.js + 1 modules
var gsap = __webpack_require__(371);
// EXTERNAL MODULE: ../node_modules/gsap/gsap-core.js
var gsap_core = __webpack_require__(369);
// EXTERNAL MODULE: ../node_modules/scrollmagic-plugin-gsap/index.js
var scrollmagic_plugin_gsap = __webpack_require__(383);
;// CONCATENATED MODULE: ./scripts/main-animations.js





(0,scrollmagic_plugin_gsap.ScrollMagicPluginGsap)(ScrollMagic, gsap/* TweenMax */.Q3);
function chickAnimation() {
  var list = document.querySelector('.chick-list');
  var el1 = document.querySelector('[data-lottie-1]');
  var el2 = document.querySelector('[data-lottie-2]');
  var el3 = document.querySelector('[data-lottie-3]');
  var el4 = document.querySelector('[data-lottie-4]');
  var el5 = document.querySelector('[data-lottie-5]');
  var el6 = document.querySelector('[data-lottie-6]');
  var card1 = document.querySelector('[data-chick-card-1]');
  var card2 = document.querySelector('[data-chick-card-2]');
  var chick = document.querySelector('[data-chick-parallax]');
  var chickSec = document.querySelector('[data-chick-section]');
  if (list) {
    var anim1 = lottie_default().loadAnimation({
      wrapper: el1,
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: 'assets/animations/fruit.json'
    });
    var anim2 = lottie_default().loadAnimation({
      wrapper: el2,
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: 'assets/animations/char.json'
    });
    var anim3 = lottie_default().loadAnimation({
      wrapper: el3,
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: 'assets/animations/hat_yellow.json'
    });
    var anim4 = lottie_default().loadAnimation({
      wrapper: el4,
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: 'assets/animations/hat_green.json'
    });
    var anim5 = lottie_default().loadAnimation({
      wrapper: el5,
      animType: 'svg',
      loop: true,
      autoplay: false,
      path: 'assets/animations/grass_yellow.json'
    });
    var anim6 = lottie_default().loadAnimation({
      wrapper: el6,
      animType: 'svg',
      loop: true,
      autoplay: false,
      path: 'assets/animations/grass_green.json'
    });
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    var callback1 = function callback1(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target.hasAttribute('data-lottie-1')) {
          anim1.play();
        }
        if (entry.isIntersecting && entry.target.hasAttribute('data-lottie-2')) {
          anim2.play();
        }
      });
    };
    var observer1 = new IntersectionObserver(callback1, options);
    observer1.observe(el1);
    observer1.observe(el2);
    var callback2 = function callback2(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target.hasAttribute('data-chick-card-1')) {
          anim3.play();
          anim5.play();
        }
        if (entry.isIntersecting && entry.target.hasAttribute('data-chick-card-2')) {
          anim4.play();
          anim6.play();
        }
      });
    };
    var observer2 = new IntersectionObserver(callback2, options);
    observer2.observe(card1);
    observer2.observe(card2);
  }
  if (chick && chickSec) {
    var controller = new ScrollMagic.Controller();
    var timeLine = new gsap_core/* TimelineMax */.b_();
    var SCENE_DURATION = document.documentElement.clientHeight - 200;
    timeLine.add(gsap/* TweenMax */.Q3.fromTo(chick, 5, {
      y: '10%'
    }, {
      y: '0%',
      ease: 'linear',
      immediateRender: false
    }));
    new ScrollMagic.Scene({
      triggerElement: chickSec,
      duration: SCENE_DURATION,
      triggerHook: 1
    }).setTween(timeLine).addTo(controller);
  }
}
;// CONCATENATED MODULE: ./app.js











window.addEventListener('DOMContentLoaded', function () {
  var loader = document.getElementById('loader-main');
  if (loader) {
    document.querySelector('body').style.overflow = 'hidden';
  }
  fancyboxInit();
  tooltip();
  dropdown();
  tabs();

  // на главной свайпер за пускается по load
  if (!document.querySelector('[data-slider-id=main]')) {
    swiperInit();
  }
  var searchReset = document.querySelectorAll('[data-search-reset]');
  if (searchReset.length > 0) {
    searchReset.forEach(function (el) {
      el.addEventListener('click', function () {
        document.querySelectorAll('[data-search]').forEach(function (it) {
          it.value = '';
        });
      });
    });
  }
  var insertScript = document.querySelector('[data-insert-script]');
  if (insertScript) {
    insertScript.innerText = "function cityChoose(name) {document.querySelector('[data-cities-drop-inner]').innerText = name}";
  }
});
window.addEventListener('load', function () {
  var loader = document.getElementById('loader-main');
  if (loader) {
    setTimeout(function () {
      aos_default().init({
        once: true,
        offset: 0,
        duration: 500
      });
      document.querySelector('body').style.overflow = '';
    }, 1500);
  } else {
    aos_default().init({
      once: true,
      offset: 0,
      duration: 500
    });
  }
  if (document.querySelector('[data-slider-id=main]')) {
    swiperInit();
  }
  chickAnimation();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [633], () => (__webpack_require__(117)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;