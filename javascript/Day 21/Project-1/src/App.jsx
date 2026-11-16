import TaskList from "./components/TaskList"
import TodoList from "./components/Todopage"
import "./App.css"
function App() {
  return (
    <>
      <div className="main-box">
        <TodoList />
        <TaskList />
      </div>
    </>
  )
}

export default App
