"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TestsView;
var _react = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _Table = _interopRequireDefault(require("@material-ui/core/Table"));
var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));
var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));
var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));
var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));
var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _PlayCircleOutline = _interopRequireDefault(require("@material-ui/icons/PlayCircleOutline"));
var _AddCircleOutlineOutlined = _interopRequireDefault(require("@material-ui/icons/AddCircleOutlineOutlined"));
var _Assignment = _interopRequireDefault(require("@material-ui/icons/Assignment"));
var _reactRouterDom = require("react-router-dom");
var _uuid = require("uuid");
var _aiCopilotUtils = require("./aiCopilotUtils");
var _TestsView = _interopRequireDefault(require("./TestsView.jss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// ----------------------------------------------------------------------

function TestsView(props) {
  var trainedData = props.trainedData;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    testsData = _useState2[0],
    setTestsData = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    testName = _useState4[0],
    setTestName = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    stepsForAI = _useState6[0],
    setStepsForAI = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentTest = _useState8[0],
    setCurrentTest = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showAddTestSuiteForm = _useState10[0],
    setShowAddTestSuiteForm = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showAddTestForm = _useState12[0],
    setShowAddTestForm = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    executState = _useState14[0],
    setExecutState = _useState14[1];
  var navigate = (0, _reactRouterDom.useNavigate)();
  var classes = (0, _TestsView["default"])();
  var handleChange = function handleChange(e, obj) {
    obj.description = e.target.value;
    testsData(JSON.parse(JSON.stringify(testsData)));
    localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
  };
  var playTest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(test) {
      var status, i, tc, element, _element, _element2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            status = 'success';
            i = 0;
          case 2:
            if (!(i < test.steps.length)) {
              _context.next = 52;
              break;
            }
            tc = test.steps[i];
            if (!(tc.command === 'open')) {
              _context.next = 9;
              break;
            }
            navigate(tc.target, {
              replace: true
            });
            executState[tc.id] = 'success';
            _context.next = 49;
            break;
          case 9:
            if (!(tc.command === 'assert element present')) {
              _context.next = 22;
              break;
            }
            _context.next = 12;
            return (0, _aiCopilotUtils.waitForElement)(tc.target);
          case 12:
            element = (0, _aiCopilotUtils.findElementByXPath)(tc.target);
            if (!element) {
              _context.next = 17;
              break;
            }
            executState[tc.id] = 'success';
            _context.next = 20;
            break;
          case 17:
            executState[tc.id] = 'fail';
            status = 'fail';
            return _context.abrupt("break", 52);
          case 20:
            _context.next = 49;
            break;
          case 22:
            if (!(tc.command === 'click')) {
              _context.next = 36;
              break;
            }
            _context.next = 25;
            return (0, _aiCopilotUtils.waitForElement)(tc.target);
          case 25:
            _element = (0, _aiCopilotUtils.findElementByXPath)(tc.target);
            if (!_element) {
              _context.next = 31;
              break;
            }
            (0, _aiCopilotUtils.triggerClickEvent)(_element);
            executState[tc.id] = 'success';
            _context.next = 34;
            break;
          case 31:
            executState[tc.id] = 'fail';
            status = 'fail';
            return _context.abrupt("break", 52);
          case 34:
            _context.next = 49;
            break;
          case 36:
            if (!(tc.command === 'type')) {
              _context.next = 49;
              break;
            }
            _context.next = 39;
            return (0, _aiCopilotUtils.waitForElement)(tc.target);
          case 39:
            _element2 = (0, _aiCopilotUtils.findElementByXPath)(tc.target);
            if (!_element2) {
              _context.next = 46;
              break;
            }
            _context.next = 43;
            return (0, _aiCopilotUtils.typeText)(_element2, tc.value);
          case 43:
            executState[tc.id] = 'success';
            _context.next = 49;
            break;
          case 46:
            executState[tc.id] = 'fail';
            status = 'fail';
            return _context.abrupt("break", 52);
          case 49:
            i += 1;
            _context.next = 2;
            break;
          case 52:
            executState[test.id] = status;
            setExecutState(JSON.parse(JSON.stringify(executState)));
          case 54:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function playTest(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var generateSanityTests = function generateSanityTests() {
    var tests = [];
    Object.keys(trainedData).forEach(function (path) {
      var steps = [];
      steps.push({
        id: (0, _uuid.v4)(),
        command: 'open',
        target: "/".concat(path),
        value: ''
      });
      Object.keys(trainedData[path]).filter(function (path) {
        return path !== 'description' && path !== 'name';
      }).forEach(function (xpath) {
        steps.push({
          id: (0, _uuid.v4)(),
          command: 'assert element present',
          target: xpath,
          value: ''
        });
      });
      var test = {
        id: (0, _uuid.v4)(),
        name: "".concat(path, " - Sanity"),
        steps: steps
      };
      tests.push(test);
    });
    testsData['Sanity test suite'] = tests;
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
  };
  (0, _react.useEffect)(function () {
    var tData = localStorage.getItem('navGptTestsData');
    if (tData) {
      setTestsData(JSON.parse(tData));
    }
  }, []);
  var playWholeSuite = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, suite) {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            e.stopPropagation();
            i = 0;
          case 3:
            if (!(i < suite.length)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 6;
            return playTest(suite[i]);
          case 6:
            i += 1;
            _context2.next = 3;
            break;
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function playWholeSuite(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onCreateTestSuite = function onCreateTestSuite() {
    testsData[testName] = [];
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setShowAddTestSuiteForm(false);
  };
  var onCreateTest = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(suiteName) {
      var currentPath, elements, tresponse, response, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
            elements = Object.keys(trainedData[currentPath]).filter(function (key) {
              return key !== 'name' && key !== 'description';
            }).map(function (key) {
              return {
                xpath: trainedData[currentPath][key].xpath,
                description: trainedData[currentPath][key].description
              };
            });
            _context3.next = 4;
            return fetch('/aiCopilotJs/writeAItest', {
              method: "POST",
              // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                page: {
                  path: "/".concat(currentPath),
                  description: trainedData[currentPath].description
                },
                elements: elements,
                testCase: stepsForAI
              }) // body data type must match "Content-Type" header
            });
          case 4:
            tresponse = _context3.sent;
            _context3.next = 7;
            return tresponse.json();
          case 7:
            response = _context3.sent;
            res = JSON.parse(response[0].message.content || '{}');
            testsData[suiteName].push({
              id: (0, _uuid.v4)(),
              name: testName,
              steps: res
            });
            setTestsData(JSON.parse(JSON.stringify(testsData)));
            localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
            setShowAddTestForm(false);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onCreateTest(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  var createValidationTests = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(testCase) {
      var tresponse, response, testStrs;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch('/aiCopilotJs/generateValidationTests', {
              method: "POST",
              // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                testCase: testCase[0].steps
              }),
              // body data type must match "Content-Type" header
              timeout: 300000
            });
          case 2:
            tresponse = _context4.sent;
            _context4.next = 5;
            return tresponse.json();
          case 5:
            response = _context4.sent;
            testStrs = response[0].message.content.split('##########');
            testStrs.forEach(function (testStr) {
              if (testStr.trim().length) {
                var steps = JSON.parse(testStr);
                steps.forEach(function (step) {
                  step.id = (0, _uuid.v4)();
                });
                testsData[testCase[1]].push({
                  id: (0, _uuid.v4)(),
                  name: 'Validation test',
                  steps: steps
                });
              }
            });
            setTestsData(JSON.parse(JSON.stringify(testsData)));
            localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
            setCurrentTest(null);

            // testsData[suiteName].push({
            //     id: uuidv4(),
            //     name: testName,
            //     steps: res,
            // });
            // setTestsData(JSON.parse(JSON.stringify((testsData))));
            // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
            // setShowAddTestForm(false);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function createValidationTests(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var deleteTest = function deleteTest(test) {
    Object.keys(testsData).forEach(function (suite) {
      testsData[suite] = testsData[suite].filter(function (tt) {
        return tt.id !== test.id;
      });
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setCurrentTest(null);
  };
  var deleteStep = function deleteStep(test, step) {
    test[0].steps = test[0].steps.filter(function (st) {
      return st.id !== step.id;
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
  };
  var generateArticle = function generateArticle() {
    //
  };
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 2,
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: generateSanityTests
  }, "Generate sanity test"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    style: {
      marginLeft: 8
    },
    variant: "contained",
    color: "secondary"
  }, "Record test"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    style: {
      marginLeft: 8
    },
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return setShowAddTestSuiteForm(true);
    }
  }, "Add")), showAddTestSuiteForm && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      padding: 2,
      marginTop: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    width: "20%"
  }, "Name : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    flexGrow: 1
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    value: testName,
    onChange: function onChange(e) {
      return setTestName(e.target.value);
    },
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 1,
    pt: 1,
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: function onClick() {
      return setShowAddTestSuiteForm(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: testName.length === 0,
    variant: "contained",
    className: classes.ftBtn,
    color: "primary",
    onClick: onCreateTestSuite
  }, "Save")))), testsData && !currentTest && Object.keys(testsData).map(function (testSuite) {
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      key: testSuite,
      mt: 1
    }, /*#__PURE__*/_react["default"].createElement(_Accordion["default"], null, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
      expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h4"
    }, testSuite), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: function onClick(e) {
        return playWholeSuite(e, testsData[testSuite]);
      },
      "aria-label": "train"
    }, /*#__PURE__*/_react["default"].createElement(_PlayCircleOutline["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: function onClick() {
        return setShowAddTestForm(true);
      },
      "aria-label": "train"
    }, /*#__PURE__*/_react["default"].createElement(_AddCircleOutlineOutlined["default"], null))), /*#__PURE__*/_react["default"].createElement(_AccordionDetails["default"], null, showAddTestForm && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
      sx: {
        padding: 2,
        marginTop: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      pb: 2,
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      width: "20%"
    }, "Name : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      flexGrow: 1
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      fullWidth: true,
      value: testName,
      onChange: function onChange(e) {
        return setTestName(e.target.value);
      },
      label: "",
      variant: "outlined"
    }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      pb: 2,
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      width: "20%"
    }, "Steps for AI : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      flexGrow: 1
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      minRows: 5,
      multiline: true,
      fullWidth: true,
      value: stepsForAI,
      onChange: function onChange(e) {
        return setStepsForAI(e.target.value);
      },
      label: "",
      variant: "outlined"
    }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      mt: 1,
      pt: 1,
      display: "flex",
      justifyContent: "space-between"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "contained",
      onClick: function onClick() {
        return setShowAddTestForm(false);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      disabled: testName.length === 0 || stepsForAI.length === 0,
      variant: "contained",
      className: classes.ftBtn,
      color: "primary",
      onClick: function onClick() {
        return onCreateTest(testSuite);
      }
    }, "Save")))), /*#__PURE__*/_react["default"].createElement(_Box["default"], null, testsData[testSuite].map(function (test) {
      var sx;
      if (executState[test.id] === 'success') {
        sx = {
          bgcolor: 'success.main',
          color: 'success.contrastText'
        };
      } else if (executState[test.id] === 'fail') {
        sx = {
          bgcolor: 'error.main',
          color: 'error.contrastText'
        };
      }
      ;
      return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        sx: sx,
        onClick: function onClick() {
          return setCurrentTest([test, testSuite]);
        },
        className: classes.testName,
        p: 1
      }, test.name);
    })))));
  }), currentTest && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      marginTop: 1
    },
    mt: 1
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, currentTest[0].name), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return playTest(currentTest[0]);
    },
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_PlayCircleOutline["default"], null)), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Generate documentation"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return generateArticle(currentTest[0]);
    },
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_Assignment["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return deleteTest(currentTest[0]);
    },
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return setCurrentTest(null);
    },
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))), /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    sx: {
      minWidth: 650
    },
    "aria-label": "simple table"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Command"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Target"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Value"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Actions"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, currentTest[0].steps.map(function (row) {
    var sx;
    if (executState[row.id] === 'success') {
      sx = {
        bgcolor: 'success.main',
        color: 'success.contrastText'
      };
    } else if (executState[row.id] === 'fail') {
      sx = {
        bgcolor: 'error.main',
        color: 'error.contrastText'
      };
    }
    ;
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      sx: sx
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, row.command), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, row.target), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, row.value), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: function onClick() {
        return deleteStep(currentTest, row);
      },
      "aria-label": "train"
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))));
  })))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pl: 1,
    mt: 1,
    pb: 2
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: function onClick() {
      return createValidationTests(currentTest);
    }
  }, "Create Validation Tests"))));
}