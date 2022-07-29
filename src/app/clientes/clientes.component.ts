import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './peticiones.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

 public user:any;

  constructor(private peticionesService: PeticionesService) {}

  ngOnInit(): void {
    this.peticionesService.getUser().subscribe({
      next: (response) => {
        this.user=response.data;
      console.log(this.user)},
      error: (error) => {},

      complete: () => console.info('complete'),
    });
  }
}
