import { Component, inject, signal } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  

  commonService = inject(CommonService);
  personaje = this.commonService.getPersonaje();
  botonClickado = this.commonService.botonClickado;

  ngOnInit(){
    console.log(this.personaje);
  }

  desactivarBotton(){
    this.botonClickado.set(false);
  }
}
