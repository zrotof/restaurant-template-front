import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedPlats: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.initRecommenedPlats();
  }

  initRecommenedPlats(){
    this.productService.getRecommandedPlats()
    .subscribe (resp => {
      this.recommendedPlats = resp
    });
  }
}
