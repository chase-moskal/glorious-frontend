
import {observable} from "mobx"
import {h, Component} from "preact"
import {observer} from "mobx-preact"

import Counter, {CounterStore} from "./counter"

export class AppStore {
	@observable counter = new CounterStore()
}

@observer
export default class App extends Component<{store: AppStore}, any> {

	render() {
		const {store} = this.props
		return (
			<div className="app">
				<Counter store={store.counter}/>
			</div>
		)
	}
}
