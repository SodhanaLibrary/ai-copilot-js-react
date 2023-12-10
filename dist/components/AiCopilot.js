"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _TrainOutlined = _interopRequireDefault(require("@material-ui/icons/TrainOutlined"));
var _Photo = _interopRequireDefault(require("@material-ui/icons/Photo"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uuid = require("uuid");
var _TestsView = _interopRequireDefault(require("./TestsView"));
var _AiCopilot = _interopRequireDefault(require("./AiCopilot.jss"));
var _TrainedDataView = _interopRequireDefault(require("./TrainedDataView"));
var _Button = _interopRequireDefault(require("./supported/Button"));
var _TextField = _interopRequireDefault(require("./supported/TextField"));
var _Box = _interopRequireDefault(require("./supported/Box"));
var _Tabs = _interopRequireDefault(require("./supported/Tabs"));
var _Tab = _interopRequireDefault(require("./supported/Tab"));
var _Drawer = _interopRequireDefault(require("./supported/Drawer"));
var _IconButton = _interopRequireDefault(require("./supported/IconButton"));
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
  const [trainData, setTrainData] = _react.default.useState([]);
  const [description, setDescription] = _react.default.useState('');
  const [tabValue, setTabValue] = _react.default.useState(0);
  const [xpath, setXpath] = _react.default.useState('');
  const [backdropDimensions, setBackdropDimensions] = _react.default.useState([]);
  const [popDimensions, setPopDimensions] = _react.default.useState({
    left: 0,
    top: 0,
    width: 500,
    height: 300
  });
  const classes = (0, _AiCopilot.default)();
  const getCurrentPath = () => window.location.pathname.replace(/^\/|\/$/g, '');
  const getDescriptionFromOtherPaths = (pathTrainData, xpath) => {
    if (!pathTrainData) {
      return '';
    }
    for (let i = 0; i < pathTrainData.length; i += 1) {
      if (pathTrainData[i].elements[xpath] && pathTrainData[i].elements[xpath].description && pathTrainData[i].elements[xpath].description.length) {
        return pathTrainData[i].elements[xpath].description;
      }
    }
    return '';
  };
  const onClickTrain = () => {
    const elements = (0, _aiCopilotUtils.findElementsWithOnClick)();
    const headerElements = (0, _aiCopilotUtils.getHeaderElementsWithVisibleText)();
    elements.push(...headerElements);
    const path = getCurrentPath();
    const pathTrainData = trainData.find(tdata => tdata.path === path);
    let foundElm = false;
    elements.filter(elm => (0, _aiCopilotUtils.isElementVisible)(elm)).every(elm => {
      const xpath = (0, _aiCopilotUtils.generateXPathWithNearestParentId)(elm);
      if (!xpath || xpath.length === 0 || pathTrainData && pathTrainData.elements[xpath] && pathTrainData.elements[xpath].trained) {
        return true;
      }
      if (pathTrainData && pathTrainData.elements[xpath] && pathTrainData.elements[xpath].description.length) {
        setDescription(pathTrainData.elements[xpath].description || '');
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
    let pathTrainData = trainData.find(page => page.path === path);
    if (!pathTrainData) {
      pathTrainData = {
        path,
        name: path,
        description: '',
        elements: {},
        uuid: (0, _uuid.v4)()
      };
      trainData.push(pathTrainData);
    }
    pathTrainData.elements[xpath] = {
      xpath,
      description,
      cssSelector: query,
      skipped,
      trained: true
    };
    console.log('Trained data', xpath, pathTrainData.elements[xpath]);
    setTrainData(JSON.parse(JSON.stringify(trainData)));
    setDescription('');
    setTimeout(() => {
      onClickTrain();
    }, 0);
  };
  const onChangeTrainedData = trainedData => {
    setTrainData(trainedData);
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
    const dims = {
      left: dimensions.x - 16,
      top: dimensions.y + dimensions.height + 4,
      width: 500,
      height: 250
    };
    if (dimensions.x + dimensions.width > windowWidth - 500) {
      dims.left = Math.max(0, dimensions.x - 500);
    }
    if (dimensions.y + dimensions.height > windowHeight - 250) {
      dims.top = Math.max(0, dimensions.y - dimensions.height - 250);
    }
    setPopDimensions(dims);
    setXpath((0, _aiCopilotUtils.generateXPathWithNearestParentId)(anchorEl));
  }, [anchorEl]);
  const loadTrainedData = async () => {
    const tresponse = await fetch('/aiCopilotJs/trainedData');
    const data = await tresponse.json();
    if (data && data.length) {
      const tData = JSON.parse(data);
      tData.forEach(page => {
        Object.keys(page.elements).forEach(xpath => {
          page.elements[xpath].trained = false;
        });
      });
      setTrainData(tData);
    }
  };
  (0, _react.useEffect)(() => {
    loadTrainedData();
  }, []);
  const highlights = (0, _aiCopilotUtils.getElementHighlights)(anchorEl);
  const handleChange = newValue => {
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
  }, /*#__PURE__*/_react.default.createElement(_Photo.default, null)), anchorEl && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_Box.default, null, backdropDimensions.map(dim => /*#__PURE__*/_react.default.createElement(_Box.default, {
    style: {
      ...dim
    },
    className: classes.backdrop
  }))), document.body), anchorEl && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_Box.default, {
    style: {
      ...popDimensions
    },
    m: 1,
    p: 2,
    className: classes.popover
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
  }, "Next")))), document.body), /*#__PURE__*/_react.default.createElement(_Drawer.default, {
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
  history: _propTypes.default.object
};
AiCopilot.defaultProps = {
  navigate: null,
  history: null
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(AiCopilot);