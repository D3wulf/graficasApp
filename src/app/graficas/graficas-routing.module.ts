import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { CirculoComponent } from './pages/circulo/circulo.component';
import { CirculoHttpComponent } from './pages/circulo-http/circulo-http.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'barra',
        component:BarrasComponent,    
      },{
        path:'barra-doble',
        component:BarrasDoblesComponent,   
      },{
        path:'circulo',
        component:CirculoComponent,
    
      },{
        path:'circulo-http',
        component:CirculoHttpComponent,    
      },
      {
        path:'**',
        redirectTo:'barra'    
      }

    ]


  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
