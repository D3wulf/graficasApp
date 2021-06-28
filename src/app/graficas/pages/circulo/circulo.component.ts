import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styles: [
  ]
})
export class CirculoComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Visitas Nacionales', 'Registros', 'Pedidos','Devoluciones'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,175],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  //cambio de color!
  public colors:Color[]=[
    {
      backgroundColor:[
        '#11F775',
        '#D4CD0F',
        '#EB791C',
        '#D40FB0',
        '#163FF5'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
