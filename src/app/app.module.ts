import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';

//primeng modules
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GMapModule } from 'primeng/gmap';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { ChiefsComponent } from './components/chiefs/chiefs.component';
import { OrderFormTypeOneComponent } from './components/order-form-type-one/order-form-type-one.component';
import { OrderFormTypeTwoComponent } from './components/order-form-type-two/order-form-type-two.component';
import { OrderFormTypeThreeComponent } from './components/order-form-type-three/order-form-type-three.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    OrderItemComponent,
    FooterComponent,
    CartPageComponent,
    HomeAboutComponent,
    TestimoniesComponent,
    ChiefsComponent,
    OrderFormTypeOneComponent,
    OrderFormTypeTwoComponent,
    OrderFormTypeThreeComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SwiperModule,
    SidebarModule,
    ButtonModule,
    GMapModule,
    DynamicDialogModule,
    RadioButtonModule,
    CheckboxModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
