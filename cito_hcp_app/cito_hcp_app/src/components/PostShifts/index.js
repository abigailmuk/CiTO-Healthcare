import React, { useState } from 'react'
import { ShiftContainer, ShiftH1, ShiftWrapper, ShiftCard, ShiftIcon, ShiftH2, ShiftP, Button } from './PostShiftElements'
import Icon1 from '../../images/Morning.png'
import Icon2 from '../../images/Night.png'
import Icon3 from '../../images/AllDay.png'
import Modal from './Modal'

const Shift = () => {
    
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
        <>
        
    <ShiftContainer id="shift"> 
    
        <ShiftH1>Shifts</ShiftH1>
        
            <ShiftWrapper>
                
                <ShiftCard>
                    <ShiftIcon src={Icon1} />
                    
                    <ShiftP>General Nurse | Morning Shift | 08:00 - 14:00 </ShiftP>
                    <ShiftH2>Berkeley Home Care</ShiftH2>
                    <ShiftP>January 4, 2020</ShiftP>
                    <ShiftP>Surbiton | 020 4538 7694</ShiftP>
                    
                    
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                        
                </ShiftCard>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                <ShiftCard>
                    <ShiftIcon src={Icon2} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon3} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon3} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon2} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon3} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon2} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon3} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon2} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Edit </Button>
                </ShiftCard>
                
            </ShiftWrapper>
    </ShiftContainer>
    </>
  )
}

export default Shift