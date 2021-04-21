import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      usuario => usuario.idPaseador.toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.email.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }
}

