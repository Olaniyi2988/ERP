import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



@Component({
  selector: 'app-customer-fulfilment',
  standalone: true,
  imports: [
    RouterOutlet,
	  CommonModule,
  ],
  templateUrl: './customer-fulfilment.component.html',
  styleUrl: './customer-fulfilment.component.scss'
})
export class CustomerFulfilmentComponent {

  chartOptions = {
		animationEnabled: true,
		theme: false,
		axisX: {
			show: false,
			lable: false,

		},
		axisY: {
			show: false,
			lable: false,
		},
		toolTip: {
			shared: false
		},
		data: [{
      type: "line",
      name: "Minimum",
      showInLegend: false,
      // markerType: "circle",
      // markerSize: 8,
      // markerColor: "blue",
      dataPoints: [
          { x: 1, y: 28 },
          { x: 2, y: 29 },
          { x: 3, y: 31 },
          { x: 4, y: 33 },
          { x: 5, y: 35 },
      ]
  },
  {
      type: "line",
      name: "Maximum",
      showInLegend: false,
      // markerType: "circle",
      // markerSize: 8,
      // markerColor: "red",
      dataPoints: [
          { x: 1, y: 38 },
          { x: 2, y: 40 },
          { x: 3, y: 42 },
          { x: 4, y: 45 },
          { x: 5, y: 47 },
      ]
  }]


	}
	
}
