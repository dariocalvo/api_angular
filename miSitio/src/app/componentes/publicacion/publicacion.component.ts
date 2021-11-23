import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/clases/publicacion';
import { ApiService } from 'src/app/utilidades/api.service';
import { PublicacionesService } from 'src/app/utilidades/publicaciones.service';
import { UsuariosService } from 'src/app/utilidades/usuarios.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion!:Publicacion;
  
  ruta!: string;
  datos= new FormData();

  constructor(private servUS: UsuariosService, private servPU: PublicacionesService, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  mostrar(){
    if (this.publicacion.id_usuario === this.servUS.Idusuario){
      return true;
    }
      return false;
  }

  confirmar():boolean{
    return confirm("¿seguro que deseas borrar la publicacion?");
  }

  eliminar(){
    
    if (this.confirmar()){
      this.ruta = "/Publicacion/Bloquear";
      this.datos.append("id_publicacion", this.publicacion.id_publicacion);
      this.datos.append("autorizacion", "3");
      this.api.traerPost(this.ruta, this.datos).subscribe(resp=> {return resp});  
      this.router.navigate(["exito"]);
    }
  }
  
  editar(){
    this.servPU.ID = this.publicacion.id_publicacion;
    this.servPU.TITULO = this.publicacion.titulo;
    this.servPU.PIE = this.publicacion.pie;
    this.servPU.CONTENIDO = this.publicacion.contenido;
    this.servPU.CATEGORIA = this.publicacion.categoria;
    this.router.navigate(["editar"]);
  }

}
