import React, { Fragment } from 'react';

import SideDrawerWrapper, { LogoWrapper } from './sideDrawer.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../ui/Backdrop/Backdrop';

const sideDrawer = props => {
  let attachedClasses = ['close'];

  if (props.open) {
    attachedClasses = ['open']
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerWrapper className={attachedClasses.join(' ')}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerWrapper>
    </Fragment>
  );
};

export default sideDrawer;
