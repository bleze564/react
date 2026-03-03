import React, { Component } from 'react';
import { Backdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component {

    componentDidMount(){
      window.addEventListener('keydown', (ev)=>{
        if(ev.code === 'Escape'){
          this.props.onClose()
        }
      })
    }

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}