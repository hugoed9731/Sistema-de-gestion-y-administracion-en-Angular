import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterR'
})
export class FilterRPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultPostrol = [];
    for (const post of value) {

      if (post.uid.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostrol.push(post);
      }
    }
    return resultPostrol;
  }


}
