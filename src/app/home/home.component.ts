import { Component } from '@angular/core';

//Servicios
import { ExampleService } from "../services/example.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private ejemplo: ExampleService){
    this.usuarioLogueado = this.ejemplo
  }

productos = [
    {
      nombre: 'Manzanas',
      precio: 2.99,
      imagen: 'https://img.freepik.com/foto-gratis/manzanas-rojas-frescas-suaves-jugosas-enteras-perfectas-escritorio-blanco_179666-271.jpg?w=1380&t=st=1683661291~exp=1683661891~hmac=18bc5ca22fbf14736d461c9a1cd9a133f2bb87edabfc299b840941122b16e9b1',
      descripcion: 'Manzanas frescas y deliciosas, cultivadas localmente.',
    },
    {
      nombre: 'Leche',
      precio: 1.99,
      imagen: 'https://images.unsplash.com/photo-1549127024-18ee7271c819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      descripcion: 'Leche entera fresca de vacas alimentadas con pasto.',
    },
    {
      nombre: 'Pan integral',
      precio: 3.49,
      imagen: 'https://img.freepik.com/foto-gratis/delicioso-pan-hecho-buen-trigo_144627-8616.jpg?w=1380&t=st=1683661418~exp=1683662018~hmac=7eb8d39e5c985ad3ade0250f7de0c77e1259c3fa966f8af3efdd9503c660f716',
      descripcion: 'Pan integral recién horneado con ingredientes naturales.',
    },
    {
      nombre: 'Yogur griego',
      precio: 0.99,
      imagen: 'https://img.freepik.com/foto-gratis/postre-yogur-mermelada-bayas-frescas_661915-491.jpg?w=1380&t=st=1683661482~exp=1683662082~hmac=dbfa2ee0d8f588c911f05ebbad890a1ebf7db55d35ad2c95cc5fe5d139effffc',
      descripcion: 'Yogur griego espeso y cremoso, bajo en grasas y alto en proteínas.',
    },
    {
      nombre: 'Salmón',
      precio: 12.99,
      imagen: 'https://img.freepik.com/foto-gratis/rodaja-salmon-crudo_144627-11089.jpg?w=1380&t=st=1683661521~exp=1683662121~hmac=67fd4706d27e32925f76a92b67074b32542c874e25d00be9d778db9fbe094ed9',
      descripcion: 'Salmón fresco de Alaska, rico en ácidos grasos omega-3.',
    },
  ];

  monedaDolar = true;
  precioEnMoneda = 0;

  get format(){
    return this.monedaDolar ? 'USD' : 'EUR';
  }
  cambiarMoneda(){
    this.monedaDolar = !this.monedaDolar;
  }

  usuarioLogueado: any;


  compra: string = '';
}
