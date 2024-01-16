import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../models/Pokemon";

@Component({
  selector: 'app-add-pokemone',
  template: `
    <h2 class="center">Ajouter un Pokemoen </h2>
    <app-main-form [pokemon]="pokemone"></app-main-form>
  `,
  styleUrl: './add-pokemone.component.css'
})
export class AddPokemoneComponent implements OnInit{
  pokemone!:Pokemon;
  constructor() {
    console.log(this.pokemone)
  }
  ngOnInit(): void {
      this.pokemone=new Pokemon();
  }

}
