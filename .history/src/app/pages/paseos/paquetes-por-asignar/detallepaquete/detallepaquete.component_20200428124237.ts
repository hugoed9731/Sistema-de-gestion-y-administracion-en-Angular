import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaseoModel } from 'src/app/models/paseo.model';

@Component({
  selector: 'app-detallepaquete',
  templateUrl: './detallepaquete.component.html',
  styleUrls: ['./detallepaquete.component.scss']
})
export class DetallepaqueteComponent implements OnInit {

  paseo: PaseoModel = new PaseoModel();

  constructor(private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.authService.getPaseoag(id)
      .subscribe( (resp: PaseoModel) => {
        this.paseo = resp;
        this.paseo.id = id;
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

    if ( this.paseo.id) {
peticion = this.authService.actualizarPaseo( this.paseo);

}
  peticion.subscribe( resp => {

    Swal.fire({
      title: this.paseo.nombre,
      text: 'Se actualizo correctamente',
      icon: 'success'
    });
  });
}
}
