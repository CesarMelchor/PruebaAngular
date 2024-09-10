import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrl: './listar-empleados.component.css'
})
export class ListarEmpleadosComponent implements OnInit{
  empleados:any[]=[];

  constructor(private serviceE:EmpleadoService){}
  ngOnInit(): void {
    this.mostrarEmpleados("");
  }
  mostrarEmpleados(buscador:any):any{
    this.serviceE.mostrarEmpleados("o").subscribe(response=>{
      this.empleados = response
    })
  }

}
