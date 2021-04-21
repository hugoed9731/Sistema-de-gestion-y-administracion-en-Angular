import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruid'
})
export class FilteruidPipe implements PipeTransform {

  transform(usuarios: any, args: any): any {

    if(!args)
    return usuarios;
    {

    }
    var filtro = usuarios.filter(
      usuario => usuario.uid.toLowerCase().indexOf(args.toLowerCase()) > -1 || usuario.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1

    );
    return filtro;
  }
// tslint:disable-next-line: eofline
}