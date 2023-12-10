"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // TableCell.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TableCellWrapper = _styledComponents.default.td(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n"])));
const TableCell = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(TableCellWrapper, null, children);
};
var _default = exports.default = TableCell;