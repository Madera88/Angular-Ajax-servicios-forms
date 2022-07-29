import { Coche } from "./coches.model";

export class CochesService{

    coches:Coche[]=[
       new Coche("Renault","Clio",150000,6000),
       new Coche("Seat","Ibiza",110000,7500),
       new Coche("Seat","León",180000,5500),
       new Coche("Citroen","c3",90000,4000),
    ]

    agregarCoche(coche:Coche){
        this.coches.push(coche);
    }

    eliminarCoche(indice:number){
        this.coches.splice(indice,1);
    }

    
}