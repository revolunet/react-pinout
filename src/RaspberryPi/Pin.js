// @flow
import React from 'react';

import Picto from './Picto';

const Pin = ({ id, className, title, label, details, physicalPort, isActive, shape, color, pictoStyle={}, onClick }) => (
  <div onClick={ onClick } title={ title }>
    <span>
      <span className="phys">{ physicalPort }</span>
      { label }
      { details && <small> { details }</small> }
    </span>
    <Picto shape={ shape } color={ color } style={ pictoStyle } />
  </div>
)

export default Pin