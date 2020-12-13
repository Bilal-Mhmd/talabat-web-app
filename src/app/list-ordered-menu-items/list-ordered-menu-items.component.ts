import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MenuItem';
import { Restaurant } from '../models/restaurant';
import { MenuItemsDataService } from '../services/menu-items-data.service';
import { OrderedListService } from '../services/ordered-list.service';
import { OrdersListDataService } from '../services/orders-list-data.service';
import { RestaurantsDataService } from '../services/restaurants-data.service';

@Component({
  selector: 'app-list-ordered-menu-items',
  templateUrl: './list-ordered-menu-items.component.html',
  styleUrls: ['./list-ordered-menu-items.component.css']
})
export class ListOrderedMenuItemsComponent implements OnInit {

  _restaurants: Restaurant[] = []
  _orders: MenuItem[] = [];
  constructor(
    private menuItemsService: MenuItemsDataService,
    private orderedListService: OrderedListService,
    private restaurantsListService: RestaurantsDataService,
    private ordersListService: OrdersListDataService,
  ) { }

  ngOnInit(): void {
    
    this._restaurants = this.restaurantsListService.restaurants;
  }

  deleteOrder(id: number, res_id: number) {
    this.ordersListService.deleteOrder(res_id, id);
  }

  getResOrders(res: Restaurant): MenuItem[]{
    return this.ordersListService.getOrdersOfRes(res.id);
    
  }

  backToMenu() {
    
  }

  goTOMain() {
    
  }

}
