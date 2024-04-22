import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopProductService {

  constructor() { }


  initializeTopProduct(): {
    id: string;
    progress: number;
    name: string;
    color: string;
  } [] {
    return [
      { id: '01', name: 'Home Decore Range', progress: 46, color: 'green' },
      { id: '02', name: 'Disney Princess Dress', progress: 79, color: 'blue' },
      { id: '03', name: 'Bathroom Essentials', progress: 19, color: 'red' },
      { id: '04', name: 'Apple Smartwatch', progress: 70, color: 'orange' }
    ];
  }
}
