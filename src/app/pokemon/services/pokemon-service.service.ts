import {Injectable, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of,tap} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{
  constructor(private httpClient:HttpClient) {}
  ngOnInit(): void {
  }
  /*Add New Pokemon*/
  addPokemon(pokemon:Pokemon):Observable<Pokemon | null>{
    const httpOption={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.httpClient.post<Pokemon>('api/pokemons',pokemon,httpOption).pipe(
      tap(resp =>console.table(resp)),/* Normal responce*/
      catchError(err => {
        console.log(err)
        return of(null)
      })
    )
  }

  /*Fetch All Data */
  getAllPokemos():Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>('api/pokemons').pipe(
      tap(resp =>console.table(resp)),/* Normal responce*/
      catchError(err => {
        console.log(err) /*error Responce*/
        return of([])
      })
    )
    /*The End of the flux or desaBonne of the flux  */
  }
  /*Get One Pokmone using I'd */
  getPokemone(id:number):Observable<Pokemon|undefined>{
    return this.httpClient.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap(pokemone=>console.table(pokemone)),
      catchError(err=> {
        console.log(err)
        return of(undefined)
      })
    )
  }
  /*modefie les donne et persistes les modification */

  updatePokemone(pokemone:Pokemon):Observable<null>{
    const httpOption={
        headers:new HttpHeaders({'Content-Type':'application/json'} )
    }
      return this.httpClient.put<null>('api/pokemons',pokemone,httpOption).pipe(
        tap(updatedPokemon=>console.table(updatedPokemon)),
        catchError(err=>{
          console.log(err)
          return of (null)
        })
      )
  }
  /*Delete Pokemon */
  deletePokemone(id:number):Observable<null>{
    return  this.httpClient.delete<null>(`api/pokemons/${id}`).pipe(
      tap(()=>console.log('Deleted')),
      catchError(error=>{
        console.log(error)
        return of(null)
      })
    );
  }
  /*Search Function */
  searchPokemone(term:string):Observable<Pokemon[] | []>{
    return  this.httpClient.get<Pokemon[]>(`api/pokemons/${term}`).pipe(
      tap(resp=>console.log(resp)),
      catchError(err => {
        console.log((err))
        return  of([])
      })
    )
  }







  getTypes():string[]{
    return [
      'Plante',
      'Feu',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fee',
      'Vol',
      'Psy'
    ]
  }
}
