import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  getMovies(){
      return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1098a78e87bfef63d9e38dd1af91a5fb');
  }
}
