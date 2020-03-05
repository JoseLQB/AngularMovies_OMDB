import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../servicios/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeticionesService]
})
export class HomeComponent implements OnInit {
  public titulo:String;
  public random:Array<any>;
  public datos:Array<any> = [];

  constructor(private _peticionesService:PeticionesService) { 
    this.titulo;
    this.random =[
      "godfather", "pirates", "star-wars", "spider-man", "warriors", "torrente", "story", "goonies", "future", "rocky", "indiana", "avengers", "batman", "green", "street-fighter", "mad-max", "blade", "phantom", "butterfly", "easy", "music", "spinal", "dragon", "fight", "avengers", "thor", "goodfellas", "metropolis", "naruto", "dragon ball", "jurassic", "home alone", "men in black", "mars", "tideland", "vegas", "comedy", "space", "neverending", "ghost", "the ring", "green", "western", "django", "kill bill", "scarface", "pulp", "ryan", "antz", "bugs", "lord of", "hobbit", "brazil", "monkeys", "stargate", "the ugly", "metal", "inferno", "titanic", "hell", "avatar", "paradox", "final fantasy", "chihiro", "castle", "love hina", "inuyasha", "brown" , "hellblade", "attack on", "full metal", "orange", "moon", "jupiter", "matrix", "soccer", "captain america", "music", "rock", "prison", "saint seiya", "tsubasa", "lion king", "up", "seven", "tarzan", "hercules", "jungle book", "your name", "garden", "robocop", "terminator", "ghost ship", "bebop", "lain", "paranoia", "sad hill", "ballad", "machina", "gladiator", "frontier", "guitar", "star trek", "war", "forrest", "forest", "club", "robot", "imaginaerum", "west", "bushido", "apes", "piano", "wukong", "matilda", "monsters", "shutter", "pi", "gantz", "wizard", "ghost in the", "High Plains", "unforgiven", "torino"
    ]
  }
  //Selecciona un título del array y lo usa como palabra clave de búsqueda
    onSubmit(busqueda:any){
      var n = Math.floor(Math.random()*(this.random.length - 0) + 0);
      this._peticionesService.obtener(this.random[n]).subscribe(data=>{
        this.datos = data.Search;
      },
      error =>{
        var errorMessage = error as any;
        console.log(errorMessage);
      })
    }
    ngOnInit(): void {
    }
  }