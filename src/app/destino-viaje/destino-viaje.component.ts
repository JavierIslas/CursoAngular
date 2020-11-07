// Indicamos todos los artefactos que vamos a usar
import { Component, OnInit, Input, HostBinding } from '@angular/core';  
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.scss']
})
export class DestinoViajeComponent implements OnInit {
  // destino es suceptible de ser pasado como parametro en el tag
  // app-destino-viaje
  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {
  }

  ngOnInit(): void {
  }

}
