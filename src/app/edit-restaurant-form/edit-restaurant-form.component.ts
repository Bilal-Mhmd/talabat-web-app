import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from '../restaurant';
import { RestaurantsDataService } from '../restaurants-data.service';

@Component({
  selector: 'edit-restaurant-form',
  templateUrl: './edit-restaurant-form.component.html',
  styleUrls: ['./edit-restaurant-form.component.css']
})
export class EditRestaurantFormComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(private restaurantDataService: RestaurantsDataService) { 

  }

  ngOnInit(): void {
  }

  editRestaurant(form : NgForm){
    this.restaurant =  new Restaurant(form.value.userName, form.value.city, form.value.street,
                                          form.value.latitude, form.value.longitude, form.value.image);
  }
  

  // 

}

