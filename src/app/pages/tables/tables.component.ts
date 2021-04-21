import { Component, OnInit} from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit   {

  usuarios: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterNombre = '';
  takeAction(){
    this.pageActual = 1;
  }
    constructor( private authService: AuthUService) {

    }
    ngOnInit() {
      this.cargando = true;
      this.authService.getUsuarios().subscribe( resp => {this.usuarios = 
        resp; this.cargando = false; });
    }


    borrarUsuario( usuario: UsuarioModel, i: number) {

      Swal.fire({
        title: '¿Esta seguro?',
        text: `Esta seguro que desea borrar a ${ usuario.nombre}`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true
      }).then( resp => {

        if ( resp.value) {
          this.usuarios.splice(i, 1);
          this.authService.borrarUsuario( usuario.uid).subscribe();
        }

      });

    }
}
