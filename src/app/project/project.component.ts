import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  list = [];
  ngOnInit() {
   this.list= this.dataservice.getproject();
  }
  
  project = {
    id:'',
    name : '',
    }

  addproject()
  {
    this.dataservice.addproject(this.project);
    this.project ={
      id:'',
      name:''
    }
    this.list= this.dataservice.getproject();
  }

  

  deleteproject(id)
  {

    this.dataservice.deleteprojectnow(id);
    this.list= this.dataservice.getproject();
    
  }

}
