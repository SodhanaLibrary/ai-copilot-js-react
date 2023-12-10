"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2; // TextField.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TextFieldWrapper = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s ease;\n\n  &:focus {\n    border-color: #2196f3;\n  }\n"])));
const Label = _styledComponents.default.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  margin-bottom: 5px;\n  display: block;\n"])));
const TextField = _ref => {
  let {
    label,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement(Label, null, label), /*#__PURE__*/_react.default.createElement(TextFieldWrapper, rest));
};
var _default = exports.default = TextField;