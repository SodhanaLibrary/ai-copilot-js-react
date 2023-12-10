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
const TableWrapper = _styledComponents.default.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  border-collapse: collapse;\n"])));
const Table = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(TableWrapper, null, children);
};
var _default = exports.default = Table;