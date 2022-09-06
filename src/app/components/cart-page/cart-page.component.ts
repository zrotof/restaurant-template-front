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
      }); }

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



  minusProduct(item: OrderItem){

      this.itemList.items.map((item)  =>{
/*        if(item.quantity > 1)

        if((item.id === productId) && (item.size === size)){
  
          item.itemQuantity -= 1;
  
          this.addOrderService.setCartItemFromCartPage({
            productId: productId,
            quantity: item.itemQuantity,
            size: item.size
          });
        }
  */
        return item ;      
      })
  
    
  }


  plusProduct(item: OrderItem){

    this.itemList.items.map((item)  =>{

/*       if(item.quantity < 100)
   
      if((item.id === productId) && (item.size === size)){

        item.itemQuantity += 1;

        this.addOrderService.setCartItemFromCartPage({
          productId: productId,
          quantity: item.itemQuantity,
          size: item.size
        });
      }
*/
      return item ;      
    })

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
      (item.accompaniment === itemToRemove.accompaniment) &&
      this.compareTwoStringArray(item.sauces, itemToRemove.sauces)
      
    )); 
    if(indexOfItemIfExistOnOrderedItemList != -1){
      console.log(this.itemList)
      //remove from the cart page
      this.itemList.items.splice(indexOfItemIfExistOnOrderedItemList,1);
      console.log(this.itemList)

      //remove from the local storage

      localStorage.setItem('order', JSON.stringify(this.itemList));
      this.addOrderService.order$.next(this.itemList);
    }
  }


  onValidateCart(){
   // this.router.navigate(['panier/livraison']);

    return;
  }


  compareTwoStringArray(firstArray: string[], secondArray: string[]){

    //We first sort array
    firstArray.sort();
    secondArray.sort();

    //We compare sorted array

    return JSON.stringify(firstArray) === JSON.stringify(secondArray);
  }

}
