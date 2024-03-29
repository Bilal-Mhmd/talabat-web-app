import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { MenuItemsDataService } from '../services/menu-items-data.service';


@Component({
  selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {

  _menu_items : MenuItem[]=[];
  _id:number;

constructor(
  private route: ActivatedRoute,
  private _router: Router,
  private menuItemsService : MenuItemsDataService,
  ){}

  ngOnInit(): void {

    this.route.params.subscribe(
        (params: Params) => {this._id = +params['resid'];}
      );    
    this._menu_items = this.menuItemsService.getMenuItemsOfRes(this._id);
    //this._menu_items.forEach(function (menu, index) {
     // menu.id = index;
    //});
  }

  editMenuItem(id:number)
  {
    this._router.navigateByUrl(`/edit_menu_item/${this._id}/${id}`);
  }

  addMenuItem(){
    this._router.navigateByUrl(`/add_item/${this._id}/${this._id}`);
    console.log("navigation to menu item with res id "+this._id);
  }
  orderMenuItem(id: number) {
    this._menu_items[id].ordered = true;
    let newOrder: MenuItem = this._menu_items[id];
    //this.ordersListService.addOrder(newOrder);
    this.menuItemsService.setMenuItem(this._id,id,newOrder);
  }

  deleteOrderMenuItem(id: number) {
    this._menu_items[id].ordered = false;
    let newOrder: MenuItem = this._menu_items[id];
    this.menuItemsService.setMenuItem(this._id,id,newOrder);
  }

  showOrders() {
    this._router.navigateByUrl(`list_orders/${this._id}`)
  }

}
