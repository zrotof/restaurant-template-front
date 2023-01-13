import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  displayMenu: boolean = false;

  constructor(
    private addOrderService: AddOrderService 
  ) { }

  ngOnInit(): void {
    this.initOrderOnLocalStorage();
  }

  initOrderOnLocalStorage(){
    this.addOrderService.initOrderLocalStorage();
  }

  menuForSmallScreenHandler(value: boolean) {
    this.displayMenu = false;
  }

}
