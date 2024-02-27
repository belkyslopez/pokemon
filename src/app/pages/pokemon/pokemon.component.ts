import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: any;
  pokemonImage: string = '';
  pokemonDetails: any;
  id: any;

  constructor( private pokemonService:PokemonService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.pokemonDetails= this.pokemonService.pokemonDetails;
    if(this.pokemonDetails)
    {
      this.pokemonImage = this.pokemonDetails.sprites.front_default;
      console.log("🚀  this.pokemonImage:", this.pokemonImage)

    }else{
        this.atras();
    }
  }

  atras(){
    this.router.navigate(['/home']);
  }



}
