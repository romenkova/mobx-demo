import { Instance, types } from 'mobx-state-tree';

export const Todo = types
  .model({
    id: types.string,
    value: types.optional(types.string, ''),
    isDone: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setValue(value: string) {
      self.value = value;
    },
    setIsDone() {
      self.isDone = true;
    },
  }));

export interface ITodo extends Instance<typeof Todo> {}
