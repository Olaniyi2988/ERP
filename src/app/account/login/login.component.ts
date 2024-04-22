import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { SignUp } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: signIn = new signIn();

  constructor(private router: Router){}

  onLogin() {
    const localUser = localStorage.getItem('db');

    if(localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find(
        (user:SignUp) => user.email == this.login.email && user.password == this.login.password
      );
      if (isUserPresent != undefined) {
        alert('User found....');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('admin/dashboard');
      } else {
        alert('No User Found...')
      }
    }
  }

}


export class signIn{
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

}