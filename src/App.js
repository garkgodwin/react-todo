import React, {  useState } from 'react'


//?STYLES
import './App.css';
import Form from './components/form/Form';
import Todos from './components/lists/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    index: 0,
    title: '',
    completed: false,
  })

  return (
    <div className="App">
      <div className="app-bg bg-top"></div>
      <div className="app-bg bg-float ">
        <h1 className="app-title">Todo App</h1>
        <hr/>
        <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
        <hr/>
        <Todos todos={todos} setTodos={setTodos} setTodo={setTodo}/>
      </div>
    </div>
  )
}

export default App;