"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // Tab.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TabWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px 15px;\n  cursor: pointer;\n  border-bottom: ", ";\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"])), props => props.isActive ? '2px solid #2196f3' : 'none');
const Tab = _ref => {
  let {
    label,
    isActive,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(TabWrapper, {
    isActive: isActive,
    onClick: onClick
  }, label);
};
var _default = exports.default = Tab;