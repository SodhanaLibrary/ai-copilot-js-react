import React from 'react';
import { useState, useEffect } from 'react';
import Accordion from './supported/Accordion';
import AccordionSummary from './supported/AccordionSummary';
import AccordionDetails from './supported/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from './supported/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Typography from './supported/Typography';
import Button from './supported/Button';
import TextField from './supported/TextField';
import Box from './supported/Box';
import Table from './supported/Table';
import TableBody from './supported/TableBody';
import TableCell from './supported/TableCell';
import TableContainer from './supported/TableContainer';
import TableHead from './supported/TableHead';
import TableRow from './supported/TableRow';
import Tooltip from './supported/Tooltip';
import {waitForElement, findElementByXPath, triggerClickEvent, typeText, navigateTo, findElementBySelector} from './aiCopilotUtils';
import useStyles from './TestsView.jss';

// ----------------------------------------------------------------------

function TestsView(props) {
    const { trainedData, history, navigate } = props;
    const [testsData, setTestsData] = useState([]);
    const [testName, setTestName] = useState('');
    const [testDirty, setTestDirty] = useState(false);
    const [stepsForAI, setStepsForAI] = useState('');
    const [currentTest, setCurrentTest] = useState(null);
    const [showAddTestSuiteForm, setShowAddTestSuiteForm] = useState(false);
    const [showAddTestForm, setShowAddTestForm] = useState(false);
    const [executState, setExecutState] = useState({});
    const classes = useStyles();

    const handleChange = (e, obj) => {
      obj.description = e.target.value;
      testsData(JSON.parse(JSON.stringify(testsData)));
    };

    const saveTestSuite = async testSuite => {
        const tresponse = await fetch('/aiCopilotJs/testSuites', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: testSuite.name,
              content: testSuite,
            }), // body data type must match "Content-Type" header
            timeout: 300000
          });
        const response = await tresponse.json();
    };

    const saveAllTestSuites = async () => {
        testsData.forEach(ts => {
           saveTestSuite(ts);
        });
    };

    const loadTestSuites = async (suiteName) => {
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

    const playTest = async (test) => {
        let status = 'success';
        for(let i=0; i<test.commands.length; i+=1) {
            const tc = test.commands[i];
            if(tc.command === 'open') {
                if (history) {
                  history.push(tc.target);
                } else if (navigate) {
                  navigate(tc.target);
                } else {
                  navigateTo(tc.target);
                }
                executState[tc.id] = 'success';
            } else if(tc.command === 'assertElementPresent') {
                await waitForElement(tc.target);
                const element = findElementBySelector(tc.target);
                if (element) {
                    executState[tc.id] = 'success';
                } else {
                    executState[tc.id] = 'fail';
                    status = 'fail';
                    break;
                }
            } else if(tc.command === 'click') {
                await waitForElement(tc.target);
                const element = findElementByXPath(tc.target);
                if (element) {
                    triggerClickEvent(element);
                    executState[tc.id] = 'success';
                } else {
                    executState[tc.id] = 'fail';
                    status = 'fail';
                    break;
                }
            } else if(tc.command === 'type') {
                await waitForElement(tc.target);
                const element = findElementByXPath(tc.target);
                if (element) {
                    await typeText(element, tc.value);
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
            id: uuidv4(),
            command: 'open',
            target: `/${path}`,
            value: ''
        });
        Object.keys(trainedData[path]).filter(path => path !== 'description' && path !== 'name').forEach(xpath => {
            commands.push({
                id: uuidv4(),
                command: 'assertElementPresent',
                target: `xpath=${xpath}`,
                value: ''
            });
        });
        const test = {
            id: uuidv4(),
            name: `${path} - Sanity`,
            commands,
        };
        tests.push(test);
      });
      const sanitySuite = {
        "id": uuidv4(),
        "version": "2.0",
        "name": "Sanity test suite",
        "tests": tests
      };
      testsData.push(sanitySuite);
      saveTestSuite(sanitySuite);
      setTestsData(JSON.parse(JSON.stringify(testsData)));
    };

    useEffect(() => {
      loadTestSuites();
    }, []);

    const playWholeSuite = async (e, suite) => {
        e.preventDefault();
        e.stopPropagation();
        for(let i=0; i< suite.tests.length; i += 1) {
            await playTest(suite.tests[i]);
        }
    };

    const onCreateTestSuite = () => {
      const newSuite = {
        "id": uuidv4(),
        "version": "2.0",
        "name": testName,
        "tests": []
      };
      testsData.push(newSuite);
      saveTestSuite(newSuite);
      setTestsData(JSON.parse(JSON.stringify((testsData))));
      setShowAddTestSuiteForm(false);
    };

    const onCreateTest = async (suiteName) => {
        const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
        const elements = Object.keys(trainedData[currentPath]).filter(key => key !== 'name' && key !== 'description').map(key => ({xpath: trainedData[currentPath][key].xpath, description: trainedData[currentPath][key].description}));
        const tresponse = await fetch('/aiCopilotJs/writeAItest', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: {
                  path: `/${currentPath}`,
                  description: trainedData[currentPath].description,
              },
              elements,
              testCase: stepsForAI,
            }), // body data type must match "Content-Type" header
          });
        const response = await tresponse.json();
        const res = JSON.parse(response[0].message.content || '{}');

        testsData[suiteName].push({
            id: uuidv4(),
            name: testName,
            commands: res,
        });
        setTestsData(JSON.parse(JSON.stringify((testsData))));
        setShowAddTestForm(false);
    };

    const createValidationTests = async (testCase) => {
        const tresponse = await fetch('/aiCopilotJs/generateValidationTests', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              testCase: testCase[0].commands,
            }), // body data type must match "Content-Type" header
            timeout: 300000
          });
        const response = await tresponse.json();
        const testStrs = response[0].message.content.split('##########')
        testStrs.forEach(testStr => {
            if(testStr.trim().length) {
                const commands = JSON.parse(testStr);
                commands.forEach(command => {
                    command.id = uuidv4();
                });
                testsData[testCase[1]].push({
                    id: uuidv4(),
                    name: 'Validation test',
                    commands,
                });
            }
        });
        setTestsData(JSON.parse(JSON.stringify((testsData))));
        setCurrentTest(null);
    };

    const deleteTest = test => {
        testsData.forEach(suite => {
            if(suite.tests.find(ts => ts.id === test.id)) {
                suite.tests = suite.tests.filter(ts => ts.id !== test.id);
                setTestsData(JSON.parse(JSON.stringify((testsData))));
                saveTestSuite(suite);
            }
        });
        setCurrentTest(null);
    };

    const deleteTestSuite = async testSuite => {
        setTestsData(testsData.filter(suite => suite.id !== testSuite.id));
        const tresponse = await fetch('/aiCopilotJs/testSuites', {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: testSuite.name
            }), // body data type must match "Content-Type" header
            timeout: 300000
          });
        const response = await tresponse.json();
    };

    const deleteStep = (test, command) => {
        test[0].commands = test[0].commands.filter(st => st.id !== command.id);
        setTestsData(JSON.parse(JSON.stringify((testsData))));
        setTestDirty(test);
    };

    const generateArticle = () => {
        //
    };

    useEffect(() => {
      if(!currentTest && testDirty) {
        saveTestSuite(testDirty[1]);
        setTestDirty(false);
      }
    }, [currentTest]);

    console.log(executState, testsData);

    return (
    <Box p={2} style={{backgroundColor: 'rgb(230, 230, 230)'}}>
        <Box>
          <Button variant="contained" onClick={generateSanityTests}>Generate sanity test</Button>
          <Button style={{marginLeft: 8}} variant="contained" color="secondary" onClick={() => setShowAddTestSuiteForm(true)}>Add</Button>
        </Box>
         {showAddTestSuiteForm && <Box style={{padding: 2, marginTop: 1}}>
          <Box p={2} display="flex" alignItems="center">
            <Box width="20%">Name : </Box>
            <Box flexGrow={1}>
              <TextField fullWidth value={testName} onChange={e => setTestName(e.target.value)} label="" variant="outlined" />
            </Box>
          </Box>
          <Box p={1} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={() => setShowAddTestSuiteForm(false)}>Cancel</Button>
            <Box display="flex">
              <Button disabled={testName.length === 0} variant="contained" className={classes.ftBtn} color="primary" onClick={onCreateTestSuite}>
                Save
              </Button>
            </Box>
          </Box>
         </Box>}
         {testsData && !currentTest && testsData.map(testSuite => <Box key={testSuite.name} mt={1}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="h4">{testSuite.name}</Typography>
              <IconButton onClick={e => playWholeSuite(e, testSuite)} aria-label="train">
                 <PlayCircleOutlineIcon />
               </IconButton>
                <IconButton onClick={() => setShowAddTestForm(true)} aria-label="train">
                    <AddCircleOutlineOutlined />
                </IconButton>
                <Tooltip title="Delete test suite">
                    <IconButton onClick={() => deleteTestSuite(testSuite)} aria-label="train">
                         <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </AccordionSummary>
            <AccordionDetails>
            <Box width="100%">
              {showAddTestForm && <Box style={{padding: 16, marginTop: 8}}>
                  <Box pb={2} display="flex" alignItems="center">
                      <Box width="20%">Name : </Box>
                      <Box flexGrow={1}>
                         <TextField fullWidth value={testName} onChange={e => setTestName(e.target.value)} label="" variant="outlined" />
                      </Box>
                  </Box>
                  <Box pb={2} display="flex" alignItems="center">
                      <Box width="20%">Steps for AI : </Box>
                      <Box flexGrow={1}>
                         <TextField minRows={5} multiline fullWidth value={stepsForAI} onChange={e => setStepsForAI(e.target.value)} label="" variant="outlined" />
                      </Box>
                  </Box>
                  <Box mt={1} pt={1} display="flex" justifyContent="space-between">
                      <Button variant="contained" onClick={() => setShowAddTestForm(false)}>Cancel</Button>
                      <Box display="flex">
                      <Button disabled={testName.length === 0 || stepsForAI.length === 0} variant="contained" className={classes.ftBtn} color="primary" onClick={() => onCreateTest(testSuite)}>
                          Save
                      </Button>
                      </Box>
                  </Box>
              </Box>}
              <Box width="100%">
                {testSuite.tests.map(test => {
                   let style;
                   if (executState[test.id] === 'success') {
                       style = classes.successStep;
                   } else if (executState[test.id] === 'fail') {
                       style = classes.failedStep;
                   };
                  return (<Box className={`${classes.testName} ${style}`} onClick={() => setCurrentTest([test, testSuite])} p={1}>
                      {test.name}
                    </Box>)})}
              </Box>
            </Box>
            </AccordionDetails>
          </Accordion>
         </Box>)}
         {currentTest && <Box style={{marginTop: 1}} mt={1}>
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                    <Typography variant="h5">
                        {currentTest[0].name}
                    </Typography>
                    <IconButton onClick={() => playTest(currentTest[0])} aria-label="train">
                       <PlayCircleOutlineIcon />
                    </IconButton>
                    <Tooltip title="Generate documentation">
                        <IconButton onClick={() => generateArticle(currentTest[0])} aria-label="train">
                             <AssignmentIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box>
                    <IconButton onClick={() => deleteTest(currentTest[0])} aria-label="train">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => setCurrentTest(null)} aria-label="train">
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
            <TableContainer component={Box}>
                <Table style={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Command</TableCell>
                        <TableCell>Target</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentTest[0].commands.map((row) => {
                        let style;
                        if (executState[row.id] === 'success') {
                            style = classes.successStep;
                        } else if (executState[row.id] === 'fail') {
                            style = classes.failedStep;
                        };

                        return <TableRow className={style}>
                            <TableCell >{row.command}</TableCell>
                            <TableCell >{row.target}</TableCell>
                            <TableCell >{row.value}</TableCell>
                            <TableCell >
                                <IconButton onClick={() => deleteStep(currentTest, row)} aria-label="train">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
         </Box>}
    </Box>
  );
}

TestsView.propTypes = {
  navigate: PropTypes.function,
  history: PropTypes.object,
};

TestsView.defaultProps = {
  navigate: null,
  history: null,
};

export default TestsView;
