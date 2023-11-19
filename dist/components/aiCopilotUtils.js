"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElement = exports.typeText = exports.triggerMouseUpEvent = exports.triggerMouseOverEvent = exports.triggerMouseOutEvent = exports.triggerMouseMoveEvent = exports.triggerMouseDownEvent = exports.triggerKeyEvent = exports.triggerClickEvent = exports.selectDropdownValue = exports.selectDropdownByLabel = exports.pause = exports.navigateTo = exports.isElementVisible = exports.isElementDisabled = exports.isElementClickable = exports.getHeaderElementsWithVisibleText = exports.getElementsWithVisibleText = exports.getElementHighlights = exports.getElementDimensions = exports.generateXPathWithNearestParentId = exports.generateCssSelector = exports.findElementsWithOnClick = exports.findElementByXPath = exports.findElementById = exports.findElementByCss = exports.findElementByAttribute = exports.findAnchorElements = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var triggerClickEvent = exports.triggerClickEvent = function triggerClickEvent(element) {
  // Check if the element exists
  if (element) {
    // Create a new MouseEvent object
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    // Dispatch the click event on the element
    element.dispatchEvent(event);
  } else {
    console.error("Element not found.");
  }
};
var findElementByXPath = exports.findElementByXPath = function findElementByXPath(xpath) {
  var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue;
};
var waitForElement = exports.waitForElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(xpath) {
    var timeout,
      startTime,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 3000;
          startTime = Date.now();
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            function checkElement() {
              var element = findElementByXPath(xpath);
              if (element) {
                // Element found, resolve the Promise with the element
                resolve(element);
              } else if (Date.now() - startTime < timeout) {
                // Element not found, but there's still time left, so keep checking
                setTimeout(checkElement, 100); // Check again in 100 milliseconds
              } else {
                // Element not found within the specified timeout, reject the Promise
                resolve(null);
              }
            }

            // Start checking for the element
            checkElement();
          }));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function waitForElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
var typeText = exports.typeText = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(element, text) {
    var speed,
      index,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          speed = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 100;
          index = 0;
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            function typeCharacter() {
              if (index < text.length) {
                var _char = text.charAt(index);

                // If the element is an input, set the value attribute
                if (element instanceof HTMLInputElement) {
                  element.value += _char;
                  if ("createEvent" in document) {
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    element.dispatchEvent(evt);
                  } else {
                    element.fireEvent("onchange");
                  }
                } else {
                  // For other elements, set the innerText or innerHTML property
                  element.innerText += _char;
                }
                index += 1;

                // Call the function recursively for the next character
                setTimeout(typeCharacter, speed);
              } else {
                resolve(null);
              }
            }

            // Start typing the text
            typeCharacter();
          }));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function typeText(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

// // Trigger a keydown event for the 'Enter' key
// triggerKeyEvent(inputElement, 'keydown', 'Enter');

// // Trigger a keyup event for the 'A' key with the Shift key modifier
// triggerKeyEvent(inputElement, 'keyup', 'A', { shiftKey: true });

var triggerKeyEvent = exports.triggerKeyEvent = function triggerKeyEvent(element, eventType, key) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  var eventOptions = {
    key: key || '',
    code: options.code || '',
    keyCode: options.keyCode || 0,
    which: options.which || 0,
    shiftKey: options.shiftKey || false,
    ctrlKey: options.ctrlKey || false,
    altKey: options.altKey || false,
    metaKey: options.metaKey || false,
    bubbles: options.bubbles || true,
    cancelable: options.cancelable || true
  };
  try {
    var event = new KeyboardEvent(eventType, eventOptions);
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the keyboard event:', e);
  }
};
var triggerMouseOverEvent = exports.triggerMouseOverEvent = function triggerMouseOverEvent(element) {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    var event = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouseover event:', e);
  }
};
var triggerMouseDownEvent = exports.triggerMouseDownEvent = function triggerMouseDownEvent(element) {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    var event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse down event:', e);
  }
};
var generateCssSelector = exports.generateCssSelector = function generateCssSelector(element) {
  if (!(element instanceof Element)) return '';
  var selectors = [];
  while (element.parentElement) {
    var tagName = element.tagName.toLowerCase();
    var id = element.id;
    var classes = Array.from(element.classList).map(function (c) {
      return ".".concat(c);
    }).join('');
    selectors.unshift("".concat(tagName).concat(id ? "#".concat(id) : '').concat(classes));
    element = element.parentElement;
  }
  return selectors.join(' > ');
};
var generateXPathWithNearestParentId = exports.generateXPathWithNearestParentId = function generateXPathWithNearestParentId(element) {
  var path = '';
  var nearestParentId = null;

  // Check if the current element's has an ID
  if (element.id) {
    nearestParentId = element.id;
  }
  while (!nearestParentId && element !== document.body) {
    var tagName = element.tagName.toLowerCase();
    var index = 1;
    var sibling = element.previousElementSibling;
    while (sibling) {
      if (sibling.tagName.toLowerCase() === tagName) {
        index += 1;
      }
      sibling = sibling.previousElementSibling;
    }
    if (index === 1) {
      path = "/".concat(tagName).concat(path);
    } else {
      path = "/".concat(tagName, "[").concat(index, "]").concat(path);
    }

    // Check if the current element's parent has an ID
    if (element.parentElement.id) {
      nearestParentId = element.parentElement.id;
      break; // Stop searching when we find the nearest parent with an ID
    }

    element = element.parentElement;
  }
  if (nearestParentId && nearestParentId !== 'doodlemars-nav-gpt-section') {
    path = "//*[@id='".concat(nearestParentId, "']").concat(path);
    return path;
  }
  return null; // No parent with an ID found
};

