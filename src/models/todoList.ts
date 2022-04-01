import { Instance, types } from 'mobx-state-tree';
import { Todo } from './todo';

export const TodoList = types
  .model({
    todos: types.array(Todo),
  })
  .actions((self) => ({
    onAdd() {
      self.todos.push(Todo.create({ id: Math.random().toString() }));
    },
    onDelete(id: string) {
      const index = self.todos.findIndex(({ id: todoId }) => todoId === id);
      self.todos.splice(index, 1);
    },
  }));

export interface ITodoList extends Instance<typeof TodoList> {}
