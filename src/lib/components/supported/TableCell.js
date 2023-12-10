// TableCell.js
import React from 'react';
import styled from 'styled-components';

const TableCellWrapper = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = ({ children }) => {
  return <TableCellWrapper>{children}</TableCellWrapper>;
};

export default TableCell;