var findElementById = exports.findElementById = function findElementById(id) {
  return document.getElementById(id);
};
var findElementByCss = exports.findElementByCss = function findElementByCss(selector) {
  return document.querySelector(selector);
};
var findElementByAttribute = exports.findElementByAttribute = function findElementByAttribute(attribute, value) {
  var selector = "[".concat(attribute, "=\"").concat(value, "\"]");
  return document.querySelector(selector);
};
var selectDropdownValue = exports.selectDropdownValue = function selectDropdownValue(element, value) {
  if (element) {
    element.value = value;
  } else {
    console.error('Dropdown element not found.');
  }
};
var selectDropdownByLabel = exports.selectDropdownByLabel = function selectDropdownByLabel(selectElement, label) {
  if (selectElement) {
    for (var i = 0; i < selectElement.options.length; i += 1) {
      if (selectElement.options[i].textContent === label) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  } else {
    console.error('Dropdown element not found.');
  }
};
var triggerMouseOutEvent = exports.triggerMouseOutEvent = function triggerMouseOutEvent(element) {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    var event = new MouseEvent('mouseout', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse out event:', e);
  }
};
var triggerMouseMoveEvent = exports.triggerMouseMoveEvent = function triggerMouseMoveEvent(element, clientX, clientY) {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    var event = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX || 0,
      clientY: clientY || 0
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse move event:', e);
  }
};
var triggerMouseUpEvent = exports.triggerMouseUpEvent = function triggerMouseUpEvent(element) {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    var event = new MouseEvent('mouseup', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse up event:', e);
  }
};
var pause = exports.pause = function pause(milliseconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
};

// Function to navigate to a new route
var navigateTo = exports.navigateTo = function navigateTo(route) {
  // Update the browser's URL without causing a page reload
  window.history.pushState(null, null, route);
};

// Function to find elements with onClick functions
var findElementsWithOnClick = exports.findElementsWithOnClick = function findElementsWithOnClick() {
  var elementsWithOnClick = [];
  var allElements = document.querySelectorAll('*');
  allElements.forEach(function (element) {
    var onClickAttribute = element.getAttribute('onclick');
    if (onClickAttribute !== null || element.onclick || element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'select' || element.tagName.toLowerCase() === 'input') {
      elementsWithOnClick.push(element);
    }
  });
  return elementsWithOnClick;
};

