import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './todos/components/list/list.component';
import { TodoService } from './todos/services/todo-state.service';
import { CreateComponent } from './todos/components/create/create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent, CreateComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
