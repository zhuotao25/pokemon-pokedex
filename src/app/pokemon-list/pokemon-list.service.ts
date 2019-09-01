import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private pokemons: Pokemon[] = [
    {
      id: '1',
      name: 'Bulbasaur',
      imageUrl:'https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png?raw=true',
      types: ['Grass', 'Poison']
    },
    {
      id: '2',
      name: 'Ivysaur',
      imageUrl:'https://github.com/fanzeyi/pokemon.json/blob/master/images/002.png?raw=true',
      types: ['Grass', 'Poison']
    },
    {
      id: '3',
      name: 'Venusaur',
      imageUrl:'https://github.com/fanzeyi/pokemon.json/blob/master/images/003.png?raw=true',
      types: ['Grass', 'Poison']
    }
  ]

  constructor() { }

  getAllPokemons(){
    return [...this.pokemons];
  }

  getPokemon(pokemonId: string){
    return {
      ...this.pokemons.find(pokemon => {
        return pokemon.id === pokemonId;
      })
    };
  }
}
