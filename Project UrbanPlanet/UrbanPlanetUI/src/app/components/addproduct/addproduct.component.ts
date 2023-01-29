import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";
import {HttpClientService} from "../../service/http-client.service";



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  @Input()
  product:Product;

  public selectedFile;
  imgURL: any;

  @Output()
  productAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

}

  saveProduct() {
    if (this.product.id == null) {

      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/api/v1/product/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addProduct(this.product).subscribe(
                (product) => {
                  this.productAddedEvent.emit();
                  this.router.navigate(['admin-menubar', 'products']);
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateProduct(this.product).subscribe(
        (product) => {
          this.productAddedEvent.emit();
          this.router.navigate(['admin-menubar', 'products']);
        }
      );
    }

  }

}

