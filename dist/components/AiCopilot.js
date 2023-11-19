"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));
var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));
var _TrainOutlined = _interopRequireDefault(require("@material-ui/icons/TrainOutlined"));
var _Photo = _interopRequireDefault(require("@material-ui/icons/Photo"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _TestsView = _interopRequireDefault(require("./TestsView"));
var _AiCopilot = _interopRequireDefault(require("./AiCopilot.jss"));
var _TrainedDataView = _interopRequireDefault(require("./TrainedDataView"));
var _aiCopilotUtils = require("./aiCopilotUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AiCopilot(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    openAutomation = _React$useState4[0],
    setOpenAutomation = _React$useState4[1];
  var _React$useState5 = _react["default"].useState({}),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    trainData = _React$useState6[0],
    setTrainData = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    description = _React$useState8[0],
    setDescription = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(0),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    tabValue = _React$useState10[0],
    setTabValue = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    xpath = _React$useState12[0],
    setXpath = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({
      vertical: 'bottom',
      horizontal: 'right'
    }),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    anchorOrigin = _React$useState14[0],
    setAnchorOrigin = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({
      vertical: 'top',
      horizontal: 'left'
    }),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    transformOrigin = _React$useState16[0],
    setTransformOrigin = _React$useState16[1];
  var _React$useState17 = _react["default"].useState([]),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    backdropDimensions = _React$useState18[0],
    setBackdropDimensions = _React$useState18[1];
  var classes = (0, _AiCopilot["default"])();
  var getCurrentPath = function getCurrentPath() {
    return window.location.pathname.replace(/^\/|\/$/g, '');
  };
  var getDescriptionFromOtherPaths = function getDescriptionFromOtherPaths(pathTrainData, xpath) {
    if (!pathTrainData) {
      return '';
    }
    var paths = Object.keys(pathTrainData);
    for (var i = 0; i < paths.length; i += 1) {
      if (pathTrainData[paths[i]][xpath] && pathTrainData[paths[i]][xpath].description && pathTrainData[paths[i]][xpath].description.length) {
        return pathTrainData[paths[i]][xpath].description;
      }
    }
    return '';
  };
  var onClickTrain = function onClickTrain() {
    var elements = (0, _aiCopilotUtils.findElementsWithOnClick)();
    var headerElements = (0, _aiCopilotUtils.getHeaderElementsWithVisibleText)();
    elements.push.apply(elements, _toConsumableArray(headerElements));
    var path = getCurrentPath();
    var pathTrainData = trainData[path];
    var foundElm = false;
    elements.filter(function (elm) {
      return (0, _aiCopilotUtils.isElementVisible)(elm);
    }).every(function (elm) {
      var xpath = (0, _aiCopilotUtils.generateXPathWithNearestParentId)(elm);
      if (!xpath || xpath.length === 0 || pathTrainData && pathTrainData[xpath] && pathTrainData[xpath].trained) {
        return true;
      }
      if (pathTrainData && pathTrainData[xpath] && pathTrainData[xpath].description.length) {
        setDescription(pathTrainData[xpath].description || '');
      } else {
        setDescription(getDescriptionFromOtherPaths(trainData, xpath));
      }
      setAnchorEl(elm);
      foundElm = true;
      return false;
    });
    if (!foundElm) {
      setAnchorEl(null);
    }
  };
  var onClickBugReport = function onClickBugReport() {
    setOpenAutomation(true);
  };
  var onClickMic = function onClickMic() {
    setOpenAutomation(true);
  };
  var onClickNext = function onClickNext(_ref) {
    var _ref$skipped = _ref.skipped,
      skipped = _ref$skipped === void 0 ? false : _ref$skipped;
    var xpath = (0, _aiCopilotUtils.generateXPathWithNearestParentId)(anchorEl);
    var query = (0, _aiCopilotUtils.generateCssSelector)(anchorEl);
    var path = getCurrentPath();
    var pathTrainData = trainData[path] || {};
    pathTrainData[xpath] = {
      xpath: xpath,
      description: description,
      cssSelector: query,
      skipped: skipped,
      trained: true
    };
    console.log('Trained data', xpath, pathTrainData[xpath]);
    trainData[path] = pathTrainData;
    localStorage.setItem('navGptTrainData', JSON.stringify(trainData));
    setTrainData(JSON.parse(JSON.stringify(trainData)));
    setDescription('');
    setTimeout(function () {
      onClickTrain();
    }, 0);
  };
  var onChangeTrainedData = function onChangeTrainedData(trainedData) {
    setTrainData(trainedData);
    localStorage.setItem('navGptTrainData', JSON.stringify(trainedData));
  };
  (0, _react.useEffect)(function () {
    if (!anchorEl) {
      setXpath('');
      return;
    }
    var dimensions = (0, _aiCopilotUtils.getElementDimensions)(anchorEl);
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var backdropDimensions = [];
    var padding = 8;
    backdropDimensions.push({
      left: 0,
      top: 0,
      width: windowWidth,
      height: dimensions.y - padding
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y - padding,
      width: dimensions.x - padding,
      height: dimensions.height + 2 * padding
    });
    backdropDimensions.push({
      left: dimensions.x + dimensions.width + padding,
      top: dimensions.y - padding,
      width: windowWidth - dimensions.x - dimensions.width - padding,
      height: dimensions.height + 2 * padding
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y + dimensions.height + padding,
      width: windowWidth,
      height: windowHeight - dimensions.y - dimensions.height - padding
    });
    setBackdropDimensions(backdropDimensions);
    var aOrigin = {
      vertical: 'bottom',
      horizontal: 'right'
    };
    var tOrigin = {
      vertical: 'top',
      horizontal: 'left'
    };
    if (dimensions.x + dimensions.width > windowWidth - 550) {
      tOrigin.horizontal = 'right';
      aOrigin.horizontal = 'left';
    }
    setTransformOrigin(tOrigin);
    setAnchorOrigin(aOrigin);
    setXpath((0, _aiCopilotUtils.generateXPathWithNearestParentId)(anchorEl));
  }, [anchorEl]);
  (0, _react.useEffect)(function () {
    var data = localStorage.getItem('navGptTrainData');
    if (data && data.length) {
      var tData = JSON.parse(data);
      Object.keys(tData).forEach(function (page) {
        Object.keys(tData[page]).forEach(function (xpath) {
          if (_typeof(tData[page][xpath]) === 'object') {
            tData[page][xpath].trained = false;
          }
        });
      });
      setTrainData(tData);
    }
  }, []);
  var highlights = (0, _aiCopilotUtils.getElementHighlights)(anchorEl);
  var handleChange = function handleChange(event, newValue) {
    setTabValue(newValue);
  };
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    id: "doodlemars-nav-gpt-section"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: onClickTrain,
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_TrainOutlined["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: onClickBugReport,
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_Photo["default"], null)), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    open: !!anchorEl,
    anchorEl: anchorEl,
    anchorOrigin: anchorOrigin,
    transformOrigin: transformOrigin
  }, anchorEl && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    m: 1,
    p: 2,
    width: 500
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    width: "20%"
  }, "XPATH : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    flexGrow: 1
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    value: xpath,
    onChange: function onChange(e) {
      return setXpath(e.target.value);
    },
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pb: 2,
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    width: "20%"
  }, "Highlights : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    flexGrow: 1
  }, highlights.join(', '))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    rows: 4,
    fullWidth: true,
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    multiline: true,
    id: "navGpt-description-input",
    label: "Description",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 1,
    pt: 1,
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: function onClick() {
      return setAnchorEl(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    className: classes.ftBtn,
    onClick: function onClick() {
      return onClickNext({
        skipped: true
      });
    }
  }, "Skip"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: description.length === 0,
    variant: "contained",
    className: classes.ftBtn,
    color: "primary",
    onClick: onClickNext
  }, "Next"))))), anchorEl && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement(_Box["default"], null, backdropDimensions.map(function (dim) {
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      style: _objectSpread({}, dim),
      className: classes.backdrop
    });
  })), document.body), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    anchor: "right",
    open: openAutomation,
    onClose: function onClose() {
      return setOpenAutomation(false);
    },
    hideBackdrop: true
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 1,
    className: classes.automationBox
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-between",
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: tabValue,
    onChange: handleChange,
    "aria-label": "basic tabs example"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Trained"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Tests"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Navigation flows"
  })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return setOpenAutomation(false);
    },
    "aria-label": "train"
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null))), tabValue === 0 && /*#__PURE__*/_react["default"].createElement(_TrainedDataView["default"], {
    onChangeTrainedData: onChangeTrainedData,
    trainedData: trainData
  }), tabValue === 1 && /*#__PURE__*/_react["default"].createElement(_TestsView["default"], {
    trainedData: trainData
  }), tabValue === 2 && /*#__PURE__*/_react["default"].createElement(_TrainedDataView["default"], {
    trainedData: trainData
  }))));
}
AiCopilot.propTypes = {};
AiCopilot.defaultProps = {};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(AiCopilot);