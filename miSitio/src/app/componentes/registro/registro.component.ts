import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  respuesta!:any;
  usuarioDisponible: boolean = false;

  constructor(private servicio: UsuariosService, private router: Router, private api: ApiService ) {
    
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

borrarMSJ(control:number){
  switch (control){
    case 1:
      this.msjnombre="";
      break;
    case 2:
      this.msjmail="";
      break;
    case 3:
      this.msjpas="";
      break;
  }
}

comprobarUsuario(){
  this.datos.append("usuario", this.username);
  this.ruta = "/Usuario/Buscar";
  this.api.traerPost(this.ruta, this.datos).subscribe(resp => 
    {
      if (resp){
        this.msjus = 'Usuario existente, debes elejir otro nombre';
        this.usuarioDisponible= false;
      }else{
        this.msjus = '';
        this.usuarioDisponible= true;
      }
    });
    
}

enviar(){
  this.ok = 0;
  if (this.comprobar(this.nombre)){
    this.msjnombre ="";
  }else{
    this.msjnombre ="El nombre no es válido";
    this.ok++;
  }
  
  if (this.comprobar(this.username)){
    if (this.usuarioDisponible){
      this.msjus ="";
    }else{
      this.ok++;  
    }
    
  }else{
    this.msjus ="El usuario no puede estar vacío";
    this.ok++;
  }
  
  if (this.email.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/))
  /*if (this.comprobar(this.email))*/{
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
    this.api.traerPost(this.ruta, this.datos).subscribe(resp => JSON.stringify(resp));
    alert ('registro exitoso');
    this.router.navigate(["login"]);
}

}




