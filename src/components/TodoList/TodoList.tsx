import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import React from 'react';
import { useTodoList } from '../../models/useTodoList';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoListView: React.FC = observer(() => {
  const todoList = useTodoList();
  if (!todoList) return null;

  return (
    <div className="todo-list">
      <h1>todo app</h1>

      {todoList.todos.map((todo) => (
        <TodoItem todo={todo} onDelete={() => todoList.onDelete(todo.id)} />
      ))}

      <button className='button' onClick={todoList.onAdd}>
        add new task
      </button>

      <button
        onClick={() => console.log(getSnapshot(todoList))}
        className='button'
      >
        save
      </button>
    </div>
  );
});

export default TodoListView;
