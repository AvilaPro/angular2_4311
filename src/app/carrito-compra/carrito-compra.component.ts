import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent {
  @Input() datoCompra: string = '';
  @Output() cambiarDatoDeCompra = new EventEmitter();

  cambiarCompraEnHijo(){
    this.cambiarDatoDeCompra.emit(this.datoCompra);
  }
}
