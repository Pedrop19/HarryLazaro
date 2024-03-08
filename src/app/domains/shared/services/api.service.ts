import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private http = inject(HttpClient);
  
  getAllCharacters(){
    let url = new URL("https://hp-api.onrender.com/api/characters?limit=20")

    return this.http.get<any[]>(url.toString());
  }

  getCharacterById(id: string){
    let url = new URL(`https://hp-api.onrender.com/api/character/${id}`);

    return this.http.get<any[]>(url.toString());
  }
}
