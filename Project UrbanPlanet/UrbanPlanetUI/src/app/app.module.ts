import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/admin-menubar/menubar.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { AdduserComponent } from './components/adduser/adduser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import {ProductsComponent} from "./components/products/products.component";
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { ShopproductComponent } from './components/shopproduct/shopproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { UserMenubarComponent } from './components/user-menubar/user-menubar.component';




@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ProductsComponent,
    AddproductComponent,
    ViewproductComponent,
    ShopproductComponent,
    CartComponent,
    FilterPipe,
    LoginComponent,
    UserMenubarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
