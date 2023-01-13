import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order, OrderItem } from '../../models/order'

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  order$ : BehaviorSubject<Order> = new BehaviorSubject(this.getOrder());

  constructor() { }


  initOrderLocalStorage(){

    const order = this.getOrder();

    if(!order){
      this.resetCart();
    }
  }

  resetCart(){

    const initialOrder = {
      items: []
    }

    const initialOrderJson = JSON.stringify(initialOrder);
    localStorage.setItem('order',initialOrderJson);
  }

  getOrder(): Order{
    const orderJsonString : string = localStorage.getItem('order') as string;
    const order : Order = JSON.parse(orderJsonString);
    return order;
  }

  //Function used to add a new item to the cart
  setOrderItem(orderItem: OrderItem): Order{
    const order: Order = this.getOrder();

    const orderedItemAlreadyExist = order.items.find(
      (item) => (
        item.name === orderItem.name && 
        item.mandatory === orderItem.mandatory &&
        this.compareTwoStringArray(item.optionals, orderItem.optionals)
      )
    )
    
    if(orderedItemAlreadyExist){

      order.items.map(item =>{

        if(
          item.name === orderItem.name && 
          item.mandatory === orderItem.mandatory &&
          this.compareTwoStringArray(item.optionals, orderItem.optionals)
          ){

          item.quantity = item.quantity + orderItem.quantity;
    
        }
        
        return item;

      })
    }
    else{
      order.items.push(orderItem);
    }

     localStorage.setItem('order', JSON.stringify(order));
      this.order$.next(order);

    return order;

  }

  updateOrderedItemQuantityFromCart(orderItem: OrderItem){
    const order: Order = this.getOrder();

    const orderedItemAlreadyExist = order.items.find(
      (item) => (
        item.name === orderItem.name && 
        item.mandatory === orderItem.mandatory &&
        this.compareTwoStringArray(item.optionals, orderItem.optionals)
      )
    )

    if(!orderedItemAlreadyExist){
      return ;
    }
    
      order.items.map(item =>{

        if(
          item.name === orderItem.name && 
          item.mandatory === orderItem.mandatory &&
          this.compareTwoStringArray(item.optionals, orderItem.optionals)
          ){

          item.quantity = orderItem.quantity;
    
        }
        
        return item;

      })
    

     localStorage.setItem('order', JSON.stringify(order));
      this.order$.next(order);

    return order;
  }

  deleteOrderedItem(orderedItem: OrderItem | undefined){
    const order = this.getOrder();

    const indexOfProductInOrder = order.items.findIndex(
      item => (
        item.name === orderedItem?.name && 
        item.mandatory === orderedItem?.mandatory &&
        this.compareTwoStringArray(item.optionals, orderedItem!.optionals)
      )
    );

    if(indexOfProductInOrder != -1){
      order.items.splice(indexOfProductInOrder,1);
      localStorage.setItem('order', JSON.stringify(order));
      this.order$.next(order);
    }

  }

  compareTwoStringArray(firstArray: string[], secondArray: string[]){

    //We first sort arrays
    firstArray.sort();
    secondArray.sort();

    //We compare sorted arrays
    return JSON.stringify(firstArray) === JSON.stringify(secondArray);
  }
}
