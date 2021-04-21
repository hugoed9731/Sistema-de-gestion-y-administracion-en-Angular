import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';
@Component({
  selector: 'app-placas-vincul',
  templateUrl: './placas-vincul.component.html',
  styleUrls: ['./placas-vincul.component.scss']
})
export class PlacasVinculComponent implements OnInit {

  perros: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterR = '';
  takeAction() {
    this.pageActual = 1;
  }

  constructor( private authService: AuthUService) { }

  ngOnInit() {

    this.cargando = true;
      this.authService.getPerros().subscribe( resp => { this.perros =
        resp; this.cargando = false; });
  }

}
