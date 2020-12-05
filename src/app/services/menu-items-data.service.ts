import { Injectable } from '@angular/core';

import { MenuItem } from '../models/MenuItem';
@Injectable({
  providedIn: 'root'
})
export class MenuItemsDataService {
  Menu_Items:MenuItem[]=[
    new MenuItem("odaiMI",88,"jklhlkhl","img1",0,0,5,false),
    new MenuItem("odaiMI",99,"jklhlkhl","img2",1,0,5,false)
];

  constructor() { }

  getMenuItems():MenuItem[]
  {
    return this.Menu_Items;
  }
  addMenuItem(MI:MenuItem){
    
    MI.id = this.Menu_Items.length;
    MI.ordered= false;
    this.Menu_Items.push(MI);
    console.log("from seervice " + MI.id+MI.descr+MI.name);
  }
  getMenuItemsOfRest(res_id:number):MenuItem[]
  {
    let MI:MenuItem[]=[];
    let MI_id:number = 0;
    for(let i=0;i<this.Menu_Items.length;i++)
    {
      if(this.Menu_Items[i].rest_id==res_id)
      {  
         
        this.Menu_Items[i].id = MI_id;
        MI.push(this.Menu_Items[i]);
        console.log("item with id "+this.Menu_Items[i].id+"pushed to res with id "+this.Menu_Items[i].rest_id+"");
        MI_id++;
      }
    }
    return MI;
  }
  getMenuItem(res_id:number,id:number):MenuItem
  {
    for(let i=0;i<this.Menu_Items.length;i++)
    {
      if((this.Menu_Items[i].rest_id==res_id) &&(this.Menu_Items[i].id==id) )
      {  
        return this.Menu_Items[i];
      }
    }
  }
  setMenuItem(resid:number,id:number,MI:MenuItem)
  {
    for(let i=0;i<this.Menu_Items.length;i++)
    {
      if((this.Menu_Items[i].rest_id==resid) && (this.Menu_Items[i].id==id))
      {
        this.Menu_Items[i]= MI;
      }
    }
  }
}
