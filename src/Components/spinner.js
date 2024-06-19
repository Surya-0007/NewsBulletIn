import React, { Component } from 'react'
import spinner from './spinner.gif'
export class loading extends Component {
  render() {
    return (
      <div>
        <img src={spinner} alt="spinner" />
      </div>
    )
  }
}

export default loading
