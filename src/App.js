import React, { Component } from 'react'
import Header from './components/Header'
// import Sliders from './components/Sliders'

class App extends Component {
  state = {
    hue: 180,
    saturation: 50,
    lightness: 50
  }

  hueChange = event => {
    // get the current value of the hue slider
    console.log(event.target.value)
    // put the value into state
    this.setState({ hue: event.target.value })
    console.log(event.target.value)
  }

  saturationChange = event => {
    console.log(event.target.value)
    this.setState({ saturation: event.target.value })
  }

  lightnessChange = event => {
    this.setState({ lightness: event.target.value })
  }

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
              this.state.lightness
            }%)`
          }}
        >
          Hello World
        </div>
        <input
          onChange={this.hueChange}
          className="hue"
          type="range"
          min="1"
          max="360"
          class="slider"
          // id="myRange"
        />
        <input
          onChange={this.saturationChange}
          className="saturation"
          type="range"
          min="1"
          max="100"
          class="slider"
          id="myRange"
        />
        <input
          onChange={this.lightnessChange}
          className="lightness"
          type="range"
          min="1"
          max="100"
          class="slider"
          id="myRange"
        />
      </>
    )
  }
}

export default App
