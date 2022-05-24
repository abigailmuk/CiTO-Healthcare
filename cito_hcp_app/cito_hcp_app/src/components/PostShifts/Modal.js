import React, {useState} from "react";
import { ModalContainer, TitleCloseBtn, ButtonClose, Title, ModalOptions, ButtonCancel, ButtonContinue } from "./PostShiftElements";

import AddShift from '../EditShifts/AddShift';
function Modal({ setOpenModal }) {
  const [shiftId, setShiftId] = useState("");

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
        <Title>Edit Shift</Title>
                    <AddShift id={shiftId} setShiftId={setShiftId} />
        <ModalOptions>
          <ButtonContinue>Confirm</ButtonContinue>
          
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