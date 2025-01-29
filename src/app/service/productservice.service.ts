import { Injectable } from '@angular/core';
import { Products } from '../Interface/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) {}


  productsDemo: Products[] =
    [
      {
        productId: 1,
        productName: 'Product 1',
        productDescription: 'Product 1 description',
        productPrice: 1000,
        productImage: "",
        productStock: 0
      },
      {
        productId: 2,
        productName: 'Product 2',
        productDescription: 'Product 2 description',
        productPrice: 2000,
        productImage: "",
        productStock: 0
      },
      {
        productId: 3,
        productName: 'Product 3',
        productDescription: 'Product 3 description',
        productPrice: 3000,
        productImage: "",
        productStock: 0
      },
      {
        productId: 4,
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

    private baseUrl = 'http://localhost:8080/login'; // Adjust as needed


  // Helper function to get token from localStorage
  private getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Helper function to set headers
  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': token ? token : '',
      'Content-Type': 'application/json'
    });
  }

  // Login User and store token
  login(userDetails: any): Observable<any> {
    return new Observable(observer => {
      this.http.post<any>(`${this.baseUrl}/loging`, userDetails).subscribe(response => {
        if (response.token) {
          localStorage.setItem('authToken', response.token); // Save token
        }
        observer.next(response);
        observer.complete();
      }, error => {
        observer.error(error);
      });
    });
  }

  // Logout User (remove token)
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Register User
  registerUser(userDetails: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/register`, userDetails);
  }

  // Remove User (requires token)
  removeUser(removeUser: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/remove`, removeUser, {
      headers: this.getHeaders()
    });
  }

  // Add Product (requires token)
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addproduct`, product, {
      headers: this.getHeaders()
    });
  }

  // Remove Product (requires token)
  removeProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/removeproduct`, product, {
      headers: this.getHeaders()
    });
  }    
}
