import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('id');
    const order_id = this.route.snapshot.paramMap.get('order_id');
    if ( uid !== 'nuevo') {
      this.authService.getUsuariopaseo(uid, order_id)
      .subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.uid = uid;
        this.usuario.order_id = order_id;
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
peticion = this.authService.actualizarUsuarioj( this.usuario);

}

  peticion.subscribe( resp => {

    Swal.fire({
      title: this.usuario.nombre,
      text: 'Se actualizo correctamente',
      icon: 'success'
    });
  });
}
}
