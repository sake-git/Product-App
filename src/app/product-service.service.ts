import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  inventory:Product[] = [{name:'RAM',productId:'100',price:105.80},
    {name:'Mouse',productId:'101',price:22.50},
    {name:'Keyboard',productId:'102',price:99.99},
    {name:'Monitor',productId:'103',price:169.99},
    {name:'Hard Drive',productId:'104',price:299.99},
    {name:'Adapter',productId:'105',price:58.00},
    {name:'Web Cam',productId:'106',price:80.00},
    {name:'Speaker',productId:'107',price:39.99},
  ];

  constructor() { }

  getAllProducts():Product[]{
    return this.inventory;
  }

  filterProductsByName(name:string ){

    return this.inventory.filter( data => data.name.toLowerCase().match(name.toLowerCase()));
  }

  filterProductsByPrice(price:number ){
    return this.inventory.filter( data => data.price <= price );
  }
}
