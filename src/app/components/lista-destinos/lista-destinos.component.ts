import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient} from '../../models/destinos-api-client.model';

//redux

import { DestinosViajesState } from './../../models/destinos-viajes-state.model';
import { Store } from '@ngrx/store';
import {AppState} from './../../app.module'

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [ DestinosApiClient ]
})
export class ListaDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;
  //destinos: DestinoViaje[];
  constructor(
    public destinosApiClient: DestinosApiClient,
    private store: Store<AppState>
    ) {
    //this.destinos = [];
    this.onItemAdded = new EventEmitter();
    this.updates = [];

    this.store.select(state => state.destinos.favorito)
      .subscribe(data => {
        const d = data;
        if (d != null) {
          this.updates.push('Se eligiÃ³: ' + d.nombre);
        }
      });

      store.select(state => state.destinos.items).subscribe(items => this.all = items);
   }

  ngOnInit(): void {
    this.store.select(state => state.destinos)
    .subscribe(data => {
      let d = data.favorito;
      if (d != null) {
        this.updates.push("Se eligiÃ³: " + d.nombre);
      }
    });

  }

  agregado(d: DestinoViaje){
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    
  }

  elegido(e:DestinoViaje){

    //this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    this.destinosApiClient.elegir(e);
    
    }
    
    getAll(){

    }

  
}