import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
private id_usuario : number;
public get Idusuario() : number {
  return this.id_usuario;
}
public set IdUSUARIO(v : number) {
  this.id_usuario = v;
}

private nombre : string;
public get Nombre() : string {
  return this.nombre;
}
public set NOMBRE(v : string) {
  this.nombre = v;
}

private email : string;
public get Email() : string {
  return this.email;
}
public set EMAIL(v : string) {
  this.email = v;
}

private username : string;
public get Username() : string {
  return this.username;
}
public set USERNAME(v : string) {
  this.username = v;
}

private password : string;
public get Password() : string {
  return this.password;
}
public set PASS(v : string) {
  this.password = v;
}

private permiso : number;
public get Permiso() : number {
  return this.permiso;
}
public set PERMISO(v : number) {
  this.permiso = v;
}

private activo : number;
public get Activo() : number {
  return this.activo;
}
public set ACTIVO(v : number) {
  this.activo = v;
}

private fecha_registro : Date;
public get Fecha_registro() : Date {
  return this.fecha_registro;
}
public set REGISTRO(v : Date) {
  this.fecha_registro = v;
}

  constructor() { 
    this.id_usuario = 0;
    this.nombre = "";
    this.email = "";
    this.username = "";
    this.password = "";
    this.permiso = 0;
    this.activo = 0;
    this.fecha_registro = new Date;
  }
}
