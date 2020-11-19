import { Component, OnInit, Input, HostBinding , Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import { Store } from '@ngrx/store';
import {AppState} from '../../app.module';
import { VoteDownAction, VoteUpAction } from '../../models/destinos-viajes-states.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input('idx') position: number;
  @HostBinding('attr.class') ccsClas = 'col-md-4';
  @Output() Onclicked: EventEmitter<DestinoViaje>;
  
  constructor(private store: Store<AppState>) {
    this.Onclicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {
    this.Onclicked.emit(this.destino);
    return false;
  }

  voteUp() {
    this.store.dispatch( new VoteUpAction(this.destino))
    return false;
  }

  voteDown() {
    this.store.dispatch( new VoteDownAction(this.destino))
    return false;
  }
}
