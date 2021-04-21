import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      item => item.nombre.uid.toLowerCase().indexOf(args.toLowerCase()) > -1
// || item.uid.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }
}
