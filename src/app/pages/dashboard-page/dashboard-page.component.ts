import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { SalesCardComponent } from '../../components/sales-card/sales-card.component';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';
import { TodaySalesComponent } from '../../components/today-sales/today-sales.component';
import { TopPtoductsComponent } from '../../components/top-ptoducts/top-ptoducts.component';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, 
    NavbarComponent, 
    SearchbarComponent, 
    SalesCardComponent, 
    TransactionCardComponent,
    TodaySalesComponent,
    TopPtoductsComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardComponent {

}
