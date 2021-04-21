import { Component, OnInit } from '@angular/core';

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

  constructor( private authSerrvice: AuthService ) { }

  ngOnInit() {


    this.cargando = true;
      this.authSerrvice.getOrdenusuarios().subscribe( resp => {this.Ousuarios = 
        resp; this.cargando = false; }); 
  }

}
