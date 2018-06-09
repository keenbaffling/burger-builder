import React from 'react';

import ToolbarWrapper, { LogoWrapper } from './toolbar.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = props => (
  <ToolbarWrapper>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <nav className="is-desktop">
      <NavigationItems />
    </nav>
  </ToolbarWrapper>
);

export default toolbar;
