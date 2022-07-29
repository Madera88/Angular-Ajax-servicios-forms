import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../coches.model';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  @Output() IndiceCompra = new EventEmitter<number>();
  @Input() coches:Coche[];

  

  constructor() { }

  ngOnInit(): void {
  }

  comprar(indice:number){
    let respuesta=confirm("Confirme que desea comprar el vehiculo");
    if(respuesta){
      this.IndiceCompra.emit(indice);
    }
    

  }

}
