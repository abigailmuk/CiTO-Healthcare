import React from "react";
import { ModalContainer, TitleCloseBtn, ButtonClose, Title, Body, ModalOptions, ButtonCancel, ButtonContinue } from "./ShiftPostElements";

function Modal({ setOpenModal }) {
  return (
    
      <ModalContainer>
        <TitleCloseBtn>
        <ButtonClose
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </ButtonClose>
          </TitleCloseBtn>    
        <Title>Confirm Availability</Title>
        <Body>Please confirm below...</Body>    
        <ModalOptions>
          <ButtonContinue>Confirm Availability</ButtonContinue>
          
          <ButtonCancel
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </ButtonCancel>
          
        </ModalOptions>
    </ModalContainer>
    
  );
}

export default Modal;