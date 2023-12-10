import React from 'react';
import { useState } from 'react';
import Accordion from './supported/Accordion';
import AccordionSummary from './supported/AccordionSummary';
import AccordionDetails from './supported/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from './supported/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from './supported/Typography';
import Box from './supported/Box';
import TextField from './supported/TextField';
import Button from './supported/Button';

// ----------------------------------------------------------------------

export default function TrainedDataView(props) {
    const { trainedData, trainedDataItem, xpath, onChangeTrainedData } = props;
    const [editMode, setEditMode] = useState(false);

    const handleChange = (e, obj) => {
      obj.description = e.target.value;
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
    };
    const handleNameChange = (e, obj) => {
      obj.name = e.target.value;
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
    };
    return (
          <Box display="flex" alignItems="center" width="100%">
                  <Box flexGrow={1}>
                      <hr />
                      <Box display="flex">
                        <Box width={100}>xpath : </Box><Box>{xpath}</Box>
                      </Box>
                      <Box display="flex" pt={1}>
                        <Box width={100}>description : </Box>
                        <Box flexGrow={1}>
                            <TextField size="small" fullWidth value={trainedDataItem[xpath].description} onChange={e => handleChange(e, trainedDataItem[xpath])} label="" variant="outlined" />
                        </Box>
                      </Box>
                  </Box>
                  <Box>
                    <IconButton onClick={() => setEditMode(true)} aria-label="train">
                         <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteTestSuite(testSuite)} aria-label="train">
                         <DeleteIcon />
                    </IconButton>
                  </Box>
            </Box>
  );
}
