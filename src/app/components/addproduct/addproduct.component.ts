import { Component } from '@angular/core';
import { Products } from '../../Interface/products';
import { ProductserviceService } from '../../service/productservice.service';
import { Router } from '@angular/router';  // Optionally use Router for redirection

@Component({
  selector: 'app-addproduct',
  standalone: false,
  
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(
    private productservice: ProductserviceService,
    private router: Router // Optionally inject Router for navigation
  ) {}

  newProduct: Products = {
    productId: 0,
    productName: '',
    productDescription: '',
    productPrice: 0,
    productImage: '',
    productStock: 0,
  };

  products: Products[] = []; // Array to store added products

  // Updated onSubmit method that calls the service to add the product
  onSubmit() {
    if (this.newProduct.productName.trim() && this.newProduct.productPrice > 0) {
      this.productservice.addProduct(this.newProduct).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          this.products.push(response);  // Add the product to the products array after it's added
          this.resetForm();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      console.error('Invalid product details!');
    }
  }

  resetForm() {
    this.newProduct = {
      productId: 0,
      productName: '',
      productDescription: '',
      productPrice: 0,
      productImage: '',
      productStock: 0,
    };
  }
}
