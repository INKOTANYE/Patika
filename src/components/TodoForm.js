import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodoAsync } from "../redux/todos/todoService"

function TodoForm() {
  const dispatch = useDispatch()

const [title,setTitle]=useState("")
const isLoading = useSelector((state) => state.todos.addNewTodo.Loading);
const error = useSelector((state) => state.todos.addNewTodo.Error);

const handleChange = (e) => {
  setTitle(e.target.value)
}

const handleSubmit = async (e) => {
  e.preventDefault()
  if (!title) return;
  await dispatch(addTodoAsync({title}))
  setTitle("")
}

  return (
    <div>
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
            <input value={title} 
            disabled={isLoading}
            onChange={handleChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus/>

            {isLoading && <div style={{ padding: 15, fontSize: 18 }}>Loading...</div>}
            {error &&     
              <div style={{ padding: 15, fontSize: 16, color: "red" }}>
                Error: {error}
              </div>}
        </form>
    </div>
  )
}

export default TodoForm