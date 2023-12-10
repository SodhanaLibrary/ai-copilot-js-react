import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const Accordion = ({ children }) => {
  const [open, setOpen] = useState(false);
  return <AccordionWrapper>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onClick: () => setOpen(!open),
        open,
      })
    )}
  </AccordionWrapper>;
};

export default Accordion;
