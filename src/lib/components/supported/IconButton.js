// IconButton.js
import React from 'react';
import styled from 'styled-components';

const IconButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #2196f3;
  }
`;

const IconButton = ({ children, icon, onClick }) => {
  return <IconButtonWrapper onClick={onClick}>{children}</IconButtonWrapper>;
};

export default IconButton;
