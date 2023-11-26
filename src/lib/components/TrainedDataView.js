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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
    const deleteTrainedXpath = (elements, xpath) => {
      delete elements[xpath]
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData)));
    };
    const deleteTrainedPage = (tData) => {
      onChangeTrainedData(JSON.parse(JSON.stringify(trainedData.filter(td => td.uuid !== tData.uuid))));
    };
    const saveTrainedData = async () => {
      const tresponse = await fetch('/aiCopilotJs/trainedData', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trainedData), // body data type must match "Content-Type" header
          timeout: 300000
        });
      const response = await tresponse.json();
    };
    return (
    <Box p={2} style={{backgroundColor: 'rgb(230, 230, 230)'}}>
         {trainedData.map(tData => <Box key={tData.path} mb={1}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{tData.path}</Typography>
              <IconButton onClick={() => deleteTrainedPage(tData)} aria-label="train">
                 <DeleteIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex" alignItems="center">
                  <Box width={120}>Page name: </Box>
                  <TextField size="small" label="name" onChange={e => handleNameChange(e, tData)} fullWidth value={tData.name} label="" variant="outlined" />
                </Box>
                <Box pt={1} display="flex" alignItems="center">
                  <Box width={120}>Description: </Box>
                  <TextField size="small" label="description" onChange={e => handleChange(e, tData)} fullWidth value={tData.description} label="" variant="outlined" />
                </Box>
                <Box>
                  {Object.keys(tData.elements).map(xpath => <Box display="flex" alignItems="center" width="100%">
                  <Box flexGrow={1}>
                      <hr />
                      <Box display="flex">
                        <Box width={100}>xpath : </Box><Box>{xpath}</Box>
                      </Box>
                      <Box display="flex" pt={1}>
                        <Box width={100}>description : </Box>
                        <Box flexGrow={1}>
                            <TextField size="small" fullWidth value={tData.elements[xpath].description} onChange={e => handleChange(e, tData.elements[xpath])} label="" variant="outlined" />
                        </Box>
                      </Box>
                  </Box>
                  <Box>
                    <IconButton onClick={() => deleteTrainedXpath(tData.elements, xpath)} aria-label="train">
                         <DeleteIcon />
                    </IconButton>
                  </Box>
                  </Box>)}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
         </Box>)}
         <Box>
           <Button variant="contained" color="primary" onClick={saveTrainedData}>
             Save
           </Button>
         </Box>
    </Box>
  );
}
