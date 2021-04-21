import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterR'
})
export class FilterRPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      item => item.idPerro.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.nombreContacto.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }
}
