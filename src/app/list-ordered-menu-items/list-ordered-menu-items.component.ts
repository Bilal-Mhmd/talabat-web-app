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
    this.menuItemsService.menuItems.forEach(
      element => {
        if (element.ordered) {
          this._orders.push(element);
        }
      }
    );
    this._restaurants = this.restaurantsListService.restaurants;
  }

  deleteOrderMenuItem(id: number, element, res) {
    this.menuItemsService.menuItems[id].ordered = false;
    let delOrder: MenuItem = this._orders[id];
    this.ordersListService.deleteOrder(res.id, delOrder);
    //element.textContent = "Order";
  }

  getResOrders(res: Restaurant): MenuItem[]{
    return this.ordersListService.getOrdersOfRes(res.id);
  }

}
