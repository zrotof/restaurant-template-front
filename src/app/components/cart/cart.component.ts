import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderItem } from 'src/app/models/order';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation : ViewEncapsulation.None

})
export class CartComponent implements OnInit {

  siderbarDisplayed = false;

  numberOfItems : number = 0;
  orderedProductList : Order | undefined;
  totalPrice: number = 0;
  isCartEmpty : boolean = true;

  constructor(
    private addOrderService: AddOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOrderedItems();
    this.getTotalNumberOfItemsAndTotalPrice();
  }

  displaySidebar(){
    this.siderbarDisplayed = !this.siderbarDisplayed;
    this.getOrderedItems();
  }

  openCartPage(){
    this.displaySidebar();
    this.router.navigateByUrl("/panier");
  }

  openMenuPage(){
    this.displaySidebar();
    this.router.navigateByUrl("/notre-carte");
  }

  getTotalNumberOfItemsAndTotalPrice(){
    this.addOrderService.order$.subscribe(order =>{
      
      this.numberOfItems = 0;
      this.totalPrice = 0;
      
      if(order?.items.length){

        for(const item of order.items){

          this.numberOfItems += item.quantity; 

          this.totalPrice += item.quantity * item.price;
        }
      }
    })
  }

  getOrderedItems(){
    this.addOrderService.order$
      .subscribe(order => {

        this.orderedProductList = order;
        if(this.orderedProductList.items.length == 0){
          this.isCartEmpty = true;
        }
        else{
          this.isCartEmpty = false
        }
      })
  }

}
