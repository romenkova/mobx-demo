import { observer } from 'mobx-react-lite';
import React from 'react';
import { ITodo } from '../../models/todo';
import './TodoItem.css';

interface IProps {
  todo: ITodo;
  onDelete: () => void;
}

const TodoItem: React.FC<IProps> = observer(({ todo, onDelete }) => (
  <div
    className="todo"
  >
    {todo.isDone ? (
      <span className="done">{todo.value}</span>
    ) : (
      <input
        onChange={(e) => todo.setValue?.(e.target.value)}
        value={todo.value}
        className="todo-input"
      />
    )}
    {!todo.isDone && <button className='button' onClick={todo.setIsDone}>Done</button>}
    <button className='button' onClick={onDelete}>Delete</button>
  </div>
));

export default TodoItem;
