import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  movies: any[];

  constructor(private http:HttpClient) { 
    console.log("movielistservice instanitated...");
  }

  getVersion():string{
    return "1.0";
  }

  getMovies():any{
    return this.http.get('http://www.mocky.io/v2/5d8b5191350000e004d46ea1?mockey-delay=5000');
  }
}
