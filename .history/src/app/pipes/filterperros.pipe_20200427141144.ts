import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterperros'
})
export class FilterperrosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
