import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2';
  pokemonDetails:any

  constructor( private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`).toPromise();
  }

  getPokemonId(id: number): Promise<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
  }

  getImgPokemon(name: string){

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).toPromise();
  }

  getEvolucion(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);

  }

}
