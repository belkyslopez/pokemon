import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  name: any;
  @Input() pokemon: any;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.name = this.pokemon.name;
    this.getIdPokemon();
  }

  async getIdPokemon(){

  }



}
