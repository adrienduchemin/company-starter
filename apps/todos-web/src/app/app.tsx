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
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  )
}

export default App
