import React, {useState} from 'react'
import { ShiftContainer, ShiftH1, ShiftWrapper, ShiftCard } from './EditShiftElements'

import AddShift from './AddShift';
import ShiftList from './ShiftList';


const EditShift = () => {
    const [shiftId, setShiftId] = useState("");

    const getShiftIdHandler = (id) => {
      console.log("The ID of document to be edited: ", id);
      setShiftId(id);
    };
    return (
        <>
        
    <ShiftContainer id="shift"> 
    
        <ShiftH1>Edit Shifts</ShiftH1>
        
            <ShiftWrapper>
                
                <ShiftCard>
                    <h1> Add/Remove Shifts</h1>
                    <AddShift id={shiftId} setShiftId={setShiftId} />

                    <ShiftList getShiftId={getShiftIdHandler} />
           
                </ShiftCard>
                
                
            </ShiftWrapper>

    </ShiftContainer>
    </>
  )
}

export default EditShift