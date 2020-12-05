import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsDataService {

  restaurants: Restaurant[] = [
    new Restaurant('Ward', 'Hebron', 'Alsalam Street', 20,10,'',1),
    new Restaurant('Zuwwar', 'Hebron', 'Ras Eljoura', 2, 10,
      '', 2),
    new Restaurant('mdry', 'Hebron', 'Alsalam Street', 5,10,'',3),
  ]

  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }

  rateRest(rating:number, id:number)
  {
    for(let i=0;i<this.restaurants.length;i++)
    {
      if(this.restaurants[i].id == id)
      {
        this.restaurants[i].rate = rating;
      }
    }
  }
}
