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

  addTodo(newTodo) {
    this.setState({
      todos: this.state.todos.concat(newTodo),
    });
  }

  removeTodo(todoToDeleteId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoToDeleteId),
    });
  }

  render() {
    return (
      <section>
        <h1>Hello!</h1>
        <p>I have three repeated components below</p>
        <ul>
          { this.state.todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              <button
                className="delete-btn"
                onClick={() => this.removeTodo(todo.id)}
              >
                DELETE
              </button>
            </li>
          )) }
        </ul>
      </section>
    );
  }
}
