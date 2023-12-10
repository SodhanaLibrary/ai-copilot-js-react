// Tooltip.js
import React from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
`;

const Tooltip = ({ title, children }) => {
  const handleMouseEnter = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  };

  const handleMouseLeave = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  };

  return (
    <TooltipWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <TooltipText id="tooltip">{title}</TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
