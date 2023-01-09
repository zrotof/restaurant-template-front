import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy{

  plats: Product[] = [];
  menus : any;
  routeSubscription!: Subscription;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  async ngOnInit() {
    await this.initMenus();

    this.routeSubscription = this.activatedRoute.queryParams.subscribe(
      param =>{
        if(!param.menu){
          this.setQueryParamsOnMenusItemsNavigation('viandes');
          this.setActiveMenu(0);
          this.getFoodsOrDrinks('viandes');
        }else{
          const index = this.menus.findIndex((menu: { link: string; }) => menu.link === param.menu);
          if(index == -1){
            this.setQueryParamsOnMenusItemsNavigation('viandes');
            this.setActiveMenu(0);
            this.getFoodsOrDrinks('viandes');
          }
          else{
            this.setQueryParamsOnMenusItemsNavigation(param.menu);
            this.setActiveMenu(index);
            this.getFoodsOrDrinks(param.menu);
          }
        }
      }
    )

  }

  initMenus(){
    this.menus =  [
      {
        label: "Viandes",
        link: "viandes",
        count: 4
      },
      {
        label: "Poissons",
        link: "poissons",
        count: 2

      },
      {
        label: "Salades",
        link: "salades",
        count: 4

      },
      {
        label: "Accompagnements",
        link: "accompagnements",
        count: 3
      },
      {
        label: "Petits dej",
        link: "petit-dej",
        count: 3
      },
      {
        label: "Boissons",
        link: "boissons",
        count: 2
      },
      {
        label: "Desserts",
        link: "desserts",
        count: 4
      }
  
    ]  
  }

  setActiveMenu(param: number){

    let menusArray = <NodeListOf<HTMLElement>>document.querySelectorAll(".menu-headers button");

    menusArray.forEach(element => {
        element.classList.remove("active-menu");
    });

    menusArray[param]?.classList.add('active-menu');
  }

  setQueryParamsOnMenusItemsNavigation( param: string = 'viandes'){

    const queryParams = {
      menu : param
    }

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams, 
        queryParamsHandling: 'merge'
      }
    )
  }

  getFoodsOrDrinks(param: string){

    this.productService.getProducts(param)
      .subscribe(res =>{
        this.plats = res;
      });
      
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
  

}

