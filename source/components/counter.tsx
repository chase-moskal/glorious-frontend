
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {observable, action} from "mobx"

export class CounterStore {
	@observable count: number = 0

	@action increment() {
		this.count++
	}
}

@observer
export default class Counter extends Component<{store: CounterStore}, any> {

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
