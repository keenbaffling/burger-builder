import React, { Component, Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import LayoutWrapper from './layout.style';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  handleSideDrawerClosed = () => {
    this.setState({ showSideDrawer: false });
  };

  handleSideDrawerToggle = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.handleSideDrawerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.handleSideDrawerClosed}
        />
        <LayoutWrapper>{this.props.children}</LayoutWrapper>
      </Fragment>
    );
  }
}

export default Layout;
