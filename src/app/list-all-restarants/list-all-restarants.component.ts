import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantsDataService } from '../restaurants-data.service';

@Component({
  selector: 'app-list-all-restarants',
  templateUrl: './list-all-restarants.component.html',
  styleUrls: ['./list-all-restarants.component.css']
})
export class ListAllRestarantsComponent implements OnInit {
  restaurants : Restaurant[] = [];
  constructor(private restaurantDataService: RestaurantsDataService) {

  }
  

  ngOnInit(): void {
    this.restaurants = this.restaurantDataService.getRestaurants();
  }
  

  update() {
    document.getElementById('show_button').style.display= 'block' ;
  }
}


