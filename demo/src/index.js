import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-pinout Demo</h1>
      <Component onClick={ pin => alert(`clicked ${pin.label}`) }/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
