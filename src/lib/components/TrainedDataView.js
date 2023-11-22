import React from 'react';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// ----------------------------------------------------------------------

export default function TrainedDataView(props) {
    const { trainedData, onChangeTrainedData } = props;

    const handleChange = (e, obj) => {
      obj.description = e.target.value;
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
    };
    const handleNameChange = (e, obj) => {
      obj.name = e.target.value;
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
    };
    return (
    <Box p={2} style={{backgroundColor: 'rgb(230, 230, 230)'}}>
         {Object.keys(trainedData).map(path => <Box key={path} mb={1}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{path}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box display="flex" flexDirection="column" width="100%">
                <TextField size="small" label="name" onChange={e => handleNameChange(e, trainedData[path])} fullWidth value={trainedData[path].name} label="" variant="outlined" />
                <TextField size="small" label="description" onChange={e => handleChange(e, trainedData[path])} fullWidth value={trainedData[path].description} label="" variant="outlined" />
                <Box>
                  {Object.keys(trainedData[path]).filter(xpath => xpath !== 'description').map(xpath => <Box>
                      <hr />
                      <Box display="flex">
                        <Box width={100}>xpath : </Box><Box>{xpath}</Box>
                      </Box>
                      <Box display="flex" pt={1}>
                        <Box width={100}>description : </Box>
                        <Box flexGrow={1}>
                            <TextField size="small" fullWidth value={trainedData[path][xpath].description} onChange={e => handleChange(e, trainedData[path][xpath])} label="" variant="outlined" />
                        </Box>
                      </Box>
                  </Box>)}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
         </Box>)}
    </Box>
  );
}
