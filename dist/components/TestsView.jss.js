"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/styles");
const useStyles = (0, _styles.makeStyles)(theme => ({
  testName: {
    width: '100%',
    padding: 8,
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
    '&:hover': {
      backgroundColor: 'rgb(240, 240, 240)'
    }
  },
  successStep: {
    backgroundColor: '#6fbf73'
  },
  failedStep: {
    backgroundColor: '#ff2222'
  }
}));
var _default = exports.default = useStyles;