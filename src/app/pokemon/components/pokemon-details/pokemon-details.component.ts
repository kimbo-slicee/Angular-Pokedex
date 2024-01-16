import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../../../models/Pokemon";
import {PokemonService} from "../../services/pokemon-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit{
  public pokemon!:Pokemon | undefined;


  constructor(private pokemonService:PokemonService,
              private activitedRout:ActivatedRoute,
              private router:Router) {}
  ngOnInit(): void {
    this.getPokemon()
  }
  getPokemon(){
    const id:string|null =this.activitedRout.snapshot.paramMap.get('id');
    if(id) this.pokemonService.getPokemone(+id).subscribe((pokemone=>this.pokemon=pokemone))
  }
  goBack(){
    this.router.navigate(['/pokemon'])
  }


  upDate(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/pokemon/',pokemon.id])
      .then(()=>console.log('UPDATE PAGE 200 OK ^_^'))
      .catch(()=>console.log('FIELD 400 '))

  }

  deletPokemone(id: number) {
    // invoke delete service methode
    this.pokemonService.deletePokemone(id).subscribe(
      ()=> {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(()=>this.router.navigate(['/pokemon']));
          }
        });
      }
    )
  }
}
