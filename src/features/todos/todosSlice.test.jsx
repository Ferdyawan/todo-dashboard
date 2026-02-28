import { describe, it, expect } from 'vitest';
import reducer, { addTodoLocal, toggleTodoLocal, deleteTodoLocal } from './todosSlice';

describe('todosSlice reducer', () => {
  const initialState = { items: [], loading: false, error: null };

  it('should handle addTodoLocal', () => {
    const newTodo = { id: 1, title: 'Test Todo', completed: false };
    const actual = reducer(initialState, addTodoLocal(newTodo));
    expect(actual.items[0].title).toEqual('Test Todo');
  });

  it('should handle toggleTodoLocal', () => {
    const state = { items: [{ id: 1, title: 'Test Todo', completed: false }] };
    const actual = reducer(state, toggleTodoLocal(1));
    expect(actual.items[0].completed).toEqual(true);
  });

  it('should handle deleteTodoLocal', () => {
    const state = { items: [{ id: 1, title: 'Test Todo', completed: false }] };
    const actual = reducer(state, deleteTodoLocal(1));
    expect(actual.items.length).toEqual(0);
  });
});