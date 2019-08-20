import React, {Component} from 'react';
import Todo from "./Todo";

export default class List extends Component {
  render() {
      // assigns a new array to the variable items which will be called in the return(). Passes props to Todo.js via props
    let list = this.props.tasks.map((e, i) => {
      return <Todo key={i} task={e} />;
    });
    
    return <div>{list}</div>;
  }
}