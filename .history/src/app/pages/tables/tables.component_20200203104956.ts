import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
// import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
// import { AngularFireDatabase } from '@angular/fire/database';
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
  // filterPost = '';
  filterRol: '';

  //      // // tslint:disable-next-line:variable-name
  // Usuarios_Sistema: Observable<any[]>;
  // // //  public usuario: Observable<any[]>;

  // db: AngularFireDatabase,
    constructor( private authService: AuthUService) {
  
      //  this.Usuarios_Sistema = db.list('Usuarios_Sistema').valueChanges();

    }
    ngOnInit() {
      this.cargando = true;
      this.authService.getUsuarios().subscribe( resp => {this.usuarios = 
        resp; this.cargando = false; }); 
        // console.log(resp);
        // this.usuarios = resp;
        // this.cargando = false;
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
