import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-detalles-pas',
  templateUrl: './detalles-pas.component.html',
  styleUrls: ['./detalles-pas.component.scss']
})
export class DetallesPasComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();

  constructor(  private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {

    const order_id = this.route.snapshot.paramMap.get('order_id');

    if (order_id !== 'nuevo') {

      this.authService.getUsuario( order_id).subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.order_id = order_id;
      });
    }
  }
  }


