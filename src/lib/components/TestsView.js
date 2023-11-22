import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {waitForElement, findElementByXPath, triggerClickEvent, typeText, navigateTo, findElementBySelector} from './aiCopilotUtils';
import useStyles from './TestsView.jss';

// ----------------------------------------------------------------------

function TestsView(props) {
    const { trainedData, history, navigate } = props;
    const [testsData, setTestsData] = useState([]);
    const [testName, setTestName] = useState('');
    const [stepsForAI, setStepsForAI] = useState('');
    const [currentTest, setCurrentTest] = useState(null);
    const [showAddTestSuiteForm, setShowAddTestSuiteForm] = useState(false);
    const [showAddTestForm, setShowAddTestForm] = useState(false);
    const [executState, setExecutState] = useState({});
    const classes = useStyles();

    const handleChange = (e, obj) => {
      obj.description = e.target.value;
      testsData(JSON.parse(JSON.stringify(testsData)));
      // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
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
      testsData.push({
        "id": uuidv4(),
        "version": "2.0",
        "name": "Sanity test suite",
        "tests": tests
      });
      setTestsData(JSON.parse(JSON.stringify(testsData)));
    };

    useEffect(() => {
      // const tData = localStorage.getItem('navGptTestsData');
      // if(tData) {
      //     setTestsData(JSON.parse(tData));
      // }
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
      testsData[testName] = [];
      setTestsData(JSON.parse(JSON.stringify((testsData))));
      // localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
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
        //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
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
            testsData[suite] = testsData[suite].filter(tt => tt.id !==  test.id);
        });
        setTestsData(JSON.parse(JSON.stringify((testsData))));
        //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
        setCurrentTest(null);
    };

    const deleteStep = (test, command) => {
        test[0].commands = test[0].commands.filter(st => st.id !== command.id);
        setTestsData(JSON.parse(JSON.stringify((testsData))));
        //localStorage.setItem('navGptTestsData', JSON.stringify(testsData));
    };

    const generateArticle = () => {
        //
    };

    console.log(executState, testsData);

    return (
    <Box p={2} style={{backgroundColor: 'rgb(230, 230, 230)'}}>
        <Box>
          <Button variant="contained" onClick={generateSanityTests}>Generate sanity test</Button>
          <Button style={{marginLeft: 8}} variant="contained" color="secondary">Record test</Button>
          <Button style={{marginLeft: 8}} variant="contained" color="secondary" onClick={() => setShowAddTestSuiteForm(true)}>Add</Button>
        </Box>
         {showAddTestSuiteForm && <Paper style={{padding: 2, marginTop: 1}}>
          <Box pb={2} display="flex" alignItems="center">
            <Box width="20%">Name : </Box>
            <Box flexGrow={1}>
              <TextField fullWidth value={testName} onChange={e => setTestName(e.target.value)} label="" variant="outlined" />
            </Box>
          </Box>
          <Box mt={1} pt={1} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={() => setShowAddTestSuiteForm(false)}>Cancel</Button>
            <Box display="flex">
              <Button disabled={testName.length === 0} variant="contained" className={classes.ftBtn} color="primary" onClick={onCreateTestSuite}>
                Save
              </Button>
            </Box>
          </Box>
         </Paper>}
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
            </AccordionSummary>
            <AccordionDetails>
            {showAddTestForm && <Paper style={{padding: 2, marginTop: 1}}>
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
            </Paper>}
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
            </AccordionDetails>
          </Accordion>
         </Box>)}
         {currentTest && <Paper style={{marginTop: 1}} mt={1}>
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
            <TableContainer component={Paper}>
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
            <Box pl={1} mt={1} pb={2}>
                <Button variant="contained" onClick={() => createValidationTests(currentTest)}>Create Validation Tests</Button>
            </Box>
         </Paper>}
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
