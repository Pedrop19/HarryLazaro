import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PersonajeCardComponent } from '../personaje-card/personaje-card.component';
import { Personaje } from '../../models/personaje.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PersonajeCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listadoPersonajes = <Personaje[]>([]);

  private apiService = inject(ApiService)


  ngOnInit(){
    this.apiService.getAllCharacters().subscribe({
      next: (data) => {
        console.log(data);
        let personajes = data;
        for(let i = 0; i < 20; i++){
          const personaje: Personaje = {
            id: personajes[i].id,
            name: personajes[i].name,
            altenarte_names: personajes[i].alternate_names,
            gender: personajes[i].gender,
            house: personajes[i].house,
            image: personajes[i].image
          }
          this.listadoPersonajes.push(personaje);
        }
        
      }
    })
  }


}
