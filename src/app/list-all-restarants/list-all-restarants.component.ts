import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Restaurant } from '../restaurant';
import { RestaurantsDataService } from '../restaurants-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-all-restarants',
  templateUrl: './list-all-restarants.component.html',
  styleUrls: ['./list-all-restarants.component.css']
})
export class ListAllRestarantsComponent implements OnInit {
  rating:number;
  restaurants: Restaurant[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private restaurantDataService: RestaurantsDataService) {
  }
  

  ngOnInit(): void {
    this.restaurants = this.restaurantDataService.getRestaurants();
    this.restaurants.forEach(function (res, index) {
      res.id = index;
    });
    console.log(this.restaurants);
  }
  
  updateRestaurant(id:number) {
    this._router.navigateByUrl(`/edit_restaurant/${id}`);
  }
  ShowMenu(id:number){
    this._router.navigateByUrl(`list_menu_items/${id}`);
  }
  showOrders(res_id:number)
  {
    this._router.navigateByUrl(`list_orders/${res_id}`);
  }
}


