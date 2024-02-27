import React, { useState } from 'react'
import { addTodo } from '../features/todos/TodoSlice'
import { useDispatch  } from 'react-redux'
const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>AddTodo</div>
  )
}

export default AddTodo