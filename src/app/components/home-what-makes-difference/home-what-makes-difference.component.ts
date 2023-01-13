import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-what-makes-difference',
  templateUrl: './home-what-makes-difference.component.html',
  styleUrls: ['./home-what-makes-difference.component.scss'],

})
export class HomeWhatMakesDifferenceComponent implements OnInit {

  reasons!: any[];

  constructor() { }

  ngOnInit(): void {
    this.initReason();

  }

  initReason(){
    this.reasons = [
      {
        image: "../../../assets/img/home/what-makes-difference/confetti.png",
        title: "Accueil Chaleureux",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/img/home/what-makes-difference/vegetable.png",
        title: "Ingredients Frais",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/img/home/what-makes-difference/local-business.png",
        title: "Produit Locaux",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      },
      {
        image: "../../../assets/img/home/what-makes-difference/smiley.png",
        title: "Satisfaction Client",
        text: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
      }
    ]
  }

}
