import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/Product";
import {HttpClientService} from "../../service/http-client.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  action: string;
  products: Array<Product>;
  selectedProduct: Product;
  productsRecieved: Array<Product>;

  constructor(private httpClientService: HttpClientService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const id = params['id'];
        if (id) {
          this.selectedProduct = this.products.find(product => {
            return product.id === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {

      const productwithRetrievedImageField = new Product();
      productwithRetrievedImageField.id = product.id;
      productwithRetrievedImageField.title = product.title;
      productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.image;
      productwithRetrievedImageField.category = product.category;
      productwithRetrievedImageField.gender = product.gender;
      productwithRetrievedImageField.description = product.description;
      productwithRetrievedImageField.price = product.price;
      productwithRetrievedImageField.image=product.image;
      this.products.push(productwithRetrievedImageField);
    }
  }

  saveProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin-menubar','products'], { queryParams: { action: 'add' } });
  }

  viewProduct(id: number) {
    this.router.navigate(['admin-menubar','products'], { queryParams: { id, action: 'view' } });
  }

}
