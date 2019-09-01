import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonListService ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAllPokemons();
  }

}
