import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {Router} from "@angular/router";
import {HttpClientService} from "../../service/http-client.service";
import {CartService} from "../../service/cart.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduct.component.html',
  styleUrls: ['./shopproduct.component.scss']
})
export class ShopproductComponent implements OnInit {

  products: Array<Product>;
  productsRecieved: Array<Product>;
  public totalItem:number=0;
  public searchKey:string="";
  public searchTerm !: string;
  public filterCategory : any;


  constructor(private router: Router, private httpClientService: HttpClientService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().
    subscribe(res=>{
      this.totalItem=res.length;
    })

    this.httpClientService.getProducts().subscribe(
      response => {

        this.handleSuccessfulResponse(response);
      });


    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })


  }
  addtocart(item:any){
    const productwithRetrievedImageField = new Product();
    productwithRetrievedImageField.id = item.id;
    productwithRetrievedImageField.title = item.title;
    productwithRetrievedImageField.description = item.description;
    productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + item.image;
    productwithRetrievedImageField.category = item.category;
    productwithRetrievedImageField.price = item.price;
    productwithRetrievedImageField.gender = item.gender;
    productwithRetrievedImageField.image = item.image;
    this.cartService.addtoCart(productwithRetrievedImageField);
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {

      const productwithRetrievedImageField = new Product();
      productwithRetrievedImageField.id = product.id;
      productwithRetrievedImageField.title = product.title;
      productwithRetrievedImageField.description = product.description;
      productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.image;
      productwithRetrievedImageField.category = product.category;
      productwithRetrievedImageField.price = product.price;
      productwithRetrievedImageField.gender = product.gender;
      productwithRetrievedImageField.image = product.image;
      this.products.push(productwithRetrievedImageField);
    }
    this.filterCategory=this.products;
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  filter(category:string,gender:string){
    this.filterCategory = this.products
      .filter((a:any)=>{

        if( category==undefined || gender==undefined) {
          return a;
        }

        if(a.category == category || a.gender==gender ){
          return a;
        }
      })
  }
}



