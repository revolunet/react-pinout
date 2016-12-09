import React, { Component } from 'react';

import Picto from './Picto';
import defaultPinout from './defaultPinout.json'

import './style.css';

const Pin = ({ id, className, href, title, label, details, physicalPort, isActive, shape, color, pictoStyle={} }) => (
  <li className={ className }>
    <a href={ href } title={ title }>
      <span className="default">
        <span className="phys">{ physicalPort }</span>
        { label }
        { details && <small> { details }</small> }
      </span>
      <Picto shape={ shape } color={ color } style={ pictoStyle } />
    </a>
  </li>
)

const RaspberryPi = ({ pins }) => (
  <div className="Pinout">
    <div className="gpio">
      <div className="header"></div>
      <ul className="left">
        { pins.filter((p, i) => (i % 2 === 0)).map((pin, i) => <Pin key={ i } { ...pin }/>) }
      </ul>
      <ul className="right">
        { pins.filter((p, i) => (i % 2 === 1)).map((pin, i) => <Pin key={ i } { ...pin }  pictoStyle={ { left: 2, top: 2 } } />) }
      </ul>
    </div>
  </div>
)
RaspberryPi.defaultProps = {
  pins: defaultPinout
}


export default RaspberryPi;
