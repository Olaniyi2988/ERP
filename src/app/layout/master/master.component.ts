import { Component, ViewChild, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent, SearchbarComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  sidebarHidden: boolean = true;

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }


  


  

}




