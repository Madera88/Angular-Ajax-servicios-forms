import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-escribir',
  templateUrl: './escribir.component.html',
  styleUrls: ['./escribir.component.css']
})
export class EscribirComponent implements OnInit {

  @Output() postear= new EventEmitter<Post>()
  user:string="";
  mensaje:string="";

  constructor() { }

  ngOnInit(): void {
  }
  comentar(){
    let post= new Post(this.user,this.mensaje);
    this.postear.emit(post);
  }

}
