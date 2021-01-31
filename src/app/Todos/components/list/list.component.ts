import { ChangeDetectorRef, Component } from "@angular/core";
import { combineLatest, forkJoin } from "rxjs";
import { Todo } from "../../interfaces";
import { TodoService } from "../../services/todo-state.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./list.component.html",
  styles: ['.completed span { text-decoration: line-through }'],
})
export class ListComponent {
  pendingTodos: number = 0;

  constructor(
    public todoService: TodoService,
    private cdr: ChangeDetectorRef,
  ) {
    this.todoService.stateObserver.selectPart<Todo[]>('todos')
      .subscribe(todos => {
        const completedTodos = todos.filter(t => t.done);
        this.pendingTodos = todos.length - completedTodos.length;
        this.cdr.markForCheck();
      });
  }

  onRemove(id: string) {
    this.todoService.removeTodo(id);
  }

  onCompleted(id: string) {
    this.todoService.completeTodo(id);
  }
}
