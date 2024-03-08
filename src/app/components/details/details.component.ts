import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
// import { mayuscula } from '../../mayuscula.pipe';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  name: any;
  @Input() pokemon: any;
  @Output() clicked = new EventEmitter();
  @Output() clickeado = new EventEmitter<string>();
  pokemonImage: string = '';
  pokemonDetails: any;
  id: any;

  constructor(private pokemonService:PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.pokemon)
    {
      this.name = this.pokemon.name;
      this.getImgPokemon();

    }
  }

  async getImgPokemon(){
     this.pokemonDetails = await this.pokemonService.getImgPokemon(this.pokemon.name);
    //  console.log("🚀  this.pokemonDetails:", this.pokemonDetails);
     this.pokemonImage = this.pokemonDetails.sprites.front_default;
     this.id = this.pokemon.url.substring(34,this.pokemon.url.length-1);
  }

  details(){
    this.pokemonService.pokemonDetails = this.pokemonDetails;
    this.router.navigate(['/pokemon']);
  }



}
