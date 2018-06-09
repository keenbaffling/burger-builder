import React, { Component, Fragment } from 'react';

import ModalWrapper from './modal.style';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <ModalWrapper
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : 0
          }}
        >
          {this.props.children}
        </ModalWrapper>
      </Fragment>
    );
  }
}

export default Modal;
