import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterR'
})
export class FilterRPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2 ) { return value; }
    const resultPostsr = [];
    for (const post of value) {
      if ( post.rol.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostsr.push(post);
      }
    }
     return resultPostsr;
  }

}
