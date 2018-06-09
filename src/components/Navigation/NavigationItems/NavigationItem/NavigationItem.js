import React from 'react';

import ItemWrapper from './navigationItem.style';

const navigationItem = props => (
  <ItemWrapper>
    <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a>
  </ItemWrapper>
);

export default navigationItem;
