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
  reasons!: any[];
  foodApps!: any[];
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.initReason();
    this.initFoodApps();
    this.initRecommenedPlats();
  }

  initRecommenedPlats(){
    this.productService.getRecommandedPlats()
    .subscribe (resp => {
      this.recommendedPlats = resp;
    });
  }

  initReason(){
    this.reasons = [
      {
        image: "../../../assets/home/confetti.png",
        title: "Accueil Chaleureux",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/home/vegetable.png",
        title: "Ingredients Frais",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/home/local-business.png",
        title: "Produit Locaux",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/home/smiley.png",
        title: "Satisfaction Client",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      }
    ]
  }

  initFoodApps(){
    this.foodApps = [
      {
        image: "../../../assets/img/food-apps/uber-eat.png",
        alt: "uber eat",
        link: "https://www.ubereats.com/fr",
        name: "Uber Eat"
      },
      {
        image: "../../../assets/img/food-apps/just-eat.png",
        alt: "just eat logo",
        link: "https://www.just-eat.fr/",
        name: "Just Eat"
      },
      {
        image: "../../../assets/img/food-apps/deliveroo.gif",
        alt: "deliveroo logo",
        link: "https://deliveroo.fr/fr/",
        name: "Deliveroo"
      }
    ]
  }
}
