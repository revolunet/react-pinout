// @flow

import React from 'react';

import Pin from './Pin';
import defaultPinout from './defaultPinout.json'
import {
  Pinout,
  Title,
  PinsHeader,
  PinsLeft,
  PinsRight
} from './styled'

const RaspberryPi = (props: { pins: Array<Object>, title: String, onClick: Function }) => {
  const leftColPins = props.pins.filter((p, i) => (i % 2 === 0));
  const rightColPins = props.pins.filter((p, i) => (i % 2 === 1));
  return (
    <Pinout>
      <Title>{ props.title }</Title>
      <PinsHeader />
      <PinsLeft>
        { leftColPins.map((pin, i) => <Pin onClick={ () => props.onClick(pin) } key={ i } { ...pin }/>) }
      </PinsLeft>
      <PinsRight>
        { rightColPins.map((pin, i) => <Pin onClick={ () => props.onClick(pin) } key={ i } { ...pin } pictoStyle={ { left: 2, top: 2 } } />) }
      </PinsRight>
    </Pinout>
  )
}
RaspberryPi.propTypes = {
  pins: React.PropTypes.array.isRequired,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func
}
RaspberryPi.defaultProps = {
  pins: defaultPinout,
  title: 'Raspberry Pi Pinout',
  onClick: () => {}
}


export default RaspberryPi;
