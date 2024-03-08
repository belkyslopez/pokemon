
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

  evolves_to : any []=[];

  constructor( private pokemonService:PokemonService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.pokemonDetails= this.pokemonService.pokemonDetails;
    if(this.pokemonDetails){
      console.log("🚀  this.pokemonDetails:", this.pokemonDetails.types[0].type.name);
      this.pokemonImage = this.pokemonDetails.sprites.front_default;
     // this.getEvolucion();
     this.evolucionesPokemon();
    }else{
        this.atras();
    }
  }

  atras(){
    this.router.navigate(['/home']);
  }

  // async getEvolucion(){
  //   const consultarPkm =  await this.pokemonService.getEvolucion(this.pokemonDetails.name);
  //   const urlEvoluciones = consultarPkm.evolution_chain.url
  //    const obtenerDatos = await this.pokemonService.getExecuteUrl(urlEvoluciones);
  //   this.evoluciones = obtenerDatos.chain.evolves_to[0].evolves_to;
  //    console.log("🚀  this.evoluciones:", this.evoluciones);
  // }

  async evolucionesPokemon(){

    const pokemon =  await this.pokemonService.getPokemonEspecies(this.pokemonDetails.name);
    console.log("Pokemon onClickPokemon",pokemon);
    const  { chain } = await fetch(pokemon.evolution_chain.url).then(data => data.json());
    this.evolves_to = [];
    console.log("🚀   this.evolves_to:",  this.evolves_to)
    this.getPokemonData(chain);
    console.log('evolves', this.evolves_to);
  }

  getPokemonData = (pokemon:any) => {
    const {name, url} = pokemon.species;
    const id = url.split('/')[6];
    this.evolves_to.push({
      name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  });
  if (pokemon.evolves_to?.length) {
         pokemon.evolves_to.map((poke:any) => this.getPokemonData(poke));
 }
}


}
