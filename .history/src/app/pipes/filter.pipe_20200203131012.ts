import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args === '' || args.length < 2 ) return value;
    const resultPosts = [];
    for (const post of value) {

      if ( post.uid.toLowerCase().indexOf(args.toLowerCase()) > -1 || post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ) {
        resultPosts.push(post);

      }

    }
     return resultPosts;
  }

}
