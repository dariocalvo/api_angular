import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utilidades/api.service';
import { UsuariosService } from 'src/app/utilidades/usuarios.service';


@Component({
  selector: 'app-cebecera',
  templateUrl: './cebecera.component.html',
  styleUrls: ['./cebecera.component.css'],
})
export class CebeceraComponent implements OnInit {
  
  user!:string;
  usuario!:any;
  logueado!:boolean;
  fecha:Date = new Date();
  datos= new FormData();
  ruta!:string;
    
  constructor(private router: Router, private servicio: UsuariosService, private api: ApiService) {
    this.user = this.servicio.Username;
    if (this.user != '' && this.user != null){
        this.usuario = this.user;
        this.logueado = true;
    }else{
      this.ponerUsuario();  
      this.logueado = this.comprobarlogueo(); 
    }
  }  

  ngOnInit(): void {
  }

  comprobarlogueo():boolean{
    return sessionStorage.getItem('usuario') != '' && sessionStorage.getItem('usuario') != null;
  }

  ponerUsuario():void{
    if (this.comprobarlogueo()){
      this.usuario = sessionStorage.getItem('usuario');
    }else{
      this.usuario = 'Visitante';
    }
    this.router.navigate(["publicaciones"]);
  }

  confirmar():boolean{
    return confirm("¿seguro que deseas darte de baja?");
  }

  baja(){
    if (this.confirmar()){
      this.ruta = "/Usuario/Baja";
      this.datos.append("usuario", this.user);
      this.api.traerPost(this.ruta, this.datos).subscribe(resp=> {return resp});  
      alert ('Te has dado de baja con exito');
      this.salir();
    }else{
      alert ('se cancelo accion');
    }
    
  }

  salir(){
    sessionStorage.clear();
    location.reload();
  }

}