// Function to check if an element is clickable
var isElementClickable = exports.isElementClickable = function isElementClickable(element) {
  var onClickAttribute = element.getAttribute('onclick');
  var isAnchorWithHref = element.tagName.toLowerCase() === 'a' && element.hasAttribute('href');
  return !!onClickAttribute || isAnchorWithHref;
};

// Function to check if an element is disabled
var isElementDisabled = exports.isElementDisabled = function isElementDisabled(element) {
  var isDisabled = element.hasAttribute('disabled');
  var isFormField = ['input', 'button', 'select'].includes(element.tagName.toLowerCase());
  return isDisabled && isFormField;
};

// Function to check if an element is visible
var isElementVisible = exports.isElementVisible = function isElementVisible(element) {
  if (!element) {
    return false; // Handle invalid elements
  }

  // Check if the element is hidden via CSS 'display' property
  var computedStyle = window.getComputedStyle(element);
  if (computedStyle.display === 'none') {
    return false;
  }

  // Check if the element is hidden via CSS 'visibility' property
  if (computedStyle.visibility === 'hidden') {
    return false;
  }

  // Check if the element has zero dimensions
  if (element.offsetWidth === 0 || element.offsetHeight === 0) {
    return false;
  }
  return true;
};

// Function to find anchor elements in the HTML document
var findAnchorElements = exports.findAnchorElements = function findAnchorElements() {
  var anchorElements = document.querySelectorAll('a');
  return Array.from(anchorElements);
};
var getElementsWithVisibleText = exports.getElementsWithVisibleText = function getElementsWithVisibleText() {
  var elementsWithVisibleText = [];

  // Function to check if an element has visible text content
  function hasVisibleText(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.textContent.trim() !== '';
  }

  // Recursively traverse the DOM tree starting from the document body
  function traverse(element) {
    if (hasVisibleText(element)) {
      elementsWithVisibleText.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i += 1) {
      var child = element.childNodes[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        traverse(child);
      }
    }
  }

  // Start the traversal from the document body
  traverse(document.body);
  return elementsWithVisibleText;
};
var getHeaderElementsWithVisibleText = exports.getHeaderElementsWithVisibleText = function getHeaderElementsWithVisibleText() {
  var elementsWithVisibleText = [];

  // Function to check if an element has visible text content
  function hasVisibleText(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.textContent.trim() !== '';
  }

  // Recursively traverse the DOM tree starting from the document body
  function traverse(element) {
    if (hasVisibleText(element) && (element.tagName.toLowerCase() === 'h1' || element.tagName.toLowerCase() === 'h2' || element.tagName.toLowerCase() === 'h3' || element.tagName.toLowerCase() === 'h4' || element.tagName.toLowerCase() === 'h5' || element.tagName.toLowerCase() === 'h6')) {
      elementsWithVisibleText.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i += 1) {
      var child = element.childNodes[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        traverse(child);
      }
    }
  }

  // Start the traversal from the document body
  traverse(document.body);
  return elementsWithVisibleText;
};
var getElementDimensions = exports.getElementDimensions = function getElementDimensions(element) {
  var rect = element.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height
  };
};
var getElementHighlights = exports.getElementHighlights = function getElementHighlights(element) {
  var highlights = [];
  if (!element) {
    return highlights;
  }
  if (element.onclick) {
    highlights.push('onClick function');
  }
  if (element.tagName.toLowerCase() === 'a') {
    highlights.push('Link');
  }
  if (element.tagName.toLowerCase() === 'select') {
    highlights.push('select element');
  } else if (element.tagName.toLowerCase() === 'button') {
    highlights.push('button element');
  } else if (element.tagName.toLowerCase() === 'input') {
    highlights.push('input element');
  }
  return highlights;
};