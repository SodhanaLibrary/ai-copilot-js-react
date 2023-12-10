"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2; // Tooltip.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TooltipWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n"])));
const TooltipText = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  visibility: hidden;\n  width: 120px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n"])));
const Tooltip = _ref => {
  let {
    title,
    children
  } = _ref;
  const handleMouseEnter = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  };
  const handleMouseLeave = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  };
  return /*#__PURE__*/_react.default.createElement(TooltipWrapper, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, children, /*#__PURE__*/_react.default.createElement(TooltipText, {
    id: "tooltip"
  }, title));
};
var _default = exports.default = Tooltip;