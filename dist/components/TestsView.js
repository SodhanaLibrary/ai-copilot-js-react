"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _Table = _interopRequireDefault(require("@material-ui/core/Table"));
var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));
var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));
var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));
var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));
var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _PlayCircleOutline = _interopRequireDefault(require("@material-ui/icons/PlayCircleOutline"));
var _AddCircleOutlineOutlined = _interopRequireDefault(require("@material-ui/icons/AddCircleOutlineOutlined"));
var _Assignment = _interopRequireDefault(require("@material-ui/icons/Assignment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uuid = require("uuid");
var _aiCopilotUtils = require("./aiCopilotUtils");
var _TestsView = _interopRequireDefault(require("./TestsView.jss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// ----------------------------------------------------------------------

function TestsView(props) {
  const {
    trainedData,
    history,
    navigate
  } = props;
  const [testsData, setTestsData] = (0, _react.useState)([]);
  const [testName, setTestName] = (0, _react.useState)('');
  const [stepsForAI, setStepsForAI] = (0, _react.useState)('');
  const [currentTest, setCurrentTest] = (0, _react.useState)(null);
  const [showAddTestSuiteForm, setShowAddTestSuiteForm] = (0, _react.useState)(false);
  const [showAddTestForm, setShowAddTestForm] = (0, _react.useState)(false);
  const [executState, setExecutState] = (0, _react.useState)({});
  const classes = (0, _TestsView.default)();
  const handleChange = (e, obj) => {
    obj.description = e.target.value;
    testsData(JSON.parse(JSON.stringify(testsData)));
    // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
  };

  const loadTestSuites = async suiteName => {
    const tresponse = await fetch('/aiCopilotJs/testSuites');
    const response = await tresponse.json();
    const tData = [];
    response.forEach(ts => {
      const testSuite = JSON.parse(ts);
      tData.push(testSuite);
    });
    setTestsData(tData);
    setShowAddTestForm(false);
  };
  const playTest = async test => {
    let status = 'success';
    for (let i = 0; i < test.commands.length; i += 1) {
      const tc = test.commands[i];
      if (tc.command === 'open') {
        if (history) {
          history.push(tc.target);
        } else if (navigate) {
          navigate(tc.target);
        } else {
          (0, _aiCopilotUtils.navigateTo)(tc.target);
        }
        executState[tc.id] = 'success';
      } else if (tc.command === 'assertElementPresent') {
        await (0, _aiCopilotUtils.waitForElement)(tc.target);
        const element = (0, _aiCopilotUtils.findElementBySelector)(tc.target);
        if (element) {
          executState[tc.id] = 'success';
        } else {
          executState[tc.id] = 'fail';
          status = 'fail';
          break;
        }
      } else if (tc.command === 'click') {
        await (0, _aiCopilotUtils.waitForElement)(tc.target);
        const element = (0, _aiCopilotUtils.findElementByXPath)(tc.target);
        if (element) {
          (0, _aiCopilotUtils.triggerClickEvent)(element);
          executState[tc.id] = 'success';
        } else {
          executState[tc.id] = 'fail';
          status = 'fail';
          break;
        }
      } else if (tc.command === 'type') {
        await (0, _aiCopilotUtils.waitForElement)(tc.target);
        const element = (0, _aiCopilotUtils.findElementByXPath)(tc.target);
        if (element) {
          await (0, _aiCopilotUtils.typeText)(element, tc.value);
          executState[tc.id] = 'success';
        } else {
          executState[tc.id] = 'fail';
          status = 'fail';
          break;
        }
      }
    }
    executState[test.id] = status;
    setExecutState(JSON.parse(JSON.stringify(executState)));
  };
  const generateSanityTests = () => {
    const tests = [];
    Object.keys(trainedData).forEach(path => {
      const commands = [];
      commands.push({
        id: (0, _uuid.v4)(),
        command: 'open',
        target: "/".concat(path),
        value: ''
      });
      Object.keys(trainedData[path]).filter(path => path !== 'description' && path !== 'name').forEach(xpath => {
        commands.push({
          id: (0, _uuid.v4)(),
          command: 'assertElementPresent',
          target: "xpath=".concat(xpath),
          value: ''
        });
      });
      const test = {
        id: (0, _uuid.v4)(),
        name: "".concat(path, " - Sanity"),
        commands
      };
      tests.push(test);
    });
    testsData.push({
      "id": (0, _uuid.v4)(),
      "version": "2.0",
      "name": "Sanity test suite",
      "tests": tests
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
  };
  (0, _react.useEffect)(() => {
    // const tData = localStorage.getItem('navGptTestsData');
    // if(tData) {
    //     setTestsData(JSON.parse(tData));
    // }
    loadTestSuites();
  }, []);
  const playWholeSuite = async (e, suite) => {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < suite.tests.length; i += 1) {
      await playTest(suite.tests[i]);
    }
  };
  const onCreateTestSuite = () => {
    testsData[testName] = [];
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setShowAddTestSuiteForm(false);
  };
  const onCreateTest = async suiteName => {
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
    const elements = Object.keys(trainedData[currentPath]).filter(key => key !== 'name' && key !== 'description').map(key => ({
      xpath: trainedData[currentPath][key].xpath,
      description: trainedData[currentPath][key].description
    }));
    const tresponse = await fetch('/aiCopilotJs/writeAItest', {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page: {
          path: "/".concat(currentPath),
          description: trainedData[currentPath].description
        },
        elements,
        testCase: stepsForAI
      }) // body data type must match "Content-Type" header
    });

    const response = await tresponse.json();
    const res = JSON.parse(response[0].message.content || '{}');
    testsData[suiteName].push({
      id: (0, _uuid.v4)(),
      name: testName,
      commands: res
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setShowAddTestForm(false);
  };
  const createValidationTests = async testCase => {
    const tresponse = await fetch('/aiCopilotJs/generateValidationTests', {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        testCase: testCase[0].commands
      }),
      // body data type must match "Content-Type" header
      timeout: 300000
    });
    const response = await tresponse.json();
    const testStrs = response[0].message.content.split('##########');
    testStrs.forEach(testStr => {
      if (testStr.trim().length) {
        const commands = JSON.parse(testStr);
        commands.forEach(command => {
          command.id = (0, _uuid.v4)();
        });
        testsData[testCase[1]].push({
          id: (0, _uuid.v4)(),
          name: 'Validation test',
          commands
        });
      }
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setCurrentTest(null);

    // testsData[suiteName].push({
    //     id: uuidv4(),
    //     name: testName,
    //     commands: res,
    // });
    // setTestsData(JSON.parse(JSON.stringify((testsData))));
    // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    // setShowAddTestForm(false);
  };

  const deleteTest = test => {
    Object.keys(testsData).forEach(suite => {
      testsData[suite] = testsData[suite].filter(tt => tt.id !== test.id);
    });
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    setCurrentTest(null);
  };
  const deleteStep = (test, command) => {
    test[0].commands = test[0].commands.filter(st => st.id !== command.id);
    setTestsData(JSON.parse(JSON.stringify(testsData)));
    //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
  };

  const generateArticle = () => {
    //
  };
  console.log(executState, testsData);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 2,
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: generateSanityTests
  }, "Generate sanity test"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    style: {
      marginLeft: 8
    },
    variant: "contained",
    color: "secondary"
  }, "Record test"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    style: {
      marginLeft: 8
    },
    variant: "contained",
    color: "secondary",
    onClick: () => setShowAddTestSuiteForm(true)
  }, "Add")), showAddTestSuiteForm && /*#__PURE__*/_react.default.createElement(_Paper.default, {
    style: {
      padding: 2,
      marginTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "20%"
  }, "Name : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    value: testName,
    onChange: e => setTestName(e.target.value),
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    mt: 1,
    pt: 1,
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => setShowAddTestSuiteForm(false)
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: testName.length === 0,
    variant: "contained",
    className: classes.ftBtn,
    color: "primary",
    onClick: onCreateTestSuite
  }, "Save")))), testsData && !currentTest && testsData.map(testSuite => /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: testSuite.name,
    mt: 1
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default, null, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4"
  }, testSuite.name), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: e => playWholeSuite(e, testSuite),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_PlayCircleOutline.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => setShowAddTestForm(true),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_AddCircleOutlineOutlined.default, null))), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, showAddTestForm && /*#__PURE__*/_react.default.createElement(_Paper.default, {
    style: {
      padding: 2,
      marginTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "20%"
  }, "Name : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    value: testName,
    onChange: e => setTestName(e.target.value),
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: 2,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "20%"
  }, "Steps for AI : "), /*#__PURE__*/_react.default.createElement(_Box.default, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    minRows: 5,
    multiline: true,
    fullWidth: true,
    value: stepsForAI,
    onChange: e => setStepsForAI(e.target.value),
    label: "",
    variant: "outlined"
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    mt: 1,
    pt: 1,
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => setShowAddTestForm(false)
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: testName.length === 0 || stepsForAI.length === 0,
    variant: "contained",
    className: classes.ftBtn,
    color: "primary",
    onClick: () => onCreateTest(testSuite)
  }, "Save")))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    width: "100%"
  }, testSuite.tests.map(test => {
    let style;
    if (executState[test.id] === 'success') {
      style = classes.successStep;
    } else if (executState[test.id] === 'fail') {
      style = classes.failedStep;
    }
    ;
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      className: "".concat(classes.testName, " ").concat(style),
      onClick: () => setCurrentTest([test, testSuite]),
      p: 1
    }, test.name);
  })))))), currentTest && /*#__PURE__*/_react.default.createElement(_Paper.default, {
    style: {
      marginTop: 1
    },
    mt: 1
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h5"
  }, currentTest[0].name), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => playTest(currentTest[0]),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_PlayCircleOutline.default, null)), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Generate documentation"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => generateArticle(currentTest[0]),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Assignment.default, null)))), /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => deleteTest(currentTest[0]),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: () => setCurrentTest(null),
    "aria-label": "train"
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)))), /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    component: _Paper.default
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    style: {
      minWidth: 650
    },
    "aria-label": "simple table"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Command"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Target"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Value"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Actions"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, currentTest[0].commands.map(row => {
    let style;
    if (executState[row.id] === 'success') {
      style = classes.successStep;
    } else if (executState[row.id] === 'fail') {
      style = classes.failedStep;
    }
    ;
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      className: style
    }, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.command), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.target), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.value), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      onClick: () => deleteStep(currentTest, row),
      "aria-label": "train"
    }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))));
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    pl: 1,
    mt: 1,
    pb: 2
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => createValidationTests(currentTest)
  }, "Create Validation Tests"))));
}
TestsView.propTypes = {
  navigate: _propTypes.default.function,
  history: _propTypes.default.object
};
TestsView.defaultProps = {
  navigate: null,
  history: null
};
var _default = exports.default = TestsView;