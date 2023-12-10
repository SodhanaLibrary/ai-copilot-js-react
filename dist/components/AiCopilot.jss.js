"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/styles");
const useStyles = (0, _styles.makeStyles)(theme => ({
  ftBtn: {
    marginLeft: 8
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300
  },
  popover: {
    position: 'absolute',
    zIndex: 1500,
    background: '#fff',
    border: '1px solid #ccc'
  },
  content: {
    background: '#fff',
    padding: 20,
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
    zIndex: 2000
  },
  automationBox: {
    width: 800
  },
  autoBtn: {
    marginRight: 8
  }
}));
var _default = exports.default = useStyles;