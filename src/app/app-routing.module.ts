import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'nav', component: NavbarComponent,
  },
  {
    path: 'shop', component: ShopComponent,
  },
  {
    path: 'add', component: AddproductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
