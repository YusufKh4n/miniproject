import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShopcardComponent } from './components/shopcard/shopcard.component';
import { DialogviewComponent } from './components/dialogview/dialogview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DialogviewerComponent } from './components/dialogviewer/dialogviewer.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ShopComponent,
    ShopcardComponent,
    DialogviewComponent,
    DialogviewerComponent,
    AddproductComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
