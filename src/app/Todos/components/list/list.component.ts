import { Component } from "@angular/core";
import { TodoService } from "../../services/todo-state.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./list.component.html"
})
export class ListComponent {
  constructor(public todoService: TodoService) {

  }

  onRemove(id: string) {
    this.todoService.removeTodo(id);
  }
}
