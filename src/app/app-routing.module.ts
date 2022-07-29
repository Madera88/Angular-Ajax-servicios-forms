import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { ForoComponent } from './foro/foro.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {path:"", component: VentaComponent},
  {path:"foro", component: ForoComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"clientes", component: ClientesComponent},
  {path:"**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
