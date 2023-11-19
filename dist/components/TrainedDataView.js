"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TrainedDataView;
var _react = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ----------------------------------------------------------------------

function TrainedDataView(props) {
  var trainedData = props.trainedData,
    onChangeTrainedData = props.onChangeTrainedData;
  var handleChange = function handleChange(e, obj) {
    obj.description = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  var handleNameChange = function handleNameChange(e, obj) {
    obj.name = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 2,
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    }
  }, Object.keys(trainedData).map(function (path) {
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      key: path,
      mb: 1
    }, /*#__PURE__*/_react["default"].createElement(_Accordion["default"], null, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
      expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, path)), /*#__PURE__*/_react["default"].createElement(_AccordionDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _defineProperty(_defineProperty({
      size: "small",
      label: "name",
      onChange: function onChange(e) {
        return handleNameChange(e, trainedData[path]);
      },
      fullWidth: true,
      value: trainedData[path].name
    }, "label", ""), "variant", "outlined")), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _defineProperty(_defineProperty({
      size: "small",
      label: "description",
      onChange: function onChange(e) {
        return handleChange(e, trainedData[path]);
      },
      fullWidth: true,
      value: trainedData[path].description
    }, "label", ""), "variant", "outlined")), /*#__PURE__*/_react["default"].createElement(_Box["default"], null, Object.keys(trainedData[path]).filter(function (xpath) {
      return xpath !== 'description';
    }).map(function (xpath) {
      return /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        width: 100
      }, "xpath : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], null, xpath)), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        pt: 1
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        width: 100
      }, "description : "), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        flexGrow: 1
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        size: "small",
        fullWidth: true,
        value: trainedData[path][xpath].description,
        onChange: function onChange(e) {
          return handleChange(e, trainedData[path][xpath]);
        },
        label: "",
        variant: "outlined"
      }))));
    })))));
  }));
}