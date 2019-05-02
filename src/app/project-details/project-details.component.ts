import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataservice:DataService) { }

  thisDetails = [];
  checkList = [];
  checklistin = [];
  projectId: any = [];
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.projectId = params['id'];
      
      let allList = this.dataservice.getproject() || [];     
      let projectDetail = allList.find(obj => obj.id == this.projectId);
      this.thisDetails = projectDetail;
      this.checkList = projectDetail.checklist || [];

      //console.log(projectDetail);

    });
  }

  addchecklist()
  {
    this.dataservice.addChecklist(this.checklistin, this.projectId);
    
    let allList = this.dataservice.getproject(); 
        
    let projectDetail = allList.find(obj => obj.id == this.projectId);
    this.thisDetails = projectDetail;
    this.checkList = projectDetail.checklist || [];

    console.log(this.checkList);

    
  }

  delete_checklist(checklist_id)
  {
    //alert(checklist_id);
    //this.dataservice.deletechecklistnow(checklist_id, this.projectId);


    let allListis = this.dataservice.getproject(); 
        
    let projectDetailis = allListis.find(obj => obj.id == this.projectId);
    let thisList = projectDetailis;
    let checkList = thisList.checklist || [];

    const filterList = checkList.filter((item) => item.id !== checklist_id);

    

    

    let index = allListis.indexOf(projectDetailis);

    console.log(index);

    

    let updateddata = {
      id : thisList.id,
      name :  thisList.name,
      checklist : filterList
    }

    


    allListis[index] = updateddata;

    localStorage.setItem('project_list', JSON.stringify(allListis));



    let allList = this.dataservice.getproject(); 
        
    let projectDetail = allListis.find(obj => obj.id == this.projectId);
    this.thisDetails = projectDetail;
    this.checkList = projectDetail.checklist || [];

  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
  }


}
