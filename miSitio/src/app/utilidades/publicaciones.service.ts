import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private id: string;
  public get Id() : string {
    return this.id;
  }
  public set ID(v : string) {
    this.id = v;
  }

  private id_usuario : number;
  public get Idusuario() : number {
    return this.id_usuario;
  }
  public set IdUSUARIO(v : number) {
    this.id_usuario = v;
  }

private id_rubro : string;
public get Idrubro() : string {
  return this.id_rubro;
}
public set IdRUBRO(v : string) {
  this.id_rubro = v;
}

private categoria : string;
public get Categoria() : string {
  return this.categoria;
}
public set CATEGORIA(v : string) {
  this.categoria = v;
}

private username : string;
public get Username() : string {
  return this.username;
}
public set USERNAME(v : string) {
  this.username = v;
}

private imagen : string;
public get Imagen() : string {
  return this.imagen;
}
public set IMAGEN(v : string) {
  this.imagen = v;
}

private contenido : string;
public get Contenido() : string {
  return this.contenido;
}
public set CONTENIDO(v : string) {
  this.contenido = v;
}

private titulo : string;
public get Titulo() : string {
  return this.titulo;
}
public set TITULO(v : string) {
  this.titulo = v;
}

private pie : string;
public get Pie() : string {
  return this.pie;
}
public set PIE(v : string) {
  this.pie = v;
}

private fecha : Date;
public get Fecha() : Date {
  return this.fecha;
}
public set FECHA(v : Date) {
  this.fecha = v;
}

  constructor() {
    this.id = ""; 
    this.id_usuario = 0;
    this.id_rubro = "";
    this.categoria = "";
    this.username = "";
    this.imagen = "";
    this.titulo = "";
    this.contenido = "";
    this.pie = "";
    this.fecha = new Date;
  }

  
}
