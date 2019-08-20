import React, { Component } from "react";
import "./App.css";

//components
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      text: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }
  // gets input from box and assigns it to the text value in state
  handleInput(val){
    this.setState({text: val})
    // console.log(val)
  }

  //gets the text value and pushes it into the array
  buttonClick(){
    this.setState({items: [...this.state.items, this.state.text]})
  }
  
  
  render() {
    // assigns a new array to the variable items which will be called in the return(). Passes props to Todo.js
    let items = this.state.items.map((e, i) => {
      return <Todo item={e} key={i}/>
    })
    // console.log(this.state.items)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={ e => this.handleInput(e.target.value)}></input>
        <button onClick={this.buttonClick}>Add</button>
        {/* calls the items variable */}
        {items}
      </div>
    );
  }
}

export default App;
