import React from 'react';

import DrawerToggleWrapper from './drawerToggle.style';

const drawerToggle = props => (
  <DrawerToggleWrapper onClick={props.clicked}>
    <span />
    <span />
    <span />
  </DrawerToggleWrapper>
);

export default drawerToggle;
