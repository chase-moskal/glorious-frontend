
import * as React from "react"
import * as ReactDOM from "react-dom"

import Counter from "./Counter";

export interface AppProps {}
export interface AppState {}

/**
 * Root application component.
 */
export default class App extends React.Component<AppProps, AppState> {

	render() {
		return (
			<div className="app">
				<h1>Glorious Frontend</h1>
				<hr/>
				<Counter start={0}/>
			</div>
		)
	}
}
