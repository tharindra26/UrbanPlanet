import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {HttpClientService} from "../../service/http-client.service";


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  productDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.product.title);
  }

  deleteProduct() {
    this.httpClientService.deleteProduct(this.product.id).subscribe(
      (product) => {
        this.productDeletedEvent.emit();
        this.router.navigate(['admin-menubar', 'products']);
      }
    );
  }

  editProduct() {
    this.router.navigate(['admin-menubar', 'products'], { queryParams: { action: 'edit', id: this.product.id } });
  }
}
