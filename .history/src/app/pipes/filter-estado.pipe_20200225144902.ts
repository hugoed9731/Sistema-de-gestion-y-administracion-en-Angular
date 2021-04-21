import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEstado'
})
export class FilterEstadoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultPostactivo = [];
    for (const post of value) {

      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostactivo.push(post);
      }
    }
    return resultPostactivo;
  }


}
