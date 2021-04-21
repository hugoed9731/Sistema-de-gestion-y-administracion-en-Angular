import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthUService } from 'src/app/services/auth-u.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cargando = false;
  pageActual: number = 1;
  filterPost = '';
  filterPostnom = '';
  constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) {



   }
   // tslint:disable-next-line:no-inferrable-types
   

   ngOnInit() {
     this.cargando = true;
     this.authSerrvice.getUsuariosj()
   .subscribe( resp => {

   this.usuarios = resp;
   this.cargando = false;
   });
   }
   takeAction(){
    this.pageActual=1;
   }
   borrarUsuario( usuario: UsuarioModel, i: number ) {

    Swal.fire({
      title: '¿Estas Seguro?',
      text: `Esta seguro que desea borrar a ${usuario.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value) {
        this.usuarios.splice(i, 1);
        this.authSerrvice.borrarUsuarioj(usuario.uid).subscribe();
      }
    
    });

  }
}

