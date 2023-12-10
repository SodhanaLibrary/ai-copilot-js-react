"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // Button.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ButtonWrapper = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  background-color: ", ";\n  color: ", ";\n\n  border: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), props => props.variant === 'outlined' ? 'transparent' : '#2196f3', props => props.variant === 'outlined' ? '#2196f3' : '#fff', props => props.variant === 'outlined' ? '1px solid #2196f3' : 'none', props => props.variant === 'outlined' ? '#e3f2fd' : '#1565c0');
const Button = _ref => {
  let {
    children,
    variant,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(ButtonWrapper, {
    variant: variant,
    onClick: onClick
  }, children);
};
var _default = exports.default = Button;