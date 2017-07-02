// empty todos initial state
const initialState = [
  {
    id: 1,
    task: 'My first todo',
    completed: false,
  },
];

export const addTodo = (todos, newTodo) => {
  return todos.concat(newTodo);
};

export const deleteTodo = (todos, todoId) => {
  return todos.filter(todo => todo.id !== todoId);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': return addTodo(state, action.payload);
    case 'DELETE_TODO': return deleteTodo(state, action.payload);
    default: return state;
  }
};
