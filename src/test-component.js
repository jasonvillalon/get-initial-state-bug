import React from "react"

const TestComponent = React.createClass({
  getInitialState() {
    return {
      number: 1
    }
  },
  render() {
    return (
      <div>{this.state.number}</div>
    )
  }
})

export default TestComponent
