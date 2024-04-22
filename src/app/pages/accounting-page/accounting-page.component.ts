import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { NavbarSmallComponent } from '../../components/navbar-small/navbar-small.component';
import { TodaySalesComponent } from '../../components/today-sales/today-sales.component';
import { CustomerFulfilmentComponent } from '../../components/customer-fulfilment/customer-fulfilment.component';
import { TotalRevenueComponent } from '../../components/total-revenue/total-revenue.component';
import { TopPtoductsComponent } from '../../components/top-ptoducts/top-ptoducts.component';
import { EarningsComponent } from '../../components/earnings/earnings.component';
import { LevelsComponent } from '../../components/levels/levels.component';

@Component({
  selector: 'app-accounting-page',
  standalone: true,
  imports: [
    CommonModule, 
    SearchbarComponent, 
    NavbarSmallComponent, 
    TodaySalesComponent, 
    CustomerFulfilmentComponent,
    TotalRevenueComponent,
    TopPtoductsComponent,
    EarningsComponent,
    LevelsComponent

  ],
  templateUrl: './accounting-page.component.html',
  styleUrl: './accounting-page.component.scss'
})
export class AccountingComponent {

}
