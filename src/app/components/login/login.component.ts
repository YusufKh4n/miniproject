import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder) {}  

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
    })
  }

  getFormControls(){
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    console.log("Successfully form Submitted");
  }

}
