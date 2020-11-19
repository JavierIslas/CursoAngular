import {v4 as uuid} from 'uuid';

export class DestinoViaje {
   selected: boolean;
   servicios: string [];
   id = uuid();
  
   constructor(public nombre: string, public imagenUrl: string, public votes: number = 0) {
     this.servicios = ['pileta', 'desayunos'];
   }
   isSelected(): boolean {
     return this.selected;
   }
   setSelected(s: boolean) {
     this.selected = s;
   }

   voteUp() {
     this.votes ++;
   }

   voteDown() {
    this.votes --;
  }
}
