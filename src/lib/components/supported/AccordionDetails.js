import React from 'react';
import styled from 'styled-components';

const AccordionDetailsWrapper = styled.div`
  padding: 16px;
  background: #fff;
`;

const AccordionDetails = ({ children, open }) => {
  if(!open) {
    return null;
  }
  return <AccordionDetailsWrapper>{children}</AccordionDetailsWrapper>;
};

export default AccordionDetails;
