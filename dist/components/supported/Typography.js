"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // Typography.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TypographyWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  margin: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), props => props.noMargin ? '0' : '0 0 16px', props => props.color || '#000', props => {
  switch (props.variant) {
    case 'h1':
      return '2.5rem';
    case 'h2':
      return '2rem';
    case 'h3':
      return '1.5rem';
    case 'h4':
      return '1.2rem';
    case 'h5':
      return '1rem';
    case 'h6':
      return '0.9rem';
    case 'subtitle1':
      return '1rem';
    case 'subtitle2':
      return '0.9rem';
    default:
      return '1rem';
  }
}, props => {
  switch (props.variant) {
    case 'h1':
      return '700';
    case 'h2':
      return '700';
    case 'h3':
      return '700';
    case 'h4':
      return '700';
    case 'h5':
      return '700';
    case 'h6':
      return '700';
    case 'subtitle1':
      return '400';
    case 'subtitle2':
      return '400';
    default:
      return '400';
  }
}, props => {
  switch (props.variant) {
    case 'h1':
      return '2.5rem';
    case 'h2':
      return '2rem';
    case 'h3':
      return '1.5rem';
    case 'h4':
      return '1.2rem';
    case 'h5':
      return '1rem';
    case 'h6':
      return '0.9rem';
    case 'subtitle1':
      return '1.5rem';
    case 'subtitle2':
      return '1.2rem';
    default:
      return '1.5rem';
  }
});
const Typography = props => {
  return /*#__PURE__*/_react.default.createElement(TypographyWrapper, props, props.children);
};
var _default = exports.default = Typography;