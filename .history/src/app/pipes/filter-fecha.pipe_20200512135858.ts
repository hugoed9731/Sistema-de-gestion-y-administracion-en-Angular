import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFecha'
})
export class FilterFechaPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      item => item.regproceso.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }

}
