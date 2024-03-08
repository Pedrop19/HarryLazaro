import { Component, inject } from '@angular/core';
import { PersonajeCardComponent } from '../personaje-card/personaje-card.component';
import { Personaje } from '../../models/personaje.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [PersonajeCardComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  personaje! : Personaje;
  listadoPersonajes = <Personaje[]>([]);

  private apiService = inject(ApiService)

  ngOnInit(){
    this.apiService.getAllCharacters().subscribe({
      next: (data) => {
        console.log(data);
        let personajes = data;
        let random = Math.random();
        for(let i = 0; i < 20; i++){
          const personaje: Personaje = {
            id: personajes[i].id,
            name: personajes[i].name,
            altenarte_names: [personajes[i].altenarte_names],
            gender: personajes[i].gender,
            house: personajes[i].house,
            image: personajes[i].image
          }
          this.listadoPersonajes.push(personaje);
        }
        let personajeNum = Math.floor(random*(this.listadoPersonajes.length))
        this.personaje = this.listadoPersonajes[personajeNum];
        
      }
    })
  }
}
