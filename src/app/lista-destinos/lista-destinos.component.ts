import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[]  // Array que almacena objetos del tipo DestinoViaje
  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViaje(nombre, url))
    // Devolviendo false evitamos que el evento click realice su acción por
    // defecto (subbmitear la pág y recargarla)
    return false
  }
}
