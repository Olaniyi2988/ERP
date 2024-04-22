import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-product-design',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent
  ],
  templateUrl: './product-design.component.html',
  styleUrl: './product-design.component.scss'
})
export class ProductDesignComponent {


  profiles = [
    { img: 'assets/profile-pic.avif', name: 'Ena', position: 'UI/UX Designer' },
    { img: 'assets/profile-pic.avif', name: 'Riman', position: 'UI/UX Designer' },
    { img: 'assets/profile-pic.avif', name: 'Sope', position: 'UI/UX Designer' },
  ];
}
