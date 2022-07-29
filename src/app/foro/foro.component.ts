import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.services';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  posts:Post[]=[];

  constructor(public postsService: PostService ) {}

  ngOnInit(): void {
    this.posts=this.postsService.posts;
  }

  Enviarpost(post:Post){
    this.postsService.agregarPost(post);
  }

}
