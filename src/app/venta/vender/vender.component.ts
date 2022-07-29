import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coche } from '../coches.model';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  @Output() cocheVenta= new EventEmitter<Coche>();
  marca:string="";
  modelo: string="";
  precio:number=0;
  km:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  vender(){
    if( this.marca != "" && this.modelo != "" && this.precio>500){
    let venta= new Coche(this.marca,this.modelo,this.km,this.precio);
    this.cocheVenta.emit(venta);
   }

  }


}
