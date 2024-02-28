
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

  pokemonName: string = '';
  evolutions: string[] = [];
  error: string = '';

  evoluciones:any;

  constructor( private pokemonService:PokemonService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.pokemonDetails= this.pokemonService.pokemonDetails;
    if(this.pokemonDetails){
      // console.log("🚀  this.pokemonDetails:", this.pokemonDetails.types[0].type.name);
      this.pokemonImage = this.pokemonDetails.sprites.front_default;
      this.getEvolucion();
    }else{
        this.atras();
    }
  }

  atras(){
    this.router.navigate(['/home']);
  }



  async getEvolucion(){
    console.log("🚀  this.pokemonDetails.id:", this.pokemonDetails.id);
    this.pokemonService.getEvolucion(this.pokemonDetails.id).subscribe((result) => {
      console.log(result);
      this.evoluciones = result;
      console.log("🚀  res:", this.evoluciones.chain);
      console.log("🚀  species.name:", this.evoluciones.chain.species.name);
      console.log("🚀  evolves_to[0].species.name:", this.evoluciones.chain.evolves_to[0].species.name);
      console.log("🚀  evolves_to[0].evolves_to[0].species.name:", this.evoluciones.chain.evolves_to[0].evolves_to[0].species.name)
    });



  }



}
