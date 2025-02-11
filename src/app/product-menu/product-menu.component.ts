import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-menu',
  standalone: false,
  templateUrl: './product-menu.component.html',
  styleUrl: './product-menu.component.css'
})
export class ProductMenuComponent implements OnInit {

  productList:Product[] = [];
  constructor(private productService:ProductServiceService){

  }

  ngOnInit(): void {
      this.productList = this.productService.getAllProducts();
  }

 
}
