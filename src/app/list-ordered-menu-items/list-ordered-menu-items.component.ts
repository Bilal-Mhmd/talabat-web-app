import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { Restaurant } from '../models/restaurant';
import { MenuItemsDataService } from '../services/menu-items-data.service';
import { RestaurantsDataService } from '../services/restaurants-data.service';

@Component({
  selector: 'app-list-ordered-menu-items',
  templateUrl: './list-ordered-menu-items.component.html',
  styleUrls: ['./list-ordered-menu-items.component.css']
})
export class ListOrderedMenuItemsComponent implements OnInit {

  _restaurants: Restaurant[] = []
  //_orders: MenuItem[] = [];
  constructor(
    private menuItemsService: MenuItemsDataService,
    private restaurantsListService: RestaurantsDataService,
    private route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    
    this._restaurants = this.restaurantsListService.restaurants;
  }
  orderMenuItem(i:MenuItem){
    i.ordered=true;
    this.menuItemsService.setMenuItem(i.rest_id,i.id,i);
  }
  deleteOrder(i:MenuItem) {
  i.ordered=false;
  this.menuItemsService.setMenuItem(i.rest_id,i.id,i);
  }

  getResOrders(res: Restaurant): MenuItem[]{
    return this.menuItemsService.getRestOrderedMenuItems(res.id);
  }
  goTOMain() {
    this._router.navigateByUrl(`list_restaurants`);

  }

}
