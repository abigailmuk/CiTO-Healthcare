import React, { useState } from 'react'
import { ShiftContainer, ShiftH1, ShiftWrapper, ShiftCard, ShiftIcon, ShiftH2, ShiftP, Button } from './ShiftPostElements'
import Icon1 from '../../images/carehome1.png'
import Icon2 from '../../images/carehome2.png'
import Icon3 from '../../images/carehome3.png'
import Icon4 from '../../images/carehome4.png'
import Icon5 from '../../images/carehome5.png'
import Icon6 from '../../images/carehome6.png'
import Icon7 from '../../images/carehome7.png'
import Icon8 from '../../images/carehome8.png'
import Icon9 from '../../images/carehome9.png'
import Icon10 from '../../images/carehome10.png'
import Modal from './Modal'
const Shift = () => {
    
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
        <>
        
    <ShiftContainer id="shift"> 
    
        <ShiftH1>Shifts Available</ShiftH1>
        
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
                        > Submit Availability </Button>
                        
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
                        > Submit Availability </Button>
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
                        > Submit Availability </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon4} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon5} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon6} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon7} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon8} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>
                <ShiftCard>
                    <ShiftIcon src={Icon9} />
                    <ShiftP> Mental Health Nurse | Night Shift | 20:00 - 07:00 </ShiftP>
                    <ShiftH2>Ellesmere House Care Home</ShiftH2>
                    <ShiftP>April 7, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                </ShiftCard>

                <ShiftCard>
                    <ShiftIcon src={Icon10} />
                    <ShiftP> Adult Nurse | All Day Shift | 08:00 - 20:00 </ShiftP>
                    <ShiftH2>Garside House Nursing Home</ShiftH2>
                    <ShiftP>October 3, 2020</ShiftP>
                    <ShiftP>London | 020 3826 5520</ShiftP>
                    
                    <Button
                        onClick={() => {
                        setModalOpen(true);
                        }}                  
                        > Submit Availability </Button>
                    
                </ShiftCard>
                
            </ShiftWrapper>
    </ShiftContainer>
    </>
  )
}

export default Shift