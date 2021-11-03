import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { ApiService } from 'src/app/utilidades/api.service';
import { UsuariosService } from 'src/app/utilidades/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!:string;
  password!:string;
  ruta!:string;
  datos= new FormData(); 
  Logueado!:Usuario[]; 
  mensaje_al_usuario!:string;
  
  constructor(private router: Router, private ServicioUsuario: UsuariosService, private api: ApiService) { 
    this.usuario="";
    this.password="";
    this.mensaje_al_usuario=" ";
    if (sessionStorage.getItem('usuario') != '' && sessionStorage.getItem('usuario') != null){
      this.router.navigate(["publicaciones"]);
    }
  }
 
  ngOnInit(): void {
  }
  
  ingresar(){
    this.datos.append("usuario", this.usuario);
    this.datos.append("pass", this.password);
  	this.ruta = "/Usuario/Buscar";
    this.api.traerPost(this.ruta, this.datos).subscribe(resp => 
      {
        if (resp){
          this.Logueado = <Array<Usuario>>resp;
          this.guardarSesion(this.Logueado[0].username, this.Logueado[0].permiso);
          this.agregarServicioUsuario(this.Logueado[0]);
        }else{
          this.mensaje_al_usuario = "Usuario o contraseña incorrectos";
        }
      });
  }

  guardarSesion(usuario:string, permiso:number){
    sessionStorage.setItem('usuario',usuario);
    sessionStorage.setItem('rol', permiso.toString());
  }

  agregarServicioUsuario(Logueado:Usuario){
    this.ServicioUsuario.IdUSUARIO = Logueado.id_usuario;
    this.ServicioUsuario.USERNAME = Logueado.username;
    this.ServicioUsuario.NOMBRE = Logueado.nombre;
    this.ServicioUsuario.EMAIL = Logueado.email;
    this.ServicioUsuario.PERMISO = Logueado.permiso;
    this.router.navigateByUrl('publicaciones/0');
    
  }

}
