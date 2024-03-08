import { Injectable, signal } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private personaje: any;
  botonClickado = signal<boolean>(false);

  
  setPersonaje(personaje: Personaje) {
    this.personaje = personaje;
  }

  getPersonaje() {
    return this.personaje;
  }
}
