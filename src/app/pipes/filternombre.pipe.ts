import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternombre'
})
export class FilternombrePipe implements PipeTransform {

  transform(usuarios: any, args: any): any {

    if(!args)
    return usuarios;
    {

    }
    var filtro = usuarios.filter(
    // tslint:disable-next-line:max-line-length
    usuario => usuario.order_id .toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1

    );
    return filtro;
  }
// tslint:disable-next-line: eofline
}