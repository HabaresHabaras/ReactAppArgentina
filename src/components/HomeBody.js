import React, { Component } from 'react';
import TodoItem from './TodoItem';

class HomeBody extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem todo={todo} />
      // <h3>{ todo.title}</h3>
    ));
  }

}

export default HomeBody;
