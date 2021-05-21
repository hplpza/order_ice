import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Order} from '../order.model'
import {NgForm} from '@angular/forms'

import {OrdersService} from '../order-service'

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
enteredUserName = ''
enteredEmail = ''
enteredOrder = ''
newOrder = ''

enteredUserNameError = 'Username Error'
enteredEmailError = 'Email Error'
enteredOrderError = 'Order Error'

  

  ngOnInit(): void {
  }



//@Output()orderCreated = new EventEmitter<Order>();
constructor(public orderService : OrdersService) { }
onAddOrder(Orderfrom : NgForm)
{
console.log("test")
if(Orderfrom.invalid)
{
  return;
}

this.orderService.addOrders(Orderfrom.value.enteredUserName,
  Orderfrom.value.enteredEmail,
  Orderfrom.value.enteredOrder)
  console.log("test2")

}

}
