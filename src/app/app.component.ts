import { Component } from '@angular/core';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import {Order} from './order.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'order-ice'

}
