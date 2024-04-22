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

  // @ViewChild('sidebar') sidebar!: SidebarComponent;
  // sidebarHidden: boolean = false;

  // toggleSidebar() {
  //   this.sidebarHidden = !this.sidebarHidden;
  //   this.sidebar.toggleSidebar(this.sidebarHidden);

  //    if (this.sidebarHidden) {
  //     document.querySelector('.sidebar-container')?.classList.add('hidden');
  //     document.querySelector('.main-container')?.classList.add('expanded');
  //   } else {
  //     document.querySelector('.sidebar-container')?.classList.remove('hidden');
  //     document.querySelector('.main-container')?.classList.remove('expanded');
  //   }
  // }




  sidebarHidden: boolean = true;

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
    
  //   }
  
    handleButtonClick() {
      // Hide the sidebar when a button within the sidebar is clicked
      this.sidebarHidden = true;
    }
  

}




