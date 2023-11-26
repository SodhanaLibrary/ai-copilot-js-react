import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrainIcon from '@material-ui/icons/TrainOutlined';
import PhotoIcon from '@material-ui/icons/Photo';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TestsView from './TestsView';
import useStyles from './AiCopilot.jss';
import TrainedDataView from './TrainedDataView';
import {
  findElementsWithOnClick,
  getHeaderElementsWithVisibleText,
  generateXPathWithNearestParentId,
  generateCssSelector,
  getElementDimensions,
  isElementVisible,
  getElementHighlights
} from './aiCopilotUtils';

function AiCopilot(props) {
  const {navigate, history} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAutomation, setOpenAutomation] = React.useState(false);
  const [trainData, setTrainData] = React.useState({});
  const [description, setDescription] = React.useState('');
  const [tabValue, setTabValue] = React.useState(0);
  const [xpath, setXpath] = React.useState('');
  const [anchorOrigin, setAnchorOrigin] = React.useState({
    vertical: 'bottom',
    horizontal: 'right',
  });
  const [transformOrigin, setTransformOrigin] = React.useState({
    vertical: 'top',
    horizontal: 'left',
  });
  const [backdropDimensions, setBackdropDimensions] = React.useState([]);
  const classes = useStyles();

  const getCurrentPath = () => window.location.pathname.replace(/^\/|\/$/g, '');
  const getDescriptionFromOtherPaths = (pathTrainData, xpath) => {
    if(!pathTrainData) {
      return '';
    }
    for (let i = 0; i < pathTrainData.length; i+=1) {
      if (
        pathTrainData[i].elements[xpath] &&
        pathTrainData[i].elements[xpath].description &&
        pathTrainData[i].elements[xpath].description.length
      ) {
        return pathTrainData[i].elements[xpath].description;
      }
    }
    return '';
  };

  const onClickTrain = () => {
    const elements = findElementsWithOnClick();
    const headerElements = getHeaderElementsWithVisibleText();
    elements.push(...headerElements);
    const path = getCurrentPath();
    const pathTrainData = trainData.find(tdata => tdata.path === path);
    let foundElm = false;
    elements.filter(elm => isElementVisible(elm)).every(elm => {
      const xpath = generateXPathWithNearestParentId(elm);
      if(
        (!xpath || xpath.length === 0) ||
        (pathTrainData && (pathTrainData.elements[xpath] && pathTrainData.elements[xpath].trained))
      ) {
        return true;
      }
      if(
        pathTrainData &&
        pathTrainData.elements[xpath] &&
        pathTrainData.elements[xpath].description.length) {
        setDescription(pathTrainData.elements[xpath].description || '');
      } else {
        setDescription(getDescriptionFromOtherPaths(trainData, xpath));
      }
      setAnchorEl(elm);
      foundElm = true;
      return false;
    });
    if(!foundElm) {
      setAnchorEl(null);
    }
  };

  const onClickBugReport = () => {
    setOpenAutomation(true);
  };

  const onClickMic = () => {
    setOpenAutomation(true);
  };

  const onClickNext = ({skipped = false}) => {
    const xpath = generateXPathWithNearestParentId(anchorEl);
    const query = generateCssSelector(anchorEl);
    const path = getCurrentPath();
    let pathTrainData = trainData.find(page => page.path === path);
    if(!pathTrainData) {
      pathTrainData = {
        path,
        name: path,
        description: '',
        elements: {},
        uuid: uuidv4()
      };
      trainData.push(pathTrainData);
    }
    pathTrainData.elements[xpath] = {
      xpath,
      description,
      cssSelector: query,
      skipped,
      trained: true,
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

  useEffect(() => {
    if(!anchorEl) {
      setXpath('');
      return;
    }
    const dimensions = getElementDimensions(anchorEl);
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const backdropDimensions = [];
    const padding = 8;
    backdropDimensions.push({
      left: 0,
      top: 0,
      width: windowWidth,
      height: dimensions.y - padding,
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y - padding,
      width: dimensions.x - padding,
      height: dimensions.height + 2*padding,
    });
    backdropDimensions.push({
      left: dimensions.x + dimensions.width + padding,
      top: dimensions.y - padding,
      width: windowWidth - dimensions.x - dimensions.width - padding,
      height: dimensions.height + 2*padding,
    });
    backdropDimensions.push({
      left: 0,
      top: dimensions.y + dimensions.height + padding,
      width: windowWidth,
      height: windowHeight - dimensions.y - dimensions.height - padding,
    });
    setBackdropDimensions(backdropDimensions);
    const aOrigin = {
      vertical: 'bottom',
      horizontal: 'right',
    };
    const tOrigin = {
      vertical: 'top',
      horizontal: 'left',
    };
    if(dimensions.x + dimensions.width > (windowWidth - 550)) {
      tOrigin.horizontal = 'right';
      aOrigin.horizontal = 'left';
    }
    setTransformOrigin(tOrigin);
    setAnchorOrigin(aOrigin);
    setXpath(generateXPathWithNearestParentId(anchorEl));
  }, [anchorEl]);

  const loadTrainedData = async () => {
    const tresponse = await fetch('/aiCopilotJs/trainedData');
    const data = await tresponse.json();
    if(data && data.length) {
      const tData = JSON.parse(data);
      tData.forEach(page => {
        Object.keys(page.elements).forEach(xpath => {
          page.elements[xpath].trained = false;
        });
      });
      setTrainData(tData);
    }
  };

  useEffect(() => {
    loadTrainedData();
  }, []);

  const highlights = getElementHighlights(anchorEl);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box id="doodlemars-nav-gpt-section">
      <IconButton onClick={onClickTrain} aria-label="train">
        <TrainIcon/>
      </IconButton>
      <IconButton onClick={onClickBugReport} aria-label="train">
        <PhotoIcon />
      </IconButton>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {anchorEl && <Box m={1} p={2} width={500}>
          <Box pb={2} display="flex" alignItems="center">
            <Box width="20%">XPATH : </Box>
            <Box flexGrow={1}>
              <TextField fullWidth value={xpath} onChange={e => setXpath(e.target.value)} label="" variant="outlined" />
            </Box>
          </Box>
          <Box pb={2} display="flex">
            <Box width="20%">Highlights : </Box>
            <Box flexGrow={1}>{highlights.join(', ')}</Box>
          </Box>
          <TextField rows={4} fullWidth value={description} onChange={e => setDescription(e.target.value)} multiline id="navGpt-description-input" label="Description" variant="outlined" />
          <Box mt={1} pt={1} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={() => setAnchorEl(null)}>Cancel</Button>
            <Box display="flex">
              <Button variant="contained" className={classes.ftBtn} onClick={() => onClickNext({skipped: true})}>
                Skip
              </Button>
              <Button disabled={description.length === 0} variant="contained" className={classes.ftBtn} color="primary" onClick={onClickNext}>
                Next
              </Button>
            </Box>
          </Box>
        </Box>}
      </Popover>

      {anchorEl && createPortal((<Box>
          {backdropDimensions.map(dim => <Box style={{...dim}} className={classes.backdrop} />)}
        </Box>),
        document.body
      )}
      <Drawer
        anchor="right"
        open={openAutomation}
        onClose={() => setOpenAutomation(false)}
        hideBackdrop
      >
        <Box p={1} className={classes.automationBox}>
          <Box display="flex" justifyContent="space-between" style={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Trained"  />
              <Tab label="Tests"  />
            </Tabs>
            <IconButton onClick={() => setOpenAutomation(false)} aria-label="train">
                <CloseIcon />
            </IconButton>
          </Box>

          {tabValue === 0 && <TrainedDataView onChangeTrainedData={onChangeTrainedData} trainedData={trainData} />}
          {tabValue === 1 && <TestsView navigate={navigate} history={history} trainedData={trainData}/>}
        </Box>
      </Drawer>
    </Box>
  );
}

AiCopilot.propTypes = {
  navigate: PropTypes.function,
  history: PropTypes.object,
  components: PropTypes.object
};

AiCopilot.defaultProps = {
  navigate: null,
  history: null,
  components: {
    Popover: Popover,
    IconButton: Popover,
  }
};

export default React.memo(AiCopilot);
