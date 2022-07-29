import { HttpClient,HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{

    public url: string;

    constructor(public HttpService: HttpClient){
        this.url="https://reqres.in/";
    }

    getUser():Observable<any>{
        // le haces una peticion a la Api Rest
        return this.HttpService.get(this.url+'api/users?page=2');
    }
}