import React from 'react';

import Picto from './Picto';

const Pin = ({ id, className, href, title, label, details, physicalPort, isActive, shape, color, pictoStyle={} }) => (
  <a href={ href } title={ title }>
    <span>
      <span className="phys">{ physicalPort }</span>
      { label }
      { details && <small> { details }</small> }
    </span>
    <Picto shape={ shape } color={ color } style={ pictoStyle } />
  </a>
)

export default Pin