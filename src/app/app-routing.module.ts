import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { 
    path: 'pokemon-list', 
    children: [
      {
        path: '',
        loadChildren: './pokemon-list/pokemon-list.module#PokemonListPageModule',
      },
      {
        path: ':pokemonId',
        loadChildren: './pokemon-detail/pokemon-detail.module#PokemonDetailPageModule'
      }
    ]   
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
