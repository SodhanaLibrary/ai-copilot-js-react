// Box.js
import React from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.backgroundColor ? `background-color: ${props.backgroundColor};` : '')}
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.flexDirection ? `flex-direction: ${props.flexDirection};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props) => (props.m ? `margin: ${props.m * 8}px;` : '')}
  ${(props) => (props.mt ? `margin-top: ${props.mt * 8}px;` : '')}
  ${(props) => (props.mb ? `margin-bottom: ${props.mb * 8}px;` : '')}
  ${(props) => (props.ml ? `margin-left: ${props.ml * 8}px;` : '')}
  ${(props) => (props.mr ? `margin-right: ${props.mr * 8}px;` : '')}
  ${(props) => (props.p ? `padding: ${props.p * 8}px;` : '')}
  ${(props) => (props.pl ? `padding-left: ${props.pl * 8}px;` : '')}
  ${(props) => (props.pb ? `padding-bottom: ${props.pb * 8}px;` : '')}
  ${(props) => (props.pr ? `padding-right: ${props.pr * 8}px;` : '')}
  ${(props) => (props.pt ? `padding-top: ${props.pt * 8}px;` : '')}

`;

const Box = (props) => {
  return <BoxWrapper {...props}>{props.children}</BoxWrapper>;
};

export default Box;
