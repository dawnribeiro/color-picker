import React, { Component } from 'react'

class Button extends Component {
  randomColor = () => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Pick Random Color</button>
      </div>
    )
  }
}

export default Button
