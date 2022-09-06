import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AddProductCartComponent } from '../add-product-cart/add-product-cart.component';
import { DialogService } from 'primeng/dynamicdialog';

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
    const productRef = this.dialogService.open(AddProductCartComponent, {
      data: {
        product: this.product
      },
      showHeader: false 
    });
  }

}
