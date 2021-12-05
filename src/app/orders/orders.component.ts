import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:UserService) { }
  ordfarms:any;
  ordcons:any;
  orders:any;
  message:any;
  userId:any;
  ordproducts:any;
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
    this.userId = this.message;
    this.service.getOrdersbyConsumerId(this.userId).subscribe((data:any) => {console.log(data); this.orders= data ;});
    this.service.getfarmsofConsumerOrders(this.userId).subscribe((data:any) => {console.log(data); this.ordfarms= data ;});
    this.service.getFarmersofConsumerOrders(this.userId).subscribe((data:any) => {console.log(data); this.ordcons= data ;});
    this.service.getProductsofConsumerOrders(this.userId).subscribe((data:any) => {console.log(data); this.ordproducts= data ;});
  }

}
