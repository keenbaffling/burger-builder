import React from 'react';

import BuildControlWrapper from './buildControl.style';

const buildControl = props => (
  <BuildControlWrapper>
    <label>{props.label}</label>
    <button
      className="Less"
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </BuildControlWrapper>
);

export default buildControl;
