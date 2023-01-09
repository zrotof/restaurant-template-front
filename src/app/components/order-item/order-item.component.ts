import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/order';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {



@Input() order : OrderItem | undefined ;

totalPrice : number = 0;
selectQuantityArray: number[] = new Array<number>(50)  ;

  constructor(
    private orderService :  AddOrderService
  ) { }

  ngOnInit(): void {
    this.getTotalPrice();
  }


  getTotalPrice(){
    this.totalPrice = 0;
    this.totalPrice = this.order!.quantity * this.order!.price;
  }

  changeQuantity(e: any){

    const valueClicked : number = parseInt((e.target as HTMLSelectElement).value);

    if(valueClicked === 0){
      
      this.orderService.deleteOrderedItem(this.order);

      return;
    }

    this.totalPrice = 0;

    const newQuantityOrdered : OrderItem = {
      name: this.order?.name,
      price: this.order!.price,
      quantity: valueClicked,
      mandatory: this.order?.mandatory,
      optionals: this.order!.optionals,
      ref: this.order?.ref
    }

    this.orderService.updateOrderedItemQuantityFromCart(newQuantityOrdered);

    this.totalPrice = valueClicked * this.order!.price;

  }

}
