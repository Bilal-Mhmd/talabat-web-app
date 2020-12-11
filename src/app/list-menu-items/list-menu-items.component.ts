import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { MenuItemsDataService } from '../services/menu-items-data.service';
import { OrdersListDataService } from '../services/orders-list-data.service';


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
  private MenuItemsService:MenuItemsDataService,
  private OrdersListService:OrdersListDataService){}

  ngOnInit(): void {

    this.route.params.subscribe(
        (params: Params) => {this._id = +params['resid'];}
      );
      this._menu_items=this.MenuItemsService.getMenuItemsOfRest(this._id);
  }

  editMenuItem(id:number)
  {
    this._router.navigateByUrl(`/edit_menu_item/${this._id}/${id}`);
  }

  addMenuItem(){
    this._router.navigateByUrl(`/add_item/${this._id}`);
    console.log("navigation to menu item with res id "+this._id);
  }
  orderMenuItem(id: number) {

    this.MenuItemsService.menuItems[this._id].ordered = true;
    let _MenuItem: MenuItem = this.MenuItemsService.getMenuItem(this._id, id);
    this.OrdersListService.addOrder(_MenuItem);

  }
  deleteOrderMenuItem(id: number) {
    let _MenuItem:MenuItem = this.MenuItemsService.getMenuItem(this._id,id);
    this.OrdersListService.deleteOrder(_MenuItem);

  }

}
