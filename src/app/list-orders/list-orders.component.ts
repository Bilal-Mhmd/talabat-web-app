import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { MenuItemsDataService } from '../services/menu-items-data.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  _orders : MenuItem[]=[];
  _id:number;
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private menuItemsService:MenuItemsDataService,
    ){}

    ngOnInit(): void {

      this.route.params.subscribe(
          (params: Params) => {this._id = +params['resid'];}
        );
        this._orders=this.menuItemsService.getRestOrderedMenuItems(this._id);
    }
    orderMenuItem(id: number) {
      this._orders[id].ordered = true;
      let newOrder: MenuItem = this._orders[id];
      //this.ordersListService.addOrder(newOrder);
      this.menuItemsService.setMenuItem(this._id,id,newOrder);
    }
  
    deleteOrderMenuItem(id: number) {
      this._orders[id].ordered = false;
      let newOrder: MenuItem = this._orders[id];
      this.menuItemsService.setMenuItem(this._id, id, newOrder);
    //   this._orders =this._orders.filter(function(ele){ 
    //     return ele != newOrder; 
    // });
      delete this._orders[id];
    }

    goTOMain(){
      this._router.navigateByUrl(`list_restaurants`);
    }

    backToMenu() {
    this._router.navigateByUrl(`list_menu_items/${this._id}`)
    }

}
