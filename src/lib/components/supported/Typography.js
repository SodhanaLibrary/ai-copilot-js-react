// Typography.js
import React from 'react';
import styled from 'styled-components';

const TypographyWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: ${(props) => (props.noMargin ? '0' : '0 0 16px')};
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => {
    switch (props.variant) {
      case 'h1':
        return '2.5rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.5rem';
      case 'h4':
        return '1.2rem';
      case 'h5':
        return '1rem';
      case 'h6':
        return '0.9rem';
      case 'subtitle1':
        return '1rem';
      case 'subtitle2':
        return '0.9rem';
      default:
        return '1rem';
    }
  }};
  font-weight: ${(props) => {
    switch (props.variant) {
      case 'h1':
        return '700';
      case 'h2':
        return '700';
      case 'h3':
        return '700';
      case 'h4':
        return '700';
      case 'h5':
        return '700';
      case 'h6':
        return '700';
      case 'subtitle1':
        return '400';
      case 'subtitle2':
        return '400';
      default:
        return '400';
    }
  }};
  line-height: ${(props) => {
    switch (props.variant) {
      case 'h1':
        return '2.5rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.5rem';
      case 'h4':
        return '1.2rem';
      case 'h5':
        return '1rem';
      case 'h6':
        return '0.9rem';
      case 'subtitle1':
        return '1.5rem';
      case 'subtitle2':
        return '1.2rem';
      default:
        return '1.5rem';
    }
  }};
`;

const Typography = (props) => {
  return <TypographyWrapper {...props}>{props.children}</TypographyWrapper>;
};

export default Typography;
