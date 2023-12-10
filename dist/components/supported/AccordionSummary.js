"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Box = _interopRequireDefault(require("./Box"));
var _IconButton = _interopRequireDefault(require("./IconButton"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const AccordionSummaryWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #f5f5f5;\n  padding: 8px 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n"])));
const AccordionSummary = _ref => {
  let {
    children,
    expandIcon,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(AccordionSummaryWrapper, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center"
  }, children), /*#__PURE__*/_react.default.createElement(_IconButton.default, null, expandIcon));
};
var _default = exports.default = AccordionSummary;