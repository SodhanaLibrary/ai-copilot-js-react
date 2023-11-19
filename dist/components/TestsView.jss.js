"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@material-ui/styles");
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    testName: {
      padding: 8,
      cursor: 'pointer',
      borderBottom: '1px solid #ccc',
      '&:hover': {
        backgroundColor: 'rgb(240, 240, 240)'
      }
    },
    successStep: {
      backgroundColor: '#6fbf73'
    }
  };
});
var _default = exports["default"] = useStyles;