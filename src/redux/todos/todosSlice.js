import {createSlice} from '@reduxjs/toolkit'
import {
    addTodoAsync,
    getTodosAsync,
    removeAllTodosAsync,
    removeTodoAsync,
    toggleTodoAsync,
    allCompletedTodoAsync
  } from "./todoService";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items:[],
        activeFilter: localStorage.getItem("activeFilter"),
        isLoading: false,
        error: null,
        addNewTodo: {
            Loading: false,
            error: null
        }
    },
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers:{
        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true
          },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
          },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
          },
          //add Todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodo.Loading = true
          },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.addNewTodo.Loading = false
          },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodo.Loading = false
            state.addNewTodo.Error = action.error.message
          },
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload
            const index = state.items.findIndex((item) => item.id === id)
            state.items[index].completed = completed
          },
        [allCompletedTodoAsync.fulfilled]: (state, action) => {
            state.items = action.payload
          },
        [removeTodoAsync.fulfilled]: (state, action) => {
            state.items = action.payload
          },
        [removeAllTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload
          },
    }})
 
export const filteredTodos = (state) => {

    if (state.todos.activeFilter == "All") {
      return state.todos.items;
    }
    else if(state.todos.activeFilter === "Active") {
      return state.todos.items.filter((todo) => todo.completed === false)
    }
    else{
      return state.todos.items.filter((todo) => todo.completed === true)  
    }
}

export const {changeActiveFilter} = todosSlice.actions
export default todosSlice.reducer