import React, { Component } from 'react';
import { Backdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component {

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}