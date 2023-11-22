"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));
var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));
var _TrainOutlined = _interopRequireDefault(require("@material-ui/icons/TrainOutlined"));
var _Photo = _interopRequireDefault(require("@material-ui/icons/Photo"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TestsView = _interopRequireDefault(require("./TestsView"));
var _AiCopilot = _interopRequireDefault(require("./AiCopilot.jss"));
var _TrainedDataView = _interopRequireDefault(require("./TrainedDataView"));
var _aiCopilotUtils = require("./aiCopilotUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function AiCopilot(props) {
  const {
    navigate,
    history
  } = props;
  const [anchorEl, setAnchorEl] = _react.default.useState(null);
  const [openAutomation, setOpenAutomation] = _react.default.useState(false);
  const [trainData, setTrainData] = _react.default.useState({});
  const [description, setDescription] = _react.default.useState('');
  const [tabValue, setTabValue] = _react.default.useState(0);
  const [xpath, setXpath] = _react.default.useState('');
  const [anchorOrigin, setAnchorOrigin] = _react.default.useState({
    vertical: 'bottom',
    horizontal: 'right'
  });
  const [transformOrigin, setTransformOrigin] = _react.default.useState({
    vertical: 'top',
    horizontal: 'left'
  });
  const [backdropDimensions, setBackdropDimensions] = _react.default.useState([]);
  const classes = (0, _AiCopilot.default)();
  const getCurrentPath = () => window.location.pathname.replace(/^\/|\/$/g, '');
  const getDescriptionFromOtherPaths = (pathTrainData, xpath) => {
    if (!pathTrainData) {
      return '';
    }
    const paths = Object.keys(pathTrainData);
    for (let i = 0; i < paths.length; i += 1) {
      if (pathTrainData[paths[i]][xpath] && pathTrainData[paths[i]][xpath].description && pathTrainData[paths[i]][xpath].description.length) {
        return pathTrainData[paths[i]][xpath].description;
      }
    }
    return '';
  };
  const onClickTrain = () => {
    const elements = (0, _aiCopilotUtils.findElementsWithOnClick)();
    const headerElements = (0, _aiCopilotUtils.getHeaderElementsWithVisibleText)();
    elements.push(...headerElements);
    const path = getCurrentPath();
    const pathTrainData = trainData[path];
    let foundElm = false;
    elements.filter(elm => (0, _aiCopilotUtils.isElementVisible)(elm)).every(elm => {
      const xpath = (0, _aiCopilotUtils.generateXPathWithNearestParentId)(elm);
      if (!xpath || xpath.length === 0 || pathTrainData && pathTrainData[xpath] && pathTrainData[xpath].trained) {
        return true;
      }
      if (pathTrainData && pathTrainData[xpath] && pathTrainData[xpath].description.length) {
        setDescription(pathTrainData[xpath].description || '');
      } else {
        setDescription(getDescriptionFromOtherPaths(trainData, xpath));
      }
      setAnchorEl(elm);
      foundElm = true;
      return false;
    });
    if (!foundElm) {
      setAnchorEl(null);
    }
  };
  const onClickBugReport = () => {
    setOpenAutomation(true);
  };
  const onClickMic = () => {
    setOpenAutomation(true);
  };
  const onClickNext = _ref => {
    let {
      skipped = false
    } = _ref;
    const xpath = (0, _aiCopilotUtils.generateXPathWithNearestParentId)(anchorEl);
    const query = (0, _aiCopilotUtils.generateCssSelector)(anchorEl);
    const path = getCurrentPath();
    const pathTrainData = trainData[path] || {};
    pathTrainData[xpath] = {
      xpath,
      description,
      cssSelector: query,
      skipped,
      trained: true
    };
    console.log('Trained data', xpath, pathTrainData[xpath]);
    trainData[path] = pathTrainData;
    localStorage.setItem('navGptTrainData', JSON.stringify(trainData));
    setTrainData(JSON.parse(JSON.stringify(trainData)));
    setDescription('');
    setTimeout(() => {
      onClickTrain();
    }, 0);
  };
  const onChangeTrainedData = trainedData => {
    setTrainData(trainedData);
    localStorage.setItem('navGptTrainData', JSON.stringify(trainedData));
  };
  (0, _react.useEffect)(() => {
    if (!anchorEl) {
      setXpath('');
      return;
    }
    const dimensions = (0, _aiCopilotUtils.getElementDimensions)(anchorEl);
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const backdropDimensions = [];
    const padding = 8;
    backdropDimensions.push({
      left: 0,
      top: 0,
      width: windowWidth,
      height: dimensions.y - padding
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y - padding,
      width: dimensions.x - padding,
      height: dimensions.height + 2 * padding
    });
    backdropDimensions.push({
      left: dimensions.x + dimensions.width + padding,
      top: dimensions.y - padding,
      width: windowWidth - dimensions.x - dimensions.width - padding,
      height: dimensions.height + 2 * padding
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y + dimensions.height + padding,
      width: windowWidth,
      height: windowHeight - dimensions.y - dimensions.height - padding
    });
    setBackdropDimensions(backdropDimensions);
    const aOrigin = {
      vertical: 'bottom',
      horizontal: 'right'
    };
    const tOrigin = {
      vertical: 'top',
      horizontal: 'left'
    };
    if (dimensions.x + dimensions.width > windowWidth - 550) {
      tOrigin.horizontal = 'right';
      aOrigin.horizontal = 'left';
    }
    setTransformOrigin(tOrigin);
    setAnchorOrigin(aOrigin);
    setXpath((0, _aiCopilotUtils.generateXPathWithNearestParentId)(anchorEl));
  }, [anchorEl]);
  (0, _react.useEffect)(() => {
    const data = localStorage.getItem('navGptTrainData');
    if (data && data.length) {
      const tData = JSON.parse(data);
      Object.keys(tData).forEach(page => {
        Object.keys(tData[page]).forEach(xpath => {
          if (typeof tData[page][xpath] === 'object') {
            tData[page][xpath].trained = false;
          }
        });
      });
      setTrainData(tData);
    }
  }, []);
  const highlights = (0, _aiCopilotUtils.getElementHighlights)(anchorEl);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    id: "doodlemars-nav-gpt-section"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onClickTrain,
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_TrainOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onClickBugReport,
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Photo.default, null)), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    open: !!anchorEl,
    anchorEl: anchorEl,
    anchorOrigin: anchorOrigin,
    transformOrigin: transformOrigin
  }, anchorEl && /*#__PURE__*/_react.default.createElement(_Box.default, {
    m: 1,
    p: 2,
    width: 500
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "20%"
  }, "XPATH : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    value: xpath,
    onChange: e => setXpath(e.target.value),
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: 2,
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "20%"
  }, "Highlights : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, highlights.join(', '))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    rows: 4,
    fullWidth: true,
    value: description,
    onChange: e => setDescription(e.target.value),
    multiline: true,
    id: "navGpt-description-input",
    label: "Description",
    variant: "outlined"
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    mt: 1,
    pt: 1,
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => setAnchorEl(null)
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    className: classes.ftBtn,
    onClick: () => onClickNext({
      skipped: true
    })
  }, "Skip"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: description.length === 0,
    variant: "contained",
    className: classes.ftBtn,
    color: "primary",
    onClick: onClickNext
  }, "Next"))))), anchorEl && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_Box.default, null, backdropDimensions.map(dim => /*#__PURE__*/_react.default.createElement(_Box.default, {
    style: {
      ...dim
    },
    className: classes.backdrop
  }))), document.body), /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    anchor: "right",
    open: openAutomation,
    onClose: () => setOpenAutomation(false),
    hideBackdrop: true
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 1,
    className: classes.automationBox
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    justifyContent: "space-between",
    style: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: tabValue,
    onChange: handleChange,
    "aria-label": "basic tabs example"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "Trained"
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "Tests"
  })), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => setOpenAutomation(false),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null))), tabValue === 0 && /*#__PURE__*/_react.default.createElement(_TrainedDataView.default, {
    onChangeTrainedData: onChangeTrainedData,
    trainedData: trainData
  }), tabValue === 1 && /*#__PURE__*/_react.default.createElement(_TestsView.default, {
    navigate: navigate,
    history: history,
    trainedData: trainData
  }))));
}
AiCopilot.propTypes = {
  navigate: _propTypes.default.function,
  history: _propTypes.default.object,
  components: _propTypes.default.object
};
AiCopilot.defaultProps = {
  navigate: null,
  history: null,
  components: {
    Popover: _Popover.default,
    IconButton: _Popover.default
  }
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(AiCopilot);