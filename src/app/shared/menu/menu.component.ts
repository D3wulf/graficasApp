import { Component} from '@angular/core';

interface MenuItem{

  ruta:string;
  texto:string;

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent{

  //Menu del sidebar
  menu:MenuItem[]=[

  {
    ruta:'/graficas/barra',
    texto:'Barras'
  },{
    ruta:'/graficas/barra-doble',
    texto:'Barras-dobles'
  },{
    ruta:'/graficas/circulo',
    texto:'Circulo'
  },{
    ruta:'/graficas/circulo-http',
    texto:'Circulo Http'
  }];


  constructor() { }

  

}
