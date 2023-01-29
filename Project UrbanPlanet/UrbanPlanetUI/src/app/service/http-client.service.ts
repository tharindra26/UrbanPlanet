import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {

  }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/api/v1/user/getUsers');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/api/v1/user/saveUser', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/api/v1/user/' + id);
  }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/v1/product/getProducts');
  }

  addProduct(newProduct: Product) {
    return this.httpClient.post<Product>('http://localhost:8080/api/v1/product/saveProduct', newProduct);
  }

  deleteProduct(id) {
    return this.httpClient.delete<Product>('http://localhost:8080/api/v1/product/' + id);
  }

  updateProduct(updatedProduct: Product) {
    return this.httpClient.put<Product>('http://localhost:8080/api/v1/product/update', updatedProduct);
  }


}
