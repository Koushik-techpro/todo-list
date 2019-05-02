import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  {
    path : '',
    component : ProjectComponent 
  },
  {
    path : 'project-details/:id',
    component : ProjectDetailsComponent 
  },
  {
    path : 'project-edit/:id',
    component : ProjectEditComponent 
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
