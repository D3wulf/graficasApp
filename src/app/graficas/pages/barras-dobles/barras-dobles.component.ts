import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent implements OnInit {

  barChartLabels: Label[] = [
    '2019', '2020', '2021', '2022', '2023'
  ];

  barChartData: ChartDataSets[] = [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas Coches', backgroundColor: '#11F775' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ventas Motos' , backgroundColor: '#D40FB0' },
     { data: [10, 20, 30, 49, 56, 67, 90], label: 'Ventas Patines eléctricos', backgroundColor: '#EB791C' }
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  


  mantenimientoData: ChartDataSets[] = [
   { data: [ 200, 300,400,300, 125 ], label: 'Reparaciones', backgroundColor: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
