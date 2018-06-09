import React from 'react';

import ButtonWrapper from './button.style';

const button = props => (
  <ButtonWrapper className={props.type} onClick={props.clicked}>{props.children}</ButtonWrapper>
);

export default button;
