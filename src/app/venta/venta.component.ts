import { Component, OnInit } from '@angular/core';
import { Coche } from './coches.model';
import { CochesService } from './coches.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
// el OnInit carga el servicio en el array
  coches:Coche[]=[];



  constructor(public cocheService: CochesService) { }

  ngOnInit(): void {
    this.coches=this.cocheService.coches;
  }

  incluirlistato(coche:Coche){
    this.cocheService.agregarCoche(coche);
        
  }

  CompraCoche(indice:number){
    this.cocheService.eliminarCoche(indice);
  }

}
