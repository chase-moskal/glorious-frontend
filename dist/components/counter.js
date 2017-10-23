"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * Counter component displays a number which can be incremented with the push of a button.
 */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.start || 0
        };
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (React.createElement("div", { className: "counter" },
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.state.count)),
            React.createElement("button", { onClick: this.increment.bind(this) }, "Increment")));
    }
}
exports.default = Counter;
//# sourceMappingURL=counter.js.map