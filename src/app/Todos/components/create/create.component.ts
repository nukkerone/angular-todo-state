import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TodoService } from "../../services/todo-state.service";

@Component({
  selector: "app-todo-create",
  templateUrl: "./create.component.html",
})
export class CreateComponent {
  contentCtrl = new FormControl('');

  constructor(public todoService: TodoService) {
    
  }

  public onSubmit() {
    this.todoService.addTodo(this.contentCtrl.value);
    this.contentCtrl.setValue('');
  }
}
