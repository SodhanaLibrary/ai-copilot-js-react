import React from 'react';
import styled from 'styled-components';

const TableHeadWrapper = styled.thead`
  background-color: #f2f2f2;
`;

const TableHead = ({ children }) => {
  return <TableHeadWrapper>{children}</TableHeadWrapper>;
};

export default TableHead;
