import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  activeItem: string | null = null;
  dropdownOpen: string | null = null;
  sidebarHidden: boolean = true;


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  
  ngOnInit(): void {
    this.activeItem = 'dashboard';
  }

  setActive(item: string) {
    this.activeItem = item;
  }



  toggleDropdown(item: string) {
    if (this.dropdownOpen === item) {
        this.dropdownOpen = null;
    } else {
        this.dropdownOpen = item;
    }
}
toggleSidebar() {
  this.sidebarHidden = !this.sidebarHidden;
}


onClick() {
      this.sidebarHidden = true;

}

}
