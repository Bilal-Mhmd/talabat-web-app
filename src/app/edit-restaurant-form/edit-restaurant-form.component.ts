import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RestaurantsDataService } from '../restaurants-data.service';

@Component({
  selector: 'edit-restaurant-form',
  templateUrl: './edit-restaurant-form.component.html',
  styleUrls: ['./edit-restaurant-form.component.css']
})
export class EditRestaurantFormComponent implements OnInit {

  restaurant: Restaurant;
  _id: number;

  constructor(
    private route:ActivatedRoute,
    private _router:Router,
    private restaurantDataService: RestaurantsDataService) { 

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this._id = +params['id'];
        }
      );
  }

  editRestaurant(form : NgForm){
    this.restaurant = new Restaurant(
      form.value.userName, form.value.city, form.value.street,
      form.value.latitude, form.value.longitude, form.value.image
    );
    this.restaurantDataService.restaurants[this._id] = this.restaurant;
    this._router.navigateByUrl(`list_restaurants`);
  }
  

  // 

}

