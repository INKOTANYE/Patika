import React, { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from "react-redux"
import { filteredTodos } from "../redux/todos/todosSlice"
import {
  getTodosAsync,
  toggleTodoAsync,
  removeTodoAsync,
  allCompletedTodoAsync
} from "../redux/todos/todoService"

function Todos() {
  const dispatch = useDispatch()
  const selectFilteredTodos = useSelector(filteredTodos)
  const isLoading = useSelector((state) => state.todos.isLoading)
  const error = useSelector((state) => state.todos.error)
  const [refresh, setRefresh] = useState (true)
  

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [refresh]);

  const handleAllCompleted = async (id, completed) => {
    await dispatch(allCompletedTodoAsync({ id, data: { completed } }));
    setRefresh(!refresh)
  }

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
    setRefresh(!refresh)
  }

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure ?")) {
      await dispatch(removeTodoAsync(id));
      setRefresh(!refresh)
    }
  }

  if (isLoading) {
    return <div style={{ padding: 15, fontSize: 18 }}>Loading...</div>;
  }

  if (error) {
    return 
      <div style={{ padding: 15, fontSize: 16, color: "red" }}>
       Error: {error}
      </div>
    }

  return (
    <div className='main'>
        <input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all" onClick={() => handleAllCompleted("all", true)}> 
			Mark all as complete
		</label>

        <ul className='todo-list'>
           {selectFilteredTodos.map((todo,index) => (
               <li
               className={todo.completed ? "completed" : ""} key={index}>
                  <div className='view' >
                    <input className="toggle" 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id, !todo.completed)}/>
					            <label id={todo.id}>{todo.title}</label>	
                  </div>
                  <button className="destroy" onClick={() => handleDestroy(todo.id)}></button>
               </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos