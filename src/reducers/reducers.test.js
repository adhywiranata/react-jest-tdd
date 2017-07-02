import todoReducer, { addTodo, deleteTodo } from './todoReducer';

describe('Todo reducer functions ', () => {
  it('addTodo function should add one more todo to todos', () => {
    const initialTodo = [];
    const newTodo = {
      id: 4,
      task: 'TDD!',
      completed: false,
    };
    const expectedTodosLength = initialTodo.length + 1;

    const addedTodos = addTodo(initialTodo, newTodo);
    expect(addedTodos.length).toEqual(expectedTodosLength);
  });

  it('deleteTodo function should remove one todo to todos', () => {
    const initialTodo = [{
      id: 4,
      task: 'TDD!',
      completed: false,
    }];
    const todoToDeleteId = 4;
    const expectedTodosLength = initialTodo.length - 1;

    const deletedTodos = deleteTodo(initialTodo, todoToDeleteId);
    expect(deletedTodos.length).toEqual(expectedTodosLength);
  });
});

describe('Todo reducer based on actions ', () => {
  it('should add new todo when ADD_TODO dispatched', () => {
    const initialState = [];
    const newTodo = {
      id: 4,
      task: 'TDD!',
      completed: false,
    };
    const expectedState = initialState.concat(newTodo);

    const action = { type: 'ADD_TODO', payload: newTodo };
    const actualState = todoReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should delete a todo when DELETE_TODO dispatched', () => {
    const initialState = [
      {
        id: 1,
        task: 'TDD!',
        completed: false,
      },
      {
        id: 2,
        task: 'TDD 2',
        completed: false,
      },
    ];
    const todoToDeleteId = 1;
    const expectedState = initialState.filter(todo => todo.id !== todoToDeleteId);

    const action = { type: 'DELETE_TODO', payload: todoToDeleteId };
    const actualState = todoReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
