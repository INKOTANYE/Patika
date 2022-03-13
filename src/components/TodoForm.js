import React, { useState } from 'react'

function TodoForm({addTodo}) {

const [input,setInput]=useState("")

const handleChange = (e) => {
  setInput(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (input.trim() === "") {
    return false;
  }
  console.log(input)

  addTodo({
    id: Math.floor(Math.random()*10000),
    text:input,
    isCompleted:false
  })

  setInput("")
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={input} 
            onChange={handleChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus/>
        </form>
    </div>
  )
}

export default TodoForm