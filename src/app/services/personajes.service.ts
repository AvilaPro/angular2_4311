import { Injectable } from '@angular/core';

import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private  http: HttpClient) { }

  private URL = "https://rickandmortyapi.com/api/character";

  obtenerPersonajes(): Observable<any>{
    return this.http.get(this.URL);
  }
}
