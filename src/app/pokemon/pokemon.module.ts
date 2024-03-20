import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from "./components/pokemonlist/pokemonList.component";
import {PokemonTypeColorPipe} from "./pipe/pokemon-type-color.pipe";
import {PkmnBorderCardDirective} from "./directive/pkmn-border-card.directive";
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import {RouterModule, Routes} from "@angular/router";
import {MainFormComponent} from "./components/main-form/main-form.component";
import {FormsModule} from "@angular/forms";
import {UpdatePokemonComponent} from "./components/update-pokemon/update-pokemon.component";
import {AddPokemoneComponent} from "./components/add-pokemone/add-pokemone.component";
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import {authGuard} from "../auth.guard";
const pokemoRoutes:Routes=[
  {path:'pokemon/pokemon/:id',component:UpdatePokemonComponent , canActivate:[authGuard]},
  {path:'pokemon/add',component:AddPokemoneComponent, canActivate:[authGuard]},
  {path:'pokemon/:id',component:PokemonDetailsComponent, canActivate:[authGuard]},
  {path:'pokemon',component:PokemonListComponent, canActivate:[authGuard]},

]


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent,
    UpdatePokemonComponent,
    AddPokemoneComponent,
    MainFormComponent,
    PkmnBorderCardDirective,
    PokemonTypeColorPipe,
    SearchPokemonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(pokemoRoutes),
    FormsModule,
  ]
})
export class PokemonModule { }
