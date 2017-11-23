import { Component, OnInit } from '@angular/core';
import {ArticuloModel} from '../models/ArticuloModel';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: Array<ArticuloModel> = [
    {id: 1, foto: 'https://cdn1.coppel.com/images/catalog/pr/8996162-1.jpg', descripcion: 'Bota Worker',
      color: '#CC8F46', talla: 42, cantidad: 1, precioGeneral: 39.99, precioRebaja: 19.99, rebajado: true},

    {id: 2, foto: 'http://silbon.es/76148-home_default/pantalon-vestir-estructura-gris-marengo.jpg', descripcion: 'Pantalon Vestir',
      color: '#101010', talla: 38, cantidad: 1, precioGeneral: 59.99, precioRebaja: 29.99, rebajado: true},

    {id: 3, foto: 'http://www.ansilta.com/img/articulos/camisa_pissis_9_imagen1.jpg', descripcion: 'Camisa Vestir',
      color: '#6aa2c0', talla: 40, cantidad: 1, precioGeneral: 44.99, precioRebaja: 39.99, rebajado: true}

  ];

  constructor() { }

  ngOnInit() {
  }

  getRebaja(articulo: ArticuloModel) {
    return 'red';
  }

  incrementarCantidad(articulo: ArticuloModel) {
    articulo.cantidad = articulo.cantidad + 1;
  }

  disminuirCantidad(articulo: ArticuloModel) {
    if (articulo.cantidad === 1) {
      alert('No puedes disminuir la cantidad');
    }else {
    articulo.cantidad = articulo.cantidad - 1; }
  }

}
