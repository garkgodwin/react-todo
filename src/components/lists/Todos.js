import React from 'react'

//?STYLES
import './Todos.css'

//?COMPONENTS
import Todo from './Todo.js';

function Todos({todos, setTodos, setTodo}) {
    return (
        <div className="Todos">
            {todos.map((todo,index) => {
                return <Todo key={index} index={index} todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos}/>
            })}
            {todos && todos.length === 0 && <span className="todos-none">
                <h4>You have no todo item</h4></span>}
        </div>
    )
}

export default Todos