import React from 'react'

//?ICONS
import {BiEdit, BiTrash, BiCheck, BiX} from 'react-icons/bi';

//?STYLES
import './Todo.css';

//?COMPONENTS
import Button from '../buttons/Button';

function Todo({index, todo, setTodo, setTodos, todos}) {

    const handleUpdate = (e) => {
        e.preventDefault();
        setTodo({
            index: index,
            title: todo.title,
            completed: todo.completed,
        });
    }
    const handleDelete = (e) => {
        e.preventDefault();
        for(let i = 0; i <todos.length; i++){
            if(i === index){
                const newTodos = todos.filter((item, i) =>{
                    return i !== index
                })
                setTodos(newTodos)
            }
        }

    }
    const handleCompletion = (e) => {
        e.preventDefault();
        setTodos(
            todos.map((item,i) => 
                    i === index ? {...item, completed: !item.completed} : item
                )
        )
        console.log(todos)
    }
    return (
        <div className={todo.completed? "Todo completed" : "Todo"}>
            <p className="todo-title">{todo.title}</p> 
            <div className="todo-buttons">
                <Button icon={todo.completed ? <BiX/> : <BiCheck/>} cName="btn-primary" handleClick={handleCompletion}/>
                <Button icon={<BiEdit/>} cName="btn-secondary" handleClick={handleUpdate}/> 
                <Button icon={<BiTrash/>} cName="btn-danger" handleClick={handleDelete}/> 
            </div>
        </div>
    )
}

export default Todo
