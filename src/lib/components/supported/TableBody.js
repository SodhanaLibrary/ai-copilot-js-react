import React from 'react';
import styled from 'styled-components';

const TableBodyWrapper = styled.tbody``;

const TableBody = ({ children }) => {
  return <TableBodyWrapper>{children}</TableBodyWrapper>;
};

export default TableBody;
