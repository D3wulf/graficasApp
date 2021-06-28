import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-circulo-http',
  templateUrl: './circulo-http.component.html',
  styles: [
  ]
})
export class CirculoHttpComponent implements OnInit {

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {

    //FORMA VALIDA DE HACERLO

    // this.graficasService.getDataCirculo().subscribe(data=>{

    //   console.log(data);
    //   //trasformamos los objetos en un array
    //   const labels = Object.keys (data);
    //   const values= Object.values(data);

    //   this.doughnutChartLabels=labels;
    //   this.doughnutChartData=values;
    // })

    this.graficasService.getProgramadores().subscribe(({labels,values})=>{

      this.doughnutChartLabels=labels;
      //vale tambien
      //this.doughnutChartData= values;
      this.doughnutChartData.push(values);
    })
  }

  public doughnutChartLabels: Label[] = [
    //'Visitas Nacionales', 'Registros', 'Pedidos','Devoluciones'
    

  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100,175],
    
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

  


}
