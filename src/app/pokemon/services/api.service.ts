import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {POKEMONS} from "../../Pokemons-Liste";

@Injectable({
  providedIn: 'root'
})
export class ApiService implements InMemoryDbService{
  constructor() { }

  createDb()  {
    const pokemons=POKEMONS;
    return {pokemons};
  }

}
