"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const AccordionDetailsWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 16px;\n  background: #fff;\n"])));
const AccordionDetails = _ref => {
  let {
    children,
    open
  } = _ref;
  if (!open) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(AccordionDetailsWrapper, null, children);
};
var _default = exports.default = AccordionDetails;