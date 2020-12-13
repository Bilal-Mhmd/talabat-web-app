import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class OrdersListDataService {

  Orders:MenuItem[]=[];
  constructor() { }

  getAllOrders():MenuItem[]{
    return this.Orders;
  }
  addOrder(Order:MenuItem)
  {
    this.Orders.push(Order);
  }
  getOrdersOfRes(res_id:number){
    let ordersList:MenuItem[]=[];

    this.Orders.forEach(element => {
      if (element.rest_id == res_id) {
        ordersList.push(element);
      }
    })
    return ordersList;
  }
  deleteOrder(res_id:number, id:number)
  {
    this.Orders.forEach(function (element, index) {
      if (element.rest_id == res_id && element.id == id) {
        this.Orders.splice(index, 1);
      }
    });
  }


  rateOrder(rating:number,order:MenuItem){
    for(let i=0; i<this.Orders.length;i++)
    {
      if(this.Orders[i] == order)
      {
        this.Orders[i].rate=rating;
      }
    }
  }

  setOrder(res_id:number, order: MenuItem) {
    this.Orders.forEach(element => {
      if (element.rest_id == res_id && element == order) {
        element.ordered = order.ordered;
      }
    })
  }
}
