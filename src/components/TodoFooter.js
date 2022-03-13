import React from 'react'

function TodoFooter({todos, changeTodos, select, changeSelect}) {   

const clearCompleted = () => {
    let clearedArr = [...todos].filter(todo => todo.isCompleted !== true)
    changeTodos(clearedArr)
}    

  return (
    <div className='footer'>
        <span className="todo-count">
			<strong>{todos.length} </strong>
			items left
		</span>

        <ul className="filters">
			<li>
				<a className={select==="All" && "selected"} onClick={()=>changeSelect("All")}>All</a>
			</li>
			<li>
				<a className={select==="Active" && "selected"} onClick={()=>changeSelect("Active")}>Active</a>
			</li>
			<li>
				<a className={select==="Completed" && "selected"} onClick={()=>changeSelect("Completed")}>Completed</a>
			</li>
		</ul>

        <button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>

        <footer className="info">
	       <p>Click to edit a todo</p>
	       <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	       <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>

    </div>
  )
}

export default TodoFooter 