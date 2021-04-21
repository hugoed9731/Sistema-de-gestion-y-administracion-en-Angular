import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';

@Component({
  selector: 'app-orden-pago-pas',
  templateUrl: './orden-pago-pas.component.html',
  styleUrls: ['./orden-pago-pas.component.scss']
})
export class OrdenPagoPasComponent implements OnInit {

  constructor(   private authService: AuthUService ) { }

  Opaseadores: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterClaveib= '';

  // PI = Math.PI;
  takeAction() {
    this.pageActual = 1;
  }

  ngOnInit() {

    this.cargando = true;
      this.authService.getOrdenpaseador().subscribe( resp => {this.Opaseadores = 
        resp; this.cargando = false; }); 
  }

}
