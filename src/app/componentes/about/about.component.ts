import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../servicios/peticiones.service';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [PeticionesService],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  public titulo:String;
  public datos:Array<any> = [];

  constructor(private _peticionesService:PeticionesService) {
    this.titulo;
    //Se obtienen los datos de la película
  }
//Devuelve la url que recoge el campo del formulario. Esta contiene un json con información de las películas
  onSubmit(busqueda:any){
    this._peticionesService.obtener(this.titulo).subscribe(data=>{
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
