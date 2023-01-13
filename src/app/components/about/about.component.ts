import { Component, OnInit } from '@angular/core';
import { MiniHero } from 'src/app/models/mini-hero';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  miniHero !: MiniHero;

  constructor() { }

  ngOnInit(): void {
    this.initMiniHero();
  }

  initMiniHero(){
    this.miniHero = {
      title: "À propos",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "../../../assets/img/contact/header-bg.jpeg"
    }
  }

}
