import { Injectable } from '@angular/core';
import { element } from 'protractor';

import { MenuItem } from '../models/MenuItem';
@Injectable({
  providedIn: 'root'
})
export class MenuItemsDataService {
  menuItems :MenuItem[]=[
    new MenuItem("Kunafa",
      88,
      "jklhlkhl",
      "https://cleobuttera.com/wp-content/uploads/2018/05/kunafa-rolls-mood.jpg", 0, 0, 4,false),
    new MenuItem("Kataif", 99, "jklhlkhl",
      "https://savoryandsweetfood.files.wordpress.com/2013/07/20130713-013757.jpg", 1, 0, 4, false),
    new MenuItem("Mansaf", 99, "jklhlkhl",
      "https://www.cheftariq.com/wp-content/uploads/2020/04/mansaf-4-1-500x500.jpg", 2, 1, 5, false),
    new MenuItem("Maklouba", 99, "jklhlkhl",
      "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2019-04/8184---Chicken-Maklouba-with-Eggplant_2.jpg", 3, 1, 5, false),
      new MenuItem("Maklouba", 99, "jklhlkhl",
      "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2019-04/8184---Chicken-Maklouba-with-Eggplant_2.jpg", 4, 2, 5, false)


];

  constructor() { }

  getMenuItemsOfRes(resId): MenuItem[] {
    let _items: MenuItem[] = [];
    this.menuItems.forEach(element => {
      if (element.rest_id == resId) {
        _items.push(element);
      }
    });
    return _items;
  }

  addMenuItem(menuItem:MenuItem){
    
    menuItem.id = this.menuItems.length;
    menuItem.ordered= false;
    this.menuItems.push(menuItem);
  }
  getMenuItemsOfRest(resId:number):MenuItem[]{
    let _menuItems:MenuItem[]=[];
    let MI_id:number = 0;
    for(let i=0;i<this.menuItems.length;i++)
    {
      if(this.menuItems[i].rest_id==resId){  
         
        this.menuItems[i].id = MI_id;
        _menuItems.push(this.menuItems[i]);
        MI_id++;
      }
    }
    return _menuItems;
  }
  getMenuItem(res_id:number,id:number):MenuItem{
    for(let i=0;i<this.menuItems.length;i++)
    {
      if((this.menuItems[i].rest_id==res_id) &&(this.menuItems[i].id==id) )
      {  
        return this.menuItems[i];
      }
    }
  }
  setMenuItem(resid:number,id:number,menuItem:MenuItem){
    for(let i=0;i<this.menuItems.length;i++)
    {
      if((this.menuItems[i].rest_id==resid) && (this.menuItems[i].id==id))
      {
        this.menuItems[i]= menuItem;
      }
    }
  }
}
