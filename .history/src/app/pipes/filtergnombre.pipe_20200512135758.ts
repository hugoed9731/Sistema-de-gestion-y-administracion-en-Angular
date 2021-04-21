import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergnombre'
})
export class FiltergnombrePipe implements PipeTransform {

  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("Nom:"+args); }



    var filtro = value.filter(
      usuario => usuario.idPaseador.toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }

}

