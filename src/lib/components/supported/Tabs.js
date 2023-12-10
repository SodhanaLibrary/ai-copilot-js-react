// Tabs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tabs = ({ children, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <div>
      <TabsWrapper>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            onClick: () => handleTabClick(index),
            isActive: index === activeTab,
          })
        )}
      </TabsWrapper>
      <div>
        {React.Children.map(children, (child, index) =>
          index === activeTab ? child.props.children : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
