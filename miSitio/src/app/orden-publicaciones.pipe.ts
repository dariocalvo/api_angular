import { Pipe, PipeTransform } from '@angular/core';
import { Publicacion } from './clases/publicacion';

@Pipe({
  name: 'ordenPublicaciones'
})
export class OrdenPublicacionesPipe implements PipeTransform {

  transform(original: Publicacion[], orden: number): Publicacion[] {
  let value = JSON.parse(JSON.stringify(original)); 
    switch (orden){
      case 1:
        return value.sort();
      case 2:
        return value.sort().reverse();
      default:
        return value;  
    }
  }
}
