"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TrainedDataView;
var _react = _interopRequireWildcard(require("react"));
var _Accordion = _interopRequireDefault(require("./supported/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("./supported/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("./supported/AccordionDetails"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _IconButton = _interopRequireDefault(require("./supported/IconButton"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));
var _Typography = _interopRequireDefault(require("./supported/Typography"));
var _Box = _interopRequireDefault(require("./supported/Box"));
var _TextField = _interopRequireDefault(require("./supported/TextField"));
var _Button = _interopRequireDefault(require("./supported/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// ----------------------------------------------------------------------

function TrainedDataView(props) {
  const {
    trainedData,
    trainedDataItem,
    xpath,
    onChangeTrainedData
  } = props;
  const [editMode, setEditMode] = (0, _react.useState)(false);
  const handleChange = (e, obj) => {
    obj.description = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  const handleNameChange = (e, obj) => {
    obj.name = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center",
    width: "100%"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: 100
  }, "xpath : "), /*#__PURE__*/_react.default.createElement(_Box.default, null, xpath)), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    pt: 1
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: 100
  }, "description : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    size: "small",
    fullWidth: true,
    value: trainedDataItem[xpath].description,
    onChange: e => handleChange(e, trainedDataItem[xpath]),
    label: "",
    variant: "outlined"
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => setEditMode(true),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Edit.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => deleteTestSuite(testSuite),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))));
}