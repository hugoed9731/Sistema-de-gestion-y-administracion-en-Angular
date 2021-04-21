import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergR'
})
export class FiltergRPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
