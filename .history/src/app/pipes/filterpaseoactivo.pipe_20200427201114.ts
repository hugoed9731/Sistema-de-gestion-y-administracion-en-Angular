import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpaseoactivo'
})
export class FilterpaseoactivoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
