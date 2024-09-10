import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';

const routes: Routes = [

  {path : '',pathMatch:'full',redirectTo : '/empleado'},
  {path: 'empleado',component:ListarEmpleadosComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
