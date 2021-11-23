export class Publicacion {
    id_publicacion!:string;
    username!:string;
    id_usuario!:number;
    fecha!:Date;
    id_rubro!:number;
    categoria!:string;
    imagen!:string;
    titulo!:string;
    contenido!:string;
    pie!:string;
    rutaImagen!:string;

    public get Id() : string {
      return this.id_publicacion;
    }
    public set ID(v : string) {
      this.id_publicacion = v;
    }
  
    public get Idusuario() : number {
      return this.id_usuario;
    }
    public set IdUSUARIO(v : number) {
      this.id_usuario = v;
    }
  
  public get Idrubro() : number {
    return this.id_rubro;
  }
  public set IdRUBRO(v : number) {
    this.id_rubro = v;
  }
  
  public get Categoria() : string {
    return this.categoria;
  }
  public set CATEGORIA(v : string) {
    this.categoria = v;
  }
  
  public get Username() : string {
    return this.username;
  }
  public set USERNAME(v : string) {
    this.username = v;
  }
  
  public get Imagen() : string {
    return this.imagen;
  }
  public set IMAGEN(v : string) {
    this.imagen = v;
  }
  
  public get Contenido() : string {
    return this.contenido;
  }
  public set CONTENIDO(v : string) {
    this.contenido = v;
  }
  
  public get Titulo() : string {
    return this.titulo;
  }
  public set TITULO(v : string) {
    this.titulo = v;
  }
  
  public get Pie() : string {
    return this.pie;
  }
  public set PIE(v : string) {
    this.pie = v;
  }
  
  public get Fecha() : Date {
    return this.fecha;
  }
  public set FECHA(v : Date) {
    this.fecha = v;
  }
  
    constructor() {
      this.id_publicacion = ""; 
      this.id_usuario = 0;
      this.id_rubro = 0;
      this.categoria = "";
      this.username = "";
      this.imagen = "";
      this.titulo = "";
      this.contenido = "";
      this.pie = "";
      this.fecha = new Date;
}

    
}
