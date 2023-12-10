import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = ({ children }) => {
  return <TableWrapper>{children}</TableWrapper>;
};

export default Table;
