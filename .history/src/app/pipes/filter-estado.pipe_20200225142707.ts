import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEstado'
})
export class FilterEstadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
