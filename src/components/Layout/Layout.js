import React, { Fragment } from 'react';

import { MainContent } from './layout.style';

const layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <MainContent>{props.children}</MainContent>
  </Fragment>
);

export default layout;
