import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';
import { Pokemon } from '../pokemon-list/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  loadedPokemon: Pokemon;

  constructor(
    private activatedRouted: ActivatedRoute, 
    private pokemonService: PokemonListService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('pokemonId')){
        this.router.navigate(['/pokemon-list']);
        return;
      }
      const pokemonId = paramMap.get('pokemonId');
      this.loadedPokemon = this.pokemonService.getPokemon(pokemonId);
    });
  }

}
