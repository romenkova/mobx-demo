import TodoListView from './components/TodoList/TodoList';
import { TodoList } from './models/todoList';
import { TodoListProvider } from './models/useTodoList';

const todoList = TodoList.create()

function App() {
  return (
    <TodoListProvider value={todoList}>
      <TodoListView />
    </TodoListProvider>
  );
}

export default App;
