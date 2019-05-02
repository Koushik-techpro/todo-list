import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ChecklistEditComponent } from './checklist-edit/checklist-edit.component';
import { ChecklistDetailsComponent } from './checklist-details/checklist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    TaskEditComponent,
    ChecklistEditComponent,
    ChecklistDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
