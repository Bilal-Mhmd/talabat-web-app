import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItemsDataService } from '../services/menu-items-data.service';
import { MenuItem } from '../MenuItem';
import { OrdersListDataService } from '../services/orders-list-data.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

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
        this._menu_items=this.OrdersListService.getOrdersOfRes(this._id);
    }
    orderMenuItem(id:number){
      let _MenuItem:MenuItem = this.MenuItemsService.getMenuItem(this._id,id);
      this.OrdersListService.addOrder(_MenuItem);
    }
    deleteOrderMenuItem(id:number){
      let _MenuItem:MenuItem = this.MenuItemsService.getMenuItem(this._id,id);
      this.OrdersListService.deleteOrder(_MenuItem);
    }

    goTOMain(){
      this._router.navigateByUrl(`list_restaurants`);
    }
}
