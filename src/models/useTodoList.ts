import React, { useContext } from 'react';
import { ITodoList } from './todoList';

const TodoListContext = React.createContext<ITodoList | null>(null);

export const TodoListProvider = TodoListContext.Provider;

export function useTodoList() {
  const todosStore = useContext(TodoListContext);
  return todosStore;
}
