// TableContainer.js
import React from 'react';
import styled from 'styled-components';

const TableContainerWrapper = styled.div`
  overflow-x: auto;
`;

const TableContainer = ({ children }) => {
  return <TableContainerWrapper>{children}</TableContainerWrapper>;
};

export default TableContainer;
