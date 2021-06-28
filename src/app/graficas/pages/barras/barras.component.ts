import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas Coches', backgroundColor: '#11F775' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ventas Motos' , backgroundColor: '#D40FB0' },
    { data: [10, 20, 30, 49, 56, 67, 90], label: 'Ventas Patines eléctricos', backgroundColor: '#EB791C' }
  ];


  constructor() { }

  
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];

      //locuron! randomizamos la segunda barra

      this.barChartData[1].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100), ];

        this.barChartData[2].data = [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          (Math.random() * 100),
          Math.round(Math.random() * 100),
          (Math.random() * 100),
          Math.round(Math.random() * 100), ];

      
  }

}
