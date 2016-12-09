import React from 'react';


const Picto = ({ color='#002B36', shape='circle', style={} }) => {
  const borderRadius = shape === 'circle' ? '50%': 0;
  let shapeStyle = {
    display: 'block',
    border: '1px solid transparent',
    borderRadius,
    width: 16,
    height: 16,
    background: color,
    position: 'absolute',
    right: 2,
    top: 2,
    ...style
  }
  let pointStyle = {
    display: 'block',
    borderRadius: '100%',
    background: '#FDF6E3',
    position: 'absolute',
    left: 5,
    top: 5,
    width: 6,
    height: 6,
    fontSize: 7
  }
  return (
    <span style={ shapeStyle }>
      <span style={ pointStyle }></span>
    </span>
  )
}

export default Picto;