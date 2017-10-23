
import * as React from "react"
import * as ReactDOM from "react-dom"

import App, {AppStore} from "./components/app"

const store = new AppStore()
const app = <App {...{store}}/>
const container = document.querySelector("#app")

ReactDOM.render(app, container)
