import React from 'react';
import { connect } from 'react-redux';

export class HelloSection extends React.Component {
  render() {
    return (
      <section>
        <h1>Hello!</h1>
        <h2>Username: {this.props.username}</h2>
        <p>I have some todos below</p>
        <ul>
          { this.props.todos && this.props.todos.map(todo => (
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(HelloSection);
