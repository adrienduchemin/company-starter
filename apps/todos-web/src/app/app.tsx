import { Todos } from '@company-starter/todos-components'
import { ITodo } from '@company-starter/todos-interfaces'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetch('/todos-api/todos')
      .then((_) => _.json())
      .then(setTodos)
  }, [])

  function addTodo() {
    fetch('/todos-api/todos', {
      method: 'POST',
      body: ''
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo])
      })
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  )
}

export default App
