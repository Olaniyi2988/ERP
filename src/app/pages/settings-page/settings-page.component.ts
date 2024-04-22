import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarSmallComponent } from '../../components/navbar-small/navbar-small.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarSmallComponent,
    SearchbarComponent,
    ProfileInfoComponent,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsComponent {

}
