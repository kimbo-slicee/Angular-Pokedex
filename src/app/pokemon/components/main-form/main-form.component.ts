import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../models/Pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon-service.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit{
  @Input() pokemon!: Pokemon;
  types!:string[];
  isAddForm!:boolean;
  constructor(private router:Router,
              private pokemonService:PokemonService) {}
  ngOnInit(){
    this.types=this.pokemonService.getTypes()
    this.isAddForm=this.router.url.includes('add')
  }
  /*Methode for Validation */
  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon).subscribe(
        pokemone => {
          console.log(pokemone);
          this.router.navigate(['/pokemon',pokemone?.id]).then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }).catch((error) => console.log(error))
        }
      )
    } else {
      this.pokemonService.updatePokemone(this.pokemon).subscribe(() => {
        Swal.fire({
          title: this.pokemon.name,
          text: "POKEMON UPDATED ",
          imageUrl: this.pokemon.picture,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: `${this.pokemon.name}-Image`
        });
        this.router.navigate(['/pokemon', this.pokemon.id])
      })
    }
  }

  hasType(type: any):boolean {
    return this.pokemon.types.includes(type)

  }
  selectType($event: Event, type: any) {
    const ischeCked:Boolean=($event.target as HTMLInputElement).checked;
    ischeCked
      ?this.pokemon.types.push(type)
      :this.pokemon.types.splice(this.pokemon.types.indexOf(type),1)

  }
  isTypesValid(type: any):boolean {
    if(this.pokemon.types.length==1 && this.hasType(type)){
      return false;
    }
    if (this.pokemon.types.length>2 && !this.hasType(type)){
      return false;
    }
    return true;
  }
}
