import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    cname:null,
    caddress: null

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password,cname,caddress } = this.form;

    this.authService.register( email, password,cname,caddress).subscribe(
      data => {
        console.log(data);
      
        this.isSuccessful = true;
        
        this.isSignUpFailed = false;
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
