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
  
  restaurants: Restaurant[] = [];
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private restaurantDataService: RestaurantsDataService) {
    
  }
  

  ngOnInit(): void {
    this.restaurants = this.restaurantDataService.getRestaurants();
  }
  

  updateRestaurant() {
    this._router.navigateByUrl('/edit_restaurant');
  }
}


