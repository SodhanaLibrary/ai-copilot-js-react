"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TrainedDataView;
var _react = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// ----------------------------------------------------------------------

function TrainedDataView(props) {
  const {
    trainedData,
    onChangeTrainedData
  } = props;
  const handleChange = (e, obj) => {
    obj.description = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  const handleNameChange = (e, obj) => {
    obj.name = e.target.value;
    onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
  };
  const saveTrainedData = async () => {
    const tresponse = await fetch('/aiCopilotJs/trainedData', {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trainedData),
      // body data type must match "Content-Type" header
      timeout: 300000
    });
    const response = await tresponse.json();
  };
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 2,
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    }
  }, Object.keys(trainedData).map(path => /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: path,
    mb: 1
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default, null, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, path)), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    size: "small",
    label: "name",
    onChange: e => handleNameChange(e, trainedData[path]),
    fullWidth: true,
    value: trainedData[path].name,
    label: "",
    variant: "outlined"
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    size: "small",
    label: "description",
    onChange: e => handleChange(e, trainedData[path]),
    fullWidth: true,
    value: trainedData[path].description,
    label: "",
    variant: "outlined"
  }), /*#__PURE__*/_react.default.createElement(_Box.default, null, Object.keys(trainedData[path]).filter(xpath => xpath !== 'description').map(xpath => /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_Box.default, {
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
    value: trainedData[path][xpath].description,
    onChange: e => handleChange(e, trainedData[path][xpath]),
    label: "",
    variant: "outlined"
  }))))))))))), /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    onClick: saveTrainedData
  }, "Save")));
}