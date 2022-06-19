import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component : HomeComponent},
  {path: 'menus', component : MenuComponent},
  {path: 'a-propos', component : AboutComponent},
  {path: 'contact', component : ContactComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
