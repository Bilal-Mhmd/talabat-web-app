import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { MenuItemsDataService } from '../services/menu-items-data.service';
import { OrdersListDataService } from '../services/orders-list-data.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  _orsers : MenuItem[]=[];
  _id:number;
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private menuItemsService:MenuItemsDataService,
    private ordersListService:OrdersListDataService){}

    ngOnInit(): void {

      this.route.params.subscribe(
          (params: Params) => {this._id = +params['resid'];}
        );
        this._orsers=this.ordersListService.getOrdersOfRes(this._id);
    }
    orderMenuItem(id: number, element) {
      this.menuItemsService.menuItems[id].ordered = true;
      let newOrder: MenuItem = this._orsers[id];
      this.ordersListService.Orders.push(newOrder);
      //element.textContent = "Cancel Order";
    }
  
    deleteOrderMenuItem(id: number, element) {
      this.menuItemsService.menuItems[id].ordered = false;
      let delOrder: MenuItem = this._orsers[id];
      this.ordersListService.deleteOrder(this._id, id);
      //element.textContent = "Order";
    }

    goTOMain(){
      this._router.navigateByUrl(`list_restaurants`);
    }
  backToMenu() {
    this._router.navigateByUrl(`list_menu_items/${this._id}`)
    }
}
