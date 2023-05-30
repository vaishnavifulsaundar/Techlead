import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [AuthService, Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });


  
  it('should display error message with empty fields', () => {
    component.username = '';
    component.password = '';
    component.login();
    expect(component.errorMessage).toEqual('Please enter username and password');
  });

  it('should display error message with invalid username format', () => {
    component.username = 'john123';
    component.password = 'password123';
    component.login();
    expect(component.errorMessage).toEqual('Invalid username format');
  });
  
});
