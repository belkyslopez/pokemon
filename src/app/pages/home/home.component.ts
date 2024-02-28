import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPokemons: any;
  listPokemon: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonData();
  }

  async getPokemonData(){
    this.allPokemons = await this.pokemonService.getAllPokemon();
    this.listPokemon = this.allPokemons.results;
    // console.log("🚀  this.listPokemon:", this.listPokemon);
  }
}
