import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss'
})
export class SponsorComponent {

  profiles = [
    { img: 'assets/profile.jpg', name: 'John Doe', position: 'Developer' },
  ];
}
