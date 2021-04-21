import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruidordr'
})
export class FilteruidordrPipe implements PipeTransform {

  transform(servicios: any, arg: any): any {
    if (arg === '' || arg.length < 1) return servicios;
    const resultPosts = [];
    for (const servicio of servicios) {
      if (servicio.order_id.toLowerCase().indexOf(arg.toLowerCase() ) > -1) {
        resultPosts.push(servicio);
      };
    };
    return resultPosts;
  } 

}
