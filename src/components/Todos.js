import React from 'react'

function Todos({todos, changeTodos, page}) {

const removeTodos = (id) => {
   const removedArr=[...todos].filter(todo => todo.id !== id)
   changeTodos(removedArr)
}

const completeTodo = (id) => {
    let newArr = todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
      changeTodos(newArr)
}

const allComplete = () => {
    let completedArr = todos.map (todo => {
        todo.isCompleted = true
        return todo
    })
    changeTodos(completedArr)
}
 
  return (
    <div className='main'>

        <input className="toggle-all" type="checkbox"/>
		<label for="toggle-all" onClick={allComplete}>
			Mark all as complete
		</label>

        <ul className='todo-list'>
           {page.map((todo,index) => (
               <li className={todo.isCompleted ? "completed" : ""} key={index}>
                  <div className='view' >
                    <input className="toggle" type="checkbox"/>
					<label id={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</label>	
                  </div>
                  <button className="destroy" onClick={() => removeTodos(todo.id)}></button>
               </li>
            ))}
        </ul>

    </div>
  )
}

export default Todos