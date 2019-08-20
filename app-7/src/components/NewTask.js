import React, { Component } from "react";

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            text: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    // gets input from box and assigns it to the text value in state
    handleInput(value) {
        this.setState({ text: value });
    }
    //
    handleAdd() {
        this.props.place(this.state.text);
    }

    render() {
        return (
        <div>
            <input value={this.state.text} onChange={e => this.handleInput(e.target.value)}/>
            <button onClick={this.handleAdd}>Add</button>
        </div>
        );
    }
}

export default NewTask;