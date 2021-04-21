import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNombre'
})
export class FilterNombrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
