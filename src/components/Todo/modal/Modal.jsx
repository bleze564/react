import React, { Component, useEffect } from "react";
import { Backdrop, ModalContent } from "./Modal.styled";

export function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", (ev) => {
      if (ev.code === "Escape") {
        onClose();
      }
    });
    return () => {window.removeEventListener("keydown", (ev) => {
      if (ev.code === "Escape") {
        onClose();

    }})}
  }, [onClose]);
  const handleBackdropClick = (ev) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>
  );
}
