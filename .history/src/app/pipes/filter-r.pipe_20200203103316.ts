import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterR'
})
export class FilterRPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for ( const post of  value) {
      if (post.ROL.indexOf(arg) > -1) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
