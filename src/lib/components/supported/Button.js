// Button.js
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: ${(props) =>
    props.variant === 'outlined' ? 'transparent' : '#2196f3'};
  color: ${(props) => (props.variant === 'outlined' ? '#2196f3' : '#fff')};

  border: ${(props) =>
    props.variant === 'outlined' ? '1px solid #2196f3' : 'none'};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'outlined' ? '#e3f2fd' : '#1565c0'};
  }
`;

const Button = ({ children, variant, onClick }) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
