import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsDataService {

  restaurants: Restaurant[] = [
    new Restaurant('Babel', 'Hebron', 'Alsalam Street', 20,10,'',1),
    new Restaurant('Ward', 'Hebron', 'Bilal Street', 3,5,'',2),
    new Restaurant('Zuwwar', 'Hebron', 'ppu Street', 2,10,'',3),
    new Restaurant('mdry', 'Hebron', 'Alsalam Street', 5,10,'',4),
  ]

  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }
}
