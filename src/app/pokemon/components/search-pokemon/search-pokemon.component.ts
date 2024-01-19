import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap} from "rxjs";
import {Pokemon} from "../../../models/Pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon-service.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: 'search.pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent implements OnInit{
  /*{..."a"..."ab..."abz"..."ab"..."abc"}*/
  searchTerms:Subject<string>=new Subject<string>();/*
  La class Subject come from la libriry rxjs il permet de stocke un flux de donne   */
  pokemon$!:Observable<Pokemon[]>;
  constructor(private route:Router , private pokemoneService:PokemonService) {
  }

  ngOnInit(): void {
    this.pokemon$=this.searchTerms.pipe(
    debounceTime(300),
      distinctUntilChanged(),
      /*{...."ab"...."abc"}
       concatMap/mergeMap/SwitchMap
      * */
      switchMap(term=>this.pokemoneService.searchPokemone(term))
      /*{...Observable<"ab">....Observable<"abc">....}*/
    );
  }
  search(term:string){
    this.searchTerms.next(term)
    console.log(term)
    console.log(this.searchTerms)
  }


  goToDetail(pokemon: Pokemon) {
    const link=['/pokemon',pokemon.id];
    this.route.navigate(link).then().catch();
  }

}
