import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RestaurantsDataService } from '../services/restaurants-data.service';

@Component({
  selector: 'app-add-restaurant-form',
  templateUrl: './add-restaurant-form.component.html',
  styleUrls: ['./add-restaurant-form.component.css']
})
export class AddRestaurantFormComponent implements OnInit {

  constructor(
    private restaurantsDataService: RestaurantsDataService,
    private _router:Router) {

   }

  ngOnInit(): void {
  }

  addRestaurant(form: NgForm) {
    this.restaurantsDataService.restaurants.push(
      new Restaurant(form.value.userName, form.value.city, form.value.street,
        form.value.latitude, form.value.longitude, form.value.image));
    
    this._router.navigate(['/list_restaurants']);
    
    
  }

}
