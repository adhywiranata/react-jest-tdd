import store from './configureStore';

describe('Store ', () => {
  it('should get todos initial state', () => {
    const expectedTodos = [];
    const actualTodos = store.getState().todos;

    expect(actualTodos).toEqual(expectedTodos);
  });
})
