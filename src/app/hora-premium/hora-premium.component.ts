import { Component, OnInit } from '@angular/core';

import { InfoService } from "../services/info.service";
import { PersonajesService } from "../services/personajes.service";

@Component({
  selector: 'app-hora-premium',
  templateUrl: './hora-premium.component.html',
  styleUrls: ['./hora-premium.component.scss']
})
export class HoraPremiumComponent implements OnInit {

  personajes: any = {}

  pagina = 1;

  constructor(private inf: InfoService, private pers: PersonajesService){}

  ngOnInit(){
    this.pers.obtenerPersonajes().subscribe(data =>{
      this.personajes = data.results;
      this.inf.log(this.personajes);
      this.inf.table(this.personajes);
    })
  }

  pasarPagina(){
    this.pagina++;
  }

}
