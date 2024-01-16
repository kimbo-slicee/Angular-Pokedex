import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../models/Pokemon";
import {POKEMONS} from "../../../Pokemons-Liste";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon-service.service";

@Component({
  selector: 'app-pokemonList',
  templateUrl: './pokemonList.component.html',
  styleUrl: './pokemonList.component.css'
})
export class PokemonListComponent implements OnInit{
pokemons!:Pokemon[];

constructor(private route:Router,private pokemonservice:PokemonService) {
}
  ngOnInit(): void {
  this.pokemonsList()
  }
  pokemonsList(){
    this.pokemonservice.getAllPokemos().subscribe((pokemonListe)=>this.pokemons=pokemonListe)
  }


  pokemonDetails(pokemon: Pokemon) {
    this.route.navigate(['/pokemon',pokemon.id])
  }
}
