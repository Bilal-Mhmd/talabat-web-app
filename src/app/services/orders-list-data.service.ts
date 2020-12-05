import { Injectable } from '@angular/core';
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

    for(let i=0;i<this.Orders.length;i++)
    {
      if(this.Orders[i].rest_id == res_id)
      {
        ordersList.push(this.Orders[i]);
      }
    }
    return ordersList;
  }
  deleteOrder(order:MenuItem)
  {
    for(let i=0; i<this.Orders.length;i++)
    {
      if(this.Orders[i] == order)
      {
        this.Orders.splice(i,1);
        this.Orders[i].ordered=false;
      }
    }
  }
  rateOrder(rating:number,order:MenuItem)
  {
    for(let i=0; i<this.Orders.length;i++)
    {
      if(this.Orders[i] == order)
      {
        this.Orders[i].rate=rating;
      }
    }
  }
}
