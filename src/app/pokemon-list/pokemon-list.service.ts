import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private pokemons: Pokemon[] = []

  constructor(private http: HttpClient) { }

  getAllPokemons(){
    let url = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';
    let data: Observable<any> = this.http.get(url);
    data.subscribe( results =>{
      for( var i in results ){
        var result = results[i];
        let pokemon: Pokemon = <Pokemon>{};
        pokemon.id = String(result["id"]);
        pokemon.name = String(result["name"]["english"]);
        pokemon.types = result["type"];
        if(pokemon.id.length==1)pokemon.id='00'+pokemon.id;
        else if(pokemon.id.length==2)pokemon.id='0'+pokemon.id;
        pokemon.imageUrl = 'https://github.com/fanzeyi/pokemon.json/blob/master/images/'+pokemon.id+'.png?raw=true'
       
        this.pokemons.push(pokemon);
      }
    });
    
    return this.pokemons;
  }

  getPokemon(pokemonId: string){
    return {
      ...this.pokemons.find(pokemon => {
        return pokemon.id === pokemonId;
      })
    };
  }
}
