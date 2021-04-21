import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNombre'
})
export class FilterNombrePipe implements PipeTransform {



  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      item => item.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.uid.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }
}
//   transform(value: any, arg: any): any {
//     if (arg === '' || arg.length < 2) { return value; }
//     const resultPostrol = [];
//     for (const post of value) {

//       if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
//         resultPostrol.push(post);
//       }
//     }
//     return resultPostrol;
//   }


// }
