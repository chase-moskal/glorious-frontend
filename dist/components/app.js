"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const counter_1 = require("./counter");
/**
 * Root application component.
 */
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "app" },
            React.createElement("h1", null, "Glorious Frontend"),
            React.createElement("hr", null),
            React.createElement(counter_1.default, { start: 0 })));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map