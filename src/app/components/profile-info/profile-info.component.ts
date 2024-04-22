import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // NgCircleProgressModule
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent implements OnInit {
  progress: number = 58; // Default progress value
  clipPath: string = '';

  constructor() { }

  ngOnInit(): void {
    this.setProgress(this.progress);
  }

  setProgress(percent: number): void {
    const radius = percent * 0.01 * 50;
    this.clipPath = `circle(${radius}% at center)`;
  }

}
