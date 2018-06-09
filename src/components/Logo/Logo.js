import React from 'react';

import LogoWrapper from './logo.style';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => (
  <LogoWrapper style={{ height: props.height }}>
    <img src={burgerLogo} alt="myBurger" />
  </LogoWrapper>
);

export default logo;
