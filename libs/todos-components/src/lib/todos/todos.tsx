import { ITodo } from '@company-starter/todos-interfaces'

import React from 'react'

export const Todos = (props: { todos: ITodo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  )
}

export default Todos
