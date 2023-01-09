import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { OrderItem } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-order-form-type-three',
  templateUrl: './order-form-type-three.component.html',
  styleUrls: ['./order-form-type-three.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderFormTypeThreeComponent implements OnInit {

  totalPrice: number = 0;
  product: Product | any;
  orderedQuantity: number = 1;
  saucesList: any[] = [];
  orderedProductForm : FormGroup;
  isOrderFormSubmitted = false;

  constructor( 
    private productService : ProductsService,  
    public productDialogRef : DynamicDialogRef, 
    public productDialogConfig : DynamicDialogConfig,
    private fb: FormBuilder,
    private addOrderService: AddOrderService  ) {

      this.orderedProductForm = this.fb.group({
        selectedMandatory: ["", Validators.required],
        selectedOptionals: [[]]
      });

    }

  ngOnInit(): void {
    this.product = this.productDialogConfig.data.product; 
    this.totalPrice = this.product.price;
  }

  // convenient getter for easy access to form fields
  get f() { return this.orderedProductForm.controls; }

  setQuantity(param: number){

    if(param < 0 && this.orderedQuantity == 1){
      return;
    }
    this.orderedQuantity += param;
    this.totalPrice = this.product.price*this.orderedQuantity;
  }

  closeModal(product: Product){
    this.productDialogRef.close(product)
  }

  onSubmitOrderOneForm(){
    
    this.isOrderFormSubmitted = true; 

    if (this.orderedProductForm.invalid) {
      return;
    }
    let accompaniment : string ='';
    let sauces: string[] = [];

    ;
    if(this.product?.mandatories.length > 0){
      accompaniment = this.f.selectedMandatory.value;
    }

    if(this.product?.optionals.length > 0){
      if(this.f.selectedOptionals.value.name){
        sauces.push(this.f.selectedOptionals.value.name)
      }
    }

    const orderedItem : OrderItem = {
      name: this.product.name,
      quantity: this.orderedQuantity,
      mandatory: accompaniment,
      optionals: sauces,
      price: this.product.price,
      image: this.product.imageBg,
      ref: this.product.ref
    }

    //We add order in in the orderCart
    this.addOrderService.setOrderItem(orderedItem);

    //we close the modal
    this.closeModal(this.product);
  }


}
