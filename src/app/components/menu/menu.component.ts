import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  plats: Product[] = [];


  constructor(private productService: ProductsService) { }

  menus : any;



  ngOnInit(): void {
    this.initMenus();
    this.setActiveMenuAndGetData(0, 'meals');
  }

  initMenus(){
    this.menus =  [
      {
        label: "Viandes",
        link: "meals"
      },
      {
        label: "Poissons",
        link: "fishes"

      },
      {
        label: "Légumes",
        link: "vegetables"

      },
      {
        label: "Accompagnements",
        link: "accompaniments"
      },
      {
        label: "Petits dej",
        link: "breakfasts"
      },
      {
        label: "Boissons",
        link: "drinks"
      },
      {
        label: "Dessert",
        link: "deserts"
      }
  
    ]  
  }

  setActiveMenuAndGetData(activeMenuNumber: number, activeMenuLink: string){
    this.setActiveMenu(activeMenuNumber);
    this.getFoodsOrDrinks(activeMenuLink);
  }

  setActiveMenu(param: number){

    let menusArray = <NodeListOf<HTMLElement>>document.querySelectorAll(".menu-headers button");

    if(menusArray[param]?.classList.contains('active-menu')){
      return;
    }

    menusArray.forEach(element => {
        element.classList.remove("active-menu");
    });

    menusArray[param]?.classList.add('active-menu');
  }

  getFoodsOrDrinks(param: string){

    this.productService.getProducts(param)
      .subscribe(res =>{
        this.plats = res;
      });
      
  }

  

}

