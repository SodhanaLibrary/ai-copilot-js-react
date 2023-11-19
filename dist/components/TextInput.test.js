"use strict";

var _react = _interopRequireDefault(require("react"));
var _TextInput = _interopRequireDefault(require("./TextInput"));
var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe("TextInput", function () {
  it("renders properly", function () {
    var tree = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
      label: "Email",
      placeholder: "name@example.com"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});