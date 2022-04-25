import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import TodoFooter from './TodoFooter'

function Todolist() {

  return (
    <div className='todoapp'>
      <header className="header">
		    <h1>todos</h1>
        <TodoForm/>
	   </header>
       <Todos/>
       <TodoFooter/>
    </div>
  )
}

export default Todolist