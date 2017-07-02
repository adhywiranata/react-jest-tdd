import * as actions from './index';

describe('Todo actions ', () => {
  it('should create an ADD_TODO action', () => {
    const newTodo = {
      id: 4,
      task: 'TDD!',
      completed: false,
    };
    const expectedAction = { type: 'ADD_TODO', payload: newTodo };
    const actualAction = actions.addTodo(newTodo);

    expect(actualAction).toEqual(expectedAction);
  });

  it('should create a DELETE_TODO action', () => {
    const todoId = 1;
    const expectedAction = { type: 'DELETE_TODO', payload: todoId };
    const actualAction = actions.deleteTodo(todoId);

    expect(actualAction).toEqual(expectedAction);
  });
});
