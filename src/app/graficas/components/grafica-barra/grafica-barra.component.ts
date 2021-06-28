import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

    //Metemos en input los datos que queremos que vengan de fuera(padre)
  @Input() horizontal:boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [
    //'2019', '2020', '2021', '2022', '2023'
  ];

  @Input() barChartData: ChartDataSets[] = [
     //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas Coches', backgroundColor: '#11F775' },
     //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Ventas Motos' , backgroundColor: '#D40FB0' },
     //{ data: [10, 20, 30, 49, 56, 67, 90], label: 'Ventas Patines eléctricos', backgroundColor: '#EB791C' }
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  


  @Input() mantenimientoData: ChartDataSets[] = [
    //{ data: [ 200, 300,400,300, 100 ], label: 'Reparaciones', backgroundColor: 'blue' },
  ];
  
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

  ngOnInit(){
    if(this.horizontal){

      this.barChartType="horizontalBar";
    }
  }

}
