import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent  {

  @Input() posts:Post[];
  


}
