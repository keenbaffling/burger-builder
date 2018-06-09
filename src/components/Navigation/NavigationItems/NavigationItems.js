import React from 'react';

import ItemsWrapper from './navigationItems.style';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ItemsWrapper>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ItemsWrapper>
);

export default navigationItems;
