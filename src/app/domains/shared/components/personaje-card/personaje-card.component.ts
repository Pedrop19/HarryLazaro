import { Component, Input, inject } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})
export class PersonajeCardComponent {
  @Input({ required: true }) personaje!: Personaje;

  commonService = inject(CommonService);
  botonClickado = this.commonService.botonClickado;

  mandarPersonaje(personaje: Personaje){
    this.botonClickado.set(true);
    this.commonService.setPersonaje(personaje);
  }
}
