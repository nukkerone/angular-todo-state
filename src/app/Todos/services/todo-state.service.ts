import { Injectable } from "@angular/core";
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
  }

  /* public setState(newState: Partial<T>) {
    return this.stateService.setState(newState);
  } */
}
