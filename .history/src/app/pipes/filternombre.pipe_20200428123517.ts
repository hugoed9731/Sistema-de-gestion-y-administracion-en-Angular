import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternombre'
})
export class FilternombrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
