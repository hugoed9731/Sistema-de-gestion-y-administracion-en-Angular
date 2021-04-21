import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  // public copy: string;
  usuario: UsuarioModel = new UsuarioModel();
  usuarios: UsuarioModel[] = [];
  constructor(private authService: AuthUService, private route: ActivatedRoute, private authSerrvice: AuthUService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.authService.getUsuarioj(id)
      .subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.id = id;
      });
    }
  }
  

  guardar( form: NgForm ) {
    if (form.invalid) {
      console.log('formulario invalido');
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable <any>;

    if ( this.usuario.id) {
peticion = this.authService.actualizarUsuario( this.usuario);

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

  if ( this.usuario.id) {
peticion = this.authService.banned_uids( this.usuario);

}

peticion.subscribe( resp => {

  
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
