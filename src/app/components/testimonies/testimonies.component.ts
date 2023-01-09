import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Autoplay} from "swiper";

SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimoniesComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  testimoniesList!: any[];

  constructor() { }

  ngOnInit(): void {
    this.initTestimonies();
  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
    }
    else{
      this.swiper?.swiperRef.slidePrev(700);
    }
  }

  initTestimonies(){
    this.testimoniesList = [
      {
        image: "../../../assets/img/testimonies/adam.jpeg",
        text: "Nous avons réservé une table pour 6, car une partie de notre voyage à regarder Angleterre jouer au rugby. Un hôtel très propre restaurant avec un bon service et nourriture savoureuse. Le repas était assez cher, mais cela en valait la peine. Le boeuf était particulièrement splendide et le veau aussi bien.",
        name: "Adam Sandler"
      },
      {
        image: "../../../assets/img/testimonies/thomas.jpeg",
        text: "Très bien servi et super serveur et super bon a venir en famille ou autre génial merci a vous l'équipe.",
        name: "Thomas"
      },
      {
        image: "../../../assets/img/testimonies/juliette.jpeg",
        text: "Les assiettes sont délicieuses, travaillées et avec des mélanges de saveurs totalement réussis. Le tout dans une ambiance chaleureuse et avec un service sympathique et irréprochable !",
        name: "Juliette"
      },
      {
        image: "../../../assets/img/testimonies/jean.jpeg",
        text: "Les plats sont délicieux. L’ambiance y est fort sympathique. Il h a un moment d’attente entre les plats, puisqu’en cuisine, ils préparent le même plat pour tous les clients. Ils sortent tout à la fois. C’est un concept assez original. Il faut prendre son temps et ne pas être sensible au bruit. A refaire absolument.",
        name: "Jean"
      }
    ]
  }

}
