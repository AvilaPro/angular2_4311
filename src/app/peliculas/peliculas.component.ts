import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  pelis: any = [];
  nroPaginaPeliculas = 1;
  images = "";
  constructor(private peli: MoviesService){}

  ngOnInit(): void {
      this.cargarPeliculas();
      this.images = this.peli.images;
  }

  cargarPeliculas(){
    this.peli.getPeliculasPopulares(this.nroPaginaPeliculas).subscribe((res) =>{
      this.pelis.push(...res.results);
      console.log(this.pelis);
    })
  }

}
