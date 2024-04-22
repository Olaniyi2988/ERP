import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  register: SignUp = new SignUp();
  constructor(private router: Router){}


  onRegister(){
    const localUser = localStorage.getItem('db');
    console.log('registration successful')
    if(localUser != null){
      const users = JSON.parse(localUser);
      users.push(this.register);
      localStorage.setItem('db', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.register)
      localStorage.setItem('db', JSON.stringify(users))
    }
    alert('Registration successful')
    this.router.navigateByUrl('/login');
  }

}


export class SignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }
}