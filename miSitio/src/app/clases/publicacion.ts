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

    constructor() {
        this.rutaImagen ='http://localhost:666/img/uploads/publicaciones/'+this.imagen;
    }
}
