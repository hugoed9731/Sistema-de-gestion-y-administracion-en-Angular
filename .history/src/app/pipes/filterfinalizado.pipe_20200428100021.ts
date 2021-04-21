import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfinalizado'
})
export class FilterfinalizadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
