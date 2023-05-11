import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  usuario = {
    id: 1,
    nombre: "Eduardo",
    email: "ejeyd@example.com",
    senha: "123456"
  }
}
