import React from 'react';

import BackdropWrapper from './backdrop.style';

const backdrop = props => (props.show ? <BackdropWrapper onClick={props.clicked} /> : null);

export default backdrop;
