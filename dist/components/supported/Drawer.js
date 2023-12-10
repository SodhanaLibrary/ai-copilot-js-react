"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2; // Drawer.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const DrawerWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: ", ";\n  width: 800px;\n  height: 100%;\n  background-color: #fff;\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);\n  transition: left 0.3s ease;\n"])), props => props.open ? '0' : '-800px');
const DrawerContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n"])));
const Drawer = _ref => {
  let {
    open,
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(DrawerWrapper, {
    open: open
  }, /*#__PURE__*/_react.default.createElement(DrawerContent, null, children));
};
var _default = exports.default = Drawer;