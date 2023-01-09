import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Autoplay} from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-chiefs',
  templateUrl: './chiefs.component.html',
  styleUrls: ['./chiefs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChiefsComponent implements OnInit {
  
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  
  chiefsList!: any[];
  constructor() { }



  ngOnInit(): void {
    this.initChiefs();
  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
    }
    else{
      this.swiper?.swiperRef.slidePrev(700);
    }
  }

  initChiefs(){
    this.chiefsList = [
      {
        image: "../../../assets/img/restaurant/chef-marie.jpeg",
        name: "Chef Marie"
      },
      {
        image: "../../../assets/img/restaurant/chef-moussa.webp",
        name: "Chef Moussa"
      },
      {
        image: "../../../assets/img/restaurant/chef-antoine.webp",
        name: "Chef Antoine"
      },
      {
        image: "../../../assets/img/restaurant/chef-abdel.jpeg",
        name: "Chef Abdel"
      }
    ]
  }

}
