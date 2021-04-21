import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergnombre'
})
export class FiltergnombrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
