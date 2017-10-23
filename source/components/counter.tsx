
import * as React from "react"
import * as ReactDOM from "react-dom"

import {observable, action} from "mobx"
import {observer} from "mobx-react"

export class CounterStore {
	@observable count: number = 0

	@action increment() {
		this.count++
	}
}

@observer
export default class Counter extends React.Component<{store: CounterStore}> {

	private incrementHandler = () => this.props.store.increment()

	render() {
		const {store} = this.props
		return (
			<div className="counter">
				<p>Current count: <strong>{store.count}</strong></p>
				<button onClick={this.incrementHandler}>Increment</button>
			</div>
		)
	}
}
