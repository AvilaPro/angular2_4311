import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-metodos-http',
  templateUrl: './metodos-http.component.html',
  styleUrls: ['./metodos-http.component.scss']
})
export class MetodosHttpComponent implements OnInit {
  respuestaDelGet:any;
  respuestaDelPost: any;
  respuestaDelPut: any;
  usuarios = [];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe((data) =>{
      console.log(data);
      this.respuestaDelGet = data;
      console.log(this.respuestaDelGet);
    });
    this.http.post<any>("https://reqres.in/api/posts", {title: 'Post de Ejemplo para Angular'}).subscribe(data =>{
      console.log(data);
      this.respuestaDelPost = data;
    });
    this.http.put<any>("https://jsonplaceholder.typicode.com/users/1", {
      title: 'Cambio al dato con id 1'
    }).subscribe(data =>{
      console.log(data);
      this.respuestaDelPut = data;
    });
    this.http.delete<any>("https://jsonplaceholder.typicode.com/posts/1").subscribe(data =>{
      console.log(data);
    })
  }

}
