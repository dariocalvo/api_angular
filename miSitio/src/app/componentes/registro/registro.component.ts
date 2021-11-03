import { Component, OnInit } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { ApiService } from 'src/app/utilidades/api.service';
import { UsuariosService } from 'src/app/utilidades/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  msjnombre!:string;
  msjmail!:string;
  msjus!:string;
  msjpas!:string;
  ok!:number;
  nombre: string;
  username: any;
  email: string;
  password: string;
  ruta!:string;
  datos= new FormData();
  existe!: any;

  constructor(private servicio: UsuariosService, private api: ApiService ) {
    this.nombre = "";
    this.username ="";
    this.email ="";
    this.password="";
    this.msjnombre="";
    this.msjmail="";
    this.msjpas="";
    this.msjus="";
    this.ok= 0;
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
  if (this.comprobar(this.nombre)){
    this.msjnombre ="";
  }else{
    this.msjnombre ="el nombre no es valido";
    this.ok++;
  }
  
  if (this.comprobar(this.username)){
    this.msjus ="";
  }else{
    this.msjus ="el usuario no es valido";
    this.ok++;
  }
  
  if (this.comprobar(this.email)){
    this.msjmail ="";
  }else{
    this.msjmail ="La direccion de correo no es válida";
    this.ok++;
  }
  
  if (this.comprobar(this.password)){
    this.msjpas ="";
  }else{
    this.msjpas ="La contraseña no puede quedar vacia";
    this.ok++;
  }



  if (this.ok == 0){
    this.guardar();
  }
}

guardar(){
    this.servicio.NOMBRE = this.nombre;
    this.servicio.USERNAME = this.username;
    this.servicio.EMAIL = this.email;
    this.servicio.PASS = this.password;
    this.datos.append("nombre", this.servicio.Nombre);
    this.datos.append("usuario", this.servicio.Username);
    this.datos.append("email", this.servicio.Email);
    this.datos.append("pass", this.servicio.Password);
    this.datos.append("avatar", "");
    this.ruta = "/Usuario/Nuevo";
    this.api.traerPost(this.ruta, this.datos).subscribe(resp => alert (resp));
}

}




