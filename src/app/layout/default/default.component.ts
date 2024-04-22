import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../account/login/login.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
