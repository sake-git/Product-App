import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-search',
  standalone: false,
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  key="";

  products:Product[]= [];

  constructor(private productService:ProductServiceService){}

  searchProduct(){   
    this.products = this.productService.filterProductsByName(this.key);
    this.key="";
  }

  searchByPrice(){
    this.products = this.productService.filterProductsByPrice(parseFloat(this.key));
    this.key="";
  }

}
