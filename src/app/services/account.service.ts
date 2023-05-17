import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

respuestaConexion: any;

  constructor(private http: HttpClient, private router: Router) {}

  intentoFakeLogin(){
    //simular un inicio de sesion fallido
    this.respuestaConexion = this.http.post("https://reqres.in/api/login", {
      "email": "peter@klaven"
    }).subscribe((data) =>{
      console.log(data);
    })
  }

  logOut(){
    this.router.navigate(['/home']);
  }


}
