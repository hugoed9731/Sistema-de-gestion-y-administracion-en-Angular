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
      item => item.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }


}
