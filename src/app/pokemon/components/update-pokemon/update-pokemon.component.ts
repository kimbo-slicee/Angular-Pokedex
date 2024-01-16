import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../models/Pokemon";
import {PokemonService} from "../../services/pokemon-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrl: './update-pokemon.component.css'
})
export class UpdatePokemonComponent implements OnInit{
  pokemon!:Pokemon | undefined;
  constructor(private activedRoute:ActivatedRoute , private pokemonService:PokemonService) {
  }
  ngOnInit(): void {
    this.getPokemone();
  }
  getPokemone(){
    const id=this.activedRoute.snapshot.paramMap.get('id')
    if(id) this.pokemonService.getPokemone(+id).subscribe(responce=> {
      this.pokemon = responce
      console.table(this.pokemon)
    })
  }



}
