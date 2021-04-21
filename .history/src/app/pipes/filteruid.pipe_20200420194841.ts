import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruid'
})
export class FilteruidPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
