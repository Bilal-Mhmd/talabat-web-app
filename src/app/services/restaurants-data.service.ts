import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsDataService {

  restaurants: Restaurant[] = [
    new Restaurant('Ward', 'Nablus', 'Nablus Street', 20, 10,
      'https://www.lailnhar.com/sites/default/files/cover_facebook//1896955_852617051481860_5367792192186110571_n.jpg', 1),
    new Restaurant('Zuwwar', 'Hebron', 'Ras Eljoura', 2, 10,
      'https://shobiddak.com/uploads/picture/stuff/name/55079/14192733_314195592261416_116658421793547077_n.jpg', 2),
    new Restaurant('ZEST', 'Ramallah', 'Ramallah Street', 5, 10,
      'https://media-cdn.tripadvisor.com/media/photo-s/14/6b/4d/28/step-into-raw-mediterranean.jpg', 3),
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
