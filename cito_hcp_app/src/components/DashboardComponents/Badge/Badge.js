import React from 'react'
import { Div } from './BadgeElements'

const Badge = ({
    content,
    clean = false,
    glow = false,
    paid = false,
    late = false,
  }) => {
    return (
      <Div clean={clean} glow={glow} paid={paid} late={late}>
        {content}
      </Div>
    );
  }
  
export default Badge