import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orden-pago-usu',
  templateUrl: './orden-pago-usu.component.html',
  styleUrls: ['./orden-pago-usu.component.scss']
})
export class OrdenPagoUsuComponent implements OnInit {

  Ousuarios: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;

  constructor( private authSerrvice: AuthService, private route: ActivatedRoute ) { }

  ngOnInit() {

    const order_id = this.route.snapshot.paramMap.get('order_id');

    this.cargando = true;
      this.authSerrvice.getOrdenusuarios(order_id).subscribe( resp => {this.Ousuarios = 
        resp; this.cargando = false; });
  }

}
