import React, { Component } from 'react'

class Sliders extends Component {
  state = {
    hue: 180,
    saturation: 50,
    lightness: 50
  }

  // componentDidMount() {
  //   style = {
  //     backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
  //       this.state.lightness
  //     }%)`
  //   }
  // }

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
        <section className="color-container">
          <div
            className="color"
            style={{
              backgroundColor: `hsl(${this.state.hue},${
                this.state.saturation
              }%,${this.state.lightness}%)`
            }}
          />
        </section>
        <section className="slider-container">
          <div className="hue">
            <input
              onChange={this.hueChange}
              type="range"
              min="1"
              max="360"
              class="slider"
              id="hue"
            />
            <h3>Hue</h3>
            <p>{this.state.hue}</p>
          </div>
          <div className="saturation">
            <input
              onChange={this.saturationChange}
              type="range"
              min="1"
              max="100"
              class="slider"
              id="saturation"
            />
            <h3>Saturation</h3>
            <p>{this.state.saturation}</p>
          </div>
          <div className="lightness">
            <input
              onChange={this.lightnessChange}
              type="range"
              min="1"
              max="100"
              class="slider"
              id="lightness"
            />
            <h3>Lightness</h3>
            <p>{this.state.lightness}</p>
          </div>
        </section>
      </>
    )
  }
}
export default Sliders
