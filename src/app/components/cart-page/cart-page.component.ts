import { Component, OnInit } from '@angular/core';
import { AddOrderService } from '../../services/add-order/add-order.service';
import {MenuItem, MessageService} from 'primeng/api';
import { Order, OrderItem } from '../../models/order';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  itemList: Order = { items:[]};

  items!: MenuItem[] ;
  totalPrice = 0;

  cartForm : FormGroup ;
  isCartFormSubmitted = false;
  isCartFormSubmittedAndNotErrorOnClientSide = false;
  
  constructor(
    private addOrderService: AddOrderService,
    private fb: FormBuilder) {

      this.cartForm = this.fb.group({
        lastname:["", Validators.required],
        firstname:["", Validators.required],
        phone:[""],
        email: ["", [Validators.required, Validators.email]]
      }); 
  }

  ngOnInit(): void {
    this.getOrderedItems();
    this.getTotalPrice();
    
  }

  getOrderedItems(){
    this.addOrderService.order$.subscribe(result =>{
      this.itemList = result;
    })
  }

  get f() { return this.cartForm.controls; }

  editProductQuantity(item: OrderItem, quantity: number){

    item.quantity += quantity;

    if(item.quantity == 0){
      this.addOrderService.deleteOrderedItem(item);
      return ;
    }

    this.addOrderService.updateOrderedItemQuantityFromCart(item);
  }

  getTotalPrice(){

    this.addOrderService.order$.subscribe( result =>{
      const orderedItemList = result.items;

      this.totalPrice = 0;

      if(orderedItemList.length != 0){

        orderedItemList.forEach(orderedItem =>{
            this.totalPrice += orderedItem.quantity * orderedItem.price;
        })
      }
    })
  }

  deleteProduct(itemToRemove: OrderItem){

    //Remove item from the displayed list
    const indexOfItemIfExistOnOrderedItemList = this.itemList.items.findIndex(item => (
      (item.name === itemToRemove.name) &&
      (item.mandatory === itemToRemove.mandatory) &&
      this.compareTwoStringArray(item.optionals, itemToRemove.optionals)
    )); 
    if(indexOfItemIfExistOnOrderedItemList != -1){
      //remove from the cart page
      this.itemList.items.splice(indexOfItemIfExistOnOrderedItemList,1);

      //remove from the local storage
      localStorage.setItem('order', JSON.stringify(this.itemList));
      this.addOrderService.order$.next(this.itemList);
    }
  }

  onValidateCart(){
    //this.router.navigate(['panier/livraison']);

    return;
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
