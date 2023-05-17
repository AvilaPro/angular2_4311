import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface respuestaDeApi{
  page: number,
  results: any[],
  total_pages: number,
  total_results: number
}

@Injectable({
  providedIn: 'root'
})


export class MoviesService {
  apiKey = "eacdfae2a13f84d1c8f9d21073079472";
  url = "https://api.themoviedb.org/3/movie/popular";
  images = "http://image.tmdb.org/t/p";

  constructor(private http: HttpClient) { }

  getPeliculasPopulares(page: number): Observable<respuestaDeApi>{
    return this.http.get<respuestaDeApi>(this.url + "?api_key=" + this.apiKey + "&page=" + page);
  }
}
