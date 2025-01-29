import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service'; // Import your service
import { Router } from '@angular/router'; // Optionally use Router for redirection

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private productservice: ProductserviceService, // Inject the service
    private router: Router // Optionally inject Router for navigation
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      DOB: this.fb.group({
        day: ['', []],
        date: ['', []],
        month: ['', []],
      })
    });
  }

  getFormControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // Send login data using the login method in ProductserviceService
    const userDetails = this.loginForm.value;

    this.productservice.login(userDetails).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Optionally save the token or perform any other necessary actions after login
        localStorage.setItem('authToken', response.token); // Assuming the response contains a token
        // Redirect user to the dashboard or another page after successful login
        this.router.navigate(['/dashboard']); // Redirect to dashboard or home page
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login error (e.g., show an error message)
      }
    );
  }
}
