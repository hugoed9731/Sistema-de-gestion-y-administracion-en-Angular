import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-editcost',
  templateUrl: './editcost.component.html',
  styleUrls: ['./editcost.component.scss']
})
export class EditcostComponent implements OnInit {

  costo: UsuarioModel = new UsuarioModel();

  constructor( private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {

    const uid = this.route.snapshot.paramMap.get('uid');

    if (uid !== 'nuevo') {

      this.authService.getCosto( uid)
      .subscribe( (resp: UsuarioModel) => {
        this.costo = resp;
        this.costo.uid = uid;
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

    if ( this.costo.uid ) {
      peticion = this.authService.actualizarCosto( this.costo);
    }
    // else {
    //   peticion = this.authService.actualizarUsuario( this.usuario);
    // }
      peticion.subscribe( resp => {
        Swal.fire({
            title: this.costo.tipo,
            text: 'Se actualizo correctamente',
            icon: 'success'
        });
      });
    // console.log(form);
    // console.log(this.usuario);

  }

}
