import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class OrdersListDataService {

  orders:MenuItem[]=[];
  constructor() { }

  getAllOrders():MenuItem[]{
    return this.orders;
  }
  addOrder(Order:MenuItem)
  {
    this.orders.push(Order);
  }
  getOrdersOfRes(res_id:number){
    let ordersList:MenuItem[]=[];

    for(let i=0;i<this.orders.length;i++)
    {
      if(this.orders[i].rest_id == res_id)
      {
        ordersList.push(this.orders[i]);
      }
    }
    return ordersList;
  }
  deleteOrder(order:MenuItem)
  {
    for(let i=0; i<this.orders.length;i++)
    {
      if(this.orders[i] == order)
      {
        this.orders.splice(i,1);
        this.orders[i].ordered=false;
      }
    }
  }
  rateOrder(rating:number,order:MenuItem)
  {
    for(let i=0; i<this.orders.length;i++)
    {
      if(this.orders[i] == order)
      {
        this.orders[i].rate=rating;
      }
    }
  }
}
