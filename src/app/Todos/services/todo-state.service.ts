import { Injectable } from "@angular/core";
import { uuidv4 } from "src/app/shared/utilities";
import { Todo } from "../../Todos/interfaces";
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
  selected: []
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

    this.stateManager.setState({ todos: [...todos, ...[newTodo]] })
  }

}
