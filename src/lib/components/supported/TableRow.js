import React from 'react';
import styled from 'styled-components';

const TableRowWrapper = styled.tr``;

const TableRow = ({ children }) => {
  return <TableRowWrapper>{children}</TableRowWrapper>;
};

export default TableRow;
