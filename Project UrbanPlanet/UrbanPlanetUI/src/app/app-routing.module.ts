import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {ProductsComponent} from "./components/products/products.component";
import {ShopproductComponent} from "./components/shopproduct/shopproduct.component";
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {MenubarComponent} from "./components/admin-menubar/menubar.component";
import {UserMenubarComponent} from "./components/user-menubar/user-menubar.component";
import {ViewproductComponent} from "./components/viewproduct/viewproduct.component";
import {AddproductComponent} from "./components/addproduct/addproduct.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-menubar',
    component:MenubarComponent,
    children:[
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path:'products',
        component:ProductsComponent,
        children:[
          {
            path:'viewproduct',
            component:ViewproductComponent,
          },
          {
            path:'addproduct',
            component:AddproductComponent,
          }
        ]
      },
      {
        path:'users',
        component:UsersComponent,
        children:[
          {
            path:'viewproduct',
            component:ViewproductComponent,
          },
          {
            path:'addproduct',
            component:AddproductComponent,
          }
        ]

      }
    ]
  },
  {
    path: 'user-menubar',
    component: UserMenubarComponent,
    children: [
      {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
      },

      {
        path: 'shop',
        component: ShopproductComponent,
      },
      {
        path:'cart',
        component: CartComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


