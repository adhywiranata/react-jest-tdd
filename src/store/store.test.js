import store from './configureStore';

describe('Store ', () => {
  it('should get todos initial state', () => {
    const expectedTodos = [{"completed": false, "id": 1, "task": "My first todo"}];
    const actualTodos = store.getState().todos;

    expect(actualTodos).toEqual(expectedTodos);
  });

  it('should add todos when ADD_TODO action dispatched', () => {
    const initialState = [{"completed": false, "id": 1, "task": "My first todo"}];
    const newTodo = {
      id: 1,
      task: 'TDD!',
      completed: false,
    };
    const expectedTodosState = [...initialState, newTodo];

    store.dispatch({ type: 'ADD_TODO', payload: newTodo });
    const actualTodosState = store.getState().todos;

    expect(actualTodosState).toEqual(expectedTodosState);
  });

  it('should delete a todo when DELETE_TODO action dispatched', () => {
    const todoToDeleteId = 1;
    const expectedTodosState = [];

    store.dispatch({ type: 'DELETE_TODO', payload: todoToDeleteId });
    const actualTodosState = store.getState().todos;

    expect(actualTodosState).toEqual(expectedTodosState);
  });
})
