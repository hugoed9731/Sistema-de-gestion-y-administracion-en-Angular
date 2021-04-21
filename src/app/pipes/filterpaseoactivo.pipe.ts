import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpaseoactivo'
})
export class FilterpaseoactivoPipe implements PipeTransform {

  transform(usuarios: any, args: any): any {

    if(!args)
    return usuarios;
    {

    }
    var filtro = usuarios.filter(
      usuario => usuario.idPaseador.toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1

    );
    return filtro;
  }
// tslint:disable-next-line: eofline
}
