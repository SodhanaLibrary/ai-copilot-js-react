import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import IconButton from './IconButton';

const AccordionSummaryWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const AccordionSummary = ({ children, expandIcon, onClick }) => {
  return <AccordionSummaryWrapper onClick={onClick}>
       <Box display="flex" alignItems="center">{children}</Box>
       <IconButton>{expandIcon}</IconButton>
     </AccordionSummaryWrapper>;
};

export default AccordionSummary;
