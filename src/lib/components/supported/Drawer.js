// Drawer.js
import React from 'react';
import styled from 'styled-components';

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? '0' : '-800px')};
  width: 800px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
`;

const DrawerContent = styled.div`
  padding: 0px;
`;

const Drawer = ({ open, onClose, children }) => {
  return (
    <DrawerWrapper open={open}>
      <DrawerContent>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;
