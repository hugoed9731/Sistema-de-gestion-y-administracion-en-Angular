import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import {NgForm} from '@angular/forms';
// import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: UsuarioModel[] = [];

  constructor( private authService: AuthUService,
    private route: ActivatedRoute,private authSerrvice: AuthUService) { }

  ngOnInit() {


    const uid = this.route.snapshot.paramMap.get('uid');

    if (uid !== 'nuevo') {

      this.authService.getUsuario( uid).subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.uid = uid;
      });
    }
  }
    guardar( form: NgForm) {
      if ( form.invalid) { console.log('Formulario no valido');
        return;
      }
      Swal.fire({
        title: 'Espere',
        text: 'Guardando Informacion',
        icon: 'info',
        allowOutsideClick: false
      });

      Swal.showLoading();

      let peticion: Observable<any>;


      if ( this.usuario.uid ) {
        peticion = this.authService.actualizarUsuario( this.usuario);
      } else {
        peticion = this.authService.actualizarUsuario(this.usuario);
      }
        peticion.subscribe( resp => {
          Swal.fire({
              title: this.usuario.nombre,
              text: 'Se actualizo correctamente',
              icon: 'success'
          });
        });
    }
    guardarbanned( form: NgForm ) {

      let peticion: Observable <any>;
      if ( this.usuario.uid) {
    peticion = this.authService.banned_uids( this.usuario);
    }
    peticion.subscribe( resp => {
      Swal.fire({
        title: 'Espere',
        text: 'Usuario Inactivo',
        icon: 'success'
    });
    });
    }

    borrarUsuariobaner( usuario: UsuarioModel, i: number ) {
      
       Swal.fire({
        title: '¿Estas Seguro?',
        text: `Esta seguro que desea habilitar a  ${usuario.nombre}`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true
      }).then( resp => {
        if (resp.value) {
          this.usuarios.splice(i, 1);
          this.authSerrvice.borrarUsuariobaner(usuario.uid).subscribe();
        }

      });
    }
}