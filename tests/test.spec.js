import React from 'react'
import { RaspberryPi } from '../src'

import renderer from 'react-test-renderer';

test('RaspberryPi renders correctly', () => {
  const tree = renderer.create(
    <RaspberryPi />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});