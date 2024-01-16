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
const pokemoRoutes:Routes=[
  {path:'pokemon/pokemon/:id',component:UpdatePokemonComponent},
  {path:'pokemon/add',component:AddPokemoneComponent},
  {path:'pokemon/:id',component:PokemonDetailsComponent},
  {path:'pokemon',component:PokemonListComponent},

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

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(pokemoRoutes),
    FormsModule,
  ]
})
export class PokemonModule { }
