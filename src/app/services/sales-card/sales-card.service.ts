import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesCardService {

  constructor() { }

   initializeSalesCard(): {
    salesno1: string;
    salesno2: string;
    salesno3: string;
    salesno4: string;

    title1: string;
    title2: string;
    title3: string;
    title4: string;
  }{
    return {
      salesno1: '30,000',
      salesno2: '40,000',
      salesno3: '50,000',
      salesno4: '50,000',

      title1: 'Sales',
      title2: 'Inventory',
      title3: 'Procurement',
      title4: 'Finance',
    }
  }
}


