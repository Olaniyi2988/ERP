import { Component, OnInit } from '@angular/core';
import { SalesCardService } from '../../services/sales-card/sales-card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-card.component.html',
  styleUrl: './sales-card.component.scss'
})
export class SalesCardComponent implements OnInit {
  salesnos: string[];
  titles: string[];

  constructor(private SalesCardService: SalesCardService) {
    this.salesnos = [];
    this.titles = [];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const salesData = this.SalesCardService.initializeSalesCard();
    this.salesnos = [salesData.salesno1, salesData.salesno2, salesData.salesno3, salesData.salesno4];
    this.titles = [salesData.title1, salesData.title2, salesData.title3, salesData.title4];
  }
}
