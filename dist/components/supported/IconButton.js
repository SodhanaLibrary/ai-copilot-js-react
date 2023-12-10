"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // IconButton.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const IconButtonWrapper = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: color 0.3s;\n\n  &:hover {\n    color: #2196f3;\n  }\n"])));
const IconButton = _ref => {
  let {
    children,
    icon,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(IconButtonWrapper, {
    onClick: onClick
  }, children);
};
var _default = exports.default = IconButton;