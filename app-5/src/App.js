import React, { Component } from "react";
import "./App.css";

//components
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image image={'https://thehappypuppysite.com/wp-content/uploads/2017/12/puppy8.jpg'}/>
      </div>
    );
  }
}

export default App;
