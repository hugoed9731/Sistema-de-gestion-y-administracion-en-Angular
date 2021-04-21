import { Component, OnInit } from '@angular/core';
import { PaseadorModel } from '../../../models/paseador.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-det-pasead',
  templateUrl: './det-pasead.component.html',
  styleUrls: ['./det-pasead.component.scss']
})
export class DetPaseadComponent implements OnInit {

  paseador: PaseadorModel = new PaseadorModel();

  constructor(private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {

    const uid = this.route.snapshot.paramMap.get('uid');

    if (uid !== 'nuevo') {

      this.authService.getPaseador( uid).subscribe( (resp: PaseadorModel) => {
        this.paseador = resp;
        this.paseador.uid = uid;
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

    if ( this.paseador.uid ) {
      peticion = this.authService.actualizarPaseador( this.paseador);
    }
    // else {
    //   peticion = this.authService.actualizarUsuario( this.usuario);
    // }
      peticion.subscribe( resp => {
        Swal.fire({
            title: this.paseador.nombre,
            text: 'Se actualizo correctamente',
            icon: 'success'
        });
      });
    // console.log(form);
    // console.log(this.usuario);

  }
}



