import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBanco'
})
export class FilterBancoPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if(!args)
     return value;
     {    console.log("arg"+args); }



    var filtro = value.filter(
      item => item.uid.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.uid.toLowerCase().indexOf(args.toLowerCase()) > -1
   );

  return filtro;

  }
}