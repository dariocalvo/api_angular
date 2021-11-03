import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/clases/publicacion';
import { ApiService } from 'src/app/utilidades/api.service';
import { PublicacionesService } from 'src/app/utilidades/publicaciones.service';

@Component({
  selector: 'app-editarpublicacion',
  templateUrl: './editarpublicacion.component.html',
  styleUrls: ['./editarpublicacion.component.css']
})
export class EditarpublicacionComponent implements OnInit {

publicacion!:Publicacion;
  id_publicacion: string;
  titulo: string;
  contenido: string;
  pie: string;
  categoria: string;
  datos= new FormData();
  ruta!: string;

  constructor(private servPU: PublicacionesService, private router: Router, private api: ApiService) { 
    this.id_publicacion = this.servPU.Id;
    this.categoria = this.servPU.Categoria;
    this.titulo = this.servPU.Titulo;
    this.contenido = this.servPU.Contenido;
    this.pie = this.servPU.Pie;
  }

  
  ngOnInit(): void {
     
  }

  guardar(){
    this.datos.append("id_publicacion",this.id_publicacion);
    this.datos.append("titulo", this.titulo);
    this.datos.append("contenido", this.contenido);
    this.datos.append("pie", this.pie);
    this.ruta = "/Publicacion/EditarEDI";
    this.api.traerPost(this.ruta, this.datos).subscribe(resp => alert (resp));
    alert ('publicacion editada');
    this.volver();
  }
  
  volver(){
    this.router.navigate(["publicaciones"]);
  }


}
