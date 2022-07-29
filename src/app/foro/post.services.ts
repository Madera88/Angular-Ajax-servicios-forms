
import { Post } from "./post.model";

export class PostService{
    posts:Post[]=[
        new Post("Admin"," Bienvenido, este mensaje proviene de Post.Sevices.ts"),
        new Post("Admin","Web para aprender a usar servicios" )
    ]

    agregarPost(post:Post){
        this.posts.push(post);
    }
}