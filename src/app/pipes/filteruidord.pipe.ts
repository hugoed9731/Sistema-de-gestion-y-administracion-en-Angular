import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruidord'
})
export class FilteruidordPipe implements PipeTransform {

  transform(servicios: any, args: any): any {

    if(!args)
    return servicios;
    {

    }
    var filtroo = servicios.filter(
      servicio => servicio.order_id.toLowerCase().indexOf(args.toLowerCase()) > -1 || servicio.uid.toLowerCase().indexOf(args.toLowerCase()) > -1

    );
    return filtroo;
  }
// tslint:disable-next-line: eofline
}