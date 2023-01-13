import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent implements OnInit {

  sideMenuDisplayed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

   //Handling click on burger menu
   onBurgerMenu(){
    this.sideMenuDisplayed = !this.sideMenuDisplayed;
  }

  onmenuItemClicked(){
    this.sideMenuDisplayed = false;
  }

}
