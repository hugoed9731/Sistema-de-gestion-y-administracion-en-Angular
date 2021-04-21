import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterR'
})
export class FilterRPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultPosts = [];
    for (const post of value) {
      if (post.uid.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }


}
