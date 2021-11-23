import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/clases/publicacion';
import { Rubro } from 'src/app/clases/rubro';
import { ApiService } from 'src/app/utilidades/api.service';
import { PublicacionesService } from 'src/app/utilidades/publicaciones.service';
import { UsuariosService } from 'src/app/utilidades/usuarios.service';

@Component({
  selector: 'app-nuevapublicacion',
  templateUrl: './nuevapublicacion.component.html',
  styleUrls: ['./nuevapublicacion.component.css']
})
export class NuevapublicacionComponent implements OnInit {

  publicacion!:Publicacion;
  rubros!:Array<Rubro>;
  id_rubro: string;
  id_usuario: number;
  titulo: string;
  contenido: string;
  pie: string;
  ok!:number;  
  datos= new FormData();
  ruta!: string;
  msj!:string;

  constructor(private servUS: UsuariosService, private servPU: PublicacionesService, private router: Router, private api: ApiService) { 
    this.ruta = "/Rubro/Listar";
    api.traerGet(this.ruta).subscribe(resp => this.rubros = <Array<Rubro>>resp);
    this.id_rubro = "";
    this.id_usuario = servUS.Idusuario;
    this.titulo = "";
    this.contenido = "";
    this.pie = "";
    this.ok=0;
    this.msj="";
  }

  ngOnInit(): void {
  }

  comprobar(valor:any):Boolean{
    if (valor != '' && valor != null){
      return true;
    }else{
      return false;
    }
  }
  
  enviar(){
    this.ok = 0;
    if (!this.comprobar(this.id_rubro)){this.ok++;}
    
    if (!this.comprobar(this.titulo)){this.ok++;}
    
    if (!this.comprobar(this.contenido)){this.ok++;}

    if (!this.comprobar(this.pie)){this.ok++;}
  
    if (this.ok == 0){
      this.guardar();
    }else{
      this.msj ="Falta información en la publicación, no debe contener campos vacios. Verifique y complete los faltantes.";
    }
  }

  borrarMSJ(){
    this.msj ="";
  }

  guardar(){
    this.datos.append("id_usuario", this.id_usuario.toString());
    this.datos.append("id_rubro",this.id_rubro);
    this.datos.append("titulo", this.titulo);
    this.datos.append("contenido", this.contenido);
    this.datos.append("pie", this.pie);
    this.ruta = "/Publicacion/Nueva";
    this.api.traerPost(this.ruta, this.datos).subscribe(resp => alert (resp));
    this.volver();
  }
  
  volver(){
    this.router.navigate(["publicaciones"]);
  }

}
