export const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    payload: newTodo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: 'DELETE_TODO',
    payload: todoId,
  };
};
