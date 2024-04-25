import { Component, ViewChild, HostListener, ElementRef} from '@angular/core';
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


  // @ViewChild('sidebar') sidebar!: ElementRef;

  // constructor(private elementRef: ElementRef) {}

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }


  
  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   // Check if the click occurred outside the sidebar
  //   if (!this.sidebar.nativeElement.contains(event.target)) {
  //     this.sidebarHidden = true;
  //   }
  // }
  
  

}




