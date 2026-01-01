import {TodoForm} from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import './App.css'
import { useTodos } from './hooks/useTodos'

function App() {
  const {removeTodo, addTodo, toggleTodo, todos} = useTodos()

  return (
    <>
      <TodoForm addTodo = {addTodo}/>
      <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </>
  )
}

export default App
