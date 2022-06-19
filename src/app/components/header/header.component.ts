import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { AddOrderService } from 'src/app/services/add-order/add-order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private addOrderService: AddOrderService 
  ) { }

  ngOnInit(): void {


    this.initOrderOnLocalStorage();
  }


  initOrderOnLocalStorage(){
    this.addOrderService.initOrderLocalStorage();
  }

}
