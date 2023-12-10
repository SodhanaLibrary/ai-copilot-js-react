"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // Box.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const BoxWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n"])), props => props.width ? "width: ".concat(props.width, ";") : '', props => props.height ? "height: ".concat(props.height, ";") : '', props => props.margin ? "margin: ".concat(props.margin, ";") : '', props => props.padding ? "padding: ".concat(props.padding, ";") : '', props => props.backgroundColor ? "background-color: ".concat(props.backgroundColor, ";") : '', props => props.border ? "border: ".concat(props.border, ";") : '', props => props.borderRadius ? "border-radius: ".concat(props.borderRadius, ";") : '', props => props.display ? "display: ".concat(props.display, ";") : '', props => props.flexDirection ? "flex-direction: ".concat(props.flexDirection, ";") : '', props => props.alignItems ? "align-items: ".concat(props.alignItems, ";") : '', props => props.justifyContent ? "justify-content: ".concat(props.justifyContent, ";") : '', props => props.m ? "margin: ".concat(props.m * 8, "px;") : '', props => props.mt ? "margin-top: ".concat(props.mt * 8, "px;") : '', props => props.mb ? "margin-bottom: ".concat(props.mb * 8, "px;") : '', props => props.ml ? "margin-left: ".concat(props.ml * 8, "px;") : '', props => props.mr ? "margin-right: ".concat(props.mr * 8, "px;") : '', props => props.p ? "padding: ".concat(props.p * 8, "px;") : '', props => props.pl ? "padding-left: ".concat(props.pl * 8, "px;") : '', props => props.pb ? "padding-bottom: ".concat(props.pb * 8, "px;") : '', props => props.pr ? "padding-right: ".concat(props.pr * 8, "px;") : '', props => props.pt ? "padding-top: ".concat(props.pt * 8, "px;") : '');
const Box = props => {
  return /*#__PURE__*/_react.default.createElement(BoxWrapper, props, props.children);
};
var _default = exports.default = Box;