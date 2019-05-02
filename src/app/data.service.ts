import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }  

  projectList =  JSON.parse(localStorage.getItem("project_list")) || [];

  addproject(projectdata)
  {
    let projectlength=this.projectList.length;
    let temparray = {
    id : projectlength+1,
    name : projectdata.name,
    checklist: []
    }
    
    this.projectList.push(temparray);

    localStorage.setItem('project_list', JSON.stringify(this.projectList));
  }

  getproject()
  {
   return JSON.parse(localStorage.getItem("project_list"));
  }

  addChecklist(checklistdata, projectId)
  {
    let checklistarr = [];
    let allList = this.getproject();     
    let projectDetail = allList.find(obj => obj.id == projectId);
    let checklistlength = projectDetail.checklist.length;
    

    /*let arr = [
      {
        id:1,
        name: 'test1'
      },
      {
        id:2,
        name: 'test1'
      },
  ];*/

  //let checklistlength = arr.length-1;
  //arr[checklistlength]['id'];

  //console.log(checklistlength);
  
    let next_id = 0;
    if(checklistlength == 0)
    {
      next_id = 1;
    }
    else 
    {
      let newarr = projectDetail.checklist.reverse();
      let last_id = newarr[0]['id'];
      next_id = last_id + 1; 
    }

    let arr = 
      {
        id:next_id,
        name: checklistdata.name,
        tasklist: []
      };

  projectDetail.checklist.push(arr);

  var index = allList.findIndex(item => item.id === projectId)

  //console.log(index);

  // Replace the item by index.
  allList.splice(index, projectDetail);   
  localStorage.setItem('project_list', JSON.stringify(allList)); 
    
  }

  deleteprojectnow(id)
  {
    let all_project = this.getproject();

    const filterList = all_project.filter((item) => item.id !== id);

    console.log(filterList);

    localStorage.setItem('project_list', JSON.stringify(filterList));
    
  }


  deletechecklistnow(checklistid, projectid)
  {


    let allList = this.getproject(); 
        
    let projectDetail = allList.find(obj => obj.id == projectid);
    let thisList = projectDetail;
    let checkList = thisList.checklist || [];

    const filterList = checkList.filter((item) => item.id !== checklistid);

    

    let updateItem = allList.find(this.findIndexToUpdate, projectid);

    console.log(updateItem);

    

    let index = allList.indexOf(updateItem);

    

    let updateddata = {
      id : thisList.id,
      name :  thisList.name,
      checklist : filterList
    }

    


    allList[index] = updateddata;

    localStorage.setItem('project_list', JSON.stringify(allList));

    
    
  }

  findIndexToUpdate(newItem: any) { 
    return newItem.id === this;
  }

  

  
}
