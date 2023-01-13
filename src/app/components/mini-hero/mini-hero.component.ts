import { Component, Input, OnInit } from '@angular/core';
import { MiniHero } from 'src/app/models/mini-hero';

@Component({
  selector: 'app-mini-hero',
  templateUrl: './mini-hero.component.html',
  styleUrls: ['./mini-hero.component.scss']
})
export class MiniHeroComponent implements OnInit {

  @Input() miniHero !: MiniHero ;

  constructor() { }

  ngOnInit(): void {

    console.log(this.miniHero)
  }

}

