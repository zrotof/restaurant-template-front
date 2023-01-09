import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { OrderFormTypeOneComponent } from '../order-form-type-one/order-form-type-one.component';
import { OrderFormTypeTwoComponent } from '../order-form-type-two/order-form-type-two.component';
import { OrderFormTypeThreeComponent } from '../order-form-type-three/order-form-type-three.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [DialogService]
})
export class ProductDetailsComponent implements OnInit {

@Input() product : any | undefined ;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openProduct(){

    if(this.product.ref == 'fu_01'){
      const productRef = this.dialogService.open(OrderFormTypeOneComponent, {
        data: {
          product: this.product
        },
        showHeader: false 
      });

      return ;
    }

    if(this.product.ref == 'fu_02'){
      const productRef = this.dialogService.open(OrderFormTypeTwoComponent, {
        data: {
          product: this.product
        },
        showHeader: false 
      });

      return ;
    }

    if(this.product.ref == 'fu_03'){
      const productRef = this.dialogService.open(OrderFormTypeThreeComponent, {
        data: {
          product: this.product
        },
        showHeader: false 
      });

      return ;
    }
    
  }

}
