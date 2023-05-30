import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage(errorMessage: any) {
    throw new Error('Method not implemented.');
  }

  username: string ="";
  password: string ="";
  
  constructor(public fbobj : FormBuilder,private authservice:AuthService,private  router :Router)
  {
  }

  MarvellousForm = this.fbobj.group(
    {
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Password: new FormControl('', [Validators.required]),
    
    }
  );

  login(): void {
    const isAuthenticated = this.authservice.login(this.username, this.password);
    if (isAuthenticated) {
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
      
    } else {
      console.log('Login failed');
    }
  }

}
