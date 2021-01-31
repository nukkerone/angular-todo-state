import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './todos/list.component';
import { TodoService } from './todos/services/todo-state.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
