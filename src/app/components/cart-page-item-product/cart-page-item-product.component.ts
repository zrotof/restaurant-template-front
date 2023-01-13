import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from 'src/app/models/order';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-page-item-product',
  templateUrl: './cart-page-item-product.component.html',
  styleUrls: ['./cart-page-item-product.component.scss']
})
export class CartPageItemProductComponent implements OnInit {

  @Input() item!: OrderItem;
  @Output() editProductEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitEditProductEvent(item: OrderItem, quantity: number){

    const productObjectToEdit = {
      item:item,
      quantity: quantity
    }
    this.editProductEvent.emit(productObjectToEdit)
  }

  compareTwoStringArray(firstArray: string[], secondArray: string[]){

    //We first sort array
    firstArray.sort();
    secondArray.sort();

    //We compare sorted array
    return JSON.stringify(firstArray) === JSON.stringify(secondArray);
  }

  concatOptionals(param: string[]): string{

    let newOptionals = '';
      param.forEach((optional, index) =>{
        if(index == param.length - 1){
          newOptionals += optional
        }
        else{
          newOptionals += optional+ ", "
        }
      })
    return newOptionals;
  }

}
