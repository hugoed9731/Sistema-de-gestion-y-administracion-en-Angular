import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfinalizado'
})
export class FilterfinalizadoPipe implements PipeTransform {

  transform(usuarios: any, args: any): any {

    if(!args)
    return usuarios;
    {

    }
    var filtro = usuarios.filter(
      usuario => usuario.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.id_paseador.toLowerCase().indexOf(args.toLowerCase()) > -1

    );
    return filtro;
  }
// tslint:disable-next-line: eofline
}