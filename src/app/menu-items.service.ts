import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
@Injectable({
  providedIn: 'root'
})
export class MenuItemsDataService {
  menuItems:MenuItem[]=[
    new MenuItem("odaiMI",88,"jklhlkhl","img1",0,0,5,false),
    new MenuItem("odaiMI",99,"jklhlkhl","img2",1,0,5,false)
];

  constructor() { }

  getMenuItems():MenuItem[]
  {
    return this.menuItems;
  }
  addMenuItem(MI:MenuItem){
    
    MI.id = this.menuItems.length;
    MI.ordered= false;
    this.menuItems.push(MI);
    console.log("from seervice " + MI.id+MI.descr+MI.name);
  }
  getMenuItemsOfRest(res_id:number):MenuItem[]
  {
    let MI:MenuItem[]=[];
    let MI_id:number = 0;
    for(let i=0;i<this.menuItems.length;i++)
    {
      if(this.menuItems[i].rest_id==res_id)
      {  
         
        this.menuItems[i].id = MI_id;
        MI.push(this.menuItems[i]);
        MI_id++;
      }
    }
    return MI;
  }
  getMenuItem(res_id:number,id:number):MenuItem
  {
    for(let i=0;i<this.menuItems.length;i++)
    {
      if((this.menuItems[i].rest_id==res_id) &&(this.menuItems[i].id==id) )
      {  
        return this.menuItems[i];
      }
    }
  }
  setMenuItem(resid:number,id:number,MI:MenuItem)
  {
    for(let i=0;i<this.menuItems.length;i++)
    {
      if((this.menuItems[i].rest_id==resid) && (this.menuItems[i].id==id))
      {
        this.menuItems[i]= MI;
      }
    }
  }
}
