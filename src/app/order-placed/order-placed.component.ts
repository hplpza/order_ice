import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Order} from '../order.model'
import {OrdersService} from '../order-service'
import {Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})

export class OrderPlacedComponent implements OnInit, OnDestroy {
  orders : Order [] = [];

  

  constructor(public orderService : OrdersService) { }
  private ordersSubscription : Subscription;

  ngOnInit(): void {
    this.orderService.getOrders();
    this.ordersSubscription = this.orderService.getPostUpdateListener()
    .subscribe((orders: Order[]) =>
    {
    this.orders = this.orders;
    });
    console.log("order")

  }
ngOnDestroy()
{
  this.ordersSubscription.unsubscribe();
}

       

      posts = [
               {userName: 'First Order', orderDetails: 'this is what order 1 needs'},
               {userName: 'Second Order', orderDetails: 'this is what order 2 needs'},
               {userName: 'Third Order', orderDetails: 'this is what order 3 needs'}
              ];

}
