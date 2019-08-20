import React, { Component } from "react";
import "./App.css";

//components
import NewTask from "./components/NewTask";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(task) {
    this.setState({ items: [...this.state.items, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do items:</h1>
        <NewTask place={this.buttonClick} />
        <List tasks={this.state.items} />
      </div>
    );
  }
}

export default App;
