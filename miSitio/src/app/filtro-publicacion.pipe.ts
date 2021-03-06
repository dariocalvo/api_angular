import { Pipe, PipeTransform } from '@angular/core';
import { Publicacion } from './clases/publicacion';

@Pipe({
  name: 'filtroPublicacion'
})
export class FiltroPublicacionPipe implements PipeTransform {

  transform(value: Publicacion[], filtro: string): Publicacion[] {
    if ((filtro??"")=="") return value;
    return value.filter(p => p.username.toUpperCase().indexOf(filtro.toUpperCase()) > -1);
  }

}
