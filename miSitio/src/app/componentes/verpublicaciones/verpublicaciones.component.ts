import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicacion } from 'src/app/clases/publicacion';
import { ApiService } from 'src/app/utilidades/api.service';
import { PublicacionesService } from 'src/app/utilidades/publicaciones.service';

@Component({
  selector: 'app-verpublicaciones',
  templateUrl: './verpublicaciones.component.html',
  styleUrls: ['./verpublicaciones.component.css']
})
export class VerpublicacionesComponent implements OnInit {
  
  publicaciones!:Array<Publicacion>;
  filtro!:string; 
  ruta!:string;
  data= new FormData();
  
  constructor(private rutaActiva: ActivatedRoute, private api:ApiService) { 
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {this.cargarCambios(params['id_rubro']);});
  }

  cargarCambios(id_rubro:any){
      this.data.append("id_rubro", id_rubro); 
      this.ruta = "/Publicacion/Filtrar/Rubro";
      this.api.traerPost(this.ruta, this.data).subscribe(resp => this.publicaciones = <Array<Publicacion>>resp);  
  }
}