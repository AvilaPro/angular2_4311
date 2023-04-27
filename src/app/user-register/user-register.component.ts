import { Component } from '@angular/core';
import { Usuario } from "../usuario";
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  username = ""
  email : string = ""
  phone: string = ""
  pass: string = ""
  person = new Usuario(this.username, this.email, this.phone, this.pass)

  constructor(private route: Router){

  }

  registrarUsuario(){
    if(this.username !== "" && this.email !== "" && this.phone !== "" && this.pass !== ""){
      this.person.usuario = this.username
      this.person.correo = this.email
      this.person.telefono = this.phone
      this.person.password = this.pass
    }
    console.log(this.person);
  }

  irAHome(){
    this.route.navigate(["home"]);
  }

  verInfo(a: any){
    console.log(a);
  }

  onSubmit(){
    console.log("formulario submiteado")
  }
}
