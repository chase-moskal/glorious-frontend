
import {h, render} from "preact"

import App, {AppStore} from "./components/app"

const store = new AppStore()
const app = <App {...{store}}/>
const container = document.querySelector("#app")

render(app, container)
