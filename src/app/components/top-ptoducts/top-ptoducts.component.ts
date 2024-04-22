import { Component, OnInit } from '@angular/core';
import { TopProductService } from '../../services/top-product/top-product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-ptoducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-ptoducts.component.html',
  styleUrl: './top-ptoducts.component.scss'
})
export class TopPtoductsComponent implements OnInit {


  tableData: any[];

  constructor(private topProductsService: TopProductService) {
    this.tableData = [];
   }

  ngOnInit(): void {
    this.tableData = this.topProductsService.initializeTopProduct();
  }
}
