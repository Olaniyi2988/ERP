import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent
  ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {
  titles = ['Management Lead', 'Project Manager'];

  profiles = [
    { img: 'assets/profile-pic.avif', name: 'Engr Damilola Awe', position: 'Project Manager' },
    { img: 'assets/profile.jpg', name: 'AB', position: 'Management Lead' },
    { img: 'assets/profile.jpg', name: 'AB', position: 'Project Manager' },
    { img: 'assets/profile.jpg', name: 'AB', position: 'Project Manager' },
    { img: 'assets/profile.jpg', name: 'AB', position: 'Management Lead' },
    { img: 'assets/profile.jpg', name: 'AB', position: 'Project Manager' },

  ];



  managementLeadProfiles = this.profiles.filter(profile => profile.position === 'Management Lead');
  projectManagerProfiles = this.profiles.filter(profile => profile.position === 'Project Manager');

  

}