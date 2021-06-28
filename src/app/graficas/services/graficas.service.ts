import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

//peticiones http

  constructor(private httpClient:HttpClient) { }

  getDataCirculo (){

    return this.httpClient.get('http://localhost:3000/grafica');


  }

  getProgramadores(){

    return this.getDataCirculo().pipe(
      delay(1533),
      //map coge la info y la transforma en lo que queramos
      map(data=>{
        const labels= Object.keys(data);
        const values= Object.values(data);
        return {labels, values};

      })
    );
  }
}
