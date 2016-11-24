
import * as React from "react"
import * as ReactDOM from "react-dom"

export interface CounterProps {

  /** Number that the counter starts at. */
  start?: number;
}

export interface CounterState {

  /** Current numerical value of the counter. */
  count: number;
}

/**
 * Counter component displays a number which can be incremented with the push of a button.
 */
export default class Counter extends React.Component<CounterProps, CounterState> {

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.start || 0
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="counter">
        <p>Current count: <strong>{this.state.count}</strong></p>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    )
  }
}
