import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-delivery',
  templateUrl: './home-delivery.component.html',
  styleUrls: ['./home-delivery.component.scss']
})
export class HomeDeliveryComponent implements OnInit {

  foodApps!: any[];

  constructor() { }

  ngOnInit(): void {
    this.initFoodApps();
  }

  initFoodApps(){
    this.foodApps = [
      {
        image: "../../../assets/img/home/food-apps/uber-eat.png",
        alt: "uber eat",
        link: "https://www.ubereats.com/fr",
        name: "Uber Eat"
      },
      {
        image: "../../../assets/img/home/food-apps/just-eat.png",
        alt: "just eat logo",
        link: "https://www.just-eat.fr/",
        name: "Just Eat"
      },
      {
        image: "../../../assets/img/home/food-apps/deliveroo.gif",
        alt: "deliveroo logo",
        link: "https://deliveroo.fr/fr/",
        name: "Deliveroo"
      }
    ]
  }

}
