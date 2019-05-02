import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  thisDetails = [];
  projectId: any = [];
  project = [];
  fullList = [];
  ckecklist = [];

  constructor(
    private route: ActivatedRoute,
    private dataservice:DataService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.projectId = params['id'];
      
      let allList = this.dataservice.getproject() || []; 
      this.fullList =  allList;   
      let projectDetail = allList.find(obj => obj.id == this.projectId);
      this.thisDetails = projectDetail;
      this.ckecklist = this.thisDetails['checklist'];
    });
  }

  update(form: NgForm) {
    let formVal = form.value;
    console.log(formVal);



    let updateItem = this.fullList.find(this.findIndexToUpdate, formVal.id);

    let index = this.fullList.indexOf(updateItem);

    //formVal.checklist = this.ckecklist;

    let updateddata = {
      id : formVal.id,
      name :  formVal.name,
      checklist : this.ckecklist
    }


    this.fullList[index] = updateddata;

    localStorage.setItem('project_list', JSON.stringify(this.fullList));

    this.router.navigate(['/'])
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
}

}
