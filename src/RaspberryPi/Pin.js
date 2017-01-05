// @flow
import React from 'react'

import Picto from './Picto'
import { Pin as StyledPin } from './styled'

const Pin = ({ id, type, className, title, label, details, physicalPort, active, shape, color, pictoStyle = {}, onClick }) => (
  <StyledPin className={className} data-type={type} onClick={onClick} title={title} active={active}>
    <span>
      <span className='phys'>{ physicalPort }</span>
      { label }
      { details && <small> { details }</small> }
    </span>
    <Picto shape={shape} color={color} style={pictoStyle} />
  </StyledPin>
)

export default Pin
