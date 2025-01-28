import { Injectable } from '@angular/core';
import { Products } from '../Interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


  constructor() { 

  }

  productsDemo: Products[] =
    [
      {
        productId: '1',
        productName: 'Product 1',
        productDescription: 'Product 1 description',
        productPrice: 1000,
        productImage: "",
        productStock: 0
      },
      {
        productId: '2',
        productName: 'Product 2',
        productDescription: 'Product 2 description',
        productPrice: 2000,
        productImage: "",
        productStock: 0
      },
      {
        productId: '3',
        productName: 'Product 3',
        productDescription: 'Product 3 description',
        productPrice: 3000,
        productImage: "",
        productStock: 0
      },
      {
        productId: '4',
        productName: 'Product 4',
        productDescription: 'Product 4 description',
        productPrice: 4000,
        productImage: "",
        productStock: 0
      }
    ]

    getProducts(): Products[] {
      return this.productsDemo;
    }
}
