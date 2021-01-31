import { Injectable } from "@angular/core";
import { uuidv4 } from "../../shared/utilities";
import { Todo } from "../../todos/interfaces";

import {
  StateService,
  StateServiceManager,
  StateServiceObserver
} from "../../Todos/services/state.service";

interface TodoState {
  todos: Todo[];
  selected: number[];
}

const initialTodoState = {
  todos: [],
  selected: [],
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private stateService: StateService<TodoState>;
  public stateManager: StateServiceManager<TodoState>;
  public stateObserver: StateServiceObserver<TodoState>;

  constructor() {
    this.stateService = new StateService<TodoState>(initialTodoState);
    this.stateManager = new StateServiceManager<TodoState>(this.stateService);
    this.stateObserver = new StateServiceObserver<TodoState>(this.stateService);
  }

  addTodo(content = '') {
    const todos = this.stateObserver.state.todos;
    const newTodo: Todo = {
      id: uuidv4(),
      content,
      createdAt: new Date().toISOString(),
      done: false
    }

    this.stateManager.setState({
      todos: [...todos, ...[newTodo]],
    })
  }

  completeTodo(id: string) {
    const todos = this.stateObserver.state.todos
      .map(t => t.id === id ? { ...t, ...{ done: true } } : t);
    
    this.stateManager.setState({
      todos: [...todos],
    });
  }

  removeTodo(id: string) {
    const todo = this.stateObserver.state.todos
      .find(t => t.id === id);
    const todos = this.stateObserver.state.todos
      .filter(t => t.id !== id);
    
    this.stateManager.setState({
      todos: [...todos],
    });
  }

}
