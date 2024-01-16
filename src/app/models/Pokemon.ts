export class Pokemon {
  id!:number;
  name!:string;
  hp!:number;
  cp!:number;
  picture!:string
  types!:string[];
  created!:Date;

  constructor(hp:number=1,cp:number=1,name:string="entre un nome",
              picture:string='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
              types:string[]=["Normal"],
              created:Date=new Date('05/10/1998'))
  {
    this.name=name;
    this.hp=hp;
    this.cp=cp;
    this.types=types;
    this.picture=picture;
    this.created=created


  }

}
