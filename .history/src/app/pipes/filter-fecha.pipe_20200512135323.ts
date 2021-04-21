import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFecha'
})
export class FilterFechaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
