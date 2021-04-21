import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2 ) return value;
    const resultPostes = [];
    for (const post of value) {

      if ( post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostes.push(post);
  }

}

return resultPostes;
  }
}
