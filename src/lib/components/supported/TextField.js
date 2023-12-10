// TextField.js
import React from 'react';
import styled from 'styled-components';

const TextFieldWrapper = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2196f3;
  }
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

const TextField = ({ label, ...rest }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <TextFieldWrapper {...rest} />
    </div>
  );
};

export default TextField;
