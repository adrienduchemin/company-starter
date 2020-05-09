import { ITodo } from '@company-starter/todos-interfaces'
import { Controller, Get, Post } from '@nestjs/common'

import { AppService } from './app.service'

const todos: ITodo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }]

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodo() {
    return todos
  }

  @Post()
  createTodo() {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    }
    todos.push(newTodo)
    return newTodo
  }
}
