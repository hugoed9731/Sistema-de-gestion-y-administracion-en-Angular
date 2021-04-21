import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';
import { PaseadorModel } from '../../../../.history/src/app/models/paseador.model_20200226171910';


@Component({
  selector: 'app-info-b-pasead',
  templateUrl: './info-b-pasead.component.html',
  styleUrls: ['./info-b-pasead.component.scss']
})
export class InfoBPaseadComponent implements OnInit {

  Paseadores: PaseadorModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterNombre = '';
  takeAction() {
    this.pageActual = 1;
  }

  constructor(private authSerrvice: AuthUService) { }

  ngOnInit() {

    this.cargando = true;
    this.authSerrvice.getPaseadores().subscribe( resp => { this.Paseadores  = 
      resp; this.cargando = false; });
  }

}
