import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API:string = "url";

  constructor(private Http:HttpClient) { }

  mostrarEmpleados(Buscador : any):Observable<any>{
    return this.Http.get(this.API+"?bs="+Buscador);
  }

}
