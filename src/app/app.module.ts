import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { ComprarComponent } from './venta/comprar/comprar.component';
import { VenderComponent } from './venta/vender/vender.component';
import { CochesService } from './venta/coches.service';
import { FormsModule } from '@angular/forms';
import { ForoComponent } from './foro/foro.component';
import { MensajesComponent } from './foro/mensajes/mensajes.component';
import { ErrorComponent } from './error/error.component';
import { EscribirComponent } from './foro/escribir/escribir.component';
import { PostService } from './foro/post.services';
import { ContactoComponent } from './contacto/contacto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PeticionesService } from './clientes/peticiones.service';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    ComprarComponent,
    VenderComponent,
    ForoComponent,
    MensajesComponent,
    EscribirComponent,
    ErrorComponent,
    ContactoComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CochesService,PostService,PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
