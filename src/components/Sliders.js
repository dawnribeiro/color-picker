import React, { Component } from 'react'

class Sliders extends Component {
  render() {
    return (
      <input
        className="hue"
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    )
  }
}
export default Sliders
