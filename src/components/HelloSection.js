import React from 'react';

export default class HelloSection extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, task: 'Eat', completed: false },
        { id: 2, task: 'Sleep', completed: false },
        { id: 3, task: 'Code', completed: false },
      ],
    }
  }

  render() {
    return (
      <section>
        <h1>Hello!</h1>
        <p>I have three repeated components below</p>
        <ul>
          { this.state.todos.map(todo => <li key={todo.id}>{todo.task}</li>) }
        </ul>
      </section>
    );
  }
}
