import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {changeActiveFilter} from "../redux/todos/todosSlice"
import { removeAllTodosAsync } from "../redux/todos/todoService"

function TodoFooter() {  
	const items = useSelector((state) => state.todos.items)
	const itemsLeft = items.filter(item => !item.completed).length

	const dispatch = useDispatch()
	const activeFilter = useSelector(state => state.todos.activeFilter)

	useEffect(()=>{
		localStorage.setItem("activeFilter", activeFilter)
	},[activeFilter])


  return (
    <div className='footer'>
        <span className="todo-count">
			<strong>{itemsLeft} </strong>
			item{itemsLeft > 1 && "s"} left
		</span>

        <ul className="filters">
			<li>
				<a className={activeFilter==="All" ? "selected" :""} onClick={()=>dispatch(changeActiveFilter("All"))}>All</a>
			</li>
			<li>
				<a className={activeFilter==="Active" ? "selected" :""} onClick={()=>dispatch(changeActiveFilter("Active"))}>Active</a>
			</li>
			<li>
				<a className={activeFilter==="Completed" ? "selected" :""} onClick={()=>dispatch(changeActiveFilter("Completed"))}>Completed</a>
			</li>
		</ul>

        <button className="clear-completed" onClick={() => {dispatch(removeAllTodosAsync())}} >
			Clear completed
		</button>

        <footer className="info">
	       <p>Created by <a href="https://github.com/INKOTANYE/">Zeynep Çöpür</a></p>
        </footer>

    </div>
  )
}

export default TodoFooter 