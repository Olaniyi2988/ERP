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
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeItem = 'dashboard';

    
  }

  setActive(item: string) {
    this.activeItem = item;
  }


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  toggleSidebar(hidden: boolean) {
    if (hidden) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    }
  }

}
