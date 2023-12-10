// Tab.js
import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? '2px solid #2196f3' : 'none')};

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Tab = ({ label, isActive, onClick }) => {
  return (
    <TabWrapper isActive={isActive} onClick={onClick}>
      {label}
    </TabWrapper>
  );
};

export default Tab;
