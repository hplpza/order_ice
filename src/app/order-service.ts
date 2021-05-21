import {Order} from './order.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrdersService
{
   private orders: Order [] = [];
   private updatedOrders = new Subject<Order[]>();
   


constructor(private http: HttpClient){}





   getPostUpdateListener()
   {
       return this.updatedOrders.asObservable();
   }

addOrders(userName: string, Email: string, PlacedOrder: string)
{
  console.log("add")
    const order : Order = 

    {
        id:null,
        userName: userName,
        Email: Email,
        PlacedOrder: PlacedOrder 
  
    };


this.http.post<{message:string}>('http://localhost:3232/api/orders', order)
    .subscribe((responseOrderData)=>
    {
        console.log(responseOrderData.message);
        this.orders.push(order);
        this.updatedOrders.next([...this.orders])
    }

    );


    this.orders.push(order);
    this.updatedOrders.next([...this.orders]);
}


getOrders()
  {
    console.log("get")
    this.http.get<{message: string, orders: any}>('https://localhost:3232/api/orders')
    .pipe(map((orderData) =>
    {
      return orderData.orders.map((order: { userName: any; Email: any; PlacedOrder: any; _id: any; }) =>
        {
          return {
            userName: order.userName,
            Email: order.Email,
            PlacedOrder: order.PlacedOrder,
            id: order._id
          };
        });
    }))
    .subscribe((changedOrders) =>
    {
      this.orders = changedOrders;
      this.updatedOrders.next([...this.orders]);
    });
  }



deleteOrder(orderID: string)
{
    this.http.delete('https://localhost:3232/api/orders' + orderID)
    .subscribe(()=>
    
    {
        const updatedOrdersDel = this.orders.filter(order=>order.id!==orderID);
        this.orders=updatedOrdersDel;
        this.updatedOrders.next([...this.orders]);

        console.log("Order Deleted")
    }
    
    )
}


}