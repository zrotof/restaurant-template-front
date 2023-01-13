import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { OrderItem } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-order-form-type-one',
  templateUrl: './order-form-type-one.component.html',
  styleUrls: ['./order-form-type-one.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderFormTypeOneComponent implements OnInit {

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
        selectedOptionals: new FormArray([]),
      });

    }

  ngOnInit(): void {
    this.product = this.productDialogConfig.data.product; 
    this.totalPrice = this.product.price;
    this.saucesList = this.product.optionals;
    this.patchValues();
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

  patchValues(){

    if(!this.product.optionals){
      return ;
    }
    const formArray = this.orderedProductForm.get('selectedOptionals') as FormArray;
  
    this.saucesList.forEach(sauce => {
      // generate control Group for each option and push to formArray
      formArray.push(new FormGroup({
        name: new FormControl(sauce.name),
        checked: new FormControl(sauce.checked)
      }))
    })
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
    let sauces: string[]=[];

    if(this.product?.mandatories.length > 0){
      accompaniment = this.f.selectedMandatory.value;
    }

    if(this.product?.optionals.length > 0){
    let sauceObjectArray = this.f.selectedOptionals.value.filter(
        (item: any) => (item.checked == true) 
    )

    console.log(sauceObjectArray)
    //Order sauces to alphabetic rules
    sauceObjectArray.sort();

    console.log(sauceObjectArray)

    sauceObjectArray.forEach((item:any) =>{
      sauces.push(item.name)
    })
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
