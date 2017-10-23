
import * as React from "react"
import * as ReactDOM from "react-dom"

import {observable} from "mobx"
import {observer} from "mobx-react"

import Counter, {CounterStore} from "./counter"

export class AppStore {
	@observable counter = new CounterStore()
}

@observer
export default class App extends React.Component<{store: AppStore}> {
	render() {
		const {store} = this.props
		return (
			<div className="app">
				<h1>Glorious Frontend</h1>
				<hr/>
				<Counter store={store.counter}/>
			</div>
		)
	}
}
