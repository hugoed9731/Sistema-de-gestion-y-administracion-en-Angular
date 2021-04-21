import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterj'
})
export class FilterjPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
