import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import TodoFooter from './TodoFooter'

function Todolist() {

const [select,setSelect] = useState("All") 

const [todos,setTodos] = useState([
    {id:1, text:"Learn Javascript", isCompleted:false},
    {id:2, text:"Learn React", isCompleted:false},
    {id:3, text:"Have a Life!", isCompleted:false}
])

const [page,setPage] = useState([...todos])

useEffect(()=>{
    if(select === "Active"){
        const activeTodos = [...todos].filter(todo => todo.isCompleted !== true)
        setPage(activeTodos)
    }
    else if(select === "Completed"){
        const compTodos = [...todos].filter(todo => todo.isCompleted !== false)
        setPage(compTodos)
    }
    else if(select === "All"){       
        setPage([...todos])
    }

},[todos, select])

const addTodo = (todo) => {
    const newTodos = [todo, ...todos]; 
    setTodos(newTodos); 
} 

  return (
    <div className='todoapp'>
        <header className="header">
		   <h1>todos</h1>
           <TodoForm addTodo={addTodo}/>
	   </header>
       <Todos todos={todos} page={page} changeTodos={setTodos}/>
       <TodoFooter todos={todos} changeTodos={setTodos} select={select} changeSelect={setSelect}/>
    </div>
  )
}

export default Todolist